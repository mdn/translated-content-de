---
title: "PresentationConnectionAvailableEvent: connection-Eigenschaft"
short-title: connection
slug: Web/API/PresentationConnectionAvailableEvent/connection
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Wenn eine eingehende Verbindung erstellt wird, löst ein [empfangender Benutzeragent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) ein [vertrauenswürdiges Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) namens [`connectionavailable`](https://www.w3.org/TR/presentation-api/#dfn-connectionavailable) auf einem [`PresentationReceiver`](https://www.w3.org/TR/presentation-api/#idl-def-presentationreceiver) aus. Das [vertrauenswürdige Ereignis](https://www.w3.org/TR/presentation-api/#dfn-trusted-event) wird am [Präsentationscontroller-Monitor](https://www.w3.org/TR/presentation-api/#dfn-presentation-controllers-monitor) unter Verwendung der [`PresentationConnectionAvailableEvent`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent)-Schnittstelle ausgelöst, wobei das Attribut [`connection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionavailableevent-connection) auf das erstellte [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection)-Objekt gesetzt ist.

Das Ereignis wird für alle Verbindungen ausgelöst, die bei der [Überwachung eingehender Präsentationsverbindungen](https://www.w3.org/TR/presentation-api/#dfn-monitoring-incoming-presentation-connections) erstellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
