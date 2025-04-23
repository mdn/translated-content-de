---
title: CSS-Namensräume
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: 3dce7daa89de9290c5ca04b6289756cd3c39d247
---

{{CSSRef}}

Das **CSS-Namensräume**-Modul definiert die Syntax zur Nutzung von {{Glossary("namespace", "Namensräumen")}} in CSS.

CSS dient nicht nur zum Stylen von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu stylen, von denen jedes einen anderen Namensraum hat oder ein Dokument enthält, das aus mehreren Namensräumen besteht.

Die in diesem Modul definierte At-Regel [`@namespace`](/de/docs/Web/CSS/@namespace) ermöglicht die Unterscheidung zwischen gleichnamigen Elementen in verschiedenen Namensräumen. Element-Tagnamen sind nicht auf eine einzige Sprache beschränkt. Zum Beispiel ist das `<a>`-Element nicht nur auf HTML beschränkt. Sie möchten eventuell die `<a>`s innerhalb Ihrer SVGs anders gestalten als die Links in Ihrem HTML. Sie möchten auch sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} den richtigen Elementtyp auswählt. Namensräume können dabei helfen.

Die `@namespace` Regel wird verwendet, um einen Standardnamensraum zu deklarieren und um Namensräume an Namensraum-Präfixe zu binden. Das Namensräume-Modul definiert auch die Syntax zur Verwendung dieser Präfixe zur Darstellung von namensraum-qualifizierten Namen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Host-Sprache ab.

## Referenz

### At-Regeln

- {{cssxref("@namespace")}}

## Leitfäden

- [Crashkurs zu Namensräumen](/de/docs/Web/SVG/Guides/Namespaces_crash_course)

  - : Tiefgehender Einblick in das, was ein Namensraum ist und wie er in XML und XML-basierten Markup-Sprachen genutzt wird.

## Verwandte Konzepte

- CSS [Namensraum-Trenner (`|`)](/de/docs/Web/CSS/Namespace_separator)-Kombinator
- CSS [Typselektoren](/de/docs/Web/CSS/Type_selectors)
- CSS [Universalselektor](/de/docs/Web/CSS/Universal_selectors)
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
- {{Glossary("Namespace", "Namensraum")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Reference/Element/a#example) SVG-Element
- [CSS `<url>` Typ](/de/docs/Web/CSS/url_value)
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
