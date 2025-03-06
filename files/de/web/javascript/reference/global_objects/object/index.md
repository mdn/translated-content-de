---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Der **`Object`**-Typ repräsentiert einen der [JavaScript-Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures). Er wird verwendet, um verschiedene schlüsselbasierte Sammlungen und komplexere Entitäten zu speichern. Objekte können mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder der [Objektinitialisierung / Literalsyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Nahezu alle [Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften überschrieben werden können. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind diejenigen mit [`null`-Prototypen](#null-prototyp-objekte) oder solche, die von anderen `null`-Prototyp-Objekten abstammen.

Änderungen am `Object.prototype`-Objekt wirken sich auf **alle** Objekte durch die Prototypverkettung aus, es sei denn, die betroffenen Eigenschaften und Methoden werden weiter entlang der Prototypkette überschrieben. Dies bietet eine sehr leistungsfähige, wenn auch potenziell gefährliche Möglichkeit, das Verhalten von Objekten zu überschreiben oder zu erweitern. Um es sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das einen [unveränderlichen Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat — der Prototyp von `Object.prototype` ist immer `null` und nicht veränderbar.

### Objekt-Prototyp-Eigenschaften

Sie sollten vermeiden, Methoden des `Object.prototype` direkt von der Instanz aus aufzurufen, insbesondere diejenigen, die nicht polymorph sein sollen (d.h. nur ihr ursprüngliches Verhalten macht Sinn und kein absteigendes Objekt könnte es sinnvoll überschreiben). Alle von `Object.prototype` abstammenden Objekte können eine eigene benutzerdefinierte Eigenschaft definieren, die denselben Namen hat, aber völlig andere Semantik bietet als erwartet. Zudem werden diese Eigenschaften nicht von [`null`-Prototypobjekten](#null-prototyp-objekte) geerbt. Alle modernen JavaScript-Dienstprogramme für die Arbeit mit Objekten sind [statisch](#statische_methoden). Genauer gesagt:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) sind polymorph vorgesehen und Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, sodass Sie sie als Instanzmethoden aufrufen können. `valueOf()` und `toString()` werden jedoch normalerweise implizit durch [Typkonvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen, sodass Sie sie in Ihrem Code nicht selbst aufrufen müssen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}} stattdessen.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft ist veraltet und sollte nicht verwendet werden. Die {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} Alternativen sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können durch die {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.hasOwn()")}}-statischen Methoden ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann normalerweise durch [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors überprüfen.

In Fällen, in denen eine semantisch äquivalente statische Methode nicht existiert, oder wenn Sie wirklich die `Object.prototype`-Methode verwenden möchten, sollten Sie die `Object.prototype`-Methode direkt mit [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf Ihrem Zielobjekt aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft hat, die unerwartete Ergebnisse liefert.

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

In einem Objekt selbst gibt es keine Methode, um seine eigenen Eigenschaften zu löschen (wie {{jsxref("Map.prototype.delete()")}}). Dazu muss der {{jsxref("Operators/delete", "delete")}}-Operator verwendet werden.

### Null-Prototyp-Objekte

Fast alle Objekte in JavaScript erben letztlich von `Object.prototype` (siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototypobjekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objektinitialisierungssyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (Hinweis: Der `__proto__`-Schlüssel in Objektliteralen unterscheidet sich von der veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft). Sie können auch den Prototyp eines bestehenden Objekts in `null` ändern, indem Sie [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann sich in unerwarteter Weise verhalten, da es keine Objektmethoden von `Object.prototype` erbt. Dies ist besonders wahr beim Debuggen, da gängige Dienstprogramme für ObjektEigenschaften-Konvertierung/-Erkennung Fehler generieren können oder Informationen verlieren (besonders wenn stille Fehlerfallen verwendet werden, die Fehler ignorieren).

Zum Beispiel macht das Fehlen von [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) das Debuggen oft schwer nachvollziehbar:

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

Wir können die `toString`-Methode zum `null`-Prototyp-Objekt hinzufügen, indem wir sie einfügen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` auf dem Prototyp des Objekts liegt, ist die `toString()`-Methode hier eine eigene Eigenschaft von `nullProtoObj`. Dies liegt daran, dass `nullProtoObj` keinen (`null`) Prototyp hat.

Sie können auch ein Null-Prototyp-Objekt in ein normales Objekt zurückverwandeln, indem Sie [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) verwenden.

In der Praxis werden Objekte mit `null`-Prototyp meist als kostengünstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Die Anwesenheit von `Object.prototype`-Eigenschaften kann einige Fehler verursachen:

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

Die Verwendung eines Null-Prototyp-Objekts beseitigt dieses Risiko, ohne der `hasPerson`- und `getAge`-Funktion zu viel Komplexität hinzuzufügen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In einem solchen Fall sollte das Hinzufügen jeder Methode mit Vorsicht durchgeführt werden, da diese mit den anderen Schlüssel-Wert-Paaren, die als Daten gespeichert sind, verwechselt werden könnten.

Wenn Ihr Objekt nicht von `Object.prototype` erbt, verhindert dies auch Angriffe durch Prototyp-Verschmutzung. Wenn ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, wird diese auf jedem Objekt in Ihrem Programm zugänglich sein, außer Objekten, die einen `null`-Prototyp haben.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript hat auch eingebaute APIs, die `null`-Prototyp-Objekte erzeugen, insbesondere solche, die Objekte als ad hoc Schlüssel-Wert-Sammlungen verwenden. Zum Beispiel:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die `groups` und `indices.groups`-Eigenschaften des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]`-Objekte sollten `null`-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modul-Namensraum-Objekte, erhalten durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)

Der Begriff "`null`-Prototypobjekt" schließt oft auch jedes Objekt ein, das `Object.prototype` nicht in seiner Prototypkette hat. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) bei der Verwendung von Klassen erstellt werden.

### Objektumwandlung (Object Coercion)

Viele eingebaute Operationen, die Objekte erwarten, wandeln ihre Argumente erst in Objekte um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) lässt sich wie folgt zusammenfassen:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}}-Primitive werden in ihre entsprechenden Objekt-Wrapper eingepackt.

Es gibt zwei Möglichkeiten, nahezu denselben Effekt in JavaScript zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die oben erklärten Objektumwandlungsschritte aus, um `x` zu konvertieren.
- Die {{jsxref("Object/Object", "Object()")}}-Funktion: `Object(x)` verwendet denselben Algorithmus zur Konvertierung von `x`, außer dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Orte, die Objektumwandlung verwenden, beinhalten:

- Der `object`-Parameter in [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen.
- Der `this`-Wert von {{jsxref("Array")}}-Methoden.
- Parameter von `Object`-Methoden wie {{jsxref("Object.keys()")}}.
- Automatisches Boxing, wenn auf einen primitiven Wert eine Eigenschaft zugegriffen wird, da Primitive keine Eigenschaften haben.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert beim Aufrufen einer nicht-strengen Funktion. Primitive werden verpackt, während `null` und `undefined` durch das {{Glossary("Global_object", "globale Objekt")}} ersetzt werden.

Im Gegensatz zur [Umwandlung in Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) ist der Objektumwandlungsprozess selbst auf keine Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString`- oder `valueOf`-Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Wandelt die Eingabe in ein Objekt um.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller aufzählbaren eigenen Eigenschaften von einem oder mehreren Quellobjekten zu einem Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototypobjekt und Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt die beschriebenen benannten Eigenschaften zum gegebenen Objekt hinzu.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt eine benannte Eigenschaft, beschrieben durch einen gegebenen Deskriptor, zu einem Objekt hinzu.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, das alle `[key, value]`-Paare der **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Andere Codes können dessen Eigenschaften nicht löschen oder verändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt von einem iterierbaren Array von `[key, value]`-Paaren zurück. (Dies ist die Umkehrung von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaftsdeskriptor für eine benannte Eigenschaft auf einem Objekt zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaftsdeskriptoren eines Objekts enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren und nicht-auflistbaren Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller Symbol-Eigenschaften zurück, die direkt auf einem gegebenen Objekt gefunden wurden.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (interne `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables entsprechend den von einer bereitgestellten Callback-Funktion zurückgegebenen Stringwerten. Das zurückgegebene Objekt hat für jede Gruppe separate Eigenschaften, die Arrays mit den Elementen in der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als **eigene** Eigenschaft hat, oder `false`, wenn die Eigenschaft vererbt ist oder nicht existiert.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Setzt alle `NaN`-Werte gleich (was sich von `IsLooselyEqual` unterscheidet, das von [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) verwendet wird, und `IsStrictlyEqual`, das von [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) verwendet wird).
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob die Erweiterung eines Objekts zulässig ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren ist.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert jegliche Erweiterungen eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass anderer Code Eigenschaften eines Objekts löscht.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp des Objekts (seine interne `[[Prototype]]`-Eigenschaft).
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die allen **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts entsprechen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Object.prototype` definiert und werden von allen `Object`-Instanzen geteilt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Zeigt auf das Objekt, das als Prototyp verwendet wurde, als das Objekt instanziiert wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktionsfunktion, die das Instanzobjekt erstellt hat. Bei einfachen `Object`-Instanzen ist der Anfangswert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jeweils die `constructor`-Eigenschaft von ihrem jeweiligen `Constructor.prototype`-Objekt.

## Instanz-Methoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die bei Zugriff diese Funktion ausführt und ihren Rückgabewert liefert.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die bei Setzen dieser Eigenschaft diese Funktion ausführt, die die Eigenschaft verändert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Getter mit der angegebenen Eigenschaft verbunden ist.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Setter mit der angegebenen Eigenschaft verbunden ist.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypkette geerbt hat.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob das Objekt, auf dem diese Methode aufgerufen wird, sich in der Prototypkette des angegebenen Objekts befindet.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob die angegebene Eigenschaft die [enumerable own](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)-Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine Stringdarstellung des Objekts zurück.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück.

## Beispiele

### Erstellen leerer Objekte

Das folgende Beispiel erstellt leere Objekte mit dem `new`-Schlüsselwort mit verschiedenen Argumenten:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Konstruktor der Object() Funktion, um Primitive in ein Objekt ihres jeweiligen Typs zu verwandeln

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um einen Objekt-Wrapper eines primitiven Wertes zu erstellen.

Die folgenden Beispiele erstellen die Variablen `o1` und `o2`, die Objekte mit {{jsxref("Boolean")}}- und {{jsxref("BigInt")}}-Werten sind:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objektprototypen

Wenn Sie das Verhalten existierender `Object.prototype`-Methoden ändern, sollten Sie erwägen, Code durch das Einfügen von Erweiterungen vor oder nach der bestehenden Logik einzufügen. Zum Beispiel wird dieser (ungetestete) Code bei Bedingungseintritten eigene Logik vor der eingebauten Logik oder Erweiterung anderer ausführen.

Beim Modifizieren von Prototypen mit Hooks übergeben Sie `this` und die Argumente (den Aufrufstatus) an das aktuelle Verhalten, indem Sie `apply()` auf der Funktion aufrufen. Dieses Muster kann für jeden Prototyp verwendet werden, wie z.B. `Node.prototype`, `Function.prototype`, etc.

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
> Das Modifizieren der `prototype`-Eigenschaft eines eingebauten Konstruktors wird als schlechte Praxis betrachtet und kann die zukunftssichere Kompatibilität riskieren.

Sie können mehr über Prototypen in [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objektinitialisierung](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
