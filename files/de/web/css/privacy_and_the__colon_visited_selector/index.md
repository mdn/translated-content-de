---
title: Datenschutz und der :visited-Selektor
slug: Web/CSS/Privacy_and_the_:visited_selector
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

Vor etwa 2010 ermöglichte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }} Selektor Websites, die Browserverläufe von Nutzern aufzudecken und herauszufinden, welche Seiten der Nutzer besucht hatte. Dies wurde durch [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) und andere Techniken erreicht. Dieser Prozess war schnell auszuführen und machte es nicht nur möglich zu bestimmen, welche Seiten der Nutzer im Web besucht hatte, sondern auch viele Informationen über die Identität des Nutzers zu erahnen.

Um dieses Problem zu entschärfen, haben Browser die Menge an Informationen eingeschränkt, die von besuchten Links abgerufen werden kann.

## Kleine Notlügen

Um die Privatsphäre der Nutzer zu schützen, lügen Firefox und andere Browser unter bestimmten Umständen gegenüber Webanwendungen:

- Die Methode `window.getComputedStyle` und ähnliche Funktionen wie [`element.querySelector`](/de/docs/Web/API/Element/querySelector) geben immer Werte zurück, die anzeigen, dass ein Nutzer keinen der Links auf einer Seite besucht hat.
- Wenn Sie einen Nachbarselektor wie `:visited + span` verwenden, wird das angrenzende Element (`span` in diesem Beispiel) so gestylt, als ob der Link unbesucht wäre.
- In seltenen Fällen, wenn Sie verschachtelte Link-Elemente verwenden und das übereinstimmende Element sich von dem Link unterscheidet, dessen Präsenz im Verlauf getestet wird, wird das Element so dargestellt, als ob der Link unbesucht wäre.

## Einschränkungen für Stile von besuchten Links

Sie können besuchte Links stylen, jedoch gibt es Einschränkungen, welche Stile verwendet werden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und dessen Untereigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Die Farbteile der {{SVGAttr("fill")}} und {{SVGAttr("stroke")}} Attribute

Darüber hinaus können Sie auch für die oben genannten Stile die Transparenz zwischen unbesuchten und besuchten Links nicht ändern, wie Sie es sonst mit dem `alpha` Parameter in [`rgb()`](/de/docs/Web/CSS/color_value/rgb) oder [`hsl()`](/de/docs/Web/CSS/color_value/hsl) oder dem [`transparent`](/de/docs/Web/CSS/named-color#transparent) Schlüsselwort tun könnten.

Hier ist ein Beispiel, wie Sie Stile mit den vorgenannten Einschränkungen verwenden können:

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* The default value of background-color is `transparent`. You need to
     specify a different value, otherwise changes on :visited won't apply. */
}

:visited {
  outline-color: orange; /* Visited links have an orange outline */
  background-color: green; /* Visited links have a green background */
  color: yellow; /* Visited links have yellow colored text */
}
```

## Auswirkungen auf Webentwickler

Im Großen und Ganzen sollten diese Einschränkungen Webentwickler nicht allzu sehr beeinträchtigen. Sie können jedoch die folgenden Änderungen an bestehenden Websites erfordern:

- Die Verwendung von Hintergrundbildern, um Links basierend darauf zu stylen, ob sie besucht wurden, wird nicht mehr funktionieren, da nur Farben verwendet werden können, um besuchte Links zu stylen.
- Farben, die ansonsten transparent sind, werden nicht erscheinen, wenn sie in einem `:visited` Selektor gestylt sind.

## Siehe auch

- [datenschutzbezogene Änderungen für CSS :visited](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) auf Mozilla Hacks
- [Die CSS History Leak schließen](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) auf dem Mozilla Security Blog
- [Angriffe auf den Verlauf eines Nutzers durch CSS :visited Selektoren verhindern](https://dbaron.org/mozilla/visited-privacy)
