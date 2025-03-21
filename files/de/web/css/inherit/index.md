---
title: inherit
slug: Web/CSS/inherit
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Das **`inherit`** CSS-Schlüsselwort bewirkt, dass das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) der Eigenschaft vom Elternelement übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und wird nur benötigt, um eine andere Regel zu überschreiben.

> [!NOTE]
> Vererbung erfolgt immer vom Elternelement im Dokumentenbaum, selbst wenn das Elternelement nicht der umschließende Block ist.

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

In diesem Beispiel könnten die `h2`-Elemente innerhalb der Seitenleiste unterschiedliche Farben haben. Betrachten Sie zum Beispiel eines, das ein Kind eines `div` ist, das durch die Regel übereinstimmt:

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
- Verwenden Sie das {{cssxref("initial")}} Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("revert")}} Schlüsselwort, um eine Eigenschaft auf den vom User-Agent-Stylesheet festgelegten Wert zurückzusetzen (oder durch Benutzerstile, falls vorhanden).
- Verwenden Sie das {{cssxref("revert-layer")}} Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}} Schlüsselwort, um eine Eigenschaft auf ihren vererbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}} Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren Anfangs-, vererbten, zurückgesetzten oder nicht gesetzten Zustand zurückzusetzen.
