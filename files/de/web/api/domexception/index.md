---
title: DOMException
slug: Web/API/DOMException
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("DOM") }}

Die **`DOMException`** Schnittstelle repräsentiert ein ungewöhnliches Ereignis (genannt **Ausnahme**), das als Ergebnis des Aufrufs einer Methode oder des Zugriffs auf eine Eigenschaft einer Web-API auftritt. So werden Fehlersituationen in Web-APIs beschrieben.

Jede Ausnahme hat einen **Namen**, der ein kurzer, in "PascalCase" stilisierter String ist, der den Fehler oder die ungewöhnliche Bedingung identifiziert.

`DOMException` ist ein {{Glossary("Serializable object")}}, daher kann es mit {{domxref("structuredClone()")}} geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit {{domxref("Worker.postMessage()", "postMessage()")}} kopiert werden.

## Konstruktor

- {{domxref("DOMException.DOMException()", "DOMException()")}}
  - : Gibt ein `DOMException`-Objekt mit einer angegebenen Nachricht und einem Namen zurück.

## Instanz-Eigenschaften

- {{domxref("DOMException.code")}} {{deprecated_inline}} {{ReadOnlyInline}}
  - : Gibt einen der veralteten Fehlercode-Konstanten zurück oder `0`, falls keine übereinstimmen.
