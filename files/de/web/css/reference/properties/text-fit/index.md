---
title: "`text-fit` CSS property"
short-title: text-fit
slug: Web/CSS/Reference/Properties/text-fit
l10n:
  sourceCommit: 8e307de115d41e9214fcacbd7fe89532756816b4
---

Die **`text-fit`**-[CSS](/de/docs/Web/CSS)-Eigenschaft kann verwendet werden, um die gerenderte Schriftgröße von Textknoten (und anderen Inline-Inhalten) zu skalieren, sodass sie exakt in die Inline-Dimension ihrer umschließenden Boxen passen, optional begrenzt durch einen maximalen oder minimalen **Skalierungsfaktor**.

## Syntax

```css
/* One keyword */
text-fit: none;
text-fit: grow;
text-fit: shrink;

/* Two keywords */
text-fit: grow consistent;
text-fit: shrink per-line-all;

/* Keywords and <percentage> */
text-fit: grow 300%;
text-fit: shrink 80%;
text-fit: grow per-line-all 300%;

/* Global values */
text-fit: inherit;
text-fit: initial;
text-fit: revert;
text-fit: revert-layer;
text-fit: unset;
```

### Werte

Wird als eines der Schlüsselwörter `none`, `grow` oder `shrink` angegeben, optional ergänzt durch eines der Schlüsselwörter `consistent`, `per-line` oder `per-line-all` sowie einen optionalen {{cssxref("percentage")}}-Wert, getrennt durch Leerzeichen. Die Komponenten müssen in dieser Reihenfolge angegeben werden.

- `none`
  - : Der Standardwert. Es wird keine Textskalierung angewendet.
- `grow`
  - : Die gerenderte Schriftgröße des Textknotens wird vergrößert, bis sie exakt in die Inline-Dimension seiner umschließenden Box passt.
- `shrink`
  - : Die gerenderte Schriftgröße des Textknotens wird verkleinert, bis sie exakt in die Inline-Dimension seiner umschließenden Box passt.
- `consistent`
  - : Alle Zeilen des Textknotens werden mit demselben Skalierungsfaktor skaliert. Dieses Schlüsselwort hat keine Wirkung, wenn `none` als erstes Schlüsselwort angegeben ist. Wenn kein zweites Schlüsselwort angegeben wird, wird `consistent` angenommen.
- `per-line`
  - : Alle Zeilen des Textknotens werden jeweils mit ihrem eigenen Skalierungsfaktor skaliert. Auf die letzte Zeile des Textknotens sowie auf alle Zeilen, die mit einem erzwungenen Umbruch enden – beispielsweise aufgrund eines {{htmlelement("br")}}-Elements –, wird keine Textskalierung angewendet. Dieses Schlüsselwort hat keine Wirkung, wenn `none` als erstes Schlüsselwort angegeben ist.
- `per-line-all`
  - : Alle Zeilen des Textknotens werden jeweils mit ihrem eigenen Skalierungsfaktor skaliert, einschließlich der letzten Zeile und Zeilen, die mit einem erzwungenen Umbruch enden. Dieses Schlüsselwort hat keine Wirkung, wenn `none` als erstes Schlüsselwort angegeben ist.
- {{cssxref("&lt;percentage&gt;")}}
  - : Gibt den maximalen Skalierungsfaktor an, wenn `grow` angegeben ist, beziehungsweise den minimalen Skalierungsfaktor, wenn `shrink` angegeben ist. Bei `grow` muss dieser Wert `100%` oder größer sein. Bei `shrink` muss er einschließlich zwischen `0%` und `100%` liegen. Andernfalls hat der Prozentwert keine Wirkung.

## Beschreibung

Eine häufige Herausforderung beim Webdesign besteht darin, Überschriften und andere Textmerkmale unabhängig von Layout oder Viewport-Größe ordentlich in ihre umschließenden Boxen einzupassen. Der typischste Anwendungsfall besteht darin, eine horizontale Textüberschrift perfekt an die Breite ihrer umschließenden Box anzupassen. Dafür wurden in der Vergangenheit komplexe {{cssxref("font-size")}}-Berechnungen und JavaScript-Workarounds verwendet.

