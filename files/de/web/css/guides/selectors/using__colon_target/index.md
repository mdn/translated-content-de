---
title: Die Pseudoklasse :target in Selektoren verwenden
short-title: :target verwenden
slug: Web/CSS/Guides/Selectors/Using_:target
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

Wenn eine URL mithilfe eines [URL-Fragmentbezeichners](/de/docs/Web/URI/Reference/Fragment#fragment) auf eine bestimmte Stelle in einem Dokument verweist, kann diese für Nutzer schwer zu erkennen sein. Dieser Leitfaden zeigt, wie Sie mit CSS die Aufmerksamkeit auf das Ziel einer URL lenken und so die Benutzerfreundlichkeit verbessern können.

## Ein Ziel auswählen

Mit der [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{cssxref(":target")}} können Sie das Zielelement eines Dokuments gestalten, das durch den URL-Fragmentbezeichner identifiziert wird. Beispielsweise enthält die URL `https://developer.mozilla.org/de/docs/Web/CSS#reference` den Fragmentbezeichner `#reference`. In HTML dienen die Werte der Attribute `id` und `name` als Bezeichner, da beide denselben Namensraum verwenden. Die Beispiel-URL verweist daher auf das Element mit der `id` `reference` in diesem Dokument.

Um ein `h2`-Element zu gestalten, auf das eine URL verweist, ohne andere Elementtypen mit diesem Stil zu versehen, kombinieren Sie die Pseudoklasse `:target` mit dem [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors):

```css
h2:target {
  outline: 2px solid;
}
```

Sie können auch Stile erstellen, die nur für ein bestimmtes Fragment des Dokuments gelten. Verwenden Sie dazu denselben Bezeichner, der im URI steht. Um dem Fragment `#reference` eine Hintergrundfarbe zu geben, schreiben Sie beispielsweise:

```css
#reference:target {
  background-color: yellow;
}
```

## Alle Elemente als Ziel auswählen

Wenn ein Stil für alle Zielelemente gelten soll, können Sie den universellen Selektor verwenden:

```css
:target {
  color: red;
}
```

## Beispiel

Im folgenden Beispiel gibt es fünf Links, die auf Elemente im selben Dokument verweisen. Wenn Sie beispielsweise den Link „First“ auswählen, wird `<h1 id="one">` zum Zielelement. Beachten Sie, dass das Dokument möglicherweise an eine andere Position scrollt, da Zielelemente nach Möglichkeit am oberen Rand des Browserfensters angezeigt werden.

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

Wenn ein Fragmentbezeichner auf einen Teil eines Dokuments verweist, ist für Leser möglicherweise nicht sofort ersichtlich, welcher Teil gemeint ist. Indem Sie das Ziel eines URI gestalten, können Sie diese Unklarheit verringern oder beseitigen.

## Siehe auch

- {{cssxref(":target")}}
