---
title: Privatsphäre und der :visited-Selektor
short-title: Privatsphäre und :visited
slug: Web/CSS/CSS_selectors/Privacy_and_the_visited_selector
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Ursprünglich stellte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }}-Selektor ein Risiko für die Privatsphäre und Sicherheit dar. Mit ein wenig JavaScript konnten Websites den Browserverlauf eines Benutzers aufdecken und herausfinden, welche Seiten der Benutzer besucht hatte. Dies wurde mit Methoden wie [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) und anderen Techniken erreicht. Dieser Prozess war schnell und ermöglichte es Websites nicht nur festzustellen, wo der Benutzer im Internet gewesen war, sondern auch, viele Informationen über die Identität des Benutzers zu erraten.

Um diese Sorge um die Privatsphäre zu mindern, begrenzen Browser die Menge an Informationen, die von besuchten Links abgerufen werden können.

## Kleine Notlügen

Um die Privatsphäre der Benutzer zu schützen, täuschen Browser Webanwendungen unter bestimmten Umständen:

- Die Methode `window.getComputedStyle` und ähnliche Funktionen, wie [`element.querySelector`](/de/docs/Web/API/Element/querySelector), geben immer Werte zurück, die darauf hindeuten, dass ein Benutzer keinen der Links auf einer Seite besucht hat.
- Bei der Verwendung eines Nachbarselektors, wie `:visited + span`, wird das angrenzende Element (`span` in diesem Beispiel) so gestylt, als wäre der Link nicht besucht.
- In seltenen Fällen, wenn Sie verschachtelte Link-Elemente verwenden und das übereinstimmende Element sich von dem unterscheidet, dessen Vorhandensein im Verlauf getestet wird, wird das Element so dargestellt, als wäre der Link nicht besucht.

## Beschränkungen für besuchte Link-Stile

Sie können besuchte Links stilisieren, aber es gibt Einschränkungen, welche Stile Sie verwenden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und seine Untereigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Farbteile der {{SVGAttr("fill")}}- und {{SVGAttr("stroke")}}-Attribute

Darüber hinaus werden auch bei den oben genannten Stilen Transparenzunterschiede zwischen unbesuchten und besuchten Links nicht angewendet. Diese Einschränkung verhindert die Verwendung des `alpha`-Parameters in verschiedenen {{cssxref("color_value", "&lt;color&gt;")}}-Funktionen oder des [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) Schlüsselworts, um zwischen den beiden Zuständen zu unterscheiden.

Hier ist ein Beispiel, wie Stile mit den oben genannten Einschränkungen verwendet werden können:

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

Sie sollten Folgendes in Betracht ziehen, wenn Sie Websites entwickeln:

- Das Ändern von {{cssxref("background-image")}}-Werten basierend auf dem Besuchsstatus eines Links funktioniert nicht, da nur Farben verwendet werden können, um besuchte Links zu stylen.
- Farben, die ansonsten transparent sind, werden nicht angewendet, wenn sie über einen `:visited`-Selektor gestylt werden.

## Siehe auch

- [Verhindern von Angriffen auf den Verlauf eines Benutzers durch CSS-`:visited`-Selektoren](https://dbaron.org/mozilla/visited-privacy) (2010)
