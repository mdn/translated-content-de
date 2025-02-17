---
title: CSS-Namensräume
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Das **CSS-Namensräume**-Modul definiert die Syntax für die Verwendung von {{Glossary("namespace", "Namensräumen")}} in CSS.

CSS dient nicht nur zum Styling von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu stylen, wobei jedes eine andere Namensraumdefinition verwendet oder ein Dokument mehrere Namensräume enthalten kann.

Die durch diese Spezifikation definierte [`@namespace`](/de/docs/Web/CSS/@namespace) Regel ermöglicht es, zwischen gleichnamigen Elementen in unterschiedlichen Namensräumen zu unterscheiden. Tag-Namen von Elementen sind nicht eindeutig einer einzigen Sprache zugeordnet. Zum Beispiel ist das `<a>`-Element nicht auf HTML beschränkt. Es kann sein, dass Sie die `<a>`-Elemente innerhalb Ihrer SVGs anders stylen möchten als die Links in Ihrem HTML. Ebenso möchten Sie vermutlich sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Hier kann die Verwendung von Namensräumen hilfreich sein.

Die `@namespace`-Regel wird verwendet, um einen Standard-Namensraum zu deklarieren und um Namensräume mit Namensraum-Präfixen zu verbinden. Das Namensräume-Modul definiert außerdem die Syntax für die Verwendung dieser Präfixe, um Namensraum-qualifizierte Namen darzustellen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Host-Sprache ab.

## Referenz

### Regelgruppen

- {{cssxref("@namespace")}}

## Leitfäden

- [Schnelle Einführung in Namensräume](/de/docs/Web/SVG/Namespaces_Crash_Course)

  - : Eintauchen in die Grundlagen, was ein Namensraum ist und wie er in XML und XML-basierten Auszeichnungssprachen verwendet wird.

## Verwandte Konzepte

- CSS [Namensraum-Trennzeichen (`|`)](/de/docs/Web/CSS/Namespace_separator) Kombinator
- CSS [Typselektoren](/de/docs/Web/CSS/Type_selectors)
- CSS [Universalselektor](/de/docs/Web/CSS/Universal_selectors)
- [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule) Schnittstelle
  - [`CSSNamespaceRule.namespaceURI`](/de/docs/Web/API/CSSNamespaceRule/namespaceURI) Eigenschaft
  - [`CSSNamespaceRule.prefix`](/de/docs/Web/API/CSSNamespaceRule/prefix) Eigenschaft
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS) Methode
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS) Methode
- [`Document.getElementsByTagNameNS()`](/de/docs/Web/API/Document/getElementsByTagNameNS) Methode
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS) Methode
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS) Methode
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS) Methode
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS) Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) Eigenschaft
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS) Methode
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS) Methode
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS) Methode
- [`NamedNodeMap.getNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/getNamedItemNS) Methode
- [`NamedNodeMap.removeNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/removeNamedItemNS) Methode
- [`NamedNodeMap.setNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/setNamedItemNS) Methode
- {{Glossary("Namespace", "Namensraum")}} Glossareintrag

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Element/a#example) SVG-Element
- [CSS `<url>` Typ](/de/docs/Web/CSS/url_value)
- [CSS-Regelgruppen](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS-Regelgruppen-Funktionen](/de/docs/Web/CSS/At-rule-functions)
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
