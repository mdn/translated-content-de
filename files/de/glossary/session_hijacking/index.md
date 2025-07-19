---
title: Session Hijacking
slug: Glossary/Session_Hijacking
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

**Session Hijacking** tritt auf, wenn ein Angreifer eine gültige Sitzung zwischen zwei Computern übernimmt. Der Angreifer stiehlt eine gültige Sitzungs-ID, um ins System einzubrechen und Daten auszuspionieren.

Die meiste Authentifizierung erfolgt nur zu Beginn einer {{Glossary("TCP", "TCP")}}-Sitzung. Beim TCP-Session-Hijacking erlangt ein Angreifer Zugang, indem er eine TCP-Sitzung zwischen zwei Maschinen während der laufenden Sitzung übernimmt.

![Der Angreifer überwacht und greift auf eine legitime Sitzungs-ID von einem Benutzer zu, der mit einem Webserver interagiert, und verwendet diese Sitzungskennung, um die Sitzung zwischen dem regulären Benutzer und dem Server zu fälschen, um die Sitzung des Benutzers auszunutzen und direkt auf den Server zuzugreifen.](session_hijacking_3.jpg)

### Session Hijacking tritt aufgrund folgender Gründe auf

- keine Kontosperre für ungültige Sitzungs-IDs
- schwacher Algorithmus zur Erstellung von Sitzungs-IDs
- unsichere Handhabung
- unbegrenzte Ablaufzeit der Sitzung
- kurze Sitzungs-IDs
- Übertragung im Klartext

### Prozess des Session Hijacking

1. **Überwachen**, d.h. einen Man-in-the-Middle (MITM)-Angriff durchführen, platzieren Sie sich zwischen Opfer und Server.
2. **Pakete überwachen**, die zwischen Server und Benutzer fließen.
3. **Verbindung des Opferrechners trennen**.
4. **Die Kontrolle über die Sitzung übernehmen**.
5. **Neue Pakete mit der Sitzungs-ID des Opfers an den Server senden**.

### Schutz vor Session Hijacking

- Einen sicheren Kommunikationskanal mit SSH (secure shell) erstellen
- Authentifizierungs-Cookies über eine HTTPS-Verbindung übertragen
- Abmeldefunktion implementieren, sodass der Benutzer die Sitzung beenden kann
- Die Sitzungs-ID nach erfolgreichem Login generieren
- Verschlüsselte Daten zwischen den Benutzern und dem Webserver austauschen
- Einen String oder lange Zufallsnummer als Sitzungsschlüssel verwenden

## Siehe auch

- [Session hijacking](https://en.wikipedia.org/wiki/Session_hijacking) auf Wikipedia
