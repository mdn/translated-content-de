---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`text-wrap`** CSS-Kurzschreibweise steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, beispielsweise gleichmäßigere Zeilenlängen bei unterbrochenen Überschriften
- Eine Möglichkeit, den Textumbruch vollständig zu deaktivieren.

> [!NOTE]
> Die Eigenschaften {{CSSxRef("white-space-collapse")}} und `text-wrap` können zusammen mit der Kurzschreibweise {{CSSxRef("white-space")}} deklariert werden.

{{EmbedInteractiveExample("pages/css/text-wrap.html")}}

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

Die `text-wrap`-Eigenschaft wird als Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `wrap`
  - : Text wird bei geeigneten Zeichen (zum Beispiel Leerzeichen in Sprachen wie Englisch, die Leerzeichentrenner verwenden) über Zeilen hinweg umbrochen, um Überläufe zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umbrochen. Er wird sein enthaltendes Element überlaufen, anstatt auf eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen in jeder Zeile möglichst ausgewogen ist, was die Layoutqualität und Lesbarkeit verbessert. Da das Zählen und Ausgleichen der Zeichen über mehrere Zeilen rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke unterstützt, die eine begrenzte Anzahl von Zeilen umfassen (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass der Benutzeragent einen langsameren Algorithmus verwendet, der ein besseres Layout gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fülltexte gedacht, bei denen gute Typografie wichtiger als Performance ist (zum Beispiel, wenn die Anzahl von [Waisenkindern](/de/docs/Web/CSS/orphans) minimiert werden soll).
- `stable`
  - : Führt zu demselben Verhalten wie `wrap`, außer dass beim Bearbeiten der Inhalte die Linien, die den bearbeiteten Linien vorausgehen, statisch bleiben, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt 2 Möglichkeiten, wie Text innerhalb eines Inhaltsblocks, wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","&lt;h1&gt;–&lt;h6&gt;")}}), über Zeilen hinweg fließen kann. Diese sind _erzwungene Zeilenumbrüche_, die vom Benutzer gesteuert werden, und _weiche Zeilenumbrüche_, die vom Browser gesteuert werden. Die `text-wrap`-Eigenschaft kann verwendet werden, um den Browser anzuweisen, wie die _weichen Zeilenumbrüche_ gesteuert werden sollen.

Der gewählte Wert für `text-wrap` hängt davon ab, wie viele Textzeilen Sie stylen möchten, ob der Text `contenteditable` ist und ob Sie das Aussehen oder die Performance priorisieren müssen.

Wenn der gestylte Inhalt auf eine kurze Anzahl von Zeilen beschränkt sein wird, wie Überschriften, Bildunterschriften und Blockzitate, kann `text-wrap: balance` verwendet werden, um die Anzahl der Zeichen in jeder Zeile auszugleichen, was die Layoutqualität und Lesbarkeit verbessert. Da Browser die Anzahl der von dieser Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Werts auf die Performance vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` negative Auswirkungen auf die Performance hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der `stable`-Wert verbessert die Benutzererfahrung, wenn er auf Inhalte verwendet wird, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) sind. Dieser Wert sorgt dafür, dass beim Bearbeiten von Text die vorherigen Zeilen im bearbeiteten Bereich stabil bleiben.

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

Der Text im Beispiel ist editierbar. Ändern Sie den Text, fügen Sie lange Wörter hinzu, um zu sehen, wie die unterschiedlichen Zeilen- und Wortlängen den Umbruch beeinflussen.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS Text Modul](/de/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com
