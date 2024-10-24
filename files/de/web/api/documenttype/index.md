---
title: DocumentType
slug: Web/API/DocumentType
l10n:
  sourceCommit: 20bf311572eeb3dfaaec345144b81120bd9eda03
---

{{APIRef("DOM")}}

Die **`DocumentType`**-Schnittstelle repräsentiert einen [`Node`](/de/docs/Web/API/Node), der einen doctype enthält.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`Node`](/de/docs/Web/API/Node)._

- [`DocumentType.name`](/de/docs/Web/API/DocumentType/name) {{ReadOnlyInline}}
  - : Der Typ des Dokuments. Für HTML-Dokumente ist er immer `"html"`, kann aber für XML-Dokumente variieren.
- [`DocumentType.publicId`](/de/docs/Web/API/DocumentType/publicId) {{ReadOnlyInline}}
  - : Eine Zeichenkette mit einem Bezeichner des Dokumententyps. Leer, wenn der angegebene Doctype keine öffentliche ID festlegt.
- [`DocumentType.systemId`](/de/docs/Web/API/DocumentType/systemId) {{ReadOnlyInline}}
  - : Eine Zeichenkette, die die URL zur zugehörigen DTD enthält. Leer, wenn der angegebene Doctype keine System-ID festlegt.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`Node`](/de/docs/Web/API/Node)._

- [`DocumentType.after()`](/de/docs/Web/API/DocumentType/after)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kindliste des Elternteils des Objekts ein, direkt nach diesem Knoten.
- [`DocumentType.before()`](/de/docs/Web/API/DocumentType/before)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kindliste des Elternteils des Objekts ein, direkt vor diesem Knoten.
- [`DocumentType.remove()`](/de/docs/Web/API/DocumentType/remove)
  - : Entfernt dieses Objekt aus der Kindliste seines Elternteils.
- [`DocumentType.replaceWith()`](/de/docs/Web/API/DocumentType/replaceWith)
  - : Ersetzt den Dokumenttyp durch eine Reihe von angegebenen Knoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Der Index der DOM-Schnittstellen.](/de/docs/Web/API/Document_Object_Model)
- [`DOMImplementation.createDocumentType()`](/de/docs/Web/API/DOMImplementation/createDocumentType), um einen neuen `DocumentType` Knoten zu erstellen.
