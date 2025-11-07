---
title: <overflow>
slug: Web/CSS/Reference/Values/overflow_value
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<overflow>`** {{Glossary("enumerated", "enumerierte")}} Wertetyp repräsentiert die Schlüsselwortwerte für die Langform-Eigenschaften {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}} und {{cssxref("overflow-y")}} sowie die Kurzform-Eigenschaft {{cssxref("overflow")}}. Diese Eigenschaften gelten für Block-Container, Flex-Container und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>`-Wertetyp wird unter Verwendung eines der unten aufgeführten Werte angegeben.

- `visible`
  - : Überlaufender Inhalt wird nicht abgeschnitten und kann außerhalb des Innen-Abstandsrahmens (padding box) des Elements sichtbar sein. Der Elementrahmen ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>`-Wertetyp verwenden.
- `hidden`
  - : Überlaufender Inhalt wird am Innen-Abstandsrahmen des Elements abgeschnitten. Es gibt keine Scroll-Leisten, und der abgeschnittene Inhalt ist nicht sichtbar (d. h. abgeschnittener Inhalt ist versteckt), aber der Inhalt existiert trotzdem. Benutzeragenten fügen keine Scroll-Leisten hinzu und erlauben Benutzern nicht, den Inhalt außerhalb des abgeschnittenen Bereichs durch Aktionen wie Ziehen auf einem Touchscreen oder die Verwendung des Scroll-Rads einer Maus anzuzeigen. Der Inhalt _kann_ programmgesteuert gescrollt werden (zum Beispiel durch Festlegen des `scrollLeft`-Werts der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft)-Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo)-Methode). Der Inhalt kann auch über Tastaturinteraktion gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt und das Tabben zu einem fokussierbaren Element innerhalb des versteckten Inhalts ermöglicht das Scrollen des fokussierten Elements in den sichtbaren Bereich. Der Elementrahmen, auf den dieser Wert gesetzt wird, ist ein Scroll-Container.
- `clip`
  - : Überlaufender Inhalt wird an der _Überlauf-Clip-Kante_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin)-Eigenschaft definiert wird. Infolgedessen überläuft der Inhalt den Innen-Abstandsrahmen des Elements um den {{cssxref("&lt;length&gt;")}}-Wert von `overflow-clip-margin` oder um `0px`, falls nicht gesetzt. Überlaufender Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keine Scroll-Leiste hinzu, und auch programmgesteuertes Scrollen wird nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt.
- `scroll`
  - : Überlaufender Inhalt wird am Innen-Abstandsrahmen des Elements abgeschnitten und kann mittels Scroll-Leisten in den sichtbaren Bereich gescrollt werden. Benutzeragenten zeigen Scroll-Leisten sowohl in horizontaler als auch in vertikaler Richtung an, wenn nur ein Wert gesetzt ist, unabhängig davon, ob ein Inhalt überläuft oder abgeschnitten wird. Die Verwendung dieses Schlüsselwortwertes kann daher verhindern, dass Scroll-Leisten erscheinen und verschwinden, während sich der Inhalt ändert. Drucker können dennoch den überlaufenden Inhalt drucken. Der Elementrahmen, auf den dieser Wert gesetzt wird, ist ein Scroll-Container.
- `auto`
  - : Überlaufender Inhalt wird am Innen-Abstandsrahmen des Elements abgeschnitten und kann in den sichtbaren Bereich gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten Scroll-Leisten _nur dann_ an, wenn der Inhalt überläuft, und verstecken die Scroll-Leisten standardmäßig. Wenn der Inhalt innerhalb des Innen-Abstandsrahmens des Elements passt, sieht es aus wie bei `visible`, etabliert jedoch immer noch einen neuen Formatierungskontext. Der Elementrahmen, auf den dieser Wert gesetzt wird, ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veralteter Wertalias für `auto`. Bei Verwendung von `overlay` werden die Scroll-Leisten oben auf dem Inhalt gezeichnet anstatt Platz einzunehmen.

## Beispiele

Dieses Beispiel demonstriert alle `<overflow>`-Werte für die {{cssxref("overflow")}}-Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält Liedtexte innerhalb des {{HTMLELement("pre")}}-Elements. Das HTML enthält auch einen Linktext, um die Effekte von Tastaturfokus auf Überlauf- und Scrollverhalten zu testen. Der gleiche HTML-Code wird mehrmals wiederholt, um den Effekt jedes `<overflow>`-Werts zu zeigen.

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

Zum Zweck der Demonstration wurde die Größe des `<pre>`-Elementrahmens definiert, um sicherzustellen, dass der Inhalt in beiden Inline- und Blockrichtungen seinen Container überläuft. Für jedes der wiederholten `<pre>`-Elemente wird ein anderer `<overflow>`-Wert gesetzt. Für die Demonstration des `clip`-Wertes wurde ein {{CSSXref("overflow-clip-margin")}} hinzugefügt.

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

Um den Effekt des Tastaturfokus auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, durch alle Links im Beispiel zu tabben. Beachten Sie, dass das `clip`-Feld keinen Scroll-Container erstellt und der Link nicht sichtbar wird, wenn er fokussiert ist. Der `visible`-Wert, bei dem der Link immer sichtbar ist, ist ebenfalls kein Scroll-Container.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS-Überlauf-Modul](/de/docs/Web/CSS/CSS_overflow)
