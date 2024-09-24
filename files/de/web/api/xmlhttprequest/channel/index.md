---
title: "XMLHttpRequest: channel-Eigenschaft"
short-title: channel
slug: Web/API/XMLHttpRequest/channel
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

XMLHttpRequest.channel ist ein `nsIChannel`, das von dem Objekt verwendet wird, wenn die Anfrage ausgeführt wird. Dies ist `null`, wenn der Kanal noch nicht erstellt wurde. Bei einer mehrteiligen Anfrage ist dies der anfängliche Kanal, nicht die verschiedenen Teile der mehrteiligen Anfrage. **Erfordert erweiterte Berechtigungen zum Zugriff.**
