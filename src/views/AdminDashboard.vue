<template>
    <div class="dashboard">
        <Sidebar>
            <MenuItem link="/" title="TUIT Practice" :hasImg="true" imgURL="images/tuit_logo.jpg" alt="" />
            <MenuItem link="/" title="Dashboard" iconClass="fa-solid fa-house" />
            <MenuItem link="/" title="Teachers" iconClass="fa-solid fa-person-chalkboard" />
            <MenuItem link="/" title="Students" iconClass="fa-solid fa-user-graduate" />
            <MenuItem link="/" title="Reports" iconClass="fa-solid fa-comment" />
            <MenuItem link="/" title="Help" iconClass="fa-regular fa-circle-question" />
            <MenuItem link="/" title="Settings" iconClass="fa-solid fa-gear" />
            <MenuItem link="/" title="Logout" iconClass="fa-solid fa-right-from-bracket" />
            <MenuItem link="/" title="Logout" iconClass="fa-solid fa-right-from-bracket"></MenuItem>

        </Sidebar>
        <div class="main" :class="{ 'toggled': toggled }">
            <Navbar fullname="Xamidjonov Islom" role="ADMIN" image="images/student3.jpeg" @toggled="toggled = !toggled" />

            <div class="card-container">
                <Card width="calc(100% / 3)" cardName="Total Teachers" :cardNumber="244"
                    iconClass="fa-solid fa-person-chalkboard" />
                <Card width="calc(100% / 3)" cardName="Total Students" :cardNumber="1080"
                    iconClass="fa-solid fa-user-graduate" />
                <Card width="calc(100% / 3)" cardName="Total Reports" :cardNumber="21335" iconClass="fa-solid fa-book" />
            </div>

            <div class="details">
                <div class="recent-reports">
                    <div class="table-title">
                        <h2>Recent Reports</h2>
                        <a href="#" class="btn"><i class="fa-regular fa-eye"></i> View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Student Fullname</th>
                                <th>Report Name</th>
                                <th>Submitted Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(report, index) in reports" :key="report.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ report.studentFullName }}</td>
                                <td>{{ report.reportTitle }}</td>
                                <td>{{ report.submittedDate }}</td>
                                <td><span class="status" :class="[`${report.status.toLocaleLowerCase()}`]">{{ report.status }}</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="recent-users">
                    <div class="table-title">
                        <h2>Recent Online Users</h2>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Xamidjonov Islom</h4>
                                </td>
                                <td>Teacher</td>
                                <td> <span></span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Karimova Gavhar</h4>
                                </td>
                                <td>Teacher</td>
                                <td> <span></span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Abdumannonov Bexzod</h4>
                                </td>
                                <td>Student</td>
                                <td> <span>KIF 211-20</span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>David</h4>
                                </td>
                                <td>Student</td>
                                <td> <span>AXF 301-23</span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Xamidjonov Islom</h4>
                                </td>
                                <td>Teacher</td>
                                <td> <span></span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Karimova Gavhar</h4>
                                </td>
                                <td>Student</td>
                                <td> <span>KIF 211-20</span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Abdumannonov Bexzod</h4>
                                </td>
                                <td>Teacher</td>
                                <td> <span></span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Xamidjonov Islom</h4>
                                </td>
                                <td>Teacher</td>
                                <td> <span></span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Karimova Gavhar</h4>
                                </td>
                                <td>Student</td>
                                <td> <span>KIF 211-20</span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Abdumannonov Bexzod</h4>
                                </td>
                                <td>Teacher</td>
                                <td> <span></span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>David</h4>
                                </td>
                                <td>Student</td>
                                <td> <span>DIF 231-21</span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Xamidjonov Islom</h4>
                                </td>
                                <td>Teacher</td>
                                <td> <span></span></td>
                            </tr>
                            <tr>
                                <td width="60px">
                                    <div class="img-box"><img src="../../public/images/student1.jpeg" alt=""></div>
                                </td>
                                <td>
                                    <h4>Ilmuratov Doston</h4>
                                </td>
                                <td>Student</td>
                                <td> <span>KIF 211-20</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import MenuItem from '@/components/MenuItem.vue';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import CardContainer from '@/components/CardContainer.vue';
import Card from '@/components/Card.vue';



export default {
    name: 'AdminDashboard',
    components: {
        Sidebar,
        MenuItem,
        Navbar,
        CardContainer,
        Card
    },
    methods: {

    },
    data() {
        return {
            toggled: false,
            reports: [
                {
                    id: 1,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 1',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Submitted'
                },
                {
                    id: 2,
                    studentFullName: 'John Smith',
                    reportTitle: 'Report 2',
                    submittedDate: '12.09.2023 04:42 PM',
                    status: 'Rejected'
                },
                {
                    id: 3,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 3',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Accepted'
                },
                {
                    id: 4,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 3',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Submitted'
                },
                {
                    id: 5,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 3',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Accepted'
                },
                {
                    id: 6,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 3',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Rejected'
                },
                {
                    id: 7,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 3',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Submitted'
                },
                {
                    id: 8,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 3',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Accepted'
                },
                {
                    id: 9,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 3',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Accepted'
                },
                {
                    id: 10,
                    studentFullName: 'John Doe',
                    reportTitle: 'Report 3',
                    submittedDate: '12.09.2023 04:56 PM',
                    status: 'Submitted'
                },
            ]
        }
    }
}
</script>
<style scoped>
.dashboard {
    position: relative;
    width: 100%;
}


.main {
    position: absolute;
    width: calc(100% - 264px);
    left: 264px;
    min-height: 100vh;
    background: #d6e1f1;
    transition: 0.5s;
}

.main.toggled {
    width: calc(100% - 60px);
    left: 60px;
}

.card-container {
    width: 100%;
    padding: 20px;
    display: flex;
    grid-gap: 20px;
}

.details {
    position: relative;
    width: 100%;
    padding: 20px;
    padding-top: 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 2fr 1fr;
}

.details .recent-reports {
    position: relative;
    min-height: 530px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
}

.details .table-title {
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.table-title h2 {
    font-weight: 600;
}

.btn {
    position: relative;
    padding: 5px 10px;
    background: #067702;
    color: #fff;
    text-decoration: none;
    border-radius: 6px;
}

.details .recent-users {
    position: relative;
    min-height: 530px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
}

.details .recent-users .img-box {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}

.details .recent-users .img-box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.details.recent-users table tbody tr {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.details .recent-users table tr td h4 span {
    font-size: 14px;
    color: #999;
}

.details .recent-users table tr td:nth-child(3) {
    color: green;
}

.details .recent-users table tr:hover,
.details .recent-users table tr:hover td,
.details .recent-users table tr:hover td h4 span {
    cursor: pointer;
    background: #003147;
    color: #fff;
}

.details .recent-users table tr td {
    padding: 7px 10px;
}

.details .recent-users table tr td h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2em;
}
</style>