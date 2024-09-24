---
title: <Überlauf>
slug: Web/CSS/overflow_value
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **`<overflow>`** {{glossary("Enumerated")}} Werttyp repräsentiert die Schlüsselwortwerte für die Langform-Eigenschaften {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}}, und {{cssxref("overflow-y")}} sowie die Kurzform-Eigenschaft {{cssxref("overflow")}}. Diese Eigenschaften gelten für Block-Container, Flex-Container und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der enumerierte Werttyp `<overflow>` wird durch einen der unten aufgeführten Werte angegeben.

- `visible`
  - : Überlaufender Inhalt ist nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Das Element-Box ist kein {{glossary("scroll container")}}. Dies ist der Standardwert für alle Eigenschaften, die den enumerierten Werttyp `<overflow>` haben.
- `hidden`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten. Es gibt keine Scrollleisten und der abgeschnittene Inhalt ist nicht sichtbar (d.h., der abgeschnittene Inhalt ist versteckt), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben Nutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie das Ziehen auf einem Touchscreen oder die Verwendung des Scroll-Rads einer Maus zu sehen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Setzen des Werts der {{domxref("Element.scrollLeft", "scrollLeft")}}-Eigenschaft oder der {{domxref("Element.scrollTo", "scrollTo()")}}-Methode). Der Inhalt kann auch über Tastaturinteraktion gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt und das Tabben zu einem fokussierbaren Element innerhalb des versteckten Inhalts ermöglicht das Scrollen des fokussierten Elements in den sichtbaren Bereich. Das Element-Box, auf dem dieser Wert eingestellt ist, ist ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements abgeschnitten, der mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin)-Eigenschaft definiert ist. Dadurch überläuft der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, wenn nicht festgelegt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleisten hinzu und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt.
- `scroll`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten und der überlaufende Inhalt kann durch Scrollleisten in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scrollleisten sowohl in horizontaler als auch in vertikaler Richtung an, wenn nur ein Wert festgelegt ist, unabhängig davon, ob ein Inhalt überläuft oder abgeschnitten ist. Die Verwendung dieses Schlüsselwortwerts kann daher verhindern, dass Scrollleisten verschwinden oder erscheinen, wenn sich der Inhalt ändert. Drucker können dennoch überlaufenden Inhalt drucken. Das Element-Box, auf dem dieser Wert eingestellt ist, ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten und der überlaufende Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_, wenn der Inhalt überläuft; standardmäßig werden Scrollleisten ausgeblendet. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es wie bei `visible` aus, erstellt jedoch dennoch einen neuen Formatierungskontext. Das Element-Box, auf dem dieser Wert eingestellt ist, ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein älterer Wertalias für `auto`. Mit `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beispiele

Dieses Beispiel zeigt alle `<overflow>`-enumerierten Werte für die {{cssxref("overflow")}}-Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält einige Songtexte innerhalb des {{HTMLELement("pre")}}-Elements. Das HTML enthält auch einen Link-Text, um die Auswirkungen des Tastaturfokus auf Überlauf- und Scrollverhalten zu testen. Der gleiche HTML-Code wird mehrfach wiederholt, um die Wirkung jedes `<overflow>`-enumerierten Werts zu zeigen.

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

Zum Zwecke der Demonstration wurde die Größe des `<pre>`-Element-Box so festgelegt, dass der Inhalt sowohl in der Zeilen- als auch in der Blockrichtung überläuft. Ein anderer `<overflow>`-Wert wird für jedes der wiederholten `<pre>`-Elemente gesetzt. Für die Demonstration des `clip`-Werts wurde ein {{CSSXref("overflow-clip-margin")}} hinzugefügt.

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
  content: "overlay (oder clip, falls nicht unterstützt): ";
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

Um den Effekt des Tastaturfokus auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, alle Links im Beispiel zu tabben. Beachten Sie, dass die `clip`-Box keinen Scroll-Container erstellt und der Link nicht in den sichtbaren Bereich eingeblendet wird, wenn der Link fokussiert ist. Der `visible`-Wert, der den Link immer im sichtbaren Bereich hat, ist ebenfalls kein Scroll-Container.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS Overflow Modul](/de/docs/Web/CSS/CSS_overflow)
