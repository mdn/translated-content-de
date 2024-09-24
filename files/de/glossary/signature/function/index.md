---
title: Signatur (Funktionen)
slug: Glossary/Signature/Function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine **Funktionssignatur** (oder _Typsignatur_, oder _Methodensignatur_) definiert die Eingaben und Ausgaben von {{Glossary("Function", "Funktionen")}} oder {{Glossary("Method", "Methoden")}}.

Eine Signatur kann umfassen:

- {{Glossary("Parameter", "Parameter")}} und deren {{Glossary("Type", "Typen")}}
- einen Rückgabewert und dessen Typ
- {{Glossary("Exception", "Ausnahmen")}}, die ausgelöst oder zurückgegeben werden könnten
- Informationen über die Verfügbarkeit der Methode in einem {{Glossary("OOP", "objektorientierten")}} Programm (wie die Schlüsselwörter `public`, `static` oder `prototype`).

## Im Detail

### Signaturen in JavaScript

{{Glossary("JavaScript")}} ist eine _lose typisierte_ oder _dynamische_ Sprache. Das bedeutet, dass Sie den Typ einer Variablen nicht im Voraus deklarieren müssen. Der Typ wird automatisch bestimmt, während das Programm verarbeitet wird. Eine Signatur in JavaScript kann Ihnen dennoch einige Informationen über die Methode geben:

```js
MyObject.prototype.myFunction(value);
```

- Die Methode ist auf einem {{Glossary("object", "Objekt")}} namens `MyObject` installiert.
- Die Methode ist auf dem `prototype` von `MyObject` installiert (daher ist sie eine {{Glossary("Method", "Instanzmethode")}}) im Gegensatz zu einer {{Glossary("static method", "statischen Methode")}}.
- Der Name der Methode ist `myFunction`.
- Die Methode akzeptiert einen Parameter, der `value` genannt wird und nicht weiter definiert ist.

### Signaturen in Java

In {{Glossary("Java")}} werden Signaturen verwendet, um Methoden und Klassen auf der Ebene des virtuellen Maschinen-Codes zu identifizieren. Sie müssen die Typen der Variablen in Ihrem Code deklarieren, um den Java-Code ausführen zu können. Java ist _streng typisiert_ und überprüft die Parameter zur Kompilierungszeit, ob sie korrekt sind.

```java
public static void main(String[] args)
```

- Das Schlüsselwort `public` ist ein Zugriffsmodifikator und zeigt an, dass diese Methode von jedem Objekt aufgerufen werden kann.
- Das Schlüsselwort `static` zeigt an, dass diese Methode eine Klassenmethode ist, im Gegensatz zu einer Instanzmethode.
- Das Schlüsselwort `void` zeigt an, dass diese Methode keinen Rückgabewert hat.
- Der Name der Methode ist `main`.
- Die Methode akzeptiert einen Parameter vom Typ String Array. Dieser ist als `args` benannt.

## Siehe auch

- [Java interne Typsignaturen](https://en.wikipedia.org/wiki/Type_signature#Java) auf Wikipedia
