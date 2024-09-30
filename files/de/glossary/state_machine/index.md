---
title: State machine
slug: Glossary/State_machine
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine Zustandsmaschine ist eine mathematische Abstraktion, die zur Gestaltung von Algorithmen verwendet wird. Eine Zustandsmaschine liest eine Reihe von Eingaben und wechselt basierend auf diesen Eingaben zu einem anderen Zustand.

Ein Zustand ist eine Beschreibung des Status eines Systems, das darauf wartet, eine Transition auszuführen. Eine Transition ist eine Reihe von Aktionen, die ausgeführt werden, wenn eine Bedingung erfüllt ist oder ein Ereignis empfangen wird. In einem Zustandsdiagramm repräsentieren Kreise jeden möglichen Zustand und Pfeile die Übergänge zwischen den Zuständen.

Anhand des Endzustands kann man etwas über die Reihe von Eingaben, die zu diesem Zustand geführt haben, erkennen.

Es gibt zwei Arten von grundlegenden Zustandsmaschinen:

- deterministische endliche Zustandsmaschine
  - : Diese Art erlaubt nur eine mögliche Transition für jede erlaubte Eingabe. Dies ähnelt der "if" [Anweisung](/de/docs/Glossary/statement), in der `if x then doThis else doThat` nicht möglich ist. Der Computer muss _eine_ der beiden Optionen ausführen.
- nicht-deterministische endliche Zustandsmaschine
  - : Bei einem gegebenen Zustand kann eine Eingabe zu mehr als einem unterschiedlichen Zustand führen.

_Abbildung 1: Deterministische Endliche Zustandsmaschine._

![Die Maschine wechselt von Zustand 1 zu Zustand 2 für Eingabe X und von Zustand 1 zu Zustand 3 für Eingabe Y](statemachine1.png)

In _Abbildung 1_ beginnt der Zustand in Zustand 1; der Zustand ändert sich zu Zustand 2 bei gegebener Eingabe 'X', oder zu Zustand 3 bei Eingabe 'Y'.

_Abbildung 2: Nicht-Deterministische Endliche Zustandsmaschine._

![Die Maschine kann in Zustand 1 bleiben und zu sich selbst übergehen oder von Zustand 1 zu Zustand 2 für Eingabe X wechseln](statemachine2.png)

In _Abbildung 2_ kann bei gegebener Eingabe 'X' der Zustand bestehen bleiben oder sich zu Zustand 2 ändern.

Beachten Sie, dass jeder [reguläre Ausdruck](/de/docs/Glossary/regular_expression) durch eine Zustandsmaschine dargestellt werden kann.

## Siehe auch

- [Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) auf Wikipedia
- [UML state machine](https://en.wikipedia.org/wiki/UML_state_machine) auf Wikipedia
- [Moore machine](https://en.wikipedia.org/wiki/Moore_machine) auf Wikipedia
- [Mealy machine](https://en.wikipedia.org/wiki/Mealy_machine) auf Wikipedia
