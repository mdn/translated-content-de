---
title: Verständnis von Scroll-Anker
slug: Web/CSS/CSS_scroll_anchoring/Scroll_anchoring
l10n:
  sourceCommit: 44f398527f2b0195a7c3b35db0a53c80aebe8e48
---

{{CSSRef}}

Als Nutzer des Internets sind Sie wahrscheinlich mit dem Problem vertraut, das durch Scroll-Anker gelöst wird. Sie öffnen eine lange Seite bei einer langsamen Verbindung und beginnen zu scrollen, um den Inhalt zu lesen. Während Sie lesen, springt plötzlich der Abschnitt der Seite, den Sie gerade ansehen. Dies ist passiert, weil große Bilder oder andere Elemente weiter oben im Inhalt gerade geladen wurden.

Scroll-Anker ist eine Browser-Funktion, die darauf abzielt, dieses Problem des Inhalts-Springens zu lösen. Dies geschieht, wenn Inhalte geladen werden, nachdem der Nutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert das?

Scroll-Anker passt die Scroll-Position an, um die Änderungen außerhalb des sichtbaren Bereichs auszugleichen. Dies bedeutet, dass der Punkt im Dokument, den der Nutzer betrachtet, im sichtbaren Bereich bleibt, was bedeuten kann, dass sich ihre Scroll-Position in Bezug darauf, wie _weit_ sie im Dokument vorangekommen sind, tatsächlich ändert.

## Wie schalte ich Scroll-Anker ein?

Sie müssen es nicht einschalten! Die Funktion ist in unterstützenden Browsern standardmäßig aktiviert. In den meisten Fällen ist verankertes Scrollen genau das, was Sie wollen – Springender Inhalt ist eine schlechte Erfahrung für jeden.

## Was, wenn ich es debuggen muss?

Wenn Ihre Seite sich mit aktiviertem Scroll-Anker nicht gut verhält, liegt das wahrscheinlich daran, dass ein `scroll`-Ereignis-Listener nicht das zusätzliche Scrollen handhabt, um die Bewegung des Ankerknotens auszugleichen.

Sie können überprüfen, ob das Deaktivieren des Scroll-Ankers das Problem in Firefox behebt, indem Sie `layout.css.scroll-anchoring.enabled` in `about:config` auf `false` setzen. Sie können auch prüfen, welchen Knoten Firefox als Anker verwendet, indem Sie den `layout.css.scroll-anchoring.highlight` Schalter verwenden. Dadurch wird eine lila Überlagerung über dem Ankerknoten angezeigt.

Wenn ein Knoten nicht als geeigneter Anker erscheint, können Sie ihn mit {{cssxref("overflow-anchor")}} ausschließen, wie unten beschrieben.

## Was, wenn ich es deaktivieren muss?

Das [CSS Scroll-Anker Modul](/de/docs/Web/CSS/CSS_scroll_anchoring) stellt die {{cssxref("overflow-anchor")}}-Eigenschaft bereit, die verwendet werden kann, um Scroll-Anker im gesamten oder in Teilen des Dokuments zu deaktivieren. Es ist im Wesentlichen eine Möglichkeit, sich von dem Verhalten abzumelden.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Anfangswert; solange der Browser des Nutzers Scroll-Anker unterstützt, tritt das Verhalten auf, und sie sollten weniger Inhaltssprünge sehen.
- `none` bedeutet, dass Sie das Dokument oder Teile des Dokuments ausdrücklich vom Scroll-Anker ausgeschlossen haben.

Um das gesamte Dokument abzumelden, können Sie es auf dem {{htmlelement("body")}}-Element festlegen:

```css
body {
  overflow-anchor: none;
}
```

Um das Scroll-Anker für einen Abschnitt des Dokuments abzuwählen, setzen Sie `overflow-anchor: none` auf das Containerelement des Abschnitts:

```css
.container {
  overflow-anchor: none;
}
```

Wenn Sie das Scroll-Anker im Dokument oder einem Abschnitt davon abmelden, kann ein Nachkomme eines abgewählten Bereichs nicht erneut angemeldet werden. Wenn Sie beispielsweise das gesamte Dokument abmelden, können Sie nicht `overflow-anchor: auto` auf einem Nachkommenknoten setzen, um das Scroll-Anker für einen Teilbereich wieder zu aktivieren.

### Unterdrückungsauslöser

Es gibt einige _Unterdrückungsauslöser_, die das Scroll-Anker an Orten deaktivieren, wo es problematisch sein könnte. Wenn einer der Auslöser auf dem Ankerknoten oder einem Vorfahren davon auftritt, wird das Ankern unterdrückt.

Diese Unterdrückungsauslöser sind Änderungen am berechneten Wert einer der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}} oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}}- oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die einzelnen Transformations-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}} und {{cssxref("rotate")}}

Zusätzlich deaktivieren Änderungen von {{cssxref("position")}} überall innerhalb des {{Glossary("scroll_container", "Scroll-Containers")}} ebenfalls das Scroll-Anker.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Um Stile bedingt anzuwenden, basierend darauf, ob das Scroll-Anker deaktiviert werden kann, verwenden Sie [`@supports`-Feature-Abfragen](/de/docs/Web/CSS/@supports), um die Unterstützung für die `overflow-anchor`-Eigenschaft zu testen.

## Siehe auch

- [Ursprüngliche Scroll-Anker-Erklärung](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md) über WICG (2016)
- [Scroll-Anker für Webentwickler](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html) über Chromium (2017)
