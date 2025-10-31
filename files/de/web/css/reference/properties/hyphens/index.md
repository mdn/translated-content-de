---
title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`hyphens`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Wörter getrennt werden sollen, wenn Text über mehrere Zeilen umbricht. Sie kann die Silbentrennung vollständig verhindern, an manuell angegebenen Punkten innerhalb des Textes trennen oder dem Browser erlauben, automatisch an geeigneten Stellen Trennstriche einzufügen.

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
> Im obigen Demo enthält der String "An extraordinarily long English word!" das versteckte `&shy;` (weiche Trennzeichen) Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um einen möglichen Punkt zum Einfügen eines Trennstrichs anzugeben, wenn `hyphens: manual;` spezifiziert ist.

Silbentrennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut bestimmt, und Browser werden nur dann trennen, wenn dieses Attribut vorhanden ist und das entsprechende Trennungswörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang) Attribut verwendet werden.

> [!NOTE]
> Die Regeln, die definieren, wie die Silbentrennung durchgeführt wird, sind nicht ausdrücklich durch die Spezifikation definiert, sodass die genaue Trennung von Browser zu Browser variieren kann.

Falls unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen zu spezifizieren, das am Ende der umgebrochenen Zeile verwendet werden soll.

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

Die `hyphens` Eigenschaft wird als einzelner Schlüsselwortwert angegeben, der aus der untenstehenden Liste ausgewählt wird.

### Werte

- `none`
  - : Wörter werden bei Zeilenumbrüchen nicht getrennt, selbst wenn Zeichen innerhalb der Wörter auf Trennpunkte hinweisen. Zeilen brechen nur an Leerstellen um.
- `manual`
  - : Standardwert. Wörter werden für den Zeilenumbruch nur dort getrennt, wo Zeichen innerhalb des Wortes auf Trennmöglichkeiten hinweisen. Siehe [Vorschlagen von Zeilenumbruchmöglichkeiten](#vorschlagen_von_zeilenumbruchmöglichkeiten) unten für Details.
- `auto`
  - : Der Browser kann Wörter automatisch an geeigneten Trennstellen brechen, nach welchen Regeln auch immer. Allerdings werden vorgeschlagene Zeilenumbruchmöglichkeiten (siehe [Vorschlagen von Zeilenumbruchmöglichkeiten](#vorschlagen_von_zeilenumbruchmöglichkeiten) unten) die automatische Auswahl von Trennpunkten überschreiben, wenn vorhanden.

> [!NOTE]
> Das Verhalten der Einstellung `auto` hängt davon ab, dass die Sprache korrekt markiert ist, um die passenden Trennregeln auszuwählen. Sie müssen eine Sprache mit dem `lang` HTML-Attribut angeben, um sicherzustellen, dass die automatische Silbentrennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/Reference/Properties/word-break#break-all) anwenden, werden keine Trennstriche angezeigt, selbst wenn das Wort an einem Trennpunkt bricht.

## Vorschlagen von Zeilenumbruchmöglichkeiten

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell mögliche Zeilenumbrüche im Text anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Trennzeichen weist auf eine sichtbare Zeilenumbruchmöglichkeit hin. Auch wenn die Zeile nicht tatsächlich an diesem Punkt umbricht, wird der Trennstrich trotzdem angezeigt.
- U+00AD (SHY)
  - : Ein unsichtbares, "**s**oftes" **Hy**phen. Dieses Zeichen wird nicht sichtbar dargestellt; stattdessen markiert es eine Stelle, an der der Browser das Wort brechen sollte, wenn eine Trennung notwendig ist. In HTML verwenden Sie `&shy;`, um ein weiches Trennzeichen einzufügen.

> [!NOTE]
> Wenn das HTML [`<wbr>`](/de/docs/Web/HTML/Reference/Elements/wbr) Element zu einem Zeilenumbruch führt, wird kein Trennstrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Texthyphenierung

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
- [Leitfaden zum Umbruch und Brechen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
