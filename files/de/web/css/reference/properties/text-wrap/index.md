---
title: text-wrap
slug: Web/CSS/Reference/Properties/text-wrap
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Die **`text-wrap`** [CSS](/de/docs/Web/CSS) Kurzform-Eigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typographische Verbesserungen, zum Beispiel durch ausgewogenere Zeilenlängen über gebrochene Überschriften hinweg
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

Die `text-wrap`-Eigenschaft wird als ein einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen in Sprachen wie Englisch, die Leerzeichen als Trennzeichen verwenden) umbrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen umgebrochen. Er überläuft das enthaltene Element, anstatt auf eine neue Zeile zu brechen.
- `balance`
  - : Der Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile bestmöglich ausgeglichen ist, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und deren Ausbalancieren über mehrere Zeilen rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke mit einer begrenzten Anzahl von Zeilen (sechs oder weniger für Chromium und zehn oder weniger für Firefox) unterstützt.
- `pretty`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass der Benutzeragent einen langsameren Algorithmus verwendet, der ein besseres Layout über Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typographie über Leistung bevorzugt wird (zum Beispiel, wenn die Anzahl der [Waise](/de/docs/Web/CSS/Reference/Properties/orphans) auf ein Minimum beschränkt werden sollte).
- `stable`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen, die vor den von ihm bearbeiteten Zeilen liegen, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt 2 Möglichkeiten, wie Text über Zeilen innerhalb eines Inhaltsblocks wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}) fließen kann. Diese sind _erzwungene Zeilenumbrüche_, die vom Benutzer kontrolliert werden, und _weiche Zeilenumbrüche_, die vom Browser kontrolliert werden. Die `text-wrap`-Eigenschaft kann verwendet werden, um dem Browser zu signalisieren, wie er die _weichen Zeilenumbrüche_ steuern soll.

Der von Ihnen gewählte Wert für `text-wrap` hängt von der Anzahl der Textzeilen ab, die Sie gestalten möchten, davon, ob der Text `contenteditable` ist, und davon, ob Sie Erscheinungsbild oder Leistung priorisieren müssen.

Wenn der gestaltete Inhalt auf eine kurze Anzahl von Zeilen beschränkt wird, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen und die Layoutqualität sowie die Lesbarkeit zu verbessern. Da Browser die Anzahl der Zeilen begrenzen, die durch diese Eigenschaft beeinflusst werden, ist der Einfluss dieses Werts auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` einen negativen Effekt auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der `stable`-Wert verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich von grundlegenden Textumbruch-Werten

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
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com (2023)
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com (2023)
- [Balancing Japanese and Korean typography](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) von Kelly Choyce-Dwan (2025)
