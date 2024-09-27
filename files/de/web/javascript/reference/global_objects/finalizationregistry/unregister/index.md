---
title: FinalizationRegistry.prototype.unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`unregister()`**-Methode von {{jsxref("FinalizationRegistry")}}-Instanzen entfernt einen Zielwert aus diesem `FinalizationRegistry`.

## Syntax

```js-nolint
unregister(unregisterToken)
```

### Parameter

- `unregisterToken`
  - : Der Token, der mit der Methode {{jsxref("FinalizationRegistry/register", "register()")}} verwendet wurde, um den Zielwert zu registrieren. Mehrere Zellen, die mit demselben `unregisterToken` registriert sind, werden zusammen entfernt.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn mindestens eine Zelle entfernt wurde, und `false`, wenn keine Zelle entfernt wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `unregisterToken` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beschreibung

Wenn ein Zielwert zurückgewonnen wurde, ist er nicht mehr im Registry registriert. Es ist nicht nötig, `unregister` in Ihrem Bereinigungs-Callback aufzurufen. Rufen Sie `unregister` nur dann auf, wenn Sie kein Bereinigungs-Callback erhalten haben und auch keines mehr benötigen.

## Beispiele

### Verwendung von unregister

Dieses Beispiel zeigt, wie ein Zielobjekt registriert wird, indem dasselbe Objekt als Token verwendet wird und es später über `unregister` entfernt wird:

```js
class Thingy {
  static #cleanup = (label) => {
    //               ^^^^^−−−−− held value
    console.error(
      `The "release" method was never called for the object with the label "${label}"`,
    );
  };
  #registry = new FinalizationRegistry(Thingy.#cleanup);

  /**
   * Constructs a `Thingy` instance.
   * Be sure to call `release` when you're done with it.
   *
   * @param label A label for the `Thingy`.
   */
  constructor(label) {
    //                            vvvvv−−−−− held value
    this.#registry.register(this, label, this);
    //          target −−−−−^^^^         ^^^^−−−−− unregister token
  }

  /**
   * Releases resources held by this `Thingy` instance.
   */
  release() {
    this.#registry.unregister(this);
    //                        ^^^^−−−−− unregister token
  }
}
```

Dieses Beispiel zeigt die Registrierung eines Zielobjekts mit einem anderen Objekt als Token für die Deregistrierung:

```js
class Thingy {
  static #cleanup = (file) => {
    //               ^^^^−−−−− held value
    console.error(
      `The "release" method was never called for the "Thingy" for the file "${file.name}"`,
    );
  };
  #registry = new FinalizationRegistry(Thingy.#cleanup);
  #file;

  /**
   * Constructs a `Thingy` instance for the given file.
   * Be sure to call `release` when you're done with it.
   *
   * @param filename The name of the file.
   */
  constructor(filename) {
    this.#file = File.open(filename);
    //                            vvvvv−−−−− held value
    this.#registry.register(this, label, this.#file);
    //          target −−−−−^^^^         ^^^^^^^^^^−−−−− unregister token
  }

  /**
   * Releases resources held by this `Thingy` instance.
   */
  release() {
    if (this.#file) {
      this.#registry.unregister(this.#file);
      //                        ^^^^^^^^^^−−−−− unregister token
      File.close(this.#file);
      this.#file = null;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("FinalizationRegistry")}}
