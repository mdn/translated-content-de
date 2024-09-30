---
title: hyphens
slug: Web/CSS/hyphens
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`hyphens`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie Wörter bei einem Zeilenumbruch getrennt werden sollen. Es kann verhindern, dass Trennungen stattfinden, Trennungen an manuell angegebenen Stellen im Text vornehmen oder dem Browser erlauben, automatische Trennstriche an geeigneten Stellen einzufügen.

{{EmbedInteractiveExample("pages/css/hyphens.html")}}

> [!NOTE]
> Im obigen Beispiel enthält die Zeichenfolge "An extraordinarily long English word!" das versteckte Zeichen `&shy;` (weiches Trennzeichen): `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine mögliche Stelle für einen Trennstrich anzugeben, wenn `hyphens: manual;` festgelegt ist.

Trennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut bestimmt, und Browser trennen nur, wenn dieses Attribut vorhanden ist und das entsprechende Trennungswörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Attribute/xml:lang) Attribut verwendet werden.

> [!NOTE]
> Die Regeln, die festlegen, wie die Trennung durchgeführt wird, sind in der Spezifikation nicht explizit definiert, sodass die genaue Trennung von Browser zu Browser variieren kann.

Wenn unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen am Ende der umbrochenen Zeile anzugeben.

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

Die `hyphens` Eigenschaft wird als einzelner Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

### Werte

- `none`
  - : Wörter werden nicht an Zeilenumbrüchen getrennt, selbst wenn Zeichen innerhalb der Wörter auf Trennmöglichkeiten hinweisen. Zeilen werden nur bei Leerzeichen umbrochen.
- `manual`
  - : Standardwert. Wörter werden für Zeilenumbrüche nur dort aufgetrennt, wo Zeichen innerhalb des Wortes Trennmöglichkeiten vorschlagen. Siehe [Trennmöglichkeiten vorschlagen](#trennmöglichkeiten_vorschlagen) unten für Details.
- `auto`
  - : Der Browser kann Wörter automatisch an geeigneten Trennungsstellen umbrechen, indem er beliebige Regeln befolgt. Allerdings überschreiben vorgeschlagene Trennmöglichkeiten (siehe [Trennmöglichkeiten vorschlagen](#trennmöglichkeiten_vorschlagen) unten) die automatische Auswahl der Trennungsstellen, wenn vorhanden.

> [!NOTE]
> Das Verhalten der Einstellung `auto` hängt davon ab, dass die Sprache korrekt getaggt ist, um die entsprechenden Trennungsregeln auszuwählen. Sie müssen eine Sprache mithilfe des `lang` HTML-Attributs angeben, um sicherzustellen, dass die automatische Trennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/word-break#break-all) anwenden, werden keine Trennstriche angezeigt, selbst wenn das Wort an einer Trennungsstelle umbrochen wird.

## Trennmöglichkeiten vorschlagen

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell potenzielle Trennstellen im Text anzugeben:

- U+2010 (HYPHEN)
  - : Das Zeichen für ein "hartes" Trennzeichen zeigt eine sichtbare Trennmöglichkeit an. Selbst wenn die Zeile nicht tatsächlich an dieser Stelle umbrochen wird, wird der Trennstrich dennoch angezeigt.
- U+00AD (SHY)
  - : Ein unsichtbares, "**s**oft"-**hy**phen. Dieses Zeichen wird nicht sichtbar dargestellt; stattdessen markiert es eine Stelle, an der der Browser das Wort trennen sollte, wenn eine Trennung notwendig ist. In HTML verwenden Sie `&shy;`, um ein weiches Trennzeichen einzufügen.

> [!NOTE]
> Wenn das HTML [`<wbr>`](/de/docs/Web/HTML/Element/wbr) Element zu einem Zeilenumbruch führt, wird kein Trennstrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Texttrennung angeben

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
- [Leitfaden zum Umbruch und Trennen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
