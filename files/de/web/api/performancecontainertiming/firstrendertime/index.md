---
title: "PerformanceContainerTiming: firstRenderTime-Eigenschaft"
short-title: firstRenderTime
slug: Web/API/PerformanceContainerTiming/firstRenderTime
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`firstRenderTime`** der Schnittstelle [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming) gibt den Zeitpunkt zurück, zu dem die Rendering-Aktualisierung für den ersten Paint abgeschlossen war, der Inhalte zu diesem Container beigetragen hat.

Dieser Wert bleibt für alle Einträge, die für den Container gemeldet werden, auf den Zeitpunkt des allerersten Paints des Containers nach seiner Registrierung festgelegt. Damit unterscheidet er sich von [`paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime), die sich auf den Paint beziehen, der den jeweiligen Eintrag erzeugt hat.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), gemessen relativ zum [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin).

## Beispiele

### Beobachten, dass firstRenderTime unverändert bleibt

Dieses Beispiel zeigt, dass `firstRenderTime` auf den Zeitpunkt des allerersten Paints des Containers festgelegt bleibt, während sich `startTime` und `paintTime` mit jedem Eintrag ändern.

#### HTML

Definieren Sie zunächst ein {{htmlelement("section")}}-Element, das durch sein `containertiming`-Attribut als Container-Root mit der Kennung `"hero"` markiert ist, sowie eine Schaltfläche zum Zurücksetzen des Beispiels.

```html
<button id="reset">Reset</button>
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
```

Beachten Sie, dass außerdem verborgenes HTML (und Code) zum Anzeigen von Protokollinformationen vorhanden ist. Neue Protokolleinträge werden oben im Protokoll hinzugefügt.

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

Der folgende Code prüft zunächst, ob der Browser Einträge vom Typ `"container"` unterstützt. Falls nicht, protokolliert er, dass die Funktion nicht unterstützt wird. Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der für jeden Eintrag [`lastPaintedElement`](/de/docs/Web/API/PerformanceContainerTiming/lastPaintedElement), `firstRenderTime`, [`paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) protokolliert.

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

Anschließend verwenden wir [`setInterval()`](/de/docs/Web/API/Window/setInterval), um dem Container jede Sekunde einen neuen Absatz hinzuzufügen. Nach fünf Absätzen wird das Hinzufügen beendet. Jeder Absatz löst einen neuen Paint und einen neuen Timing-Eintrag aus. Beachten Sie, dass wir Inhalte zeitgesteuert hinzufügen und nicht, wenn der Benutzer auf eine Schaltfläche klickt, da nach einer Interaktion des Benutzers mit der Seite keine Einträge mehr gemeldet werden (siehe [Meldungen enden nach dem Scrollen oder nach Benutzereingaben](/de/docs/Web/API/PerformanceContainerTiming#reporting_stops_after_scrolling_or_user_input)).

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
