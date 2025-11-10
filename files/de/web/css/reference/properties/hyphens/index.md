---
title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`hyphens`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt fest, wie Wörter getrennt werden sollten, wenn Text über mehrere Zeilen umgebrochen wird. Sie kann die Trennung vollständig verhindern, an manuell festgelegten Punkten im Text trennen oder dem Browser ermöglichen, automatisch Trennstriche einzufügen, wo es angebracht ist.

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
> Im obigen Beispiel enthält der String "An extraordinarily long English word!" das versteckte `&shy;` (weiches Trennzeichen)-Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine potenzielle Stelle für das Einfügen eines Trennstrichs zu markieren, wenn `hyphens: manual;` angegeben ist.

Trennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut bestimmt, und Browser trennen nur, wenn dieses Attribut vorhanden ist und das entsprechende Trennungswörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang)-Attribut verwendet werden.

> [!NOTE]
> Die Regeln, die definieren, wie die Trennung durchgeführt wird, sind nicht explizit durch die Spezifikation definiert, sodass die genaue Trennung von Browser zu Browser variieren kann.

Falls unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen anzugeben, das am Ende der umgebrochenen Zeile verwendet wird.

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

Die `hyphens`-Eigenschaft wird als ein einzelner Schlüsselwortwert aus der folgenden Liste angegeben.

### Werte

- `none`
  - : Wörter werden nicht bei Zeilenumbrüchen getrennt, selbst wenn Zeichen innerhalb der Wörter auf Trennpunkte hinweisen. Zeilen umbrechen nur bei Leerzeichen.
- `manual`
  - : Standardwert. Wörter werden nur für Zeilenumbrüche getrennt, wo Zeichen innerhalb des Wortes auf Trennmöglichkeiten hinweisen. Siehe [Vorschlagen von Trennmöglichkeiten](#vorschlagen_von_trennmöglichkeiten) unten für Details.
- `auto`
  - : Der Browser kann Wörter automatisch an geeigneten Trennungsstellen trennen, nach welchen Regeln er auch immer wählt. Allerdings werden vorgeschlagene Trennmöglichkeiten (siehe [Vorschlagen von Trennmöglichkeiten](#vorschlagen_von_trennmöglichkeiten) unten) die automatische Trennpunktauswahl überschreiben, wenn sie vorhanden sind.

> [!NOTE]
> Das Verhalten der `auto`-Einstellung hängt davon ab, dass die Sprache korrekt markiert ist, um die entsprechenden Trennungsregeln auszuwählen. Sie müssen eine Sprache mit dem `lang` HTML-Attribut angeben, um sicherzustellen, dass die automatische Trennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/Reference/Properties/word-break#break-all) anwenden, werden keine Trennzeichen angezeigt, selbst wenn das Wort an einem Trennpunkt umbricht.

## Vorschlagen von Trennmöglichkeiten

Es gibt zwei Unicode-Zeichen, die verwendet werden können, um manuell potenzielle Trennpunkte innerhalb von Text anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Trennzeichen stellt eine sichtbare Trennmöglichkeit dar. Selbst wenn die Zeile an diesem Punkt nicht tatsächlich umbricht, wird der Bindestrich dennoch gerendert.
- U+00AD (SHY)
  - : Ein unsichtbares, "**s**oftes" **Tren**nzeichen. Dieses Zeichen wird nicht sichtbar gerendert; stattdessen markiert es eine Stelle, an der der Browser das Wort trennen sollte, wenn dies notwendig ist. In HTML verwenden Sie `&shy;`, um ein weiches Trennzeichen einzufügen.

> [!NOTE]
> Wenn das HTML-Element [`<wbr>`](/de/docs/Web/HTML/Reference/Elements/wbr) zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Text-Trennung angeben

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
- {{cssxref("overflow-wrap")}} (ehemals `word-wrap`)
- {{cssxref("word-break")}}
- [Leitfaden zum Umbruch und Trennen von Text](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
