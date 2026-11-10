---
title: "`text-box-trim` CSS property"
short-title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-box-trim`** legt fest, welche der oberen und unteren Kanten des Textinhalts am Block-Container eines Textelements beschnitten werden.

## Syntax

```css
/* Keyword values */
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

Für die Eigenschaft `text-box-trim` kann eines der folgenden Schlüsselwörter angegeben werden:

- `none`
  - : Der Standardwert. Am Text wird kein Abstand beschnitten.
- `trim-both`
  - : Sowohl die Anfangskante (oben) als auch die Endkante (unten) werden beschnitten.
- `trim-start`
  - : Die Anfangskante (oben) wird beschnitten.
- `trim-end`
  - : Die Endkante (unten) wird beschnitten.

## Beschreibung

Die Eigenschaft `text-box-trim` legt fest, welche der oberen und unteren Kanten des Textinhalts am Block-Container eines Textelements beschnitten werden.

Der vertikale Abstand unterscheidet sich je nach Schriftart. Das hat einen einheitlichen Schriftsatz im Web bisher erschwert. Die Eigenschaft `text-box-trim` erleichtert es zusammen mit der zugehörigen Eigenschaft {{cssxref("text-box-edge")}}, die den Umfang des Beschnitts festlegt, einen einheitlichen vertikalen Textabstand zu erzielen.

Die Höhe von reinem Textinhalt hängt von der Höhe der Schriftart ab. In digitalen Schriftdateien umfasst diese Höhe alle Zeichen, einschließlich Großbuchstaben sowie Ober- und Unterlängen. Verschiedene Schriftarten haben unterschiedliche grundlegende Zeilenhöhen. Deshalb erzeugen Textzeilen mit derselben `font-size` Zeilenboxen unterschiedlicher Höhe, was sich auf den sichtbaren Abstand zwischen den Zeilen auswirkt.

Mit der Eigenschaft `text-box-trim` können Sie die obere und untere Kante des Block-Containers eines Textes beschneiden. Dadurch lässt sich der Textabstand in Blockrichtung leichter steuern.

Wie viel Abstand tatsächlich beschnitten wird, legt die Eigenschaft {{cssxref("text-box-edge")}} fest. Sie können beispielsweise die obere Kante an der Höhe der Groß- oder Kleinbuchstaben einer Schriftart und die untere Kante bündig an der Grundlinie der Schriftart ausrichten.

Die Eigenschaften `text-box-trim` und {{cssxref("text-box-edge")}} können auch über die Kurzschreibweise {{cssxref("text-box")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` für zwei Absätze. Dadurch wird die obere Kante der Block-Container der Textelemente bis zur Oberkante der Großbuchstaben beschnitten und die untere Kante bündig an der Grundlinie des Textes ausgerichtet.

Anschließend setzen wir `text-box-trim` beim ersten Absatz auf `trim-end` und beim zweiten auf `trim-both`. Dadurch wird beim ersten Absatz nur die untere Kante beschnitten, beim zweiten dagegen sowohl die obere _als auch_ die untere Kante.

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

Die Ausgabe sieht wie folgt aus. Beachten Sie, dass jeder Absatz einen oberen und einen unteren Rahmen hat, damit Sie sehen können, wie der Abstand jeweils beschnitten wurde.

{{EmbedLiveSample("basic_text-box-trim_usage","100%","360")}}

### Interaktiver Vergleich der Werte von `text-box-trim` und `text-box-edge`

In diesem Beispiel stellen wir eine Benutzeroberfläche bereit, über die Sie die auf einen Textabsatz angewendeten Werte für `text-box-trim` und `text-box-edge` auswählen können.

#### HTML

Unser HTML enthält drei wesentliche Bestandteile:

- Drei {{htmlelement("select")}}-Elemente, mit denen Sie festlegen können, welche Kanten des Absatzes beschnitten werden sollen (der Wert von `text-box-trim`) und wie viel Abstand an den Blockanfangs- und Blockendkanten des Absatzes beschnitten werden soll (der Wert von {{cssxref("text-box-edge")}}).
- Ein {{htmlelement("p")}}-Element mit Text, auf das die `text-box-*`-Werte angewendet werden. Für diesen Absatz ist [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt, damit Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}}-Element, das die auf den Absatz angewendeten `text-box-*`-Deklarationen anzeigt. Die Anzeige wird aktualisiert, wenn Sie eine Auswahl treffen.

Außerdem importieren wir eine Schriftart von Google Fonts und wenden sie auf den Text unseres Beispiels an.

Der genaue HTML-Code ist der Kürze halber ausgeblendet.

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
<p class="display" contenteditable>Holly Golightly</p>
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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}}-Element an und gestalten das Layout der Benutzeroberfläche mit [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Der Großteil des CSS-Codes ist der Kürze halber ausgeblendet. Im Folgenden zeigen wir jedoch die Regeln für den Absatz, auf den die `text-box-*`-Eigenschaften wirken, und für das `<output>`-Element, das die angewendeten `text-box-*`-Regeln anzeigt:

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

Beachten Sie erneut, dass der Absatz `.display` einen oberen und einen unteren Rahmen hat. So können Sie erkennen, wie sich der beschnittene Abstand bei der Auswahl unterschiedlicher `text-box-*`-Werte verändert.

#### JavaScript

Im JavaScript holen wir zunächst Referenzen auf die drei `<select>`-Elemente und die beiden `<p>`-Elemente:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als Nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Sie wendet anhand der Werte der `<select>`-Elemente einen {{cssxref("text-box")}}-Wert auf den Absatz an und gibt die angewendeten Deklarationen aus – sowohl in der Langform als auch in der entsprechenden Kurzform:

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

Im letzten Teil des JavaScripts führen wir `setEdgeTrim()` einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Anschließend fügen wir allen `<select>`-Elementen [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Listener hinzu (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)). So wird `setEdgeTrim()` bei jeder Änderung eines `<select>`-Werts ausgeführt und die Benutzeroberfläche entsprechend aktualisiert:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe sieht wie folgt aus:

{{EmbedLiveSample("interactive_text-box-trim_and_text-box-edge_value_comparison","100%","520")}}

`text-box-trim` ist anfangs auf `trim-both` gesetzt. Das bedeutet, dass sowohl die obere _als auch_ die untere Kante des Absatzes beschnitten werden. `text-box-edge` ist anfangs auf `cap alphabetic` gesetzt. Dadurch wird der Text an der Anfangskante bündig mit der Oberkante der Großbuchstaben und an der Endkante bündig mit der Grundlinie beschnitten.

Ändern Sie die `<select>`-Werte, um zu sehen, wie sie sich auf den angezeigten Text auswirken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- Modul [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout)
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
