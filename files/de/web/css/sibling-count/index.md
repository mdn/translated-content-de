---
title: sibling-count()
slug: Web/CSS/sibling-count
l10n:
  sourceCommit: 464b47905d85e9bc9ce2387d3c20b36f2283af5f
---

{{CSSRef}}

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine ganze Zahl zurück, die die Gesamtzahl der direkten Kind-DOM-Elemente des Elternelements repräsentiert, auf dem sie verwendet wird.

> [!NOTE]
> Die {{CSSxRef("counter()")}} Funktion liefert ein ähnliches Ergebnis, aber sie gibt einen `<string>` zurück, während `sibling-count()` ein `<integer>` zurückgibt, das für Berechnungen verwendet werden kann.

## Syntax

```css
--total-sibling-elements: sibling-count();
```

### Parameter

Die `sibling-count()` Funktion akzeptiert keine Parameter.

### Rückgabewert

Eine ganze Zahl; die Gesamtzahl der direkten Kind-DOM-Elemente.

## Beispiele

### Dynamische Spaltenanzahl

Dieses Beispiel zeigt, wie die Anzahl der Spalten in einem Container auf die Anzahl seiner Kinder gesetzt wird, sodass jedes Kind in einer eigenen Spalte platziert wird.

#### HTML

Wir fügen einen {{htmlelement("ul")}} Container und mehrere {{htmlelement("li")}} Elemente als Kinder hinzu.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

Wir setzen die {{CSSxRef("column-count")}} des Containers gleich der Anzahl seiner direkten Kinder. Wir setzen auch jedes ungerade Element, um eine {{CSSxRef("background-color")}} zu haben, um den resultierenden Effekt besser zu demonstrieren.

```css
ul {
  column-count: sibling-count();
  text-align: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
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
