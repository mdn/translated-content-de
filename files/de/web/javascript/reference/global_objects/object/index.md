---
title: Objekt
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Der **`Object`**-Typ stellt einen von [JavaScripts Datentypen](/de/docs/Web/JavaScript/Data_structures) dar. Er wird verwendet, um verschiedene Schlüssel-Sammlungen und komplexere Entitäten zu speichern. Objekte können entweder mit dem {{jsxref("Object/Object", "Object()")}}-Konstruktor oder mit der [Objekt-Initialisierer/Literal-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erstellt werden.

## Beschreibung

Nahezu alle [Objekte](/de/docs/Web/JavaScript/Data_structures#objects) in JavaScript sind Instanzen von `Object`; ein typisches Objekt erbt Eigenschaften (einschließlich Methoden) von `Object.prototype`, obwohl diese Eigenschaften möglicherweise überschrieben (auch als shadowed bekannt) werden. Die einzigen Objekte, die nicht von `Object.prototype` erben, sind solche mit [`null`-Prototyp](#null-prototyp-objekte) oder abstammend von anderen `null`-Prototyp-Objekten.

Änderungen am `Object.prototype`-Objekt werden durch Prototypverkettung von **allen** Objekten übernommen, es sei denn, die betroffenen Eigenschaften und Methoden werden weiter entlang der Prototypenkette überschrieben. Dies bietet eine sehr mächtige, wenn auch potenziell gefährliche Möglichkeit, das Verhalten von Objekten zu überschreiben oder zu erweitern. Um dies sicherer zu machen, ist `Object.prototype` das einzige Objekt in der Kern-JavaScript-Sprache, das einen [unveränderlichen Prototypen](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) hat – der Prototyp von `Object.prototype` ist immer `null` und nicht veränderbar.

### Eigenschaften des Objektprototypen

Es wird empfohlen, keine `Object.prototype`-Methode direkt von der Instanz aus aufzurufen, insbesondere solche, die nicht darauf ausgelegt sind, polymorph zu sein (d.h. nur ihr anfängliches Verhalten ergibt Sinn und kein abgeleitetes Objekt könnte sie auf sinnvolle Weise überschreiben). Alle von `Object.prototype` abstammenden Objekte können eine eigene benutzerdefinierte Eigenschaft definieren, die denselben Namen trägt, aber völlig andere Semantik aufweist, als man erwarten würde. Zudem werden diese Eigenschaften nicht von [`null`-Prototyp-Objekten](#null-prototyp-objekte) geerbt. Alle modernen JavaScript-Werkzeuge zur Arbeit mit Objekten sind [statisch](#statische_methoden). Genauer gesagt:

- [`valueOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) und [`toLocaleString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) existieren, um polymorph zu sein, und es wird erwartet, dass das Objekt seine eigene Implementierung mit sinnvollen Verhaltensweisen definiert, sodass Sie sie als Instanzmethoden aufrufen können. Allerdings werden `valueOf()` und `toString()` normalerweise implizit durch [Typkonvertierung](/de/docs/Web/JavaScript/Data_structures#type_coercion) aufgerufen, und Sie müssen sie nicht selbst in Ihrem Code aufrufen.
- [`__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), und [`__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sind veraltet und sollten nicht verwendet werden. Verwenden Sie stattdessen die statischen Alternativen {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.getOwnPropertyDescriptor()")}}.
- Die [`__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Eigenschaft ist veraltet und sollte nicht verwendet werden. Die {{jsxref("Object.getPrototypeOf()")}} und {{jsxref("Object.setPrototypeOf()")}} Alternativen sind statische Methoden.
- Die Methoden [`propertyIsEnumerable()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) und [`hasOwnProperty()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) können durch die statischen Methoden {{jsxref("Object.getOwnPropertyDescriptor()")}} bzw. {{jsxref("Object.hasOwn()")}} ersetzt werden.
- Die Methode [`isPrototypeOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) kann normalerweise durch [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) ersetzt werden, wenn Sie die `prototype`-Eigenschaft eines Konstruktors überprüfen.

Falls keine semantisch äquivalente statische Methode existiert oder Sie die `Object.prototype`-Methode wirklich verwenden möchten, sollten Sie die `Object.prototype`-Methode direkt mit [`call()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/call) auf Ihrem Zielobjekt aufrufen, um zu verhindern, dass das Objekt eine überschreibende Eigenschaft besitzt, die unerwartete Ergebnisse liefert.

```js
const obj = {
  foo: 1,
  // Sie sollten eine solche Methode nicht in Ihrem eigenen Objekt definieren,
  // aber Sie können nicht verhindern, dass dies passiert, wenn
  // Sie das Objekt aus externer Eingabe erhalten
  propertyIsEnumerable() {
    return false;
  },
};

obj.propertyIsEnumerable("foo"); // false; unerwartetes Ergebnis
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; erwartetes Ergebnis
```

### Löschen einer Eigenschaft aus einem Objekt

Es gibt keine Methode in einem Objekt selbst, um seine eigenen Eigenschaften zu löschen (wie zum Beispiel {{jsxref("Map.prototype.delete()")}}). Dazu muss der {{jsxref("Operators/delete", "delete")}}-Operator verwendet werden.

### null-Prototyp-Objekte

Fast alle Objekte in JavaScript erben letztlich von `Object.prototype` (siehe [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)). Sie können jedoch `null`-Prototyp-Objekte mit [`Object.create(null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create) oder der [Objekt-Initialisierer-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) mit `__proto__: null` erstellen (Hinweis: der `__proto__`-Schlüssel in Objektliteralen unterscheidet sich von der veralteten [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) Eigenschaft). Sie können auch den Prototyp eines bestehenden Objekts auf `null` ändern, indem Sie [`Object.setPrototypeOf(obj, null)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Ein Objekt mit einem `null`-Prototyp kann in unerwarteter Weise verhalten, da es keine Objektmethoden von `Object.prototype` erbt. Dies ist besonders beim Debuggen der Fall, da gängige Objekt-Eigenschaften-konvertierende/-erkennende Util-Funktionen Fehler verursachen oder Informationen verlieren könnten (besonders, wenn stille Fehlerfallen verwendet werden, die Fehler ignorieren).

Zum Beispiel erschwert der Mangel an [`Object.prototype.toString()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) oft das Debuggen:

```js
const normalObj = {}; // ein normales Objekt erstellen
const nullProtoObj = Object.create(null); // ein Objekt mit "null"-Prototyp erstellen

console.log(`normalObj is: ${normalObj}`); // zeigt "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // wirft Fehler: Kann Objekt nicht in primitiven Wert konvertieren

alert(normalObj); // zeigt [object Object]
alert(nullProtoObj); // wirft Fehler: Kann Objekt nicht in primitiven Wert konvertieren
```

Auch andere Methoden werden fehlschlagen.

```js
normalObj.valueOf(); // zeigt {}
nullProtoObj.valueOf(); // wirft Fehler: nullProtoObj.valueOf ist keine Funktion

normalObj.hasOwnProperty("p"); // zeigt "true"
nullProtoObj.hasOwnProperty("p"); // wirft Fehler: nullProtoObj.hasOwnProperty ist keine Funktion

normalObj.constructor; // zeigt "Object() { [native code] }"
nullProtoObj.constructor; // zeigt "undefined"
```

Wir können die `toString`-Methode dem Null-Prototyp-Objekt zurückgeben, indem wir ihm eine zuweisen:

```js
nullProtoObj.toString = Object.prototype.toString; // da neues Objekt keine toString hat, füge das Original zurück

console.log(nullProtoObj.toString()); // zeigt "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // zeigt "nullProtoObj is: [object Object]"
```

Anders als normale Objekte, bei denen `toString()` auf dem Prototyp des Objekts ist, ist die `toString()`-Methode hier eine eigene Eigenschaft von `nullProtoObj`. Das liegt daran, dass `nullProtoObj` keinen (`null`) Prototypen hat.

Sie können auch ein null-Prototyp-Objekt in ein gewöhnliches Objekt zurückverwandeln, indem Sie [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) aufrufen.

In der Praxis werden Objekte mit `null`-Prototyp häufig als kostengünstiger Ersatz für [Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) verwendet. Die Präsenz von `Object.prototype`-Eigenschaften kann einige Bugs verursachen:

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

Die Verwendung eines Null-Prototyp-Objekts beseitigt diese Gefahr, ohne zu viel Komplexität in die Funktionen `hasPerson` und `getAge` einzubringen:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In einem solchen Fall sollte das Hinzufügen von Methoden vorsichtig erfolgen, da sie mit den anderen als Daten gespeicherten Schlüssel-Wert-Paaren verwechselt werden können.

Ihr Objekt nicht von `Object.prototype` erben zu lassen, verhindert auch Prototypverschmutzungsangriffe. Falls ein bösartiges Skript eine Eigenschaft zu `Object.prototype` hinzufügt, wird sie in jedem Objekt in Ihrem Programm zugänglich sein, außer in Objekten mit null-Prototyp.

```js
const user = {};

// Ein bösartiges Skript:
Object.prototype.authenticated = true;

// Unerwartetes Erlauben eines unautorisierten Benutzers, durchzukommen
if (user.authenticated) {
  // Zugriff auf vertrauliche Daten
}
```

JavaScript hat auch eingebaute APIs, die `null`-Prototyp-Objekte erzeugen, insbesondere solche, die Objekte als Ad-hoc-Schlüssel-Wert-Sammlungen verwenden. Zum Beispiel:

- Der Rückgabewert von {{jsxref("Object.groupBy()")}}
- Die `groups` und `indices.groups` Eigenschaften des Ergebnisses von {{jsxref("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (alle `[Symbol.unscopables]`-Objekte sollten einen `null`-Prototyp haben)
- [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)
- Modul-Namensraum-Objekte, erhalten durch [`import * as ns from "module";`](/de/docs/Web/JavaScript/Reference/Statements/import#namespace_import) oder [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import)

Der Begriff "`null`-Prototyp-Objekt" schließt oft auch jedes Objekt ohne `Object.prototype` in seiner Prototypenkette ein. Solche Objekte können mit [`extends null`](/de/docs/Web/JavaScript/Reference/Classes/extends#extending_null) erstellt werden, wenn Klassen verwendet werden.

### Objektkoerzierung

Viele eingebaute Operationen, die Objekte erwarten, erzwingen zuerst die Umwandlung ihrer Argumente in Objekte. [Die Operation](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) kann wie folgt zusammengefasst werden:

- Objekte werden unverändert zurückgegeben.
- [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) und [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) werfen einen {{jsxref("TypeError")}}.
- {{jsxref("Number")}}, {{jsxref("String")}}, {{jsxref("Boolean")}}, {{jsxref("Symbol")}}, {{jsxref("BigInt")}} Primitiven werden in ihre entsprechenden Objekt-Wrapper eingewickelt.

Es gibt zwei Möglichkeiten, in JavaScript fast denselben Effekt zu erzielen.

- {{jsxref("Object.prototype.valueOf()")}}: `Object.prototype.valueOf.call(x)` führt genau die Objektkoerzierungsschritte aus, die oben erklärt wurden, um `x` zu konvertieren.
- Die {{jsxref("Object/Object", "Object()")}} Funktion: `Object(x)` verwendet denselben Algorithmus, um `x` zu konvertieren, außer dass `undefined` und `null` keinen {{jsxref("TypeError")}} werfen, sondern ein einfaches Objekt zurückgeben.

Orte, die Objektkoerzierung verwenden, umfassen:

- Der `object`-Parameter von [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen.
- Der `this`-Wert von {{jsxref("Array")}}-Methoden.
- Parameter von `Object`-Methoden wie {{jsxref("Object.keys()")}}.
- Automatisches Boxen, wenn eine Eigenschaft auf einem primitiven Wert zugegriffen wird, da Primitive keine Eigenschaften besitzen.
- Der [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert beim Aufrufen einer nicht-strengen Funktion. Primitive werden geboxed, während `null` und `undefined` durch das [globale Objekt](/de/docs/Glossary/Global_object) ersetzt werden.

Im Gegensatz zur [Umwandlung in Primitive](/de/docs/Web/JavaScript/Data_structures#primitive_coercion), ist der Objektkoerzierungsvorgang selbst auf keine Weise beobachtbar, da er keinen benutzerdefinierten Code wie `toString`- oder `valueOf`-Methoden aufruft.

## Konstruktor

- {{jsxref("Object/Object", "Object()")}}
  - : Wandelt die Eingabe in ein Objekt um.

## Statische Methoden

- {{jsxref("Object.assign()")}}
  - : Kopiert die Werte aller aufzählbaren eigenen Eigenschaften von einem oder mehreren Quellobjekten auf ein Zielobjekt.
- {{jsxref("Object.create()")}}
  - : Erstellt ein neues Objekt mit dem angegebenen Prototypobjekt und den angegebenen Eigenschaften.
- {{jsxref("Object.defineProperties()")}}
  - : Fügt die durch die gegebene Deskriptoren beschriebenen benannten Eigenschaften zu einem Objekt hinzu.
- {{jsxref("Object.defineProperty()")}}
  - : Fügt die durch einen gegebenen Deskriptor beschriebene benannte Eigenschaft zu einem Objekt hinzu.
- {{jsxref("Object.entries()")}}
  - : Gibt ein Array zurück, das alle `[key, value]`-Paare der **eigenen** aufzählbaren Zeichenfolgeneigenschaften eines gegebenen Objekts enthält.
- {{jsxref("Object.freeze()")}}
  - : Friert ein Objekt ein. Anderer Code kann seine Eigenschaften weder löschen noch ändern.
- {{jsxref("Object.fromEntries()")}}
  - : Gibt ein neues Objekt aus einem iterierbaren Objekt von `[key, value]`-Paaren zurück. (Dies ist das Gegenteil von {{jsxref("Object.entries")}}).
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
  - : Gibt einen Eigenschaftsdeskriptor für eine benannte Eigenschaft eines Objekts zurück.
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
  - : Gibt ein Objekt zurück, das alle eigenen Eigenschaftsdeskriptoren für ein Objekt enthält.
- {{jsxref("Object.getOwnPropertyNames()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren und nicht aufzählbaren Eigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.getOwnPropertySymbols()")}}
  - : Gibt ein Array aller Symbol-Eigenschaften zurück, die direkt auf einem gegebenen Objekt gefunden werden.
- {{jsxref("Object.getPrototypeOf()")}}
  - : Gibt den Prototyp (innere `[[Prototype]]`-Eigenschaft) des angegebenen Objekts zurück.
- {{jsxref("Object.groupBy()")}}
  - : Gruppiert die Elemente eines gegebenen Iterables gemäß der von einer bereitgestellten Rückruffunktion zurückgegebenen Zeichenfolgenwerte. Das zurückgegebene Objekt hat separate Eigenschaften für jede Gruppe, die Arrays mit den Elementen in der Gruppe enthalten.
- {{jsxref("Object.hasOwn()")}}
  - : Gibt `true` zurück, wenn das angegebene Objekt die angegebene Eigenschaft als seine _eigene_ Eigenschaft hat, oder `false`, wenn die Eigenschaft vererbt ist oder nicht existiert.
- {{jsxref("Object.is()")}}
  - : Vergleicht, ob zwei Werte derselbe Wert sind. Setzt alle `NaN`-Werte gleich, was sich sowohl von `IsLooselyEqual`, das von [`==`](/de/docs/Web/JavaScript/Reference/Operators/Equality) verwendet wird, als auch von `IsStrictlyEqual`, das von [`===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality) verwendet wird, unterscheidet.
- {{jsxref("Object.isExtensible()")}}
  - : Bestimmt, ob die Erweiterung eines Objekts erlaubt ist.
- {{jsxref("Object.isFrozen()")}}
  - : Bestimmt, ob ein Objekt eingefroren wurde.
- {{jsxref("Object.isSealed()")}}
  - : Bestimmt, ob ein Objekt versiegelt ist.
- {{jsxref("Object.keys()")}}
  - : Gibt ein Array zurück, das die Namen aller **eigenen** aufzählbaren Zeichenfolgeneigenschaften des gegebenen Objekts enthält.
- {{jsxref("Object.preventExtensions()")}}
  - : Verhindert jegliche Erweiterung eines Objekts.
- {{jsxref("Object.seal()")}}
  - : Verhindert, dass anderer Code Eigenschaften eines Objekts löscht.
- {{jsxref("Object.setPrototypeOf()")}}
  - : Setzt den Prototyp (die innere `[[Prototype]]`-Eigenschaft) des Objekts.
- {{jsxref("Object.values()")}}
  - : Gibt ein Array zurück, das die Werte enthält, die zu allen **eigenen** aufzählbaren Zeichenfolgeneigenschaften eines gegebenen Objekts gehören.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Object.prototype` definiert und werden von allen `Object`-Instanzen gemeinsam genutzt.

- [`Object.prototype.__proto__`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}
  - : Zeigt auf das Objekt, das bei der Erstellung des Objekts als Prototyp verwendet wurde.
- {{jsxref("Object.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für einfache `Object`-Instanzen ist der anfängliche Wert der {{jsxref("Object/Object", "Object")}}-Konstruktor. Instanzen anderer Konstruktoren erben jede die `constructor`-Eigenschaft von ihrem jeweiligen `Constructor.prototype`-Objekt.

## Instanzmethoden

- [`Object.prototype.__defineGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{deprecated_inline}}
  - : Ordnet einer Eigenschaft eine Funktion zu, die beim Zugriff auf die Eigenschaft ausgeführt wird und deren Rückgabewert zurückgibt.
- [`Object.prototype.__defineSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{deprecated_inline}}
  - : Ordnet einer Eigenschaft eine Funktion zu, die beim Setzen der Eigenschaft ausgeführt wird und die die Eigenschaft modifiziert.
- [`Object.prototype.__lookupGetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Getter an die angegebene Eigenschaft gebunden ist.
- [`Object.prototype.__lookupSetter__()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{deprecated_inline}}
  - : Gibt die Funktion zurück, die als Setter an die angegebene Eigenschaft gebunden ist.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Objekt die angegebene Eigenschaft als direkte Eigenschaft dieses Objekts enthält und nicht durch die Prototypenkette geerbt wurde.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Objekt, auf dem diese Methode aufgerufen wird, in der Prototypenkette des angegebenen Objekts liegt.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die angegebene Eigenschaft die [aufzählbare eigene](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) Eigenschaft des Objekts ist.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : Ruft {{jsxref("Object/toString", "toString()")}} auf.
- {{jsxref("Object.prototype.toString()")}}
  - : Gibt eine Zeichenfolgen-Darstellung des Objekts zurück.
- {{jsxref("Object.prototype.valueOf()")}}
  - : Gibt den primitiven Wert des angegebenen Objekts zurück.

## Beispiele

### Leere Objekte erstellen

Das folgende Beispiel erstellt leere Objekte unter Verwendung des `new`-Schlüsselworts mit verschiedenen Argumenten:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Verwendung des Object()-Konstruktors, um Primitive in ein Objekt des jeweiligen Typs umzuwandeln

Sie können den {{jsxref("Object/Object", "Object()")}}-Konstruktor verwenden, um ein Objekt-Wrapper für einen primitiven Wert zu erstellen.

Die folgenden Beispiele erstellen Variablen `o1` und `o2`, die Objekte sind, die {{jsxref("Boolean")}} und {{jsxref("BigInt")}}-Werte speichern:

```js
// Entspricht const o1 = new Boolean(true)
const o1 = new Object(true);

// Keine Entsprechung, weil BigInt() nicht als Konstruktor aufgerufen werden kann,
// und es als reguläre Funktion aufzurufen, kein Objekt erstellt
const o2 = new Object(1n);
```

### Objektprototypen

Beim Ändern des Verhaltens bestehender `Object.prototype`-Methoden sollten Sie erwägen, Code durch das Umhüllen Ihrer Erweiterung vor oder nach der bestehenden Logik einzufügen. Zum Beispiel führt dieser (ungetestete) Code kundenspezifische Logik unter einer Bedingung aus, bevor die eingebaute Logik oder die Erweiterung von jemand anderem ausgeführt wird.

Beim Ändern von Prototypen mit Hooks übergeben Sie `this` und die Argumente (den Aufrufzustand) zum aktuellen Verhalten, indem Sie `apply()` auf die Funktion anwenden. Dieses Muster kann für jeden Prototyp verwendet werden, wie z.B. `Node.prototype`, `Function.prototype`, usw.

```js
const current = Object.prototype.valueOf;

// Da meine Eigenschaft "-prop-value" quer durch greift und sich nicht immer
// auf derselben Prototypenkette befindet, möchte ich Object.prototype modifizieren:
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  } else {
    // Es sieht nicht wie eines meiner Objekte aus, also lasse uns das
    // Standardverhalten reproduzieren, so gut wir können.
    // Der Aufruf funktioniert wie "super" in einigen anderen Sprachen.
    // Auch wenn valueOf() keine Argumente nimmt, könnte dies eine andere Hook tun.
    return current.apply(this, args);
  }
};
```

> [!WARNING]
> Das Modifizieren der `prototype`-Eigenschaft eines eingebauten Konstruktors wird als schlechte Praxis angesehen und birgt das Risiko der Vorausschaukompatibilität.

Sie können mehr über Prototypen in [Vererbung und die Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) lesen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)
