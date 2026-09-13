---
title: Schnittstelle
slug: Glossary/Interface
l10n:
  sourceCommit: 08307dc08472de976fa0aac34bce0f775f55b272
---

Im {{Glossary("OOP", "objektorientierten Programmieren")}} beschreibt eine **Schnittstelle** die Menge von {{Glossary("property", "Eigenschaften")}} und {{Glossary("method", "Methoden")}}, die ein Objekt bereitstellt. Ein Objekt, das eine Schnittstelle implementiert, kann korrekt behandelt werden, wenn es an Funktionen oder Konstrukte übergeben wird, die zur Zusammenarbeit mit solchen Schnittstellen entworfen wurden. In der Regel wird eine Schnittstelle als _Vertrag_ behandelt: Abgesehen vom Verhalten dieser Eigenschaften und Methoden müssen Objekte, die dieselbe Schnittstelle implementieren, zur Laufzeit in keiner Weise miteinander verwandt sein.

Die JavaScript-Sprache selbst definiert einige Schnittstellen, wie [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) und [disposable](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose), die mit Sprachkonstrukten wie [spreading](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) und [`using`](/de/docs/Web/JavaScript/Reference/Statements/using) zusammenarbeiten. Aufgrund des Fehlens von Kompilierung oder statischer Typprüfung werden diese Verträge nicht durch Sprachkonstrukte verkörpert, sodass MDN sie auch als "Protokolle" bezeichnet.

In {{Glossary("TypeScript", "TypeScript")}} erstellt die [`interface`-Deklaration](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) Schnittstellen, deren Implementierung zur Kompilierungszeit erzwungen werden kann.

In der Terminologie der Webstandards (insbesondere {{Glossary("WebIDL", "WebIDL")}}) beschreibt eine Schnittstelle die Struktur von Objekten, die von Web-{{Glossary("API", "APIs")}} bereitgestellt werden. Anders als im OOP-Sinn sind Schnittstellen in WebIDL tatsächlich in Form einer Konstruktorfunktion und eines Prototyp-Objekts verkörpert. Zum Beispiel wird die `HTMLButtonElement`-Schnittstelle als der [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Konstruktor und das `HTMLButtonElement.prototype`-Objekt bereitgestellt (von dem alle Instanzen erben). Dies macht WebIDL-Schnittstellen ähnlicher dem Verhalten von JavaScript-[Klassen](/de/docs/Web/JavaScript/Reference/Classes). Eine Schnittstelle kann von anderen Schnittstellen erben und kann Mitglieder von {{Glossary("Mixin", "Mixins")}} enthalten.

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)
- {{Glossary("WebIDL", "WebIDL")}}
- {{Glossary("Mixin", "Mixin")}}
- [Informationen, die in einer WebIDL-Datei enthalten sind](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file)
- [Interface (objektorientierte Programmierung)](<https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)>) auf Wikipedia
- [WebIDL](https://webidl.spec.whatwg.org/) Spezifikation
