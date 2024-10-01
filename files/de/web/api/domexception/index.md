---
title: DOMException
slug: Web/API/DOMException
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{ APIRef("DOM") }}

Die **`DOMException`**-Schnittstelle repräsentiert ein anormales Ereignis (eine **Exception**), das auftritt, wenn eine Methode aufgerufen oder eine Eigenschaft einer Web-API aufgerufen wird. Auf diese Weise werden Fehlerbedingungen in Web-APIs beschrieben.

Jede Exception hat einen **Namen**, der ein kurzer "PascalCase"-String ist, der den Fehler oder die anormale Bedingung identifiziert.

`DOMException` ist ein {{Glossary("Serializable_object", "serialisierbares Objekt")}}, daher kann es mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder zwischen [Arbeitern](/de/docs/Web/API/Worker) mit [`postMessage()`](/de/docs/Web/API/Worker/postMessage) kopiert werden.

## Konstruktor

- [`DOMException()`](/de/docs/Web/API/DOMException/DOMException)
  - : Gibt ein `DOMException`-Objekt mit einer spezifizierten Nachricht und einem Namen zurück.

## Instanzeigenschaften

- [`DOMException.code`](/de/docs/Web/API/DOMException/code) {{deprecated_inline}} {{ReadOnlyInline}}
  - : Gibt einen der alten Fehlercode-Konstanten oder `0` zurück, wenn keiner übereinstimmt.
