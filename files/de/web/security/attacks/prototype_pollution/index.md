---
title: JavaScript-Prototypenverschmutzung
slug: Web/Security/Attacks/Prototype_pollution
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

**Prototypenverschmutzung** ist eine Schwachstelle, bei der ein Angreifer Eigenschaften zu Prototypen eines Objekts hinzufügen oder sie modifizieren kann. Das bedeutet, dass bösartige Werte unerwartet in Objekten Ihrer Anwendung erscheinen können, was oft zu logischen Fehlern oder weiteren Angriffen wie [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) führen kann.

## Prototypen in JavaScript

JavaScript implementiert {{Glossary("inheritance", "Vererbung")}} durch _Prototypen_. Jedes Objekt hat eine Referenz zu einem Prototypen, der selbst ein Objekt ist, und der wiederum einen Prototypen hat, und so weiter, bis wir zum grundlegenden Prototypen gelangen, der `Object.prototype` genannt wird und dessen eigener Prototyp `null` ist.

Wenn Sie versuchen, eine Eigenschaft zuzugreifen oder eine Methode auf einem Objekt aufzurufen, und diese Eigenschaft oder Methode ist nicht auf dem Objekt definiert, dann sucht die JavaScript-Laufzeit in dem Prototyp des Objekts nach der Eigenschaft oder Methode, und dann in dem Prototyp des Prototyps des Objekts, und so weiter, bis sie die Methode oder Eigenschaft findet oder ein Objekt erreicht, dessen Prototyp `null` ist.

Deshalb können Sie dies tun:

```js
const mySet = new Set([1, 2, 3]);
// prototype chain:
// mySet -> Set.prototype -> Object.prototype -> null

mySet.size;
// 3
// size is defined on the prototype of `mySet`, which is `Set.prototype`

mySet.propertyIsEnumerable("size");
// false
// propertyIsEnumerable() is defined on the prototype
// of `Set.prototype`, which is `Object.prototype`
```

Anders als viele andere Sprachen erlaubt JavaScript das Hinzufügen von geerbten Eigenschaften und Methoden zur Laufzeit durch das Modifizieren von Prototypen eines Objekts:

```js example-bad
const mySet = new Set([1, 2, 3]);

// modify the Object prototype at runtime
Object.prototype.extra = "new property from the Object prototype!";

// modify the Set prototype at runtime
Set.prototype.other = "new property from the Set prototype!";

mySet.extra;
// "new property from the Object prototype!"

mySet.other;
// "new property from the Set prototype!"
```

Bei einem Prototypenverschmutzungsangriff ändert der Angreifer einen eingebauten Prototyp wie `Object.prototype`, was dazu führt, dass alle abgeleiteten Objekte über eine zusätzliche Eigenschaft verfügen, einschließlich Objekten, auf die der Angreifer keinen direkten Zugriff hat.

