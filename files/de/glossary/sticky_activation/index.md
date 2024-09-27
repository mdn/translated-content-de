---
title: Sticky activation
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Sticky activation** (oder "sticky user activation") ist ein Fensterzustand, der anzeigt, dass ein Benutzer eine Taste gedrückt, die Maus bewegt, ein Menü verwendet oder eine andere Benutzerinteraktion durchgeführt hat.

Eine Seite wird als "user activated" betrachtet, wenn ein Benutzer momentan mit der Seite interagiert oder eine Touch-, Pointer- oder Tastaturinteraktion seit dem Laden der Seite abgeschlossen hat. Bei der sticky user activation wird die Aktivierung, wenn sie gesetzt ist, nicht für die Dauer der Sitzung zurückgesetzt (im Gegensatz zur [Transient activation](/de/docs/Glossary/Transient_activation)).

Siehe [Features gated by user activation](/de/docs/Web/Security/User_activation) für Beispiele von APIs, die _sticky activation_ erfordern.

Siehe die [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) Eigenschaft, um programmatisch auf den aktuellen Fensterzustand der sticky activation zuzugreifen.

## Siehe auch

- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
- Verwandte Glossarbegriffe:
  - [Transient activation](/de/docs/Glossary/Transient_activation)
- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive)
