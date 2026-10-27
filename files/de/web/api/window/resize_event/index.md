---
title: "Window: resize-Ereignis"
short-title: resize
slug: Web/API/Window/resize_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("CSSOM view API")}}

Das **`resize`**-Ereignis wird ausgelöst, wenn sich die Größe der Dokumentansicht (des Fensters) geändert hat.

Dieses Ereignis kann nicht abgebrochen werden und durchläuft keine Bubbling-Phase.

In einigen älteren Browsern war es möglich, `resize`-Ereignishandler für jedes HTML-Element zu registrieren.
Es ist weiterhin möglich, `onresize`-Attribute zu setzen (beachten Sie jedoch, dass dies gegebenenfalls andere mit `onresize` hinzugefügte Ereignis-Listener ersetzt) oder mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einen Handler für ein beliebiges Element festzulegen.
Allerdings werden `resize`-Ereignisse nur auf dem [`window`](/de/docs/Web/API/Window)-Objekt ausgelöst (also dem Objekt, das [`document.defaultView`](/de/docs/Web/API/Document/defaultView) zurückgibt).
Nur Handler, die auf dem `window`-Objekt registriert sind, empfangen `resize`-Ereignisse.

Obwohl das `resize`-Ereignis heutzutage nur für das Fenster ausgelöst wird, können Sie mit der [ResizeObserver](/de/docs/Web/API/ResizeObserver)-API Benachrichtigungen über Größenänderungen anderer Elemente erhalten.

Wenn das `resize`-Ereignis für Ihre Anwendung zu häufig ausgelöst wird, lesen Sie [Optimizing window.onresize](https://bencentra.com/code/2015/02/27/optimizing-window-resize.html), um den Zeitpunkt der Ereignisauslösung zu steuern.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("resize", (event) => { })
```

Alternativ können Sie einen Wert der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onresize = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Fenstergröße protokollieren

Das folgende Beispiel gibt die Fenstergröße bei jeder Größenänderung aus. Es verwendet die Ereignishandler-Eigenschaft `onresize` (beachten Sie jedoch, dass dies gegebenenfalls andere mit `onresize` hinzugefügte Ereignis-Listener ersetzt).

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
> Die Beispielausgabe befindet sich hier in einem {{HTMLElement("iframe")}}. Die angegebenen Werte für Breite und Höhe beziehen sich daher auf das `<iframe>` und nicht auf das Fenster, in dem sich diese Seite befindet. Insbesondere ist es schwierig, die Fenstergröße so zu ändern, dass sich die angegebene Höhe sichtbar verändert.
>
> Der Effekt ist leichter zu erkennen, wenn Sie {{LiveSampleLink("Window_size_logger", "das Beispiel in einem eigenen Fenster anzeigen")}}.

### Verwendung von addEventListener()

Sie können den Ereignishandler mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einrichten:

```js
window.addEventListener("resize", reportWindowSize);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
