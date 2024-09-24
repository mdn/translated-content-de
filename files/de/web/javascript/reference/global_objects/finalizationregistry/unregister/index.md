---
title: FinalizationRegistry.prototype.unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`unregister()`**-Methode von {{jsxref("FinalizationRegistry")}}-Instanzen hebt die Registrierung eines Zielwertes in diesem `FinalizationRegistry` auf.

## Syntax

```js-nolint
unregister(unregisterToken)
```

### Parameter

- `unregisterToken`
  - : Das Token, das mit der {{jsxref("FinalizationRegistry/register", "register()")}}-Methode beim Registrieren des Zielwertes verwendet wurde. Mehrere Zellen, die mit demselben `unregisterToken` registriert sind, werden zusammen abgemeldet.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn mindestens eine Zelle abgemeldet wurde, und `false`, wenn keine Zelle abgemeldet wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `unregisterToken` kein Objekt oder ein [nicht registriertes Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry) ist.

## Beschreibung

Wenn ein Zielwert zurückgewonnen wurde, ist er nicht mehr im Registry registriert.
Es ist nicht erforderlich, `unregister` in Ihrem Bereinigungs-Callback aufzurufen. Rufen Sie `unregister` nur auf, wenn Sie kein Bereinigungs-Callback erhalten haben und auch keins mehr benötigen.

## Beispiele

### Verwendung von unregister

Dieses Beispiel zeigt, wie ein Zielobjekt registriert wird, indem dasselbe Objekt als Unregister-Token verwendet wird und später über `unregister` abgemeldet wird:

```js
class Thingy {
  static #cleanup = (label) => {
    //               ^^^^^−−−−− gehaltene Wert
    console.error(
      `Die "release"-Methode wurde nie für das Objekt mit der Bezeichnung "${label}" aufgerufen`,
    );
  };
  #registry = new FinalizationRegistry(Thingy.#cleanup);

  /**
   * Konstruiert eine `Thingy`-Instanz.
   * Achten Sie darauf, `release` aufzurufen, wenn Sie damit fertig sind.
   *
   * @param label Eine Bezeichnung für das `Thingy`.
   */
  constructor(label) {
    //                            vvvvv−−−−− gehaltene Wert
    this.#registry.register(this, label, this);
    //          target −−−−−^^^^         ^^^^−−−−− unregister token
  }

  /**
   * Gibt die von dieser `Thingy`-Instanz gehaltenen Ressourcen frei.
   */
  release() {
    this.#registry.unregister(this);
    //                        ^^^^−−−−− unregister token
  }
}
```

Dieses Beispiel zeigt, wie ein Zielobjekt registriert wird, indem ein anderes Objekt als Unregister-Token verwendet wird:

```js
class Thingy {
  static #cleanup = (file) => {
    //               ^^^^−−−−− gehaltene Wert
    console.error(
      `Die "release"-Methode wurde nie für das "Thingy" für die Datei "${file.name}" aufgerufen`,
    );
  };
  #registry = new FinalizationRegistry(Thingy.#cleanup);
  #file;

  /**
   * Konstruiert eine `Thingy`-Instanz für die angegebene Datei.
   * Achten Sie darauf, `release` aufzurufen, wenn Sie damit fertig sind.
   *
   * @param filename Der Name der Datei.
   */
  constructor(filename) {
    this.#file = File.open(filename);
    //                            vvvvv−−−−− gehaltene Wert
    this.#registry.register(this, label, this.#file);
    //          target −−−−−^^^^         ^^^^^^^^^^−−−−− unregister token
  }

  /**
   * Gibt die von dieser `Thingy`-Instanz gehaltenen Ressourcen frei.
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
