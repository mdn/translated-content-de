---
title: Datenschutz und der :visited-Selektor
slug: Web/CSS/Privacy_and_the_:visited_selector
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

Vor etwa 2010 erlaubte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }}-Selektor Websites, den Browserverlauf eines Benutzers zu enthüllen und herauszufinden, welche Seiten der Benutzer besucht hatte. Dies wurde durch [`window.getComputedStyle`](/de/docs/Web/API/Window/getComputedStyle) und andere Techniken ermöglicht. Dieser Prozess war schnell durchzuführen und ermöglichte es nicht nur festzustellen, wo der Benutzer im Web war, sondern konnte auch verwendet werden, um viele Informationen über die Identität des Benutzers zu erraten.

Um dieses Problem zu mildern, haben Browser die Menge an Informationen eingeschränkt, die von besuchten Links abgerufen werden können.

## Kleine Notlügen

Um die Privatsphäre der Benutzer zu schützen, werden Firefox und andere Browser unter bestimmten Umständen Webanwendungen belügen:

- Die `window.getComputedStyle`-Methode und ähnliche Funktionen wie [`element.querySelector`](/de/docs/Web/API/Element/querySelector) geben immer Werte zurück, die darauf hinweisen, dass ein Benutzer keine der Links auf einer Seite besucht hat.
- Wenn Sie einen Geschwister-Selektor wie `:visited + span` verwenden, wird das benachbarte Element (in diesem Beispiel `span`) so gestylt, als ob der Link unbesucht wäre.
- In seltenen Szenarien, wenn Sie verschachtelte Link-Elemente verwenden und das übereinstimmende Element sich von dem Link unterscheidet, dessen Präsenz im Verlauf getestet wird, wird das Element ebenfalls so gerendert, als ob der Link unbesucht wäre.

## Grenzen für besuchte Link-Stile

Sie können besuchte Links stylen, aber es gibt Grenzen, welche Stile verwendet werden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und seine Unter-Eigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Die Farbteile der {{SVGAttr("fill")}}- und {{SVGAttr("stroke")}}-Attribute

Darüber hinaus können Sie selbst für die oben genannten Stile die Transparenz zwischen unbesuchten und besuchten Links nicht ändern, wie Sie dies normalerweise mit dem `alpha`-Parameter für [`rgb()`](/de/docs/Web/CSS/color_value/rgb) oder [`hsl()`](/de/docs/Web/CSS/color_value/hsl) oder dem [`transparent`](/de/docs/Web/CSS/named-color#transparent)-Schlüsselwort tun könnten.

Hier ist ein Beispiel dafür, wie Sie Stile mit den oben genannten Einschränkungen verwenden können:

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

Insgesamt sollten diese Einschränkungen Webentwickler nicht zu sehr beeinflussen. Dennoch können sie folgende Änderungen an bestehenden Websites erfordern:

- Die Verwendung von Hintergrundbildern zum Stylen von Links basierend darauf, ob sie besucht wurden, wird nicht mehr funktionieren, da nur Farben verwendet werden können, um besuchte Links zu stylen.
- Farben, die ansonsten transparent sind, werden nicht angezeigt, wenn sie in einem `:visited`-Selektor gestylt werden.

## Siehe auch

- [Privacy-related changes coming to CSS :visited](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) auf Mozilla Hacks
- [Plugging the CSS History Leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) im Mozilla Security Blog
- [Preventing attacks on a user's history through CSS :visited selectors](https://dbaron.org/mozilla/visited-privacy)
