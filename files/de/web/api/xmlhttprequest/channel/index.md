---
title: "XMLHttpRequest: channel-Eigenschaft"
short-title: channel
slug: Web/API/XMLHttpRequest/channel
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

XMLHttpRequest.channel ist ein `nsIChannel`, das von dem Objekt bei der Durchführung der Anforderung verwendet wird. Dies ist `null`, wenn der Kanal noch nicht erstellt wurde. Im Falle einer Mehrteil-Anforderung ist dies der initiale Kanal, nicht die verschiedenen Teile der Mehrteil-Anforderung. **Erfordert erhöhte Berechtigungen für den Zugriff.**
