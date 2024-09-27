---
title: RAIL
slug: Glossary/RAIL
l10n:
  sourceCommit: b789d2ed3e6398b03fe22c95a3442be7b4669b47
---

{{GlossarySidebar}}

**RAIL**, ein Akronym für **Response, Animation, Idle, and Load**, ist ein Leistungsmodell, das 2015 von dem Google Chrome-Team entwickelt wurde und sich auf Benutzererfahrung und Leistung im Browser konzentriert. Das Leistungs-Mantra von RAIL lautet "Fokus auf den Benutzer; das Endziel ist nicht, dass Ihre Website auf einem bestimmten Gerät schnell läuft, sondern dass die Benutzer zufrieden sind." Es gibt 4 Interaktionsstadien: Seitenladen, Inaktivität, Eingabeantwort und Scrollen und Animation. In der Reihenfolge des Akronyms lauten die Hauptgrundsätze:

- **Response** (Antwort)
  - : Reagieren Sie sofort auf Benutzer, indem Sie jede Benutzereingabe in **100ms** oder weniger bestätigen.
- **Animation**
  - : Beim Animieren sollte jedes Frame in weniger als **16ms** gerendert werden, mit dem Ziel der Konsistenz und Vermeidung von Ruckeln.
- **Idle** (Inaktivität)
  - : Wenn der Haupt-JavaScript-Thread verwendet wird, arbeiten Sie in Abschnitten von weniger als **50ms**, um den Thread für Benutzerinteraktionen freizugeben.
- **Load** (Laden)
  - : Liefern Sie interaktive Inhalte in weniger als **5 Sekunden**.

## Siehe auch

- [Empfohlene Web-Performance-Zeiten: Wie lange ist zu lange](/de/docs/Web/Performance/How_long_is_too_long)
