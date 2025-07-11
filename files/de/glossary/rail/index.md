---
title: RAIL
slug: Glossary/RAIL
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**RAIL**, ein Akronym für **Response, Animation, Idle und Load**, ist ein Leistungsmodell, das 2015 vom Google Chrome-Team entwickelt wurde, mit Schwerpunkt auf Benutzererfahrung und Leistung im Browser. Das Leistungsmantra von RAIL lautet: "Konzentrieren Sie sich auf den Benutzer; das Endziel ist nicht, dass Ihre Website auf einem bestimmten Gerät schnell funktioniert, sondern dass die Benutzer zufrieden sind." Es gibt 4 Interaktionsphasen: Seitenladezeit, Leerlauf, Reaktion auf Eingaben und Scrollen sowie Animationen. In der Reihenfolge des Akronyms sind die Hauptprinzipien:

- **Response (Reaktion)**
  - : Reagieren Sie sofort auf Benutzer, indem Sie jede Benutzereingabe in **100ms** oder weniger bestätigen.
- **Animation**
  - : Bei Animationen rendern Sie jedes Bild unter **16ms**, streben Sie Konsistenz an und vermeiden Sie Ruckeln.
- **Idle (Leerlauf)**
  - : Wenn der Haupt-JavaScript-Thread verwendet wird, arbeiten Sie in Abschnitten von weniger als **50ms**, um den Thread für Benutzerinteraktionen freizugeben.
- **Load (Laden)**
  - : Liefern Sie interaktive Inhalte in weniger als **5 Sekunden**.

## Siehe auch

- [Empfohlene Webleistungszeiten: Wie lange ist zu lange](/de/docs/Web/Performance/Guides/How_long_is_too_long)
