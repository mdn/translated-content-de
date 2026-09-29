---
title: "PresentationConnection: Eigenschaft state"
short-title: state
slug: Web/API/PresentationConnection/state
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`state`** der Schnittstelle [`PresentationConnection`](/de/docs/Web/API/PresentationConnection) gibt den aktuellen Zustand der [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) an. Abhängig vom aktuellen [`PresentationConnectionState`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionstate) kann das Attribut `state` einen der folgenden Werte haben:

- **`connecting`**: Der User-Agent versucht, eine [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) zum [Ziel-Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-destination-browsing-context) herzustellen. Dies ist der Anfangszustand, wenn ein [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection)-Objekt erstellt wird.
- **`connected`**: Die [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) ist hergestellt und Kommunikation ist möglich.
- **`closed`**: Die [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) wurde geschlossen oder konnte nicht geöffnet werden. Die Verbindung kann durch Aufrufen von [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect) erneut geöffnet werden. In diesem Zustand ist keine Kommunikation möglich.
- **`terminated`**: Der [empfangende Browsing-Kontext](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) wurde beendet. Jede [Präsentationsverbindung](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) zu dieser [Präsentation](https://www.w3.org/TR/presentation-api/#dfn-presentation) wurde ebenfalls beendet und kann nicht erneut geöffnet werden. Keine Kommunikation ist möglich.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
