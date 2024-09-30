---
title: Metaprogrammierung
slug: Web/JavaScript/Guide/Meta_programming
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}

Die Objekte {{jsxref("Proxy")}} und {{jsxref("Reflect")}} ermöglichen es Ihnen, fundamentale Sprachoperationen (z.B. Eigenschaftslookup, Zuweisung, Aufzählung, Funktionsaufruf usw.) abzufangen und benutzerdefiniertes Verhalten zu definieren. Mit Hilfe dieser beiden Objekte können Sie auf der Meta-Ebene von JavaScript programmieren.

## Proxies

{{jsxref("Proxy")}}-Objekte ermöglichen es Ihnen, bestimmte Operationen abzufangen und benutzerdefiniertes Verhalten zu implementieren.

Zum Beispiel, das Abrufen einer Eigenschaft auf einem Objekt:

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

Das `Proxy`-Objekt definiert ein `target` (hier ein leeres Objekt) und ein `handler`-Objekt, in dem eine `get` _trap_ implementiert ist. Hier wird ein Objekt, das durch einen Proxy geschützt ist, nicht `undefined` zurückgeben, wenn auf undefinierte Eigenschaften zugegriffen wird, sondern stattdessen die Zahl `42`.

Weitere Beispiele finden Sie auf der {{jsxref("Proxy")}} Referenzseite.

### Terminologie

Die folgenden Begriffe werden verwendet, wenn über die Funktionalität von Proxies gesprochen wird.

- {{jsxref("Proxy/Proxy", "handler", "", 1)}}
  - : Platzhalterobjekt, das Traps enthält.
- traps
  - : Die Methoden, die den Zugriff auf Eigenschaften bereitstellen. (Dies ist dem Konzept von _traps_ in Betriebssystemen analog.)
- target
  - : Objekt, das der Proxy virtualisiert. Es wird oft als Speicherbackend für den Proxy verwendet. Invarianten (Semantiken, die unverändert bleiben) bezüglich der Nicht-Erweiterbarkeit von Objekten oder nicht-konfigurierbaren Eigenschaften werden gegen das Zielobjekt überprüft.
- invariants
  - : Semantiken, die unverändert bleiben, wenn benutzerdefinierte Operationen implementiert werden, werden als _Invarianten_ bezeichnet. Wenn Sie die Invarianten eines Handlers verletzen, wird ein {{jsxref("TypeError")}} ausgelöst.

## Handler und Traps

Die folgende Tabelle fasst die für `Proxy`-Objekte verfügbaren Traps zusammen. Siehe die [Referenzseiten](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) für detaillierte Erklärungen und Beispiele.

<table class="standard-table">
  <thead>
    <tr>
      <th>Handler / Trap</th>
      <th>Abfangoperationen</th>
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
          <dt>Eigenschatfsabfrage</dt>
          <dd><code>foo in proxy</code></dd>
          <dt>Vererbte Eigenschatfsabfrage</dt>
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
          <dt>Eigenschaftszugriff</dt>
          <dd>
            <code><var>proxy</var>[foo]</code><br /><code
              ><var>proxy</var>.bar</code
            >
          </dd>
          <dt>Vererbter Eigenschaftszugriff</dt>
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
          <dt>Eigenschaftszuweisung</dt>
          <dd>
            <code><var>proxy</var>[foo] = bar</code><br /><code
              ><var>proxy</var>.foo = bar</code
            >
          </dd>
          <dt>Vererbte Eigenschaftszuweisung</dt>
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
          <dt>Eigenschaftslöschung</dt>
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

Die Methode {{jsxref("Proxy.revocable()")}} wird verwendet, um ein widerrufbares `Proxy`-Objekt zu erstellen. Dies bedeutet, dass der Proxy über die Funktion `revoke` widerrufen und der Proxy abgeschaltet werden kann.

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

`Reflect` hilft beim Weiterleiten von Standardoperationen vom Handler zum `target`.

Mit {{jsxref("Reflect.has()")}} erhalten Sie zum Beispiel den [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) als Funktion:

```js
Reflect.has(Object, "assign"); // true
```

### Eine bessere apply() Funktion

Vor `Reflect` verwenden Sie typischerweise die Methode {{jsxref("Function.prototype.apply()")}}, um eine Funktion mit einem gegebenen `this`-Wert und `arguments`, die als Array (oder als [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellt werden, aufzurufen.

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

Mit {{jsxref("Reflect.apply")}} wird dies weniger umständlich und leichter verständlich:

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

Mit {{jsxref("Object.defineProperty")}}, das ein Objekt zurückgibt, wenn es erfolgreich ist, oder andernfalls einen {{jsxref("TypeError")}} auslöst, würden Sie einen {{jsxref("Statements/try...catch", "try...catch")}} Block verwenden, um einen etwaigen Fehler abzufangen, der bei der Definition einer Eigenschaft aufgetreten ist. Da {{jsxref("Reflect.defineProperty()")}} einen booleschen Erfolgsstatus zurückgibt, können Sie hier einfach einen {{jsxref("Statements/if...else", "if...else")}} Block verwenden:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Modules")}}
