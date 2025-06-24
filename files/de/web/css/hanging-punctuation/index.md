---
title: hanging-punctuation
slug: Web/CSS/hanging-punctuation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`hanging-punctuation`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, ob ein Satzzeichen am Anfang oder Ende einer Textzeile hängen soll. Hängende Satzzeichen können außerhalb der Linienbox platziert werden.

## Syntax

```css
/* Keyword values */
hanging-punctuation: none;
hanging-punctuation: first;
hanging-punctuation: last;
hanging-punctuation: allow-end;

/* Two keywords */
hanging-punctuation: first allow-end;
hanging-punctuation: first last;
hanging-punctuation: last allow-end;

/* Three keywords */
hanging-punctuation: first allow-end last;

/* Global values */
hanging-punctuation: inherit;
hanging-punctuation: initial;
hanging-punctuation: revert;
hanging-punctuation: revert-layer;
hanging-punctuation: unset;
```

Die `hanging-punctuation` Eigenschaft kann mit einem, zwei oder drei durch Leerzeichen getrennten Werten angegeben werden.

### Werte

- `none`
  - : Kein Zeichen hängt.
- `first`

  - : Eine öffnende Klammer oder ein Anführungszeichen zu Beginn der ersten formatierten Zeile eines Elements hängt. Dies gilt für:
    - alle Zeichen in den Unicode-Kategorien [Ps](https://unicodeplus.com/category/Ps), [Pf](https://unicodeplus.com/category/Pf), [Pi](https://unicodeplus.com/category/Pi)
    - die Anführungszeichen `U+0027` APOSTROPH (`'`) und `U+0022` ANFÜHRUNGSZEICHEN (`"`).

- `last`
  - : Eine schließende Klammer oder ein Anführungszeichen am Ende der letzten formatierten Zeile eines Elements hängt. Dies gilt für:
    - alle Zeichen in den Unicode-Kategorien [Pe](https://unicodeplus.com/category/Pe), [Pf](https://unicodeplus.com/category/Pf), [Pi](https://unicodeplus.com/category/Pi)
    - die Anführungszeichen `U+0027` APOSTROPH (`'`) und `U+0022` ANFÜHRUNGSZEICHEN (`"`).
- `allow-end`
  - : Ein Punkt oder Komma am Ende einer Zeile hängt, wenn es anderweitig vor der Rechtfertigung nicht passt.

Punkte und Kommas, die hängend erlaubt sind, umfassen:

- `U+002C`, KOMMA
- `U+002E`, PUNKT
- `U+060C`, ARABISCHES KOMMA
- `U+06D4`, ARABISCHER PUNKT
- `U+3001`, IDEOGRAPHISCHES KOMMA
- `U+3002`, IDEOGRAPHISCHER PUNKT
- `U+FF0C`, VOLLWEITENKOMMA
- `U+FF0E`, VOLLWEITENPUNKT
- `U+FE50`, KLEINES KOMMA
- `U+FE51`, KLEINES IDEOGRAPHISCHES KOMMA
- `U+FE52`, KLEINER PUNKT
- `U+FF61`, HALBWEITEN IDEOGRAPHISCHER PUNKT
- `U+FF64`, HALBWEITEN IDEOGRAPHISCHES KOMMA

Benutzeragenten können zusätzliche Zeichen einbeziehen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Anführungs- und Schlusszeichen hängen lassen

#### HTML

```html
<p>
  «For a moment, nothing happened. Then, after a second or so, nothing continued
  to happen.»
</p>

<p class="hanging">
  «For a moment, nothing happened. Then, after a second or so, nothing continued
  to happen.»
</p>

<p class="hanging right">
  «For a moment, nothing happened. Then, after a second or so, nothing continued
  to happen.»
</p>
```

#### CSS

```css
p {
  width: 15em;
  border: 1px solid #cccccc;
  font-size: 2rem;
  font-style: italic;
  margin: 1em;
}

p.hanging {
  hanging-punctuation: first last;
}

p.right {
  text-align: right;
}
```

#### Ergebnis

{{EmbedLiveSample("Setting_opening_and_closing_quotes_to_hang", "", 500)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref('text-indent')}}
- [CSS Tricks: Hanging punctuation](https://css-tricks.com/almanac/properties/h/hanging-punctuation/)
