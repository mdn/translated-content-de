---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: bb59e6fd36a2487e5c563ee8844323185c53bd1f
---

{{CSSRef}}

Die CSS-Kurzschrift-Eigenschaft **`text-wrap`** steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, zum Beispiel ausgewogenere Zeilenlängen in unterbrochenen Überschriften
- Eine Möglichkeit, das Textumbruchverhalten vollständig auszuschalten.

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

## Zusammenstellende Eigenschaften

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

Die Eigenschaft `text-wrap` wird als ein einzelnes Schlüsselwort aus der folgenden Liste von Werten angegeben.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen in Sprachen wie Englisch, die Leerzeichentrenner verwenden) umbrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht umbrochen. Er wird über das enthaltene Element hinausgehen, anstatt auf eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile möglichst ausgewogen ist, was die Layoutqualität und Lesbarkeit steigert. Da das Zählen von Zeichen und das Ausbalancieren über mehrere Zeilen rechnerisch aufwändig ist, wird dieser Wert nur für Textblöcke unterstützt, die sich über eine begrenzte Anzahl von Zeilen erstrecken (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass der User-Agent einen langsameren Algorithmus verwendet, der besseres Layout über Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typografie gegenüber Leistung bevorzugt wird (zum Beispiel, wenn die Anzahl der [Waisenkinder](/de/docs/Web/CSS/orphans) minimiert werden sollte).
- `stable`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass beim Bearbeiten des Inhalts die Zeilen vor den bearbeiteten Zeilen statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Möglichkeiten, wie Text in einem Inhaltsblock wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements", "&lt;h1&gt;–&lt;h6&gt;")}}) über Zeilen fließen kann. Dies sind _erzwungene Zeilenumbrüche_, die vom Benutzer kontrolliert werden, und _weiche Zeilenumbrüche_, die vom Browser kontrolliert werden. Die Eigenschaft `text-wrap` kann verwendet werden, um den Browser zu beeinflussen, wie er die _weichen Zeilenumbrüche_ steuert.

Der gewählte Wert für `text-wrap` hängt davon ab, wie viele Textzeilen Sie stylisieren möchten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt ist, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen und die Layoutqualität und Lesbarkeit zu verbessern. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen beschränken, ist die Auswirkung dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` einen negativen Einfluss auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger ist als die Geschwindigkeit.

Der Wert `stable` verbessert die Benutzererfahrung bei der Verwendung von Inhalten, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass beim Bearbeiten von Text die vorhergehenden Zeilen im bearbeiteten Bereich stabil bleiben.

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

Der Text im Beispiel ist bearbeitbar. Ändern Sie den Text und fügen Sie lange Wörter hinzu, um zu sehen, wie unterschiedliche Zeilen- und Wortlängen den Umbruch beeinflussen.

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
- [Ausbalancieren japanischer und koreanischer Typografie](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) über Ryelle.Codes (2025)
