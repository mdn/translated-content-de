---
title: Session Hijacking
slug: Glossary/Session_Hijacking
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Session Hijacking** tritt auf, wenn ein Angreifer eine gültige Sitzung zwischen zwei Computern übernimmt. Der Angreifer stiehlt eine gültige Sitzungs-ID, um in das System einzubrechen und Daten auszuspähen.

Die meiste Authentifizierung erfolgt nur zu Beginn einer [TCP](/de/docs/Glossary/TCP)-Sitzung. Beim TCP-Session Hijacking verschafft sich ein Angreifer Zugang, indem er eine TCP-Sitzung zwischen zwei Maschinen in der Mitte der Sitzung übernimmt.

![Der Angreifer schnüffelt und greift eine legitime Sitzungs-ID von einem Benutzer ab, der mit einem Webserver interagiert, und verwendet dann diese Sitzungskennung, um die Sitzung zwischen dem regulären Benutzer und dem Server zu fälschen, um die Sitzung des Benutzers auszunutzen und direkt auf den Server zuzugreifen.](session_hijacking_3.jpg)

### Session Hijacking tritt auf, weil

- kein Kontosperrung für ungültige Sitzungs-IDs
- schwacher Algorithmus zur Generierung von Sitzungs-IDs
- unsichere Handhabung
- unbefristete Sitzungsablaufzeit
- kurze Sitzungs-IDs
- Übertragung im Klartext

### Prozess des Session Hijacking

1. **Sniffen**, das heißt einen Man-in-the-Middle (MITM)-Angriff ausführen, platzieren Sie sich zwischen Opfer und Server.
2. **Überwachen** der Pakete, die zwischen Server und Benutzer fließen.
3. **Verbindung** der Opfermaschine unterbrechen.
4. **Übernahme** der Sitzung.
5. **Einschleusen** neuer Pakete an den Server unter Verwendung der Sitzungs-ID des Opfers.

### Schutz vor Session Hijacking

- einen sicheren Kommunikationskanal mit SSH (Secure Shell) erstellen
- Authentifizierungscookies über eine HTTPS-Verbindung senden
- Logout-Funktion implementieren, damit der Benutzer die Sitzung beenden kann
- die Sitzungs-ID nach erfolgreichem Login generieren
- verschlüsselte Daten zwischen Benutzern und dem Webserver austauschen
- eine Zeichenfolge oder lange Zufallszahl als Sitzungsschlüssel verwenden

## Siehe auch

- [Session Hijacking](https://en.wikipedia.org/wiki/Session_hijacking) auf Wikipedia
