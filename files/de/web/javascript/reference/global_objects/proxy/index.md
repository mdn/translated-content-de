---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Das **`Proxy`**-Objekt ermöglicht es Ihnen, einen Proxy für ein anderes Objekt zu erstellen, der grundlegende Operationen für dieses Objekt abfangen und neu definieren kann.

## Beschreibung

Das `Proxy`-Objekt erlaubt es Ihnen, ein Objekt zu erstellen, das anstelle des ursprünglichen Objekts verwendet werden kann und grundlegende `Object`-Operationen wie das Abrufen, Setzen und Definieren von Eigenschaften neu definieren kann. Proxy-Objekte werden häufig verwendet, um Zugriffe auf Eigenschaften zu protokollieren, Eingaben zu validieren, zu formatieren oder zu bereinigen usw.

Sie erstellen einen `Proxy` mit zwei Parametern:

- `target`: das ursprüngliche Objekt, das Sie proxen möchten
- `handler`: ein Objekt, das definiert, welche Operationen abgefangen und wie die abgefangenen Operationen neu definiert werden sollen.

Zum Beispiel erstellt dieser Code einen Proxy für das `target`-Objekt.

```js
const target = {
  message1: "hello",
  message2: "everyone",
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Da der Handler leer ist, verhält sich dieser Proxy wie das ursprüngliche Ziel:

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

Hier haben wir eine Implementierung des {{jsxref("Proxy/Proxy/get", "get()")}}-Handlers bereitgestellt, der Versuche abfängt, Eigenschaften im Zielobjekt zuzugreifen.

Handler-Funktionen werden manchmal als _Traps_ bezeichnet, vermutlich weil sie Aufrufe des Zielobjekts abfangen. Die sehr einfache Trap in `handler2` oben definiert alle Eigenschaftszugriffe neu:

```js
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world
```

Proxys werden häufig mit dem {{jsxref("Reflect")}}-Objekt verwendet, das einige Methoden mit denselben Namen wie die `Proxy`-Traps bietet. Die `Reflect`-Methoden bieten die reflektierende Semantik für den Aufruf der entsprechenden [objektinternen Methoden](#objektinterne_methoden). Zum Beispiel können wir `Reflect.get` aufrufen, wenn wir das Verhalten des Objekts nicht neu definieren möchten:

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

Die `Reflect`-Methode interagiert weiterhin mit dem Objekt durch objektinterne Methoden - sie "de-Proxy-t" den Proxy nicht, wenn sie auf einen Proxy aufgerufen wird. Wenn Sie `Reflect`-Methoden innerhalb einer Proxy-Trap verwenden und der `Reflect`-Methodenaufruf erneut von der Trap abgefangen wird, kann es zu einer Endlosschleife kommen.

### Terminologie

Die folgenden Begriffe werden verwendet, wenn über die Funktionalität von Proxys gesprochen wird.

- [handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy#handler_functions)
  - : Das Objekt, das als zweites Argument dem `Proxy`-Konstruktor übergeben wird. Es enthält die Traps, die das Verhalten des Proxys definieren.
- trap
  - : Die Funktion, die das Verhalten für die entsprechende [objektinterne Methode](#objektinterne_methoden) definiert. (Dies ist analog zum Konzept der _Traps_ in Betriebssystemen.)
- target
  - : Objekt, das der Proxy virtualisiert. Es wird oft als Speicherrückend für den Proxy verwendet. Invarianten (Semantiken, die unverändert bleiben) bezüglich der Nichterweiterbarkeit von Objekten oder der nicht konfigurierbaren Eigenschaften werden gegen das Ziel überprüft.
- invariants
  - : Semantiken, die unverändert bleiben, wenn benutzerdefinierte Operationen implementiert werden. Wenn Ihre Trap-Implementierung die Invarianten eines Handlers verletzt, wird ein {{jsxref("TypeError")}} ausgelöst.

### Objektinterne Methoden

[Objekte](/de/docs/Web/JavaScript/Data_structures#objects) sind Sammlungen von Eigenschaften. Die Sprache bietet jedoch keine Mechanismen, um _direkt_ auf in einem Objekt gespeicherte Daten zuzugreifen - stattdessen definiert das Objekt einige interne Methoden, die angeben, wie mit dem Objekt interagiert werden kann. Zum Beispiel, wenn Sie `obj.x` lesen, könnten Sie erwarten, dass Folgendes passiert:

- Die `x`-Eigenschaft wird in der [Prototypkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) gesucht, bis sie gefunden wird.
- Wenn `x` eine Dateneigenschaft ist, wird das Attribut `value` des Eigenschaftsbeschreibers zurückgegeben.
- Wenn `x` eine Zugriffseigenschaft ist, wird der Getter aufgerufen, und der Rückgabewert des Getters wird zurückgegeben.

Es ist nichts Besonderes an diesem Prozess in der Sprache - es liegt einfach daran, dass gewöhnliche Objekte standardmäßig eine `[[Get]]`-interne Methode haben, die mit diesem Verhalten definiert ist. Die Zugriffs-Syntax für die Eigenschaft `obj.x` ruft einfach die `[[Get]]`-Methode auf dem Objekt auf, und das Objekt verwendet seine eigene Implementierung der internen Methode, um zu bestimmen, was zurückgegeben werden soll.

Als weiteres Beispiel unterscheiden sich [Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von normalen Objekten, weil sie eine magische [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length)-Eigenschaft haben, die beim Ändern automatisch leere Plätze zuweist oder Elemente aus dem Array entfernt. Ebenso ändert das Hinzufügen von Array-Elementen automatisch die `length`-Eigenschaft. Dies liegt daran, dass Arrays eine `[[DefineOwnProperty]]`-interne Methode haben, die weiß, wie `length` aktualisiert werden soll, wenn ein ganzzahliger Index geschrieben wird, oder den Array-Inhalt aktualisieren, wenn `length` geschrieben wird. Solche Objekte, deren interne Methoden andere Implementierungen haben als gewöhnliche Objekte, werden als _exotische Objekte_ bezeichnet. `Proxy` ermöglichen Entwicklern, ihre eigenen exotischen Objekte mit voller Kapazität zu definieren.

Alle Objekte haben die folgenden internen Methoden:

| Interne Methode        | Entsprechende Trap                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------- |
| `[[GetPrototypeOf]]`   | {{jsxref("Proxy/Proxy/getPrototypeOf", "getPrototypeOf()")}}                       |
| `[[SetPrototypeOf]]`   | {{jsxref("Proxy/Proxy/setPrototypeOf", "setPrototypeOf()")}}                       |
| `[[IsExtensible]]`     | {{jsxref("Proxy/Proxy/isExtensible", "isExtensible()")}}                           |
| `[[PreventExtensions]]`| {{jsxref("Proxy/Proxy/preventExtensions", "preventExtensions()")}}                 |
| `[[GetOwnProperty]]`   | {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "getOwnPropertyDescriptor()")}}   |
| `[[DefineOwnProperty]]`| {{jsxref("Proxy/Proxy/defineProperty", "defineProperty()")}}                       |
| `[[HasProperty]]`      | {{jsxref("Proxy/Proxy/has", "has()")}}                                             |
| `[[Get]]`              | {{jsxref("Proxy/Proxy/get", "get()")}}                                             |
| `[[Set]]`              | {{jsxref("Proxy/Proxy/set", "set()")}}                                             |
| `[[Delete]]`           | {{jsxref("Proxy/Proxy/deleteProperty", "deleteProperty()")}}                       |
| `[[OwnPropertyKeys]]`  | {{jsxref("Proxy/Proxy/ownKeys", "ownKeys()")}}                                     |

Funktionsobjekte haben auch die folgenden internen Methoden:

| Interne Methode | Entsprechende Trap                                  |
| --------------- | -----------------------------------------------------|
| `[[Call]]`      | {{jsxref("Proxy/Proxy/apply", "apply()")}}            |
| `[[Construct]]` | {{jsxref("Proxy/Proxy/construct", "construct()")}}  |

Es ist wichtig zu erkennen, dass alle Interaktionen mit einem Objekt letztendlich auf den Aufruf einer dieser internen Methoden hinauslaufen, und dass sie alle über Proxys anpassbar sind. Das bedeutet, dass fast kein Verhalten (außer bestimmten kritischen Invarianten) in der Sprache garantiert ist - alles wird durch das Objekt selbst definiert. Wenn Sie [`delete obj.x`](/de/docs/Web/JavaScript/Reference/Operators/delete) ausführen, gibt es keine Garantie, dass [`"x" in obj`](/de/docs/Web/JavaScript/Reference/Operators/in) danach `false` zurückgibt - es hängt von den Implementierungen des Objekts von `[[Delete]]` und `[[HasProperty]]` ab. Ein `delete obj.x` kann Dinge in die Konsole protokollieren, einen globalen Zustand ändern oder sogar eine neue Eigenschaft statt der bestehenden löschen definieren, obwohl diese Semantiken in Ihrem eigenen Code vermieden werden sollten.

Alle internen Methoden werden von der Sprache selbst aufgerufen und sind in JavaScript-Code nicht direkt zugänglich. Der {{jsxref("Reflect")}}-Namespace bietet Methoden, die wenig mehr tun, als die internen Methoden aufzurufen, abgesehen von einigen Eingabenormalisierungen/-validierungen. Auf jeder Trap-Seite listen wir mehrere typische Situationen auf, wann die Trap aufgerufen wird, aber diese internen Methoden werden _sehr oft_ aufgerufen. Zum Beispiel lesen und schreiben Array-Methoden auf ein Array durch diese internen Methoden, sodass Methoden wie [`push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push) auch `get()`- und `set()`-Traps aufrufen würden.

