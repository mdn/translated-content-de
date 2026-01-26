---
title: <overflow>
slug: Web/CSS/Reference/Values/overflow_value
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Der **`<overflow>`** {{Glossary("enumerated", "aufzählbare")}} Wertetyp repräsentiert die Schlüsselwortwerte für die {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} Langhand-Eigenschaften und die {{cssxref("overflow")}} Kurzschreibweise-Eigenschaft. Diese Eigenschaften gelten für Blockcontainer, Flexcontainer und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>` aufzählbare Wertetyp wird durch einen der unten aufgeführten Werte angegeben.

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scrollcontainer")}}. Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>` aufzählbaren Wertetyp haben.
- `hidden`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist versteckt), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollbars hinzu und erlauben Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie das Ziehen auf einem Touchscreen oder die Verwendung des Scrollrades auf einer Maus zu sehen. Der Inhalt _kann_ programmatisch gescrollt werden (zum Beispiel durch Einstellen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode). Der Inhalt kann auch über Tastaturinteraktionen gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt und das Übergehen zu einem fokussierbaren Element innerhalb des versteckten Inhalts ermöglicht das Scrollen des fokussierten Elements in den Blick. Die Elementbox, auf der dieser Wert gesetzt ist, ist ein Scrollcontainer.
- `clip`
  - : Überlaufender Inhalt wird am _Overflow-Clip-Rand_ des Elements abgeschnitten, der mit der {{cssxref("overflow-clip-margin")}} Eigenschaft definiert ist. Infolgedessen überläuft der Inhalt die Padding-Box des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, falls nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollbar hinzu, und auch programmatisches Scrollen wird nicht unterstützt. Kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) wird erstellt.
- `scroll`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann durch Scrollbars sichtbar gemacht werden. Benutzeragenten zeigen Scrollbars sowohl in horizontaler als auch in vertikaler Richtung an, wenn nur ein Wert festgelegt ist, unabhängig davon, ob Inhalt überläuft oder abgeschnitten ist. Die Verwendung dieses Schlüsselwortwerts kann daher verhindern, dass Scrollbars erscheinen und verschwinden, während sich der Inhalt ändert. Drucker können überlaufenden Inhalt trotzdem drucken. Die Elementbox, auf der dieser Wert gesetzt ist, ist ein Scrollcontainer.
- `auto`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann sicht gemacht werden. Anders als bei `scroll` zeigen Benutzeragenten Scrollbars _nur dann_ an, wenn der Inhalt überläuft, und verstecken Scrollbars standardmäßig. Wenn der Inhalt in die Padding-Box des Elements passt, sieht es genauso aus wie bei `visible`, aber es wird trotzdem ein neuer Formatierungskontext erstellt. Die Elementbox, auf der dieser Wert gesetzt ist, ist ein Scrollcontainer.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scrollbars über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Beispiele

Dieses Beispiel zeigt alle `<overflow>` aufzählbaren Werte für die {{cssxref("overflow")}} Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält einige Liedtexte innerhalb des {{HTMLELement("pre")}} Elements. Das HTML enthält auch einen Linktext, um das Testen der Auswirkungen des Tastaturfokus auf Überlauf- und Scrollverhalten zu ermöglichen. Der gleiche HTML-Code wird mehrfach wiederholt, um den Effekt jedes `<overflow>` aufzählbaren Werts zu zeigen.

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

Für Demonstrationszwecke wurde die Größe der `<pre>`-Elementbox definiert, um sicherzustellen, dass der Inhalt seinen Container in sowohl der Inline- als auch der Blockrichtung überläuft. Ein anderer `<overflow>` Wert wird für jedes der wiederholten `<pre>`-Elemente gesetzt. Für die Demonstration des `clip`-Wertes wurde ein {{CSSXref("overflow-clip-margin")}} hinzugefügt.

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

Um die Auswirkung des Tastaturfokus auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, durch alle Links im Beispiel zu tabben. Beachten Sie, dass die `clip`-Box keinen Scrollcontainer erstellt und der Link nicht in den Blick kommt, wenn der Link fokussiert ist. Der `visible`-Wert, der den Link immer in Sichtweite hat, ist ebenfalls kein Scrollcontainer.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow)
