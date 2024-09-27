---
title: Session Hijacking
slug: Glossary/Session_Hijacking
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Session Hijacking** tritt auf, wenn ein Angreifer eine gültige Sitzung zwischen zwei Computern übernimmt. Der Angreifer stiehlt eine gültige Sitzungs-ID, um in das System einzubrechen und Daten auszuspähen.

Die meisten Authentifizierungen erfolgen nur zu Beginn einer [TCP](/de/docs/Glossary/TCP)-Sitzung. Bei einem TCP-Sitzungshijacking verschafft sich ein Angreifer Zugang, indem er eine TCP-Sitzung zwischen zwei Maschinen während einer bestehenden Sitzung übernimmt.

![Der Angreifer schnüffelt und greift eine legitime Sitzungs-ID von einem Benutzer ab, der mit einem Webserver interagiert, und verwendet dann diese Sitzungskennung, um die Sitzung zwischen dem regulären Benutzer und dem Server zu fälschen, um die Sitzung des Benutzers auszunutzen und direkt auf den Server zuzugreifen.](session_hijacking_3.jpg)

### Session Hijacking tritt auf, weil

- kein Kontosperren für ungültige Sitzungs-IDs vorhanden ist
- schwacher Sitzungs-ID-Generierungsalgorithmus
- unsichere Handhabung
- unbestimmte Ablaufzeit der Sitzung
- kurze Sitzungs-IDs
- Übertragung im Klartext

### Prozess des Session Hijackings

1. **Schnüffeln**, das heißt, einen Man-in-the-Middle (MITM) Angriff durchführen, sich zwischen Opfer und Server platzieren.
2. **Überwachen** der zwischen Server und Benutzer fließenden Pakete.
3. **Unterbrechen** der Verbindung der Opfermaschine.
4. **Kontrolle** der Sitzung übernehmen.
5. **Einfügen** neuer Pakete zum Server unter Verwendung der Sitzungs-ID des Opfers.

### Schutz vor Session Hijacking

- einen sicheren Kommunikationskanal mit SSH (Secure Shell) schaffen
- Authentifizierungs-Cookies über eine HTTPS-Verbindung senden
- Abmeldefunktion implementieren, damit der Benutzer die Sitzung beenden kann
- die Sitzungs-ID nach erfolgreichem Login generieren
- verschlüsselte Daten zwischen den Benutzern und dem Webserver austauschen
- einen String oder eine lange Zufallszahl als Sitzungs-Schlüssel verwenden

## Siehe auch

- [Session hijacking](https://en.wikipedia.org/wiki/Session_hijacking) auf Wikipedia
