---
title: DOMError
slug: Web/API/DOMError
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{non-standard_header}}

Die **`DOMError`**-Schnittstelle beschreibt ein Fehlerobjekt, das einen Fehlernamen enthält.

## Instanz-Eigenschaften

- [`DOMError.name`](/de/docs/Web/API/DOMError/name) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt eine Zeichenfolge zurück, die einen der Fehlertypnamen beschreibt (siehe unten).
- [`DOMError.message`](/de/docs/Web/API/DOMError/message) {{ReadOnlyInline}} {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt eine Zeichenfolge zurück, die eine Nachricht oder Beschreibung enthält, die dem gegebenen Fehlertypnamen zugeordnet ist.

## Fehlertypen

| Typ                          | Beschreibung                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `IndexSizeError`             | Der Index liegt nicht im erlaubten Bereich (z. B. ausgelöst in einem [`range`](/de/docs/Web/API/Range)-Objekt). |
| `HierarchyRequestError`      | Die Knotenhierarchie ist nicht korrekt.                                                                         |
| `WrongDocumentError`         | Das Objekt befindet sich im falschen [`document`](/de/docs/Web/API/Document).                                   |
| `InvalidCharacterError`      | Die Zeichenkette enthält ungültige Zeichen.                                                                     |
| `NoModificationAllowedError` | Das Objekt kann nicht geändert werden.                                                                          |
| `NotFoundError`              | Das Objekt kann hier nicht gefunden werden.                                                                     |
| `NotSupportedError`          | Die Operation wird nicht unterstützt.                                                                           |
| `InvalidStateError`          | Das Objekt befindet sich in einem ungültigen Zustand.                                                           |
| `SyntaxError`                | Die Zeichenkette hat nicht dem erwarteten Muster entsprochen.                                                   |
| `InvalidModificationError`   | Das Objekt kann nicht auf diese Weise geändert werden.                                                          |
| `NamespaceError`             | Die Operation ist durch Namespaces in XML nicht erlaubt.                                                        |
| `InvalidAccessError`         | Das Objekt unterstützt die Operation oder das Argument nicht.                                                   |
| `TypeMismatchError`          | Der Typ des Objekts entspricht nicht dem erwarteten Typ.                                                        |
| `SecurityError`              | Die Operation ist unsicher.                                                                                     |
| `NetworkError`               | Ein Netzwerkfehler ist aufgetreten.                                                                             |
| `AbortError`                 | Die Operation wurde abgebrochen.                                                                                |
| `URLMismatchError`           | Die angegebene URL stimmt nicht mit einer anderen URL überein.                                                  |
| `TimeoutError`               | Die Operation hat das Zeitlimit überschritten.                                                                  |
| `InvalidNodeTypeError`       | Der Knoten ist für diese Operation falsch oder hat einen falschen Vorfahren.                                    |
| `DataCloneError`             | Das Objekt kann nicht geklont werden.                                                                           |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
