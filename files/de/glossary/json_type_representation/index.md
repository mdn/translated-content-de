---
title: JSON-Typdarstellung
slug: Glossary/JSON_type_representation
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

{{glossary("JSON")}} ist ein bequemes und weit verbreitetes Format zur Serialisierung von Objekten, Arrays, Zahlen, Zeichenfolgen, Booleschen Werten und null. [JSON unterstützt nicht alle Datentypen, die von JavaScript erlaubt sind](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON#javascript_and_json_differences), was bedeutet, dass JavaScript-Objekte, die diese inkompatiblen Typen verwenden, nicht direkt in JSON serialisiert werden können.

Die _JSON-Typdarstellung_ eines JSON-inkompatiblen Objekts ist ein gleichwertiges JavaScript-Objekt mit Eigenschaften, die so kodiert sind, dass die Information _in_ JSON serialisiert werden kann. Es hat typischerweise dieselben Eigenschaften wie das ursprüngliche Objekt für kompatible Datentypen, während inkompatible Eigenschaften in kompatible Typen konvertiert/serialisiert werden. Zum Beispiel könnten Puffer-Eigenschaften im ursprünglichen Objekt als {{Glossary("base64", "base64url")}}-kodierte Zeichenfolgen in der JSON-Typdarstellung dargestellt werden.

Ein Objekt, das nicht automatisch mit der Methode [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) in JSON serialisiert werden kann, kann eine Instanzmethode namens `toJSON()` definieren, die die _JSON-Typdarstellung_ des ursprünglichen Objekts zurückgibt. [`JSON.stringify()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) wird dann `toJSON()` verwenden, um das Objekt zu bekommen, das stringifiziert werden soll, anstatt des ursprünglichen Objekts. [`PublicKeyCredential.toJSON()`](/de/docs/Web/API/PublicKeyCredential/toJSON) und [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) sind Beispiele für diesen Ansatz.

Ein in dieser Weise serialisierter JSON-String kann mit [`JSON.parse()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) zurück in das _JSON-Typdarstellungs_-objekt deserialisiert werden. Es ist üblich, eine Konverter-Methode bereitzustellen, wie z.B. {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}, um die _JSON-Typdarstellung_ zurück in das ursprüngliche Objekt zu konvertieren.
