---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Das **`Reflect`**-Namensraumobjekt enthält statische Methoden, um abfangbare interne Methoden von JavaScript-Objekten aufzurufen. Die Methoden sind dieselben wie die von [Proxy-Handlern](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy).

## Beschreibung

Im Gegensatz zu den meisten globalen Objekten ist `Reflect` kein Konstruktor. Sie können es weder mit dem [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden noch das `Reflect`-Objekt als Funktion aufrufen. Alle Eigenschaften und Methoden von `Reflect` sind statisch (genau wie das {{jsxref("Math")}}-Objekt).

Das `Reflect`-Objekt bietet eine Sammlung von statischen Funktionen, die dieselben Namen wie die [Proxy-Handler-Methoden](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy) haben.

Der Hauptanwendungsfall von `Reflect` ist es, Standardweiterleitungsverhalten in `Proxy`-Handler-Fallen bereitzustellen. Eine [Falle](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#terminology) wird verwendet, um einen Vorgang auf einem Objekt abzufangen — sie bietet eine benutzerdefinierte Implementierung für eine [interne Methoden des Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods). Die `Reflect`-API wird verwendet, um die entsprechende interne Methode aufzurufen. Zum Beispiel erstellt der untenstehende Code einen Proxy `p` mit einer [`deleteProperty`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)-Falle, die die `[[Delete]]`-interne Methode abfängt. `Reflect.deleteProperty()` wird verwendet, um das Standard-`[[Delete]]`-Verhalten direkt auf `targetObject` aufzurufen. Sie können es mit [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) ersetzen, aber die Verwendung von `Reflect` erspart Ihnen, sich die Syntax zu merken, die jeder internen Methode entspricht.

```js
const p = new Proxy(
  {},
  {
    deleteProperty(targetObject, property) {
      // Benutzerdefinierte Funktionalität: Löschen protokollieren
      console.log("Deleting property:", property);

      // Standardintrospektionsverhalten ausführen
      return Reflect.deleteProperty(targetObject, property);
    },
  },
);
```

Die `Reflect`-Methoden erlauben auch eine feinere Kontrolle darüber, wie die interne Methode aufgerufen wird. Zum Beispiel ist {{jsxref("Reflect.construct()")}} der einzige Weg, um eine Ziel-Funktion mit einem bestimmten [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)-Wert zu konstruieren. Wenn Sie den [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) verwenden, um eine Funktion aufzurufen, ist der `new.target`-Wert immer die Funktion selbst. Dies hat wichtige Auswirkungen auf das [Subklassing](/de/docs/Web/JavaScript/Reference/Operators/new.target#new.target_using_reflect.construct). Ein weiteres Beispiel ist {{jsxref("Reflect.get()")}}, das es Ihnen erlaubt, einen [Getter](/de/docs/Web/JavaScript/Reference/Functions/get) mit einem benutzerdefinierten `this`-Wert auszuführen, während [Property-Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) immer das aktuelle Objekt als `this`-Wert verwenden.

Fast jedes Verhalten der `Reflect`-Methoden kann mit einer anderen Syntax oder Methode durchgeführt werden. Einige dieser Methoden haben entsprechende statische Methoden mit demselben Namen auf {{jsxref("Object")}}, obwohl sie einige subtile Unterschiede aufweisen. Für die genauen Unterschiede siehe bitte die Beschreibung jeder `Reflect`-Methode.

## Statische Eigenschaften

- `Reflect[Symbol.toStringTag]`
  - : Der Initialwert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Reflect"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Statische Methoden

- {{jsxref("Reflect.apply()")}}
  - : Ruft eine `target`-Funktion mit Argumenten auf, wie sie durch den `argumentsList`-Parameter angegeben sind. Siehe auch {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - : Der [`new`-Operator](/de/docs/Web/JavaScript/Reference/Operators/new) als Funktion. Äquivalent zu `new target(...argumentsList)` aufzurufen. Bietet auch die Option, einen anderen Prototyp anzugeben.
- {{jsxref("Reflect.defineProperty()")}}
  - : Ähnlich wie {{jsxref("Object.defineProperty()")}}. Gibt einen Wahrheitswert `true` zurück, wenn die Eigenschaft erfolgreich definiert wurde.
- {{jsxref("Reflect.deleteProperty()")}}
  - : Der [`delete`-Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) als Funktion. Äquivalent zu `delete target[propertyKey]` aufzurufen.
- {{jsxref("Reflect.get()")}}
  - : Gibt den Wert der Eigenschaft zurück. Funktioniert wie das Abrufen einer Eigenschaft von einem Objekt (`target[propertyKey]`) als Funktion.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Ähnlich wie {{jsxref("Object.getOwnPropertyDescriptor()")}}. Gibt einen Eigenschaften-Deskriptor der angegebenen Eigenschaft zurück, wenn sie auf dem Objekt existiert, {{jsxref("undefined")}} andernfalls.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Entspricht {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Ziel die Eigenschaft besitzt. Entweder als eigene oder geerbte. Funktioniert wie der [`in`-Operator](/de/docs/Web/JavaScript/Reference/Operators/in) als Funktion.
- {{jsxref("Reflect.isExtensible()")}}
  - : Entspricht {{jsxref("Object.isExtensible()")}}. Gibt einen Wahrheitswert `true` zurück, wenn das Ziel erweiterbar ist.
- {{jsxref("Reflect.ownKeys()")}}
  - : Gibt ein Array der eigenen (nicht geerbten) Eigenschaftsschlüssel des Zielobjekts zurück.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Ähnlich wie {{jsxref("Object.preventExtensions()")}}. Gibt einen Wahrheitswert `true` zurück, wenn das Update erfolgreich war.
- {{jsxref("Reflect.set()")}}
  - : Eine Funktion, die Werte zu Eigenschaften zuweist. Gibt einen Wahrheitswert `true` zurück, wenn das Update erfolgreich war.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : Eine Funktion, die den Prototyp eines Objekts setzt. Gibt einen Wahrheitswert `true` zurück, wenn das Update erfolgreich war.

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
// gibt "true" zurück, wenn erfolgreich
// "duck" enthält jetzt die Eigenschaft "eyes: 'black'"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
