---
title: "XRAnchor: delete() Methode"
short-title: delete()
slug: Web/API/XRAnchor/delete
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`delete()`**-Methode des [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Interfaces entfernt einen Anchor. Dies kann nützlich sein, wenn eine Anwendung nicht mehr daran interessiert ist, Aktualisierungen zu einem Anchor zu erhalten.

## Syntax

```js-nolint
delete()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Entfernen aller Anchors

```js
let anchorsCollection = new Set();

// Upon creating anchors, add them to the Set
// anchorsCollection.add(anchor);

for (const anchor of anchorsCollection) {
  anchor.delete();
}

anchorsCollection.clear();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
