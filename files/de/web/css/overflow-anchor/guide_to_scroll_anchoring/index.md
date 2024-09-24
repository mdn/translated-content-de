---
title: Leitfaden zur Scroll-Verankerung
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{CSSRef}}

Als Nutzer des Webs sind Sie wahrscheinlich mit dem Problem vertraut, das die Scroll-Verankerung löst. Sie besuchen eine lange Seite bei einer langsamen Verbindung und beginnen zu scrollen, um den Inhalt zu lesen; während Sie beschäftigt sind, springt der Teil der Seite, den Sie gerade betrachten. Dies passiert, weil große Bilder oder andere Elemente weiter oben im Inhalt geladen wurden.

Die Scroll-Verankerung ist eine Browserfunktion, die darauf abzielt, dieses Problem des Inhalts-Springens zu lösen, das auftritt, wenn Inhalte geladen werden, nachdem der Nutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Die Scroll-Verankerung passt die Scroll-Position an, um die Änderungen außerhalb des Sichtfensters auszugleichen. Dies bedeutet, dass der Punkt im Dokument, den der Nutzer betrachtet, im Sichtfenster bleibt, was bedeuten kann, dass sich ihre Scroll-Position tatsächlich ändert, in Bezug auf wie _weit_ sie durch das Dokument bewegt haben.

## Wie aktiviere ich die Scroll-Verankerung?

Das müssen Sie nicht! Die Funktion ist in unterstützenden Browsern standardmäßig aktiviert. In den meisten Fällen ist das verankerte Scrollen genau das, was Sie möchten – das Springen von Inhalten ist für niemanden eine gute Erfahrung.

## Was, wenn ich es debuggen muss?

Wenn Ihre Seite mit aktivierter Scroll-Verankerung nicht gut funktioniert, liegt es wahrscheinlich daran, dass ein `scroll` Ereignis-Listener das zusätzliche Scrollen zur Kompensation der Ankerknotenbewegung nicht gut handhabt.

Sie können prüfen, ob das Deaktivieren der Scroll-Verankerung das Problem in Firefox behebt, indem Sie `layout.css.scroll-anchoring.enabled` auf `false` in `about:config` ändern.

Falls ja, können Sie überprüfen, welchen Knoten Firefox als Anker verwendet, indem Sie den Schalter `layout.css.scroll-anchoring.highlight` verwenden. Dies zeigt eine lila Überlagerung über dem Ankerknoten.

Wenn ein Knoten als Anker ungeeignet erscheint, können Sie ihn wie unten beschrieben mit {{cssxref("overflow-anchor")}} ausschließen.

## Was, wenn ich es deaktivieren muss?

Die Spezifikation bietet eine neue Eigenschaft, {{cssxref("overflow-anchor")}}, die verwendet werden kann, um die Scroll-Verankerung für das gesamte oder einen Teil des Dokuments zu deaktivieren. Es ist im Wesentlichen eine Möglichkeit, das neue Verhalten abzulehnen.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Anfangswert; solange der Nutzer einen unterstützten Browser hat, wird das Scroll-Verankerungsverhalten erfolgen und sie sollten weniger Inhalts-Sprünge sehen.
- `none` bedeutet, dass Sie das Dokument oder einen Teil davon ausdrücklich von der Scroll-Verankerung ausgeschlossen haben.

Um das gesamte Dokument abzuwählen, können Sie es auf dem {{htmlelement("body")}}-Element einstellen:

```css
body {
  overflow-anchor: none;
}
```

Um einen bestimmten Teil des Dokuments abzumelden, verwenden Sie `overflow-anchor: none` auf dessen Container-Element:

```css
.container {
  overflow-anchor: none;
}
```

> [!NOTE]
> Die Spezifikation besagt, dass, sobald die Scroll-Verankerung abgewählt wurde, Sie nicht von einem Kindelement aus wieder dafür entscheiden können. Zum Beispiel, wenn Sie für das gesamte Dokument abwählen, können Sie nicht irgendwo im Dokument `overflow-anchor: auto` setzen, um es für einen Unterabschnitt wieder zu aktivieren.

### Unterdrückungs-Trigger

Die Spezifikation beschreibt auch einige _Unterdrückungs-Trigger_, die die Scroll-Verankerung in Bereichen deaktivieren, in denen sie problematisch sein könnte. Wenn einer der Trigger am Ankerknoten oder einem seiner Vorfahren auftritt, wird die Verankerung unterdrückt.

Diese Unterdrückungs-Trigger sind Änderungen des berechneten Wertes einer der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}} oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die einzelnen Transformations-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}

Zusätzlich deaktivieren {{cssxref("position")}} Änderungen irgendwo im Scroll-Fenster ebenfalls die Scroll-Verankerung.

> [!NOTE]
> In [Firefox-Bug 1584285](https://bugzil.la/1584285) wurde das Flag `layout.css.scroll-anchoring.suppressions.enabled` zu Firefox Nightly hinzugefügt, um die Deaktivierung dieser Trigger zu ermöglichen.

## Weiterführende Literatur

- [Erklärungsdokument auf der WICG-Site](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md)
- [Scroll-Verankerung für Webentwickler im Chromium-Blog](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html)

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitäts-Hinweise

Wenn Sie testen müssen, ob die Scroll-Verankerung in einem Browser verfügbar ist, verwenden Sie [Feature Queries](/de/docs/Web/CSS/@supports), um die Unterstützung für die `overflow-anchor`-Eigenschaft zu testen.
