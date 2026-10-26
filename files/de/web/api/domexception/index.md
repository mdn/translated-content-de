---
title: DOMException
slug: Web/API/DOMException
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die Schnittstelle **`DOMException`** repräsentiert ein außergewöhnliches Ereignis (eine sogenannte **Ausnahme**), das beim Aufrufen einer Methode oder beim Zugriff auf eine Eigenschaft einer Web-API auftritt. Auf diese Weise werden Fehlerzustände in Web-APIs beschrieben.

Jede Ausnahme hat einen **Namen**: eine kurze Zeichenfolge im „PascalCase“-Stil, die den Fehler oder den außergewöhnlichen Zustand identifiziert.

`DOMException` ist ein {{Glossary("Serializable_object", "serialisierbares Objekt")}}. Es kann daher mit [`structuredClone()`](/de/docs/Web/API/Window/structuredClone) geklont oder mithilfe von [`postMessage()`](/de/docs/Web/API/Worker/postMessage) zwischen [Workern](/de/docs/Web/API/Worker) kopiert werden.

## Konstruktor

- [`DOMException()`](/de/docs/Web/API/DOMException/DOMException)
  - : Gibt ein `DOMException`-Objekt mit einer angegebenen Nachricht und einem angegebenen Namen zurück.

## Instanzeigenschaften

- [`DOMException.code`](/de/docs/Web/API/DOMException/code) {{deprecated_inline}} {{ReadOnlyInline}}
  - : Gibt eine der veralteten Fehlercode-Konstanten zurück oder `0`, falls keine zutrifft.
