---
title: inherit
slug: Web/CSS/inherit
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`inherit`** CSS-Schlüsselwort sorgt dafür, dass das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der Eigenschaft von seinem Elternelement übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und wird nur benötigt, um eine andere Regel zu überschreiben.

> [!NOTE]
> Die Vererbung erfolgt immer vom Elternelement im Dokument-Baum, sogar wenn das Elternelement nicht der enthaltende Block ist.

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

In diesem Beispiel könnten die `h2`-Elemente innerhalb der Seitenleiste unterschiedliche Farben haben. Betrachten Sie zum Beispiel eines, das ein Kind eines `div` ist, das durch die Regel getroffen wird:

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
- Verwenden Sie das Schlüsselwort {{cssxref("initial")}}, um eine Eigenschaft auf ihren Anfangswert zu setzen.
- Verwenden Sie das Schlüsselwort {{cssxref("revert")}}, um eine Eigenschaft auf den Wert zurückzusetzen, der durch das Benutzer-Agent-Stylesheet festgelegt wurde (oder durch Benutzerstile, falls vorhanden).
- Verwenden Sie das Schlüsselwort {{cssxref("revert-layer")}}, um eine Eigenschaft auf den in einer vorherigen Kaskadenschicht festgelegten Wert zurückzusetzen.
- Verwenden Sie das Schlüsselwort {{cssxref("unset")}}, um eine Eigenschaft auf ihren geerbten Wert zu setzen, falls sie vererbt, oder auf ihren Anfangswert, falls nicht.
- Die Eigenschaft {{cssxref("all")}} ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren Anfangs-, geerbten, zurückgesetzten oder nicht festgelegten Zustand zurückzusetzen.
