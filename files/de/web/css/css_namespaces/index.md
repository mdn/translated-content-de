---
title: CSS-Namensräume
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{CSSRef}}

Das **CSS-Namensräume** Modul definiert die Syntax zur Verwendung von {{Glossary("namespace", "Namespaces")}} in CSS.

CSS dient nicht nur der Gestaltung von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu stylen, von denen jedes einen anderen Namensraum oder ein Dokument mit mehreren Namensräumen hat.

Die in diesem Modul definierte [`@namespace`](/de/docs/Web/CSS/@namespace) Regel ermöglicht es, zwischen gleichnamigen Elementen in verschiedenen Namensräumen zu unterscheiden. Element-Tag-Namen sind nicht einzigartig für eine einzige Sprache. Zum Beispiel ist das `<a>` Element nicht auf HTML beschränkt. Sie möchten möglicherweise die `<a>`s innerhalb Ihrer SVGs anders stylen als die Links in Ihrem HTML. Außerdem möchten Sie wahrscheinlich sicherstellen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Die Verwendung von Namensräumen kann dabei helfen.

Die `@namespace` Regel wird verwendet, um einen Standard-Namensraum zu deklarieren und Namensräume mit Namensraum-Präfixen zu verknüpfen. Das Namensraum-Modul definiert auch die Syntax zur Verwendung dieser Präfixe zur Darstellung namensequalifizierter Namen. Das war's. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Hostsprache ab.

## Referenz

### At-Regeln

- {{cssxref("@namespace")}}

## Leitfäden

- [Namespaces Kurzkurs](/de/docs/Web/SVG/Guides/Namespaces_crash_course)

  - : Tiefer Einblick in das, was ein Namensraum ist und wie sie in XML und XML-basierten Auszeichnungssprachen verwendet werden.

## Verwandte Konzepte

- CSS [Namespace-Trenner (`|`)](/de/docs/Web/CSS/Namespace_separator) Kombinator
- CSS [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors)
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
- {{Glossary("Namespace", "Namespace")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Reference/Element/a#example) SVG-Element
- [CSS `<url>` Typ](/de/docs/Web/CSS/url_value)
- [CSS At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [CSS At-Regel-Funktionen](/de/docs/Web/CSS/CSS_syntax/At-rule_functions)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
