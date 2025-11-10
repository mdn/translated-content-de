---
title: Abstraktion
slug: Glossary/Abstraction
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Abstraktion** in der {{Glossary("computer_programming", "Computerprogrammierung")}} ist eine Methode, um Komplexität zu reduzieren und ein effizientes Design und eine effiziente Implementierung in komplexen Softwaresystemen zu ermöglichen. Sie verbirgt die technische Komplexität von Systemen hinter einfacheren {{Glossary("API", "APIs")}}.

## Vorteile der Datenabstraktion

- Hilft dem Benutzer, kein Low-Level-Code schreiben zu müssen.
- Vermeidet Code-Duplikation und erhöht die Wiederverwendbarkeit.
- Ermöglicht es, die interne Implementierung einer Klasse unabhängig zu ändern, ohne den Benutzer zu beeinflussen.
- Hilft, die Sicherheit einer Anwendung oder eines Programms zu erhöhen, da dem Benutzer nur wichtige Details bereitgestellt werden.

## Beispiel

```js
class ImplementAbstraction {
  // method to set values of internal members
  set(x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log(`a = ${this.a}`);
    console.log(`b = ${this.b}`);
  }
}

const obj = new ImplementAbstraction();
obj.set(10, 20);
obj.display();
// a = 10
// b = 20
```

## Siehe auch

- [Abstraktion](<https://en.wikipedia.org/wiki/Abstraction_(computer_science)>) auf Wikipedia
