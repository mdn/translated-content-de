---
title: ":active"
slug: Web/CSS/:active
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:active`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stellt ein Element (wie einen Button) dar, das vom Benutzer aktiviert wird. Bei der Verwendung einer Maus beginnt die "Aktivierung" normalerweise, wenn der Benutzer die primäre Maustaste drückt.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-active.html", "tabbed-shorter")}}

Die `:active` Pseudoklasse wird häufig auf {{HTMLElement("a")}} und {{HTMLElement("button")}} Elemente angewendet. Weitere häufige Ziele dieser Pseudoklasse sind Elemente, die _in einem_ aktivierten Element enthalten sind, und Formularelemente, die über ihr zugehöriges {{HTMLElement("label")}} aktiviert werden.

Von der `:active` Pseudoklasse definierte Stile werden von nachfolgenden linkbezogenen Pseudoklassen ({{cssxref(":link")}}, {{cssxref(":hover")}}, oder {{cssxref(":visited")}}) mit mindestens gleicher Spezifität überschrieben. Um Links korrekt zu stylen, platzieren Sie die `:active` Regel nach allen anderen linkbezogenen Regeln, wie es von der _LVHA-Reihenfolge_ definiert wird: `:link` — `:visited` — `:hover` — `:active`.

> [!NOTE]
> Auf Systemen mit Mehrtastenmäusen gibt CSS an, dass die `:active` Pseudoklasse nur auf die primäre Taste angewendet werden muss; bei rechtshändigen Mäusen ist dies typischerweise die linkeste Taste.

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
  Dieser Absatz enthält einen Link:
  <a href="#">Dieser Link wird rot, während Sie darauf klicken.</a>
  Der Absatz erhält einen grauen Hintergrund, während Sie auf ihn oder den Link klicken.
</p>
```

#### CSS

```css
/* Unbesuchte Links */
a:link {
  color: blue;
}
/* Besuchte Links */
a:visited {
  color: purple;
}
/* Gehoverte Links */
a:hover {
  background: yellow;
}
/* Aktive Links */
a:active {
  color: red;
}

/* Aktive Absätze */
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
  <label for="my-button">Mein Button: </label>
  <button id="my-button" type="button">Versuchen Sie, mich oder mein Label anzuklicken!</button>
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

- Linkbezogene Pseudoklassen: {{cssxref(":link")}}, {{cssxref(":visited")}}, und {{cssxref(":hover")}}
