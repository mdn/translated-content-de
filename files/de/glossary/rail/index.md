---
title: RAIL
slug: Glossary/RAIL
l10n:
  sourceCommit: b789d2ed3e6398b03fe22c95a3442be7b4669b47
---

{{GlossarySidebar}}

**RAIL**, ein Akronym für **Response, Animation, Idle, and Load**, ist ein Leistungsmodell, das 2015 vom Google Chrome-Team entwickelt wurde und sich auf Benutzererfahrung und Leistung im Browser konzentriert. Das Leistungsmantra von RAIL lautet: "Fokussieren Sie sich auf den Benutzer; das Endziel ist es nicht, Ihre Website auf einem bestimmten Gerät schnell performant zu machen, sondern die Benutzer glücklich zu machen." Es gibt 4 Phasen der Interaktion: Seitenladezeit, Leerlauf, Reaktion auf Eingaben und Scrollen sowie Animation. In der Reihenfolge des Akronyms lauten die Hauptprinzipien:

- **Response**
  - : Reagieren Sie sofort auf Benutzer und bestätigen Sie jegliche Benutzereingaben in **100ms** oder weniger.
- **Animation**
  - : Beim Animieren zeichnen Sie jedes Bild in unter **16ms** und zielen darauf ab, Konsistenz zu gewährleisten und Ruckeln zu vermeiden.
- **Idle**
  - : Wenn Sie den Haupt-JavaScript-Thread verwenden, arbeiten Sie in Abschnitten von weniger als **50ms**, um den Thread für Benutzerinteraktionen freizuhalten.
- **Load**
  - : Liefern Sie interaktive Inhalte in weniger als **5 Sekunden**.

## Siehe auch

- [Empfohlene Web-Performance-Zeiten: Wie lange ist zu lange](/de/docs/Web/Performance/How_long_is_too_long)
