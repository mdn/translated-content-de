---
title: "PerformanceContainerTiming: Eigenschaft identifier"
short-title: identifier
slug: Web/API/PerformanceContainerTiming/identifier
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`identifier`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt den Wert des Attributs [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) am Wurzelelement des Containers zurück.

Damit lässt sich bestimmen, zu welchem Container-Wurzelelement ein Eintrag gehört. Das ist nützlich, wenn mehrere Container gleichzeitig erfasst werden. Dieser Ansatz ist einfacher als der Vergleich von [`rootElement`](/de/docs/Web/API/PerformanceContainerTiming/rootElement)-Referenzen.

## Wert

Ein String.

## Beispiele

### Container mit `identifier` unterscheiden

Dieses Beispiel zeigt, wie Sie den betreffenden Container mithilfe von `identifier` bestimmen können.

#### HTML

Zunächst definieren wir zwei Elemente, die mit dem Attribut `containertiming` als Container-Wurzelelemente gekennzeichnet sind. Sie haben die Kennungen `"hero"` beziehungsweise `"product-list"`.

```html
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
<div containertiming="product-list">
  <p>Product list content</p>
</div>
```

Beachten Sie, dass es außerdem verborgenes HTML (und Code) zur Anzeige von Protokollinformationen gibt.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 150px;
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

Der folgende Code prüft zunächst, ob der Browser Einträge vom Typ `"container"` unterstützt. Falls nicht, protokolliert er, dass die Funktion nicht unterstützt wird. Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der für jeden Eintrag `identifier` und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) protokolliert. So lassen sich die beiden Container unterscheiden.

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(`${entry.identifier} painted at ${entry.startTime.toFixed(1)}`);
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

#### Ergebnis

Das folgende Protokoll zeigt die für jeden der beiden Container erfassten Werte von `identifier` und `startTime`. Beachten Sie, dass die Startzeit in diesem Fall gleich ist, da beide im selben Frame gerendert werden.

{{EmbedLiveSample("Using identifier to distinguish containers", "100%", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)
