---
title: "XMLHttpRequest: channel-Eigenschaft"
short-title: channel
slug: Web/API/XMLHttpRequest/channel
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

XMLHttpRequest.channel ist ein `nsIChannel`, das vom Objekt verwendet wird, wenn die Anfrage ausgeführt wird. Dies ist `null`, wenn der Kanal noch nicht erstellt wurde. Im Fall einer Multipart-Anfrage ist dies der initiale Kanal, nicht die verschiedenen Teile der Multipart-Anfrage. **Erfordert erhöhte Berechtigungen, um darauf zuzugreifen.**
