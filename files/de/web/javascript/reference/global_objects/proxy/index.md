---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

Das **`Proxy`**-Objekt ermöglicht es Ihnen, ein Proxy für ein anderes Objekt zu erstellen, das grundlegende Operationen für dieses Objekt abfangen und neu definieren kann.

## Beschreibung

Das `Proxy`-Objekt erlaubt es Ihnen, ein Objekt zu erstellen, das anstelle des Originalobjekts verwendet werden kann, aber grundlegende `Object`-Operationen wie das Abrufen, Festlegen und Definieren von Eigenschaften neu definieren kann. Proxy-Objekte werden häufig verwendet, um Zugriffe auf Eigenschaften zu protokollieren, Eingaben zu validieren, zu formatieren oder zu bereinigen und so weiter.

Sie erstellen einen `Proxy` mit zwei Parametern:

- `target`: Das originale Objekt, das Sie proxen möchten
- `handler`: Ein Objekt, das definiert, welche Operationen abgefangen und wie diese abgefangenen Operationen neu definiert werden sollen.

Zum Beispiel erstellt dieser Code einen Proxy für das `target`-Objekt.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Da der Handler leer ist, verhält sich dieser Proxy genau wie das ursprüngliche Zielobjekt:

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

Hier haben wir eine Implementierung des {{jsxref("Proxy/Proxy/get", "get()")}}-Handlers bereitgestellt, der Versuche abfängt, auf Eigenschaften im Ziel zuzugreifen.

Handler-Funktionen werden manchmal _Traps_ genannt, vermutlich weil sie Aufrufe an das Zielobjekt abfangen. Der Trap in `handler2` oben definiert alle Eigenschaftszugriffe neu:

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

