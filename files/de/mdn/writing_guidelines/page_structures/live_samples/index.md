---
title: Live-Beispiele (EmbedLiveSample)
short-title: Live samples
slug: MDN/Writing_guidelines/Page_structures/Live_samples
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

MDN unterstützt die Darstellung von Codeblöcken innerhalb von Artikeln als _Live-Beispiele_. So können Leserinnen und Leser sowohl den Quellcode als auch dessen Ausgabe sehen, wie sie auf einer Webseite erscheint.
Diese Funktion macht die Dokumentation anschaulich und hilft dabei, genau zu verstehen, welche Ausgabe der ausgeführte Code erzeugt.
Außerdem können Autorinnen und Autoren so sicherstellen, dass die Codeblöcke in der Dokumentation die erwartete Ausgabe erzeugen und in verschiedenen Browsern wie vorgesehen funktionieren.

Das Live-Beispiel-System kann Codeblöcke in HTML, CSS und JavaScript verarbeiten, unabhängig davon, in welcher Reihenfolge sie auf der Seite stehen.
Es führt den Code direkt auf der Seite aus und stellt so sicher, dass die Ausgabe dem kombinierten Quellcode entspricht.

Anders als [interaktive Beispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples#what_types_of_code_example_are_on_mdn) bieten Live-Beispiele keine integrierte Unterstützung dafür, Konsolenausgaben zu erfassen oder Beispiele zurückzusetzen, die durch Benutzereingaben verändert wurden.
Der Abschnitt [Beispiele](#beispiele) zeigt, wie Sie diese und andere nützliche Funktionen selbst implementieren können.

## Wie funktionieren Live-Beispiele?

Live-Beispiele fassen Codeblöcke zusammen, führen sie zu HTML zusammen und stellen das HTML in einem {{HTMLElement("iframe")}} dar.
Ein Live-Beispiel besteht aus zwei Teilen:

- Einem oder mehreren zusammengefassten Codeblöcken
- Einem Makroaufruf, der das Ergebnis der Codeblöcke in einem {{HTMLElement("iframe")}} anzeigt

Jeder [Codeblock](/de/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#example_code_blocks), der Code für die Ausgabe enthält, hat eine Sprachkennung – `html`, `css` oder `js`. Sie gibt an, ob es sich um HTML-, CSS- oder JavaScript-Code handelt. Die Sprachkennungen müssen an den entsprechenden Codeblöcken stehen. Außerdem muss die Seite einen Makroaufruf (`EmbedLiveSample`) enthalten, damit die Ausgabe angezeigt wird:

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

Das Live-Beispiel-System bietet verschiedene Möglichkeiten, Codeblöcke zusammenzufassen und ihre Ausgabe darzustellen. Der nächste Abschnitt beschreibt diese Möglichkeiten.

### Codeblöcke zusammenfassen

Codeblöcke lassen sich auf zwei Arten zusammenfassen:

1. Mit der ID einer Überschrift oder eines Blockelements, das die Codeblöcke enthält, als Kennung
2. Mit einer Zeichenfolgenkennung, die bei den Codeblöcken angegeben wird

Codeblöcke, für die keine Kennung ausdrücklich angegeben ist, werden standardmäßig über die ID der Überschrift oder des Blockelements zusammengefasst, das die Codeblöcke enthält. Die Kennung ist in diesem Fall die ID einer Überschrift oder eines Blockelements (zum Beispiel eines {{HTMLElement("div")}}). Das folgende Beispiel zeigt, wie der `html`- und der `css`-Code innerhalb des Blocks „Styling a paragraph“ verwendet werden, um die Ausgabe für den Makroaufruf `EmbedLiveSample` zu erzeugen.

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

- Gehört die ID zu einem Blockelement, umfasst die Gruppe alle Codeblöcke innerhalb dieses Blockelements.
- Gehört die ID zu einer Überschrift, umfasst die Gruppe alle Codeblöcke nach dieser Überschrift bis zur nächsten Überschrift derselben Ebene. Auch Codeblöcke unter untergeordneten Überschriften werden verwendet. Wenn Sie das nicht möchten, verwenden Sie stattdessen die ID eines Blockelements oder eine Zeichenfolgenkennung.

Um Codeblöcke über eine Kennung zusammenzufassen, fügen Sie der Info-Zeichenfolge des Codeblocks eine Zeichenfolge im Format `live-sample___{IDENTIFIER}` hinzu. Die Kennung muss für die Codeblöcke, die Sie zusammenfassen möchten, eindeutig sein. Beispielsweise verwendet `live-sample___color-picker` die Kennung `color-picker` für das Live-Beispiel-System. Alle Codeblöcke mit `live-sample___color-picker` in ihrer Info-Zeichenfolge werden im Live-Beispiel kombiniert.
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

Das Makro verwendet eine spezielle URL mit der ID, um die Ausgabe einer bestimmten Gruppe von Codeblöcken abzurufen. Tragen Sie diese URL niemals fest in den Inhalt ein. Wenn Sie auf das Beispiel verlinken möchten, verwenden Sie das Makro [`LiveSampleLink`](#livesamplelink-makro).

Der resultierende Frame (oder die Seite) ist durch eine Sandbox geschützt und kann technisch gesehen alles ausführen, was im Web funktioniert. In der Praxis sollte der Code selbstverständlich zum Inhalt der Seite passen. Material ohne Bezug zum Thema kann von der MDN-Redaktionsgemeinschaft entfernt werden.

Das Live-Beispiel-System bietet viele Optionen. Im Folgenden betrachten wir sie Schritt für Schritt.

### Makros für Live-Beispiele

Sie können zwei Makros verwenden, um Live-Beispiele anzuzeigen:

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) bettet ein Live-Beispiel in eine Seite ein.
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) erstellt einen Link, der das Live-Beispiel auf einer neuen Seite öffnet.

In vielen Fällen können Sie das Makro `EmbedLiveSample` oder `LiveSampleLink` ohne oder mit nur wenig zusätzlichem Aufwand zu einer Seite hinzufügen. Wenn sich das Beispiel über die ID einer Überschrift identifizieren lässt oder sich in einem Block mit einer verwendbaren ID befindet, genügt es meist, das Makro hinzuzufügen.

#### EmbedLiveSample-Makro

```plain
\{{EmbedLiveSample(sample_id, width, height, screenshot_URL, page_slug, class_name, allow, sandbox)}}
```

- `sample_id`
  - : Erforderlich: Dies kann die Zeichenfolgenkennung des Beispiels oder die ID der Überschrift beziehungsweise des umschließenden Blocks sein, aus dem der Code entnommen wird.
    Um zu prüfen, ob Sie die richtige Überschriften-ID haben, sehen Sie sich die URL des Abschnitts im Inhaltsverzeichnis der Seite an. Sie können die ID auch im Quelltext der Seite nachsehen.
- `width` {{deprecated_inline}}
  - : Das `width`-Attribut für das {{HTMLElement("iframe")}}, angegeben in `px`. Veraltet, da es keine Wirkung mehr hat: Live-Beispiele nehmen immer die gesamte Breite des Inhaltsbereichs ein.
- `height`
  - : Das `height`-Attribut des {{HTMLElement("iframe")}}, angegeben in `px`. Der Wert muss mindestens `60` betragen. Dieser Parameter ist optional. Wenn Sie ihn weglassen, wird eine angemessene Standardhöhe verwendet.
- `screenshot_URL` {{deprecated_inline}}
  - : Die URL eines Screenshots, der zeigt, wie das Live-Beispiel aussehen soll. Veraltet; fügen Sie Live-Beispiele nur hinzu, wenn eine ausreichende Browser-Unterstützung vorhanden ist.
- `page_slug` {{deprecated_inline}}
  - : Der Slug der Seite, die das Beispiel enthält. Dieser Parameter ist optional. Wird er nicht angegeben, wird das Beispiel von derselben Seite übernommen, auf der das Makro verwendet wird. Veraltet; fügen Sie Live-Beispiele nur hinzu, wenn sich der Code auf derselben Seite befindet.
- `class_name` {{deprecated_inline}}
  - : Der Klassenname, der dem {{HTMLElement("iframe")}} zugewiesen werden soll. Veraltet; es gibt keinen Grund, einen anderen Klassennamen zu verwenden.
- `allow`
  - : Das `allow`-Attribut für das {{HTMLElement("iframe")}}. Dieser Parameter ist optional; standardmäßig sind keine Funktionen erlaubt.
- `sandbox`
  - : Eine Zeichenfolge mit den `sandbox`-Attributen, die das Beispiel enthalten soll.
    Zulässige Werte sind `allow-modals`, `allow-forms` und `allow-popups`.
    Sie können mehrere Werte angeben, zum Beispiel `"allow-modals allow-popups"`.

#### LiveSampleLink-Makro

```plain
\{{LiveSampleLink(block_ID, link_text)}}
```

- `block_ID`
  - : Die ID der Überschrift oder des umschließenden Blocks, aus dem der Code entnommen wird. Am zuverlässigsten prüfen Sie die ID anhand der URL des Abschnitts im Inhaltsverzeichnis der Seite. Sie können sie auch im Quelltext der Seite nachsehen.
- `link_text`
  - : Eine Zeichenfolge, die als Linktext verwendet wird.

## Das Live-Beispiel-System verwenden

Die folgenden Abschnitte beschreiben einige häufige Anwendungsfälle für das Live-Beispiel-System.

### Live-Beispiele formatieren

Wenn Sie ein Live-Beispiel im Abschnitt „Beispiele“ schreiben, geben Sie ihm eine aussagekräftige H3-Überschrift (`###`). Beschreiben Sie idealerweise kurz das Szenario und was Sie mit dem Beispiel demonstrieren möchten. Fügen Sie anschließend Unterabschnitte mit den folgenden H4-Überschriften (`####`) in dieser Reihenfolge hinzu:

- HTML
- CSS
- JavaScript
- Ergebnis

Schreiben Sie die Codeblöcke in die jeweiligen oben aufgeführten Unterabschnitte.

Fügen Sie im Unterabschnitt **Ergebnis** den Aufruf des Makros `EmbedLiveSample` hinzu. Beschreiben Sie dort nach Möglichkeit auch das Ergebnis mit etwas zusätzlichem Text.

Wenn Sie einen bestimmten Sprachtyp nicht verwenden (beispielsweise JavaScript) oder den Codeblock ausblenden, lassen Sie die entsprechende Überschrift weg.

### Code ausblenden

Manchmal möchten Sie nur den für das Beispiel relevanten statischen Codeblock und das auf der Seite gerenderte Ergebnis anzeigen. Für die Darstellung des Beispiels benötigen Sie dennoch die HTML-, CSS- und JavaScript-Codeblöcke.

Dazu können Sie nicht relevante Codeblöcke ausblenden, indem Sie der Sprachkennung die Info-Zeichenfolge `hidden` hinzufügen. Lassen Sie in diesem Fall die Überschriften `### HTML/CSS/JavaScript` für die ausgeblendeten Codeblöcke weg.

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
Fügen Sie zunächst die benötigten Codeausschnitte hinzu oder stellen Sie sicher, dass vorhandene Ausschnitte hinsichtlich ihres Inhalts und ihrer Auszeichnung als Live-Beispiele verwendet werden können. Zusammen müssen die Codeausschnitte ein vollständiges, ausführbares Beispiel ergeben. Wenn ein vorhandener Ausschnitt beispielsweise nur CSS zeigt, müssen Sie gegebenenfalls einen HTML-Ausschnitt hinzufügen, auf den das CSS angewendet werden kann.

Jeder Teil des Codes muss in einem eigenen Codeblock für die jeweilige Sprache stehen und korrekt mit der Sprache gekennzeichnet sein. Meist ist das bereits der Fall. Es lohnt sich aber immer, zu überprüfen, ob jeder Codeteil für die richtige Syntax konfiguriert ist. Dazu dient die Sprachkennung `language-type` am Codeblock, wobei _language-type_ die Sprache des Blocks bezeichnet, zum Beispiel `html`, `css` oder `js`.

> [!NOTE]
> Sie können mehrere Blöcke für dieselbe Sprache verwenden; sie werden alle aneinandergefügt. So können Sie auf einen Codeabschnitt eine Erklärung seiner Funktionsweise folgen lassen, dann einen weiteren Codeabschnitt hinzufügen und so weiter. Das erleichtert die Erstellung von Tutorials und ähnlichen Inhalten, in denen Live-Beispiele mit erläuterndem Text abwechseln.

Stellen Sie also sicher, dass die Codeblöcke für Ihren HTML-, CSS- und/oder JavaScript-Code jeweils korrekt für die Syntaxhervorhebung der betreffenden Sprache konfiguriert sind.

## Beispiele

Dieser Abschnitt zeigt, wie das Live-Beispiel-System verwendet werden kann: auf welche Arten sich die Codeblöcke eines Beispiels zusammenfassen lassen und wie Sie Protokollausgaben in Ihren Beispielen anzeigen können.

Die Überschriften für Codeblöcke („HTML“, „CSS“ oder „JavaScript“) werden in den meisten MDN-Beispielen üblicherweise verwendet, sind für das Live-Beispiel-Makro aber nicht erforderlich.

### Codeblöcke nach Überschrift zusammenfassen

#### HTML

Dieses HTML erstellt einen Absatz und einige Blöcke, mit deren Hilfe wir eine Nachricht positionieren und gestalten können.

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

Im JavaScript-Beispiel fügen wir dem Text „Hello world!“ einen Event-Handler hinzu, der den Text beim Anklicken umschaltet.

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

Das Ergebnis der Ausführung der obigen Codeblöcke mit `\{{EmbedLiveSample('grouping_code_blocks_by_heading')}}` sieht so aus:

{{EmbedLiveSample('grouping_code_blocks_by_heading')}}

Der Aufruf von `\{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}` erzeugt für diese Codeblöcke den folgenden Link:

{{LiveSampleLink('grouping_code_blocks_by_heading', 'Live sample demo link')}}

### Codeblöcke nach Kennung zusammenfassen

Dieses HTML erstellt einen Absatz und einige Blöcke, mit deren Hilfe wir eine Nachricht positionieren und gestalten können. Die Zeichenfolge `live-sample___hello-world` wurde der Sprachkennung `html` für diesen Codeblock hinzugefügt.

```html live-sample___hello-world
<p>A simple example of the live sample system in action.</p>
<div class="box">
  <div id="item">Hello world! Welcome to MDN</div>
</div>
```

Der CSS-Code gestaltet den Kasten und den darin enthaltenen Text. Die Zeichenfolge `live-sample___hello-world` wurde der Sprachkennung `css` für diesen Codeblock hinzugefügt.

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

Dieser JavaScript-Code fügt dem Text „Hello world!“ einen Event-Handler hinzu, der den Text beim Anklicken umschaltet. Die Zeichenfolge `live-sample___hello-world` wurde auch der Sprachkennung `js` für diesen Codeblock hinzugefügt.

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

Die folgende Ausgabe entsteht, wenn die obigen Codeblöcke mit der Zeichenfolgenkennung `hello-world` im Makroaufruf `\{{EmbedLiveSample('hello-world')}}` ausgeführt werden:

{{EmbedLiveSample("hello-world")}}

### Ein `<iframe>` mit einer bestimmten Größe anzeigen

Verwenden Sie den Parameter `height`, um die Höhe des `<iframe>`-Elements festzulegen, das die Ausgabe des Live-Beispiels enthält.

```html live-sample___iframe_size
<p>Just some simple text here.</p>
```

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "60")}}`:

{{EmbedLiveSample("iframe_size", "", "60")}}

Ergebnis von `\{{EmbedLiveSample("iframe_size", "", "120")}}`:

{{EmbedLiveSample("iframe_size", "", "120")}}

### Funktionen erlauben

Mit dem Parameter `allow` können Sie festlegen, welche Funktionen im `<iframe>`-Element erlaubt sind, das die Ausgabe des Live-Beispiels enthält. Die verfügbaren Werte sind in der [Permissions-Policy-Syntax für Frames](/de/docs/Web/HTTP/Guides/Permissions_Policy#embedded_frame_syntax) beschrieben.

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

### Ein Protokoll mit einem einzelnen Eintrag anzeigen

Dieses Beispiel zeigt, wie Sie in Ihrem Live-Beispiel ein einfaches Protokoll mit einem einzelnen Eintrag implementieren. Der vorherige Wert wird ersetzt, sobald ein neuer Protokolleintrag hinzukommt.

Der Übersichtlichkeit halber sind der Protokollierungscode und der Code, der ihn verwendet, in diesem Beispiel getrennt. Der Protokollierungscode wird zuerst gezeigt.
Wenn Sie eigene Beispiele erstellen, sollten Sie Protokollelemente im Allgemeinen unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet eine deutlich bessere Nutzererfahrung als die Verwendung von `console.log()`.

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit der `id` `"log"`, um die Protokollausgabe anzuzeigen.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie anschließend die Protokollierungsfunktion `log()`.
Sie nimmt den zu protokollierenden Text als Argument entgegen und ersetzt damit den vorhandenen Protokolleintrag.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = text;
}
```

