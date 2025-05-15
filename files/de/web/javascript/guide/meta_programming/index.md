---
title: Metaprogrammierung
slug: Web/JavaScript/Guide/Meta_programming
l10n:
  sourceCommit: 21e2b8f4b57964e00899bf81d9457d04e1f1009d
---

{{jsSidebar("Advanced")}}

Die Objekte {{jsxref("Proxy")}} und {{jsxref("Reflect")}} ermöglichen es Ihnen, grundlegende Sprachoperationen (z.B. Eigenschaftssuche, Zuweisung, Auflistung, Funktionsaufruf usw.) abzufangen und benutzerdefiniertes Verhalten zu definieren. Mit Hilfe dieser beiden Objekte können Sie auf der Metabene von JavaScript programmieren.

## Proxies

{{jsxref("Proxy")}}-Objekte ermöglichen es Ihnen, bestimmte Operationen abzufangen und benutzerdefinierte Verhaltensweisen zu implementieren.

Zum Beispiel das Abrufen einer Eigenschaft in einem Objekt:

```js
const handler = {
  get(target, name) {
    return name in target ? target[name] : 42;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

Das `Proxy`-Objekt definiert ein `target` (hier ein leeres Objekt) und ein `handler`-Objekt, in dem eine `get`-Fangvorrichtung (_trap_) implementiert ist. Hierbei gibt ein durch einen Proxy ersetztes Objekt nicht `undefined` zurück, wenn undefinierte Eigenschaften abgerufen werden, sondern gibt stattdessen die Zahl `42` zurück.

Zusätzliche Beispiele finden Sie auf der {{jsxref("Proxy")}}-Referenzseite.

### Terminologie

Die folgenden Begriffe werden verwendet, wenn über die Funktionalität von Proxies gesprochen wird.

- {{jsxref("Proxy/Proxy", "handler", "", 1)}}
  - : Platzhalterobjekt, das Fangvorrichtungen enthält.
- traps
  - : Die Methoden, die den Zugriff auf Eigenschaften bereitstellen. (Dies entspricht dem Konzept von _traps_ in Betriebssystemen.)
- target
  - : Objekt, das der Proxy virtualisiert. Es wird häufig als Speicher-Backend für den Proxy verwendet. Invarianten (Semantiken, die unverändert bleiben) in Bezug auf die Nicht-Erweiterbarkeit oder nicht konfigurierbare Eigenschaften von Objekten werden gegen das Zielobjekt verifiziert.
- invariants
  - : Semantiken, die unverändert bleiben, wenn benutzerdefinierte Operationen implementiert werden, werden _Invarianten_ genannt. Bei einem Verstoß gegen die Invarianten eines Handlers wird ein {{jsxref("TypeError")}} ausgelöst.

## Handler und Traps

Die folgende Tabelle fasst die verfügbaren Traps zusammen, die `Proxy`-Objekten zur Verfügung stehen. Sehen Sie sich die [Referenzseiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) für detaillierte Erklärungen und Beispiele an.

<table class="standard-table">
  <thead>
    <tr>
      <th>Handler / Trap</th>
      <th>Abfangmaßnahmen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/has", "handler.has()")}}
      </td>
      <td>
        <dl>
          <dt>Abfrage von Eigenschaften</dt>
          <dd><code>foo in proxy</code></dd>
          <dt>Abfrage geerbter Eigenschaften</dt>
          <dd>
            <code>foo in Object.create(<var>proxy</var>)</code
            ><br />{{jsxref("Reflect.has()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/get", "handler.get()")}}
      </td>
      <td>
        <dl>
          <dt>Zugriff auf Eigenschaften</dt>
          <dd>
            <code><var>proxy</var>[foo]</code><br /><code
              ><var>proxy</var>.bar</code
            >
          </dd>
          <dt>Zugriff auf geerbte Eigenschaften</dt>
          <dd>
            <!-- markdownlint-disable MD011 -->
            <code>Object.create(<var>proxy</var>)[foo]</code
            ><br />{{jsxref("Reflect.get()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/set", "handler.set()")}}
      </td>
      <td>
        <dl>
          <dt>Zuweisung von Eigenschaften</dt>
          <dd>
            <code><var>proxy</var>[foo] = bar</code><br /><code
              ><var>proxy</var>.foo = bar</code
            >
          </dd>
          <dt>Zuweisung geerbter Eigenschaften</dt>
          <dd>
            <code>Object.create(<var>proxy</var>)[foo] = bar</code
            ><br />{{jsxref("Reflect.set()")}}
          </dd>
            <!-- markdownlint-enable MD011 -->
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        <dl>
          <dt>Löschen von Eigenschaften</dt>
          <dd>
            <code>delete <var>proxy</var>[foo]</code><br /><code
              >delete <var>proxy</var>.foo</code
            ><br />{{jsxref("Reflect.deleteProperty()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} und
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
    </tr>
  </tbody>
</table>

## Widerrufbarer `Proxy`

Die {{jsxref("Proxy.revocable()")}}-Methode wird verwendet, um ein widerrufbares `Proxy`-Objekt zu erstellen. Dies bedeutet, dass der Proxy über die Funktion `revoke` widerrufen werden kann und den Proxy ausschaltet.

Danach führt jede Operation auf dem Proxy zu einem {{jsxref("TypeError")}}.

```js
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked
proxy.foo = 1; // TypeError: Cannot perform 'set' on a proxy that has been revoked
delete proxy.foo; // TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
console.log(typeof proxy); // "object", typeof doesn't trigger any trap
```

## Reflexion

{{jsxref("Reflect")}} ist ein eingebautes Objekt, das Methoden für abfangbare JavaScript-Operationen bereitstellt. Die Methoden sind die gleichen wie die des [Proxy-Handlers](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

`Reflect` ist kein Funktionsobjekt.

`Reflect` hilft beim Weiterleiten standardmäßiger Operationen vom Handler an das `target`.

Mit {{jsxref("Reflect.has()")}} erhalten Sie zum Beispiel den [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) als Funktion:

```js
Reflect.has(Object, "assign"); // true
```

### Eine bessere apply()-Funktion

Vor `Reflect` verwendeten Sie typischerweise die Methode {{jsxref("Function.prototype.apply()")}}, um eine Funktion mit einem bestimmten `this`-Wert und Argumenten, die als Array (oder ein [Array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellt werden, aufzurufen.

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

Mit {{jsxref("Reflect.apply")}} wird dies weniger umständlich und verständlicher:

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### Überprüfen, ob die Eigenschaftsdefinition erfolgreich war

Mit {{jsxref("Object.defineProperty")}}, das ein Objekt zurückgibt, wenn es erfolgreich ist, oder andernfalls einen {{jsxref("TypeError")}} auslöst, würden Sie einen {{jsxref("Statements/try...catch", "try...catch")}}-Block verwenden, um Fehler beim Definieren einer Eigenschaft abzufangen. Da {{jsxref("Reflect.defineProperty()")}} einen booleschen Erfolgsstatus zurückgibt, können Sie hier einfach einen {{jsxref("Statements/if...else", "if...else")}}-Block verwenden:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```