> [!NOTE]
> Um mehr über Prototypen zu lernen, siehe:
>
> - [Objekt-Prototypen](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
> - [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
> - [Arbeiten mit Objekten](/de/docs/Web/JavaScript/Guide/Working_with_objects)

## Anatomie der Prototypenverschmutzung

Prototypenverschmutzung umfasst zwei Phasen:

1. **Verschmutzung**: Der Angreifer kann Eigenschaften zu einem Prototypen eines Objekts hinzufügen oder sie modifizieren.
2. **Ausnutzung**: Der ursprüngliche Anwendungscode greift auf die verschmutzten Eigenschaften zu, was zu unerwartetem Verhalten führt.

### Quellen der Verschmutzung

Um Objekte zu verschmutzen, benötigt der Angreifer eine Methode, um beliebige Eigenschaften zu den Prototypobjekten hinzuzufügen. Dies kann als Folge von [XSS](/de/docs/Web/Security/Attacks/XSS) geschehen, bei dem der Angreifer direkten Zugriff auf die JavaScript-Ausführungsumgebung der Seite erhält. Allerdings können Angreifer mit diesem Zugang viel direkter Schaden anrichten, daher wird Prototypenverschmutzung meist als ein reiner Datenangriff diskutiert, bei dem der Angreifer eine Nutzlast konstruiert, die vom Anwendungscode verarbeitet wird, was zur Verschmutzung führt.

Ein Schlüsselangriffsvektor ist die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft, die den Zugriff auf das Prototypobjekt eines beliebigen Objekts ermöglicht. Man kann den Prototypen auch über `yourObject.constructor.prototype` erreichen. Das wesentliche Codemuster, das eine Verschmutzungsquelle darstellt, ist die dynamische Eigenschaftsmodifikation der folgenden Art:

```js
obj[key1][key2] = value;
```

In diesem Fall, wenn `obj` ein gewöhnliches Objekt ist, `key1` `"__proto__"` ist und `key2` ein Eigenschaftsname wie `"test"` ist, dann fügt der Code eine Eigenschaft namens `test` zu `Object.prototype` hinzu, dem Prototypen aller gewöhnlichen Objekte. Auch wenn der [`"__proto__"`-Setter deaktiviert ist](#node.js_flag_--disable-proto), kann das `.constructor.prototype`-Zugriffsmuster weiterhin verwendet werden, um den Prototypen zu erreichen, der auch `Object.prototype` für gewöhnliche Objekte ist:

```js
obj[key1][key2][key3] = value;
```

... wobei `key1` `"constructor"`, `key2` `"prototype"` und `key3` ein Eigenschaftsname wie `"test"` ist.

Um diesen Codezeile in einen weiteren Kontext zu stellen, könnten `key1`, `key2` und `key3` Werte sein, die vom Angreifer kontrolliert werden. Stellen Sie sich beispielsweise einen API-Endpunkt vor, der eine Liste von Benutzernamen nimmt, und eine Liste von Feldern, die für jeden Benutzer abgefragt werden sollen, und ein Objekt zurückgibt, das jeden Benutzernamen mit seinen Feldern abbildet:

```js
function getUsers(request) {
  const result = {};
  const userNames = new URL(request.url).searchParams.getAll("names");
  const fields = new URL(request.url).searchParams.getAll("fields");
  for (const name of userNames) {
    const userInfo = database.lookup(name);
    result[name] ??= {};
    for (const field of fields) {
      // Pollution source
      result[name][field] = userInfo[field];
    }
  }
  return result;
}
```

Wenn der Angreifer diese API nun mit der URL `https://example.com/api?names=__proto__&fields=age` aufruft, fügt der Code `Object.prototype` eine Eigenschaft namens `age` hinzu, wobei der Wert dem `age`-Eigenschaftswert des Benutzers `__proto__` entspricht. Es könnte `undefined` sein, aber wenn der Angreifer in der Lage ist, einen Benutzer namens `__proto__` zur Datenbank hinzuzufügen (z.B. durch einen separaten API-Aufruf), kann er den Wert der `age`-Eigenschaft kontrollieren.

Viele Bibliotheken, die [benutzerdefiniertes Parsen von URL-Abfragezeichenfolgen](https://github.com/BlackFan/client-side-prototype-pollution) durchführen, sind besonders anfällig, weil sie die Spezifikation tiefer Objektstrukturen über die Abfragezeichenfolge ermöglichen und dann dynamische Eigenschaftsmodifikationen verwenden, um das Objekt zu erstellen, wie `?__proto__[test]=test` oder `?__proto__.test=test`. Bibliotheken sind im Allgemeinen anfälliger als Anwendungscode, weil sie nicht in der Lage sind, gültige Schlüssel zu erlauben, und sie oft dynamische Eigenschaftsmodifikation benötigen, um generisch zu sein.

Beachten Sie, dass in [JSON](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON) die `__proto__`-Eigenschaft nur ein normaler Eigenschaftsname ist, sodass das Parsen von JSON-Nutzlasten wie `{"__proto__": {"test": "value"}}` einfach ein Objekt mit einer Eigenschaft namens `__proto__` erstellt und nicht sofort problematisch ist. Wenn jedoch später im Code das Objekt in ein anderes Objekt über {{jsxref("Object.assign()")}}, [`for...in`-Schleifen](/de/docs/Web/JavaScript/Reference/Statements/for...in) usw. zusammengeführt wird, wird der implizite Eigenschaftszuweisungsoperation den Setter auslösen. Normalerweise ändert dies nicht wirklich `Object.prototype`, weil es nur eine Ebene des dynamischen Eigenschaftszugriffs gibt, aber es ändert den Prototyp des Zielobjekts. Beachten Sie, dass [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) dieser Art von Angriff nicht anfällig ist, weil das Verbreiten keine Setter auslöst.

```js
// Just an object with a property called `__proto__`
const options = JSON.parse('{"__proto__": {"test": "value"}}');
const withDefaults = Object.assign({ mode: "cors" }, options);
// In the process of merging `options`, we indirectly executed
// withDefaults.__proto__ = { test: "value" }, causing `withDefaults` to have
// a different prototype
console.log(withDefaults.test); // "value"
```

### Ausnutzungsziele

Um die Wirkung der Prototypenverschmutzung zu sehen, können wir uns ansehen, wie der folgende [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf vollständig geändert werden kann. Standardmäßig ist es eine {{HTTPMethod("GET")}}-Anfrage ohne Inhalt, der an den Server gesendet werden soll, aber weil wir das `Object.prototype`-Objekt mit zwei neuen Standardeigenschaften verschmutzt haben, wurde der `fetch()`-Aufruf jetzt in eine {{HTTPMethod("POST")}}-Anfrage transformiert, und der Anforderungskörper enthält nun Anweisungen für den Server, beispielsweise um einen beliebigen Geldbetrag an eine beliebige Adresse zu übertragen:

```js
// Attacker indirectly causes the following pollution
Object.prototype.body = "action=transfer&amount=1337&to=1337-1337-1337-1337";
Object.prototype.method = "POST";

fetch("https://example.com", {
  mode: "cors",
});
// Promise {status: "pending", body: "action=transfer&amount=1337&to=1337-1337-1337-1337", method: "POST"}

// Any new object initialization is now modified to contain additional default properties
console.log({}.method); // "POST"
console.log({}.body); // "action=transfer&amount=1337&to=1337-1337-1337-1337"
```

Ein weiteres gefährliches Verschmutzungsangriffsziel ist die [`HTMLIframeElement.srcdoc`](/de/docs/Web/API/HTMLIFrameElement/srcdoc)-Eigenschaft, die den Inhalt eines {{HTMLElement("iframe")}}-Elements festlegt. Indem man ihren Wert überschreibt, könnte es potenziell möglich sein, beliebigen Code auszuführen.

```js
Object.prototype.srcdoc = "<script>alert(1)<\/script>";
```

Konfigurationsobjekte, wie das [`RequestInit`](/de/docs/Web/API/RequestInit)-Objekt von `fetch()` im obigen Codebeispiel, oder die Instanziierung von `<iframes>`, oder die Konfiguration von Sanitisatoren ([`SanitizerConfig`](/de/docs/Web/API/SanitizerConfig)-Objekten), sind einige der sensibelsten Objekte und oft Ziele von Prototypenverschmutzungsangriffen. Datenobjekte können ebenfalls verschmutzt werden:

```js
function accessDashboard(user) {
  if (!user.isAdmin) {
    return new Response("Access denied", { status: 403 });
  }
  // show admin page
}
```

Wenn `Object.prototype.isAdmin` auf `true` gesetzt ist und die Eigenschaft `isAdmin` bei Nicht-Administratoren nicht vorhanden ist, anstatt explizit auf `false` gesetzt zu werden, dann werden alle Benutzer als Administratoren behandelt, was zu einer vollständigen Umgehung der Zugangskontrolle führt.

## Abwehrmaßnahmen gegen Prototypenverschmutzung

Abwehrmaßnahmen gegen Prototypenverschmutzung verlaufen entlang zweier Linien: Vermeidung von Code, der zu Prototypenmodifikationen führen könnte, und Vermeidung des Zugriffs auf potenziell verschmutzte Eigenschaften. Der folgende Abschnitt stellt einige Strategien vor, die Sie je nach Ihrer Situation verwenden können.

### Benutzereingaben validieren

Validieren Sie immer Benutzereingaben mit Validatoren wie [ajv](https://ajv.js.org) und [Zod](https://zod.dev/), um sicherzustellen, dass die Datenstruktur der Eingabe die geeigneten Eigenschaften mit den entsprechenden Typen enthält. Um den Prototypenverschmutzungsangriff zu mildern, lehnen Sie nicht benötigte Eigenschaften ab, indem Sie `additionalProperties` auf `false` im Schema setzen. Durch die Verwendung eines Schemas können auch Standardwerte für fehlende Eigenschaften festgelegt werden, was Prototypensuchvorgänge vermeidet.

Sie sollten dynamische Eigenschaftsmodifikationen (in der Form von `obj[key] = value`) vermeiden, es sei denn, Sie können die `key`-Werte validieren. In diesem Fall könnten Sie `__proto__`, `constructor`, `prototype` als Schlüssel in Ihrer Validierung ausschließen.

### Node.js-Flag `--disable-proto`

Wenn Sie sich in einer Node.js-Umgebung befinden, können Sie `Object.prototype.__proto__` mit der Option `--disable-proto=MODE` deaktivieren, wobei `MODE` entweder `delete` (die Eigenschaft wird vollständig entfernt) oder `throw` (Zugriffe auf die Eigenschaft werfen eine Ausnahme mit dem Code `ERR_PROTO_ACCESS`) ist. Verwenden Sie `delete Object.prototype.__proto__` in Nicht-Node-Umgebungen, um denselben Effekt zu erzielen.

Dies schützt Sie nicht vollständig vor Prototypenverschmutzung (weil `constructor.prototype` weiterhin verfügbar ist), aber es entfernt einen solchen Einstiegspunkt.

### Eingebaute Objekte sperren

Umgebungen mit hoher Sensibilität können eine Verteidigung implementieren, die als _Realm Lockdown_ bekannt ist, die jegliche Modifikationen an eingebauten Objekten verhindert. Ein Beispiel ist das [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses)-Shim für [Hardened JavaScript](https://hardenedjs.org). Dies wird auf Grundlage der {{jsxref("Object.freeze()")}}-Funktion implementiert, die Erweiterungen verhindert und bestehende Eigenschaften schreibgeschützt und nicht konfigurierbar macht. Ein Objekt einfrieren ist das höchste Integritätsniveau, das JavaScript bietet. Alternativ erlaubt {{jsxref("Object.seal()")}} bestehende Eigenschaften zu ändern, solange sie schreibbar sind, während {{jsxref("Object.preventExtensions()")}} verhindert, dass neue Eigenschaften zu einem Objekt hinzugefügt werden.

```js
Object.freeze(Object.prototype);
const obj = {};
const key1 = "__proto__";
const key2 = "a";
obj[key1][key2] = 1; // fails silently in non-strict mode
obj.a; // undefined
```

Beachten Sie jedoch, dass legitime Prototypenmodifikationen möglicherweise vorkommen, gewöhnlich um eine {{Glossary("Polyfill", "Polyfill")}}-Implementierung bereitzustellen. Im [Nicht-Strikten-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) scheitern Versuche, ein eingefrorenes Objekt zu modifizieren, stillschweigend, während sie im Strikten Modus eine `TypeError` werfen. Um Polyfills zu ermöglichen, muss der Polyfill-Code ausgeführt werden, bevor das Einfrieren erfolgt.

Ein weiteres Problem mit {{jsxref("Object.freeze()")}} ist, dass es standardmäßig kein tiefes Einfrieren bietet. Wenn Sie echte Unveränderlichkeit wollen, müssen Sie jede Eigenschaft rekursiv einfrieren ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#deep_freezing)). Eine Bibliothek wie SES ist vorzuziehen, da sie einen "Durchlauf" über alle eingebauten Objekte macht und das Einfrieren eines Objekts nicht vergisst.

### Vermeidung von Prototypensuchvorgängen

In Code, in dem Sie auf die Eigenschaften des Objekts zugreifen, stellen Sie sicher, dass die Eigenschaft tatsächlich auf dem Objekt selbst vorhanden ist. Sie können eine {{jsxref("Object.hasOwn()")}}-Prüfung durchführen, wenn Sie auf Schlüssel auf Objekten zugreifen oder sie durchlaufen.

Anstatt:

```js example-bad
if (!user.isAdmin) {
  return new Response("Access denied", { status: 403 });
}
```

Erwägen Sie:

```js
if (!Object.hasOwn(user, "isAdmin") || !user.isAdmin) {
  return new Response("Access denied", { status: 403 });
}
```

Beim Iterieren, die [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleife durchläuft den Prototypen. Ersetzen Sie nach Möglichkeit solche Schleifen mit [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und {{jsxref("Object.keys()")}}, um nur eigene Schlüssel zu besuchen.

```js
// Looks up the prototype
for (const key in payload) {
  doSomething(payload[key]);
}

// Only visits own keys
for (const key of Object.keys(payload)) {
  doSomething(payload[key]);
}
```

In Funktionen setzen Sie explizit Standardparameter anstelle von nicht definierten. Auf diese Weise können anstelle eines potenziellen Prototypennachschlags die Standardparameterwerte verwendet werden. Anstatt dies:

```js example-bad
function doDangerousAction(options = {}) {
  if (!options.enableDangerousAction) {
    return;
  }
}
```

Überlegen Sie dies:

```js
function doDangerousAction(options = { enableDangerousAction: false }) {
  if (!options.enableDangerousAction) {
    return;
  }
}
```

### Erstellen von JavaScript-Objekten mit null Prototypen

[Null-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) vermeiden gleichzeitig die Prototypenverschmutzung (weil die `__proto__`- und `constructor`-Eigenschaften nicht auf dem Objekt vorhanden sind) und vermeiden Prototypennachschläge. Sie werden entweder mit der Funktion {{jsxref("Object.create()", "Object.create(null)")}} erstellt oder mit der `{ __proto__: null }`-Syntax in Objektinitialisierern.

> [!NOTE]
> Die `{ __proto__: null }` [Prototypen-Setter](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#prototype_setter)-Syntax in Objektinitialisierern ist vollständig sicher, im Gegensatz zu der `obj.__proto__`-Zugriffseigenschaft.

Wenn Sie ein Objekt als Optionen übergeben müssen (zum Beispiel, da eine API wie `fetch()` erfordert, ein Objekt zu verwenden), erstellen Sie ein Objekt mit null Prototypen. Beachten Sie, dass das Erstellen von Objekten ohne Prototyp nicht der Standard ist, daher müssen Sie bei der Erstellung eines Objekts immer daran denken, ein Objekt mit null Prototypen explizit zu erstellen, anstatt den regulären Objektinitialisierer (`const myObj = {}`) zu verwenden.

```js
Object.prototype.method = "POST";

// Still sends a GET request, because the object has no prototype
fetch("https://example.com", {
  __proto__: null,
  mode: "cors",
});
```

Wenn Sie ein Objekt erstellen, das später modifiziert wird (z.B. über `obj[key] = value`), erstellen Sie es als Null-Prototyp-Objekt:

```js
const result = { __proto__: null };
const key1 = "__proto__";
const key2 = "a";
result[key1] ??= {};
result[key1][key2] = 1; // modifies result, not Object.prototype
```

### Verwenden Sie `Map` und `Set` stattdessen

Wenn JavaScript-Objekte als temporäre Schlüssel-Wert-Paare verwendet werden, überlegen Sie, stattdessen ein {{jsxref("Map")}}- oder {{jsxref("Set")}}-Objekt zu verwenden. Sie verhindern auch die Verschmutzung des Objektprototyps, indem sie die Objektprppertymodifikation oder den Zugriff vermeiden. Sehen Sie sich die `Map`-Dokumentation für einen [Vergleich zwischen Maps und Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps) an. Die Methode {{jsxref("Map.prototype.get()")}} gibt immer nur Einträge innerhalb der `Map` zurück.

```js
// Assume Object got polluted somehow
Object.prototype.admin = true;

const config = new Map();
config.set("admin", false);

config.admin; // true
config.get("admin"); // false
```

## Zusammenfassende Verteidigungsliste

Beim Erstellen von Objekten:

- Bewerten Sie, ob ein Objekt benötigt wird oder ob ein {{jsxref("Map")}} oder {{jsxref("Set")}} die bessere Wahl wäre.
- Wenn Sie Objekte an andere Funktionen übergeben, wie `FetchInit` oder `SanitizerConfig`, stellen Sie entweder sicher, dass alle Schlüssel definiert sind, oder verwenden Sie [Null-Prototyp-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects).
- Wenn Sie Objekte erstellen, die später dynamisch modifiziert werden sollen (z.B. über `obj[key] = value`), erstellen Sie sie ebenfalls als Null-Prototyp-Objekte.

Wenn Sie Benutzereingaben akzeptieren, sei es über URL-Abfragezeichenfolgen, JSON-Nutzlasten oder Funktionsparameter:

- Validieren Sie immer Benutzereingaben mit einem Schema-Validator. Lehnen Sie nicht erkannte Eigenschaften ab und setzen Sie Standardwerte für fehlende Eigenschaften.
- Funktionen, die Objekte als Parameter empfangen, sollten entweder sicherstellen, dass alle erwarteten Schlüssel auf dem Objekt selbst definiert sind (indem sie Standardwerte setzen), oder zuerst überprüfen, ob der Schlüssel auf dem Objekt selbst vorhanden ist (z.B. über {{jsxref("Object.hasOwn()")}}), bevor sie darauf zugreifen.
- Bevorzugen Sie [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) und {{jsxref("Object.keys()")}} gegenüber [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen.

Für eingebaute und Fremdobjekte:

- Erwägen Sie das Einfrieren eingebauter und Fremdobjekte, zum Beispiel durch die Verwendung des [SES](https://github.com/endojs/endo/tree/master/packages/ses#ses)-Shims.

Laufzeit-Abwehrmaßnahmen:

- Verwenden Sie `--disable-proto` in Node.js, um `Object.prototype.__proto__` zu deaktivieren.
- Verwenden Sie `delete Object.prototype.__proto__` in Nicht-Node-Umgebungen.

## Siehe auch

- [OWASP: Prototypenverschmutzungsprävention-Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html#other-resources)
- [Clientseitige Prototypenverschmutzung](https://github.com/BlackFan/client-side-prototype-pollution)
- [Serverseitige Prototypenverschmutzung](https://github.com/KTH-LangSec/server-side-prototype-pollution)
