---
title: DocumentType
slug: Web/API/DocumentType
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentType`**-Schnittstelle repräsentiert ein {{domxref("Node")}}, das einen Doctype enthält.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("Node")}}._

- {{domxref("DocumentType.name")}} {{ReadOnlyInline}}
  - : Der Typ des Dokuments. Für HTML-Dokumente ist dies immer `"html"`, kann jedoch für XML-Dokumente variieren.
- {{domxref("DocumentType.publicId")}} {{ReadOnlyInline}}
  - : Ein String mit einem Bezeichner des Dokumenttyps. Für HTML-Dokumente immer leer (`""`), es wird beispielsweise `"-//W3C//DTD SVG 1.1//EN"` für SVG-Dokumente sein.
- {{domxref("DocumentType.systemId")}} {{ReadOnlyInline}}
  - : Ein String, der die URL zur zugehörigen DTD enthält. Für HTML-Dokumente immer leer (`""`), es wird beispielsweise `"http://www.w3.org/2000/svg"` für SVG-Dokumente sein.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, {{domxref("Node")}}._

- {{domxref("DocumentType.after()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Zeichenfolgen in die Kinderliste des
    Elternteils des Objekts ein, direkt nach diesem Knoten.
- {{domxref("DocumentType.before()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Zeichenfolgen in die Kinderliste des
    Elternteils des Objekts ein, direkt vor diesem Knoten.
- {{domxref("DocumentType.remove()")}}
  - : Entfernt dieses Objekt aus der Kinderliste seines Elternteils.
- {{domxref("DocumentType.replaceWith()")}}
  - : Ersetzt den Dokumenttyp durch eine Reihe gegebener Knoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis.](/de/docs/Web/API/Document_Object_Model)
- {{domxref("DOMImplementation.createDocumentType()")}} um einen neuen `DocumentType`-Knoten zu erstellen.
