---
title: Objekt
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Der **`Object`**-Typ repräsentiert einen der [JavaScript-Datentypen](/de/docs/Web/JavaScript/Guide/Data_structures). Er wird verwendet, um verschiedene schlüsselbasierte Sammlungen und komplexere Entitäten zu speichern. Objekte können mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder der [Objektinitialisierer-/Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Nahezu alle [Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften eventuell überschattet (d.h. überschrieben) werden können. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind solche mit [`null`-Prototyp](#null-prototyp-objekte) oder solche, die von anderen `null`-Prototyp-Objekten abstammen.

Änderungen am Objekt `Object.prototype` werden durch Prototypverkettung bei **allen** Objekten sichtbar, es sei denn, die betroffenen Eigenschaften und Methoden werden weiter entlang der Prototypkette überschrieben. Dies bietet eine sehr mächtige, wenn auch möglicherweise gefährliche Möglichkeit, das Verhalten von Objekten zu überschreiben oder zu erweitern. Um es sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das einen [unveränderlichen Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat — der Prototyp von `Object.prototype` ist immer `null` und nicht veränderbar.

### Eigenschaften des Objektprototyps

Sie sollten vermeiden, die Methoden von `Object.prototype` direkt von der Instanz aufzurufen, insbesondere jene, die nicht polymorph sein sollen (d.h. nur das anfängliche Verhalten macht Sinn und kein abgeleitetes Objekt könnte es sinnvoll überschreiben). Alle Objekte, die von `Object.prototype` abstammen, können eine benutzerdefinierte eigene Eigenschaft definieren, die denselben Namen hat, aber ganz andere Semantiken als erwartet. Außerdem werden diese Eigenschaften nicht von [`null`-Prototyp-Objekten](#null-prototyp-objekte) geerbt. Alle modernen JavaScript-Utilities zum Arbeiten mit Objekten sind [statisch](#statische_methoden). Genauer:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) sind so ausgelegt, dass sie polymorph sind und Sie sollten erwarten, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, sodass Sie sie als Instanzmethoden aufrufen können. `valueOf()` und `toString()` werden jedoch normalerweise implizit durch [Typumwandlung](/de/docs/Web/JavaScript/Guide/Data_structures#type_coercion) aufgerufen und müssen nicht in Ihrem Code aufgerufen werden.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie stattdessen die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft ist veraltet und sollte nicht verwendet werden. Die Alternativen {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können durch die statischen Methoden {{jsxref("Object.getOwnPropertyDescriptor()")}} und {{jsxref("Object.hasOwn()")}} ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann normalerweise durch [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors überprüfen.

Falls keine semantisch äquivalente statische Methode existiert oder wenn Sie wirklich die Methode von `Object.prototype` verwenden möchten, sollten Sie direkt [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf die Methode `Object.prototype` für Ihr Zielobjekt aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft hat, die unerwartete Ergebnisse liefert.

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

Fast alle Objekte in JavaScript erben letztendlich von `Object.prototype` (siehe [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototyp-Objekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objektinitialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (beachten Sie: der Schlüssel `__proto__` in Objektliteralen ist anders als die veraltete [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)-Eigenschaft). Sie können auch den Prototyp eines bestehenden Objekts zu `null` ändern, indem Sie [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann sich auf unerwartete Weise verhalten, da es keine Objektmethoden von `Object.prototype` erbt. Dies ist besonders beim Debuggen problematisch, da gängige Dienstprogramme zur Objekt-Eigenschaftsumwandlung/-erkennung Fehler generieren oder Informationen verlieren können (besonders, wenn stille Fehlerfallen verwendet werden, die Fehler ignorieren).

Beispielsweise macht das Fehlen von [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) das Debuggen oft undurchführbar:

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

Wir können die `toString`-Methode zurück zum `null`-Prototyp-Objekt hinzufügen, indem wir ihr eine zuweisen:

```js
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Im Gegensatz zu normalen Objekten, bei denen `toString()` auf dem Prototyp des Objekts ist, ist die `toString()`-Methode hier eine eigene Eigenschaft von `nullProtoObj`. Dies liegt daran, dass `nullProtoObj` keinen (`null`) Prototyp hat.

Sie können auch ein Null-Prototyp-Objekt zurück in ein gewöhnliches Objekt konvertieren, indem Sie [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) verwenden.

In der Praxis werden Objekte mit `null`-Prototyp häufig als günstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Das Vorhandensein von `Object.prototype`-Eigenschaften wird einige Fehler verursachen:

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

Die Verwendung eines `null`-Prototyp-Objekts beseitigt diese Gefahr, ohne zu viel Komplexität in die `hasPerson`- und `getAge`-Funktionen einzuführen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In einem solchen Fall sollte das Hinzufügen einer Methode mit Vorsicht erfolgen, da sie mit den anderen als Daten gespeicherten Schlüssel-Wert-Paaren verwechselt werden können.

Wenn Sie Ihr Objekt nicht von `Object.prototype` erben lassen, verhindern Sie auch Angriffe durch Prototypverschmutzung. Wenn ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, wird sie in jedem Objekt in Ihrem Programm zugänglich sein, außer in Objekten, die einen `null`-Prototyp haben.

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
- Die Eigenschaften `groups` und `indices.groups` des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]`-Objekte sollten einen `null`-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modulenamensraumobjekte, die durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) erhalten werden

Der Begriff "`null`-Prototyp-Objekt" beinhaltet häufig auch jedes Objekt ohne `Object.prototype` in seiner Prototypkette. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) erstellt werden, wenn Klassen verwendet werden.

### Objektumwandlung

Viele eingebaute Operationen, die Objekte erwarten, wandeln ihre Argumente zuerst in Objekte um. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) kann wie folgt zusammengefasst werden:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- Primitiven von {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}} werden in ihre entsprechenden Objektverpackungen eingewickelt.

Es gibt zwei Möglichkeiten, um nahezu denselben Effekt in JavaScript zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die oben erklärten Objektumwandlungsschritte aus, um `x` zu konvertieren.
- Die {{jsxref("Object/Object", "Object()")}}-Funktion: `Object(x)` verwendet denselben Algorithmus zur Konvertierung von `x`, außer dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Stellen, die eine Objektumwandlung verwenden, umfassen:

- Der `object`-Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen.
- Der `this`-Wert von {{jsxref("Array")}}-Methoden.
- Parameter von `Object`-Methoden wie {{jsxref("Object.keys()")}}.
- Automatische Umwandlung, wenn auf einen primitiven Wert eine Eigenschaft zugegriffen wird, da Primitive keine Eigenschaften haben.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert beim Aufruf einer nicht-strikten Funktion. Primitive werden verpackt, während `null` und `undefined` durch das {{Glossary("Global_object", "globale Objekt")}} ersetzt werden.

Im Gegensatz zur [Umwandlung in Primitiva](/de/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion) ist der Prozess der Objektumwandlung selbst in keiner Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString`- oder `valueOf`-Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Wandelt die Eingabe in ein Objekt um.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller aufzählbaren eigenen Eigenschaften von einem oder mehreren Quellobjekten zu einem Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototypobjekt und Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt einem Objekt die durch die gegebenen Deskriptoren beschriebenen benannten Eigenschaften hinzu.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt einem Objekt die durch einen gegebenen Deskriptor beschriebene benannte Eigenschaft hinzu.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, das alle `[key, value]`-Paare eines bestimmten Objekts **eigener** aufzählbarer Zeichenfolgen-Eigenschaften enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Anderer Code kann dessen Eigenschaften nicht löschen oder ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt aus einem Iterator von `[key, value]`-Paaren zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaftsdeskriptor für eine benannte Eigenschaft eines Objekts zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaftsdeskriptoren für ein Objekt enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren und nicht aufzählbaren Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller direkt auf einem gegebenen Objekt gefundenen Symboleigenschaften zurück.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (interne `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables entsprechend den durch eine bereitgestellte Rückruffunktion zurückgegebenen Zeichenfolgenwerten. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe und enthält Arrays mit den Elementen in der Gruppe.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als seine _eigene_ Eigenschaft besitzt, oder `false`, wenn die Eigenschaft vererbt oder nicht vorhanden ist.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Gleicht alle `NaN`-Werte ab (was sich von sowohl `IsLooselyEqual` verwendet durch [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) als auch `IsStrictlyEqual` verwendet durch [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) unterscheidet).
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob das Erweitern eines Objekts erlaubt ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren wurde.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren Zeichenfolgen-Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert jede Erweiterung eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass anderer Code Eigenschaften eines Objekts löscht.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp des Objekts (seine interne `[[Prototype]]`-Eigenschaft).
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die allen **eigenen** aufzählbaren Zeichenfolgen-Eigenschaften eines gegebenen Objekts entsprechen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Object.prototype` definiert und werden von allen `Object`-Instanzen geteilt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Zeigt auf das Objekt, das als Prototyp verwendet wurde, als das Objekt instanziiert wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Bei einfachen `Object`-Instanzen ist der Anfangswert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jede die `constructor`-Eigenschaft von ihrem jeweiligen `Constructor.prototype`-Objekt.

## Instanzmethoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die beim Zugriff diese Funktion ausführt und deren Rückgabewert zurückgibt.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Verknüpft eine Funktion mit einer Eigenschaft, die beim Setzen diese Funktion ausführt, welche die Eigenschaft modifiziert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die als Getter an die angegebene Eigenschaft gebundene Funktion zurück.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die als Setter an die angegebene Eigenschaft gebundene Funktion zurück.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypkette vererbt wurde.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Objekt, bei dem diese Methode aufgerufen wird, in der Prototypkette des angegebenen Objekts liegt.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die angegebene Eigenschaft die [aufzählbare eigene](/de/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine String-Repräsentation des Objekts zurück.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück.

## Beispiele

### Leere Objekt erstellen

Das folgende Beispiel erstellt leere Objekte mittels des `new`-Schlüsselwortes mit verschiedenen Argumenten:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Verwenden des Object()-Konstruktors, um Primitive in ein Objekt ihres entsprechenden Typs zu verwandeln

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um einen Objekt-Wrapper eines primitiven Wertes zu erstellen.

Die folgenden Beispiele erstellen Variablen `o1` und `o2`, die Objekte sind, die {{jsxref("Boolean")}}- und {{jsxref("BigInt")}}-Werte speichern:

```js
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Objektprototypen

Wenn Sie das Verhalten bestehender Methoden von `Object.prototype` ändern, ziehen Sie in Betracht, Code einzufügen, indem Sie Ihre Erweiterung vor oder nach der bestehenden Logik umhüllen. Beispielsweise wird dieser (nicht getestete) Code eigene Bedingungslogik vor der eingebauten oder von jemand anderem erweiterten Logik auszuführen.

Beim Modifizieren von Prototypen mit Hooks übergeben Sie `this` und die Argumente (den Aufrufzustand) an das aktuelle Verhalten, indem Sie `apply()` auf die Funktion aufrufen. Dieses Muster kann für jeden Prototyp verwendet werden, wie `Node.prototype`, `Function.prototype`, etc.

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
> Das Ändern der `prototype`-Eigenschaft eines eingebauten Konstruktors wird als schlechte Praxis angesehen und birgt das Risiko der Vorwärtskompatibilität.

Sie können mehr über Prototypen im [Vererbung und die Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) lesen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
