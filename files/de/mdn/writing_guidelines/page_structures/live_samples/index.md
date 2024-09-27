---
title: Live-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

MDN unterstützt das Anzeigen von Codeblöcken innerhalb der Artikel als _Live-Beispiele_, sodass Leser sowohl den Code als auch dessen Ausgabe sehen können, wie sie auf einer Webseite aussehen würde. Dieses Feature ermöglicht es den Lesern, genau zu verstehen, was der ausgeführte Code erzeugen würde, wodurch die Dokumentation dynamisch und lehrreich wird.
Es ermöglicht den Autoren auch sicherzustellen, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe haben und ordnungsgemäß funktionieren, wenn sie mit verschiedenen Browsern verwendet werden.

Das Live-Beispiel-System kann Codeblöcke in HTML, CSS und JavaScript verarbeiten, unabhängig von der Reihenfolge, in der sie auf der Seite geschrieben sind. Dies stellt sicher, dass die Ausgabe dem kombinierten Quellcode entspricht, da das System den Code direkt innerhalb der Seite ausführt.

Im Gegensatz zu [Interaktiven Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_available) bieten Live-Beispiele keinen integrierten Support zum Erfassen von Konsolen-Logs oder zum Zurücksetzen von Beispielen, die durch Benutzereingaben geändert werden.
Der [Beispiele](#styling_a_paragraph) Abschnitt zeigt, wie Sie diese und andere nützliche Funktionen implementieren können.

## Wie funktioniert das Live-Beispiel-System?

Das Live-Beispiel-System gruppiert Codeblöcke, fügt sie in HTML zusammen und rendert das HTML in einem {{HTMLElement("iframe")}}.
Ein Live-Beispiel besteht aus zwei Teilen:

- Einem oder mehreren Codeblöcken, die zusammengefasst wurden
- Einem Makroaufruf, der das Ergebnis der kombinierten Codeblöcke in einem {{HTMLElement("iframe")}} anzeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat eine Sprachkennung — `html`, `css` oder `js` — die angibt, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die Sprachkennungen müssen auf den entsprechenden Codeblöcken vorhanden sein, und ein Makroaufruf (`EmbedLiveSample`) muss auf der Seite vorhanden sein, um die Ausgabe anzuzeigen:

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

Das Live-Beispiel-System ermöglicht die Gruppierung von Codeblöcken auf unterschiedliche Weise, um die Ausgabe effektiv anzuzeigen. Der nächste Abschnitt beschreibt diese Methoden.

### Gruppieren von Codeblöcken

Codeblöcke können auf zwei Arten gruppiert werden:

1. Verwenden der ID einer Überschrift oder eines Blockelements, das die Codeblöcke enthält, als Kennung
2. Festlegen einer Zeichenfolgen-Kennung zusammen mit den Codeblöcken

Standardmäßig werden Codeblöcke ohne ausdrücklich angegebene Kennung zusammengefasst, indem die ID der Überschrift oder des Blockelements verwendet wird, das die Codeblöcke enthält. Die Kennung ist in diesem Fall die ID einer Überschrift oder eines Blockelements (wie ein {{HTMLElement("div")}}). Dies wird im folgenden Beispiel gezeigt, bei dem `html`- und `css`-Codes innerhalb des Blocks "Styling eines Absatzes" verwendet werden, um die Ausgabe für den `EmbedLiveSample`-Makroaufruf zu generieren.

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

- Wenn die ID zu einem Blockelement gehört, umfasst die Gruppe alle Codeblöcke innerhalb des umgebenden Blockelements, dessen ID verwendet wird.
- Wenn die ID zu einer Überschrift gehört, umfasst die Gruppe alle Codeblöcke, die nach dieser Überschrift und vor der nächsten Überschrift der gleichen Ebene liegen. Beachten Sie, dass Codeblöcke unter Unterüberschriften der angegebenen Überschrift alle verwendet werden; wenn dies nicht der gewünschte Effekt ist, verwenden Sie eine ID für ein Blockelement oder verwenden Sie stattdessen eine Zeichenfolgen-Kennung.

Um Codeblöcke mithilfe einer Kennung zu gruppieren, fügen Sie eine Zeichenkette im Format `live-sample___{IDENTIFIER}` zur Information der Codeblöcke hinzu. Die Kennung muss eindeutig für die Codeblöcke sein, die Sie gruppieren möchten. Zum Beispiel verwendet `live-sample___color-picker` `color-picker` als Kennung für das Live-Beispiel-System, und alle Codeblöcke mit `live-sample___color-picker` in ihrer Info-Zeichenkette werden im Live-Beispiel kombiniert.
Das folgende Beispiel gruppiert einen CSS- und einen JavaScript-Codeblock zusammen unter Verwendung der Kennung `color-picker`:

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

Das Makro verwendet eine spezielle URL, die die ID enthält, um die Ausgabe für eine bestimmte Gruppe von Codeblöcken abzurufen. Sie sollten diese URL niemals in Inhalte eincodieren — wenn Sie auf das Beispiel verlinken müssen, verwenden Sie das [`LiveSampleLink`](#styling_a_paragraph) Makro.

Das resultierende Frame (oder die Seite) ist sandboxed, sicher, und kann technisch alles tun, was im Web funktioniert. Natürlich sollte der Code in der Praxis relevant für den Inhalt der Seite sein; jegliche nicht verwandten Materialien können von MDNs Editorengemeinschaft entfernt werden.

Das Live-Beispiel-System bietet viele Optionen, und wir werden versuchen, diese Stück für Stück zu erläutern.

### Live-Beispiel-Makros

Es gibt zwei Makros, die Sie verwenden können, um Live-Beispiele anzuzeigen:

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) bettet ein Live-Beispiel in eine Seite ein
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link, der das Live-Beispiel in einer neuen Seite öffnet

In vielen Fällen können Sie das `EmbedLiveSample` oder `LiveSampleLink` Makro zu Seiten hinzufügen, mit wenig oder keiner zusätzlichen Arbeit! Solange das Beispiel durch eine Überschrift-ID identifiziert werden kann oder sich in einem Block mit einer ID befindet, die Sie verwenden können, sollte das Hinzufügen des Makros die Aufgabe erledigen.

#### EmbedLiveSample Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow)}}
```

- sample_id
  - : Erforderlich: Dies kann die Zeichenfolgen-Kennung des Beispiels oder die ID der Überschrift oder des umgebenden Blocks sein, um den Code zu beziehen.
    Um zu überprüfen, ob Sie die richtige Überschrift-ID haben, sehen Sie sich die URL des Abschnitts im Inhaltsverzeichnis der Seite an; Sie können es auch überprüfen, indem Sie die Quelle der Seite ansehen.
- width {{deprecated_inline}}
  - : Das `width` Attribut für das {{HTMLElement("iframe")}}, angegeben in `px`. Veraltet, da es keine Wirkung mehr hat: Live-Beispiele erstrecken sich immer über die volle Breite des Inhaltsbereichs.
- height
  - : Das `height` Attribut des {{HTMLElement("iframe")}}, angegeben in `px`. Muss mindestens `60` sein. Dies ist optional; eine angemessene Standardhöhe wird verwendet, wenn Sie dies weglassen.
- screenshot_URL {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Beispiel aussehen sollte. Veraltet; fügen Sie nur dann Live-Beispiele hinzu, wenn es eine angemessene Browser-Unterstützung gibt.
- page_slug {{deprecated_inline}}
  - : Der Slug der Seite, die das Beispiel enthält; dies ist optional, und wenn es nicht bereitgestellt wird, wird das Beispiel von derselben Seite abgerufen, auf welcher das Makro verwendet wird. Veraltet; fügen Sie nur Live-Beispiele hinzu, wenn der Code auf derselben Seite ist.
- class_name {{deprecated_inline}}
  - : Der Klassenname, der auf das {{HTMLElement("iframe")}} angewendet werden soll. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- allow
  - : Das `allow` Attribut für das {{HTMLElement("iframe")}}. Dies ist optional; standardmäßig sind keine erlaubten Features vorhanden.

#### LiveSampleLink Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- block_ID
  - : Die ID der Überschrift oder des umgebenden Blocks, um den Code zu beziehen. Der beste Weg, um sicherzustellen, dass Sie die ID richtig haben, besteht darin, die URL des Abschnitts im Inhaltsverzeichnis der Seite anzusehen; Sie können es auch überprüfen, indem Sie die Quelle der Seite ansehen.
- link_text
  - : Ein String, der als Linktext verwendet werden soll.

## Verwendung des Live-Beispiel-Systems

Die folgenden Abschnitte beschreiben einige häufige Anwendungsfälle für das Live-Beispiel-System.

### Formatierung von Live-Beispielen

Wenn Sie ein Live-Beispiel im Abschnitt "Beispiele" schreiben, geben Sie eine beschreibende H3-Überschrift (`###`) für dieses Live-Beispiel an. Idealerweise schreiben Sie eine kurze Beschreibung des Beispiels, die das Szenario erklärt und zeigt, was Sie demonstrieren möchten. Fügen Sie dann Unterabschnitte mit den folgenden H4-Überschriften (`####`) in der angegebenen Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in den oben aufgelisteten Unterabschnitten.

Im **Ergebnis**-Unterabschnitt fügen Sie den Aufruf des `EmbedLiveSample` Makros hinzu. Fügen Sie idealerweise noch etwas Prosa in diesen Unterabschnitt ein, um das Ergebnis zu beschreiben.

Wenn Sie eine bestimmte Sprachart nicht verwenden (zum Beispiel, wenn Sie kein JavaScript verwenden) oder wenn Sie den Codeblock ausblenden, sollten Sie die entsprechende Überschrift weglassen.

### Ausblenden von Code

Manchmal möchten Sie nur den statischen Codeblock anzeigen, der für das Beispiel auf einer Seite gerendert ist. Sie benötigen jedoch die HTML-, CSS- und JavaScript-Codeblöcke, um ein solches Beispiel zu rendern.

Um dies zu erreichen, können Sie alle nicht relevanten Codeblöcke ausblenden, indem Sie die Info-Zeichenkette `hidden` zum Sprachkennzeichen hinzufügen. Wenn Sie dies tun, lassen Sie die Überschriften `### HTML/CSS/JavaScript` für die ausgeblendeten Codeblöcke weg.

Das obige Beispiel, bei dem der HTML-Code ausgeblendet wird, würde folgendermaßen aussehen:

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

Ein häufiger Anwendungsfall besteht darin, vorhandene Code-Snippets, die bereits auf MDN angezeigt werden, in Live-Beispiele umzuwandeln.
Der erste Schritt besteht darin, entweder Code-Snippets hinzuzufügen oder sicherzustellen, dass bestehende Snippets bereit sind, als Live-Beispiele verwendet zu werden, sowohl hinsichtlich des Inhalts als auch hinsichtlich ihres Markups. Die Code-Snippets müssen zusammen ein vollständiges, ausführbares Beispiel ergeben. Wenn das vorhandene Snippet zum Beispiel nur CSS zeigt, müssen Sie möglicherweise ein HTML-Snippet hinzufügen, damit das CSS darauf angewendet werden kann.

Jedes Code-Element muss in einem Codeblock sein, mit einem separaten Block für jede Sprache, der ordnungsgemäß gekennzeichnet ist, um welche Sprache es sich handelt. Meistens wurde dies bereits getan, aber es ist immer sinnvoll, noch einmal zu überprüfen, ob jedes Code-Stück mit der richtigen Syntax konfiguriert ist. Dies geschieht mit einem Sprachkennzeichen im Codeblock von `language-type`, wobei _language-type_ die Art der Sprache ist, die der Block enthält, z.B. `html`, `css` oder `js`.

> [!NOTE]
> Sie können mehr als einen Block für jede Sprache haben; sie werden alle zusammengeführt. Dies ermöglicht es Ihnen, einen Code-Abschnitt zu haben, gefolgt von einer Erklärung, wie er funktioniert, dann einen weiteren Abschnitt und so weiter. Dies erleichtert es noch mehr, Tutorials und dergleichen zu erstellen, die Live-Beispiele nutzen, die mit erklärendem Text durchsetzt sind.

Stellen Sie also sicher, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils korrekt für das Syntaxhighlighting der jeweiligen Sprache konfiguriert sind, und Sie sind bereit.

## Beispiele

Dieser Abschnitt enthält Beispiele, die zeigen, wie das Live-Beispiel-System verwendet werden kann, einschließlich der verschiedenen Möglichkeiten, die Codeblöcke eines Beispiels zu gruppieren und wie Sie in Ihren Beispielen Logging-Ausgaben anzeigen können.

Beachten Sie, dass die Überschriften für Codeblöcke ("HTML", "CSS" oder "JavaScript") in den meisten MDN-Beispielen aus Konvention verwendet werden, aber nicht tatsächlich vom Live-Beispiel-Makro erforderlich sind.

### Gruppieren von Codeblöcken nach Überschrift

#### HTML

Dieser HTML-Code erstellt einen Absatz und einige Blöcke, um uns zu helfen, eine Nachricht zu positionieren und zu stylen.

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

#### CSS

Der CSS-Code stylt das Feld sowie den Text darin.

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

Im JavaScript-Beispiel fügen wir der "Hallo Welt!"-Text eine Ereignisbehandlungsroutine hinzu, die sie umschaltet, wenn sie angeklickt wird.

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

Hier ist ein Link, der aus dem Aufruf dieser Codeblöcke über `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live-Beispiel-Demo-Link')}}` resultiert:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live-Beispiel-Demo-Link')}}

### Gruppieren von Codeblöcken nach Kennung

Dieser HTML-Code erstellt einen Absatz und einige Blöcke, um uns zu helfen, eine Nachricht zu positionieren und zu stylen. Die Zeichenkette `live-sample___hello-world` wurde zur `html`-Spracherkennung für diesen Codeblock hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code stylt das Feld sowie den Text darin. Die Zeichenkette `live-sample___hello-world` wurde zur `css`-Spracherkennung für diesen Codeblock hinzugefügt.

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

Dieser JavaScript-Code fügt der "Hallo Welt!"-Text eine Ereignisbehandlungsroutine hinzu, die sie umschaltet, wenn sie angeklickt wird. Die Zeichenkette `live-sample___hello-world` wurde auch zur `js`-Spracherkennung für diesen Codeblock hinzugefügt.

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

Wir erhalten diese Ausgabe, indem wir die obigen Codeblöcke mit der Zeichenketten-Kennung `hello-world` im `\{{EmbedLiveSample('hello-world')}}` Makroaufruf ausführen:

{{EmbedLiveSample("hello-world")}}

### Anzeige eines `<iframe>` mit bestimmter Größe

Verwenden Sie das `height`-Attribut, um die Größe des `<iframe>`-Elements festzulegen, das die Live-Beispiel-Ausgabe enthält.

```html
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Erlauben von Features

Das `allow`-Attribut kann verwendet werden, um die Features anzugeben, die im `<iframe>`-Element erlaubt sind, das die Live-Beispiel-Ausgabe enthält. Die verfügbaren Werte stammen aus der [Permission-Policy-Syntax für Frames](/de/docs/Web/HTTP/Permissions_Policy#embedded_frame_syntax).

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

### Anzeige eines einzelnen Eintragslogs

Dieses Beispiel zeigt, wie Sie ein einfaches Einzel-Eintrag-Log in Ihrem Live-Beispiel implementieren, bei dem der vorherige Wert jedes Mal ersetzt wird, wenn ein neuer Log-Eintrag hinzugefügt wird.

Zur Klarheit trennt dieses Beispiel den Logging-Code und den Code, der ihn verwendet, und zeigt zuerst den Logging-Code. Im Allgemeinen sollten Sie beim Implementieren Ihrer eigenen Beispiele Logging-Elemente unter anderen UI-Elementen platzieren.

> [!NOTE]
> Die Anzeige von Log-Ausgaben als Teil des Beispiels bietet ein viel besseres Benutzererlebnis als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Log-Ausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als Nächstes die Logging-Funktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und ersetzt den vorhandenen Log.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Beachten Sie, dass der Inhalt des Log-Elements mit der `innerText`-Eigenschaft gesetzt wird, was sicherer ist, als `innerHTML` zu verwenden, da der protokollierte Text nicht als HTML geparst wird (was potenziell bösartigen Code injizieren könnte).

#### CSS

Das CSS setzt die Höhe des Log-Elements.

```css
#log {
  height: 20px;
}
```

#### Logging-Testcode

Dieses Beispiel soll zeigen, "wie geloggt wird", daher ist "was geloggt wird" nicht so wichtig. Dies wird daher trivial als eine Schaltfläche implementiert, die der Benutzer drücken kann, um einen Wert zu inkrementieren.

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

Drücken Sie die Schaltfläche, um einen neuen Log-Inhalt hinzuzufügen.

{{EmbedLiveSample("Anzeigen eines einzelnen Eintragslogs", "100%", "80px")}}

### Anzeige eines Logs, das Elemente anhängt

Dieses Beispiel zeigt, wie Sie in Ihrem Live-Beispiel eine einfache "Logging-Konsole" implementieren. Die Konsole fügt eine neue Zeile am Ende der Ausgabe hinzu, jedes Mal, wenn ein Log hinzugefügt wird, und scrollt den neuen Eintrag in den sichtbaren Bereich.

Zur Klarheit trennt dieses Beispiel den Logging-Code und den Code, der ihn verwendet, und zeigt zuerst den Logging-Code. Im Allgemeinen sollten Sie beim Implementieren Ihrer eigenen Beispiele Logging-Elemente unter anderen UI-Elementen platzieren.

> [!NOTE]
> Die Anzeige von Log-Ausgaben als Teil des Beispiels bietet ein viel besseres Benutzererlebnis als die Verwendung von `console.log()`.

> [!NOTE]
> Siehe [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) für ein vollständigeres Beispiel.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit einer `id` von `"log"` zur Anzeige der Log-Ausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als Nächstes die Logging-Funktion `log()`.
Diese nimmt den zu protokollierenden Text als Argument und hängt ihn als neue Zeile an den Inhalt im Log-Element an. Die Funktion setzt auch den `scrollTop` des Elements auf die `scrollHeight` des Elements, was den neuen Log-Text in den Sichtbereich scrollt.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie im vorherigen Beispiel setzen wir den Inhalt mithilfe der `innerText`-Eigenschaft, da dies weniger anfällig für bösartigen Code ist als die Verwendung von `innerHTML`.

#### CSS

Das CSS fügt Scrollbars hinzu, wenn der Inhalt des Elements überläuft, setzt die Höhe des Log-Elements und fügt einen Rahmen hinzu. Beachten Sie, dass obiger JavaScript-Code sicherstellt, dass, wenn es Überlauf gibt, das Hinzufügen von neuem Log-Text den Text in den Sichtbereich scrollt.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Logging-Testcode

Dieses Beispiel soll zeigen, "wie geloggt wird", daher ist "was geloggt wird" nicht so wichtig. Dies wird daher trivial als eine Schaltfläche implementiert, die der Benutzer drücken kann, um einen Wert zu inkrementieren.

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

Drücken Sie die Schaltfläche, um neuen Log-Inhalt hinzuzufügen.

{{EmbedLiveSample("Anzeige eines Logs, das Elemente anhängt", "100%", "180px")}}

### Anzeige einer Zurücksetzen-Schaltfläche

Eine Zurücksetzen-Schaltfläche kann hilfreich für Beispiele sein, die nicht auf ihren Ausgangszustand zurückgesetzt werden können, ohne die Seite neu zu laden. Zum Beispiel benötigt das [Beispiel `Highlight.priority` "Einstellung der Priorität"](/de/docs/Web/API/Highlight/priority#result_2) eine Zurücksetzen-Schaltfläche, da, sobald Sie entweder die Priorität gesetzt haben, der ursprüngliche Zustand nicht mehr verfügbar ist.

Dieses Beispiel zeigt, wie Sie die Zurücksetzen-Schaltfläche zum Beispiel [Anzeige eines Logs, das Elemente anhängt](#css) hinzufügen. Beachten Sie, dass der JavaScript-Code und CSS für den Logging-Code derselbe wie im vorherigen Beispiel ist, daher wird dieser Code ausgeblendet.

#### HTML

Das HTML für das Beispiel enthält jetzt eine Zurücksetzen-Schaltfläche.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für die Schaltfläche fügt eine `click`-Ereignisbehandlungsfunktion hinzu, die einfach das Frame mit dem aktuellen Beispiel neu lädt.

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

Klicken Sie die Schaltfläche "Press me many times" einige Male. Setzen Sie das Beispiel durch Drücken der Schaltfläche "Reset" zurück.

{{EmbedLiveSample("Anzeige einer Zurücksetzen-Schaltfläche", "100%", "180px")}}

## Konventionen bezüglich Live-Beispielen

- Reihenfolge der Codeblöcke
  - : Beim Hinzufügen eines Live-Beispiels sollten die Codeblöcke so sortiert sein, dass der erste Block der Hauptsprache für dieses Beispiel entspricht (falls vorhanden). Wenn Sie beispielsweise ein Live-Beispiel für das HTML-Referenzdokument hinzufügen, sollte der erste Block HTML sein, wenn Sie ein Live-Beispiel für das CSS-Referenzdokument hinzufügen, sollte es CSS sein usw.
- Benennung von Überschriften
  - : Wenn es keine Mehrdeutigkeit gibt (z.B. das Beispiel befindet sich unter einem Abschnitt "Beispiele"), sollten Überschriften einfach mit dem Namen der entsprechenden Sprache benannt werden: HTML, CSS, JavaScript, SVG usw. (siehe oben). Überschriften wie "HTML-Inhalt" oder "JavaScript-Inhalt" sollten nicht verwendet werden. Wenn jedoch eine solche kurze Überschrift den Inhalt unklar macht, kann man einen durchdachteren Titel verwenden.
- Verwendung eines "Ergebnis"-Blocks
  - : Nach den verschiedenen Codeblöcken verwenden Sie bitte einen abschließenden "Ergebnis"-Block, bevor Sie das `EmbedLiveSample` Makro verwenden (siehe oben). Auf diese Weise wird die Semantik des Beispiels sowohl für den Leser als auch für alle Tools, die die Seite parsen würden (z.B. Screenreader, Web-Crawler), deutlicher gemacht.
