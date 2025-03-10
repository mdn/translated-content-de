---
title: hyphens
slug: Web/CSS/hyphens
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`hyphens`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Wörter bei Textumbrüchen über mehrere Zeilen getrennt werden sollen. Sie kann die Trennung vollständig verhindern, an manuell festgelegten Punkten innerhalb des Textes trennen oder dem Browser erlauben, automatisch Bindestriche an geeigneten Stellen einzufügen.

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
> Im obigen Demo enthält der String "An extraordinarily long English word!" das versteckte `&shy;` (weicher Bindestrich) Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine potenzielle Stelle für das Einfügen eines Bindestrichs anzugeben, wenn `hyphens: manual;` festgelegt ist.

Trennregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut bestimmt, und Browser trennen nur dann, wenn dieses Attribut vorhanden ist und das passende Trennungswörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Attribute/xml:lang) Attribut benutzt werden.

> [!NOTE]
> Die Regeln, die definieren, wie Trennungen durchgeführt werden, sind nicht explizit durch die Spezifikation definiert, deshalb kann die genaue Trennung von Browser zu Browser variieren.

Falls unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen für das Zeilenende anzugeben.

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

Die `hyphens` Eigenschaft wird als ein Schlüsselwortwert aus der untenstehenden Liste angegeben.

### Werte

- `none`
  - : Wörter werden bei Zeilenumbrüchen nicht getrennt, selbst wenn Zeichen innerhalb der Wörter auf Trennungspunkte hinweisen. Zeilenumbrüche erfolgen nur bei Leerzeichen.
- `manual`
  - : Standardwert. Wörter werden für Zeilenumbrüche nur dann getrennt, wenn Zeichen innerhalb des Wortes auf Möglichkeiten zur Trennung hinweisen. Siehe [Möglichkeiten zur Trennung vorschlagen](#möglichkeiten_zur_trennung_vorschlagen) unten für Details.
- `auto`
  - : Der Browser kann Wörter an geeigneten Trennstellen automatisch brechen, nach welchen Regeln auch immer er wählt. Allerdings werden vorgeschlagene Möglichkeiten zur Trennung (siehe [Möglichkeiten zur Trennung vorschlagen](#möglichkeiten_zur_trennung_vorschlagen) unten) bei Vorhandensein automatisch über die Auswahl der Trennpunkte gesetzt.

> [!NOTE]
> Das Verhalten der `auto` Einstellung hängt davon ab, dass die Sprache korrekt markiert ist, um die passenden Trennungsregeln auszuwählen. Sie müssen eine Sprache mit dem `lang` HTML-Attribut angeben, um sicherzustellen, dass die automatische Trennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/word-break#break-all) anwenden, werden keine Bindestriche angezeigt, selbst wenn das Wort an einer Trennstelle gebrochen wird.

## Möglichkeiten zur Trennung vorschlagen

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell mögliche Trennpunkte innerhalb eines Textes anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Bindestrichzeichen zeigt eine sichtbare Möglichkeit zur Trennung an. Selbst wenn die Zeile an dieser Stelle nicht tatsächlich gebrochen wird, wird der Bindestrich dennoch angezeigt.
- U+00AD (SHY)
  - : Ein unsichtbarer "**s**oft" **hy**phen. Dieses Zeichen wird nicht sichtbar angezeigt; stattdessen markiert es eine Stelle, an der der Browser das Wort brechen sollte, wenn eine Trennung erforderlich ist. In HTML verwenden Sie `&shy;`, um einen weichen Bindestrich einzufügen.

> [!NOTE]
> Wenn das HTML [`<wbr>`](/de/docs/Web/HTML/Element/wbr) Element zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

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
- [Leitfaden zum Umbruch und zur Trennung von Texten](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
