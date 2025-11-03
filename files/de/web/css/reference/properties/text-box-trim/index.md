---
title: text-box-trim
slug: Web/CSS/Reference/Properties/text-box-trim
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, welche der oberen und unteren Kanten von Textinhalten von einem Blockcontainer eines Textelements abgeschnitten werden sollen.

Der vertikale Abstand variiert zwischen Schriftarten, was die konsistente Typografie im Web historisch herausfordernd gemacht hat. Die `text-box-trim` Eigenschaft — zusammen mit der dazugehörigen Eigenschaft {{cssxref("text-box-edge")}}, die festlegt, wie viel Platz gekürzt wird — erleichtert das Erreichen konsistenter vertikaler Abstände im Text.

> [!NOTE]
> Die Kurzform {{cssxref("text-box")}} kann verwendet werden, um die Werte von `text-box-trim` und `text-box-edge` in einer einzigen Deklaration anzugeben.

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

Der `text-box-trim` Wert kann als eines der folgenden Schlüsselwörter angegeben werden:

- `none`
  - : Der Standardwert. Es wird kein Abstand von dem Text abgeschnitten.
- `trim-both`
  - : Die Anfangs- (oben) und End- (unten) Kanten werden beide abgeschnitten.
- `trim-start`
  - : Die Anfangskante (oben) wird abgeschnitten.
- `trim-end`
  - : Die Endkante (unten) wird abgeschnitten.

## Beschreibung

Die Höhe von reinem Textinhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Basislinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Zeilenblöcke unterschiedlicher Höhe erzeugen, was das Erscheinungsbild des Abstands zwischen Zeilen beeinflusst.

Die `text-box-trim` Eigenschaft erlaubt Ihnen, die obere und untere Kante des Blockcontainers des Textes abzuschneiden, wodurch es einfacher wird, den Textabstand in Blockrichtung zu steuern.

Die tatsächliche Menge des abgeschnittenen Raums wird mit der Eigenschaft {{cssxref("text-box-edge")}} angegeben. Zum Beispiel können Sie wählen, die obere Kante in Übereinstimmung mit den Großbuchstaben oder Kleinbuchstaben einer Schriftart abzuschneiden und die untere Kante bündig mit der Schriftbasislinie.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätzen, wodurch die obere Kante der Blockcontainer der Textelemente auf die Höhe der Großbuchstaben und die untere Kante bündig mit der Textbasislinie geschnitten wird.

Dann setzen wir `text-box-trim` Werte von `trim-end` auf dem ersten Absatz und `trim-both` auf dem zweiten. Dies führt dazu, dass der erste Absatz nur seine untere Kante abgeschnitten hat, während der zweite sowohl die obere _als auch_ die untere Kante abgeschnitten hat.

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

Die Ausgabe ist wie folgt. Beachten Sie, dass wir auf jedem Absatz eine obere und untere Grenze hinzugefügt haben, damit Sie sehen können, wie der Raum in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Grundlegende Verwendung von `text-box-edge`","100%","360")}}

### Interaktiver Vergleich der `text-box-trim` und `text-box-edge` Werte

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die `text-box-trim` und `text-box-edge` Werte zu wählen, die auf einen Textabsatz angewendet werden.

#### HTML

In unserem HTML enthalten wir drei Hauptobjekte:

- Drei {{htmlelement("select")}} Elemente, mit denen Sie festlegen können, welche Kanten des Absatzes abgeschnitten werden sollen (den `text-box-trim` Wert) und wie viel Platz von den Blockanfangs- und Blockendkanten des Absatzes (den {{cssxref("text-box-edge")}} Wert) abgeschnitten werden soll.
- Ein {{htmlelement("p")}} Element, das Text enthält, auf das die `text-box-*` Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt, sodass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}} Element, das die auf den Absatz angewendeten `text-box-*` Deklarationen anzeigt. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schriftart vom Google Fonts Dienst, um sie auf den Text unseres Demos anzuwenden.

Wir haben den genauen HTML-Code aus Gründen der Kürze versteckt.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}} Element an und gestalten die Benutzeroberfläche mit [Flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den größten Teil des CSS-Codes aus Gründen der Kürze versteckt, aber unten zeigen wir die Regeln, die den Absatz stylen, auf den die `text-box-*` Effekte angewendet werden, und das `<output>`, das zeigt, wie die `text-box-*` Regeln angewendet werden:

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

Auch hier beachten Sie, dass wir auf dem `.display` Absatz eine obere und untere Grenze hinzugefügt haben, damit Sie sehen können, wie sich der abgeschnittene Raum ändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir mit dem Abrufen von Referenzen zu den drei `<select>` Elementen und zwei `<p>` Elementen:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}} Wert auf den Absatz basierend auf den Werten der `<select>` Elemente an und gibt die angewendeten Deklarationen auch im Ausgabebereich aus (sowohl die Langform als auch die Kurzformäquivalente):

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

Im letzten Teil des JavaScript führen wir die Funktion `setEdgeTrim()` einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Dann wenden wir [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Listener auf alle `<select>` Elemente an (mittels [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), sodass `setEdgeTrim()` ausgeführt wird, wann immer sich einer der `<select>` Werte ändert, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("`text-box-trim` Wertvergleich","100%","520")}}

`text-box-trim` ist initial auf `trim-both` eingestellt, was bedeutet, dass die oberen _und_ unteren Kanten des Absatzes abgeschnitten sind. `text-box-edge` ist initial auf `cap alphabetic` eingestellt, was bedeutet, dass der Text bündig mit der Oberseite der Großbuchstaben an der Anfangskante und bündig mit der Basislinie an der Endkante gekürzt wird.

Versuchen Sie, die `<select>` Werte zu ändern, um zu sehen, welchen Effekt sie auf den Anzeigetext haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
