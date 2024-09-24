---
title: Live-Beispiele
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

MDN unterstützt die Darstellung von Codeblöcken innerhalb der Artikel als _Live-Beispiele_, wodurch Leser sowohl den Code als auch dessen Ausgabe sehen können, wie sie auf einer Webseite aussehen würde. Diese Funktion ermöglicht es Lesern genau zu verstehen, was der ausgeführte Code erzeugen würde, wodurch die Dokumentation dynamisch und lehrreich wird. Sie ermöglicht es Autoren auch sicherzustellen, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe haben und ordnungsgemäß funktionieren, wenn sie mit verschiedenen Browsern verwendet werden.

Das Live-Beispielsystem kann Codeblöcke verarbeiten, die in HTML, CSS und JavaScript geschrieben sind, unabhängig von der Reihenfolge, in der sie auf der Seite angeordnet sind. Dies stellt sicher, dass die Ausgabe dem kombinierten Quellcode entspricht, da das System den Code direkt innerhalb der Seite ausführt.

Im Gegensatz zu [interaktiven Beispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_available) bieten Live-Beispiele keine eingebaute Unterstützung für das Erfassen der Konsolenprotokollierung oder das Zurücksetzen von Beispielen, die durch Benutzereingaben geändert werden. Der Abschnitt [Beispiele](#beispiele) zeigt, wie Sie diese und andere nützliche Funktionen implementieren können.

## Wie funktioniert das Live-Beispielsystem?

Das Live-Beispielsystem gruppiert Codeblöcke, fügt sie zu HTML zusammen und rendert das HTML in einem {{HTMLElement("iframe")}}.
Ein Live-Beispiel besteht aus zwei Teilen:

- Einem oder mehreren Codeblöcken, die zusammengefasst werden
- Einem Makroaufruf, der das Ergebnis der kombinierten Codeblöcke in einem {{HTMLElement("iframe")}} anzeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat einen Sprachbezeichner — `html`, `css` oder `js` — der angibt, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die Sprachkennungen müssen auf den entsprechenden Codeblöcken sein, und ein Makroaufruf (`EmbedLiveSample`) muss auf der Seite vorhanden sein, um die Ausgabe anzuzeigen:

````md
## Beispiele

```html
<!-- HTML code -->
```

```css
/* CSS code */
```

\{{EmbedLiveSample("Beispiele")}}
````

Das Live-Beispielsystem ermöglicht die Gruppierung von Codeblöcken auf verschiedene Arten, um die Ausgabe effektiv darzustellen. Der nächste Abschnitt beschreibt diese Methoden.

### Gruppierung von Codeblöcken

Codeblöcke können auf zwei Arten gruppiert werden:

1. Verwendung der ID einer Überschrift oder eines Blockelements, das die Codeblöcke enthält, als Kennzeichnung
2. Angabe einer Zeichenkettenkennung zusammen mit den Codeblöcken

Codeblöcke, die keine Kennung spezifizieren, werden standardmäßig mit der ID der Überschrift oder des Blockelements gruppiert, das die Codeblöcke enthält. Die Kennung ist in diesem Fall die ID einer Überschrift oder eines Blockelements (wie ein {{HTMLElement("div")}}). Dies wird im folgenden Beispiel gezeigt, in dem `html`- und `css`-Codes innerhalb des Blocks "Styling eines Absatzes" verwendet werden, um die Ausgabe für den `EmbedLiveSample`-Makroaufruf zu erzeugen.

````md
## Beispiele

### Styling eines Absatzes

In diesem Beispiel verwenden wir CSS, um Absätze zu stylen, die die Klasse `fancy` gesetzt haben.

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

#### Ergebnis

\{{EmbedLiveSample("Styling eines Absatzes")}}

Nur das `<p>`-Element mit `class="fancy"` wird `rot` gestylt.
````

- Wenn die ID zu einem Blockelement gehört, umfasst die Gruppe alle Codeblöcke innerhalb des umschließenden Blockelements, dessen ID verwendet wird.
- Wenn die ID zu einer Überschrift gehört, umfasst die Gruppe alle Codeblöcke, die nach dieser Überschrift und vor der nächsten Überschrift derselben Überschriftsebene stehen. Beachten Sie, dass Codeblöcke unter Unterüberschriften der angegebenen Überschrift alle verwendet werden; wenn dies nicht der gewünschte Effekt ist, verwenden Sie eine ID auf einem Blockelement oder eine Zeichenkettenkennung.

Um Codeblöcke mit einer Kennung zu gruppieren, fügen Sie `live-sample___{IDENTIFIER}` zum Infostring des Codeblocks hinzu. Die Kennung muss eindeutig für die Codeblöcke sein, die Sie gruppieren möchten. Zum Beispiel verwendet `live-sample___color-picker` `color-picker` als Kennung für das Live-Beispielsystem, und alle Codeblöcke mit `live-sample___color-picker` im Infostring werden im Live-Beispiel kombiniert. Das folgende Beispiel gruppiert einen CSS- und einen JavaScript-Codeblock mit der Kennung `color-picker`:

````md
## Beispiele

### Styling eines Absatzes

In diesem Beispiel verwenden wir CSS, um Absätze zu stylen, die die Klasse `fancy` gesetzt haben.

```html live-sample___paragraph-styling
<p>I'm not fancy.</p>

<p class="fancy">But I am!</p>
```

```css live-sample___paragraph-styling
p.fancy {
  color: red;
}
```

Nur das `<p>`-Element mit `class="fancy"` wird `rot` gestylt:

\{{EmbedLiveSample("paragraph-styling")}}
````

Das Makro verwendet eine spezielle URL, die die ID enthält, um die Ausgabe für eine gegebene Gruppe von Codeblöcken abzurufen. Sie sollten diese URL niemals hart kodieren — wenn Sie das Beispiel verlinken müssen, verwenden Sie das [`LiveSampleLink`](#livesamplelink-makro) Makro.

Der resultierende Frame (oder die Seite) ist sandboxed, sicher und kann technisch alles tun, was im Web funktioniert. Natürlich sollte der Code praktisch relevant für den Inhalt der Seite sein; jegliches nicht verwandte Material unterliegt der Entfernung durch die MDN-Redaktionsgemeinschaft.

Das Live-Beispielsystem bietet viele Optionen, und wir werden versuchen, diese Stück für Stück zu erläutern.

### Live-Beispiel-Makros

Es gibt zwei Makros, die Sie verwenden können, um Live-Beispiele anzuzeigen:

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) bettet ein Live-Beispiel in eine Seite ein
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) erstellt einen Link, der das Live-Beispiel auf einer neuen Seite öffnet

