---
title: PerformanceContainerTiming
slug: Web/API/PerformanceContainerTiming
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

{{APIRef("Performance API")}}

Die **`PerformanceContainerTiming`**-Schnittstelle der [Performance API](/de/docs/Web/API/Performance_API) stellt eine einzelne Aktualisierung der Zeitinformationen für das Zeichnen von Elementen innerhalb eines Containers dar.
Entwickler können eine Folge dieser Objekte beobachten, um das Rendering-Verhalten einer aus mehreren Elementen aufgebauten Komponente zu analysieren.

`PerformanceContainerTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle definiert die folgenden Eigenschaften direkt:

- [`PerformanceContainerTiming.firstRenderTime`](/de/docs/Web/API/PerformanceContainerTiming/firstRenderTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt des ersten Zeichenvorgangs angibt, der Inhalte zu diesem Container beigetragen hat.
- [`PerformanceContainerTiming.identifier`](/de/docs/Web/API/PerformanceContainerTiming/identifier) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert des `containertiming`-Attributs auf dem Wurzelelement des Containers zurück.
- [`PerformanceContainerTiming.intersectionRect`](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das das umschließende Rechteck aller Inhalte innerhalb des Viewports darstellt, die seit der Registrierung als Container-Wurzel im Container gezeichnet wurden.
- [`PerformanceContainerTiming.lastPaintedElement`](/de/docs/Web/API/PerformanceContainerTiming/lastPaintedElement) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`HTMLElement`](/de/docs/Web/API/HTMLElement) zurück, das in dem Frame, der diesen Eintrag erzeugt hat, die größte neu gezeichnete Fläche beigetragen hat, oder `null`, falls es keines gibt.
- [`PerformanceContainerTiming.paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und die Zeichenphase begann.
    Er eignet sich zum Vergleichen von Ergebnissen verschiedener Browser.
- [`PerformanceContainerTiming.presentationTime`](/de/docs/Web/API/PerformanceContainerTiming/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die neu gezeichneten Inhalte des Containers tatsächlich auf dem Bildschirm dargestellt wurden.
    Der Wert hängt von der Implementierung ab und eignet sich daher vor allem zum Vergleichen von Ergebnissen desselben Browsers.
- [`PerformanceContainerTiming.rootElement`](/de/docs/Web/API/PerformanceContainerTiming/rootElement) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das [`HTMLElement`](/de/docs/Web/API/HTMLElement) zurück, das die Container-Wurzel bildet, oder `null`.
    Dies ist das Element, auf das das Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) angewendet wurde.
- [`PerformanceContainerTiming.size`](/de/docs/Web/API/PerformanceContainerTiming/size) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Ganzzahl zurück, die die kumulierte Fläche aller Inhalte in CSS-Quadratpixeln angibt, die seit der Registrierung als Container-Wurzel im Container gezeichnet wurden.

Für die folgenden geerbten Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) gelten die beschriebenen Einschränkungen:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `0` zurück (`duration` ist auf diese Schnittstelle nicht anwendbar).
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Zeichenfolge `"container"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die leere Zeichenfolge (`""`) zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den Wert von [`paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) für diesen Eintrag zurück.

## Instanzmethoden

- [`PerformanceContainerTiming.toJSON()`](/de/docs/Web/API/PerformanceContainerTiming/toJSON) {{Experimental_Inline}}
  - : Überschreibt die Methode [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON), um eine JSON-Darstellung des `PerformanceContainerTiming`-Objekts zurückzugeben.

## Beschreibung

Diese Schnittstelle bietet Webentwicklern Werkzeuge, um Rendering-Zeitpunkte für Gruppen von Elementen innerhalb eines Containers zu messen.
Sie ist nützlich, um zu messen, wann eine aus mehreren verschachtelten Elementen aufgebaute Komponente, etwa ein UI-Widget, als Ganzes gerendert wurde.
Beobachter, die die Zeichenzeit einzelner Elemente oder das Laden der gesamten Seite erfassen, können dies nicht effektiv messen.

