---
title: Überblick über die Scroll-Verankerung
short-title: Overview
slug: Web/CSS/CSS_scroll_anchoring/Scroll_anchoring
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Als Webbenutzer sind Sie wahrscheinlich mit dem Problem vertraut, das die Scroll-Verankerung löst. Sie besuchen eine lange Seite mit einer langsamen Verbindung und beginnen zu scrollen, um den Inhalt zu lesen; während Sie beschäftigt sind, springt der Teil der Seite, den Sie gerade betrachten. Dies geschieht, weil große Bilder oder andere Elemente weiter oben im Inhalt gerade geladen wurden.

Scroll-Verankerung ist eine Browserfunktion, die das Problem des Inhaltspringens lösen soll, das auftritt, wenn Inhalte geladen werden, nachdem der Benutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Scroll-Verankerung passt die Scroll-Position an, um die Änderungen außerhalb des Viewports auszugleichen. Das bedeutet, dass der Punkt im Dokument, den der Benutzer betrachtet, im Viewport bleibt, was bedeuten kann, dass sich ihre Scroll-Position tatsächlich ändert hinsichtlich dessen, wie _weit_ sie im Dokument fortgeschritten sind.

## Wie aktiviere ich die Scroll-Verankerung?

Das müssen Sie nicht! Die Funktion ist in unterstützenden Browsern standardmäßig aktiviert. In den meisten Fällen ist verankertes Scrollen genau das, was Sie wollen — Inhaltsprünge sind für niemanden eine gute Erfahrung.

## Was, wenn ich es debuggen muss?

Wenn sich Ihre Seite nicht gut mit aktivierter Scroll-Verankerung verhält, liegt es wahrscheinlich daran, dass ein `scroll`-Ereignis-Listener das zusätzliche Scrollen nicht richtig behandelt, um den Bewegungen des Ankerknotens Rechnung zu tragen.

Sie können überprüfen, ob das Deaktivieren der Scroll-Verankerung das Problem in Firefox löst, indem Sie `layout.css.scroll-anchoring.enabled` auf `false` in `about:config` ändern. Sie können auch überprüfen, welchen Knoten Firefox als Anker verwendet, mit dem Schalter `layout.css.scroll-anchoring.highlight`. Dies zeigt ein lila Overlay über dem Ankerknoten an.

Wenn ein Knoten nicht als geeigneter Anker erscheint, können Sie ihn mit {{cssxref("overflow-anchor")}} ausschließen, wie unten beschrieben.

## Was, wenn ich es deaktivieren muss?

Das [CSS-Scroll-Verankerungsmodul](/de/docs/Web/CSS/CSS_scroll_anchoring) bietet die Eigenschaft {{cssxref("overflow-anchor")}}, die verwendet werden kann, um die Scroll-Verankerung im gesamten Dokument oder in Teilen davon zu deaktivieren. Es ist im Wesentlichen eine Möglichkeit, sich gegen das Verhalten zu entscheiden.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Ausgangswert; solange der Browser des Benutzers die Scroll-Verankerung unterstützt, tritt das Verhalten auf, und sie sollten weniger Inhaltssprünge sehen.
- `none` bedeutet, dass Sie das Dokument oder einen Teil des Dokuments ausdrücklich von der Scroll-Verankerung ausgeschlossen haben.

Um das gesamte Dokument abzumelden, können Sie es auf dem {{htmlelement("body")}}-Element setzen:

```css
body {
  overflow-anchor: none;
}
```

Um die Scroll-Verankerung für einen Abschnitt des Dokuments zu deaktivieren, setzen Sie `overflow-anchor: none` auf das Container-Element des Abschnitts:

```css
.container {
  overflow-anchor: none;
}
```

Wenn Scroll-Verankerung für das Dokument oder einen Abschnitt davon deaktiviert wird, kann ein Nachfahre eines abgemeldeten Bereichs nicht wieder angemeldet werden. Beispielsweise, wenn Sie das gesamte Dokument abmelden, können Sie `overflow-anchor: auto` auf einem Nachfahre-Knoten nicht setzen, um die Scroll-Verankerung für einen Teilabschnitt wieder zu aktivieren.

### Unterdrückungs-Auslöser

Es gibt einige _Unterdrückungs-Auslöser_, die die Scroll-Verankerung an Orten deaktivieren, an denen sie problematisch sein könnte. Wenn einer der Auslöser auf dem Ankerknoten oder einem Vorfahren davon auftritt, wird die Verankerung unterdrückt.

Diese Unterdrückungs-Auslöser sind Änderungen der berechneten Werte einer der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}} oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die individuellen Transformationseigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}

Außerdem deaktivieren Änderungen der {{cssxref("position")}} innerhalb des {{Glossary("scroll_container", "scroll container")}} auch die Scroll-Verankerung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Um Stile bedingt anzuwenden, je nachdem ob die Scroll-Verankerung deaktiviert werden kann oder nicht, verwenden Sie [`@supports` Funktionstests](/de/docs/Web/CSS/@supports) um die Unterstützung der `overflow-anchor`-Eigenschaft zu testen.

## Siehe auch

- [Originale Scroll-Verankerungs-Erklärung](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md) über WICG (2016)
- [Scroll-Verankerung für Webentwickler](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html) über Chromium (2017)