In vielen Fällen können Sie das `EmbedLiveSample`- oder `LiveSampleLink`-Makro mit wenig oder gar keiner zusätzlichen Arbeit zu Seiten hinzufügen! Solange das Beispiel durch eine Überschrift-ID identifiziert werden kann oder sich in einem Block mit einer verwendbaren ID befindet, sollte es reichen, das Makro hinzuzufügen.

#### EmbedLiveSample-Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow)}}
```

- sample_id
  - : Erforderlich: Dies kann die Zeichenkettenkennung des Beispiels oder die ID der Überschrift oder des umschließenden Blocks sein, um den Code zu extrahieren.
    Um zu verifizieren, ob Sie die richtige Überschrift-ID haben, schauen Sie sich die URL des Abschnitts im Inhaltsverzeichnis der Seite an; Sie können es auch überprüfen, indem Sie den Quelltext der Seite anzeigen.
- width {{deprecated_inline}}
  - : Das `width`-Attribut für das {{HTMLElement("iframe")}}, angegeben in `px`. Veraltet, da es keine Wirkung mehr hat: Live-Beispiele erstrecken sich immer über die volle Breite des Inhaltsbereichs.
- height
  - : Das `height`-Attribut des {{HTMLElement("iframe")}}, angegeben in `px`. Muss mindestens `60` sein. Dies ist optional; eine vernünftige Standardhöhe wird verwendet, wenn Sie dies weglassen.
- screenshot_URL {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Beispiel aussehen sollte. Veraltet; fügen Sie nur Live-Beispiele hinzu, wenn es eine angemessene Browserunterstützung gibt.
- page_slug {{deprecated_inline}}
  - : Der Slug der Seite, die das Beispiel enthält; dies ist optional, und wenn es nicht angegeben wird, wird das Beispiel von derselben Seite gezogen, auf der das Makro verwendet wird. Veraltet; verwenden Sie Live-Beispiele nur, wenn der Code auf derselben Seite ist.
- class_name {{deprecated_inline}}
  - : Der Klassenname, der auf das {{HTMLElement("iframe")}} angewendet wird. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- allow
  - : Das `allow`-Attribut für das {{HTMLElement("iframe")}}. Dies ist optional; standardmäßig sind keine erlaubten Features vorhanden.

#### LiveSampleLink-Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- block_ID
  - : Die ID der Überschrift oder des umschließenden Blocks, aus dem der Code bezogen wird. Der beste Weg, sicherzugehen, dass Sie die richtige ID haben, ist, die URL des Abschnitts im Inhaltsverzeichnis der Seite anzusehen; Sie können es auch überprüfen, indem Sie den Quelltext der Seite anzeigen.
- link_text
  - : Eine Zeichenkette, die als Linktext verwendet wird.

## Verwendung des Live-Beispielsystems

Die folgenden Abschnitte beschreiben einige allgemeine Anwendungsfälle für das Live-Beispielsystem.

### Formatierung von Live-Beispielen

Wenn Sie ein Live-Beispiel im Abschnitt "Beispiele" schreiben, geben Sie eine beschreibende H3-Überschrift (`###`) für dieses Live-Beispiel-Beispiel an. Idealerweise schreiben Sie eine kurze Beschreibung des Beispiels, die das Szenario und das, was Sie demonstrieren möchten, erklärt. Fügen Sie dann Unterabschnitte mit den folgenden H4-Überschriften (`####`) in der aufgelisteten Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in den jeweiligen oben genannten Unterabschnitten.

