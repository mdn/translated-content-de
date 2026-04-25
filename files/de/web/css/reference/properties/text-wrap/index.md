---
title: "`text-wrap` CSS-Eigenschaft"
short-title: text-wrap
slug: Web/CSS/Reference/Properties/text-wrap
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-wrap`** [CSS](/de/docs/Web/CSS) Kurzschreibweise steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, zum Beispiel ausgewogenere Zeilenlängen bei gebrochenen Überschriften
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

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

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

Die `text-wrap`-Eigenschaft wird als einzelnes Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `wrap`
  - : Text wird an geeigneten Stellen (zum Beispiel Leerzeichen, in Sprachen wie Englisch, die Leerzeichentrennungen verwenden) umgebrochen, um Überläufe zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen umgebrochen. Er wird das enthaltende Element überlaufen, anstatt auf eine neue Zeile umgebrochen zu werden.
- `balance`
  - : Text wird so umbrochen, dass eine bestmögliche Balance der Anzahl von Zeichen auf jeder Zeile erreicht wird, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und deren Balance über mehrere Zeilen hinweg rechenintensiv ist, wird dieser Wert nur für Textblöcke unterstützt, die sich über eine begrenzte Anzahl von Zeilen erstrecken (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zu demselben Verhalten wie `wrap`, mit dem Unterschied, dass der User-Agent einen langsameren Algorithmus verwendet, der besseren Layouts gegenüber Geschwindigkeit den Vorzug gibt. Dies ist für Fließtext vorgesehen, bei dem gute Typografie gegenüber Performance bevorzugt wird (zum Beispiel, wenn die Anzahl der [Waisenkinder](/de/docs/Web/CSS/Reference/Properties/orphans) minimiert werden soll).
- `stable`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass beim Bearbeiten des Inhalts die Zeilen, die vor den bearbeiteten Zeilen liegen, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Möglichkeiten, wie Text in einem Inhaltsblock, wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}) über Zeilenfließen kann: _erzwungene Zeilenumbrüche_, die vom Benutzer kontrolliert werden, und _weiche Zeilenumbrüche_, die vom Browser kontrolliert werden. Die `text-wrap`-Eigenschaft kann verwendet werden, um den Browser zu veranlassen, wie die _weichen Zeilenumbrüche_ kontrolliert werden sollen.

Der ausgewählte Wert für `text-wrap` hängt davon ab, wie viele Textzeilen Sie erwarten zu gestalten, ob der Text `contenteditable` ist und ob Sie das Aussehen oder die Leistung priorisieren müssen.

Wenn der gestaltete Inhalt auf eine geringe Anzahl von Zeilen beschränkt wird, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen, was die Layoutqualität und Lesbarkeit erhöht. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat und daher nur für längere Textblöcke verwendet werden sollte, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der `stable`-Wert verbessert die Benutzererfahrung bei Verwendung auf Inhalten, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der grundlegenden Werte von text-wrap

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

Der Text im Beispiel ist bearbeitbar. Ändern Sie den Text, fügen Sie lange Wörter hinzu, um zu sehen, wie die verschiedenen Zeilen- und Wortlängen das Umbruchverhalten beeinflussen.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS Text-Modul](/de/docs/Web/CSS/Guides/Text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com (2023)
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com (2023)
- [Balancing Japanese and Korean typography](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) von Kelly Choyce-Dwan (2025)
