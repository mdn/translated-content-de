---
title: CSS-Namespaces
short-title: Namespaces
slug: Web/CSS/Guides/Namespaces
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS-Namespaces**-Modul definiert die Syntax für die Verwendung von {{Glossary("namespace", "Namespaces")}} in CSS.

CSS ist nicht nur für die Gestaltung von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu gestalten, die jeweils einen anderen Namespace oder ein Dokument mit mehreren Namespaces haben.

Die im Modul definierte [`@namespace`](/de/docs/Web/CSS/Reference/At-rules/@namespace)-At-Regel ermöglicht es, zwischen gleichnamigen Elementen in verschiedenen Namespaces zu unterscheiden. Element-Tag-Namen sind nicht auf eine einzelne Sprache beschränkt. Zum Beispiel ist das `<a>`-Element nicht nur auf HTML begrenzt. Möglicherweise möchten Sie die `<a>`s in Ihren SVGs anders gestalten als die Links in Ihrem HTML. Sie möchten wahrscheinlich auch sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} den richtigen Elementtyp auswählt. Namespacing kann dabei helfen.

Die `@namespace`-Regel wird verwendet, um einen Standard-Namespace zu deklarieren und Namespaces an Namespace-Präfixe zu binden. Das Namespaces-Modul definiert auch die Syntax zur Verwendung dieser Präfixe, um Namespace-qualifizierte Namen darzustellen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Host-Sprache ab.

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@namespace")}}

## Leitfäden

- [Namespaces-Kurzlehrgang](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Vertiefung in das, was ein Namespace ist und wie sie in XML und XML-basierten Auszeichnungssprachen verwendet werden.

## Verwandte Konzepte

- CSS [Namespace-Trenner (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator) Kombinator
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
- {{Glossary("Namespace", "Namespace")}}-Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Reference/Element/a#example) SVG-Element
- [CSS `<url>`-Typ](/de/docs/Web/CSS/Reference/Values/url_value)
- [CSS-At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS-At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
