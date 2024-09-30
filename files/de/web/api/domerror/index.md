---
title: DOMError
slug: Web/API/DOMError
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`DOMError`**-Schnittstelle beschreibt ein Fehlerobjekt, das einen Fehlernamen enthält.

## Instanzeigenschaften

- [`DOMError.name`](/de/docs/Web/API/DOMError/name) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der einen der Fehlertypnamen darstellt (siehe unten).
- [`DOMError.message`](/de/docs/Web/API/DOMError/message) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der eine Nachricht oder Beschreibung enthält, die mit dem angegebenen Fehlertypnamen verknüpft ist.

## Fehlertypen

| Typ                           | Beschreibung                                                                            |
| ----------------------------- | ----------------------------------------------------------------------------------------|
| `IndexSizeError`              | Der Index liegt nicht im erlaubten Bereich (z.B. ausgelöst in einem [`range`](/de/docs/Web/API/Range)-Objekt). |
| `HierarchyRequestError`       | Die Knotenhierarchie ist nicht korrekt.                                                 |
| `WrongDocumentError`          | Das Objekt befindet sich im falschen [`document`](/de/docs/Web/API/Document).                          |
| `InvalidCharacterError`       | Die Zeichenkette enthält ungültige Zeichen.                                             |
| `NoModificationAllowedError`  | Das Objekt kann nicht geändert werden.                                                  |
| `NotFoundError`               | Das Objekt kann hier nicht gefunden werden.                                             |
| `NotSupportedError`           | Die Operation wird nicht unterstützt.                                                   |
| `InvalidStateError`           | Das Objekt befindet sich in einem ungültigen Zustand.                                   |
| `SyntaxError`                 | Die Zeichenkette entsprach nicht dem erwarteten Muster.                                 |
| `InvalidModificationError`    | Das Objekt kann auf diese Weise nicht geändert werden.                                  |
| `NamespaceError`              | Die Operation ist von den XML-Namespaces nicht erlaubt.                                 |
| `InvalidAccessError`          | Das Objekt unterstützt die Operation oder das Argument nicht.                           |
| `TypeMismatchError`           | Der Typ des Objekts entspricht nicht dem erwarteten Typ.                                |
| `SecurityError`               | Die Operation ist unsicher.                                                             |
| `NetworkError`                | Ein Netzwerkfehler ist aufgetreten.                                                     |
| `AbortError`                  | Die Operation wurde abgebrochen.                                                        |
| `URLMismatchError`            | Die angegebene URL entspricht nicht einer anderen URL.                                  |
| `QuotaExceededError`          | Das Kontingent wurde überschritten.                                                     |
| `TimeoutError`                | Die Operation hat das Zeitlimit überschritten.                                          |
| `InvalidNodeTypeError`        | Der Knoten ist falsch oder hat einen falschen Vorgänger für diese Operation.            |
| `DataCloneError`              | Das Objekt kann nicht geklont werden.                                                   |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMException`](/de/docs/Web/API/DOMException)
