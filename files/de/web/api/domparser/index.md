---
title: DOMParser
slug: Web/API/DOMParser
l10n:
  sourceCommit: 2c538b494ed560fe68f239f40ce4417b720a5595
---

{{APIRef("DOM")}}

Das **`DOMParser`**-Interface bietet die Fähigkeit, {{Glossary("XML", "XML")}}- oder {{Glossary("HTML", "HTML")}}-Quellcode von einem String in ein DOM-[`Document`](/de/docs/Web/API/Document) zu parsen.

Sie können die umgekehrte Operation ausführen – einen DOM-Baum in XML- oder HTML-Quellcode umwandeln – indem Sie das [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)-Interface verwenden.

Im Fall eines HTML-Dokuments können Sie auch Teile des DOM durch neue DOM-Bäume ersetzen, die aus HTML erstellt werden, indem Sie den Wert der [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)- und [`outerHTML`](/de/docs/Web/API/Element/outerHTML)-Eigenschaften festlegen. Diese Eigenschaften können auch gelesen werden, um HTML-Fragmente zu erhalten, die dem entsprechenden DOM-Teilbaum entsprechen.

Beachten Sie, dass [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) XML und HTML direkt von einer URL-adressierbaren Quelle parsen kann und ein `Document` in seiner [`response`](/de/docs/Web/API/XMLHttpRequest/response)-Eigenschaft zurückgibt.

> [!NOTE]
> Beachten Sie, dass {{Glossary("Block-level_content", "Block-Level-Elemente")}} wie `<p>` automatisch geschlossen werden, wenn ein anderes Block-Level-Element darin verschachtelt ist und daher vor dem schließenden `</p>`-Tag geparst wird.

## Konstruktor

- [`DOMParser()`](/de/docs/Web/API/DOMParser/DOMParser)
  - : Erstellt ein neues `DOMParser`-Objekt.

## Instanzmethoden

- [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString)
  - : Parst eine Eingabe [`TrustedHTML`](/de/docs/Web/API/TrustedHTML)-Instanz oder einen String als HTML oder XML und gibt ein [`Document`](/de/docs/Web/API/Document) zurück.

## Beispiele

Die Dokumentation für [`DOMParser.parseFromString()`](/de/docs/Web/API/DOMParser/parseFromString), die einzige Methode dieses Interfaces, enthält Beispiele zum Parsen von XML-, SVG- und HTML-Strings.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Parsieren und Serialisieren von XML](/de/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`XMLSerializer`](/de/docs/Web/API/XMLSerializer)
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}}-Dokumente.
