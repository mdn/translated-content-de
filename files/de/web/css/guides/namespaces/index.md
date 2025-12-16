---
title: CSS-Namensräume
short-title: Namespaces
slug: Web/CSS/Guides/Namespaces
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS-Namensräume**-Modul definiert die Syntax zur Verwendung von {{Glossary("namespace", "Namensräumen")}} in CSS.

CSS ist nicht nur für die Gestaltung von HTML gedacht. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu gestalten, die jeweils einen anderen Namensraum haben oder ein Dokument, das mehrere Namensräume enthält.

Die in diesem Modul definierte {{cssxref("@namespace")}}-At-Regel ermöglicht es, zwischen gleichnamigen Elementen in verschiedenen Namensräumen zu unterscheiden. Element-Tag-Namen sind nicht einzigartig für eine einzelne Sprache. Zum Beispiel ist das `<a>`-Element nicht auf HTML beschränkt. Es kann sein, dass Sie die `<a>`-Elemente innerhalb Ihrer SVGs anders gestalten möchten als die Links in Ihrem HTML. Sie möchten wahrscheinlich auch sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Namensräume können hierbei helfen.

Die `@namespace`-Regel wird verwendet, um einen Standard-Namensraum zu deklarieren und um Namensräume an Namensraum-Präfixe zu binden. Das Namensraum-Modul definiert auch die Syntax, um diese Präfixe zur Darstellung von namensraum-qualifizierten Namen zu verwenden. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Hostsprache ab.

## Referenz

### At-Regeln und Deskriptoren

- {{cssxref("@namespace")}}

## Leitfäden

- [Crashkurs zu Namensräumen](/de/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : Umfassender Einblick, was ein Namensraum ist und wie er in XML und XML-basierten Auszeichnungssprachen verwendet wird.

## Verwandte Konzepte

- CSS [Namensraum-Trennzeichen (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator) Kombinator
- CSS [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- CSS [universeller Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)
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
- {{cssxref("url_value", "&lt;url&gt;")}} Datentyp
- [CSS At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/Reference/At-rules/At-rule_functions)
- [CSS Selektoren](/de/docs/Web/CSS/Guides/Selectors)
