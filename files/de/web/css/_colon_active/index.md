---
title: ":active"
slug: Web/CSS/:active
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:active`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element (wie einen Button), das vom Benutzer aktiviert wird. Bei Verwendung einer Maus beginnt die "Aktivierung" typischerweise, wenn der Benutzer die primäre Maustaste drückt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-active.html", "tabbed-shorter")}}

Die `:active` Pseudoklasse wird häufig auf {{HTMLElement("a")}}- und {{HTMLElement("button")}}-Elementen verwendet. Weitere häufige Ziele dieser Pseudoklasse sind Elemente, die _in_ einem aktivierten Element enthalten sind, und Formularelemente, die durch ihr zugehöriges {{HTMLElement("label")}} aktiviert werden.

Durch die `:active` Pseudoklasse definierte Stile werden von jeder nachfolgenden, verknüpfungsbezogenen Pseudoklasse ({{cssxref(":link")}}, {{cssxref(":hover")}}, oder {{cssxref(":visited")}}) überschrieben, die mindestens die gleiche Spezifität aufweist. Um Links korrekt zu gestalten, setzen Sie die `:active` Regel nach allen anderen verknüpfungsbezogenen Regeln, wie im _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Auf Systemen mit Mäusen, die mehrere Tasten haben, gibt CSS an, dass die `:active` Pseudoklasse nur auf die primäre Taste angewendet werden muss; bei rechtshändigen Mäusen ist dies typischerweise die linke Taste.

## Syntax

```css
:active {
  /* ... */
}
```

## Beispiele

### Aktive Links

#### HTML

```html
<p>
  This paragraph contains a link:
  <a href="#">This link will turn red while you click on it.</a>
  The paragraph will get a gray background while you click on it or the link.
</p>
```

#### CSS

```css
/* Unvisited links */
a:link {
  color: blue;
}
/* Visited links */
a:visited {
  color: purple;
}
/* Hovered links */
a:hover {
  background: yellow;
}
/* Active links */
a:active {
  color: red;
}

/* Active paragraphs */
p:active {
  background: #eee;
}
```

#### Ergebnis

{{EmbedLiveSample('Active_links')}}

### Aktive Formularelemente

#### HTML

```html
<form>
  <label for="my-button">My button: </label>
  <button id="my-button" type="button">Try Clicking Me or My Label!</button>
</form>
```

#### CSS

```css
form :active {
  color: red;
}

form button {
  background: white;
}
```

#### Ergebnis

{{EmbedLiveSample('Active_form_elements')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verknüpfungsbezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":visited")}}, und {{cssxref(":hover")}}
