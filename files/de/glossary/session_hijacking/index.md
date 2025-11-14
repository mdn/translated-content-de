---
title: Session-Hijacking
slug: Glossary/Session_Hijacking
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**Session-Hijacking** tritt auf, wenn ein Angreifer eine gültige Sitzung zwischen zwei Computern übernimmt. Der Angreifer stiehlt eine gültige Sitzungs-ID, um in das System einzubrechen und Daten auszuspionieren.

Die meiste Authentifizierung erfolgt nur zu Beginn einer {{Glossary("TCP", "TCP")}}-Sitzung. Beim TCP-Session-Hijacking erlangt ein Angreifer Zugriff, indem er eine TCP-Sitzung zwischen zwei Maschinen in der Mitte einer Sitzung übernimmt.

![Der Angreifer schnüffelt und greift auf eine legitime Sitzungs-ID eines Benutzers zu, der mit einem Webserver interagiert, und verwendet dann diesen Sitzungsidentifikator, um die Sitzung zwischen dem regulären Benutzer und dem Server zu fälschen, um die Sitzung des Benutzers auszunutzen und direkt auf den Server zuzugreifen.](session_hijacking_3.jpg)

## Session-Hijacking tritt auf, weil

- kein Kontosperren für ungültige Sitzungs-IDs
- schwacher Sitzungs-ID-Generierungsalgorithmus
- unsichere Handhabung
- unbestimmte Sitzungsablaufzeit
- kurze Sitzungs-IDs
- Übertragung im Klartext

## Prozess des Session-Hijacking

1. **Schnüffeln**, d.h. einen Man-in-the-Middle (MITM)-Angriff durchführen, sich zwischen Opfer und Server platzieren.
2. **Überwachen** der zwischen Server und Benutzer fließenden Pakete.
3. **Unterbrechen** der Verbindung der Opfermaschine.
4. **Übernehmen** der Sitzungskontrolle.
5. **Einschleusen** neuer Pakete zum Server unter Verwendung der Sitzungs-ID des Opfers.

## Schutz vor Session-Hijacking

- Erstellen Sie einen sicheren Kommunikationskanal mit SSH (Secure Shell)
- Übertragen Sie Authentifizierungs-Cookies über eine HTTPS-Verbindung
- Implementieren Sie eine Abmeldefunktion, damit der Benutzer die Sitzung beenden kann
- Generieren Sie die Sitzungs-ID nach erfolgreichem Login
- Übertragen Sie verschlüsselte Daten zwischen den Benutzern und dem Webserver
- Verwenden Sie einen Zeichenfolgenwert oder eine lange Zufallszahl als Sitzungs-Schlüssel

## Siehe auch

- [Session hijacking](https://en.wikipedia.org/wiki/Session_hijacking) auf Wikipedia
