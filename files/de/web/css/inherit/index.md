---
title: inherit
slug: Web/CSS/inherit
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **`inherit`** CSS-Schlüsselwort bewirkt, dass das Element den [berechneten Wert](/de/docs/Web/CSS/computed_value) der Eigenschaft von seinem Elternelement übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Für [vererbte Eigenschaften](/de/docs/Web/CSS/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und ist nur erforderlich, um eine andere Regel zu überschreiben.

> [!NOTE]
> Die Vererbung erfolgt immer vom Elternelement im Dokumentbaum, auch wenn das Elternelement nicht der umschließende Block ist.

## Beispiele

### Bestimmte Elemente von einer Regel ausschließen

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

In diesem Beispiel könnten die `h2`-Elemente innerhalb der Seitenleiste unterschiedliche Farben haben. Betrachten Sie ein Beispiel, bei dem eines von ihnen ein Kind eines `div` ist, das durch die Regel übereinstimmt:

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

- [Vererbung](/de/docs/Web/CSS/Inheritance)
- Verwenden Sie das {{cssxref("initial")}} Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das {{cssxref("revert")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der im User-Agent-Stylesheet (oder durch Benutzerstile, falls vorhanden) festgelegt wurde.
- Verwenden Sie das {{cssxref("revert-layer")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einem vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}} Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}} Eigenschaft ermöglicht es Ihnen, alle Eigenschaften auf ihren Anfangs-, geerbten, zurückgesetzten oder ungelöschten Zustand gleichzeitig zurückzusetzen.
