# Gunakan base image Nginx yang sangat ringan dari Alpine Linux
FROM nginx:alpine

# Hapus file konfigurasi default Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Salin file-file dari repositori Anda ke dalam direktori web root Nginx
# Asumsi semua file Anda (index.html, src/, dll.) ada di root repo
COPY . /usr/share/nginx/html

# Beritahu Docker bahwa container akan berjalan di port 80
EXPOSE 80

# Perintah default Nginx akan otomatis dijalankan, jadi tidak perlu CMD