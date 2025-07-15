---
title: Datenschutz und der :visited-Selektor
short-title: Datenschutz und :visited
slug: Web/CSS/CSS_selectors/Privacy_and_the_visited_selector
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Ursprünglich stellte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }}-Selektor ein Datenschutz- und Sicherheitsrisiko dar. Mit ein wenig JavaScript konnten Websites den Browserverlauf eines Nutzers aufdecken und herausfinden, welche Seiten ein Nutzer besucht hatte. Dies wurde mit Methoden wie [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) und anderen Techniken erreicht. Dieser Prozess war schnell, wodurch Websites nicht nur feststellen konnten, wo der Nutzer im Web gewesen war, sondern auch viele Informationen über die Identität des Nutzers erraten konnten.

Um dieses Datenschutzproblem zu entschärfen, begrenzen Browser die Menge an Informationen, die von besuchten Links abgerufen werden können.

## Kleine Notlügen

Um die Privatsphäre der Nutzer zu wahren, belügen Browser Webanwendungen unter bestimmten Umständen:

- Die Methode `window.getComputedStyle` und ähnliche Funktionen, wie [`element.querySelector`](/de/docs/Web/API/Element/querySelector), geben immer Werte zurück, die anzeigen, dass ein Nutzer keine der Links auf einer Seite jemals besucht hat.
- Bei Verwendung eines nachfolgenden Selektors, wie `:visited + span`, wird das angrenzende Element (in diesem Beispiel `span`) so gestylt, als wäre der Link unbesucht.
- In seltenen Szenarien, wenn Sie verschachtelte Linkelemente verwenden und das abgeglichene Element ein anderes ist als der Link, dessen Anwesenheit im Verlauf getestet wird, wird das Element so gerendert, als wäre der Link unbesucht.

## Grenzen der Stilgebung für besuchte Links

Sie können besuchte Links stylen, aber es gibt Grenzen, welche Stile verwendet werden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und seine Untereigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Farbanteile der {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute

Darüber hinaus werden selbst bei den oben genannten Stilen Transparenzunterschiede zwischen unbesuchten und besuchten Links nicht angewendet. Diese Einschränkung verhindert die Verwendung des `alpha`-Parameters in verschiedenen {{cssxref("color_value", "&lt;color&gt;")}}-Funktionen oder des [`transparent`](/de/docs/Web/CSS/named-color#transparent)-Schlüsselworts, um zwischen den beiden Zuständen zu unterscheiden.

Hier ist ein Beispiel, wie man Stile mit den oben genannten Einschränkungen verwendet:

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

## Auswirkung auf Webentwickler

Sie sollten Folgendes in Betracht ziehen, wenn Sie Websites entwickeln:

- Das Ändern von {{cssxref("background-image")}}-Werten basierend auf dem besuchten Zustand eines Links wird nicht funktionieren, da nur Farben zur Stilgebung von besuchten Links verwendet werden können.
- Farben, die ansonsten transparent sind, werden nicht angewendet, wenn sie über einen `:visited`-Selektor gestylt werden.

## Siehe auch

- [Verhinderung von Angriffen auf den Verlauf eines Nutzers durch CSS `:visited`-Selektoren](https://dbaron.org/mozilla/visited-privacy) (2010)
