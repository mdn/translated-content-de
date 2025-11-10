---
title: FinalizationRegistry.prototype.unregister()
short-title: unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`unregister()`** Methode von {{jsxref("FinalizationRegistry")}} Instanzen hebt die Registrierung eines Zielwertes aus diesem `FinalizationRegistry` auf.

## Syntax

```js-nolint
unregister(unregisterToken)
```

### Parameter

- `unregisterToken`
  - : Das Token, das mit der {{jsxref("FinalizationRegistry/register", "register()")}} Methode beim Registrieren des Zielwertes verwendet wurde. Mehrere Zellen, die mit demselben `unregisterToken` registriert wurden, werden zusammen abgemeldet.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn mindestens eine Zelle abgemeldet wurde, und `false`, wenn keine Zelle abgemeldet wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `unregisterToken` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beschreibung

Wenn ein Zielwert freigegeben wurde, ist er nicht mehr im Registry registriert.
Es ist nicht notwendig, `unregister` in Ihrem Bereinigungs-Callback aufzurufen. Rufen Sie `unregister` nur auf, wenn Sie kein Bereinigungs-Callback erhalten haben und auch keines mehr benötigen.

## Beispiele

### Verwendung von unregister

Dieses Beispiel zeigt die Registrierung eines Zielobjekts, wobei dieses gleiche Objekt als `unregisterToken` verwendet wird, und dann später die Abmeldung über `unregister`:

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

Dieses Beispiel zeigt die Registrierung eines Zielobjekts mit einem anderen Objekt als `unregisterToken`:

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
