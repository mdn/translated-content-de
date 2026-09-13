---
title: AbstractModuleSource
slug: Web/JavaScript/Reference/Global_Objects/AbstractModuleSource
l10n:
  sourceCommit: 31bad7cd99cccf47f6332b81bbff4371e2bc551f
---

Ein **_AbstractModuleSource_-Objekt** repräsentiert den kompilierten Quellcode eines Moduls, der mit [`import source`](/de/docs/Web/JavaScript/Reference/Statements/import/source) oder [`import.source()`](/de/docs/Web/JavaScript/Reference/Operators/import/source) abgerufen wurde. Es gibt keinen direkt sichtbaren `AbstractModuleSource`-Konstruktor.

## Beschreibung

Der `AbstractModuleSource`-Konstruktor (oft als `%AbstractModuleSource%` bezeichnet, um seine „Intrinsic“-Eigenschaft anzuzeigen, da er keinem Global entspricht, das einem JavaScript-Programm zugänglich gemacht wird) dient als Oberklasse aller Modulquellcode-Unterklassen und stellt eine gemeinsame Schnittstelle mit Hilfsmethoden bereit. Dieser Konstruktor wird nicht direkt verfügbar gemacht: Es gibt keine globale `AbstractModuleSource`-Eigenschaft. Er ist nur über `Object.getPrototypeOf(moduleSourceObject.constructor)` und Ähnliches zugänglich.

### AbstractModuleSource-Objekte

- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)

JavaScript-Modulquellcode-Objekte werden durch den Vorschlag [ECMAScript Module Phase Imports](https://github.com/tc39/proposal-esm-phase-imports) hinzugefügt.

## Konstruktor

Dieses Objekt kann nicht direkt instanziiert werden — der Versuch, es mit `new` zu konstruieren, löst einen {{jsxref("TypeError")}} aus.

```js
import source modSource from "./module.wasm";

new (Object.getPrototypeOf(modSource.constructor))();
// TypeError: Abstract class AbstractModuleSource not directly constructable
```

Rufen Sie stattdessen ein Modulquellcode-Objekt mit `import source`, `import.source()` oder der API eines konkreten Modultyps ab, beispielsweise `WebAssembly.Module()`. Diese Mechanismen rufen den abstrakten Konstruktor nicht auf.

## Instanzeigenschaften

Diese Eigenschaften sind auf `AbstractModuleSource.prototype` definiert und werden von allen Instanzen von `AbstractModuleSource`-Unterklassen gemeinsam genutzt.

- {{jsxref("Object/constructor", "AbstractModuleSource.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. `AbstractModuleSource.prototype.constructor` ist die verborgene `AbstractModuleSource`-Konstruktorfunktion, aber jede Modulquellcode-Unterklasse definiert auch ihre eigene `constructor`-Eigenschaft.
- `AbstractModuleSource.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der Eigenschaft [`AbstractModuleSource.prototype[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) ist ein Getter, der einen String basierend auf der Identität des Konstruktors zurückgibt, beispielsweise `"WebAssembly.Module"` oder `"ModuleSource"`. Er gibt `undefined` zurück, wenn der `this`-Wert keine Instanz einer der Modulquellcode-Unterklassen ist. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebAssembly.Module`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module)
- {{jsxref("Operators/import/source", "import.source()")}}
- {{jsxref("Statements/import/source", "import source")}}
