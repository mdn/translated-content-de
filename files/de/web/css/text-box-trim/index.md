---
title: text-box-trim
slug: Web/CSS/text-box-trim
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{CSSRef}}

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, welche der oberen und unteren Kanten des Textinhalts von einem Block-Container eines Textelements getrimmt werden sollen.

Vertikaler Abstand unterscheidet sich zwischen Schriftarten, was konsistentes Schriftsatzhistorisch im Web herausfordernd machte. Die `text-box-trim` Eigenschaft — zusammen mit der entsprechenden Eigenschaft {{cssxref("text-box-edge")}}, die angibt, wie viel Platz getrimmt werden soll — erleichtert es, konsistenten vertikalen Abstand von Text zu gewährleisten.

> [!NOTE]
> Die Kurzschreibweise {{cssxref("text-box")}} kann verwendet werden, um die `text-box-trim` und `text-box-edge` Werte in einer einzigen Deklaration anzugeben.

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
  - : Der Standardwert. Kein Platz wird vom Text getrimmt.
- `trim-both`
  - : Sowohl die Start- (oben) als auch die Endkante (unten) werden getrimmt.
- `trim-start`
  - : Die Startkante (oben) wird getrimmt.
- `trim-end`
  - : Die Endkante (unten) wird getrimmt.

## Beschreibung

Die Höhe von nur Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Ober- und Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundlinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Zeilenkästen unterschiedlicher Höhe erzeugen, was die Erscheinung des Abstands zwischen den Zeilen beeinflusst.

Die `text-box-trim` Eigenschaft ermöglicht es Ihnen, die obere und untere Kante des Block-Containers des Textes zu trimmen, um den Textabstand in Blockrichtung besser steuern zu können.

Die tatsächliche Menge an getrimmtem Raum wird mit der {{cssxref("text-box-edge")}} Eigenschaft angegeben. Sie können zum Beispiel wählen, die obere Kante in Übereinstimmung mit den Großbuchstaben oder Kleinbuchstaben einer Schriftart zu trimmen und die untere Kante nahtlos mit der Grundlinie der Schrift.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel stellen wir `text-box-edge: cap alphabetic` in zwei Absätzen ein, was die obere Kante der Block-Container der Text-Elemente an den oberen Großbuchstaben trimmt und die untere Kante bündig mit der Textgrundlinie.

Dann setzen wir `text-box-trim` Werte von `trim-end` für den ersten und `trim-both` für den zweiten Absatz. Das führt dazu, dass beim ersten Absatz nur die untere Kante getrimmt wird, während beim zweiten sowohl die obere _als auch_ die untere Kante getrimmt werden.

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

Die Ausgabe sieht wie folgt aus. Beachten Sie, dass wir oben und unten an jedem Absatz einen Rahmen hinzugefügt haben, damit Sie sehen können, wie der Raum in jedem Fall getrimmt wurde.

{{EmbedLiveSample("Grundlegende Verwendung von `text-box-edge`","100%","360")}}

### Interaktiver Vergleich der Werte `text-box-trim` und `text-box-edge`

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die `text-box-trim` und `text-box-edge` Werte anzupassen, die auf einen Textabsatz angewendet werden.

#### HTML

In unserem HTML enthalten wir drei Hauptbestandteile:

- Drei {{htmlelement("select")}} Elemente, mit denen Sie festlegen können, welche Kanten des Absatzes getrimmt werden sollen (der `text-box-trim` Wert) und wie viel Platz von den Block-Start- und Block-End-Kanten des Absatzes getrimmt werden soll (der {{cssxref("text-box-edge")}} Wert).
- Ein {{htmlelement("p")}} Element, das Text enthält, auf den die `text-box-*` Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt, damit Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}} Element, das die `text-box-*` Deklarationen anzeigt, die auf den Absatz angewendet werden. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schriftart von Google Fonts, um sie auf den Text unseres Demos anzuwenden.

Wir haben den genauen HTML-Code aus Gründen der Kürze verborgen.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}} Element an und legen das UI mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox) an. Wir haben den größten Teil des CSS-Codes aus Gründen der Kürze verborgen, aber unten zeigen wir die Regeln, die den Absatz stylen, auf den die `text-box-*` Effekte angewendet werden, und das `<output>`, das die angewendeten `text-box-*` Regeln zeigt:

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

Auch hier beachten Sie, dass wir einen oberen und unteren Rahmen am `.display` Absatz hinzugefügt haben, damit Sie sehen können, wie sich der getrimmte Raum ändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir damit, Verweise auf die drei `<select>` Elemente und zwei `<p>` Elemente zu holen:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet auf den Absatz einen {{cssxref("text-box")}} Wert basierend auf den Werten der `<select>` Elemente an und druckt auch die angewendeten Deklarationen in das Ausgabelement (sowohl die Lang- als auch Kurzschreibweise):

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

Im letzten Teil des JavaScripts führen wir die `setEdgeTrim()`-Funktion einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Dann wenden wir [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener auf alle `<select>` Elemente an (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), sodass `setEdgeTrim()` immer ausgeführt wird, wenn sich einer der `<select>` Werte ändert, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("`text-box-trim` Wertvergleich","100%","520")}}

`text-box-trim` ist anfangs auf `trim-both` gesetzt, was bedeutet, dass sowohl die oberen _als auch_ unteren Kanten des Absatzes getrimmt werden. `text-box-edge` ist anfangs auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit den oberen Großbuchstaben an der Startkante getrimmt ist und bündig mit der Grundlinie an der Endkante.

Versuchen Sie, die `<select>` Werte zu ändern, um die Auswirkung auf den Anzeigetext zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
