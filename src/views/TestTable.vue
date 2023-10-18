<template>
    <div style="margin: 10px 20px;">
        <table>
            <thead>
                <tr>
                    <th v-for="item in tableHeader">
                        {{ item }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in tableData">
                    <td v-for="col in Object.values(row)">{{ col }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
export default {
    name: 'TestTable',
    components: {
    },
    data() {
        return {
            tableHeader: ['№', 'fullname', 'age'],
            tableData: [
                {
                    id: 1,
                    fullname: 'John Doe',
                    age: 25
                },
                {
                    id: 2,
                    fullname: 'Jane Doe',
                    age: 26
                },
                {
                    id: 3,
                    fullname: 'Jane Smith',
                    age: 27
                }
            ]
        }
    }

}
</script>
<style scoped>
    
</style>