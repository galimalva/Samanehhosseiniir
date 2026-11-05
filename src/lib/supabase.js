import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jjidyjbvsivalwepyeie.supabase.co'
const supabaseKey = 'sb_publishable_e_DaPWZuuvEv6MNXAAaoyg_j8y2yD5o'

export const supabase = createClient(supabaseUrl, supabaseKey)