---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Object`**-Typ repräsentiert einen der [JavaScript-Datentypen](/de/docs/Web/JavaScript/Data_structures). Er wird verwendet, um verschiedene schlüsselbasierte Sammlungen und komplexere Entitäten zu speichern. Objekte können entweder mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder mit der [Objektinitialisierer-/Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Nahezu alle [Objekte](/de/docs/Web/JavaScript/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften möglicherweise überschattet (auch bekannt als überschrieben) werden können. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind jene mit [`null`-Prototyp](#null-prototyp-objekte) oder jene, die von anderen `null`-Prototyp-Objekten abstammen.

Änderungen am `Object.prototype`-Objekt werden aufgrund der Prototypverkettung von **allen** Objekten übernommen, es sei denn, die betroffenen Eigenschaften und Methoden werden weiter entlang der Prototypkette erneut überschrieben. Dies bietet eine sehr leistungsstarke, jedoch potenziell gefährliche Möglichkeit, das Verhalten von Objekten zu überschreiben oder zu erweitern. Um dies sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das einen [unveränderlichen Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat — der Prototyp von `Object.prototype` ist immer `null` und nicht änderbar.

### Objektprototyp-Eigenschaften

Sie sollten vermeiden, eine Methode von `Object.prototype` direkt aus der Instanz heraus aufzurufen, insbesondere solche, die nicht polymorph sein sollen (d. h. nur ihr anfängliches Verhalten macht Sinn und kein absteigendes Objekt könnte sie sinnvoll überschreiben). Alle Objekte, die von `Object.prototype` abstammen, können eine eigene Eigenschaft definieren, die denselben Namen hat, aber eine völlig andere Bedeutung als erwartet. Darüber hinaus werden diese Eigenschaften nicht von [`null`-Prototyp-Objekten](#null-prototyp-objekte) geerbt. Alle modernen JavaScript-Dienstprogramme zum Arbeiten mit Objekten sind [statisch](#statische_methoden). Genauer gesagt:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) sind dazu da, polymorph zu sein, und Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, sodass Sie sie als Instanzmethoden aufrufen können. `valueOf()` und `toString()` werden jedoch normalerweise implizit durch [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) aufgerufen und Sie müssen sie nicht selbst in Ihrem Code aufrufen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie stattdessen die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft ist veraltet und sollte nicht verwendet werden. Die Alternativen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können jeweils durch die statischen Methoden {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.hasOwn()")}} ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann normalerweise durch [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors überprüfen.

Falls es keine semantisch äquivalente statische Methode gibt oder Sie die `Object.prototype`-Methode wirklich verwenden möchten, sollten Sie die `Object.prototype`-Methode direkt auf Ihrem Zielobjekt [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft hat, die unerwartete Ergebnisse liefert.

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

Es gibt keine Methode in einem Objetkt selbst, um seine eigenen Eigenschaften zu löschen (wie z. B. {{jsxref("Map.prototype.delete()")}}). Dazu muss der {{jsxref("Operators/delete", "delete")}}-Operator verwendet werden.

### null-Prototyp-Objekte

Fast alle Objekte in JavaScript erben letztendlich von `Object.prototype` (siehe [Vererbung und die Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototyp-Objekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objektinitialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (Hinweis: Der `__proto__`-Schlüssel in Objektliteralen unterscheidet sich von der veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft). Sie können auch den Prototyp eines vorhandenen Objekts auf `null` ändern, indem Sie [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann sich unerwartet verhalten, da es keine Objekteigenschaften von `Object.prototype` erbt. Dies gilt insbesondere beim Debuggen, da gängige Dienstprogramme zur Objekt-Eigenschafts-Konvertierung/-Erkennung Fehler erzeugen oder Informationen verlieren können (insbesondere bei der Verwendung stiller Fehlfallen, die Fehler ignorieren).

Zum Beispiel macht das Fehlen von [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) das Debuggen oft unlösbar:

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

Wir können die `toString`-Methode dem null-Prototyp-Objekt wieder hinzufügen, indem wir ihm eine zuweisen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` im Prototyp des Objekts liegt, ist die `toString()`-Methode hier eine eigene Eigenschaft von `nullProtoObj`. Dies liegt daran, dass `nullProtoObj` keinen (`null`) Prototyp hat.

