---
title: Signatur (Funktionen)
slug: Glossary/Signature/Function
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Funktionssignatur** (oder _Typsignatur_, oder _Methodensignatur_) definiert die Eingabe und Ausgabe von {{Glossary("Function", "Funktionen")}} oder {{Glossary("Method", "Methoden")}}.

Eine Signatur kann Folgendes umfassen:

- {{Glossary("Parameter", "Parameter")}} und deren {{Glossary("Type", "Typen")}}
- einen Rückgabewert und Typ
- {{Glossary("Exception", "Ausnahmen")}}, die möglicherweise ausgelöst oder zurückgegeben werden
- Informationen über die Verfügbarkeit der Methode in einem {{Glossary("OOP", "objektorientierten")}} Programm (wie die Schlüsselwörter `public`, `static` oder `prototype`).

## Im Detail

### Signaturen in JavaScript

{{Glossary("JavaScript", "JavaScript")}} ist eine _schwach typisierte_ oder _dynamische_ Sprache. Das bedeutet, dass Sie den Typ einer Variable nicht im Voraus deklarieren müssen. Der Typ wird automatisch bestimmt, während das Programm verarbeitet wird. Eine Signatur in JavaScript kann Ihnen dennoch einige Informationen über die Methode geben:

```js
MyObject.prototype.myFunction(value);
```

- Die Methode ist auf einem {{Glossary("object", "Objekt")}} namens `MyObject` installiert.
- Die Methode ist auf dem `prototype` von `MyObject` installiert (somit ist es eine {{Glossary("Method", "Instanzmethode")}}) im Gegensatz zu einer {{Glossary("static_method", "statischen Methode")}}.
- Der Name der Methode ist `myFunction`.
- Die Methode akzeptiert einen Parameter, der `value` genannt wird und nicht weiter definiert ist.

### Signaturen in Java

In {{Glossary("Java", "Java")}} werden Signaturen verwendet, um Methoden und Klassen auf der Ebene des virtuellen Maschinen-Codes zu identifizieren. Sie müssen die Typen der Variablen in Ihrem Code deklarieren, um den Java-Code ausführen zu können. Java ist _strikt typisiert_ und überprüft alle Parameter zur Kompilierungszeit, ob sie korrekt sind.

```java
public static void main(String[] args)
```

- Das Schlüsselwort `public` ist ein Zugriffsmodifikator und zeigt an, dass diese Methode von jedem Objekt aufgerufen werden kann.
- Das Schlüsselwort `static` zeigt an, dass diese Methode eine Klassenmethode ist, im Gegensatz zu einer Instanzmethode.
- Das Schlüsselwort `void` zeigt an, dass diese Methode keinen Rückgabewert hat.
- Der Name der Methode ist `main`.
- Die Methode akzeptiert einen Parameter vom Typ String Array. Er heißt `args`.

## Siehe auch

- [Java interne Typsignaturen](https://en.wikipedia.org/wiki/Type_signature#Java) auf Wikipedia
