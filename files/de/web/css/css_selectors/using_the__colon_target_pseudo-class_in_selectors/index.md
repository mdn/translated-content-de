---
title: Verwendung der :target Pseudo-Klasse in Selektoren
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: 28bd7cc707ccf880a46be1ae53041fee47a705a8
---

{{CSSRef}}

Wenn eine URL auf einen bestimmten Teil eines Dokuments verweist, kann es für den Nutzer schwierig sein, diesen zu bemerken. Erfahren Sie, wie Sie mit einfachem CSS die Aufmerksamkeit auf das Ziel einer URL lenken und die Benutzererfahrung verbessern können.

## Auswahl eines Ziels

Die [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Zielelement einer URL mit einem Fragmentbezeichner zu stylen. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentbezeichner `#reference`. In HTML werden Bezeichner als Werte der Attribute `id` oder `name` gefunden, da beide denselben Namespace teilen. Somit würde die Beispiel-URL auf die Überschrift "reference" in diesem Dokument verweisen.

Angenommen, Sie möchten ein `h2`-Element stylen, das das Ziel einer URL ist, aber kein anderes Element soll einen Zielstil erhalten. Dies ist einfach:

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Stile zu erstellen, die sich auf ein bestimmtes Fragment des Dokuments beziehen. Dies geschieht mit dem gleichen Identifikationswert, der in der URI gefunden wird. Um also einer Hintergrundfarbe zum `#reference` Fragment hinzuzufügen, würden wir schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn beabsichtigt ist, einen "flächendeckenden" Stil zu erstellen, der für alle anvisierten Elemente gilt, ist der Universalselektor nützlich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument verweisen. Die Auswahl des Links "First" führt dazu, dass `<h1 id="one">` zum Zielelement wird. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scroll-Position springt, da Zielelemente, wenn möglich, oben im Browserfenster platziert werden.

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

In Fällen, in denen ein Fragmentbezeichner auf einen Teil des Dokuments verweist, könnten Leser verwirrt darüber sein, welchen Teil des Dokuments sie lesen sollen. Indem Sie das Ziel einer URI stylen, kann die Verwirrung der Leser verringert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
