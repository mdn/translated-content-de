---
title: "TypeError: Initialisierung eines Objekts zweimal ist ein Fehler bei privaten Feldern/Methoden"
slug: Web/JavaScript/Reference/Errors/Private_double_initialization
l10n:
  sourceCommit: 7eb645069137bfd02559c3cf81d52f87c20599cc
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Initializing an object twice is an error with private fields/methods" tritt auf, wenn ein Objekt, das über einen Klassenkonstruktor erstellt wurde, erneut den Klassenerstellungsprozess durchläuft und die Klasse eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) enthält. Dies wird normalerweise durch den [Return-Override-Trick](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) verursacht.

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

Bei jedem Objekt, wenn es bereits ein privates Feld oder eine Methode enthält, wäre es ein Fehler, dasselbe Feld erneut zu installieren. Private Eigenschaften werden auf den Wert von `this` installiert, wenn der Klassenkonstruktor aufgerufen wird. Dieser Fehler kann also auftreten, wenn der `this`-Wert eine bereits konstruierte Instanz dieser Klasse ist.

In der Regel ist `this` in einem Konstruktor ein neu erstelltes Objekt, das keine vorhandenen Eigenschaften hat. Es kann jedoch durch den Rückgabewert der Basisklasse überschrieben werden. Wenn die Basisklasse ein anderes Objekt zurückgibt, würde dieses Objekt das aktuelle Objekt als Wert von `this` ersetzen:

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

Wenn Sie `new Derived(anyObject)` aufrufen, wobei `anyObject` keine Instanz von `Derived` ist, wird der `Derived`-Konstruktor mit `anyObject` als `this`-Wert aufgerufen und installiert daher das private Feld `#x` auf `anyObject`. Dies ist der "Return-Override"-Trick, der es Ihnen ermöglicht, beliebige Informationen auf nicht verwandten Objekten zu definieren. Wenn Sie jedoch `new Derived(new Derived())` aufrufen oder `new Derived(anyObject)` erneut aufrufen, versucht der `Derived`-Konstruktor, das private Feld `#x` erneut auf einem Objekt zu installieren, das bereits das private Feld `#x` hat, was diesen Fehler verursacht.

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
