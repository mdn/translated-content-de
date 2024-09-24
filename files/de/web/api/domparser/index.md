---
title: DOMParser
slug: Web/API/DOMParser
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef("DOM")}}

Die **`DOMParser`**-Schnittstelle bietet die Möglichkeit, {{Glossary("XML")}}- oder {{Glossary("HTML")}}-Quellcode aus einem String in ein DOM-{{domxref("Document")}} zu parsen.

Sie können die umgekehrte Operation durchführen – einen DOM-Baum in XML- oder HTML-Quellcode umwandeln – indem Sie die {{domxref("XMLSerializer")}}-Schnittstelle verwenden.

Im Falle eines HTML-Dokuments können Sie Teile des DOM durch neue DOM-Bäume ersetzen, die aus HTML aufgebaut sind, indem Sie den Wert der {{domxref("Element.innerHTML")}}- und {{domxref("Element.outerHTML", "outerHTML")}}-Eigenschaften festlegen. Diese Eigenschaften können auch gelesen werden, um HTML-Fragmente abzurufen, die dem entsprechenden DOM-Teilbaum entsprechen.

Beachten Sie, dass {{domxref("XMLHttpRequest")}} XML und HTML direkt aus einer URL-adressierbaren Ressource analysieren kann und ein `Document` in seiner {{domxref("XMLHttpRequest.response", "response")}}-Eigenschaft zurückgibt.

> [!NOTE]
> Beachten Sie, dass [Block-Elemente](/de/docs/Glossary/Block-level_content) wie `<p>` automatisch geschlossen werden, wenn ein anderes Block-Element darin verschachtelt ist und daher vor dem schließenden `</p>`-Tag geparst wird.

## Konstruktor

- {{domxref("DOMParser.DOMParser","DOMParser()")}}
  - : Erstellt ein neues `DOMParser`-Objekt.

## Instanzmethoden

- {{domxref("DOMParser.parseFromString()")}}
  - : Parst einen String entweder mit dem HTML-Parser oder dem XML-Parser und gibt ein {{domxref("HTMLDocument")}} oder {{domxref("XMLDocument")}} zurück.

## Beispiele

Die Dokumentation zur Methode {{domxref("DOMParser.parseFromString()")}}, der einzigen Methode dieser Schnittstelle, enthält Beispiele zum Parsen von XML-, SVG- und HTML-Strings.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Analysieren und Serialisieren von XML](/de/docs/Web/XML/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - Gegenstück für {{jsxref("JSON")}}-Dokumente.
