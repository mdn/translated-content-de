---
title: "TypeError: Das Initialisieren eines Objekts zweimal ist ein Fehler mit privaten Feldern/Methoden"
slug: Web/JavaScript/Reference/Errors/Private_double_initialization
l10n:
  sourceCommit: 7eb645069137bfd02559c3cf81d52f87c20599cc
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Das Initialisieren eines Objekts zweimal ist ein Fehler mit privaten Feldern/Methoden" tritt auf, wenn ein Objekt, das über einen Klassenkonstruktor erstellt wurde, erneut den Klassenkonstruktor durchläuft und die Klasse eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) enthält. Dies wird normalerweise durch den [Rückgabewert-Override](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) Trick verursacht.

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

Für jedes Objekt gilt: Wenn es bereits ein privates Feld oder eine private Methode enthält, wäre es ein Fehler, dasselbe Feld erneut zu installieren. Private Eigenschaften werden auf dem Wert von `this` installiert, wenn der Klassenkonstruktor aufgerufen wird. Dieser Fehler kann also auftreten, wenn der `this`-Wert eine bereits konstruierte Instanz dieser Klasse ist.

Normalerweise ist `this` in einem Konstruktor ein neu erstelltes Objekt, das keine vordefinierten Eigenschaften hat. Es kann jedoch durch den Rückgabewert der Basisklasse überschrieben werden. Wenn die Basisklasse ein anderes Objekt zurückgibt, würde dieses Objekt das aktuelle Objekt als den Wert von `this` ersetzen:

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

Wenn Sie `new Derived(anyObject)` aufrufen, wobei `anyObject` keine Instanz von `Derived` ist, wird der `Derived`-Konstruktor mit `anyObject` als `this`-Wert aufgerufen und installiert das private `#x`-Feld auf `anyObject`. Dies ist der "Rückgabewert-Override"-Trick, der es Ihnen ermöglicht, beliebige Informationen auf nicht verwandten Objekten zu definieren. Wenn Sie jedoch `new Derived(new Derived())` aufrufen oder erneut `new Derived(anyObject)` aufrufen, versucht der `Derived`-Konstruktor, das private `#x`-Feld erneut auf einem Objekt zu installieren, das das private `#x`-Feld bereits hat, was zu diesem Fehler führt.

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
