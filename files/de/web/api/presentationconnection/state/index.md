---
title: "PresentationConnection: state-Eigenschaft"
short-title: state
slug: Web/API/PresentationConnection/state
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`state`**-Attribut spiegelt den aktuellen Zustand der [Presentation Connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) wider. Abhängig vom aktuellen [`PresentationConnectionState`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionstate) kann das `state`-Attribut einen der folgenden Werte haben.

- **`connecting`**: Der Benutzeragent versucht, eine [Presentation Connection herzustellen](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit dem [Ziel-Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-destination-browsing-context). Dies ist der anfängliche Zustand, wenn ein [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) Objekt erstellt wird.
- **`connected`**: Die [Presentation Connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) ist hergestellt und Kommunikation ist möglich.
- **`closed`**: Die [Presentation Connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) wurde geschlossen oder konnte nicht geöffnet werden. Die Verbindung kann durch Aufruf von [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect) wiederhergestellt werden. Keine Kommunikation ist in diesem Zustand möglich.
- **`terminated`**: Der [empfangende Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) wurde beendet. Jede [Presentation Connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zu dieser [Präsentation](https://www.w3.org/TR/presentation-api/#dfn-presentation) wurde ebenfalls beendet und kann nicht wieder geöffnet werden. Keine Kommunikation ist möglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
