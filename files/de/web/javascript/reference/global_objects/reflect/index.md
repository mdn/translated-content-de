---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Reflect`**-Namensraumobjekt enthält statische Methoden zum Aufrufen von abfangbaren internen Methoden von JavaScript-Objekten. Die Methoden sind die gleichen wie die der [Proxy-Handler](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Reflect` kein Konstruktor. Sie können es nicht mit dem [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden oder das `Reflect`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Reflect` sind statisch (wie das {{jsxref("Math")}}-Objekt).

Das `Reflect`-Objekt bietet eine Sammlung von statischen Funktionen, die die gleichen Namen wie die [Proxy-Handler-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) haben.

Der Hauptanwendungsfall von `Reflect` ist das Bereitstellen eines Standardweiterleitungsverhaltens in `Proxy`-Handler-Fallen. Eine [Falle](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#terminology) wird verwendet, um einen Vorgang an einem Objekt abzufangen – sie bietet eine benutzerdefinierte Implementierung für eine [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods). Die `Reflect`-API wird verwendet, um die entsprechende interne Methode aufzurufen. Zum Beispiel erstellt der untenstehende Code einen Proxy `p` mit einer [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Falle, die die interne Methode `[[Delete]]` abfängt. `Reflect.deleteProperty()` wird verwendet, um das Standardverhalten von `[[Delete]]` direkt auf `targetObject` aufzurufen. Sie können es durch [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) ersetzen, aber die Verwendung von `Reflect` erspart Ihnen das Merken der Syntax, die jeder internen Methode entspricht.

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

Die `Reflect`-Methoden ermöglichen auch eine feinere Kontrolle darüber, wie die interne Methode aufgerufen wird. Zum Beispiel ist {{jsxref("Reflect.construct()")}} der einzige Weg, um eine Ziel-Funktion mit einem bestimmten [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)-Wert zu konstruieren. Wenn Sie den [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, um eine Funktion aufzurufen, ist der `new.target`-Wert immer die Funktion selbst. Dies hat wichtige Auswirkungen beim [Subklassifizieren](/de/docs/Web/JavaScript/Reference/Operators/new.target#new.target_using_reflect.construct). Ein weiteres Beispiel ist {{jsxref("Reflect.get()")}}, das es Ihnen ermöglicht, einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) mit einem benutzerdefinierten `this`-Wert auszuführen, während [Eigenschaftsaccessor](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) immer das aktuelle Objekt als `this`-Wert verwenden.

Das Verhalten nahezu jeder `Reflect`-Methode kann mit einer anderen Syntax oder Methode realisiert werden. Einige dieser Methoden haben entsprechende statische Methoden mit demselben Namen auf {{jsxref("Object")}}, obwohl sie einige subtile Unterschiede aufweisen. Für die genauen Unterschiede siehe die Beschreibung der jeweiligen `Reflect`-Methode.

## Statische Eigenschaften

- `Reflect[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Reflect"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Reflect.apply()")}}
  - : Ruft eine `target`-Funktion mit Argumenten auf, die durch den Parameter `argumentsList` angegeben sind. Siehe auch {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - : Der [`new` Operator](/de/docs/Web/JavaScript/Reference/Operators/new) als Funktion. Entspricht dem Aufruf von `new target(...argumentsList)`. Ermöglicht zudem die Angabe eines anderen Prototyps.
- {{jsxref("Reflect.defineProperty()")}}
  - : Ähnlich wie {{jsxref("Object.defineProperty()")}}. Gibt einen Boolean zurück, der `true` ist, wenn die Eigenschaft erfolgreich definiert wurde.
- {{jsxref("Reflect.deleteProperty()")}}
  - : Der [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) als Funktion. Entspricht dem Aufruf von `delete target[propertyKey]`.
- {{jsxref("Reflect.get()")}}
  - : Gibt den Wert der Eigenschaft zurück. Funktioniert wie das Abrufen einer Eigenschaft von einem Objekt (`target[propertyKey]`) als Funktion.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Ähnlich wie {{jsxref("Object.getOwnPropertyDescriptor()")}}. Gibt einen Eigenschaftsdescriptor der gegebenen Eigenschaft zurück, wenn sie auf dem Objekt existiert, {{jsxref("undefined")}} andernfalls.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Entspricht {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : Gibt einen Boolean zurück, der anzeigt, ob das Ziel die Eigenschaft hat. Entweder als eigene oder geerbte. Funktioniert wie der [`in` Operator](/de/docs/Web/JavaScript/Reference/Operators/in) als Funktion.
- {{jsxref("Reflect.isExtensible()")}}
  - : Entspricht {{jsxref("Object.isExtensible()")}}. Gibt einen Boolean zurück, der `true` ist, wenn das Ziel erweiterbar ist.
- {{jsxref("Reflect.ownKeys()")}}
  - : Gibt ein Array der eigenen (nicht geerbten) Eigenschaftsschlüssel des Zielobjekts zurück.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Ähnlich wie {{jsxref("Object.preventExtensions()")}}. Gibt einen Boolean zurück, der `true` ist, wenn das Update erfolgreich war.
- {{jsxref("Reflect.set()")}}
  - : Eine Funktion, die Werte Eigenschaften zuweist. Gibt einen Boolean zurück, der `true` ist, wenn das Update erfolgreich war.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : Eine Funktion, die den Prototyp eines Objekts setzt. Gibt einen Boolean zurück, der `true` ist, wenn das Update erfolgreich war.

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

### Zurückgeben der eigenen Schlüssel des Objekts

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
