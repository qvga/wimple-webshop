<?php
app('debugbar')->disable();
echo <<< END
{
  "name": "Wimple",
  "short_name": "wimple",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#4DBA87",
  "theme_color": "#4DBA87",
  "icons": [
    {
      "src": "/img/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/img/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
END;
