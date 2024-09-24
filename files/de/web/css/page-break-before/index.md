---
title: Seitenumbruch-vor
slug: Web/CSS/page-break-before
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

> [!WARNING]
> Diese Eigenschaft wurde durch die Eigenschaft {{cssxref("break-before")}} ersetzt.

Die **`page-break-before`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert Seitenumbrüche _vor_ dem aktuellen Element.

Diese Eigenschaft gilt für Blockelemente, die einen Rahmen erzeugen. Sie gilt nicht für ein leeres {{ HTMLElement("div") }}, das keinen Rahmen erzeugt.

{{EmbedInteractiveExample("pages/css/page-break-before.html")}}

## Syntax

```css
/* Schlüsselwortwerte */
page-break-before: auto;
page-break-before: always;
page-break-before: avoid;
page-break-before: left;
page-break-before: right;
page-break-before: recto;
page-break-before: verso;

/* Globale Werte */
page-break-before: inherit;
page-break-before: initial;
page-break-before: revert;
page-break-before: revert-layer;
page-break-before: unset;
```

### Werte

- `auto`
  - : Initialwert. Automatische Seitenumbrüche (weder erzwungen noch verboten).
- `always`
  - : Erzwungene Seitenumbrüche immer vor dem Element.
- `avoid`
  - : Vermeidung von Seitenumbrüchen vor dem Element.
- `left`
  - : Erzwingt Seitenumbrüche vor dem Element, sodass die nächste Seite als linke Seite formatiert wird. Es ist die Seite, die auf der linken Seite des Buchrückens oder der Rückseite der Seite beim Duplexdruck platziert wird.
- `right`
  - : Erzwingt Seitenumbrüche vor dem Element, sodass die nächste Seite als rechte Seite formatiert wird. Es ist die Seite, die auf der rechten Seite des Buchrückens oder der Vorderseite der Seite beim Duplexdruck platziert wird.
- `recto`
  - : Wenn Seiten von links nach rechts fortschreiten, wirkt dies wie `right`. Wenn Seiten von rechts nach links fortschreiten, wirkt dies wie `left`.
- `verso`
  - : Wenn Seiten von links nach rechts fortschreiten, wirkt dies wie `left`. Wenn Seiten von rechts nach links fortschreiten, wirkt dies wie `right`.

## Seitenumbruch-Aliasse

Die `page-break-before` Eigenschaft ist nun eine veraltete Eigenschaft, die durch {{cssxref("break-before")}} ersetzt wurde.

Aus Kompatibilitätsgründen sollte `page-break-before` von Browsern als Alias für `break-before` behandelt werden. Dadurch wird sichergestellt, dass Seiten, die `page-break-before` verwenden, weiterhin wie vorgesehen funktionieren. Ein Teil der Werte sollte wie folgt als Alias behandelt werden:

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

### Vermeiden Sie einen Seitenumbruch vor einem Element

```css
/* Vermeiden Sie einen Seitenumbruch vor div-Elementen der Klasse note */
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
