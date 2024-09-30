---
title: Abstraktion
slug: Glossary/Abstraction
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**Abstraktion** in der [Programmierung](/de/docs/Glossary/computer_programming) ist eine Methode, um Komplexität zu reduzieren und effizientes Design sowie Implementierung in komplexen Softwaresystemen zu ermöglichen. Sie verbirgt die technische Komplexität von Systemen hinter einfachereren [APIs](/de/docs/Glossary/API).

## Vorteile der Datenabstraktion

- Erlaubt dem Benutzer, auf das Schreiben von niedrigstufigem Code zu verzichten.
- Vermeidet Code-Duplikation und erhöht die Wiederverwendbarkeit.
- Ermöglicht es, die interne Implementierung einer Klasse unabhängig zu ändern, ohne den Benutzer zu beeinflussen.
- Hilft, die Sicherheit einer Anwendung oder eines Programms zu erhöhen, da dem Benutzer nur wichtige Details zur Verfügung gestellt werden.

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
