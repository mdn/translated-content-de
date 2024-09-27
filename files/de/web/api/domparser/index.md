---
title: DOMParser
slug: Web/API/DOMParser
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`DOMParser`**-Schnittstelle bietet die Möglichkeit, [XML](/de/docs/Glossary/XML)- oder [HTML](/de/docs/Glossary/HTML)-Quellcode aus einem String in ein DOM-`Document` zu parsen.

Sie können die gegenteilige Operation durchführen—einen DOM-Baum in XML- oder HTML-Quellcode umwandeln—indem Sie die [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)-Schnittstelle verwenden.

Im Fall eines HTML-Dokuments können Sie auch Teile des DOM durch neue DOM-Bäume ersetzen, die aus HTML erstellt wurden, indem Sie den Wert der Eigenschaften [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) und [`outerHTML`](/de/docs/Web/API/Element/outerHTML) setzen. Diese Eigenschaften können auch gelesen werden, um HTML-Fragmente abzurufen, die dem entsprechenden DOM-Teilbaum entsprechen.

Beachten Sie, dass [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) XML und HTML direkt von einer URL-adressierbaren Ressource parsen kann und ein `Document` in seiner [`response`](/de/docs/Web/API/XMLHttpRequest/response)-Eigenschaft zurückgibt.

> [!NOTE]
> Beachten Sie, dass [block-level elements](/de/docs/Glossary/Block-level_content) wie `<p>` automatisch geschlossen werden, wenn ein anderes Block-Level-Element darin verschachtelt ist und daher vor dem schließenden `</p>` Tag geparst wird.

## Konstruktor

- [`DOMParser()`](/de/docs/Web/API/DOMParser/DOMParser)
  - : Erstellt ein neues `DOMParser`-Objekt.

## Instanzmethoden

- [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString)
  - : Parst einen String entweder mit dem HTML-Parser oder dem XML-Parser und gibt ein [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurück.

## Beispiele

Die Dokumentation zu [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString), der einzigen Methode dieser Schnittstelle, enthält Beispiele zum Parsen von XML-, SVG- und HTML-Strings.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [XML parsen und serialisieren](/de/docs/Web/XML/Parsing_and_serializing_XML)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}}-Dokumente.
