---
title: JSON-Typdarstellung
slug: Glossary/JSON_type_representation
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

[JSON](/de/docs/Glossary/JSON) ist ein praktisches und weit verbreitetes Format zur Serialisierung von Objekten, Arrays, Zahlen, Zeichenfolgen, Booleans und Null.
[JSON unterstützt nicht alle von JavaScript erlaubten Datentypen](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_and_json_differences), was bedeutet, dass JavaScript-Objekte, die diese inkompatiblen Typen verwenden, nicht direkt in JSON serialisiert werden können.

Die _JSON-Typdarstellung_ eines JSON-inkompatiblen Objekts ist ein äquivalentes JavaScript-Objekt mit Eigenschaften, die so kodiert sind, dass die Informationen _in_ JSON serialisiert werden können.
Dies hat in der Regel die gleichen Eigenschaften wie das Originalobjekt für kompatible Datentypen, während inkompatible Eigenschaften in kompatible Typen umgewandelt/serialisiert werden.
Zum Beispiel könnten Puffer-Eigenschaften im ursprünglichen Objekt in der JSON-Typdarstellung [base64url](/de/docs/Glossary/base64)-kodiert als Zeichenfolgen vorliegen.

Ein Objekt, das nicht automatisch mit der Methode [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert werden kann, kann eine Instanzmethode namens `toJSON()` definieren, die die _JSON-Typdarstellung_ des ursprünglichen Objekts zurückgibt.
[`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) wird dann `toJSON()` verwenden, um das Objekt zu serialisieren, anstelle des ursprünglichen Objekts.
[`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) und [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) sind Beispiele für diesen Ansatz.

Eine auf diese Weise serialisierte JSON-Zeichenfolge kann mit [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) zurück in das _JSON-Typdarstellung_-Objekt deserialisiert werden.
Es ist üblich, eine Konverter-Methode bereitzustellen, wie zum Beispiel [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), um die _JSON-Typdarstellung_ zurück in das ursprüngliche Objekt zu konvertieren.
