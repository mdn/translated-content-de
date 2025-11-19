---
title: text-wrap
slug: Web/CSS/Reference/Properties/text-wrap
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`text-wrap`** [CSS](/de/docs/Web/CSS) Kurzschreibweise steuert, wie Text innerhalb eines Elements umbrochen wird. Die unterschiedlichen Werte bieten:

- Typografische Verbesserungen, zum Beispiel ausgewogenere Zeilenlängen bei unterbrochenen Überschriften
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
      <p contenteditable>
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

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`text-wrap-mode`](/de/docs/Web/CSS/Reference/Properties/text-wrap-mode)
- [`text-wrap-style`](/de/docs/Web/CSS/Reference/Properties/text-wrap-style)

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

Die `text-wrap` Eigenschaft wird als ein einzelnes Schlüsselwort angegeben, das aus der unten aufgeführten Liste von Werten ausgewählt wird.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen, in Sprachen wie Englisch, die Leerzeichen als Trenner verwenden) umbrochen, um Überläufe zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umbrochen. Er wird das enthaltende Element überlaufen, anstatt auf eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen pro Zeile am besten ausgeglichen wird, was die Gestaltungsqualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und deren Ausgleich über mehrere Zeilen rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke mit einer begrenzten Anzahl von Zeilen unterstützt (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zu demselben Verhalten wie `wrap`, mit dem Unterschied, dass der Benutzeragent einen langsameren Algorithmus verwendet, der eine bessere Layoutqualität über die Geschwindigkeit stellt. Dies ist für Fließtext gedacht, bei dem gute Typografie wichtiger ist als Leistung (zum Beispiel, wenn die Anzahl der [Waisenkinder](/de/docs/Web/CSS/Reference/Properties/orphans) möglichst gering gehalten werden soll).
- `stable`
  - : Führt zu demselben Verhalten wie `wrap`, mit dem Unterschied, dass beim Bearbeiten des Inhalts durch den Benutzer die Zeilen, die vor den zu bearbeitenden Zeilen liegen, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Arten, wie Text innerhalb eines Inhaltsblocks, wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), zeilenweise fließen kann. Dies sind _erzwungene Zeilenumbrüche_, die vom Benutzer kontrolliert werden, und _weiche Zeilenumbrüche_, die vom Browser kontrolliert werden. Die `text-wrap` Eigenschaft kann verwendet werden, um den Browser dazu zu veranlassen, die _weichen Zeilenumbrüche_ zu steuern.

Der gewählte Wert für `text-wrap` hängt davon ab, wie viele Zeilen Text Sie erwarten zu stylen, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine geringe Anzahl von Zeilen beschränkt ist, wie Überschriften, Bildunterschriften und Zitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen in jeder Zeile auszugleichen, was die Gestaltungsqualität und Lesbarkeit verbessert. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat, sodass es nur für längere Textblöcke verwendet werden sollte, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der `stable`-Wert verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer den Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegender Vergleich der Textumbruchswerte

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

Der Text im Beispiel ist bearbeitbar. Ändern Sie den Text und fügen Sie lange Wörter hinzu, um zu sehen, wie sich unterschiedliche Zeilen- und Wortlängen auf den Umbruch auswirken.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS-Textmodul](/de/docs/Web/CSS/Guides/Text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com (2023)
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com (2023)
- [Balancing Japanese and Korean typography](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) von Kelly Choyce-Dwan (2025)
