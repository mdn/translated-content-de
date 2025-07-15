---
title: hyphens
slug: Web/CSS/hyphens
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`hyphens`**-Eigenschaft von [CSS](/de/docs/Web/CSS) spezifiziert, wie Wörter getrennt werden sollten, wenn Text über mehrere Zeilen umgebrochen wird. Sie kann die Trennung komplett verhindern, an manuell angegebenen Punkten innerhalb des Textes trennen oder den Browser automatisch Bindestriche einfügen lassen, wo es angebracht ist.

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
> Im obigen Beispiel enthält der String "An extraordinarily long English word!" das versteckte Zeichen `&shy;` (weicher Trennstrich): `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine potenzielle Stelle für das Einfügen eines Bindestrichs anzugeben, wenn `hyphens: manual;` angegeben ist.

Trennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut bestimmt, und Browser trennen Wörter nur, wenn dieses Attribut vorhanden ist und das entsprechende Trennungswörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang)-Attribut verwendet werden.

> [!NOTE]
> Die Regeln, die definieren, wie die Trennung erfolgt, sind nicht explizit durch die Spezifikation definiert, daher kann die genaue Trennung von Browser zu Browser variieren.

Falls unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen zu spezifizieren, das am Ende der umgebrochenen Zeile verwendet wird.

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

Die `hyphens`-Eigenschaft wird als ein einzelner Schlüsselwortwert angegeben, der aus der unten stehenden Liste gewählt wird.

### Werte

- `none`
  - : Wörter werden an Zeilenumbrüchen nicht getrennt, selbst wenn Zeichen innerhalb der Wörter mögliche Zeilenumbruchspunkte anzeigen. Zeilen werden nur bei Leerzeichen umgebrochen.
- `manual`
  - : Standardwert. Wörter werden für Zeilenumbrüche nur dort getrennt, wo Zeichen innerhalb des Wortes auf mögliche Trennpunkte hinweisen. Siehe [Vorschlagen von Zeilenumbruchmöglichkeiten](#vorschlagen_von_zeilenumbruchmöglichkeiten) unten für Einzelheiten.
- `auto`
  - : Der Browser kann Wörter automatisch an geeigneten Trennpunkten nach seinen eigenen Regeln trennen. Allerdings überschreiben vorgeschlagene Zeilenumbruchmöglichkeiten (siehe [Vorschlagen von Zeilenumbruchmöglichkeiten](#vorschlagen_von_zeilenumbruchmöglichkeiten) unten) die automatische Auswahl von Trennpunkten, wenn vorhanden.

> [!NOTE]
> Das Verhalten der Einstellung `auto` hängt davon ab, dass die Sprache korrekt markiert ist, um die geeigneten Trennungsregeln auszuwählen. Sie müssen eine Sprache mit dem `lang`-HTML-Attribut angeben, um sicherzustellen, dass die automatische Trennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/word-break#break-all) anwenden, werden keine Bindestriche angezeigt, selbst wenn das Wort an einem Trennungspunkt umgebrochen wird.

## Vorschlagen von Zeilenumbruchmöglichkeiten

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell mögliche Zeilenumbruchpunkte innerhalb des Textes anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Bindestrich-Zeichen zeigt eine sichtbare Zeilenumbruchmöglichkeit an. Auch wenn die Zeile an diesem Punkt tatsächlich nicht umgebrochen wird, wird der Bindestrich dennoch angezeigt.
- U+00AD (SHY)
  - : Ein unsichtbarer, "**s**oft" **hy**phen. Dieses Zeichen wird nicht sichtbar gerendert; stattdessen markiert es eine Stelle, an der der Browser das Wort bei Bedarf trennen soll. In HTML wird `&shy;` verwendet, um einen weichen Trennstrich einzufügen.

> [!NOTE]
> Wenn das HTML-Element [`<wbr>`](/de/docs/Web/HTML/Reference/Elements/wbr) zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren der Texttrennung

Dieses Beispiel verwendet drei Klassen, jede für eine mögliche Konfiguration der `hyphens`-Eigenschaft.

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
- [Leitfaden zum Umbrechen und Trennen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
