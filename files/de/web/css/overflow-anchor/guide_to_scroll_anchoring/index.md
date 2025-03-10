---
title: Leitfaden für Scroll-Anker
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}}

Als Nutzer des Webs sind Sie wahrscheinlich mit dem Problem vertraut, das durch Scroll-Anker gelöst wird. Sie besuchen eine lange Seite über eine langsame Verbindung und beginnen zu scrollen, um den Inhalt zu lesen; während Sie beschäftigt sind zu lesen, springt plötzlich der Teil der Seite, den Sie sich ansehen. Dies geschieht, weil große Bilder oder andere Elemente weiter oben im Inhalt gerade geladen wurden.

Scroll-Anker ist eine Browserfunktion, die darauf abzielt, dieses Problem des Inhaltsspringens zu lösen, das auftritt, wenn Inhalte geladen werden, nachdem der Nutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Scroll-Anker passt die Scroll-Position an, um die Änderungen außerhalb des Viewports auszugleichen. Das bedeutet, dass der Punkt im Dokument, den der Benutzer betrachtet, im Viewport bleibt, was bedeuten kann, dass sich die Scroll-Position des Benutzers in Bezug darauf, wie _weit_ sie sich durch das Dokument bewegt haben, tatsächlich ändert.

## Wie schalte ich Scroll-Anker ein?

Sie müssen es nicht aktivieren! Die Funktion ist standardmäßig in unterstützenden Browsern aktiviert. In den meisten Fällen ist verankerndes Scrollen genau das, was Sie möchten – das Springen des Inhalts ist eine schlechte Erfahrung für jeden.

## Was, wenn ich es debuggen muss?

Wenn sich Ihre Seite mit aktivierten Scroll-Ankern nicht gut verhält, liegt es wahrscheinlich daran, dass ein `scroll`-Ereignis-Listener das zusätzliche Scrollen, um die Bewegung des Ankerknotens auszugleichen, nicht gut verarbeitet.

Sie können überprüfen, ob das Deaktivieren von Scroll-Anker das Problem in Firefox behebt, indem Sie `layout.css.scroll-anchoring.enabled` in `false` in `about:config` ändern.

Wenn ja, können Sie überprüfen, welchen Knoten Firefox als Anker verwendet, indem Sie den Schalter `layout.css.scroll-anchoring.highlight` verwenden. Das zeigt eine lila Überlagerung auf dem Ankerknoten.

Wenn ein Knoten als Anker nicht geeignet erscheint, können Sie ihn mit {{cssxref("overflow-anchor")}} ausschließen, wie unten beschrieben.

## Was, wenn ich es deaktivieren muss?

Die Spezifikation bietet eine neue Eigenschaft, {{cssxref("overflow-anchor")}}, mit der das Scroll-Anker-Verhalten im gesamten oder in Teilen des Dokuments deaktiviert werden kann. Es ist im Wesentlichen eine Möglichkeit, sich von dem neuen Verhalten abzumelden.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Anfangswert; solange der Nutzer einen unterstützten Browser verwendet, wird das Scroll-Anker-Verhalten stattfinden und sie sollten weniger Inhaltssprünge sehen.
- `none` bedeutet, dass Sie das Dokument oder einen Teil des Dokuments explizit aus dem Scroll-Anker-Verhalten ausgeschlossen haben.

Um sich für das gesamte Dokument abzumelden, können Sie es auf dem {{htmlelement("body")}}-Element festlegen:

```css
body {
  overflow-anchor: none;
}
```

Um einen bestimmten Teil des Dokuments auszuschließen, verwenden Sie `overflow-anchor: none` auf seinem Container-Element:

```css
.container {
  overflow-anchor: none;
}
```

> [!NOTE]
> Die Spezifikation legt fest, dass, sobald Scroll-Anker abgemeldet wurde, Sie sich nicht von einem Kindelement aus wieder anmelden können. Wenn Sie sich beispielsweise für das gesamte Dokument abmelden, können Sie nicht an anderer Stelle im Dokument `overflow-anchor: auto` einstellen, um es für einen Abschnitt wieder zu aktivieren.

### Unterdrückungstrigger

Die Spezifikation beschreibt auch einige _Unterdrückungstrigger_, die das Scroll-Anker-Verhalten an Orten deaktivieren, an denen es problematisch sein könnte. Wenn einer der Trigger am Ankerknoten oder einem seiner Vorfahren auftritt, wird das Ankerverhalten unterdrückt.

Diese Unterdrückungstrigger sind Änderungen am berechneten Wert einer der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}}- oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die einzelnen Transform-Eigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}

Zusätzlich deaktivieren {{cssxref("position")}}-Änderungen überall innerhalb des Scrollkastens ebenfalls das Scroll-Ankerverhalten.

> [!NOTE]
> Im [Firefox-Bug 1584285](https://bugzil.la/1584285) wurde der `layout.css.scroll-anchoring.suppressions.enabled`-Flag zu Firefox Nightly hinzugefügt, um das Deaktivieren dieser Trigger zu ermöglichen.

## Weiterführende Literatur

- [Erklärendes Dokument auf der WICG-Website](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md)
- [Scroll-Anker für Webentwickler im Chromium-Blog](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

Wenn Sie testen müssen, ob das Scroll-Anker-Verhalten in einem Browser verfügbar ist, verwenden Sie [Feature Queries](/de/docs/Web/CSS/@supports), um die Unterstützung für die `overflow-anchor`-Eigenschaft zu testen.
