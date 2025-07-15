---
title: CSS-Namensräume
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Namensräume**-Modul definiert die Syntax für die Verwendung von {{Glossary("namespace", "Namensräumen")}} in CSS.

CSS dient nicht nur zum Styling von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu style, von denen jede eine unterschiedliche Namespace oder ein Dokument mit mehreren Namensräumen hat.

Die im Modul definierte [`@namespace`](/de/docs/Web/CSS/@namespace) At-Regel ermöglicht die Unterscheidung zwischen gleichnamigen Elementen in verschiedenen Namensräumen. Element-Tag-Namen sind nicht auf eine einzige Sprache beschränkt. Zum Beispiel ist das `<a>`-Element nicht nur auf HTML beschränkt. Möglicherweise möchten Sie die `<a>`-Elemente innerhalb Ihrer SVGs anders stylen als die Links in Ihrem HTML. Sie möchten wahrscheinlich auch sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Art von Element auswählt. Namensräume können dabei helfen.

Die `@namespace`-Regel wird verwendet, um einen Standard-Namespace zu deklarieren und um Namensräume an Namespace-Präfixe zu binden. Das Namensräume-Modul definiert auch die Syntax zur Verwendung dieser Präfixe zur Darstellung von namespace-qualifizierten Namen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und von der Host-Sprache ab.

## Referenz

### At-Regeln

- {{cssxref("@namespace")}}

## Leitfäden

- [Namensräume Einsteigerkurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Umfassende Einführung in das, was ein Namensraum ist und wie er in XML und XML-basierten Markupsprachen verwendet wird.

## Verwandte Konzepte

- CSS [Namespace-Trenner (`|`)](/de/docs/Web/CSS/Namespace_separator) Kombinator
- CSS [Typsselektoren](/de/docs/Web/CSS/Type_selectors)
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
- {{Glossary("Namespace", "Namespace")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Reference/Element/a#example) SVG-Element
- [CSS `<url>` Typ](/de/docs/Web/CSS/url_value)
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
