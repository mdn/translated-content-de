---
title: <overflow>
slug: Web/CSS/Reference/Values/overflow_value
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Der **`<overflow>`** {{Glossary("enumerated", "aufzählbare")}} Werttyp repräsentiert die Schlüsselwortwerte für die {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} Langform-Eigenschaften sowie die {{cssxref("overflow")}} Kurzform-Eigenschaft. Diese Eigenschaften gelten für Blockcontainer, Flexcontainer und Rastercontainer.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>` aufzählbare Werttyp wird durch einen der unten aufgeführten Werte spezifiziert.

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Rahmens des Elements sichtbar sein. Das Elementfeld ist kein {{Glossary("scroll_container", "Scrollcontainer")}}. Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>` aufzählbaren Werttyp haben.
- `hidden`
  - : Überlaufender Inhalt wird am Padding-Rahmen des Elements abgeschnitten. Es gibt keine Bildlaufleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist verborgen), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Bildlaufleisten hinzu und erlauben es auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Mausrads zu sehen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel, indem der Wert der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode gesetzt wird). Der Inhalt kann auch über Tastaturinteraktionen gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt und das Fokussieren eines fokussierbaren Elements innerhalb des verborgenen Inhalts ermöglicht es, das fokussierte Element ins Sichtfeld zu scrollen. Das Elementfeld, auf dem dieser Wert gesetzt ist, ist ein Scrollcontainer.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlaufabschnittränder_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin) Eigenschaft definiert wird. Dadurch überläuft der Inhalt den Padding-Rahmen des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn er nicht gesetzt ist. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Bildlaufleiste hinzu, und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) wird erstellt.
- `scroll`
  - : Überlaufender Inhalt wird am Padding-Rahmen des Elements abgeschnitten, und überlaufender Inhalt kann mithilfe von Bildlaufleisten ins Sichtfeld gescrollt werden. Benutzeragenten zeigen Bildlaufleisten in sowohl horizontaler als auch vertikaler Richtung an, wenn nur ein Wert gesetzt ist, unabhängig davon, ob Inhalt überläuft oder abgeschnitten ist. Die Verwendung dieses Schlüsselwortwerts kann daher verhindern, dass Bildlaufleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können dennoch überlaufenden Inhalt drucken. Das Elementfeld, auf dem dieser Wert gesetzt ist, ist ein Scrollcontainer.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Rahmen des Elements abgeschnitten, und überlaufender Inhalt kann ins Sichtfeld gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Bildlaufleisten _nur dann an_, wenn der Inhalt überläuft, und verbergen Bildlaufleisten standardmäßig. Wenn der Inhalt in den Padding-Rahmen des Elements passt, sieht es genauso aus wie mit `visible`, aber es wird dennoch ein neuer Formatierungskontext erstellt. Das Elementfeld, auf dem dieser Wert gesetzt ist, ist ein Scrollcontainer.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Bildlaufleisten auf dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beispiele

Dieses Beispiel zeigt alle `<overflow>` aufzählbaren Werte für die {{cssxref("overflow")}} Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält einige Liedtexte innerhalb des {{HTMLELement("pre")}} Elements. Das HTML enthält auch einen Linktext, um die Auswirkungen der Tastaturfokussierung auf Überlauf- und Scrollverhalten zu testen. Der gleiche HTML-Code wird mehrfach wiederholt, um die Wirkung jedes `<overflow>` aufzählbaren Werts zu demonstrieren.

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

Für Demonstrationszwecke wurde die Größe des `<pre>` Elementfelds definiert, um sicherzustellen, dass der Inhalt seinen Container sowohl in Inline- als auch in Blockrichtung überläuft. Ein unterschiedlicher `<overflow>` Wert wird für jedes der sich wiederholenden `<pre>` Elemente gesetzt. Für die Demonstration des `clip` Werts wurde eine {{CSSXref("overflow-clip-margin")}} hinzugefügt.

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

Um die Auswirkungen der Tastaturfokussierung auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, alle Links im Beispiel zu durchlaufen. Beachten Sie, dass das `clip` Feld keinen Scrollcontainer erstellt und der Link nicht ins Sichtfeld kommt, wenn der Link fokussiert ist. Der `visible` Wert, bei dem der Link immer im Sichtfeld ist, ist ebenfalls kein Scrollcontainer.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow)
