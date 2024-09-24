---
title: Sticky-Aktivierung
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Sticky-Aktivierung** (oder "sticky user activation") ist ein Fensterzustand, der anzeigt, dass ein Benutzer eine Schaltfläche gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat.

Eine Seite wird als „benutzeraktiviert“ angesehen, wenn der Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Berührung, Zeiger- oder Tastaturinteraktion abgeschlossen hat. Bei der sticky user activation bleibt diese Aktivierung für die Dauer der Sitzung bestehen und wird nicht zurückgesetzt (im Gegensatz zur {{Glossary("Transient activation")}}).

Siehe [Features, die durch Benutzeraktivierung gesperrt sind](/de/docs/Web/Security/User_activation) für Beispiele von APIs, die _sticky activation_ erfordern.

Siehe die Eigenschaft {{domxref("UserActivation.hasBeenActive")}}, um programmgesteuert auf den aktuellen Sticky-Aktivierungsstatus des Fensters zuzugreifen.

## Siehe auch

- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
- Verwandte Glossarbegriffe:
  - {{Glossary("Transient activation")}}
- {{domxref("UserActivation.hasBeenActive")}}
