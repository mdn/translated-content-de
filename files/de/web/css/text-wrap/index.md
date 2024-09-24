---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`text-wrap`** CSS-Kurzschreibweise steuert, wie Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten:

- Typografische Verbesserungen, beispielsweise ausgewogenere Zeilenlängen über gebrochene Überschriften hinweg.
- Eine Möglichkeit, den Textumbruch komplett auszuschalten.

> [!NOTE]
> Die Eigenschaften {{CSSxRef("white-space-collapse")}} und `text-wrap` können zusammen unter Verwendung der {{CSSxRef("white-space")}} Kurzschreibweise deklariert werden.

{{EmbedInteractiveExample("pages/css/text-wrap.html")}}

## Zusammengehörige Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`text-wrap-mode`](/de/docs/Web/CSS/text-wrap-mode)
- [`text-wrap-style`](/de/docs/Web/CSS/text-wrap-style)

## Syntax

```css
/* Schlüsselwort-Werte */
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
text-wrap: pretty;
text-wrap: stable;

/* Globale Werte */
text-wrap: inherit;
text-wrap: initial;
text-wrap: revert;
text-wrap: revert-layer;
text-wrap: unset;
```

Die `text-wrap`-Eigenschaft wird als einzelnes Schlüsselwort festgelegt, das aus der unten aufgeführten Werteliste ausgewählt wird.

### Werte

- `wrap`
  - : Text wird an geeigneten Zeichen (zum Beispiel Leerzeichen in Sprachen wie Englisch, die Leerzeichentrenner verwenden) über Zeilen hinweg umbrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umbrochen. Er wird über sein umgebendes Element hinausragen, anstatt auf eine neue Zeile zu brechen.
- `balance`
  - : Text wird so umbrochen, dass die Anzahl der Zeichen auf jeder Zeile bestmöglich ausgeglichen ist, um Layoutqualität und Lesbarkeit zu erhöhen. Da das Zählen von Zeichen und deren Ausgleich über mehrere Zeilen rechnerisch aufwendig ist, wird dieser Wert nur für Textblöcke mit einer begrenzten Anzahl von Zeilen unterstützt (sechs oder weniger für Chromium und zehn oder weniger für Firefox).
- `pretty`
  - : Führt zum gleichen Verhalten wie `wrap`, außer dass der Benutzeragent einen langsameren Algorithmus verwendet, der eine bessere Layoutgestaltung gegenüber der Geschwindigkeit bevorzugt. Dies ist für Fließtext gedacht, bei dem gute Typographie gegenüber der Leistung bevorzugt wird (zum Beispiel, wenn die Anzahl der [Waisen](/de/docs/Web/CSS/orphans) auf ein Minimum gehalten werden soll).
- `stable`
  - : Führt zum gleichen Verhalten wie `wrap`, jedoch bleiben beim Bearbeiten des Inhalts die Zeilen, die sich vor den bearbeiteten Zeilen befinden, statisch, anstatt dass der gesamte Textblock neu umbrochen wird.

## Beschreibung

Es gibt zwei Möglichkeiten, wie Text innerhalb eines Inhaltsblocks, wie einem Absatz ({{HTMLElement("p")}}) oder Überschriften ({{HTMLElement("heading_elements","<h1>–<h6>")}}), über Zeilen fließen kann. Dies sind _erzwungene Zeilenumbrüche_, die vom Benutzer gesteuert werden, und _weiche Zeilenumbrüche_, die vom Browser gesteuert werden. Die `text-wrap`-Eigenschaft kann verwendet werden, um den Browser dazu zu veranlassen, wie die _weichen Zeilenumbrüche_ gesteuert werden sollen.

Der Wert, den Sie für `text-wrap` wählen, hängt davon ab, wie viele Zeilen Text Sie zu stylen erwarten, ob der Text `contenteditable` ist und ob Sie das Erscheinungsbild oder die Leistung priorisieren müssen.

Wenn der gestaltete Inhalt auf eine kurze Anzahl von Zeilen beschränkt ist, wie Überschriften, Bildunterschriften und Zitate, kann `text-wrap: balance` hinzugefügt werden, um die Anzahl der Zeichen auf jeder Zeile auszugleichen, was die Layoutqualität und Lesbarkeit erhöht. Da Browser die Anzahl der durch diese Eigenschaft betroffenen Zeilen begrenzen, ist der Einfluss dieses Wertes auf die Leistung vernachlässigbar.

Für längere Textabschnitte kann `text-wrap: pretty` verwendet werden. Beachten Sie, dass `pretty` eine negative Wirkung auf die Leistung hat, daher sollte es nur für längere Textblöcke verwendet werden, wenn das Layout wichtiger als die Geschwindigkeit ist.

Der Wert `stable` verbessert die Benutzererfahrung, wenn er auf Inhalte angewendet wird, die [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) sind. Dieser Wert stellt sicher, dass beim Bearbeiten von Text die vorhergehenden Zeilen im Bearbeitungsbereich stabil bleiben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegender Vergleich von Textumbruchwerten

#### HTML

```html
<h2 class="wrap" contenteditable="true">
  Das Standardverhalten; der Text in der Überschrift wird "normal" umbrochen
</h2>

<h2 class="nowrap" contenteditable="true">
  In diesem Fall wird der Text in der Überschrift nicht umbrochen und überläuft den Container
</h2>

<h2 class="balance" contenteditable="true">
  In diesem Fall ist der Text in der Überschrift schön über die Zeilen hinweg ausbalanciert
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

Der Text im Beispiel ist editierbar. Ändern Sie den Text und fügen Sie lange Wörter hinzu, um zu sehen, wie sich unterschiedliche Zeilen- und Wortlängen auf den Umbruch auswirken.

{{EmbedLiveSample("Examples", "100%", 350)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS Textmodul](/de/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) auf developer.chrome.com
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) auf developer.chrome.com
