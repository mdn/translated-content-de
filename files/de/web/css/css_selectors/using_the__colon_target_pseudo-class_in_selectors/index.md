---
title: Verwendung der Pseudoklasse :target in Selektoren
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Wenn eine URL auf ein bestimmtes Teil eines Dokuments mit einem [URL-Fragmentbezeichner](/de/docs/Web/URI/Reference/Fragment#fragment) zeigt, kann es für den Benutzer schwierig sein, dies zu bemerken. Dieser Leitfaden behandelt die Verwendung von CSS, um die Aufmerksamkeit auf das Ziel einer URL zu lenken und somit die Benutzererfahrung zu verbessern.

## Ein Ziel auswählen

Die [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Zielelement des Dokuments zu stylen, das durch den URL-Fragmentbezeichner identifiziert wird. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentbezeichner `#reference`. In HTML werden Bezeichner als Werte der `id`- oder `name`-Attribute gefunden, da beide denselben Namespace teilen. Die Beispiel-URL würde daher auf das Element verweisen, das in diesem Dokument die id `reference` hat.

Um ein beliebiges `h2`-Element zu stylen, das das Ziel einer URL ist, während keine anderen Arten von Elementen ein Zielstil erhalten, verwenden Sie die Pseudoklasse `:target` mit dem [Typ-Selektor](/de/docs/Web/CSS/Type_selectors):

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Stile zu erstellen, die spezifisch für ein bestimmtes Fragment des Dokuments sind. Dies geschieht mit demselben Identifikationswert, der in der URI zu finden ist. Um dem `#reference`-Fragment eine Hintergrundfarbe hinzuzufügen, würden wir folgendes schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn beabsichtigt wird, einen allgemeinen Stil zu erstellen, der auf alle anvisierten Elemente angewendet wird, dann ist der universelle Selektor nützlich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument zeigen. Wenn zum Beispiel der Link "First" ausgewählt wird, wird `<h1 id="one">` zum Zielelement. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scroll-Position springt, da Zielelemente nach Möglichkeit oben im Browserfenster platziert werden.

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

In Fällen, in denen ein Fragmentbezeichner auf einen Teil des Dokuments verweist, können Leser verwirrt darüber sein, welchen Teil des Dokuments sie lesen sollen. Durch das Styling des Ziels einer URI kann die Verwirrung der Leser verringert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
