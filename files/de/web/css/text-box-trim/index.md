---
title: text-box-trim
slug: Web/CSS/text-box-trim
l10n:
  sourceCommit: 9cc1f40340f37fa05d6573cc519c9844fa4940be
---

{{CSSRef}}

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert, welche der oberen und unteren Kanten des Textinhalts von einem Blockcontainer eines Textelements abgeschnitten werden sollen.

Der vertikale Abstand variiert zwischen Schriftarten, was das Konsistentes Setzen historisch im Web herausfordernd machte. Die `text-box-trim`-Eigenschaft — zusammen mit ihrer Gegenparteigenschaft {{cssxref("text-box-edge")}}, die angibt, wie viel Raum abgeschnitten werden soll — macht es einfacher, einen konsistenten vertikalen Abstand von Text zu erreichen.

> [!NOTE]
> Die {{cssxref("text-box")}}-Kurzschreibweise kann verwendet werden, um die `text-box-trim`- und `text-box-edge`-Werte in einer einzigen Deklaration anzugeben.

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

Der `text-box-trim`-Eigenschaftswert kann als eines der folgenden Schlüsselwörter angegeben werden:

- `none`
  - : Der Standardwert. Kein Abstand wird vom Text abgeschnitten.
- `trim-both`
  - : Sowohl die Start- (über) als auch die Endkanten (unter) werden abgeschnitten.
- `trim-start`
  - : Die Startkante (über) wird abgeschnitten.
- `trim-end`
  - : Die Endkante (unter) wird abgeschnitten.

## Beschreibung

Die Höhe von nur Text-Inhalten ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien enthält die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Verschiedene Schriftarten haben unterschiedliche Basislinienhöhen, was bedeutet, dass Textzeilen mit derselben `font-size` Zeilenboxen unterschiedlicher Höhe erzeugen, was das Erscheinungsbild des Abstands zwischen Zeilen beeinflusst.

Die `text-box-trim`-Eigenschaft ermöglicht es, die obere und untere Kante des Textes im Blockcontainer abzuschneiden, was es einfacher macht, den Textabstand in der Blockrichtung zu kontrollieren.

Die tatsächlich abgeschnittene Menge Raum wird durch die {{cssxref("text-box-edge")}}-Eigenschaft festgelegt. Sie können beispielsweise die obere Kante in Übereinstimmung mit den Großbuchstaben oder Kleinbuchstaben einer Schriftart und die untere Kante bündig mit der Basislinie der Schrift abschneiden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätze, was die obere Kante der Blockcontainer der Textelemente auf die Oberkante der Großbuchstaben und die untere Kante bündig mit der Textbasislinie trimmt.

Wir setzen dann `text-box-trim`-Werte von `trim-end` auf den ersten Absatz und `trim-both` auf den zweiten. Dies führt dazu, dass der erste Absatz nur seine untere Kante abgeschnitten hat, während der zweite sowohl die obere _als auch_ die untere Kante abgeschnitten hat.

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

Das Ergebnis ist wie folgt. Beachten Sie, wie wir einen oberen und unteren Rahmen um jeden Absatz eingeschlossen haben, sodass Sie sehen können, wie der Raum in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktive `text-box-trim` und `text-box-edge` Wertevergleich

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die auf einen Textabsatz angewendeten `text-box-trim` und `text-box-edge`-Werte auszuwählen.

#### HTML

In unserem HTML enthalten wir drei Hauptbestandteile:

- Drei {{htmlelement("select")}}-Elemente, die es Ihnen ermöglichen festzulegen, welche Kanten des Absatzes abgeschnitten werden sollen (der `text-box-trim`-Wert) und wie viel Raum von den Blockanfangs- und Blockendkanten des Absatzes abgeschnitten werden soll (der {{cssxref("text-box-edge")}}-Wert).
- Ein {{htmlelement("p")}}-Element, das Text enthält, auf den die `text-box-*`-Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) eingestellt, sodass Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}}-Element, das die auf den Absatz angewendeten `text-box-*`-Deklarationen anzeigt. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schriftart vom Google Fonts-Service, um sie auf den Text unseres Demos anzuwenden.

Wir haben den genauen HTML-Code aus Gründen der Kürze ausgeblendet.

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

In unserem CSS wenden wir die importierte Schriftart auf das {{htmlelement("html")}}-Element an und gestalten die Benutzeroberfläche mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den Großteil des CSS-Codes aus Gründen der Kürze ausgeblendet, zeigen jedoch unten die Regeln, die den Absatz gestalten, auf den die `text-box-*`-Effekte angewendet werden, und die `<output>`, die die angewendeten `text-box-*`-Regeln anzeigen:

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

Beachten Sie erneut, wie wir einen oberen und unteren Rahmen um den `.display`-Absatz eingeschlossen haben, damit Sie sehen können, wie sich der abgeschnittene Raum ändert, wenn unterschiedliche `text-box-*`-Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir mit dem Abrufen von Referenzen auf die drei `<select>`-Elemente und zwei `<p>`-Elemente:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als Nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}}-Wert auf den Absatz basierend auf den Werten der `<select>`-Elemente an und gibt auch die angewendeten Deklarationen im Output aus (sowohl die Langform als auch die Kurzformäquivalente):

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

Im letzten Teil des JavaScripts führen wir die `setEdgeTrim()`-Funktion einmal aus, um einen anfänglichen Zustand für die UI festzulegen. Wir wenden dann [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignislistener auf alle `<select>`-Elemente an (via [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), sodass `setEdgeTrim()` ausgeführt wird, wann immer einer der `<select>`-Werte geändert wird, um die UI entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Das Ergebnis ist wie folgt:

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` ist anfänglich auf `trim-both` gesetzt, was bedeutet, dass die oberen _und_ unteren Kanten des Absatzes abgeschnitten werden. `text-box-edge` ist anfänglich auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit der Oberkante der Großbuchstaben an der Anfangskante und bündig mit der Basislinie an der Endkante abgeschnitten wird.

Versuchen Sie, die `<select>`-Werte zu ändern, um die Wirkung auf den Anzeigetext zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
