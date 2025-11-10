---
title: Übersicht über das Scroll-Anchoring
short-title: Overview
slug: Web/CSS/Guides/Scroll_anchoring/Overview
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Als Webbenutzer sind Sie wahrscheinlich mit dem Problem vertraut, das durch Scroll-Anchoring gelöst wird. Sie rufen eine lange Seite bei langsamer Verbindung auf und beginnen zu scrollen, um den Inhalt zu lesen; während Sie beschäftigt sind zu lesen, springt der Teil der Seite, den Sie gerade ansehen, plötzlich. Dies geschieht, weil große Bilder oder andere Elemente weiter oben im Inhalt geladen wurden.

Scroll-Anchoring ist eine Browser-Funktion, die dieses Problem des Springens von Inhalten lösen soll, welches auftritt, wenn Inhalt geladen wird, nachdem der Nutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Scroll-Anchoring passt die Scroll-Position an, um Änderungen außerhalb des Viewports auszugleichen. Dies bedeutet, dass der Punkt im Dokument, den der Nutzer betrachtet, im Viewport bleibt, was tatsächlich bedeuten kann, dass sich die Scroll-Position in Bezug darauf, wie _weit_ sie sich durch das Dokument bewegt haben, ändert.

## Wie schalte ich Scroll-Anchoring ein?

Das müssen Sie nicht! Die Funktion ist in unterstützenden Browsern standardmäßig aktiviert. In den meisten Fällen ist verankertes Scrollen genau das, was Sie wollen — springende Inhalte sind eine schlechte Erfahrung für jeden.

## Was, wenn ich es debuggen muss?

Wenn sich Ihre Seite mit aktiviertem Scroll-Anchoring nicht richtig verhält, liegt das wahrscheinlich daran, dass ein `scroll`-Ereignis-Listener das zusätzliche Scrollen zum Ausgleich der Anchor-Node-Bewegung nicht korrekt handhabt.

Sie können in Firefox überprüfen, ob das Deaktivieren von Scroll-Anchoring das Problem behebt, indem Sie `layout.css.scroll-anchoring.enabled` in `about:config` auf `false` setzen. Außerdem können Sie mit dem `layout.css.scroll-anchoring.highlight` Schalter überprüfen, welches Knoten Firefox als Anker verwendet. Dies zeigt eine lila Überlagerung über dem Anker-Knoten an.

Wenn ein Knoten nicht als geeigneter Anker erscheint, können Sie ihn mit {{cssxref("overflow-anchor")}} ausschließen, wie unten beschrieben.

## Was, wenn ich es deaktivieren muss?

Das [CSS Scroll-Anchoring-Modul](/de/docs/Web/CSS/Guides/Scroll_anchoring) bietet die {{cssxref("overflow-anchor")}}-Eigenschaft, mit der das Scroll-Anchoring für das gesamte Dokument oder Teile davon deaktiviert werden kann. Im Wesentlichen handelt es sich um eine Möglichkeit, sich gegen das Verhalten zu entscheiden.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Anfangswert; solange der Browser des Benutzers Scroll-Anchoring unterstützt, tritt das Verhalten auf, und sie sollten weniger Inhaltssprünge sehen.
- `none` bedeutet, dass Sie ausdrücklich beschlossen haben, das Dokument oder Teile davon vom Scroll-Anchoring auszuschließen.

Um das gesamte Dokument auszuschließen, können Sie es auf das {{htmlelement("body")}}-Element setzen:

```css
body {
  overflow-anchor: none;
}
```

Um das Scroll-Anchoring für einen Abschnitt des Dokuments auszuschließen, setzen Sie `overflow-anchor: none` auf das Containerelement des Abschnitts:

```css
.container {
  overflow-anchor: none;
}
```

Wenn Sie das Scroll-Anchoring im Dokument oder einem Abschnitt davon ausschließen, kann ein Nachfahre eines ausgeschlossenen Bereichs nicht wieder eingeschlossen werden. Beispielsweise, wenn Sie das gesamte Dokument ausschließen, können Sie `overflow-anchor: auto` nicht auf einem Nachfahren-Knoten setzen, um das Scroll-Anchoring für einen Unterabschnitt wieder einzuschalten.

### Unterdrückungsauslöser

Es gibt einige _Unterdrückungsauslöser_, die Scroll-Anchoring an Orten deaktivieren, an denen es problematisch sein könnte. Wenn einer der Auslöser auf dem Anker-Knoten oder einem seiner Vorfahren auftritt, wird das Anchoring unterdrückt.

Diese Unterdrückungsauslöser sind Änderungen am berechneten Wert der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}}- oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die einzelnen Transformations-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}

Außerdem deaktivieren Änderungen von {{cssxref("position")}} innerhalb des {{Glossary("scroll_container", "Scroll-Containers")}} ebenfalls das Scroll-Anchoring.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Um Stile bedingt anzuwenden, basierend darauf, ob Scroll-Anchoring deaktiviert werden kann, verwenden Sie [`@supports`-Feature-Abfragen](/de/docs/Web/CSS/Reference/At-rules/@supports), um die Unterstützung für die `overflow-anchor`-Eigenschaft zu testen.

## Siehe auch

- [Originale Scroll-Anchoring-Erklärung](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md) über WICG (2016)
- [Scroll-Anchoring für Webentwickler](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html) über Chromium (2017)
