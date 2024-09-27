---
title: page-break-after
slug: Web/CSS/page-break-after
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

> [!WARNING]
> Diese Eigenschaft wurde durch die {{cssxref("break-after")}}-Eigenschaft ersetzt.

Die **`page-break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft passt Seitenumbrüche _nach_ dem aktuellen Element an.

{{EmbedInteractiveExample("pages/css/page-break-after.html")}}

## Syntax

```css
/* Keyword values */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Global values */
page-break-after: inherit;
page-break-after: initial;
page-break-after: revert;
page-break-after: revert-layer;
page-break-after: unset;
```

Diese Eigenschaft gilt für Block-Elemente, die eine Box erzeugen. Sie gilt nicht für ein leeres {{HTMLElement("div")}}, das keine Box generieren wird.

### Werte

- `auto`
  - : Anfangswert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `always`
  - : Erzwingt immer Seitenumbrüche nach dem Element.
- `avoid`
  - : Vermeidet Seitenumbrüche nach dem Element.
- `left`
  - : Erzwingt Seitenumbrüche nach dem Element, sodass die nächste Seite als linke Seite formatiert wird. Dies ist die Seite, die auf der linken Seite des Buchrückens oder die Rückseite der Seite beim beidseitigen Drucken platziert ist.
- `right`
  - : Erzwingt Seitenumbrüche nach dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Dies ist die Seite, die auf der rechten Seite des Buchrückens oder die Vorderseite der Seite beim beidseitigen Drucken platziert ist.
- `recto`
  - : Wenn die Seiten von links nach rechts verlaufen, wirkt dies wie `right`. Wenn die Seiten von rechts nach links verlaufen, wirkt dies wie `left`.
- `verso`
  - : Wenn die Seiten von links nach rechts verlaufen, wirkt dies wie `left`. Wenn die Seiten von rechts nach links verlaufen, wirkt dies wie `right`.

## Seitenumbruch-Aliasse

Die `page-break-after`-Eigenschaft ist jetzt eine veraltete Eigenschaft, die durch {{cssxref("break-after")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-after` von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Aliasse behandelt werden:

| page-break-after | break-after |
| ---------------- | ----------- |
| `auto`           | `auto`      |
| `left`           | `left`      |
| `right`          | `right`     |
| `avoid`          | `avoid`     |
| `always`         | `page`      |

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Seitenumbruch nach Fußnoten setzen

```css
/* move to a new page after footnotes */
div.footnotes {
  page-break-after: always;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("break-before")}}, {{cssxref("break-after")}}, {{cssxref("break-inside")}}
- {{cssxref("page-break-before")}}, {{cssxref("page-break-inside")}}
- {{cssxref("orphans")}}, {{cssxref("widows")}}
