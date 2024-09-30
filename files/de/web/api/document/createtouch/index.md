---
title: "Document: createTouch()-Methode"
short-title: createTouch()
slug: Web/API/Document/createTouch
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_header}}

Die **`Document.createTouch()`**-Methode erstellt und gibt ein neues [`Touch`](/de/docs/Web/API/Touch)-Objekt zurück.

> [!NOTE]
> Verwenden Sie den [`TouchEvent()`](/de/docs/Web/API/TouchEvent/TouchEvent)-Konstruktor.

## Syntax

```js-nolint
createTouch(view, target, identifier, pageX, pageY, screenX, screenY)
```

### Parameter

> [!NOTE]
> Alle Parameter sind optional.

- `view`
  - : Das [`window`](/de/docs/Web/API/Window), in dem der Touch aufgetreten ist.
- `target`
  - : Das [`EventTarget`](/de/docs/Web/API/EventTarget) für den Touch.
- `identifier`
  - : Der Wert für [`Touch.identifier`](/de/docs/Web/API/Touch/identifier).
- `pageX`
  - : Der Wert für [`Touch.pageX`](/de/docs/Web/API/Touch/pageX).
- `pageY`
  - : Der Wert für [`Touch.pageY`](/de/docs/Web/API/Touch/pageY).
- `screenX`
  - : Der Wert für [`Touch.screenX`](/de/docs/Web/API/Touch/screenX).
- `screenY`
  - : Der Wert für [`Touch.screenY`](/de/docs/Web/API/Touch/screenY).

> [!NOTE]
> Frühere Versionen dieser Methode enthielten die
> folgenden zusätzlichen Parameter, aber diese Parameter sind in keiner der
> unten aufgeführten Spezifikationen enthalten. Folglich sollten diese Parameter als veraltet betrachtet und nicht verwendet werden.

- `clientX`
  - : Der Wert für [`Touch.clientX`](/de/docs/Web/API/Touch/clientX).
- `clientY`
  - : Der Wert für [`Touch.clientY`](/de/docs/Web/API/Touch/clientY).
- `radiusX`
  - : Der Wert für [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX).
- `radiusY`
  - : Der Wert für [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY).
- `rotationAngle`
  - : Der Wert für [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle).
- `force`
  - : Der Wert für [`Touch.force`](/de/docs/Web/API/Touch/force).

### Rückgabewert

- `touch`
  - : Ein [`Touch`](/de/docs/Web/API/Touch)-Objekt, das gemäß den Eingabeparametern konfiguriert ist.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der `Document.createTouch()`-Methode zum
Erstellen von [`Touch`](/de/docs/Web/API/Touch)-Objekten.

Im folgenden Codeausschnitt werden zwei [`Touch`](/de/docs/Web/API/Touch)-Objekte für das
`target`-Element erstellt.

```js
const target = document.getElementById("target");

const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);
```

## Spezifikationen

Diese Funktion ist nicht Teil einer aktuellen Spezifikation. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- [`TouchList`](/de/docs/Web/API/TouchList)
- [`Touch`](/de/docs/Web/API/Touch)
- [`Document.createTouchList()`](/de/docs/Web/API/Document/createTouchList)