Sie können ein null-Prototyp-Objekt auch wieder in ein gewöhnliches Objekt verwandeln, indem Sie [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

In der Praxis werden Objekte mit `null`-Prototyp normalerweise als günstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Das Vorhandensein von `Object.prototype`-Eigenschaften wird einige Fehler verursachen:

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

Die Verwendung eines null-Prototyp-Objekts beseitigt diese Gefahr, ohne zu viel Komplexität in die `hasPerson`- und `getAge`-Funktionen einzuführen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In einem solchen Fall sollte das Hinzufügen von Methoden vorsichtig erfolgen, da sie mit den anderen als Daten gespeicherten Schlüssel-Wert-Paaren verwechselt werden können.

Wenn Sie verhindern, dass Ihr Objekt von `Object.prototype` erbt, vermeiden Sie auch Angriffe durch Prototyp-Verschmutzung. Wenn ein böswilliges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, wird es in jedem Objekt in Ihrem Programm zugänglich sein, außer in Objekten mit einem `null`-Prototyp.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript hat auch integrierte APIs, die `null`-Prototyp-Objekte erzeugen, insbesondere solche, die Objekte als ad-hoc-Schlüssel-Wert-Sammlungen verwenden. Zum Beispiel:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die `groups`- und `indices.groups`-Eigenschaften des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]`-Objekte sollten `null`-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modul-Namensraum-Objekte, die durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) erhalten werden

Der Begriff "`null`-Prototyp-Objekt" umfasst oft auch jedes Objekt ohne `Object.prototype` in seiner Prototypkette. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) beim Verwenden von Klassen erstellt werden.

### Objektumwandlung

Viele eingebaute Operationen, die Objekte erwarten, erzwingen zuerst ihre Argumente in Objekte umzuwandeln. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) kann wie folgt zusammengefasst werden:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}}-Primitiven werden in ihre entsprechenden Objekt-Wrapper eingebettet.

Es gibt zwei Möglichkeiten, nahezu denselben Effekt in JavaScript zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die Objektumwandlungsschritte durch, die oben erklärt wurden, um `x` zu konvertieren.
- Die Funktion {{jsxref("Object/Object", "Object()")}}: `Object(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Orte, die Objektumwandlung verwenden, sind:

- Der `object`-Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen.
- Der `this`-Wert von {{jsxref("Array")}}-Methoden.
- Parameter von `Object`-Methoden wie {{jsxref("Object.keys()")}}.
- Automatische Boxung, wenn auf einen primitiven Wert eine Eigenschaft zugegriffen wird, da Primitiven keine Eigenschaften haben.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert beim Aufrufen einer nicht-strikten Funktion. Primitiven werden ummantelt, während `null` und `undefined` durch das [globale Objekt](/de/docs/Glossary/Global_object) ersetzt werden.

Im Gegensatz zur [Umwandlung in Primitiven](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) ist der Prozess der Objektumwandlung selbst in keiner Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString`- oder `valueOf`-Methoden aufruft.

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
  - : Gibt ein Array zurück, das alle `[key, value]`-Paare der eigenen aufzählbaren String-Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Andere Code kann seine Eigenschaften nicht löschen oder ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt aus einem iterierbaren der `[key, value]`-Paare zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaftsdeskriptor für eine benannte Eigenschaft eines Objekts zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt mit allen eigenen Eigenschaftsdeskriptoren eines Objekts zurück.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller eigenen aufzählbaren und nicht aufzählbaren Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller direkt auf einem gegebenen Objekt gefundenen Symbol-Eigenschaften zurück.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (interne `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterablen gemäß den von einer bereitgestellten Rückruffunktion zurückgegebenen Zeichenfolgenwerten. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen in der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als seine _eigene_ Eigenschaft besitzt, oder `false`, wenn die Eigenschaft vererbt ist oder nicht existiert.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Gleichsetzt alle `NaN`-Werte (unterscheidet sich von `IsLooselyEqual`, das von [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) verwendet wird, und `IsStrictlyEqual`, das von [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) verwendet wird).
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob das Erweitern eines Objekts erlaubt ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren wurde.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, das die Namen aller eigenen aufzählbaren String-Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert alle Erweiterungen eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass andere Code Eigenschaften eines Objekts löscht.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp des Objekts (seine interne `[[Prototype]]`-Eigenschaft).
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die allen eigenen aufzählbaren String-Eigenschaften eines gegebenen Objekts entsprechen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Object.prototype` definiert und werden von allen `Object`-Instanzen geteilt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Verweist auf das Objekt, das beim Instanziieren des Objekts als Prototyp verwendet wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für einfache `Object`-Instanzen ist der Anfangswert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jeweils die `constructor`-Eigenschaft vom jeweiligen `Constructor.prototype`-Objekt.

## Instanz-Methoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Ordnet einer Eigenschaft eine Funktion zu, die ausgeführt wird, wenn auf sie zugegriffen wird, und gibt ihren Rückgabewert zurück.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Ordnet einer Eigenschaft eine Funktion zu, die ausgeführt wird, wenn sie eingestellt wird, was die Eigenschaft modifiziert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Getter für die angegebene Eigenschaft gebunden ist.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Setter für die angegebene Eigenschaft gebunden ist.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypenkette vererbt wurde.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Objekt, auf dem diese Methode aufgerufen wird, in der Prototypenkette des angegebenen Objekts ist.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die angegebene Eigenschaft die [eigene aufzählbare](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaft des Objekts ist.
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

### Mit dem Object()-Konstruktor Primitiven in ein Objekt ihres jeweiligen Typs umwandeln

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um einen Objekt-Wrapper eines primitiven Wertes zu erstellen.

Die folgenden Beispiele erstellen die Variablen `o1` und `o2`, die Objekte speichern, die {{jsxref("Boolean")}} und {{jsxref("BigInt")}} Werte enthalten:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objektprototypen

Wenn Sie das Verhalten bestehender Methoden von `Object.prototype` ändern, sollten Sie in Erwägung ziehen, Code einzuspritzen, indem Sie Ihre Erweiterung vor oder nach der bestehenden Logik ausführen. Zum Beispiel führt dieser (nicht getestete) Code vor der eingebauten Logik oder einer Erweiterung eines anderen Entwicklers konditionell benutzerdefinierte Logik aus.

Beim Ändern von Prototypen mit Hooks übergeben Sie `this` und die Argumente (den Aufrufstatus) an das aktuelle Verhalten, indem Sie `apply()` auf die Funktion aufrufen. Dieses Muster kann für jeden Prototyp verwendet werden, wie z. B. `Node.prototype`, `Function.prototype`, etc.

```js
const current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  } else {
    // It doesn't look like one of my objects, so let's fall back on
    // the default behavior by reproducing the current behavior as best we can.
    // The apply behaves like "super" in some other languages.
    // Even though valueOf() doesn't take arguments, some other hook may.
    return current.apply(this, args);
  }
};
```

> [!WARNING]
> Das Ändern der `prototype`-Eigenschaft eines integrierten Konstruktors wird als schlechte Praxis angesehen und birgt das Risiko der zukünftigen Kompatibilität.

Weitere Informationen zu Prototypen finden Sie unter [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
