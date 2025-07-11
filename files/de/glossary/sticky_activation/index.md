---
title: Sticky-Aktivierung
slug: Glossary/Sticky_activation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Sticky-Aktivierung** (oder "dauerhafte Benutzeraktivierung") ist ein Fensterzustand, der anzeigt, dass ein Benutzer auf eine Schaltfläche gedrückt, die Maus bewegt, ein Menü benutzt oder eine andere Benutzerinteraktion durchgeführt hat.

Eine Seite wird als "benutzeraktiviert" angesehen, wenn ein Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Berührung, Zeiger- oder Tastaturinteraktion abgeschlossen hat. Bei der dauerhaften Benutzeraktivierung wird die Aktivierung, wenn sie einmal gesetzt ist, für die gesamte Sitzung nicht zurückgesetzt (im Gegensatz zur {{Glossary("Transient_activation", "transienten Aktivierung")}}).

Siehe [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation) für Beispiele von APIs, die _dauerhafte Aktivierung_ erfordern.

Siehe die Eigenschaft [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive), um programmatisch auf den dauerhaften Aktivierungszustand des aktuellen Fensters zuzugreifen.

## Siehe auch

- [HTML Living Standard > Sticky-Aktivierung](https://html.spec.whatwg.org/multipage/interaction.html#sticky-activation)
- Verwandte Glossarbegriffe:
  - {{Glossary("Transient_activation", "Transiente Aktivierung")}}
- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive)
