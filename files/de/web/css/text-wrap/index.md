---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`text-wrap`** CSS-Kurzschreibweise steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, beispielsweise ausgewogenere Zeilenlängen bei gebrochenen Überschriften
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

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `text-wrap`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen in Sprachen wie Englisch, die Leerzeichen als Trennzeichen verwenden) umgebrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen umgebrochen. Er wird das enthaltene Element überlaufen, anstatt auf eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umgebrochen, dass die Anzahl der Zeichen auf jeder Zeile bestmöglich ausgeglichen wird, um die Layoutqualität und Lesbarkeit zu verbessern. Da das Zählen von Zeichen und das Ausgleichen über mehrere Zeilen rechnerisch anspruchsvoll ist, wird dieser Wert nur für Textblöcke unterstützt, die sich über eine begrenzte Anzahl von Zeilen erstrecken (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass der Benutzeragent einen langsameren Algorithmus verwendet, der ein besseres Layout über die Geschwindigkeit bevorzugt. Dies ist für Fließtext vorgesehen, bei dem gute Typografie über der Leistung steht (zum Beispiel, wenn die Anzahl der [Waise](/de/docs/Web/CSS/orphans) minimiert werden soll).
- `stable`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen vor den bearbeiteten Zeilen statisch bleiben, anstatt dass der gesamte Textblock neu umgebrochen wird.

## Beschreibung

Es gibt 2 Wege, wie Text innerhalb eines Inhaltsblocks, wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), über Zeilen fließen kann. Dies sind _erzwungene Zeilenumbrüche_, die vom Benutzer gesteuert werden, und _weiche Zeilenumbrüche_, die vom Browser gesteuert werden. Die `text-wrap`-Eigenschaft kann verwendet werden, um den Browser zu veranlassen, wie die _weichen Zeilenumbrüche_ zu steuern sind.

Der gewählte Wert für `text-wrap` hängt davon ab, wie viele Textzeilen Sie planen zu formatieren, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestaltete Inhalt auf eine kurze Anzahl von Zeilen beschränkt ist, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der durch diese Eigenschaft beeinflussten Zeilen beschränken, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung bei der Verwendung auf Inhalten, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorhergehenden Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegender Vergleich von Textumbruchwerten

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

Der Text im Beispiel ist editierbar. Ändern Sie den Text, indem Sie lange Wörter hinzufügen, um zu sehen, wie die verschiedenen Zeilen- und Wortlängen den Umbruch beeinflussen.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS-Textmodul](/de/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com
