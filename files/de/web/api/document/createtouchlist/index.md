---
title: "Document: Methode createTouchList()"
short-title: createTouchList()
slug: Web/API/Document/createTouchList
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_header}}

Die Methode **`Document.createTouchList()`** erstellt und gibt ein neues {{DOMxRef("TouchList")}}-Objekt zurück.

## Syntax

```js-nolint
createTouchList(touch1)
createTouchList(touch1, touch2)
createTouchList(touch1, touch2, /* …, */ touchN)
```

### Parameter

- `touch1`, …, `touchN`
  - : Null oder mehr {{DOMxRef("Touch")}}-Objekte. **Hinweis:** Firefox akzeptiert auch ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von
    {{DOMxRef("Touch")}}-Objekten.

### Rückgabewert

- `list`
  - : Ein {{DOMxRef("TouchList")}}-Objekt, das die durch den `touches`-Parameter angegebenen {{DOMxRef("Touch")}}-Objekte enthält.

## Beispiele

Dieses Beispiel zeigt die Verwendung der Methode `Document.createTouchList()`, um {{DOMxRef("TouchList")}}-Objekte zu erstellen.

Im folgenden Code-Snippet werden einige {{DOMxRef("Touch")}}-Objekte für das `target`-Element erstellt, und diese Berührungspunkte werden dann verwendet, um einige {{DOMxRef("TouchList")}}-Objekte zu erstellen.

```js
const target = document.getElementById("target");

// Erstellen Sie einige Berührungspunkte
const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);

// Erstellen Sie leere TouchList-Objekte
const list0 = document.createTouchList();

// Erstellen Sie eine TouchList mit nur einem Touch-Objekt
const list1 = document.createTouchList(touch1);

// Erstellen Sie eine Liste mit zwei Touch-Objekten
const list2 = document.createTouchList(touch1, touch2);
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr vorgesehen, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- {{DOMxRef("Touch")}}
- {{DOMxRef("TouchEvent")}}
- {{DOMxRef("TouchList")}}
- {{DOMxRef("Document.createTouch()")}}
