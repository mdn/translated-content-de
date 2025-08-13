---
title: hyphens
slug: Web/CSS/hyphens
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`hyphens`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt an, wie Wörter getrennt werden sollen, wenn der Text über mehrere Zeilen umbricht. Sie kann die Silbentrennung vollständig verhindern, Silbentrennung an manuell angegebenen Punkten innerhalb des Textes zulassen oder dem Browser erlauben, automatisch Bindestriche dort einzufügen, wo es angemessen ist.

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
> In der obigen Demo enthält der String "An extraordinarily long English word!" das versteckte `&shy;` (weiche Bindestrich)-Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine potenzielle Stelle für das Einfügen eines Bindestrichs anzugeben, wenn `hyphens: manual;` angegeben ist.

Silbentrennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut bestimmt, und Browser trennen nur, wenn dieses Attribut vorhanden ist und das passende Trennwörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang)-Attribut verwendet werden.

> [!NOTE]
> Die Regeln, die definieren, wie die Silbentrennung durchgeführt wird, sind nicht explizit in der Spezifikation definiert, sodass die genaue Trennung zwischen den Browsern variieren kann.

Falls unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Silbentrennungszeichen anzugeben, das am Ende der gebrochenen Zeile verwendet werden soll.

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

Die `hyphens`-Eigenschaft wird als einzelner Schlüsselwortwert angegeben, der aus der untenstehenden Liste ausgewählt wird.

### Werte

- `none`
  - : Wörter werden nicht an Zeilenumbrüchen gebrochen, selbst wenn Zeichen innerhalb der Wörter auf Breakpoints hinweisen. Zeilenumbruch erfolgt nur an Leerzeichen.
- `manual`
  - : Standardwert. Wörter werden für Zeilenumbrüche nur dort gebrochen, wo Zeichen innerhalb des Wortes Breakpoints vorschlagen. Siehe [Vorschlagen von Zeilenbruchmöglichkeiten](#vorschlagen_von_zeilenbruchmöglichkeiten) weiter unten für Details.
- `auto`
  - : Der Browser kann Wörter nach eigenem Ermessen an geeigneten Silbentrennpunkten automatisch brechen, gemäß den Regeln, die er wählt. Allerdings überschreiten vorgeschlagene Zeilenbruchmöglichkeiten (siehe [Vorschlagen von Zeilenbruchmöglichkeiten](#vorschlagen_von_zeilenbruchmöglichkeiten) weiter unten) die automatische Auswahl von Bruchpunkten, wenn sie vorhanden sind.

> [!NOTE]
> Das Verhalten der `auto`-Einstellung hängt davon ab, ob die Sprache korrekt markiert ist, um die passenden Silbentrennungsregeln auszuwählen. Sie müssen eine Sprache mit dem `lang`-HTML-Attribut angeben, um sicherzustellen, dass in dieser Sprache die automatische Silbentrennung angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/word-break#break-all) anwenden, werden keine Bindestriche angezeigt, selbst wenn das Wort an einer Trennstelle gebrochen wird.

## Vorschlagen von Zeilenbruchmöglichkeiten

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell potenzielle Zeilenbruchpunkte im Text anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Bindestrichzeichen gibt eine sichtbare Zeilenbruchmöglichkeit an. Auch wenn die Zeile an dieser Stelle nicht tatsächlich gebrochen wird, wird der Bindestrich dennoch dargestellt.
- U+00AD (SHY)
  - : Ein unsichtbarer, "**s**oft" **hy**phen. Dieses Zeichen wird nicht sichtbar dargestellt; stattdessen markiert es einen Ort, an dem der Browser das Wort brechen sollte, wenn Silbentrennung erforderlich ist. In HTML verwenden Sie `&shy;`, um einen weichen Bindestrich einzufügen.

> [!NOTE]
> Wenn das HTML-Element [`<wbr>`](/de/docs/Web/HTML/Reference/Elements/wbr) zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen der Texthyphens

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
- [Leitfaden zum Umbruch und zur Trennung von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
