---
title: text-box-trim
slug: Web/CSS/text-box-trim
l10n:
  sourceCommit: c037c6870bb89d81ccd9204809b06c92677c3a9a
---

{{CSSRef}}{{seecompattable}}

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt, welche der oberen und unteren Ränder des Textinhalts aus dem Block-Container eines Textelements geschnitten werden sollen.

Der vertikale Abstand unterscheidet sich zwischen verschiedenen Schriftarten, was die konsistente Typografie im Internet historisch herausfordernd macht. Die Eigenschaft `text-box-trim` — zusammen mit der Gegenstück-Eigenschaft {{cssxref("text-box-edge")}}, die angibt, wie viel Platz abgeschnitten werden soll — erleichtert das Erreichen einer konsistenten vertikalen Abstandsregelung für Text.

> [!NOTE]
> Die Abkürzungseigenschaft {{cssxref("text-box")}} kann verwendet werden, um die Werte für `text-box-trim` und `text-box-edge` in einer einzigen Deklaration anzugeben.

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
  - : Der Standardwert. Kein Platz wird vom Text abgeschnitten.
- `trim-both`
  - : Sowohl der Anfangs- (über) als auch der Endrand (unter) werden abgeschnitten.
- `trim-start`
  - : Der Anfangsrand (über) wird abgeschnitten.
- `trim-end`
  - : Der Endrand (unter) wird abgeschnitten.

## Beschreibung

Die Höhe von reinem Textinhalt bezieht sich auf die Höhe der Schrift. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Aufschwünge, Absenker usw. Verschiedene Schriften haben unterschiedliche Grundlinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Linienboxen unterschiedlicher Höhen erzeugen, was das Erscheinungsbild des Abstands zwischen den Zeilen beeinflusst.

Die Eigenschaft `text-box-trim` ermöglicht es Ihnen, den oberen und unteren Rand des Textblock-Containers zu beschneiden, um den Textabstand in Richtung des Blocks einfacher zu kontrollieren.

Der tatsächliche Betrag des abgeschnittenen Platzes wird mithilfe der Eigenschaft {{cssxref("text-box-edge")}} festgelegt. Beispielsweise können Sie wählen, den oberen Rand in Übereinstimmung mit den Großbuchstaben oder Kleinbuchstaben einer Schrift zu beschneiden und den unteren Rand bündig mit der Basislinie der Schrift abzuschneiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende `text-box-trim` Nutzung

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätzen, was den oberen Rand der Textblock-Container auf die Oberkante der Großbuchstaben und den unteren Rand bündig mit der Textbasislinie zuschneidet.

Dann setzen wir `text-box-trim` Werte von `trim-end` auf den ersten und `trim-both` auf den zweiten. Dies führt dazu, dass beim ersten Absatz nur der untere Rand abgeschnitten wird, während beim zweiten sowohl der obere _und_ der untere Rand abgeschnitten werden.

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

Die Ausgabe erfolgt wie folgt. Beachten Sie, dass wir einen oberen und unteren Rand bei jedem Absatz hinzugefügt haben, damit Sie sehen können, wie der Platz in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktive `text-box-trim` und `text-box-edge` Wertevergleich

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die `text-box-trim` und `text-box-edge` Werte anzuwenden.

#### HTML

In unserem HTML enthalten wir drei Hauptkomponenten:

- Drei {{htmlelement("select")}} Elemente, die Ihnen erlauben festzulegen, welche Ränder des Absatzes geschnitten werden sollen (der `text-box-trim` Wert) und wie viel Platz von den Block-Anfangs- und Block-Endrändern des Absatzes geschnitten werden soll (der {{cssxref("text-box-edge")}} Wert).
- Ein {{htmlelement("p")}} Element, das Text enthält, auf welchen die `text-box-*` Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) aktiviert, sodass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}} Element, das die auf den Absatz angewendeten `text-box-*` Deklarationen anzeigt. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schriftart von Google Fonts, um sie auf den Text unserer Demo anzuwenden.

Wir haben den genauen HTML-Code der Kürze halber ausgeblendet.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}} Element an und gestalten die Benutzeroberfläche mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den Großteil des CSS-Codes der Kürze halber ausgeblendet, aber unten zeigen wir die Regeln, die den Absatz stylen, auf den die `text-box-*` Effekte angewendet werden, und das `<output>`, das die angewendeten `text-box-*` Regeln zeigt:

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

Beachten Sie erneut, dass wir einen oberen und unteren Rand auf dem `.display` Absatz haben, damit Sie sehen können, wie sich der abgeschnittene Raum ändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir, indem wir Referenzen zu den drei `<select>` Elementen und zwei `<p>` Elementen erhalten:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als Nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}} Wert auf den Absatz basierend auf den Werten der `<select>` Elemente an und gibt auch die angewendeten Deklarationen aus (sowohl die Langform als auch die Kurzformäquivalente):

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

Im letzten Teil des JavaScripts führen wir die `setEdgeTrim()` Funktion einmal aus, um einen anfänglichen Zustand für die Benutzeroberfläche festzulegen. Wir wenden dann [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener auf alle `<select>` Elemente an (via [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), sodass `setEdgeTrim()` immer ausgeführt wird, wenn einer der `<select>` Werte geändert wird, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe erfolgt wie folgt:

{{EmbedLiveSample("`text-box-trim` Wertvergleich","100%","520")}}

`text-box-trim` ist zunächst auf `trim-both` gesetzt, was bedeutet, dass die oberen _und_ unteren Ränder des Absatzes abgeschnitten werden. `text-box-edge` ist zunächst auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit den Oberseiten der Großbuchstaben am Startrand und bündig mit der Basislinie am Endrand abgeschnitten wird.

Versuchen Sie, die `<select>` Werte zu ändern, um zu sehen, welchen Effekt sie auf den Anzeigetext haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
