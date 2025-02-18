---
title: Live-Beispiele (EmbedLiveSample)
short-title: Live samples
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

MDN ermöglicht das Anzeigen von Codeblöcken innerhalb der Artikel als _Live-Beispiele_, sodass Leser sowohl den Quellcode als auch dessen Ausgabe sehen können, wie sie auf einer Webseite erscheint. Diese Funktion ermöglicht es den Lesern, genau zu verstehen, welche Ausgabe der ausgeführte Code erzeugen würde, was die Dokumentation dynamisch und lehrreich macht. Sie ermöglicht es auch den Autoren, sich absolut sicher zu sein, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe haben und ordnungsgemäß funktionieren, wenn sie mit verschiedenen Browsern verwendet werden.

Das Live-Beispielsystem kann Codeblöcke verarbeiten, die in HTML, CSS und JavaScript geschrieben sind, unabhängig von der Reihenfolge, in der sie auf der Seite geschrieben sind. Dies stellt sicher, dass die Ausgabe dem kombinierten Quellcode entspricht, da das System den Code direkt innerhalb der Seite ausführt.

Im Gegensatz zu [Interaktiven Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_on_mdn) bieten Live-Beispiele keine integrierte Unterstützung zum Erfassen von Konsolenprotokollen oder zum Zurücksetzen von Beispielen, die durch Benutzereingaben verändert wurden. Der [Beispiele](#beispiele)-Abschnitt zeigt, wie Sie diese und andere nützliche Funktionen implementieren können.

## Wie funktionieren Live-Beispiele?

Live-Beispiele gruppieren Codeblöcke, fügen sie in HTML zusammen und rendern das HTML in einem {{HTMLElement("iframe")}}. Ein Live-Beispiel besteht aus zwei Teilen:

- Einem oder mehreren Codeblöcken, die zusammen gruppiert sind
- Einem Makroaufruf, der das Ergebnis der Codeblöcke in einem {{HTMLElement("iframe")}} anzeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat einen Sprachbezeichner — `html`, `css` oder `js` — der angibt, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die Sprachbezeichner müssen auf den entsprechenden Codeblöcken stehen, und ein Makroaufruf (`EmbedLiveSample`) muss auf der Seite vorhanden sein, um die Ausgabe anzuzeigen:

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

Das Live-Beispielsystem erlaubt es, Codeblöcke auf verschiedene Arten zu gruppieren, um die Ausgabe effektiv anzuzeigen. Der nächste Abschnitt beschreibt diese Methoden.

### Gruppierung von Codeblöcken

Codeblöcke können auf zwei Arten gruppiert werden:

1. Verwenden der ID einer Überschrift oder eines Blockelements, das die Codeblöcke enthält, als Bezeichner
2. Festlegen eines Zeichenfolgenbezeichners zusammen mit Codeblöcken

Codeblöcke, die keinen Bezeichner explizit festlegen, werden standardmäßig zusammen mit der ID der Überschrift oder des Blockelements gruppiert, das die Codeblöcke enthält. Der Bezeichner in diesem Fall ist die ID einer Überschrift oder eines Blockelements (wie beispielsweise einem {{HTMLElement("div")}}). Dies wird im folgenden Beispiel gezeigt, wo `html`- und `css`-Code innerhalb des Blockes "Styling a paragraph" verwendet werden, um die Ausgabe für den `EmbedLiveSample`-Makroaufruf zu erzeugen.

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
- Wenn die ID zu einer Überschrift gehört, umfasst die Gruppe alle Codeblöcke, die nach dieser Überschrift und vor der nächsten Überschrift derselben Ebene stehen. Beachten Sie, dass Codeblöcke unter Unterüberschriften der angegebenen Überschrift alle verwendet werden; wenn dies nicht der gewünschte Effekt ist, verwenden Sie eine ID auf einem Blockelement oder einen Zeichenfolgenbezeichner.

Um Codeblöcke mit einem Bezeichner zu gruppieren, fügen Sie dem Info-String des Codeblocks eine Zeichenfolge im Format `live-sample___{IDENTIFIER}` hinzu. Der Bezeichner muss eindeutig für die Codeblöcke sein, die Sie gruppieren möchten. Zum Beispiel verwendet `live-sample___color-picker` `color-picker` als Identifikator für das Live-Beispielsystem, und alle Codeblöcke mit `live-sample___color-picker` im Info-String werden im Live-Beispiel kombiniert. Das folgende Beispiel gruppiert einen CSS- und einen JavaScript-Codeblock zusammen mit dem Bezeichner `color-picker`:

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

Das Makro verwendet eine spezielle URL, die die ID enthält, um die Ausgabe für eine gegebene Gruppe von Codeblöcken zu holen. Sie sollten diese URL niemals in den Inhalt hartkodieren — wenn Sie auf das Beispiel verlinken müssen, verwenden Sie das [`LiveSampleLink`](#livesamplelink-makro) Makro.

Der resultierende Rahmen (oder die Seite) ist sandboxed, sicher und könnte technisch alles tun, was im Web funktioniert. Natürlich sollte der Code praktisch in Bezug auf den Inhalt der Seite relevant sein; jegliches nicht verwandte Material unterliegt der Entfernung durch die MDN-Editorgemeinschaft.

Das Live-Beispielsystem bietet viele verfügbare Optionen, und wir werden versuchen, die Dinge Schritt für Schritt zu erklären.

### Live-Beispiel-Makros

Es gibt zwei Makros, mit denen Sie Live-Beispiele anzeigen können:

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) bettet ein Live-Beispiel in eine Seite ein
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link, der das Live-Beispiel in einer neuen Seite öffnet

In vielen Fällen können Sie das `EmbedLiveSample` oder `LiveSampleLink` Makro problemlos zu Seiten hinzufügen! Solange das Beispiel durch eine Überschriften-ID identifiziert werden kann oder sich in einem Block befindet, dessen ID Sie verwenden können, sollte das Hinzufügen des Makros die Arbeit erledigen.

#### EmbedLiveSample-Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow, sandbox)}}
```

- `sample_id`
  - : Erforderlich: Dies kann der Zeichenfolgenbezeichner des Beispiels oder die ID der Überschrift oder des umgebenden Blocks sein, aus dem der Code gezogen werden soll. Um zu überprüfen, ob Sie die richtige Überschriften-ID haben, schauen Sie sich die URL des Abschnitts im Inhaltsverzeichnis der Seite an; Sie können es auch überprüfen, indem Sie den Quellcode der Seite ansehen.
- `width` {{deprecated_inline}}
  - : Das `width`-Attribut für das {{HTMLElement("iframe")}}, angegeben in `px`. Veraltet, da es keine Wirkung mehr hat: Live-Beispiele erstrecken sich immer über die volle Breite des Inhaltsbereichs.
- `height`
  - : Das `height`-Attribut des {{HTMLElement("iframe")}}, angegeben in `px`. Muss mindestens `60` sein. Dies ist optional; eine vernünftige Standardhöhe wird verwendet, wenn Sie dies weglassen.
- `screenshot_URL` {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Beispiel aussehen sollte. Veraltet; fügen Sie nur dann Live-Beispiele hinzu, wenn es vernünftige Browserunterstützung gibt.
- `page_slug` {{deprecated_inline}}
  - : Der Slug der Seite, die das Beispiel enthält; dies ist optional, und wenn es nicht angegeben wird, wird das Beispiel von derselben Seite abgerufen, auf der das Makro verwendet wird. Veraltet; Live-Beispiele nur einfügen, wenn der Code auf derselben Seite ist.
- `class_name` {{deprecated_inline}}
  - : Der Klassenname, der dem {{HTMLElement("iframe")}} zugewiesen wird. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- `allow`
  - : Das `allow`-Attribut für das {{HTMLElement("iframe")}}. Dies ist optional; standardmäßig sind keine erlaubten Funktionen vorhanden.
- `sandbox`
  - : Ein String, der die `sandbox`-Attribute enthält, die das Beispiel enthalten soll. Erlaubte Werte sind `allow-modals`, `allow-forms` und `allow-popups`. Mehrere Werte können angegeben werden, wie `"allow-modals allow-popups"`.

#### LiveSampleLink-Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : Die ID der Überschrift oder des umgebenden Blocks, aus dem der Code gezogen werden soll. Der beste Weg, um sicherzustellen, dass Sie die ID richtig haben, ist, die URL des Abschnitts im Inhaltsverzeichnis der Seite zu überprüfen; Sie können es auch überprüfen, indem Sie den Quellcode der Seite ansehen.
- `link_text`
  - : Ein String, der als Linktext verwendet werden soll.

## Verwendung des Live-Beispielsystems

Die folgenden Abschnitte beschreiben einige häufige Anwendungsfälle für das Live-Beispielsystem.

### Formatierung von Live-Beispielen

Wenn Sie ein Live-Beispiel im Abschnitt "Beispiele" erstellen, geben Sie eine beschreibende H3-Überschrift (`###`) für dieses Live-Beispiel an. Idealerweise schreiben Sie eine kurze Beschreibung des Beispiels, die das Szenario erklärt und was Sie demonstrieren möchten. Fügen Sie dann Unterabschnitte mit den folgenden H4-Überschriften (`####`) in der aufgelisteten Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in den oben aufgeführten jeweiligen Unterabschnitten.

Im **Ergebnis**-Unterabschnitt fügen Sie den Aufruf des `EmbedLiveSample` Makros hinzu. Fügen Sie nach Möglichkeit noch etwas Text in diesen Abschnitt ein, um das Ergebnis zu beschreiben.

Wenn Sie eine bestimmte Sprachart nicht verwenden (zum Beispiel, wenn Sie kein JavaScript verwenden) oder wenn Sie den Codeblock ausblenden, sollten Sie die entsprechende Überschrift weglassen.

### Code ausblenden

Manchmal möchten Sie nur den statischen Codeblock anzeigen, der für das im Seite gerenderte Beispiel relevant ist. Sie benötigen jedoch trotzdem die HTML-, CSS- und JavaScript-Codeblöcke, um ein solches Beispiel zu rendern.

Um dies zu erreichen, können Sie alle Codeblöcke ausblenden, die nicht relevant sind, indem Sie dem Sprachbezeichner den Info-String `hidden` hinzufügen. Wenn Sie dies tun, lassen Sie die `### HTML/CSS/JavaScript`-Überschriften für die verborgenen Codeblöcke weg.

Das obige Beispiel aber mit verstecktem HTML-Code würde folgendermaßen aussehen:

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

### Ausschnitte in Live-Beispiele verwandeln

Ein häufiger Anwendungsfall besteht darin, vorhandene Code-Snippets, die bereits auf MDN gezeigt werden, in Live-Beispiele umzuwandeln. Der erste Schritt besteht darin, entweder Code-Snippets hinzuzufügen oder sicherzustellen, dass vorhandene Snippets in Bezug auf Inhalt und Markup bereit sind, als Live-Beispiele verwendet zu werden. Die Code-Snippets müssen in ihrer Gesamtheit ein vollständiges, ausführbares Beispiel ergeben. Wenn das vorhandene Snippet beispielsweise nur CSS zeigt, müssen Sie möglicherweise ein HTML-Snippet hinzufügen, auf das das CSS angewendet werden kann.

Jedes Codefragment muss in einem Codeblock sein, mit einem separaten Block für jede Sprache, ordnungsgemäß markiert, welche Sprache es ist. Meistens ist dies bereits geschehen, aber es ist immer einen doppelten Check wert, um sicherzustellen, dass jedes Codefragment mit der richtigen Syntax konfiguriert ist. Dies wird mit einem Sprachbezeichner im Codeblock von `language-type` erreicht, wobei _language-type_ der Typ der Sprache ist, die der Block enthält, z.B. `html`, `css`, oder `js`.

> [!NOTE]
> Sie können mehr als einen Block für jede Sprache haben; sie werden alle zusammengefügt. Dies ermöglicht es Ihnen, einen Block von Code zu haben, gefolgt von einer Erklärung, wie er funktioniert, dann einen anderen Block, und so weiter. Dies macht es noch einfacher, Tutorials und dergleichen zu erstellen, die Live-Beispiele enthalten, die mit Erklärtext durchsetzt sind.

Stellen Sie also sicher, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils korrekt für die Syntaxhervorhebung dieser Sprache konfiguriert sind, und es kann losgehen.

## Beispiele

Dieser Abschnitt enthält Beispiele, die zeigen, wie das Live-Beispielsystem genutzt werden kann, einschließlich der verschiedenen Möglichkeiten, die Codeblöcke zu gruppieren, die ein Beispiel ausmachen, und wie man Protokollausgaben in Ihre Beispiele anzeigt.

Beachten Sie, dass die Überschriften für Codeblöcke ("HTML", "CSS" oder "JavaScript") in den meisten MDN-Beispielen aus Gründen der Konvention verwendet werden, aber nicht tatsächlich vom Live-Beispiel-Makro verlangt werden.

### Gruppierung von Codeblöcken nach Überschrift

#### HTML

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns dabei zu helfen, eine Nachricht zu positionieren und zu gestalten.

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

#### CSS

Der CSS-Code gestaltet das Feld sowie den Text darin.

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

Im JavaScript-Beispiel wird ein Ereignishandler an den Text "Hello world!" gebunden, der diesen umschaltet, wenn er angeklickt wird.

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

### Gruppierung von Codeblöcken nach Bezeichner

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns dabei zu helfen, eine Nachricht zu positionieren und zu gestalten. Die Zeichenfolge `live-sample___hello-world` wurde dem `html`-Spachbezeichner für diesen Codeblock hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code gestaltet das Feld sowie den Text darin. Die Zeichenfolge `live-sample___hello-world` wurde dem `css`-Sprachbezeichner für diesen Codeblock hinzugefügt.

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

Dieser JavaScript-Code fügt einen Ereignishandler dem Text "Hello world!" hinzu, der diesen umschaltet, wenn er angeklickt wird. Die Zeichenfolge `live-sample___hello-world` wurde dem `js`-Sprachbezeichner für diesen Codeblock ebenfalls hinzugefügt.

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

Wir erhalten diese Ausgabe, indem wir die obigen Codeblöcke mit dem Zeichenfolgenbezeichner `hello-world` im `\{{EmbedLiveSample('hello-world')}}` Makroaufruf ausführen:

{{EmbedLiveSample("hello-world")}}

### Anzeige eines `<iframe>` mit einer bestimmten Größe

Verwenden Sie den `height`-Parameter, um die Größe des `<iframe>`-Elements anzugeben, das die Ausgabe des Live-Beispiels enthält.

```html
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Funktionen erlauben

Der `allow`-Parameter kann verwendet werden, um die Funktionen im `<iframe>`-Element anzugeben, die in der Ausgabe des Live-Beispiels zugelassen sind. Die verfügbaren Werte stammen aus der [Permission Policy Syntax für Frames](/de/docs/Web/HTTP/Permissions_Policy#embedded_frame_syntax).

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

### Anzeige eines einzelnen Logeintrags

Dieses Beispiel zeigt, wie Sie ein einfaches Einzelprotokoll in Ihrem Live-Beispiel implementieren, bei dem der vorherige Wert immer dann ersetzt wird, wenn ein neuer Protokolleintrag hinzugefügt wird.

Der Klarheit halber trennt dieses Beispiel den Protokollierungscode und den Code, der ihn verwendet, und zeigt den Protokollierungscode zuerst an. Im Allgemeinen sollten Sie beim Implementieren eigener Beispiele die Protokollierungselemente unter andere UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet ein viel besseres Benutzererlebnis als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"`, um die Protokollausgabe anzuzeigen.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als nächstes die Protokollierungsfunktion `log()`. Diese nimmt den zu protokollierenden Text als Argument und verwendet ihn, um die vorhandenen Protokolle zu ersetzen.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Beachten Sie, dass der Inhalt des Protokollelements mit der `innerText`-Eigenschaft gesetzt wird, was sicherer ist als die Verwendung von `innerHTML`, da der protokollierte Text nicht zu HTML geparst wird (was möglicherweise bösartigen Code injizieren könnte).

#### CSS

Der CSS setzt die Höhe des Protokollelements.

```css
#log {
  height: 20px;
}
```

#### Testcode für die Protokollierung

Dieses Beispiel soll zeigen, "wie man protokolliert", daher ist "was protokolliert wird" nicht so wichtig. Dies wird daher trivially als Schaltfläche implementiert, die der Benutzer drücken kann, um einen Wert zu erhöhen.

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

Drücken Sie die Schaltfläche, um neue Protokollinhalte hinzuzufügen.

{{EmbedLiveSample("Displaying a single entry log", "100%", "80px")}}

### Anzeige eines Protokolls, das Elemente anhängt

Dieses Beispiel zeigt, wie Sie eine einfache "Protokollkonsole" in Ihrem Live-Beispiel implementieren. Die Konsole fügt jedes Mal, wenn ein Protokoll hinzugefügt wird, eine neue Zeile am Ende der Ausgabe an und scrollt das neue Element in den sichtbaren Bereich.

Der Klarheit halber trennt dieses Beispiel den Protokollierungscode und den Code, der ihn verwendet, und zeigt den Protokollierungscode zuerst an. Im Allgemeinen sollten Sie beim Implementieren eigener Beispiele die Protokollierungselemente unter andere UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels ist ein viel besseres Benutzererlebnis als die Verwendung von `console.log()`.
>
> Siehe [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) für ein vollständigeres Beispiel.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"`, um die Protokollausgabe anzuzeigen.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als nächstes die Protokollierungsfunktion `log()`. Diese nimmt den zu protokollierenden Text als Argument und hängt ihn als neue Zeile an den Inhalt im Protokollelement an. Die Funktion setzt auch das `scrollTop`-Attribut des Elements auf die `scrollHeight` des Elements, was erzwingt, dass die neue Protokollzeile in den sichtbaren Bereich scrollt.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie im vorherigen Beispiel setzen wir den Inhalt mit der `innerText`-Eigenschaft, da dies weniger anfällig für bösartigen Code ist als die Verwendung von `innerHTML`.

#### CSS

Der CSS fügt Bildlaufleisten hinzu, wenn der Inhalt des Elements überläuft, setzt die Höhe des Protokollelements und fügt einen Rahmen hinzu. Beachten Sie, dass das obige JavaScript sicherstellt, dass bei einem Überlauf neues Protokoll unweigerlich in den sichtbaren Bereich scrollt.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Testcode für die Protokollierung

Dieses Beispiel soll zeigen, "wie man protokolliert", daher ist "was protokolliert wird" nicht so wichtig. Dies wird daher trivially als Schaltfläche implementiert, die der Benutzer drücken kann, um einen Wert zu erhöhen.

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

Drücken Sie die Schaltfläche, um neue Protokollinhalte hinzuzufügen.

{{EmbedLiveSample("Displaying a log that appends items", "100%", "180px")}}

### Anzeige einer Zurücksetzen-Schaltfläche

Eine Zurücksetzen-Schaltfläche kann bei Beispielen hilfreich sein, die ohne Zurücksetzen der Seite nicht in ihren ursprünglichen Zustand wiederhergestellt werden können. Zum Beispiel benötigt [das `Highlight.priority` "Setzen der Priorität" Beispiel](/de/docs/Web/API/Highlight/priority#result_2) eine Zurücksetzen-Schaltfläche, da, sobald Sie entweder die Priorität setzen, der ursprüngliche Zustand nicht mehr verfügbar ist.

Dieses Beispiel zeigt, wie man eine Zurücksetzen-Schaltfläche zu dem [Anzeige eines Protokolls, das Elemente anhängt](#anzeige_eines_protokolls,_das_elemente_anhängt) Beispiel oben hinzugefügt. Beachten Sie, dass der JavaScript- und CSS-Code für die Protokollierung der gleiche wie im vorherigen Beispiel ist, daher wird dieser Code ausgeblendet.

#### HTML

Das HTML für das Beispiel enthält jetzt eine Zurücksetzen-Schaltfläche.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für die Schaltfläche fügt eine `click`-Ereignishandlerfunktion hinzu, die einfach den Rahmen mit dem aktuellen Beispiel neu lädt.

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

Klicken Sie mehrmals auf die Schaltfläche "Drücken Sie mich öfter". Setzen Sie das Beispiel zurück, indem Sie auf die Schaltfläche "Zurücksetzen" klicken.

{{EmbedLiveSample("Displaying a reset button", "100%", "180px")}}

## Konventionen in Bezug auf Live-Beispiele

- Reihenfolge der Codeblöcke
  - : Wenn Sie ein Live-Beispiel hinzufügen, sollten die Codeblöcke so sortiert werden, dass der erste dem Haupttyp für dieses Beispiel entspricht (falls es einen gibt). Wenn Sie beispielsweise ein Live-Beispiel für das HTML-Referenz hinzufügen, sollte der erste Block HTML sein, wenn Sie ein Live-Beispiel für das CSS-Referenz hinzufügen, sollte es CSS sein und so weiter.
- Benennung von Überschriften
  - : Wenn keine Zweideutigkeit besteht (z.B. das Beispiel ist unter einem "Beispiele"-Abschnitt), sollten Überschriften einfach der Name der entsprechenden Sprache sein: HTML, CSS, JavaScript, SVG, usw. (siehe oben). Überschriften wie "HTML Inhalt" oder "JavaScript Inhalt" sollten nicht verwendet werden. Wenn jedoch eine so kurze Überschrift den Inhalt unklar macht, kann man einen durchdachteren Titel verwenden.
- Verwendung eines "Ergebnis"-Blocks
  - : Nach den verschiedenen Codeblöcken verwenden Sie bitte einen letzten "Ergebnis"-Block, bevor Sie das `EmbedLiveSample` Makro verwenden (siehe oben). Auf diese Weise wird die Semantik des Beispiels sowohl für den Leser als auch für alle Werkzeuge verständlicher, die die Seite parsen würden (z.B. Screenreader, Webcrawler).
