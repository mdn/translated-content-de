---
title: "PerformanceContainerTiming: Eigenschaft identifier"
short-title: identifier
slug: Web/API/PerformanceContainerTiming/identifier
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`identifier`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt den Wert des Attributs [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) auf dem Wurzelelement des Containers zurück.

Damit lässt sich bestimmen, zu welchem Container-Wurzelelement ein Eintrag gehört. Dies ist nützlich, wenn mehrere Container gleichzeitig erfasst werden. Dieser Ansatz ist einfacher, als Referenzen auf [`rootElement`](/de/docs/Web/API/PerformanceContainerTiming/rootElement) zu vergleichen.

## Wert

Ein String.

## Beispiele

### Container anhand von `identifier` unterscheiden

Dieses Beispiel zeigt, wie Sie den betroffenen Container mithilfe von `identifier` bestimmen können.

#### HTML

Zunächst definieren wir zwei Elemente, die mit dem Attribut `containertiming` als Container-Wurzelelemente gekennzeichnet sind. Ihre Kennungen lauten `"hero"` beziehungsweise `"product-list"`.

```html
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
<div containertiming="product-list">
  <p>Product list content</p>
</div>
```

Beachten Sie, dass es auch ausgeblendetes HTML (und Code) zur Anzeige von Protokollinformationen gibt.

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

Der folgende Code prüft zunächst, ob der Browser `"container"`-Einträge unterstützt. Falls nicht, protokolliert er, dass die Funktion nicht unterstützt wird. Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der für jeden Eintrag `identifier` und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) protokolliert, sodass sich die beiden Container unterscheiden lassen.

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

Das folgende Protokoll zeigt die für die beiden Container gemeldeten Werte von `identifier` und `startTime`. Beachten Sie, dass die Startzeit in diesem Fall gleich ist, da beide im selben Frame gezeichnet werden.

{{EmbedLiveSample("Using identifier to distinguish containers", "100%", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)
