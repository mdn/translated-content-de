---
title: page-break-after
slug: Web/CSS/page-break-after
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

> [!WARNING]
> Diese Eigenschaft wurde durch die {{cssxref("break-after")}} Eigenschaft ersetzt.

Die **`page-break-after`** [CSS](/de/docs/Web/CSS) Eigenschaft passt Seitenumbrüche nach dem aktuellen Element an.

{{EmbedInteractiveExample("pages/css/page-break-after.html")}}

## Syntax

```css
/* Keyword-Werte */
page-break-after: auto;
page-break-after: always;
page-break-after: avoid;
page-break-after: left;
page-break-after: right;
page-break-after: recto;
page-break-after: verso;

/* Globale Werte */
page-break-after: inherit;
page-break-after: initial;
page-break-after: revert;
page-break-after: revert-layer;
page-break-after: unset;
```

Diese Eigenschaft gilt für Blockelemente, die eine Box generieren. Sie wird nicht auf ein leeres {{HTMLElement("div")}} angewendet, das keine Box generiert.

### Werte

- `auto`
  - : Ursprungswert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `always`
  - : Erzwingt immer Seitenumbrüche nach dem Element.
- `avoid`
  - : Vermeidet Seitenumbrüche nach dem Element.
- `left`
  - : Erzwingt Seitenumbrüche nach dem Element, sodass die nächste Seite als linke Seite formatiert wird. Es ist die Seite, die sich links vom Buchrücken befindet oder die Rückseite der Seite im Duplexdruck.
- `right`
  - : Erzwingt Seitenumbrüche nach dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Es ist die Seite, die sich rechts vom Buchrücken befindet oder die Vorderseite der Seite im Duplexdruck.
- `recto`
  - : Wenn die Seiten von links nach rechts fortschreiten, wirkt dies wie `right`. Wenn die Seiten von rechts nach links fortschreiten, wirkt dies wie `left`.
- `verso`
  - : Wenn die Seiten von links nach rechts fortschreiten, wirkt dies wie `left`. Wenn die Seiten von rechts nach links fortschreiten, wirkt dies wie `right`.

## Seitenumbruch-Aliase

Die `page-break-after` Eigenschaft ist jetzt eine veraltete Eigenschaft, ersetzt durch {{cssxref("break-after")}}.

Aus Kompatibilitätsgründen sollte `page-break-after` von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias behandelt werden:

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

### Einsetzen eines Seitenumbruchs nach Fußnoten

```css
/* geht nach Fußnoten zu einer neuen Seite über */
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
