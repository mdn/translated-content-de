---
title: Bindestriche
slug: Web/CSS/hyphens
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`hyphens`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie Wörter bei einem Zeilenumbruch getrennt werden sollten. Sie kann die Silbentrennung vollständig verhindern, an manuell angegebenen Stellen im Text trennen oder dem Browser erlauben, automatisch Bindestriche an passenden Stellen einzufügen.

{{EmbedInteractiveExample("pages/css/hyphens.html")}}

> [!NOTE]
> Im obigen Beispiel enthält der String "An extraordinarily long English word!" das versteckte `&shy;` (bedingter Trennstrich) Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine mögliche Stelle zur Einfügung eines Bindestrichs zu markieren, wenn `hyphens: manual;` angegeben ist.

Silbentrennungsregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut bestimmt, und Browser führen die Silbentrennung nur durch, wenn dieses Attribut vorhanden ist und das entsprechende Silbentrennungs-Wörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Attribute/xml:lang) Attribut verwendet werden.

> [!NOTE]
> Die Regeln, die definieren, wie Silbentrennung durchgeführt wird, sind nicht ausdrücklich durch die Spezifikation definiert, sodass die genaue Silbentrennung von Browser zu Browser variieren kann.

Wenn unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Silbentrennzeichen für das Zeilenende anzugeben.

## Syntax

```css
/* Schlüsselwortwerte */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Globale Werte */
hyphens: inherit;
hyphens: initial;
hyphens: revert;
hyphens: revert-layer;
hyphens: unset;
```

Die `hyphens` Eigenschaft wird als ein einzelner Schlüsselwortwert aus der unten stehenden Liste angegeben.

### Werte

- `none`
  - : Wörter werden nicht an Zeilenumbrüchen getrennt, selbst wenn Zeichen innerhalb der Wörter Trennungspunkte vorschlagen. Zeilen werden nur an Leerzeichen umbrochen.
- `manual`
  - : Standardwert. Wörter werden nur an Stellen für Zeilenumbrüche getrennt, wo Zeichen innerhalb des Wortes Trennmöglichkeiten vorschlagen. Siehe [Trennmöglichkeiten vorschlagen](#trennmöglichkeiten_vorschlagen) unten für Details.
- `auto`
  - : Der Browser kann Wörter an passenden Silbentrennstellen automatisch brechen, indem er beliebige Regeln befolgt, die er wählt. Allerdings werden empfohlene Trennmöglichkeiten (siehe [Trennmöglichkeiten vorschlagen](#trennmöglichkeiten_vorschlagen) unten) die automatische Auswahl der Trennstellen überschreiben, wenn vorhanden.

> [!NOTE]
> Das Verhalten der `auto` Einstellung hängt davon ab, dass die Sprache korrekt markiert wird, um die entsprechenden Silbentrennregeln auszuwählen. Sie müssen eine Sprache mit dem `lang` HTML-Attribut angeben, um sicherzustellen, dass die automatische Silbentrennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/word-break#break-all) anwenden, werden keine Bindestriche angezeigt, auch wenn das Wort an einer Silbentrennungsstelle bricht.

## Trennmöglichkeiten vorschlagen

Es gibt zwei Unicode-Zeichen, die verwendet werden können, um manuell mögliche Trennpunkte im Text anzugeben:

- U+2010 (HYPHEN)
  - : Das Zeichen für einen "harten" Bindestrich gibt eine sichtbare Trennmöglichkeit an. Selbst wenn die Zeile an dieser Stelle nicht tatsächlich gebrochen wird, wird der Bindestrich trotzdem gerendert.
- U+00AD (SHY)
  - : Ein unsichtbarer, "**s**oft" **Hy**phen. Dieses Zeichen wird nicht sichtbar gerendert; es markiert stattdessen eine Stelle, an der der Browser das Wort brechen sollte, wenn Silbentrennung notwendig ist. In HTML verwenden Sie `&shy;` um einen bedingten Trennstrich einzufügen.

> [!NOTE]
> Wenn das HTML [`<wbr>`](/de/docs/Web/HTML/Element/wbr) Element zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Textsilbentrennung festlegen

Dieses Beispiel verwendet drei Klassen, eine für jede mögliche Konfiguration der `hyphens` Eigenschaft.

#### HTML

```html
<dl>
  <dt><code>none</code>: kein Bindestrich; Überlauf bei Bedarf</dt>
  <dd lang="en" class="none">An extreme&shy;ly long English word</dd>
  <dt>
    <code>manual</code>: Bindestrich nur bei &amp;hyphen; oder &amp;shy; (bei Bedarf)
  </dt>
  <dd lang="en" class="manual">An extreme&shy;ly long English word</dd>
  <dt><code>auto</code>: Bindestriche, wo der Algorithmus entscheidet (bei Bedarf)</dt>
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
