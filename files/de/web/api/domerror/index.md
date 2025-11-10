---
title: DOMError
slug: Web/API/DOMError
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`DOMError`**-Schnittstelle beschreibt ein Fehlerobjekt, das einen Fehlernamen enthält.

## Instanzeigenschaften

- [`DOMError.name`](/de/docs/Web/API/DOMError/name) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der einen der Fehlernamen beschreibt (siehe unten).
- [`DOMError.message`](/de/docs/Web/API/DOMError/message) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der eine mit dem gegebenen Fehlernamen verbundene Nachricht oder Beschreibung darstellt.

## Fehlertypen

| Typ                          | Beschreibung                                                                                                   |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | Der Index liegt nicht im erlaubten Bereich (z.B. ausgelöst in einem [`range`](/de/docs/Web/API/Range)-Objekt). |
| `HierarchyRequestError`      | Die Baumhierarchie der Knoten ist nicht korrekt.                                                               |
| `WrongDocumentError`         | Das Objekt befindet sich im falschen [`document`](/de/docs/Web/API/Document).                                  |
| `InvalidCharacterError`      | Der String enthält ungültige Zeichen.                                                                          |
| `NoModificationAllowedError` | Das Objekt kann nicht verändert werden.                                                                        |
| `NotFoundError`              | Das Objekt kann hier nicht gefunden werden.                                                                    |
| `NotSupportedError`          | Die Operation wird nicht unterstützt.                                                                          |
| `InvalidStateError`          | Das Objekt befindet sich in einem ungültigen Zustand.                                                          |
| `SyntaxError`                | Der String entsprach nicht dem erwarteten Muster.                                                              |
| `InvalidModificationError`   | Das Objekt kann nicht auf diese Weise geändert werden.                                                         |
| `NamespaceError`             | Die Operation ist durch Namespaces in XML nicht erlaubt.                                                       |
| `InvalidAccessError`         | Das Objekt unterstützt die Operation oder das Argument nicht.                                                  |
| `TypeMismatchError`          | Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein.                                               |
| `SecurityError`              | Die Operation ist unsicher.                                                                                    |
| `NetworkError`               | Ein Netzwerkfehler ist aufgetreten.                                                                            |
| `AbortError`                 | Die Operation wurde abgebrochen.                                                                               |
| `URLMismatchError`           | Die angegebene URL stimmt nicht mit einer anderen URL überein.                                                 |
| `TimeoutError`               | Die Operation hat die Zeitgrenze überschritten.                                                                |
| `InvalidNodeTypeError`       | Der Knoten ist für diese Operation falsch oder hat einen falschen Vorfahren.                                   |
| `DataCloneError`             | Das Objekt kann nicht geklont werden.                                                                          |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
