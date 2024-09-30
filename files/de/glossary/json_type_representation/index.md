---
title: JSON Type Representation
slug: Glossary/JSON_type_representation
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

[JSON](/de/docs/Glossary/JSON) ist ein praktisches und weit verbreitetes Format zur Serialisierung von Objekten, Arrays, Zahlen, Strings, Booleans und Null-Werten.
[JSON unterstützt nicht alle durch JavaScript erlaubten Datentypen](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_and_json_differences), was bedeutet, dass JavaScript-Objekte, welche diese inkompatiblen Typen verwenden, nicht direkt in JSON serialisiert werden können.

Die _JSON-Typ-Repräsentation_ eines JSON-inkompatiblen Objekts ist ein äquivalentes JavaScript-Objekt mit Eigenschaften, die so kodiert sind, dass die Informationen _serialisiert_ werden können.
Typischerweise hat es dieselben Eigenschaften wie das ursprüngliche Objekt für kompatible Datentypen, während inkompatible Eigenschaften in kompatible Typen umgewandelt/serialisiert werden. 
Zum Beispiel könnten Puffer-Eigenschaften im ursprünglichen Objekt in der JSON-Typ-Repräsentation [base64url](/de/docs/Glossary/base64)-kodiert als Strings dargestellt werden.

Ein Objekt, das nicht automatisch mit der Methode [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert werden kann, kann eine Instanzmethode namens `toJSON()` definieren, die die _JSON-Typ-Repräsentation_ des ursprünglichen Objekts zurückgibt.
[`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) wird dann `toJSON()` verwenden, um das Objekt zur Serialisierung zu erhalten, anstatt des ursprünglichen Objekts.
[`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) und [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) sind Beispiele für diesen Ansatz.

Ein so serialisierter JSON-String kann mithilfe von [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) wieder in das _JSON-Typ-Repräsentation_-Objekt deserialisiert werden.
Es ist üblich, eine Konverter-Methode bereitzustellen, wie etwa [`PublicKeyCredential.parseCreationOptionsFromJSON()`](/de/docs/Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static), um die _JSON-Typ-Repräsentation_ zurück in das ursprüngliche Objekt zu konvertieren.
