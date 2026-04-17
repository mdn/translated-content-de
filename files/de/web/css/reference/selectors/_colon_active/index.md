---
title: "`:active` CSS-Pseudoklasse"
short-title: :active
slug: Web/CSS/Reference/Selectors/:active
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:active`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element (wie ein Button), das vom Benutzer aktiviert wird. Bei der Verwendung einer Maus beginnt die "Aktivierung" typischerweise, wenn der Benutzer die primäre Maustaste drückt.

{{InteractiveExample("CSS Demo: :active", "tabbed-shorter")}}

```css interactive-example
.joinBtn {
  width: 10em;
  height: 5ex;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: none;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.joinBtn:active {
  box-shadow: 2px 2px 5px #fc894d;
}
```

```html interactive-example
<p>Would you like to subscribe to our channel?</p>
<button class="joinBtn">Subscribe</button>
```

Die `:active`-Pseudoklasse wird häufig bei {{HTMLElement("a")}}- und {{HTMLElement("button")}}-Elementen verwendet. Andere häufige Ziele dieser Pseudoklasse sind Elemente, die _in_ einem aktivierten Element enthalten sind und Formularelemente, die durch ihr zugeordnetes {{HTMLElement("label")}} aktiviert werden.

Stile, die durch die `:active`-Pseudoklasse definiert sind, werden von jeder nachfolgenden link-bezogenen Pseudoklasse ({{cssxref(":link")}}, {{cssxref(":hover")}} oder {{cssxref(":visited")}}), die mindestens die gleiche Spezifität hat, überschrieben. Um Links entsprechend zu stylen, platzieren Sie die `:active`-Regel nach allen anderen link-bezogenen Regeln, wie durch die _LVHA-Reihenfolge_ definiert: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Auf Systemen mit Mäusen mit mehreren Tasten gibt CSS vor, dass die `:active`-Pseudoklasse nur für die primäre Taste gelten muss; bei rechtshändigen Mäusen ist dies typischerweise die linke Taste.

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
  background: #eeeeee;
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

- Link-bezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":visited")}}, und {{cssxref(":hover")}}
