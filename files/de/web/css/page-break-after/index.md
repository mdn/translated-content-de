---
title: page-break-after
slug: Web/CSS/page-break-after
l10n:
  sourceCommit: cebc05cfe508d5cd8c6a98359a3913cf19a707d3
---

{{CSSRef}}{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaft wurde durch die Eigenschaft {{cssxref("break-after")}} ersetzt.

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

Diese Eigenschaft gilt für Blockelemente, die ein Kästchen erzeugen. Sie gilt nicht für ein leeres {{HTMLElement("div")}}, das kein Kästchen erzeugen wird.

### Werte

- `auto`
  - : Anfangswert. Automatische Seitenumbrüche (weder erzwungen noch verhindert).
- `always`
  - : Erzwingt immer einen Seitenumbruch nach dem Element.
- `avoid`
  - : Vermeidet Seitenumbrüche nach dem Element.
- `left`
  - : Erzwingt Seitenumbrüche nach dem Element, sodass die nächste Seite als linke Seite formatiert wird. Es ist die Seite, die auf der linken Seite des Buchrückens oder auf der Rückseite der Seite im Duplexdruck platziert wird.
- `right`
  - : Erzwingt Seitenumbrüche nach dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Es ist die Seite, die auf der rechten Seite des Buchrückens oder auf der Vorderseite der Seite im Duplexdruck platziert wird.
- `recto`
  - : Wenn die Seiten von links nach rechts verlaufen, verhält sich dies wie `right`. Wenn die Seiten von rechts nach links verlaufen, verhält sich dies wie `left`.
- `verso`
  - : Wenn die Seiten von links nach rechts verlaufen, verhält sich dies wie `left`. Wenn die Seiten von rechts nach links verlaufen, verhält sich dies wie `right`.

## Seitenumbruch-Aliase

Die Eigenschaft `page-break-after` ist jetzt eine veraltete Eigenschaft und wurde durch {{cssxref("break-after")}} ersetzt.

Aus Kompatibilitätsgründen sollte `page-break-after` von Browsern als Alias von `break-after` behandelt werden. Dies stellt sicher, dass Websites, die `page-break-after` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Aliase behandelt werden:

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
