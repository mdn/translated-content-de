---
title: CSS-Namensräume
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Das **CSS-Namensräume**-Modul definiert die Syntax zur Verwendung von {{glossary("namespace", "Namensräumen")}} in CSS.

CSS ist nicht nur für das Stylen von HTML gedacht. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu stylen, von denen jedes über einen anderen Namensraum oder ein Dokument mit mehreren Namensräumen verfügt.

Die in diesem Modul definierte [`@namespace`](/de/docs/Web/CSS/@namespace) At-Regel ermöglicht es, zwischen gleichnamigen Elementen in verschiedenen Namensräumen zu unterscheiden. Element-Tag-Namen sind nicht auf eine einzelne Sprache beschränkt. Zum Beispiel ist das `<a>`-Element nicht nur auf HTML beschränkt. Sie möchten möglicherweise die `<a>`s in Ihren SVGs anders stylen als die Links in Ihrem HTML. Sie wollen wahrscheinlich auch sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Namensräume können dabei helfen.

Die `@namespace` Regel wird verwendet, um einen Standardnamensraum zu deklarieren und um Namensräume an Namensraum-Präfixe zu binden. Das Modul für Namensräume definiert auch die Syntax zur Verwendung dieser Präfixe, um namensraumqualifizierte Namen darzustellen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Hostsprache ab.

## Referenz

### At-Regeln

- {{cssxref("@namespace")}}

## Anleitungen

- [Namensräume Crashkurs](/de/docs/Web/SVG/Namespaces_Crash_Course)

  - : Detaillierter Einblick in das, was ein Namensraum ist, und wie sie in XML und XML-basierten Auszeichnungssprachen verwendet werden.

## Verwandte Konzepte

- CSS [Namensraum-Trennzeichen (`|`)](/de/docs/Web/CSS/Namespace_separator) Kombinator
- CSS [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors)
- CSS [Universal-Selektor](/de/docs/Web/CSS/Universal_selectors)
- {{DOMXRef("CSSNamespaceRule")}} Schnittstelle
  - {{DOMXRef("CSSNamespaceRule.namespaceURI")}} Eigenschaft
  - {{DOMXRef("CSSNamespaceRule.prefix")}} Eigenschaft
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
- {{glossary("Namespace")}} Glossar-Begriff

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Element/a#example) SVG-Element
- [CSS `<url>` Typ](/de/docs/Web/CSS/url_value)
- [CSS At-Regeln](/de/docs/Web/CSS/At-rule)
- [CSS At-Regel Funktionen](/de/docs/Web/CSS/At-rule-functions)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
