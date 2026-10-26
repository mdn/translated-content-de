---
title: "PerformanceContainerTiming: Eigenschaft rootElement"
short-title: rootElement
slug: Web/API/PerformanceContainerTiming/rootElement
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`rootElement`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt das Wurzelelement des Containers zurück.
Dabei handelt es sich um das [`HTMLElement`](/de/docs/Web/API/HTMLElement), auf das das Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) angewendet wurde.
Der Wert kann `null` sein, wenn der Eintrag gelesen wird, nachdem das Wurzelelement aus dem Dokument entfernt und von der Garbage Collection bereinigt wurde.

## Wert

Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder `null`.

## Beispiele

### Das Wurzelelement eines Containers protokollieren

Dieses Beispiel zeigt, dass `rootElement` immer dasselbe Wurzelelement des Containers zurückgibt, unabhängig davon, wie viele Einträge dafür gemeldet werden.

#### HTML

Zunächst definieren wir ein {{htmlelement("section")}}-Element, das durch sein `containertiming`-Attribut als Container-Wurzelelement mit der Kennung `"hero"` markiert ist, sowie eine Schaltfläche zum Zurücksetzen des Beispiels.

```html
<button id="reset">Reset</button>
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
```

Beachten Sie, dass es außerdem verborgenes HTML (und Code) zur Anzeige von Protokollinformationen gibt.
Neue Protokolleinträge werden am Anfang des Protokolls hinzugefügt.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 250px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${text}\n${logElement.innerText}`;
}
```

#### JavaScript

Der folgende Code prüft zunächst, ob der Browser `"container"`-Einträge unterstützt. Falls nicht, protokolliert er, dass die Funktion nicht unterstützt wird.
Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der für jeden Eintrag protokolliert, ob dessen `rootElement` dasselbe Element ist wie das {{htmlelement("section")}}-Element auf der Seite.

```js
const container = document.querySelector("section");

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(`rootElement is container: ${entry.rootElement === container}`);
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

Danach verwenden wir [`setInterval()`](/de/docs/Web/API/Window/setInterval), um dem Container jede Sekunde einen neuen Absatz hinzuzufügen. Nach fünf Absätzen wird dies beendet.
Jeder Absatz löst einen neuen Paint-Vorgang und einen neuen Timing-Eintrag aus.
Beachten Sie, dass wir Inhalte zeitgesteuert hinzufügen und nicht, wenn der Benutzer auf eine Schaltfläche klickt, da nach einer Interaktion mit der Seite keine weiteren Einträge gemeldet werden (siehe [Die Meldung endet nach dem Scrollen oder einer Benutzereingabe](/de/docs/Web/API/PerformanceContainerTiming#reporting_stops_after_scrolling_or_user_input)).

```js
const maxParagraphs = 5;
let count = 0;

const timer = setInterval(() => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}`;
  container.appendChild(paragraph);
  if (count >= maxParagraphs) {
    clearInterval(timer);
  }
}, 1000);
```

Zum Schluss fügen wir einen Click-Event-Handler hinzu, der das Beispiel durch Neuladen der Seite zurücksetzt.

```js
document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload();
});
```

#### Ergebnis

Jede Sekunde wird ein neuer Absatz hinzugefügt.
Jeder Absatz sollte einen neuen Protokolleintrag auslösen, der bestätigt, dass `rootElement` weiterhin auf dasselbe Wurzelelement des Containers verweist.
Klicken Sie auf die Schaltfläche **Reset**, um das Beispiel neu zu starten.

{{EmbedLiveSample("Logging the root element of a container", "100%", 550)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.lastPaintedElement`](/de/docs/Web/API/PerformanceContainerTiming/lastPaintedElement)
- HTML-Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)
