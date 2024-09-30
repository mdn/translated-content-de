---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Object`**-Typ stellt einen der [Datentypen von JavaScript](/de/docs/Web/JavaScript/Data_structures) dar. Er wird verwendet, um verschiedene, benannte Sammlungen und komplexere Entitäten zu speichern. Objekte können mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder der [Objekt-Initialisierer-/Literalsyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Nahezu alle [Objekte](/de/docs/Web/JavaScript/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften überschrieben werden können. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind jene mit [`null`-Prototyp](#null-prototyp-objekte) oder jene, die von anderen `null`-Prototype-Objekten abstammen.

Änderungen am `Object.prototype`-Objekt werden durch Prototypverkettung von **allen** Objekten gesehen, es sei denn, die von diesen Änderungen betroffenen Eigenschaften und Methoden werden weiter entlang der Prototypkette überschrieben. Dies stellt eine sehr leistungsstarke, jedoch potenziell gefährliche Möglichkeit dar, das Verhalten von Objekten zu überschreiben oder zu erweitern. Um es sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache mit einem [unveränderlichen Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) — der Prototyp von `Object.prototype` ist immer `null` und nicht veränderbar.

### Eigenschaften des Objektprototyps

Sie sollten vermeiden, eine Methode von `Object.prototype` direkt von der Instanz aufzurufen, insbesondere jene, die nicht polymorph sein sollen (d. h. nur ihr ursprüngliches Verhalten ist sinnvoll und kein abgeleitetes Objekt könnte sie in sinnvoller Weise überschreiben). Alle Objekte, die von `Object.prototype` abstammen, können eine eigene benutzerdefinierte Eigenschaft definieren, die denselben Namen hat, aber völlig andere Semantik als erwartet. Diese Eigenschaften werden außerdem nicht von [`null`-Prototypobjekten](#null-prototyp-objekte) geerbt. Alle modernen JavaScript-Dienstprogramme zum Arbeiten mit Objekten sind [statisch](#statische_methoden). Genauer gesagt:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) sind polymorph und Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollem Verhalten definiert, sodass Sie sie als Instanzmethoden aufrufen können. `valueOf()` und `toString()` werden jedoch in der Regel implizit durch [Typumwandlung](/de/docs/Web/JavaScript/Data_structures#type_coercion) aufgerufen, und Sie müssen sie in Ihrem Code nicht selbst aufrufen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie stattdessen die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft ist veraltet und sollte nicht verwendet werden. Die Alternativen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können mit den statischen Methoden {{jsxref("Object.getOwnPropertyDescriptor()")}} bzw. {{jsxref("Object.hasOwn()")}} ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann in der Regel mit [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors prüfen.

Wo eine semantisch äquivalente statische Methode nicht existiert, oder wenn Sie wirklich die `Object.prototype`-Methode verwenden wollen, sollten Sie die `Object.prototype`-Methode stattdessen direkt mit [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf Ihrem Zielobjekt aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft hat, die unerwartete Ergebnisse produziert.

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

Es gibt keine Methode in einem Object selbst, um seine eigenen Eigenschaften zu löschen (wie etwa {{jsxref("Map.prototype.delete()")}}). Dazu muss der {{jsxref("Operators/delete", "delete")}}-Operator verwendet werden.

### null-Prototyp-Objekte

Fast alle Objekte in JavaScript erben letztlich von `Object.prototype` (siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototypobjekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objekt-Initialisierungssyntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (bemerken Sie: der `__proto__`-Schlüssel in Objektliteralen ist anders als die veraltete [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft). Sie können auch den Prototyp eines bestehenden Objekts in `null` ändern, indem Sie [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann sich unerwartet verhalten, da es keine Objekteigenschaften von `Object.prototype` erbt. Dies gilt insbesondere beim Debuggen, da gängige Objekteigenschaften-Konvertierungs-/Erkennungs-Dienstprogramme Fehler erzeugen können oder Informationen verlieren (insbesondere bei der Verwendung von stillen Fehlerfallen, die Fehler ignorieren).

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

Wir können die `toString`-Methode zum null-Prototyp-Objekt hinzufügen, indem wir sie zuweisen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` im Prototyp des Objekts ist, ist die `toString()`-Methode hier eine eigene Eigenschaft von `nullProtoObj`. Dies liegt daran, dass `nullProtoObj` keinen (`null`) Prototyp hat.

