---
title: "`hyphens` CSS property"
short-title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`hyphens`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie Wörter getrennt werden sollen, wenn Text über mehrere Zeilen umbrochen wird.

{{InteractiveExample("CSS Demo: hyphens")}}

```css interactive-example-choice
hyphens: none;
```

```css interactive-example-choice
hyphens: manual;
```

```css interactive-example-choice
hyphens: auto;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">An extra­ordinarily long English word!</p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #999999;
  font-size: 1.5rem;
  text-align: left;
  width: 7rem;
}
```

Der Beispieltext "An extraordinarily long English word!" enthält das versteckte `&shy;` (weiches Trennzeichen)-Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine potenzielle Stelle zum Einfügen eines Bindestrichs anzugeben, wenn `hyphens: manual;` angegeben ist.

## Syntax

```css
/* Keyword values */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Global values */
hyphens: inherit;
hyphens: initial;
hyphens: revert;
hyphens: revert-layer;
hyphens: unset;
```

### Werte

Diese Eigenschaft wird als eines der folgenden Schlüsselwortwerte angegeben:

- `none`
  - : Wörter werden nicht bei Zeilenumbrüchen getrennt, selbst wenn Zeichen innerhalb der Wörter Trennstellen vorschlagen. Zeilen werden nur bei Leerzeichen umgebrochen.
- `manual`
  - : Standardwert. Wörter werden für den Zeilenumbruch nur dort getrennt, wo Zeichen innerhalb des Wortes Trennstellen vorschlagen. Siehe [Vorschläge für Trennstellen](#vorschläge_für_trennstellen) weiter unten für Details.
- `auto`
  - : Der Browser kann Wörter automatisch an geeigneten Trennstellen trennen, nach welchen Regeln er auch immer auswählt. Allerdings überschreiben die vorgeschlagenen Trennstellen (siehe [Vorschläge für Trennstellen](#vorschläge_für_trennstellen) weiter unten) die automatische Auswahl von Trennstellen, wenn sie vorhanden sind.

## Beschreibung

Die `hyphens`-Eigenschaft kann verwendet werden, um festzulegen, wie Wörter getrennt werden sollen, wenn Text über mehrere Zeilen umbrochen wird. Es kann die Trennung vollständig verhindern, bei manuell angegebenen Punkten innerhalb des Textes trennen oder dem Browser erlauben, Trennzeichen automatisch dort einzufügen, wo es angemessen ist.

Trennregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut bestimmt. Browser trennen nur, wenn dieses Attribut vorhanden ist und das passende Trennungswörterbuch verfügbar ist. Das Verhalten der Einstellung `auto` hängt davon ab, dass die Sprache richtig gekennzeichnet ist, um die entsprechenden Trennregeln auszuwählen.

In XML muss das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang)-Attribut verwendet werden. Die Spezifikation definiert keine Regeln für die Trennung in XML-Inhalten, sodass die exakte Trennung je nach Browser variieren kann.

Die {{cssxref("hyphenate-character")}}-Eigenschaft kann verwendet werden, um ein alternatives Trennzeichen anzugeben, das am Ende der Zeile verwendet werden soll, anstatt des standardmäßigen, sprachspezifischen Trennzeichens.

Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/Reference/Properties/word-break#break-all) anwenden, werden keine Bindestriche angezeigt, selbst wenn das Wort an einer Trennstelle unterbrochen wird. Wenn Sie {{cssxref("text-wrap-mode","text-wrap-mode: nowrap")}} anwenden, erfolgt kein Umbruch, sodass keine Bindestriche angezeigt werden.

### Vorschläge für Trennstellen

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell potenzielle Trennstellen innerhalb eines Textes anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Bindestrichzeichen zeigt eine sichtbare Trennstelle an. Auch wenn die Zeile nicht an dieser Stelle tatsächlich gebrochen wird, wird der Bindestrich dennoch dargestellt.
- U+00AD (SHY)
  - : Ein unsichtbares, "**s**oftes" **hy**phen. Dieses Zeichen wird nicht sichtbar dargestellt; stattdessen kennzeichnet es eine Stelle, an der der Browser das Wort trennen sollte, wenn eine Trennung notwendig ist. In HTML verwenden Sie `&shy;`, um ein weiches Trennzeichen einzufügen.

> [!NOTE]
> Wenn das HTML-Element [`<wbr>`](/de/docs/Web/HTML/Reference/Elements/wbr) zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt die drei Werte der `hyphens`-Eigenschaft.

#### HTML

Wir fügen drei {{htmlelement("dd")}}-Elemente ein, die denselben Text enthalten, jedoch mit drei verschiedenen Klassen.

```html
<dl>
  <dt><code>none</code>: no hyphen; overflow if needed</dt>
  <dd lang="en" class="none">An extreme&shy;ly long English word</dd>
  <dt>
    <code>manual</code>: hyphen only at &amp;hyphen; or &amp;shy; (if needed)
  </dt>
  <dd lang="en" class="manual">An extreme&shy;ly long English word</dd>
  <dt><code>auto</code>: hyphens where the algorithm decides (if needed)</dt>
  <dd lang="en" class="auto">An extreme&shy;ly long English word</dd>
</dl>
```

#### CSS

Jeder der drei Klassen wird ein anderer `hyphens`-Wert zugewiesen.

```css
dd {
  width: 55px;
  border: 1px solid black;
}
dd.none {
  hyphens: none;
}
dd.manual {
  hyphens: manual;
}
dd.auto {
  hyphens: auto;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic example", "100%", 490)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("content")}}
- {{cssxref("overflow-wrap")}} (früher `word-wrap`)
- {{cssxref("word-break")}}
- [Leitfaden zum Umbrüche und Brechen von Texten](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS-Text](/de/docs/Web/CSS/Guides/Text)-Modul
