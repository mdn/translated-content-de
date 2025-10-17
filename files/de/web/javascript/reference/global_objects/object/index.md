---
title: Objekt
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

Der **`Object`**-Typ stellt einen von [JavaScripts Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures) dar. Er wird verwendet, um verschiedene schlüsselbasierte Sammlungen und komplexere Einheiten zu speichern. Objekte können mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder der [Objektinitialisierer / Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Nahezu alle [Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften möglicherweise überschattet (d.h. überschrieben) werden können. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind diejenigen mit [`null` Prototype](#null-prototyp-objekte) oder die von anderen `null` Prototype-Objekten abstammen.

Änderungen am `Object.prototype`-Objekt sind durch das Prototypen-Chaining bei **allen** Objekten sichtbar, es sei denn, die von diesen Änderungen betroffenen Eigenschaften und Methoden werden weiter entlang der Prototypenkette überschrieben. Dies bietet eine sehr leistungsstarke, obwohl [potenziell gefährliche Mechanismus](/de/docs/Web/Security/Attacks/Prototype_pollution), um das Verhalten von Objekten zu überschreiben oder zu erweitern. Um es sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das ein [unveränderliches Prototype](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat — das Prototype von `Object.prototype` ist immer `null` und nicht änderbar.

### Objekt-Prototyp-Eigenschaften

Sie sollten vermeiden, Methoden von `Object.prototype` direkt aus einer Instanz aufzurufen, insbesondere solche, die nicht polymorph sein sollen (d.h. nur ihr anfängliches Verhalten macht Sinn, und kein nachfolgendes Objekt könnte es auf sinnvolle Weise überschreiben). Alle von `Object.prototype` abgeleiteten Objekte können eine benutzerdefinierte eigene Eigenschaft mit demselben Namen definieren, aber mit völlig unterschiedlichen Semantiken als erwartet. Außerdem werden diese Eigenschaften nicht von [`null` Prototype-Objekten](#null-prototyp-objekte) geerbt. Alle modernen JavaScript-Dienstprogramme zur Arbeit mit Objekten sind [statisch](#statische_methoden). Genauer gesagt:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) existieren, um polymorph zu sein. Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, sodass Sie sie als Instanzmethoden aufrufen können. Häufig werden jedoch `valueOf()` und `toString()` implizit durch [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen, sodass Sie sie in Ihrem Code nicht selbst aufrufen müssen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft ist veraltet und sollte nicht verwendet werden. Die Alternativen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können durch die statischen Methoden {{jsxref("Object.getOwnPropertyDescriptor()")}} bzw. {{jsxref("Object.hasOwn()")}} ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann normalerweise durch [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors überprüfen.

Falls keine semantisch äquivalente statische Methode existiert oder Sie die `Object.prototype`-Methode wirklich verwenden möchten, sollten Sie die `Object.prototype`-Methode stattdessen direkt [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf Ihr Zielobjekt anwenden, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft enthält, die unerwartete Ergebnisse liefert.

```js
const obj = {
  foo: 1,
  // You should not define such a method on your own object,
  // but you may not be able to prevent it from happening if
  // you are receiving the object from external input
  propertyIsEnumerable() {
    return false;
  },
};

obj.propertyIsEnumerable("foo"); // false; unexpected result
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; expected result
```

### Löschen einer Eigenschaft aus einem Objekt

Es gibt keine Methode innerhalb eines Objekts, um seine eigenen Eigenschaften zu löschen (wie etwa {{jsxref("Map.prototype.delete()")}}). Stattdessen muss der {{jsxref("Operators/delete", "delete")}}-Operator verwendet werden.

### Null-Prototyp-Objekte

Fast alle Objekte in JavaScript erben letztlich von `Object.prototype` (siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)). Sie können jedoch null-Prototyp-Objekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objektinitialisierungs-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (Hinweis: Der `__proto__` Schlüssel in Objektliteralen unterscheidet sich von der veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft). Sie können auch den Prototyp eines bestehenden Objekts auf `null` ändern, indem Sie [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann sich in unerwarteter Weise verhalten, da es keine Objektmethoden von `Object.prototype` erbt. Dies trifft insbesondere bei der Fehlersuche zu, da gängige Objekt-Eigenschaft-Umwandlungs-/Erkennungs-Dienstprogramme Fehler erzeugen oder Informationen verlieren können (besonders bei stillschweigenden Fehlerschleifen, die Fehler ignorieren).

Zum Beispiel führt das Fehlen von [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) oft dazu, dass Fehlersuche nicht durchführbar ist:

```js
const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value
```

Andere Methoden werden ebenfalls fehlschlagen.

```js
normalObj.valueOf(); // shows {}
nullProtoObj.valueOf(); // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p"); // shows "true"
nullProtoObj.hasOwnProperty("p"); // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor; // shows "Object() { [native code] }"
nullProtoObj.constructor; // shows "undefined"
```

Wir können die `toString`-Methode dem Null-Prototyp-Objekt hinzufügen, indem wir sie zuweisen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` im Prototyp des Objekts existiert, ist die `toString()`-Methode hier eine eigene Eigenschaft von `nullProtoObj`. Dies liegt daran, dass `nullProtoObj` keinen (null) Prototyp hat.

Man kann ein Null-Prototyp-Objekt auch in ein gewöhnliches Objekt zurückverwandeln, indem man [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufruft.

In der Praxis werden Objekte mit `null`-Prototyp meist als günstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Das Vorhandensein von `Object.prototype`-Eigenschaften kann einige Fehler verursachen:

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]
```

Die Verwendung eines Null-Prototyp-Objekts beseitigt dieses Risiko, ohne allzu viel Komplexität in die `hasPerson`- und `getAge`-Funktionen einzuführen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In einem solchen Fall sollte die Hinzufügung jeder Methode mit Vorsicht erfolgen, da sie mit anderen als Daten gespeicherten Schlüssel-Wert-Paaren verwechselt werden kann.

Außerdem verhindert das Erstellen eines Objekts, das nicht von `Object.prototype` erbt, [Prototype Pollution-Angriffe](/de/docs/Web/Security/Attacks/Prototype_pollution). Wenn ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, ist sie bei jedem Objekt in Ihrem Programm zugänglich, außer Objekten mit Null-Prototyp.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript hat auch integrierte APIs, die `null`-Prototyp-Objekte erzeugen, insbesondere solche, die Objekte als Ad-hoc-Schlüsselwertsammlungen verwenden. Zum Beispiel:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die `groups`- und `indices.groups`-Eigenschaften des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]` Objekte sollten einen `null` Prototype haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modul-Namensraum-Objekte, die durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) erhalten werden

Der Begriff "`null`-Prototyp-Objekt" inkludiert oft auch jedes Objekt ohne `Object.prototype` in seiner Prototypenkette. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) bei der Verwendung von Klassen erstellt werden.

### Objektumwandlung

Viele eingebaute Operationen, die Objekte erwarten, konvertieren ihre Argumente zuerst in Objekte. Die [Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) kann zusammengefasst werden wie folgt:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}}-Primitiven werden in ihre entsprechenden Objekt-Wrapper eingebunden.

Es gibt zwei Möglichkeiten, fast denselben Effekt in JavaScript zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die oben beschriebenen Objekterzwingungsschritte durch, um `x` zu konvertieren.
- Die {{jsxref("Object/Object", "Object()")}}-Funktion: `Object(x)` verwendet denselben Algorithmus zur Konvertierung von `x`, mit der Ausnahme, dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Stellen, an denen Objekterzwingung verwendet wird, umfassen:

- Den `object`-Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen.
- Den `this`-Wert von {{jsxref("Array")}}-Methoden.
- Parameter von `Object`-Methoden, wie {{jsxref("Object.keys()")}}.
- Auto-Boxing, wenn eine Eigenschaft auf einen primitiven Wert zugegriffen wird, da Primitive keine Eigenschaften haben.
- Den [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert bei Aufrufen einer nicht-strengen Funktion. Primitive werden eingebunden, während `null` und `undefined` durch das {{Glossary("Global_object", "globale Objekt")}} ersetzt werden.

Im Gegensatz zur [Umwandlung in primitive Werte](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) ist der Objekterzwingungsprozess selbst in keiner Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString`- oder `valueOf`-Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Wandelt die Eingabe in ein Objekt um.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller aufzählbaren eigenen Eigenschaften von einem oder mehreren Quellobjekten auf ein Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototyp-Objekt und Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt einem Objekt die benannten Eigenschaften hinzu, die durch die gegebenen Deskriptoren beschrieben werden.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt einem Objekt die benannte Eigenschaft hinzu, die durch einen gegebenen Deskriptor beschrieben wird.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array mit allen `[key, value]`-Paaren der **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts zurück.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Anderer Code kann seine Eigenschaften nicht löschen oder ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt von einem iterierbaren `[key, value]`-Paar zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaftsdeskriptor für eine benannte Eigenschaft eines Objekts zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaftsdeskriptoren für ein Objekt enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array mit den Namen aller **eigenen** aufzählbaren und nicht aufzählbaren Eigenschaften eines gegebenen Objekts zurück.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller Symbol-Eigenschaften zurück, die direkt auf einem gegebenen Objekt gefunden werden.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (das interne `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen iterierbaren Objekts gemäß den durch einen bereitgestellten Callback-Funktion zurückgegebenen String-Werten. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen in der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als seine **eigene** Eigenschaft hat, oder `false`, wenn die Eigenschaft geerbt wird oder nicht existiert.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte dasselbe sind. Setzt alle `NaN`-Werte gleich (was sich von `IsLooselyEqual`, das durch [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) verwendet wird, und `IsStrictlyEqual`, das durch [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) verwendet wird, unterscheidet).
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob die Erweiterung eines Objekts zulässig ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren ist.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array mit den Namen aller **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts zurück.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert alle Erweiterungen eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass anderer Code Eigenschaften eines Objekts löscht.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp (die interne `[[Prototype]]`-Eigenschaft) eines Objekts.
- {{jsxref("Object.values()")}}
  - : Gibt ein Array mit den Werten zurück, die allen **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts entsprechen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Object.prototype` definiert und werden von allen `Object`-Instanzen geteilt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Zeigt auf das Objekt, das als Prototype verwendet wurde, als das Objekt instanziiert wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für einfache `Object`-Instanzen ist der ursprüngliche Wert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jede die `constructor`-Eigenschaft von ihrem jeweiligen `Constructor.prototype`-Objekt.

## Instanzmethoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die beim Zugriff diese Funktion ausführt und ihren Rückgabewert zurückgibt.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die beim Setzen diese Funktion ausführt, die die Eigenschaft modifiziert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Getter an die angegebene Eigenschaft gebunden ist.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Setter an die angegebene Eigenschaft gebunden ist.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypenkette geerbt wird.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen Boolean zurück, der angibt, ob das Objekt, auf dem diese Methode aufgerufen wird, in der Prototypenkette des angegebenen Objekts enthalten ist.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen Boolean zurück, der angibt, ob die angegebene Eigenschaft die [enumerable own](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)-Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine String-Darstellung des Objekts zurück.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück.

## Beispiele

### Leere Objekte erstellen

Das folgende Beispiel erstellt leere Objekte mit dem `new`-Schlüsselwort mit unterschiedlichen Argumenten:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Verwenden des Object() Konstruktors, um Primitive in ein Objekt ihres jeweiligen Typs zu verwandeln

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um einen Objekt-Wrapper eines primitiven Werts zu erstellen.

Die folgenden Beispiele erstellen die Variablen `o1` und `o2`, die {{jsxref("Boolean")}} und {{jsxref("BigInt")}}-Werte speichern:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objekt-Prototypen

Beim Ändern des Verhaltens vorhandener `Object.prototype`-Methoden sollten Sie erwägen, Code durch Injizieren Ihres Erweiterungscode vor oder nach der bestehenden Logik auszuführen. Zum Beispiel wird dieser (ungetestete) Code vorkonditionelle eigene Logik ausführen, bevor die eingebaute Logik oder die Erweiterung eines anderen ausgeführt wird.

Beim Modifizieren von Prototypen mit Hooks sollten Sie `this` und die Argumente (den Aufrufzustand) an das aktuelle Verhalten weitergeben, indem Sie `apply()` auf die Funktion aufrufen. Dieses Muster kann bei jedem Prototyp verwendet werden, wie `Node.prototype`, `Function.prototype`, etc.

```js
const current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  }
  // It doesn't look like one of my objects, so let's fall back on
  // the default behavior by reproducing the current behavior as best we can.
  // The apply behaves like "super" in some other languages.
  // Even though valueOf() doesn't take arguments, some other hook may.
  return current.apply(this, args);
};
```

> [!WARNING]
> Das Ändern der `prototype`-Eigenschaft eines eingebauten Konstruktors wird als schlechte Praxis angesehen und birgt ein Risiko für die zukünftige Kompatibilität.

Mehr über Prototypen können Sie in [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Prototype Pollution-Angriff](/de/docs/Web/Security/Attacks/Prototype_pollution)
