---
title: DocumentType
slug: Web/API/DocumentType
l10n:
  sourceCommit: bd15d43260b7e72b1066c04d9d9f3b79129c619c
---

{{APIRef("DOM")}}

Die **`DocumentType`**-Schnittstelle repräsentiert einen [`Node`](/de/docs/Web/API/Node), der einen Doctype enthält.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Node`](/de/docs/Web/API/Node)._

- [`DocumentType.name`](/de/docs/Web/API/DocumentType/name) {{ReadOnlyInline}}
  - : Der Typ des Dokuments. Bei HTML-Dokumenten ist es immer `"html"`, kann aber bei XML-Dokumenten variieren.
- [`DocumentType.publicId`](/de/docs/Web/API/DocumentType/publicId) {{ReadOnlyInline}}
  - : Ein String mit einem Bezeichner des Dokumenttyps. Bei HTML immer leer (`""`), zum Beispiel `"-//W3C//DTD SVG 1.1//EN"` für SVG-Dokumente.
- [`DocumentType.systemId`](/de/docs/Web/API/DocumentType/systemId) {{ReadOnlyInline}}
  - : Ein String, der die URL zur zugehörigen DTD enthält. Immer leer (`""`) bei HTML, zum Beispiel `"http://www.w3.org/2000/svg"` für SVG-Dokumente.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`Node`](/de/docs/Web/API/Node)._

- [`DocumentType.after()`](/de/docs/Web/API/DocumentType/after)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des Elternteils des Objekts ein, direkt nach diesem Knoten.
- [`DocumentType.before()`](/de/docs/Web/API/DocumentType/before)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des Elternteils des Objekts ein, direkt vor diesem Knoten.
- [`DocumentType.remove()`](/de/docs/Web/API/DocumentType/remove)
  - : Entfernt dieses Objekt aus der Kinderliste des Elternteils.
- [`DocumentType.replaceWith()`](/de/docs/Web/API/DocumentType/replaceWith)
  - : Ersetzt den Dokumenttyp durch eine Menge gegebener Knoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellen-Index.](/de/docs/Web/API/Document_Object_Model)
- [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType) um einen neuen `DocumentType`-Knoten zu erstellen.
