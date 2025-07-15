---
title: text-box-trim
slug: Web/CSS/text-box-trim
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, welche der oberen und unteren Kanten des Textinhalts an einem Blockcontainer eines Textelements abgeschnitten werden sollen.

Der vertikale Abstand variiert zwischen Schriftarten, was historisch gesehen eine einheitliche Typografie im Web erschwerte. Die `text-box-trim` Eigenschaft — zusammen mit der dazugehörigen Eigenschaft {{cssxref("text-box-edge")}}, die angibt, wie viel Platz abgeschnitten werden soll — erleichtert es, einen konsistenten vertikalen Textabstand zu erreichen.

> [!NOTE]
> Die {{cssxref("text-box")}} Kurzschreibweise kann verwendet werden, um die `text-box-trim` und `text-box-edge` Werte in einer einzigen Deklaration anzugeben.

## Syntax

```css
/* Keywords */
text-box-trim: none;
text-box-trim: trim-both;
text-box-trim: trim-start;
text-box-trim: trim-end;

/* Global values */
text-box-trim: inherit;
text-box-trim: initial;
text-box-trim: revert;
text-box-trim: revert-layer;
text-box-trim: unset;
```

### Wert

Der Wert der `text-box-trim` Eigenschaft kann als eines der folgenden Schlüsselwörter angegeben werden:

- `none`
  - : Der Standardwert. Es wird kein Platz vom Text abgeschnitten.
- `trim-both`
  - : Die Startkante (oben) und Endkante (unten) werden beide abgeschnitten.
- `trim-start`
  - : Die Startkante (oben) wird abgeschnitten.
- `trim-end`
  - : Die Endkante (unten) wird abgeschnitten.

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schrift. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriften haben unterschiedliche Basiszeilenhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` unterschiedlich hohe Zeilenboxen erzeugen, was das Erscheinungsbild des Abstands zwischen den Zeilen beeinflusst.

Die `text-box-trim` Eigenschaft erlaubt es, die obere und untere Kante des Blockcontainers des Textes abzuschneiden, was die Kontrolle des Textabstands in Blockrichtung erleichtert.

Die tatsächliche Menge des abgeschnittenen Raums wird durch die {{cssxref("text-box-edge")}} Eigenschaft bestimmt. Zum Beispiel können Sie wählen, die obere Kante in Übereinstimmung mit den Großbuchstaben oder Kleinbuchstaben einer Schrift abzuschneiden und die untere Kante bündig mit der Basislinie der Schrift.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätzen, wodurch die obere Kante der Blockcontainer der Textelemente auf die Oberseite der Großbuchstaben und die untere Kante bündig mit der Textbasislinie abgeschnitten wird.

Wir setzen dann `text-box-trim` Werte von `trim-end` beim ersten Absatz und `trim-both` beim zweiten Absatz. Dies führt dazu, dass beim ersten Absatz nur die untere Kante abgeschnitten wird, während beim zweiten Absatz sowohl die obere _als auch_ die untere Kante abgeschnitten wird.

```html hidden
<p class="one">This is .one</p>

<p class="two">This is .two</p>
```

```css hidden
html {
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
}

