---
title: "PerformanceContainerTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceContainerTiming/toJSON
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) ist ein {{Glossary("Serialization", "Serializer")}}. Sie gibt eine JSON-Darstellung des [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)-Objekts darstellt.

Das JSON-Objekt enthält weder die Eigenschaft [`lastPaintedElement`](/de/docs/Web/API/PerformanceContainerTiming/lastPaintedElement) noch die Eigenschaft [`rootElement`](/de/docs/Web/API/PerformanceContainerTiming/rootElement), da beide vom Typ [`HTMLElement`](/de/docs/Web/API/HTMLElement) sind und dieser keine `toJSON()`-Operation bereitstellt.

## Beispiele

### Verwendung der Methode toJSON

Dieses Beispiel zeigt, wie die Methode `toJSON()` verwendet wird.

#### HTML

Zunächst definieren wir ein {{htmlelement("section")}}-Element, das durch sein `containertiming`-Attribut als Container-Wurzelelement mit der Kennung `"hero"` markiert ist.
Der Abschnitt enthält zwei weitere Elemente, die gerendert werden und dadurch einen Eintrag zur Container-Performance erzeugen.

```html
<section containertiming="hero">
  <h2>Hero content</h2>
  <p>The parent element of this paragraph is a container root.</p>
</section>
```

Beachten Sie, dass es außerdem verborgenes HTML (und Code) zur Anzeige von Protokollinformationen gibt.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 350px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Der folgende Code prüft zunächst, ob der Browser Einträge vom Typ `"container"` unterstützt. Falls nicht, protokolliert er, dass die Funktion nicht unterstützt wird.
Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der jeden Eintrag protokolliert und dabei die Methode `toJSON()` direkt aufruft, um das JSON-Objekt zu erhalten.
Danach wird der Observer gestartet und so gefiltert, dass er nur Einträge vom Typ `"container"` erfasst.

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(JSON.stringify(entry.toJSON(), null, 2));
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

#### Ergebnis

Die JSON-Ausgabe wird im Protokoll angezeigt, das auf die Elemente folgt.

{{EmbedLiveSample("Using the toJSON method", "100%", 500)}}

Beachten Sie, dass in diesem Fall nur ein Eintrag protokolliert wird, obwohl das Container-Wurzelelement zwei Kindelemente hat, da beide Elemente im ersten Frame des Containers gerendert werden.
Der Browser erzeugt für jedes Container-Wurzelelement pro Rendering-Frame höchstens einen `PerformanceContainerTiming`-Eintrag. Dabei werden alle Elemente zusammengefasst, die während dieses Frames gerendert werden.

Der Eintrag sollte ungefähr so aussehen:

```json
{
  "name": "",
  "entryType": "container",
  "startTime": 77,
  "duration": 0,
  "identifier": "hero",
  "intersectionRect": {
    "x": 0,
    "y": 19.916666666666668,
    "width": 359.7,
    "height": 66.71666666666667,
    "top": 19.916666666666668,
    "right": 359.7,
    "bottom": 86.63333333333334,
    "left": 0
  },
  "size": 10519,
  "firstRenderTime": 77,
  "paintTime": 77,
  "presentationTime": null
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
