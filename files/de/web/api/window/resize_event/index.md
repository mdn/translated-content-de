---
title: "Window: resize event"
short-title: resize
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("CSSOM view API")}}

Das **`resize`**-Ereignis wird ausgelöst, wenn die Dokumentansicht (Fenster) in ihrer Größe verändert wurde.

Dieses Ereignis ist nicht abbrechbar und verteilt sich nicht auf andere Elemente.

In einigen früheren Browsern war es möglich, `resize`-Ereignishandler auf jedem HTML-Element zu registrieren. Es ist weiterhin möglich, `onresize`-Attribute zu setzen oder [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) zu verwenden, um einen Handler auf einem beliebigen Element zu setzen. Allerdings werden `resize`-Ereignisse nur auf dem [`window`](/de/docs/Web/API/Window)-Objekt ausgelöst (d.h. durch [`document.defaultView`](/de/docs/Web/API/Document/defaultView) zurückgegeben). Nur auf dem `window`-Objekt registrierte Handler empfangen `resize`-Ereignisse.

Obwohl das `resize`-Ereignis heutzutage nur für das Fenster ausgelöst wird, können Sie Änderungsbenachrichtigungen für andere Elemente mittels der [ResizeObserver](/de/docs/Web/API/ResizeObserver)-API erhalten.

Wenn das `resize`-Ereignis in Ihrer Anwendung zu häufig ausgelöst wird, lesen Sie [Optimizing window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html), um zu steuern, nach welcher Zeit das Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("resize", (event) => { })

onresize = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Fenstergrößen-Logger

Das folgende Beispiel informiert über die Fenstergröße bei jeder Größenänderung.

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
> Die Beispielausgabe hier befindet sich in einem {{HTMLElement("iframe")}}, daher sind die angegebenen Breiten- und Höhenwerte für das `<iframe>`, nicht für das Fenster, in dem sich diese Seite befindet. Insbesondere wird es schwierig sein, die Fenstergröße so zu ändern, dass ein Unterschied in der gemeldeten Höhe sichtbar wird.
>
> Der Effekt ist leichter zu erkennen, wenn Sie {{LiveSampleLink("Window_size_logger", "das Beispiel in einem eigenen Fenster anzeigen")}}.

### addEventListener-Äquivalent

Sie können den Ereignishandler mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einrichten:

```js
window.addEventListener("resize", reportWindowSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
