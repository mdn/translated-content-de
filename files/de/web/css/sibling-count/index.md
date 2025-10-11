---
title: sibling-count()
slug: Web/CSS/sibling-count
l10n:
  sourceCommit: a4059d2f0a26110e764e16545b6f83b076e5ac24
---

{{SeeCompatTable}}

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) gibt eine Ganzzahl zurück, die die Gesamtzahl der Geschwister-DOM-Elemente (direkte Kinder des Elternteils) des Elements darstellt, auf dem sie angewendet wird, einschließlich des Elements selbst.

> [!NOTE]
> Die {{CSSxRef("counter()")}} Funktion liefert ein ähnliches Ergebnis, gibt jedoch einen `<string>` zurück (was besser für [generierten Inhalt](/de/docs/Web/CSS/CSS_generated_content) geeignet ist), während `sibling-count()` ein `<integer>` zurückgibt (der für Berechnungen verwendet werden kann).

## Syntax

```css-nolint
sibling-count()
```

### Parameter

Die `sibling-count()` Funktion akzeptiert keine Parameter.

### Rückgabewert

Eine Ganzzahl; die Gesamtzahl der Geschwister-DOM-Elemente einschließlich des Elements selbst.

## Beispiele

### Dynamische Spaltenanzahl

Dieses Beispiel zeigt, wie die Breite jedes Elements in einer Liste basierend auf der Anzahl der Elemente festgelegt wird, sodass jedes Kind in seiner eigenen Spalte platziert werden kann.

#### HTML

Wir fügen einen {{htmlelement("ul")}} Container und mehrere {{htmlelement("li")}} Elemente als Kinder hinzu.

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

Wir teilen die {{CSSxRef("width")}} jedes Listenelements durch die Anzahl der direkten Kinder, die die Liste enthält. Wir setzen auch jedes ungerade Element auf eine andere {{CSSxRef("background-color")}}, um den Effekt besser zu demonstrieren.

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
