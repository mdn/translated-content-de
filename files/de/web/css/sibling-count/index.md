---
title: sibling-count()
slug: Web/CSS/sibling-count
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

{{SeeCompatTable}}

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) gibt eine Ganzzahl zurück, die die Gesamtanzahl der Geschwister-DOM-Elemente (direkte Kinder des Elternteils) des Elements darstellt, auf dem sie angewendet wird, einschließlich des Elements selbst.

> [!NOTE]
> Die Funktion {{CSSxRef("counter()")}} bietet ein ähnliches Ergebnis, gibt jedoch einen `<string>` zurück, während `sibling-count()` ein `<integer>` zurückgibt, das für Berechnungen verwendet werden kann.

## Syntax

```css-nolint
sibling-count()
```

### Parameter

Die Funktion `sibling-count()` akzeptiert keine Parameter.

### Rückgabewert

Eine Ganzzahl; die Gesamtanzahl der Geschwister-DOM-Elemente einschließlich des Elements selbst.

## Beispiele

### Dynamische Spaltenanzahl

Dieses Beispiel zeigt, wie die Breite jedes Elements in einer Liste basierend auf der Anzahl der Elemente festgelegt wird, sodass jedes Kind in einer eigenen Spalte platziert wird.

#### HTML

Wir fügen einen {{htmlelement("ul")}}-Container und mehrere {{htmlelement("li")}}-Elemente als Kinder ein.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

Wir teilen die {{CSSxRef("width")}} jedes Listenelements durch die Anzahl der direkten Kinder, die die Liste enthält. Wir setzen auch jedes ungerade Element mit einer {{CSSxRef("background-color")}}, um den resultierenden Effekt besser zu veranschaulichen.

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
}

li {
  width: calc(100% / sibling-count());
}

li:nth-of-type(odd) {
  background-color: rgb(0 0 0 / 0.05);
}
```

#### Ergebnisse

{{EmbedLiveSample("Dynamic column count", "300", "80")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sibling-index()")}}
- {{CSSxRef("calc")}}
