---
title: text-wrap
slug: Web/CSS/Reference/Properties/text-wrap
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`text-wrap`** [CSS](/de/docs/Web/CSS) Kurzschrift-Eigenschaft kontrolliert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, wie zum Beispiel ausgewogenere Zeilenlängen über gebrochene Überschriften hinweg
- Eine Möglichkeit, den Textumbruch vollständig abzuschalten.

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

## Zugehörige Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

- {{cssxref("text-wrap-mode")}}
- {{cssxref("text-wrap-style")}}

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

Die `text-wrap` Eigenschaft wird als Schlüsselwort aus der folgenden Liste von Werten spezifiziert.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen, in Sprachen wie Englisch, die Leerzeichen als Trennzeichen verwenden) umgebrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen umbrochen. Er wird über sein enthaltendes Element hinausgehen, anstatt in eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen in jeder Zeile bestmöglich ausgeglichen wird, was die Layoutqualität und Lesbarkeit erhöht. Da das Zählen von Zeichen und deren Ausgleich über mehrere Zeilen hinweg rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zu demselben Verhalten wie `wrap`, mit der Ausnahme, dass der Benutzeragent einen langsameren Algorithmus nutzt, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typografie über der Leistung steht (zum Beispiel, wenn die Anzahl der [Waisen](/de/docs/Web/CSS/Reference/Properties/orphans) minimiert werden soll).
- `stable`
  - : Führt zu demselben Verhalten wie `wrap`, außer wenn der Benutzer den Inhalt bearbeitet, bleiben die Zeilen, die den bearbeiteten Zeilen vorausgehen, unverändert, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Arten, wie Text innerhalb eines Inhaltsblocks, wie etwa eines Absatzes ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), über Zeilen fließen kann. Diese sind _erzwungene Zeilenumbrüche_, die vom Benutzer gesteuert werden, und _weiche Zeilenumbrüche_, die vom Browser gesteuert werden. Die `text-wrap` Eigenschaft kann verwendet werden, um den Browser zu beeinflussen, wie er die _weichen Zeilenumbrüche_ steuert.

Der gewählte Wert für `text-wrap` hängt davon ab, wie viele Zeilen Text Sie gestalten möchten, ob der Text `contenteditable` ist und ob Aussehen oder Leistung priorisiert werden müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt wird, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen in jeder Zeile auszugleichen, was die Layoutqualität und Lesbarkeit verbessert. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger ist als die Geschwindigkeit.

Der `stable` Wert verbessert das Benutzererlebnis, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich unverändert bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der grundlegenden Werte für den Textumbruch

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

Der Text in dem Beispiel ist bearbeitbar. Ändern Sie den Text, indem Sie lange Wörter hinzufügen, um zu sehen, wie sich die unterschiedlichen Zeilen- und Wortlängen auf den Umbruch auswirken.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS Textmodul](/de/docs/Web/CSS/Guides/Text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com (2023)
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com (2023)
- [Balancing Japanese and Korean typography](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) von Kelly Choyce-Dwan (2025)
