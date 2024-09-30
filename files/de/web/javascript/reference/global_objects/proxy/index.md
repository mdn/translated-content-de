---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`Proxy`**-Objekt ermöglicht es Ihnen, einen Proxy für ein anderes Objekt zu erstellen, der grundlegende Operationen für dieses Objekt abfangen und neu definieren kann.

## Beschreibung

Das `Proxy`-Objekt erlaubt es Ihnen, ein Objekt zu erstellen, das anstelle des ursprünglichen Objekts verwendet werden kann, jedoch grundlegende `Object`-Operationen wie das Abrufen, Setzen und Definieren von Eigenschaften neu definieren kann. Proxy-Objekte werden häufig verwendet, um den Zugriff auf Eigenschaften zu protokollieren, Eingaben zu validieren, zu formatieren oder zu bereinigen und so weiter.

Sie erstellen einen `Proxy` mit zwei Parametern:

- `target`: das ursprüngliche Objekt, das Sie proxisieren möchten
- `handler`: ein Objekt, das definiert, welche Operationen abgefangen werden und wie die abgefangenen Operationen neu definiert werden.

Dieses Beispiel erstellt einen Proxy für das `target`-Objekt.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Da der Handler leer ist, verhält sich dieser Proxy genau wie das ursprüngliche Ziel:

```js
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone
```

Um den Proxy anzupassen, definieren wir Funktionen im Handler-Objekt:

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler2 = {
  get(target, prop, receiver) {
    return "world";
  },
};

const proxy2 = new Proxy(target, handler2);
```

Hier haben wir eine Implementierung des {{jsxref("Proxy/Proxy/get", "get()")}}-Handlers bereitgestellt, der Versuche abfängt, Eigenschaften im Ziel aufzufinden.

Handler-Funktionen werden manchmal als _Traps_ bezeichnet, vermutlich weil sie Aufrufe an das Zielobjekt abfangen. Der sehr einfache Trap in `handler2` oben definiert alle Eigenschaftszugriffe neu:

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

Proxies werden oft mit dem {{jsxref("Reflect")}}-Objekt verwendet, das einige Methoden mit denselben Namen wie die `Proxy`-Traps bereitstellt. Die `Reflect`-Methoden liefern die reflektive Semantik zum Aufrufen der entsprechenden [internen Objektmethoden](#interne_objektmethoden). Zum Beispiel können wir `Reflect.get` aufrufen, wenn wir das Verhalten des Objekts nicht neu definieren möchten:

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler3 = {
  get(target, prop, receiver) {
    if (prop === "message2") {
      return "world";
    }
    return Reflect.get(...arguments);
  },
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world
```

Die `Reflect`-Methode interagiert weiterhin über interne Objektmethoden mit dem Objekt – es "de-proxifiziert" den Proxy nicht, wenn es auf einem Proxy aufgerufen wird. Wenn Sie `Reflect`-Methoden innerhalb eines Proxy-Traps verwenden und der Aufruf der `Reflect`-Methode durch den Trap erneut abgefangen wird, kann es zu einer Endlosschleife kommen.

### Terminologie

Die folgenden Begriffe werden verwendet, wenn über die Funktionalität von Proxys gesprochen wird.

