---
title: "Fenster: resize-Ereignis"
short-title: resize
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Das **`resize`**-Ereignis tritt auf, wenn die Dokumentansicht (Fenster) in ihrer Größe geändert wurde.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

In einigen älteren Browsern war es möglich, `resize`-Ereignishandler auf jedem HTML-Element zu registrieren. Es ist immer noch möglich, `onresize`-Attribute zu setzen oder [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden, um einen Handler für jedes Element zu setzen. `resize`-Ereignisse werden jedoch nur auf dem [`window`](/de/docs/Web/API/Window)-Objekt ausgelöst (d.h. zurückgegeben durch [`document.defaultView`](/de/docs/Web/API/Document/defaultView)). Nur auf dem `window`-Objekt registrierte Handler werden `resize`-Ereignisse empfangen.

Obwohl das `resize`-Ereignis heute nur noch für das Fenster ausgelöst wird, können Sie mit der [ResizeObserver](/de/docs/Web/API/ResizeObserver)-API Benachrichtigungen über Größenänderungen für andere Elemente erhalten.

Wenn das `resize`-Ereignis zu häufig für Ihre Anwendung ausgelöst wird, lesen Sie [Optimizing window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html), um die Zeit zu steuern, nach der das Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Fenstergrößenprotokollierer

Das folgende Beispiel meldet die Fenstergröße jedes Mal, wenn die Größe geändert wird.

#### HTML

```html
<p>Resize the browser window to fire the <code>resize</code> event.</p>
<p>Window height: <span id="height"></span></p>
<p>Window width: <span id="width"></span></p>
```

#### JavaScript

```js
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;
```

#### Ergebnis

{{EmbedLiveSample("Window_size_logger")}}

> [!NOTE]
> Die hier gezeigte Beispiels-Ausgabe befindet sich in einem {{HTMLElement("iframe")}}, daher sind die gemeldeten Breiten- und Höhenwerte für das `<iframe>`, nicht das Fenster, in dem sich diese Seite befindet. Insbesondere wird es schwierig sein, die Fenstergröße so anzupassen, dass ein Unterschied in der gemeldeten Höhe sichtbar wird.
>
> Der Effekt ist einfacher zu erkennen, wenn Sie {{LiveSampleLink("Window_size_logger", "das Beispiel in einem eigenen Fenster ansehen")}}.

### addEventListener-Äquivalent

Sie könnten den Ereignishandler mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

```js
window.addEventListener("resize", reportWindowSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
