---
title: Abstraktion
slug: Glossary/Abstraction
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**Abstraktion** in der [Computerprogrammierung](/de/docs/Glossary/computer_programming) ist eine Methode zur Reduzierung von Komplexität und ermöglicht ein effizientes Design sowie die Implementierung in komplexen Softwaresystemen. Sie verbirgt die technische Komplexität von Systemen hinter einfacheren [APIs](/de/docs/Glossary/API).

## Vorteile der Datenabstraktion

- Hilft dem Benutzer, das Schreiben von Low-Level-Code zu vermeiden.
- Vermeidet Code-Duplizierung und erhöht die Wiederverwendbarkeit.
- Ermöglicht das Ändern der internen Implementierung einer Klasse unabhängig, ohne den Benutzer zu beeinflussen.
- Trägt zur Erhöhung der Sicherheit einer Anwendung oder eines Programms bei, da nur wichtige Details dem Benutzer bereitgestellt werden.

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
