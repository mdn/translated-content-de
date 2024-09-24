---
title: Sitzungsübernahme
slug: Glossary/Session_Hijacking
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Session Hijacking** tritt auf, wenn ein Angreifer eine gültige Sitzung zwischen zwei Computern übernimmt. Der Angreifer stiehlt eine gültige Sitzungs-ID, um in das System einzubrechen und Daten auszuspionieren.

Die meisten Authentifizierungen erfolgen nur zu Beginn einer {{glossary("TCP")}}-Sitzung. Bei einer TCP-Situationsübernahme erhält ein Angreifer Zugriff, indem er eine TCP-Sitzung zwischen zwei Maschinen in der laufenden Sitzung übernimmt.

![Der Angreifer schnüffelt und greift auf eine legitime Sitzungs-ID eines Nutzers zu, der mit einem Webserver interagiert, und verwendet dann diese Sitzungskennung, um die Sitzung zwischen dem regulären Nutzer und dem Server zu fälschen, um die Sitzung des Nutzers auszunutzen und direkt auf den Server zuzugreifen.](session_hijacking_3.jpg)

### Die Sitzungsübernahme erfolgt aufgrund von

- keinem Kontosperrung für ungültige Sitzungs-IDs
- schwachem Sitzungs-ID-Generierungsalgorithmus
- unsicherer Handhabung
- unbegrenzter Sitzungsablaufzeit
- kurzen Sitzungs-IDs
- Übertragung in Klartext

### Prozess der Sitzungsübernahme

1. **Sniff**, also führen Sie einen Man-in-the-Middle (MITM) Angriff durch und platzieren Sie sich zwischen Opfer und Server.
2. **Überwachen** Sie die zwischen Server und Benutzer fließenden Pakete.
3. **Unterbrechen** Sie die Verbindung des Opfercomputers.
4. **Übernehmen** Sie die Kontrolle über die Sitzung.
5. **Injizieren** Sie neue Pakete an den Server unter Verwendung der Sitzungs-ID des Opfers.

### Schutz gegen Sitzungsübernahme

- einen sicheren Kommunikationskanal mit SSH (Secure Shell) erstellen
- Authentifizierungscookies über eine HTTPS-Verbindung übertragen
- Abmeldefunktion implementieren, sodass der Nutzer die Sitzung beenden kann
- Sitzungs-ID nach erfolgreicher Anmeldung generieren
- verschlüsselte Daten zwischen Benutzern und dem Webserver übertragen
- verwenden Sie eine Zeichenkette oder eine lange Zufallszahl als Sitzungsschlüssel

## Siehe auch

- [Session hijacking](https://en.wikipedia.org/wiki/Session_hijacking) auf Wikipedia
