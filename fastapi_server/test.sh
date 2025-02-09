curl -X POST "http://127.0.0.1:8000/predict/" \
     -H "Content-Type: application/json" \
     -d '{
          "tag": "li",
          "id": "check-scoring",
          "classes": "",
          "attributes": "[{\"name\": \"class\", \"value\": \"reference internal\"}, {\"name\": \"href\", \"value\": \"sklearn.gaussian_process.kernels.WhiteKernel.html\"}]",
          "bounding_x": -413.5,
          "bounding_y": -5.3125,
          "bounding_width": 215.33334350585938,
          "bounding_height": 37.04166793823242
        }'
