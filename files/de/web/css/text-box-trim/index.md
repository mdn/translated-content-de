---
title: text-box-trim
slug: Web/CSS/text-box-trim
l10n:
  sourceCommit: 49bbddc34034e59a63c0b2cda79e45c94ea9daa9
---

{{CSSRef}}

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, welche der oberen und unteren Ränder des Textinhalts von einem Blockcontainer eines Textelements abgeschnitten werden sollen.

Vertikale Abstände unterscheiden sich zwischen Schriften, was eine konsistente Typografie historisch gesehen im Web herausfordernd machte. Die `text-box-trim` Eigenschaft — zusammen mit ihrer Gegenpart-Eigenschaft {{cssxref("text-box-edge")}}, welche den abzustimmenden Raum spezifiziert — erleichtert es, eine konsistente vertikale Abstände von Text zu erzielen.

> [!NOTE]
> Die {{cssxref("text-box")}} Kurzschreibweise kann verwendet werden, um die Werte von `text-box-trim` und `text-box-edge` in einer einzigen Deklaration zu spezifizieren.

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

Der Wert der `text-box-trim` Eigenschaft kann mit einem der folgenden Schlüsselwörter angegeben werden:

- `none`
  - : Der Standardwert. Kein Raum wird vom Text abgeschnitten.
- `trim-both`
  - : Die Anfangs- (oben) und Endkante (unten) werden beide abgeschnitten.
- `trim-start`
  - : Die Anfangskante (oben) wird abgeschnitten.
- `trim-end`
  - : Die Endkante (unten) wird abgeschnitten.

## Beschreibung

Die Höhe von textbasiertem Inhalt ist relativ zur Höhe der Schrift. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Ober- und Unterlängen usw. Verschiedene Schriften haben unterschiedliche Basiszeilenhöhen, was bedeutet, dass Textzeilen mit der gleichen `font-size` Linienboxen mit unterschiedlichen Höhen erzeugen, was das Erscheinungsbild der Abstände zwischen den Linien beeinflusst.

Die `text-box-trim` Eigenschaft ermöglicht es Ihnen, die obere und untere Kante des Blockcontainers des Textes abzuschneiden, wodurch es einfacher wird, den Textabstand in der Blockrichtung zu kontrollieren.

Die tatsächliche Menge des abgeschnittenen Raumes wird mit der {{cssxref("text-box-edge")}} Eigenschaft spezifiziert. Sie können beispielsweise wählen, die obere Kante in Einklang mit Großbuchstaben oder Kleinbuchstaben einer Schrift abzuschneiden, und die untere Kante bündig mit der Grundlinie der Schrift.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätzen, was die obere Kante der Blockcontainer der Textelemente bis zur Oberseite der Großbuchstaben und die untere Kante bündig mit der Textgrundlinie abschneidet.

Dann setzen wir `text-box-trim` Werte von `trim-end` auf den ersten, und `trim-both` auf den zweiten. Dies führt dazu, dass der erste Absatz nur seine untere Kante abgeschnitten hat, während der zweite sowohl die obere _als auch_ die untere Kante abgeschnitten hat.

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

Die Ausgabe ist wie folgt. Beachten Sie, dass wir eine obere und untere Grenze auf jeden Absatz gesetzt haben, sodass Sie sehen können, wie der Raum in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Grundlegende `text-box-edge` Verwendung","100%","360")}}

### Interaktive `text-box-trim` und `text-box-edge` Wertvergleiche

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen erlaubt, die `text-box-trim` und `text-box-edge` Werte auf einen Textabsatz anzuwenden.

#### HTML

In unserem HTML enthalten wir drei Hauptelemente:

- Drei {{htmlelement("select")}} Elemente, die es Ihnen ermöglichen, festzulegen, welche Kanten des Absatzes abgeschnitten werden sollen (der `text-box-trim` Wert) und wie viel Raum von den Blockanfangs- und Blockendkanten des Absatzes abgeschnitten werden soll (der {{cssxref("text-box-edge")}} Wert).
- Ein {{htmlelement("p")}} Element, das Text enthält, auf den die `text-box-*` Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt, damit Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}} Element, das die `text-box-*` Deklarationen anzeigt, die auf den Absatz angewendet werden. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schriftart von Google Fonts, um sie auf den Text unseres Demos anzuwenden.

Wir haben den genauen HTML-Code aus Gründen der Kürze ausgeblendet.

```html hidden
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>text-box demo</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet" />
  </head>
  <body>
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
  </body>
</html>
```

#### CSS

In unserem CSS wenden wir die importierte Schrift auf das {{htmlelement("html")}} Element an und gestalten die Benutzeroberfläche mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den Großteil des CSS-Codes aus Gründen der Kürze ausgeblendet, aber unten zeigen wir die Regeln, die den Absatz stilisieren, auf den die `text-box-*` Effekte angewendet werden, und das `<output>`, das die angewendeten `text-box-*` Regeln anzeigt:

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

Beachten Sie erneut, dass wir eine obere und untere Grenze auf den `.display` Absatz gesetzt haben, sodass Sie sehen können, wie sich der abgeschnittene Raum ändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir mit dem Erfassen von Referenzen auf die drei `<select>` Elemente und zwei `<p>` Elemente:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}} Wert auf den Absatz basierend auf den Werten der `<select>` Elemente an und druckt auch die angewendeten Deklarationen auf die Ausgabe (sowohl die Lang- als auch die Kurzschreibweise):

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

Im letzten Teil des JavaScripts führen wir die `setEdgeTrim()` Funktion einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Wir wenden dann [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener auf alle `<select>` Elemente (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)) an, sodass `setEdgeTrim()` ausgeführt wird, wann immer sich einer der `<select>` Werte ändert, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("`text-box-trim` Wertvergleich","100%","520")}}

`text-box-trim` ist anfangs auf `trim-both` gesetzt, was bedeutet, dass sowohl die obere _als auch_ untere Kante des Absatzes abgeschnitten werden. `text-box-edge` ist anfangs auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit der Oberseite der Großbuchstaben an der Anfangskante und bündig mit der Grundlinie an der Endkante abgeschnitten wird.

Versuchen Sie, die `<select>` Werte zu ändern, um zu sehen, welchen Einfluss sie auf den Anzeige-Text haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
