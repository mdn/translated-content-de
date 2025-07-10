---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Der **`Object`**-Typ repräsentiert einen von [JavaScript's Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures). Er wird verwendet, um verschiedene Schlüsselkollektionen und komplexere Entitäten zu speichern. Objekte können mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder der [Objekt-Initialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Nahezu alle [Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften möglicherweise überschattet (d.h. überschrieben) werden. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind solche mit [`null`-Prototyp](#null-prototyp-objekte) oder von anderen `null`-Prototyp-Objekten abstammen.

Änderungen am `Object.prototype`-Objekt sind bei **allen** Objekten durch Prototypenverkettung sichtbar, es sei denn, die Eigenschaften und Methoden, die von diesen Änderungen betroffen sind, werden weiter entlang der Prototypkette überschrieben. Dies bietet eine sehr mächtige, wenn auch potenziell gefährliche Möglichkeit, das Verhalten von Objekten zu überschreiben oder zu erweitern. Um es sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das [unveränderlichen Prototypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat — der Prototyp von `Object.prototype` ist immer `null` und nicht veränderbar.

### Eigenschaften des Objekt-Prototyps

Sie sollten vermeiden, eine der `Object.prototype`-Methoden direkt aus der Instanz aufzurufen, insbesondere solche, die nicht polymorph gestaltet sind (d.h. nur das anfängliche Verhalten macht Sinn, und kein abgeleitetes Objekt könnte es sinnvoll überschreiben). Alle von `Object.prototype` abgeleiteten Objekte können eine eigene benutzerdefinierte Eigenschaft mit demselben Namen definieren, aber mit völlig anderen Semantiken als erwartet. Außerdem werden diese Eigenschaften nicht von [`null`-Prototyp-Objekten](#null-prototyp-objekte) geerbt. Alle modernen JavaScript-Dienstprogramme zur Arbeit mit Objekten sind [statisch](#statische_methoden). Genauer gesagt:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) sind dafür gedacht, polymorph zu sein, und Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, so dass Sie sie als Instanzmethoden aufrufen können. Allerdings werden `valueOf()` und `toString()` normalerweise implizit durch [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen und Sie müssen sie nicht selbst in Ihrem Code aufrufen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie stattdessen die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft ist veraltet und sollte nicht verwendet werden. Die Alternativen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können durch die statischen Methoden {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.hasOwn()")}} ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann normalerweise durch [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors überprüfen.

Falls keine semantisch äquivalente statische Methode existiert oder Sie wirklich die `Object.prototype`-Methode verwenden möchten, sollten Sie die `Object.prototype`-Methode direkt mit [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf Ihrem Zielobjekt aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft hat, die unerwartete Ergebnisse liefert.

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

Es gibt keine Methode in einem Objekt selbst, um seine eigenen Eigenschaften zu löschen (wie {{jsxref("Map.prototype.delete()")}}). Um dies zu tun, muss der Operator {{jsxref("Operators/delete", "delete")}} verwendet werden.

### Null-Prototyp-Objekte

Fast alle Objekte in JavaScript erben letztendlich von `Object.prototype` (siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototyp-Objekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objekt-Initialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (Hinweis: der `__proto__`-Schlüssel in Objekt-Literalen unterscheidet sich von der veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft). Sie können den Prototyp eines vorhandenen Objekts auch mit einem Aufruf von [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) in `null` ändern.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann sich auf unerwartete Weise verhalten, da es keine Objektmethoden von `Object.prototype` erbt. Dies gilt besonders beim Debuggen, da gewöhnliche Objekt-Eigenschaftsumwandlungs-/Erkennungs-Dienstprogramme Fehlermeldungen erzeugen oder Informationen verlieren können (insbesondere bei Verwendung stiller Fehlerrückhalter, die Fehler ignorieren).

Zum Beispiel macht das Fehlen von [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) das Debuggen oft unrückverfolgbar:

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

Wir können die `toString`-Methode dem Null-Prototyp-Objekt zurückgeben, indem wir ihm eine zuweisen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` auf dem Prototyp des Objekts liegt, ist hier die `toString()`-Methode eine eigene Eigenschaft von `nullProtoObj`. Dies liegt daran, dass `nullProtoObj` keinen (`null`) Prototyp hat.

Sie können auch ein Null-Prototyp-Objekt wieder in ein gewöhnliches Objekt umwandeln, indem Sie [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

In der Praxis werden Objekte mit `null`-Prototyp häufig als günstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Das Vorhandensein von `Object.prototype`-Eigenschaften kann einige Probleme verursachen:

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

Die Verwendung eines Null-Prototyp-Objekts beseitigt diese Gefahr, ohne zu viel Komplexität in die `hasPerson`- und `getAge`-Funktionen einzuführen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In einem solchen Fall sollte die Hinzufügung von Methoden vorsichtig erfolgen, da sie mit anderen, als Daten gespeicherten Schlüssel-Wert-Paaren verwechselt werden können.

Wenn Ihr Objekt nicht von `Object.prototype` erbt, verhindert dies auch Angriffe durch Prototypenverschmutzung. Wenn ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, ist diese Eigenschaft in jedem Objekt in Ihrem Programm zugänglich, außer bei Objekten, die einen Null-Prototyp haben.

```js
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript hat auch integrierte APIs, die `null`-Prototyp-Objekte erzeugen, insbesondere solche, die Objekte als aus der Not geborene Schlüssel-Wert-Sammlungen verwenden. Zum Beispiel:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die `groups`- und `indices.groups`-Eigenschaften des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]`-Objekte sollten einen `null`-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modul-Namespace-Objekte, die durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) erhalten werden

Der Begriff "`null`-Prototyp-Objekt" schließt oft auch jedes Objekt ein, dessen Prototypenkette `Object.prototype` nicht enthält. Solche Objekte können erstellt werden mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null), wenn Sie Klassen verwenden.

### Objektumwandlung

Viele eingebaute Operationen, die Objekte erwarten, wandeln ihre Argumente zuerst in Objekte um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) lässt sich wie folgt zusammenfassen:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}}-Primitiven werden in ihre entsprechenden Objekt-Wrapper gewickelt.

Es gibt zwei Möglichkeiten, um in JavaScript fast den gleichen Effekt zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die oben erklärten Objektumwandlungsschritte aus, um `x` zu konvertieren.
- Die {{jsxref("Object/Object", "Object()")}}-Funktion: `Object(x)` verwendet denselben Algorithmus zur Umwandlung von `x`, außer dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Orte, die Objektumwandlung verwenden, umfassen:

- Der `object`-Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen.
- Der `this`-Wert von {{jsxref("Array")}}-Methoden.
- Parameter von `Object`-Methoden wie {{jsxref("Object.keys()")}}.
- Auto-Boxing, wenn eine Eigenschaft auf einem Primärwert zugegriffen wird, da Primitiven keine Eigenschaften haben.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert beim Aufruf einer nicht-strikten Funktion. Primitiven werden verpackt, während `null` und `undefined` durch das {{Glossary("Global_object", "globale Objekt")}} ersetzt werden.

Im Gegensatz zur [Umwandlung in Primitive](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) ist der Objektumwandlungsprozess selbst in keiner Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString`- oder `valueOf`-Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Wandelt die Eingabe in ein Objekt um.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller aufzählbaren eigenen Eigenschaften von einem oder mehreren Quellobjekten auf ein Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototyp-Objekt und Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt die benannten Eigenschaften, wie durch die angegebenen Deskriptoren beschrieben, zu einem Objekt hinzu.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt die benannte Eigenschaft, wie durch einen gegebenen Deskriptor beschrieben, zu einem Objekt hinzu.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, das alle `[key, value]`-Paare der **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Anderer Code kann seine Eigenschaften nicht löschen oder ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt aus einem iterierbaren `[key, value]`-Paar zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaftsdeskriptor für eine benannte Eigenschaft auf einem Objekt zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaftsdeskriptoren für ein Objekt enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren und nicht-auzählbaren Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller direkt auf einem gegebenen Objekt gefundenen Symbol-Eigenschaften zurück.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (interne `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen iterierbaren Objekts nach den String-Werten, die von einer bereitgestellten Rückruffunktion zurückgegeben werden. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen in der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als seine _eigene_ Eigenschaft hat, oder `false`, wenn die Eigenschaft geerbt oder nicht vorhanden ist.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Vergleicht alle `NaN`-Werte (was sich von sowohl `IsLooselyEqual` verwendet durch [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) als auch `IsStrictlyEqual` verwendet durch [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) unterscheidet).
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
  - : Setzt den Prototyp (die interne `[[Prototype]]`-Eigenschaft) des Objekts.
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die allen **eigenen** aufzählbaren String-Eigenschaften eines gegebenen Objekts entsprechen.

## Instanz-Eigenschaften

Diese Eigenschaften sind in `Object.prototype` definiert und werden von allen `Object`-Instanzen geteilt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Zeigt auf das Objekt, das als Prototyp verwendet wurde, als das Objekt instanziiert wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für einfache `Object`-Instanzen ist der Anfangswert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jede die `constructor`-Eigenschaft von ihrem jeweiligen `Constructor.prototype`-Objekt.

## Instanz-Methoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die bei Zugriff diese Funktion ausführt und ihren Rückgabewert zurückgibt.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die, wenn sie gesetzt wird, diese Funktion ausführt, die die Eigenschaft verändert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die als Getter an die angegebene Eigenschaft gebundene Funktion zurück.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die als Setter an die angegebene Eigenschaft gebundene Funktion zurück.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypenkette geerbt wurde.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Objekt, auf das diese Methode aufgerufen wird, in der Prototypenkette des angegebenen Objekts ist.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die angegebene Eigenschaft die [aufzählbare eigene](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine Zeichenfolgen-Darstellung des Objekts zurück.
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

### Verwenden des Object()-Konstruktors zur Umwandlung von Primitiven in ein Objekt ihres entsprechenden Typs

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um ein Objekt-Wrapper eines primitiven Wertes zu erstellen.

Die folgenden Beispiele erstellen Variablen `o1` und `o2`, die Objekte sind, die {{jsxref("Boolean")}}- und {{jsxref("BigInt")}}-Werte speichern:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objekt-Prototypen

Wenn Sie das Verhalten bestehender `Object.prototype`-Methoden ändern, sollten Sie das Einspritzen von Code in Betracht ziehen, indem Sie Ihre Erweiterung vor oder nach der bestehenden Logik ausführen. Zum Beispiel führt dieser (ungetestete) Code benutzerdefinierte Logik bedingt vor der eingebauten Logik oder der Erweiterung von jemand anderem aus.

Beim Modifizieren von Prototypen mit Hooks übergeben Sie `this` und die Argumente (den Aufrufzustand) an das aktuelle Verhalten, indem Sie `apply()` auf die Funktion aufrufen. Dieses Muster kann für jeden Prototyp verwendet werden, wie z.B. `Node.prototype`, `Function.prototype`, usw.

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
> Das Modifizieren der `prototype`-Eigenschaft eines eingebauten Konstruktors wird als eine schlechte Praxis angesehen und birgt ein Risiko für die zukünftige Kompatibilität.

Mehr zu Prototypen können Sie im Artikel [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
