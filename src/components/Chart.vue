<template>
  <Line
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
)

export default {
  name: 'LineChart',
  components: { Line },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 150
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {
      }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
            {
            label: "Received",
            backgroundColor: "#f87979",
            borderColor: "#f87979",
            pointBackgroundColor: "#fff",
            borderWidth: 1,
            pointBorderColor: "#f87979",
            data: [4000, 3900, 1000, 4000, 3912, 8000, 4050]
            },
            {
            label:"Sent",
            backgroundColor: "#00a79d",
            borderColor: "#00a79d",
            pointBackgroundColor: "#fff",
            borderWidth: 1,
            pointBorderColor: "#00a79d",
            data: [6000, 2900, 7000, 9000, 1912, 5000, 2050]
            }
      ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>