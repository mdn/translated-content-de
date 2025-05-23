---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{JSRef}}

Der **`Object`** Typ repräsentiert einen von [JavaScripts Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures). Er wird verwendet, um verschiedene sammlungsbezogene Zuordnungen und komplexere Entitäten zu speichern. Objekte können sowohl mit dem {{jsxref("Object/Object", "Object()")}} Konstruktor, als auch mit der [Objekt Initialisierung / Literal Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Nahezu alle [Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften überschrieben werden können. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind diejenigen mit einem [`null`-Prototyp](#null-prototyp-objekte), oder die von anderen `null`-Prototyp-Objekten abstammen.

Änderungen am `Object.prototype` Objekt werden durch Prototypverkettung von **allen** Objekten wahrgenommen, es sei denn, die betroffenen Eigenschaften und Methoden werden weiter unten in der Prototypkette überschrieben. Dies bietet eine sehr leistungsfähige, aber potenziell gefährliche Möglichkeit, das Verhalten von Objekten zu überschreiben oder zu erweitern. Um es sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das einen [unveränderlichen Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat — der Prototyp von `Object.prototype` ist immer `null` und nicht veränderbar.

### Eigenschaften des Objektprototyps

Sie sollten vermeiden, Methoden von `Object.prototype` direkt von der Instanz aufzurufen, insbesondere solche Methoden, die nicht polymorph sind (d.h. nur das anfängliche Verhalten macht Sinn und kein abgeleitetes Objekt könnte es sinnvoll überschreiben). Alle Objekte, die von `Object.prototype` abstammen, können eine benutzerdefinierte eigene Eigenschaft definieren, die denselben Namen hat, aber mit völlig anderen Semantiken als erwartet. Darüber hinaus werden diese Eigenschaften nicht von [`null`-Prototyp-Objekten](#null-prototyp-objekte) geerbt. Alle modernen JavaScript-Utilities zum Arbeiten mit Objekten sind [statisch](#statische_methoden). Genauer gesagt:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) sind polymorph, und Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, sodass Sie sie als Instanzmethoden aufrufen können. `valueOf()` und `toString()` werden jedoch normalerweise implizit durch [Typkonvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen, und Sie müssen sie nicht selbst in Ihrem Code aufrufen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie stattdessen die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Eigenschaft ist veraltet und sollte nicht verwendet werden. Die {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} Alternativen sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können durch die statischen Methoden {{jsxref("Object.getOwnPropertyDescriptor()")}} bzw. {{jsxref("Object.hasOwn()")}} ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann normalerweise durch [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype` Eigenschaft eines Konstruktors überprüfen.

Falls es keine semantisch äquivalente statische Methode gibt, oder wenn Sie die `Object.prototype` Methode wirklich verwenden möchten, sollten Sie die `Object.prototype` Methode direkt mit [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf Ihrem Zielobjekt aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft hat, die unerwartete Ergebnisse produziert.

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

Es gibt keine Methode in einem Objekt selbst, um seine eigenen Eigenschaften zu löschen (wie {{jsxref("Map.prototype.delete()")}}). Dazu muss der {{jsxref("Operators/delete", "delete")}} Operator verwendet werden.

### Null-Prototyp-Objekte

Fast alle Objekte in JavaScript erben letztlich von `Object.prototype` (siehe [Inheritance und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototyp-Objekte erstellen, indem Sie [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) verwenden oder die [Objekt Initialisierung Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` (Hinweis: Der `__proto__` Schlüssel in Objektliteralen unterscheidet sich von der veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Eigenschaft). Sie können auch den Prototyp eines bestehenden Objekts in `null` ändern, indem Sie [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit `null` Prototyp kann sich unerwartet verhalten, da es keine Objektmethoden von `Object.prototype` erbt. Dies ist besonders beim Debugging der Fall, da übliche Objekt-Eigenschaft-Umwandlungs-/Erkennungs-Utility-Funktionen möglicherweise Fehler erzeugen oder Informationen verlieren (insbesondere wenn stille Fehlerfallen verwendet werden, die Fehler ignorieren).

Zum Beispiel macht das Fehlen von [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) oft das Debuggen unnachvollziehbar:

```js
const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value
```

Auch andere Methoden werden fehlschlagen.

```js
normalObj.valueOf(); // shows {}
nullProtoObj.valueOf(); // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p"); // shows "true"
nullProtoObj.hasOwnProperty("p"); // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor; // shows "Object() { [native code] }"
nullProtoObj.constructor; // shows "undefined"
```

Wir können die `toString` Methode dem null-Prototyp-Objekt zurückgeben, indem wir ihm eine zuweisen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` im Prototyp des Objekts ist, ist die `toString()` Methode hier eine eigene Eigenschaft von `nullProtoObj`. Dies liegt daran, dass `nullProtoObj` keinen (`null`) Prototyp hat.

Sie können ein null-Prototyp-Objekt auch wieder in ein gewöhnliches Objekt zurückverwandeln, indem Sie [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) verwenden.

In der Praxis werden Objekte mit `null` Prototyp normalerweise als günstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Das Vorhandensein von `Object.prototype` Eigenschaften wird einige Fehler verursachen:

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

Die Verwendung eines null-Prototyp-Objekts beseitigt diese Gefahr, ohne zu viel Komplexität zu den Funktionen `hasPerson` und `getAge` hinzuzufügen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In einem solchen Fall sollte die Ergänzung einer Methode vorsichtig erfolgen, da sie mit den anderen als Daten gespeicherten Schlüssel-Wert-Paaren verwechselt werden kann.

Das Verhindern, dass Ihr Objekt von `Object.prototype` erbt, verhindert auch Angriffe durch Prototypverschmutzung. Wenn ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, wird sie in jedem Objekt in Ihrem Programm zugänglich sein, außer in Objekten, die einen null-Prototyp haben.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript hat auch eingebaute APIs, die `null`-Prototyp-Objekte erzeugen, insbesondere diejenigen, die Objekte als Ad-hoc-Schlüssel-Wert-Sammlungen verwenden. Zum Beispiel:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die Eigenschaften `groups` und `indices.groups` des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]` Objekte sollten einen null-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modul-Namensraum-Objekte, die durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) erhalten werden

Der Begriff "`null`-Prototyp-Objekt" bezieht sich oft auch auf jedes Objekt ohne `Object.prototype` in seiner Prototypkette. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) erstellt werden, wenn Klassen verwendet werden.

### Objektkoerzierung

Viele eingebaute Operationen, die Objekte erwarten, wandeln ihre Argumente zuerst in Objekte um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) kann wie folgt zusammengefasst werden:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}} Primitive werden in ihre entsprechenden Objektwrapper umgewandelt.

Es gibt zwei Möglichkeiten, nahezu denselben Effekt in JavaScript zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die oben erläuterten Schritte der Objektkoerzierung durch, um `x` umzuwandeln.
- Die {{jsxref("Object/Object", "Object()")}} Funktion: `Object(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Orte, die Objektkoerzierung verwenden, sind:

- Der `object` Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen.
- Der `this` Wert von {{jsxref("Array")}} Methoden.
- Parameter von `Object` Methoden wie {{jsxref("Object.keys()")}}.
- Automatisches Boxen, wenn eine Eigenschaft auf einem primitiven Wert zugegriffen wird, da Primitive keine Eigenschaften haben.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert beim Aufrufen einer nicht-strengen Funktion. Primitive werden ge-box-t, während `null` und `undefined` durch das {{Glossary("Global_object", "globale Objekt")}} ersetzt werden.

Im Gegensatz zur [Umwandlung in Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) ist der Prozess der Objektkoerzierung in keiner Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString` oder `valueOf` Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Wandelt die Eingabe in ein Objekt um.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller aufzählbaren eigenen Eigenschaften von einem oder mehreren Quellobjekten auf ein Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototypobjekt und Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt einem Objekt die benannten Eigenschaften hinzu, die durch die gegebenen Deskriptoren beschrieben werden.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt einer Eigenschaft, die durch einen gegebenen Deskriptor beschrieben wird, einem Objekt hinzu.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, das alle `[key, value]` Paare der **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Anderer Code kann seine Eigenschaften nicht löschen oder ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt aus einem iterierbaren von `[key, value]` Paaren zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt eine Eigenschaftsbeschreibung für eine benannte Eigenschaft auf einem Objekt zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaftsdeskriptoren für ein Objekt enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren und nicht-aufruftbaren Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller auf einem bestimmten Objekt gefundenen Symboleigenschaften zurück.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (interne `[[Prototype]]` Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables gemäß den von einer bereitgestellten Callback-Funktion zurückgegebenen String-Werten. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen in der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als **eigene** Eigenschaft hat, oder `false`, wenn die Eigenschaft vererbt oder nicht vorhanden ist.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Setzt alle `NaN` Werte gleich (was sich von sowohl `IsLooselyEqual`, verwendet von [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality), als auch `IsStrictlyEqual`, verwendet von [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality), unterscheidet).
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob das Erweitern eines Objekts erlaubt ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren wurde.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren String-Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert jegliche Erweiterungen eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass anderer Code Eigenschaften eines Objekts löscht.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp (seine interne `[[Prototype]]` Eigenschaft) des Objekts.
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die allen **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts entsprechen.

## Instanzeigenschaften

Diese Eigenschaften sind in `Object.prototype` definiert und werden von allen `Object` Instanzen geteilt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Zeigt auf das Objekt, das als Prototyp verwendet wurde, als das Objekt instanziiert wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für einfache `Object` Instanzen ist der Anfangswert der {{jsxref("Object/Object", "Object")}} Konstruktor. Instanzen anderer Konstruktoren erben jeweils die `constructor` Eigenschaft von ihrem jeweiligen `Constructor.prototype` Objekt.

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
  - : Gibt einen boolean zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypenkette vererbt wurde.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen boolean zurück, der angibt, ob das Objekt, auf dem diese Methode aufgerufen wird, in der Prototypenkette des angegebenen Objekts ist.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen boolean zurück, der angibt, ob die angegebene Eigenschaft die [aufzählbare eigene](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine String-Darstellung des Objekts zurück.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück.

## Beispiele

### Erstellen leerer Objekte

Das folgende Beispiel erstellt leere Objekte mit dem `new` Schlüsselwort mit unterschiedlichen Argumenten:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Verwenden des Object() Konstruktors, um Primitive in ein Objekt ihres jeweiligen Typs zu verwandeln

Sie können den {{jsxref("Object/Object", "Object()")}} Konstruktor verwenden, um eine Objektwrapper eines primitiven Werts zu erstellen.

Die folgenden Beispiele erstellen die Variablen `o1` und `o2`, die {{jsxref("Boolean")}} und {{jsxref("BigInt")}} Werte speichern:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objektprototypen

Beim Ändern des Verhaltens vorhandener `Object.prototype` Methoden sollten Sie erwägen, Code durch Einfügen vor oder nach der bestehenden Logik zu injizieren. Zum Beispiel wird dieser (nicht getestete) Code benutzerdefinierte Logik vor der eingebauten Logik oder jemand anderes Erweiterung ausgeführen.

Beim Modifizieren von Prototypen mit Hooks, übergeben Sie `this` und die Argumente (den Aufrufzustand) an das aktuelle Verhalten, indem Sie `apply()` auf die Funktion aufrufen. Dieses Muster kann für jeden Prototyp verwendet werden, wie z.B. `Node.prototype`, `Function.prototype`, etc.

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
> Das Modifizieren der `prototype` Eigenschaft eines eingebauten Konstruktors gilt als schlechte Praxis und birgt Risiken für die Zukunftskompatibilität.

Sie können mehr über Prototypen in [Inheritance und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objekt Initialisierung](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
