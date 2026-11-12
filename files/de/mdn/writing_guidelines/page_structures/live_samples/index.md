---
title: Live-Beispiele (EmbedLiveSample)
short-title: Live samples
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

MDN unterstützt die Anzeige von Codeblöcken innerhalb von Artikeln als _Live-Beispiele_. So können Leser sowohl den Quellcode als auch dessen Ausgabe sehen, wie sie auf einer Webseite erscheint.
Diese Funktion macht die Dokumentation dynamisch und anschaulich: Leser können genau nachvollziehen, welche Ausgabe der ausgeführte Code erzeugt.
Außerdem können Autoren sicherstellen, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe erzeugen und in verschiedenen Browsern wie vorgesehen funktionieren.

Das Live-Beispiel-System kann Codeblöcke in HTML, CSS und JavaScript verarbeiten, unabhängig davon, in welcher Reihenfolge sie auf der Seite stehen.
Da das System den Code direkt innerhalb der Seite ausführt, entspricht die Ausgabe dem kombinierten Quellcode.

Anders als [interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_on_mdn) bieten Live-Beispiele keine integrierte Unterstützung für die Erfassung von Konsolenausgaben oder das Zurücksetzen von Beispielen, die durch Benutzereingaben verändert wurden.
Der Abschnitt [Beispiele](#beispiele) zeigt, wie Sie diese und weitere nützliche Funktionen implementieren können.

## Wie funktionieren Live-Beispiele?

Live-Beispiele fassen Codeblöcke zusammen, führen sie zu HTML zusammen und rendern das HTML in einem {{HTMLElement("iframe")}}.
Ein Live-Beispiel besteht aus zwei Teilen:

- Einem oder mehreren zusammengefassten Codeblöcken
- Einem Makroaufruf, der das Ergebnis der Codeblöcke in einem {{HTMLElement("iframe")}} anzeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat eine Sprachkennung – `html`, `css` oder `js` –, die angibt, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die entsprechenden Codeblöcke müssen diese Sprachkennungen tragen, und auf der Seite muss ein Makroaufruf (`EmbedLiveSample`) vorhanden sein, um die Ausgabe anzuzeigen:

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

Das Live-Beispiel-System ermöglicht es, Codeblöcke auf unterschiedliche Weise zusammenzufassen, um die Ausgabe passend darzustellen. Im nächsten Abschnitt werden diese Methoden beschrieben.

### Codeblöcke zusammenfassen

Codeblöcke können auf zwei Arten zusammengefasst werden:

1. Über die ID einer Überschrift oder eines Blockelements, das die Codeblöcke enthält
2. Über eine Zeichenfolgenkennung, die bei den Codeblöcken angegeben wird

Codeblöcke ohne ausdrücklich angegebene Kennung werden standardmäßig anhand der ID der Überschrift oder des Blockelements zusammengefasst, das sie enthält. Die Kennung ist in diesem Fall die ID einer Überschrift oder eines Blockelements (etwa eines {{HTMLElement("div")}}). Das folgende Beispiel zeigt, wie der `html`- und der `css`-Code innerhalb des Blocks „Styling a paragraph“ verwendet werden, um die Ausgabe für den Makroaufruf `EmbedLiveSample` zu erzeugen.

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

- Gehört die ID zu einem Blockelement, umfasst die Gruppe alle Codeblöcke innerhalb dieses umschließenden Blockelements.
- Gehört die ID zu einer Überschrift, umfasst die Gruppe alle Codeblöcke nach dieser Überschrift bis zur nächsten Überschrift derselben Ebene. Dabei werden auch alle Codeblöcke unter Unterüberschriften der angegebenen Überschrift verwendet. Wenn Sie das nicht möchten, verwenden Sie stattdessen die ID eines Blockelements oder eine Zeichenfolgenkennung.

Um Codeblöcke anhand einer Kennung zusammenzufassen, fügen Sie der Info-Zeichenfolge des Codeblocks eine Zeichenfolge im Format `live-sample___{IDENTIFIER}` hinzu. Die Kennung muss für die Codeblöcke, die Sie zusammenfassen möchten, eindeutig sein. Beispielsweise verwendet `live-sample___color-picker` die Kennung `color-picker` für das Live-Beispiel-System. Alle Codeblöcke, deren Info-Zeichenfolge `live-sample___color-picker` enthält, werden im Live-Beispiel kombiniert.
Das folgende Beispiel fasst einen CSS- und einen JavaScript-Codeblock mithilfe der Kennung `color-picker` zusammen:

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

Das Makro verwendet eine spezielle URL mit der ID, um die Ausgabe einer bestimmten Gruppe von Codeblöcken abzurufen. Schreiben Sie diese URL niemals fest in den Inhalt. Wenn Sie auf das Beispiel verlinken möchten, verwenden Sie das Makro [`LiveSampleLink`](#livesamplelink-makro).

Der resultierende Frame (oder die resultierende Seite) wird in einer Sandbox ausgeführt und ist sicher. Technisch kann er alles tun, was im Web möglich ist. In der Praxis sollte der Code natürlich zum Inhalt der Seite passen; themenfremdes Material kann von der MDN-Redaktionsgemeinschaft entfernt werden.

Das Live-Beispiel-System bietet viele Optionen, die wir im Folgenden Schritt für Schritt betrachten.

### Makros für Live-Beispiele

Sie können zwei Makros verwenden, um Live-Beispiele anzuzeigen:

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) bettet ein Live-Beispiel in eine Seite ein.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link, der das Live-Beispiel auf einer neuen Seite öffnet.

In vielen Fällen können Sie das Makro `EmbedLiveSample` oder `LiveSampleLink` mit wenig oder gar keinem zusätzlichen Aufwand zu einer Seite hinzufügen. Solange sich das Beispiel über die ID einer Überschrift identifizieren lässt oder sich in einem Block mit einer verwendbaren ID befindet, genügt es, das Makro hinzuzufügen.

#### EmbedLiveSample-Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow, sandbox)}}
```

- `sample_id`
  - : Erforderlich: Dies kann die Zeichenfolgenkennung des Beispiels oder die ID der Überschrift beziehungsweise des umschließenden Blocks sein, aus dem der Code entnommen wird.
    Um zu überprüfen, ob Sie die richtige Überschriften-ID haben, sehen Sie sich die URL des Abschnitts im Inhaltsverzeichnis der Seite an. Sie können die ID auch im Quelltext der Seite überprüfen.
- `width` {{deprecated_inline}}
  - : Das `width`-Attribut für das {{HTMLElement("iframe")}}, angegeben in `px`. Veraltet, da es keine Wirkung mehr hat: Live-Beispiele erstrecken sich immer über die gesamte Breite des Inhaltsbereichs.
- `height`
  - : Das `height`-Attribut des {{HTMLElement("iframe")}}, angegeben in `px`. Der Wert muss mindestens `60` betragen. Dieser Parameter ist optional; wenn Sie ihn weglassen, wird eine sinnvolle Standardhöhe verwendet.
- `screenshot_URL` {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Beispiel aussehen sollte. Veraltet; fügen Sie Live-Beispiele nur hinzu, wenn eine angemessene Browser-Unterstützung vorhanden ist.
- `page_slug` {{deprecated_inline}}
  - : Der Slug der Seite, die das Beispiel enthält. Dieser Parameter ist optional. Wenn er fehlt, wird das Beispiel von derselben Seite geladen, auf der das Makro verwendet wird. Veraltet; fügen Sie Live-Beispiele nur hinzu, wenn sich der Code auf derselben Seite befindet.
- `class_name` {{deprecated_inline}}
  - : Der Klassenname, der auf das {{HTMLElement("iframe")}} angewendet wird. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- `allow`
  - : Das `allow`-Attribut für das {{HTMLElement("iframe")}}. Dieser Parameter ist optional; standardmäßig sind keine Funktionen erlaubt.
- `sandbox`
  - : Eine Zeichenfolge mit den `sandbox`-Attributen, die das Beispiel enthalten soll.
    Zulässige Werte sind `allow-modals`, `allow-forms` und `allow-popups`.
    Sie können mehrere Werte angeben, beispielsweise `"allow-modals allow-popups"`.

#### LiveSampleLink-Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : Die ID der Überschrift oder des umschließenden Blocks, aus dem der Code entnommen wird. Am besten überprüfen Sie die ID anhand der URL des Abschnitts im Inhaltsverzeichnis der Seite. Sie können sie auch im Quelltext der Seite überprüfen.
- `link_text`
  - : Eine Zeichenfolge, die als Linktext verwendet wird.

## Das Live-Beispiel-System verwenden

Die folgenden Abschnitte beschreiben einige häufige Anwendungsfälle für das Live-Beispiel-System.

### Live-Beispiele formatieren

Wenn Sie ein Live-Beispiel im Abschnitt „Beispiele“ schreiben, geben Sie ihm eine aussagekräftige H3-Überschrift (`###`). Beschreiben Sie idealerweise kurz das Szenario und was Sie mit dem Beispiel zeigen möchten. Fügen Sie anschließend Unterabschnitte mit den folgenden H4-Überschriften (`####`) in dieser Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in die jeweils passenden Unterabschnitte.

Fügen Sie im Unterabschnitt **Ergebnis** den Aufruf des Makros `EmbedLiveSample` hinzu. Beschreiben Sie dort nach Möglichkeit auch das Ergebnis mit etwas zusätzlichem Text.

Wenn Sie einen bestimmten Sprachtyp nicht verwenden (beispielsweise JavaScript) oder den Codeblock ausblenden, lassen Sie die entsprechende Überschrift weg.

### Code ausblenden

Manchmal möchten Sie nur den statischen Codeblock anzeigen, der für das auf der Seite gerenderte Beispiel relevant ist. Um ein solches Beispiel zu rendern, benötigen Sie dennoch die HTML-, CSS- und JavaScript-Codeblöcke.

Sie können nicht relevante Codeblöcke ausblenden, indem Sie der Sprachkennung die Info-Zeichenfolge `hidden` hinzufügen. Lassen Sie in diesem Fall die Überschriften `### HTML/CSS/JavaScript` für die ausgeblendeten Codeblöcke weg.

Wenn Sie im obigen Beispiel den HTML-Code ausblenden, sieht das so aus:

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

Ein häufiger Anwendungsfall besteht darin, bereits auf MDN gezeigte Codeausschnitte in Live-Beispiele umzuwandeln.
Fügen Sie dazu zunächst Codeausschnitte hinzu oder stellen Sie sicher, dass vorhandene Ausschnitte sowohl inhaltlich als auch hinsichtlich ihres Markups als Live-Beispiele verwendet werden können. Zusammen müssen die Codeausschnitte ein vollständiges, ausführbares Beispiel ergeben. Wenn ein vorhandener Ausschnitt beispielsweise nur CSS zeigt, müssen Sie möglicherweise einen HTML-Ausschnitt hinzufügen, auf den das CSS angewendet werden kann.

Jeder Codeteil muss in einem eigenen Codeblock stehen, für jede Sprache getrennt und mit der jeweiligen Sprache korrekt gekennzeichnet. Meistens ist das bereits der Fall. Es lohnt sich aber immer zu prüfen, ob für jeden Codeteil die richtige Syntax eingestellt ist. Dazu dient eine Sprachkennung am Codeblock in der Form `language-type`, wobei _language-type_ die Sprache des Blocks bezeichnet, etwa `html`, `css` oder `js`.

> [!NOTE]
> Sie können für jede Sprache mehrere Blöcke verwenden; sie werden alle aneinandergehängt. So können Sie auf einen Codeabschnitt eine Erklärung seiner Funktionsweise und danach einen weiteren Codeabschnitt folgen lassen. Das erleichtert das Erstellen von Tutorials und ähnlichen Inhalten, in denen Live-Beispiele mit erklärendem Text kombiniert werden.

Achten Sie also darauf, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils korrekt für die Syntaxhervorhebung der betreffenden Sprache eingerichtet sind. Dann können Sie loslegen.

## Beispiele

Dieser Abschnitt zeigt, wie das Live-Beispiel-System verwendet werden kann. Dazu gehören die verschiedenen Möglichkeiten, die Codeblöcke eines Beispiels zusammenzufassen, sowie die Anzeige von Protokollausgaben in Ihren Beispielen.

Die Überschriften für Codeblöcke („HTML“, „CSS“ oder „JavaScript“) werden in den meisten MDN-Beispielen üblicherweise verwendet, sind für das Live-Beispiel-Makro aber nicht erforderlich.

### Codeblöcke nach Überschrift zusammenfassen

#### HTML

Dieses HTML erstellt einen Absatz und einige Blöcke, mit denen wir eine Nachricht positionieren und gestalten können.

```html
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

#### CSS

Der CSS-Code gestaltet den Kasten und den darin enthaltenen Text.

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

Im JavaScript-Beispiel versehen wir den Text „Hello world!“ mit einem Event-Handler, der ihn bei einem Klick umschaltet.

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

Dies ist das Ergebnis, wenn die obigen Codeblöcke mit `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}` ausgeführt werden:

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

Dieser Link entsteht durch den Aufruf von `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}` für diese Codeblöcke:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Codeblöcke nach Kennung zusammenfassen

Dieses HTML erstellt einen Absatz und einige Blöcke, mit denen wir eine Nachricht positionieren und gestalten können. Die Zeichenfolge `live-sample___hello-world` wurde der Sprachkennung `html` dieses Codeblocks hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code gestaltet den Kasten und den darin enthaltenen Text. Die Zeichenfolge `live-sample___hello-world` wurde der Sprachkennung `css` dieses Codeblocks hinzugefügt.

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

Dieser JavaScript-Code versieht den Text „Hello world!“ mit einem Event-Handler, der ihn bei einem Klick umschaltet. Die Zeichenfolge `live-sample___hello-world` wurde auch der Sprachkennung `js` dieses Codeblocks hinzugefügt.

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

Diese Ausgabe erhalten wir, indem wir die obigen Codeblöcke mit der Zeichenfolgenkennung `hello-world` im Makroaufruf `\{{EmbedLiveSample('hello-world')}}` ausführen:

{{EmbedLiveSample("hello-world")}}

### Ein `<iframe>` mit einer bestimmten Größe anzeigen

Verwenden Sie den Parameter `height`, um die Größe des `<iframe>`-Elements festzulegen, das die Ausgabe des Live-Beispiels enthält.

```html live-sample___iframe_size
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Funktionen erlauben

