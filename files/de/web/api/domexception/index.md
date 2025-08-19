---
title: DOMException
slug: Web/API/DOMException
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`DOMException`**-Schnittstelle stellt ein anormales Ereignis (eine **Ausnahme**) dar, das als Ergebnis eines Aufrufs einer Methode oder des Zugriffs auf eine Eigenschaft einer Web-API auftritt. Auf diese Weise werden Fehlerzustände in Web-APIs beschrieben.

Jede Ausnahme hat einen **Namen**, der ein kurzer "PascalCase"-String ist, der den Fehler oder die anormale Bedingung identifiziert.

`DOMException` ist ein {{Glossary("Serializable_object", "serialisierbares Objekt")}}, sodass es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Workers](/de/docs/Web/API/Worker) mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden kann.

## Konstruktor

- [`DOMException()`](/de/docs/Web/API/DOMException/DOMException)
  - : Gibt ein `DOMException`-Objekt mit einer angegebenen Nachricht und einem Namen zurück.

## Instanz-Eigenschaften

- [`DOMException.code`](/de/docs/Web/API/DOMException/code) {{deprecated_inline}} {{ReadOnlyInline}}
  - : Gibt einen der veralteten Fehlercodekonstanten oder `0` zurück, wenn keiner übereinstimmt.
