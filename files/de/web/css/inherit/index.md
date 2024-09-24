---
title: erben
slug: Web/CSS/inherit
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Das **`inherit`** CSS-Schlüsselwort bewirkt, dass das Element den [berechneten Wert](/de/docs/Web/CSS/computed_value) der Eigenschaft von seinem Elternelement übernimmt. Es kann auf jede CSS-Eigenschaft angewendet werden, einschließlich der CSS-Kurzschreibweise {{cssxref("all")}}.

Bei [vererbten Eigenschaften](/de/docs/Web/CSS/Inheritance#inherited_properties) verstärkt dies das Standardverhalten und wird nur benötigt, um eine andere Regel zu überschreiben.

> [!NOTE]
> Die Vererbung erfolgt immer vom Elternelement im Dokumentbaum, auch wenn das Elternelement nicht der enthaltende Block ist.

## Beispiele

### Ausgewählte Elemente von einer Regel ausschließen

```css
/* Zweistufige Überschriften grün einfärben */
h2 {
  color: green;
}

/* Die im Sidebar bleiben unverändert und nutzen die Farbe des Elternteils */
#sidebar h2 {
  color: inherit;
}
```

In diesem Beispiel könnten die `h2`-Elemente innerhalb der Sidebar unterschiedliche Farben haben. Stellen Sie sich zum Beispiel eines vor, das ein Kind eines `div` wäre, das durch die Regel übereinstimmt:

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
- Verwenden Sie das {{cssxref("revert")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der durch das Benutzer-Stylesheet (oder durch Benutzerstile, falls vorhanden) festgelegt wurde.
- Verwenden Sie das {{cssxref("revert-layer")}} Schlüsselwort, um eine Eigenschaft auf den Wert zurückzusetzen, der in einer vorherigen Kaskadenschicht festgelegt wurde.
- Verwenden Sie das {{cssxref("unset")}} Schlüsselwort, um eine Eigenschaft auf ihren ererbten Wert zu setzen, wenn sie vererbt wird, oder auf ihren Anfangswert, wenn nicht.
- Die {{cssxref("all")}}-Eigenschaft ermöglicht es Ihnen, alle Eigenschaften gleichzeitig auf ihren Anfangs-, vererbten, zurückgesetzten oder ungültigen Zustand zurückzusetzen.
