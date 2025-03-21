---
title: hyphens
slug: Web/CSS/hyphens
l10n:
  sourceCommit: 19c64b411b90f999565db9fdb815463ba66c9714
---

{{CSSRef}}

Die **`hyphens`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert, wie Wörter beim Textumbruch über mehrere Zeilen hinweg getrennt werden sollen. Sie kann die Trennung vollständig verhindern, Trennungen an manuell festgelegten Stellen im Text vornehmen oder dem Browser erlauben, automatisch Bindestriche dort einzufügen, wo es angemessen ist.

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
  border: 2px dashed #999;
  font-size: 1.5rem;
  text-align: left;
  width: 7rem;
}
```

> [!NOTE]
> Im obigen Demo enthält der String "An extraordinarily long English word!" das versteckte `&shy;` (soft hyphen) Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine potenzielle Stelle für das Einfügen eines Bindestrichs anzugeben, wenn `hyphens: manual;` angegeben ist.

Die Trennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut bestimmt, und Browser trennen nur dann, wenn dieses Attribut vorhanden ist und das entsprechende Trennungswörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang) Attribut verwendet werden.

> [!NOTE]
> Die Regeln, die definieren, wie die Trennung durchgeführt wird, sind nicht explizit durch die Spezifikation definiert, sodass die genaue Trennung von Browser zu Browser variieren kann.

Wenn unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen zu spezifizieren, das am Ende der umbrochenen Zeile verwendet wird.

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

Die `hyphens` Eigenschaft wird als ein einzelner Schlüsselwortwert spezifiziert, der aus der unten stehenden Liste ausgewählt wird.

### Werte

- `none`
  - : Wörter werden nicht an Zeilenumbrüchen getrennt, selbst wenn Zeichen innerhalb der Wörter auf mögliche Umbruchstellen hinweisen. Zeilen werden nur an Leerzeichen umbrochen.
- `manual`
  - : Standardwert. Wörter werden für Zeilenumbrüche nur dort getrennt, wo Zeichen innerhalb des Wortes Umbruchmöglichkeiten anzeigen. Siehe [Vorschlagen von Umbruchmöglichkeiten](#vorschlagen_von_umbruchmöglichkeiten) unten für Details.
- `auto`
  - : Der Browser kann Wörter an geeigneten Trennungsstellen automatisch trennen, nach welchen Regeln er sich auch immer entscheidet. Vorgeschlagene Umbruchmöglichkeiten (siehe [Vorschlagen von Umbruchmöglichkeiten](#vorschlagen_von_umbruchmöglichkeiten) unten) überschreiben jedoch die automatische Auswahl von Umbruchstellen, wenn vorhanden.

> [!NOTE]
> Das Verhalten der `auto` Einstellung hängt davon ab, dass die Sprache korrekt markiert ist, um die entsprechenden Trennungsregeln auszuwählen. Sie müssen eine Sprache mit dem `lang` HTML-Attribut angeben, um sicherzustellen, dass die automatische Trennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/word-break#break-all) anwenden, werden keine Bindestriche angezeigt, selbst wenn das Wort an einer Trennungsstelle umgebrochen wird.

## Vorschlagen von Umbruchmöglichkeiten

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell mögliche Umbruchstellen innerhalb des Textes anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Bindestrich-Zeichen zeigt eine sichtbare Umbruchmöglichkeit an. Auch wenn die Zeile an dieser Stelle tatsächlich nicht umbrochen wird, wird der Bindestrich dennoch dargestellt.
- U+00AD (SHY)
  - : Ein unsichtbarer, "**s**ofter" **hy**phen. Dieses Zeichen wird nicht sichtbar dargestellt; stattdessen markiert es eine Stelle, an der der Browser das Wort trennen sollte, wenn eine Trennung erforderlich ist. In HTML verwenden Sie `&shy;`, um einen weichen Bindestrich einzufügen.

> [!NOTE]
> Wenn das HTML [`<wbr>`](/de/docs/Web/HTML/Element/wbr) Element zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifikation der Texttrennung

Dieses Beispiel verwendet drei Klassen, eine für jede mögliche Konfiguration der `hyphens` Eigenschaft.

#### HTML

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

{{EmbedLiveSample("Specifying_text_hyphenation", "100%", 490)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("content")}}
- {{cssxref("overflow-wrap")}} (ehemals `word-wrap`)
- {{cssxref("word-break")}}
- [Leitfaden für Umbruch und Trennung von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
