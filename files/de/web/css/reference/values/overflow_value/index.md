---
title: "`<overflow>` CSS-Typ"
short-title: <overflow>
slug: Web/CSS/Reference/Values/overflow_value
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<overflow>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp repräsentiert die Schlüsselwortwerte für die Eigenschaften {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}}, und {{cssxref("overflow-y")}} sowie die Kurzschreibweise {{cssxref("overflow")}}. Diese Eigenschaften gelten für Block-Container, Flex-Container und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>`-Wertetyp wird durch eine der unten aufgeführten Werte angegeben.

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Box-Elements sichtbar sein. Das Element ist kein {{Glossary("scroll_container", "scroll container")}}. Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>`-Wertetyp haben.
- `hidden`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten. Es gibt keine Scroll-Leisten und der abgeschnittene Inhalt ist nicht sichtbar (d.h. abgeschnittener Inhalt ist verborgen), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scroll-Leisten hinzu und erlauben Benutzern auch nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads einer Maus darzustellen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Setzen des Werts der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode). Der Inhalt kann auch über Tastaturinteraktionen gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt und das Tabben zu einem fokussierbaren Element innerhalb des verborgenen Inhalts ermöglicht das Scrollen des fokussierten Elements in den sichtbaren Bereich. Das Element, auf das dieser Wert gesetzt wird, ist ein scroll container.
- `clip`
  - : Überlaufender Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der Eigenschaft {{cssxref("overflow-clip-margin")}} definiert wird. Dadurch überläuft der Inhalt die Padding-Box des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, falls nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scroll-Leiste hinzu und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Kein neuer [Geschäftskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) wird erstellt.
- `scroll`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten und überlaufender Inhalt kann mit Scroll-Leisten in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scroll-Leisten sowohl in horizontaler als auch in vertikaler Richtung an, wenn nur ein Wert gesetzt wird, unabhängig davon, ob Inhalt überläuft oder abgeschnitten ist. Die Verwendung dieses Schlüsselwortwerts kann daher verhindern, dass Scroll-Leisten beim Ändern des Inhalts angezeigt und ausgeblendet werden. Drucker können dennoch überlaufenden Inhalt drucken. Das Element, auf das dieser Wert gesetzt wird, ist ein scroll container.
- `auto`
  - : Überlaufender Inhalt wird an der Padding-Box des Elements abgeschnitten und überlaufender Inhalt kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scroll-Leisten _nur, wenn_ der Inhalt überläuft, und verstecken Scroll-Leisten standardmäßig. Wenn der Inhalt in die Padding-Box des Elements passt, sieht es wie bei `visible` aus, aber es wird dennoch ein neuer Geschäftskontext erstellt. Das Element, auf das dieser Wert gesetzt wird, ist ein scroll container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Mit `overlay` werden die Scroll-Leisten über dem Inhalt gezeichnet, anstatt Platz zu beanspruchen.

## Beispiele

Dieses Beispiel demonstriert alle `<overflow>`-Werte für die Eigenschaft {{cssxref("overflow")}}.

### HTML

Das HTML in diesem Beispiel enthält einige Texte innerhalb des {{HTMLELement("pre")}}-Elements. Das HTML enthält auch einen Linktext, um die Auswirkungen des Tastaturfokus auf Überlauf- und Scroll-Verhalten testen zu können. Der gleiche HTML-Code wird mehrmals wiederholt, um die Wirkung jedes `<overflow>`-Wertes zu zeigen.

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

Für Demonstrationszwecke wurde die Größe der `<pre>`-Elementbox so definiert, dass der Inhalt sowohl in der Inline- als auch in der Blockrichtung über seinen Container hinausläuft. Ein anderer `<overflow>`-Wert ist für jedes der wiederholten `<pre>`-Elemente gesetzt. Für die `clip`-Wert-Demonstration wurde ein {{CSSXRef("overflow-clip-margin")}} hinzugefügt.

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

Um die Wirkung des Tastaturfokus auf Überlauf- und Scroll-Verhalten zu sehen, versuchen Sie, durch alle Links im Beispiel zu tabben. Beachten Sie, dass die `clip`-Box keinen scroll container erstellt und der Link beim Fokussieren des Links nicht in den sichtbaren Bereich kommt. Der `visible`-Wert, bei dem der Link immer sichtbar ist, ist ebenfalls kein scroll container.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS-Overflow-Modul](/de/docs/Web/CSS/Guides/Overflow)
