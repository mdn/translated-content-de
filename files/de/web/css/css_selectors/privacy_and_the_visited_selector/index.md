---
title: Datenschutz und der :visited-Selektor
slug: Web/CSS/CSS_selectors/Privacy_and_the_visited_selector
l10n:
  sourceCommit: 62f49419c2c97353749cf9d21df9e205a60ca62b
---

{{CSSRef}}

Ursprünglich stellte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }}-Selektor ein Risiko für Privacy und Sicherheit dar. Mit ein wenig JavaScript konnten Websites das Surfverhalten eines Nutzers nachvollziehen und herausfinden, welche Seiten der Nutzer besucht hatte. Dies wurde mit Methoden wie [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) und anderen Techniken durchgeführt. Dieser Vorgang war schnell und ermöglichte es Websites nicht nur zu bestimmen, wo der Nutzer im Internet gewesen war, sondern auch viele Informationen über die Identität des Nutzers zu erraten.

Um dieses Privacy-Problem zu verringern, begrenzen Browser die Menge an Informationen, die aus besuchten Links abgerufen werden können.

## Kleine Notlügen

Um die Privatsphäre der Nutzer zu wahren, "lügen" Browser unter bestimmten Umständen gegenüber Webanwendungen:

- Die `window.getComputedStyle`-Methode und ähnliche Funktionen, wie etwa [`element.querySelector`](/de/docs/Web/API/Element/querySelector), geben immer Werte zurück, die anzeigen, dass ein Nutzer keinen der Links auf einer Seite jemals besucht hat.
- Bei der Verwendung eines nachbarschaftlichen Selektors, wie `:visited + span`, wird das benachbarte Element (in diesem Beispiel `span`) so gestylt, als ob der Link unbesucht wäre.
- In seltenen Fällen, wenn verschachtelte Link-Elemente verwendet werden und das Element, das abgeglichen wird, sich von dem Link unterscheidet, dessen Präsenz im Verlauf getestet wird, wird das Element so gerendert, als wäre der Link unbesucht.

## Grenzen für Stile von besuchten Links

Sie können besuchte Links stylen, aber es gibt Einschränkungen, welche Stile verwendet werden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und seine Untereigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Farbteile der {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute

Darüber hinaus werden auch bei den oben genannten Stilen Transparenzunterschiede zwischen unbesuchten und besuchten Links nicht angewendet. Diese Beschränkung verhindert die Verwendung des `alpha`-Parameters in verschiedenen {{cssxref("color_value", "&lt;color&gt;")}}-Funktionen oder des [`transparent`](/de/docs/Web/CSS/named-color#transparent)-Schlüsselworts, um zwischen den beiden Zuständen zu unterscheiden.

Hier ist ein Beispiel, wie man Stile mit den obigen Beschränkungen verwendet:

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

Als Entwickler sollten Sie Folgendes in Betracht ziehen:

- Das Ändern von {{cssxxref("background-image")}}-Werten basierend auf dem besuchten Status eines Links wird nicht funktionieren, da nur Farben verwendet werden können, um besuchte Links zu stylen.
- Farben, die ansonsten transparent sind, werden nicht angewendet, wenn sie über einen `:visited`-Selektor gestylt werden.

## Siehe auch

- [Angriffe auf den Verlauf eines Nutzers durch CSS `:visited`-Selektoren verhindern](https://dbaron.org/mozilla/visited-privacy) (2010)
