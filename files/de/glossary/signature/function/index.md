---
title: Signatur (functions)
slug: Glossary/Signature/Function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine **Funktionssignatur** (oder _Typ_-Signatur, oder _Methoden_-Signatur) definiert Eingaben und Ausgaben von [Funktionen](/de/docs/Glossary/Function) oder [Methoden](/de/docs/Glossary/Method).

Eine Signatur kann beinhalten:

- [Parameter](/de/docs/Glossary/Parameter) und deren [Typen](/de/docs/Glossary/Type)
- einen Rückgabewert und Typ
- [Ausnahmen](/de/docs/Glossary/Exception), die ausgelöst oder zurückgegeben werden können
- Informationen über die Verfügbarkeit der Methode in einem [objektorientierten](/de/docs/Glossary/OOP) Programm (wie die Schlüsselwörter `public`, `static` oder `prototype`).

## Im Detail

### Signaturen in JavaScript

[JavaScript](/de/docs/Glossary/JavaScript) ist eine _dynamisch typisierte_ oder _lose_ Sprache. Das bedeutet, dass Sie den Typ einer Variable nicht im Voraus deklarieren müssen. Der Typ wird automatisch bestimmt, während das Programm verarbeitet wird. Eine Signatur in JavaScript kann Ihnen trotzdem einige Informationen über die Methode geben:

```js
MyObject.prototype.myFunction(value);
```

- Die Methode ist auf einem [Objekt](/de/docs/Glossary/object) namens `MyObject` installiert.
- Die Methode ist auf dem `prototype` von `MyObject` installiert (daher handelt es sich um eine [Instanzmethode](/de/docs/Glossary/Method)) im Gegensatz zu einer [statischen Methode](/de/docs/Glossary/static_method).
- Der Name der Methode ist `myFunction`.
- Die Methode akzeptiert einen Parameter, der `value` genannt wird und nicht weiter definiert ist.

### Signaturen in Java

In [Java](/de/docs/Glossary/Java) werden Signaturen verwendet, um Methoden und Klassen auf der Ebene des virtuellen Maschinen-Codes zu identifizieren. Sie müssen die Typen der Variablen in Ihrem Code deklarieren, um den Java-Code ausführen zu können. Java ist _streng typisiert_ und prüft zur Kompilierungszeit, ob die Parameter korrekt sind.

```java
public static void main(String[] args)
```

- Das Schlüsselwort `public` ist ein Zugriffsmodifikator und gibt an, dass diese Methode von jedem Objekt aufgerufen werden kann.
- Das Schlüsselwort `static` zeigt an, dass diese Methode eine Klassenmethode ist, im Gegensatz zu einer Instanzmethode.
- Das Schlüsselwort `void` zeigt an, dass diese Methode keinen Rückgabewert hat.
- Der Name der Methode ist `main`.
- Die Methode akzeptiert einen Parameter vom Typ String-Array. Dieser wird `args` genannt.

## Siehe auch

- [Java interne Typsignaturen](https://en.wikipedia.org/wiki/Type_signature#Java) auf Wikipedia