Die meisten der internen Methoden sind straightforward in Bezug darauf, was sie tun. Die einzigen beiden, die möglicherweise verwirrend sein könnten, sind `[[Set]]` und `[[DefineOwnProperty]]`. Für normale Objekte ruft erstere Setter auf; letztere nicht. (Und `[[Set]]` ruft `[[DefineOwnProperty]]` intern auf, wenn es keine vorhandene Eigenschaft oder die Eigenschaft eine Dateneigenschaft ist.) Obwohl Sie wissen könnten, dass die `obj.x = 1`-Syntax `[[Set]]` verwendet, und {{jsxref("Object.defineProperty()")}} `[[DefineOwnProperty]]` verwendet, ist es nicht sofort ersichtlich, welche Semantiken andere eingebaute Methoden und Syntaxen verwenden. Zum Beispiel verwenden [Klasseneigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) die `[[DefineOwnProperty]]`-Semantik, weshalb Setter, die in der Superklasse definiert sind, nicht aufgerufen werden, wenn ein Feld auf der abgeleiteten Klasse deklariert wird.

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

In diesem einfachen Beispiel wird die Zahl `37` als Standardwert zurückgegeben, wenn der Eigenschaftsname nicht im Objekt vorhanden ist. Es wird der {{jsxref("Proxy/Proxy/get", "get()")}}-Handler verwendet.

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

