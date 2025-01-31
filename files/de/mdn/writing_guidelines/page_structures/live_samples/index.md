---
title: Live-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

MDN unterstützt die Anzeige von Codeblöcken innerhalb der Artikel als _Live-Beispiele_, die es den Lesern ermöglichen, sowohl den Code als auch seine Ausgabe zu sehen, wie sie auf einer Webseite aussehen würde. Diese Funktion erlaubt es den Lesern, genau zu verstehen, was der ausgeführte Code produzieren würde, und macht die Dokumentation dynamisch und lehrreich. Es ermöglicht auch den Autoren, absolut sicherzustellen, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe haben und ordnungsgemäß funktionieren, wenn sie mit verschiedenen Browsern verwendet werden.

Das Live-Beispielsystem kann Codeblöcke verarbeiten, die in HTML, CSS und JavaScript geschrieben sind, unabhängig von der Reihenfolge, in der sie auf der Seite geschrieben sind. Dies stellt sicher, dass die Ausgabe dem kombinierten Quellcode entspricht, da das System den Code direkt innerhalb der Seite ausführt.

Im Gegensatz zu [Interaktiven Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_available) bieten Live-Beispiele keine integrierte Unterstützung für das Erfassen von Konsolenprotokollen oder das Zurücksetzen von Beispielen, die durch Benutzereingaben geändert wurden. Der Abschnitt [Beispiele](#beispiele) zeigt, wie Sie diese und andere nützliche Funktionen implementieren können.

## Wie funktioniert das Live-Beispielsystem?

Das Live-Beispielsystem gruppiert Codeblöcke, kombiniert sie zu HTML und rendert das HTML in einem {{HTMLElement("iframe")}}.
Ein Live-Beispiel besteht aus zwei Teilen:

- Ein oder mehrere Codeblöcke, die zusammen gruppiert werden
- Ein Makroaufruf, der das Ergebnis der kombinierten Codeblöcke in einem {{HTMLElement("iframe")}} zeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat einen Sprachidentifikator — `html`, `css` oder `js` — der angibt, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die Sprachidentifikatoren müssen in den entsprechenden Codeblöcken sein, und auf der Seite muss ein Makroaufruf (`EmbedLiveSample`) vorhanden sein, um die Ausgabe anzuzeigen:

````md
## Examples

```html
<!-- HTML code -->
```

```css
/* CSS code */
```

\{{EmbedLiveSample("Examples")}}
````

Das Live-Beispielsystem erlaubt die Gruppierung von Codeblöcken auf verschiedene Weisen, um die Ausgabe effektiv darzustellen. Der nächste Abschnitt beschreibt diese Methoden.

### Gruppierung von Codeblöcken

Codeblöcke können auf zwei Arten gruppiert werden:

1. Verwenden der ID eines Überschriften- oder Blockelements, das die Codeblöcke als Identifikator enthält
2. Festlegen eines String-Identifikators zusammen mit Codeblöcken

Codeblöcke, die nicht explizit einen Identifikator angeben, werden standardmäßig mit der ID der Überschrift oder des Blockelements gruppiert, das die Codeblöcke enthält. Der Identifikator ist in diesem Fall die ID einer Überschrift oder eines Blockelements (wie ein {{HTMLElement("div")}}). Dies wird im folgenden Beispiel gezeigt, wo `html`- und `css`-Codes innerhalb des Blocks "Styling a paragraph" verwendet werden, um die Ausgabe für den `EmbedLiveSample`-Makroaufruf zu erzeugen.

````md
## Examples

### Styling a paragraph

In this example, we're using CSS to style paragraphs that have the `fancy` class set.

#### HTML

```html
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Result

\{{EmbedLiveSample("Styling a paragraph")}}

Only the `<p>` element with `class="fancy"` will get styled `red`.
````

- Wenn die ID zu einem Blockelement gehört, umfasst die Gruppe alle Codeblöcke innerhalb des umschließenden Blockelements, dessen ID verwendet wird.
- Wenn die ID zu einer Überschrift gehört, umfasst die Gruppe alle Codeblöcke, die nach dieser Überschrift und vor der nächsten Überschrift derselben Ebene liegen. Beachten Sie, dass Codeblöcke unter Unterüberschriften der angegebenen Überschrift alle verwendet werden; wenn dies nicht der gewünschte Effekt ist, verwenden Sie eine ID auf einem Blockelement oder verwenden Sie stattdessen einen String-Identifikator.

Um Codeblöcke mit einem Identifikator zu gruppieren, fügen Sie der Infostring des Codeblocks einen String im Format `live-sample___{IDENTIFIER}` hinzu. Der Identifikator muss eindeutig für die Codeblöcke sein, die Sie gruppieren möchten. Zum Beispiel verwendet `live-sample___color-picker` den Identifikator `color-picker` für das Live-Beispielsystem, und alle Codeblöcke mit `live-sample___color-picker` in ihrer Infostring werden im Live-Beispiel kombiniert. Das folgende Beispiel gruppiert einen CSS- und einen JavaScript-Codeblock zusammen, wobei der Identifikator `color-picker` verwendet wird:

````md
## Examples

### Styling a paragraph

In this example, we're using CSS to style paragraphs that have the `fancy` class set.

```html live-sample___paragraph-styling
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

```css live-sample___paragraph-styling
p.fancy {
  color: red;
}
```

Only the `<p>` element with `class="fancy"` will get styled `red`:

\{{EmbedLiveSample("paragraph-styling")}}
````

Das Makro verwendet eine spezielle URL, die die ID enthält, um die Ausgabe für eine bestimmte Gruppe von Codeblöcken abzurufen. Sie sollten diese URL niemals hartkodiert in den Inhalt einfügen — wenn Sie auf das Beispiel verlinken müssen, verwenden Sie das Makro [`LiveSampleLink`](#livesamplelink-makro).

Das resultierende Frame (oder die Seite) ist sandboxed, sicher und kann technisch alles tun, was im Web funktioniert. Natürlich sollte der Code als praktische Angelegenheit relevant für den Inhalt der Seite sein; jedes unpassende Material unterliegt der Entfernung durch die Editor-Community von MDN.

Das Live-Beispielsystem hat viele verfügbare Optionen, und wir versuchen, die Dinge Stück für Stück zu erklären.

### Live-Beispiel-Makros

Es gibt zwei Makros, die Sie verwenden können, um Live-Beispiele anzuzeigen:

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) bettet ein Live-Beispiel in eine Seite ein
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link, der das Live-Beispiel in einer neuen Seite öffnet

In vielen Fällen können Sie das Makro `EmbedLiveSample` oder `LiveSampleLink` zu Seiten mit wenig oder keiner zusätzlichen Arbeit hinzufügen! Solange das Beispiel durch eine ID einer Überschrift identifiziert werden kann oder sich in einem Block mit einer ID befindet, die Sie verwenden können, sollte das Hinzufügen des Makros ausreichen.

#### EmbedLiveSample-Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow)}}
```

- sample_id
  - : Erforderlich: Dies kann der String-Identifikator des Beispiels oder die ID der Überschrift oder des umschließenden Blocks sein, von dem der Code genommen wird.
    Um zu überprüfen, ob Sie die richtige Überschriften-ID haben, sehen Sie sich die URL des Abschnitts im Inhaltsverzeichnis der Seite an; Sie können es auch überprüfen, indem Sie den Quellcode der Seite anzeigen.
- width {{deprecated_inline}}
  - : Das `width`-Attribut für das {{HTMLElement("iframe")}}, angegeben in `px`. Veraltet, da es keine Wirkung mehr hat: Live-Beispiele erstrecken sich immer über die volle Breite des Inhaltsbereichs.
- height
  - : Das `height`-Attribut des {{HTMLElement("iframe")}}, angegeben in `px`. Muss mindestens `60` betragen. Dies ist optional; eine vernünftige Standardhöhe wird verwendet, wenn Sie dies weglassen.
- screenshot_URL {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Beispiel aussehen sollte. Veraltet; Live-Beispiele sollten nur hinzugefügt werden, wenn es eine vernünftige Browserunterstützung gibt.
- page_slug {{deprecated_inline}}
  - : Der Slug der Seite, die das Beispiel enthält; dies ist optional, und wenn es nicht angegeben ist, wird das Beispiel von derselben Seite genommen, auf der das Makro verwendet wird. Veraltet; Live-Beispiele sollten nur enthalten sein, wenn der Code auf derselben Seite ist.
- class_name {{deprecated_inline}}
  - : Der Klassenname, der auf das {{HTMLElement("iframe")}} angewendet wird. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- allow
  - : Das `allow`-Attribut für das {{HTMLElement("iframe")}}. Dies ist optional; standardmäßig sind keine erlaubten Funktionen vorhanden.

#### LiveSampleLink-Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- block_ID
  - : Die ID der Überschrift oder des umschließenden Blocks, von dem der Code genommen wird. Der beste Weg, um sicherzustellen, dass die ID richtig ist, ist, die URL des Abschnitts im Inhaltsverzeichnis der Seite anzusehen; Sie können es auch überprüfen, indem Sie den Quellcode der Seite anzeigen.
- link_text
  - : Eine Zeichenkette, die als Linktext verwendet werden soll.

## Verwendung des Live-Beispielsystems

Die folgenden Abschnitte beschreiben einige gängige Anwendungsfälle für das Live-Beispielsystem.

### Formatierung von Live-Beispielen

Wenn Sie ein Live-Beispiel im Abschnitt "Beispiele" erstellen, geben Sie eine beschreibende H3-Überschrift (`###`) für dieses Live-Beispiel an. Schreiben Sie idealerweise eine kurze Beschreibung des Beispiels, die das Szenario erklärt und was Sie zu demonstrieren hoffen. Fügen Sie dann Unterabschnitte mit den folgenden H4-Überschriften (`####`) in der unten aufgeführten Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in die jeweiligen oben aufgeführten Unterabschnitte.

Im **Ergebnis**-Unterabschnitt fügen Sie den Aufruf zum `EmbedLiveSample`-Makro hinzu. Fügen Sie vorzugsweise noch etwas mehr Text in diesen Unterabschnitt ein, um das Ergebnis zu beschreiben.

Wenn Sie keinen bestimmten Sprachtyp verwenden (zum Beispiel, wenn Sie kein JavaScript verwenden) oder wenn Sie den Codeblock ausblenden, sollten Sie die entsprechende Überschrift weglassen.

### Ausblenden von Code

Manchmal möchten Sie nur den statischen Codeblock anzeigen, der zu dem auf einer Seite gerenderten Beispiel gehört. Sie benötigen jedoch immer noch die HTML-, CSS- und JavaScript-Codeblöcke, um ein solches Beispiel zu rendern.

Um dies zu erreichen, können Sie alle nicht relevanten Codeblöcke ausblenden, indem Sie den `hidden`-Infostring zum Sprachidentifikator hinzufügen. Wenn Sie dies tun, lassen Sie die `### HTML/CSS/JavaScript`-Überschriften für die ausgeblendeten Codeblöcke weg.

Das obige Beispiel, jedoch mit ausgeblendetem HTML-Code, würde so aussehen:

````md
## Examples

### Styling a paragraph

In this example, we're using CSS to style paragraphs that have the `fancy` class set.

```html hidden
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

#### CSS

```css
p.fancy {
  color: red;
}
```

#### Result

Only the `<p>` element with `class="fancy"` will get styled `red`.

\{{EmbedLiveSample("Styling a paragraph")}}
````

### Umwandeln von Code-Snippets in Live-Beispiele

Ein häufiger Anwendungsfall ist das Umwandeln bestehender auf MDN gezeigter Code-Snippets in Live-Beispiele.
Der erste Schritt besteht darin, entweder Code-Snippets hinzuzufügen oder sicherzustellen, dass vorhandene so vorbereitet sind, dass sie als Live-Beispiele verwendet werden können, sowohl in Bezug auf den Inhalt als auch in Bezug auf ihr Markup. Die Code-Snippets müssen zusammen eine vollständige, lauffähige Beispielanwendung bilden. Beispielsweise müssen Sie, wenn das vorhandene Snippet nur CSS zeigt, ein HTML-Snippet hinzufügen, damit das CSS funktionieren kann.

Jedes Code-Stück muss sich in einem Codeblock befinden, mit einem separaten Block für jede Sprache, korrekt markiert, um welche Sprache es sich handelt. In den meisten Fällen wurde dies bereits getan, aber es lohnt sich immer, doppelt zu überprüfen, dass jedes Code-Stück mit der richtigen Syntax konfiguriert ist. Dies geschieht mit einem Sprachidentifikator im Codeblock des `language-type`, wobei _language-type_ der Typ der Sprache ist, den der Block enthält, z.B. `html`, `css` oder `js`.

> [!NOTE]
> Sie können mehr als einen Block für jede Sprache haben; alle werden miteinander verknüpft. Dies ermöglicht es, einen Code-Abschnitt zu haben, gefolgt von einer Erklärung, wie er funktioniert, dann einen weiteren Abschnitt und so weiter. Dies erleichtert es, Tutorials und Ähnliches zu produzieren, die Live-Beispiele enthalten, die mit erklärendem Text durchsetzt sind.

Stellen Sie also sicher, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils richtig für die Syntaxhervorhebung dieser Sprache konfiguriert sind, und Sie sind bereit.

## Beispiele

Dieser Abschnitt enthält Beispiele, die zeigen, wie das Live-Beispielsystem verwendet werden kann, einschließlich der verschiedenen Möglichkeiten, die Codeblöcke, die ein Beispiel umfassen, zu gruppieren und wie man Protokollausgaben in Ihren Beispielen anzeigt.

Beachten Sie, dass die Überschriften für Codeblöcke ("HTML", "CSS" oder "JavaScript") aus Konventionsgründen in den meisten MDN-Beispielen verwendet werden, aber nicht tatsächlich vom Live-Beispiel-Makro erforderlich sind.

### Gruppierung von Codeblöcken nach Überschrift

#### HTML

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns zu helfen, eine Nachricht zu positionieren und zu stylen.

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

#### CSS

Der CSS-Code stylt die Box sowie den Text darin.

```css
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

#### JavaScript

Im JavaScript-Beispiel hängen wir einen Ereignishandler an den Text "Hello world!", der ihn bei Klick umschaltet.

```js
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "Hello world! Welcome to MDN"
    : "Owww, stop poking me!";
  toggleClick = !toggleClick;
};
```

#### Ergebnis

Hier ist das Ergebnis des Ausführens der oben genannten Codeblöcke über `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}`:

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

Hier ist ein Link, der aus dem Aufruf dieser Codeblöcke über `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}` resultiert:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Gruppierung von Codeblöcken nach Identifikator

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns zu helfen, eine Nachricht zu positionieren und zu stylen. Der String `live-sample___hello-world` wurde dem `html`-Sprachidentifikator für diesen Codeblock hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code stylt die Box sowie den Text darin. Der String `live-sample___hello-world` wurde dem `css`-Sprachidentifikator für diesen Codeblock hinzugefügt.

```css live-sample___hello-world
.box {
  width: 200px;
  border-radius: 6px;
  padding: 20px;
  background-color: #ffaabb;
}

#item {
  font-weight: bold;
  text-align: center;
  font-family: sans-serif;
  font-size: 1.5em;
}
```

Dieser JavaScript-Code hängt einen Ereignishandler an den Text "Hello world!", der ihn bei Klick umschaltet. Der String `live-sample___hello-world` wurde dem `js`-Sprachidentifikator für diesen Codeblock ebenfalls hinzugefügt.

```js live-sample___hello-world
const el = document.getElementById("item");
let toggleClick = false;
el.onclick = function () {
  this.textContent = toggleClick
    ? "Hello world! Welcome to MDN"
    : "Owww, stop poking me!";
  toggleClick = !toggleClick;
};
```

Wir erhalten diese Ausgabe, indem wir die obigen Codeblöcke mit dem String-Identifikator `hello-world` im `\{{EmbedLiveSample('hello-world')}}`-Makroaufruf ausführen:

{{EmbedLiveSample("hello-world")}}

### Anzeige `<iframe>` einer bestimmten Größe

Verwenden Sie den `height`-Parameter, um die Größe des `<iframe>`-Elements festzulegen, das die Live-Beispielausgabe enthält.

```html
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Erlauben von Funktionen

Der `allow`-Parameter kann verwendet werden, um die Funktionen zu spezifizieren, die im `<iframe>`-Element, das die Live-Beispielausgabe enthält, erlaubt sind. Die verfügbaren Werte stammen aus der [Permission-Policy-Syntax für Frames](/de/docs/Web/HTTP/Permissions_Policy#embedded_frame_syntax).

```html
<div id="fullscreen-content">
  <button id="toggle-btn">Toggle fullscreen</button>
</div>
```

```js
const toggleBtn = document.getElementById("toggle-btn");
const fullscreenContent = document.getElementById("fullscreen-content");

toggleBtn.addEventListener("click", () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    fullscreenContent.requestFullscreen();
  }
});
```

Ergebnis von `\{{EmbedLiveSample("allowing_features", "", "60", "", "", "", "fullscreen")}}`:

{{EmbedLiveSample("allowing_features", "", "60", "", "", "", "fullscreen")}}

Ergebnis von `\{{EmbedLiveSample("allowing_features", "", "60")}}`:

{{EmbedLiveSample("allowing_features", "", "60")}}

### Anzeige eines einzelnen Log-Eintrags

Dieses Beispiel zeigt, wie man ein einfaches Einzelprotokoll in Ihrem Live-Beispiel implementiert, bei dem der vorherige Wert jedes Mal ersetzt wird, wenn ein neuer Protokolleintrag hinzugefügt wird.

Zur Klarheit trennt dieses Beispiel den Protokollierungs-Code und den Code, der ihn verwendet, und zeigt den Protokollierungs-Code zuerst an. Im Allgemeinen sollten Sie bei der Implementierung Ihrer eigenen Beispiele Protokollierungselemente unter anderen UI-Elementen platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet eine viel bessere Benutzererfahrung als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Protokollausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als Nächstes die Protokollierungsfunktion `log()`.
Dies nimmt den zu protokollierenden Text als Argument und verwendet ihn, um das bestehende Protokoll zu ersetzen.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Beachten Sie, dass der Inhalt des Protokollelements mit der Eigenschaft `innerText` gesetzt wird, was sicherer ist als die Verwendung von `innerHTML`, da der protokollierte Text nicht als HTML geparst wird (was potenziell bösartigen Code einschleusen könnte).

#### CSS

Das CSS setzt die Höhe des Protokollelements.

```css
#log {
  height: 20px;
}
```

#### Testcode für das Protokollieren

Dieses Beispiel soll zeigen, "wie man protokolliert", daher ist "was protokolliert wird" nicht so wichtig.
Daher ist es trivial als ein Button implementiert, den der Benutzer drücken kann, um einen Wert zu inkrementieren.

```html
<button id="increment" type="button">Press me many times</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`The button has been pressed ${incrementValue} time(s)`);
});
```

#### Ergebnis

Drücken Sie den Button, um neuen Protokollinhalt hinzuzufügen.

{{EmbedLiveSample("Displaying a single entry log", "100%", "80px")}}

### Anzeige eines Logs, das Elemente anhängt

Dieses Beispiel zeigt, wie man eine einfache "Protokoll-Konsole" in Ihrem Live-Beispiel implementiert.
Die Konsole fügt jedes Mal, wenn ein Protokoll hinzugefügt wird, eine neue Zeile am Ende der Ausgabe hinzu und scrollt das neue Element in die Ansicht.

Zur Klarheit trennt dieses Beispiel den Protokollierungs-Code und den Code, der ihn verwendet, und zeigt den Protokollierungs-Code zuerst an. Im Allgemeinen sollten Sie bei der Implementierung Ihrer eigenen Beispiele Protokollierungselemente unter anderen UI-Elementen platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet eine viel bessere Benutzererfahrung als die Verwendung von `console.log()`.

> [!NOTE]
> Siehe [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) für ein vollständigeres Beispiel.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Protokollausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als Nächstes die Protokollierungsfunktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und hängt ihn als neue Zeile an den Inhalt des Protokollelements an.
Die Funktion setzt auch das `scrollTop`-Element auf die `scrollHeight` des Elements, was erzwingt, dass die neue Zeile des Protokolltexts in die Ansicht gescrollt wird.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie bereits im vorherigen Beispiel setzen wir den Inhalt mit der Eigenschaft `innerText`, da dies weniger anfällig für bösartigen Code ist als die Verwendung von `innerHTML`.

#### CSS

Das CSS fügt Scrollbalken hinzu, wenn der Elementinhalt überläuft, setzt die Höhe des Protokollelements und fügt einen Rahmen hinzu.
Beachten Sie, dass das oben stehende JavaScript sicherstellt, dass bei Überlauf der Hinzuführung neuer Protokolltexte der Text in die Ansicht gescrollt wird.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Testcode für das Protokollieren

Dieses Beispiel soll zeigen, "wie man protokolliert", daher ist "was protokolliert wird" nicht so wichtig.
Daher ist es trivial als ein Button implementiert, den der Benutzer drücken kann, um einen Wert zu inkrementieren.

```html
<button id="increment" type="button">Press me many times</button>
```

```js
const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`The button has been pressed ${incrementValue} time(s)`);
});
```

#### Ergebnis

Drücken Sie den Button, um neuen Protokollinhalt hinzuzufügen.

{{EmbedLiveSample("Displaying a log that appends items", "100%", "180px")}}

### Anzeige einer Zurücksetzen-Schaltfläche

Eine Zurücksetzen-Schaltfläche kann hilfreich für Beispiele sein, die ohne Zurücksetzen der Seite nicht in ihren Ausgangszustand zurückgebracht werden können.
Zum Beispiel benötigt das Beispiel "Priorität setzen" von [`Highlight.priority`](/de/docs/Web/API/Highlight/priority#result_2) eine Zurücksetzen-Schaltfläche, denn sobald Sie eine der Prioritäten gesetzt haben, ist der Ausgangszustand nicht mehr verfügbar.

Dieses Beispiel zeigt, wie man eine Zurücksetzen-Schaltfläche zum Beispiel [Anzeige eines Logs, das Elemente anhängt](#anzeige_eines_logs,_das_elemente_anhängt) oben hinzufügt.
Beachten Sie, dass der JavaScript- und CSS-Code für das Protokollieren derselbe wie im vorherigen Beispiel ist, sodass dieser Code ausgeblendet wird.

#### HTML

Das HTML für das Beispiel enthält jetzt eine Zurücksetzen-Schaltfläche.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für die Schaltfläche fügt eine `click`-Ereignishandlerfunktion hinzu, die einfach das Frame neu lädt, das das aktuelle Beispiel enthält.

```js
const reload = document.querySelector("#reset");

