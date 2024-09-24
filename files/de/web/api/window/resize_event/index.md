---
title: "Fenster: resize-Ereignis"
short-title: resize
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef}}

Das **`resize`**-Ereignis wird ausgelöst, wenn die Dokumentansicht (Fenster) in der Größe verändert wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

In einigen früheren Browsern war es möglich, `resize`-Ereignishandler bei jedem HTML-Element zu registrieren. Es ist immer noch möglich, `onresize`-Attribute zu setzen oder {{domxref("EventTarget.addEventListener", "addEventListener()")}} zu verwenden, um einen Handler bei jedem Element zu setzen. Allerdings werden `resize`-Ereignisse nur beim {{domxref("Window", "window")}}-Objekt ausgelöst (d.h. zurückgegeben von {{domxref("document.defaultView")}}). Nur bei dem `window`-Objekt registrierte Handler empfangen `resize`-Ereignisse.

Obwohl das `resize`-Ereignis heutzutage nur für das Fenster ausgelöst wird, können Sie mit der [ResizeObserver](/de/docs/Web/API/ResizeObserver)-API Größenänderungsbenachrichtigungen für andere Elemente erhalten.

Wenn das resize-Ereignis zu oft für Ihre Anwendung ausgelöst wird, schauen Sie sich [Optimizing window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html) an, um die Zeit zu steuern, nach der das Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("resize", (event) => {});

onresize = (event) => {};
```

## Event-Typ

Ein generisches {{domxref("Event")}}.

## Beispiele

### Fenstergrößen-Protokollierer

Das folgende Beispiel gibt die Fenstergröße bei jedem Ändern der Größe aus.

#### HTML

```html
<p>Ändern Sie die Größe des Browserfensters, um das <code>resize</code>-Ereignis auszulösen.</p>
<p>Fensterhöhe: <span id="height"></span></p>
<p>Fensterbreite: <span id="width"></span></p>
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
> Die Beispielausgabe hier befindet sich in einem {{HTMLElement("iframe")}}, daher beziehen sich die gemeldeten Breiten- und Höhenwerte auf das `<iframe>`, nicht auf das Fenster, in dem sich diese Seite befindet. Es ist besonders schwierig, die Fenstergröße so anzupassen, dass ein Unterschied in der gemeldeten Höhe sichtbar wird.
>
> Der Effekt ist leichter zu sehen, wenn Sie {{LiveSampleLink("Window_size_logger", "das Beispiel in einem eigenen Fenster ansehen")}}.

### addEventListener-Äquivalent

Sie könnten den Ereignishandler mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode einrichten:

```js
window.addEventListener("resize", reportWindowSize);
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
