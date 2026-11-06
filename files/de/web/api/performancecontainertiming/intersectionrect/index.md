---
title: "PerformanceContainerTiming: Eigenschaft intersectionRect"
short-title: intersectionRect
slug: Web/API/PerformanceContainerTiming/intersectionRect
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`intersectionRect`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt das umschließende Rechteck des insgesamt gerenderten Bereichs des Containers zurück. Es wird seit der Registrierung des Container-Roots berechnet.

## Wert

Ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly).

## Beschreibung

Der durch `intersectionRect` definierte Bereich kann Lücken enthalten, in denen nichts gerendert wurde. Inhalte, die sich beim Rendern außerhalb des Viewports befanden, sind nicht enthalten.
Zusammen mit der Eigenschaft [`size`](/de/docs/Web/API/PerformanceContainerTiming/size), die die gesamte gerenderte Fläche angibt, liefert sie einen nützlichen _Anhaltspunkt_ dafür, wie viel eines Containers bisher gerendert und sichtbar geworden ist.
Sie kann auch beim Debuggen helfen zu überprüfen, ob Inhalte eines Containers innerhalb des Viewports gerendert werden.

Weitere Informationen finden Sie unter [Wann werden Einträge erzeugt?](/de/docs/Web/API/PerformanceContainerTiming#when_are_entries_generated) in `PerformanceContainerTiming`.

## Beispiele

### Beobachten, dass nur sichtbare Rendering-Vorgänge gezählt werden

Dieses Beispiel zeigt, dass ein Inhalt nur dann einen Eintrag erzeugt, wenn beim Rendern zumindest ein Teil davon sichtbar ist: Sobald neuer Inhalt unterhalb des sichtbaren Bereichs des Containers hinzugefügt wird, werden keine weiteren Einträge erzeugt.
Es zeigt außerdem, dass die Werte von `intersectionRect` und `size` nur zunehmen.

#### HTML

Der Container-Root ({{htmlelement("section")}}, gekennzeichnet als `"hero"`) befindet sich innerhalb eines `<div>` mit fester Höhe, das überlaufende Inhalte ausblendet.
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

Das CSS gibt dem umschließenden Element eine feste Höhe und blendet überlaufende Inhalte aus.

```css
#wrapper {
  height: 150px;
  overflow: hidden;
  border: 1px solid black;
}
```

Beachten Sie, dass es außerdem verborgenes HTML (und Code) zur Anzeige von Protokollinformationen gibt.
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
Jeder Absatz wird beim Hinzufügen protokolliert, sodass Sie sehen können, ob darauf ein neuer Eintrag folgt.
Beachten Sie, dass wir Inhalte zeitgesteuert hinzufügen und nicht beim Klicken auf einen Button, da nach einer Interaktion mit der Seite keine Einträge mehr gemeldet werden (siehe [Die Meldung endet nach Scrollen oder Benutzereingaben](/de/docs/Web/API/PerformanceContainerTiming#reporting_stops_after_scrolling_or_user_input)).

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

Zuletzt fügen wir einen Click-Event-Handler hinzu, der das Beispiel durch Neuladen der Seite zurücksetzt.

```js
document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload();
});
```

#### Ergebnis

Jede Sekunde wird ein neuer Absatz hinzugefügt.
Die ersten Absätze werden innerhalb des umschließenden Elements gerendert. Auf jeden folgt daher ein Eintrag mit größeren Werten für `size` und `intersectionRect`.
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
