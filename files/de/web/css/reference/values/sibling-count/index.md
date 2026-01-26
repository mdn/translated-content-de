---
title: sibling-count()
slug: Web/CSS/Reference/Values/sibling-count
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt eine Ganzzahl zurück, die die Gesamtanzahl der Geschwister-DOM-Elemente (direkte Kinder des übergeordneten Elements) des Elements darstellt, auf dem sie verwendet wird, einschließlich des Elements selbst.

> [!NOTE]
> Die {{CSSxRef("counter()")}} Funktion liefert ein ähnliches Ergebnis, gibt jedoch eine `<string>` zurück (was besser für [generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) geeignet ist), während `sibling-count()` ein `<integer>` zurückgibt (das für Berechnungen verwendet werden kann).

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

Dieses Beispiel zeigt, wie die Breite jedes Elements in einer Liste basierend auf der Anzahl der Elemente festgelegt wird, sodass jedes Kind in seiner eigenen Spalte platziert wird.

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

Wir teilen die {{CSSxRef("width")}} jedes Listenelements durch die Anzahl der direkten Kinder, die die Liste enthält. Zudem setzen wir jedes ungerade Element auf eine andere {{CSSxRef("background-color")}}, um den Effekt besser zu verdeutlichen.

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