Proxies werden oft mit dem {{jsxref("Reflect")}}-Objekt verwendet, das einige Methoden mit denselben Namen wie die `Proxy`-Traps bereitstellt. Die `Reflect`-Methoden bieten die reflektierende Semantik für den Aufruf der entsprechenden [objektinternen Methoden](#objektinterne_methoden). Zum Beispiel können wir `Reflect.get` aufrufen, wenn wir das Verhalten des Objekts nicht neu definieren möchten:

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

Die `Reflect`-Methode interagiert immer noch mit dem Objekt durch objektinterne Methoden - sie "entproxifiziert" den Proxy nicht, wenn sie auf einem Proxy aufgerufen wird. Wenn Sie `Reflect`-Methoden innerhalb eines Proxy-Traps verwenden und der `Reflect`-Methodenaufruf erneut vom Trap abgefangen wird, kann es zu einer Endlosschleife kommen.

### Terminologie

Die folgenden Begriffe werden verwendet, wenn über die Funktionalität von Proxies gesprochen wird.

- [handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#handler_functions)
  - : Das Objekt, das als zweites Argument an den `Proxy`-Konstruktor übergeben wird. Es enthält die Traps, welche das Verhalten des Proxys definieren.
- trap
  - : Die Funktion, die das Verhalten für die entsprechende [objektinterne Methode](#objektinterne_methoden) definiert. (Das ist analog zum Konzept der _Traps_ in Betriebssystemen.)
- target
  - : Objekt, das der Proxy virtualisiert. Es wird oft als Speicher-Backend für den Proxy verwendet. Invarianten (Semantik, die unverändert bleibt) in Bezug auf die Nicht-Erweiterbarkeit oder nicht konfigurierbare Eigenschaften von Objekten werden am Ziel verifiziert.
- {{Glossary("invariant", "invariants")}}
  - : Semantik, die unverändert bleibt, wenn benutzerdefinierte Operationen implementiert werden. Wenn Ihre Trap-Implementierung die Invarianten eines Handlers verletzt, wird ein {{jsxref("TypeError")}} ausgelöst.

### Objektinterne Methoden

[Objekte](/de/docs/Web/JavaScript/Guide/Data_structures#objects) sind Sammlungen von Eigenschaften. Allerdings bietet die Sprache keine Mechanismen, um _direkt_ auf die im Objekt gespeicherten Daten zuzugreifen - stattdessen definiert das Objekt einige interne Methoden, die angeben, wie mit ihm interagiert werden kann. Zum Beispiel, wenn Sie `obj.x` lesen, können Sie erwarten, dass Folgendes geschieht:

- Die Eigenschaft `x` wird entlang der [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) gesucht, bis sie gefunden wird.
- Wenn `x` eine Dateneigenschaft ist, wird das `value`-Attribut des Eigenschaftsdeskriptors zurückgegeben.
- Wenn `x` eine Zugriffseigenschaft ist, wird der Getter aufgerufen und der Rückgabewert des Getters wird zurückgegeben.

Es gibt nichts Besonderes an diesem Prozess in der Sprache - es liegt daran, dass gewöhnliche Objekte standardmäßig eine `[[Get]]`-interne Methode haben, die mit diesem Verhalten definiert ist. Die `obj.x`-Eigenschaftszugriffssyntax ruft einfach die `[[Get]]`-Methode auf dem Objekt auf, und das Objekt verwendet seine eigene Implementierung der internen Methode, um zu bestimmen, was zurückgegeben werden soll.

Ein weiteres Beispiel ist, dass [Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) sich von normalen Objekten unterscheiden, da sie über eine magische [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length)-Eigenschaft verfügen, die bei der Veränderung automatisch leere Slots zuweist oder Elemente aus dem Array entfernt. Ähnlich verändert das Hinzufügen von Array-Elementen automatisch die `length`-Eigenschaft. Das liegt daran, dass Arrays eine `[[DefineOwnProperty]]`-interne Methode haben, die weiß, dass `length` aktualisiert werden muss, wenn ein ganzzahliger Index geschrieben wird, oder die Array-Inhalte aktualisiert werden müssen, wenn `length` geschrieben wird. Solche Objekte, deren interne Methoden sich von gewöhnlichen Objekten unterscheiden, werden _exotische Objekte_ genannt. `Proxy` ermöglicht es Entwicklern, ihre eigenen exotischen Objekte mit voller Kapazität zu definieren.

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

Es ist wichtig zu verstehen, dass alle Interaktionen mit einem Objekt letztendlich auf den Aufruf einer dieser internen Methoden hinauslaufen und dass sie alle durch Proxies anpassbar sind. Das bedeutet, dass fast kein Verhalten (außer bestimmte kritische Invarianten) in der Sprache garantiert ist - alles wird durch das Objekt selbst definiert. Wenn Sie [`delete obj.x`](/de/docs/Web/JavaScript/Reference/Operators/delete) ausführen, gibt es keine Garantie dafür, dass [`"x" in obj`](/de/docs/Web/JavaScript/Reference/Operators/in) danach `false` zurückgibt - es hängt von den Implementierungen des Objekts von `[[Delete]]` und `[[HasProperty]]` ab. Ein `delete obj.x` kann Dinge in die Konsole protokollieren, globalen Zustand ändern oder sogar eine neue Eigenschaft definieren, anstatt die bestehende zu löschen, obwohl diese Semantik in Ihrem eigenen Code vermieden werden sollte.

Alle internen Methoden werden von der Sprache selbst aufgerufen und sind im JavaScript-Code nicht direkt zugänglich. Der {{jsxref("Reflect")}}-Namensraum bietet Methoden, die wenig mehr tun, als die internen Methoden aufzurufen, abgesehen von ein wenig Eingabenormalisierung/-validierung. Auf jeder Trap-Seite listen wir mehrere typische Situationen auf, wenn der Trap aufgerufen wird, aber diese internen Methoden werden _in vielen_ Fällen aufgerufen. Zum Beispiel lesen und schreiben Array-Methoden auf das Array durch diese internen Methoden, sodass Methoden wie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) auch die `get()`- und `set()`-Traps aufrufen würden.

Die meisten der internen Methoden sind auf das, was sie tun, recht direkt. Die einzigen zwei, die eventuell verwechselt werden könnten, sind `[[Set]]` und `[[DefineOwnProperty]]`. Bei normalen Objekten ruft ersteres Setter auf; letzteres nicht. (Und `[[Set]]` ruft `[[DefineOwnProperty]]` intern auf, wenn keine existierende Eigenschaft oder die Eigenschaft eine Dateneigenschaft ist.) Während Sie wissen mögen, dass die `obj.x = 1`-Syntax `[[Set]]` verwendet und {{jsxref("Object.defineProperty()")}} `[[DefineOwnProperty]]` verwendet, ist nicht sofort ersichtlich, welche Semantik andere eingebaute Methoden und Syntaxen verwenden. Zum Beispiel verwenden [Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) die `[[DefineOwnProperty]]`-Semantik, weshalb Setter, die in der Superklasse definiert sind, nicht aufgerufen werden, wenn ein Feld in der abgeleiteten Klasse deklariert wird.

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

In diesem Beispiel wird die Zahl `37` als Standardwert zurückgegeben, wenn der Eigenschaftsname nicht im Objekt enthalten ist. Hierbei wird der {{jsxref("Proxy/Proxy/get", "get()")}}-Handler verwendet.

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

In diesem Beispiel verwenden wir ein natives JavaScript-Objekt, an das unser Proxy alle Operationen weiterleitet, die auf es angewendet werden.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37; // Operation forwarded to the target

console.log(target.a); // 37 (The operation has been properly forwarded!)
```

Beachten Sie, dass dieser "No-op" für normale JavaScript-Objekte funktioniert, nicht jedoch für native Objekte, wie DOM-Elemente, [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)-Objekte oder alles, was interne Slots hat. Siehe [keine Weiterleitung von privaten Feldern](#keine_weiterleitung_von_privaten_feldern) für weitere Informationen.

### Keine Weiterleitung von privaten Feldern

Ein Proxy ist dennoch ein anderes Objekt mit einer anderen Identität - er ist ein _Proxy_, der zwischen dem umschlossenen Objekt und dem Äußeren agiert. Als solcher hat der Proxy keinen direkten Zugriff auf die [privaten Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) des ursprünglichen Objekts.

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

Das liegt daran, dass beim Aufrufen des `get`-Traps des Proxys der `this`-Wert der `proxy` anstelle des ursprünglichen `secret` ist, sodass `#secret` nicht zugänglich ist. Um dies zu beheben, verwenden Sie das ursprüngliche `secret` als `this`:

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

Einige native JavaScript-Objekte haben Eigenschaften, die _[innere Slots](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-internal-methods-and-internal-slots)_ genannt werden, die nicht aus JavaScript-Code zugänglich sind. Zum Beispiel haben [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)-Objekte einen inneren Slot namens `[[MapData]]`, der die Schlüssel-Werte-Paare der Map speichert. Daher können Sie nicht einfach einen Weiterleitungsproxy für eine Map erstellen:

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

Sie müssen den oben illustrierten "`this`-wiederherstellenden" Proxy verwenden, um dies zu umgehen.

### Validierung

Mit einem `Proxy` können Sie den übergebenen Wert für ein Objekt einfach validieren. Dieses Beispiel verwendet den {{jsxref("Proxy/Proxy/set", "set()")}}-Handler.

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

In diesem Beispiel verwenden wir `Proxy`, um ein Attribut von zwei verschiedenen Elementen umzuschalten: Wenn wir das Attribut auf einem Element festlegen, wird es auf dem anderen automatisch deaktiviert.

Wir erstellen ein `view`-Objekt, das ein Proxy für ein Objekt mit einer `selected`-Eigenschaft ist. Der Proxy-Handler definiert den {{jsxref("Proxy/Proxy/set", "set()")}}-Handler.

Wenn wir ein HTML-Element `view.selected` zuweisen, wird das `'aria-selected'`-Attribut des Elements auf `true` gesetzt. Wenn wir dann ein anderes Element `view.selected` zuweisen, wird das `'aria-selected'`-Attribut dieses Elements auf `true` gesetzt und das vorherige Element hat das `'aria-selected'`-Attribut automatisch auf `false` gesetzt.

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

Das `products` Proxy-Objekt bewertet den übergebenen Wert und konvertiert ihn bei Bedarf in ein Array. Das Objekt unterstützt auch eine zusätzliche Eigenschaft namens `latestBrowser`, sowohl als Getter als auch als Setter.

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

- [Proxies are awesome](https://youtu.be/sClk6aB_CPk) Präsentation von Brendan Eich bei JSConf (2014)
