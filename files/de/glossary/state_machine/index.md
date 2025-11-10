---
title: Zustandsautomat
slug: Glossary/State_machine
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein Zustandsautomat ist eine mathematische Abstraktion, die zur Erstellung von Algorithmen verwendet wird. Ein Zustandsautomat liest eine Menge von Eingaben und wechselt je nach diesen Eingaben in einen anderen Zustand.

Ein Zustand ist eine Beschreibung des Status eines Systems, das auf die Ausführung eines Übergangs wartet. Ein Übergang ist eine Reihe von Aktionen, die ausgeführt werden, wenn eine Bedingung erfüllt ist oder ein Ereignis empfangen wird. In einem Zustandsdiagramm stehen Kreise für jeden möglichen Zustand, und Pfeile repräsentieren Übergänge zwischen Zuständen.

Indem Sie den Endzustand betrachten, können Sie etwas über die Reihe von Eingaben ableiten, die zu diesem Zustand geführt haben.

Es gibt zwei Arten von grundlegenden Zustandsautomaten:

- deterministischer endlicher Zustandsautomat
  - : Diese Art erlaubt nur einen möglichen Übergang für jede erlaubte Eingabe. Dies ist wie die "if" {{Glossary("statement", "Anweisung")}}, in der `if x then doThis else doThat` nicht möglich ist. Der Computer muss _eine_ der beiden Optionen ausführen.
- nicht-deterministischer endlicher Zustandsautomat
  - : Bei einem gegebenen Zustand kann eine Eingabe zu mehr als einem unterschiedlichen Zustand führen.

_Abbildung 1: Deterministischer Endlicher Zustandsautomat._

![Die Maschine wechselt von Zustand 1 zu Zustand 2 für Eingabe X und von Zustand 1 zu Zustand 3 für Eingabe Y](statemachine1.png)

In _Abbildung 1_ beginnt der Zustand in Zustand 1; der Zustand ändert sich zu Zustand 2 bei der Eingabe 'X' oder zu Zustand 3 bei der Eingabe 'Y'.

_Abbildung 2: Nicht-Deterministischer Endlicher Zustandsautomat._

![Die Maschine kann im Zustand 1 verbleiben, zu sich selbst übergehend, oder kann von Zustand 1 zu Zustand 2 für Eingabe X wechseln](statemachine2.png)

In _Abbildung 2_ kann der Zustand bei Eingabe 'X' entweder bestehen bleiben oder zu Zustand 2 wechseln.

Beachten Sie, dass jeder {{Glossary("regular_expression", "reguläre Ausdruck")}} durch einen Zustandsautomaten dargestellt werden kann.

## Siehe auch

- [Endlicher Zustandsautomat](https://en.wikipedia.org/wiki/Finite-state_machine) auf Wikipedia
- [UML-Zustandsautomat](https://en.wikipedia.org/wiki/UML_state_machine) auf Wikipedia
- [Moore-Automat](https://en.wikipedia.org/wiki/Moore_machine) auf Wikipedia
- [Mealy-Automat](https://en.wikipedia.org/wiki/Mealy_machine) auf Wikipedia
