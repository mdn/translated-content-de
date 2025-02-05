---
title: DOMParser
slug: Web/API/DOMParser
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef("DOM")}}

Das **`DOMParser`**-Interface bietet die Möglichkeit, {{Glossary("XML", "XML")}}- oder {{Glossary("HTML", "HTML")}}-Quellcode aus einer Zeichenkette in ein DOM-[`Document`](/de/docs/Web/API/Document) zu parsen.

Das Gegenteil — das Konvertieren eines DOM-Baums in XML- oder HTML-Quellcode — kann mit dem [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)-Interface durchgeführt werden.

Im Fall eines HTML-Dokuments können Sie auch Teile des DOM mit neuen DOM-Bäumen, die aus HTML erstellt wurden, ersetzen, indem Sie den Wert der Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`outerHTML`](/de/docs/Web/API/Element/outerHTML) setzen. Diese Eigenschaften können auch gelesen werden, um HTML-Fragmente abzurufen, die den entsprechenden DOM-Teilbäumen entsprechen.

Beachten Sie, dass [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) XML und HTML direkt aus einer ressourcenadressierbaren URL parsen kann und ein `Document` in seiner [`response`](/de/docs/Web/API/XMLHttpRequest/response)-Eigenschaft zurückgibt.

> [!NOTE]
> Beachten Sie, dass {{Glossary("Block-level_content", "block-level elements")}} wie `<p>` automatisch geschlossen werden, wenn ein anderes Block-Level-Element darin verschachtelt ist und daher vor dem schließenden `</p>`-Tag geparst wird.

## Konstruktor

- [`DOMParser()`](/de/docs/Web/API/DOMParser/DOMParser)
  - : Erstellt ein neues `DOMParser`-Objekt.

## Instanzmethoden

- [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString)
  - : Parst eine Zeichenkette mit dem HTML-Parser oder dem XML-Parser und gibt ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurück.

## Beispiele

Die Dokumentation zu [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString), der einzigen Methode dieses Interfaces, enthält Beispiele zum Parsen von XML-, SVG- und HTML-Zeichenketten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XML parsen und serialisieren](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}}-Dokumente.
