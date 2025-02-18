---
title: Verwenden der :target-Pseudoklasse in Selektoren
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{CSSRef}}

Wenn eine URL auf einen spezifischen Abschnitt eines Dokuments mit einem [URL-Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment#fragment) verweist, kann es für den Nutzer schwierig sein, dies zu bemerken. Dieser Leitfaden erklärt, wie CSS verwendet werden kann, um die Aufmerksamkeit auf das Ziel einer URL zu lenken und die Benutzerfreundlichkeit zu verbessern.

## Auswahl eines Ziels

Die [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Ziel-Element des Dokuments zu stylen, das mit dem URL-Fragmentbezeichner identifiziert wird. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentbezeichner `#reference`. In HTML werden Bezeichner als Werte der Attribute `id` oder `name` gefunden, da beide denselben Namensraum teilen. Damit würde die Beispiel-URL auf das Element mit der id `reference` in diesem Dokument zeigen.

Angenommen, Sie möchten ein beliebiges `h2`-Element stylen, das das Ziel einer URL ist, ohne dass andere Elemente einen Zielstil bekommen. Dies ist einfach:

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Stile zu erstellen, die sich auf ein bestimmtes Fragment des Dokuments beziehen. Dies geschieht mit demselben Wert, der in der URI verwendet wird. Um zum Beispiel einer Hintergrundfarbe dem `#reference`-Fragment hinzuzufügen, schreiben wir:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn das Ziel darin besteht, einen „allumfassenden“ Stil zu erstellen, der auf alle Ziel-Elemente angewendet wird, dann ist der Universal-Selektor nützlich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument verweisen. Wenn beispielsweise der „First“-Link ausgewählt wird, wird `<h1 id="one">` zum Ziel-Element. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scrollposition springt, da Ziel-Elemente, soweit möglich, oben im Browserfenster positioniert werden.

```html
<h4 id="one">…</h4>
<p id="two">…</p>
<div id="three">…</div>
<a id="four">…</a> <em id="five">…</em>

<a href="#one">First</a>
<a href="#two">Second</a>
<a href="#three">Third</a>
<a href="#four">Fourth</a>
<a href="#five">Fifth</a>
```

## Fazit

In Fällen, in denen ein Fragmentbezeichner auf einen Abschnitt des Dokuments verweist, kann es für Leser schwierig sein zu erkennen, welchen Teil des Dokuments sie lesen sollen. Durch das Stylen des Ziels einer URI kann diese Verwirrung bei den Lesern reduziert oder vollständig beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
