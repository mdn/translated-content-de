---
title: CSS-Namensräume
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: d50c6b04f0e0cb20eca8a5f0e643e435ee8ac6ff
---

{{CSSRef}}

Das **CSS-Namensräume**-Modul definiert die Syntax für die Verwendung von {{Glossary("namespace", "Namensräumen")}} in CSS.

CSS dient nicht nur zum Stylen von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu gestalten, von denen jedes einen anderen Namensraum oder ein Dokument mit mehreren Namensräumen hat.

Die in diesem Modul definierte [`@namespace`](/de/docs/Web/CSS/@namespace) At-Regel ermöglicht es, zwischen gleichnamigen Elementen in verschiedenen Namensräumen zu unterscheiden. Element-Tagnamen sind nicht einzigartig für eine einzelne Sprache. Zum Beispiel ist das `<a>`-Element nicht auf HTML beschränkt. Sie möchten vielleicht die `<a>`s in Ihren SVGs anders stylen als die Links in Ihrem HTML. Es ist auch wahrscheinlich, dass Sie sicherstellen möchten, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Das Verwenden von Namensräumen kann dabei helfen.

Die `@namespace`-Regel wird verwendet, um einen Standard-Namensraum zu deklarieren und um Namensräume an Namensraum-Präfixe zu binden. Das Namensräume-Modul definiert auch die Syntax zur Verwendung dieser Präfixe, um namenseigene qualifizierte Namen darzustellen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Hostsprache ab.

## Referenz

### At-Regeln

- {{cssxref("@namespace")}}

## Leitfäden

- [Namensräume Crashkurs](/de/docs/Web/SVG/Namespaces_Crash_Course)

  - : Eingehende Betrachtung darüber, was ein Namensraum ist und wie sie in XML und XML-basierten Auszeichnungssprachen verwendet werden.

## Verwandte Konzepte

- CSS [Namespace-Separator (`|`)](/de/docs/Web/CSS/Namespace_separator) Kombinator
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
- {{Glossary("Namespace", "Namensraum")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Element/a#example) SVG-Element
- [CSS `<url>`-Typ](/de/docs/Web/CSS/url_value)
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
