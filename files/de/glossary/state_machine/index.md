---
title: Zustandsmaschine
slug: Glossary/State_machine
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine Zustandsmaschine ist eine mathematische Abstraktion, die zur Erstellung von Algorithmen verwendet wird. Eine Zustandsmaschine liest eine Reihe von Eingaben und wechselt basierend auf diesen Eingaben in einen anderen Zustand.

Ein Zustand ist eine Beschreibung des Status eines Systems, das darauf wartet, eine Transition auszuführen. Eine Transition ist eine Reihe von Aktionen, die ausgeführt werden, wenn eine Bedingung erfüllt ist oder ein Ereignis empfangen wird. In einem Zustandsdiagramm stellen Kreise jeden möglichen Zustand dar, und Pfeile repräsentieren Transitionen zwischen Zuständen.

Anhand des Endzustands können Sie etwas über die Reihe von Eingaben ableiten, die zu diesem Zustand geführt haben.

Es gibt zwei Arten von grundlegenden Zustandsmaschinen:

- deterministische endliche Zustandsmaschine
  - : Diese Art erlaubt nur eine mögliche Transition für jede erlaubte Eingabe. Dies ist ähnlich wie die "if"-{{Glossary("statement")}}, da `if x then doThis else doThat` nicht möglich ist. Der Computer muss _eine_ der beiden Optionen ausführen.
- nicht-deterministische endliche Zustandsmaschine
  - : Bei einem gegebenen Zustand kann eine Eingabe zu mehr als einem unterschiedlichen Zustand führen.

_Abbildung 1: Deterministische endliche Zustandsmaschine._

![Die Maschine wechselt von Zustand 1 zu Zustand 2 für Eingabe X und von Zustand 1 zu Zustand 3 für Eingabe Y](statemachine1.png)

In _Abbildung 1_ beginnt der Zustand in Zustand 1; der Zustand wechselt zu Zustand 2 bei Eingabe 'X' oder zu Zustand 3 bei Eingabe 'Y'.

_Abbildung 2: Nicht-deterministische endliche Zustandsmaschine._

![Die Maschine kann in Zustand 1 verbleiben, zu sich selbst übergehen, oder von Zustand 1 zu Zustand 2 für Eingabe X wechseln](statemachine2.png)

In _Abbildung 2_ kann bei Eingabe 'X' der Zustand bestehen bleiben oder sich zu Zustand 2 ändern.

Beachten Sie, dass jeder {{Glossary("regular expression")}} durch eine Zustandsmaschine dargestellt werden kann.

## Siehe auch

- [Finite-state machine](https://en.wikipedia.org/wiki/Finite-state_machine) auf Wikipedia
- [UML state machine](https://en.wikipedia.org/wiki/UML_state_machine) auf Wikipedia
- [Moore machine](https://en.wikipedia.org/wiki/Moore_machine) auf Wikipedia
- [Mealy machine](https://en.wikipedia.org/wiki/Mealy_machine) auf Wikipedia
