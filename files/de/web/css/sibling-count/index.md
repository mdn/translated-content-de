---
title: sibling-count()
slug: Web/CSS/sibling-count
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine ganze Zahl zurück, die die Gesamtanzahl der direkten Kind-DOM-Elemente des Elternelements darstellt, auf dem sie verwendet wird.

> [!NOTE]
> Die {{CSSxRef("counter()")}}-Funktion liefert ein ähnliches Ergebnis, aber sie gibt einen `<string>` zurück, während `sibling-count()` ein `<integer>` liefert, das für Berechnungen verwendet werden kann.

## Syntax

```css
--total-sibling-elements: sibling-count();
```

### Parameter

Die `sibling-count()`-Funktion akzeptiert keine Parameter.

### Rückgabewert

Ein Integer; die Gesamtanzahl der direkten Kind-DOM-Elemente.

## Beispiele

### Dynamische Spaltenanzahl

Dieses Beispiel demonstriert, wie die Anzahl der Spalten in einem Container auf die Anzahl seiner Kinder gesetzt wird, sodass jedes Kind in seiner eigenen Spalte platziert wird.

#### HTML

Wir fügen einen {{htmlelement("ul")}}-Container und mehrere {{htmlelement("li")}}-Kinder hinzu.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

Wir setzen die {{CSSxRef("column-count")}} des Containers gleich der Anzahl seiner direkten Kinder. Außerdem erhält jedes ungerade Element eine {{CSSxRef("background-color")}}, um den resultierenden Effekt besser zu veranschaulichen.

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
