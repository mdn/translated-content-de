---
title: "`text-fit` CSS property"
short-title: text-fit
slug: Web/CSS/Reference/Properties/text-fit
l10n:
  sourceCommit: cc66520c973185b32319769333271680832a854e
---

{{SeeCompatTable}}

Mit der **CSS-Eigenschaft `text-fit`** von [CSS](/de/docs/Web/CSS) lässt sich die gerenderte Schriftgröße von Textknoten (und anderen Inline-Inhalten) so skalieren, dass sie genau in die Inline-Dimension ihrer umgebenden Boxen passen. Die Skalierung kann optional durch einen maximalen oder minimalen **Skalierungsfaktor** begrenzt werden.

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

Diese Eigenschaft wird als durch Leerzeichen getrennte Liste von einem bis drei Werten aus der folgenden Liste angegeben:

- `none`
  - : Der Standardwert. Der Text wird nicht skaliert.
- `grow`
  - : Die gerenderte Schriftgröße des Textknotens wird vergrößert, bis er genau in die Inline-Dimension seiner umgebenden Box passt.
- `shrink`
  - : Die gerenderte Schriftgröße des Textknotens wird verkleinert, bis er genau in die Inline-Dimension seiner umgebenden Box passt.
- `consistent`
  - : Alle Zeilen des Textknotens werden mit demselben Skalierungsfaktor skaliert. Dieses Schlüsselwort hat keine Wirkung, wenn `none` als erstes Schlüsselwort angegeben ist. Wird kein zweites Schlüsselwort angegeben, gilt `consistent`.
- `per-line`
  - : Alle Zeilen des Textknotens werden mit ihrem jeweils eigenen Skalierungsfaktor skaliert. Auf die letzte Zeile des Textknotens und auf Zeilen, die mit einem erzwungenen Umbruch enden (beispielsweise durch ein {{htmlelement("br")}}-Element), wird keine Textskalierung angewendet. Dieses Schlüsselwort hat keine Wirkung, wenn `none` als erstes Schlüsselwort angegeben ist.
- `per-line-all`
  - : Alle Zeilen des Textknotens werden mit ihrem jeweils eigenen Skalierungsfaktor skaliert, einschließlich der letzten Zeile und der Zeilen, die mit einem erzwungenen Umbruch enden. Dieses Schlüsselwort hat keine Wirkung, wenn `none` als erstes Schlüsselwort angegeben ist.
- {{cssxref("&lt;percentage&gt;")}}
  - : Gibt den maximalen Skalierungsfaktor an, wenn `grow` angegeben ist, oder den minimalen Skalierungsfaktor, wenn `shrink` angegeben ist. Bei `grow` muss der Wert mindestens `100%` betragen; bei `shrink` muss er zwischen `0%` und `100%` einschließlich liegen. Andernfalls hat der Prozentwert keine Wirkung.

Der obligatorische erste Wert kann `none`, `grow` oder `shrink` sein. Der optionale zweite Wert kann `consistent`, `per-line` oder `per-line-all` sein. Der optionale Wert {{cssxref("percentage")}} wird zuletzt angegeben. Die Bestandteile müssen in dieser Reihenfolge angegeben werden.

## Beschreibung

Eine häufige Herausforderung beim Webdesign besteht darin, Überschriften und andere Textelemente unabhängig vom Layout oder der Größe des Viewports so anzupassen, dass sie genau in ihre umgebenden Boxen passen. Der typischste Anwendungsfall ist eine horizontale Textüberschrift, die genau die Breite ihrer umgebenden Box ausfüllen soll. Früher wurden dafür komplexe Berechnungen mit {{cssxref("font-size")}} und JavaScript-Workarounds verwendet.

Die Eigenschaft `text-fit` bietet hierfür eine praktische Lösung allein mit CSS: Sie passt die gerenderte Schriftgröße des Textes mithilfe eines bestimmten Skalierungsfaktors an den verfügbaren Platz an, statt ihn lediglich so auszurichten, wie es der Wert `justify` der Eigenschaft {{cssxref("text-align")}} tut.

In der einfachsten Form wird für `text-fit` ein einzelnes Schlüsselwort verwendet:

- Mit `grow` können Sie die Schriftgröße vergrößern, sodass der Text genau in seine umgebende Box passt. Das eignet sich gut für den zuvor beschriebenen Anwendungsfall.
- Mit `shrink` können Sie die Schriftgröße verkleinern, sodass der Text genau in seine umgebende Box passt. Das eignet sich beispielsweise, wenn eine Textzeile länger als ihre umgebende Box ist – möglicherweise wegen eines sehr langen Wortes – und Sie den Text verkleinern möchten, um ein Überlaufen zu vermeiden.

