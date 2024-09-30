---
title: Sticky activation
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Sticky activation** (oder "sticky user activation") ist ein Fensterzustand, der anzeigt, dass ein Benutzer eine Taste gedrückt, die Maus bewegt, ein Menü benutzt oder eine andere Benutzerinteraktion durchgeführt hat.

Eine Seite wird als "user activated" betrachtet, wenn ein Benutzer derzeit mit der Seite interagiert oder eine Touch-, Zeiger- oder Tastaturinteraktion seit dem Laden der Seite abgeschlossen hat. Bei der sticky user activation wird die Aktivierung, sobald sie gesetzt ist, während der gesamten Sitzung nicht zurückgesetzt (im Gegensatz zur [Transient activation](/de/docs/Glossary/Transient_activation)).

Weitere Informationen zu APIs, die _sticky activation_ erfordern, finden Sie unter [Features gated by user activation](/de/docs/Web/Security/User_activation).

Siehe die [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) Eigenschaft, um programmatisch auf den aktuellen sticky activation-Zustand des Fensters zuzugreifen.

## Siehe auch

- [HTML Living Standard > Sticky activation](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
- Verwandte Glossarbegriffe:
  - [Transient activation](/de/docs/Glossary/Transient_activation)
- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive)
