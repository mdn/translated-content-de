---
title: text-box-trim
slug: Web/CSS/text-box-trim
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`text-box-trim`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, welche der oberen und unteren Ränder von Textinhalt von einem Text-Element Block-Container abgeschnitten werden sollen.

Der vertikale Abstand unterscheidet sich zwischen Schriften, was eine einheitliche Satzgestaltung historisch herausfordernd im Web macht. Die `text-box-trim` Eigenschaft — zusammen mit ihrer Gegenparteigkeit {{cssxref("text-box-edge")}}, welche definiert, wie viel Platz abgeschnitten werden soll — erleichtert das Erreichen einer konsistenten vertikalen Abstandsgestaltung von Text.

> [!NOTE]
> Die {{cssxref("text-box")}} Kurzschreibweise kann verwendet werden, um die `text-box-trim` und `text-box-edge` Werte in einer einzigen Deklaration anzugeben.

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

Der Wert der `text-box-trim` Eigenschaft kann mit einem der folgenden Schlüsselwörter spezifiziert werden:

- `none`
  - : Der Standardwert. Kein Platz wird vom Text abgeschnitten.
- `trim-both`
  - : Sowohl der Start- (oben) als auch der Endrand (unten) werden abgeschnitten.
- `trim-start`
  - : Der Startrand (oben) wird abgeschnitten.
- `trim-end`
  - : Der Endrand (unten) wird abgeschnitten.

## Beschreibung

Die Höhe von ausschließlich textlichem Inhalt ist relativ zur Höhe der Schriftart. In digitalen Schriftdateien umfasst die Höhe alle Zeichen, einschließlich Großbuchstaben, Oberlängen, Unterlängen usw. Unterschiedliche Schriften haben unterschiedliche Basislinienhöhen, was bedeutet, dass Textzeilen mit der gleichen `font-size` Linienboxen unterschiedlicher Höhe erzeugen, was die Erscheinung des Zeilenabstands beeinflusst.

Die `text-box-trim` Eigenschaft ermöglicht es Ihnen, die oberen und unteren Ränder des Textblockcontainers zu beschneiden, was es erleichtert, den Textabstand in Blockrichtung zu kontrollieren.