- [`DOMException.message`](/de/docs/Web/API/DOMException/message) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine Nachricht oder Beschreibung enthält, die mit dem gegebenen [Fehlernamen](#fehlernamen) assoziiert ist.
- [`DOMException.name`](/de/docs/Web/API/DOMException/name) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der einen der Strings enthält, die mit einem [Fehlernamen](#fehlernamen) assoziiert sind.

## Fehlernamen

Hier sind einige häufige Fehlernamen aufgelistet. Einige APIs definieren ihre eigenen Namenssets, sodass dies nicht unbedingt eine vollständige Liste ist.

Beachten Sie, dass die folgenden veralteten historischen Fehler keinen Fehlernamen haben, sondern nur einen alten konstanten Codewert und einen alten konstanten Namen:

- Alter Codewert: `2`, alter konstanter Name: `DOMSTRING_SIZE_ERR`
- Alter Codewert: `6`, alter konstanter Name: `NO_DATA_ALLOWED_ERR`
- Alter Codewert: `16`, alter konstanter Name: `VALIDATION_ERR`

> [!NOTE]
> Da historisch die Fehler durch einen numerischen Wert identifiziert wurden, der mit einer benannten Variablen korrespondierte, die diesen Wert definiert hat, geben einige der Einträge unten den alten Zahlenwert und den konstanten Namen an, der in der Vergangenheit verwendet wurde.

- `IndexSizeError`
  - : Der Index liegt nicht im zulässigen Bereich. Beispielweise kann dies vom [`Range`](/de/docs/Web/API/Range)-Objekt ausgelöst werden. (Alter Codewert: `1` und alter konstanter Name: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : Die Baumstruktur des Knotens ist nicht korrekt. (Alter Codewert: `3` und alter konstanter Name: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : Das Objekt befindet sich im falschen [`Document`](/de/docs/Web/API/Document). (Alter Codewert: `4` und alter konstanter Name: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : Der String enthält ungültige Zeichen. (Alter Codewert: `5` und alter konstanter Name: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : Das Objekt kann nicht verändert werden. (Alter Codewert: `7` und alter konstanter Name: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : Das Objekt kann hier nicht gefunden werden. (Alter Codewert: `8` und alter konstanter Name: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : Die Operation wird nicht unterstützt. (Alter Codewert: `9` und alter konstanter Name: `NOT_SUPPORTED_ERR`)
- `InvalidStateError`
  - : Das Objekt befindet sich in einem ungültigen Zustand. (Alter Codewert: `11` und alter konstanter Name: `INVALID_STATE_ERR`)
- `InUseAttributeError`
  - : Das Attribut wird bereits verwendet. (Alter Codewert: `10` und alter konstanter Name: `INUSE_ATTRIBUTE_ERR`)
- `SyntaxError`
  - : Der String entsprach nicht dem erwarteten Muster. (Alter Codewert: `12` und alter konstanter Name: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : Das Objekt kann auf diese Weise nicht verändert werden. (Alter Codewert: `13` und alter konstanter Name: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : Die Operation ist nach Namespaces in XML nicht zulässig. (Alter Codewert: `14` und alter konstanter Name: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : Das Objekt unterstützt die Operation oder das Argument nicht. (Alter Codewert: `15` und alter konstanter Name: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : Der Typ des Objekts stimmt nicht mit dem erwarteten Typ überein. (Alter Codewert: `17` und alter konstanter Name: `TYPE_MISMATCH_ERR`) Dieser Wert ist veraltet; die JavaScript {{jsxref("TypeError")}}-Exception wird jetzt anstelle einer `DOMException` mit diesem Wert ausgelöst.
- `SecurityError`
  - : Die Operation ist unsicher. (Alter Codewert: `18` und alter konstanter Name: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : Ein Netzwerkfehler ist aufgetreten. (Alter Codewert: `19` und alter konstanter Name: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : Die Operation wurde abgebrochen. (Alter Codewert: `20` und alter konstanter Name: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : Die angegebene URL stimmt nicht mit einer anderen URL überein. (Alter Codewert: `21` und alter konstanter Name: `URL_MISMATCH_ERR`)
- `QuotaExceededError` {{experimental_inline}}
  - : Das Kontingent wurde überschritten. (Alter Codewert: `22` und alter konstanter Name: `QUOTA_EXCEEDED_ERR`)
- `TimeoutError`
  - : Die Operation hat das Zeitlimit überschritten. (Alter Codewert: `23` und alter konstanter Name: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : Der Knoten ist falsch oder hat einen falschen Vorfahren für diese Operation. (Alter Codewert: `24` und alter konstanter Name: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : Das Objekt kann nicht geklont werden. (Alter Codewert: `25` und alter konstanter Name: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : Die Kodierungs- oder Dekodierungsoperation ist fehlgeschlagen (Kein alter Codewert und konstanter Name).
- `NotReadableError` {{experimental_inline}}
  - : Die Eingabe-/Ausgabe-Leseoperation ist fehlgeschlagen (Kein alter Codewert und konstanter Name).
- `UnknownError` {{experimental_inline}}
  - : Die Operation ist aus einem unbekannten vorübergehenden Grund fehlgeschlagen (z. B. Speichermangel) (Kein alter Codewert und konstanter Name).
- `ConstraintError` {{experimental_inline}}
  - : Eine Änderungsoperation in einer Transaktion ist fehlgeschlagen, da eine Einschränkung nicht erfüllt wurde (Kein alter Codewert und konstanter Name).
- `DataError` {{experimental_inline}}
  - : Die bereitgestellten Daten sind unzureichend (Kein alter Codewert und konstanter Name).
- `TransactionInactiveError` {{experimental_inline}}
  - : Eine Anfrage wurde gegen eine Transaktion gestellt, die derzeit nicht aktiv ist oder abgeschlossen ist (Kein alter Codewert und konstanter Name).
- `ReadOnlyError` {{experimental_inline}}
  - : Die Versuch einer Änderungsoperation wurde in einer "readonly"-Transaktion gemacht (Kein alter Codewert und konstanter Name).
- `VersionError` {{experimental_inline}}
  - : Es wurde versucht, eine Datenbank mit einer niedrigeren Version als die vorhandene Version zu öffnen (Kein alter Codewert und konstanter Name).
- `OperationError` {{experimental_inline}}
  - : Die Operation ist aus einem spezifikationsspezifischen Grund fehlgeschlagen (Kein alter Codewert und konstanter Name).
- `NotAllowedError`
  - : Die Anfrage wird vom Benutzeragent oder der Plattform im aktuellen Kontext nicht erlaubt, möglicherweise weil der Benutzer die Erlaubnis verweigert hat (Kein alter Codewert und konstanter Name).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill von `DOMException`](https://github.com/zloirock/core-js#domexception) ist in [`core-js`](https://github.com/zloirock/core-js) verfügbar
- [`DOMError`](/de/docs/Web/API/DOMError)
