---
title: "TypeError: Es ist ein Fehler, ein Objekt mit privaten Feldern/Methoden zweimal zu initialisieren"
slug: Web/JavaScript/Reference/Errors/Private_double_initialization
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Fehler "Initializing an object twice is an error with private fields/methods" tritt auf, wenn ein Objekt, das über einen Klassenkonstruktor erstellt wurde, erneut den Klassenkonstruktionsprozess durchläuft und die Klasse ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) enthält. Dies wird normalerweise durch den Trick zur [Rückgabemodifikation](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#returning_overriding_object) verursacht.

## Meldung

```plain
TypeError: Cannot initialize #x twice on the same object (V8-based)
TypeError: Initializing an object twice is an error with private fields (Firefox)
TypeError: Cannot redefine existing private field (evaluating 'super(o)') (Safari)

TypeError: Cannot initialize private methods of class X twice on the same object (V8-based)
TypeError: Initializing an object twice is an error with private methods (Firefox)
TypeError: Cannot install same private methods on object more than once (evaluating 'super(o)') (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Bei jedem Objekt wäre es ein Fehler, ein privates Feld oder eine Methode zu installieren, wenn es diese bereits enthält. Private Elemente werden auf den Wert von `this` installiert, wenn der Klassenkonstruktor aufgerufen wird. Dieser Fehler kann daher auftreten, wenn der `this` Wert bereits eine fertig konstruierte Instanz dieser Klasse ist.

Normalerweise ist `this` in einem Konstruktor ein neu erstelltes Objekt, das keine vorhandenen Eigenschaften hat. Es kann jedoch durch den Rückgabewert der Basisklasse überschrieben werden. Wenn die Basisklasse ein anderes Objekt zurückgibt, würde dieses Objekt das aktuelle Objekt als den Wert von `this` ersetzen:

```js
class Base {
  constructor(o) {
    // This object will become the this value of any subclass
    return o;
  }
}

class Derived extends Base {
  #x = 0;
}
```

Wenn Sie `new Derived(anyObject)` aufrufen, wobei `anyObject` keine Instanz von `Derived` ist, wird der `Derived`-Konstruktor mit `anyObject` als `this`-Wert aufgerufen und das private Feld `#x` wird auf `anyObject` installiert. Dies ist der Trick der "Rückgabemodifikation", der es ermöglicht, beliebige Informationen auf nicht verwandten Objekten zu definieren. Wird jedoch `new Derived(new Derived())` oder erneut `new Derived(anyObject)` aufgerufen, versucht der `Derived`-Konstruktor, das private Feld `#x` erneut zu installieren, diesmal auf einem Objekt, das das private Feld `#x` bereits besitzt, wodurch dieser Fehler verursacht wird.

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
