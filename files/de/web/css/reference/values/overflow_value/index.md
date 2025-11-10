---
title: <overflow>
slug: Web/CSS/Reference/Values/overflow_value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<overflow>`** {{Glossary("enumerated", "aufgezählte Wertetyp")}} repräsentiert die Schlüsselwortwerte für die Langhand-Eigenschaften {{cssxref("overflow-block")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-x")}}, und {{cssxref("overflow-y")}} sowie die Kurzform-Eigenschaft {{cssxref("overflow")}}. Diese Eigenschaften gelten für Block-Container, Flex-Container und Grid-Container.

## Syntax

```plain
<overflow> = visible | hidden | clip | scroll | auto
```

## Werte

Der `<overflow>` aufgezählte Wertetyp wird mit einem der unten aufgeführten Werte angegeben.

- `visible`
  - : Der Überlauf-Inhalt wird nicht abgeschnitten und kann außerhalb des Innenrandeslementbereichs sichtbar sein. Das Elemente-Rechteck ist kein {{Glossary("scroll_container", "Scroll-Container")}}. Dies ist der Standardwert für alle Eigenschaften, die den `<overflow>` aufgezählten Wertetyp haben.
- `hidden`
  - : Der Überlauf-Inhalt wird an der Innenkante des Elementen-Rechtecks abgeschnitten. Es gibt keine Scrollbalken, und der abgeschnittene Inhalt ist nicht sichtbar (d.h. der abgeschnittene Inhalt ist verborgen), aber der Inhalt existiert weiterhin. Benutzeragenten fügen keine Scrollbalken hinzu und ermöglichen es Benutzern nicht, den Inhalt außerhalb des abgeschnittenen Bereichs anzuzeigen. Der Inhalt _kann_ programmatisch gescrollt werden (zum Beispiel durch das Setzen des Wertes der [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) Eigenschaft oder der [`scrollTo()`](/de/docs/Web/API/Element/scrollTo) Methode). Der Inhalt kann auch über Tastaturinteraktion gescrollt werden; Pfeile ermöglichen das Scrollen durch den Inhalt, und das Tabbing zu einem fokussierbaren Element innerhalb des verborgenen Inhalts ermöglicht das Scrollen des fokussierten Elements ins Sichtfeld. Das Element-Box, auf das dieser Wert gesetzt wird, ist ein Scroll-Container.
- `clip`
  - : Der Überlauf-Inhalt wird an der _overflow clip edge_ des Elements abgeschnitten, die mit der [`overflow-clip-margin`](/de/docs/Web/CSS/Reference/Properties/overflow-clip-margin) Eigenschaft definiert ist. Dadurch überläuft der Inhalt das Innenrandelementbereich um den {{cssxref("&lt;length&gt;")}} Wert von `overflow-clip-margin` oder um `0px`, wenn nicht gesetzt. Der Überlauf-Inhalt außerhalb des abgeschnittenen Bereichs ist nicht sichtbar, Benutzeragenten fügen keinen Scrollbalken hinzu, und programmatisches Scrollen wird ebenfalls nicht unterstützt. Es wird kein neuer [Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt.
- `scroll`
  - : Der Überlauf-Inhalt wird an der Innenkante des Elementen-Rechtecks abgeschnitten, und Überlauf-Inhalt kann mit Scrollbalken ins Sichtfeld gescrollt werden. Benutzeragenten zeigen Scrollbalken sowohl in horizontaler als auch in vertikaler Richtung an, wenn nur ein Wert gesetzt ist, unabhängig davon, ob Inhalt überfließt oder abgeschnitten wird. Die Verwendung dieses Schlüsselwortwertes kann daher verhindern, dass Scrollbalken mit Änderungen des Inhalts erscheinen und verschwinden. Drucker können weiterhin überlaufenden Inhalt drucken. Das Elementen-Rechteck, auf dem dieser Wert gesetzt wird, ist ein Scroll-Container.
- `auto`
  - : Der Überlauf-Inhalt wird an der Innenkante des Elementen-Rechtecks abgeschnitten, und Überlauf-Inhalt kann ins Sichtfeld gescrollt werden. Im Gegensatz zu `scroll` zeigen Benutzeragenten nur dann Scrollbalken an, _wenn_ der Inhalt überfließt, und verbergen standardmäßig die Scrollbalken. Passt der Inhalt in das Elemente-Rechteck, sieht es wie `visible` aus, stellt jedoch weiterhin einen neuen Formatierungskontext bereit. Das Elementen-Rechteck, auf dem dieser Wert gesetzt wird, ist ein Scroll-Container.

> [!NOTE]
> Der Schlüsselwortwert `overlay` ist ein veraltetes Wertalias für `auto`. Mit `overlay` werden die Scrollbalken über dem Inhalt gezeichnet, anstatt Platz in Anspruch zu nehmen.

## Beispiele

Dieses Beispiel zeigt alle `<overflow>` aufgezählten Werte für die {{cssxref("overflow")}} Eigenschaft.

### HTML

Das HTML in diesem Beispiel enthält einige Liedtexte innerhalb des {{HTMLELement("pre")}} Elements. Das HTML enthält auch einen Linktext, um die Effekte des Tastaturfokus auf Überlauf- und Scrollverhalten zu testen. Der gleiche HTML-Code wird mehrfach wiederholt, um den Effekt jedes `<overflow>` aufgezählten Wertes zu zeigen.

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

Für Demonstrationszwecke wurde die Größe des `<pre>` Elementen-Rechtecks festgelegt, um sicherzustellen, dass der Inhalt sowohl in Inline- als auch in Blockrichtung über seinen Container hinausgeht. Ein anderer `<overflow>` Wert wird für jedes der wiederholten `<pre>` Elemente gesetzt. Für die Demonstration des `clip` Wertes wurde ein {{CSSXref("overflow-clip-margin")}} hinzugefügt.

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

Um den Effekt des Tastaturfokus auf Überlauf- und Scrollverhalten zu sehen, versuchen Sie, alle Links im Beispiel durchzutaben. Beachten Sie, dass das `clip` Rechteck keinen Scroll-Container erstellt und der Link nicht ins Sichtfeld kommt, wenn der Link fokussiert ist. Der `visible` Wert, bei dem der Link immer im Sichtfeld ist, ist ebenfalls kein Scroll-Container.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow-inline")}}, {{cssxref("overflow-block")}} und {{cssxref("overflow")}}
- [CSS-Überlaufmodul](/de/docs/Web/CSS/Guides/Overflow)
