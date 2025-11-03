---
title: Verwenden der :target Pseudoklasse in Selektoren
short-title: Verwendung von :target
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Wenn eine URL auf ein bestimmtes Stück eines Dokuments mit einem [URL-Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment#fragment) verweist, kann es für den Benutzer schwierig sein, dies zu bemerken. Dieser Leitfaden diskutiert die Verwendung von CSS, um die Aufmerksamkeit auf das Ziel einer URL zu lenken, um die Benutzererfahrung zu verbessern.

## Auswahl eines Ziels

Die [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Ziel-Element des Dokuments zu stylen, das mit dem URL-Fragmentbezeichner identifiziert wird. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentbezeichner `#reference`. In HTML werden Bezeichner als Werte entweder der `id`- oder `name`-Attribute gefunden, da beide denselben Namensraum teilen. Somit zeigt die Beispiel-URL auf das Element, das in diesem Dokument die id `reference` hat.

Um ein `h2`-Element zu stylen, das das Ziel einer URL ist, ohne andere Arten von Elementen zu beeinflussen, um einen Zielstil zu erhalten, verwenden Sie die `:target` Pseudoklasse mit dem [Typ-Selektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors):

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Stile zu erstellen, die spezifisch für ein bestimmtes Fragment des Dokuments sind. Dies wird mit demselben Identifizierungswert erreicht, der in der URI gefunden wird. Um also eine Hintergrundfarbe zum `#reference` Fragment hinzuzufügen, würden wir folgendes schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn das Ziel darin besteht, einen „Allgemeinstil“ zu erstellen, der auf alle anvisierten Elemente angewendet wird, dann ist der universelle Selektor nützlich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument zeigen. Wenn Sie zum Beispiel den "Ersten" Link auswählen, wird `<h1 id="one">` zum Ziel-Element. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scroll-Position springt, da Ziel-Elemente, wenn möglich, oben im Browserfenster platziert werden.

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

## Schlussfolgerung

In Fällen, in denen ein Fragmentbezeichner auf einen Teil des Dokuments verweist, können Leser verwirrt darüber sein, welchen Teil des Dokuments sie lesen sollen. Durch das Stylen des Ziels einer URI kann die Verwirrung der Leser reduziert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
