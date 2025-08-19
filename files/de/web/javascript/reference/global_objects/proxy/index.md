---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

Das **`Proxy`**-Objekt ermöglicht Ihnen, einen Proxy für ein anderes Objekt zu erstellen, der die grundlegenden Operationen für dieses Objekt abfangen und neu definieren kann.

## Beschreibung

Das `Proxy`-Objekt ermöglicht Ihnen, ein Objekt zu erstellen, das anstelle des Originalobjekts verwendet werden kann, aber grundlegende `Object`-Operationen wie das Lesen, Setzen und Definieren von Eigenschaften neu definieren kann. Proxy-Objekte werden häufig verwendet, um den Zugriff auf Eigenschaften zu protokollieren, Eingaben zu validieren, zu formatieren oder zu bereinigen und vieles mehr.

Sie erstellen einen `Proxy` mit zwei Parametern:

- `target`: das Originalobjekt, das Sie proxyen möchten
- `handler`: ein Objekt, das definiert, welche Operationen abgefangen und wie die abgefangenen Operationen neu definiert werden sollen

Zum Beispiel erstellt dieser Code einen Proxy für das `target`-Objekt.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Da der Handler leer ist, verhält sich dieser Proxy genauso wie das ursprüngliche Ziel:

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

Hier haben wir eine Implementierung des {{jsxref("Proxy/Proxy/get", "get()")}} Handlers bereitgestellt, der Zugriffsversuche auf Eigenschaften im Ziel abfängt.

Handler-Funktionen werden manchmal als _Traps_ bezeichnet, vermutlich weil sie Aufrufe an das Zielobjekt abfangen. Der Trap im obigen `handler2` definiert alle Eigenschafts-Accessoren neu:

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

