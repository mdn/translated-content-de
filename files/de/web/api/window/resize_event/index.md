---
title: "Window: resize-Ereignis"
short-title: resize
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`resize`**-Ereignis wird ausgelöst, wenn die Dokumentansicht (Fenster) in ihrer Größe verändert wird.

Dieses Ereignis kann nicht abgebrochen werden und propagiert nicht.

In einigen älteren Browsern war es möglich, `resize`-Ereignishandler für jedes HTML-Element zu registrieren. Es ist immer noch möglich, `onresize`-Attribute zu setzen oder [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden, um einen Handler für jedes Element festzulegen. Allerdings werden `resize`-Ereignisse nur auf dem [`window`](/de/docs/Web/API/Window)-Objekt ausgelöst (d.h. zurückgegeben von [`document.defaultView`](/de/docs/Web/API/Document/defaultView)). Nur Handler, die auf dem `window`-Objekt registriert sind, empfangen `resize`-Ereignisse.

Während das `resize`-Ereignis heutzutage nur für das Fenster ausgelöst wird, können Sie Resize-Benachrichtigungen für andere Elemente über die [ResizeObserver](/de/docs/Web/API/ResizeObserver)-API erhalten.

Falls das `resize`-Ereignis zu häufig für Ihre Anwendung ausgelöst wird, lesen Sie [Optimizing window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html), um zu steuern, nach welcher Zeitspanne das Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Fenstergroßen-Logger

Das folgende Beispiel gibt die Fenstergröße jedes Mal an, wenn sie geändert wird.

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
> Die Beispielausgabe hier befindet sich in einem {{HTMLElement("iframe")}}, daher sind die angegebenen Breiten- und Höhenwerte für das `<iframe>`, nicht für das Fenster, in dem sich diese Seite befindet. Insbesondere wird es schwierig sein, die Fenstergröße so anzupassen, dass ein Unterschied in der angegebenen Höhe sichtbar wird.
>
> Der Effekt lässt sich leichter erkennen, wenn Sie das {{LiveSampleLink("Window_size_logger", "Beispiel in einem eigenen Fenster anzeigen")}}.

### addEventListener-Äquivalent

Sie könnten den Ereignishandler auch mithilfe der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

```js
window.addEventListener("resize", reportWindowSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
