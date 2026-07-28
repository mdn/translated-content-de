---
title: Attr
slug: Web/API/Attr
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

{{APIRef("DOM")}}

Das **`Attr`**-Interface stellt eines der Attribute eines Elements als Objekt dar. In den meisten Fällen werden Sie den Attributwert direkt als Zeichenkette abrufen (z.B. mit [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)), aber in einigen Fällen kann es erforderlich sein, mit `Attr`-Instanzen zu interagieren (z.B. mit [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)).

{{InheritanceDiagram}}

Der Kern einer `Attr`-Objektidee ist die Assoziation zwischen einem _Namen_ und einem _Wert_. Ein Attribut kann auch Teil eines _Namespaces_ sein und hat in diesem Fall auch eine URI, die den Namespace identifiziert, sowie ein Präfix, das eine Abkürzung für den Namespace darstellt.

Der Name wird als _lokal_ betrachtet, wenn das eventuelle Namespace-Präfix ignoriert wird, und als _qualifiziert_, wenn er das Präfix des Namespaces enthält, das durch einen Doppelpunkt (`:`) vom lokalen Namen getrennt wird. Wir haben drei Fälle: ein Attribut außerhalb eines Namespaces, ein Attribut innerhalb eines Namespaces ohne definiertes Präfix und ein Attribut innerhalb eines Namespaces mit Präfix:

| Attribut | Namespace-Name | Namespace-Präfix | Attribut lokaler Name | Attribut qualifizierter Name |
| -------- | -------------- | ---------------- | --------------------- | ---------------------------- |
| `myAttr` | _none_         | _none_           | `myAttr`              | `myAttr`                     |
| `myAttr` | `mynamespace`  | _none_           | `myAttr`              | `myAttr`                     |
| `myAttr` | `mynamespace`  | `myns`           | `myAttr`              | `myns:myAttr`                |

> [!NOTE]
> Dieses Interface repräsentiert nur Attribute, die in der Baumrepräsentation eines SVG-, HTML- oder MathML-[`Elements`](/de/docs/Web/API/Element) vorhanden sind. Es repräsentiert nicht die Eigenschaften des Interfaces, das mit diesem Element verbunden ist, wie zum Beispiel die Eigenschaften des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) für ein {{HTMLElement("table")}}-Element. (Siehe {{Glossary("Attribute", "diesen Artikel")}} für mehr Informationen über Attribute und wie sie in Eigenschaften _reflektiert_ werden.)

## Instanzeigenschaften

_Dieses Interface erbt auch die Eigenschaften seiner übergeordneten Interfaces, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`localName`](/de/docs/Web/API/Attr/localName) {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Attributs darstellt.
- [`name`](/de/docs/Web/API/Attr/name) {{ReadOnlyInline}}
  - : Der _qualifizierte Name_ des Attributs. Wenn das Attribut nicht in einem Namespace ist, wird es mit der [`localName`](/de/docs/Web/API/Attr/localName)-Eigenschaft übereinstimmen.
- [`namespaceURI`](/de/docs/Web/API/Attr/namespaceURI) {{ReadOnlyInline}}
  - : Ein String, der die URI des Namespaces des Attributs darstellt, oder `null`, wenn kein Namespace vorhanden ist.
- [`ownerElement`](/de/docs/Web/API/Attr/ownerElement) {{ReadOnlyInline}}
  - : Das [`Element`](/de/docs/Web/API/Element), zu dem das Attribut gehört.
- [`prefix`](/de/docs/Web/API/Attr/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Präfix des Attributs darstellt, oder `null`, wenn ein Namespace ohne Präfix oder kein Namespace angegeben ist.
- [`specified`](/de/docs/Web/API/Attr/specified) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Diese Eigenschaft gibt immer `true` zurück.
- [`value`](/de/docs/Web/API/Attr/value)
  - : Der Attributwert, eine Zeichenkette, die mit dieser Eigenschaft gesetzt und abgerufen werden kann.

## Instanzmethoden

_Dieses Interface hat keine spezifischen Methoden, erbt jedoch die Methoden seiner übergeordneten Interfaces, [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Knoten sind [`CDATASection`](/de/docs/Web/API/CDATASection), [`CharacterData`](/de/docs/Web/API/CharacterData), [`Comment`](/de/docs/Web/API/Comment), [`Document`](/de/docs/Web/API/Document), [`Element`](/de/docs/Web/API/Element), [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) und [`Text`](/de/docs/Web/API/Text).
