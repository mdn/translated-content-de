---
title: "`hyphens` CSS property"
short-title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
l10n:
  sourceCommit: 35704c8c6b8065b8a288d0f6454e4a0387538dcc
---

Die **`hyphens`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt fest, wie Wörter bei einem Zeilenumbruch über mehrere Zeilen hinweg getrennt werden sollen.

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

Der Beispielsatz "An extraordinarily long English word!" enthält das verborgene `&shy;` (weiches Trennzeichen)-Zeichen: `An extra&shy;ordinarily long English word!`. Dieses Zeichen wird verwendet, um eine mögliche Stelle für das Einfügen eines Trennstrichs anzugeben, wenn `hyphens: manual;` festgelegt ist.

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

Die `hyphens`-Eigenschaft wird als ein einziges Schlüsselwort aus der nachstehenden Liste angegeben.

### Werte

- `none`
  - : Wörter werden bei Zeilenumbrüchen nicht getrennt, selbst wenn Zeichen innerhalb der Wörter auf mögliche Trennstellen hinweisen. Zeilenumbrüche erfolgen nur bei Leerzeichen.
- `manual`
  - : Standardwert. Wörter werden nur an Stellen getrennt, an denen Zeichen innerhalb des Wortes Trennmöglichkeiten darstellen. Siehe [Vorschlagen von Trennmöglichkeiten](#vorschlagen_von_trennmöglichkeiten) unten für Details.
- `auto`
  - : Der Browser kann Wörter automatisch an geeigneten Trennstellen trennen, gemäß seinen eigenen Regeln. Allerdings werden vorgeschlagene Trennmöglichkeiten (siehe [Vorschlagen von Trennmöglichkeiten](#vorschlagen_von_trennmöglichkeiten) unten) vorrangig berücksichtigt, wenn sie vorhanden sind.

## Beschreibung

Die `hyphens`-Eigenschaft kann verwendet werden, um festzulegen, wie Wörter bei einem Zeilenumbruch über mehrere Zeilen hinweg getrennt werden sollen. Sie kann die Trennung komplett verhindern, nur an manuell angegebenen Punkten im Text trennen oder dem Browser erlauben, Trennstriche an passenden Stellen automatisch einzufügen.

Trennregeln sind sprachabhängig. In HTML wird die Sprache durch das [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut bestimmt. Browser trennen nur, wenn dieses Attribut vorhanden ist und das entsprechende Trennwortverzeichnis verfügbar ist. Das Verhalten der `auto`-Einstellung hängt davon ab, ob die Sprache korrekt markiert ist, um die passenden Trennregeln auszuwählen.

In XML muss das [`xml:lang`](/de/docs/Web/SVG/Reference/Attribute/xml:lang)-Attribut verwendet werden. Die Spezifikation definiert keine Regeln für die Trennung in XML-Inhalten, sodass die genaue Trennung von Browser zu Browser variieren kann.

Die {{cssxref("hyphenate-character")}}-Eigenschaft kann verwendet werden, um ein alternatives Trennzeichen für das Zeilenende anzugeben, anstelle des standardmäßig sprachspezifischen Trennzeichens.

Wenn Sie [`word-break: break-all`](/de/docs/Web/CSS/Reference/Properties/word-break#break-all) anwenden, werden keine Trennstriche angezeigt, selbst wenn das Wort an einer Trennstelle getrennt wird. Wenn Sie {{cssxref("text-wrap-mode","text-wrap-mode: nowrap")}} anwenden, erfolgt kein Umbruch, daher erscheinen keine Trennstriche.

### Vorschlagen von Trennmöglichkeiten

Es gibt zwei Unicode-Zeichen, die verwendet werden, um manuell mögliche Trennstellen im Text anzugeben:

- U+2010 (HYPHEN)
  - : Das "harte" Bindestrichzeichen zeigt eine sichtbare Trennmöglichkeit an. Selbst wenn die Zeile an dieser Stelle nicht tatsächlich umbrochen wird, wird der Bindestrich dennoch angezeigt.
- U+00AD (SHY)
  - : Ein unsichtbares, "weiches" Trennzeichen. Dieses Zeichen wird nicht sichtbar dargestellt; stattdessen markiert es eine Stelle, an der der Browser das Wort bei Bedarf trennen sollte. In HTML wird `&shy;` verwendet, um ein weiches Trennzeichen einzufügen.

> [!NOTE]
> Wenn das HTML [`<wbr>`](/de/docs/Web/HTML/Reference/Elements/wbr)-Element zu einem Zeilenumbruch führt, wird kein Trennstrich hinzugefügt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

Dieses Beispiel demonstriert die drei Werte der `hyphens`-Eigenschaft.

#### HTML

Wir fügen drei {{htmlelement("dd")}}-Elemente mit demselben Text, aber mit drei verschiedenen Klassen ein.

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

Jede der drei Klassen ist auf einen anderen `hyphens`-Wert gesetzt.

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

{{EmbedLiveSample("Basic example", "100%", 490)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("content")}}
- {{cssxref("overflow-wrap")}} (ehemals `word-wrap`)
- {{cssxref("word-break")}}
- [Leitfaden zum Umbruch und Trennen von Text](/de/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- [CSS Text](/de/docs/Web/CSS/Guides/Text) Modul
