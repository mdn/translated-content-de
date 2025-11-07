---
title: Datenschutz und der :visited-Selektor
short-title: Datenschutz und :visited
slug: Web/CSS/Guides/Selectors/Privacy_and_:visited
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ursprünglich stellte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }} Selektor ein Datenschutz- und Sicherheitsrisiko dar. Mit ein wenig JavaScript konnten Websites den Browserverlauf eines Nutzers aufdecken und herausfinden, welche Websites der Nutzer besucht hatte. Dies wurde mit Methoden wie [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) und anderen Techniken erreicht. Dieser Vorgang war schnell, sodass Websites nicht nur bestimmen konnten, wo der Nutzer im Web gewesen war, sondern auch viele Informationen über die Identität des Nutzers vermuten konnten.

Um dieses Datenschutzproblem zu entschärfen, beschränken Browser die Menge an Informationen, die aus besuchten Links gewonnen werden können.

## Kleine Notlügen

Um die Privatsphäre der Nutzer zu schützen, täuschen Browser Webanwendungen unter bestimmten Umständen:

- Die `window.getComputedStyle`-Methode und ähnliche Funktionen wie [`element.querySelector`](/de/docs/Web/API/Element/querySelector) geben immer Werte zurück, die anzeigen, dass der Nutzer keinen der Links auf einer Seite jemals besucht hat.
- Bei Verwendung eines Geschwisterselektors, wie `:visited + span`, wird das angrenzende Element (`span` in diesem Beispiel) so gestylt, als ob der Link unbesucht wäre.
- In seltenen Fällen, wenn Sie verschachtelte Link-Elemente verwenden und das übereinstimmende Element sich von dem Link unterscheidet, dessen Vorhandensein in der Historie getestet wird, wird das Element so gerendert, als ob der Link unbesucht wäre.

## Einschränkungen bei den Stilen von besuchten Links

Sie können besuchte Links stilisieren, aber es gibt Einschränkungen, welche Stile Sie verwenden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und seine Untereigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Farbteile der {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute

Außerdem werden selbst für die oben genannten Stile Transparenzunterschiede zwischen unbesuchten und besuchten Links nicht angewendet. Diese Einschränkung verhindert die Verwendung des `alpha` Parameters in verschiedenen {{cssxref("color_value", "&lt;color&gt;")}} Funktionen oder des [`transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) Schlüsselworts, um zwischen den beiden Zuständen zu unterscheiden.

Hier ist ein Beispiel, wie Sie Stile mit den genannten Einschränkungen verwenden können:

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

Bei der Entwicklung von Websites sollten Sie Folgendes in Betracht ziehen:

- Das Ändern von {{cssxref("background-image")}} Werten basierend auf dem besuchten Zustand eines Links wird nicht funktionieren, da nur Farben verwendet werden können, um besuchte Links zu stilisieren.
- Farben, die sonst transparent wären, werden beim Stylen über einen `:visited`-Selektor nicht angewendet.

## Siehe auch

- [Verhindern von Angriffen auf den Verlauf eines Nutzers durch CSS `:visited` Selektoren](https://dbaron.org/mozilla/visited-privacy) (2010)
