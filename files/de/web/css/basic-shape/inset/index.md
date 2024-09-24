---
title: inset()
slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: 24e53c54b9ec0b7a5d12cf612f5904b7751793a9
---

{{CSSRef}}

Die **`inset()`** [CSS](/de/docs/Web/CSS)-Funktion definiert ein Rechteck in den angegebenen Abständen von jeder Seite des Bezugsrahmens. Es ist eine grundlegende Formfunktion, die verwendet wird, um einen der {{cssxref("&lt;basic-shape&gt;")}} [Datentypen](/de/docs/Web/CSS/CSS_Types) zu definieren.

{{EmbedInteractiveExample("pages/css/function-inset.html")}}

## Syntax

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### Werte

- `<length-percentage>{1,4}`

  - : Wenn alle vier Argumente angegeben sind, repräsentieren sie die inneren Abstände von der Oberseite, der rechten Seite, der Unterseite und der linken Seite des Bezugsrahmens, die die Positionen der Kanten des eingefügten Rechtecks definieren. Diese Argumente folgen der Syntax der margin-Kurzform, die es Ihnen ermöglicht, alle vier Einfügungen mit einem, zwei oder vier Werten zu setzen.

    Wenn ein Paar von Einfügungen für eine Dimension mehr als 100% dieser Dimension ergibt, werden beide Werte proportional reduziert, so dass ihre Summe 100% ergibt. Zum Beispiel wird der Wert `inset(90% 10% 60% 10%)` mit einem oberen Einzug von `90%` und einem unteren Einzug von `60%` proportional zu `inset(60% 10% 40% 10%)` reduziert. Formen wie diese, die keinen Bereich umschließen und keine {{cssxref("shape-margin")}} haben, beeinflussen das Umfließen nicht.

- `<border-radius>`
  - : Das optionale [`<border-radius>`](/de/docs/Web/CSS/border-radius)-Argument definiert abgerundete Ecken für das eingefügte Rechteck unter Verwendung der border-radius Kurzformsyntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel für inset

Im folgenden Beispiel haben wir eine `inset()`-Form verwendet, um Inhalte über das gefloatete Element zu ziehen. Ändern Sie die Versatzwerte, um zu sehen, wie sich die Form ändert.

```html
<div class="box">
  <div class="shape"></div>
  <p>
    Eines Novemberabends im Jahr 1782, so will es die Geschichte, saßen zwei
    Brüder an ihrem winterlichen Feuer im kleinen französischen Städtchen
    Annonay und beobachteten, wie die grauen Rauchwölkchen vom Herd den breiten
    Kamin hinaufstiegen. Ihre Namen waren Stephen und Joseph Montgolfier, sie
    waren Papiermacher von Beruf und waren dafür bekannt, nachdenkliche
    Geister und ein tiefes Interesse an allem wissenschaftlichen Wissen und
    neuer Entdeckung zu besitzen. Vor jener Nacht – einer denkwürdigen Nacht,
    wie sich herausstellen sollte – hatten hunderte Millionen Menschen die
    aufsteigenden Rauchwölkchen ihrer Feuer beobachtet, ohne daraus eine
    besondere Inspiration zu ziehen.
  </p>
</div>
```

```css
.box {
  width: 400px;
  margin: 0 auto;
}

.shape {
  float: left;
  width: 150px;
  height: 100px;
  clip-path: inset(45px 50px 15px 0 round 50px);
  shape-outside: inset(40px 40px 10px 0 round 50px);
  background-color: coral;
  border-radius: 20px;
  margin: 0;
  padding: 20px;
}
```

{{EmbedLiveSample("Basic inset example", '100%', 280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Eigenschaften, die diesen Datentyp verwenden: {{cssxref("clip-path")}}, {{cssxref("shape-outside")}}
- [CSS shapes](/de/docs/Web/CSS/CSS_shapes)-Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
