---
title: "Document: createTouch()-Methode"
short-title: createTouch()
slug: Web/API/Document/createTouch
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{Non-standard_header}}

Die **`Document.createTouch()`**-Methode erstellt und gibt ein neues {{DOMxRef("Touch")}}-Objekt zurück.

> [!NOTE]
> Verwenden Sie den {{domxref("TouchEvent.TouchEvent", "TouchEvent()")}}-Konstruktor.

## Syntax

```js-nolint
createTouch(view, target, identifier, pageX, pageY, screenX, screenY)
```

### Parameter

> [!NOTE]
> Alle Parameter sind optional.

- `view`
  - : Das {{DOMxRef("window")}}, in dem die Berührung stattgefunden hat.
- `target`
  - : Das {{DOMxRef("EventTarget")}} für die Berührung.
- `identifier`
  - : Der Wert für {{DOMxRef("Touch.identifier")}}.
- `pageX`
  - : Der Wert für {{DOMxRef("Touch.pageX")}}.
- `pageY`
  - : Der Wert für {{DOMxRef("Touch.pageY")}}.
- `screenX`
  - : Der Wert für {{DOMxRef("Touch.screenX")}}.
- `screenY`
  - : Der Wert für {{DOMxRef("Touch.screenY")}}.

> [!NOTE]
> Frühere Versionen dieser Methode enthielten die folgenden zusätzlichen Parameter,
> diese Parameter sind jedoch in keiner der unten aufgeführten Standards enthalten.
> Folglich sollten diese Parameter als veraltet betrachtet und nicht verwendet werden.

- `clientX`
  - : Der Wert für {{DOMxRef("Touch.clientX")}}.
- `clientY`
  - : Der Wert für {{DOMxRef("Touch.clientY")}}.
- `radiusX`
  - : Der Wert für {{DOMxRef("Touch.radiusX")}}.
- `radiusY`
  - : Der Wert für {{DOMxRef("Touch.radiusY")}}.
- `rotationAngle`
  - : Der Wert für {{DOMxRef("Touch.rotationAngle")}}.
- `force`
  - : Der Wert für {{DOMxRef("Touch.force")}}.

### Rückgabewert

- `touch`
  - : Ein {{DOMxRef("Touch")}}-Objekt, das entsprechend den Eingabeparametern konfiguriert ist.

## Beispiele

Dieses Beispiel veranschaulicht die Verwendung der `Document.createTouch()`-Methode zur
Erstellung von {{DOMxRef("Touch")}}-Objekten.

Im folgenden Code-Snippet werden zwei {{DOMxRef("Touch")}}-Objekte für das
`target`-Element erstellt.

```js
const target = document.getElementById("target");

const touch1 = document.createTouch(window, target, 1, 15, 20, 35, 40);
const touch2 = document.createTouch(window, target, 2, 25, 30, 45, 50);
```

## Spezifikationen

Dieses Feature ist Teil keiner aktuellen Spezifikation und wird nicht mehr als Standard verfolgt.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- {{DOMxRef("TouchList")}}
- {{DOMxRef("Touch")}}
- {{DOMxRef("Document.createTouchList()")}}
