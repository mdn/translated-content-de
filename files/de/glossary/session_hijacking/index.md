---
title: Sitzungsentführung
slug: Glossary/Session_Hijacking
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

**Sitzungsentführung** tritt auf, wenn ein Angreifer eine gültige Sitzung zwischen zwei Computern übernimmt. Der Angreifer stiehlt eine gültige Sitzungs-ID, um in das System einzubrechen und Daten auszuspionieren.

Die meisten Authentifizierungen erfolgen nur zu Beginn einer {{Glossary("TCP", "TCP")}}-Sitzung. Bei der TCP-Sitzungsentführung erhält ein Angreifer Zugriff, indem er eine TCP-Sitzung zwischen zwei Maschinen in der Mitte übernimmt.

![Der Angreifer schnüffelt eine legitime Sitzungs-ID von einem Benutzer, der mit einem Webserver interagiert, und verwendet dann diesen Sitzungsbezeichner, um die Sitzung zwischen dem regulären Benutzer und dem Server zu fälschen, um die Sitzung des Benutzers auszunutzen und direkt auf den Server zuzugreifen.](session_hijacking_3.jpg)

## Sitzungsentführung tritt auf, weil

- keine Kontosperrung für ungültige Sitzungs-IDs
- schwacher Algorithmus zur Sitzungs-ID-Erzeugung
- unsichere Handhabung
- unbestimmte Sitzungsablaufzeit
- kurze Sitzungs-IDs
- Übertragung im Klartext

## Ablauf der Sitzungsentführung

1. **Schnüffeln**, das heißt einen [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)-Angriff durchführen, sich zwischen Opfer und Server positionieren.
2. **Überwachen** der zwischen Server und Benutzer fließenden Pakete.
3. **Unterbrechen** der Verbindung der Opfermaschine.
4. **Übernehmen** der Sitzungskontrolle.
5. **Neue Pakete** mit der Sitzungs-ID des Opfers an den Server senden.

## Schutz gegen Sitzungsentführung

- einen sicheren Kommunikationskanal mit SSH (Secure Shell) erstellen
- Authentifizierungs-Cookies über HTTPS-Verbindung weitergeben
- eine Abmeldefunktion implementieren, damit der Benutzer die Sitzung beenden kann
- die Sitzungs-ID nach erfolgreichem Login generieren
- verschlüsselte Daten zwischen den Benutzern und dem Webserver austauschen
- einen String oder eine lange Zufallszahl als Sitzungs-Schlüssel verwenden

## Siehe auch

- [Session hijacking](https://en.wikipedia.org/wiki/Session_hijacking) auf Wikipedia
