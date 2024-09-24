---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Object.defineProperty()`** definiert eine neue Eigenschaft direkt an einem Objekt oder modifiziert eine bestehende Eigenschaft an einem Objekt und gibt das Objekt zurück.

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## Syntax

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### Parameter

- `obj`
  - : Das Objekt, an dem die Eigenschaft definiert werden soll.
- `prop`
  - : Ein String oder ein {{jsxref("Symbol")}}, der den Schlüssel der zu definierenden oder zu modifizierenden Eigenschaft festlegt.
- `descriptor`
  - : Der Deskriptor für die zu definierende oder zu modifizierende Eigenschaft.

### Rückgabewert

Das Objekt, das an die Funktion übergeben wurde, mit der spezifizierten hinzugefügten oder modifizierten Eigenschaft.

## Beschreibung

`Object.defineProperty()` ermöglicht eine präzise Hinzufügung oder Änderung einer Eigenschaft an einem Objekt. Die normale Eigenschaftenzuweisung durch [Zuweisung](/de/docs/Web/JavaScript/Reference/Operators/Assignment) erstellt Eigenschaften, die bei der Eigenschaftenenumeration ({{jsxref("Statements/for...in", "for...in")}}, {{jsxref("Object.keys()")}}, etc.) erscheinen, deren Werte geändert und die {{jsxref("Operators/delete", "gelöscht")}} werden können. Diese Methode erlaubt es, diese zusätzlichen Details von ihren Standardwerten zu ändern. Standardmäßig sind Eigenschaften, die mit `Object.defineProperty()` hinzugefügt werden, nicht beschreibbar, nicht aufzählbar und nicht konfigurierbar. Zusätzlich verwendet `Object.defineProperty()` die interne Methode [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty), anstelle von [`[[Set]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set), sodass keine [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) aufgerufen werden, selbst wenn die Eigenschaft bereits vorhanden ist.

Eigenschaftsdeskriptoren in Objekten gibt es in zwei Haupttypen: Datendeskriptoren und Zugriffsbeschreibungs-Deskriptoren. Ein **Datendeskriptor** ist eine Eigenschaft mit einem Wert, der möglicherweise beschreibbar ist oder nicht. Ein **Zugriffsbeschreibungs-Deskriptor** ist eine Eigenschaft, die durch ein Paar von Getter-Setter-Funktionen beschrieben wird. Ein Deskriptor muss eine von diesen beiden Arten sein; er kann nicht beides sein.

Sowohl Daten- als auch Zugriffsbeschreibungs-Deskriptoren sind Objekte. Sie teilen sich die folgenden optionalen Schlüssel (bitte beachten Sie: Die **Standards** hier beziehen sich auf das Definieren von Eigenschaften mit `Object.defineProperty()`):

- `configurable`

  - : Wenn dies auf `false` gesetzt ist,

    - der Typ dieser Eigenschaft kann nicht zwischen Dateneigenschaft und Zugriffseigenschaft geändert werden, und
    - die Eigenschaft kann nicht gelöscht werden, und
    - andere Attribute ihres Deskriptors können nicht geändert werden (falls es sich jedoch um einen Datendeskriptor mit `writable: true` handelt, kann der `value` geändert werden, und `writable` kann auf `false` gesetzt werden).

    **Standardmäßig `false`.**

- `enumerable`
  - : `true`, wenn und nur wenn diese Eigenschaft während der Enumeration der Eigenschaften im entsprechenden Objekt angezeigt wird. **Standardmäßig `false`.**

Ein **Datendeskriptor** hat zusätzlich die folgenden optionalen Schlüssel:

- `value`
  - : Der mit der Eigenschaft verknüpfte Wert. Kann ein beliebiger gültiger JavaScript-Wert sein (Nummer, Objekt, Funktion, etc.). **Standardwert ist {{jsxref("undefined")}}.**
