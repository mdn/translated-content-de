---
title: JSON-Typdarstellung
slug: Glossary/JSON_type_representation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

{{Glossary("JSON", "JSON")}} ist ein praktisches und weit verbreitetes Format zum Serialisieren von Objekten, Arrays, Zahlen, Zeichenfolgen, Boolesche Werten und null.
[JSON unterstützt nicht alle von JavaScript erlaubten Datentypen](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_and_json_differences), was bedeutet, dass JavaScript-Objekte, die diese inkompatiblen Typen verwenden, nicht direkt in JSON serialisiert werden können.

Die _JSON-Typdarstellung_ eines JSON-inkompatiblen Objekts ist ein äquivalentes JavaScript-Objekt mit so codierten Eigenschaften, dass die Informationen in JSON serialisiert werden _können_.
In der Regel hat es dieselben Eigenschaften wie das ursprüngliche Objekt für kompatible Datentypen, während inkompatible Eigenschaften in kompatible Typen konvertiert/serialisiert werden.
Zum Beispiel könnten Puffereigenschaften im ursprünglichen Objekt in der JSON-Typdarstellung {{Glossary("base64", "base64url")}}-codiert als Zeichenfolgen dargestellt werden.

Ein Objekt, das nicht automatisch mit der Methode [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert werden kann, kann eine Instanzmethode mit dem Namen `toJSON()` definieren, die die _JSON-Typdarstellung_ des ursprünglichen Objekts zurückgibt.
[`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) wird dann `toJSON()` verwenden, um das Objekt zu erhalten, das zu serialisieren ist, anstatt das ursprüngliche Objekt.
[`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) und [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) sind Beispiele für diesen Ansatz.

Ein auf diese Weise serialisierter JSON-String kann mit [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) in das _JSON-Typdarstellungs_-Objekt deserialisiert werden.
Es ist üblich, eine Konverter-Methode bereitzustellen, wie z.B. [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), um die _JSON-Typdarstellung_ zurück in das ursprüngliche Objekt zu konvertieren.
