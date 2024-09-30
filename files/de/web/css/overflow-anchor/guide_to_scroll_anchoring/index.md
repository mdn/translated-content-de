---
title: Leitfaden zu Scroll-Anker
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{CSSRef}}

Als Nutzer des Webs sind Sie wahrscheinlich mit dem Problem vertraut, das durch Scroll-Anker gelöst wird. Sie surfen auf einer langen Seite mit einer langsamen Verbindung und beginnen zu scrollen, um den Inhalt zu lesen; während Sie lesen, springt der Teil der Seite, den Sie gerade betrachten. Dies geschieht, weil große Bilder oder andere Elemente weiter oben im Inhalt nachgeladen werden.

Scroll-Anker ist ein Browser-Feature, das dieses Problem des Inhaltsspringens lösen soll, das auftritt, wenn Inhalte geladen werden, nachdem der Nutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Scroll-Anker passt die Scroll-Position an, um die Änderungen außerhalb des Ansichtsfensters auszugleichen. Das bedeutet, dass der Punkt im Dokument, den der Nutzer betrachtet, im Ansichtsfenster bleibt, was bedeuten kann, dass sich ihre Scroll-Position tatsächlich ändert, gemessen daran, wie _weit_ sie durch das Dokument gescrollt haben.

## Wie aktiviere ich Scroll-Anker?

Das müssen Sie nicht! Die Funktion ist standardmäßig in unterstützenden Browsern aktiviert. In den meisten Fällen ist verankertes Scrollen genau das, was Sie möchten — Inhaltssprünge sind für niemanden eine gute Erfahrung.

## Was, wenn ich es debuggen muss?

Wenn sich Ihre Seite mit aktiviertem Scroll-Anker nicht gut verhält, liegt das wahrscheinlich daran, dass ein `scroll`-Ereignislistener das zusätzliche Scrollen zur Kompensation der Ankerknotenbewegung nicht gut handhabt.

Sie können überprüfen, ob das Deaktivieren von Scroll-Anker das Problem in Firefox behebt, indem Sie `layout.css.scroll-anchoring.enabled` auf `false` in `about:config` ändern.

Wenn dies der Fall ist, können Sie überprüfen, welchen Knoten Firefox als Anker verwendet, indem Sie den Schalter `layout.css.scroll-anchoring.highlight` verwenden. Dies zeigt eine lila Überlagerung über dem Ankerknoten an.

Wenn ein Knoten nicht geeignet scheint, ein Anker zu sein, können Sie ihn mit {{cssxref("overflow-anchor")}}, wie unten beschrieben, ausschließen.

## Was, wenn ich es deaktivieren muss?

Die Spezifikation bietet eine neue Eigenschaft, {{cssxref("overflow-anchor")}}, die verwendet werden kann, um Scroll-Anker für das gesamte oder einen Teil des Dokuments zu deaktivieren. Im Wesentlichen ist es eine Möglichkeit, sich gegen das neue Verhalten zu entscheiden.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Anfangswert; solange der Nutzer einen unterstützten Browser hat, tritt das Verhalten des Scroll-Ankers auf und sie sollten weniger Inhaltsprünge sehen.
- `none` bedeutet, dass Sie das Dokument oder einen Teil des Dokuments ausdrücklich vom Scroll-Anker abgemeldet haben.

Um das gesamte Dokument auszuschließen, können Sie es auf dem {{htmlelement("body")}}-Element setzen:

```css
body {
  overflow-anchor: none;
}
```

Um einen bestimmten Teil des Dokuments auszuschließen, verwenden Sie `overflow-anchor: none` auf seinem Containerelement:

```css
.container {
  overflow-anchor: none;
}
```

> [!NOTE]
> Die Spezifikation legt fest, dass, sobald ein Scroll-Anker ausgeschlossen wurde, Sie es nicht von einem Kindelement aus wieder aktivieren können. Beispielsweise, wenn Sie für das gesamte Dokument eine Abmeldung vornehmen, können Sie nicht an anderer Stelle im Dokument `overflow-anchor: auto` setzen, um es für einen Abschnitt wieder zu aktivieren.

### Unterdrückungsauslöser

Die Spezifikation beschreibt auch einige _Unterdrückungsauslöser_, die Scroll-Anker in Bereichen deaktivieren, in denen es problematisch sein könnte. Wenn einer der Auslöser auf dem Ankerknoten oder einem seiner Vorfahren auftritt, wird das Ankern unterdrückt.

Diese Unterdrückungsauslöser sind Änderungen am berechneten Wert einer der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}}- oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die einzelnen Transformationseigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}

Zusätzlich deaktiviert jede Änderung von {{cssxref("position")}} innerhalb der Scrollbox ebenfalls den Scroll-Anker.

> [!NOTE]
> Im [Firefox Bug 1584285](https://bugzil.la/1584285) wurde das Flag `layout.css.scroll-anchoring.suppressions.enabled` zu Firefox Nightly hinzugefügt, um das Deaktivieren dieser Auslöser zu ermöglichen.

## Weiterführende Lektüre

- [Erklärungsdokument auf der WICG-Website](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md)
- [Scroll-Anker für Webentwickler im Chromium-Blog](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html)

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

Wenn Sie testen müssen, ob Scroll-Anker in einem Browser verfügbar ist, verwenden Sie [Feature Queries](/de/docs/Web/CSS/@supports), um die Unterstützung der `overflow-anchor`-Eigenschaft zu testen.
