---
title: CSS-Namensräume
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **CSS-Namensräume**-Modul definiert die Syntax zur Verwendung von {{Glossary("namespace", "Namensräumen")}} in CSS.

CSS dient nicht nur zum Styling von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu stylen, von denen jedes einen anderen Namensraum oder ein Dokument mit mehreren Namensräumen hat.

Die im Modul definierte [`@namespace`](/de/docs/Web/CSS/@namespace) Regel ermöglicht es, zwischen gleichnamigen Elementen in verschiedenen Namensräumen zu unterscheiden. Element-Tagnamen sind nicht einzigartig für eine einzelne Sprache. Beispielsweise ist das `<a>` Element nicht auf HTML beschränkt. Möglicherweise möchten Sie die `<a>`s in Ihren SVGs anders stylen als die Links in Ihrem HTML. Sie wollen wahrscheinlich auch sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Namensräume können dabei helfen.

Die `@namespace` Regel wird verwendet, um einen Standard-Namensraum zu deklarieren und um Namensräume an Namensraum-Präfixe zu binden. Das Namensräume-Modul definiert auch die Syntax zur Verwendung dieser Präfixe zur Darstellung von qualifizierten Namensräumen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Host-Sprache ab.

## Referenz

### At-Rules und Deskriptoren

- {{cssxref("@namespace")}}

## Leitfäden

- [Namensraum-Kurzanleitung](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Ausführliche Erklärungen, was ein Namensraum ist und wie er in XML und XML-basierten Markupsprachen verwendet wird.

## Verwandte Konzepte

- CSS [Namensraumentrennzeichen (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator) Kombinator
- CSS [Typsselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- CSS [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
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
- {{Glossary("Namespace", "Namensraum")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Reference/Element/a#example) SVG-Element
- [CSS `<url>` Typ](/de/docs/Web/CSS/url_value)
- [CSS At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Rule-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
