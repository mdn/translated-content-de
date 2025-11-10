---
title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, welche der oberen und unteren Kanten des Textinhalts von einem Text-Elemente-Blockcontainer abgeschnitten werden sollen.

Der vertikale Abstand unterscheidet sich zwischen Schriften, was die konsistente Typografie im Web historisch herausfordernd gemacht hat. Die `text-box-trim`-Eigenschaft — zusammen mit ihrer Gegenparte {{cssxref("text-box-edge")}}, die angibt, wie viel Platz abgeschnitten werden soll — erleichtert es, konsistente vertikale Abstände von Text zu erreichen.

> [!NOTE]
> Die {{cssxref("text-box")}} Kurzschreibweise kann verwendet werden, um die `text-box-trim`- und `text-box-edge`-Werte in einer einzigen Deklaration anzugeben.

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

Der Wert der `text-box-trim`-Eigenschaft kann mit einem der folgenden Schlüsselwörter spezifiziert werden:

- `none`
  - : Der Standardwert. Kein Platz wird vom Text abgeschnitten.
- `trim-both`
  - : Die Start- (oben) und End- (unten) Kanten werden beide abgeschnitten.
- `trim-start`
  - : Die Start- (oben) Kante wird abgeschnitten.
- `trim-end`
  - : Die End- (unten) Kante wird abgeschnitten.

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriften haben unterschiedliche Basis-Zeilenhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Linienboxen unterschiedlicher Höhen erzeugen, was das Erscheinungsbild der Abstände zwischen den Zeilen beeinflusst.

Die `text-box-trim`-Eigenschaft ermöglicht Ihnen, die oberen und unteren Kanten des Textblockcontainers abzuschneiden und so die Steuerung der Textabstände in Blockrichtung zu erleichtern.

Die tatsächliche Menge des abgeschnittenen Raums wird durch die {{cssxref("text-box-edge")}}-Eigenschaft spezifiziert. Beispielsweise können Sie wählen, die obere Kante im Einklang mit den Großbuchstaben oder Kleinbuchstaben einer Schrift abzukappen und die untere Kante bündig mit der Basislinie der Schrift.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätzen, was die obere Kante des Blockcontainers der Textelemente auf die Höhe der Großbuchstaben und die untere Kante bündig mit der Textbasislinie abschneidet.

Wir setzen dann `text-box-trim` Werte von `trim-end` auf den ersten und `trim-both` auf den zweiten Absatz. Dies führt dazu, dass der erste Absatz nur seine untere Kante abgeschnitten hat, während der zweite sowohl die obere _als auch_ die untere Kante abgeschnitten hat.

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

Die Ausgabe ist wie folgt. Beachten Sie, wie wir bei jedem Absatz oben und unten eine Grenze hinzugefügt haben, damit Sie sehen können, wie der Raum in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktiver Vergleich der `text-box-trim`- und `text-box-edge`-Werte

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die auf einen Absatz von Text angewendeten `text-box-trim`- und `text-box-edge`-Werte auszuwählen.

#### HTML

In unserem HTML haben wir drei Hauptelemente:

- Drei {{htmlelement("select")}} Elemente, die es Ihnen ermöglichen festzulegen, welche Kanten des Absatzes abgeschnitten werden sollen (der `text-box-trim` Wert) und wie viel Platz von den Anfangs- und Endkanten des Blocks des Absatzes abgeschnitten werden soll (der {{cssxref("text-box-edge")}} Wert).
- Ein {{htmlelement("p")}} Element, das den Text enthält, auf den die `text-box-*` Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt, so dass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}} Element, das die auf den Absatz angewendeten `text-box-*` Deklarationen anzeigt. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schrift aus dem Google Fonts Service, um sie auf den Text in unserem Demo zu anwenden.

Wir haben den genauen HTML-Code zur Kürze verborgen.

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

In unserem CSS wenden wir die importierte Schrift auf das {{htmlelement("html")}} Element an und gestalten die Benutzeroberfläche mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den Großteil des CSS-Codes zur Kürze verborgen, aber unten zeigen wir die Regeln, die den Absatz stylen, auf den die `text-box-*` Effekte angewendet werden, und das `<output>`, das die angewendeten `text-box-*` Regeln zeigt:

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

Beachten Sie wieder, wie wir eine obere und untere Grenze auf den `.display` Absatz eingefügt haben, damit Sie sehen können, wie der Raum, der abgeschnitten wird, sich ändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir, indem wir Referenzen zu den drei `<select>` Elementen und zwei `<p>` Elementen abrufen:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}} Wert auf den Absatz basierend auf den Werten der `<select>` Elemente an und druckt auch die angewandten Deklarationen an die Ausgabe (sowohl die Langform als auch die Kurzform-Äquivalente):

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

Im letzten Teil des JavaScripts führen wir die `setEdgeTrim()` Funktion einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Wir fügen dann [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener zu allen `<select>` Elementen hinzu (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), sodass `setEdgeTrim()` ausgeführt wird, wann immer sich eines der `<select>` Werte ändert, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` ist anfangs auf `trim-both` gesetzt, was bedeutet, dass die oberen _und_ unteren Kanten des Absatzes abgeschnitten werden. `text-box-edge` ist anfangs auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit der Oberkante der Großbuchstaben an der Startkante und bündig mit der Basislinie an der Endkante abgeschnitten wird.

Versuchen Sie, die `<select>` Werte zu ändern, um den Effekt zu sehen, den sie auf den angezeigten Text haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS inline layout](/de/docs/Web/CSS/Guides/Inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