reload.addEventListener("click", () => {
  window.location.reload(true);
});
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
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}

const incrementButton = document.querySelector("#increment");
let incrementValue = 0;
incrementButton.addEventListener("click", () => {
  incrementValue++;
  log(`The button has been pressed ${incrementValue} time(s)`);
});
```

#### Ergebnis

Klicken Sie mehrmals auf die Schaltfläche "Drücken Sie mich viele Male".
Setzen Sie das Beispiel zurück, indem Sie die Schaltfläche "Zurücksetzen" drücken.

{{EmbedLiveSample("Displaying a reset button", "100%", "180px")}}

## Konventionen bezüglich Live-Beispiele

- Reihenfolge der Codeblöcke
  - : Beim Hinzufügen eines Live-Beispiels sollten die Codeblöcke so sortiert werden, dass der erste Block der Hauptsprache für dieses Beispiel entspricht (falls vorhanden). Zum Beispiel sollte beim Hinzufügen eines Live-Beispiels für das HTML-Referenz der erste Block HTML sein, beim Hinzufügen eines Live-Beispiels für das CSS-Referenz sollte es CSS sein und so weiter.
- Benennung der Überschriften
  - : Wenn keine Zweideutigkeit besteht (z.B. das Beispiel befindet sich unter einem Abschnitt "Beispiele"), sollten die Überschriften einfach den korrespondierenden Sprachnamen enthalten: HTML, CSS, JavaScript, SVG, etc. (siehe oben). Überschriften wie "HTML Content" oder "JavaScript Content" sollten nicht verwendet werden. Wenn eine solch kurze Überschrift jedoch den Inhalt unklar macht, kann stattdessen ein durchdachter Titel verwendet werden.
- Verwendung eines "Ergebnis"-Blocks
  - : Nach den verschiedenen Codeblöcken verwenden Sie bitte einen letzten "Ergebnis"-Block, bevor Sie das `EmbedLiveSample`-Makro verwenden (siehe oben). Auf diese Weise wird die Semantik des Beispiels sowohl für den Leser als auch für alle Tools, die die Seite parsen würden (z.B. Bildschirmleser, Web-Crawler), klarer gemacht.
