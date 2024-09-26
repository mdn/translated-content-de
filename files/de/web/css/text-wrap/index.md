---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die CSS-Kurzschreibweise **`text-wrap`** steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, z. B. ausgewogenere Zeilenlängen über gebrochene Überschriften hinweg.
- Eine Möglichkeit, den Zeilenumbruch vollständig zu deaktivieren.

> [!NOTE]
> Die Eigenschaften {{CSSxRef("white-space-collapse")}} und `text-wrap` können zusammen mit der Kurzschreibweise {{CSSxRef("white-space")}} erklärt werden.

{{EmbedInteractiveExample("pages/css/text-wrap.html")}}

## Bestandteile

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

Die Eigenschaft `text-wrap` wird als ein einzelnes Schlüsselwort angegeben, das aus der unten aufgeführten Liste von Werten ausgewählt wird.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen bei Sprachen wie Englisch, die Leerzeichentrenner verwenden) umgebrochen, um Überlaufen zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen umbrochen. Es wird das enthaltene Element überlaufen, anstatt in eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umgebrochen, dass die Anzahl der Zeichen auf jeder Zeile am besten ausgeglichen wird, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen von Zeichen und das Ausgleichen über mehrere Zeilen hinweg rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die sich über eine begrenzte Anzahl von Zeilen erstrecken (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass der Benutzeragent einen langsameren Algorithmus verwendet, der ein besseres Layout über Geschwindigkeit bevorzugt. Dies ist für Fließtext vorgesehen, bei dem eine gute Typografie über der Leistung bevorzugt wird (zum Beispiel, wenn die Anzahl der [Waisenkinder](/de/docs/Web/CSS/orphans) minimiert werden soll).
- `stable`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass, wenn der Benutzer den Inhalt bearbeitet, die Zeilen vor den bearbeiteten Zeilen statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Arten, wie Text innerhalb eines Blockes von Inhalten, wie Absätzen ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), über Zeilen fließen kann. Diese sind _erzwungene Zeilenumbrüche_, die vom Benutzer kontrolliert werden, und _weiche Zeilenumbrüche_, die vom Browser kontrolliert werden. Die Eigenschaft `text-wrap` kann verwendet werden, um den Browser zu veranlassen, wie die _weichen Zeilenumbrüche_ gesteuert werden sollen.

Der gewählte Wert für `text-wrap` hängt davon ab, wie viele Textzeilen Sie zu stylen erwarten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt ist, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen, was die Layoutqualität und Lesbarkeit verbessert. Da Browser die Anzahl der Zeilen begrenzen, die von dieser Eigenschaft betroffen sind, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert das Benutzererlebnis, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass während der Benutzer Text bearbeitet, die vorherigen Zeilen im Bereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegender Vergleich von text-wrap-Werten

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

Der Text im Beispiel ist bearbeitbar. Ändern Sie den Text und fügen Sie lange Wörter hinzu, um zu sehen, wie die unterschiedlichen Zeilen- und Wortlängen das Umbruchverhalten beeinflussen.

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
