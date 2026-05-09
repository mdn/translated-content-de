---
title: DOMError
slug: Web/API/DOMError
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{non-standard_header}}

Die **`DOMError`**-Schnittstelle beschreibt ein Fehlerobjekt, das einen Fehlernamen enthält.

## Instanzen-Eigenschaften

- [`DOMError.name`](/de/docs/Web/API/DOMError/name) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt einen String zurück, der einen der Fehlertypnamen darstellt (siehe unten).
- [`DOMError.message`](/de/docs/Web/API/DOMError/message) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt einen String zurück, der eine Nachricht oder Beschreibung enthält, die mit dem angegebenen Fehlertypnamen verbunden ist.

## Fehlertypen

| Typ                          | Beschreibung                                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | Der Index liegt nicht im zulässigen Bereich (z. B. ausgelöst in einem [`range`](/de/docs/Web/API/Range)-Objekt). |
| `HierarchyRequestError`      | Die Baumhierarchie der Knoten ist nicht korrekt.                                                                 |
| `WrongDocumentError`         | Das Objekt befindet sich im falschen [`document`](/de/docs/Web/API/Document).                                    |
| `InvalidCharacterError`      | Die Zeichenfolge enthält ungültige Zeichen.                                                                      |
| `NoModificationAllowedError` | Das Objekt kann nicht modifiziert werden.                                                                        |
| `NotFoundError`              | Das Objekt kann hier nicht gefunden werden.                                                                      |
| `NotSupportedError`          | Die Operation wird nicht unterstützt.                                                                            |
| `InvalidStateError`          | Das Objekt befindet sich in einem ungültigen Zustand.                                                            |
| `SyntaxError`                | Die Zeichenfolge stimmt nicht mit dem erwarteten Muster überein.                                                 |
| `InvalidModificationError`   | Das Objekt kann auf diese Weise nicht verändert werden.                                                          |
| `NamespaceError`             | Die Operation ist durch Namespaces in XML nicht erlaubt.                                                         |
| `InvalidAccessError`         | Das Objekt unterstützt die Operation oder das Argument nicht.                                                    |
| `TypeMismatchError`          | Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein.                                                 |
| `SecurityError`              | Die Operation ist unsicher.                                                                                      |
| `NetworkError`               | Ein Netzwerkfehler ist aufgetreten.                                                                              |
| `AbortError`                 | Die Operation wurde abgebrochen.                                                                                 |
| `URLMismatchError`           | Die angegebene URL stimmt nicht mit einer anderen URL überein.                                                   |
| `TimeoutError`               | Die Operation ist zeitlich abgelaufen.                                                                           |
| `InvalidNodeTypeError`       | Der Knoten ist für diese Operation nicht korrekt oder hat einen falschen Vorfahren.                              |
| `DataCloneError`             | Das Objekt kann nicht geklont werden.                                                                            |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
