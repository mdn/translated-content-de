---
title: Verwenden der :target-Pseudoklasse in Selektoren
short-title: Verwendung von :target
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Wenn eine URL auf ein bestimmtes Element eines Dokuments mit einem [URL-Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment#fragment) verweist, kann es für den Benutzer schwierig sein, dies zu bemerken. Dieser Leitfaden behandelt die Verwendung von CSS, um die Aufmerksamkeit auf das Ziel einer URL zu lenken und so die Benutzererfahrung zu verbessern.

## Auswahl eines Ziels

Die [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das ZIELelement des Dokuments zu stylen, das mit dem URL-Fragmentbezeichner identifiziert wird. Beispielsweise enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentbezeichner `#reference`. In HTML werden Bezeichner als Werte der Attribute `id` oder `name` gefunden, da beide den gleichen Namensraum verwenden. Somit würde die Beispiel-URL auf das Element verweisen, das in diesem Dokument die ID `reference` hat.

Um ein beliebiges `h2`-Element zu stylen, das das Ziel einer URL ist, ohne dass andere Arten von Elementen ein Zielstil erhalten, verwenden Sie die `:target`-Pseudoklasse mit dem [Typselektor](/de/docs/Web/CSS/Type_selectors):

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Stile zu erstellen, die spezifisch für ein bestimmtes Fragment des Dokuments sind. Dies wird mit dem gleichen identifizierenden Wert, der in der URI gefunden wird, gemacht. Um dem `#reference`-Fragment eine Hintergrundfarbe hinzuzufügen, würden wir folgendes schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn beabsichtigt ist, einen "Pauschal"-Stil zu erstellen, der für alle angezielten Elemente gilt, dann ist der Universalselektor nützlich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument verweisen. Wenn man beispielsweise den "Ersten" Link auswählt, wird `<h1 id="one">` zum ZIELelement. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scrollposition springt, da ZIELelemente, wenn möglich, oben im Browserfenster platziert werden.

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

In Fällen, in denen ein Fragmentbezeichner auf einen Teil des Dokuments verweist, können Leser verwirrt sein, welchen Teil des Dokuments sie lesen sollen. Durch das Styling des Ziels einer URI kann die Verwirrung der Leser verringert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