Die Eigenschaft `text-fit` bietet eine praktische reine CSS-Lösung. Sie passt die gerenderte Schriftgröße des Textes mithilfe eines bestimmten Skalierungsfaktors an den verfügbaren Platz an, anstatt ihn wie der Wert `justify` der Eigenschaft {{cssxref("text-align")}} auszurichten.

Die grundlegende Form von `text-fit` verwendet ein einzelnes Schlüsselwort:

- Sie können `grow` angeben, um die Schriftgröße zu vergrößern, sodass der Text exakt in seine umschließende Box passt. Dies eignet sich gut für den zuvor beschriebenen Anwendungsfall.
- Sie können `shrink` angeben, um die Schriftgröße zu verkleinern, sodass der Text exakt in seine umschließende Box passt. Dies eignet sich gut für Fälle, in denen Sie eine Textzeile haben, die länger als ihre umschließende Box ist – möglicherweise aufgrund eines sehr langen Wortes – und Sie sie verkleinern möchten, um Überlauf zu vermeiden.

Konkret sind die von dieser Skalierung betroffenen Teile eines Textknotens (die **skalierbaren Teile**) der Text selbst, ausgenommen nachfolgender Leerraum, sowie Abstände, deren Inline-Größe proportional zur `font-size` des Textes ist, beispielsweise prozentbasiertes {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}} sowie {{cssxref("text-autospace")}}. Andere Teile, einschließlich Inline-{{cssxref("border")}}, -{{cssxref("margin")}} und -{{cssxref("padding")}}, werden nicht skaliert.

Die Eigenschaft `text-fit` beeinflusst nicht die intrinsische Größe eines Containers. Das bedeutet, dass der Textinhalt in Fällen, in denen die Größe des Containers durch seinen Inhalt bestimmt wird, beispielsweise mit dem Schlüsselwort {{cssxref("fit-content")}}, nicht wachsen kann. Das Setzen von `text-fit` ändert auch nicht die berechnete `font-size` eines Elements: Die Größenanpassung wird nach dem endgültigen Rendering angewendet.

### Wie wird der Skalierungsfaktor berechnet?

Der Skalierungsfaktor ist das Verhältnis, um das die skalierbaren Teile einer Textzeile skaliert werden müssen, damit ihr Inline-Inhalt exakt in ihre umschließende Box passt. Der Skalierungsfaktor für jede Zeile eines Textknotens wird mithilfe einer Formel ungefähr dieser Art berechnet (die genaue Methode zur Bestimmung des Skalierungsfaktors kann sich zwischen Implementierungen unterscheiden):

```plain
(A + B) / A
```

wobei:

- `A` die gesamte Inline-Größe der skalierbaren Teile der Textzeile ist.
- `B` der verbleibende Platz innerhalb der Textzeile ist, einschließlich nachfolgendem Leerraum, der negativ sein kann, wenn der Text überläuft.

Der Skalierungsfaktor für eine Textzeile ohne skalierbare Teile ist `1`.

### Begrenzungen für Skalierungsfaktoren angeben

Um den Betrag zu begrenzen, um den der Text wachsen kann, können Sie nach dem Schlüsselwort `grow` oder `shrink` einen `<percentage>`-Wert angeben.

Wenn `grow` angegeben ist, muss der Prozentwert `100%` oder größer sein und fungiert als maximaler Skalierungsfaktor. Beispiel:

```css
text-fit: grow 300%;
```

Jeder Text, auf den dies angewendet wird, wächst passend zu seiner umschließenden Box, wird jedoch nicht auf eine Größe skaliert, die größer als 300 % seiner ursprünglichen `font-size` ist.

Wenn `shrink` angegeben ist, muss der Prozentwert einschließlich zwischen `0%` und `100%` liegen und fungiert als minimaler Skalierungsfaktor. Beispiel:

```css
text-fit: shrink 50%;
```

Jeder Text, auf den dies angewendet wird, schrumpft passend zu seiner umschließenden Box, wird jedoch nicht auf eine Größe skaliert, die kleiner als 50 % seiner ursprünglichen `font-size` ist.

