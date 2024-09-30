---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`text-wrap`** CSS-Kurzschrift-Eigenschaft steuert, wie der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, zum Beispiel ausgewogenere Zeilenlängen über gebrochene Überschriften hinweg
- Eine Möglichkeit, den Zeilenumbruch komplett auszuschalten.

> [!NOTE]
> Die {{CSSxRef("white-space-collapse")}} und `text-wrap` Eigenschaften können gemeinsam mit der {{CSSxRef("white-space")}} Kurzschrift-Eigenschaft deklariert werden.

{{EmbedInteractiveExample("pages/css/text-wrap.html")}}

## Zusammenfassende Eigenschaften

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

Die `text-wrap` Eigenschaft wird als einzelnes Schlüsselwort aus der unten angegebenen Liste von Werten spezifiziert.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen umbrochen (z.B. Leerzeichen in Sprachen wie Englisch, die Leerzeichentrenner verwenden), um Überschreiten zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umbrochen. Er wird das enthaltene Element überlaufen, anstatt auf einer neuen Zeile zu brechen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen in jeder Zeile am besten ausbalanciert wird, was die Layoutqualität und Lesbarkeit erhöht. Da das Zählen von Zeichen und das Ausbalancieren über mehrere Zeilen hinweg rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass der Benutzeragent einen langsameren Algorithmus verwendet, der ein besseres Layout über die Geschwindigkeit stellt. Dies ist für den Fließtext gedacht, bei dem eine gute Typografie gegenüber der Leistung bevorzugt wird (z.B. wenn die Anzahl der [Waisenzeilen](/de/docs/Web/CSS/orphans) minimiert werden soll).
- `stable`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen, die vor den von ihm bearbeiteten Zeilen liegen, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Möglichkeiten, wie Text innerhalb eines Blockes von Inhalten, wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), über Zeilen hinwegfließen kann. Diese sind _erzwungene Zeilenumbrüche_, die vom Benutzer kontrolliert werden, und _weiche Zeilenumbrüche_, die vom Browser kontrolliert werden. Die `text-wrap` Eigenschaft kann verwendet werden, um den Browser anzuweisen, wie die _weichen Zeilenumbrüche_ kontrolliert werden sollen.

Der Wert, den Sie für `text-wrap` wählen, hängt davon ab, wie viele Textzeilen Sie formatieren möchten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der formatierte Inhalt auf eine kurze Anzahl von Zeilen beschränkt wird, wie z.B. Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen in jeder Zeile auszugleichen, was die Layoutqualität und Lesbarkeit erhöht. Da Browser die Anzahl der Zeilen, die von dieser Eigenschaft betroffen sind, begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` eine negative Auswirkung auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass, während der Benutzer den Text bearbeitet, die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegender Vergleich der Werte für Textumbruch

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

Der Text im Beispiel ist editierbar. Ändern Sie den Text, indem Sie lange Wörter hinzufügen, um zu sehen, wie die unterschiedlichen Zeilen- und Wortlängen das Umbruchverhalten beeinflussen.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com