- `writable`
  - : `true`, wenn der mit der Eigenschaft verknüpfte Wert mit einem [Zuweisungsoperator](/de/docs/Web/JavaScript/Reference/Operators#assignment_operators) geändert werden kann. **Standardwert ist `false`.**

Ein **Zugriffsbeschreibungs-Deskriptor** hat zusätzlich die folgenden optionalen Schlüssel:

- `get`
  - : Eine Funktion, die als Getter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Getter gibt. Wenn auf die Eigenschaft zugegriffen wird, wird diese Funktion ohne Argumente und mit `this` auf das Objekt gesetzt aufgerufen, durch das auf die Eigenschaft zugegriffen wird (dies muss nicht das Objekt sein, auf dem die Eigenschaft definiert ist, aufgrund von Vererbung). Der Rückgabewert wird als Wert der Eigenschaft verwendet. **Standardwert ist {{jsxref("undefined")}}.**
- `set`
  - : Eine Funktion, die als Setter für die Eigenschaft dient, oder {{jsxref("undefined")}}, wenn es keinen Setter gibt. Wenn die Eigenschaft zugewiesen wird, wird diese Funktion mit einem Argument (dem Wert, der der Eigenschaft zugewiesen wird) und mit `this` auf das Objekt gesetzt aufgerufen, durch das die Eigenschaft zugewiesen wird. **Standardwert ist {{jsxref("undefined")}}.**

Wenn ein Deskriptor keinen der Schlüssel `value`, `writable`, `get` und `set` hat, wird er als Datendeskriptor behandelt. Wenn ein Deskriptor sowohl die \[`value` oder `writable`\] als auch die \[`get` oder `set`\] Schlüssel hat, wird eine Ausnahme geworfen.

Diese Attribute sind nicht notwendigerweise die eigenen Eigenschaften des Deskriptors. Geerbte Eigenschaften werden ebenfalls berücksichtigt. Um sicherzustellen, dass diese Standards beibehalten werden, könnten Sie existierende Objekte in der Prototypkette des Deskriptor-Objekts im Voraus einfrieren, alle Optionen explizit angeben oder ein Objekt mit [Null-Prototyp](/de/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) erstellen.

```js
const obj = {};
// 1. Mit einem Null-Prototyp: keine geerbten Eigenschaften
const descriptor = Object.create(null);
descriptor.value = "static";

// nicht aufzählbar, nicht konfigurierbar, nicht beschreibbar als Standardwerte
Object.defineProperty(obj, "key", descriptor);

// 2. Explizit durch Verwendung eines Wegwerf-Objekt-Literals mit allen vorhandenen Attributen
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 3. Dasselbe Objekt wiederverwenden
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

  // Vermeidung von doppelter Operation zur Wertezuweisung
  if (d.value !== value) d.value = value;

  return d;
}
// und
Object.defineProperty(obj, "key", withValue("static"));

// Wenn Einfrieren verfügbar ist, wird das Hinzufügen oder
// Entfernen von Objekteigenschaften verhindert
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);
```

Wenn die Eigenschaft bereits existiert, versucht `Object.defineProperty()`, die Eigenschaft gemäß den Werten im Deskriptor und der aktuellen Konfiguration der Eigenschaft zu ändern.

Wenn das alte Deskriptorattribut `configurable` auf `false` gesetzt ist, wird die Eigenschaft als _nicht konfigurierbar_ bezeichnet. Es ist nicht möglich, ein Attribut einer nicht konfigurierbaren Zugriffseigenschaft zu ändern, und es ist nicht möglich, zwischen Daten- und Zugriffseigenschaftstypen zu wechseln. Bei Dateneigenschaften mit `writable: true` ist es möglich, den Wert zu ändern und das `writable`-Attribut von `true` auf `false` zu ändern. Ein {{jsxref("TypeError")}} wird ausgelöst, wenn versucht wird, nicht konfigurierbare Eigenschaftenattribute (außer `value` und `writable`, wenn erlaubt) zu ändern, es sei denn, wenn ein Wert definiert wird, der identisch mit dem Originalwert für eine Dateneigenschaft ist.

Wenn die aktuelle Eigenschaft konfigurierbar ist, löscht das Setzen eines Attributs auf `undefined` dieses effektiv. Zum Beispiel, wenn `o.k` eine Zugriffseigenschaft ist, wird `Object.defineProperty(o, "k", { set: undefined })` den Setter entfernen, so dass `k` nur einen Getter hat und schreibgeschützt wird. Wenn ein Attribut im neuen Deskriptor fehlt, bleibt der Wert des alten Deskriptorattributs erhalten (es wird nicht implizit auf `undefined` zurückgesetzt). Es ist möglich, zwischen Daten- und Zugriffseigenschaft zu wechseln, indem ein Deskriptor eines anderen "Flavors" angegeben wird. Zum Beispiel, wenn der neue Deskriptor ein Daten-Deskriptor ist (mit `value` oder `writable`), werden die `get`- und `set`-Attribute des ursprünglichen Deskriptors beide weggelassen.

## Beispiele

### Erstellen einer Eigenschaft

Wenn die angegebene Eigenschaft nicht im Objekt existiert, erstellt `Object.defineProperty()` eine neue Eigenschaft wie beschrieben. Felder können im Deskriptor weggelassen werden, und Standardwerte für diese Felder werden eingesetzt.

```js
const o = {}; // Erstellt ein neues Objekt

// Beispiel einer Objekteigenschaft, hinzugefügt
// mit defineProperty mit einem Daten-Deskriptor
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// 'a' Eigenschaft existiert im o Objekt und ihr Wert ist 37

// Beispiel einer Objekteigenschaft, hinzugefügt
// mit defineProperty mit einem Zugriffsbeschreibungs-Deskriptor
let bValue = 38;
Object.defineProperty(o, "b", {
  get() {
    return bValue;
  },
  set(newValue) {
    bValue = newValue;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// 'b' Eigenschaft existiert im o Objekt und ihr Wert ist 38
// Der Wert von o.b ist jetzt immer identisch mit bValue,
// es sei denn, o.b wird neu definiert

// Sie können nicht versuchen, beides zu mischen:
Object.defineProperty(o, "conflict", {
  value: 0x9f91102,
  get() {
    return 0xdeadbeef;
  },
});
// wirft einen TypeError: value appears
// nur in Daten-Deskriptoren,
// get erscheint nur in Zugriffsbeschreibungs-Deskriptoren
```

### Modifizieren einer Eigenschaft

Beim Modifizieren einer bestehenden Eigenschaft bestimmt die aktuelle Eigenschaftenkonfiguration, ob der Operator erfolgreich ist, nichts tut oder einen {{jsxref("TypeError")}} auslöst.

#### Beschreibbares Attribut

Wenn das `writable`-Eigenschaftsattribut `false` ist, wird die Eigenschaft als "nicht beschreibbar" betrachtet. Sie kann nicht neu zugewiesen werden. Der Versuch, eine nicht beschreibbare Eigenschaft zu schreiben, ändert sie nicht und führt in [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) zu einem Fehler.

```js
const o = {}; // Erstellt ein neues Objekt

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37
o.a = 25; // Kein Fehler wird geworfen
// (es würde in strict mode geworfen,
// auch wenn der Wert derselbe geblieben wäre)
console.log(o.a); // 37; die Zuweisung hat nicht funktioniert

// strict mode
(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // wirft TypeError: "b" ist schreibgeschützt
  return o.b; // gibt 2 zurück ohne die obenstehende Zeile
})();
```

#### Aufzählbares Attribut

Das `enumerable`-Eigenschaftsattribut definiert, ob die Eigenschaft von {{jsxref("Object.assign()")}} oder dem [Spread-Operator](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) berücksichtigt wird. Für nicht-{{jsxref("Symbol")}}-Eigenschaften definiert es auch, ob sie in einer {{jsxref("Statements/for...in", "for...in")}}-Schleife und {{jsxref("Object.keys()")}} angezeigt wird oder nicht. Für mehr Informationen siehe [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties).

```js
const o = {};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(o, "c", {
  value: 3,
}); // enumerable setzt als Standardwert auf false
o.d = 4; // enumerable setzt als Standardwert auf true beim Erstellen einer Eigenschaft durch Zuweisung
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (const i in o) {
  console.log(i);
}
// Loggt 'a' und 'd' (immer in dieser Reihenfolge)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

const p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### Konfigurierbares Attribut

Das `configurable`-Attribut steuert, ob die Eigenschaft aus dem Objekt gelöscht werden kann und ob ihre Attribute (außer `value` und `writable`) geändert werden können.

Dieses Beispiel illustriert eine nicht konfigurierbare Zugriffseigenschaft.

```js
const o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // wirft einen TypeError
Object.defineProperty(o, "a", {
  enumerable: true,
}); // wirft einen TypeError
Object.defineProperty(o, "a", {
  set() {},
}); // wirft einen TypeError (set war vorher undefiniert)
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // wirft einen TypeError
// (auch wenn die neue get-Funktion genau das gleiche tut)
Object.defineProperty(o, "a", {
  value: 12,
}); // wirft einen TypeError
// ('value' kann geändert werden, wenn 'configurable' false ist, aber nur wenn die Eigenschaft eine beschreibbare Dateneigenschaft ist)

console.log(o.a); // 1
delete o.a; // Nichts passiert; wirft einen Fehler in strict mode
console.log(o.a); // 1
```

Wenn das `configurable`-Attribut von `o.a` `true` gewesen wäre, würde keiner der Fehler geworfen und die Eigenschaft würde am Ende gelöscht.

Dieses Beispiel illustriert eine nicht konfigurierbare, aber beschreibbare Dateneigenschaft. Der `value` der Eigenschaft kann immer noch geändert werden, und `writable` kann immer noch von `true` auf `false` geschaltet werden.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // Auch wenn konfigurierbar auf false ist, weil das Objekt beschreibbar ist, können wir den Wert immer noch ersetzen
console.log(o.b); // 1
o.b = 2; // Wir können den Wert auch mit Zuweisungsoperatoren ändern
console.log(o.b); // 2
// Schreibbarkeit der Eigenschaft umschalten
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: weil die Eigenschaft weder beschreibbar noch konfigurierbar ist, kann sie nicht modifiziert werden
// Zu diesem Zeitpunkt gibt es keine Möglichkeit mehr, 'b' weiter zu modifizieren
// oder seine Schreibbarkeit wiederherzustellen
```

Dieses Beispiel illustriert eine konfigurierbare, aber nicht beschreibbare Dateneigenschaft. Der `value` der Eigenschaft kann immer noch mit `defineProperty` ersetzt werden (aber nicht mit Zuweisungsoperatoren), und `writable` kann umgeschaltet werden.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: true,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // Wir können den Wert mit defineProperty ersetzen
console.log(o.b); // 1
o.b = 2; // wirft TypeError in strict mode: kann den Wert einer nicht beschreibbaren Eigenschaft mit Zuweisung nicht ändern
```

Dieses Beispiel illustriert eine nicht konfigurierbare und nicht beschreibbare Dateneigenschaft. Es gibt keine Möglichkeit, ein Attribut der Eigenschaft zu aktualisieren, einschließlich ihres `value`.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: die Eigenschaft kann nicht modifiziert werden, weil sie weder beschreibbar noch konfigurierbar ist.
```

### Hinzufügen von Eigenschaften und Standardwerten

Es ist wichtig, die Art und Weise zu berücksichtigen, wie Standardwerte von Attributen angewendet werden. Es gibt oft einen Unterschied zwischen der Verwendung von [Eigenschaftszugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zum Zuweisen eines Wertes und der Verwendung von `Object.defineProperty()`, wie im folgenden Beispiel gezeigt.

```js
const o = {};

o.a = 1;
// ist äquivalent zu:
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// Auf der anderen Seite,
Object.defineProperty(o, "a", { value: 1 });
// ist äquivalent zu:
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Benutzerdefinierte Setter und Getter

Das folgende Beispiel zeigt, wie man ein selbstarchivierendes Objekt implementieren kann. Wenn die `temperature`-Eigenschaft gesetzt wird, erhält das `archive`-Array einen Logeintrag.

```js
function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = () => archive;
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

In diesem Beispiel gibt ein Getter immer denselben Wert zurück.

```js
const pattern = {
  get() {
    return "I always return this string, whatever you have assigned";
  },
  set() {
    this.myname = "this is my name string";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty);
// Ich gebe immer diesen String zurück, egal was Sie zugewiesen haben

console.log(instance.myname); // das ist mein Namensstring
```

### Vererbung von Eigenschaften

Wenn eine Zugriffseigenschaft vererbt wird, werden ihre `get`- und `set`-Methoden aufgerufen, wenn die Eigenschaft auf Nachkommenschaftsobjekten zugegriffen oder geändert wird. Wenn diese Methoden eine Variable verwenden, um den Wert zu speichern, wird dieser Wert von allen Objekten geteilt.

```js
function MyClass() {}

let value;
Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // 1
```

Dies kann behoben werden, indem der Wert in einer anderen Eigenschaft gespeichert wird. In `get`- und `set`-Methoden verweist `this` auf das Objekt, das verwendet wird, um auf die Eigenschaft zuzugreifen oder sie zu ändern.

```js
function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return this.storedX;
  },
  set(x) {
    this.storedX = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // undefined
```

Im Gegensatz zu Zugriffseigenschaften werden Dateneigenschaften immer auf dem Objekt selbst gesetzt, nicht auf einem Prototyp. Wenn jedoch eine nicht beschreibbare Dateneigenschaft vererbt wird, ist es dennoch nicht möglich, sie auf dem Objekt zu ändern.

```js
function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
  writable: false,
  value: 1,
});

const a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // Ignoriert, wirft einen Fehler in strict mode
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Aufzählbarkeit und Eigentümerschaft von Eigenschaften](/de/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Reflect.defineProperty()")}}
