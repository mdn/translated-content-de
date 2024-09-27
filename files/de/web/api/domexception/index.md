---
title: DOMException
slug: Web/API/DOMException
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{ APIRef("DOM") }}

Die **`DOMException`**-Schnittstelle stellt ein ungewöhnliches Ereignis (eine **Ausnahme**) dar, das als Ergebnis eines Methodenaufrufs oder des Zugriffs auf eine Eigenschaft einer Web-API auftritt. Dies ist die Art und Weise, wie Fehlerbedingungen in Web-APIs beschrieben werden.

Jede Ausnahme hat einen **Name**, ein kurzer, im "PascalCase"-Stil gehaltener String, der den Fehler oder die außergewöhnliche Bedingung identifiziert.

`DOMException` ist ein [serialisierbares Objekt](/de/docs/Glossary/Serializable_object), sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

## Konstruktor

- [`DOMException()`](/de/docs/Web/API/DOMException/DOMException)
  - : Gibt ein `DOMException`-Objekt mit einer angegebenen Nachricht und einem Namen zurück.

## Instanzeigenschaften

- [`DOMException.code`](/de/docs/Web/API/DOMException/code) {{deprecated_inline}} {{ReadOnlyInline}}
  - : Gibt einen der veralteten Fehlercode-Konstanten zurück oder `0`, wenn keiner übereinstimmt.
