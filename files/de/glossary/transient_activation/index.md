---
title: Vorübergehende Aktivierung
slug: Glossary/Transient_activation
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

**Vorübergehende Aktivierung** (oder "vorübergehende Benutzeraktivierung") ist ein Fensterzustand, der anzeigt, dass ein Benutzer kürzlich eine Taste gedrückt, die Maus bewegt, ein Menü benutzt oder eine andere Benutzereingabe durchgeführt hat.

Dieser Zustand wird manchmal als Mechanismus verwendet, um sicherzustellen, dass ein Web-API nur dann funktioniert, wenn es durch Benutzereingaben ausgelöst wird. Zum Beispiel können Skripte nicht willkürlich ein Popup starten, das eine _vorübergehende Aktivierung_ erfordert – es muss von einem Ereignishandler eines UI-Elements ausgelöst werden.

Sehen Sie [Features gated by user activation](/de/docs/Web/Security/User_activation) für Beispiele von APIs, die _vorübergehende Aktivierung_ erfordern.

Sehen Sie die {{domxref("UserActivation.isActive")}}-Eigenschaft, um programmgesteuert auf den aktuellen Status der vorübergehenden Aktivierung des Fensters zuzugreifen.

> [!NOTE]
> Vorübergehende Aktivierung läuft nach einem Timeout ab (wenn sie nicht durch weitere Interaktionen erneuert wird) und kann auch von einigen APIs "verbraucht" werden. Siehe {{Glossary("Sticky activation")}} für eine Benutzeraktivierung, die sich nach der anfänglichen Einstellung nicht zurücksetzt.

## Siehe auch

- [HTML Living Standard > Transient activation](https://html.spec.whatwg.org/multipage/interaction.html#transient-activation)
- Verwandte Glossarbegriffe:
  - {{Glossary("Sticky activation")}}
- {{domxref("UserActivation.isActive")}}