Beachten Sie, dass der Inhalt des Protokollelements über die Eigenschaft `innerText` gesetzt wird. Das ist sicherer als die Verwendung von `innerHTML`, da der protokollierte Text nicht als HTML geparst wird (wodurch möglicherweise schädlicher Code eingeschleust werden könnte).

#### CSS

Das CSS legt die Höhe des Protokollelements fest.

```css
#log {
  height: 20px;
}
```

#### Testcode für die Protokollierung

Dieses Beispiel soll zeigen, _wie_ protokolliert wird. _Was_ protokolliert wird, ist daher nicht besonders wichtig.
Es wird deshalb einfach über eine Schaltfläche umgesetzt, mit der Benutzerinnen und Benutzer einen Wert erhöhen können.

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

Drücken Sie die Schaltfläche, um einen neuen Protokolleintrag hinzuzufügen.

{{EmbedLiveSample("Displaying a single entry log", "100%", "80px")}}

### Ein Protokoll anzeigen, das Einträge anfügt

Dieses Beispiel zeigt, wie Sie eine einfache „Protokollierungskonsole“ in Ihrem Live-Beispiel implementieren.
Bei jedem neuen Protokolleintrag fügt die Konsole am Ende der Ausgabe eine Zeile hinzu und scrollt sie in den sichtbaren Bereich.

