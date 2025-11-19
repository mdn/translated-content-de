---
title: "Dokument: createTouchList() Methode"
short-title: createTouchList()
slug: Web/API/Document/createTouchList
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_header}}

Die **`Document.createTouchList()`**-Methode erstellt und gibt ein neues [`TouchList`](/de/docs/Web/API/TouchList)-Objekt zurück.

## Syntax

```js-nolint
createTouchList(touch1)
createTouchList(touch1, touch2)
createTouchList(touch1, touch2, /* …, */ touchN)
```

### Parameter

- `touch1`, …, `touchN`
  - : Null oder mehr [`Touch`](/de/docs/Web/API/Touch)-Objekte. Firefox akzeptiert ebenfalls ein [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von [`Touch`](/de/docs/Web/API/Touch)-Objekten.

### Rückgabewert

Ein [`TouchList`](/de/docs/Web/API/TouchList)-Objekt, das die durch den `touches`-Parameter angegebenen [`Touch`](/de/docs/Web/API/Touch)-Objekte enthält.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `Document.createTouchList()`-Methode zur Erstellung von [`TouchList`](/de/docs/Web/API/TouchList)-Objekten.

Im folgenden Codeausschnitt werden einige [`Touch`](/de/docs/Web/API/Touch)-Objekte für das `target`-Element erstellt und diese Berührungspunkte werden dann verwendet, um einige [`TouchList`](/de/docs/Web/API/TouchList)-Objekte zu erstellen.

```js
const target = document.getElementById("target");

// Create some touch points
const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);

// Create an empty TouchList objects
const list0 = document.createTouchList();

// Create a TouchList with only one Touch object
const list1 = document.createTouchList(touch1);

// Create a list with two Touch objects
const list2 = document.createTouchList(touch1, touch2);
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [`Touch`](/de/docs/Web/API/Touch)
- [`TouchEvent`](/de/docs/Web/API/TouchEvent)
- [`TouchList`](/de/docs/Web/API/TouchList)
- [`Document.createTouch()`](/de/docs/Web/API/Document/createTouch)
