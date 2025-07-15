---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`text-wrap`** CSS-Kurzformeigenschaft steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, z.B. ausgewogenere Zeilenlängen über gebrochene Überschriften hinweg.
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

## Zusätzliche Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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

Die Eigenschaft `text-wrap` wird als einzelnes Schlüsselwort aus der untenstehenden Werteliste angegeben.

### Werte

- `wrap`
  - : Der Text wird bei geeigneten Zeichen umgebrochen (zum Beispiel bei Leerzeichen in Sprachen wie Englisch, die Leerzeichen als Trennzeichen verwenden), um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Der Text wird nicht über Zeilen hinweg umgebrochen. Er läuft über das enthaltene Element hinaus, anstatt in eine neue Zeile zu brechen.
- `balance`
  - : Der Text wird so umgebrochen, dass die Anzahl der Zeichen in jeder Zeile am besten ausbalanciert wird, um die Layoutqualität und Lesbarkeit zu verbessern. Da das Zählen von Zeichen und das Ausbalancieren über mehrere Zeilen rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen (sechs oder weniger in Chromium und zehn oder weniger in Firefox) umfassen.
- `pretty`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass der Benutzeragent einen langsameren Algorithmus verwendet, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typografie gegenüber der Performance bevorzugt wird (zum Beispiel, wenn die Anzahl der [Waisenkinder](/de/docs/Web/CSS/orphans) minimiert werden soll).
- `stable`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass beim Bearbeiten der Inhalte die Zeilen, die vor den Zeilen liegen, die bearbeitet werden, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Möglichkeiten, wie Text innerhalb eines Inhaltsblocks, wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), über Zeilen hinweg fließen kann. Dies sind _erzwungene Zeilenumbrüche_, die vom Benutzer gesteuert werden, und _weiche Zeilenumbrüche_, die vom Browser gesteuert werden. Die Eigenschaft `text-wrap` kann verwendet werden, um den Browser zu veranlassen, die _weichen Zeilenumbrüche_ zu steuern.

Die Wahl des Wertes für `text-wrap` hängt davon ab, wie viele Zeilen Text Sie erwarten zu gestalten, ob der Text `contenteditable` ist und ob Sie das Aussehen oder die Leistung priorisieren müssen.

Wenn der gestaltete Inhalt auf eine kurze Anzahl von Zeilen beschränkt bleibt, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen in jeder Zeile zu balancieren, was die Layoutqualität und Lesbarkeit verbessert. Da Browser die Anzahl der Zeilen einschränken, die von dieser Eigenschaft betroffen sind, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` einen negativen Einfluss auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer Text bearbeitet, die vorhergehenden Zeilen in dem Bereich, der bearbeitet wird, stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Vergleich der Werte des grundlegenden Textumbruchs

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

Der Text im Beispiel ist bearbeitbar. Ändern Sie den Text, indem Sie lange Wörter hinzufügen, um zu sehen, wie sich die unterschiedlichen Zeilen- und Wortlängen auf den Umbruch auswirken.

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
- [Ausbalancieren von japanischer und koreanischer Typografie](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) von Kelly Choyce-Dwan (2025)
