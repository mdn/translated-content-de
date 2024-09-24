---
title: Verwenden der :target Pseudoklasse in Selektoren
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: 28bd7cc707ccf880a46be1ae53041fee47a705a8
---

{{CSSRef}}

Wenn eine URL auf einen bestimmten Teil eines Dokuments verweist, kann es für den Benutzer schwierig sein, dies zu bemerken. Erfahren Sie, wie Sie mit einfachem CSS die Aufmerksamkeit auf das Ziel einer URL lenken und die Benutzererfahrung verbessern können.

## Auswählen eines Ziels

Die [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Ziel-Element einer URL mit Fragment-Identifier zu stylen. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragment-Identifier `#reference`. In HTML werden Identifikatoren als Werte entweder der `id` oder `name` Attribute gefunden, da beide denselben Namensraum teilen. Daher würde die Beispiel-URL auf die Überschrift "reference" in diesem Dokument verweisen.

Angenommen, Sie möchten jedes `h2` Element stylen, das das Ziel einer URL ist, aber kein anderes Element soll ein Ziel-Styling erhalten. Dies ist einfach genug:

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Styles zu erstellen, die spezifisch für einen bestimmten Abschnitt des Dokuments sind. Dies erfolgt mit demselben Identifikationswert, der in der URI gefunden wird. Um beispielsweise eine Hintergrundfarbe zum Fragment `#reference` hinzuzufügen, würden wir Folgendes schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn das Ziel darin besteht, einen "allgemeinen" Stil zu schaffen, der auf alle anvisierten Elemente angewendet wird, dann ist der universelle Selektor nützlich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument verweisen. Die Auswahl des Links "First" wird zum Beispiel dazu führen, dass `<h1 id="one">` zum Ziel-Element wird. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scroll-Position springt, da Ziel-Elemente, wenn möglich, oben im Browserfenster platziert werden.

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

In Fällen, in denen ein Fragment-Identifier auf einen Teil des Dokuments verweist, können Leser verwirrt darüber sein, welchen Teil des Dokuments sie lesen sollen. Durch das Stylen des Ziels einer URI kann die Verwirrung der Leser reduziert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
