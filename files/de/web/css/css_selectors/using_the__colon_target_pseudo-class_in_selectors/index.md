---
title: Verwenden der :target-Pseudoklasse in Selektoren
slug: Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors
l10n:
  sourceCommit: 5bcc3c7f96984e42dd8bb61ff97b7c5d64dd3e95
---

{{CSSRef}}

Wenn eine URL mit einem [URL-Fragmentbezeichner](/de/docs/Web/URI/Fragment#fragment) auf ein bestimmtes Stück eines Dokuments zeigt, kann es für den Benutzer schwierig sein, dies zu bemerken. Dieser Leitfaden behandelt die Verwendung von CSS, um die Aufmerksamkeit auf das Ziel einer URL zu lenken und die Benutzerfreundlichkeit zu verbessern.

## Auswahl eines Ziels

Die [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) {{cssxref(":target")}} wird verwendet, um das Zielelement des Dokuments zu stylen, das mit dem URL-Fragmentbezeichner identifiziert wird. Zum Beispiel enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentbezeichner `#reference`. In HTML werden Bezeichner als Werte der `id`- oder `name`-Attribute gefunden, da beide denselben Namensraum teilen. Daher würde die Beispiel-URL auf das Element verweisen, das in diesem Dokument die id `reference` hat.

Angenommen, Sie möchten jedes `h2`-Element stylen, das das Ziel einer URL ist, aber kein anderes Element soll diesen Zielstil erhalten. Dies ist einfach genug:

```css
h2:target {
  outline: 2px solid;
}
```

Es ist auch möglich, Stile zu erstellen, die spezifisch für einen bestimmten Fragmentteil des Dokuments sind. Dies geschieht mit dem gleichen Identifikationswert, der in der URI gefunden wird. Um also eine Hintergrundfarbe zum Fragment `#reference` hinzuzufügen, würden wir schreiben:

```css
#reference:target {
  background-color: yellow;
}
```

## Zielrichtung aller Elemente

Wenn die Absicht besteht, einen "pauschalen" Stil zu erstellen, der auf alle anvisierten Elemente angewendet wird, dann ist der Universalselektor hilfreich:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument verweisen. Wenn Sie beispielsweise den Link "First" auswählen, wird `<h1 id="one">` zum Zielelement. Beachten Sie, dass das Dokument möglicherweise zu einer neuen Scrollposition springt, da Zielelemente, wenn möglich, am oberen Rand des Browserfensters platziert werden.

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

In Fällen, in denen ein Fragmentbezeichner auf einen Teil des Dokuments verweist, können Leser verwirrt darüber sein, welchen Teil des Dokuments sie lesen sollen. Indem das Ziel einer URI gestylt wird, kann die Verwirrung der Leser verringert oder beseitigt werden.

## Siehe auch

- {{cssxref(":target")}}