- [handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#handler_functions)
  - : Das Objekt, das als zweites Argument an den `Proxy`-Konstruktor übergeben wird. Es enthält die Traps, die das Verhalten des Proxys definieren.
- trap
  - : Die Funktion, die das Verhalten für die entsprechende [interne Objektmethode](#interne_objektmethoden) definiert. (Dies ist analog zum Konzept von _Traps_ in Betriebssystemen.)
- target
  - : Objekt, das der Proxy virtualisiert. Es wird häufig als Speicher-Backend für den Proxy verwendet. Invarianten (Semantiken, die unverändert bleiben) bezüglich der Nicht-Erweiterbarkeit oder der nicht konfigurierbaren Eigenschaften eines Objekts werden gegen das Ziel überprüft.
- invariants
  - : Semantiken, die bei der Implementierung benutzerdefinierter Operationen unverändert bleiben. Wenn Ihre Trap-Implementierung die Invarianten eines Handlers verletzt, wird ein {{jsxref("TypeError")}} ausgelöst.

### Interne Objektmethoden

[Objekte](/de/docs/Web/JavaScript/Data_structures#objects) sind Sammlungen von Eigenschaften. Die Sprache bietet jedoch keine Mechanismen, um Daten _direkt_ zu manipulieren, die im Objekt gespeichert sind – stattdessen definiert das Objekt einige interne Methoden, die angeben, wie mit ihm interagiert werden kann. Zum Beispiel, wenn Sie `obj.x` lesen, könnten Sie erwarten, dass Folgendes passiert:

- Die Eigenschaft `x` wird in der [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) durchsucht, bis sie gefunden wird.
- Wenn `x` eine Dateneigenschaft ist, wird das `value`-Attribut des Eigenschaftsdeskriptors zurückgegeben.
- Wenn `x` eine Zugriffseigenschaft ist, wird der Getter aufgerufen, und der Rückgabewert des Getters wird zurückgegeben.

Es gibt nichts Besonderes an diesem Prozess in der Sprache – es liegt einfach daran, dass gewöhnliche Objekte standardmäßig eine `[[Get]]`-interne Methode haben, die mit diesem Verhalten definiert ist. Die `obj.x`-Zugriffssyntax ruft einfach die `[[Get]]`-Methode auf dem Objekt auf, und das Objekt verwendet seine eigene Implementierung der internen Methode, um zu bestimmen, was zurückgegeben werden soll.

Ein weiteres Beispiel: [Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) unterscheiden sich von normalen Objekten, da sie eine magische [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length)-Eigenschaft haben, die, wenn sie geändert wird, automatisch leere Plätze zuweist oder Elemente vom Array entfernt. Ähnlich ändert das Hinzufügen von Array-Elementen automatisch die `length`-Eigenschaft. Dies liegt daran, dass Arrays eine `[[DefineOwnProperty]]`-interne Methode haben, die weiß, dass `length` aktualisiert werden muss, wenn ein ganzzahliger Index geschrieben wird, oder der Array-Inhalt aktualisiert werden muss, wenn `length` geschrieben wird. Solche Objekte, deren interne Methoden andere Implementierungen haben als gewöhnliche Objekte, werden als _exotische Objekte_ bezeichnet. `Proxy`-Objekte ermöglichen es Entwicklern, ihre eigenen exotischen Objekte mit voller Kapazität zu definieren.

Alle Objekte haben die folgenden internen Methoden:

| Interne Methode        | Entsprechender Trap                                                              |
| ---------------------- | -------------------------------------------------------------------------------- |
| `[[GetPrototypeOf]]`   | {{jsxref("Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}                     |
| `[[SetPrototypeOf]]`   | {{jsxref("Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}                     |
| `[[IsExtensible]]`     | {{jsxref("Proxy/Proxy/isExtensible", "isExtensible()")}}                         |
| `[[PreventExtensions]]`| {{jsxref("Proxy/Proxy/preventExtensions", "preventExtensions()")}}               |
| `[[GetOwnProperty]]`   | {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "getOwnPropertyDescriptor()")}} |
| `[[DefineOwnProperty]]`| {{jsxref("Proxy/Proxy/defineProperty", "defineProperty()")}}                     |
| `[[HasProperty]]`      | {{jsxref("Proxy/Proxy/has", "has()")}}                                           |
| `[[Get]]`              | {{jsxref("Proxy/Proxy/get", "get()")}}                                           |
| `[[Set]]`              | {{jsxref("Proxy/Proxy/set", "set()")}}                                           |
| `[[Delete]]`           | {{jsxref("Proxy/Proxy/deleteProperty", "deleteProperty()")}}                     |
| `[[OwnPropertyKeys]]`  | {{jsxref("Proxy/Proxy/ownKeys", "ownKeys()")}}                                   |

Funktionsobjekte haben ebenfalls die folgenden internen Methoden:

| Interne Methode | Entsprechender Trap                                |
| --------------- | -------------------------------------------------- |
| `[[Call]]`      | {{jsxref("Proxy/Proxy/apply", "apply()")}}         |
| `[[Construct]]` | {{jsxref("Proxy/Proxy/construct", "construct()")}} |

Es ist wichtig zu erkennen, dass alle Interaktionen mit einem Objekt letztendlich auf den Aufruf einer dieser internen Methoden hinauslaufen und dass sie alle über Proxies anpassbar sind. Dies bedeutet, dass nahezu kein Verhalten (mit Ausnahme bestimmter kritischer Invarianten) in der Sprache garantiert ist – alles wird durch das Objekt selbst definiert. Wenn Sie [`delete obj.x`](/de/docs/Web/JavaScript/Reference/Operators/delete) ausführen, gibt es keine Garantie dafür, dass [`"x" in obj`](/de/docs/Web/JavaScript/Reference/Operators/in) danach `false` zurückgibt – es hängt von der Implementierung der `[[Delete]]`- und `[[HasProperty]]`-Methoden des Objekts ab. Ein `delete obj.x` kann Dinge in die Konsole protokollieren, einen globalen Zustand ändern oder sogar eine neue Eigenschaft definieren, anstatt die vorhandene zu löschen, obwohl diese Semantiken in Ihrem eigenen Code vermieden werden sollten.

Alle internen Methoden werden von der Sprache selbst aufgerufen und sind im JavaScript-Code nicht direkt zugänglich. Der {{jsxref("Reflect")}}-Namensraum bietet Methoden, die kaum mehr tun als das Aufrufen der internen Methoden, abgesehen von etwas Input-Normalisierung/Validierung. Auf jeder Seite eines Traps listen wir mehrere typische Situationen auf, in denen der Trap aufgerufen wird, aber diese internen Methoden werden an _vielen_ Stellen aufgerufen. Zum Beispiel lesen und schreiben Array-Methoden über diese internen Methoden in ein Array, so dass Methoden wie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) auch die Traps `get()` und `set()` aufrufen würden.

Die meisten internen Methoden sind in dem, was sie tun, unkompliziert. Die einzigen zwei, die verwirrend sein könnten, sind `[[Set]]` und `[[DefineOwnProperty]]`. Für normale Objekte ruft erstere setter auf; letztere nicht. (Und `[[Set]]` ruft `[[DefineOwnProperty]]` intern auf, wenn keine vorhandene Eigenschaft vorhanden ist oder die Eigenschaft eine Dateneigenschaft ist.) Obwohl Sie vielleicht wissen, dass die `obj.x = 1`-Syntax `[[Set]]` verwendet und {{jsxref("Object.defineProperty()")}} `[[DefineOwnProperty]]` verwendet, ist es nicht sofort ersichtlich, welche Semantiken andere eingebaute Methoden und Syntaxen verwenden. Zum Beispiel verwenden [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) die `[[DefineOwnProperty]]`-Semantik, was der Grund dafür ist, dass in der Basisklasse definierte Setter nicht aufgerufen werden, wenn ein Feld in der abgeleiteten Klasse deklariert wird.

## Konstruktor

- {{jsxref("Proxy/Proxy", "Proxy()")}}
  - : Erstellt ein neues `Proxy`-Objekt.

> [!NOTE]
> Es gibt keine `Proxy.prototype`-Eigenschaft, daher haben `Proxy`-Instanzen keine speziellen Eigenschaften oder Methoden.

## Statische Methoden

- {{jsxref("Proxy.revocable()")}}
  - : Erstellt ein wiederrufbares `Proxy`-Objekt.

## Beispiele

### Einfaches Beispiel

In diesem einfachen Beispiel wird die Zahl `37` als Standardwert zurückgegeben, wenn sich der Eigenschaftsname nicht im Objekt befindet. Es wird der {{jsxref("Proxy/Proxy/get", "get()")}}-Handler verwendet.

```js
const handler = {
  get(obj, prop) {
    return prop in obj ? obj[prop] : 37;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined

console.log("c" in p, p.c); // false, 37
```

### No-op Weiterleitungsproxy

In diesem Beispiel verwenden wir ein nativen JavaScript-Objekt, an das unser Proxy alle Operationen weiterleitet, die auf es angewendet werden.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37; // Operation forwarded to the target

console.log(target.a); // 37 (The operation has been properly forwarded!)
```

Beachten Sie, dass dieses "No-op" für einfache JavaScript-Objekte funktioniert, nicht jedoch für native Objekte wie DOM-Elemente, [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)-Objekte oder alles, was interne Slots enthält. Siehe [Keine Weiterleitung privater Eigenschaften](#keine_weiterleitung_privater_eigenschaften) für weitere Informationen.

### Keine Weiterleitung privater Eigenschaften

Ein Proxy ist immer noch ein anderes Objekt mit einer anderen Identität — es ist ein _Proxy_, der zwischen dem eingeschlossenen Objekt und der äußeren Umgebung operiert. Daher hat der Proxy keinen direkten Zugriff auf die [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) des ursprünglichen Objekts.

```js
class Secret {
  #secret;
  constructor(secret) {
    this.#secret = secret;
  }
  get secret() {
    return this.#secret.replace(/\d+/, "[REDACTED]");
  }
}

const aSecret = new Secret("123456");
console.log(aSecret.secret); // [REDACTED]
// Looks like a no-op forwarding...
const proxy = new Proxy(aSecret, {});
console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it
```

Dies liegt daran, dass beim Aufrufen des Traps `get` des Proxys der Wert von `this` der `proxy` anstelle des ursprünglichen `secret` ist, sodass `#secret` nicht zugänglich ist. Um dies zu beheben, verwenden Sie das ursprüngliche `secret` als `this`:

```js
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    // By default, it looks like Reflect.get(target, prop, receiver)
    // which has a different value of `this`
    return target[prop];
  },
});
console.log(proxy.secret);
```

Für Methoden bedeutet dies, dass Sie den `this`-Wert der Methode ebenfalls auf das ursprüngliche Objekt umleiten müssen:

```js
class Secret {
  #x = 1;
  x() {
    return this.#x;
  }
}

const aSecret = new Secret();
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    const value = target[prop];
    if (value instanceof Function) {
      return function (...args) {
        return value.apply(this === receiver ? target : this, args);
      };
    }
    return value;
  },
});
console.log(proxy.x());
```

Einige native JavaScript-Objekte haben Eigenschaften, die _[interne Slots](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-internal-methods-and-internal-slots)_ genannt werden und aus JavaScript-Code nicht zugänglich sind. Zum Beispiel verfügen [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)-Objekte über einen internen Slot namens `[[MapData]]`, der die Schlüssel-Wert-Paare der Karte speichert. Daher können Sie nicht einfach einen Weiterleitungsproxy für eine Karte erstellen:

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

Sie müssen den oben illustrierten "`this`-wiederherstellenden" Proxy verwenden, um dies zu umgehen.

### Validierung

Mit einem `Proxy` können Sie einfach den übergebenen Wert für ein Objekt validieren. In diesem Beispiel wird der {{jsxref("Proxy/Proxy/set", "set()")}}-Handler verwendet.

```js
const validator = {
  set(obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("The age is not an integer");
      }
      if (value > 200) {
        throw new RangeError("The age seems invalid");
      }
    }

    // The default behavior to store the value
    obj[prop] = value;

    // Indicate success
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // Throws an exception
person.age = 300; // Throws an exception
```

### Manipulation von DOM-Knoten

In diesem Beispiel verwenden wir `Proxy` zum Umschalten eines Attributs von zwei verschiedenen Elementen: Wenn wir das Attribut an einem Element einstellen, wird das Attribut an dem anderen Element deaktiviert.

Wir erstellen ein `view`-Objekt, das ein Proxy für ein Objekt mit einer `selected`-Eigenschaft ist. Der Proxy-Handler definiert den {{jsxref("Proxy/Proxy/set", "set()")}}-Handler.

Wenn wir ein HTML-Element `view.selected` zuordnen, wird das `'aria-selected'`-Attribut des Elements auf `true` gesetzt. Wenn wir dann ein anderes Element `view.selected` zuordnen, wird das `'aria-selected'`-Attribut dieses Elements auf `true` gesetzt und das `'aria-selected'`-Attribut des vorherigen Elements automatisch auf `false` gesetzt.

```js
const view = new Proxy(
  {
    selected: null,
  },
  {
    set(obj, prop, newval) {
      const oldval = obj[prop];

      if (prop === "selected") {
        if (oldval) {
          oldval.setAttribute("aria-selected", "false");
        }
        if (newval) {
          newval.setAttribute("aria-selected", "true");
        }
      }

      // The default behavior to store the value
      obj[prop] = newval;

      // Indicate success
      return true;
    },
  },
);

const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");

// select item1:
view.selected = item1;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: true

// selecting item2 de-selects item1:
view.selected = item2;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: false

console.log(`item2: ${item2.getAttribute("aria-selected")}`);
// item2: true
```

### Wertkorrektur und eine zusätzliche Eigenschaft

Das `products`-Proxy-Objekt bewertet den übergebenen Wert und konvertiert ihn bei Bedarf in ein Array. Das Objekt unterstützt auch eine zusätzliche Eigenschaft namens `latestBrowser` sowohl als Getter als auch als Setter.

```js
const products = new Proxy(
  {
    browsers: ["Firefox", "Chrome"],
  },
  {
    get(obj, prop) {
      // An extra property
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // The default behavior to return the value
      return obj[prop];
    },
    set(obj, prop, value) {
      // An extra property
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return true;
      }

      // Convert the value if it is not an array
      if (typeof value === "string") {
        value = [value];
      }

      // The default behavior to store the value
      obj[prop] = value;

      // Indicate success
      return true;
    },
  },
);

console.log(products.browsers);
//  ['Firefox', 'Chrome']

products.browsers = "Safari";
//  pass a string (by mistake)

console.log(products.browsers);
//  ['Safari'] <- no problem, the value is an array

products.latestBrowser = "Edge";

console.log(products.browsers);
//  ['Safari', 'Edge']

console.log(products.latestBrowser);
//  'Edge'
```

### Ein vollständiges Traps-Listenbeispiel

Um nun ein vollständiges Beispiel einer `traps`-Liste zu erstellen, werden wir zu didaktischen Zwecken versuchen, ein _nicht-natives_ Objekt zu proxifizieren, das sich besonders für diese Art von Operation eignet: das `docCookies`-globale Objekt, erstellt von einem [einfachen Cookie-Framework](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework).

```js
/*
  const docCookies = ... get the "docCookies" object here:
  https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework
*/

const docCookies = new Proxy(docCookies, {
  get(target, key) {
    return target[key] ?? target.getItem(key) ?? undefined;
  },
  set(target, key, value) {
    if (key in target) {
      return false;
    }
    return target.setItem(key, value);
  },
  deleteProperty(target, key) {
    if (!(key in target)) {
      return false;
    }
    return target.removeItem(key);
  },
  ownKeys(target) {
    return target.keys();
  },
  has(target, key) {
    return key in target || target.hasItem(key);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor && "value" in descriptor) {
      target.setItem(key, descriptor.value);
    }
    return target;
  },
  getOwnPropertyDescriptor(target, key) {
    const value = target.getItem(key);
    return value
      ? {
          value,
          writable: true,
          enumerable: true,
          configurable: false,
        }
      : undefined;
  },
});

/* Cookies test */

console.log((docCookies.myCookie1 = "First value"));
console.log(docCookies.getItem("myCookie1"));

docCookies.setItem("myCookie1", "Changed value");
console.log(docCookies.myCookie1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Proxies are awesome](https://youtu.be/sClk6aB_CPk) Präsentation von Brendan Eich auf der JSConf (2014)
