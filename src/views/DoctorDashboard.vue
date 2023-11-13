<template>
    <div class="doctor-dashboard">
        <div class="sidebar">
            <ul>
                <li
                    v-for="(module, index) in modules"
                    :key="index"
                    @click="selectModule(index)"
                    :class="{ active: index === selectedModuleIndex }"
                >
                    {{ module.title }}
                </li>
            </ul>
            <div style="flex: 1"></div>
            <div class="user-info">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-person-vcard"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"
                    />
                    <path
                        d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"
                    />
                </svg>
                <p>chic</p>
                <div style="flex:1"></div>
                <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon-sm flex-shrink-0 text-gray-500 gizmo:hidden"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                </svg>
            </div>
        </div>

        <div class="main">
            <div class="topbar">
                <h1>MedManage</h1>
            </div>
            <div class="panel">
                <component :is="modules[selectedModuleIndex].component" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import PatientManagementModule from '@/components/PatientManagementModule.vue';
import AppointmentManagementModule from '@/components/AppointmentManagementModule.vue';
import MedicalOrderModule from '@/components/MedicalOrderModule.vue';
import DrugManagementModule from '@/components/DrugManagementModule.vue';
import StatisticsModule from '@/components/StatisticsModule.vue';
import UserProfileModule from '@/components/UserProfileModule.vue';
// Import other modules...

export default {
    name: 'DoctorDashboard',
    components: {
        PatientManagementModule,
        AppointmentManagementModule,
        MedicalOrderModule,
        DrugManagementModule,
        StatisticsModule,
        UserProfileModule
        // Other modules...
    },
    data() {
        return {
            modules: [
                { title: '患者管理', component: 'PatientManagementModule' },
                { title: '预约管理', component: 'AppointmentManagementModule' },
                { title: '医嘱管理', component: 'MedicalOrderModule' },
                { title: '药品管理', component: 'DrugManagementModule' },
                { title: '数据分析', component: 'StatisticsModule' }
                // Add other modules...
            ],
            selectedModuleIndex: 0
        };
    },
    methods: {
        selectModule(index: number) {
            this.selectedModuleIndex = index;
        }
    }
};
</script>

<style scoped>
.doctor-dashboard {
    display: flex;
    height: 100vh;
}

.topbar {
    background-color: #296097;
    color: #ecf0f1;
    height: 60px;
    text-align: center;
    display: flex;
    align-items: center;
}

.topbar h1 {
    flex: 1;
    margin: 0;
    font-weight: 300;
    font-size: 20px;
}

.sidebar {
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 0.5rem;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar li {
    cursor: pointer;
    padding: 20px;
    transition: background-color 0.3s;
}

.sidebar li:hover {
    background-color: #34495e;
}

.sidebar li.active {
    background-color: #1abc9c;
}

.main {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
}

.panel {
    flex: 1;
    text-align: center;
    padding: 20px;
}

.user-info {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 12px;
    border-top: 1px solid hsla(0, 0%, 100%, 0.2);
}

.user-info:hover {
    background-color: #34495e;
    cursor: pointer;
}

.user-info p {
    margin: 0;
    padding: 12px;
    /* font-size: .875rem; */
    line-height: 1.25rem;
}
</style>
