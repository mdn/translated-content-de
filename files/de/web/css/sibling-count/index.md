---
title: sibling-count()
slug: Web/CSS/sibling-count
l10n:
  sourceCommit: 9ccdb2ddd0d46e6d203044c3fffb50a784528c8c
---

{{SeeCompatTable}}

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine Ganzzahl zurück, die die Gesamtanzahl der Geschwister-DOM-Elemente (direkte Kinder des Elternteils) des Elements darstellt, auf das sie angewendet wird, einschließlich des Elements selbst.

> [!NOTE]
> Die {{CSSxRef("counter()")}} Funktion liefert ein ähnliches Ergebnis, gibt jedoch eine `<string>` zurück, während `sibling-count()` ein `<integer>` zurückgibt, welches für Berechnungen verwendet werden kann.

## Syntax

```css-nolint
sibling-count()
```

### Parameter

Die `sibling-count()` Funktion akzeptiert keine Parameter.

### Rückgabewert

Eine Ganzzahl; die Gesamtanzahl der Geschwister-DOM-Elemente einschließlich des Elements selbst.

## Beispiele

### Dynamische Spaltenanzahl

Dieses Beispiel zeigt, wie die Breite jedes Eintrags in einer Liste basierend auf der Anzahl der Einträge festgelegt wird, sodass jedes Kind in einer eigenen Spalte platziert wird.

#### HTML

Wir fügen einen {{htmlelement("ul")}} Container und mehrere {{htmlelement("li")}} Elemente als Kinder ein.

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

Wir teilen die {{CSSxRef("width")}} jedes Listenelements durch die Anzahl der direkten Kinder, die die Liste enthält. Wir setzen auch jedes ungerade Element auf eine andere {{CSSxRef("background-color")}}, um den resultierenden Effekt besser zu demonstrieren.

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
