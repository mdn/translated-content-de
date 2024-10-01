---
title: Transient activation
slug: Glossary/Transient_activation
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

**Transient activation** (oder "flüchtige Benutzeraktivierung") ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat.

Dieser Zustand wird manchmal als Mechanismus verwendet, um sicherzustellen, dass eine Web-API nur funktioniert, wenn sie durch eine Benutzerinteraktion ausgelöst wird. Zum Beispiel können Skripte nicht willkürlich ein Popup starten, das eine _transient activation_ erfordert - es muss aus einem Ereignishandler eines UI-Elements ausgelöst werden.

Siehe [Features gated by user activation](/de/docs/Web/Security/User_activation) für Beispiele von APIs, die eine _transient activation_ erfordern.

Sehen Sie sich die [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) Eigenschaft an, um programmgesteuert auf den flüchtigen Aktivierungszustand des aktuellen Fensters zuzugreifen.

> [!NOTE]
> Die flüchtige Aktivierung läuft nach einem Timeout ab (wenn sie nicht durch weitere Interaktion erneuert wird) und kann auch durch einige APIs "verbraucht" werden. Siehe {{Glossary("Sticky_activation", "Sticky activation")}} für eine Benutzeraktivierung, die nach der anfänglichen Einstellung nicht zurückgesetzt wird.

## Siehe auch

- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
- Verwandte Glossarbegriffe:
  - {{Glossary("Sticky_activation", "Sticky activation")}}
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive)
