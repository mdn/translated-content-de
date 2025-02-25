---
title: RAIL
slug: Glossary/RAIL
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{GlossarySidebar}}

**RAIL**, ein Akronym für **Response, Animation, Idle und Load**, ist ein Performance-Modell, das 2015 vom Google Chrome-Team entwickelt wurde und den Fokus auf Benutzererfahrung und Leistung im Browser legt. Das Performance-Mantra von RAIL lautet: "Konzentrieren Sie sich auf den Benutzer; das Endziel ist nicht, Ihre Webseite auf einem bestimmten Gerät schnell zu betreiben, sondern die Benutzer glücklich zu machen." Es gibt 4 Phasen der Interaktion: Seitenladen, Leerlauf, Reaktion auf Eingaben und Scrollen sowie Animation. In der Reihenfolge des Akronyms lauten die Hauptprinzipien:

- **Response**
  - : Reagieren Sie sofort auf Benutzeraktionen, und bestätigen Sie jede Benutzereingabe in **100ms** oder weniger.
- **Animation**
  - : Bei Animationen sollte jedes Bild in weniger als **16ms** gerendert werden, um Konsistenz zu gewährleisten und Ruckeln zu vermeiden.
- **Idle**
  - : Beim Einsatz des Haupt-JavaScript-Threads in weniger als **50ms** arbeitende Blöcke nutzen, um den Thread für Benutzerinteraktionen freizuhalten.
- **Load**
  - : Interaktive Inhalte in weniger als **5 Sekunden** bereitstellen.

## Siehe auch

- [Empfohlene Web-Performance-Zeiten: Wie lange ist zu lange](/de/docs/Web/Performance/Guides/How_long_is_too_long)
