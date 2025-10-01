---
title: inherit
slug: Web/CSS/inherit
l10n:
  sourceCommit: 7e1296fc0722c86fb7e15487b5e9626597c7a2a0
---

Das **`inherit`** [CSS](/de/docs/Web/CSS)-Schlüsselwort bewirkt, dass das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der Eigenschaft von seinem Elternelement übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Bei [geerbten Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und ist nur erforderlich, um eine andere Regel zu überschreiben.

> [!NOTE]
> Die Vererbung erfolgt immer vom Elternelement im Dokumentbaum, auch wenn das Elternelement nicht der enthaltende Block ist.

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

In diesem Beispiel könnten die `h2`-Elemente innerhalb der Seitenleiste unterschiedliche Farben haben. Betrachten Sie zum Beispiel eines, das ein Kind eines `div` ist, auf das die Regel zutrifft:

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
- Verwenden Sie das {{cssxref("initial")}} Schlüsselwort, um eine Eigenschaft auf ihren Ausgangswert zu setzen.
- Verwenden Sie das {{cssxref("revert")}} Schlüsselwort, um eine Eigenschaft auf den vom Benutzeragenten-Stylesheet (oder, falls vorhanden, auf Benutzerstile) festgelegten Wert zurückzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}} Schlüsselwort, um eine Eigenschaft auf den in einer vorherigen Kaskadierungs-Ebene festgelegten Wert zurückzusetzen.
- Verwenden Sie das {{cssxref("unset")}} Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie erbt, oder auf ihren Ausgangswert, wenn nicht.
- Die {{cssxref("all")}} Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren ursprünglichen, geerbten, zurückgesetzten oder unbestimmten Zustand zurückzusetzen.
