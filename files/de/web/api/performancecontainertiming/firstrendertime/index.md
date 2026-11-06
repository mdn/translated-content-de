---
title: "PerformanceContainerTiming: firstRenderTime-Eigenschaft"
short-title: firstRenderTime
slug: Web/API/PerformanceContainerTiming/firstRenderTime
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`firstRenderTime`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt den Zeitpunkt zurück, zu dem die Rendering-Aktualisierung für den ersten Paint abgeschlossen war, der Inhalt zu diesem Container beitrug.

Dieser Wert wird beim allerersten Paint des Containers nach seiner Registrierung festgelegt und bleibt für alle Einträge gleich, die für diesen Container gemeldet werden. Darin unterscheidet er sich von [`paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime), die sich auf den Paint beziehen, der den jeweiligen Eintrag erzeugt hat.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), gemessen relativ zum [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin).

## Beispiele

### Beobachten, dass firstRenderTime unverändert bleibt

Dieses Beispiel zeigt, dass `firstRenderTime` beim allerersten Paint des Containers festgelegt wird, während sich `startTime` und `paintTime` mit jedem Eintrag ändern.

#### HTML

Definieren Sie zunächst ein {{htmlelement("section")}}-Element, das durch sein `containertiming`-Attribut als Container-Root mit der Kennung `"hero"` markiert ist, sowie eine Schaltfläche zum Zurücksetzen des Beispiels.

```html
<button id="reset">Reset</button>
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
```

Beachten Sie, dass außerdem verborgenes HTML (und Code) zur Anzeige von Protokollinformationen vorhanden ist. Neue Protokolleinträge werden oben im Protokoll hinzugefügt.

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
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

Der folgende Code prüft zunächst, ob der Browser `"container"`-Einträge unterstützt. Ist dies nicht der Fall, protokolliert er, dass die Funktion nicht unterstützt wird. Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der für jeden Eintrag [`lastPaintedElement`](/de/docs/Web/API/PerformanceContainerTiming/lastPaintedElement) sowie `firstRenderTime`, [`paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) protokolliert.

```js
const container = document.querySelector("section");

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `lastPaintedElement: ${entry.lastPaintedElement?.outerHTML ?? "null"}` +
          ` firstRenderTime: ${entry.firstRenderTime.toFixed(1)}` +
          ` startTime: ${entry.startTime.toFixed(1)}` +
          ` paintTime: ${entry.paintTime.toFixed(1)}`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

Anschließend verwenden wir [`setInterval()`](/de/docs/Web/API/Window/setInterval), um dem Container jede Sekunde einen neuen Absatz hinzuzufügen. Nach fünf Absätzen endet dies. Jeder Absatz löst einen neuen Paint und einen neuen Timing-Eintrag aus. Beachten Sie, dass wir Inhalte zeitgesteuert hinzufügen und nicht erst, wenn jemand auf eine Schaltfläche klickt, da nach einer Interaktion mit der Seite keine Einträge mehr gemeldet werden (siehe [Die Meldung endet nach dem Scrollen oder nach einer Benutzereingabe](/de/docs/Web/API/PerformanceContainerTiming#reporting_stops_after_scrolling_or_user_input)).

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

Jede Sekunde wird ein neuer Absatz hinzugefügt. Jeder Absatz sollte einen neuen Protokolleintrag auslösen, bei dem `firstRenderTime` gleich bleibt, während sich die Werte der anderen Eigenschaften ändern. Klicken Sie auf die Schaltfläche **Zurücksetzen**, um das Beispiel neu zu starten.

{{EmbedLiveSample("Observing that firstRenderTime stays fixed", "100%", 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceContainerTiming.paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime)
