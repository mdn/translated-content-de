---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: d79694384ccc58726f27102dd9f32fcb1c8e28ad
---

{{JSRef}}

Der **`Object`**-Typ repräsentiert einen der [JavaScript-Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures). Er wird verwendet, um verschiedene getastete Sammlungen und komplexere Entitäten zu speichern. Objekte können mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder der [Objekt-Initialisierer-/Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Fast alle [Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften überschattet (sprich: überschrieben) werden können. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind diejenigen mit [`null`-Prototyp](#null-prototyp-objekte) oder abgeleitet von anderen `null`-Prototyp-Objekten.

Änderungen am `Object.prototype`-Objekt sind durch die Prototypverkettung bei **allen** Objekten sichtbar, es sei denn, die Eigenschaften und Methoden, die von diesen Änderungen betroffen sind, werden weiter entlang der Prototypenkette überschrieben. Dies bietet einen sehr mächtigen, jedoch potenziell gefährlichen Mechanismus, um das Verhalten von Objekten zu überschreiben oder zu erweitern. Um es sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das einen [unveränderbaren Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat — der Prototyp von `Object.prototype` ist immer `null` und nicht veränderbar.

### Object Prototype-Eigenschaften

Sie sollten vermeiden, die `Object.prototype`-Methoden direkt von der Instanz aufzurufen, insbesondere diejenigen, die nicht dafür gedacht sind, polymorph zu sein (d.h. nur ihr anfängliches Verhalten ergibt Sinn und kein abgeleitetes Objekt könnte sie sinnvoll überschreiben). Alle Objekte, die von `Object.prototype` abgeleitet sind, können eine benutzerdefinierte Eigen-Eigenschaft definieren, die denselben Namen hat, jedoch mit völlig anderen Bedeutungen, als Sie erwarten. Darüber hinaus erben diese Eigenschaften nicht von [`null`-Prototyp-Objekten](#null-prototyp-objekte). Alle modernen JavaScript-Utensilien zur Arbeit mit Objekten sind [statisch](#statische_methoden). Genauer:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) existieren, um polymorph zu sein, und Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, so dass Sie sie als Instanzmethoden aufrufen können. `valueOf()` und `toString()` werden jedoch in der Regel implizit durch [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen, und Sie müssen sie nicht selbst in Ihrem Code aufrufen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie stattdessen die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Eigenschaft ist veraltet und sollte nicht verwendet werden. Die {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} Alternativen sind statische Methoden.
- Die [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) Methoden können durch die {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.hasOwn()")}} statischen Methoden ersetzt werden.
- Die [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) Methode kann in der Regel durch [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors überprüfen.

Falls eine semantisch äquivalente statische Methode nicht existiert oder wenn Sie wirklich die `Object.prototype`-Methode verwenden möchten, sollten Sie die `Object.prototype`-Methode direkt mit [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf Ihrem Zielobjekt aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft hat, die unerwartete Ergebnisse erzeugt.

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

### Löschen einer Eigenschaft von einem Objekt

Es gibt keine Methode in einem Objekt selbst, um seine eigenen Eigenschaften zu löschen (wie {{jsxref("Map.prototype.delete()")}}). Dazu muss der {{jsxref("Operators/delete", "delete")}}-Operator verwendet werden.

### null-Prototyp-Objekte

Fast alle Objekte in JavaScript erben letztlich von `Object.prototype` (siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototyp-Objekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objekt-Initialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (Hinweis: der `__proto__` Schlüssel in Objektliteralen unterscheidet sich von der veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Eigenschaft). Sie können auch den Prototyp eines vorhandenen Objekts durch Aufruf von [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) auf `null` ändern.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann sich unerwartet verhalten, da es keine Objektmethoden von `Object.prototype` erbt. Dies gilt besonders beim Debuggen, da gängige Objekt-Eigenschafts-Konvertierungs-/Erkennungs-Dienstprogramme Fehler generieren oder Informationen verlieren können (insbesondere bei stillen Fehlerfallen, die Fehler ignorieren).

Zum Beispiel macht das Fehlen von [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) das Debuggen oft unmöglich:

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

Wir können die `toString`-Methode durch Zuweisung zu einem `null`-Prototyp-Objekt wieder hinzufügen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` auf dem Prototyp des Objekts ist, ist die `toString()`-Methode hier eine eigene Eigenschaft von `nullProtoObj`. Dies liegt daran, dass `nullProtoObj` keinen (`null`) Prototyp hat.

Sie können ein null-Prototyp-Objekt auch in ein gewöhnliches Objekt zurückversetzen, indem Sie [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

In der Praxis werden Objekte mit `null`-Prototypen üblicherweise als günstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Die Anwesenheit von `Object.prototype`-Eigenschaften wird einige Fehler verursachen:

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

Die Verwendung eines null-Prototyp-Objekts beseitigt dieses Risiko, ohne allzu viel Komplexität in die `hasPerson`- und `getAge`-Funktionen einzuführen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In solchen Fällen sollte die Hinzufügung jeglicher Methode mit Vorsicht erfolgen, da sie mit anderen als Daten gespeicherten Schlüssel-Wert-Paaren verwechselt werden können.

Wenn Sie Ihr Objekt nicht von `Object.prototype` erben lassen, verhindern Sie auch Prototypenverschmutzungsangriffe. Wenn ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, wird diese in jedem Objekt in Ihrem Programm zugänglich sein, außer Objekten, die einen null-Prototyp haben.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript hat auch integrierte APIs, die `null`-Prototyp-Objekte erzeugen, insbesondere solche, die Objekte als ad-hoc Schlüssel-Wert-Sammlungen verwenden. Beispiele:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die `groups` und `indices.groups` Eigenschaften des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]`-Objekte sollten einen `null`-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modul-Namespace-Objekte, erhalten durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)

Der Begriff "`null`-Prototyp-Objekt" schließt oft auch jedes Objekt ohne `Object.prototype` in seiner Prototypenkette ein. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) erstellt werden, wenn Klassen verwendet werden.

### Objektumwandlung

Viele eingebaute Operationen, die Objekte erwarten, zwingen zuerst ihre Argumente in Objekte um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) kann wie folgt zusammengefasst werden:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}}-Primitiven werden in ihre entsprechenden Objekt-Wrapper gehüllt.

Es gibt zwei Möglichkeiten, um in JavaScript nahezu denselben Effekt zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die Objektumwandlungsschritte aus, die oben erklärt wurden, um `x` zu konvertieren.
- Die {{jsxref("Object/Object", "Object()")}} Funktion: `Object(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Orte, die Objektumwandlung verwenden, sind:

- Der `object`-Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen.
- Der `this`-Wert von {{jsxref("Array")}} Methoden.
- Parameter von `Object`-Methoden wie {{jsxref("Object.keys()")}}.
- Auto-Boxing, wenn eine Eigenschaft auf einem primitiven Wert zugegriffen wird, da Primitive keine Eigenschaften haben.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert beim Aufruf einer nicht-strikten Funktion. Primitive werden verpackt, während `null` und `undefined` durch das {{Glossary("Global_object", "globale Objekt")}} ersetzt werden.

Im Gegensatz zur [Umwandlung in Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) ist der Objektumwandlungsprozess selbst in keiner Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString` oder `valueOf` Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Wandelt die Eingabe in ein Objekt um.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller eigenen aufzählbaren Eigenschaften von einem oder mehreren Quell-Objekten zu einem Ziel-Objekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototypobjekt und Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt die angegebenen Eigenschaften, beschrieben durch die gegebenen Deskriptoren, einem Objekt hinzu.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt die benannte Eigenschaft, beschrieben durch einen gegebenen Deskriptor, einem Objekt hinzu.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, das alle `[key, value]` Paare der **eigenen** aufzählbaren Zeichenfolgeneigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Anderer Code kann seine Eigenschaften nicht löschen oder ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt von einem iterierbaren `[key, value]` Paar zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaftsdeskriptor für eine benannte Eigenschaft auf einem Objekt zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaftsdeskriptoren für ein Objekt enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren und nicht aufzählbaren Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller Symbol-Eigenschaften zurück, die direkt auf einem gegebenen Objekt gefunden wurden.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (interne `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables gemäß der von einer bereitgestellten Callback-Funktion zurückgegebenen Zeichenfolgenwerte. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen in der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die genannte Eigenschaft als _eigene_ Eigenschaft hat, oder `false`, wenn die Eigenschaft vererbt wird oder nicht existiert.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Gleichsetzt alle `NaN`-Werte (was sich von `IsLooselyEqual` unterscheidet, das von [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) und `IsStrictlyEqual` verwendet wird, das von [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) verwendet wird).
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob das Erweitern eines Objekts zulässig ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren wurde.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren Zeichenfolgeneigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert jegliche Erweiterungen eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass anderer Code Eigenschaften eines Objekts löscht.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp (die interne `[[Prototype]]`-Eigenschaft) eines Objekts.
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die allen **eigenen** aufzählbaren Zeichenfolgeneigenschaften eines gegebenen Objekts entsprechen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Object.prototype` definiert und werden von allen `Object`-Instanzen geteilt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Zeigt auf das Objekt, das als Prototyp verwendet wurde, als das Objekt instanziiert wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Für einfache `Object`-Instanzen ist der anfängliche Wert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jeweils die `constructor`-Eigenschaft vom jeweiligen `Constructor.prototype`-Objekt.

## Instanz-Methoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Ordnet eine Funktion einer Eigenschaft zu, die, wenn darauf zugegriffen wird, diese Funktion ausführt und ihren Rückgabewert zurückgibt.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Ordnet eine Funktion einer Eigenschaft zu, die, wenn sie gesetzt wird, diese Funktion ausführt, die die Eigenschaft modifiziert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Getter an die angegebene Eigenschaft gebunden ist.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Setter an die angegebene Eigenschaft gebunden ist.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt ein Boolean zurück, das angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypenkette vererbt wird.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt ein Boolean zurück, das angibt, ob das Objekt, auf dem diese Methode aufgerufen wird, in der Prototypenkette des angegebenen Objekts liegt.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt ein Boolean zurück, das angibt, ob die angegebene Eigenschaft die [aufzählbare eigene](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine Zeichenfolgenrepräsentation des Objekts zurück.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück.

## Beispiele

### Leere Objekte konstruieren

Das folgende Beispiel erstellt leere Objekte mit dem `new`-Schlüsselwort mit unterschiedlichen Argumenten:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Verwenden des Object()-Konstruktors, um Primitive in ein Objekt ihres jeweiligen Typs zu verwandeln

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um einen Objekt-Wrapper eines primitiven Werts zu erstellen.

Die folgenden Beispiele erstellen die Variablen `o1` und `o2`, die Objekte speichern, die {{jsxref("Boolean")}}- und {{jsxref("BigInt")}}-Werte speichern:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objektprototypen

Wenn Sie das Verhalten vorhandener `Object.prototype`-Methoden ändern, ziehen Sie in Betracht, Code durch Einschleusen Ihrer Erweiterung vor oder nach der bestehenden Logik hinzuzufügen. Zum Beispiel wird dieser (ungetestete) Code vorbedingungsbedingte benutzerdefinierte Logik ausführen, bevor die eingebaute Logik oder jemandes andere Erweiterung ausgeführt wird.

Beim Modifizieren von Prototypen mit Hooks übergeben Sie `this` und die Argumente (den Aufrufzustand) an das aktuelle Verhalten, indem Sie `apply()` auf der Funktion aufrufen. Dieses Muster kann für jeden Prototyp verwendet werden, wie `Node.prototype`, `Function.prototype`, etc.

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
> Das Modifizieren der `prototype`-Eigenschaft eines eingebauten Konstruktors wird als schlechte Praxis angesehen und birgt Risiken für die Zukunftskompatibilität.

Sie können mehr über Prototypen in [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
