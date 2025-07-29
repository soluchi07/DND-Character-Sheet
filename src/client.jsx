import { createClient } from '@supabase/supabase-js'

const URL = 'https://ahvhkmgkgnlavyubdxnh.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFodmhrbWdrZ25sYXZ5dWJkeG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTE1MjYsImV4cCI6MjA2ODg4NzUyNn0.8qxtGjoWTxUbuh6ves6Z91rX0pNOpGjoxPG6YBMO06Q'

export const supabase = createClient(URL, API_KEY)