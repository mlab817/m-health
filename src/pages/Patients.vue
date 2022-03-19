<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">Registered Patients</div>
      </q-card-section>
      <q-card-section>
        <q-table wrap-cells :rows="filteredPatients" :columns="columns" :loading="loading">
          <template #top-right>
            <q-input outlined dense v-model="search" placeholder="Search patients...">
              <template #append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template #body-cell-action="props">
            <q-td :props="props" class="text-center">
              <q-btn outline color="negative" size="sm" @click.stop="deletePatient(props.row.id)">Delete User</q-btn>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {computed, defineComponent, onMounted, ref} from "vue";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "boot/firebase";
import {Dialog} from "quasar";

export default defineComponent({
  setup() {
    const patients = ref([])
    const loading = ref(true)
    const search = ref('')

    const columns =[
      {
        name: 'name',
        label: 'Name',
        field: row => `${row.lastName}, ${row.firstName} ${row.middleName}`,
        sortable: true
      },
      {
        name: 'age',
        label: 'Age',
        field: 'age',
        sortable: true
      },
      {
        name: 'contactNumber',
        label: 'Contact No.',
        field: 'contactNumber',
        sortable: true
      },
      {
        name: 'email',
        label: 'Email',
        field: 'email',
        sortable: true
      },
      {
        name: 'address',
        label: 'Address',
        field: 'address',
        sortable: true
      },
      {
        name: 'action',
        label: 'Action'
      },
    ]

    const getPatients = async () => {
      const querySnapshot = await getDocs(collection(db, 'users'));

      let result = []

      querySnapshot.forEach(doc => {
        result.push({
          ...doc.data(),
          id: doc.id
        })
      })

      patients.value = result
      loading.value = false
    };

    const filteredPatients = computed(() => {
      if (search.value) {
        const searchValue = search.value.toLowerCase()

        return patients.value.filter(p => {
          return p.lastName.toLowerCase().includes(searchValue)
            || p.firstName.toLowerCase().includes(searchValue)
        })
      }
      return patients.value
    })

    const deletePatient = (userId) => {
      console.log(userId)
      // add delete logic here
      // you can also reload the list after deleting by calling getUsers
      // or you can splice it from the array to make it disappear without reloading the page
      Dialog.create({
        message: 'Are you sure you want to delete this patient? This action cannot be undone.',
        cancel: true
      })
    }

    onMounted(() => {
      getPatients()
    })

    return {
      patients,
      columns,
      loading,
      deletePatient,
      search,
      filteredPatients
    }
  }
});
</script>
