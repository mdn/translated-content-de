---
title: Sticky-Aktivierung
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**Sticky-Aktivierung** (oder "sticky user activation") ist ein Fensterzustand, der anzeigt, dass ein Nutzer seit dem Laden der Seite sinnvoll und direkt mit dem Fenster interagiert hat.
Sobald der Zustand aktiv ist, dauert er für die Dauer der Sitzung an.

Der Zustand wird nach jeder Nutzerinteraktion aktiviert, wenn das Fenster den Fokus hat, die im Browser eines oder mehrere der folgenden Ereignisse erzeugt:

- Ein `mousedown`- oder `pointerdown`-Ereignis für eine Maus.
- Ein `pointerup`-Ereignis für jede andere Art von Zeiger.
- Ein `touchend`-Ereignis.
- Ein `keydown`-Ereignis, ausgenommen für die Escape- oder Browser-Shortcut-Tasten.

Das Fenster wird nicht durch Ereignisse aktiviert, die nicht unbedingt durch absichtliche Interaktion mit dem Fenster verursacht werden, wie z.B. Mausbewegungen oder `wheel`-Ereignisse.

Sticky-Aktivierung wird verwendet, um den Zugriff auf bestimmte Funktionen zu kontrollieren und diese zu blockieren, wenn der Nutzer nicht mit der Seite interagiert hat.
Zum Beispiel kann sie verwendet werden, um sicherzustellen, dass gesteuerte Funktionen in Cross-Origin-Frames keinen Code beim Laden der Seite ausführen.
Siehe [Funktionen, die durch Nutzungsaktivierung gesichert sind](/de/docs/Web/Security/Defenses/User_activation) für weitere Informationen.

Die [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) Eigenschaft kann verwendet werden, um im Code den aktuellen Sticky-Aktivierungszustand des Fensters zu prüfen.

## Siehe auch

- [Vergleich zwischen vergänglicher und sticky Aktivierung](/de/docs/Web/Security/Defenses/User_activation#comparison_between_transient_and_sticky_activation) in _Funktionen, die durch Nutzungsaktivierung gesichert sind_
- Verwandte Glossarbegriffe:
  - {{Glossary("Transient_activation", "Vergängliche Aktivierung")}}
- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive)
- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