In diesem Beispiel verwenden wir ein natives JavaScript-Objekt, an das unser Proxy alle auf es angewendeten Operationen weitergibt.

```js
const target = {};
const p = new Proxy(target, {});

p.a = 37; // Operation an das Ziel weitergeleitet

console.log(target.a); // 37 (Die Operation wurde korrekt weitergeleitet!)
```

Beachten Sie, dass während dieses "No-op" für einfache JavaScript-Objekte funktioniert, es nicht für native Objekte funktioniert, wie DOM-Elemente, [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)-Objekte oder alles, was interne Slots hat. Siehe [keine private Eigenschaftsweiterleitung](#keine_private_eigenschaftsweiterleitung) für weitere Informationen.

### Keine private Eigenschaftsweiterleitung

Ein Proxy ist immer noch ein weiteres Objekt mit einer anderen Identität – er ist ein _Proxy_, der zwischen dem umschlossenen Objekt und dem Außen steht. Daher hat der Proxy keinen direkten Zugriff auf die [privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) des ursprünglichen Objekts.

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
// Sieht aus wie eine No-op-Weiterleitung...
const proxy = new Proxy(aSecret, {});
console.log(proxy.secret); // TypeError: Kann das private Mitglied #secret nicht von einem Objekt lesen, dessen Klasse es nicht deklariert hat
```

Das liegt daran, dass beim Aufrufen der `get`-Trap des Proxys der `this`-Wert der `proxy` statt des ursprünglichen `secret` ist, sodass `#secret` nicht zugänglich ist. Um dies zu beheben, verwenden Sie das ursprüngliche `secret` als `this`:

```js
const proxy = new Proxy(aSecret, {
  get(target, prop, receiver) {
    // Standardmäßig sieht es aus wie Reflect.get(target, prop, receiver)
    // das einen anderen Wert von `this` hat
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

Einige native JavaScript-Objekte haben Eigenschaften, die als _[interne Slots](https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html#sec-object-internal-methods-and-internal-slots)_ bezeichnet werden und nicht aus JavaScript-Code zugänglich sind. Zum Beispiel haben [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)-Objekte einen internen Slot namens `[[MapData]]`, der die Schlüssel-Wert-Paare der Karte speichert. Daher können Sie nicht einfach einen Weiterleitungsproxy für eine Karte erstellen:

```js
const proxy = new Proxy(new Map(), {});
console.log(proxy.size); // TypeError: get size method called on incompatible Proxy
```

Sie müssen den oben dargestellten "`this`-wiederherstellenden" Proxy verwenden, um dies zu umgehen.

### Validierung

Mit einem `Proxy` können Sie leicht den übergebenen Wert für ein Objekt validieren. Dieses Beispiel verwendet den {{jsxref("Proxy/Proxy/set", "set()")}}-Handler.

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

    // Das Standardverhalten zum Speichern des Werts
    obj[prop] = value;

    // Erfolg anzeigen
    return true;
  },
};

const person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = "young"; // Löst eine Ausnahme aus
person.age = 300; // Löst eine Ausnahme aus
```

### Manipulation von DOM-Knoten

In diesem Beispiel verwenden wir `Proxy`, um ein Attribut von zwei verschiedenen Elementen umzuschalten: Wenn wir das Attribut an einem Element setzen, wird das Attribut an dem anderen automatisch entfernt.

Wir erstellen ein `view`-Objekt, das ein Proxy für ein Objekt mit einer `selected`-Eigenschaft ist. Der Proxy-Handler definiert den {{jsxref("Proxy/Proxy/set", "set()")}}-Handler.

Wenn wir ein HTML-Element zu `view.selected` zuweisen, wird das `'aria-selected'`-Attribut des Elements auf `true` gesetzt. Wenn wir dann ein anderes Element zu `view.selected` zuweisen, wird diese Element's `'aria-selected'`-Attribut auf `true` gesetzt und das vorherige Element's `'aria-selected'`-Attribut wird automatisch auf `false` gesetzt.

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

      // Das Standardverhalten zum Speichern des Werts
      obj[prop] = newval;

      // Erfolg anzeigen
      return true;
    },
  },
);

