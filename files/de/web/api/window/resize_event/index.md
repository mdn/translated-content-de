---
title: "Window: resize Event"
short-title: resize
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Das **`resize`**-Ereignis wird ausgelöst, wenn die Dokumentenansicht (Fenster) in der Größe verändert wurde.

Dieses Ereignis ist nicht abbrechbar und wird nicht nach oben weitergegeben.

In einigen älteren Browsern war es möglich, `resize`-Ereignishandler für jedes HTML-Element zu registrieren. Es ist weiterhin möglich, `onresize`-Attribute zu setzen oder [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden, um einen Handler für jedes Element festzulegen. Allerdings werden `resize`-Ereignisse nur auf dem [`window`](/de/docs/Web/API/Window)-Objekt ausgelöst (d.h. auf das durch [`document.defaultView`](/de/docs/Web/API/Document/defaultView) zurückgegebene Objekt). Nur die auf dem `window`-Objekt registrierten Handler erhalten `resize`-Ereignisse.

Während das `resize`-Ereignis heutzutage nur für das Fenster ausgelöst wird, können Sie Resize-Benachrichtigungen für andere Elemente mittels der [ResizeObserver](/de/docs/Web/API/ResizeObserver)-API erhalten.

Wenn das `resize`-Ereignis zu oft für Ihre Anwendung ausgelöst wird, lesen Sie [Optimizing window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html), um die Zeit zu steuern, nach der das Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Fenstergrößen-Protokollierer

Das folgende Beispiel gibt die Fenstergröße jedes Mal aus, wenn das Fenster in der Größe verändert wird.

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
> Die Beispielausgabe hier befindet sich in einem {{HTMLElement("iframe")}}, daher sind die gemeldeten Breiten- und Höhenwerte für das `<iframe>`, nicht für das Fenster, in dem sich diese Seite befindet. Insbesondere wird es schwierig sein, die Fenstergröße so anzupassen, dass ein Unterschied in der gemeldeten Höhe sichtbar wird.
>
> Der Effekt ist leichter zu erkennen, wenn Sie {{LiveSampleLink("Window_size_logger", "das Beispiel in einem eigenen Fenster anzeigen")}}.

### addEventListener-Äquivalent

Sie könnten den Ereignishandler mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

```js
window.addEventListener("resize", reportWindowSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
