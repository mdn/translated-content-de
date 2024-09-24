---
title: "PresentationConnectionAvailableEvent: Eigenschaft connection"
short-title: connection
slug: Web/API/PresentationConnectionAvailableEvent/connection
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn eine eingehende Verbindung erstellt wird, löst ein [empfangender User-Agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) aus, das [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) genannt wird, auf einem [`PresentationReceiver`](https://www.w3.org/TR/presentation-api/#idl-def-presentationreceiver). Das [vertrauenswürdige Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) wird am [Monitor des Präsentations-Controllers](https://www.w3.org/TR/presentation-api/#dfn-presentation-controllers-monitor) ausgelöst und verwendet das [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent) Interface, wobei das [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection) Attribut auf das erstellte [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) Objekt gesetzt ist.

Das Ereignis wird für alle Verbindungen ausgelöst, die erstellt werden, wenn [eingehende Präsentationsverbindungen überwacht werden](https://www.w3.org/TR/presentation-api/#dfn-monitoring-incoming-presentation-connections).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