Man kann ein null-Prototyp-Objekt auch in ein gewöhnliches Objekt zurückverwandeln, indem man [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufruft.

In der Praxis werden Objekte mit `null` Prototyp in der Regel als günstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Das Vorhandensein von `Object.prototype`-Eigenschaften kann einige Fehler verursachen:

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

In solchen Fällen sollte die Hinzufügung von Methoden vorsichtig erfolgen, da sie mit den anderen als Daten gespeicherten Schlüssel-Wert-Paaren verwechselt werden können.

Das Verhindern, dass Ihr Objekt von `Object.prototype` erbt, verhindert auch Angriffe durch Prototypverschmutzung. Wenn ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, ist sie auf jedem Objekt in Ihrem Programm zugänglich, außer bei Objekten, die einen null-Prototyp haben.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript hat auch integrierte APIs, die `null`-Prototyp-Objekte erzeugen, insbesondere solche, die Objekte als Ad-hoc-Schlüssel-Wert-Sammlungen verwenden. Zum Beispiel:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die `groups`- und `indices.groups`-Eigenschaften des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]`-Objekte sollten einen `null`-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modulnamespace-Objekte, die durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) erhalten werden

Der Begriff "`null`-Prototyp-Objekt" umfasst oft auch jedes Objekt ohne `Object.prototype` in seiner Prototypkette. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) erstellt werden, wenn man Klassen verwendet.

### Objektumwandlung

Viele eingebaute Operationen, die Objekte erwarten, wandeln zuerst ihre Argumente in Objekte um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) lässt sich wie folgt zusammenfassen:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- Primitiven wie {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}} werden in ihre entsprechenden Objekt-Wrapper umgewandelt.

Es gibt zwei Möglichkeiten, nahezu denselben Effekt in JavaScript zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die oben beschriebenen Objektumwandlungsschritte aus, um `x` zu konvertieren.
- Die {{jsxref("Object/Object", "Object()")}} Funktion: `Object(x)` verwendet denselben Algorithmus zur Konvertierung von `x`, außer dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Stellen, die eine Objektumwandlung verwenden, umfassen:

- Das `object`-Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen.
- Der `this`-Wert von {{jsxref("Array")}}-Methoden.
- Parameter von `Object`-Methoden wie {{jsxref("Object.keys()")}}.
- Automatische Boxung, wenn auf einen Attribut auf einem primitiven Wert zugegriffen wird, da Primitive keine Eigenschaften haben.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert beim Aufrufen einer nichtstrikten Funktion. Primitive werden verpackt, während `null` und `undefined` durch das [globale Objekt](/de/docs/Glossary/Global_object) ersetzt werden.

Im Gegensatz zur [Konvertierung zu Primitiven](/de/docs/Web/JavaScript/Data_structures#primitive_coercion) ist der Objektumwandlungsprozess selbst in keiner Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString`- oder `valueOf`-Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Wandelt die Eingabe in ein Objekt um.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller aufzählbaren eigenen Eigenschaften von einem oder mehreren Quellobjekten in ein Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototypobjekt und Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt einem Objekt die beschriebenen benannten Eigenschaften hinzu, die durch die gegebenen Deskriptoren beschrieben werden.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt eine benannte Eigenschaft zu einem Objekt hinzu, die durch einen gegebenen Deskriptor beschrieben wird.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, das alle `[key, value]`-Paare der **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Andere Codes können nicht die Eigenschaften löschen oder ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt aus einem iterierbaren Element von `[key, value]`-Paaren zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaften-Deskriptor für eine benannte Eigenschaft eines Objekts zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaften-Deskriptoren eines Objekts enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren und nicht-auflistungsfähigen Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller direkt auf einem gegebenen Objekt gefundenen Symboleigenschaften zurück.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (interne `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterators entsprechend den String-Werten, die von einer bereitgestellten Rückruffunktion zurückgegeben werden. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als _eigene_ Eigenschaft hat, oder `false`, wenn die Eigenschaft geerbt ist oder nicht existiert.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Bewertet alle `NaN`-Werte als gleich (was sich sowohl von `IsLooselyEqual`, das von [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) verwendet wird, als auch von `IsStrictlyEqual`, das von [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) verwendet wird, unterscheidet).
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob die Erweiterung eines Objekts erlaubt ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren wurde.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert Erweiterungen eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass andere Codes Eigenschaften eines Objekts löschen.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp des Objekts (seine interne `[[Prototype]]`-Eigenschaft) fest.
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die allen **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts entsprechen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Object.prototype` definiert und werden von allen `Object`-Instanzen gemeinsam genutzt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Zeigt auf das Objekt, das beim Instanziieren des Objekts als Prototyp verwendet wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für einfache `Object`-Instanzen ist der anfängliche Wert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jeweils die `constructor`-Eigenschaft von ihrem jeweiligen `Constructor.prototype`-Objekt.

## Instanz-Methoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die beim Zugriff ausgeführt wird und ihren Rückgabewert zurückgibt.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die beim Festlegen ausgeführt wird und die Eigenschaft ändert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Getter an die angegebene Eigenschaft gebunden ist.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Setter an die angegebene Eigenschaft gebunden ist.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypkette geerbt wird.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob das Objekt, auf das diese Methode aufgerufen wird, in der Prototypkette des angegebenen Objekts ist.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob die angegebene Eigenschaft die [aufzählbare eigene](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine String-Repräsentation des Objekts zurück.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück.

## Beispiele

### Erstellen leerer Objekte

Das folgende Beispiel erstellt leere Objekte mit dem `new`-Schlüsselwort und verschiedenen Argumenten:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Verwenden des Objekt() Konstruktors, um Primitive in ein Objekt ihres jeweiligen Typs zu verwandeln

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um einen Objekt-Wrapper eines primitiven Werts zu erstellen.

Die folgenden Beispiele erstellen Variablen `o1` und `o2`, die {{jsxref("Boolean")}}- und {{jsxref("BigInt")}}-Werte speichern:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objektprototypen

Wenn Sie das Verhalten bestehender `Object.prototype`-Methoden ändern, überlegen Sie, Code durch das Einfügen von Code vor oder nach der bestehenden Logik zu erweitern. Zum Beispiel wird dieses (ungetestete) Codebeispiel benutzerdefinierte Logik vor der eingebauten Logik oder einer Erweiterung eines anderen ausführen.

Wenn Sie Prototypen mit Hooks ändern, übergeben Sie `this` und die Argumente (den Aufrufzustand) an das aktuelle Verhalten, indem Sie `apply()` auf der Funktion aufrufen. Dieses Muster kann für jeden Prototyp verwendet werden, wie etwa `Node.prototype`, `Function.prototype`, etc.

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
> Die Modifikation der `prototype`-Eigenschaft eines beliebigen eingebauten Konstruktors wird als schlechte Praxis betrachtet und birgt Risiken für die Kompatibilität in der Zukunft.

Weitere Informationen über Prototypen finden Sie in [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