Im **Ergebnis**-Unterabschnitt fügen Sie den `EmbedLiveSample`-Makroaufruf hinzu. Idealerweise fügen Sie in diesem Unterabschnitt etwas mehr Prosa hinzu, um das Ergebnis zu beschreiben.

Wenn Sie einen bestimmten Sprachtyp nicht verwenden (zum Beispiel, wenn Sie kein JavaScript verwenden) oder wenn Sie den Codeblock ausblenden, sollten Sie die entsprechende Überschrift auslassen.

### Ausblenden von Code

Manchmal möchten Sie nur den statischen Codeblock anzeigen, der zum Beispiel innerhalb einer Seite gehört. Sie benötigen jedoch immer noch die HTML-, CSS- und JavaScript-Codeblöcke, um ein solches Beispiel darzustellen.

Um dies zu erreichen, können Sie Codeblöcke, die nicht relevant sind, ausblenden, indem Sie den Infostring `hidden` dem Sprachbezeichner hinzufügen. Wenn Sie dies tun, lassen Sie die `### HTML/CSS/JavaScript`-Überschriften für die ausgeblendeten Codeblöcke weg.

Die Verwendung des obigen Beispiels mit ausgeblendetem HTML-Code würde folgendermaßen aussehen:

````md
## Beispiele

### Styling eines Absatzes

In diesem Beispiel verwenden wir CSS, um Absätze zu stylen, die die Klasse `fancy` gesetzt haben.

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

#### Ergebnis

Nur das `<p>`-Element mit `class="fancy"` wird `rot` gestylt.

\{{EmbedLiveSample("Styling eines Absatzes")}}
````