Proxys werden oft mit dem {{jsxref("Reflect")}}-Objekt verwendet, das einige Methoden mit denselben Namen wie die `Proxy`-Traps bereitstellt. Die `Reflect`-Methoden bieten die reflexiven Semantiken für das Aufrufen der entsprechenden [objektinternen Methoden](#objektinterne_methoden). Zum Beispiel können wir `Reflect.get` aufrufen, wenn wir das Verhalten des Objekts nicht neu definieren möchten:

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

Die `Reflect`-Methode interagiert immer noch mit dem Objekt durch objektinterne Methoden — sie „deproxifiziert“ den Proxy nicht, wenn sie auf einem Proxy aufgerufen wird. Wenn Sie `Reflect`-Methoden innerhalb eines Proxy-Traps verwenden und der `Reflect`-Methodenaufruf erneut vom Trap abgefangen wird, kann es zu einer Endlosschleife kommen.

### Terminologie

Die folgenden Begriffe werden verwendet, wenn über die Funktionalität von Proxys gesprochen wird.

- [handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#handler_functions)
  - : Das Objekt, das als zweites Argument an den `Proxy`-Konstruktor übergeben wird. Es enthält die Traps, die das Verhalten des Proxys definieren.
- trap
  - : Die Funktion, die das Verhalten für die entsprechende [objektinterne Methode](#objektinterne_methoden) definiert. (Dies ist analog zum Konzept der _Traps_ in Betriebssystemen.)
- target
  - : Objekt, das der Proxy virtualisiert. Es wird oft als Speicher-Backend für den Proxy verwendet. Invarianten (Semantiken, die unverändert bleiben) in Bezug auf die Nichterweiterbarkeit des Objekts oder nicht konfigurierbare Eigenschaften werden gegen das Ziel überprüft.
- {{Glossary("invariant", "invariants")}}
  - : Semantiken, die unverändert bleiben, wenn benutzerdefinierte Operationen implementiert werden. Wenn Ihre Trap-Implementierung die Invarianten eines Handlers verletzt, wird ein {{jsxref("TypeError")}} ausgelöst.

### Objektinterne Methoden

[Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) sind Sammlungen von Eigenschaften. Die Sprache bietet jedoch keine Mechanismen, um die im Objekt gespeicherten Daten _direkt_ zu manipulieren — stattdessen definiert das Objekt einige interne Methoden, die spezifizieren, wie mit ihm interagiert werden kann. Zum Beispiel, wenn Sie `obj.x` lesen, erwarten Sie vielleicht, dass Folgendes passiert:

- Die `x`-Eigenschaft wird im [Prototypen-Verkettung](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) gesucht, bis sie gefunden wird.
- Wenn `x` eine Dateneigenschaft ist, wird das `value`-Attribut des Eigenschaftsdeskriptors zurückgegeben.
- Wenn `x` eine Accessor-Eigenschaft ist, wird der Getter aufgerufen und der Rückgabewert des Getters zurückgegeben.

Es gibt nichts Besonderes an diesem Prozess in der Sprache — es liegt daran, dass gewöhnliche Objekte standardmäßig eine `[[Get]]`-interne Methode haben, die mit diesem Verhalten definiert ist. Die `obj.x`-Eigenschaftsabzugssyntax ruft einfach die `[[Get]]`-Methode des Objekts auf und das Objekt verwendet seine eigene interne Methodenumsetzung, um zu bestimmen, was zurückgegeben werden soll.

Ein anderes Beispiel: [Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) unterscheiden sich von normalen Objekten, da sie eine magische [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length)-Eigenschaft haben, die, wenn modifiziert, automatisch leere Slots zuordnet oder Elemente aus dem Array entfernt. Ebenso ändert das Hinzufügen von Array-Elementen automatisch die `length`-Eigenschaft. Dies liegt daran, dass Arrays eine `[[DefineOwnProperty]]`-interne Methode haben, die weiß, `length` zu aktualisieren, wenn ein ganzzahliger Index geschrieben wird, oder die Array-Inhalte zu aktualisieren, wenn `length` geschrieben wird. Solche Objekte, deren interne Methoden unterschiedliche Implementierungen als gewöhnliche Objekte haben, werden als _exotische Objekte_ bezeichnet. `Proxy` ermöglicht es Entwicklern, ihre eigenen exotischen Objekte mit voller Kapazität zu definieren.

Alle Objekte haben die folgenden internen Methoden:

| Interne Methode         | Entsprechender Trap                                                              |
| ----------------------- | -------------------------------------------------------------------------------- |
| `[[GetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}                     |
| `[[SetPrototypeOf]]`    | {{jsxref("Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}                     |
| `[[IsExtensible]]`      | {{jsxref("Proxy/Proxy/isExtensible", "isExtensible()")}}                         |
| `[[PreventExtensions]]` | {{jsxref("Proxy/Proxy/preventExtensions", "preventExtensions()")}}               |
| `[[GetOwnProperty]]`    | {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "getOwnPropertyDescriptor()")}} |
| `[[DefineOwnProperty]]` | {{jsxref("Proxy/Proxy/defineProperty", "defineProperty()")}}                     |
| `[[HasProperty]]`       | {{jsxref("Proxy/Proxy/has", "has()")}}                                           |
| `[[Get]]`               | {{jsxref("Proxy/Proxy/get", "get()")}}                                           |
| `[[Set]]`               | {{jsxref("Proxy/Proxy/set", "set()")}}                                           |
| `[[Delete]]`            | {{jsxref("Proxy/Proxy/deleteProperty", "deleteProperty()")}}                     |
| `[[OwnPropertyKeys]]`   | {{jsxref("Proxy/Proxy/ownKeys", "ownKeys()")}}                                   |

Funktionsobjekte haben auch die folgenden internen Methoden:

| Interne Methode | Entsprechender Trap                                |
| --------------- | -------------------------------------------------- |
| `[[Call]]`      | {{jsxref("Proxy/Proxy/apply", "apply()")}}         |
| `[[Construct]]` | {{jsxref("Proxy/Proxy/construct", "construct()")}} |

Es ist wichtig zu erkennen, dass alle Interaktionen mit einem Objekt letztendlich auf die Aufrufung einer dieser internen Methoden hinauslaufen und dass sie alle durch Proxys anpassbar sind. Das bedeutet, dass fast kein Verhalten (außer bestimmte kritische Invarianten) in der Sprache garantiert ist — alles wird durch das Objekt selbst definiert. Wenn Sie [`delete obj.x`](/de/docs/Web/JavaScript/Reference/Operators/delete) ausführen, gibt es keine Garantie dafür, dass [`"x" in obj`](/de/docs/Web/JavaScript/Reference/Operators/in) danach `false` zurückgibt — es hängt von den Implementierungen des Objekts von `[[Delete]]` und `[[HasProperty]]` ab. Ein `delete obj.x` kann Dinge in die Konsole protokollieren, einen globalen Status ändern oder sogar eine neue Eigenschaft definieren, anstatt die bestehende zu löschen, obwohl diese Semantiken in Ihrem eigenen Code vermieden werden sollten.

Alle internen Methoden werden von der Sprache selbst aufgerufen und sind in JavaScript-Code nicht direkt zugänglich. Der {{jsxref("Reflect")}}-Namensraum bietet Methoden, die wenig mehr tun, als die internen Methoden aufzurufen, außer einigen Eingabenormalisierungen und -validierungen. Auf jeder Trap-Seite listen wir mehrere typische Situationen auf, wann der Trap aufgerufen wird, aber diese internen Methoden werden an _sehr vielen_ Stellen aufgerufen. Zum Beispiel lesen und schreiben Array-Methoden auf Array durch diese internen Methoden, sodass Methoden wie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) auch `get()`- und `set()`-Traps aufrufen würden.

Die meisten internen Methoden sind in ihrem Zweck klar. Die einzigen beiden, die verwirrt werden könnten, sind `[[Set]]` und `[[DefineOwnProperty]]`. Für normale Objekte ruft erstere Setter auf; letztere nicht. (Und `[[Set]]` ruft `[[DefineOwnProperty]]` intern auf, wenn keine bestehende Eigenschaft vorhanden ist oder die Eigenschaft eine Dateneigenschaft ist.) Während Sie vielleicht wissen, dass die `obj.x = 1`-Syntax `[[Set]]` verwendet und {{jsxref("Object.defineProperty()")}} `[[DefineOwnProperty]]` verwendet, ist es nicht sofort ersichtlich, welche Semantiken andere eingebaute Methoden und Syntaxen verwenden. Zum Beispiel verwenden [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) die `[[DefineOwnProperty]]`-Semantik, weshalb Setter, die in der Superklasse definiert sind, nicht aufgerufen werden, wenn ein Feld in der abgeleiteten Klasse deklariert wird.

## Konstruktor

- {{jsxref("Proxy/Proxy", "Proxy()")}}
  - : Erstellt ein neues `Proxy`-Objekt.

> [!NOTE]
> Es gibt keine `Proxy.prototype`-Eigenschaft, daher haben `Proxy`-Instanzen keine speziellen Eigenschaften oder Methoden.

## Statische Methoden

- {{jsxref("Proxy.revocable()")}}
  - : Erstellt ein widerrufbares `Proxy`-Objekt.

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird die Zahl `37` als Standardwert zurückgegeben, wenn der Eigenschaftsname nicht im Objekt vorhanden ist. Es wird der {{jsxref("Proxy/Proxy/get", "get()")}} Handler verwendet.

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

### No-op-Weiterleitungsproxy

In diesem Beispiel verwenden wir ein natives JavaScript-Objekt, an das unser Proxy alle Operationen weiterleiten wird, die darauf angewendet werden.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37; // Operation forwarded to the target

console.log(target.a); // 37 (The operation has been properly forwarded!)
```

Beachten Sie, dass dieses "No-op" für einfache JavaScript-Objekte funktioniert, aber nicht für native Objekte wie DOM-Elemente, [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)-Objekte oder alles, was interne Slots hat. Siehe [keine Weiterleitung privater Felder](#keine_weiterleitung_privater_felder) für weitere Informationen.

### Keine Weiterleitung privater Felder

Ein Proxy ist weiterhin ein anderes Objekt mit einer anderen Identität — er ist ein _Proxy_, der zwischen dem umhüllten Objekt und der Außenwelt operiert. Daher hat der Proxy keinen direkten Zugriff auf die [privaten Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) des Originalobjekts.

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

const secret = new Secret("123456");
console.log(secret.secret); // [REDACTED]
// Looks like a no-op forwarding...
const proxy = new Proxy(secret, {});
console.log(proxy.secret); // TypeError: Cannot read private member #secret from an object whose class did not declare it
```

Dies liegt daran, dass, wenn der `get`-Trap des Proxys aufgerufen wird, `this`-Wert der `proxy` anstelle des ursprünglichen `secret` ist, sodass `#secret` nicht zugänglich ist. Um dies zu beheben, verwenden Sie das ursprüngliche `secret` als `this`:

```js
const proxy = new Proxy(secret, {
  get(target, prop, receiver) {
    // By default, it looks like Reflect.get(target, prop, receiver)
    // which has a different value of `this`
    return target[prop];
  },
});
console.log(proxy.secret);
```

Für Methoden bedeutet dies, dass Sie den `this`-Wert der Methode auf das ursprüngliche Objekt ebenfalls umleiten müssen:

```js
class Secret {
  #x = 1;
  x() {
    return this.#x;
  }
}

const secret = new Secret();
const proxy = new Proxy(secret, {
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

Einige native JavaScript-Objekte haben Eigenschaften, die als _[interne Slots](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-internal-methods-and-internal-slots)_ bezeichnet werden und die vom JavaScript-Code nicht zugänglich sind. Zum Beispiel haben [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)-Objekte einen internen Slot namens `[[MapData]]`, der die Schlüssel-Wert-Paare der Karte speichert. Daher können Sie nicht trivial einen Weiterleitungsproxy für eine Karte erstellen:

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

Sie müssen den oben illustrierten „`this`-Wiederherstellungs“-Proxy verwenden, um dies zu umgehen.

### Validierung

Mit einem `Proxy` können Sie leicht den übergebenen Wert für ein Objekt validieren. Dieses Beispiel verwendet den {{jsxref("Proxy/Proxy/set", "set()")}} Handler.

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

In diesem Beispiel verwenden wir `Proxy`, um ein Attribut von zwei verschiedenen Elementen umzuschalten: Wenn wir das Attribut an einem Element setzen, wird das Attribut am anderen automatisch gelöscht.

Wir erstellen ein `view`-Objekt, das ein Proxy für ein Objekt mit einer `selected`-Eigenschaft ist. Der Proxy-Handler definiert den {{jsxref("Proxy/Proxy/set", "set()")}} Handler.

Wenn wir ein HTML-Element `view.selected` zuweisen, wird das `'aria-selected'`-Attribut des Elements auf `true` gesetzt. Wenn wir dann ein anderes Element `view.selected` zuweisen, wird das `'aria-selected'`-Attribut dieses Elements auf `true` gesetzt und das vorherige Element's `'aria-selected'`-Attribut wird automatisch auf `false` gesetzt.

```js
const view = new Proxy(
  {
    selected: null,
  },
  {
    set(obj, prop, newVal) {
      const oldVal = obj[prop];

      if (prop === "selected") {
        if (oldVal) {
          oldVal.setAttribute("aria-selected", "false");
        }
        if (newVal) {
          newVal.setAttribute("aria-selected", "true");
        }
      }

      // The default behavior to store the value
      obj[prop] = newVal;

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Proxies are awesome](https://youtu.be/sClk6aB_CPk) Präsentation von Brendan Eich auf der JSConf (2014)