Ein Container, dessen verschachtelte Elemente über mehrere Frames hinweg gezeichnet werden, erzeugt eine Folge von `PerformanceContainerTiming`-Einträgen: höchstens einen pro Rendering-Frame.
Die Folge endet, wenn der Benutzer scrollt oder mit der Seite interagiert (siehe [Meldungen enden nach dem Scrollen oder einer Benutzereingabe](#meldungen_enden_nach_dem_scrollen_oder_einer_benutzereingabe)).

Jeder Eintrag in der Folge steht für einen anderen Zeichenvorgang. Daher ändern sich [`paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) und die geerbte Eigenschaft [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) von Eintrag zu Eintrag.
[`firstRenderTime`](/de/docs/Web/API/PerformanceContainerTiming/firstRenderTime) ist für alle Einträge gleich, die seit der Registrierung dieser Container-Wurzel gemeldet wurden.
[`intersectionRect`](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect) und [`size`](/de/docs/Web/API/PerformanceContainerTiming/size) beschreiben den seit der Registrierung [kumulierten gezeichneten Bereich](#when_are_entries_generated) des Containers, während [`lastPaintedElement`](/de/docs/Web/API/PerformanceContainerTiming/lastPaintedElement) das Element angibt, das am meisten zum aktuellen Eintrag beigetragen hat.

Anhand dieser Informationen können Entwickler nachvollziehen, wann die einzelnen Teile des Containers in den jeweiligen Frames gerendert wurden.

### Einen Container registrieren

Um Einträge eines Containers zu beobachten, fügen Sie dem Element das Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) hinzu und geben einen Bezeichner für den Container an.
Das Element wird dadurch zum _Container-Wurzelelement_, kurz zur „Container-Wurzel“.
Wenn verschachtelte Elemente neue sichtbare Bereiche zeichnen, tragen diese anschließend zu den Aktualisierungen der Container-Zeitinformationen bei. Zeichenvorgänge des Wurzelelements selbst tun dies nicht.

Sie können jedes HTML-Element als Container festlegen, jedoch keine SVG- oder MathML-Elemente.
Beachten Sie allerdings, dass manche Elemente, etwa `<hr>` und `<img>`, keine anderen Elemente enthalten können.
Sie können diese als Container-Wurzeln markieren, aber sie erzeugen keine Zeiteinträge.

Das folgende HTML zeigt, wie ein Container registriert wird.
Es definiert eine kartenartige Komponente, die aus einem {{htmlelement("article")}}-Element mit mehreren weiteren Elementen besteht:

```html
<article containertiming="cool-card">
  <header>
    <img src="avatar.jpg" alt="" />
    <span class="username">@username</span>
  </header>
  <p>Chat text.</p>
  <div containertimingignore>
    <!-- third-party "suggested for you" widget -->
  </div>
</article>
```

Das `<article>`-Element wird durch sein `containertiming`-Attribut zu einer Container-Wurzel mit dem Bezeichner `"cool-card"`.
Zeichenvorgänge für das Avatarbild, den Benutzernamen und den Chattext tragen alle zu den Aktualisierungen der Container-Zeitinformationen bei.

Das verschachtelte `<div>` hat das Attribut [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore). Dadurch tragen Zeichenvorgänge dieses Elements und seiner Nachfahren nicht zu den Aktualisierungen der Zeitinformationen bei.
So können Sie Inhalte aus der Zeitmessung ausschließen, die für den Container nicht wesentlich sind, etwa eine Werbung in Ihrer Karte: Die Karte ist unabhängig davon nutzbar, ob die Werbung bereits gezeichnet wurde.

Container-Wurzeln können verschachtelt sein.
Ein Zeichenvorgang innerhalb einer inneren Container-Wurzel trägt sowohl zu deren Zeitinformationen als auch zu denen jeder übergeordneten Container-Wurzel bei.
Wenn die innere Container-Wurzel zusätzlich das Attribut `containertimingignore` hat, tragen ihre Zeichenvorgänge nur zu ihren eigenen Zeitinformationen bei.

### Container-Einträge beobachten

Sie können die Einträge von `"cool-card"` mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten, ebenso wie andere Eintragstypen der Performance API.
Beachten Sie, dass wir in diesem Codeausschnitt zunächst prüfen, ob die Funktion unterstützt wird, indem wir testen, ob [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) `"container"` enthält. Außerdem übergeben wir `{ type: "container" }` an [`observe()`](/de/docs/Web/API/PerformanceObserver/observe), damit wir nur Container-Zeiteinträge erhalten:

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  // PerformanceContainerTiming supported
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log(
        `Container "${entry.identifier}" total painted area ${entry.size}px² at ${entry.startTime.toFixed(1)}ms`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  console.log("This feature is not supported by your browser.");
}
```

### Wann werden Einträge erzeugt?

Für jeden Container wird pro Rendering-Frame höchstens ein Eintrag erzeugt.
Einträge werden nur für Aktualisierungen durch verschachtelte Elemente im visuellen Viewport erzeugt und nur für Zeichenvorgänge, die neue Flächen ausfüllen.
Für Elemente, die durch `containertimingignore` ausgeschlossen sind, werden keine Einträge erzeugt.
Ebenso wenig werden Einträge für Elemente erzeugt, die nicht gezeichnet werden (etwa solche mit `display: none`), oder für das Container-Wurzelelement selbst.

Der Browser führt einen Datensatz, den wir hier als „kumulierten gezeichneten Bereich“ bezeichnen. Damit ermittelt er, ob das Zeichnen eines Elements einen Container-Zeiteintrag erzeugen soll.
Dieser Datensatz ist von der Rendering-Pipeline getrennt.
Wenn ein Element in einem Container zum ersten Mal gerendert wird, beschränkt der Browser die gezeichnete Fläche auf den visuellen Viewport und nimmt sie in den kumulierten gezeichneten Bereich auf.
Wenn der kumulierte gezeichnete Bereich wächst, also eine neue Fläche gezeichnet wird, erzeugt der Browser einen Container-Zeiteintrag.
Die Eigenschaft [`PerformanceContainerTiming.intersectionRect`](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect) gibt das umschließende Rechteck dieses Bereichs zurück, und [`PerformanceContainerTiming.size`](/de/docs/Web/API/PerformanceContainerTiming/size) gibt dessen gezeichnete Fläche zurück.
Die Fläche des `intersectionRect` ist immer größer oder gleich `size`, da das Rechteck Lücken zwischen gezeichneten Flächen enthalten kann.

Änderungen, durch die sich der kumulierte gezeichnete Bereich nicht vergrößert, lösen keinen neuen Eintrag aus.
Dazu gehören:

- Ein Zeichenvorgang, der vollständig abgeschnitten wird
- Das Zeichnen einer Fläche, die bereits zum Bereich gehört
- Das erneute Zeichnen eines Elements nach seinem ersten Zeichenvorgang

Außerdem werden für Inhalte innerhalb eines [Shadow Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM) keine Einträge erzeugt, selbst wenn sich die Container-Wurzel selbst in diesem Shadow Tree befindet.
Die Container-Zeitmessung überschreitet auch keine Frame-Grenzen: Inhalte innerhalb eines {{htmlelement("iframe")}} sind für eine Container-Wurzel im übergeordneten Frame nicht sichtbar.

Nachdem der Benutzer gescrollt oder mit der Seite interagiert hat, werden überhaupt keine Einträge mehr erzeugt, wie unter [Meldungen enden nach dem Scrollen oder einer Benutzereingabe](#meldungen_enden_nach_dem_scrollen_oder_einer_benutzereingabe) beschrieben.

### Meldungen enden nach dem Scrollen oder einer Benutzereingabe

Einträge werden nur gemeldet, bis der Benutzer zum ersten Mal scrollt oder mit der Seite interagiert, etwa durch einen Klick oder einen Tastendruck.
Dazu zählt sowohl das Scrollen eines beliebigen scrollbaren Elements auf der Seite als auch das Scrollen der Seite selbst.
Danach werden keine weiteren Einträge erzeugt.

Der Grund dafür ist, dass die API messen soll, wie lange es dauert, bis Inhalte während des Ladens erscheinen.
Sobald der Benutzer mit der Seite interagiert hat, enthalten die ab dem [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin) gemessenen Zeiten auch Zeit, die auf den Benutzer entfällt. Damit sind sie kein aussagekräftiges Maß für die Rendering-Leistung mehr.

Das bedeutet auch, dass der kumulierte gezeichnete Bereich nur Inhalte umfasst, die vor dem Scrollen innerhalb des Viewports gezeichnet wurden.
Inhalte, die beim Zeichnen außerhalb des Viewports liegen, etwa weiter unten auf der Seite, werden nie gemeldet – auch dann nicht, wenn der Benutzer sie später in den sichtbaren Bereich scrollt.
[`intersectionRect`](/de/docs/Web/API/PerformanceContainerTiming/intersectionRect) und [`size`](/de/docs/Web/API/PerformanceContainerTiming/size) geben daher an, wie viel vom Container innerhalb des Viewports gerendert wurde, und nicht, wie viel vom gesamten Container gerendert wurde.

### Lebenszyklus eines Containers

Eine Container-Wurzel wird registriert, sobald ein Element mit dem Attribut `containertiming` mit dem Dokument verbunden wird.
Wenn das Attribut entfernt oder das Element vom Dokument getrennt wird, wird die Registrierung der Container-Wurzel aufgehoben und alles bisher Kumulierte verworfen.
Wird das Attribut später erneut hinzugefügt (oder das Element bei weiterhin vorhandenem Attribut erneut verbunden), wird die Container-Wurzel mit einem leeren gezeichneten Bereich neu registriert. Beim nächsten Zeichenvorgang erhält sie einen neuen Wert für [`firstRenderTime`](/de/docs/Web/API/PerformanceContainerTiming/firstRenderTime).
Das Attribut `containertiming` sollte daher gesetzt werden, bevor das Element zum Dokument hinzugefügt wird, damit die Einträge des Containers alle seine Zeichenvorgänge erfassen.

Der gezeichnete Bereich eines Containers wird außerdem in Viewport-Koordinaten erfasst: Wenn sich die Container-Wurzel später beispielsweise aufgrund einer Layoutänderung verschiebt, werden die für sie bereits kumulierten Rechtecke nicht nachträglich an ihre neue Position angepasst.

## Beispiele

### Rendering-Zeiten von Containern beobachten

In diesem Beispiel werden zwei Container durch Hinzufügen des Attributs [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming) zur Beobachtung markiert.
Ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) wird registriert, um alle Performance-Einträge des Typs `"container"` zu erhalten. Das Flag `buffered` ermöglicht den Zugriff auf Daten aus der Zeit vor der Erstellung des Beobachters.

#### HTML

Zunächst definieren wir zwei Elemente, die mit dem Attribut `containertiming` als Container-Wurzeln markiert sind und die Bezeichner `"hero"` beziehungsweise `"product-list"` tragen.

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
  height: 50px;
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

Der folgende Code prüft zunächst, ob der Browser `"container"`-Einträge unterstützt. Falls nicht, protokolliert er, dass die Funktion nicht unterstützt wird.
Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der für jeden Eintrag `identifier`, `size` und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) protokolliert.

```js
if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `Container "${entry.identifier}" total painted area ${entry.size}px² at ${entry.startTime.toFixed(1)}ms`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

#### Ergebnis

Das folgende Protokoll zeigt die für die beiden Container gemeldeten Werte für `identifier`, `size` und `startTime`.

{{EmbedLiveSample("Observing container render times", "100%", 200)}}

### Beobachten, wie sich Einträge beim Wachsen eines Containers ändern

Dieses Beispiel protokolliert die Eigenschaften jedes Eintrags für einen einzelnen Container, der wächst, während ihm zeitgesteuert neue Inhalte hinzugefügt werden.

#### HTML

Zunächst definieren wir ein {{htmlelement("section")}}-Element, das durch sein `containertiming`-Attribut als Container-Wurzel mit dem Bezeichner `"hero"` markiert ist, sowie eine Schaltfläche zum Zurücksetzen des Beispiels.

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
Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der für jeden Eintrag und seine Eigenschaften einen nummerierten Satz von Zeilen protokolliert.
`presentationTime` hängt von der Implementierung ab. Deshalb protokolliert der Code `n/a`, wenn der Browser keinen Wert bereitstellt (die Eigenschaft ist dann `null`).

```js
const container = document.querySelector("section");
let entryNumber = 0;

const formatTime = (time) => (time ? time.toFixed(1) : "n/a");
const formatElement = (element) =>
  element ? `<${element.localName}>` : "null";

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const rect = entry.intersectionRect;
      log(
        [
          `#${++entryNumber} id: ${entry.identifier}, rootElement: ${formatElement(entry.rootElement)}, firstRenderTime: ${formatTime(entry.firstRenderTime)}`,
          `  paintTime: ${formatTime(entry.paintTime)}`,
          `  presentationTime: ${formatTime(entry.presentationTime)}`,
          `  size: ${entry.size}`,
          `  intersectionRect: ${rect.width.toFixed(1)}(w) x ${rect.height.toFixed(1)}(h)`,
          `  lastPaintedElement: ${formatElement(entry.lastPaintedElement)}`,
        ].join("\n"),
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

Anschließend fügen wir mit [`setInterval()`](/de/docs/Web/API/Window/setInterval) jede Sekunde einen neuen Absatz zum Container hinzu und beenden dies nach fünf Absätzen.
Jeder Absatz löst einen neuen Zeichenvorgang und einen Zeiteintrag aus.
Die Absätze enthalten zunehmend mehr Text, sodass die gezeichnete Fläche jedes Mal um einen anderen Betrag wächst.

Beachten Sie, dass wir die Inhalte zeitgesteuert hinzufügen und nicht erst, wenn der Benutzer auf eine Schaltfläche klickt: Nach einer Benutzerinteraktion mit der Seite werden keine Einträge mehr gemeldet.

```js
const maxParagraphs = 5;
let count = 0;

const timer = setInterval(() => {
  count++;
  const paragraph = document.createElement("p");
  paragraph.textContent = `New paragraph ${count}. ${"Text. ".repeat(count * 3)}`;
  container.appendChild(paragraph);
  if (count >= maxParagraphs) {
    clearInterval(timer);
  }
}, 1000);
```

Zum Schluss fügen wir einen Handler für Klickereignisse hinzu, der das Beispiel durch Neuladen der Seite zurücksetzt.

```js
document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload();
});
```

#### Ergebnis

Jede Sekunde wird ein neuer Absatz hinzugefügt. Vergleichen Sie die Werte der einzelnen Protokolleinträge, während der Container wächst.
Klicken Sie auf die Schaltfläche **Reset**, um das Beispiel neu zu starten.

Wenn Sie innerhalb des Beispiels klicken, eine Taste drücken oder scrollen, werden bis zum Zurücksetzen keine weiteren Einträge gemeldet.

{{EmbedLiveSample("Observing how entries change as a container grows", "100%", 600)}}

### Beobachten, dass Scrollen die Meldung von Einträgen beendet

Dieses Beispiel zeigt, dass für einen Container nach dem Scrollen durch den Benutzer keine Einträge mehr gemeldet werden, obwohl weiterhin neue Inhalte darin gezeichnet werden.

#### HTML

Zunächst definieren wir ein kleines scrollbares {{htmlelement("div")}}, eine Schaltfläche zum Zurücksetzen des Beispiels und ein {{htmlelement("section")}}-Element, das durch sein `containertiming`-Attribut als Container-Wurzel mit dem Bezeichner `"hero"` markiert ist.

```html
<div id="scroll-box">
  <p>Scroll this box to stop reporting.</p>
  <p>Keep scrolling…</p>
  <p>…nearly there…</p>
  <p>…end of the box.</p>
</div>
<button id="reset">Reset</button>
<section containertiming="hero">
  <h2>Hero content</h2>
</section>
```

#### CSS

Das CSS gibt dem `<div>` eine feste Höhe und macht seinen Inhalt scrollbar.

```css
#scroll-box {
  width: 250px;
  height: 3rem;
  overflow: auto;
  border: 1px solid black;
}

section p {
  margin: 0;
}
```

Beachten Sie, dass es außerdem verborgenes HTML (und Code) zur Anzeige von Protokollinformationen gibt.
Neue Protokolleinträge werden am Anfang des Protokolls hinzugefügt.

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
  logElement.innerText = `${text}\n${logElement.innerText}`;
}
```

#### JavaScript

Der folgende Code prüft zunächst, ob der Browser `"container"`-Einträge unterstützt. Falls nicht, protokolliert er, dass die Funktion nicht unterstützt wird.
Anschließend erstellt er einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der `size` und `paintTime` jedes Eintrags protokolliert.

```js
const container = document.querySelector("section");

if (PerformanceObserver.supportedEntryTypes.includes("container")) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      log(
        `Entry: size: ${entry.size}, paintTime: ${entry.paintTime.toFixed(1)}`,
      );
    }
  });
  observer.observe({ type: "container", buffered: true });
} else {
  log("This feature is not supported by your browser.");
}
```

Anschließend fügen wir mit [`setInterval()`](/de/docs/Web/API/Window/setInterval) jede Sekunde einen neuen Absatz zum Container hinzu und beenden dies nach zehn Absätzen.
Jeder Absatz wird beim Hinzufügen protokolliert, sodass Sie sehen können, ob darauf ein neuer Eintrag folgt.

```js
const maxParagraphs = 10;
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