Der Übersichtlichkeit halber sind der Protokollierungscode und der Code, der ihn verwendet, in diesem Beispiel getrennt. Der Protokollierungscode wird zuerst gezeigt.
Wenn Sie eigene Beispiele erstellen, sollten Sie Protokollelemente im Allgemeinen unterhalb anderer UI-Elemente platzieren.

> [!NOTE]
> Die Anzeige der Protokollausgabe als Teil des Beispiels bietet eine deutlich bessere Nutzererfahrung als die Verwendung von `console.log()`.
>
> Ein ausführlicheres Beispiel finden Sie unter [`DataTransfer.effectAllowed`](/de/docs/Web/API/DataTransfer/effectAllowed#setting_effectallowed).

#### HTML

Erstellen Sie ein {{HTMLElement("pre")}}-Element mit der `id` `"log"`, um die Protokollausgabe anzuzeigen.

```html
<pre id="log"></pre>
```

#### JavaScript

Definieren Sie anschließend die Protokollierungsfunktion `log()`.
Sie nimmt den zu protokollierenden Text als Argument entgegen und hängt ihn als neue Zeile an den Inhalt des Protokollelements an.
Die Funktion setzt außerdem `scrollTop` des Elements auf dessen `scrollHeight`. Dadurch wird die neue Zeile des Protokolls in den sichtbaren Bereich gescrollt.

```js
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

Wie im vorherigen Beispiel setzen wir den Inhalt über die Eigenschaft `innerText`, da dies weniger anfällig für schädlichen Code ist als die Verwendung von `innerHTML`.

#### CSS

Das CSS fügt Scrollleisten hinzu, falls der Inhalt des Elements überläuft, legt die Höhe des Protokollelements fest und fügt einen Rahmen hinzu.
Beachten Sie, dass der obige JavaScript-Code dafür sorgt, dass bei einem Überlauf neuer Protokolltext in den sichtbaren Bereich gescrollt wird.

```css
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### Testcode für die Protokollierung

Dieses Beispiel soll zeigen, _wie_ protokolliert wird. _Was_ protokolliert wird, ist daher nicht besonders wichtig.
Es wird deshalb einfach über eine Schaltfläche umgesetzt, mit der Benutzerinnen und Benutzer einen Wert erhöhen können.

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

Drücken Sie die Schaltfläche, um einen neuen Protokolleintrag hinzuzufügen.

{{EmbedLiveSample("Displaying a log that appends items", "100%", "180px")}}

### Eine Zurücksetzen-Schaltfläche anzeigen

Eine Zurücksetzen-Schaltfläche kann bei Beispielen hilfreich sein, die sich ohne erneutes Laden der Seite nicht in ihren Ausgangszustand zurückversetzen lassen.
Beispielsweise benötigt [das Beispiel zum „Festlegen der Priorität“ von `Highlight.priority`](/de/docs/Web/API/Highlight/priority#result_2) eine Zurücksetzen-Schaltfläche, da der Ausgangszustand nicht mehr verfügbar ist, sobald Sie eine der Prioritäten festgelegt haben.

Dieses Beispiel zeigt, wie Sie dem obigen Beispiel [Ein Protokoll anzeigen, das Einträge anfügt](#ein_protokoll_anzeigen,_das_einträge_anfügt) eine Zurücksetzen-Schaltfläche hinzufügen.
Da JavaScript und CSS für den Protokollierungscode mit denen des vorherigen Beispiels übereinstimmen, ist dieser Code ausgeblendet.

#### HTML

Das HTML des Beispiels enthält jetzt eine Zurücksetzen-Schaltfläche.

```html
<button id="increment" type="button">Press me many times</button>
<button id="reset" type="button">Reset</button>
<pre id="log"></pre>
```

#### JavaScript

Der Code für die Schaltfläche fügt eine `click`-Event-Handler-Funktion hinzu, die einfach den Frame mit dem aktuellen Beispiel neu lädt.

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

Klicken Sie mehrmals auf die Schaltfläche „Press me many times“.
Setzen Sie das Beispiel anschließend mit der Schaltfläche „Reset“ zurück.

{{EmbedLiveSample("Displaying a reset button", "100%", "180px")}}

## Konventionen für Live-Beispiele

- Reihenfolge der Codeblöcke
  - : Wenn Sie ein Live-Beispiel hinzufügen, sollten Sie die Codeblöcke so anordnen, dass der erste Block der Hauptsprache des Beispiels entspricht, sofern es eine gibt. Bei einem Live-Beispiel für die HTML-Referenz sollte der erste Block beispielsweise HTML enthalten, bei einem Live-Beispiel für die CSS-Referenz CSS und so weiter.
- Benennung von Überschriften
  - : Wenn keine Mehrdeutigkeit besteht (etwa weil sich das Beispiel in einem Abschnitt „Beispiele“ befindet), sollten die Überschriften nur den Namen der jeweiligen Sprache enthalten: HTML, CSS, JavaScript, SVG usw. (siehe oben). Überschriften wie „HTML-Inhalt“ oder „JavaScript-Inhalt“ sollten nicht verwendet werden. Wenn eine so kurze Überschrift den Inhalt jedoch unklar macht, können Sie einen aussagekräftigeren Titel wählen.
- Verwendung eines Ergebnisabschnitts
  - : Verwenden Sie nach den verschiedenen Codeblöcken bitte einen abschließenden Abschnitt „Ergebnis“, bevor Sie das Makro `EmbedLiveSample` aufrufen (siehe oben). So wird die Bedeutung des Beispiels sowohl für Leserinnen und Leser als auch für Werkzeuge, die die Seite auswerten, deutlicher (zum Beispiel Screenreader und Webcrawler).
