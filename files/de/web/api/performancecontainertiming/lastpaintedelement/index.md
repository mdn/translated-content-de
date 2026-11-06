---
title: "PerformanceContainerTiming: Eigenschaft lastPaintedElement"
short-title: lastPaintedElement
slug: Web/API/PerformanceContainerTiming/lastPaintedElement
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`lastPaintedElement`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt das Element zurück, das in dem Frame, der diesen Eintrag erzeugt hat, die größte neu gezeichnete Fläche beigetragen hat.

## Wert

Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder `null`, wenn kein solches Element vorhanden ist.

## Beschreibung

Das `lastPaintedElement` wird für jeden Eintrag separat aus den Elementen ausgewählt, die in dem Rendering-Frame gezeichnet wurden, der den Eintrag erzeugt hat.
Für jedes dieser Elemente ermittelt der Browser, wie viel _neue_ Fläche sein Zeichenvorgang zur [bereits gezeichneten Fläche](/de/docs/Web/API/PerformanceContainerTiming#when_are_entries_generated) des Containers hinzufügt – also den Teil der gezeichneten Fläche, der noch nicht darin enthalten ist.
Das Element, das die größte neue Fläche hinzufügt, ist das `lastPaintedElement`.

Die Eigenschaft bezeichnet daher nicht unbedingt das Element, das zuletzt gezeichnet wurde, oder das größte Element, das in diesem Frame gezeichnet wurde.

Wenn Container-Wurzelelemente verschachtelt sind, tragen Zeichenvorgänge innerhalb des inneren Container-Wurzelelements auch zum äußeren bei. Das `lastPaintedElement` eines Eintrags für den äußeren Container kann daher innerhalb eines inneren Container-Wurzelelements liegen.

Die Eigenschaft kann bei der Fehlersuche helfen, den konkreten Inhalt zu identifizieren, der dazu führt, dass für einen großen oder komplexen Container weiterhin Einträge erzeugt werden.

## Beispiele

### Das zuletzt gezeichnete Element eines Containers protokollieren

Dieses Beispiel zeigt, wie `lastPaintedElement` in jedem Frame das Element mit der größten neu gezeichneten Fläche identifiziert.

#### HTML

Zunächst definieren wir ein {{htmlelement("section")}}-Element, das durch sein `containertiming`-Attribut als Container-Wurzelelement mit der Kennung `"hero"` markiert ist. Außerdem fügen wir einen Button hinzu, mit dem sich das Beispiel zurücksetzen lässt.

```html
<button id="reset">Reset</button>
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
```

Beachten Sie, dass auch verborgenes HTML (und Code) zur Anzeige von Protokollinformationen vorhanden ist.
Neue Protokolleinträge werden oben im Protokoll eingefügt.

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
Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der das `lastPaintedElement` jedes Eintrags protokolliert.

```js
const container = document.querySelector("section");

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `lastPaintedElement: ${entry.lastPaintedElement?.outerHTML ?? "null"}`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

Danach verwenden wir [`setInterval()`](/de/docs/Web/API/Window/setInterval), um dem Container jede Sekunde einen neuen Absatz hinzuzufügen. Nach fünf Absätzen wird dies beendet.
Jeder Absatz löst einen neuen Zeichenvorgang und einen neuen Timing-Eintrag aus.
Beachten Sie, dass wir Inhalte zeitgesteuert hinzufügen und nicht erst, wenn Benutzer auf einen Button klicken, da nach einer Interaktion mit der Seite keine Einträge mehr gemeldet werden (siehe [Die Meldung endet nach dem Scrollen oder nach einer Benutzereingabe](/de/docs/Web/API/PerformanceContainerTiming#reporting_stops_after_scrolling_or_user_input)).

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

Zum Schluss fügen wir einen Click-Event-Handler hinzu, der das Beispiel durch erneutes Laden der Seite zurücksetzt.

```js
document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload();
});
```

#### Ergebnis

Jede Sekunde wird ein neuer Absatz hinzugefügt.
Jeder Absatz sollte einen neuen Protokolleintrag auslösen, der zeigt, dass der neu hinzugefügte Absatz das `lastPaintedElement` dieses Eintrags ist.
Klicken Sie auf den Button **Reset**, um das Beispiel neu zu starten.

{{EmbedLiveSample("Logging the last painted element of a container", "100%", 550)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.rootElement`](/de/docs/Web/API/PerformanceContainerTiming/rootElement)
