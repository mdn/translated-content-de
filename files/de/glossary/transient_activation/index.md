---
title: Transiente Aktivierung
slug: Glossary/Transient_activation
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**Transiente Aktivierung** (oder "transiente Benutzeraktivierung") ist ein Fensterstatus, der anzeigt, dass ein Benutzer kürzlich direkt und bedeutungsvoll mit dem Fenster interagiert hat.

Der Status wird nach jeder Benutzerinteraktion aktiviert, wenn das Fenster den Fokus hat, die dazu führt, dass der Browser eines oder mehrere der folgenden Ereignisse generiert:

- Ein `mousedown`- oder `pointerdown`-Ereignis für eine Maus.
- Ein `pointerup`-Ereignis für jede andere Art von Zeiger.
- Ein `touchend`-Ereignis.
- Ein `keydown`-Ereignis, außer für die Escape- oder Browsershortcut-Tasten.

Das Fenster wird nicht durch Ereignisse aktiviert, die nicht notwendigerweise durch eine absichtliche Interaktion mit dem Fenster verursacht werden, wie etwa Mausbewegungen oder `wheel`-Ereignisse.

Die transiente Aktivierung läuft nach einer Zeitüberschreitung ab (sofern sie nicht durch weitere Interaktion erneuert wird) und kann auch nach der Nutzung einiger beschränkter Funktionen (wie z.B. [`Window.open()`](/de/docs/Web/API/Window/open)) aufgebraucht/deaktiviert werden.

Die transiente Aktivierung wird häufig als Mechanismus verwendet, um sicherzustellen, dass eine Web-API nur funktioniert, wenn sie durch Benutzerinteraktion ausgelöst wird. Zum Beispiel können Skripte nicht willkürlich ein Popup starten, das eine _transiente Aktivierung_ erfordert – es muss aus einem Event-Handler eines UI-Elements ausgelöst werden. Informationen über APIs, die eine _transiente Aktivierung_ erfordern, finden Sie unter [Funktionen, die durch Benutzeraktivierung gesperrt sind](/de/docs/Web/Security/Defenses/User_activation).

Die Eigenschaft [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) kann verwendet werden, um den transienten Aktivierungsstatus des aktuellen Fensters programmatisch zu überprüfen.

## Siehe auch

- [Vergleich zwischen transienten und dauerhaften Aktivierungen](/de/docs/Web/Security/Defenses/User_activation#comparison_between_transient_and_sticky_activation) in _Funktionen, die durch Benutzeraktivierung gesperrt sind_
- Verwandte Glossarbegriffe:
  - {{Glossary("Sticky_activation", "Dauerhafte Aktivierung")}}
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive)
- [HTML Living Standard > Transiente Aktivierung](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
