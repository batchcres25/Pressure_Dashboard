.ingest into Table123 (@"source1", @"source2")
  with
  (
      format = "json",
      ingestionMapping =
      ```
      [
        {"column":"Pressure_SP", "Properties":{"path":"$.Pressure_SP"}},  
        {"column":"Pressure_PV", "Properties":{"path":"$.Pressure_PV"}},  
        {"column":"Pressure_MV", "Properties":{"path":"$.Pressure_MV"}},  
        {"column":"EventProcessedUtcTime", "Properties":{"path":"$.EventProcessedUtcTime"}},  
        {"column":"PartitionId", "Properties":{"path":"$.PartitionId"}},  
        {"column":"EventEnqueuedUtcTime", "Properties":{"path":"$.EventEnqueuedUtcTime"}},  
        {"column":"ConnectionDeviceId", "Properties":{"path":"$.IoTHub.ConnectionDeviceId"}},  
        {"column":"ConnectionDeviceGenerationId", "Properties":{"path":"$.IoTHub.ConnectionDeviceGenerationId"}},  
        {"column":"EnqueuedTime", "Properties":{"path":"$.IoTHub.EnqueuedTime"}}  
]   
  )


.create table PressureData ingestion json mapping "PressureMapping" 
    [
        {"column":"Pressure_SP", "Properties":{"path":"$.Pressure_SP"}},
        {"column":"Pressure_PV", "Properties":{"path":"$.Pressure_PV"}},
        {"column":"Pressure_MV", "Properties":{"path":"$.Pressure_MV"}},
        {"column":"EventProcessedUtcTime", "Properties":{"path":"$.EventProcessedUtcTime"}},
        {"column":"PartitionId", "Properties":{"path":"$.PartitionId"}},
        {"column":"EventEnqueuedUtcTime", "Properties":{"path":"$.EventEnqueuedUtcTime"}},
        
46e0a7f8-3125-458d-8747-518653107bb9
1 of 1 problem
Missing string(KS006)


Error

Syntax error: 

 clientRequestId: Kusto.Web.KWE.Query;e1bfa554-159c-4182-b64c-3f08021eee71;b7690461-c947-43d8-bc82-64680c9f2549