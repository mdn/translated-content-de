---
title: DOMImplementation
slug: Web/API/DOMImplementation
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ ApiRef("DOM") }}

Die **`DOMImplementation`**-Schnittstelle repräsentiert ein Objekt, das Methoden bereitstellt, die nicht von einem bestimmten Dokument abhängig sind. Ein solches Objekt wird von der [`Document.implementation`](/de/docs/Web/API/Document/implementation)-Eigenschaft zurückgegeben.

## Eigenschaft

_Diese Schnittstelle hat keine spezifische Eigenschaft und erbt keine._

## Instanzmethoden

_Keine geerbte Methode._

- [`DOMImplementation.createDocument()`](/de/docs/Web/API/DOMImplementation/createDocument)
  - : Erstellt und gibt ein [`XMLDocument`](/de/docs/Web/API/XMLDocument) zurück.
- [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType)
  - : Erstellt und gibt ein [`DocumentType`](/de/docs/Web/API/DocumentType) zurück.
- [`DOMImplementation.createHTMLDocument()`](/de/docs/Web/API/DOMImplementation/createHTMLDocument)
  - : Erstellt und gibt ein HTML [`Document`](/de/docs/Web/API/Document) zurück.
- [`DOMImplementation.hasFeature()`](/de/docs/Web/API/DOMImplementation/hasFeature) {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob eine gegebene Funktion unterstützt wird oder nicht. Diese Funktion ist unzuverlässig und wird nur aus Kompatibilitätsgründen beibehalten: außer bei SVG-bezogenen Abfragen gibt sie immer `true` zurück. Alte Browser verhalten sich in ihrem Verhalten sehr inkonsistent.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der DOM-Schnittstellenindex.](/de/docs/Web/API/Document_Object_Model)