### Umwandlung von Code-Snippets in Live-Beispiele

Ein häufiger Anwendungsfall besteht darin, vorhandene Code-Snippets, die bereits auf MDN gezeigt werden, in Live-Beispiele umzuwandeln. Der erste Schritt besteht darin, entweder Code-Snippets hinzuzufügen oder sicherzustellen, dass vorhandene für die Verwendung als Live-Beispiele bereit sind, sowohl hinsichtlich des Inhalts als auch hinsichtlich ihrer Markup. Die Code-Snippets müssen zusammen ein vollständiges, ausführbares Beispiel darstellen. Wenn das vorhandene Snippet beispielsweise nur CSS zeigt, müssen Sie möglicherweise ein HTML-Snippet hinzufügen, auf das das CSS angewendet werden kann.

Jeder Code muss in einem Codeblock sein, mit einem separaten Block für jede Sprache, korrekt gekennzeichnet nach der Sprache, die er beinhaltet. Meistens wurde dies bereits getan, aber es ist immer empfehlenswert, doppelt zu überprüfen, ob jedes Code-Stück mit der korrekten Syntax konfiguriert wurde. Dies geschieht mit einem Sprachbezeichner im Codeblock `language-type`, wobei _language-type_ der Typ der Sprache ist, den der Block enthält, z.B. `html`, `css` oder `js`.

> [!NOTE]
> Sie können mehr als einen Block für jede Sprache haben; sie werden alle zusammengefügt. Dies ermöglicht es Ihnen, einen Abschnitt Code zu haben, gefolgt von einer Erklärung, wie er funktioniert, dann einen weiteren Abschnitt und so weiter. Dies erleichtert noch mehr die Erstellung von Tutorials und ähnlichen, die Live-Beispiele mit erläuterndem Text durchsetzen.

Stellen Sie also sicher, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils korrekt für die Syntaxhervorhebung dieser Sprache konfiguriert sind, und Sie sind bereit.

## Beispiele

Dieser Abschnitt enthält Beispiele, die zeigen, wie das Live-Beispielsystem verwendet werden kann, einschließlich der verschiedenen Möglichkeiten zur Gruppierung der Codeblöcke, die ein Beispiel umfassen, und wie Sie Protokollierungsausgaben in Ihren Beispielen anzeigen.

Beachten Sie, dass die Überschriften für Codeblöcke ("HTML", "CSS" oder "JavaScript") konventionell in den meisten MDN-Beispielen verwendet werden, aber vom Live-Beispiel-Makro nicht tatsächlich erforderlich sind.

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

Im JavaScript-Beispiel fügen wir dem Text "Hello world!" einen Ereignishandler hinzu, der ihn umschaltet, wenn er angeklickt wird.

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

Hier ist das Ergebnis der Ausführung der oberen Codeblöcke über `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}`:

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

Hier ist ein Link, der durch den Aufruf dieser Codeblöcke über `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}` resultiert:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Gruppierung von Codeblöcken nach Kennung

Dieses HTML erstellt einen Absatz und einige Blöcke, um uns zu helfen, eine Nachricht zu positionieren und zu stylen. Die Zeichenkette `live-sample___hello-world` wurde dem `html`-Sprachbezeichner für diesen Codeblock hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code stylt das Kästchen sowie den Text darin. Die Zeichenkette `live-sample___hello-world` wurde dem `css`-Sprachbezeichner für diesen Codeblock hinzugefügt.

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

Dieser JavaScript-Code fügt dem Text "Hello world!" einen Ereignishandler hinzu, der ihn umschaltet, wenn er angeklickt wird. Die Zeichenkette `live-sample___hello-world` wurde dem `js`-Sprachbezeichner für diesen Codeblock ebenfalls hinzugefügt.

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

Wir erhalten diese Ausgabe, indem wir die oberen Codeblöcke mit der Zeichenkettenkennung `hello-world` im `\{{EmbedLiveSample('hello-world')}}` Makroaufruf ausführen:

