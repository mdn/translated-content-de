---
title: DOMError
slug: Web/API/DOMError
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("DOM")}}{{Deprecated_Header}}

Die **`DOMError`**-Schnittstelle beschreibt ein Fehlerobjekt, das einen Fehlernamen enthält.

## Instanz-Eigenschaften

- {{domxref("DOMError.name")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der einen der Fehlertypnamen repräsentiert (siehe unten).
- {{domxref("DOMError.message")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt einen String zurück, der eine Nachricht oder Beschreibung darstellt, die mit dem angegebenen Fehlertypnamen verbunden ist.

## Fehlertypen

| Typ                           | Beschreibung                                                                              |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| `IndexSizeError`              | Der Index liegt nicht im zulässigen Bereich (z. B. ausgelöst in einem {{ domxref("range") }} Objekt). |
| `HierarchyRequestError`       | Die Knotenhierarchie ist nicht korrekt.                                                   |
| `WrongDocumentError`          | Das Objekt befindet sich im falschen {{ domxref("document") }}.                           |
| `InvalidCharacterError`       | Der String enthält ungültige Zeichen.                                                     |
| `NoModificationAllowedError`  | Das Objekt kann nicht modifiziert werden.                                                  |
| `NotFoundError`               | Das Objekt kann hier nicht gefunden werden.                                               |
| `NotSupportedError`           | Die Operation wird nicht unterstützt.                                                     |
| `InvalidStateError`           | Das Objekt befindet sich in einem ungültigen Zustand.                                     |
| `SyntaxError`                 | Der String entsprach nicht dem erwarteten Muster.                                         |
| `InvalidModificationError`    | Das Objekt kann nicht auf diese Weise modifiziert werden.                                 |
| `NamespaceError`              | Die Operation ist durch Namensräume in XML nicht erlaubt.                                 |
| `InvalidAccessError`          | Das Objekt unterstützt die Operation oder das Argument nicht.                             |
| `TypeMismatchError`           | Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein.                          |
| `SecurityError`               | Die Operation ist unsicher.                                                               |
| `NetworkError`                | Ein Netzwerkfehler ist aufgetreten.                                                        |
| `AbortError`                  | Die Operation wurde abgebrochen.                                                          |
| `URLMismatchError`            | Die angegebene URL stimmt nicht mit einer anderen URL überein.                            |
| `QuotaExceededError`          | Das Kontingent wurde überschritten.                                                       |
| `TimeoutError`                | Die Operation hat ein Timeout verursacht.                                                 |
| `InvalidNodeTypeError`        | Der Knoten ist für diese Operation falsch oder hat einen falschen Vorfahren.             |
| `DataCloneError`              | Das Objekt kann nicht geklont werden.                                                     |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("DOMException") }}
