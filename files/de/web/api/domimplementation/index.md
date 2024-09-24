---
title: DOMImplementation
slug: Web/API/DOMImplementation
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{ ApiRef("DOM") }}

Die **`DOMImplementation`**-Schnittstelle repräsentiert ein Objekt, das Methoden bereitstellt, die nicht von einem bestimmten Dokument abhängen. Ein solches Objekt wird von der Eigenschaft {{domxref("Document.implementation")}} zurückgegeben.

## Eigenschaft

_Diese Schnittstelle hat keine spezifischen Eigenschaften und erbt keine._

## Instanzmethoden

_Keine geerbten Methoden._

- {{domxref("DOMImplementation.createDocument()")}}
  - : Erstellt und gibt ein {{domxref("XMLDocument")}} zurück.
- {{domxref("DOMImplementation.createDocumentType()")}}
  - : Erstellt und gibt einen {{domxref("DocumentType")}} zurück.
- {{domxref("DOMImplementation.createHTMLDocument()")}}
  - : Erstellt und gibt ein HTML {{domxref("Document")}} zurück.
- {{domxref("DOMImplementation.hasFeature()")}} {{Deprecated_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob ein bestimmtes Feature unterstützt wird oder nicht. Diese Funktion ist unzuverlässig und wird nur aus Kompatibilitätsgründen beibehalten: Abgesehen von SVG-bezogenen Abfragen gibt sie immer `true` zurück. Alte Browser verhalten sich in ihrem Verhalten sehr inkonsistent.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der Index der DOM-Schnittstellen.](/de/docs/Web/API/Document_Object_Model)
