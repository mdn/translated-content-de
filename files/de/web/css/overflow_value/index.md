---
title: <overflow>
slug: Web/CSS/overflow_value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<overflow>`** {{Glossary("enumerated", "aufgezählte")}} Wertetyp repräsentiert die Schlüsselwortwerte für die Eigenschaften {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} sowie die Kurzform-Eigenschaft {{cssxref("overflow")}}. Diese Eigenschaften gelten für Block-Container, Flex-Container und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>` aufgezählte Wertetyp wird mit einem der unten aufgeführten Werte angegeben.

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Polsterungsrahmens des Elements sichtbar sein. Das Elementfeld ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>` aufgezählten Wertetyp haben.
- `hidden`
  - : Überlaufender Inhalt wird am Polsterungsrahmen des Elements abgeschnitten. Es gibt keine Scrollleisten und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist versteckt), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben es den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads an einer Maus anzuzeigen. Der Inhalt _kann_ programmatisch gescrollt werden (zum Beispiel durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode). Der Inhalt kann auch über Tastaturinteraktionen gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt, und das Tabben zu einem fokussierbaren Element innerhalb des verborgenen Inhalts ermöglicht das Scrollen des fokussierten Elements in den sichtbaren Bereich. Das Elementfeld, auf dem dieser Wert gesetzt ist, ist ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlauf-Abschneidekante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert wird. Dadurch überlagert der Inhalt den Polsterungsrahmen des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht eingestellt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu und programmatisches Scrollen wird ebenfalls nicht unterstützt. Kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) wird erstellt.
- `scroll`
  - : Überlaufender Inhalt wird am Polsterungsrahmen des Elements abgeschnitten, und überlaufender Inhalt kann mit Hilfe von Scrollleisten in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scrollleisten in beiden Richtungen – horizontal und vertikal – an, wenn nur ein Wert gesetzt ist, unabhängig davon, ob Inhalt überläuft oder abgeschnitten ist. Die Verwendung dieses Schlüsselwortwertes kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können überlaufenden Inhalt dennoch drucken. Das Elementfeld, auf dem dieser Wert gesetzt ist, ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Polsterungsrahmen des Elements abgeschnitten, und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft, und verstecken Scrollleisten standardmäßig. Wenn der Inhalt in den Polsterungsrahmen des Elements passt, sieht es genauso aus wie bei `visible`, aber es wird trotzdem ein neuer Formatierungskontext erstellt. Das Elementfeld, auf dem dieser Wert gesetzt ist, ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Wertalias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beispiele

Dieses Beispiel demonstriert alle aufgezählten `<overflow>`-Werte für die {{cssxref("overflow")}}-Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält einige Songtexte im {{HTMLELement("pre")}}-Element. Das HTML enthält auch einen Linktext, um die Effekte des Tastaturfokus auf Überlauf- und Scrollverhalten zu testen. Der gleiche HTML-Code wird mehrfach wiederholt, um die Wirkung jedes `<overflow>` aufgezählten Wertes zu zeigen.

```html
<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>
```

```html hidden
<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>

<pre>&nbsp;
Oh, Rubber Duckie, you're the one
You make bath time lots of fun
Rubber Duckie, I'm awfully fond of you

Rubber Duckie, joy of joys
When I squeeze you, you make noise
Rubber Duckie, you're my very best friend, it's true

Oh, every day when I make my way to the tubby
I find a little fella who's cute and yellow and chubby
Rub-a-dub-dubby

<a href="#">Rubber Duckie</a>, you're so fine
And I'm lucky that you're mine
Rubber Duckie, I'm awfully fond of you
</pre>
```

### CSS

Zum Zwecke der Demonstration wurde die Größe des `<pre>`-Elementfeldes definiert, um sicherzustellen, dass der Inhalt sowohl in Inline- als auch in Blockrichtungen sein Container überläuft. Ein anderer `<overflow>`-Wert wird für jedes der sich wiederholenden `<pre>`-Elemente festgelegt. Für die Demonstration des `clip`-Wertes wurde ein {{CSSXref("overflow-clip-margin")}} hinzugefügt.

```css hidden
pre {
  border: 2px dashed red;
  margin-bottom: 3em;
}

::before {
  font-weight: bold;
  color: white;
  background: crimson;
  display: inline-block;
  width: 100%;
  padding: 3px 5px;
  box-sizing: border-box;
}
```

```css
pre {
  block-size: 100px;
  inline-size: 295px;
}

pre:nth-of-type(1) {
  overflow: hidden;
}
pre:nth-of-type(1)::before {
  content: "hidden: ";
}

pre:nth-of-type(2) {
  overflow: clip;
  overflow-clip-margin: 1em;
}
pre:nth-of-type(2)::before {
  content: "clip: ";
}

pre:nth-of-type(3) {
  overflow: scroll;
}
pre:nth-of-type(3)::before {
  content: "scroll: ";
}

pre:nth-of-type(4) {
  overflow: auto;
}
pre:nth-of-type(4)::before {
  content: "auto: ";
}

pre:nth-of-type(5) {
  overflow: clip;
  overflow: overlay;
  overflow-clip-margin: 3em;
}
pre:nth-of-type(5)::before {
  content: "overlay (or clip if not supported): ";
}

pre:nth-of-type(6) {
  overflow: visible;
}
pre:nth-of-type(6)::before {
  content: "visible: ";
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "500", "800")}}

Um die Wirkung des Tastaturfokus auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, alle Links im Beispiel durchzutaben. Beachten Sie, dass das `clip`-Feld keinen Scroll-Container erstellt und der Link nicht in den sichtbaren Bereich kommt, wenn der Link fokussiert ist. Der `visible`-Wert, bei dem der Link immer im sichtbaren Bereich ist, ist ebenfalls kein Scroll-Container.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS-Überlaufmodul](/de/docs/Web/CSS/CSS_overflow)
