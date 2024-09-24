---
title: Privatsphäre und der :visited-Selektor
slug: Web/CSS/Privacy_and_the_:visited_selector
l10n:
  sourceCommit: 9428e6f9ac2fd4166b5cf245fb674123209787ff
---

{{CSSRef}}

Vor etwa 2010 ermöglichte der [CSS](/de/docs/Web/CSS) {{ cssxref(":visited") }}-Selektor Websites, den Verlauf des Nutzers auszuspionieren und herauszufinden, welche Webseiten der Nutzer besucht hatte. Dies wurde durch {{domxref("window.getComputedStyle")}} und andere Techniken erreicht. Dieser Prozess konnte schnell ausgeführt werden und machte es nicht nur möglich, zu bestimmen, wo der Nutzer im Web gewesen war, sondern konnte auch verwendet werden, um viele Informationen über die Identität des Nutzers abzuleiten.

Um dieses Problem zu mildern, haben Browser die Menge an Informationen eingeschränkt, die aus besuchten Links gewonnen werden können.

## Kleine Notlügen

Um die Privatsphäre der Nutzer zu schützen, täuschen Firefox und andere Browser Webanwendungen in bestimmten Situationen:

- Die Methode `window.getComputedStyle` und ähnliche Funktionen wie {{ domxref("element.querySelector") }} geben immer Werte zurück, die anzeigen, dass ein Nutzer keinen der Links auf einer Seite besucht hat.
- Wenn Sie einen Geschwister-Selektor wie `:visited + span` verwenden, wird das benachbarte Element (in diesem Beispiel `span`) so gestylt, als wäre der Link unbesucht.
- In seltenen Fällen, wenn Sie verschachtelte Link-Elemente verwenden und das Element, das übereinstimmt, sich von dem Link unterscheidet, dessen Präsenz in der Historie getestet wird, wird das Element ebenfalls so gerendert, als wäre der Link unbesucht.

## Grenzen der Stilformatierung besuchter Links

Sie können besuchte Links stylen, aber es gibt Einschränkungen, welche Stile verwendet werden können. Nur die folgenden Stile können auf besuchte Links angewendet werden:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (und seine Untereigenschaften)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- {{ cssxref("text-decoration-color") }}
- {{ cssxref("text-emphasis-color") }}
- Die Farbanteile der {{SVGAttr("fill")}}- und {{SVGAttr("stroke")}}-Attribute

Zusätzlich können Sie auch für die obigen Stile die Transparenz zwischen unbesuchten und besuchten Links nicht ändern, wie Sie es sonst mit dem `alpha`-Parameter bei [`rgb()`](/de/docs/Web/CSS/color_value/rgb) oder [`hsl()`](/de/docs/Web/CSS/color_value/hsl) oder dem [`transparent`](/de/docs/Web/CSS/named-color#transparent)-Schlüsselwort könnten.

Hier ist ein Beispiel, wie man Stile mit den oben genannten Einschränkungen verwendet:

```css
:link {
  outline: 1px gepunktet blau;
  background-color: weiß;
  /* Der Standardwert von background-color ist `transparent`. Sie müssen
     einen anderen Wert angeben, sonst werden Änderungen bei :visited nicht übernommen. */
}

:visited {
  outline-color: orange; /* Besuchte Links haben eine orangefarbene Umrandung */
  background-color: grün; /* Besuchte Links haben einen grünen Hintergrund */
  color: gelb; /* Besuchte Links haben gelb gefärbten Text */
}
```

## Auswirkungen auf Webentwickler

Insgesamt sollten diese Einschränkungen Webentwickler nicht allzu sehr beeinträchtigen. Es können jedoch folgende Änderungen an bestehenden Websites erforderlich sein:

- Die Verwendung von Hintergrundbildern zur Gestaltung von Links, basierend darauf, ob sie besucht wurden, wird nicht mehr funktionieren, da nur Farben verwendet werden können, um besuchte Links zu stylen.
- Farben, die normalerweise transparent sind, werden nicht erscheinen, wenn sie in einem `:visited`-Selektor gestylt werden.

## Siehe auch

- [privacy-related changes coming to CSS :visited](https://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) auf Mozilla Hacks
- [Plugging the CSS History Leak](https://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) auf dem Mozilla Security Blog
- [Preventing attacks on a user's history through CSS :visited selectors](https://dbaron.org/mozilla/visited-privacy)