Von dieser Skalierung betroffen sind insbesondere die **skalierbaren Bestandteile** eines Textknotens: der Text selbst ohne nachgestellte Leerzeichen sowie Abstände, deren Inline-Größe proportional zur `font-size` des Textes ist, etwa prozentbasierte Werte für {{cssxref("letter-spacing")}} und {{cssxref("word-spacing")}} sowie {{cssxref("text-autospace")}}. Andere Bestandteile, darunter Inline-Werte für {{cssxref("border")}}, {{cssxref("margin")}} und {{cssxref("padding")}}, werden nicht skaliert.

Die Eigenschaft `text-fit` beeinflusst nicht die intrinsische Größe eines Containers. Das bedeutet, dass der Text nicht vergrößert werden kann, wenn die Größe des Containers durch seinen Inhalt bestimmt wird, beispielsweise mit dem Schlüsselwort {{cssxref("fit-content")}}. Auch die berechnete `font-size` eines Elements ändert sich durch `text-fit` nicht: Die Größenanpassung wird erst nach der abschließenden Berechnung für die Darstellung angewendet.

### Wie wird der Skalierungsfaktor berechnet?

Der Skalierungsfaktor ist das Verhältnis, um das die skalierbaren Bestandteile einer Textzeile skaliert werden müssen, damit ihr Inline-Inhalt genau in die umgebende Box passt. Der Skalierungsfaktor für jede Zeile eines Textknotens wird anhand einer Formel nach folgendem Muster berechnet (die genaue Methode zur Bestimmung des Skalierungsfaktors kann sich je nach Implementierung unterscheiden):

```plain
(A + B) / A
```

Dabei gilt:

- `A` ist die gesamte Inline-Größe der skalierbaren Bestandteile der Textzeile.
- `B` ist der verbleibende Platz innerhalb der Textzeile, einschließlich etwaiger nachgestellter Leerzeichen. Dieser Wert kann negativ sein, wenn der Text überläuft.

Der Skalierungsfaktor für eine Textzeile ohne skalierbare Bestandteile ist `1`.

### Grenzen für den Skalierungsfaktor angeben

Um zu begrenzen, wie stark der Text vergrößert oder verkleinert werden kann, können Sie nach dem Schlüsselwort `grow` oder `shrink` einen `<percentage>`-Wert angeben.

Bei `grow` muss der Prozentwert mindestens `100%` betragen und dient als maximaler Skalierungsfaktor. Zum Beispiel:

```css
text-fit: grow 300%;
```

Text, auf den dies angewendet wird, wächst so, dass er in seine umgebende Box passt. Er wird jedoch nicht auf mehr als 300 % seiner ursprünglichen `font-size` skaliert.

Bei `shrink` muss der Prozentwert zwischen `0%` und `100%` einschließlich liegen und dient als minimaler Skalierungsfaktor. Zum Beispiel:

```css
text-fit: shrink 50%;
```

Text, auf den dies angewendet wird, schrumpft so, dass er in seine umgebende Box passt. Er wird jedoch nicht auf weniger als 50 % seiner ursprünglichen `font-size` skaliert.

