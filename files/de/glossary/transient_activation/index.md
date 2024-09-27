---
title: Transient activation
slug: Glossary/Transient_activation
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

**Transient activation** (oder "flüchtige Benutzeraktivierung") ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich eine Taste gedrückt, die Maus bewegt, ein Menü benutzt oder eine andere Benutzerinteraktion durchgeführt hat.

Dieser Zustand wird manchmal als Mechanismus verwendet, um sicherzustellen, dass ein Web-API nur funktionieren kann, wenn es durch Benutzerinteraktion ausgelöst wird. Beispielsweise können Skripte nicht willkürlich ein Popup starten, das _transient activation_ erfordert – es muss aus einem Ereignishandler eines UI-Elements heraus ausgelöst werden.

Siehe [Features gated by user activation](/de/docs/Web/Security/User_activation) für Beispiele von APIs, die _transient activation_ erfordern.

Siehe die [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) Eigenschaft, um programmgesteuert auf den aktuellen transienten Aktivierungszustand des Fensters zuzugreifen.

> [!NOTE]
> Transiente Aktivierung läuft nach einem Timeout ab (sofern sie nicht durch weitere Interaktion erneuert wird) und kann auch von einigen APIs "verbraucht" werden. Siehe [Sticky activation](/de/docs/Glossary/Sticky_activation) für eine Benutzeraktivierung, die sich nicht zurücksetzt, nachdem sie einmal gesetzt wurde.

## Siehe auch

- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
- Verwandte Glossarbegriffe:
  - [Sticky activation](/de/docs/Glossary/Sticky_activation)
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive)
