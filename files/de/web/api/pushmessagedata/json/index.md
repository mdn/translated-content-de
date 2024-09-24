---
title: "PushMessageData: json() Methode"
short-title: json()
slug: Web/API/PushMessageData/json
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`json()`** Methode der {{domxref("PushMessageData")}} Schnittstelle extrahiert Push-Nachrichtendaten, indem sie diese als [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON)-String analysiert und das Ergebnis zurückgibt.

## Syntax

```js-nolint
json()
```

### Parameter

Keine.

### Rückgabewert

Das Ergebnis der Analyse der Push-Ereignisdaten als JSON. Dies könnte alles sein, was durch JSON dargestellt werden kann — ein Objekt, ein Array, ein String, eine Zahl…

## Beispiele

```js
self.addEventListener("push", (event) => {
  const myData = event.data.json();

  // führen Sie etwas mit Ihren Daten aus
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
