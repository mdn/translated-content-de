---
title: <overflow>
slug: Web/CSS/overflow_value
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Der **`<overflow>`** {{Glossary("enumerated", "Aufzählungstyp")}} stellt die Schlüsselwortwerte für die Langform-Eigenschaften {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} sowie die Kurzform-Eigenschaft {{cssxref("overflow")}} dar. Diese Eigenschaften gelten für Block-Container, Flex-Container und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>` Aufzählungstyp wird mit einem der unten aufgeführten Werte angegeben.

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Padding-Bereichs des Elements sichtbar sein. Das Element ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>` Aufzählungstyp haben.
- `hidden`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten. Es gibt keine Scrollleisten, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist verborgen), aber der Inhalt existiert weiterhin. User Agents fügen keine Scrollleisten hinzu und erlauben den Nutzern nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder Verwenden des Scrollrads einer Maus zu betrachten. Der Inhalt _kann_ programmgesteuert gescrollt werden (z.B. durch das Setzen des Werts der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode). Der Inhalt kann auch über Tastaturinteraktionen gescrollt werden; Pfeiltasten ermöglichen das Scrollen durch den Inhalt und das Tabben zu einem fokussierbaren Element im verborgenen Inhalt ermöglicht das Scrollen des fokussierten Elements in Sichtweite. Das Element, auf dem dieser Wert gesetzt ist, ist ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _Overflow-Clipping-Kante_ des Elements abgeschnitten, die durch die Eigenschaft [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin) definiert wird. Infolgedessen überschreitet der Inhalt den Padding-Bereich des Elements um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, falls nicht festgelegt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, User Agents fügen keine Scrollleiste hinzu, und programmgesteuertes Scrollen wird ebenfalls nicht unterstützt. Kein neues [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) wird erstellt.
- `scroll`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, und der Inhalt kann durch Scrollleisten in Sichtweite gescrollt werden. User Agents zeigen Scrollleisten in beiden Richtungen an, horizontal und vertikal, unabhängig davon, ob Inhalt überläuft oder abgeschnitten ist. Die Verwendung dieses Schlüsselwortwerts kann daher verhindern, dass Scrollleisten erscheinen und verschwinden, wenn sich der Inhalt ändert. Drucker können überlaufenden Inhalt dennoch drucken. Das Element, auf dem dieser Wert gesetzt ist, ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Padding-Bereich des Elements abgeschnitten, und der Inhalt kann in Sichtweite gescrollt werden. Im Gegensatz zu `scroll` zeigen User Agents Scrollleisten _nur dann_, wenn der Inhalt überläuft, und lassen die Scrollleisten standardmäßig verborgen. Wenn der Inhalt in den Padding-Bereich des Elements passt, sieht es genauso aus wie bei `visible`, erstellt jedoch dennoch einen neuen Formatierungskontext. Das Element, auf dem dieser Wert gesetzt ist, ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Alias für `auto`. Mit `overlay` werden die Scrollleisten über dem Inhalt gezeichnet, anstatt Platz einzunehmen.

## Beispiele

Dieses Beispiel demonstriert alle `<overflow>` Aufzählungswerte für die {{cssxref("overflow")}} Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält einige Liedtexte im {{HTMLELement("pre")}} Element. Das HTML enthält auch einen Linktext, um die Auswirkungen von Tastaturfokus auf Überlauf- und Scrollverhalten zu testen. Der gleiche HTML-Code wird mehrfach wiederholt, um den Effekt jedes `<overflow>` Aufzählungswerts zu zeigen.

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

Zum Zweck der Demonstration wurde die Größe des `<pre>` Elementbox definiert, um sicherzustellen, dass der Inhalt in beiden Richtungen, inline und block, den Container überläuft. Ein anderer `<overflow>` Wert wird für jedes der wiederholten `<pre>` Elemente gesetzt. Für die Demonstration des `clip` Werts wurde ein {{CSSXref("overflow-clip-margin")}} hinzugefügt.

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

Um die Wirkung des Tastaturfokus auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, durch alle Links im Beispiel zu tabben. Beachten Sie, dass die `clip` Box keinen Scroll-Container erstellt und der Link nicht in Sichtweite kommt, wenn der Link fokussiert ist. Der `visible` Wert, bei dem der Link immer in Sicht ist, ist ebenfalls kein Scroll-Container.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS Overflow-Modul](/de/docs/Web/CSS/CSS_overflow)
