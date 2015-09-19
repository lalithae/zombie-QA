ServiceConfiguration.configurations.remove({
    service: 'facebook'
});
 
ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '1498900753754443',
    secret: '0419b8c3e421b0f466315660691fd84b'
});

ServiceConfiguration.configurations.remove({
  service: "google"
});
ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "319490404116-7qc52ebkdsf1o00gecasthaa5k8s2oe1.apps.googleusercontent.com",
  secret: "KvmmR9uqZwNdsU-aJ4ct_fXj"
});