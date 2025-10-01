---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Die **`text-wrap`** [CSS](/de/docs/Web/CSS) Kurzschreibweise steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, zum Beispiel durch ausgewogenere Zeilenlängen bei gebrochenen Überschriften.
- Eine Möglichkeit, den Textumbruch vollständig zu deaktivieren.

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

## Bestandteileigenschaften

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

Die `text-wrap` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der Liste der untenstehenden Werte ausgewählt wird.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen, in Sprachen wie Englisch, die Leerzeichen als Trennzeichen verwenden) auf Zeilen umgebrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht auf Zeilen umgebrochen. Er wird sein enthaltendes Element überlaufen, anstatt in eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen pro Zeile am besten ausbalanciert ist, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und das Ausbalancieren über mehrere Zeilen hinweg rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger in Chromium und zehn oder weniger in Firefox).
- `pretty`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass das Benutzeragent eine langsamere Algorithmus verwendet, der ein besseres Layout gegenüber Geschwindigkeit bevorzugt. Dies ist für fortlaufenden Text gedacht, bei dem gute Typografie über Leistung bevorzugt wird (zum Beispiel, wenn die Anzahl der [Waise](/de/docs/Web/CSS/orphans) minimiert werden sollte).
- `stable`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen, die vor den bearbeiteten Zeilen kommen, stabil bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt 2 Möglichkeiten, wie Text innerhalb eines Inhaltsblocks, wie eines Absatzes ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}) umgebrochen werden kann. Diese sind _erzwungene Zeilenumbrüche_, die vom Benutzer gesteuert werden, und _weiche Zeilenumbrüche_, die vom Browser gesteuert werden. Die `text-wrap` Eigenschaft kann verwendet werden, um dem Browser zu signalisieren, wie die _weichen Zeilenumbrüche_ gesteuert werden sollen.

Der von Ihnen gewählte Wert für `text-wrap` hängt davon ab, wie viele Zeilen Text Sie erwarten zu gestalten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt wird, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der durch diese Eigenschaft betroffenen Zeilen einschränken, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` sich negativ auf die Leistung auswirkt und daher nur bei längeren Textblöcken verwendet werden sollte, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der `stable` Wert verbessert die Benutzererfahrung, wenn er auf [editierbare Inhalte](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) angewendet wird. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegender Vergleich der `text-wrap` Werte

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

Der Text im Beispiel ist editierbar. Ändern Sie den Text und fügen Sie lange Wörter hinzu, um zu sehen, wie sich die unterschiedlichen Zeilen- und Wortlängen auf den Umbruch auswirken.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com (2023)
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com (2023)
- [Balancing Japanese and Korean typography](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) von Kelly Choyce-Dwan (2025)
