---
title: Transiente Aktivierung
slug: Glossary/Transient_activation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Transiente Aktivierung** (oder "transiente Benutzeraktivierung") ist ein Fensterstatus, der anzeigt, dass ein Benutzer kürzlich eine Taste gedrückt, eine Maus bewegt, ein Menü benutzt oder eine andere Benutzerinteraktion durchgeführt hat.

Dieser Status wird manchmal als Mechanismus verwendet, um sicherzustellen, dass eine Web-API nur dann funktionieren kann, wenn sie durch Benutzerinteraktion ausgelöst wird. Zum Beispiel können Skripte nicht willkürlich ein Popup-Fenster starten, das _transiente Aktivierung_ erfordert – es muss von einem Ereignishandler eines UI-Elements ausgelöst werden.

Siehe [Funktionen, die durch Benutzeraktivierung gesichert sind](/de/docs/Web/Security/User_activation) für Beispiele von APIs, die _transiente Aktivierung_ benötigen.

Siehe die [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) Eigenschaft, um programmatisch auf den aktuellen transienten Aktivierungszustand des Fensters zuzugreifen.

> [!NOTE]
> Transiente Aktivierung läuft nach einem Timeout ab (sofern sie nicht durch weitere Interaktion erneuert wird) und kann auch von einigen APIs "verbraucht" werden. Siehe {{Glossary("Sticky_activation", "Sticky-Aktivierung")}} für eine Benutzeraktivierung, die sich nicht zurücksetzt, nachdem sie einmal gesetzt wurde.

## Siehe auch

- [HTML Living Standard > Transiente Aktivierung](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
- Verwandte Glossarbegriffe:
  - {{Glossary("Sticky_activation", "Sticky-Aktivierung")}}
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive)
