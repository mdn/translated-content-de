---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Der **`Object`**-Typ repräsentiert einen der [JavaScripts Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures). Er wird verwendet, um verschiedene schlüsselbasierte Sammlungen und komplexere Entitäten zu speichern. Objekte können entweder mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder der [Objektinitialisierer-/Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Fast alle [Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, auch wenn diese Eigenschaften überschattet (d.h. überschrieben) werden können. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind Objekte mit [`null`-Prototyp](#null-prototyp_objekte) oder solche, die von anderen `null`-Prototypobjekten abgeleitet sind.

Änderungen am `Object.prototype`-Objekt sind durch die Prototypkette für alle Objekte sichtbar, es sei denn, die Eigenschaften und Methoden, die diesen Änderungen unterliegen, werden weiter unten in der Prototypkette überschrieben. Dies bietet eine sehr mächtige, jedoch [potenziell gefährliche Mechanismus](/de/docs/Web/Security/Attacks/Prototype_pollution), um das Verhalten von Objekten zu überschreiben oder zu erweitern. Um es sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das einen [unveränderlichen Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat – der Prototyp von `Object.prototype` ist immer `null` und nicht änderbar.

### Eigenschaften des Objektprototyps

Sie sollten es vermeiden, Methoden von `Object.prototype` direkt von der Instanz aus aufzurufen, insbesondere jene, die nicht polymorph sein sollen (d.h. bei denen nur das ursprüngliche Verhalten sinnvoll ist und kein abgeleitetes Objekt es sinnvoll überschreiben könnte). Alle von `Object.prototype` abstammenden Objekte können eine eigene benutzerdefinierte Eigenschaft mit demselben Namen definieren, die jedoch völlig andere Semantiken bietet, als Sie erwarten. Außerdem werden diese Eigenschaften nicht von [`null`-Prototypobjekten](#null-prototyp_objekte) geerbt. Alle modernen JavaScript-Dienstprogramme für die Arbeit mit Objekten sind [statisch](#statische_methoden). Konkret:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) existieren, um polymorph zu sein, und Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, sodass Sie sie als Instanzmethoden aufrufen können. `valueOf()` und `toString()` werden in der Regel jedoch implizit durch [Typkonvertierung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen, und Sie müssen sie nicht selbst in Ihrem Code aufrufen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht mehr verwendet werden. Verwenden Sie stattdessen die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft ist veraltet und sollte nicht verwendet werden. Die Alternativen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können mit den statischen Methoden {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.hasOwn()")}} ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann normalerweise mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors überprüfen.

Falls es keine semantisch äquivalente statische Methode gibt oder wenn Sie wirklich die `Object.prototype`-Methode verwenden möchten, sollten Sie die `Object.prototype`-Methode direkt mit [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf Ihrem Zielobjekt aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft hat, die unerwartete Ergebnisse liefert.

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

### Eine Eigenschaft aus einem Objekt löschen

Es gibt keine Methode in einem Objekt selbst, um seine eigenen Eigenschaften zu löschen (wie z. B. {{jsxref("Map.prototype.delete()")}}). Um dies zu tun, muss man den {{jsxref("delete")}}-Operator verwenden.

### Null-Prototyp Objekte

Fast alle Objekte in JavaScript erben letztlich von `Object.prototype` (siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototypobjekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objektinitialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (beachten Sie: Der Schlüssel `__proto__` in Objektliteralen unterscheidet sich von der veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft). Sie können auch den Prototyp eines bestehenden Objekts auf `null` setzen, indem Sie [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann sich auf unerwartete Weise verhalten, da es keine Objektmethoden von `Object.prototype` erbt. Dies gilt insbesondere beim Debuggen, da gängige Werkzeuge zur Objekt-Eigenschaftskonvertierung/-erkennung Fehler erzeugen oder Informationen verlieren können (besonders wenn stille Fehlerschutzmaßnahmen verwendet werden, die Fehler ignorieren).

Zum Beispiel macht das Fehlen von [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) das Debuggen oft unlösbar:

```js
const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value
```

Andere Methoden werden ebenfalls scheitern.

```js
normalObj.valueOf(); // shows {}
nullProtoObj.valueOf(); // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p"); // shows "true"
nullProtoObj.hasOwnProperty("p"); // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor; // shows "Object() { [native code] }"
nullProtoObj.constructor; // shows "undefined"
```

Wir können die `toString`-Methode zurück zu dem Null-Prototypobjekt hinzufügen, indem wir ihm eine zuweisen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` im Prototyp des Objekts ist, ist die `toString()`-Methode hier eine eigene Eigenschaft von `nullProtoObj`. Das liegt daran, dass `nullProtoObj` keinen (`null`) Prototyp hat.

Sie können auch ein Null-Prototypobjekt zurück in ein gewöhnliches Objekt umwandeln, indem Sie [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

In der Praxis werden Objekte mit `null`-Prototyp oft als günstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Die Anwesenheit von `Object.prototype`-Eigenschaften kann einige Fehler verursachen:

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

Das Verwenden eines Null-Prototypobjekts beseitigt diese Gefahr, ohne zu viel Komplexität in die `hasPerson`- und `getAge`-Funktionen einzuführen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In einem solchen Fall sollte das Hinzufügen von Methoden vorsichtig erfolgen, da sie mit den anderen als Daten gespeicherten Schlüssel-Werte-Paaren verwechselt werden können.

Wenn Ihr Objekt nicht von `Object.prototype` erbt, verhindert es auch [Prototype Pollution-Angriffe](/de/docs/Web/Security/Attacks/Prototype_pollution). Wenn ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, wird sie auf jedem Objekt in Ihrem Programm zugänglich sein, außer auf Objekten, die einen Null-Prototyp haben.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript hat auch eingebaute APIs, die `null`-Prototypobjekte erzeugen, insbesondere solche, die Objekte als Ad-hoc-Schlüssel-Wert-Sammlungen verwenden. Zum Beispiel:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die `groups`- und `indices.groups`-Eigenschaften des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]`-Objekte sollten einen Null-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modul-Namespace-Objekte, die durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) erhalten werden

Der Begriff "`null`-Prototypobjekt" schließt oft auch alle Objekte ohne `Object.prototype` in ihrer Prototypkette ein. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) erstellt werden, wenn Klassen verwendet werden.

### Objektkoerzierung

Viele eingebaute Operationen, die Objekte erwarten, erzwingen zuerst, dass ihre Argumente zu Objekten umgewandelt werden. [Der Vorgang](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) kann wie folgt zusammengefasst werden:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen ein {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}} Primitive werden in ihre entsprechenden Objektumhüllungen gewickelt.

Es gibt zwei Möglichkeiten, fast denselben Effekt in JavaScript zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die oben erklärten Objektkoerzierungsschritte aus, um `x` zu konvertieren.
- Die {{jsxref("Object/Object", "Object()")}}-Funktion: `Object(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, mit der Ausnahme, dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Plätze, die Objektkoerzierung verwenden, sind:

- Der `object`-Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen.
- Der `this`-Wert von {{jsxref("Array")}}-Methoden.
- Parameter von `Object`-Methoden wie {{jsxref("Object.keys()")}}.
- Automatische Boxen, wenn auf einen primitiven Wert zugegriffen wird, da Primitive keine Eigenschaften haben.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert beim Aufrufen einer nicht-strikten Funktion. Primitive werden in einer Box verpackt, während `null` und `undefined` durch das {{Glossary("Global_object", "Globale Objekt")}} ersetzt werden.

Im Gegensatz zur [Konvertierung zu Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) ist der Koerzierungsvorgang selbst in keiner Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString`- oder `valueOf`-Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Konvertiert die Eingabe in ein Objekt.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller eigenen aufzählbaren Eigenschaften von einem oder mehreren Quellobjekten auf ein Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototyp-Objekt und Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt die in den gegebenen Deskriptoren beschriebenen benannten Eigenschaften zu einem Objekt hinzu.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt die in einem gegebenen Deskriptor beschriebene benannte Eigenschaft zu einem Objekt hinzu.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, das alle `[Key, Value]`-Paare der **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Anderer Code kann seine Eigenschaften nicht löschen oder ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt aus einem iterierbaren Objekt von `[Key, Value]`-Paaren zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaftsdeskriptor für eine benannte Eigenschaft eines Objekts zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaftsdeskriptoren für ein Objekt enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren und nicht aufzählbaren Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller unmittelbar auf einem gegebenen Objekt gefundenen Symbol-Eigenschaften zurück.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (interne `[[Prototyp]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen iterierbaren Objekts nach den von einer bereitgestellten Rückruffunktion zurückgegebenen String-Werten. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen in der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als _eigene_ Eigenschaft besitzt, oder `false`, wenn die Eigenschaft geerbt ist oder nicht existiert.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Sammelt alle `NaN`-Werte (was sich sowohl vom `IsLooselyEqual` beim [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) als auch vom `IsStrictlyEqual` beim [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) unterscheidet).
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob eine Erweiterung eines Objekts zugelassen ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren wurde.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren String-Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert alle Erweiterungen eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass anderer Code Eigenschaften eines Objekts löscht.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp des Objekts (seine interne `[[Prototype]]`-Eigenschaft).
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die den **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts entsprechen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Object.prototype` definiert und werden von allen `Object`-Instanzen geteilt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Verweist auf das Objekt, das als Prototyp verwendet wurde, als das Objekt instanziiert wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erzeugte. Für einfache `Object`-Instanzen ist der Anfangswert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jeweils die `constructor`-Eigenschaft von ihrem jeweiligen `Constructor.prototype`-Objekt.

## Instanzmethoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die beim Zugriff auf die Funktion ausgeführt wird und ihren Rückgabewert zurückgibt.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die beim Setzen ausgeführt wird und die Eigenschaft verändert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die als Getter an die angegebene Eigenschaft gebundene Funktion zurück.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die als Setter an die angegebene Eigenschaft gebundene Funktion zurück.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts und nicht durch die Prototypkette vererbt enthält.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Objekt, auf das diese Methode aufgerufen wird, in der Prototypkette des angegebenen Objekts ist.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die angegebene Eigenschaft die [aufzählbare eigene](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine String-Darstellung des Objekts zurück.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück.

## Beispiele

### Leere Objekte konstruieren

Das folgende Beispiel erstellt leere Objekte mithilfe des `new`-Schlüsselworts mit unterschiedlichen Argumenten:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Den Object()-Konstruktor verwenden, um Primitive in ein Objekt ihres entsprechenden Typs zu verwandeln

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um ein Objekt-Wrapper eines primitiven Werts zu erstellen.

Die folgenden Beispiele erstellen die Variablen `o1` und `o2`, welche Objekte sind, die {{jsxref("Boolean")}} und {{jsxref("BigInt")}} Werte speichern:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objektprototypen

Wenn Sie das Verhalten vorhandener `Object.prototype`-Methoden ändern, ziehen Sie in Betracht, Code einzufügen, indem Sie Ihre Erweiterung vor oder nach der vorhandenen Logik einwickeln. Zum Beispiel wird dieser (nicht getestete) Code benutzerdefinierte Logik vor der eingebauten Logik oder der Erweiterung eines anderen bedingt ausführen.

Wenn Sie Prototypen mit Hooks modifizieren, übergeben Sie `this` und die Argumente (den Aufrufzustand) an das aktuelle Verhalten, indem Sie `apply()` auf die Funktion aufrufen. Dieses Muster kann für jeden Prototyp verwendet werden, wie `Node.prototype`, `Function.prototype` usw.

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
> Das Ändern der `prototype`-Eigenschaft eines eingebauten Konstruktors wird als schlechte Praxis angesehen und birgt Risiken der zukünftigen Kompatibilität.

Sie können mehr über Prototypen in [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Prototype Pollution Angriff](/de/docs/Web/Security/Attacks/Prototype_pollution)
