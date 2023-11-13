<template>
    <div class="patient-list">
        <div
            v-for="patient in patients"
            :key="patient.id"
            @click="showPatientDetails(patient)"
        >
            <img :src="patient.avatar" alt="Patient Avatar" />
            <div class="patient-info">
                <h3>{{ patient.name }}</h3>
                <p>ID: {{ patient.id }}</p>
                <!-- Add other patient information as needed -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Patient } from '../classes/Patient';
export default {
    name: 'PatientList',
    props: {
        patients: {
            type: Array as () => Patient[],
            required: true
        }
    },
    methods: {
        showPatientDetails(patient: Patient) {
            // Emit an event to parent component to show patient details
            this.$emit('show-details', patient);
        }
    }
};
</script>

<style scoped>
.patient-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.patient-info {
    margin-left: 10px;
}

/* Add your specific styles for the patient list here */
</style>
