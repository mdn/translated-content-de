---
title: Signature (functions)
slug: Glossary/Signature/Function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine **Funktionssignatur** (oder _Typ_-Signatur, oder _Methoden_-Signatur) definiert Eingaben und Ausgaben von {{Glossary("Function", "Funktionen")}} oder {{Glossary("Method", "Methoden")}}.

Eine Signatur kann umfassen:

- {{Glossary("Parameter", "Parameter")}} und deren {{Glossary("Type", "Typen")}}
- einen Rückgabewert und Typ
- {{Glossary("Exception", "Ausnahmen")}}, die möglicherweise ausgelöst oder zurückgegeben werden
- Informationen über die Verfügbarkeit der Methode in einem {{Glossary("OOP", "objektorientierten")}} Programm (wie die Schlüsselwörter `public`, `static` oder `prototype`).

## Detaillierte Betrachtung

### Signaturen in JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine _locker typisierte_ oder _dynamische_ Sprache. Das bedeutet, dass Sie den Typ einer Variablen nicht im Voraus deklarieren müssen. Der Typ wird automatisch bestimmt, während das Programm verarbeitet wird. Eine Signatur in JavaScript kann Ihnen dennoch einige Informationen über die Methode geben:

```js
MyObject.prototype.myFunction(value);
```

- Die Methode ist auf einem {{Glossary("object", "Objekt")}} namens `MyObject` installiert.
- Die Methode ist auf dem `prototype` von `MyObject` installiert (daher ist es eine {{Glossary("Method", "Instanzmethode")}}) im Gegensatz zu einer {{Glossary("static_method", "statischen Methode")}}.
- Der Name der Methode ist `myFunction`.
- Die Methode akzeptiert einen Parameter, der `value` genannt wird und nicht weiter definiert ist.

### Signaturen in Java

In {{Glossary("Java", "Java")}} werden Signaturen verwendet, um Methoden und Klassen auf Ebene des virtuellen Maschinen-Codes zu identifizieren. Sie müssen Typen von Variablen in Ihrem Code deklarieren, um den Java-Code ausführen zu können. Java ist _strikt typisiert_ und überprüft zur Kompilierungszeit, ob die Parameter korrekt sind.

```java
public static void main(String[] args)
```

- Das Schlüsselwort `public` ist ein Zugriffsmodifikator und zeigt an, dass diese Methode von jedem Objekt aufgerufen werden kann.
- Das Schlüsselwort `static` zeigt an, dass diese Methode eine Klassenmethode ist, im Gegensatz zu einer Instanzmethode.
- Das Schlüsselwort `void` zeigt an, dass diese Methode keinen Rückgabewert hat.
- Der Name der Methode ist `main`.
- Die Methode akzeptiert einen Parameter vom Typ String Array. Dieser ist `args` genannt.

## Siehe auch

- [Java interne Typsignaturen](https://en.wikipedia.org/wiki/Type_signature#Java) auf Wikipedia