> [!NOTE]
> In vielen Situationen bewirkt der Zeilenumbruch, dass `text-fit: shrink` keine Wirkung hat: Die Wörter werden in neue Zeilen umgebrochen, statt verkleinert zu werden. In solchen Fällen müssen Sie den Umbruch beispielsweise mit dem Wert `nowrap` für {{cssxref("white-space")}} verhindern, um die Wirkung zu sehen. Das können Sie in unserem [grundlegenden Beispiel](#basic_text-fit_usage) beobachten.

### Festlegen, wie der Skalierungsfaktor auf mehrere Textzeilen angewendet wird

Standardmäßig werden bei einem Textknoten mit mehreren Zeilen alle Zeilen mit demselben Skalierungsfaktor skaliert. Der Skalierungsfaktor wird für jede Zeile einzeln berechnet; anschließend wird der kleinste Faktor auf alle Zeilen angewendet. In der Regel ist dieses Verhalten erwünscht, damit jede Zeile im gleichen Verhältnis wächst oder schrumpft.

Wenn Sie dieses Verhalten ändern möchten, können Sie nach dem ersten Schlüsselwort und vor dem Prozentwert, sofern vorhanden, einen zweiten Wert angeben. Sie können das Standardschlüsselwort `consistent` verwenden, das das zuvor beschriebene Verhalten beibehält, oder `per-line` beziehungsweise `per-line-all` angeben. Bei beiden werden die Zeilen des Textknotens mit ihren jeweils eigenen Skalierungsfaktoren skaliert. Der Unterschied: Bei `per-line` wird auf die letzte Zeile des Textknotens und auf Zeilen, die mit einem erzwungenen Umbruch enden (beispielsweise durch ein `<br>`-Element), keine Textskalierung angewendet. Bei `per-line-all` werden auch diese Zeilen skaliert.

Die folgende Deklaration vergrößert beispielsweise alle Zeilen eines Textknotens mit ihrem jeweils eigenen Skalierungsfaktor, sodass sie in die umgebende Box passen.

```css
text-fit: grow per-line-all;
```

Die folgende Deklaration dagegen verkleinert alle Zeilen eines Textknotens mit ihrem jeweils eigenen Skalierungsfaktor, sodass sie in die umgebende Box passen. Ausgenommen sind die letzte Zeile und Zeilen mit erzwungenem Umbruch; außerdem werden die Zeilen nicht auf weniger als `50%` der ursprünglichen `font-size` verkleinert.

```css
text-fit: shrink per-line 50%;
```

## Barrierefreiheit

Bei der Verwendung von `text-fit` müssen Designs sorgfältig bei unterschiedlichen Viewport-Größen getestet werden, damit die gerenderte Schriftgröße nicht zu klein (oder zu groß) wird. Andernfalls können Inhalte unleserlich werden, insbesondere für Menschen mit Sehbehinderungen oder bei schlechten Sichtverhältnissen.

Textinhalte sollten sich in jedem Fall ohne Verlust von Inhalten oder Funktionalität vergrößern lassen; siehe [WCAG-Erfolgskriterium 1.4.4: Textgröße ändern](https://w3c.github.io/wcag/guidelines/22/#resize-text).

Weiterführende Hinweise:

- [MDN: WCAG verstehen, Leitlinie 1.4: Benutzerinnen und Benutzern das Sehen und Hören von Inhalten erleichtern, einschließlich der Trennung von Vorder- und Hintergrund](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung von `text-fit`

Dieses Beispiel zeigt die grundlegende Verwendung von `text-fit`, um Textknoten zu vergrößern oder zu verkleinern, sodass sie in ihre Container passen.

#### HTML

Wir fügen zwei Textelemente ein, ein [`<h1>` und ein `<h2>`](/de/docs/Web/HTML/Reference/Elements/Heading_Elements), die in einem {{htmlelement("div")}} verschachtelt sind.

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

Außerdem fügen wir ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element hinzu, mit dem sich die Breite des Inhalts anpassen lässt, um eine sich ändernde Viewport-Breite zu simulieren. Das Range-Input und der zugehörige JavaScript-Code wurden der Kürze halber ausgeblendet.

#### CSS

Wir geben dem umgebenden `<div>` für {{cssxref("padding")}} den Wert `20px`, damit der Text etwas Platz hat.

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

Wir geben dem `<h1>` für `text-fit` den Wert `grow`, damit es den verfügbaren Inline-Platz seines Containers ausfüllt. Dem längeren `<h2>` geben wir für {{cssxref("white-space")}} den Wert `nowrap`. Dadurch bleibt es normalerweise vollständig in einer einzigen Zeile und läuft über seinen Container hinaus, statt umgebrochen zu werden, wenn es den Containerrand erreicht. Anschließend setzen wir dafür `text-fit: shrink`, damit es nicht überläuft, sondern so verkleinert wird, dass es in den verfügbaren Inline-Platz seines Containers passt.

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

Bewegen Sie den Schieberegler und beobachten Sie, wie das `<h1>` automatisch wächst, sodass es den verfügbaren Platz innerhalb seines übergeordneten `<div>` stets ausfüllt. Beachten Sie auch, wie das `<h2>` bei geringerer Breite schrumpft, sodass es den verfügbaren Platz innerhalb des `<div>` ausfüllt. Bei größeren Breiten, bei denen es in das `<div>` passt, behält es seine natürliche Breite bei.

Ohne `text-fit` würde das `<h1>` den verfügbaren Platz nicht ausfüllen und das `<h2>` würde bei geringerer Breite überlaufen.

### Prozentuale Grenzen für den Skalierungsfaktor festlegen

Dieses Beispiel ähnelt dem vorherigen sehr. Hier begrenzen wir jedoch mit `<percentage>`-Werten, wie stark die Überschriften wachsen oder schrumpfen können.

HTML und JavaScript sind mit dem vorherigen Beispiel identisch.

#### CSS

Wir geben dem `<h1>` für `text-fit` den Wert `grow 300%`, damit es den verfügbaren Inline-Platz seines Containers ausfüllt, jedoch höchstens auf 300 % seiner natürlichen `font-size` wächst:

```css live-sample___text-fit-percentages
h1 {
  text-fit: grow 300%;
}
```

Wir geben dem `<h2>` für {{cssxref("white-space")}} den Wert `nowrap`, damit es vollständig in einer einzigen Zeile bleibt und über seinen Container hinausläuft, statt umgebrochen zu werden, wenn es den Containerrand erreicht. Anschließend setzen wir dafür `text-fit: shrink 80%`, damit es nicht überläuft, sondern so verkleinert wird, dass es in den verfügbaren Inline-Platz seines Containers passt – bis hinunter auf `80%` seiner natürlichen `font-size`.

```css live-sample___text-fit-percentages
h2 {
  white-space: nowrap;
  text-fit: shrink 80%;
}
```

Dabei entsteht ein Problem: Wenn die `width` des `<div>` unter etwa `400px` sinkt, beginnt das `<h2>` über seinen Container hinauszulaufen. Um dies zu vermeiden, soll der Text ab diesem Punkt wieder normal in neue Zeilen umgebrochen werden. Dazu geben wir dem umgebenden `<div>` zunächst für {{cssxref("container-type")}} den Wert `inline-size`. So können wir mit [Container-Abfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries) CSS abhängig von seiner Breite gezielt anwenden.

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

Anschließend verwenden wir eine Container-Abfrage, um den `white-space`-Wert des `<h2>` auf `wrap` zu ändern, wenn die `width` des `<div>` unter `400px` sinkt:

```css live-sample___text-fit-percentages
@container (width < 400px) {
  h2 {
    white-space: wrap;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("text-fit-percentages","100%","320")}}

Bewegen Sie den Schieberegler. Beachten Sie, wie das `<h1>` automatisch wächst, sodass es den verfügbaren Platz innerhalb seines übergeordneten `<div>` ausfüllt – allerdings nur bis zu einer bestimmten Breite. Beachten Sie auch, wie das `<h2>` bei geringerer Breite schrumpft, sodass es den verfügbaren Platz innerhalb des `<div>` ausfüllt. Wenn das `<div>` schmaler als `400px` wird, greift die Container-Abfrage und wir setzen `white-space: wrap`. Dadurch beginnt das `<h2>`, sich auf mehrere Zeilen umzubrechen.

### Schlüsselwörter für das Skalierungsverhalten bei mehreren Zeilen demonstrieren

Dieses Beispiel zeigt, wie sich die Schlüsselwörter `consistent`, `per-line` und `per-line-all` in den `text-fit`-Werten verschiedener Absätze auswirken.

#### HTML

Das HTML enthält drei {{htmlelement("p")}}-Elemente mit demselben Platzhaltertext, denen jeweils unterschiedliche `id`-Werte zugewiesen sind:

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

Das HTML und JavaScript für den Schieberegler zur Anpassung der Breite sind ebenfalls in diesem Beispiel enthalten.

#### CSS

Wir geben jedem Absatz einen `text-fit`-Wert, bei dem das erste Schlüsselwort `grow` ist. Das zweite Schlüsselwort erhält jeweils einen anderen Wert: `consistent`, `per-line` beziehungsweise `per-line-all`.

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

Bewegen Sie den Schieberegler über den gesamten Bereich und achten Sie genau auf das Verhalten der einzelnen Absätze. Dabei sollten Sie Folgendes feststellen:

- Die Textzeilen des Absatzes mit `consistent` haben untereinander stets dieselbe `font-size`.
- Die Textzeilen des Absatzes mit `per-line` unterscheiden sich etwas in ihrer `font-size`. Bei geringerer Breite fällt das stärker auf. Die `font-size` der letzten Zeile wird nicht skaliert.
- Die Textzeilen des Absatzes mit `per-line-all` unterscheiden sich ebenfalls etwas in ihrer `font-size`, einschließlich der letzten Zeile. Das fällt besonders bei Breiten auf, bei denen nur ein oder zwei Wörter in die letzte Zeile umgebrochen werden.

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

- Modul [CSS-Text](/de/docs/Web/CSS/Guides/Text)
