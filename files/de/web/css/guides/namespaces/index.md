---
title: CSS-Namensräume
short-title: Namespaces
slug: Web/CSS/Guides/Namespaces
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Namensräume**-Modul definiert die Syntax zur Verwendung von {{Glossary("namespace", "Namensräumen")}} in CSS.

CSS wird nicht nur zum Stylen von HTML verwendet. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu stylen, von denen jedes über einen unterschiedlichen Namensraum oder ein Dokument mit mehreren Namensräumen verfügt.

Die in diesem Modul definierte [`@namespace`](/de/docs/Web/CSS/Reference/At-rules/@namespace)-Regel ermöglicht es, zwischen gleichnamigen Elementen in unterschiedlichen Namensräumen zu unterscheiden. Element-Tag-Namen sind nicht einzigartig für eine einzige Sprache. Zum Beispiel ist das `<a>`-Element nicht auf HTML beschränkt. Möglicherweise möchten Sie die `<a>`-Elemente innerhalb Ihrer SVGs anders stylen als die Links in Ihrem HTML. Sie möchten auch sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Namensräume können dabei helfen.

Die `@namespace`-Regel wird verwendet, um einen Standard-Namensraum zu deklarieren und Namensräume an Namensraum-Präfixe zu binden. Das Namensräume-Modul definiert auch die Syntax zur Verwendung dieser Präfixe, um namensraumqualifizierte Namen darzustellen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Wirtssprache ab.

## Referenz

### At-Rules und Deskriptoren

- {{cssxref("@namespace")}}

## Leitfäden

- [Crashkurs zu Namensräumen](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Tiefgehende Erklärung, was ein Namensraum ist und wie er in XML und XML-basierten Markup-Sprachen verwendet wird.

## Verwandte Konzepte

- CSS [Namespace-Separator (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator)-Kombinator
- CSS [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- CSS [Universalselektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [`CSSNamespaceRule`](/de/docs/Web/API/CSSNamespaceRule)-Schnittstelle
  - [`CSSNamespaceRule.namespaceURI`](/de/docs/Web/API/CSSNamespaceRule/namespaceURI)-Eigenschaft
  - [`CSSNamespaceRule.prefix`](/de/docs/Web/API/CSSNamespaceRule/prefix)-Eigenschaft
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)-Methode
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)-Methode
- [`Document.getElementsByTagNameNS()`](/de/docs/Web/API/Document/getElementsByTagNameNS)-Methode
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)-Methode
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)-Methode
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)-Methode
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)-Methode
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI)-Eigenschaft
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)-Methode
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)-Methode
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)-Methode
- [`NamedNodeMap.getNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/getNamedItemNS)-Methode
- [`NamedNodeMap.removeNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/removeNamedItemNS)-Methode
- [`NamedNodeMap.setNamedItemNS()`](/de/docs/Web/API/NamedNodeMap/setNamedItemNS)-Methode
- {{Glossary("Namespace", "Namensraum")}}-Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Reference/Element/a#example) SVG-Element
- [CSS `<url>`-Typ](/de/docs/Web/CSS/Reference/Values/url_value)
- [CSS At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS At-Rule-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors)
