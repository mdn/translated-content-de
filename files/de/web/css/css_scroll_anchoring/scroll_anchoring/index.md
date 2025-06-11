---
title: Überblick über das Scroll Anchorng
short-title: Overview
slug: Web/CSS/CSS_scroll_anchoring/Scroll_anchoring
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Als Web-Nutzer sind Sie wahrscheinlich mit dem Problem vertraut, das das Scroll Anchoring löst. Sie navigieren zu einer langen Seite mit einer langsamen Verbindung und beginnen zu scrollen, um den Inhalt zu lesen; während Sie beschäftigt sind, springt der Teil der Seite, den Sie gerade ansehen. Dies passiert, weil große Bilder oder andere Elemente weiter oben im Inhalt gerade geladen wurden.

Scroll Anchoring ist eine Browser-Funktion, die darauf abzielt, dieses Problem des Inhaltsspringens zu lösen, das auftritt, wenn Inhalte geladen werden, nachdem der Nutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Scroll Anchoring passt die Scroll-Position an, um die Änderungen außerhalb des Viewports auszugleichen. Das bedeutet, dass der Punkt im Dokument, den der Nutzer ansieht, im Viewport bleibt, was bedeuten kann, dass sich die Scroll-Position tatsächlich ändert in Bezug darauf, wie _weit_ der Nutzer durch das Dokument gescrollt hat.

## Wie aktiviere ich Scroll Anchoring?

Gar nicht! Die Funktion ist in unterstützten Browsern standardmäßig aktiviert. In den meisten Fällen ist das verankerte Scrollen genau das, was Sie wollen — Inhaltssprünge sind eine schlechte Erfahrung für jeden.

## Was, wenn ich es debuggen muss?

Wenn sich Ihre Seite mit aktiviertem Scroll Anchoring nicht gut verhält, liegt es wahrscheinlich daran, dass ein `scroll` Event-Listener das zusätzliche Scrollen, um die Bewegung des Ankerknotens auszugleichen, nicht korrekt verarbeitet.

Sie können prüfen, ob das Deaktivieren des Scroll Anchorings das Problem in Firefox löst, indem Sie `layout.css.scroll-anchoring.enabled` in `about:config` auf `false` ändern. Sie können auch überprüfen, welchen Knoten Firefox als Anker verwendet, indem Sie den `layout.css.scroll-anchoring.highlight` Schalter verwenden. Dies zeigt eine violette Überlagerung auf dem Ankerknoten an.

Wenn ein Knoten nicht als geeigneter Anker erscheint, können Sie ihn mit {{cssxref("overflow-anchor")}} ausschließen, wie unten beschrieben.

## Was, wenn ich es deaktivieren muss?

Das [CSS Scroll Anchoring Modul](/de/docs/Web/CSS/CSS_scroll_anchoring) stellt die {{cssxref("overflow-anchor")}} Eigenschaft bereit, die verwendet werden kann, um das Scroll Anchoring im gesamten Dokument oder in Teilen davon zu deaktivieren. Es ist im Grunde eine Möglichkeit, das Verhalten abzulehnen.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Standardwert; solange der Browser des Nutzers das Scroll Anchoring unterstützt, tritt das Verhalten auf, und sie sollten weniger Inhaltssprünge sehen.
- `none` bedeutet, dass Sie das Dokument oder einen Teil davon ausdrücklich vom Scroll Anchoring ausgenommen haben.

Um das gesamte Dokument auszunehmen, können Sie es auf dem {{htmlelement("body")}} Element setzen:

```css
body {
  overflow-anchor: none;
}
```

Um das Scroll Anchoring für einen Abschnitt des Dokuments auszuschließen, setzen Sie `overflow-anchor: none` auf das Containerelement des Abschnitts:

```css
.container {
  overflow-anchor: none;
}
```

Wenn Sie das Scroll Anchoring für das Dokument oder einen Abschnitt davon deaktivieren, kann ein Nachkomme eines ausgeschlossenen Bereichs nicht wieder eingeschlossen werden. Zum Beispiel, wenn Sie das gesamte Dokument ausschließen, können Sie nicht `overflow-anchor: auto` auf einem Nachkommenknoten setzen, um das Scroll Anchoring für einen Unterabschnitt wieder zu aktivieren.

### Unterdrückungsauslöser

Es gibt einige _Unterdrückungsauslöser_, die das Scroll Anchoring in Bereichen deaktivieren, in denen es problematisch sein könnte. Wenn einer der Auslöser auf dem Ankerknoten oder einem seiner Vorfahren auftritt, wird das Anchoring unterdrückt.

Diese Unterdrückungsauslöser sind Änderungen des berechneten Werts einer der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}} oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die einzelnen Transformations-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}

Zusätzlich deaktivieren Änderungen der {{cssxref("position")}} überall innerhalb des {{Glossary("scroll_container", "Scroll-Containers")}} ebenfalls das Scroll Anchoring.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Um Styles bedingt anzuwenden, je nachdem, ob das Scroll Anchoring deaktiviert werden kann, verwenden Sie [`@supports` Funktionsabfragen](/de/docs/Web/CSS/@supports), um die Unterstützung für die `overflow-anchor` Eigenschaft zu testen.

## Siehe auch

- [Originale Erklärung zum Scroll Anchoring](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md) über WICG (2016)
- [Scroll Anchoring für Webentwickler](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html) über Chromium (2017)
