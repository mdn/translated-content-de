---
title: <overflow>
slug: Web/CSS/overflow_value
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der **`<overflow>`** [aufgezählte](/de/docs/Glossary/enumerated) Werttyp repräsentiert die Schlüsselwortwerte für die {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}}, und {{cssxref("overflow-y")}} Langform-Eigenschaften und die {{cssxref("overflow")}} Kurzform-Eigenschaft. Diese Eigenschaften gelten für Block-Container, Flex-Container und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>` aufgezählte Werttyp wird mit einem der unten aufgeführten Werte angegeben.

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Box-Elements sichtbar sein. Die Elementbox ist kein [Scroll-Container](/de/docs/Glossary/scroll_container). Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>` aufgezählten Werttyp haben.
- `hidden`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. abgeschnittener Inhalt ist versteckt), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs zu sehen, z.B. durch Ziehen auf einem Touchscreen oder mit dem Scrollrad einer Maus. Der Inhalt _kann_ programmgesteuert gescrollt werden (z.B. durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode). Der Inhalt kann auch über Tastaturinteraktionen gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt und das Tabben zu einem fokussierbaren Element innerhalb des versteckten Inhalts ermöglicht es, das fokussierte Element in den sichtbaren Bereich zu scrollen. Die Elementbox, auf der dieser Wert gesetzt ist, ist ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlauf-Clip-Kante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft definiert wird. Infolgedessen überschreitet der Inhalt die Padding-Box des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keinen Scrollbalken hinzu, und auch programmgesteuertes Scrollen wird nicht unterstützt. Kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) wird erstellt.
- `scroll`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann mit Scrollleisten in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scrollleisten in horizontaler und vertikaler Richtung an, wenn nur ein Wert festgelegt ist, unabhängig davon, ob Inhalt überläuft oder abgeschnitten wird. Die Verwendung dieses Schlüsselwortwertes kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können dennoch überlaufenden Inhalt drucken. Die Elementbox, auf der dieser Wert gesetzt ist, ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft und verstecken Scrollleisten standardmäßig. Wenn der Inhalt in die Padding-Box des Elements passt, sieht es genauso aus wie bei `visible`, etabliert aber dennoch einen neuen Formatierungskontext. Die Elementbox, auf der dieser Wert gesetzt ist, ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Alias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beispiele

Dieses Beispiel demonstriert alle `<overflow>` aufgezählten Werte für die {{cssxref("overflow")}} Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält einige Texte innerhalb des {{HTMLELement("pre")}} Elements. Das HTML enthält auch einen Linktext, um die Auswirkungen von Tastaturfokus auf Überlauf- und Scrollverhalten zu testen. Der gleiche HTML-Code wird mehrmals wiederholt, um die Wirkung jedes `<overflow>` aufgezählten Werts zu zeigen.

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

Für Demonstrationszwecke wurde die Größe der `<pre>` Elementbox so definiert, dass der Inhalt in beiden Richtungen des Containers überläuft. Ein anderer `<overflow>` Wert wird für jedes der wiederholenden `<pre>` Elemente gesetzt. Für die Demonstration des `clip` Werts wurde eine {{CSSXref("overflow-clip-margin")}} hinzugefügt.

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

Um die Auswirkungen von Tastaturfokus auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, durch alle Links im Beispiel zu tabben. Beachten Sie, dass die `clip`-Box keinen Scroll-Container erstellt und der Link nicht sichtbar wird, wenn der Fokus auf ihn gesetzt wird. Der Wert `visible`, bei dem der Link immer sichtbar ist, ist ebenfalls kein Scroll-Container.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS Overflow Module](/de/docs/Web/CSS/CSS_overflow)
