<template>
  <q-page class="page-wrap q-pa-md">
    <div class="row items-center justify-between q-mb-md">
      <div>
        <div class="text-h5 text-weight-bold">Analytics Dashboard</div>
        <div class="text-subtitle2 text-grey-7">Interactive chart and filter form</div>
      </div>
      <q-badge color="primary" text-color="white" label="Live View" />
    </div>

    <div class="row q-col-gutter-lg">
      <div class="col-12 col-lg-8">
        <q-card flat bordered class="panel-card">
          <q-card-section class="q-pb-sm">
            <div class="text-subtitle1 text-weight-medium">Performance Chart</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div id="myDiv" style="width: 100%; height: 460px" />
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-lg-4">
        <q-card flat bordered class="panel-card">
          <q-card-section class="q-pb-sm">
            <div class="text-subtitle1 text-weight-medium">Filters</div>
          </q-card-section>
          <q-separator />

          <q-card-section>
            <q-form @submit.prevent="handleSubmit">
              <q-input
                v-model="formData.name"
                label="Name"
                outlined
                dense
                class="q-mb-md"
                placeholder="Enter text"
              />

              <q-file
                v-model="formData.file"
                label="Upload File"
                outlined
                dense
                clearable
                class="q-mb-md"
              />

              <q-select
                v-model="formData.selectedOption"
                :options="selectOptions"
                label="Category"
                outlined
                dense
                emit-value
                map-options
                class="q-mb-md"
              />

              <q-checkbox v-model="formData.accepted" label="Accept terms" class="q-mb-md" />

              <div class="text-caption text-grey-7 q-mb-xs">Chart Type</div>
              <q-option-group
                v-model="formData.radioChoice"
                :options="radioOptions"
                type="radio"
                color="primary"
                inline
                class="q-mb-lg"
              />

              <div class="row q-col-gutter-sm">
                <div class="col">
                  <q-btn type="submit" label="Apply" color="primary" class="full-width" />
                </div>
                <div class="col">
                  <q-btn
                    label="Reset"
                    color="grey-7"
                    flat
                    class="full-width"
                    @click="resetForm"
                  />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { renderPlotlyChart } from 'src/utils/plotlyChart'

const formData = ref({
  name: '',
  file: null,
  selectedOption: 'option1',
  accepted: false,
  radioChoice: 'option1',
})

const selectOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

const radioOptions = [
  { label: 'Line', value: 'option1' },
  { label: 'Smooth', value: 'option2' },
]

function handleSubmit() {
  renderPlotlyChart('myDiv')
}

function resetForm() {
  formData.value = {
    name: '',
    file: null,
    selectedOption: 'option1',
    accepted: false,
    radioChoice: 'option1',
  }
}

onMounted(() => {
  renderPlotlyChart('myDiv')
})
</script>

<style scoped>
.page-wrap {
  background: #f7f8fa;
}

.panel-card {
  border-radius: 12px;
  background: #ffffff;
}
</style>
