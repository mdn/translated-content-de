---
title: Verwenden der :target Pseudoklasse in Selektoren
short-title: Verwendung von :target
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Wenn eine URL auf ein bestimmtes Element eines Dokuments mit einem [URL-Fragmentidentifikator](/de/docs/Web/URI/Reference/Fragment#fragment) verweist, kann es für den Benutzer schwierig sein, dies zu bemerken. Dieser Leitfaden diskutiert die Verwendung von CSS, um die Aufmerksamkeit auf das Ziel einer URL zu lenken, um die Benutzererfahrung zu verbessern.

## Auswahl eines Ziels

Die [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Zielelement des Dokuments zu stylen, das mit dem URL-Fragmentidentifikator identifiziert wird. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentidentifikator `#reference`. In HTML sind Identifikatoren als Werte der Attribute `id` oder `name` zu finden, da beide denselben Namensraum teilen. Somit würde die Beispiel-URL auf das Element verweisen, das in diesem Dokument die ID `reference` hat.

Um ein beliebiges `h2`-Element zu stylen, das das Ziel einer URL ist, ohne andere Arten von Elementen zu beeinflussen, um einen Zielstil zu erhalten, verwenden Sie die `:target` Pseudoklasse mit dem [Typ-Selektor](/de/docs/Web/CSS/Type_selectors):

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, spezifische Stile für ein bestimmtes Fragment des Dokuments zu erstellen. Dies geschieht mit demselben Identifikationswert, der in der URI zu finden ist. Um also eine Hintergrundfarbe zum Fragment `#reference` hinzuzufügen, würden wir schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn die Absicht besteht, einen „allgemeinen“ Stil zu erstellen, der auf alle anvisierten Elemente angewendet wird, dann ist der universelle Selektor hilfreich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im gleichen Dokument verweisen. Wenn man beispielsweise den "First"-Link auswählt, wird `<h1 id="one">` zum Zielelement. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scroll-Position springt, da Ziel-Elemente, wenn möglich, oben im Browserfenster platziert werden.

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

In Fällen, in denen ein Fragmentidentifikator auf einen Teil des Dokuments verweist, können Leser verwirrt darüber sein, welchen Teil des Dokuments sie lesen sollen. Durch das Stylen des Ziels einer URI kann die Verwirrung der Leser reduziert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