- [`DOMException.message`](/de/docs/Web/API/DOMException/message) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die eine Nachricht oder Beschreibung zum jeweiligen [Fehlernamen](#fehlernamen) enthält.
- [`DOMException.name`](/de/docs/Web/API/DOMException/name) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die einem der [Fehlernamen](#fehlernamen) entspricht.

## Fehlernamen

Hier sind häufige Fehlernamen aufgeführt. Einige APIs definieren eigene Gruppen von Namen, daher ist diese Liste nicht unbedingt vollständig.

Die folgenden veralteten historischen Fehler haben keinen Fehlernamen, sondern nur einen veralteten konstanten Codewert und einen veralteten Konstantennamen:

- Veralteter Codewert: `2`, veralteter Konstantenname: `DOMSTRING_SIZE_ERR`
- Veralteter Codewert: `6`, veralteter Konstantenname: `NO_DATA_ALLOWED_ERR`
- Veralteter Codewert: `16`, veralteter Konstantenname: `VALIDATION_ERR`

> [!NOTE]
> Da Fehler historisch anhand eines numerischen Werts identifiziert wurden, der einer benannten Variablen mit diesem Wert entsprach, sind bei einigen der folgenden Einträge der früher verwendete Codewert und Konstantenname angegeben.

- `IndexSizeError`
  - : Der Index liegt außerhalb des zulässigen Bereichs. Diese Ausnahme kann beispielsweise vom [`Range`](/de/docs/Web/API/Range)-Objekt ausgelöst werden. (Veralteter Codewert: `1` und veralteter Konstantenname: `INDEX_SIZE_ERR`)
- `HierarchyRequestError`
  - : Die Hierarchie des Knotenbaums ist nicht korrekt. (Veralteter Codewert: `3` und veralteter Konstantenname: `HIERARCHY_REQUEST_ERR`)
- `WrongDocumentError`
  - : Das Objekt befindet sich im falschen [`Document`](/de/docs/Web/API/Document). (Veralteter Codewert: `4` und veralteter Konstantenname: `WRONG_DOCUMENT_ERR`)
- `InvalidCharacterError`
  - : Die Zeichenfolge enthält ungültige Zeichen. (Veralteter Codewert: `5` und veralteter Konstantenname: `INVALID_CHARACTER_ERR`)
- `NoModificationAllowedError`
  - : Das Objekt kann nicht verändert werden. (Veralteter Codewert: `7` und veralteter Konstantenname: `NO_MODIFICATION_ALLOWED_ERR`)
- `NotFoundError`
  - : Das Objekt kann hier nicht gefunden werden. (Veralteter Codewert: `8` und veralteter Konstantenname: `NOT_FOUND_ERR`)
- `NotSupportedError`
  - : Die Operation wird nicht unterstützt. (Veralteter Codewert: `9` und veralteter Konstantenname: `NOT_SUPPORTED_ERR`)
- `InUseAttributeError`
  - : Das Attribut wird bereits verwendet. (Veralteter Codewert: `10` und veralteter Konstantenname: `INUSE_ATTRIBUTE_ERR`)
- `InvalidStateError`
  - : Das Objekt befindet sich in einem ungültigen Zustand. (Veralteter Codewert: `11` und veralteter Konstantenname: `INVALID_STATE_ERR`)
- `SyntaxError`
  - : Die Zeichenfolge entspricht nicht dem erwarteten Muster. (Veralteter Codewert: `12` und veralteter Konstantenname: `SYNTAX_ERR`)
- `InvalidModificationError`
  - : Das Objekt kann nicht auf diese Weise verändert werden. (Veralteter Codewert: `13` und veralteter Konstantenname: `INVALID_MODIFICATION_ERR`)
- `NamespaceError`
  - : Die Operation ist gemäß „Namespaces in XML“ nicht zulässig. (Veralteter Codewert: `14` und veralteter Konstantenname: `NAMESPACE_ERR`)
- `InvalidAccessError`
  - : Das Objekt unterstützt die Operation oder das Argument nicht. (Veralteter Codewert: `15` und veralteter Konstantenname: `INVALID_ACCESS_ERR`)
- `TypeMismatchError` {{deprecated_inline}}
  - : Der Typ des Objekts entspricht nicht dem erwarteten Typ. (Veralteter Codewert: `17` und veralteter Konstantenname: `TYPE_MISMATCH_ERR`) Dieser Wert ist veraltet; stattdessen wird nun die JavaScript-Ausnahme {{jsxref("TypeError")}} und keine `DOMException` mit diesem Wert ausgelöst.
- `SecurityError`
  - : Die Operation ist unsicher. (Veralteter Codewert: `18` und veralteter Konstantenname: `SECURITY_ERR`)
- `NetworkError` {{experimental_inline}}
  - : Ein Netzwerkfehler ist aufgetreten. (Veralteter Codewert: `19` und veralteter Konstantenname: `NETWORK_ERR`)
- `AbortError` {{experimental_inline}}
  - : Die Operation wurde abgebrochen. (Veralteter Codewert: `20` und veralteter Konstantenname: `ABORT_ERR`)
- `URLMismatchError` {{experimental_inline}}
  - : Die angegebene URL stimmt nicht mit einer anderen URL überein. (Veralteter Codewert: `21` und veralteter Konstantenname: `URL_MISMATCH_ERR`)
- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Das Kontingent wurde überschritten. (Veralteter Codewert: `22` und veralteter Konstantenname: `QUOTA_EXCEEDED_ERR`) Hierbei handelt es sich um eine eigenständige Schnittstelle, die von `DOMException` abgeleitet ist.
- `TimeoutError`
  - : Bei der Operation ist eine Zeitüberschreitung aufgetreten. (Veralteter Codewert: `23` und veralteter Konstantenname: `TIMEOUT_ERR`)
- `InvalidNodeTypeError` {{experimental_inline}}
  - : Der Knoten ist für diese Operation ungeeignet oder hat einen ungeeigneten Vorfahren. (Veralteter Codewert: `24` und veralteter Konstantenname: `INVALID_NODE_TYPE_ERR`)
- `DataCloneError` {{experimental_inline}}
  - : Das Objekt kann nicht geklont werden. (Veralteter Codewert: `25` und veralteter Konstantenname: `DATA_CLONE_ERR`)
- `EncodingError` {{experimental_inline}}
  - : Die Kodierungs- oder Dekodierungsoperation ist fehlgeschlagen (kein veralteter Codewert und Konstantenname).
- `NotReadableError` {{experimental_inline}}
  - : Die Leseoperation für die Ein-/Ausgabe ist fehlgeschlagen (kein veralteter Codewert und Konstantenname).
- `UnknownError` {{experimental_inline}}
  - : Die Operation ist aus einem unbekannten vorübergehenden Grund fehlgeschlagen (z. B. wegen Speichermangels) (kein veralteter Codewert und Konstantenname).
- `ConstraintError` {{experimental_inline}}
  - : Eine Änderungsoperation innerhalb einer Transaktion ist fehlgeschlagen, weil eine Einschränkung nicht erfüllt wurde (kein veralteter Codewert und Konstantenname).
- `DataError` {{experimental_inline}}
  - : Die bereitgestellten Daten sind unzureichend (kein veralteter Codewert und Konstantenname).
- `TransactionInactiveError` {{experimental_inline}}
  - : Eine Anfrage wurde an eine Transaktion gerichtet, die derzeit nicht aktiv oder bereits abgeschlossen ist (kein veralteter Codewert und Konstantenname).
- `ReadOnlyError` {{experimental_inline}}
  - : In einer „readonly“-Transaktion wurde versucht, eine Änderungsoperation auszuführen (kein veralteter Codewert und Konstantenname).
- `VersionError` {{experimental_inline}}
  - : Es wurde versucht, eine Datenbank mit einer niedrigeren Version als der bereits vorhandenen zu öffnen (kein veralteter Codewert und Konstantenname).
- `OperationError` {{experimental_inline}}
  - : Die Operation ist aus einem für sie spezifischen Grund fehlgeschlagen (kein veralteter Codewert und Konstantenname).
- `NotAllowedError`
  - : Die Anfrage ist im aktuellen Kontext durch den User-Agent oder die Plattform nicht zulässig, möglicherweise weil der Benutzer die Berechtigung verweigert hat (kein veralteter Codewert und Konstantenname).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Polyfill für `DOMException`](https://core-js.io/docs/features/web-standards/dom-exception) ist in [`core-js`](https://core-js.io/) verfügbar.
- [`DOMError`](/de/docs/Web/API/DOMError)
