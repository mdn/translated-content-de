---
title: Sticky-Aktivierung
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: 2baf3fbe98ef76049f9eb78700ab5a7d71cea05b
---

**Sticky-Aktivierung** (oder "sticky user activation") ist ein Fensterstatus, der anzeigt, dass ein Benutzer seit dem Laden der Seite sinnvoll und direkt mit dem Fenster interagiert hat. Sobald aktiv, bleibt der Status für die Dauer der Sitzung bestehen.

Der Status wird nach jeder Benutzerinteraktion, bei der das Fenster im Fokus steht, aktiviert, wenn der Browser eines oder mehrere der folgenden Ereignisse generiert:

- Ein `mousedown`- oder `pointerdown`-Ereignis für eine Maus.
- Ein `pointerup`-Ereignis für jede andere Art von Zeiger.
- Ein `touchend`-Ereignis.
- Ein `keydown`-Ereignis, außer für die Escape- oder Browser-Shortcut-Tasten.

Das Fenster wird nicht durch Ereignisse aktiviert, die nicht unbedingt durch eine beabsichtigte Interaktion mit dem Fenster verursacht wurden, wie Mausbewegungsereignisse oder `wheel`-Ereignisse.

Die Sticky-Aktivierung wird verwendet, um den Zugriff auf bestimmte Funktionen zu steuern und diese zu blockieren, wenn der Benutzer nicht mit der Seite interagiert hat. Beispielsweise kann sie verwendet werden, um sicherzustellen, dass kontrollierte Funktionen in fremden Frames keinen Code beim Laden der Seite ausführen. Weitere Informationen finden Sie unter [Features gated by user activation](/de/docs/Web/Security/Defenses/User_activation).

Die [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive)-Eigenschaft kann verwendet werden, um den aktuellen Sticky-Aktivierungsstatus des Fensters programmatisch zu überprüfen.

## Siehe auch

- [Vergleich zwischen vorübergehender und Sticky-Aktivierung](/de/docs/Web/Security/Defenses/User_activation#comparison_between_transient_and_sticky_activation) in _Features gated by user activation_
- Verwandte Glossarbegriffe:
  - {{Glossary("Transient_activation", "Vorübergehende Aktivierung")}}
- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive)
- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
