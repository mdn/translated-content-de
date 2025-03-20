---
title: Verständnis von Scroll-Anker
slug: Web/CSS/CSS_scroll_anchoring/Scroll_anchoring
l10n:
  sourceCommit: a7335ef81c49b0f7604ee64240711456d0f29e6b
---

{{CSSRef}}

Als Webnutzer sind Sie wahrscheinlich mit dem Problem vertraut, das durch Scroll-Anker gelöst wird. Sie navigieren zu einer langen Seite mit einer langsamen Verbindung und beginnen zu scrollen, um den Inhalt zu lesen; während Sie lesen, springt der Teil der Seite, den Sie gerade ansehen, plötzlich. Dies passiert, weil große Bilder oder andere Elemente weiter oben im Inhalt gerade geladen wurden.

Scroll-Anker ist eine Browser-Funktion, die darauf abzielt, dieses Problem des Inhaltsspringens zu lösen, das auftritt, wenn Inhalte geladen werden, nachdem der Benutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Scroll-Anker passt die Scroll-Position an, um die Änderungen außerhalb des Ansichtsfensters auszugleichen. Dies bedeutet, dass der Punkt im Dokument, den der Benutzer betrachtet, im Ansichtsfenster bleibt, was bedeuten kann, dass sich seine Scroll-Position tatsächlich in Bezug darauf ändert, wie _weit_ er sich durch das Dokument bewegt hat.

## Wie aktiviere ich Scroll-Anker?

Das müssen Sie nicht! Diese Funktion ist in unterstützenden Browsern standardmäßig aktiviert. In den meisten Fällen ist verankertes Scrollen genau das, was Sie möchten – das Springen von Inhalten ist eine schlechte Erfahrung für jeden.

## Was, wenn ich es debuggen muss?

Wenn Ihre Seite mit aktiviertem Scroll-Anker nicht gut funktioniert, liegt es wahrscheinlich daran, dass ein `scroll`-Ereignislistener das zusätzliche Scrollen zur Kompensation der Ankerknotenbewegung nicht korrekt handhabt.

Sie können überprüfen, ob das Deaktivieren von Scroll-Anker das Problem in Firefox behebt, indem Sie `layout.css.scroll-anchoring.enabled` in `about:config` auf `false` setzen. Sie können auch überprüfen, welchen Knoten Firefox als Anker verwendet, indem Sie den Schalter `layout.css.scroll-anchoring.highlight` verwenden. Dadurch wird ein lila Overlay über dem Ankerknoten angezeigt.

Wenn ein Knoten nicht als geeigneter Anker erscheint, können Sie ihn mit {{cssxref("overflow-anchor")}} ausschließen, wie unten beschrieben.

## Was, wenn ich es deaktivieren muss?

Das [CSS Scroll-Anker-Modul](/de/docs/Web/CSS/CSS_scroll_anchoring) bietet die Eigenschaft {{cssxref("overflow-anchor")}}, die verwendet werden kann, um Scroll-Anker für das gesamte oder Teile des Dokuments zu deaktivieren. Es ist im Wesentlichen eine Möglichkeit, sich aus dem Verhalten auszuklinken.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Anfangswert; solange der Browser des Benutzers Scroll-Anker unterstützt, wird das Verhalten stattfinden, und sie sollten weniger Inhaltssprünge sehen.
- `none` bedeutet, dass Sie das Dokument oder Teile davon ausdrücklich von Scroll-Anker ausgeschlossen haben.

Um das gesamte Dokument auszuschließen, können Sie es auf dem {{htmlelement("body")}}-Element festlegen:

```css
body {
  overflow-anchor: none;
}
```

Um Scroll-Anker für einen Abschnitt des Dokuments auszuschließen, setzen Sie `overflow-anchor: none` auf das Containerelement des Abschnitts:

```css
.container {
  overflow-anchor: none;
}
```

Wenn Sie das Scroll-Anker für das Dokument oder einen Abschnitt davon ausschließen, kann ein Nachfahre eines ausgeschlossenen Bereichs nicht wieder eingeschlossen werden. Zum Beispiel können Sie, wenn Sie das gesamte Dokument ausschließen, nicht `overflow-anchor: auto` auf einem untergeordneten Knoten setzen, um Scroll-Anker für einen Unterabschnitt wieder zu aktivieren.

### Unterdrückungsauslöser

Es gibt einige _Unterdrückungsauslöser_, die Scroll-Anker an Stellen deaktivieren, an denen es problematisch sein könnte. Wenn einer der Auslöser auf den Ankerknoten oder einen seiner Vorfahren wirkt, wird die Verankerung unterdrückt.

Diese Unterdrückungsauslöser sind Änderungen am berechneten Wert einer der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}} oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}}- oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die individuellen Transformationseigenschaften {{cssxref("translate")}}, {{cssxref("scale")}} und {{cssxref("rotate")}}

Zusätzlich deaktivieren Änderungen an {{cssxref("position")}} überall innerhalb des {{Glossary("scroll_container", "Scroll-Containers")}} ebenfalls das Scroll-Anker.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Um Stile bedingt anzuwenden, basierend darauf, ob Scroll-Anker deaktiviert werden kann, verwenden Sie [`@supports`-Feature-Abfragen](/de/docs/Web/CSS/@supports), um die Unterstützung für die Eigenschaft `overflow-anchor` zu testen.

## Siehe auch

- [Original Scroll-Anker-Erklärung](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md) über WICG (2016)
- [Scroll-Anker für Webentwickler](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html) über Chromium (2017)