Als Nächstes protokollieren wir, wann der Benutzer zum ersten Mal in dem scrollbaren `<div>` scrollt. So können Sie sehen, wann die Meldung von Einträgen endet.

```js
document.querySelector("#scroll-box").addEventListener(
  "scroll",
  () => {
    log("Scrolled: no further entries expected");
  },
  { once: true },
);
```

Zum Schluss fügen wir einen Handler für Klickereignisse hinzu, der das Beispiel durch Neuladen der Seite zurücksetzt.

```js
document.querySelector("#reset").addEventListener("click", () => {
  window.location.reload();
});
```

#### Ergebnis

Anfangs folgt auf jeden hinzugefügten Absatz ein neuer Eintrag.
Scrollen Sie zu einem beliebigen Zeitpunkt im scrollbaren Bereich: Danach werden weiterhin Absätze hinzugefügt, aber keine weiteren Einträge protokolliert.
Klicken Sie auf die Schaltfläche **Reset**, um das Beispiel neu zu starten.

{{EmbedLiveSample("Observing that scrolling stops reporting", "100%", 550)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
- HTML-Attribut [`containertiming`](/de/docs/Web/HTML/Reference/Global_attributes/containertiming)
- HTML-Attribut [`containertimingignore`](/de/docs/Web/HTML/Reference/Global_attributes/containertimingignore)
- [`HTMLElement.containerTiming`](/de/docs/Web/API/HTMLElement/containerTiming)
- [`HTMLElement.containerTimingIgnore`](/de/docs/Web/API/HTMLElement/containerTimingIgnore)
