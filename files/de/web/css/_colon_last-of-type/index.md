---
title: ":last-of-type"
slug: Web/CSS/:last-of-type
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{CSSRef}}

Die **`:last-of-type`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert das letzte Element seines Typs innerhalb einer Gruppe von Geschwisterelementen.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-last-of-type.html", "tabbed-shorter")}}

## Syntax

```css
:last-of-type {
  /* ... */
}
```

## Beispiele

### Das letzte Absatz-Element stylen

#### HTML

```html
<h2>Überschrift</h2>
<p>Absatz 1</p>
<p>Absatz 2</p>
```

#### CSS

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

#### Ergebnis

{{EmbedLiveSample('Styling_the_last_paragraph')}}

### Verschachtelte Elemente

Dieses Beispiel zeigt, wie auch verschachtelte Elemente angesprochen werden können. Beachten Sie, dass der [Universalselektor](/de/docs/Web/CSS/Universal_selectors) (`*`) vorausgesetzt ist, wenn kein einfacher Selektor geschrieben wird.

#### HTML

```html
<article>
  <div>Dieses `div` ist das erste.</div>
  <div>Dieses <span>verschachtelte `span` ist das letzte</span>!</div>
  <div>
    Dieses <em>verschachtelte `em` ist das erste</em>, aber dieses <em>verschachtelte `em` ist das letzte</em>!
  </div>
  <p>Dieses `p` qualifiziert sich!</p>
  <div>Dies ist das letzte `div`!</div>
</article>
```

#### CSS

```css
article :last-of-type {
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample('Nested_elements', 500)}}

### Elemente mit mehreren Selektoren

Dieses HTML-Beispiel enthält verschachtelte Elemente verschiedener Typen. Das CSS enthält sowohl Typ-Selektoren als auch Klassen-Selektoren.

#### HTML

```html
<p>Dieses `p` wird nicht ausgewählt.</p>
<p>Dieses `p` wird ebenfalls nicht ausgewählt.</p>
<p>
  Dieses `p` ist das letzte `p`-Element seines übergeordneten Elements, z.B. `body`, ausgewählt durch den `p`-Typ-Selektor.
</p>
<div class="container">
  <div class="item">Dieses `div` wird nicht ausgewählt.</div>
  <div class="item">Dieses `div` wird ebenfalls nicht ausgewählt.</div>
  <div class="item">
    Dieses `div` ist das letzte `div`-Element seines übergeordneten `div`, ausgewählt durch den `.container .item`-Klassen-Selektor.
  </div>
  <p class="item">
    Dieses `p` ist das letzte `p`-Element seines übergeordneten `div`, ausgewählt durch den `.container .item`-Klassen-Selektor.
  </p>
</div>
```

#### CSS

```css
p:last-of-type {
  background: skyblue;
}

.container .item:last-of-type {
  color: red;
  font-weight: bold;
}
```

#### Ergebnis

{{EmbedLiveSample('Multiple_selectors_elements', 500)}}

Das letzte `<div>` und das letzte `<p>` sind beide rot und fett, da `.item:last-of-type` das letzte jedes Typs auswählt, wenn dieses letzte Element auch die Klasse `item` hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":last-child")}}, {{Cssxref(":nth-last-of-type")}}
