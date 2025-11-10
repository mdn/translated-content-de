---
title: Live-Beispiele (EmbedLiveSample)
short-title: Live samples
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

MDN unterstützt das Anzeigen von Codeblöcken in den Artikeln als _Live-Beispiele_, sodass die Leser sowohl den Quellcode als auch dessen Ausgabe sehen können, wie er auf einer Webseite aussieht.
Diese Funktion ermöglicht es den Lesern, genau zu verstehen, was der ausgeführte Code erzeugen würde, was die Dokumentation dynamisch und lehrreich macht.
Es erlaubt auch den Autoren, absolut sicher zu sein, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe haben und ordnungsgemäß funktionieren, wenn sie in verschiedenen Browsern verwendet werden.

Das Live-Beispiel-System kann Codeblöcke verarbeiten, die in HTML, CSS und JavaScript geschrieben sind, unabhängig von der Reihenfolge, in der sie auf der Seite geschrieben sind.
Dies stellt sicher, dass die Ausgabe dem kombinierten Quellcode entspricht, da das System den Code direkt innerhalb der Seite ausführt.

Im Gegensatz zu [Interaktiven Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_on_mdn) bieten Live-Beispiele keine integrierte Unterstützung zum Erfassen von Konsolenprotokollen oder zum Zurücksetzen von Beispielen, die durch Benutzereingaben geändert wurden.
Der Abschnitt [Beispiele](#beispiele) zeigt, wie Sie diese und andere nützliche Funktionen implementieren können.

## Wie funktionieren Live-Beispiele?

Live-Beispiele gruppieren Codeblöcke, fügen sie zu HTML zusammen und rendern das HTML in einem {{HTMLElement("iframe")}}.
Ein Live-Beispiel besteht aus zwei Teilen:

- Einem oder mehreren zusammengefassten Codeblöcken
- Einem Makroaufruf, der das Ergebnis der Codeblöcke in einem {{HTMLElement("iframe")}} zeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat einen Sprachbezeichner — `html`, `css` oder `js` —, der spezifiziert, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die Sprachbezeichner müssen auf den entsprechenden Codeblöcken angegeben sein, und ein Makroaufruf (`EmbedLiveSample`) muss auf der Seite vorhanden sein, um die Ausgabe anzuzeigen:

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

Das Live-Beispiel-System ermöglicht die Gruppierung von Codeblöcken auf verschiedene Arten, um die Ausgabe effektiv anzuzeigen. Der nächste Abschnitt beschreibt diese Methoden.

### Gruppierung von Codeblöcken

Codeblöcke können auf zwei Arten gruppiert werden:

1. Verwenden der ID einer Überschrift oder eines Blockelements, das die Codeblöcke als Bezeichner enthält
2. Angabe eines Zeichenfolgenidentifikators zusammen mit den Codeblöcken

Codeblöcke, die keinen Identifikator explizit angeben, werden standardmäßig zusammen mit der ID der Überschrift oder des Blockelements gruppiert, das die Codeblöcke enthält. Der Identifikator in diesem Fall ist die ID einer Überschrift oder eines Blockelements (wie ein {{HTMLElement("div")}}). Dies wird im folgenden Beispiel gezeigt, bei dem `html`- und `css`-Codes innerhalb des Blocks "Styling a paragraph" verwendet werden, um die Ausgabe für den `EmbedLiveSample`-Makroaufruf zu generieren.

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

- Gehört die ID zu einem Blockelement, umfasst die Gruppe alle Codeblöcke innerhalb des umschließenden Blockelements, dessen ID verwendet wird.
- Gehört die ID zu einer Überschrift, umfasst die Gruppe alle Codeblöcke, die nach dieser Überschrift und vor der nächsten Überschrift derselben Überschriftsebene liegen. Beachten Sie, dass Codeblöcke unter Unterüberschriften der angegebenen Überschrift alle verwendet werden; wenn dies nicht der gewünschte Effekt ist, verwenden Sie eine ID auf einem Blockelement oder einen Zeichenfolgenidentifikator.

Um Codeblöcke mit einem Identifikator zu gruppieren, fügen Sie eine Zeichenfolge im Format `live-sample___{IDENTIFIER}` zur Infozeichenfolge des Codeblocks hinzu. Der Identifikator muss eindeutig für die Codeblöcke sein, die Sie gruppieren möchten. Zum Beispiel verwendet `live-sample___color-picker` `color-picker` als Identifikator für das Live-Beispiel-System, und alle Codeblöcke mit `live-sample___color-picker` in ihrer Infozeichenfolge werden im Live-Beispiel kombiniert.
Das folgende Beispiel gruppiert einen CSS- und einen JavaScript-Codeblock mit dem Identifikator `color-picker`:

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

Das Makro verwendet eine spezielle URL, die die ID enthält, um die Ausgabe für eine gegebene Gruppe von Codeblöcken abzurufen. Sie sollten diese URL niemals in Inhalt fest codieren – wenn Sie auf das Beispiel verlinken müssen, verwenden Sie das [`LiveSampleLink`](#livesamplelink-makro) Makro.

Der resultierende Rahmen (oder die Seite) ist sandboxed, sicher und kann technisch gesehen alles ausführen, was im Web funktioniert. Natürlich sollte der Code in der Praxis relevant für den Inhalt der Seite sein; alle nicht verwandten Materialien können von der MDN-Redaktionsgemeinschaft entfernt werden.

Das Live-Beispiel-System bietet viele Optionen, und wir werden versuchen, alles Schritt für Schritt zu erklären.

### Live-Beispiel-Makros

Es gibt zwei Makros, die Sie verwenden können, um Live-Beispiele anzuzeigen:

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) bettet ein Live-Beispiel in eine Seite ein
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link, der das Live-Beispiel in einem neuen Fenster öffnet

In vielen Fällen können Sie das `EmbedLiveSample`- oder `LiveSampleLink`-Makro zu Seiten mit wenig oder keiner zusätzlichen Arbeit hinzufügen! Solange das Beispiel anhand einer Überschriften-ID identifiziert werden kann oder sich in einem Block mit einer ID befindet, die Sie verwenden können, sollte das Hinzufügen des Makros ausreichen.

#### EmbedLiveSample-Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow, sandbox)}}
```

- `sample_id`
  - : Erforderlich: Dies kann die Zeichenfolgen-ID des Beispiels oder die ID der Überschrift oder des umgebenden Blocks sein, aus dem der Code entnommen wird.
    Um zu überprüfen, ob Sie die richtige Überschriften-ID haben, schauen Sie sich die URL des Abschnitts im Inhaltsverzeichnis der Seite an; Sie können es auch überprüfen, indem Sie den Quellcode der Seite ansehen.
- `width` {{deprecated_inline}}
  - : Das `width`-Attribut für das {{HTMLElement("iframe")}}, angegeben in `px`. Veraltet, da es keine Auswirkung mehr hat: Live-Beispiele erstrecken sich immer über die gesamte Breite des Inhaltsbereichs.
- `height`
  - : Das `height`-Attribut des {{HTMLElement("iframe")}}, angegeben in `px`. Muss mindestens `60` betragen. Dies ist optional; eine angemessene Standardhöhe wird verwendet, wenn Sie dies weglassen.
- `screenshot_URL` {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Beispiel aussehen sollte. Veraltet; fügen Sie nur Live-Beispiele hinzu, wenn eine angemessene Browserunterstützung vorhanden ist.
- `page_slug` {{deprecated_inline}}
  - : Der Slug der Seite, die das Beispiel enthält; dies ist optional, und wenn es nicht angegeben ist, wird das Beispiel von derselben Seite abgerufen, auf der das Makro verwendet wird. Veraltet; fügen Sie nur Live-Beispiele hinzu, wenn der Code auf derselben Seite ist.
- `class_name` {{deprecated_inline}}
  - : Der Klassenname, der auf das {{HTMLElement("iframe")}} angewendet wird. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- `allow`
  - : Das `allow`-Attribut für das {{HTMLElement("iframe")}}. Dies ist optional; standardmäßig sind keine erlaubten Funktionen enthalten.
- `sandbox`
  - : Ein String, der die `sandbox`-Attribute enthält, die das Beispiel enthalten sollte.
    Erlaubte Werte sind `allow-modals`, `allow-forms` und `allow-popups`.
    Mehrere Werte können bereitgestellt werden, wie zum Beispiel `"allow-modals allow-popups"`.

#### LiveSampleLink-Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : Die ID der Überschrift oder des umgebenden Blocks, aus dem der Code entnommen wird. Der beste Weg, um sicherzustellen, dass Sie die richtige ID haben, besteht darin, die URL des Abschnitts im Inhaltsverzeichnis der Seite anzusehen; Sie können es auch überprüfen, indem Sie den Quellcode der Seite ansehen.
- `link_text`
  - : Ein String, der als Linktext verwendet werden soll.

## Verwendung des Live-Beispiel-Systems

Die folgenden Abschnitte beschreiben einige gängige Anwendungsfälle für das Live-Beispiel-System.

### Formatierung von Live-Beispielen

Wenn Sie ein Live-Beispiel im Abschnitt "Beispiele" schreiben, geben Sie eine beschreibende H3-Überschrift (`###`) für dieses Live-Beispiel-Beispiel an. Idealerweise schreiben Sie eine kurze Beschreibung des Beispiels, die das Szenario erklärt und was Sie demonstrieren möchten. Fügen Sie dann Unterabschnitte mit den folgenden H4-Überschriften (`####`) in der angegebenen Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in den oben aufgeführten jeweiligen Unterabschnitten.

Im Unterabschnitt **Ergebnis** fügen Sie den Aufruf des `EmbedLiveSample`-Makros hinzu. Fügen Sie nach Möglichkeit noch etwas mehr Text in diesen Unterabschnitt hinzu, um das Ergebnis zu beschreiben.

Wenn Sie einen bestimmten Sprachtyp nicht verwenden (zum Beispiel, wenn Sie kein JavaScript verwenden) oder wenn Sie den Codeblock ausblenden, sollten Sie die entsprechende Überschrift weglassen.

### Code ausblenden

Manchmal möchten Sie nur den statischen Codeblock anzeigen, der für das auf einer Seite dargestellte Beispiel relevant ist. Sie benötigen jedoch immer noch die HTML-, CSS- und JavaScript-Codeblöcke, um ein solches Beispiel zu rendern.

Um dies zu erreichen, können Sie alle Codeblöcke, die nicht relevant sind, ausblenden, indem Sie die Infozeichenfolge `hidden` zum Sprachbezeichner hinzufügen. Wenn Sie dies tun, lassen Sie die `### HTML/CSS/JavaScript`-Überschriften für die ausgeblendeten Codeblöcke weg.

Das obige Beispiel, bei dem der HTML-Code ausgeblendet ist, würde wie folgt aussehen:

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

### Umwandeln von Snippets in Live-Beispiele

Ein häufiger Anwendungsfall besteht darin, vorhandene Codefragmente, die bereits auf MDN gezeigt werden, in Live-Beispiele zu verwandeln.
Der erste Schritt besteht darin, entweder Codefragmente hinzufügen oder sicherzustellen, dass vorhandene so vorbereitet sind, dass sie als Live-Beispiele verwendet werden können, was den Inhalt und die Markupstruktur betrifft. Die zusammengenommenen Codefragmente müssen ein vollständiges, lauffähiges Beispiel darstellen. Wenn das vorhandene Fragment zum Beispiel nur CSS zeigt, müssen Sie möglicherweise ein HTML-Fragment hinzufügen, auf dem das CSS angewendet werden kann.

Jedes Codefragment muss in einem Codeblock sein, mit einem separaten Block für jede Sprache, ordentlich markiert, welche Sprache es ist. Meistens wurde das bereits erledigt, aber es ist immer einen Blick wert, um sicherzustellen, dass jedes Codefragment mit der richtigen Syntax konfiguriert ist. Dies wird mit einem Sprachbezeichner am Codeblock `language-type` gemacht, wobei _language-type_ die Art der Sprache ist, die der Block enthält, z.B. `html`, `css` oder `js`.

> [!NOTE]
> Sie können mehr als einen Block für jede Sprache haben; sie werden alle zusammengefügt. Dies ermöglicht es Ihnen, ein Codefragment zu haben, gefolgt von einer Erklärung, wie es funktioniert, dann ein weiteres Fragment und so weiter. Dies macht es noch einfacher, Tutorien und dergleichen zu erstellen, die Live-Beispiele mit erklärendem Text durchsetzt verwenden.

Stellen Sie also sicher, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils korrekt für die Syntaxhervorhebung der jeweiligen Sprache konfiguriert sind, und Sie sind startklar.

## Beispiele

Dieser Abschnitt enthält Beispiele, die zeigen, wie das Live-Beispiel-System verwendet werden kann, einschließlich der verschiedenen Arten von Gruppierungen der Codeblöcke, aus denen ein Beispiel besteht, und wie Protokollierungs-Ausgaben in Ihren Beispielen angezeigt werden.

Beachten Sie, dass die Überschriften für Codeblöcke ("HTML", "CSS" oder "JavaScript") konventionell in den meisten MDN-Beispielen verwendet werden, aber tatsächlich nicht vom Live-Beispiel-Makro verlangt werden.

### Gruppieren von Codeblöcken nach Überschrift

#### HTML

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns zu helfen, eine Nachricht zu positionieren und zu stylen.

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

#### CSS

Der CSS-Code stylt das Kästchen sowie den Text darin.

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

Im JavaScript-Beispiel wird dem "Hello world!"-Text ein Ereignishandler zugewiesen, der ihn umschaltet, wenn er geklickt wird.

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

Hier ist ein Link, der aus dem Aufrufen dieser Codeblöcke über `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}` resultiert:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Gruppieren von Codeblöcken nach Identifikator

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns zu helfen, eine Nachricht zu positionieren und zu stylen. Die Zeichenfolge `live-sample___hello-world` wurde dem `html`-Sprachbezeichner für diesen Codeblock hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code stylt das Kästchen sowie den Text darin. Die Zeichenfolge `live-sample___hello-world` wurde dem `css`-Sprachbezeichner für diesen Codeblock hinzugefügt.

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

Dieses JavaScript-Code ordnet einen Ereignishandler dem "Hello world!"-Text zu, der ihn umschaltet, wenn er geklickt wird. Die Zeichenfolge `live-sample___hello-world` wurde dem `js`-Sprachbezeichner für diesen Codeblock ebenso hinzugefügt.

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

Diese Ausgabe erhalten wir, indem wir die obigen Codeblöcke mit dem Zeichenfolgenidentifikator `hello-world` im `\{{EmbedLiveSample('hello-world')}}`-Makro-Aufruf ausführen:

{{EmbedLiveSample("hello-world")}}

### Anzeigen eines `<iframe>` einer bestimmten Größe

Verwenden Sie den `height`-Parameter, um die Größe des `<iframe>`-Elements anzugeben, das die Ausgabe des Live-Beispiels enthält.

```html
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Zulassen von Funktionen

Der `allow`-Parameter kann verwendet werden, um die Funktionen zu spezifizieren, die im `<iframe>`-Element erlaubt sind, das die Ausgabe des Live-Beispiels enthält. Die verfügbaren Werte stammen aus der [Berechtigungsrichtlinien-Syntax für Frames](/de/docs/Web/HTTP/Guides/Permissions_Policy#embedded_frame_syntax).

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

### Anzeigen eines einzelnen Protokolleintrags

Dieses Beispiel zeigt, wie Sie ein einfaches einzelnes Protokoll in Ihrem Live-Beispiel implementieren können, bei dem der vorherige Wert überschrieben wird, wann immer ein neuer Protokolleintrag hinzugefügt wird.

Aus Gründen der Klarheit trennt dieses Beispiel den Protokollierungscode vom Code, der ihn verwendet, und zeigt zuerst den Protokollierungscode an.
Im Allgemeinen sollten Sie bei der Implementierung eigener Beispiele die Protokollierungselemente unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Protokollierungsausgabe als Teil des Beispiels sorgt für ein viel besseres Benutzererlebnis als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Protokollierungsausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als Nächstes die Protokollierungsfunktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und verwendet ihn, um das bestehende Protokoll zu ersetzen.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Beachten Sie, dass der Inhalt des Protokollelements mithilfe der `innerText`-Eigenschaft gesetzt wird, was sicherer ist als die Verwendung von `innerHTML`, da der protokollierte Text nicht zu HTML geparst wird (was möglicherweise bösartigen Code einschleusen könnte).

#### CSS

Das CSS setzt die Höhe des Protokollierungselements.

```css
#log {
  height: 20px;
}
```

#### Protokollierungs-Testcode

Dieses Beispiel soll "wie man protokolliert" zeigen, daher ist "was protokolliert wird" nicht allzu wichtig.
Dies wird daher trivialerweise als ein Button implementiert, den der Benutzer drücken kann, um einen Wert zu inkrementieren.

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

Drücken Sie die Schaltfläche, um neuen Protokollinhalt hinzuzufügen.

{{EmbedLiveSample("Displaying a single entry log", "100%", "80px")}}

### Anzeigen eines Protokoll, das Elemente anhängt

Dieses Beispiel zeigt, wie Sie eine einfache "Protokollkonsole" in Ihr Live-Beispiel implementieren können.
Die Konsole fügt jedes Mal, wenn ein Protokoll hinzugefügt wird, am Ende der Ausgabe eine neue Zeile hinzu und scrollt das neue Element in den Sichtbereich.

Aus Gründen der Klarheit trennt dieses Beispiel den Protokollierungscode von dem Code, der ihn verwendet, und zeigt zuerst den Protokollierungscode an.
Im Allgemeinen sollten Sie bei der Implementierung eigener Beispiele die Protokollierungselemente unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Protokollierungsausgabe als Teil des Beispiels sorgt für ein viel besseres Benutzererlebnis als die Verwendung von `console.log()`.
>
> Siehe [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) für ein vollständigeres Beispiel.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Protokollierungsausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als Nächstes die Protokollierungsfunktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und fügt ihn als neue Zeile dem Inhalt im Protokollelement hinzu.
Die Funktion setzt auch das `scrollTop` des Elements auf die `scrollHeight` des Elements, wodurch die neue Zeile der Protokolltextes in den Sichtbereich scrollt.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie im vorherigen Beispiel setzen wir den Inhalt mit der `innerText`-Eigenschaft, da dies weniger anfällig für bösartigen Code ist als die Verwendung von `innerHTML`.

#### CSS

Das CSS fügt Bildlaufleisten hinzu, wenn der Elementinhalt überläuft, setzt die Höhe des Protokollelements und fügt einen Rand hinzu.
Beachten Sie, dass das JavaScript oben sicherstellt, dass, wenn es überläuft, das Hinzufügen eines neuen Protokolltextes den Text in den Sichtbereich scrollt.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Protokollierungs-Testcode

Dieses Beispiel soll "wie man protokolliert" zeigen, daher ist "was protokolliert wird" nicht allzu wichtig.
Dies wird daher trivialerweise als ein Button implementiert, den der Benutzer drücken kann, um einen Wert zu inkrementieren.

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

Drücken Sie die Schaltfläche, um neuen Protokollinhalt hinzuzufügen.

{{EmbedLiveSample("Displaying a log that appends items", "100%", "180px")}}

### Anzeigen einer Rücksetz-Schaltfläche

Eine Rücksetz-Schaltfläche kann bei Beispielen hilfreich sein, die nicht in ihren Anfangszustand zurückgesetzt werden können, ohne die Seite neu zu laden.
Beispielsweise braucht [das Beispiel zum "Setzen der Priorität" von `Highlight.priority`](/de/docs/Web/API/Highlight/priority#result_2) eine Rücksetz-Schaltfläche, da, wenn Sie einmal eine der Prioritäten gesetzt haben, der Anfangszustand nicht mehr verfügbar ist.

Dieses Beispiel zeigt, wie Sie dem Beispiel [Anzeigen eines Protokolls, das Elemente anhängt](#anzeigen_eines_protokoll,_das_elemente_anhängt) oben eine Rücksetz-Schaltfläche hinzufügen können.
Beachten Sie, dass der JavaScript- und CSS-Code für die Protokollierung derselbe ist wie im vorherigen Beispiel, sodass dieser Code ausgeblendet wird.

#### HTML

Das HTML für das Beispiel enthält nun eine Rücksetz-Schaltfläche.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für die Schaltfläche fügt eine `click`-Ereignishandler-Funktion hinzu, die einfach den Frame neu lädt, der das aktuelle Beispiel enthält.

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

Klicken Sie die Schaltfläche "Press me many times" mehrmals.
Setzen Sie das Beispiel zurück, indem Sie die Schaltfläche "Reset" drücken.

{{EmbedLiveSample("Displaying a reset button", "100%", "180px")}}

## Konventionen zu Live-Beispielen

- Reihenfolge der Codeblöcke
  - : Wenn Sie ein Live-Beispiel hinzufügen, sollten die Codeblöcke so sortiert sein, dass der erste mit der Hauptsprache für dieses Beispiel übereinstimmt (wenn es eine gibt). Wenn Sie beispielsweise ein Live-Beispiel für das HTML-Referenz hinzufügen, sollte der erste Block HTML sein, wenn Sie ein Live-Beispiel für das CSS-Referenz hinzufügen, sollte er CSS sein, und so weiter.
- Benennung der Überschriften
  - : Wenn es keine Zweideutigkeiten gibt (z.B. befindet sich das Beispiel in einem "Examples"-Abschnitt), sollten Überschriften einfach mit dem alleinigen Namen der entsprechenden Sprache angegeben werden: HTML, CSS, JavaScript, SVG, etc. (siehe oben). Überschriften wie "HTML Content" oder "JavaScript Content" sollten nicht verwendet werden. Wenn jedoch eine solche kurze Überschrift den Inhalt unklar macht, kann ein durchdachterer Titel verwendet werden.
- Verwendung eines "Ergebnis"-Blocks
  - : Nach den verschiedenen Codeblöcken verwenden Sie bitte einen letzten "Ergebnis"-Block, bevor Sie das `EmbedLiveSample`-Makro verwenden (siehe oben). Auf diese Weise wird die Semantik des Beispiels sowohl für den Leser als auch für jedes Tool, das die Seite analysieren könnte (z.B. Bildschirmleser, Webcrawler), klarer gemacht.