- {{domxref("DOMException.message")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine Nachricht oder Beschreibung repräsentiert, die mit dem angegebenen [Fehlernamen](#fehlernamen) verbunden ist.
- {{domxref("DOMException.name")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen der mit einem [Fehlernamen](#fehlernamen) verbundenen Strings enthält.

## Fehlernamen

Häufige Fehlernamen sind hier aufgelistet. Einige APIs definieren ihre eigenen Namenssätze, daher ist dies möglicherweise keine vollständige Liste.

Beachten Sie, dass die folgenden veralteten historischen Fehler keinen Fehlernamen haben, sondern nur einen Legacy-Konstantenwert und einen Legacy-Konstantennamen:

- Legacy-Code-Wert: `2`, Legacy-Konstantenname: `DOMSTRING_SIZE_ERR`
- Legacy-Code-Wert: `6`, Legacy-Konstantenname: `NO_DATA_ALLOWED_ERR`
- Legacy-Code-Wert: `16`, Legacy-Konstantenname: `VALIDATION_ERR`

> [!NOTE]
> Da Fehler historisch durch einen numerischen Wert identifiziert wurden, der mit einer benannten Variablen korrespondierte, die diesen Wert hatte, deuten einige der folgenden Einträge den veralteten Code-Wert und den konstanten Namen an, die in der Vergangenheit verwendet wurden.

- `IndexSizeError`
  - : Der Index liegt nicht im erlaubten Bereich. Zum Beispiel kann dies vom {{ domxref("Range") }}-Objekt ausgelöst werden. (Legacy-Code-Wert: `1` und Legacy-Konstantenname: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : Die Knotenbaum-Hierarchie ist nicht korrekt. (Legacy-Code-Wert: `3` und Legacy-Konstantenname: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : Das Objekt befindet sich im falschen {{ domxref("Document") }}. (Legacy-Code-Wert: `4` und Legacy-Konstantenname: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : Der String enthält ungültige Zeichen. (Legacy-Code-Wert: `5` und Legacy-Konstantenname: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : Das Objekt kann nicht modifiziert werden. (Legacy-Code-Wert: `7` und Legacy-Konstantenname: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : Das Objekt kann hier nicht gefunden werden. (Legacy-Code-Wert: `8` und Legacy-Konstantenname: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : Die Operation wird nicht unterstützt. (Legacy-Code-Wert: `9` und Legacy-Konstantenname: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : Das Objekt befindet sich in einem ungültigen Zustand. (Legacy-Code-Wert: `11` und Legacy-Konstantenname: `INVALID_STATE_ERR`)
- `InUseAttributeError`
  - : Das Attribut ist in Gebrauch. (Legacy-Code-Wert: `10` und Legacy-Konstantenname: `INUSE_ATTRIBUTE_ERR`)
- `SyntaxError`
  - : Der String passt nicht zu dem erwarteten Muster. (Legacy-Code-Wert: `12` und Legacy-Konstantenname: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : Das Objekt kann nicht auf diese Weise modifiziert werden. (Legacy-Code-Wert: `13` und Legacy-Konstantenname: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : Die Operation ist durch Namespaces in XML nicht erlaubt. (Legacy-Code-Wert: `14` und Legacy-Konstantenname: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : Das Objekt unterstützt die Operation oder das Argument nicht. (Legacy-Code-Wert: `15` und Legacy-Konstantenname: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein. (Legacy-Code-Wert: `17` und Legacy-Konstantenname: `TYPE_MISMATCH_ERR`) Dieser Wert ist veraltet; die JavaScript-{{jsxref("TypeError")}}-Ausnahme wird nun anstelle einer `DOMException` mit diesem Wert ausgelöst.
- `SecurityError`
  - : Die Operation ist unsicher. (Legacy-Code-Wert: `18` und Legacy-Konstantenname: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : Ein Netzwerkfehler ist aufgetreten. (Legacy-Code-Wert: `19` und Legacy-Konstantenname: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : Die Operation wurde abgebrochen. (Legacy-Code-Wert: `20` und Legacy-Konstantenname: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : Die angegebene URL stimmt nicht mit einer anderen URL überein. (Legacy-Code-Wert: `21` und Legacy-Konstantenname: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : Das Quota wurde überschritten. (Legacy-Code-Wert: `22` und Legacy-Konstantenname: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError`
  - : Die Operation ist abgelaufen. (Legacy-Code-Wert: `23` und Legacy-Konstantenname: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : Der Knoten ist falsch oder hat einen falschen Vorfahren für diese Operation. (Legacy-Code-Wert: `24` und Legacy-Konstantenname: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : Das Objekt kann nicht geklont werden. (Legacy-Code-Wert: `25` und Legacy-Konstantenname: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : Die Kodier- oder Dekodieroperation ist fehlgeschlagen (Kein Legacy-Code-Wert und Konstantenname).
- `NotReadableError` {{experimental_inline}}
  - : Die Ein-/Ausgabe-Leseoperation ist fehlgeschlagen (Kein Legacy-Code-Wert und Konstantenname).
- `UnknownError` {{experimental_inline}}
  - : Die Operation ist aus einem unbekannten temporären Grund fehlgeschlagen (z.B. Speichermangel) (Kein Legacy-Code-Wert und Konstantenname).
- `ConstraintError` {{experimental_inline}}
  - : Eine Mutationsoperation in einer Transaktion ist fehlgeschlagen, weil eine Einschränkung nicht erfüllt wurde (Kein Legacy-Code-Wert und Konstantenname).
- `DataError` {{experimental_inline}}
  - : Zur Verfügung gestellte Daten sind unzureichend (Kein Legacy-Code-Wert und Konstantenname).
- `TransactionInactiveError` {{experimental_inline}}
  - : Eine Anfrage wurde gegen eine Transaktion gestellt, die derzeit nicht aktiv oder abgeschlossen ist (Kein Legacy-Code-Wert und Konstantenname).
- `ReadOnlyError` {{experimental_inline}}
  - : Die mutierende Operation wurde in einer "readonly"-Transaktion versucht (Kein Legacy-Code-Wert und Konstantenname).
- `VersionError` {{experimental_inline}}
  - : Es wurde versucht, eine Datenbank mit einer niedrigeren Version als der vorhandenen Version zu öffnen (Kein Legacy-Code-Wert und Konstantenname).
- `OperationError` {{experimental_inline}}
  - : Die Operation ist aus einem operationsspezifischen Grund fehlgeschlagen (Kein Legacy-Code-Wert und Konstantenname).
- `NotAllowedError`
  - : Die Anfrage wird vom Benutzeragenten oder der Plattform im aktuellen Kontext nicht zugelassen, möglicherweise, weil der Benutzer die Erlaubnis verweigerte (Kein Legacy-Code-Wert und Konstantenname).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `DOMException`](https://github.com/zloirock/core-js#domexception) ist verfügbar in [`core-js`](https://github.com/zloirock/core-js)
- {{ domxref("DOMError") }}
