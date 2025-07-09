---
title: sibling-count()
slug: Web/CSS/sibling-count
l10n:
  sourceCommit: 16f153864b26e87163435840af8f7837a2e788d0
---

{{CSSRef}}{{SeeCompatTable}}

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine ganze Zahl zurück, die die Gesamtzahl der direkten untergeordneten DOM-Elemente des Elternelements darstellt, auf dem sie verwendet wird.

> [!NOTE]
> Die Funktion {{CSSxRef("counter()")}} liefert ein ähnliches Ergebnis, jedoch gibt sie einen `<string>` zurück, während `sibling-count()` ein `<integer>` zurückgibt, das für Berechnungen verwendet werden kann.

## Syntax

```css
--total-sibling-elements: sibling-count();
```

### Parameter

Die Funktion `sibling-count()` akzeptiert keine Parameter.

### Rückgabewert

Eine ganze Zahl; die Gesamtzahl der direkten untergeordneten DOM-Elemente.

## Beispiele

### Dynamische Spaltenanzahl

Dieses Beispiel zeigt, wie die Anzahl der Spalten in einem Container auf die Anzahl seiner Kinder eingestellt wird, wodurch jedes Kind in seiner eigenen Spalte platziert werden kann.

#### HTML

Wir fügen einen {{htmlelement("ul")}} Container und mehrere {{htmlelement("li")}} Elemente als Kinder ein.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

Wir setzen die {{CSSxRef("column-count")}} des Containers gleich der Anzahl der direkten Kinder, die er enthält. Wir setzen auch jedes ungerade Element auf eine {{CSSxRef("background-color")}}, um den daraus resultierenden Effekt besser zu demonstrieren.

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
