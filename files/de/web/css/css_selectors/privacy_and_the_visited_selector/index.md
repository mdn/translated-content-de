---
title: Datenschutz und der :visited-Selektor
slug: Web/CSS/CSS_selectors/Privacy_and_the_visited_selector
l10n:
  sourceCommit: a7150deef0c64ffcfb3c96c43390135e28fbf5bb
---

{{CSSRef}}

Ursprünglich stellte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }}-Selektor ein Datenschutz- und Sicherheitsrisiko dar. Mit ein wenig JavaScript konnten Websites den Browserverlauf eines Nutzers aufdecken und herausfinden, welche Websites der Nutzer besucht hatte. Dies wurde durch Methoden wie [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) und andere Techniken erreicht. Dieser Prozess war schnell und ermöglichte es Websites nicht nur festzustellen, wo der Nutzer im Web gewesen war, sondern auch viel über die Identität des Nutzers zu erraten.

Um dieses Datenschutzproblem zu mindern, begrenzen Browser die Menge an Informationen, die aus besuchten Links gewonnen werden können.

## Kleine Notlügen

Um die Privatsphäre der Nutzer zu schützen, belügen Browser Webanwendungen in bestimmten Situationen:

- Die Methode `window.getComputedStyle` und ähnliche Funktionen, wie [`element.querySelector`](/de/docs/Web/API/Element/querySelector), geben immer Werte zurück, die anzeigen, dass ein Nutzer keine der Links auf einer Seite jemals besucht hat.
- Beim Verwenden eines Nachbarselektors, wie `:visited + span`, wird das angrenzende Element (`span` in diesem Beispiel) so gestylt, als ob der Link unbesucht wäre.
- In seltenen Fällen, wenn Sie verschachtelte Linkelemente verwenden und das übereinstimmende Element sich von dem Link unterscheidet, dessen Vorhandensein im Verlauf getestet wird, wird das Element so gerendert, als ob der Link unbesucht wäre.

## Grenzen für die Stilgestaltung besuchter Links

Sie können besuchte Links stylen, aber es gibt Grenzen, welche Stile Sie verwenden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und seine Untereigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Farbteile der {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute

Zusätzlich werden selbst bei den oben genannten Stilen Transparenzunterschiede zwischen unbesuchten und besuchten Links nicht angewendet. Diese Einschränkung verhindert die Nutzung des `alpha`-Parameters in verschiedenen {{cssxref("color_value", "&lt;color&gt;")}} Funktionen oder des [`transparent`](/de/docs/Web/CSS/named-color#transparent) Schlüsselworts, um zwischen den zwei Zuständen zu unterscheiden.

Hier ist ein Beispiel dafür, wie Sie Stile unter den genannten Einschränkungen verwenden können:

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

- Das Ändern von {{cssxref("background-image")}}-Werten basierend auf dem besuchten Zustand eines Links wird nicht funktionieren, da nur Farben verwendet werden können, um besuchte Links zu stylen.
- Farben, die ansonsten transparent sind, werden nicht angewendet, wenn sie über einen `:visited`-Selektor gestylt werden.

## Siehe auch

- [Verhinderung von Angriffen auf den Verlauf eines Nutzers durch CSS `:visited` Selektoren](https://dbaron.org/mozilla/visited-privacy) (2010)
