---
title: CSS-Namespace
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS Namespaces**-Modul definiert die Syntax für die Verwendung von {{Glossary("namespace", "Namespaces")}} in CSS.

CSS ist nicht nur für die Gestaltung von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu stylen, von denen jedes einen anderen Namespace oder ein Dokument mit mehreren Namespaces hat.

Die in diesem Modul definierte [`@namespace`](/de/docs/Web/CSS/@namespace) At-Regel ermöglicht es, zwischen gleichnamigen Elementen in verschiedenen Namespaces zu unterscheiden. Element-Tagnamen sind nicht einzigartig für eine einzige Sprache. Beispielsweise ist das `<a>`-Element nicht auf HTML beschränkt. Sie möchten möglicherweise die `<a>`s in Ihren SVGs anders stylen als die Links in Ihrem HTML. Außerdem möchten Sie wahrscheinlich sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Namespacing kann hierbei helfen.

Die `@namespace` Regel wird verwendet, um einen Standard-Namespace zu deklarieren und um Namespaces an Namespace-Präfixe zu binden. Das Namespaces-Modul definiert auch die Syntax zur Verwendung dieser Präfixe, um namespace-qualifizierte Namen darzustellen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Host-Sprache ab.

## Referenz

### At-Regeln

- {{cssxref("@namespace")}}

## Leitfäden

- [Namespaces-Kurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Tiefgehende Einführung in die Bedeutung eines Namespaces und deren Verwendung in XML und XML-basierten Auszeichnungssprachen.

## Verwandte Konzepte

- CSS [Namespace-Separator (`|`)](/de/docs/Web/CSS/Namespace_separator) Kombinator
- CSS [Typselektoren](/de/docs/Web/CSS/Type_selectors)
- CSS [universeller Selektor](/de/docs/Web/CSS/Universal_selectors)
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
- {{Glossary("Namespace", "Namespace")}} Glossareintrag

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Reference/Element/a#example) SVG-Element
- [CSS `<url>`-Typ](/de/docs/Web/CSS/url_value)
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Regel Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
