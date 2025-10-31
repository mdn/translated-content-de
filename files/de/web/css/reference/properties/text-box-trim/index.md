---
title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, welche der oberen und unteren Kanten des Textinhalts von einem Blockcontainer eines Textelements geschnitten werden sollen.

Der vertikale Abstand variiert zwischen Schriftarten, was das konsistente Satzbilden historisch gesehen im Web herausfordernd machte. Die Eigenschaft `text-box-trim` — zusammen mit ihrer entsprechenden Eigenschaft {{cssxref("text-box-edge")}}, die angibt, wie viel Platz abgeschnitten werden soll — erleichtert das Erzielen eines konsistenten vertikalen Abstands von Text.

> [!NOTE]
> Die {{cssxref("text-box")}} Kurzschreibweise kann verwendet werden, um die Werte von `text-box-trim` und `text-box-edge` in einer einzigen Deklaration anzugeben.

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

Der Wert der Eigenschaft `text-box-trim` kann als eines der folgenden Schlüsselwörter angegeben werden:

- `none`
  - : Der Standardwert. Kein Raum wird vom Text abgeschnitten.
- `trim-both`
  - : Sowohl die obere (über) als auch die untere (unter) Kante werden beschnitten.
- `trim-start`
  - : Die obere (über) Kante wird beschnitten.
- `trim-end`
  - : Die untere (unter) Kante wird beschnitten.

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Basislinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` unterschiedliche Linienboxenhöhen erzeugen, was sich auf das Erscheinungsbild der Zwischenräume zwischen den Zeilen auswirkt.

Die Eigenschaft `text-box-trim` ermöglicht es Ihnen, die obere und untere Kante des Textblockcontainers abzuschneiden, was es einfacher macht, den Textabstand in Blockrichtung zu kontrollieren.

Die tatsächliche Menge an Raum, der abgeschnitten wird, wird mit der Eigenschaft {{cssxref("text-box-edge")}} angegeben. Zum Beispiel können Sie wählen, die obere Kante im Einklang mit den Großbuchstaben oder den Kleinbuchstaben einer Schriftart zu trimmen und die untere Kante bündig mit der Basislinie der Schriftart.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätzen, wodurch die obere Kante der Blockcontainer der Textelemente auf die Höhe der Großbuchstaben und die untere Kante bündig mit der Textbasislinie zugeschnitten wird.

Dann setzen wir `text-box-trim` Werte von `trim-end` auf dem ersten und `trim-both` auf dem zweiten. Dies führt dazu, dass beim ersten Absatz nur die untere Kante beschnitten wird, während beim zweiten Absatz sowohl die obere _als auch_ die untere Kante beschnitten werden.

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

Die Ausgabe ist wie folgt. Beachten Sie, wie wir einen oberen und unteren Rand zu jedem Absatz hinzugefügt haben, so dass Sie sehen können, wie der Raum in jedem Fall beschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktive Wertvergleich von `text-box-trim` und `text-box-edge`

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die auf einen Textabsatz angewendeten Werte von `text-box-trim` und `text-box-edge` auszuwählen.

#### HTML

In unserem HTML enthalten wir drei Hauptelemente:

- Drei {{htmlelement("select")}} Elemente, die es ermöglichen, festzulegen, welche Kanten des Absatzes beschnitten werden sollen (der `text-box-trim` Wert) und wie viel Platz von den block-start und block-end Kanten des Absatzes beschnitten werden soll (der {{cssxref("text-box-edge")}} Wert).
- Ein {{htmlelement("p")}} Element, das Text enthält, auf das die `text-box-*` Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), damit Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}} Element, das die auf den Absatz angewendeten `text-box-*` Deklarationen anzeigt. Dieses wird aktualisiert, wenn eine Auswahl vorgenommen wird.

Wir importieren zudem eine Schriftart vom Google Fonts Service, die auf den Text unseres Demos angewendet wird.

Wir haben den genauen HTML-Code aus Gründen der Kürze ausgeblendet.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}} Element an und gestalten die Benutzeroberfläche mit Hilfe von [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den größten Teil des CSS-Codes aus Gründen der Kürze ausgeblendet, aber unten zeigen wir die Regeln, die den Absatz stylen, auf den die `text-box-*` Effekte angewandt werden, sowie das `<output>`, das die `text-box-*` Regeln zeigt, die angewendet werden:

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

Beachten Sie erneut, wie wir einen oberen und unteren Rand zu dem `.display` Absatz hinzugefügt haben, so dass Sie sehen können, wie sich der beschnittene Raum ändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir damit, Referenzen zu den drei `<select>` Elementen und zwei `<p>` Elementen zu erhalten:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}} Wert auf den Absatz an, basierend auf den Werten der `<select>` Elemente, und gibt auch die angewendeten Deklarationen an die Ausgabe aus (sowohl die Langform als auch die Kurzform-Äquivalente):

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

Im letzten Teil des JavaScripts führen wir die `setEdgeTrim()` Funktion einmal aus, um einen Anfangszustand für die Benutzeroberfläche einzustellen. Wir wenden dann [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener auf alle `<select>` Elemente an (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), so dass `setEdgeTrim()` immer ausgeführt wird, wenn sich ein `<select>` Wert ändert, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` ist anfänglich auf `trim-both` gesetzt, was bedeutet, dass sowohl die obere _als auch_ die untere Kante des Absatzes beschnitten werden. `text-box-edge` ist anfänglich auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit der Höhe der Großbuchstaben an der Anfangskante zugeschnitten ist und bündig mit der Basislinie an der Endkante.

Versuchen Sie, die `<select>` Werte zu ändern, um den Effekt zu sehen, den sie auf den Anzeigetext haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
