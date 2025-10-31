---
title: text-wrap
slug: Web/CSS/Reference/Properties/text-wrap
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-wrap`** [CSS](/de/docs/Web/CSS) Kurzschreibweise steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, z. B. ausgewogenere Zeilenlängen in gebrochenen Überschriften
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

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die `text-wrap` Eigenschaft wird als ein einzelnes Schlüsselwort aus der untenstehenden Liste von Werten festgelegt.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (z. B. Leerzeichen in Sprachen wie Englisch, die Leerzeichen als Trenner verwenden) umgebrochen, um Überläufe zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umbrochen. Er wird über sein enthaltenes Element hinausfließen, anstatt auf eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umgebrochen, dass die Anzahl der Zeichen in jeder Zeile am besten ausbalanciert wird, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen und Ausbalancieren von Zeichen über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur für Textblöcke unterstützt, die sich über eine begrenzte Anzahl von Zeilen erstrecken (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass der User-Agent einen langsameren Algorithmus verwendet, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtexte gedacht, bei denen gute Typografie der Leistung vorgezogen wird (z. B. wenn die Anzahl der [Waisen](/de/docs/Web/CSS/Reference/Properties/orphans) auf ein Minimum reduziert werden soll).
- `stable`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass beim Bearbeiten des Inhalts durch den Benutzer die Zeilen, die vor den bearbeiteten Zeilen liegen, statisch bleiben, anstatt dass der ganze Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Möglichkeiten, wie Text innerhalb eines Inhaltsblocks, wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), über Zeilen hinweg fließen kann. Dies sind _erzwungene Zeilenumbrüche_, die vom Benutzer gesteuert werden, und _weiche Zeilenumbrüche_, die vom Browser gesteuert werden. Die `text-wrap` Eigenschaft kann verwendet werden, um den Browser zu steuern, wie die _weichen Zeilenumbrüche_ gehandhabt werden sollen.

Der Wert, den Sie für `text-wrap` wählen, hängt davon ab, wie viele Textzeilen Sie zu formatieren beabsichtigen, ob der Text `contenteditable` ist und ob Sie Aussehen oder Leistung priorisieren müssen.

Wenn der formatierte Inhalt auf eine geringe Anzahl von Zeilen beschränkt ist, wie z.B. Überschriften, Bildunterschriften und Zitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen in jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` einen negativen Effekt auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger ist als die Geschwindigkeit.

Der Wert `stable` verbessert die Benutzererfahrung beim Bearbeiten von Inhalten, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass beim Bearbeiten von Text durch den Benutzer die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

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

Der Text im Beispiel ist editierbar. Ändern Sie den Text, indem Sie lange Wörter hinzufügen, um zu sehen, wie die verschiedenen Zeilen- und Wortlängen den Umbruch beeinflussen.

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