- [`DOMException.message`](/de/docs/Web/API/DOMException/message) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine mit dem gegebenen [Fehlernamen](#fehlernamen) verbundene Nachricht oder Beschreibung darstellt.
- [`DOMException.name`](/de/docs/Web/API/DOMException/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine der mit einem [Fehlernamen](#fehlernamen) verbundenen Zeichenfolgen enthält.

## Fehlernamen

Häufige Fehlernamen sind hier aufgeführt. Einige APIs definieren ihre eigenen Namenssätze, sodass dies nicht unbedingt eine vollständige Liste ist.

Beachten Sie, dass die folgenden veralteten historischen Fehler keinen Fehlernamen haben, sondern stattdessen nur einen veralteten Konstantencode-Wert und einen veralteten Konstantennamen:

- Veralteter Code-Wert: `2`, veralteter Konstantenname: `DOMSTRING_SIZE_ERR`
- Veralteter Code-Wert: `6`, veralteter Konstantenname: `NO_DATA_ALLOWED_ERR`
- Veralteter Code-Wert: `16`, veralteter Konstantenname: `VALIDATION_ERR`

> [!NOTE]
> Da Fehler historisch gesehen durch einen numerischen Wert identifiziert wurden, der mit einer benannten Variablen übereinstimmte, die diesen Wert definiert, geben einige der folgenden Einträge den veralteten Code-Wert und den konstanten Namen an, die in der Vergangenheit verwendet wurden.

- `IndexSizeError`
  - : Der Index befindet sich nicht im erlaubten Bereich. Zum Beispiel kann dies vom [`Range`](/de/docs/Web/API/Range)-Objekt ausgelöst werden. (Veralteter Code-Wert: `1` und veralteter Konstantenname: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : Die Knotenbaum-Hierarchie ist nicht korrekt. (Veralteter Code-Wert: `3` und veralteter Konstantenname: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : Das Objekt befindet sich im falschen [`Document`](/de/docs/Web/API/Document). (Veralteter Code-Wert: `4` und veralteter Konstantenname: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : Der String enthält ungültige Zeichen. (Veralteter Code-Wert: `5` und veralteter Konstantenname: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : Das Objekt kann nicht modifiziert werden. (Veralteter Code-Wert: `7` und veralteter Konstantenname: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : Das Objekt kann hier nicht gefunden werden. (Veralteter Code-Wert: `8` und veralteter Konstantenname: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : Die Operation wird nicht unterstützt. (Veralteter Code-Wert: `9` und veralteter Konstantenname: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : Das Objekt befindet sich in einem ungültigen Zustand. (Veralteter Code-Wert: `11` und veralteter Konstantenname: `INVALID_STATE_ERR`)
- `InUseAttributeError`
  - : Das Attribut wird verwendet. (Veralteter Code-Wert: `10` und veralteter Konstantenname: `INUSE_ATTRIBUTE_ERR`)
- `SyntaxError`
  - : Der String entsprach nicht dem erwarteten Muster. (Veralteter Code-Wert: `12` und veralteter Konstantenname: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : Das Objekt kann auf diese Weise nicht modifiziert werden. (Veralteter Code-Wert: `13` und veralteter Konstantenname: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : Die Operation wird von Namespaces in XML nicht erlaubt. (Veralteter Code-Wert: `14` und veralteter Konstantenname: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : Das Objekt unterstützt die Operation oder das Argument nicht. (Veralteter Code-Wert: `15` und veralteter Konstantenname: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein. (Veralteter Code-Wert: `17` und veralteter Konstantenname: `TYPE_MISMATCH_ERR`) Dieser Wert ist veraltet; die JavaScript {{jsxref("TypeError")}}-Ausnahme wird jetzt anstelle einer `DOMException` mit diesem Wert ausgelöst.
- `SecurityError`
  - : Die Operation ist unsicher. (Veralteter Code-Wert: `18` und veralteter Konstantenname: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : Ein Netzwerkfehler ist aufgetreten. (Veralteter Code-Wert: `19` und veralteter Konstantenname: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : Die Operation wurde abgebrochen. (Veralteter Code-Wert: `20` und veralteter Konstantenname: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : Die angegebene URL stimmt nicht mit einer anderen URL überein. (Veralteter Code-Wert: `21` und veralteter Konstantenname: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : Das Kontingent wurde überschritten. (Veralteter Code-Wert: `22` und veralteter Konstantenname: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError`
  - : Die Operation ist abgelaufen. (Veralteter Code-Wert: `23` und veralteter Konstantenname: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : Der Knoten ist für diese Operation falsch oder hat einen falschen Vorfahren. (Veralteter Code-Wert: `24` und veralteter Konstantenname: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : Das Objekt kann nicht geklont werden. (Veralteter Code-Wert: `25` und veralteter Konstantenname: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : Die Kodierungs- oder Dekodierungsoperation ist fehlgeschlagen (Kein veralteter Code-Wert und Konstantenname).
- `NotReadableError` {{experimental_inline}}
  - : Die Ein-/Ausleseoperation ist fehlgeschlagen (Kein veralteter Code-Wert und Konstantenname).
- `UnknownError` {{experimental_inline}}
  - : Die Operation ist aus einem unbekannten vorübergehenden Grund fehlgeschlagen (z. B. nicht genügend Speicher) (Kein veralteter Code-Wert und Konstantenname).
- `ConstraintError` {{experimental_inline}}
  - : Eine Mutation in einer Transaktion ist fehlgeschlagen, weil eine Einschränkung nicht erfüllt wurde (Kein veralteter Code-Wert und Konstantenname).
- `DataError` {{experimental_inline}}
  - : Die bereitgestellten Daten sind unzureichend (Kein veralteter Code-Wert und Konstantenname).
- `TransactionInactiveError` {{experimental_inline}}
  - : Eine Anfrage wurde gegen eine Transaktion gestellt, die derzeit nicht aktiv ist oder beendet wurde (Kein veralteter Code-Wert und Konstantenname).
- `ReadOnlyError` {{experimental_inline}}
  - : Der Versuch einer Änderung in einer "read-only"-Transaktion wurde unternommen (Kein veralteter Code-Wert und Konstantenname).
- `VersionError` {{experimental_inline}}
  - : Es wurde versucht, eine Datenbank mit einer niedrigeren Version als der vorhandenen zu öffnen (Kein veralteter Code-Wert und Konstantenname).
- `OperationError` {{experimental_inline}}
  - : Die Operation ist aus einem spezifikationsspezifischen Grund fehlgeschlagen (Kein veralteter Code-Wert und Konstantenname).
- `NotAllowedError`
  - : Die Anfrage wird vom Benutzeragenten oder der Plattform im aktuellen Kontext nicht erlaubt, möglicherweise weil der Benutzer die Erlaubnis verweigert hat (Kein veralteter Code-Wert und Konstantenname).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `DOMException`](https://github.com/zloirock/core-js#domexception) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`DOMError`](/de/docs/Web/API/DOMError)
