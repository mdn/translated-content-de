---
title: Leitfaden zum Scroll-Anchoring
slug: Web/CSS/overflow-anchor/Guide_to_scroll_anchoring
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{CSSRef}}

Als Nutzer des Webs sind Sie wahrscheinlich mit dem Problem vertraut, das das Scroll-Anchoring löst. Sie besuchen eine lange Seite mit einer langsamen Verbindung und beginnen zu scrollen, um den Inhalt zu lesen. Während Sie lesen, springt plötzlich der Teil der Seite, den Sie betrachten. Dies geschieht, weil große Bilder oder andere Elemente weiter oben im Inhalt gerade geladen wurden.

Scroll-Anchoring ist eine Browserfunktion, die dieses Problem des Inhaltsspringens lösen soll, das auftritt, wenn Inhalte geladen werden, nachdem der Nutzer bereits zu einem neuen Teil des Dokuments gescrollt hat.

## Wie funktioniert es?

Scroll-Anchoring passt die Scroll-Position an, um die Änderungen außerhalb des Viewports zu kompensieren. Das bedeutet, dass der Punkt im Dokument, den der Nutzer betrachtet, im Viewport bleibt. Dies kann bedeuten, dass sich ihre Scroll-Position ändert, in Bezug darauf, wie _weit_ sie durch das Dokument gescrollt sind.

## Wie schalte ich Scroll-Anchoring ein?

Das müssen Sie nicht! Die Funktion ist standardmäßig in unterstützenden Browsern aktiviert. In den meisten Fällen ist das verankerte Scrollen genau das, was Sie wollen – ein Springen des Inhalts ist eine unvorteilhafte Erfahrung für jeden.

## Was mache ich, wenn ich es debuggen muss?

Wenn sich Ihre Seite mit aktiviertem Scroll-Anchoring nicht gut verhält, liegt es wahrscheinlich daran, dass ein `scroll`-Ereignislistener nicht gut mit dem zusätzlichen Scrollen zur Kompensation der Ankerknotenbewegung umgeht.

Sie können überprüfen, ob das Deaktivieren von Scroll-Anchoring das Problem in Firefox behebt, indem Sie `layout.css.scroll-anchoring.enabled` in `about:config` auf `false` setzen.

Wenn das der Fall ist, können Sie mit dem Schalter `layout.css.scroll-anchoring.highlight` überprüfen, welchen Knoten Firefox als Anker verwendet. Dieser zeigt eine violette Überlagerung über dem Ankerknoten an.

Wenn ein Knoten als Anker nicht geeignet erscheint, können Sie ihn mithilfe von {{cssxref("overflow-anchor")}} ausschließen, wie unten beschrieben.

## Was mache ich, wenn ich es deaktivieren muss?

Die Spezifikation bietet eine neue Eigenschaft, {{cssxref("overflow-anchor")}}, mit der das Scroll-Anchoring im gesamten oder einem Teil des Dokuments deaktiviert werden kann. Es ist im Wesentlichen eine Möglichkeit, das neue Verhalten abzulehnen.

Die einzigen möglichen Werte sind `auto` oder `none`:

- `auto` ist der Initialwert; solange der Nutzer einen unterstützenden Browser hat, wird das Scroll-Anchoring-Verhalten ausgelöst, und es sollte zu weniger Inhaltssprüngen kommen.
- `none` bedeutet, dass Sie das Dokument oder einen Teil des Dokuments explizit vom Scroll-Anchoring ausgeschlossen haben.

Um das gesamte Dokument auszuschließen, können Sie es im {{htmlelement("body")}}-Element festlegen:

```css
body {
  overflow-anchor: none;
}
```

Um einen bestimmten Teil des Dokuments auszuschließen, verwenden Sie `overflow-anchor: none` für dessen Container-Element:

```css
.container {
  overflow-anchor: none;
}
```

> [!NOTE]
> Die Spezifikation beschreibt, dass, wenn Scroll-Anchoring abgelehnt wurde, Sie nicht von einem untergeordneten Element aus wieder in das Scroll-Anchoring einsteigen können. Zum Beispiel, wenn Sie für das gesamte Dokument ablehnen, können Sie nicht `overflow-anchor: auto` an anderer Stelle im Dokument setzen, um es für einen Unterabschnitt wieder zu aktivieren.

### Unterdrückungsauslöser

Die Spezifikation beschreibt auch einige _Unterdrückungsauslöser_, die das Scroll-Anchoring in Bereichen deaktivieren, in denen es problematisch sein könnte. Wenn einer der Auslöser am Ankerknoten oder einem seiner Vorfahren auftritt, wird das Ankern unterdrückt.

Diese Unterdrückungsauslöser sind Änderungen am berechneten Wert einer der folgenden Eigenschaften:

- {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("right")}}, oder {{cssxref("bottom")}}
- {{cssxref("margin")}} oder {{cssxref("padding")}}
- Alle {{cssxref("width")}}- oder {{cssxref("height")}}-bezogenen Eigenschaften
- {{cssxref("transform")}} und die einzelnen Transformationseigenschaften {{cssxref("translate")}}, {{cssxref("scale")}}, und {{cssxref("rotate")}}

Zusätzlich deaktivieren Änderungen an {{cssxref("position")}} innerhalb der Scroll-Box ebenfalls das Scroll-Anchoring.

> [!NOTE]
> In [Firefox-Bug 1584285](https://bugzil.la/1584285) wurde das `layout.css.scroll-anchoring.suppressions.enabled`-Flag zu Firefox Nightly hinzugefügt, um das Deaktivieren dieser Auslöser zu ermöglichen.

## Weiterführende Literatur

- [Erläuterungsdokument auf der WICG-Seite](https://github.com/WICG/ScrollAnchoring/blob/master/explainer.md)
- [Scroll-Anchoring für Webentwickler auf dem Chromium-Blog](https://blog.chromium.org/2017/04/scroll-anchoring-for-web-developers.html)

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

Wenn Sie testen müssen, ob Scroll-Anchoring in einem Browser verfügbar ist, verwenden Sie [Feature Queries](/de/docs/Web/CSS/@supports), um die Unterstützung für die Eigenschaft `overflow-anchor` zu prüfen.
