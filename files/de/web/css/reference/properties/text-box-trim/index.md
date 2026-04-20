---
title: "`text-box-trim` CSS property"
short-title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, welche der oberen und unteren Kanten des Textinhalts aus dem Block-Container eines Textelements beschnitten werden sollen.

Der vertikale Abstand unterscheidet sich zwischen Schriftarten, was eine konsistente Typografie im Web historisch herausfordernd gemacht hat. Die `text-box-trim` Eigenschaft — zusammen mit ihrer Gegenstückeigenschaft {{cssxref("text-box-edge")}}, die angibt, wie viel Raum beschnitten werden soll — erleichtert die Erreichung einer konsistenten vertikalen Abstandsgestaltung von Text.

> [!NOTE]
> Die Kurzform-Eigenschaft {{cssxref("text-box")}} kann verwendet werden, um die `text-box-trim` und `text-box-edge` Werte in einer einzigen Deklaration anzugeben.

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
  - : Der Standardwert. Kein Raum wird vom Text beschnitten.
- `trim-both`
  - : Die Start- (oben) und Endkanten (unten) werden beide beschnitten.
- `trim-start`
  - : Die Startkante (oben) wird beschnitten.
- `trim-end`
  - : Die Endkante (unten) wird beschnitten.

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schrift. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundzeilenhöhen, was bedeutet, dass Textzeilen mit der gleichen `font-size` unterschiedliche Linienhöhen erzeugen, die das Erscheinungsbild des Abstands zwischen den Zeilen beeinflussen.

Die `text-box-trim` Eigenschaft ermöglicht es Ihnen, die obere und untere Kante des Textblock-Containers zu beschneiden, wodurch es einfacher wird, den Textabstand in der Blockrichtung zu kontrollieren.

Die tatsächliche Menge des beschnittenen Raums wird mit der {{cssxref("text-box-edge")}} Eigenschaft festgelegt. Beispielsweise können Sie wählen, die obere Kante in Übereinstimmung mit den Großbuchstaben oder Kleinbuchstaben einer Schriftart zu beschneiden und die untere Kante bündig mit der Basislinie der Schriftart.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätze, wodurch die obere Kante der Block-Container der Textelemente bis zur Oberkante der Großbuchstaben und die untere Kante bündig mit der Basislinie des Textes beschnitten wird.

Wir setzen dann `text-box-trim` Werte von `trim-end` beim ersten und `trim-both` beim zweiten Absatz. Das führt dazu, dass beim ersten Absatz nur die untere Kante beschnitten wird, während beim zweiten sowohl die obere _als auch_ die untere Kante beschnitten werden.

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

Die Ausgabe ist wie folgt. Beachten Sie, dass wir einen oberen und unteren Rand bei jedem Absatz hinzugefügt haben, damit Sie sehen können, wie der Raum in jedem Fall beschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktiver Vergleich der `text-box-trim` und `text-box-edge` Werte

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die `text-box-trim` und `text-box-edge` Werte anzupassen, die auf einen Textabsatz angewendet werden.

#### HTML

In unserem HTML enthalten wir drei Hauptobjekte:

- Drei {{htmlelement("select")}}-Elemente, die es Ihnen ermöglichen, festzulegen, welche Kanten des Absatzes beschnitten werden sollen (der `text-box-trim` Wert) und wie viel Raum von den Blockstart- und -endkanten des Absatzes beschnitten werden soll (der {{cssxref("text-box-edge")}} Wert).
- Ein {{htmlelement("p")}}-Element, das den Text enthält, auf den die `text-box-*` Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt, sodass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}}-Element, das die `text-box-*` Deklarationen anzeigt, die auf den Absatz angewendet werden. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schriftart vom Google Fonts-Dienst, um sie auf den Text unseres Demos anzuwenden.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}}-Element an und gestalten die UI mit [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den Großteil des CSS-Codes zur Kürze versteckt, zeigen aber unten die Regeln, die den Absatz stylen, auf den die `text-box-*` Effekte angewendet werden und das `<output>`, das die angewendeten `text-box-*` Regeln zeigt:

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

Auch hier haben wir eine obere und untere Grenze auf den `.display`-Absatz gesetzt, damit Sie sehen können, wie sich der beschnittene Raum ändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir damit, Referenzen zu den drei `<select>`-Elementen und zwei `<p>`-Elementen zu erfassen:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}} Wert auf den Absatz basierend auf den Werten der `<select>`-Elemente an und druckt auch die angewendeten Deklarationen auf die Ausgabe (sowohl die Langform als auch die Kurzformäquivalente):

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

Im letzten Teil des JavaScripts führen wir die `setEdgeTrim()` Funktion einmal aus, um einen Anfangszustand für die UI festzulegen. Wir wenden dann [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener auf alle `<select>`-Elemente an (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), sodass `setEdgeTrim()` ausgeführt wird, wann immer sich einer der `<select>` Werte ändert, um die UI entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Das Ergebnis ist wie folgt:

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` ist zunächst auf `trim-both` gesetzt, was bedeutet, dass die obere _und_ untere Kante des Absatzes beschnitten werden. `text-box-edge` ist zunächst auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit der Oberkante der Großbuchstaben am Anfang und bündig mit der Basislinie am Ende beschnitten wird.

Versuchen Sie, die `<select>` Werte zu ändern, um den Effekt, den sie auf den Anzeigetext haben, zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
