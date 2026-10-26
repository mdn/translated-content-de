---
title: "PerformanceContainerTiming: Eigenschaft intersectionRect"
short-title: intersectionRect
slug: Web/API/PerformanceContainerTiming/intersectionRect
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`intersectionRect`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt das umschließende Rechteck des insgesamt gezeichneten Bereichs des Containers zurück. Es wird ab dem Zeitpunkt berechnet, zu dem das Wurzelelement des Containers registriert wurde.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly).

## Beschreibung

Der durch `intersectionRect` definierte Bereich kann Lücken enthalten, in denen nichts gezeichnet wurde. Inhalte, die sich beim Zeichnen außerhalb des Viewports befanden, werden nicht berücksichtigt.
Zusammen mit der Eigenschaft [`size`](/de/docs/Web/API/PerformanceContainerTiming/size), die die insgesamt gezeichnete Fläche angibt, liefert sie einen nützlichen _Anhaltspunkt_ dafür, wie viel eines Containers bisher gerendert und sichtbar geworden ist.
Sie kann auch beim Debuggen verwendet werden, um zu prüfen, ob Inhalte eines Containers innerhalb des Viewports gezeichnet werden.

Weitere Informationen finden Sie unter [Wann werden Einträge erzeugt?](/de/docs/Web/API/PerformanceContainerTiming#when_are_entries_generated) in `PerformanceContainerTiming`.

## Beispiele

### Beobachten, dass nur sichtbare gezeichnete Inhalte berücksichtigt werden

Dieses Beispiel zeigt, dass Inhalte nur dann einen Eintrag erzeugen, wenn beim Zeichnen zumindest ein Teil davon sichtbar ist: Sobald neue Inhalte unterhalb des sichtbaren Bereichs des Containers hinzugefügt werden, entstehen keine weiteren Einträge.
Es zeigt außerdem, dass die Werte von `intersectionRect` und `size` nur zunehmen.

#### HTML

Das Wurzelelement des Containers ({{htmlelement("section")}}, gekennzeichnet als `"hero"`) befindet sich innerhalb eines `<div>` mit fester Höhe, das überlaufende Inhalte ausblendet.
Außerdem gibt es einen Button, mit dem Sie das Beispiel zurücksetzen können.

```html
<button id="reset">Reset</button>
<div id="wrapper">
  <section containertiming="hero">
    <h2>Hero content</h2>
  </section>
</div>
```

#### CSS

Das CSS legt für das umschließende Element eine feste Höhe fest und blendet überlaufende Inhalte aus.

```css
#wrapper {
  height: 150px;
  overflow: hidden;
  border: 1px solid black;
}
```

Beachten Sie, dass es außerdem verborgenes HTML (und Code) zur Anzeige von Protokollinformationen gibt.
Neue Protokolleinträge werden am Anfang des Protokolls eingefügt.

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

Der folgende Code prüft zunächst, ob der Browser `"container"`-Einträge unterstützt. Falls nicht, wird protokolliert, dass die Funktion nicht unterstützt wird.
Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der `intersectionRect` und `size` jedes Eintrags protokolliert.

```js
const container = document.querySelector("section");

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `Entry: size: ${entry.size}, rectWidth: ${entry.intersectionRect.width}, rectHeight: ${entry.intersectionRect.height}`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

Danach verwenden wir [`setInterval()`](/de/docs/Web/API/Window/setInterval), um dem Container jede Sekunde einen neuen Absatz hinzuzufügen. Nach sechs Absätzen endet der Vorgang.
Jeder hinzugefügte Absatz wird protokolliert, damit Sie sehen können, ob darauf ein neuer Eintrag folgt.
Beachten Sie, dass wir Inhalte zeitgesteuert hinzufügen und nicht erst, wenn der Benutzer auf einen Button klickt. Nach einer Interaktion mit der Seite werden nämlich keine Einträge mehr gemeldet (siehe [Meldungen enden nach Scrollen oder Benutzereingaben](/de/docs/Web/API/PerformanceContainerTiming#reporting_stops_after_scrolling_or_user_input)).

```js
const maxParagraphs = 6;
let count = 0;

const timer = setInterval(() => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}`;
  container.appendChild(paragraph);
  log(`Added paragraph ${count}`);
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
Die ersten Absätze werden innerhalb des umschließenden Elements gezeichnet. Auf jeden folgt daher ein Eintrag mit größeren Werten für `size` und `intersectionRect`.
Sobald Absätze unterhalb der Unterkante des umschließenden Elements hinzugefügt werden, werden sie abgeschnitten und es folgen keine neuen Einträge.
Klicken Sie auf den Button **Zurücksetzen**, um das Beispiel neu zu starten.

{{EmbedLiveSample("Observing that only visible paints are counted", "100%", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.size`](/de/docs/Web/API/PerformanceContainerTiming/size)
- [`PerformanceContainerTiming.firstRenderTime`](/de/docs/Web/API/PerformanceContainerTiming/firstRenderTime)