> [!NOTE]
> In vielen Situationen führt das Wortumbruchverhalten dazu, dass `text-fit: shrink` keine Wirkung hat – die Wörter werden in neue Zeilen umgebrochen, anstatt verkleinert zu werden. In diesen Fällen müssen Sie das Umbruchverhalten beispielsweise mit einem {{cssxref("white-space")}}-Wert von `nowrap` verhindern, damit es funktioniert. Sehen Sie dies in unserem [grundlegenden Beispiel](#basic_text-fit_usage) in Aktion.

### Festlegen, wie der Skalierungsfaktor auf mehrere Textzeilen angewendet wird

Standardmäßig skaliert ein Textknoten mit mehreren Zeilen alle Zeilen mit demselben Skalierungsfaktor. Der Skalierungsfaktor jeder Zeile wird separat berechnet, und anschließend wird der kleinste Skalierungsfaktor auf alle Zeilen angewendet. Dies ist in der Regel das gewünschte Verhalten, um sicherzustellen, dass jede Zeile im gleichen Verhältnis wächst oder schrumpft.

Wenn Sie dieses Verhalten anpassen möchten, können Sie nach dem ersten Schlüsselwort und vor dem Prozentwert, falls angegeben, einen zweiten Wert festlegen. Dieser Wert kann als das Standardschlüsselwort `consistent` angegeben werden, das das zuvor beschriebene Verhalten beibehält. Sie können aber auch `per-line` oder `per-line-all` angeben. Beide bewirken, dass die Zeilen des Textknotens jeweils mit ihrem eigenen Skalierungsfaktor skaliert werden. Der Unterschied besteht darin, dass bei `per-line` auf die letzte Zeile des Textknotens und alle Zeilen, die mit einem erzwungenen Umbruch enden – beispielsweise aufgrund eines `<br>`-Elements –, keine Textskalierung angewendet wird, während `per-line-all` auch auf diese Zeilen eine Skalierung anwendet.

Beispielsweise vergrößert diese Deklaration alle Zeilen eines Textknotens mit ihrem eigenen Skalierungsfaktor, sodass sie in die umschließende Box passen.

```css
text-fit: grow per-line-all;
```

Diese Deklaration hingegen verkleinert alle Zeilen eines Textknotens mit ihrem eigenen Skalierungsfaktor, sodass sie in die umschließende Box passen, jedoch nicht die letzte Zeile oder Zeilen mit erzwungenen Umbrüchen und nicht unter `50%` der ursprünglichen `font-size`.

```css
text-fit: shrink per-line 50%;
```

## Barrierefreiheit

Bei der Verwendung von `text-fit` müssen Designs bei verschiedenen Viewport-Größen sorgfältig getestet werden, um sicherzustellen, dass die gerenderte Schriftgröße nicht zu klein oder zu groß wird. Dies kann dazu führen, dass Inhalte unleserlich werden, insbesondere für Menschen mit Sehbeeinträchtigungen oder eingeschränktem Sehvermögen.

Textinhalte sollten in jedem Fall ohne Verlust von Inhalten oder Funktionalität skalierbar sein; siehe [WCAG-Erfolgskriterium 1.4.4 Textgröße ändern](https://www.w3.org/TR/WCAG22/#resize-text).

Zugehörige Hinweise:

- [MDN: WCAG verstehen, Leitlinie 1.4: Es Nutzern erleichtern, Inhalte zu sehen und zu hören, einschließlich der Trennung von Vordergrund und Hintergrund](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-fit`

Dieses Beispiel demonstriert die grundlegende Verwendung von `text-fit`, um Textknoten zu vergrößern und zu verkleinern, sodass sie in ihre Container passen.

#### HTML

Wir fügen zwei Textelemente hinzu, ein [`<h1>` und ein `<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), die in einem {{htmlelement("div")}} verschachtelt sind.

```html hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
<input
  type="range"
  min="0.4"
  max="1"
  value="1"
  step="0.01"
  aria-label="adjust the width of the page" />
```

```html live-sample___basic-text-fit live-sample___text-fit-percentages
<div>
  <h1>My heading</h1>

  <h2>My subtitle: a bit longer, may need shrinking</h2>
</div>
```

```js hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
const divElem = document.querySelector("div");
const slider = document.querySelector("input");
let maxWidth;

function setMaxWidth() {
  maxWidth = document.documentElement.clientWidth;
}

function setWidth() {
  divElem.style.width = `${maxWidth * slider.value}px`;
}

slider.addEventListener("input", setWidth);
window.addEventListener("resize", () => {
  setMaxWidth();
  setWidth();
});

setMaxWidth();
setWidth();
```

Wir fügen außerdem ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element hinzu, um die Anpassung der Inhaltsbreite zu ermöglichen und eine sich ändernde Viewport-Breite zu simulieren. Die Bereichseingabe und das JavaScript, das sie steuert, wurden der Kürze halber ausgeblendet.

#### CSS

Wir geben dem Container-`<div>` einen {{cssxref("padding")}}-Wert von `20px`, um dem Text etwas Platz zu geben.

```css hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  background-color: white;
}

div {
  margin: 0 auto;
  background-color: coral;
}

input {
  width: 99%;
}
```

```css live-sample___basic-text-fit
div {
  padding: 20px;
}
```

Wir geben dem `<h1>` einen `text-fit`-Wert von `grow`, sodass es wächst, um den verfügbaren Inline-Platz seines Containers auszufüllen. Dem längeren `<h2>` geben wir einen {{cssxref("white-space")}}-Wert von `nowrap`, sodass es normalerweise vollständig in einer einzelnen Zeile bleibt und seinen Container überläuft, anstatt umgebrochen zu werden, wenn es den Rand des Containers erreicht. Anschließend setzen wir `text-fit: shrink`, sodass es nicht überläuft, sondern schrumpft, um in den verfügbaren Inline-Platz seines Containers zu passen.

```css live-sample___basic-text-fit
h1 {
  text-fit: grow;
}

h2 {
  white-space: nowrap;
  text-fit: shrink;
}
```

#### Ergebnis

{{EmbedLiveSample("basic-text-fit","100%","320")}}

Passen Sie den Schieberegler an und beachten Sie, wie das `<h1>` automatisch wächst, sodass es immer den verfügbaren Platz innerhalb seines übergeordneten `<div>` ausfüllt. Beachten Sie außerdem, wie das `<h2>` schrumpft, sodass es bei geringeren Breiten immer den verfügbaren Platz innerhalb des `<div>` ausfüllt; bei größeren Breiten, bei denen es in das `<div>` passt, behält es seine natürliche Breite bei.

Ohne `text-fit` würde das `<h1>` den verfügbaren Platz nicht ausfüllen und das `<h2>` würde bei geringeren Breiten überlaufen.

### Begrenzungen für den Skalierungsfaktor in Prozent festlegen

Dieses Beispiel ist dem vorherigen sehr ähnlich, außer dass wir in diesem Fall mit `<percentage>`-Werten begrenzen, wie stark unsere Überschriften wachsen oder schrumpfen können.

Das HTML und JavaScript sind mit denen des vorherigen Beispiels identisch.

#### CSS

Wir geben dem `<h1>` einen `text-fit`-Wert von `grow 300%`, sodass es wächst, um den verfügbaren Inline-Platz seines Containers auszufüllen, bis zu 300 % seiner natürlichen `font-size`:

```css live-sample___text-fit-percentages
h1 {
  text-fit: grow 300%;
}
```

Wir geben dem `<h2>` einen {{cssxref("white-space")}}-Wert von `nowrap`, sodass es in einer einzelnen Zeile bleibt und seinen Container überläuft, anstatt umgebrochen zu werden, wenn es den Rand des Containers erreicht. Anschließend setzen wir `text-fit: shrink 80%`, sodass es nicht überläuft, sondern schrumpft, um in den verfügbaren Inline-Platz seines Containers zu passen, bis auf `80%` seiner natürlichen `font-size`.

```css live-sample___text-fit-percentages
h2 {
  white-space: nowrap;
  text-fit: shrink 80%;
}
```

Ein Problem besteht an diesem Punkt darin, dass das `<h2>` seinen Container zu überlaufen beginnt, wenn die `width` des `<div>` kleiner als ungefähr `400px` wird. Um dies zu vermeiden, möchten wir den Text ab diesem Punkt normal in neue Zeilen umbrechen lassen. Um das Problem zu lösen, geben wir dem umschließenden `<div>` zunächst ein {{cssxref("container-type")}} von `inline-size`, damit wir [Container-Queries](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwenden können, um abhängig von seiner Breite selektiv CSS anzuwenden.

```css hidden live-sample___text-fit-percentages
div {
  padding: 20px;
}
```

```css live-sample___text-fit-percentages
div {
  container-type: inline-size;
}
```

Anschließend verwenden wir eine Container-Query, um den `white-space`-Wert des `<h2>` in `wrap` zu ändern, wenn die `width` des `<div>` kleiner als `400px` wird:

```css live-sample___text-fit-percentages
@container (width < 400px) {
  h2 {
    white-space: wrap;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("text-fit-percentages","100%","320")}}

Passen Sie den Schieberegler an. Beachten Sie, wie das `<h1>` automatisch wächst, sodass es immer den verfügbaren Platz innerhalb seines übergeordneten `<div>` ausfüllt, jedoch nur bis zu einer bestimmten Breite. Beachten Sie, wie das `<h2>` schrumpft, sodass es bei geringeren Breiten immer den verfügbaren Platz innerhalb des `<div>` ausfüllt. Wenn das `<div>` schmaler als `400px` wird, wird die Container-Query aktiv und wir setzen `white-space: wrap`. Dadurch wird das `<h2>` in mehrere Zeilen umgebrochen.

### Demonstration der Schlüsselwörter für mehrzeiliges Skalierungsverhalten

Dieses Beispiel zeigt den Unterschied in der Wirkung zwischen den Schlüsselwörtern `consistent`, `per-line` und `per-line-all` in den `text-fit`-Eigenschaftswerten verschiedener Absätze.

#### HTML

Das HTML enthält drei {{htmlelement("p")}}-Elemente mit demselben Platzhaltertext, für die jeweils unterschiedliche `id`-Werte festgelegt sind:

```html live-sample___multi-line-keywords
<div>
  <p id="consistent">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae in id
    esse odit autem quisquam saepe repellendus.
  </p>

  <p id="per-line">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae in id
    esse odit autem quisquam saepe repellendus.
  </p>

  <p id="per-line-all">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste vitae in id
    esse odit autem quisquam saepe repellendus.
  </p>
</div>
```

Das HTML und JavaScript für den Schieberegler zur Breitenanpassung sind ebenfalls in diesem Beispiel enthalten.

#### CSS

Wir geben jedem Absatz einen `text-fit`-Wert, bei dem das erste Schlüsselwort auf `grow` gesetzt ist; das zweite Schlüsselwort ist jeweils auf einen anderen Wert gesetzt: `consistent`, `per-line` beziehungsweise `per-line-all`.

```css live-sample___multi-line-keywords
#consistent {
  text-fit: grow consistent;
}

#per-line {
  text-fit: grow per-line;
}

#per-line-all {
  text-fit: grow per-line-all;
}
```

```css hidden live-sample___multi-line-keywords
* {
  box-sizing: border-box;
}

