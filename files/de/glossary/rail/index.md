---
title: RAIL
slug: Glossary/RAIL
l10n:
  sourceCommit: b789d2ed3e6398b03fe22c95a3442be7b4669b47
---

{{GlossarySidebar}}

**RAIL**, ein Akronym für **Response, Animation, Idle und Load**, ist ein Leistungsmodell, das 2015 vom Google Chrome-Team entwickelt wurde und sich auf Benutzererfahrung und Leistung im Browser konzentriert. Das Leistungsmantra von RAIL lautet: "Konzentrieren Sie sich auf den Benutzer; das Endziel ist es nicht, Ihre Seite auf einem bestimmten Gerät schnell laufen zu lassen, sondern die Benutzer glücklich zu machen." Es gibt 4 Phasen der Interaktion: Seitennutzung, Ruhe, Reaktion auf Eingaben und Scrollen und Animation. In der Reihenfolge des Akronyms lauten die Hauptprinzipien:

- **Response**
  - : Reagieren Sie sofort auf Benutzer, indem jede Benutzereingabe in **100ms** oder weniger anerkannt wird.
- **Animation**
  - : Bei Animationen sollte jedes Bild in weniger als **16ms** gerendert werden, um Konsistenz zu gewährleisten und stockende Bewegungen zu vermeiden.
- **Idle**
  - : Wenn der Haupt-JavaScript-Thread verwendet wird, in Stücken arbeiten, die kürzer als **50ms** sind, um den Thread für Benutzerinteraktionen freizugeben.
- **Load**
  - : Interaktive Inhalte in weniger als **5 Sekunden** bereitstellen.

## Siehe auch

- [Empfohlene Web-Performance-Zeiten: Wie lange ist zu lang](/de/docs/Web/Performance/How_long_is_too_long)
