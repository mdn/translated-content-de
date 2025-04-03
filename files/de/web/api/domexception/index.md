---
title: DOMException
slug: Web/API/DOMException
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`DOMException`** Schnittstelle repräsentiert ein ungewöhnliches Ereignis (genannt **Exception**), das als Ergebnis eines Methodenaufrufs oder des Zugriffs auf eine Eigenschaft einer Web-API auftritt. So werden Fehlerbedingungen in Web-APIs beschrieben.

Jede Exception hat einen **Namen**, der ein kurzer String im "PascalCase"-Stil ist und den Fehler oder das ungewöhnliche Ereignis identifiziert.

`DOMException` ist ein {{Glossary("Serializable_object", "serielles Objekt")}}, daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

## Konstruktor

- [`DOMException()`](/de/docs/Web/API/DOMException/DOMException)
  - : Gibt ein `DOMException`-Objekt mit einer angegebenen Nachricht und einem Namen zurück.

## Instanzeigenschaften

- [`DOMException.code`](/de/docs/Web/API/DOMException/code) {{deprecated_inline}} {{ReadOnlyInline}}
  - : Gibt einen der veralteten Fehlercode-Konstanten zurück, oder `0`, wenn keine zutrifft.
- [`DOMException.message`](/de/docs/Web/API/DOMException/message) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine Nachricht oder Beschreibung im Zusammenhang mit dem gegebenen [Fehlernamen](#fehlernamen) darstellt.
- [`DOMException.name`](/de/docs/Web/API/DOMException/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen der Strings enthält, die mit einem [Fehlernamen](#fehlernamen) assoziiert sind.

## Fehlernamen

Häufige Fehlernamen sind hier aufgeführt. Einige APIs definieren ihre eigenen Namenssätze, daher ist dies möglicherweise keine vollständige Liste.

Beachten Sie, dass die folgenden veralteten historischen Fehler keinen Fehlernamen haben, sondern stattdessen nur einen veralteten konstanten Codewert und einen veralteten konstanten Namen:

- Veralteter Codewert: `2`, veralteter konstanter Name: `DOMSTRING_SIZE_ERR`
- Veralteter Codewert: `6`, veralteter konstanter Name: `NO_DATA_ALLOWED_ERR`
- Veralteter Codewert: `16`, veralteter konstanter Name: `VALIDATION_ERR`

> [!NOTE]
> Da historisch die Fehler durch einen numerischen Wert identifiziert wurden, der mit einer benannten Variablen übereinstimmte, die diesen Wert definiert hat, geben einige der folgenden Einträge den veralteten Codewert und den konstanten Namen an, die in der Vergangenheit verwendet wurden.

- `IndexSizeError`
  - : Der Index liegt nicht im erlaubten Bereich. Dies kann zum Beispiel vom [`Range`](/de/docs/Web/API/Range)-Objekt ausgelöst werden. (Veralteter Codewert: `1` und veralteter konstanter Name: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : Die Knotenhierarchie ist nicht korrekt. (Veralteter Codewert: `3` und veralteter konstanter Name: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : Das Objekt ist im falschen [`Document`](/de/docs/Web/API/Document). (Veralteter Codewert: `4` und veralteter konstanter Name: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : Der String enthält ungültige Zeichen. (Veralteter Codewert: `5` und veralteter konstanter Name: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : Das Objekt kann nicht modifiziert werden. (Veralteter Codewert: `7` und veralteter konstanter Name: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : Das Objekt kann hier nicht gefunden werden. (Veralteter Codewert: `8` und veralteter konstanter Name: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : Die Operation wird nicht unterstützt. (Veralteter Codewert: `9` und veralteter konstanter Name: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : Das Objekt befindet sich in einem ungültigen Zustand. (Veralteter Codewert: `11` und veralteter konstanter Name: `INVALID_STATE_ERR`)
- `InUseAttributeError`
  - : Das Attribut wird verwendet. (Veralteter Codewert: `10` und veralteter konstanter Name: `INUSE_ATTRIBUTE_ERR`)
- `SyntaxError`
  - : Der String entsprach nicht dem erwarteten Muster. (Veralteter Codewert: `12` und veralteter konstanter Name: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : Das Objekt kann auf diese Weise nicht modifiziert werden. (Veralteter Codewert: `13` und veralteter konstanter Name: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : Die Operation ist durch Namespaces in XML nicht erlaubt. (Veralteter Codewert: `14` und veralteter konstanter Name: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : Das Objekt unterstützt die Operation oder das Argument nicht. (Veralteter Codewert: `15` und veralteter konstanter Name: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein. (Veralteter Codewert: `17` und veralteter konstanter Name: `TYPE_MISMATCH_ERR`) Dieser Wert ist veraltet; die JavaScript {{jsxref("TypeError")}}-Exception wird jetzt statt einer `DOMException` mit diesem Wert ausgelöst.
- `SecurityError`
  - : Die Operation ist unsicher. (Veralteter Codewert: `18` und veralteter konstanter Name: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : Ein Netzwerkfehler ist aufgetreten. (Veralteter Codewert: `19` und veralteter konstanter Name: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : Die Operation wurde abgebrochen. (Veralteter Codewert: `20` und veralteter konstanter Name: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : Die angegebene URL stimmt nicht mit einer anderen URL überein. (Veralteter Codewert: `21` und veralteter konstanter Name: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : Das Kontingent wurde überschritten. (Veralteter Codewert: `22` und veralteter konstanter Name: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError`
  - : Die Operation hat die Zeitüberschreitung erreicht. (Veralteter Codewert: `23` und veralteter konstanter Name: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : Der Knoten ist für diese Operation falsch oder hat einen falschen Vorfahren. (Veralteter Codewert: `24` und veralteter konstanter Name: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : Das Objekt kann nicht geklont werden. (Veralteter Codewert: `25` und veralteter konstanter Name: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : Der Codierungs- oder Dekodierungsvorgang ist fehlgeschlagen (Kein veralteter Codewert und konstanter Name).
- `NotReadableError` {{experimental_inline}}
  - : Die Eingabe-/Ausleseoperation ist fehlgeschlagen (Kein veralteter Codewert und konstanter Name).
- `UnknownError` {{experimental_inline}}
  - : Die Operation ist aus einem unbekannten vorübergehenden Grund fehlgeschlagen (z. B. nicht genügend Speicher) (Kein veralteter Codewert und konstanter Name).
- `ConstraintError` {{experimental_inline}}
  - : Eine Mutationsoperation in einer Transaktion ist fehlgeschlagen, weil eine Bedingung nicht erfüllt war (Kein veralteter Codewert und konstanter Name).
- `DataError` {{experimental_inline}}
  - : Die bereitgestellten Daten sind unzureichend (Kein veralteter Codewert und konstanter Name).
- `TransactionInactiveError` {{experimental_inline}}
  - : Eine Anforderung wurde gegen eine Transaktion gestellt, die derzeit nicht aktiv oder abgeschlossen ist (Kein veralteter Codewert und konstanter Name).
- `ReadOnlyError` {{experimental_inline}}
  - : Der Versuch einer mutierenden Operation wurde in einer "readonly"-Transaktion unternommen (Kein veralteter Codewert und konstanter Name).
- `VersionError` {{experimental_inline}}
  - : Es wurde versucht, eine Datenbank mit einer niedrigeren Version als der bestehenden Version zu öffnen (Kein veralteter Codewert und konstanter Name).
- `OperationError` {{experimental_inline}}
  - : Die Operation ist aus einem spezifischen Grund fehlgeschlagen (Kein veralteter Codewert und konstanter Name).
- `NotAllowedError`
  - : Die Anforderung wird vom Benutzeragenten oder der Plattform im aktuellen Kontext nicht erlaubt, möglicherweise weil der Benutzer die Erlaubnis verweigert hat (Kein veralteter Codewert und konstanter Name).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `DOMException`](https://github.com/zloirock/core-js#domexception) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar.
- [`DOMError`](/de/docs/Web/API/DOMError)
