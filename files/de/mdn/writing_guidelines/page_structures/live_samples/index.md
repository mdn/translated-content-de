---
title: Live-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

MDN unterstützt die Anzeige von Codeblöcken innerhalb der Artikel als _Live-Beispiele_, damit Leser sowohl den Code als auch dessen Ausgabe sehen können, wie sie auf einer Webseite aussehen würde. Diese Funktion ermöglicht es den Lesern, genau zu verstehen, welches Ergebnis der ausgeführte Code produziert, und macht die Dokumentation dynamisch und informativ. Darüber hinaus können Autoren sicherstellen, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe liefern und in verschiedenen Browsern korrekt funktionieren.

Das Live-Beispielsystem kann Codeblöcke in HTML, CSS und JavaScript, unabhängig von der Reihenfolge, in der sie auf der Seite geschrieben sind, verarbeiten. Dies stellt sicher, dass die Ausgabe dem kombinierten Quellcode entspricht, da das System den Code direkt auf der Seite ausführt.

Im Gegensatz zu [Interaktiven Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_available) bieten Live-Beispiele keine eingebaute Unterstützung zum Erfassen von Konsolenlogs oder zum Zurücksetzen von Beispielen, die durch Benutzereingaben verändert wurden. Der Abschnitt [Beispiele](#styling_a_paragraph) zeigt, wie Sie diese und andere nützliche Funktionen implementieren können.

## Wie funktioniert das Live-Beispielsystem?

Das Live-Beispielsystem gruppiert Codeblöcke, integriert sie in HTML und rendert das HTML in einem {{HTMLElement("iframe")}}. Ein Live-Beispiel besteht aus zwei Teilen:

- Einem oder mehreren Codeblöcken, die zusammengefasst sind
- Einem Makroaufruf, der das Ergebnis der kombinierten Codeblöcke in einem {{HTMLElement("iframe")}} anzeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat einen Sprachbezeichner — `html`, `css` oder `js` — der angibt, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die Sprachbezeichner müssen auf den entsprechenden Codeblöcken vorhanden sein, und ein Makroaufruf (`EmbedLiveSample`) muss auf der Seite vorhanden sein, um die Ausgabe anzuzeigen:

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

Das Live-Beispielsystem ermöglicht die Gruppierung von Codeblöcken auf verschiedene Weise, um die Ausgabe effektiv anzuzeigen. Der nächste Abschnitt beschreibt diese Methoden.

### Gruppieren von Codeblöcken

Codeblöcke können auf zwei Arten gruppiert werden:

1. Durch die Verwendung der ID einer Überschrift oder eines Blockelements, das die Codeblöcke enthält, als Bezeichner
2. Durch Angabe eines String-Bezeichners zusammen mit Codeblöcken

Codeblöcke, die keinen Bezeichner explizit angeben, werden standardmäßig unter Verwendung der ID der Überschrift oder des Blockelements, das die Codeblöcke enthält, gruppiert. Der Bezeichner in diesem Fall ist die ID einer Überschrift oder eines Blockelements (wie einem {{HTMLElement("div")}}). Dies wird im folgenden Beispiel gezeigt, in dem `html` und `css` Codes innerhalb des Blocks "Styling a paragraph" verwendet werden, um die Ausgabe für den `EmbedLiveSample`-Makroaufruf zu generieren.

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

- Wenn die ID einem Blockelement gehört, umfasst die Gruppe alle Codeblöcke innerhalb des umschließenden Blockelements, dessen ID verwendet wird.
- Wenn die ID einer Überschrift gehört, umfasst die Gruppe alle Codeblöcke, die nach dieser Überschrift und vor der nächsten Überschrift derselben Überschriftenebene erscheinen. Beachten Sie, dass alle Codeblöcke unter Unterüberschriften der angegebenen Überschrift verwendet werden; wenn dies nicht die gewünschte Wirkung ist, verwenden Sie eine ID auf einem Blockelement oder einen String-Bezeichner.

Um Codeblöcke mit einem Bezeichner zu gruppieren, fügen Sie einen String im Format `live-sample___{IDENTIFIER}` zur Info-Zeichenfolge des Codeblocks hinzu. Der Bezeichner muss für die Codeblöcke, die Sie gruppieren möchten, eindeutig sein. Zum Beispiel verwendet `live-sample___color-picker` `color-picker` als Bezeichner für das Live-Beispielsystem, und alle Codeblöcke mit `live-sample___color-picker` in ihrer Info-Zeichenfolge werden im Live-Beispiel kombiniert.
Das folgende Beispiel gruppiert einen CSS- und einen JavaScript-Codeblock zusammen mit dem Bezeichner `color-picker`:

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

Das Makro verwendet eine spezielle URL, die die ID enthält, um die Ausgabe für eine gegebene Gruppe von Codeblöcken abzurufen. Sie sollten diese URL niemals fest im Inhalt codieren — wenn Sie auf das Beispiel verlinken müssen, verwenden Sie das [`LiveSampleLink`](#styling_a_paragraph) Makro.

Der resultierende Frame (oder die Seite) ist sandboxed, sicher und kann technisch alles tun, was im Web funktioniert. Natürlich sollte der Code in der Praxis relevant für den Inhalt der Seite sein; jedes nicht zusammenhängende Material kann von der Editor-Community von MDN entfernt werden.

Das Live-Beispielsystem bietet viele Optionen, und wir werden versuchen, die Dinge Stück für Stück zu erklären.

### Live-Beispiel Makros

Es gibt zwei Makros, die Sie verwenden können, um Live-Beispiele darzustellen:

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) bettet ein Live-Beispiel in eine Seite ein
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link, der das Live-Beispiel auf einer neuen Seite öffnet

In vielen Fällen können Sie das `EmbedLiveSample`- oder `LiveSampleLink`-Makro zu Seiten mit wenig oder gar keiner zusätzlichen Arbeit hinzufügen! Solange das Beispiel durch die ID einer Überschrift identifiziert werden kann oder sich in einem Block mit einer verwendbaren ID befindet, sollte das Hinzufügen des Makros die Aufgabe erfüllen.

#### EmbedLiveSample-Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow)}}
```

- sample_id
  - : Erforderlich: Dies kann der String-Bezeichner des Beispiels oder die ID der Überschrift oder des umschließenden Blocks sein, aus dem der Code entnommen werden soll. 
    Um zu überprüfen, ob Sie die richtige Überschrift-ID haben, schauen Sie in die URL des Abschnitts im Inhaltsverzeichnis der Seite; Sie können dies auch überprüfen, indem Sie sich den Quellcode der Seite ansehen.
- width {{deprecated_inline}}
  - : Das `width`-Attribut für das {{HTMLElement("iframe")}}, in `px` angegeben. Veraltet, da es keine Wirkung mehr hat: Live-Beispiele erstrecken sich immer über die gesamte Breite des Inhaltsbereichs.
- height
  - : Das `height`-Attribut des {{HTMLElement("iframe")}}, in `px` angegeben. Muss mindestens `60` sein. Dies ist optional; eine vernünftige Standardhöhe wird verwendet, wenn Sie es weglassen.
- screenshot_URL {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Beispiel aussehen sollte. Veraltet; fügen Sie nur Live-Beispiele hinzu, wenn es eine angemessene Browserunterstützung gibt.
- page_slug {{deprecated_inline}}
  - : Der Slug der Seite, die das Beispiel enthält; dies ist optional, und wenn es nicht angegeben ist, wird das Beispiel von derselben Seite abgerufen, auf der das Makro verwendet wird. Veraltet; fügen Sie nur Live-Beispiele hinzu, wenn der Code auf derselben Seite ist.
- class_name {{deprecated_inline}}
  - : Der Klassenname, der auf das {{HTMLElement("iframe")}} angewendet werden soll. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- allow
  - : Das `allow`-Attribut für das {{HTMLElement("iframe")}}. Dies ist optional; standardmäßig sind keine erlaubten Funktionen vorhanden.

#### LiveSampleLink-Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- block_ID
  - : Die ID der Überschrift oder des umschließenden Blocks, aus dem der Code entnommen werden soll. 
    Der beste Weg, um sicherzustellen, dass Sie die richtige ID haben, ist, die URL des Abschnitts im Inhaltsverzeichnis der Seite anzusehen; Sie können dies auch überprüfen, indem Sie sich den Quellcode der Seite ansehen.
- link_text
  - : Ein String, der als Linktext verwendet wird.

## Verwendung des Live-Beispielsystems

Die folgenden Abschnitte beschreiben einige häufige Anwendungsfälle für das Live-Beispielsystem.

### Formatierung von Live-Beispielen

Wenn Sie ein Live-Beispiel im Abschnitt "Beispiele" schreiben, geben Sie eine beschreibende H3-Überschrift (`###`) für dieses Live-Beispiel an. Schreiben Sie idealerweise eine kurze Beschreibung des Beispiels, die das Szenario und das, was Sie demonstrieren möchten, erklärt. Fügen Sie dann Unterabschnitte mit den folgenden H4-Überschriften (`####`) in der Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in den oben aufgeführten entsprechenden Unterabschnitten.

Im **Ergebnis**-Unterabschnitt fügen Sie den Aufruf des `EmbedLiveSample`-Makros hinzu. Bevorzugen Sie es, in diesem Unterabschnitt noch etwas Prosa hinzuzufügen, um das Ergebnis zu beschreiben.

Wenn Sie keinen bestimmten Sprachtyp verwenden (zum Beispiel, wenn Sie kein JavaScript verwenden) oder wenn Sie den Codeblock ausblenden, sollten Sie die entsprechende Überschrift weglassen.

### Code ausblenden

Manchmal möchten Sie lediglich den statischen Codeblock anzeigen, der sich auf das Beispielfenster innerhalb einer Seite bezieht. Sie benötigen jedoch trotzdem die HTML-, CSS- und JavaScript-Codeblöcke, um ein solches Beispiel zu rendern.

Um dies zu erreichen, können Sie alle Codeblöcke ausblenden, die nicht relevant sind, indem Sie das `hidden` Info-String zum Sprachbezeichner hinzufügen. Wenn Sie dies tun, lassen Sie die Überschriften `### HTML/CSS/JavaScript` für die ausgeblendeten Codeblöcke weg.

Das obige Beispiel verwendet, zeigt aber den HTML-Code nicht, würde so aussehen:

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

### Codeausschnitte in Live-Beispiele umwandeln

Ein häufiges Anwendungsszenario besteht darin, vorhandene Codeausschnitte, die bereits auf MDN gezeigt werden, in Live-Beispiele zu verwandeln.
Der erste Schritt besteht darin, entweder Codeausschnitte hinzuzufügen oder sicherzustellen, dass die vorhandenen bereit sind, um als Live-Beispiele verwendet zu werden, sowohl inhaltlich als auch in ihrer Markupstruktur. Die Codeausschnitte müssen zusammen ein vollständiges, lauffähiges Beispiel bilden. Wenn der vorhandene Ausschnitt beispielsweise nur CSS zeigt, müssen Sie möglicherweise einen HTML-Ausschnitt hinzufügen, auf den das CSS angewendet wird.

Jedes Code-Stück muss sich in einem Codeblock befinden, mit einem separaten Block für jede Sprache, korrekt markiert, welche Sprache es betrifft. Meistens wurde dies bereits getan, aber es lohnt sich immer, doppelt zu überprüfen, dass jedes Stück Code mit der richtigen Syntaxkonfiguration versehen ist. Dies erfolgt mit einem Sprachbezeichner auf dem Codeblock von `language-type`, wobei _language-type_ der Sprachtyp ist, den der Block enthält, z.B. `html`, `css` oder `js`.

> [!NOTE]
> Sie können mehr als einen Block für jede Sprache haben; sie werden alle zusammengefügt. Dies ermöglicht es Ihnen, einen Codeabschnitt zu haben, gefolgt von einer Erklärung, wie er funktioniert, dann einen weiteren Abschnitt und so weiter. Dies erleichtert die Erstellung von Tutorials und ähnlichen Inhalten, die Live-Beispiele enthalten, die mit erklärendem Text durchsetzt sind.

Stellen Sie also sicher, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils korrekt für das Syntax-Highlighting dieser Sprache konfiguriert sind, und schon sind Sie bereit.

## Beispiele

Dieser Abschnitt enthält Beispiele, die zeigen, wie das Live-Beispielsystem verwendet werden kann, einschließlich der verschiedenen Arten, die Codeblöcke zu gruppieren, die ein Beispiel bilden, und wie man Protokollausgaben in Ihre Beispiele aufnimmt.

Beachten Sie, dass die Überschriften für Codeblöcke ("HTML", "CSS" oder "JavaScript") in den meisten MDN-Beispielen verwendet werden, aber vom Live-Beispiel-Makro nicht zwingend erforderlich sind.

### Gruppieren von Codeblöcken nach Überschrift

#### HTML

Dieses HTML erstellt einen Absatz und einige Blöcke, die uns helfen, eine Nachricht zu positionieren und zu gestalten.

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

#### CSS

Der CSS-Code gestaltet die Box sowie den darin enthaltenen Text.

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

Im JavaScript-Beispiel verknüpfen wir einen Ereignishandler mit dem Text "Hallo Welt!", der diesen beim Anklicken umschaltet.

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

Hier ist das Ergebnis der Ausführung der obigen Codeblöcke über `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}`:

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

Hier ist ein Link, der sich aus dem Aufruf dieser Codeblöcke über `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}` ergibt:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Gruppieren von Codeblöcken nach Bezeichner

Dieses HTML erstellt einen Absatz und einige Blöcke, die uns helfen, eine Nachricht zu positionieren und zu gestalten. Der String `live-sample___hello-world` wurde zum `html`-Sprachbezeichner für diesen Codeblock hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code gestaltet die Box sowie den darin enthaltenen Text. Der String `live-sample___hello-world` wurde zum `css`-Sprachbezeichner für diesen Codeblock hinzugefügt.

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

Dieser JavaScript-Code fügt dem Text "Hallo Welt!" einen Ereignishandler hinzu, der diesen beim Anklicken umschaltet. Der String `live-sample___hello-world` wurde ebenfalls zum `js`-Sprachbezeichner für diesen Codeblock hinzugefügt.

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

Wir erhalten diese Ausgabe, indem wir die obigen Codeblöcke mit dem String-Bezeichner `hello-world` im `\{{EmbedLiveSample('hello-world')}}`-Makroaufruf ausführen:

{{EmbedLiveSample("hello-world")}}

### Anzeige eines `<iframe>` einer bestimmten Größe

Verwenden Sie das `height`-Parameter, um die Größe des `<iframe>`-Elements anzugeben, das die Live-Beispielausgabe enthält.

```html
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Zulassen von Funktionen

Das `allow`-Parameter kann verwendet werden, um die Funktionen anzugeben, die im `<iframe>`-Element erlaubt sind, das die Live-Beispielausgabe enthält. Die verfügbaren Werte stammen aus der [Berechtigungsrichtlinien-Syntax für Frames](/de/docs/Web/HTTP/Permissions_Policy#embedded_frame_syntax).

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

### Anzeige eines einzelnen Protokolleintrags

Dieses Beispiel zeigt, wie Sie ein einfaches einzeiliges Protokoll in Ihr Live-Beispiel implementieren können, bei dem der vorherige Wert immer dann ersetzt wird, wenn ein neuer Protokolleintrag hinzugefügt wird.

Zur Klarheit wird dieses Beispiel den Protokollierungscode und den Code, der ihn verwendet, getrennt betrachten, und der Protokollierungscode wird zuerst angezeigt.
Im Allgemeinen sollten Sie bei der Implementierung Ihrer eigenen Beispiele die Protokollierungselemente unter den anderen UI-Elementen platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet eine viel bessere Benutzererfahrung als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Protokollausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie anschließend die Protokollierfunktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und ersetzt den bestehenden Protokolleintrag durch diesen.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Beachten Sie, dass der Inhalt des Protokollelements mit der `innerText`-Eigenschaft gesetzt wird, was sicherer ist als die Verwendung von `innerHTML`, da der protokollierte Text nicht zu HTML geparst wird (was möglicherweise schädlichen Code einschleusen könnte).

#### CSS

Das CSS legt die Höhe des Protokollelements fest.

```css
#log {
  height: 20px;
}
```

#### Testcode zur Protokollierung

Dieses Beispiel soll zeigen, "wie man protokolliert", daher ist "was protokolliert wird" nicht von großer Bedeutung.
Es wird daher trivial als Schaltfläche implementiert, die der Benutzer drückt, um einen Wert zu inkrementieren.

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

Drücken Sie die Taste, um neuen Protokollinhalt hinzuzufügen.

{{EmbedLiveSample("Displaying a single entry log", "100%", "80px")}}

### Anzeige eines Protokolls, das Elemente anfügt

Dieses Beispiel zeigt, wie Sie in Ihrem Live-Beispiel eine einfache "Logging-Konsole" implementieren können.
Die Konsole fügt bei jedem Hinzufügen eines Protokolls eine neue Zeile am Ende der Ausgabe an, wobei das neue Element in den sichtbaren Bereich gescrollt wird.

Zur Klarheit wird dieses Beispiel den Protokollierungscode und den Code, der ihn verwendet, getrennt betrachten, und der Protokollierungscode wird zuerst angezeigt.
Im Allgemeinen sollten Sie bei der Implementierung Ihrer eigenen Beispiele die Protokollierungselemente unter den anderen UI-Elementen platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet eine viel bessere Benutzererfahrung als die Verwendung von `console.log()`.

> [!NOTE]
> Siehe [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) für ein umfassenderes Beispiel.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Protokollausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie anschließend die Protokollierfunktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und fügt ihn als neue Zeile zum Inhalt des Protokollelements hinzu.
Die Funktion setzt auch das Element `scrollTop` auf die `scrollHeight` des Elements, was die neue Protokollzeile in den sichtbaren Bereich scrollt.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie im vorherigen Beispiel setzen wir den Inhalt mit der `innerText`-Eigenschaft, da diese weniger anfällig für schädlichen Code ist als die Verwendung von `innerHTML`.

#### CSS

Das CSS fügt Bildlaufleisten hinzu, wenn der Inhalt des Elements überläuft, setzt die Höhe des Protokollelements und fügt einen Rahmen hinzu.
Es wird jedoch sicherstellt, dass, selbst wenn es überläuft, durch die oben beschrieben JavaScript den neuen Protokolleintrag in den sichtbaren Bereich scrollt.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Testcode zur Protokollierung

Dieses Beispiel soll zeigen, "wie man protokolliert", daher ist "was protokolliert wird" nicht von großer Bedeutung.
Es wird daher trivial als Schaltfläche implementiert, die der Benutzer drückt, um einen Wert zu inkrementieren.

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

Drücken Sie die Taste, um neuen Protokollinhalt hinzuzufügen.

{{EmbedLiveSample("Displaying a log that appends items", "100%", "180px")}}

### Anzeige eines Zurücksetzen-Buttons

Ein Zurücksetzen-Button kann für Beispiele hilfreich sein, die nicht wieder in ihren Ausgangszustand versetzt werden können, ohne die Seite zurückzusetzen. Zum Beispiel benötigt das [Highlight.priority "Einstellen der Priorität" Beispiel](/de/docs/Web/API/Highlight/priority#result_2) einen Reset-Button, da sobald Sie entweder die Priorität gesetzt haben, der Ausgangszustand nicht mehr verfügbar ist.

Dieses Beispiel zeigt, wie Sie einen Zurücksetzen-Button zu dem oben genannten Beispiel [Anzeige eines Protokolls, das Elemente anfügt](#css) hinzufügen.
Beachten Sie, dass der JavaScript- und der CSS-Code für die Protokollierung derselbe ist wie im vorherigen Beispiel, sodass dieser Code ausgeblendet wird.

#### HTML

Das HTML für das Beispiel enthält jetzt einen Zurücksetzen-Button.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für den Button fügt eine `click`-Ereignishandlerfunktion hinzu, die einfach den Frame mit dem aktuellen Beispiel neu lädt.

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

## Konventionen bezüglich Live-Beispielen

- Reihenfolgen von Codeblöcken
  - : Beim Hinzufügen eines Live-Beispiels sollten die Codeblöcke so sortiert sein, dass der erste dem Hauptsprachtyp für dieses Beispiel entspricht (falls vorhanden). Zum Beispiel sollte beim Hinzufügen eines Live-Beispiels für das HTML-Referenzdokument der erste Block HTML sein, beim Hinzufügen eines Live-Beispiels für das CSS-Referenzdokument sollte es CSS sein, und so weiter.
- Benennung von Überschriften
  - : Wenn keine Ambiguität besteht (z.B. das Beispiel steht unter einem Abschnitt "Beispiele"), sollten die Überschriften unkompliziert mit dem alleinigen Namen der jeweiligen Sprache sein: HTML, CSS, JavaScript, SVG, etc. (siehe oben). Überschriften wie "HTML Content" oder "JavaScript Content" sollten nicht verwendet werden. Wenn jedoch eine solche kurze Überschrift den Inhalt unklar macht, kann man einen durchdachteren Titel verwenden.
- Verwendung eines "Ergebnis"-Blocks
  - : Nach den verschiedenen Codeblöcken nutzen Sie bitte einen letzten "Ergebnis"-Block, bevor Sie das `EmbedLiveSample`-Makro verwenden (siehe oben). Auf diese Weise wird die Semantik des Beispiels sowohl für den Leser als auch für Werkzeuge, die die Seite analysieren (z.B. Screenreader, Webcrawler), klarer.
