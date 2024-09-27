---
title: hyphens
slug: Web/CSS/hyphens
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`hyphens`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt an, wie Wörter getrennt werden sollen, wenn der Text über mehrere Zeilen umgebrochen wird. Sie kann die Silbentrennung komplett verhindern, an manuell angegebenen Stellen im Text trennen oder dem Browser erlauben, automatisch an geeigneten Stellen Bindestriche einzufügen.

{{EmbedInteractiveExample("pages/css/hyphens.html")}}

> [!NOTE]
> Im obigen Demo enthält der String "An extraordinarily long English word!" das versteckte `&shy;` (weiches Trennzeichen) Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um einen möglichen Punkt für die Trennung zu kennzeichnen, wenn `hyphens: manual;` angegeben ist.

Die Trennregeln sind sprachspezifisch. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut bestimmt, und Browser führen die Silbentrennung nur durch, wenn dieses Attribut vorhanden ist und das entsprechende Trennwörterbuch verfügbar ist. In XML muss das [`xml:lang`](/de/docs/Web/SVG/Attribute/xml:lang) Attribut verwendet werden.

> [!NOTE]
> Die Regeln, welche definieren, wie die Silbentrennung durchgeführt wird, sind in der Spezifikation nicht explizit festgelegt, sodass die genaue Trennung je nach Browser variieren kann.

Falls unterstützt, kann {{cssxref("hyphenate-character")}} verwendet werden, um ein alternatives Trennzeichen für den Umbruch am Ende der Linie anzugeben.

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

Die `hyphens` Eigenschaft wird als ein einzelner Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

### Werte

- `none`
  - : Wörter werden bei Zeilenumbrüchen nicht getrennt, selbst wenn Zeichen innerhalb der Wörter auf Bruchstellen hinweisen. Zeilen werden nur an Leerzeichen umbrochen.
- `manual`
  - : Standardwert. Wörter werden für Zeilenumbrüche nur dort getrennt, wo Zeichen innerhalb des Wortes Trennmöglichkeiten vorschlagen. Siehe [Vorschläge für Trennmöglichkeiten](#vorschläge_für_trennmöglichkeiten) unten für Details.
- `auto`
  - : Der Browser kann Wörter automatisch an geeigneten Trennstellen brechen, basierend auf den von ihm angewandten Regeln. Jedoch werden vorgeschlagene Trennmöglichkeiten (siehe [Vorschläge für Trennmöglichkeiten](#vorschläge_für_trennmöglichkeiten) unten) die automatische Auswahl von Trennstellen überschreiben, wenn vorhanden.

> [!NOTE]
> Das Verhalten der `auto` Einstellung hängt davon ab, dass die Sprache korrekt markiert ist, um die entsprechenden Silbentrennungsregeln auszuwählen. Sie müssen eine Sprache mittels des `lang` HTML Attributs angeben, um zu garantieren, dass die automatische Silbentrennung in dieser Sprache angewendet wird.

> [!NOTE]
> Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/word-break#break-all) anwenden, werden keine Bindestriche angezeigt, selbst wenn das Wort an einer Trennstelle gebrochen wird.

## Vorschläge für Trennmöglichkeiten

Es gibt zwei Unicode-Zeichen, die verwendet werden, um mögliche Zeilenumbrüche innerhalb von Text manuell anzugeben:

- U+2010 (HYPHEN)
  - : Das Zeichen „harter“ Bindestrich markiert eine sichtbare Trennmöglichkeit. Selbst wenn die Zeile nicht wirklich an dieser Stelle gebrochen wird, wird der Bindestrich dennoch gerendert.
- U+00AD (SHY)
  - : Ein unsichtbarer, "**s**ofter" **Hy**phen. Dieses Zeichen wird nicht sichtbar gerendert; stattdessen markiert es einen Punkt, an dem der Browser das Wort brechen soll, falls eine Silbentrennung notwendig ist. In HTML nutzen Sie `&shy;`, um einen weichen Bindestrich einzufügen.

> [!NOTE]
> Wenn das HTML Element [`<wbr>`](/de/docs/Web/HTML/Element/wbr) zu einem Zeilenumbruch führt, wird kein Bindestrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegung der Texttrennung

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
- {{cssxref("overflow-wrap")}} (früher `word-wrap`)
- {{cssxref("word-break")}}
- [Leitfaden zum Umbruch und Trennen von Text](/de/docs/Web/CSS/CSS_text/Wrapping_breaking_text)
