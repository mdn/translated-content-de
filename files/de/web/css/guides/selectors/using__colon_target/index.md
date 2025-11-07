---
title: Verwenden der :target-Pseudoklasse in Selektoren
short-title: Verwenden von :target
slug: Web/CSS/Guides/Selectors/Using_:target
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Wenn eine URL auf ein bestimmtes Stück eines Dokuments mit einem [URL-Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment#fragment) zeigt, kann es für den Benutzer schwierig sein, dies zu bemerken. In diesem Leitfaden wird erörtert, wie Sie mit CSS die Aufmerksamkeit auf das Ziel einer URL lenken können, um die Benutzererfahrung zu verbessern.

## Ziel auswählen

Die [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Ziel-Element des Dokuments zu stylen, das mit dem URL-Fragmentbezeichner identifiziert wird. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentbezeichner `#reference`. In HTML werden Bezeichner als Werte von entweder `id` oder `name` Attributen gefunden, da beide denselben Namensraum teilen. Somit würde die Beispiel-URL auf das Element zeigen, das in diesem Dokument die id `reference` hat.

Um ein beliebiges `h2`-Element zu stylen, das das Ziel einer URL ist, ohne andere Arten von Elementen zu beeinflussen, um einen Ziel-Stil zu erhalten, verwenden Sie die `:target`-Pseudoklasse mit dem [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors):

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Stile zu erstellen, die spezifisch für ein bestimmtes Fragment des Dokuments sind. Dies wird unter Verwendung desselben Identifizierungswerts durchgeführt, der in der URI gefunden wird. Um also eine Hintergrundfarbe zum `#reference`-Fragment hinzuzufügen, würden wir Folgendes schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn beabsichtigt ist, einen "allgemeinen" Stil zu erstellen, der auf alle anvisierten Elemente angewendet wird, kommt der universelle Selektor zum Einsatz:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument zeigen. Wenn Sie beispielsweise den "First"-Link auswählen, wird `<h1 id="one">` zum Ziel-Element. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scroll-Position springt, da Ziel-Elemente soweit möglich oben im Browserfenster platziert werden.

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

In Fällen, in denen ein Fragmentbezeichner auf einen Teil des Dokuments zeigt, können Leser verwirrt sein, welcher Teil des Dokuments gelesen werden soll. Durch das Styling des Ziels einer URI kann die Verwirrung der Leser verringert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
