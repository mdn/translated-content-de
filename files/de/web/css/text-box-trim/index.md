---
title: text-box-trim
slug: Web/CSS/text-box-trim
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{CSSRef}}

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS)-Eigenschaft gibt an, welche Über- und Unterkanten des Textinhalts von einem Blockcontainer eines Textelements abgeschnitten werden sollen.

Der vertikale Abstand unterscheidet sich zwischen den Schriftarten, was das einheitliche Setzen von Schrift auf dem Web historisch herausfordernd machte. Die Eigenschaft `text-box-trim` — zusammen mit der dazugehörigen Eigenschaft {{cssxref("text-box-edge")}}, die angibt, wie viel Platz abgeschnitten werden soll — erleichtert das Erreichen eines konsistenten vertikalen Abstands von Text.

> [!NOTE]
> Die Kurzschreibweise {{cssxref("text-box")}} kann verwendet werden, um die Werte für `text-box-trim` und `text-box-edge` in einer einzigen Deklaration anzugeben.

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
  - : Der Standardwert. Kein Platz wird vom Text abgeschnitten.
- `trim-both`
  - : Sowohl die Start- (Über-) als auch die End- (Unter-)Kanten werden abgeschnitten.
- `trim-start`
  - : Die Start- (Über-)Kante wird abgeschnitten.
- `trim-end`
  - : Die End- (Unter-)Kante wird abgeschnitten.

## Beschreibung

Die Höhe von textexklusiven Inhalten ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Grundlinienhöhen, was bedeutet, dass Zeilen gleichen `font-size`-Werts Boxen unterschiedlicher Höhe produzieren, was das Erscheinungsbild des Zeilenabstands betrifft.

Die Eigenschaft `text-box-trim` ermöglicht es Ihnen, die Über- und Unterkanten des Blockcontainers des Textes abzuschneiden, was die Kontrolle des Textabstands in Blockrichtung erleichtert.

Die tatsächliche Menge an abgeschnittenem Raum wird mit der Eigenschaft {{cssxref("text-box-edge")}} spezifiziert. Beispielsweise können Sie wählen, die Überkante in Übereinstimmung mit den Großbuchstaben oder Kleinbuchstaben einer Schrift abzuschneiden, und die Unterkante bündig mit der Baseline der Schrift.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätzen, wodurch die Überkante der Blockcontainer der Textelemente auf die Oberkante der Großbuchstaben und die Unterkante bündig mit der Textbaseline geschnitten wird.

Dann setzen wir `text-box-trim`-Werte von `trim-end` auf den ersten und `trim-both` auf den zweiten Absatz. Dies führt dazu, dass beim ersten Absatz nur die Unterkante geschnitten wird, während beim zweiten sowohl die Über- _als auch_ die Unterkante geschnitten werden.

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

Die Ausgabe ist wie folgt. Beachten Sie, dass wir oben und unten an jedem Absatz eine Grenze eingefügt haben, damit sichtbar wird, wie der Raum in jedem Fall geschnitten wurde.

{{EmbedLiveSample("Grundlegende Verwendung von `text-box-edge`","100%","360")}}

### Interaktive Wertevergleich von `text-box-trim` und `text-box-edge`

In diesem Beispiel liefern wir eine Benutzeroberfläche, mit der Sie die auf einen Textabsatz angewandten Werte von `text-box-trim` und `text-box-edge` auswählen können.

#### HTML

In unserem HTML enthalten wir drei Hauptbestandteile:

- Drei {{htmlelement("select")}}-Elemente, mit denen Sie festlegen können, welche Kanten des Absatzes geschnitten werden sollen (der `text-box-trim`-Wert) und wie viel Platz von den Blockstart- und Blockendkanten des Absatzes geschnitten werden soll (der {{cssxref("text-box-edge")}}-Wert).
- Ein {{htmlelement("p")}}-Element mit Text, auf das die `text-box-*`-Werte angewandt werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt, sodass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}}-Element, das die auf den Absatz angewandten `text-box-*`-Deklarationen anzeigt. Dieses wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schriftart aus dem Google Fonts-Dienst, um sie auf den Text unseres Demos anzuwenden.

Wir haben den genauen HTML-Code aus Gründen der Übersichtlichkeit verborgen.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}}-Element an und gestalten das UI mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den Großteil des CSS-Codes aus Gründen der Übersichtlichkeit verborgen, aber unten zeigen wir die Regeln, die den Absatz stylen, auf den die `text-box-*`-Effekte angewendet werden, und das `<output>`, das die angewandten `text-box-*`-Regeln anzeigt:

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

Auch hier beachten Sie, wie wir eine obere und untere Grenze am `.display`-Absatz hinzugefügt haben, damit sichtbar wird, wie sich der Raumverlauf ändert, wenn verschiedene `text-box-*`-Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir mit dem Abrufen von Referenzen auf die drei `<select>`-Elemente und zwei `<p>`-Elemente:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}}-Wert auf den Absatz basierend auf den Werten der `<select>`-Elemente an und gibt auch die angewandten Deklarationen aus (sowohl die Lang- als auch die Kurzschreibäquivalente):

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

Im letzten Teil des JavaScripts führen wir die Funktion `setEdgeTrim()` einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Dann wenden wir [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener auf alle `<select>`-Elemente an (über [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), damit `setEdgeTrim()` immer dann ausgeführt wird, wenn sich einer der `<select>`-Werte ändert, um die UI entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("Wertevergleich von `text-box-trim`","100%","520")}}

`text-box-trim` ist anfangs auf `trim-both` gesetzt, was bedeutet, dass die Über- _und_ Unterkanten des Absatzes abgeschnitten werden. `text-box-edge` ist anfangs auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit der Oberkante der Großbuchstaben an der Startkante und bündig mit der Baseline an der Endkante geschnitten wird.

Versuchen Sie, die `<select>`-Werte zu ändern, um die Wirkung auf den Anzeigetext zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
