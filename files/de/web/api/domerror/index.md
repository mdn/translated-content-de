---
title: DOMError
slug: Web/API/DOMError
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Das **`DOMError`**-Interface beschreibt ein Fehlerobjekt, das einen Fehlernamen enthält.

## Instanz-Eigenschaften

- [`DOMError.name`](/de/docs/Web/API/DOMError/name) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der einen der Fehlertypenamen repräsentiert (siehe unten).
- [`DOMError.message`](/de/docs/Web/API/DOMError/message) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der eine Nachricht oder Beschreibung enthält, die mit dem angegebenen Fehlertypnamen verknüpft ist.

## Fehlertypen

| Typ                          | Beschreibung                                                                                                   |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | Der Index liegt nicht im erlaubten Bereich (z. B. geworfen in einem [`range`](/de/docs/Web/API/Range)-Objekt). |
| `HierarchyRequestError`      | Die Knotenhierarchie ist nicht korrekt.                                                                        |
| `WrongDocumentError`         | Das Objekt befindet sich im falschen [`document`](/de/docs/Web/API/Document).                                  |
| `InvalidCharacterError`      | Die Zeichenkette enthält ungültige Zeichen.                                                                    |
| `NoModificationAllowedError` | Das Objekt darf nicht modifiziert werden.                                                                      |
| `NotFoundError`              | Das Objekt kann hier nicht gefunden werden.                                                                    |
| `NotSupportedError`          | Die Operation wird nicht unterstützt.                                                                          |
| `InvalidStateError`          | Das Objekt befindet sich in einem ungültigen Zustand.                                                          |
| `SyntaxError`                | Die Zeichenkette hat nicht das erwartete Muster.                                                               |
| `InvalidModificationError`   | Das Objekt kann auf diese Weise nicht modifiziert werden.                                                      |
| `NamespaceError`             | Die Operation ist durch Namespaces in XML nicht erlaubt.                                                       |
| `InvalidAccessError`         | Das Objekt unterstützt die Operation oder das Argument nicht.                                                  |
| `TypeMismatchError`          | Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein.                                               |
| `SecurityError`              | Die Operation ist unsicher.                                                                                    |
| `NetworkError`               | Es ist ein Netzwerkfehler aufgetreten.                                                                         |
| `AbortError`                 | Die Operation wurde abgebrochen.                                                                               |
| `URLMismatchError`           | Die angegebene URL stimmt nicht mit einer anderen URL überein.                                                 |
| `QuotaExceededError`         | Das Kontingent wurde überschritten.                                                                            |
| `TimeoutError`               | Die Operation ist abgelaufen.                                                                                  |
| `InvalidNodeTypeError`       | Der Knoten ist inkorrekt oder hat einen inkorrekten Vorgänger für diese Operation.                             |
| `DataCloneError`             | Das Objekt kann nicht geklont werden.                                                                          |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
