---
title: "`text-box-trim` CSS property"
short-title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-box-trim`** gibt an, welche der oberen und unteren Kanten von Textinhalt aus dem Block-Container eines Textelements beschnitten werden sollen.

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

### Werte

Der Wert der Eigenschaft `text-box-trim` kann als eines der folgenden Schlüsselwörter angegeben werden:

- `none`
  - : Der Standardwert. Es wird kein Abstand vom Text beschnitten.
- `trim-both`
  - : Sowohl die Start- (obere) als auch die Endkante (untere) werden beschnitten.
- `trim-start`
  - : Die Startkante (obere) wird beschnitten.
- `trim-end`
  - : Die Endkante (untere) wird beschnitten.

## Beschreibung

Die Eigenschaft `text-box-trim` gibt an, welche der oberen und unteren Kanten von Textinhalt aus dem Block-Container eines Textelements beschnitten werden sollen.

Der vertikale Abstand unterscheidet sich zwischen Schriftarten, wodurch ein einheitlicher Schriftsatz im Web in der Vergangenheit schwierig war. Die Eigenschaft `text-box-trim` — zusammen mit ihrer entsprechenden Eigenschaft {{cssxref("text-box-edge")}}, die angibt, wie viel Abstand beschnitten werden soll — erleichtert das Erreichen eines einheitlichen vertikalen Textabstands.

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftartdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Unterschiedliche Schriftarten haben unterschiedliche grundlegende Zeilenhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Zeilenboxen unterschiedlicher Höhe erzeugen, wodurch das Erscheinungsbild der Abstände zwischen Zeilen beeinflusst wird.

Die Eigenschaft `text-box-trim` ermöglicht es Ihnen, die obere und untere Kante des Block-Containers des Textes zu beschneiden, wodurch sich Textabstände in Blockrichtung leichter steuern lassen.

Die tatsächlich beschnittene Abstandsmenge wird mit der Eigenschaft {{cssxref("text-box-edge")}} angegeben. Sie können beispielsweise die obere Kante bündig mit den Großbuchstaben oder Kleinbuchstaben einer Schriftart beschneiden und die untere Kante bündig mit der Grundlinie der Schriftart ausrichten.

Die Eigenschaft `text-box-trim` kann zusammen mit der Eigenschaft {{cssxref("text-box-edge")}} auch über die Kurzform {{cssxref("text-box")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` für zwei Absätze. Dadurch wird die obere Kante der Block-Container der Textelemente bis zur Oberkante der Großbuchstaben und die untere Kante bündig mit der Textgrundlinie beschnitten.

Anschließend setzen wir für den ersten Absatz den Wert `trim-end` und für den zweiten den Wert `trim-both` für `text-box-trim`. Dies führt dazu, dass beim ersten Absatz nur die untere Kante beschnitten wird, während beim zweiten sowohl die obere _als auch_ die untere Kante beschnitten werden.

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

Die Ausgabe sieht wie folgt aus. Beachten Sie, dass wir bei jedem Absatz einen oberen und unteren Rahmen eingefügt haben, sodass Sie sehen können, wie der Abstand in jedem Fall beschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktiver Vergleich von `text-box-trim`- und `text-box-edge`-Werten

In diesem Beispiel stellen wir eine Benutzeroberfläche bereit, über die Sie die auf einen Textabsatz angewendeten Werte für `text-box-trim` und `text-box-edge` auswählen können.

#### HTML

Unser HTML enthält drei Hauptelemente:

- Drei {{htmlelement("select")}}-Elemente, mit denen Sie festlegen können, welche Kanten des Absatzes beschnitten werden sollen (der Wert von `text-box-trim`) und wie viel Abstand von den Kanten am Blockanfang und Blockende des Absatzes beschnitten werden soll (der Wert von {{cssxref("text-box-edge")}}).
- Ein {{htmlelement("p")}}-Element mit Text, auf das die `text-box-*`-Werte angewendet werden. Für diesen Absatz ist [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) festgelegt, sodass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}}-Element, das die auf den Absatz angewendeten `text-box-*`-Deklarationen anzeigt. Dieses wird aktualisiert, wenn eine Auswahl getroffen wird.

Außerdem importieren wir eine Schriftart vom Dienst Google Fonts, um sie auf den Text unserer Demo anzuwenden.

Der genaue HTML-Code wurde der Kürze halber ausgeblendet.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}}-Element an und gestalten die Benutzeroberfläche mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Den größten Teil des CSS-Codes haben wir der Kürze halber ausgeblendet. Nachfolgend zeigen wir jedoch die Regeln, die den Absatz gestalten, auf den die `text-box-*`-Effekte angewendet werden, sowie das `<output>`, das die angewendeten `text-box-*`-Regeln anzeigt:

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

Beachten Sie erneut, dass wir beim Absatz `.display` einen oberen und unteren Rahmen eingefügt haben, sodass Sie sehen können, wie sich der beschnittene Abstand ändert, wenn unterschiedliche `text-box-*`-Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir damit, Referenzen auf die drei `<select>`-Elemente und zwei `<p>`-Elemente abzurufen:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als Nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet basierend auf den Werten der `<select>`-Elemente einen {{cssxref("text-box")}}-Wert auf den Absatz an und gibt außerdem die angewendeten Deklarationen in der Ausgabe aus (sowohl die Langform- als auch die Kurzform-Entsprechungen):

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

Im letzten Teil des JavaScripts führen wir die Funktion `setEdgeTrim()` einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Anschließend wenden wir auf alle `<select>`-Elemente [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener an (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), sodass `setEdgeTrim()` immer ausgeführt wird, wenn sich einer der `<select>`-Werte ändert, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe sieht wie folgt aus:

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` ist anfänglich auf `trim-both` gesetzt, was bedeutet, dass die obere _und_ untere Kante des Absatzes beschnitten werden. `text-box-edge` ist anfänglich auf `cap alphabetic` gesetzt, was bedeutet, dass der Text an der Startkante bündig mit der Oberkante von Großbuchstaben und an der Endkante bündig mit der Grundlinie beschnitten wird.

Ändern Sie die `<select>`-Werte, um zu sehen, welche Auswirkung sie auf den angezeigten Text haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout)-Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