Die tatsächliche Menge des abgeschnittenen Raums wird mit der {{cssxref("text-box-edge")}} Eigenschaft angegeben. Zum Beispiel können Sie wählen, die obere Kante in Übereinstimmung mit den Großbuchstaben oder Kleinbuchstaben einer Schrift zu beschneiden, und die untere Kante bündig mit der Basislinie der Schrift.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-box-trim`

Im folgenden Beispiel setzen wir `text-box-edge: cap alphabetic` auf zwei Absätze, was die obere Kante der Text-Element-Blockcontainer mit der Oberseite der Großbuchstaben und die untere Kante bündig mit der Textbasislinie beschneidet.

Wir setzen dann `text-box-trim` Werte von `trim-end` auf dem ersten und `trim-both` auf dem zweiten Absatz. Dies führt dazu, dass der erste Absatz nur seine untere Kante abgeschnitten hat, während der zweite sowohl die obere _als auch_ untere Kante abgeschnitten hat.

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

Die Ausgabe ist wie folgt. Beachten Sie, wie wir auf jedem Absatz einen oberen und unteren Rand eingeschlossen haben, damit Sie sehen können, wie der Raum in jedem Fall abgeschnitten wurde.

{{EmbedLiveSample("Basic `text-box-edge` usage","100%","360")}}

### Interaktive `text-box-trim` und `text-box-edge` Wertvergleich

In diesem Beispiel bieten wir eine Benutzeroberfläche, die es Ihnen ermöglicht, die `text-box-trim` und `text-box-edge` Werte festzulegen, die auf einen Textabsatz angewendet werden.

#### HTML

In unserem HTML schließen wir drei Hauptpunkte ein:

- Drei {{htmlelement("select")}} Elemente, die es Ihnen ermöglichen festzulegen, welche Ränder des Absatzes beschnitten werden sollen (der `text-box-trim` Wert) und wie viel Platz von den Blockstart- und Blockendkanten des Absatzes abgeschnitten werden soll (der {{cssxref("text-box-edge")}} Wert).
- Ein {{htmlelement("p")}} Element, das den Text enthält, auf den die `text-box-*` Werte angewendet werden. Dieser Absatz hat [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable), damit Sie den Text bearbeiten können.
- Ein {{htmlelement("output")}} Element, das die auf den Absatz angewendeten `text-box-*` Deklarationen anzeigt. Dies wird aktualisiert, wenn eine Auswahl getroffen wird.

Wir importieren auch eine Schrift von dem Google Fonts-Service, die auf den Text unseres Demos angewendet wird.

Wir haben den genauen HTML-Code zur Kürze verborgen.

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

In unserem CSS verwenden wir die importierte Schrift auf das {{htmlelement("html")}} Element und gestalten die Benutzeroberfläche mit [flexbox](/de/docs/Learn_web_development/Core/CSS_layout/Flexbox). Wir haben den Großteil des CSS-Codes der Kürze halber verborgen, aber unten zeigen wir die Regeln, die den Absatz mit den `text-box-*` Effekten stilisieren und das `<output>`, das die angewendeten `text-box-*` Regeln anzeigt:

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

Auch hier ist zu beachten, dass wir einen oberen und unteren Rand auf den `.display` Absatz eingeschlossen haben, damit Sie sehen können, wie sich der beschnittene Raum ändert, wenn verschiedene `text-box-*` Werte ausgewählt werden.

#### JavaScript

Im JavaScript beginnen wir mit dem Erfassen von Referenzen zu den drei `<select>` Elementen und zwei `<p>` Elementen:

```js
const boxTrimSelect = document.getElementById("box-trim");
const trimOverSelect = document.getElementById("trim-over");
const trimUnderSelect = document.getElementById("trim-under");

const displayElem = document.querySelector("p");
const codeElem = document.querySelector("output");
```

Als nächstes definieren wir eine Funktion namens `setEdgeTrim()`. Diese wendet einen {{cssxref("text-box")}} Wert auf den Absatz basierend auf den Werten der `<select>` Elemente an und gibt auch die angewendeten Deklarationen an die Ausgabe aus (sowohl die ausführliche als auch die Kurzschriftäquivalente):

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

Im letzten Teil des JavaScript führen wir die `setEdgeTrim()` Funktion einmal aus, um einen Anfangszustand für die Benutzeroberfläche festzulegen. Wir wenden dann [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignislistener auf alle `<select>` Elemente an (via [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)), damit `setEdgeTrim()` ausgeführt wird, wann immer einer der `<select>` Werte sich ändert, um die Benutzeroberfläche entsprechend zu aktualisieren:

```js
setEdgeTrim();

boxTrimSelect.addEventListener("change", setEdgeTrim);
trimOverSelect.addEventListener("change", setEdgeTrim);
trimUnderSelect.addEventListener("change", setEdgeTrim);
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("`text-box-trim` value comparison","100%","520")}}

`text-box-trim` ist initial auf `trim-both` gesetzt, was bedeutet, dass die obere _und_ untere Kante des Absatzes beschnitten werden. `text-box-edge` ist anfänglich auf `cap alphabetic` gesetzt, was bedeutet, dass der Text bündig mit der Oberseite der Großbuchstaben an der Startkante und bündig mit der Basislinie an der Endkante beschnitten wird.

Versuchen Sie, die `<select>` Werte zu ändern, um zu sehen, wie sie sich auf den Anzeigetext auswirken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-box")}}, {{cssxref("text-box-edge")}}
- [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout) Modul
- [CSS text-box-trim](https://developer.chrome.com/blog/css-text-box-trim) auf developer.chrome.com (2025)
