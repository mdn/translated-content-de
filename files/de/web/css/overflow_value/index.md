---
title: <overflow>
slug: Web/CSS/overflow_value
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Der _**`<overflow>`**_ {{Glossary("enumerated", "aufgezählte")}} Wertetyp repräsentiert die Schlüsselwortwerte für die {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} Langform-Eigenschaften und die {{cssxref("overflow")}} Kurzform-Eigenschaft. Diese Eigenschaften gelten für Block-Container, Flex-Container und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>` aufgezählte Wertetyp wird durch einen der unten aufgeführten Werte angegeben.

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Box des Elements sichtbar sein. Die Elementbox ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>` aufgezählten Wertetyp haben.
- `hidden`
  - : Überlaufender Inhalt wird am Padding-Box des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d. h., der abgeschnittene Inhalt ist verborgen), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollleisten hinzu und erlauben es den Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads einer Maus zu sehen. Der Inhalt _kann_ programmatisch gescrollt werden (zum Beispiel durch Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode). Der Inhalt kann auch über Tastatur-Interaktion gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt, und das Tabben zu einem fokussierbaren Element innerhalb des versteckten Inhalts ermöglicht es, das fokussierte Element in den Sichtbereich zu scrollen. Die Elementbox, auf die dieser Wert gesetzt ist, ist ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird am _overflow clip edge_ des Elements abgeschnitten, definiert mit der [`overflow-clip-margin`](/de/docs/Web/CSS/overflow-clip-margin) Eigenschaft. Dadurch überläuft der Inhalt die Padding-Box des Elements um den {{cssxref("&lt;length&gt;")}} Wert der `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scrollleiste hinzu, und programmatisches Scrollen wird ebenfalls nicht unterstützt. Kein neues [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) wird erstellt.
- `scroll`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann mithilfe von Scrollleisten in den Sichtbereich gescrollt werden. Benutzeragenten zeigen in beiden horizontalen und vertikalen Richtungen Scrollleisten an, wenn nur ein Wert festgelegt ist, unabhängig davon, ob Inhalt überläuft oder abgeschnitten wird. Die Verwendung dieses Schlüsselwortwertes kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können weiterhin überlaufenden Inhalt drucken. Die Elementbox, auf die dieser Wert gesetzt ist, ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten, und überlaufender Inhalt kann in den Sichtbereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scrollleisten _nur dann_ an, wenn der Inhalt überläuft, und verbergen Scrollleisten standardmäßig. Wenn der Inhalt in die Padding-Box des Elements passt, sieht es genauso aus wie bei `visible`, aber es wird weiterhin ein neuer Formatierungskontext erstellt. Die Elementbox, auf die dieser Wert gesetzt ist, ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Wert-Alias für `auto`. Bei `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Beispiele

Dieses Beispiel demonstriert alle `<overflow>` aufgezählten Werte für die {{cssxref("overflow")}} Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält einige Liedtexte innerhalb des {{HTMLElement("pre")}} Elements. Das HTML enthält auch einen Link-Text, um die Auswirkungen des Tastaturfokus auf Überlauf- und Scrollverhalten zu testen. Der gleiche HTML-Code wird mehrmals wiederholt, um den Effekt jedes `<overflow>` aufgezählten Wertes zu zeigen.

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

Zum Zweck der Demonstration wurde die Größe der `<pre>` Elementbox definiert, um sicherzustellen, dass der Inhalt in beide Richtungen des Containers überläuft, sowohl inline als auch block. Ein unterschiedlicher `<overflow>` Wert ist für jedes wiederholte `<pre>` Element gesetzt. Für die `clip` Wert-Demonstration wurde ein {{CSSXref("overflow-clip-margin")}} hinzugefügt.

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

Um die Wirkung des Tastaturfokus auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, durch alle Links im Beispiel zu tabben. Beachten Sie, dass die `clip` Box keinen Scroll-Container erstellt und der Link nicht in den Sichtbereich kommt, wenn der Link fokussiert ist. Der `visible` Wert, bei dem der Link immer im Sichtbereich ist, ist auch kein Scroll-Container.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS overflow Modul](/de/docs/Web/CSS/CSS_overflow)
