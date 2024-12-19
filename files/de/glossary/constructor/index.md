---
title: Konstruktor
slug: Glossary/Constructor
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Ein **Konstruktor** gehört zu einem bestimmten {{Glossary("object", "Objekt")}}, das instanziiert wird. Der Konstruktor initialisiert dieses Objekt und kann Zugriff auf seine privaten Informationen bieten. Das Konzept eines Konstruktors kann auf die meisten {{Glossary("OOP", "objektorientierten Programmier")}}-sprachen angewendet werden. Im Wesentlichen wird ein Konstruktor in {{Glossary("JavaScript", "JavaScript")}} gewöhnlich bei der Instanz einer {{Glossary("class", "Klasse")}} deklariert.

## Syntax

```js
// This is a generic default constructor class Default
function Default() {}

// This is an overloaded constructor class Overloaded
// with parameter arguments
function Overloaded(arg1, arg2, /* …, */ argN) {}
```

Um den Konstruktor der Klasse in JavaScript aufzurufen, verwenden Sie einen `new` Operator, um eine neue {{Glossary("object_reference", "Objektreferenz")}} einer {{Glossary("variable", "Variablen")}} zuzuweisen.

```js
function Default() {}

// A new reference of a Default object assigned to a
// local variable defaultReference
const defaultReference = new Default();
```

## Siehe auch

- [Klassen und Konstruktoren in JavaScript](/de/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#classes_and_constructors)
- [`new` Operator in JavaScript](/de/docs/Web/JavaScript/Reference/Operators/new)
- [Konstruktor](https://en.wikipedia.org/wiki/Constructor_%28object-oriented_programming%29) auf Wikipedia