- [`DOMException.message`](/de/docs/Web/API/DOMException/message) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine Nachricht oder Beschreibung darstellt, die mit dem angegebenen [Fehlernamen](#fehlernamen) verbunden ist.
- [`DOMException.name`](/de/docs/Web/API/DOMException/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen der Strings enthält, die mit einem [Fehlernamen](#fehlernamen) verbunden sind.

## Fehlernamen

Häufige Fehlernamen sind hier aufgeführt. Einige APIs definieren ihre eigenen Satz von Namen, daher ist dies nicht unbedingt eine vollständige Liste.

Die folgenden veralteten historischen Fehler haben keinen Fehlernamen, sondern nur einen veralteten konstanten Codewert und einen veralteten konstanten Namen:

- Veralteter Code-Wert: `2`, veralteter konstanter Name: `DOMSTRING_SIZE_ERR`
- Veralteter Code-Wert: `6`, veralteter konstanter Name: `NO_DATA_ALLOWED_ERR`
- Veralteter Code-Wert: `16`, veralteter konstanter Name: `VALIDATION_ERR`

> [!NOTE]
> Da die Fehler historisch durch einen numerischen Wert identifiziert wurden, der einer benannten Variablen zugewiesen wurde, die diesen Wert definiert hatte, geben einige der folgenden Einträge den veralteten Codewert und den konstanten Namen an, die in der Vergangenheit verwendet wurden.

- `IndexSizeError`
  - : Der Index befindet sich nicht im erlaubten Bereich. Zum Beispiel kann dies vom [`Range`](/de/docs/Web/API/Range)-Objekt ausgelöst werden. (Veralteter Code-Wert: `1` und veralteter konstanter Name: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : Die Knotenhierarchie ist nicht korrekt. (Veralteter Code-Wert: `3` und veralteter konstanter Name: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : Das Objekt befindet sich im falschen [`Document`](/de/docs/Web/API/Document). (Veralteter Code-Wert: `4` und veralteter konstanter Name: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : Der String enthält ungültige Zeichen. (Veralteter Code-Wert: `5` und veralteter konstanter Name: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : Das Objekt kann nicht geändert werden. (Veralteter Code-Wert: `7` und veralteter konstanter Name: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : Das Objekt kann hier nicht gefunden werden. (Veralteter Code-Wert: `8` und veralteter konstanter Name: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : Die Operation wird nicht unterstützt. (Veralteter Code-Wert: `9` und veralteter konstanter Name: `NOT_SUPPORTED_ERR`)
- `InUseAttributeError`
  - : Das Attribut ist in Benutzung. (Veralteter Code-Wert: `10` und veralteter konstanter Name: `INUSE_ATTRIBUTE_ERR`)
- `InvalidStateError`
  - : Das Objekt befindet sich in einem ungültigen Zustand. (Veralteter Code-Wert: `11` und veralteter konstanter Name: `INVALID_STATE_ERR`)
- `SyntaxError`
  - : Der String entsprach nicht dem erwarteten Muster. (Veralteter Code-Wert: `12` und veralteter konstanter Name: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : Das Objekt kann auf diese Weise nicht geändert werden. (Veralteter Code-Wert: `13` und veralteter konstanter Name: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : Die Operation ist durch Namespaces in XML nicht erlaubt. (Veralteter Code-Wert: `14` und veralteter konstanter Name: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : Das Objekt unterstützt die Operation oder das Argument nicht. (Veralteter Code-Wert: `15` und veralteter konstanter Name: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein. (Veralteter Code-Wert: `17` und veralteter konstanter Name: `TYPE_MISMATCH_ERR`). Dieser Wert ist veraltet; die JavaScript {{jsxref("TypeError")}}-Ausnahme wird jetzt anstelle einer `DOMException` mit diesem Wert ausgelöst.
- `SecurityError`
  - : Die Operation ist unsicher. (Veralteter Code-Wert: `18` und veralteter konstanter Name: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : Ein Netzwerkfehler ist aufgetreten. (Veralteter Code-Wert: `19` und veralteter konstanter Name: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : Die Operation wurde abgebrochen. (Veralteter Code-Wert: `20` und veralteter konstanter Name: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : Die angegebene URL stimmt nicht mit einer anderen URL überein. (Veralteter Code-Wert: `21` und veralteter konstanter Name: `URL_MISMATCH_ERR`)
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Das Kontingent wurde überschritten. (Veralteter Code-Wert: `22` und veralteter konstanter Name: `QUOTA_EXCEEDED_ERR`) Es ist eine richtige Schnittstelle, die von `DOMException` abgeleitet ist.
- `TimeoutError`
  - : Die Operation hat ein Timeout überschritten. (Veralteter Code-Wert: `23` und veralteter konstanter Name: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : Der Knoten ist für diese Operation falsch oder hat einen falschen Vorfahren. (Veralteter Code-Wert: `24` und veralteter konstanter Name: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : Das Objekt kann nicht geklont werden. (Veralteter Code-Wert: `25` und veralteter konstanter Name: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : Die Kodierungs- oder Dekodierungsoperation ist fehlgeschlagen (Kein veralteter Code-Wert und konstanter Name).
- `NotReadableError` {{experimental_inline}}
  - : Der Lesevorgang von Ein-/Ausgabe ist fehlgeschlagen (Kein veralteter Code-Wert und konstanter Name).
- `UnknownError` {{experimental_inline}}
  - : Die Operation ist aus einem unbekannten temporären Grund fehlgeschlagen (z.B. nicht genügend Arbeitsspeicher) (Kein veralteter Code-Wert und konstanter Name).
- `ConstraintError` {{experimental_inline}}
  - : Eine Mutationsoperation in einer Transaktion ist fehlgeschlagen, weil eine Einschränkung nicht erfüllt wurde (Kein veralteter Code-Wert und konstanter Name).
- `DataError` {{experimental_inline}}
  - : Die bereitgestellten Daten sind unzureichend (Kein veralteter Code-Wert und konstanter Name).
- `TransactionInactiveError` {{experimental_inline}}
  - : Eine Anforderung wurde gegen eine Transaktion gestellt, die derzeit nicht aktiv oder abgeschlossen ist (Kein veralteter Code-Wert und konstanter Name).
- `ReadOnlyError` {{experimental_inline}}
  - : Der Änderungsversuch wurde in einer "readonly"-Transaktion unternommen (Kein veralteter Code-Wert und konstanter Name).
- `VersionError` {{experimental_inline}}
  - : Es wurde versucht, eine Datenbank mit einer niedrigeren Version als der vorhandenen Version zu öffnen (Kein veralteter Code-Wert und konstanter Name).
- `OperationError` {{experimental_inline}}
  - : Die Operation ist aus einem spezifischen Grund fehlgeschlagen (Kein veralteter Code-Wert und konstanter Name).
- `NotAllowedError`
  - : Die Anforderung wird von der Benutzeroberfläche oder der Plattform im aktuellen Kontext nicht erlaubt, möglicherweise weil der Benutzer die Erlaubnis verweigert hat (Kein veralteter Code-Wert und konstanter Name).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `DOMException`](https://github.com/zloirock/core-js#domexception) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`DOMError`](/de/docs/Web/API/DOMError)
