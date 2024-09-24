---
title: Attr
slug: Web/API/Attr
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{APIRef("DOM")}}

Die **`Attr`**-Schnittstelle stellt eines der Attribute eines Elements als Objekt dar. In den meisten Fällen werden Sie den Attributwert direkt als Zeichenkette abrufen (z. B. {{domxref("Element.getAttribute()")}}), aber in einigen Fällen kann es erforderlich sein, mit `Attr`-Instanzen zu interagieren (z. B. {{domxref("Element.getAttributeNode()")}}).

{{InheritanceDiagram}}

Die Kernidee eines Objekts vom Typ `Attr` ist die Verbindung zwischen einem _Namen_ und einem _Wert_. Ein Attribut kann auch Teil eines _Namespaces_ sein und besitzt in diesem Fall auch eine URI, die den Namespace identifiziert, sowie ein Präfix, das eine Abkürzung für den Namespace ist.

Der Name wird als _lokal_ betrachtet, wenn er das eventuelle Namespace-Präfix ignoriert, und als _qualifiziert_, wenn er das Präfix des Namespaces enthält, falls vorhanden, getrennt vom lokalen Namen durch einen Doppelpunkt (`:`). Es gibt drei Fälle: ein Attribut außerhalb eines Namespaces, ein Attribut innerhalb eines Namespaces ohne definiertes Präfix, ein Attribut innerhalb eines Namespaces mit Präfix:

| Attribut  | Namespace-Name | Namespace-Präfix | Attribut lokaler Name | Attribut qualifizierter Name |
| --------- | -------------- | ---------------- | -------------------- | ---------------------------- |
| `myAttr`  | _none_         | _none_           | `myAttr`             | `myAttr`                     |
| `myAttr`  | `mynamespace`  | _none_           | `myAttr`             | `myAttr`                     |
| `myAttr`  | `mynamespace`  | `myns`           | `myAttr`             | `myns:myAttr`                |

> [!NOTE]
> Diese Schnittstelle repräsentiert nur Attribute, die in der Baumdarstellung des {{domxref("Element")}} vorhanden sind, sei es ein SVG-, ein HTML- oder ein MathML-Element. Sie repräsentiert nicht die _Eigenschaft_ einer Schnittstelle, die mit einem solchen Element verknüpft ist, wie z. B. {{domxref("HTMLTableElement")}} für ein {{HTMLElement("table")}}-Element. (Siehe {{Glossary("Attribute", "diesen Artikel")}} für weitere Informationen über Attribute und wie sie in Eigenschaften _reflektiert_ werden.)

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch die Eigenschaften ihrer übergeordneten Schnittstellen, {{domxref("Node")}} und {{domxref("EventTarget")}}._

- {{domxref("Attr.localName", "localName")}} {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Attributs darstellt.
- {{domxref("Attr.name", "name")}} {{ReadOnlyInline}}
  - : Der _qualifizierte Name_ des Attributs. Wenn das Attribut nicht in einem Namespace ist, ist es derselbe wie die {{domxref("attr.localName", "localName")}}-Eigenschaft.
- {{domxref("Attr.namespaceURI", "namespaceURI")}} {{ReadOnlyInline}}
  - : Ein String, der die URI des Namespaces des Attributs darstellt, oder `null`, wenn kein Namespace vorhanden ist.
- {{domxref("Attr.ownerElement", "ownerElement")}} {{ReadOnlyInline}}
  - : Das {{domxref("Element")}}, zu dem das Attribut gehört.
- {{domxref("Attr.prefix", "prefix")}} {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Präfix des Attributs darstellt, oder `null`, wenn ein Namespace ohne Präfix oder kein Namespace angegeben ist.
- {{domxref("Attr.specified", "specified")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Diese Eigenschaft gibt immer `true` zurück.
- {{domxref("Attr.value", "value")}}
  - : Der Wert des Attributs, eine Zeichenkette, die mit dieser Eigenschaft gesetzt und abgerufen werden kann.

## Instanz-Methoden

_Diese Schnittstelle hat keine spezifischen Methoden, erbt jedoch die Methoden ihrer übergeordneten Schnittstellen, {{domxref("Node")}} und {{domxref("EventTarget")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Knoten sind {{domxref("CDATASection")}}, {{domxref("CharacterData")}}, {{domxref("Comment")}}, {{domxref("Document")}}, {{domxref("Element")}}, {{domxref("ProcessingInstruction")}}, und {{domxref("Text")}}.
