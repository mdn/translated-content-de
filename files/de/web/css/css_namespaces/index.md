---
title: CSS Namespaces
slug: Web/CSS/CSS_namespaces
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Das **CSS-Namespaces**-Modul definiert die Syntax für die Verwendung von {{Glossary("namespace", "Namespaces")}} in CSS.

CSS ist nicht nur für die Gestaltung von HTML. Ein Stylesheet kann verwendet werden, um SVG, MathML, XML oder HTML zu gestalten, von denen jede eine andere Namespace hat oder ein Dokument enthält, das mehrere Namespaces umfasst.

Die in diesem Modul definierte [`@namespace`](/de/docs/Web/CSS/@namespace) Regel ermöglicht es, zwischen gleichnamigen Elementen in verschiedenen Namespaces zu unterscheiden. Element-Tagnamen sind nicht einzigartig für eine einzelne Sprache. Zum Beispiel ist das `<a>`-Element nicht auf HTML beschränkt. Sie möchten möglicherweise die `<a>`s innerhalb Ihrer SVGs anders gestalten als die Links in Ihrem HTML. Sie werden auch wahrscheinlich sicherstellen wollen, dass {{domxref("Document.querySelectorAll", "querySelectorAll(\"a\")")}} das richtige Element auswählt. Namespaces können helfen.

Die `@namespace` Regel wird verwendet, um einen Standard-Namespace zu deklarieren und um Namespaces an Namespace-Präfixe zu binden. Das Namespaces-Modul definiert auch die Syntax zur Verwendung dieser Präfixe, um namespacequalifizierte Namen darzustellen. Das ist alles. Was ein Name bedeutet oder ob der Name überhaupt gültig ist, hängt vom Kontext und der Wirtssprache ab.

## Referenz

### At-Rules

- {{cssxref("@namespace")}}

## Leitfäden

- [Namespaces Crash-Kurs](/de/docs/Web/SVG/Namespaces_Crash_Course)

  - : Tiefgründige Untersuchung dessen, was ein Namespace ist und wie sie in XML und XML-basierten Auszeichnungssprachen verwendet werden.

## Verwandte Konzepte

- CSS [Namespace-Trennzeichen (`|`)](/de/docs/Web/CSS/Namespace_separator) Kombinator
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
- {{Glossary("Namespace", "Namespace")}} Glossarbegriff

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<a>`](/de/docs/Web/SVG/Element/a#example) SVG Element
- [CSS `<url>` Typ](/de/docs/Web/CSS/url_value)
- [CSS At-Rules](/de/docs/Web/CSS/At-rule)
- [CSS At-Rule-Funktionen](/de/docs/Web/CSS/At-rule-functions)
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
