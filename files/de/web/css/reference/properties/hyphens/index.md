---
title: "`hyphens` CSS property"
short-title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`hyphens`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Wörter bei einem Zeilenumbruch getrennt werden sollen. Sie kann die Trennung komplett verhindern, eine Trennung an manuell festgelegten Punkten im Text vornehmen oder dem Browser erlauben, Bindestriche automatisch an geeigneten Stellen einzufügen.

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

> [!NOTE]
> Im obigen Beispiel enthält der String "An extraordinarily long English word!" das versteckte Zeichen `&shy;` (weicher Trennstrich): `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine potenzielle Stelle für das Einfügen eines Bindestrichs anzugeben, wenn `hyphens: manual;` angegeben ist.

Trennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut bestimmt, und Browser trennen nur, wenn dieses Attribut vorhanden ist und das passende Trennungswörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang) Attribut verwendet werden.

> [!NOTE]
> Die Regeln, wie die Trennung durchgeführt wird, sind nicht explizit in der Spezifikation definiert, daher kann die genaue Trennung von Browser zu Browser variieren.

Falls unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen anzugeben, das am Ende der gebrochenen Zeile verwendet wird.

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

Die `hyphens` Eigenschaft wird als ein einzelner Schlüsselwortwert angegeben, der aus der untenstehenden Liste ausgewählt wird.

### Werte

- `none`
  - : Wörter werden nicht bei Zeilenumbrüchen getrennt, selbst wenn Zeichen innerhalb der Wörter mögliche Trennstellen anzeigen. Zeilen werden nur an Leerzeichen umgebrochen.
- `manual`
  - : Standardwert. Wörter werden für den Zeilenumbruch nur dort getrennt, wo Zeichen innerhalb des Wortes Umbruchmöglichkeiten anzeigen. Weitere Details finden Sie unter [Umbruchmöglichkeiten vorschlagen](#umbruchmöglichkeiten_vorschlagen) unten.
- `auto`
  - : Der Browser kann Wörter an passenden Trennstellen automatisch umbrechen, nach welchen Regeln er auch immer auswählt. Jedoch werden vorgeschlagene Umbruchmöglichkeiten (siehe [Umbruchmöglichkeiten vorschlagen](#umbruchmöglichkeiten_vorschlagen) unten) Vorrang vor der automatischen Auswahl von Trennstellen haben, wenn vorhanden.

> [!NOTE]
> Das Verhalten der `auto` Einstellung hängt davon ab, dass die Sprache korrekt getaggt ist, um die entsprechenden Trennungsregeln auszuwählen. Sie müssen eine Sprache mit dem `lang` HTML-Attribut angeben, um zu garantieren, dass die automatische Trennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/Reference/Properties/word-break#break-all) anwenden, werden keine Bindestriche angezeigt, selbst wenn das Wort an einer Trennstelle gebrochen wird.

## Umbruchmöglichkeiten vorschlagen

Es gibt zwei Unicode-Zeichen, die manuell potenzielle Umbruchstellen innerhalb eines Textes angeben:

- U+2010 (HYPHEN)
  - : Das "harte" Trennzeichen zeigt eine sichtbare Umbruchmöglichkeit an. Selbst wenn die Zeile tatsächlich nicht an diesem Punkt gebrochen wird, wird der Bindestrich trotzdem gerendert.
- U+00AD (SHY)
  - : Ein unsichtbarer, "**s**ofter" **hy**phen. Dieses Zeichen wird nicht sichtbar dargestellt; stattdessen markiert es eine Stelle, an der der Browser das Wort brechen soll, wenn eine Trennung notwendig ist. In HTML benutzen Sie `&shy;`, um einen weichen Trennstrich einzufügen.

> [!NOTE]
> Wenn das HTML [`<wbr>`](/de/docs/Web/HTML/Reference/Elements/wbr) Element zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Texttrennung spezifizieren

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
- [Leitfaden zum Umbruch und Trennung von Text](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
