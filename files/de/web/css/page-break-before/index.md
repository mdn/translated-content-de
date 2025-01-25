---
title: page-break-before
slug: Web/CSS/page-break-before
l10n:
  sourceCommit: cebc05cfe508d5cd8c6a98359a3913cf19a707d3
---

{{CSSRef}}{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaft wurde durch die Eigenschaft {{cssxref("break-before")}} ersetzt.

Die **`page-break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft passt Seitenumbrüche _vor_ dem aktuellen Element an.

Diese Eigenschaft gilt für Block-Elemente, die eine Box erzeugen. Sie gilt nicht für ein leeres {{ HTMLElement("div") }}, das keine Box erzeugt.

{{EmbedInteractiveExample("pages/css/page-break-before.html")}}

## Syntax

```css
/* Keyword values */
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Global values */
page-break-before: inherit;
page-break-before: initial;
page-break-before: revert;
page-break-before: revert-layer;
page-break-before: unset;
```

### Werte

- `auto`
  - : Ursprungswert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `always`
  - : Erzwingt immer Seitenumbrüche vor dem Element.
- `avoid`
  - : Vermeidet Seitenumbrüche vor dem Element.
- `left`
  - : Erzwingt Seitenumbrüche vor dem Element, sodass die nächste Seite als linke Seite formatiert wird. Dies ist die Seite, die auf der linken Seite des Buchrückens oder die Rückseite der Seite beim Duplexdruck platziert ist.
- `right`
  - : Erzwingt Seitenumbrüche vor dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Dies ist die Seite, die auf der rechten Seite des Buchrückens oder die Vorderseite der Seite beim Duplexdruck platziert ist.
- `recto`
  - : Wenn Seiten von links nach rechts fortschreiten, wirkt dies wie `right`. Wenn Seiten von rechts nach links fortschreiten, wirkt dies wie `left`.
- `verso`
  - : Wenn Seiten von links nach rechts fortschreiten, wirkt dies wie `left`. Wenn Seiten von rechts nach links fortschreiten, wirkt dies wie `right`.

## Seitenumbruch-Aliase

Die `page-break-before`-Eigenschaft ist nun eine veraltete Eigenschaft, die durch {{cssxref("break-before")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-before` von Browsern als Alias von `break-before` behandelt werden. Dadurch wird sichergestellt, dass Websites, die `page-break-before` verwenden, weiterhin wie beabsichtigt funktionieren. Ein Teil der Werte sollte wie folgt aliasiert werden:

| page-break-before | break-before |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `left`            | `left`       |
| `right`           | `right`      |
| `avoid`           | `avoid`      |
| `always`          | `page`       |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Vermeiden eines Seitenumbruchs vor einem Element

```css
/* Avoid page break before div elements of class note */
div.note {
  page-break-before: avoid;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-after")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
