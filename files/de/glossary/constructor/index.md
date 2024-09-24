---
title: Konstruktor
slug: Glossary/Constructor
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Ein **Konstruktor** gehört zu einer bestimmten Klasse von {{glossary("object","Objekten")}}, die instanziiert wird. Der Konstruktor initialisiert dieses Objekt und kann Zugang zu seinen privaten Informationen bieten. Das Konzept eines Konstruktors kann auf die meisten {{glossary("OOP","objektorientierten Programmiersprachen")}} angewendet werden. Im Wesentlichen wird ein Konstruktor in {{glossary("JavaScript")}} normalerweise bei der Erstellung einer {{glossary("class","Klasse")}} deklariert.

## Syntax

```js
// Dies ist eine generische Standard-Konstruktor-Klasse Default
function Default() {}

// Dies ist eine überladene Konstruktor-Klasse Overloaded
// mit Parameterargumenten
function Overloaded(arg1, arg2, /* …, */ argN) {}
```

Um den Konstruktor der Klasse in JavaScript aufzurufen, verwenden Sie einen `new` Operator, um eine neue {{glossary("object reference","Objektreferenz")}} einer {{glossary("variable","Variable")}} zuzuweisen.

```js
function Default() {}

// Eine neue Referenz eines Default-Objekts, das einer
// lokalen Variable defaultReference zugewiesen wird
const defaultReference = new Default();
```

## Siehe auch

- [Klassen und Konstruktoren in JavaScript](/de/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#classes_and_constructors)
- [`new` Operator in JavaScript](/de/docs/Web/JavaScript/Reference/Operators/new)
- [Konstruktor](https://en.wikipedia.org/wiki/Constructor_%28object-oriented_programming%29) auf Wikipedia
