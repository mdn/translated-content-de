---
title: Session Hijacking
slug: Glossary/Session_Hijacking
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Session Hijacking** tritt auf, wenn ein Angreifer eine gültige Sitzung zwischen zwei Computern übernimmt. Der Angreifer stiehlt eine gültige Sitzungs-ID, um in das System einzudringen und Daten auszuspionieren.

Die meiste Authentifizierung erfolgt nur zu Beginn einer {{Glossary("TCP", "TCP")}}-Sitzung. Bei einem TCP-Session-Hijacking verschafft sich ein Angreifer Zugriff, indem er eine TCP-Sitzung zwischen zwei Maschinen in der laufenden Sitzung übernimmt.

![Der Angreifer schnüffelt und greift auf eine legitime Sitzungs-ID von einem Benutzer zu, der mit einem Webserver interagiert, und verwendet dann diesen Sitzungsidentifikator, um die Sitzung zwischen dem regulären Benutzer und dem Server zu fälschen, um die Benutzersitzung auszunutzen und direkt auf den Server zuzugreifen.](session_hijacking_3.jpg)

### Session Hijacking tritt auf, weil

- keine Sperrung des Kontos bei ungültigen Sitzungs-IDs
- schwacher Algorithmus zur Sitzungs-ID-Erzeugung
- unsichere Handhabung
- unbegrenzte Sitzungsablaufzeit
- kurze Sitzungs-IDs
- Übertragung im Klartext

### Prozess des Session Hijacking

1. **Schnüffeln**, das heißt, einen Man-in-the-Middle (MITM)-Angriff durchführen, sich zwischen Opfer und Server platzieren.
2. **Überwachen** von Paketen, die zwischen Server und Benutzer übertragen werden.
3. **Unterbrechen** der Verbindung der Opfermaschine.
4. **Übernahme** der Sitzung.
5. **Einschleusen** neuer Pakete zum Server unter Verwendung der Sitzungs-ID des Opfers.

### Schutzmaßnahmen gegen Session Hijacking

- Erstellen eines sicheren Kommunikationskanals mit SSH (Secure Shell)
- Übertragung von Authentifizierungs-Cookies über eine HTTPS-Verbindung
- Implementieren einer Logout-Funktion, damit der Benutzer die Sitzung beenden kann
- Generierung der Sitzungs-ID nach erfolgreichem Login
- Verschlüsselte Datenübertragung zwischen den Benutzern und dem Webserver
- Verwendung eines Strings oder einer langen Zufallszahl als Sitzungs-Schlüssel

## Siehe auch

- [Session Hijacking](https://en.wikipedia.org/wiki/Session_hijacking) auf Wikipedia
