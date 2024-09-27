---
title: "PresentationConnection: state-Eigenschaft"
short-title: state
slug: Web/API/PresentationConnection/state
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`state`**-Attribut spiegelt den aktuellen Zustand der [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) wider. Abhängig vom aktuellen [`PresentationConnectionState`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionstate) kann das `state`-Attribut einen der folgenden Werte enthalten:

- **`connecting`**: Der User Agent versucht, eine [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) mit dem [destination browsing context](https://www.w3.org/TR/presentation-api/#dfn-destination-browsing-context) herzustellen. Dies ist der anfängliche Zustand, wenn ein [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection)-Objekt erstellt wird.
- **`connected`**: Die [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) ist hergestellt und Kommunikation ist möglich.
- **`closed`**: Die [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) wurde geschlossen oder konnte nicht geöffnet werden. Die Verbindung kann durch Aufrufen von [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect) wiederhergestellt werden. In diesem Zustand ist keine Kommunikation möglich.
- **`terminated`**: Der [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) wurde beendet. Jede [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zu dieser [presentation](https://www.w3.org/TR/presentation-api/#dfn-presentation) wurde ebenfalls beendet und kann nicht wiederhergestellt werden. Keine Kommunikation ist möglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
