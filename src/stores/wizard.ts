// State store (Pinia).  single source of truth.
import { defineStore } from 'pinia'

export type Goal = { id: string; title: string; done: boolean }
export type Task = { id: string; text: string; emoji?: string }

export const useWizardStore = defineStore('wizard', {
  state: () => ({
    // exec perf data goes here
    executionPercent: 57,
    trend: { dir: 'up' as 'up' | 'down', delta: 30 },
    kpis: [
      { title: 'PARTIALLY COMPLETE', value: 38, trend: 'up' },
      { title: 'RAN OUT OF TIME', value: 15, trend: 'up' },
      { title: 'INCORRECTLY SET', value: 17, trend: 'up' },
      { title: "DIDN'T WANT TO", value: 6, trend: 'down' },
      { title: 'PARTIALLY COMPLETE', value: 38, trend: 'up' },
      { title: 'RAN OUT OF TIME', value: 15, trend: 'up' },
      { title: 'INCORRECTLY SET', value: 17, trend: 'up' },
      { title: "DIDN'T WANT TO", value: 6, trend: 'down' },
    ] as Array<{ title: string; value: number; trend: 'up' | 'down' }>,
    //goals 
    goals: [
      { id: 'g1', title: 'Meditate every morning', done: true },
      { id: 'g2', title: 'Buy new desk', done: true },
      { id: 'g3', title: 'Launch new website', done: true },
      { id: 'g4', title: 'Sort travel to Bangkok', done: false },
      { id: 'g5', title: 'Make 3 sales', done: true },
    ] as Goal[],
    categories: [57, 33, 90, 10, 50],
    // tasks 
    tasks: [
      { id: 't1', text: 'Update Forzeit packages with ones in client base', emoji: '👾' },
      { id: 't2', text: 'Wake up and 10 minute meditation', emoji: '😊' },
      { id: 't3', text: 'Update Forzeit packages with ones in client base', emoji: '👾' },
      { id: 't4', text: 'Wake up and 10 minute meditation', emoji: '🙂' },
      { id: 't5', text: 'Update Forzeit packages with ones in client base', emoji: '👾' },
      { id: 't6', text: 'Update Forzeit packages with ones in client base', emoji: '👾' },
    ] as Task[],
  }),
  actions: {
    removeGoal(id: string) {
      //console.log('removing goal id:', id)
      this.goals = this.goals.filter(g => g.id !== id)
    },
  },
})
