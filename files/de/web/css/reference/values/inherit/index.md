---
title: inherit
slug: Web/CSS/Reference/Values/inherit
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`inherit`**-[CSS](/de/docs/Web/CSS) Schlüsselwort bewirkt, dass das Element den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) der Eigenschaft von seinem übergeordneten Element übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Für [vererbte Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und ist nur notwendig, um eine andere Regel zu überschreiben.

> [!NOTE]
> Vererbung erfolgt immer vom übergeordneten Element im Dokumentenbaum, auch wenn das übergeordnete Element nicht der umschließende Block ist.

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

In diesem Beispiel könnten die `h2`-Elemente innerhalb der Seitenleiste unterschiedliche Farben haben. Betrachten wir eines, das ein Kind eines `div` wäre, das durch die Regel ausgewählt wird:

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
- Verwenden Sie das {{cssxref("initial")}} Schlüsselwort, um eine Eigenschaft auf ihren Anfangswert zurückzusetzen.
- Verwenden Sie das {{cssxref("revert")}} Schlüsselwort, um eine Eigenschaft auf den vom Benutzeragenten-Stil definierten Wert (oder von Benutzerstilen, falls vorhanden) zurückzusetzen.
- Verwenden Sie das {{cssxref("revert-layer")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenebene festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}} Schlüsselwort, um eine Eigenschaft auf ihren geerbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}} Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren Anfangs-, geerbten, rückgängig gemachten oder ungesetzten Zustand zurückzusetzen.
