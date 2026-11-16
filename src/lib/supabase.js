import { createClient } from '@supabase/supabase-js'

// تنظیمات Supabase - این مقادیر را از داشبورد Supabase خود بگیرید
const supabaseUrl = 'https://jjidyjbvsivalwepyeie.supabase.co'
const supabaseKey = 'sb_publishable_e_DaPWZuuvEv6MNXAAaoyg_j8y2yD5o'

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        storageKey: 'samaneh-admin-auth'
    }
})