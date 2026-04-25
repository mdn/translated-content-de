---
title: "`sibling-count()` CSS-Funktion"
short-title: sibling-count()
slug: Web/CSS/Reference/Values/sibling-count
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`sibling-count()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt eine ganze Zahl zurück, die die Gesamtanzahl der Geschwister-DOM-Elemente (direkte Kinder des Elternteils) des Elements, auf das sie angewendet wird, einschließlich des Elements selbst, darstellt.

> [!NOTE]
> Die {{CSSxRef("counter()")}}-Funktion liefert ein ähnliches Ergebnis, aber sie gibt eine `<string>` zurück (was besser für [erzeugten Inhalt](/de/docs/Web/CSS/Guides/Generated_content) geeignet ist), während `sibling-count()` ein `<integer>` zurückgibt (das für Berechnungen verwendet werden kann).

## Syntax

```css-nolint
sibling-count()
```

### Parameter

Die `sibling-count()`-Funktion akzeptiert keine Parameter.

### Rückgabewert

Eine ganze Zahl; die Gesamtanzahl der Geschwister-DOM-Elemente einschließlich des Elements selbst.

## Beispiele

### Dynamische Spaltenanzahl

Dieses Beispiel zeigt, wie die Breite jedes Elements in einer Liste basierend auf der Anzahl der Elemente gesetzt wird, wodurch jedes Kind in seine eigene Spalte platziert werden kann.

#### HTML

Wir fügen einen {{htmlelement("ul")}}-Container und mehrere {{htmlelement("li")}}-Elemente als Kinder hinzu.

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

Wir teilen die {{CSSxRef("width")}} jedes Listenelements durch die Anzahl der direkten Kinder, die die Liste enthält. Wir setzen auch jedes ungerade Element mit einer {{CSSxRef("background-color")}}, um den Effekt besser zu veranschaulichen.

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