:root {
  overflow: hidden;
}

div {
  padding: 20px;
}

p {
  padding: 20px;
  background-color: rgb(0 0 0 / 0.2);
  position: relative;
  margin-bottom: 40px;
}

p::before {
  content: attr(id);
  background-color: black;
  color: white;
  padding: 5px 10px;
  position: absolute;
  top: -28px;
  left: 0px;
}
```

#### Ergebnis

{{EmbedLiveSample("multi-line-keywords","100%","650")}}

Passen Sie den Schieberegler auf und ab und achten Sie genau auf das Verhalten jedes Absatzes. Sie sollten Folgendes feststellen:

- Die Textzeilen des `consistent`-Absatzes haben durchgehend immer dieselbe `font-size`.
- Die Textzeilen des `per-line`-Absatzes unterscheiden sich etwas in ihrer `font-size`, was bei geringeren Breiten deutlicher wird. Die `font-size` der letzten Zeile wird nicht skaliert.
- Die Textzeilen des `per-line-all`-Absatzes unterscheiden sich etwas in ihrer `font-size`, einschließlich der letzten Zeile. Dies ist bei Breiten, bei denen nur ein oder zwei Wörter in die letzte Zeile umgebrochen werden, sehr deutlich.

```css hidden live-sample___basic-text-fit live-sample___text-fit-percentages live-sample___multi-line-keywords
@supports not (text-fit: grow) {
  body::before {
    content: "Your browser does not support text-fit.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Text](/de/docs/Web/CSS/Guides/Text)-Modul
