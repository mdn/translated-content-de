---
title: Privatsphäre und der :visited-Selektor
short-title: Privatsphäre und :visited
slug: Web/CSS/CSS_selectors/Privacy_and_the_visited_selector
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Ursprünglich stellte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }}-Selektor ein Risiko für die Privatsphäre und Sicherheit dar. Mit ein wenig JavaScript konnten Websites den Browserverlauf eines Nutzers aufdecken und herausfinden, welche Seiten der Nutzer besucht hatte. Dies wurde durch Methoden wie [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) und andere Techniken erreicht. Dieser Prozess war schnell und ermöglichte es Websites nicht nur festzustellen, wo der Nutzer im Web war, sondern auch viele Informationen über die Identität des Nutzers zu erraten.

Um dieses Problem des Datenschutzes zu entschärfen, beschränken Browser die Menge an Informationen, die von besuchten Links abgerufen werden können.

## Kleine Notlügen

Um die Privatsphäre der Nutzer zu wahren, lügen Browser in bestimmten Situationen gegenüber Webanwendungen:

- Die `window.getComputedStyle`-Methode und ähnliche Funktionen wie [`element.querySelector`](/de/docs/Web/API/Element/querySelector) geben immer Werte zurück, die darauf hinweisen, dass ein Nutzer keinen der Links auf einer Seite je besucht hat.
- Bei der Verwendung eines benachbarten Selektors, wie etwa `:visited + span`, wird das angrenzende Element (in diesem Beispiel `span`) so gestylt, als wäre der Link nicht besucht.
- In seltenen Fällen, wenn Sie verschachtelte Link-Elemente verwenden und das übereinstimmende Element sich von dem Link unterscheidet, dessen Anwesenheit im Verlauf überprüft wird, wird das Element so gerendert, als wäre der Link unbesucht.

## Beschränkungen für besuchte Link-Stile

Sie können besuchte Links stylen, jedoch gibt es Einschränkungen, welche Stile angewendet werden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und dessen Untereigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Farbanteile der {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute

Darüber hinaus werden selbst bei den oben genannten Stilen keine Transparenzunterschiede zwischen unbesuchten und besuchten Links angewendet. Diese Einschränkung verhindert die Verwendung des `alpha`-Parameters in verschiedenen {{cssxref("color_value", "&lt;color&gt;")}}-Funktionen oder des [`transparent`](/de/docs/Web/CSS/named-color#transparent)-Schlüsselworts, um zwischen den beiden Zuständen zu unterscheiden.

Hier ist ein Beispiel, wie man Stile mit den vorgenannten Einschränkungen verwenden kann:

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* The default value of `background-color` is `transparent`. You need to
     specify a different value, otherwise changes on `:visited` won't apply. */
}

:visited {
  outline-color: orange; /* Visited links have an orange outline */
  background-color: green; /* Visited links have a green background */
  color: yellow; /* Visited links have yellow colored text */
}
```

## Auswirkungen auf Webentwickler

Folgendes sollten Sie in Betracht ziehen, wenn Sie Websites entwickeln:

- Das Ändern von {{cssxref("background-image")}}-Werten basierend auf dem besuchten Status eines Links wird nicht funktionieren, da nur Farben verwendet werden können, um besuchte Links zu stylen.
- Farben, die ansonsten transparent sind, werden nicht angewendet, wenn sie über einen `:visited`-Selektor gestylt werden.

## Siehe auch

- [Verhindern von Angriffen auf den Verlauf eines Nutzers durch CSS `:visited`-Selektoren](https://dbaron.org/mozilla/visited-privacy) (2010)
