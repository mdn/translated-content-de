---
title: "PerformanceContainerTiming: Eigenschaft lastPaintedElement"
short-title: lastPaintedElement
slug: Web/API/PerformanceContainerTiming/lastPaintedElement
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`lastPaintedElement`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt das Element zurück, das im Frame, der diesen Eintrag erzeugt hat, die größte neu gezeichnete Fläche beigetragen hat.

## Wert

Ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) oder `null`, wenn keines vorhanden ist.

## Beschreibung

Das `lastPaintedElement` wird für jeden Eintrag separat aus den Elementen ausgewählt, die in dem Rendering-Frame gezeichnet wurden, der den Eintrag erzeugt hat.
Für jedes dieser Elemente ermittelt der Browser, wie viel _neue_ Fläche durch dessen Zeichnung zur [akkumulierten gezeichneten Region](/de/docs/Web/API/PerformanceContainerTiming#when_are_entries_generated) des Containers hinzukommt: Gemeint ist der Teil der gezeichneten Fläche, der noch nicht in der Region enthalten ist.
Das Element, das die größte neue Fläche hinzufügt, ist das `lastPaintedElement`.

Das bedeutet, dass die Eigenschaft nicht unbedingt das zuletzt gezeichnete Element oder das größte im Frame gezeichnete Element bezeichnet.

Wenn Container-Roots verschachtelt sind, tragen Zeichnungen innerhalb der inneren Container-Root auch zur äußeren bei. Daher kann sich das `lastPaintedElement` eines Eintrags für einen äußeren Container innerhalb einer inneren Container-Root befinden.

Die Eigenschaft kann beim Debuggen verwendet werden, um festzustellen, welcher konkrete Inhalt dazu führt, dass ein großer oder komplexer Container weiterhin Einträge erzeugt.

## Beispiele

### Das zuletzt gezeichnete Element eines Containers protokollieren

Dieses Beispiel zeigt, wie `lastPaintedElement` das Element identifiziert, das in jedem Frame für die größte neu gezeichnete Fläche verantwortlich ist.

#### HTML

Zunächst definieren wir ein {{htmlelement("section")}}-Element, das durch sein `containertiming`-Attribut als Container-Root mit der Kennung `"hero"` markiert ist, sowie einen Button zum Zurücksetzen des Beispiels.

```html
<button id="reset">Reset</button>
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
```

Beachten Sie, dass es außerdem ausgeblendetes HTML (und Code) zur Anzeige von Protokollinformationen gibt.
Neue Protokolleinträge werden oben im Protokoll hinzugefügt.

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
Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der für jeden Eintrag dessen `lastPaintedElement` protokolliert.

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

Danach verwenden wir [`setInterval()`](/de/docs/Web/API/Window/setInterval), um dem Container jede Sekunde einen neuen Absatz hinzuzufügen. Nach fünf Absätzen wird das Hinzufügen beendet.
Jeder Absatz löst eine neue Zeichnung und einen neuen Timing-Eintrag aus.
Beachten Sie, dass wir Inhalte zeitgesteuert hinzufügen und nicht, wenn der Benutzer auf einen Button klickt, da keine Einträge mehr gemeldet werden, nachdem der Benutzer mit der Seite interagiert hat (siehe [Die Meldung von Einträgen endet nach dem Scrollen oder nach einer Benutzereingabe](/de/docs/Web/API/PerformanceContainerTiming#reporting_stops_after_scrolling_or_user_input)).

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
Jeder Absatz sollte einen neuen Protokolleintrag auslösen, der zeigt, dass der neu hinzugefügte Absatz das `lastPaintedElement` für diesen Eintrag ist.
Klicken Sie auf den Button **Zurücksetzen**, um das Beispiel neu zu starten.

{{EmbedLiveSample("Logging the last painted element of a container", "100%", 550)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.rootElement`](/de/docs/Web/API/PerformanceContainerTiming/rootElement)
