---
title: Übersicht über das Scroll-Ankern
short-title: Overview
slug: Web/CSS/CSS_scroll_anchoring/Scroll_anchoring
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Als Webnutzer sind Sie wahrscheinlich mit dem Problem vertraut, das durch das Scroll-Ankern gelöst wird. Sie besuchen eine lange Seite mit einer langsamen Verbindung und beginnen zu scrollen, um den Inhalt zu lesen; während Sie beschäftigt sind, springt der Teil der Seite, den Sie gerade ansehen, plötzlich. Dies geschieht, weil große Bilder oder andere Elemente weiter oben im Inhalt geladen wurden.

Das Scroll-Ankern ist eine Browserfunktion, die darauf abzielt, das Problem des Springens von Inhalten zu lösen, das auftritt, wenn Inhalte geladen werden, nachdem der Nutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Das Scroll-Ankern passt die Scroll-Position an, um die Veränderungen außerhalb des Viewports auszugleichen. Dies bedeutet, dass der Punkt im Dokument, den der Nutzer betrachtet, im Viewport bleibt, was bedeuten kann, dass sich ihre Scroll-Position tatsächlich in Bezug darauf ändert, wie _weit_ sie sich durch das Dokument bewegt haben.

## Wie aktiviere ich das Scroll-Ankern?

Das brauchen Sie nicht! Die Funktion ist standardmäßig in unterstützenden Browsern aktiviert. In den meisten Fällen ist verankertes Scrollen genau das, was Sie möchten - das Springen von Inhalten ist für niemanden eine gute Erfahrung.

## Was ist, wenn ich es debuggen muss?

Wenn Ihre Seite mit aktiviertem Scroll-Ankern nicht gut funktioniert, liegt es wahrscheinlich daran, dass ein `scroll`-Ereignislistener das zusätzliche Scrollen nicht korrekt behandelt, um die Bewegung des Ankerknotens auszugleichen.

Sie können überprüfen, ob das Deaktivieren des Scroll-Ankerns das Problem in Firefox behebt, indem Sie `layout.css.scroll-anchoring.enabled` in `about:config` auf `false` setzen. Sie können auch überprüfen, welcher Knoten von Firefox als Anker verwendet wird, indem Sie den `layout.css.scroll-anchoring.highlight` Schalter verwenden. Dadurch wird ein lila Overlay über dem Ankerknoten angezeigt.

Wenn ein Knoten nicht als geeigneter Anker erscheint, können Sie ihn mit {{cssxref("overflow-anchor")}} ausschließen, wie unten beschrieben.

## Was ist, wenn ich es deaktivieren muss?

Das [CSS-Scroll-Anker-Modul](/de/docs/Web/CSS/CSS_scroll_anchoring) bietet die {{cssxref("overflow-anchor")}}-Eigenschaft, die verwendet werden kann, um das Scroll-Ankern im gesamten oder in Teilen des Dokuments zu deaktivieren. Es ist im Wesentlichen eine Möglichkeit, sich gegen das Verhalten zu entscheiden.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Ausgangswert; solange der Browser des Nutzers das Scroll-Ankern unterstützt, tritt das Verhalten auf, und sie sollten weniger Heimsprünge von Inhalten erleben.
- `none` bedeutet, dass Sie das Dokument oder einen Teil davon ausdrücklich vom Scroll-Ankern ausgeschlossen haben.

Um das gesamte Dokument auszuschließen, können Sie diese Eigenschaft auf dem {{htmlelement("body")}}-Element setzen:

```css
body {
  overflow-anchor: none;
}
```

Um das Scroll-Ankern für einen Abschnitt des Dokuments auszuschließen, setzen Sie `overflow-anchor: none` auf das Containerelement des Abschnitts:

```css
.container {
  overflow-anchor: none;
}
```

Wenn Sie das Scroll-Ankern für das Dokument oder einen Abschnitt davon deaktivieren, kann ein Nachkomme des ausgeschlossenen Bereichs nicht wieder eingeschlossen werden. Wenn Sie beispielsweise das gesamte Dokument ausschließen, können Sie keinen Nachkommenknoten mit `overflow-anchor: auto` versehen, um das Scroll-Ankern für einen Unterabschnitt wieder zu aktivieren.

### Unterdrückungsauslöser

Es gibt einige _Unterdrückungsauslöser_, die das Scroll-Ankern in Bereichen deaktivieren, in denen es problematisch sein könnte. Wenn einer der Auslöser am Ankerknoten oder einem seiner Vorfahren auftritt, wird das Ankern unterdrückt.

Diese Unterdrückungsauslöser sind Änderungen am berechneten Wert der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}} oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die individuellen Transformationseigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}

Zusätzlich deaktivieren Änderungen an {{cssxref("position")}} überall innerhalb des {{Glossary("scroll_container", "Scroll-Containers")}} ebenfalls das Scroll-Ankern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Um Styles bedingt anzuwenden, basierend auf der Möglichkeit, das Scroll-Ankern zu deaktivieren, verwenden Sie [`@supports` Feature Queries](/de/docs/Web/CSS/Reference/At-rules/@supports), um die Unterstützung für die `overflow-anchor`-Eigenschaft zu testen.

## Siehe auch

- [Originale Scroll-Anker-Erklärung](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md) via WICG (2016)
- [Scroll-Ankern für Webentwickler](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html) via Chromium (2017)
