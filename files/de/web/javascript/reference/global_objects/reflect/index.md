---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Reflect`** Namespace-Objekt enthält statische Methoden zum Aufrufen von abfangbaren JavaScript-Objekt-internen Methoden. Die Methoden sind dieselben wie die der [Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

## Beschreibung

Anders als die meisten globalen Objekte ist `Reflect` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Reflect`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Reflect` sind statisch (genauso wie das {{jsxref("Math")}}-Objekt).

Das `Reflect`-Objekt bietet eine Sammlung von statischen Funktionen, die die gleichen Namen wie die [Proxy-Handler-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) haben.

Der Hauptverwendungszweck von `Reflect` besteht darin, das Standard-Sichtungsverhalten in `Proxy`-Handler-Fallen bereitzustellen. Eine [Falle](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#terminology) wird verwendet, um eine Operation an einem Objekt abzufangen – sie bietet eine benutzerdefinierte Implementierung für eine [Objekt-interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods). Die `Reflect` API wird verwendet, um die entsprechende interne Methode aufzurufen. Zum Beispiel erstellt der folgende Code einen Proxy `p` mit einer [`deleteProperty`-](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)Falle, die die `[[Delete]]` interne Methode abfängt. `Reflect.deleteProperty()` wird verwendet, um das Standardverhalten von `[[Delete]]` direkt auf `targetObject` aufzurufen. Sie können es durch [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) ersetzen, aber die Verwendung von `Reflect` erspart Ihnen, sich an die Syntax zu erinnern, die jeder internen Methode entspricht.

```js
const p = new Proxy(
  {},
  {
    deleteProperty(targetObject, property) {
      // Custom functionality: log the deletion
      console.log("Deleting property:", property);

      // Execute the default introspection behavior
      return Reflect.deleteProperty(targetObject, property);
    },
  },
);
```

Die `Reflect`-Methoden ermöglichen auch eine feinere Kontrolle darüber, wie die interne Methode aufgerufen wird. Zum Beispiel ist {{jsxref("Reflect.construct()")}} der einzige Weg, eine Ziel-Funktion mit einem bestimmten [`new.target`-](/de/docs/Web/JavaScript/Reference/Operators/new.target)Wert zu konstruieren. Wenn Sie den [`new`-](/de/docs/Web/JavaScript/Reference/Operators/new)Operator verwenden, um eine Funktion aufzurufen, ist der `new.target` Wert immer die Funktion selbst. Dies hat wichtige Auswirkungen bei [Unterklassen](/de/docs/Web/JavaScript/Reference/Operators/new.target#new.target_using_reflect.construct). Ein weiteres Beispiel: {{jsxref("Reflect.get()")}} ermöglicht es Ihnen, einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) mit einem benutzerdefinierten `this`-Wert auszuführen, während [Eigenschaftendefinitoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) immer das aktuelle Objekt als `this`-Wert verwenden.

Fast das Verhalten jeder `Reflect`-Methode kann mit einer anderen Syntax oder Methode erreicht werden. Einige dieser Methoden haben entsprechende statische Methoden mit demselben Namen in {{jsxref("Object")}}, obwohl es einige subtile Unterschiede gibt. Für die genauen Unterschiede siehe die Beschreibung jeder `Reflect`-Methode.

## Statische Eigenschaften

- `Reflect[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Reflect"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Reflect.apply()")}}
  - : Ruft eine `target`-Funktion mit Argumenten wie im `argumentsList`-Parameter angegeben auf. Siehe auch {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - : Der [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) als Funktion. Entspricht dem Aufruf von `new target(...argumentsList)`. Ermöglicht auch die Angabe eines anderen Prototyps.
- {{jsxref("Reflect.defineProperty()")}}
  - : Ähnlich wie {{jsxref("Object.defineProperty()")}}. Gibt einen booleschen Wert zurück, der `true` ist, wenn die Eigenschaft erfolgreich definiert wurde.
- {{jsxref("Reflect.deleteProperty()")}}
  - : Der [`delete`-Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) als Funktion. Entspricht dem Aufruf von `delete target[propertyKey]`.
- {{jsxref("Reflect.get()")}}
  - : Gibt den Wert der Eigenschaft zurück. Funktioniert wie das Holen einer Eigenschaft von einem Objekt (`target[propertyKey]`) als Funktion.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Ähnlich wie {{jsxref("Object.getOwnPropertyDescriptor()")}}. Gibt einen Eigenschaftsbeschreiber der angegebenen Eigenschaft zurück, wenn er im Objekt existiert, andernfalls {{jsxref("undefined")}}.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Gleich wie {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Ziel die Eigenschaft hat. Entweder als eigene oder geerbte. Funktioniert wie der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) als Funktion.
- {{jsxref("Reflect.isExtensible()")}}
  - : Gleich wie {{jsxref("Object.isExtensible()")}}. Gibt einen booleschen Wert zurück, der `true` ist, wenn das Ziel erweiterbar ist.
- {{jsxref("Reflect.ownKeys()")}}
  - : Gibt ein Array der eigenen (nicht geerbten) Eigenschaftsschlüssel des Zielobjekts zurück.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Ähnlich wie {{jsxref("Object.preventExtensions()")}}. Gibt einen booleschen Wert zurück, der `true` ist, wenn das Update erfolgreich war.
- {{jsxref("Reflect.set()")}}
  - : Eine Funktion, die Werte Eigenschaften zuweist. Gibt einen booleschen Wert zurück, der `true` ist, wenn das Update erfolgreich war.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : Eine Funktion, die den Prototyp eines Objekts festlegt. Gibt einen booleschen Wert zurück, der `true` ist, wenn das Update erfolgreich war.

## Beispiele

### Erkennen, ob ein Objekt bestimmte Eigenschaften enthält

```js
const duck = {
  name: "Maurice",
  color: "white",
  greeting() {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false
```

### Rückgabe der eigenen Schlüssel des Objekts

```js
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### Hinzufügen einer neuen Eigenschaft zum Objekt

```js
Reflect.set(duck, "eyes", "black");
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
