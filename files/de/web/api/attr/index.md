---
title: Attr
slug: Web/API/Attr
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}

Die **`Attr`** Schnittstelle repräsentiert eines der Attribute eines Elements als ein Objekt. In den meisten Situationen werden Sie den Attributwert direkt als String abrufen (z. B. mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)), aber in einigen Fällen kann es erforderlich sein, mit `Attr`-Instanzen zu interagieren (z. B. mit [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)).

{{InheritanceDiagram}}

Die Kernidee eines Objekts des Typs `Attr` ist die Assoziation zwischen einem _Namen_ und einem _Wert_. Ein Attribut kann auch Teil eines _Namespaces_ sein und hat in diesem Fall auch eine URI, die den Namespace identifiziert, sowie ein Präfix, das eine Abkürzung für den Namespace darstellt.

Der Name wird als _lokal_ angesehen, wenn das eventuelle Namespace-Präfix ignoriert wird, und als _qualifiziert_, wenn es das Präfix des Namespace enthält, falls vorhanden, getrennt vom lokalen Namen durch einen Doppelpunkt (`:`). Wir haben drei Fälle: ein Attribut außerhalb eines Namespace, ein Attribut innerhalb eines Namespace ohne definiertes Präfix, ein Attribut innerhalb eines Namespace mit einem Präfix:

| Attribut | Namespace-Name  | Namespace-Präfix | Attribut lokaler Name | Attribut qualifizierter Name |
| -------- | --------------- | ---------------- | --------------------- | --------------------------- |
| `myAttr` | _none_          | _none_           | `myAttr`              | `myAttr`                    |
| `myAttr` | `mynamespace`   | _none_           | `myAttr`              | `myAttr`                    |
| `myAttr` | `mynamespace`   | `myns`           | `myAttr`              | `myns:myAttr`               |

> [!NOTE]
> Diese Schnittstelle repräsentiert nur Attribute, die in der Baumdarstellung des [`Element`](/de/docs/Web/API/Element) vorhanden sind, sei es ein SVG-, ein HTML- oder ein MathML-Element. Sie repräsentiert nicht die _Eigenschaft_ einer Schnittstelle, die mit einem solchen Element verbunden ist, wie beispielsweise [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für ein {{HTMLElement("table")}}-Element. (Siehe [diesen Artikel](/de/docs/Glossary/Attribute) für mehr Informationen über Attribute und wie sie in Eigenschaften _reflektiert_ werden.)

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihrer übergeordneten Schnittstellen, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`localName`](/de/docs/Web/API/Attr/localName) {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Attributs repräsentiert.
- [`name`](/de/docs/Web/API/Attr/name) {{ReadOnlyInline}}
  - : Der _qualifizierte Name_ des Attributs. Wenn das Attribut nicht in einem Namespace ist, wird es derselbe wie die [`localName`](/de/docs/Web/API/Attr/localName)-Eigenschaft sein.
- [`namespaceURI`](/de/docs/Web/API/Attr/namespaceURI) {{ReadOnlyInline}}
  - : Ein String, der die URI des Namespace des Attributs repräsentiert, oder `null`, wenn kein Namespace vorhanden ist.
- [`ownerElement`](/de/docs/Web/API/Attr/ownerElement) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element), zu dem das Attribut gehört.
- [`prefix`](/de/docs/Web/API/Attr/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Präfix des Attributs repräsentiert, oder `null`, wenn ein Namespace ohne Präfix oder kein Namespace angegeben ist.
- [`specified`](/de/docs/Web/API/Attr/specified) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Diese Eigenschaft gibt immer `true` zurück.
- [`value`](/de/docs/Web/API/Attr/value)
  - : Der Wert des Attributs, ein String, der mit dieser Eigenschaft gesetzt und abgerufen werden kann.

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifischen Methoden, erbt jedoch die Methoden ihrer übergeordneten Schnittstellen, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Knoten sind [`CDATASection`](/de/docs/Web/API/CDATASection), [`CharacterData`](/de/docs/Web/API/CharacterData), [`Comment`](/de/docs/Web/API/Comment), [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) und [`Text`](/de/docs/Web/API/Text).