p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
}
```

```css
p {
  text-box-edge: cap alphabetic;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

.one {
  text-box-trim: trim-end;
}

.two {
  text-box-trim: trim-both;
}
```

#### Ergebnis

Die Ausgabe ist wie folgt. Beachten Sie, wie wir eine obere und untere Umrandung auf jedem Absatz eingefügt haben, damit Sie sehen können, wie der Platz in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Grundlegende Verwendung von `text-box-edge`","100%","360")}}

### Interaktiver Vergleich der Werte von `text-box-trim` und `text-box-edge`

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die auf einen Textabsatz angewendeten `text-box-trim` und `text-box-edge` Werte auszuwählen.

#### HTML

In unserem HTML haben wir drei Hauptkomponenten:

- Drei {{htmlelement("select")}} Elemente, die es Ihnen ermöglichen, festzulegen, welche Kanten des Absatzes abgeschnitten werden sollen (der `text-box-trim` Wert) und wie viel Platz von den Blockanfangs- und Blockendkanten des Absatzes (der {{cssxref("text-box-edge")}} Wert) abgeschnitten werden soll.
- Ein {{htmlelement("p")}} Element, das Text enthält, auf das die `text-box-*` Werte angewendet werden. Dieser Absatz ist mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) versehen, sodass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}} Element, das die auf den Absatz angewendeten `text-box-*` Deklarationen anzeigt. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schriftart von dem Google Fonts Dienst, um sie auf den Text unseres Demos anzuwenden.

Wir haben den genauen HTML-Code zur Kürze versteckt.

```html hidden
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
  rel="stylesheet" />
<section>
  <div>
    <label for="box-trim">Select edge(s) to trim:</label>
    <select id="box-trim">
      <option>none</option>
      <option>trim-start</option>
      <option>trim-end</option>
      <option selected>trim-both</option>
    </select>
  </div>
  <div>
    <label for="trim-over">Select trim over (start) value:</label>
    <select id="trim-over">
      <option>text</option>
      <option selected>cap</option>
      <option>ex</option>
    </select>
  </div>
</section>
<p class="display" contenteditable="">Holly Golightly</p>
<section>
  <div>
    <label for="trim-under">Select trim under (end) value:</label>
    <select id="trim-under">
      <option>text</option>
      <option selected>alphabetic</option>
    </select>
  </div>
</section>
<output></output>
```

#### CSS

In unserem CSS wenden wir die importierte Schrift auf das {{htmlelement("html")}} Element an und gestalten die Benutzeroberfläche mit [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den größten Teil des CSS-Codes zur Kürze versteckt, aber unten zeigen wir die Regeln, die den Absatz, auf den die `text-box-*` Effekte angewendet werden, und das `<output>`, das die `text-box-*` Regeln anzeigt, anwenden:

```css hidden
html {
  font-family: "Roboto", sans-serif;
  height: 100%;
}

body {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

section {
  display: flex;
  justify-content: space-between;
}

section:nth-of-type(2) {
  justify-content: flex-end;
  padding-bottom: 30px;
}

select {
  width: 6rem;
}
```

```css
p {
  margin: 0;
  font-size: 6rem;
  font-weight: bold;
  border-top: 5px solid magenta;
  border-bottom: 5px solid magenta;
}

output {
  border: 2px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 0;
  width: fit-content;
}
```

Beachten Sie erneut, wie wir eine obere und untere Umrandung auf dem `.display` Absatz eingefügt haben, damit Sie sehen können, wie sich der abgeschnittene Raum verändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir damit, Referenzen auf die drei `<select>` Elemente und zwei `<p>` Elemente zu sammeln:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als Nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}} Wert auf den Absatz basierend auf den Werten der `<select>` Elemente an und gibt auch die angewendeten Deklarationen an die Ausgabe aus (sowohl die Langform als auch die Kurzformäquivalente):

```js
function setEdgeTrim() {
  const textBoxTrimValue = boxTrimSelect.value;
  const textBoxEdgeValue = `${trimOverSelect.value} ${trimUnderSelect.value}`;
  displayElem.style.textBox = `${textBoxTrimValue} ${textBoxEdgeValue}`;

  codeElem.innerHTML = `
    <span><code>text-box-trim: ${textBoxTrimValue}</code></span>
    <br>
    <span><code>text-box-edge: ${textBoxEdgeValue}</code></span>
    <br><br>
    <span>Shorthand equivalent:</span>
    <br><br>
    <span><code>text-box: ${textBoxTrimValue} ${textBoxEdgeValue}</code></span>
  `;
}
```

Im letzten Teil des JavaScripts führen wir die `setEdgeTrim()` Funktion einmal aus, um einen Anfangszustand für die Benutzeroberfläche zu setzen. Wir wenden dann [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener auf alle `<select>` Elemente an (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), sodass `setEdgeTrim()` ausgeführt wird, wann immer einer der `<select>` Werte geändert wird, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("Vergleich der `text-box-trim` Werte","100%","520")}}

`text-box-trim` ist anfänglich auf `trim-both` eingestellt, was bedeutet, dass die oberen _und_ unteren Kanten des Absatzes abgeschnitten werden. `text-box-edge` ist anfänglich auf `cap alphabetic` eingestellt, was bedeutet, dass der Text bündig mit der Oberseite der Großbuchstaben an der Startkante und bündig mit der Basislinie an der Endkante geschnitten ist.

Versuchen Sie, die `<select>` Werte zu ändern, um den Effekt zu sehen, den sie auf den Anzeigetext haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS Inline Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