const item1 = document.getElementById("item-1");
const item2 = document.getElementById("item-2");

// item1 auswählen:
view.selected = item1;

console.log(`item1: ${item1.getAttribute("aria-selected")}`);
// item1: true

// Auswahl von item2 hebt Auswahl von item1 auf:
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
      // Eine zusätzliche Eigenschaft
      if (prop === "latestBrowser") {
        return obj.browsers[obj.browsers.length - 1];
      }

      // Das Standardverhalten, um den Wert zurückzugeben
      return obj[prop];
    },
    set(obj, prop, value) {
      // Eine zusätzliche Eigenschaft
      if (prop === "latestBrowser") {
        obj.browsers.push(value);
        return true;
      }

      // Den Wert konvertieren, wenn er kein Array ist
      if (typeof value === "string") {
        value = [value];
      }

      // Das Standardverhalten zum Speichern des Werts
      obj[prop] = value;

      // Erfolg anzeigen
      return true;
    },
  },
);

console.log(products.browsers);
//  ['Firefox', 'Chrome']

products.browsers = "Safari";
//  Sie möchten einen String übergeben (versehentlich)

console.log(products.browsers);
//  ['Safari'] <- kein Problem, der Wert ist ein Array

products.latestBrowser = "Edge";

console.log(products.browsers);
//  ['Safari', 'Edge']

console.log(products.latestBrowser);
//  'Edge'
```

### Ein vollständiges Beispiel für eine Traps-Liste

Um nun eine vollständige Beispiel-`traps`-Liste zu erstellen, werden wir zu didaktischen Zwecken versuchen, ein _nicht-natives_ Objekt zu proxify, das sich besonders gut für diese Art von Operation eignet: das `docCookies`-Globale Objekt, das von [einem einfachen Cookie-Framework](https://reference.codeproject.com/dom/document/cookie/simple_document.cookie_framework) erstellt wurde.

```js
/*
  const docCookies = ... holen Sie sich das "docCookies"-Objekt hier:
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

/* Cookies-Test */

console.log((docCookies.myCookie1 = "Erster Wert"));
console.log(docCookies.getItem("myCookie1"));

docCookies.setItem("myCookie1", "Geänderter Wert");
console.log(docCookies.myCookie1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Proxies are awesome](https://youtu.be/sClk6aB_CPk) Präsentation von Brendan Eich bei JSConf (2014)
