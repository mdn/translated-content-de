---
title: inherit
slug: Web/CSS/inherit
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Das **`inherit`** CSS-Schlüsselwort bewirkt, dass das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) der Eigenschaft vom übergeordneten Element übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und wird nur benötigt, um eine andere Regel zu überschreiben.

> [!NOTE]
> Die Vererbung erfolgt immer vom übergeordneten Element im Dokumentbaum, auch wenn das übergeordnete Element nicht der umgebende Block ist.

## Beispiele

### Ausgewählte Elemente von einer Regel ausschließen

```css
/* Make second-level headers green */
h2 {
  color: green;
}

/* Leave those in the sidebar alone so they use their parent's color */
#sidebar h2 {
  color: inherit;
}
```

In diesem Beispiel könnten die `h2`-Elemente innerhalb der Seitenleiste unterschiedliche Farben haben. Betrachten wir beispielsweise eines davon, das ein Kind eines `div`-Elements wäre, das von der Regel getroffen wird:

```css
div#current {
  color: blue;
}
```

Dann wäre es blau.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- Verwenden Sie das {{cssxref("initial")}}-Schlüsselwort, um eine Eigenschaft auf ihren ursprünglichen Wert zu setzen.
- Verwenden Sie das {{cssxref("revert")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der durch das User-Agent-Stylesheet (oder durch Benutzerstile, falls vorhanden) festgelegt wurde.
- Verwenden Sie das {{cssxref("revert-layer")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}}-Schlüsselwort, um eine Eigenschaft auf den Wert zu setzen, der vererbt wird, wenn sie vererbt wird, oder auf ihren ursprünglichen Wert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihre ursprünglichen, vererbten, zurückgesetzten oder nicht gesetzten Zustände zurückzusetzen.
