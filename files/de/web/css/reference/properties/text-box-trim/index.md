---
title: "`text-box-trim` CSS property"
short-title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
l10n:
  sourceCommit: d1cf7346516383565b51a125c064ae3d5d893526
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-box-trim`** legt fest, welche der oberen und unteren Kanten von Textinhalt aus dem Blockcontainer eines Textelements abgeschnitten werden sollen.

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
  - : Der Standardwert. Vom Text wird kein Abstand abgeschnitten.
- `trim-both`
  - : Sowohl die Startkante (oben) als auch die Endkante (unten) werden abgeschnitten.
- `trim-start`
  - : Die Startkante (oben) wird abgeschnitten.
- `trim-end`
  - : Die Endkante (unten) wird abgeschnitten.

## Beschreibung

Die Eigenschaft `text-box-trim` legt fest, welche der oberen und unteren Kanten von Textinhalt aus dem Blockcontainer eines Textelements abgeschnitten werden sollen.

Der vertikale Abstand unterscheidet sich zwischen Schriftarten, was einheitlichen Schriftsatz im Web historisch schwierig gemacht hat. Die Eigenschaft `text-box-trim` erleichtert — zusammen mit ihrer entsprechenden Eigenschaft {{cssxref("text-box-edge")}}, die festlegt, wie viel Abstand abgeschnitten werden soll — das Erreichen einheitlicher vertikaler Textabstände.

Die Höhe von ausschließlich aus Text bestehendem Inhalt hängt von der Höhe der Schriftart ab. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche grundlegende Zeilenhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Line-Boxen unterschiedlicher Höhe erzeugen und dadurch das Erscheinungsbild der Abstände zwischen den Zeilen beeinflussen.

Mit der Eigenschaft `text-box-trim` können Sie die obere und untere Kante des Blockcontainers des Texts abschneiden, wodurch sich Textabstände in Blockrichtung leichter steuern lassen.

Die tatsächlich abgeschnittene Abstandsmenge wird mithilfe der Eigenschaft {{cssxref("text-box-edge")}} angegeben. Beispielsweise können Sie die obere Kante bündig mit den Großbuchstaben oder Kleinbuchstaben einer Schriftart abschneiden und die untere Kante bündig mit der Grundlinie der Schriftart.

Die Eigenschaft `text-box-trim` kann zusammen mit der Eigenschaft {{cssxref("text-box-edge")}} auch über die Kurzform {{cssxref("text-box")}} festgelegt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätze. Dadurch wird die obere Kante der Blockcontainer der Textelemente bis zur Oberkante der Großbuchstaben und die untere Kante bündig mit der Textgrundlinie abgeschnitten.

Anschließend setzen wir für den ersten Absatz den Wert `trim-end` und für den zweiten `trim-both` für `text-box-trim`. Dadurch wird beim ersten Absatz nur die untere Kante abgeschnitten, während beim zweiten sowohl die obere _als auch_ die untere Kante abgeschnitten werden.

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

Die Ausgabe sieht wie folgt aus. Beachten Sie, dass wir bei jedem Absatz einen oberen und unteren Rahmen eingefügt haben, damit Sie sehen können, wie der Abstand jeweils abgeschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktiver Vergleich von `text-box-trim`- und `text-box-edge`-Werten

In diesem Beispiel stellen wir eine Benutzeroberfläche bereit, mit der Sie die auf einen Textabsatz angewendeten Werte für `text-box-trim` und `text-box-edge` auswählen können.

#### HTML

Unser HTML enthält drei Hauptelemente:

- Drei {{htmlelement("select")}}-Elemente, mit denen Sie festlegen können, welche Kanten des Absatzes abgeschnitten werden sollen (der Wert von `text-box-trim`) und wie viel Abstand von den Kanten am Blockanfang und Blockende des Absatzes abgeschnitten werden soll (der Wert von {{cssxref("text-box-edge")}}).
- Ein {{htmlelement("p")}}-Element mit Text, auf das die `text-box-*`-Werte angewendet werden. Für diesen Absatz ist [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) festgelegt, sodass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}}-Element, das die auf den Absatz angewendeten `text-box-*`-Deklarationen anzeigt. Dieses wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren außerdem eine Schriftart vom Dienst Google Fonts, die auf den Text unserer Demo angewendet wird.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}}-Element an und gestalten die Benutzeroberfläche mithilfe von [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Den Großteil des CSS-Codes haben wir der Kürze halber ausgeblendet. Nachfolgend zeigen wir jedoch die Regeln, die den Absatz gestalten, auf den die `text-box-*`-Effekte angewendet werden, sowie das `<output>`, das die angewendeten `text-box-*`-Regeln anzeigt:

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

Beachten Sie erneut, dass wir beim Absatz `.display` einen oberen und unteren Rahmen eingefügt haben, damit Sie sehen können, wie sich der abgeschnittene Abstand ändert, wenn verschiedene `text-box-*`-Werte ausgewählt werden.

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

Im letzten Teil des JavaScript führen wir die Funktion `setEdgeTrim()` einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Anschließend wenden wir auf alle `<select>`-Elemente (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)) [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis-Listener an, sodass `setEdgeTrim()` immer dann ausgeführt wird, wenn sich einer der `<select>`-Werte ändert, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe sieht wie folgt aus:

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` ist anfangs auf `trim-both` gesetzt, was bedeutet, dass sowohl die obere _als auch_ die untere Kante des Absatzes abgeschnitten werden. `text-box-edge` ist anfangs auf `cap alphabetic` gesetzt, was bedeutet, dass der Text an der Startkante bündig mit der Oberkante der Großbuchstaben und an der Endkante bündig mit der Grundlinie abgeschnitten wird.

Ändern Sie die `<select>`-Werte, um zu sehen, welche Auswirkungen sie auf den angezeigten Text haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- Modul [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout)
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