Mit dem Parameter `allow` können Sie festlegen, welche Funktionen im `<iframe>`-Element erlaubt sind, das die Ausgabe des Live-Beispiels enthält. Die verfügbaren Werte ergeben sich aus der [Permissions-Policy-Syntax für Frames](/de/docs/Web/HTTP/Guides/Permissions_Policy#embedded_frame_syntax).

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

### Einen einzelnen Protokolleintrag anzeigen

Dieses Beispiel zeigt, wie Sie in Ihrem Live-Beispiel ein einfaches Protokoll mit einem einzigen Eintrag implementieren, bei dem der vorherige Wert bei jedem neuen Eintrag ersetzt wird.

Der Übersichtlichkeit halber trennt dieses Beispiel den Protokollierungscode vom Code, der ihn verwendet, und zeigt den Protokollierungscode zuerst.
Wenn Sie eigene Beispiele implementieren, sollten Sie Protokollelemente im Allgemeinen unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet eine wesentlich bessere Benutzererfahrung als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit der `id` `"log"`, um die Protokollausgabe anzuzeigen.

```html
<pre id="log"></pre>
```

#### CSS

Das CSS legt die Höhe des Protokollelements fest.

```css
#log {
  height: 20px;
}
```

#### JavaScript

Definieren Sie als Nächstes die Protokollierungsfunktion `log()`.
Sie nimmt den zu protokollierenden Text als Argument entgegen und ersetzt damit den vorhandenen Protokolleintrag.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Der Inhalt des Protokollelements wird über die Eigenschaft `innerText` festgelegt. Das ist sicherer als die Verwendung von `innerHTML`, weil der protokollierte Text nicht als HTML geparst wird (wodurch möglicherweise schädlicher Code eingeschleust werden könnte).

#### Testcode für die Protokollierung

Dieses Beispiel soll zeigen, _wie_ protokolliert wird; _was_ protokolliert wird, ist daher nicht besonders wichtig.
Deshalb wird dies einfach durch einen Button umgesetzt, den Benutzer drücken können, um einen Wert zu erhöhen.

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

Drücken Sie den Button, um einen neuen Protokolleintrag hinzuzufügen.

{{EmbedLiveSample("Displaying a single entry log", "100%", "80px")}}

### Ein Protokoll mit angehängten Einträgen anzeigen

Dieses Beispiel zeigt, wie Sie in Ihrem Live-Beispiel eine einfache „Protokollierungskonsole“ implementieren.
Bei jedem neuen Protokolleintrag fügt die Konsole am Ende der Ausgabe eine neue Zeile hinzu und scrollt den neuen Eintrag in den sichtbaren Bereich.

Der Übersichtlichkeit halber trennt dieses Beispiel den Protokollierungscode vom Code, der ihn verwendet, und zeigt den Protokollierungscode zuerst.
Wenn Sie eigene Beispiele implementieren, sollten Sie Protokollelemente im Allgemeinen unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet eine wesentlich bessere Benutzererfahrung als die Verwendung von `console.log()`.
>
> Ein ausführlicheres Beispiel finden Sie unter [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed).

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit der `id` `"log"`, um die Protokollausgabe anzuzeigen.

```html
<pre id="log"></pre>
```

#### CSS

Das CSS fügt Scrollleisten hinzu, wenn der Inhalt über das Element hinausragt, legt die Höhe des Protokollelements fest und fügt einen Rahmen hinzu.
Das folgende JavaScript sorgt dafür, dass neuer Protokolltext in diesem Fall in den sichtbaren Bereich gescrollt wird.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Definieren Sie als Nächstes die Protokollierungsfunktion `log()`.
Sie nimmt den zu protokollierenden Text als Argument entgegen und hängt ihn als neue Zeile an den Inhalt des Protokollelements an.
Außerdem setzt die Funktion `scrollTop` des Elements auf dessen `scrollHeight`. Dadurch wird die neue Zeile des Protokolltexts in den sichtbaren Bereich gescrollt.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie im vorherigen Beispiel legen wir den Inhalt über die Eigenschaft `innerText` fest, da dies weniger anfällig für schädlichen Code ist als die Verwendung von `innerHTML`.

#### Testcode für die Protokollierung

Dieses Beispiel soll zeigen, _wie_ protokolliert wird; _was_ protokolliert wird, ist daher nicht besonders wichtig.
Deshalb wird dies einfach durch einen Button umgesetzt, den Benutzer drücken können, um einen Wert zu erhöhen.

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

Drücken Sie den Button, um einen neuen Protokolleintrag hinzuzufügen.

{{EmbedLiveSample("Displaying a log that appends items", "100%", "180px")}}

### Einen Reset-Button anzeigen

Ein Reset-Button kann bei Beispielen hilfreich sein, die sich ohne Zurücksetzen der Seite nicht in ihren Ausgangszustand versetzen lassen.
Beispielsweise benötigt [das Beispiel zum Festlegen der Priorität mit `Highlight.priority`](/de/docs/Web/API/Highlight/priority#result_2) einen Reset-Button: Sobald Sie eine der Prioritäten festgelegt haben, ist der Ausgangszustand nicht mehr verfügbar.

Dieses Beispiel zeigt, wie Sie dem obigen Beispiel [Ein Protokoll mit angehängten Einträgen anzeigen](#ein_protokoll_mit_angehängten_einträgen_anzeigen) einen Reset-Button hinzufügen.
Das JavaScript und das CSS für den Protokollierungscode sind mit denen des vorherigen Beispiels identisch. Deshalb ist dieser Code ausgeblendet.

#### HTML

Das HTML für das Beispiel enthält nun einen Reset-Button.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für den Button fügt eine `click`-Event-Handler-Funktion hinzu, die den Frame mit dem aktuellen Beispiel einfach neu lädt.

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

Klicken Sie mehrmals auf den Button „Press me many times“.
Setzen Sie das Beispiel zurück, indem Sie auf den Button „Reset“ klicken.

{{EmbedLiveSample("Displaying a reset button", "100%", "180px")}}

## Konventionen für Live-Beispiele

- Reihenfolge der Codeblöcke
  - : Wenn Sie ein Live-Beispiel hinzufügen, sollten Sie die Codeblöcke so anordnen, dass der erste Block der Hauptsprache dieses Beispiels entspricht, sofern es eine gibt. Bei einem Live-Beispiel für die HTML-Referenz sollte der erste Block beispielsweise HTML enthalten, bei einem Live-Beispiel für die CSS-Referenz CSS und so weiter.
- Benennung der Überschriften
  - : Wenn keine Mehrdeutigkeit besteht (beispielsweise weil das Beispiel im Abschnitt „Beispiele“ steht), sollten die Überschriften schlicht aus dem Namen der jeweiligen Sprache bestehen: HTML, CSS, JavaScript, SVG usw. (siehe oben). Überschriften wie „HTML-Inhalt“ oder „JavaScript-Inhalt“ sollten nicht verwendet werden. Wenn eine so kurze Überschrift den Inhalt jedoch unklar macht, können Sie einen aussagekräftigeren Titel wählen.
- Verwendung eines Ergebnisblocks
  - : Verwenden Sie nach den verschiedenen Codeblöcken und vor dem Makro `EmbedLiveSample` bitte einen abschließenden Block mit der Überschrift „Ergebnis“ (siehe oben). So wird die Bedeutung des Beispiels sowohl für Leser als auch für Werkzeuge, die die Seite auswerten, deutlicher, etwa Screenreader oder Webcrawler.
