---
title: DOMError
slug: Web/API/DOMError
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{APIRef("DOM")}}{{non-standard_header}}

Die **`DOMError`** Schnittstelle beschreibt ein Fehlerobjekt, das einen Fehlernamen enthält.

## Instanz-Eigenschaften

- [`DOMError.name`](/de/docs/Web/API/DOMError/name) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Liefert einen String, der einen der Fehler-Typennamen repräsentiert (siehe unten).
- [`DOMError.message`](/de/docs/Web/API/DOMError/message) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Liefert einen String, der eine Meldung oder Beschreibung enthält, die mit dem gegebenen Fehler-Typennamen verbunden ist.

## Fehler-Typen

| Typ                          | Beschreibung                                                                                                   |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | Der Index liegt nicht im erlaubten Bereich (z.B. ausgelöst in einem [`range`](/de/docs/Web/API/Range) Objekt). |
| `HierarchyRequestError`      | Die Knotenbaumhierarchie ist nicht korrekt.                                                                    |
| `WrongDocumentError`         | Das Objekt befindet sich im falschen [`document`](/de/docs/Web/API/Document).                                  |
| `InvalidCharacterError`      | Der String enthält ungültige Zeichen.                                                                          |
| `NoModificationAllowedError` | Das Objekt kann nicht modifiziert werden.                                                                      |
| `NotFoundError`              | Das Objekt kann hier nicht gefunden werden.                                                                    |
| `NotSupportedError`          | Die Operation wird nicht unterstützt.                                                                          |
| `InvalidStateError`          | Das Objekt befindet sich in einem ungültigen Zustand.                                                          |
| `SyntaxError`                | Der String entspricht nicht dem erwarteten Muster.                                                             |
| `InvalidModificationError`   | Das Objekt kann nicht auf diese Weise verändert werden.                                                        |
| `NamespaceError`             | Die Operation ist durch Namespaces in XML nicht erlaubt.                                                       |
| `InvalidAccessError`         | Das Objekt unterstützt die Operation oder das Argument nicht.                                                  |
| `TypeMismatchError`          | Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein.                                               |
| `SecurityError`              | Die Operation ist unsicher.                                                                                    |
| `NetworkError`               | Ein Netzwerkfehler ist aufgetreten.                                                                            |
| `AbortError`                 | Die Operation wurde abgebrochen.                                                                               |
| `URLMismatchError`           | Die angegebene URL stimmt nicht mit einer anderen URL überein.                                                 |
| `TimeoutError`               | Die Operation hat die Zeitüberschreitung erreicht.                                                             |
| `InvalidNodeTypeError`       | Der Knoten ist für diese Operation falsch oder hat einen falschen Vorfahren.                                   |
| `DataCloneError`             | Das Objekt kann nicht geklont werden.                                                                          |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
