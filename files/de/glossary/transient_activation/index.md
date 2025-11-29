---
title: Transiente Aktivierung
slug: Glossary/Transient_activation
l10n:
  sourceCommit: 2baf3fbe98ef76049f9eb78700ab5a7d71cea05b
---

**Transiente Aktivierung** (oder "transient user activation") ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich direkt und bedeutungsvoll mit dem Fenster interagiert hat.

Der Zustand wird nach jeder Benutzerinteraktion aktiviert, wenn das Fenster den Fokus hat, was dazu führt, dass der Browser eines oder mehrere der folgenden Ereignisse generiert:

- Ein `mousedown` oder `pointerdown` Ereignis für eine Maus.
- Ein `pointerup` Ereignis für jede andere Art von Zeiger.
- Ein `touchend` Ereignis.
- Ein `keydown` Ereignis, mit Ausnahme der Escape- oder Browser-Shortcut-Tasten.

Das Fenster wird nicht durch Ereignisse Benutzer-aktiviert, die nicht unbedingt durch eine absichtliche Interaktion mit dem Fenster verursacht werden, wie Mausbewegungsereignisse oder `wheel` Ereignisse.

Die transiente Aktivierung läuft nach einem Timeout ab (falls sie nicht durch weitere Interaktion erneuert wird), und kann auch nach der Verwendung einiger eingeschränkter Funktionen (wie [`Window.open()`](/de/docs/Web/API/Window/open)) verbraucht/deaktiviert werden.

Transiente Aktivierung wird häufig als Mechanismus verwendet, um sicherzustellen, dass eine Web-API nur funktionieren kann, wenn sie durch Benutzerinteraktion ausgelöst wird.
Zum Beispiel können Skripte nicht willkürlich ein Popup starten, das _transiente Aktivierung_ erfordert ⁠— es muss über einen Ereignishandler eines UI-Elements ausgelöst werden.
Siehe [Funktionen, die eine Benutzeraktivierung erfordern](/de/docs/Web/Security/Defenses/User_activation) für Informationen zu APIs, die _transiente Aktivierung_ erfordern.

Die [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) Eigenschaft kann programmatisch verwendet werden, um den aktuellen transienten Aktivierungszustand des Fensters zu überprüfen.

## Siehe auch

- [Vergleich zwischen transienter und persistenter Aktivierung](/de/docs/Web/Security/Defenses/User_activation#comparison_between_transient_and_sticky_activation) in _Funktionen, die eine Benutzeraktivierung erfordern_
- Verwandte Glossarbegriffe:
  - {{Glossary("Sticky_activation", "Persistente Aktivierung")}}
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive)
- [HTML Living Standard > Transiente Aktivierung](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
