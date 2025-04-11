---
title: hyphens
slug: Web/CSS/hyphens
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`hyphens`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Wörter getrennt werden sollen, wenn der Text über mehrere Zeilen umbrochen wird. Sie kann die Silbentrennung vollständig verhindern, an manuell angegebenen Stellen innerhalb des Textes trennen oder den Browser automatisch Trennstriche an geeigneten Stellen einfügen lassen.

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
> Im obigen Beispiel enthält der String "An extraordinarily long English word!" das versteckte Zeichen `&shy;` (soft hyphen): `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine potenzielle Stelle für einen Trennstrich anzugeben, wenn `hyphens: manual;` angegeben ist.

Trennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) bestimmt, und Browser trennen nur, wenn dieses Attribut vorhanden ist und das entsprechende Trennwörterbuch verfügbar ist. In XML muss das Attribut [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang) verwendet werden.

> [!NOTE]
> Die Regeln, die definieren, wie die Silbentrennung durchgeführt wird, sind nicht explizit durch die Spezifikation definiert, sodass die genaue Trennung je nach Browser variieren kann.

Falls unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen am Zeilenende anzugeben.

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

Die `hyphens`-Eigenschaft wird als einzelner Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

### Werte

- `none`
  - : Wörter werden an Zeilenumbrüchen nicht getrennt, auch wenn innerhalb der Wörter Zeichen auf Trennstellen hinweisen. Zeilen werden nur bei Leerzeichen umbrochen.
- `manual`
  - : Standardwert. Wörter werden nur getrennt, wenn Zeichen innerhalb des Wortes auf Trennstellen hinweisen. Siehe [Vorschlagen von Trennstellen](#vorschlagen_von_trennstellen) unten für Details.
- `auto`
  - : Der Browser kann Wörter an geeigneten Trennstellen automatisch trennen und dabei beliebige Regeln verwenden. Vorgeschlagene Trennstellen (siehe [Vorschlagen von Trennstellen](#vorschlagen_von_trennstellen) unten) überschreiben jedoch die automatische Trennstellenauswahl, wenn sie vorhanden sind.

> [!NOTE]
> Das Verhalten der Einstellung `auto` hängt davon ab, dass die Sprache korrekt getaggt ist, um die entsprechenden Trennungsregeln auszuwählen. Sie müssen eine Sprache mit dem HTML-Attribut `lang` angeben, um sicherzustellen, dass die automatische Silbentrennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/word-break#break-all) anwenden, werden keine Trennstriche angezeigt, selbst wenn das Wort an einer Trennstelle unterbrochen wird.

## Vorschlagen von Trennstellen

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell potenzielle Trennstellen innerhalb von Text anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Bindestrich-Zeichen zeigt eine sichtbare Trennstelle an. Selbst wenn die Zeile an dieser Stelle nicht tatsächlich umbrochen wird, wird der Bindestrich dennoch gerendert.
- U+00AD (SHY)
  - : Ein unsichtbarer, "**s**oft" **hy**phen. Dieses Zeichen wird nicht sichtbar gerendert; stattdessen markiert es eine Stelle, an der der Browser das Wort bei Bedarf trennen sollte. In HTML verwenden Sie `&shy;`, um einen weichen Trennstrich einzufügen.

> [!NOTE]
> Wenn das HTML-Element [`<wbr>`](/de/docs/Web/HTML/Reference/Elements/wbr) zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Texttrennung angeben

Dieses Beispiel verwendet drei Klassen, eine für jede mögliche Konfiguration der `hyphens`-Eigenschaft.

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
- {{cssxref("overflow-wrap")}} (früher `word-wrap`)
- {{cssxref("word-break")}}
- [Leitfaden zum Umbrechen und Trennen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
