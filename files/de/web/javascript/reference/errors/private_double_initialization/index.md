---
title: "TypeError: Ein Objekt zweimal zu initialisieren ist ein Fehler bei privaten Feldern/Methoden"
slug: Web/JavaScript/Reference/Errors/Private_double_initialization
l10n:
  sourceCommit: 7eb645069137bfd02559c3cf81d52f87c20599cc
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "Ein Objekt zweimal zu initialisieren ist ein Fehler bei privaten Feldern/Methoden" tritt auf, wenn ein Objekt, das über einen Klassenkonstruktor erstellt wurde, erneut durch die Klassenkonstruktion geht und die Klasse eine [private Eigenschaft](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) enthält. Dies wird normalerweise durch den Trick des [Rückgabewerts-Overrides](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object) verursacht.

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

## Was ging schief?

Bei jedem Objekt ist es ein Fehler, dasselbe private Feld oder dieselbe Methode erneut zu installieren, wenn es bereits vorhanden ist. Private Eigenschaften werden auf dem Wert von `this` installiert, wenn der Klassenkonstruktor aufgerufen wird. Dieser Fehler könnte daher auftreten, wenn der `this`-Wert eine bereits konstruierte Instanz dieser Klasse ist.

Normalerweise ist `this` in einem Konstruktor ein neu erstelltes Objekt, das keine vorbestehenden Eigenschaften hat. Es kann jedoch durch den Rückgabewert der Basisklasse überschrieben werden. Wenn die Basisklasse ein anderes Objekt zurückgibt, würde dieses Objekt das aktuelle Objekt als Wert von `this` ersetzen:

```js
class Base {
  constructor(o) {
    // Dieses Objekt wird zum this-Wert einer Unterklasse
    return o;
  }
}

class Derived extends Base {
  #x = 0;
}
```

Wenn Sie `new Derived(anyObject)` aufrufen, wobei `anyObject` keine Instanz von `Derived` ist, wird der `Derived`-Konstruktor mit `anyObject` als Wert von `this` aufgerufen, und daher das private Feld `#x` auf `anyObject` installiert. Dies ist der "Rückgabewert-Override"-Trick, der es Ihnen ermöglicht, beliebige Informationen auf nicht verwandten Objekten zu definieren. Wenn Sie jedoch `new Derived(new Derived())` aufrufen oder erneut `new Derived(anyObject)`, versucht der `Derived`-Konstruktor, das private Feld `#x` erneut auf einem Objekt zu installieren, das das private Feld `#x` bereits hat, was diesen Fehler verursacht.

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
