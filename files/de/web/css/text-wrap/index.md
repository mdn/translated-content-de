---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{CSSRef}}

Die **`text-wrap`** CSS-Kurzschrift-Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, zum Beispiel ausgewogenere Zeilenlängen bei unterbrochenen Überschriften
- Eine Möglichkeit, den Textumbruch vollständig auszuschalten.

{{InteractiveExample("CSS Demo: text-wrap")}}

```css interactive-example-choice
text-wrap: wrap;
```

```css interactive-example-choice
text-wrap: nowrap;
```

```css interactive-example-choice
text-wrap: balance;
```

```css interactive-example-choice
text-wrap: pretty;
```

```css interactive-example-choice
text-wrap: stable;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Edit the text in the box:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut
        cum eum id quos est.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#example-element {
  border: 1px solid #c5c5c5;
  width: 250px;
}
```

## Zusammensetzende Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

- [`text-wrap-mode`](/de/docs/Web/CSS/text-wrap-mode)
- [`text-wrap-style`](/de/docs/Web/CSS/text-wrap-style)

## Syntax

```css
/* Keyword values */
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
text-wrap: pretty;
text-wrap: stable;

/* Global values */
text-wrap: inherit;
text-wrap: initial;
text-wrap: revert;
text-wrap: revert-layer;
text-wrap: unset;
```

Die `text-wrap` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der Liste der unten stehenden Werte ausgewählt wird.

### Werte

- `wrap`
  - : Der Text wird bei geeigneten Zeichen (zum Beispiel Leerzeichen in Sprachen wie Englisch, die Leerzeichentrennung verwenden) über Zeilen hinweg umbrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Der Text wird nicht über Zeilen hinweg umbrochen. Er überläuft sein enthaltendes Element, anstatt in eine neue Zeile zu brechen.
- `balance`
  - : Der Text wird so umbrochen, dass die Anzahl der Zeichen in jeder Zeile bestmöglich ausgeglichen wird, was die Layout-Qualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und das Ausbalancieren über mehrere Zeilen rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Resultiert im gleichen Verhalten wie `wrap`, außer dass der User-Agent einen langsameren Algorithmus verwendet, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typografie gegenüber der Leistung bevorzugt wird (zum Beispiel, wenn die Anzahl der [Waise](/de/docs/Web/CSS/orphans) minimiert werden soll).
- `stable`
  - : Resultiert im gleichen Verhalten wie `wrap`, außer dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen, die vor den bearbeiteten Zeilen liegen, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt 2 Möglichkeiten, wie Text innerhalb eines Inhaltsblocks, wie beispielsweise einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), über Zeilen hinweg fließen kann. Dies sind _erzwungene Zeilenumbrüche_, die vom Benutzer kontrolliert werden, und _weiche Zeilenumbrüche_, die vom Browser kontrolliert werden. Die `text-wrap` Eigenschaft kann verwendet werden, um dem Browser zu zeigen, wie die _weichen Zeilenumbrüche_ kontrolliert werden sollen.

Der Wert, den Sie für `text-wrap` wählen, hängt davon ab, wie viele Zeilen Text Sie zu gestalten erwarten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Zeilenanzahl beschränkt wird, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen in jeder Zeile auszugleichen, was die Layout-Qualität und Lesbarkeit verbessert. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Werts auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` eine negative Auswirkung auf die Leistung hat, daher sollte er nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger ist als die Geschwindigkeit.

Der `stable` Wert verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorherigen Zeilen im zu bearbeitenden Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegender Vergleich der Textumbruchwerte

#### HTML

```html
<h2 class="wrap" contenteditable="true">
  The default behavior; the text in the heading wraps "normally"
</h2>

<h2 class="nowrap" contenteditable="true">
  In this case the text in the heading doesn't wrap, and overflows the container
</h2>

<h2 class="balance" contenteditable="true">
  In this case the text in the heading is nicely balanced across lines
</h2>
```

### CSS

```css
.wrap {
  text-wrap: wrap;
}

.nowrap {
  text-wrap: nowrap;
}

.balance {
  text-wrap: balance;
}

h2 {
  font-size: 2rem;
  font-family: sans-serif;
}
```

#### Ergebnis

Der Text im Beispiel ist editierbar. Ändern Sie den Text und fügen Sie lange Wörter hinzu, um zu sehen, wie die unterschiedlichen Zeilen- und Wortlängen den Umbruch beeinflussen.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS-Textmodul](/de/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com (2023)
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com (2023)
- [Ausbalancierung der japanischen und koreanischen Typografie](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) von Kelly Choyce-Dwan (2025)