{{EmbedLiveSample("hello-world")}}

### Anzeige eines `<iframe>` mit bestimmter Größe

Verwenden Sie den `height` Parameter, um die Größe des `<iframe>` Elements anzugeben, das die Live-Beispielausgabe enthält.

```html
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Zulassen von Features

Der `allow` Parameter kann verwendet werden, um die Features zu spezifizieren, die im `<iframe>` Element erlaubt sind, das die Live-Beispielausgabe enthält. Die verfügbaren Werte stammen aus der [Permission Policy Syntax für Frames](/de/docs/Web/HTTP/Permissions_Policy#embedded_frame_syntax).

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

### Anzeige eines einfachen Logeintrags

Dieses Beispiel zeigt, wie Sie ein einfaches Log in Ihrem Live-Beispiel implementieren, bei dem der vorherige Wert jedes Mal ersetzt wird, wenn ein neuer Logeintrag hinzugefügt wird.

Zur Klarheit wird in diesem Beispiel der Protokollierungscode und der Code, der ihn verwendet, getrennt dargestellt und der Protokollierungscode zuerst angezeigt. Im Allgemeinen sollten Sie bei der Implementierung eigener Beispiele Protokollierungselemente unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Logausgabe als Teil des Beispiels bietet eine viel bessere Benutzererfahrung als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}} Element mit einer `id` von `"log"` zur Anzeige der Logausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als nächstes die Protokollierungsfunktion `log()`. Diese nimmt den Text, der protokolliert werden soll, als Argument und verwendet ihn, um das bestehende Log zu ersetzen.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Beachten Sie, dass der Inhalt des Logelements mit der `innerText` Eigenschaft gesetzt wird, die sicherer ist als die Verwendung von `innerHTML`, da der protokollierte Text nicht in HTML geparst wird (was potenziell schädlichen Code einschließen könnte).

#### CSS

Das CSS setzt die Höhe des Protokollierungselements.

```css
#log {
  height: 20px;
}
```

#### Protokollierungstestcode

Dieses Beispiel soll zeigen, "wie man protokolliert", daher ist "was protokolliert wird" nicht besonders wichtig. Dies wird daher trivial als ein Button implementiert, den der Benutzer drücken kann, um einen Wert zu inkrementieren.

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

Drücken Sie den Button, um neuen Loginhalt hinzuzufügen.

{{EmbedLiveSample("Anzeige eines einfachen Logeintrags", "100%", "80px")}}

### Anzeige eines Logs, das Einträge anhängt

Dieses Beispiel zeigt, wie Sie eine einfache "Protokollierungskonsole" in Ihrem Live-Beispiel implementieren. Die Konsole hängt jedes Mal eine neue Zeile an das Ende der Ausgabe an, wenn ein Log hinzugefügt wird, und scrollt das neue Element in den Sichtbereich.

Zur Klarheit wird in diesem Beispiel der Protokollierungscode und der Code, der ihn verwendet, getrennt dargestellt und der Protokollierungscode zuerst angezeigt. Im Allgemeinen sollten Sie bei der Implementierung eigener Beispiele Protokollierungselemente unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Logausgabe als Teil des Beispiels bietet eine viel bessere Benutzererfahrung als die Verwendung von `console.log()`.

> [!NOTE]
> Siehe [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed) für ein vollständigeres Beispiel.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}} Element mit einer `id` von `"log"` zur Anzeige der Logausgabe.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie als nächstes die Protokollierungsfunktion `log()`. Diese nimmt den Text, der protokolliert werden soll, als Argument und hängt ihn als neue Zeile an den Inhalt des Logelements an. Die Funktion setzt auch `scrollTop` des Elements auf die `scrollHeight` des Elements, was das neue Zeile des Logtextes in den Sichtbereich scrollt.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie im vorherigen Beispiel setzen wir den Inhalt mit der `innerText` Eigenschaft, da dies weniger anfällig für schädlichen Code ist als die Verwendung von `innerHTML`.

#### CSS

Das CSS fügt Scrollleisten hinzu, wenn der Inhalt des Elements überläuft, setzt die Höhe des Protokollierungselements und fügt eine Umrandung hinzu. Beachten Sie, dass das obenstehende JavaScript sicherstellt, dass, wenn es überläuft, die Hinzufügung neuer Logtexte den Text in den Sichtbereich scrollt.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Protokollierungstestcode

Dieses Beispiel soll zeigen, "wie man protokolliert", daher ist "was protokolliert wird" nicht besonders wichtig. Dies wird daher trivial als ein Button implementiert, den der Benutzer drücken kann, um einen Wert zu inkrementieren.

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

Drücken Sie den Button, um neuen Loginhalt hinzuzufügen.

{{EmbedLiveSample("Anzeige eines Logs, das Einträge anhängt", "100%", "180px")}}

### Anzeige eines Rücksetzknopfs

Ein Rücksetzknopf kann hilfreich sein für Beispiele, die nicht auf ihren Anfangszustand zurückgesetzt werden können, ohne die Seite neu zu laden. Zum Beispiel benötigt [das "Priorität setzen" Beispiel für `Highlight.priority`](/de/docs/Web/API/Highlight/priority#result_2) einen Rücksetzknopf, weil, sobald Sie irgendeine Priorität gesetzt haben, der Anfangszustand nicht mehr verfügbar ist.

Dieses Beispiel zeigt, wie Sie einen Rücksetzknopf zum Beispiel [Anzeige eines Logs, das Einträge anhängt](#anzeige_eines_logs,_das_einträge_anhängt) oben hinzufügen. Beachten Sie, dass das JavaScript und CSS für den Protokollierungscode mit dem im vorherigen Beispiel übereinstimmt, sodass dieser Code ausgeblendet ist.

#### HTML

Das HTML für das Beispiel umfasst nun einen Rücksetzknopf.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für den Button fügt eine `click` Ereignishandlerfunktion hinzu, die einfach das Frame mit dem aktuellen Beispiel neu lädt.

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

Klicken Sie den "Press me many times" Button mehrmals. Setzen Sie das Beispiel zurück, indem Sie den "Reset"-Button drücken.

{{EmbedLiveSample("Anzeige eines Rücksetzknopfs", "100%", "180px")}}

## Konventionen bezüglich Live-Beispiele

- Reihenfolge der Codeblöcke
  - : Beim Hinzufügen eines Live-Beispiels sollten die Codeblöcke so sortiert sein, dass der erste dem Hauptsprachtyp für dieses Beispiel entspricht (wenn es einen gibt). Zum Beispiel sollte beim Hinzufügen eines Live-Beispiels für das HTML-Referenz der erste Block HTML sein, beim Hinzufügen eines Live-Beispiels für das CSS-Referenz, sollte es CSS sein und so weiter.
- Benennung von Überschriften
  - : Wenn keine Mehrdeutigkeit besteht (z.B. das Beispiel befindet sich in einem "Beispiele"-Abschnitt), sollten die Überschriften einfach den Namen der entsprechenden Sprache enthalten: HTML, CSS, JavaScript, SVG, etc. (siehe oben). Überschriften wie "HTML Content" oder "JavaScript Content" sollten nicht verwendet werden. Wenn jedoch eine solche kurze Überschrift den Inhalt unklar macht, kann man einen durchdachteren Titel verwenden.
- Verwendung eines "Ergebnis"-Blocks
  - : Nach den verschiedenen Codeblöcken verwenden Sie bitte einen abschließenden "Ergebnis"-Block, bevor Sie das `EmbedLiveSample`-Makro benutzen (siehe oben). Auf diese Weise wird die Semantik des Beispiels sowohl für den Leser als auch für alle Werkzeuge, die die Seite analysieren würden (z.B. Screenreader, Webcrawler), deutlicher gemacht.
