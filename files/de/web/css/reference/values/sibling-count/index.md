---
title: sibling-count()
slug: Web/CSS/Reference/Values/sibling-count
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt eine Ganzzahl zurück, die die Gesamtzahl der Geschwister-DOM-Elemente (direkte Kinder des übergeordneten Elements) des Elements, auf dem sie angewendet wird, einschließlich des Elements selbst darstellt.

> [!NOTE]
> Die Funktion {{CSSxRef("counter()")}} liefert ein ähnliches Ergebnis, aber sie gibt einen `<string>` zurück (was für [erzeugten Inhalt](/de/docs/Web/CSS/Guides/Generated_content) besser geeignet ist), während `sibling-count()` ein `<integer>` zurückgibt (was für Berechnungen verwendet werden kann).

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

Dieses Beispiel zeigt, wie die Breite jedes Elements in einer Liste basierend auf der Anzahl der Elemente festgelegt wird, wodurch jedes Kind in seiner eigenen Spalte platziert werden kann.

#### HTML

Wir fügen einen {{htmlelement("ul")}}-Container und mehrere {{htmlelement("li")}}-Elementkinder ein.

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

Wir teilen die {{CSSxRef("width")}} jedes Listenelements durch die Anzahl der direkten Kinder, die die Liste enthält. Außerdem setzen wir jedes ungerade Element auf eine {{CSSxRef("background-color")}}, um den resultierenden Effekt besser zu demonstrieren.

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
