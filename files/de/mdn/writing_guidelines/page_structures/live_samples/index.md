---
title: Live-Samples (EmbedLiveSample)
short-title: Live samples
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

MDN unterstützt die Anzeige von Codeblöcken innerhalb von Artikeln als _Live-Samples_, damit Leser sowohl den Quellcode als auch dessen Ausgabe, wie sie auf einer Webseite aussieht, sehen können.
Diese Funktion ermöglicht es den Lesern, genau zu verstehen, was der ausgeführte Code erzeugt, wodurch die Dokumentation dynamisch und lehrreich wird.
Es erlaubt den Autoren auch, absolut sicher zu sein, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe liefern und bei Verwendung mit verschiedenen Browsern ordnungsgemäß funktionieren.

Das Live-Sample-System kann Codeblöcke verarbeiten, die in HTML, CSS und JavaScript geschrieben sind, unabhängig von der Reihenfolge, in der sie auf der Seite geschrieben sind.
Dies stellt sicher, dass die Ausgabe dem kombinierten Quellcode entspricht, da das System den Code direkt innerhalb der Seite ausführt.

Im Gegensatz zu [interaktiven Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_on_mdn) bieten Live-Samples keine eingebaute Unterstützung für das Erfassen von Konsolenprotokollen oder das Zurücksetzen von Beispielen, die durch Benutzereingaben geändert wurden.
Der Abschnitt [Beispiele](#beispiele) zeigt, wie Sie diese und andere nützliche Funktionen implementieren können.

## Wie funktionieren Live-Samples?

Live-Samples gruppieren Codeblöcke, fügen sie zu HTML zusammen und rendern das HTML in einem {{HTMLElement("iframe")}}.
Ein Live-Sample besteht aus zwei Teilen:

- Einem oder mehreren zusammengefassten Codeblöcken
- Einem Makro-Aufruf, der das Ergebnis der Codeblöcke in einem {{HTMLElement("iframe")}} anzeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat einen Sprach-Identifikator — `html`, `css` oder `js` — der angibt, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die Sprach-Identifikatoren müssen sich auf den entsprechenden Codeblöcken befinden, und ein Makro-Aufruf (`EmbedLiveSample`) muss auf der Seite vorhanden sein, um die Ausgabe anzuzeigen:

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

Das Live-Sample-System ermöglicht die Gruppierung von Codeblöcken auf verschiedene Weise, um die Ausgabe effektiv anzuzeigen. Der nächste Abschnitt beschreibt diese Methoden.

### Gruppierung von Codeblöcken

Codeblöcke können auf zwei Arten gruppiert werden:

1. Verwendung der ID einer Überschrift oder eines Blockelements, das die Codeblöcke enthält, als Identifikator
2. Angabe eines Zeichenfolgenidentifikators zusammen mit Codeblöcken

Codeblöcke, die keinen expliziten Identifikator angeben, werden standardmäßig mit der ID der Überschrift oder des Blockelements, das die Codeblöcke enthält, zusammengefasst. Der Identifikator in diesem Fall ist die ID einer Überschrift oder eines Blockelements (wie ein {{HTMLElement("div")}}). Dies wird im folgenden Beispiel gezeigt, in dem `html`- und `css`-Codes innerhalb des Blocks "Styling a paragraph" verwendet werden, um die Ausgabe für den `EmbedLiveSample`-Makro-Aufruf zu erzeugen.

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

- Wenn die ID zu einem Blockelement gehört, umfasst die Gruppe alle Codeblöcke innerhalb des einschließenden Blockelements, deren ID verwendet wird.
- Wenn die ID zu einer Überschrift gehört, umfasst die Gruppe alle Codeblöcke, die nach dieser Überschrift und vor der nächsten Überschrift derselben Überschriftsebene enthalten sind. Beachten Sie, dass alle Codeblöcke unter Unterüberschriften der angegebenen Überschrift verwendet werden; wenn dies nicht der gewünschte Effekt ist, verwenden Sie eine ID auf einem Blockelement oder verwenden Sie stattdessen einen Zeichenfolgenidentifikator.

Um Codeblöcke mit einem Identifikator zu gruppieren, fügen Sie die Zeichenfolge `live-sample___{IDENTIFIER}` zur Info-Zeichenfolge des Codeblocks hinzu. Der Identifikator muss eindeutig für die Codeblöcke sein, die Sie gruppieren möchten. Zum Beispiel verwendet `live-sample___color-picker` `color-picker` als Identifikator für das Live-Sample-System, und alle Codeblöcke mit `live-sample___color-picker` in ihrer Info-Zeichenfolge werden im Live-Sample kombiniert.
Das folgende Beispiel gruppiert einen CSS- und einen JavaScript-Codeblock zusammen mit dem Identifikator `color-picker`:

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

Das Makro verwendet eine spezielle URL, die die ID enthält, um die Ausgabe für eine gegebene Gruppe von Codeblöcken abzurufen. Sie sollten diese URL niemals im Inhalt hartcodieren — wenn Sie auf das Beispiel verlinken müssen, verwenden Sie das [`LiveSampleLink`](#livesamplelink-makro)-Makro.

Der resultierende Rahmen (oder die Seite) ist sandboxed, sicher und kann theoretisch alles tun, was im Web funktioniert. Natürlich sollte der Code in praktischer Hinsicht relevant für den Inhalt der Seite sein; jegliches nicht verwandtes Material kann von der MDN-Redaktionsgemeinschaft entfernt werden.

Das Live-Sample-System bietet viele Optionen, und wir werden versuchen, die Dinge so weit herunterzubrechen, um sie Stück für Stück zu betrachten.

### Live-Sample-Makros

Es gibt zwei Makros, die Sie verwenden können, um Live-Samples darzustellen:

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) bettet ein Live-Sample in eine Seite ein
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link, der das Live-Sample auf einer neuen Seite öffnet

In vielen Fällen können Sie das `EmbedLiveSample`- oder `LiveSampleLink`-Makro zu Seiten mit wenig oder gar keiner zusätzlichen Arbeit hinzufügen! Solange das Sample über die ID einer Überschrift identifiziert werden kann oder sich in einem Block mit einer ID befindet, die Sie verwenden können, sollte das Hinzufügen des Makros die Arbeit erledigen.

#### EmbedLiveSample-Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow, sandbox)}}
```

- `sample_id`
  - : Erforderlich: Dies kann der Zeichenfolgenidentifikator des Samples oder die ID der Überschrift oder des umschließenden Blocks sein, aus dem der Code gezogen werden soll.
    Um zu überprüfen, ob Sie die richtige Überschriften-ID haben, schauen Sie sich die URL des Abschnitts im Inhaltsverzeichnis der Seite an; Sie können es auch überprüfen, indem Sie den Quellcode der Seite ansehen.
- `width` {{deprecated_inline}}
  - : Das `width`-Attribut für das {{HTMLElement("iframe")}}, angegeben in `px`. Veraltet, da es keinen Effekt mehr hat: Live-Beispiele erstrecken sich immer über die gesamte Breite des Inhaltsbereichs.
- `height`
  - : Das `height`-Attribut des {{HTMLElement("iframe")}}, angegeben in `px`. Muss mindestens `60` sein. Dies ist optional; eine vernünftige Standardhöhe wird verwendet, wenn Sie es weglassen.
- `screenshot_URL` {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Sample aussehen soll. Veraltet; fügen Sie Live-Samples nur dann hinzu, wenn eine angemessene Browser-Unterstützung vorhanden ist.
- `page_slug` {{deprecated_inline}}
  - : Der Slug der Seite, die das Sample enthält; dies ist optional, und wenn es nicht angegeben ist, wird das Sample von derselben Seite bezogen, auf der das Makro verwendet wird. Veraltet; Live-Samples sollten nur dann eingefügt werden, wenn sich der Code auf derselben Seite befindet.
- `class_name` {{deprecated_inline}}
  - : Der Klassenname, der auf das {{HTMLElement("iframe")}} angewendet werden soll. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- `allow`
  - : Das `allow`-Attribut für das {{HTMLElement("iframe")}}. Dies ist optional; von Haus aus sind keine erlaubten Funktionen vorhanden.
- `sandbox`
  - : Eine Zeichenkette, die die `sandbox`-Attribute enthält, die das Beispiel einschließen soll.
    Erlaubte Werte sind `allow-modals`, `allow-forms` und `allow-popups`.
    Mehrere Werte können angegeben werden, wie `"allow-modals allow-popups"`.

#### LiveSampleLink-Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : Die ID der Überschrift oder des umschließenden Blocks, aus dem der Code gezogen werden soll. Der beste Weg, sicherzustellen, dass Sie die ID richtig haben, ist, die URL des Abschnitts im Inhaltsverzeichnis der Seite anzusehen; Sie können es auch überprüfen, indem Sie den Quellcode der Seite ansehen.
- `link_text`
  - : Eine Zeichenfolge, die als Linktext verwendet wird.

## Nutzung des Live-Sample-Systems

Die folgenden Abschnitte beschreiben einige häufige Anwendungsfälle für das Live-Sample-System.

### Formatierung von Live-Samples

Wenn Sie ein Live-Sample im Abschnitt "Beispiele" schreiben, geben Sie eine beschreibende H3-Überschrift (`###`) für dieses Live-Sample-Beispiel an. Schreiben Sie idealerweise eine kurze Beschreibung des Beispiels, die das Szenario erklärt und was Sie demonstrieren möchten. Dann fügen Sie Unterabschnitte mit folgenden H4-Überschriften (`####`) in der aufgeführten Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in die oben aufgeführten jeweiligen Unterabschnitte.

Im Unterabschnitt **Ergebnis** fügen Sie den Aufruf für das `EmbedLiveSample`-Makro hinzu. Bevorzugt sollten Sie in diesem Unterabschnitt noch ein wenig Text hinzufügen, um das Ergebnis zu beschreiben.

Wenn Sie keinen bestimmten Sprachtyp verwenden (zum Beispiel, wenn Sie kein JavaScript verwenden) oder wenn Sie den Codeblock ausblenden, sollten Sie die entsprechende Überschrift weglassen.

### Ausblenden von Code

Manchmal möchten Sie einfach nur den statischen Codeblock des Beispiels anzeigen, das innerhalb einer Seite gerendert wird. Dennoch benötigen Sie die HTML-, CSS- und JavaScript-Codeblöcke, um ein solches Beispiel zu rendern.

Um dies zu erreichen, können Sie alle relevanten Codeblöcke ausblenden, indem Sie die `hidden`-Info-Zeichenfolge zum Sprachidentifikator hinzufügen. Wenn Sie dies tun, lassen Sie die `### HTML/CSS/JavaScript`-Überschriften für die ausgeblendeten Codeblöcke weg.

Die obige Beispielumsetzung, aber mit ausgeblendetem HTML-Code, würde folgendermaßen aussehen:

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

### Umwandeln von Code-Snippets in Live-Samples

Ein häufiger Anwendungsfall ist, bereits auf MDN gezeigte Code-Snippets in Live-Samples umzuwandeln.
Der erste Schritt besteht darin, entweder Code-Snippets hinzuzufügen oder sicherzustellen, dass vorhandene bereit sind, als Live-Samples verwendet zu werden, sowohl in Bezug auf den Inhalt als auch auf ihre Auszeichnung. Die Code-Snippets müssen zusammengenommen ein vollständiges, ausführbares Beispiel bilden. Wenn das vorhandene Snippet nur CSS zeigt, müssen Sie zum Beispiel ein HTML-Snippet hinzufügen, auf das das CSS angewendet werden soll.

Jedes Stück Code muss sich in einem Codeblock befinden, mit einem separaten Block für jede Sprache, ordnungsgemäß markiert, um welche Sprache es sich handelt. Meistens wurde dies bereits gemacht, aber es lohnt sich immer, doppelt zu überprüfen, ob jedes Stück Code mit der richtigen Syntax konfiguriert ist. Dies wird mit einem Sprachidentifikator auf dem Codeblock in `language-type`-Format durchgeführt, wobei _language-type_ die Art der Sprache ist, die der Block enthält, z.B. `html`, `css` oder `js`.

> [!NOTE]
> Sie können für jede Sprache mehr als einen Block haben; sie werden alle zusammengefügt. Das ermöglicht es Ihnen, ein Stück Code zu haben, gefolgt von einer Erklärung, wie er funktioniert, dann noch ein Stück und so weiter. Dies erleichtert es, Tutorials und dergleichen zu erstellen, die Live-Samples mit erklärendem Text verbinden.

Stellen Sie also sicher, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils korrekt für die Syntaxhervorhebung dieser Sprache konfiguriert sind, und schon sind Sie bereit loszulegen.

## Beispiele

Dieser Abschnitt enthält Beispiele, die zeigen, wie das Live-Sample-System verwendet werden kann, einschließlich der verschiedenen Möglichkeiten zur Gruppierung der Codeblöcke, aus denen ein Beispiel besteht, und wie Sie Protokolldaten in Ihren Beispielen anzeigen können.

Beachten Sie, dass die Überschriften für Codeblöcke ("HTML", "CSS" oder "JavaScript") in den meisten MDN-Beispielen aus Konvention verwendet werden, aber vom Live-Sample-Makro nicht wirklich erforderlich sind.

### Gruppierung von Codeblöcken nach Überschrift

#### HTML

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns beim Positionieren und Stylen einer Nachricht zu helfen.

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

#### CSS

Der CSS-Code gestaltet sowohl das Kästchen als auch den Text darin.

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

Im JavaScript-Beispiel hängen wir einen Ereignishandler an den "Hello world!"-Text an, der ihn umschaltet, wenn er angeklickt wird.

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

Hier ist ein Link, der aus dem Aufruf dieser Codeblöcke über `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}` resultiert:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Gruppierung von Codeblöcken nach Identifikator

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns beim Positionieren und Stylen einer Nachricht zu helfen. Der `live-sample___hello-world`-String wurde zum `html`-Sprachidentifikator für diesen Codeblock hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code gestaltet sowohl das Kästchen als auch den Text darin. Der `live-sample___hello-world`-String wurde zum `css`-Sprachidentifikator für diesen Codeblock hinzugefügt.

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

Dieser JavaScript-Code hängt einen Ereignishandler an den "Hello world!"-Text an, der ihn umschaltet, wenn er angeklickt wird. Der `live-sample___hello-world`-String wurde ebenfalls zum `js`-Sprachidentifikator für diesen Codeblock hinzugefügt.

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

Wir erhalten diese Ausgabe, indem wir die obigen Codeblöcke mit dem Zeichenfolgenidentifikator `hello-world` in dem `\{{EmbedLiveSample('hello-world')}}`-Makroaufruf ausführen:

{{EmbedLiveSample("hello-world")}}

### Anzeige eines `<iframe>` einer bestimmten Größe

Verwenden Sie den `height`-Parameter, um die Größe des `<iframe>`-Elements anzugeben, das die Live-Sample-Ausgabe enthält.

```html
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Erlauben von Funktionen

Der `allow`-Parameter kann verwendet werden, um die Funktionen anzugeben, die im `<iframe>`-Element erlaubt sind, das die Live-Sample-Ausgabe enthält. Die verfügbaren Werte stammen aus der [Berechtigungsrichtliniensyntax für Frames](/de/docs/Web/HTTP/Guides/Permissions_Policy#embedded_frame_syntax).

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

Dieses Beispiel zeigt, wie Sie ein einfaches Logbuch mit einem Eintrag in Ihrem Live-Sample implementieren, bei dem der vorherige Wert immer ersetzt wird, wenn ein neuer Logeintrag hinzugefügt wird.

Zur Klarheit trennt dieses Beispiel den Protokollierungscode und den Code, der ihn verwendet, und zeigt den Protokollierungscode zuerst an.
Im Allgemeinen sollten Sie bei der Implementierung Ihrer eigenen Beispiele Protokollierungselemente unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige von Protokolldaten als Teil des Beispiels bietet ein weitaus besseres Benutzererlebnis als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Protokolldaten.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als Nächstes die Protokollierungsfunktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und ersetzt damit die bestehende Protokollierung.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Beachten Sie, dass der Inhalt des Protokollelements mit der Eigenschaft `innerText` festgelegt wird, die sicherer ist als die Verwendung von `innerHTML`, da der protokollierte Text nicht als HTML geparst wird (was möglicherweise schädlichen Code einfügen könnte).

#### CSS

Das CSS legt die Höhe des Protokollelements fest.

```css
#log {
  height: 20px;
}
```

#### Testcode zur Protokollierung

Dieses Beispiel ist darauf ausgelegt zu zeigen, "wie zu protokollieren ist", daher ist "was protokolliert wird" nicht so wichtig.
Dies ist daher trivialerweise als ein Knopf implementiert, den der Benutzer drücken kann, um einen Wert zu inkrementieren.

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

Drücken Sie den Knopf, um neuen Protokollinhalt hinzuzufügen.

{{EmbedLiveSample("Displaying a single entry log", "100%", "80px")}}

### Anzeige eines Protokolls, das Elemente anhängt

Dieses Beispiel zeigt, wie Sie eine einfache "Protokollkonsole" in Ihrem Live-Sample implementieren.
Die Konsole fügt jedes Mal eine neue Zeile am Ende der Ausgabe hinzu, wenn ein Protokoll hinzugefügt wird, und scrollt den neuen Eintrag in den sichtbaren Bereich.

Zur Klarheit trennt dieses Beispiel den Protokollierungscode und den Code, der ihn verwendet, und zeigt den Protokollierungscode zuerst an.
Im Allgemeinen sollten Sie bei der Implementierung Ihrer eigenen Beispiele Protokollierungselemente unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige von Protokolldaten als Teil des Beispiels bietet ein weitaus besseres Benutzererlebnis als die Verwendung von `console.log()`.
>
> Siehe [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) für ein vollständigeres Beispiel.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Protokolldaten.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als Nächstes die Protokollierungsfunktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und fügt ihn als neue Zeile dem Inhalt im Protokollelement hinzu.
Die Funktion setzt auch das `scrollTop` des Elements auf die `scrollHeight` des Elements, was das Scrollen der neuen Zeile mit Protokolltext in den sichtbaren Bereich erzwingt.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie beim vorherigen Beispiel setzen wir den Inhalt mit der Eigenschaft `innerText`, da dies weniger anfällig für bösartigen Code ist als die Verwendung von `innerHTML`.

#### CSS

Das CSS fügt Scrollbars hinzu, wenn der Elementinhalt überläuft, legt die Höhe des Protokollelements fest und fügt einen Rahmen hinzu.
Beachten Sie, dass das JavaScript oben sicherstellt, dass bei Überlauf neues Protokolltext hinzuzufügen den Text in den sichtbaren Bereich scrollt.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Testcode zur Protokollierung

Dieses Beispiel ist darauf ausgelegt zu zeigen, "wie zu protokollieren ist", daher ist "was protokolliert wird" nicht so wichtig.
Dies ist daher trivialerweise als ein Knopf implementiert, den der Benutzer drücken kann, um einen Wert zu inkrementieren.

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

Drücken Sie den Knopf, um neuen Protokollinhalt hinzuzufügen.

{{EmbedLiveSample("Displaying a log that appends items", "100%", "180px")}}

### Anzeige eines Zurücksetz-Buttons

Ein Zurücksetz-Button kann hilfreich für Beispiele sein, die nicht in ihren Ausgangszustand zurückversetzt werden können, ohne die Seite neu zu laden.
Zum Beispiel benötigt [das Beispiel "Priorität setzen" von `Highlight.priority`](/de/docs/Web/API/Highlight/priority#result_2) einen Zurücksetz-Button, da einmal eine der Prioritäten gesetzt wurde, der Ausgangszustand nicht mehr verfügbar ist.

Dieses Beispiel zeigt, wie Sie einen Zurücksetz-Button zum obigen Beispiel [Anzeige eines Protokolls, das Elemente anhängt](#anzeige_eines_protokolls,_das_elemente_anhängt) hinzufügen.
Beachten Sie, dass der JavaScript- und CSS-Code für die Protokollierung derselbe wie im vorherigen Beispiel ist, sodass dieser Code ausgeblendet ist.

#### HTML

Das HTML für das Beispiel umfasst jetzt einen Zurücksetz-Button.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für den Button fügt eine `click`-Ereignishandlkerfunktion hinzu, die einfach das Frame mit dem aktuellen Beispiel neu lädt.

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

Drücken Sie den Button "Press me many times" mehrmals.
Setzen Sie das Beispiel zurück, indem Sie den "Reset"-Button drücken.

{{EmbedLiveSample("Displaying a reset button", "100%", "180px")}}

## Konventionen bezüglich Live-Samples

- Reihenfolge von Codeblöcken
  - : Beim Hinzufügen eines Live-Samples sollten die Codeblöcke so sortiert werden, dass der erste der Hauptsprache für dieses Sample entspricht (falls es eine gibt). Wenn zum Beispiel ein Live-Sample für die HTML-Referenz hinzugefügt wird, sollte der erste Block HTML sein, wenn ein Live-Sample für die CSS-Referenz hinzugefügt wird, sollte es CSS sein und so weiter.
- Benennung von Überschriften
  - : Wenn keine Zweideutigkeit besteht (z.B. das Sample befindet sich in einem "Beispiele"-Abschnitt), sollten die Überschriften unkompliziert mit dem alleinigen Namen der entsprechenden Sprache sein: HTML, CSS, JavaScript, SVG usw. (siehe oben). Überschriften wie "HTML Content" oder "JavaScript Content" sollten nicht verwendet werden. Wenn jedoch eine solche kurze Überschrift den Inhalt unklar machen würde, kann ein durchdachterer Titel verwendet werden.
- Verwendung eines "Ergebnis"-Blocks
  - : Nach den verschiedenen Codeblöcken verwenden Sie bitte einen letzten "Ergebnis"-Block, bevor Sie das `EmbedLiveSample`-Makro verwenden (siehe oben). Auf diese Weise sind sowohl für den Leser als auch für Werkzeuge, die die Seite parsen würden (z.B. Screenreader, Webcrawler), die Semantik des Beispiels klarer.
