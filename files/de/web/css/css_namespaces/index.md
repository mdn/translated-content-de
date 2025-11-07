---
title: CSS-Namensräume
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS-Namensräume**-Modul definiert die Syntax zur Verwendung von {{Glossary("namespace", "Namensräumen")}} in CSS.

CSS dient nicht nur zum Stylen von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu stylen, von denen jeder einen anderen Namensraum hat oder ein Dokument mit mehreren Namensräumen enthält.

Die in diesem Modul definierte [`@namespace`](/de/docs/Web/CSS/Reference/At-rules/@namespace) At-Regel ermöglicht das Unterscheiden zwischen Elementen mit demselben Namen in verschiedenen Namensräumen. Element-Tagnamen sind nicht einzigartig für eine einzige Sprache. Beispielsweise ist das `<a>`-Element nicht auf HTML beschränkt. Möglicherweise möchten Sie die `<a>`s in Ihren SVGs anders als die Links in Ihrem HTML gestalten. Sie möchten auch sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Die Verwendung von Namensräumen kann dabei helfen.

Die `@namespace`-Regel wird verwendet, um einen Standardnamensraum zu deklarieren und Namensräume an Namensraum-Präfixe zu binden. Das Namensräume-Modul definiert auch die Syntax für die Verwendung dieser Präfixe, um namensraum-qualifizierte Namen darzustellen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Host-Sprache ab.

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@namespace")}}

## Leitfäden

- [Einführung in Namensräume](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Tiefe Einblicke, was ein Namensraum ist und wie sie in XML und XML-basierten Markup-Sprachen verwendet werden.

## Verwandte Konzepte

- CSS [Namensraum-Separator (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator)-Kombinator
- CSS [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
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
- {{Glossary("Namespace", "Namespace")}}-Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Reference/Element/a#example) SVG-Element
- [CSS `<url>`-Typ](/de/docs/Web/CSS/Reference/Values/url_value)
- [CSS-At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
