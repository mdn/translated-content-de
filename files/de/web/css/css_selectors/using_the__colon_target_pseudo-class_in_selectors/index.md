---
title: Verwenden der :target-Pseudoklasse in Selektoren
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: 28bd7cc707ccf880a46be1ae53041fee47a705a8
---

{{CSSRef}}

Wenn eine URL auf ein bestimmtes Stück eines Dokuments verweist, kann es für den Benutzer schwierig sein, dies zu bemerken. Erfahren Sie, wie Sie mit einfachem CSS die Aufmerksamkeit auf das Ziel einer URL lenken und die Benutzererfahrung verbessern können.

## Ein Ziel auswählen

Die [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Ziel-Element einer URL mit einem Fragment-Identifier zu stylen. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragment-Identifier `#reference`. In HTML werden Identifier als Werte der `id` oder `name` Attribute gefunden, da beide denselben Namensraum teilen. Somit würde die Beispiel-URL auf die Überschrift "reference" in diesem Dokument verweisen.

Angenommen, Sie möchten ein `h2` Element stylen, das Ziel einer URL ist, aber kein anderes Element sollte einen Zielstil erhalten. Dies ist einfach genug:

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Stile zu erstellen, die spezifisch für ein bestimmtes Fragment des Dokuments sind. Dies geschieht mit demselben Identifizierungswert, der in der URI gefunden wird. Um also eine Hintergrundfarbe zum `#reference` Fragment hinzuzufügen, würden wir schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente anvisieren

Wenn das Ziel darin besteht, einen "allgemeinen" Stil zu erstellen, der für alle anvisierten Elemente gilt, ist der universelle Selektor hilfreich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument verweisen. Wenn Sie z. B. den "Ersten" Link auswählen, wird `<h1 id="one">` zum Ziel-Element. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scroll-Position springt, da sich Ziel-Elemente nach Möglichkeit am oberen Rand des Browserfensters befinden.

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

In Fällen, in denen ein Fragment-Identifier auf einen Teil des Dokuments verweist, können Leser verwirrt darüber sein, welcher Teil des Dokuments gelesen werden soll. Durch das Stylen des Ziels einer URI kann Verwirrung für den Leser verringert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
