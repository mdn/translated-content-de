---
title: "XRAnchor: delete()-Methode"
short-title: delete()
slug: Web/API/XRAnchor/delete
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`delete()`**-Methode der Schnittstelle {{domxref("XRAnchor")}} entfernt einen Anker. Dies kann nützlich sein, wenn eine Anwendung nicht mehr daran interessiert ist, Updates zu einem Anker zu erhalten.

## Syntax

```js-nolint
delete()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Entfernen aller Anker

```js
let anchorsCollection = new Set();

// Beim Erstellen von Ankern, fügen Sie diese dem Set hinzu
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
