---
title: "TypeError: Ein Objekt zweimal zu initialisieren ist ein Fehler mit privaten Feldern/Methoden"
slug: Web/JavaScript/Reference/Errors/Private_double_initialization
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Errors")}}

Der JavaScript-Ausnahmefehler "Ein Objekt zweimal zu initialisieren ist ein Fehler mit privaten Feldern/Methoden" tritt auf, wenn ein Objekt, das über einen Klassenkonstruktor erstellt wurde, erneut den Klassenkonstruktor durchläuft und die Klasse ein [privates Element](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) enthält. Dies wird in der Regel durch den [Return-Override](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#returning_overriding_object) Trick verursacht.

## Nachricht

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

Für jedes Objekt wäre es ein Fehler, ein privates Feld oder eine Methode erneut zu installieren, wenn es bereits ein solches enthält. Private Elemente werden auf dem Wert von `this` installiert, wenn der Klassenkonstruktor aufgerufen wird. Dieser Fehler könnte also auftreten, wenn der `this`-Wert bereits eine konstruierte Instanz dieser Klasse ist.

Normalerweise ist `this` in einem Konstruktor ein neu erstelltes Objekt, das keine vorhandenen Eigenschaften hat. Es kann jedoch durch den Rückgabewert der Basisklasse überschrieben werden. Wenn die Basisklasse ein anderes Objekt zurückgibt, würde dieses Objekt das aktuelle Objekt als Wert von `this` ersetzen:

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

Wenn Sie `new Derived(anyObject)` aufrufen, wobei `anyObject` keine Instanz von `Derived` ist, wird der `Derived`-Konstruktor mit `anyObject` als `this`-Wert aufgerufen und installiert daher das private Feld `#x` auf `anyObject`. Dies ist der "Return-Override" Trick, der es Ihnen erlaubt, beliebige Informationen auf nicht verwandte Objekte zu definieren. Wenn Sie jedoch `new Derived(new Derived())` aufrufen oder `new Derived(anyObject)` erneut aufrufen, versucht der `Derived`-Konstruktor das private Feld `#x` erneut auf einem Objekt zu installieren, das bereits das private Feld `#x` hat, was zu diesem Fehler führt.

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
