---
title: PWA-Beispiel-Bedrohungsmodell
slug: Web/Security/Threat_modeling/PWA_threat_model
l10n:
  sourceCommit: f0cf64861b7e582007f7df3cdf2ed876d95de73f
---

> [!NOTE]
> Diese Seite zeigt ein Beispiel-Bedrohungsmodell für eine Progressive Web Application (PWA). [CycleTracker](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker) ist eine Menstruationszyklus-Tracking-PWA, die nur Start- und Enddaten in [`localStorage`](/de/docs/Web/API/Window/localStorage) speichert, ohne Drittanbieter- oder externe Skripte. Sie kann als sicherer als viele cloudbasierte Alternativen angesehen werden. Dennoch können selbst minimale Zyklen-Daten sensible reproduktive Informationen offenbaren, daher ist es sinnvoll, ihre Sicherheit in einem Bedrohungsmodell zu bewerten.
>
> Für weitere Informationen und Anleitung zu Bedrohungsmodellen siehe den [Bedrohungsmodell-Leitfaden](/de/docs/Web/Security/Threat_modeling).

## Überblick

- Projekt: Lokales Only-Menstruationszyklus-Tracking-PWA
- Beschreibung: Eine Progressive Web App zur lokalen Nachverfolgung von Menstruationszyklen. Speichert nur Start- und Enddaten.
- Version: 1.0
- Letzte Aktualisierung: 2026-04-23

## 1. Woran arbeiten wir?

### Annahmen und Umfang

Dieses Bedrohungsmodell behandelt CycleTracker, eine Menstruationszyklus-Tracking-PWA, die nur Start- und Enddaten ohne Drittanbieter- oder externe Skripte in `localStorage` speichert.

### Komponenten

| ID  | Komponente           | Beschreibung                       |
| --- | -------------------- | ---------------------------------- |
| C1  | PWA-Frontend         | HTML/CSS/JS                        |
| C2  | Lokaler Speicher     | Zyklusdaten im Browser gespeichert |
| C3  | Service Worker       | Cache von statischen Inhalten      |
| C4  | PWA-Manifest + Icons |                                    |

### Vermögenswerte

| ID  | Vermögenswert            | Beschreibung         |
| --- | ------------------------ | -------------------- |
| A1  | Zyklus-Startdaten        |                      |
| A2  | Zyklus-Enddaten          |                      |
| A3  | Abgeleitete Zyklenmuster | Abgeleitet aus A1/A2 |

### Datenflüsse

| ID  | Fluss             | Beschreibung                                                          |
| --- | ----------------- | --------------------------------------------------------------------- |
| F1  | Datenübermittlung | Benutzer gibt Zyklusdaten ein, die in localStorage geschrieben werden |
| F2  | App-Laden         | Browser lädt PWA-Inhalte über HTTPS oder von einem Service Worker     |

### Externe Abhängigkeiten

| ID  | Abhängigkeit | Anmerkungen                                                                    |
| --- | ------------ | ------------------------------------------------------------------------------ |
| E1  | Webbrowser   | Annahme von Sicherheitseinstellungen wie Sandbox, Speicherisolierung usw.      |
| E2  | Gerät        | Annahme eines aktualisierten Betriebssystems, Bildschirmsperre, Malware-Schutz |
| E3  | Hosting      | Annahme von Sicherheitsmaßnahmen, wie DDoS-Schutz                              |

### Interessengruppen

| ID  | Interessengruppe        | Interessen / potenzieller Schaden             |
| --- | ----------------------- | --------------------------------------------- |
| S1  | Zyklustracking-Benutzer | Kontosicherheit, Datenschutz                  |
| S2  | Entwickler              | Entwickler des Code-Basis                     |
| S3  | Anonyme Benutzer        | Personen mit physischem Zugriff auf das Gerät |

## 2. Was kann schiefgehen?

### Identifizierte Bedrohungen

| ID  | Bedrohung                                         | Betroffene Elemente | Beschreibung                                                                                        |
| --- | ------------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| T1  | Zugriff auf lokales Gerät                         | C2, A1–A3, F2, S3   | Jemand mit physischem Zugriff auf das Gerät öffnet die PWA und sieht Zyklen-Daten.                  |
| T2  | Exposition von geteilten Browserprofilen          | C2, A1–A3, E1, S1   | Eine andere Person, die dasselbe Browserprofil verwendet, sieht gespeicherte Zyklen-Daten.          |
| T3  | Synchronisationsleck des Browsers/Betriebssystems | C2, A1–A3, E2       | Browser- oder Betriebssystem-Synchronisation oder -Backup lädt localStorage in Cloud-Konten hoch.   |
| T4  | Bösartige Browser-Erweiterungen                   | C2, A1–A3, E1       | Erweiterungen mit weitreichenden Berechtigungen lesen oder ändern localStorage.                     |
| T5  | XSS                                               | C1, C2, A1–A3, 1    | Injektionsschwachstelle, die zum Diebstahl von Daten führt / Angreifer kann localStorage lesen.     |
| T6  | Kompromittierter Service Worker                   | C3, F2              | Ein bösartiger oder manipulierte Service Worker exfiltriert Daten oder verändert das App-Verhalten. |
| T7  | Hosting-Kompromittierung                          | C1, C3, A1-A3, E3   | Angreifer modifizieren gehostete JS, um localStorage-Daten zu stehlen.                              |
| T8  | Malware auf dem Gerät                             | C2, A1–A3, E2       | Malware auf dem Gerät liest den Speicher.                                                           |
| T9  | Datenkorruption                                   | C2, A1-A-3, F1      | localStorage wird beschädigt, Zyklusdaten gehen verloren.                                           |
| T10 | Inferenzangriffe                                  | A1–A3               | Selbst minimale Daten offenbaren verpasste Perioden oder Schwangerschaftswahrscheinlichkeiten.      |
| T11 | Service Worker DoS                                | C3, F2              | Defekte oder bösartiger SW verhindern das Laden der App offline.                                    |
| T12 | Rechtliche oder forensische Beschlagnahme         | A1–A3, S3           | Behörden, die auf das Gerät zugreifen, können Zyklen-Daten lesen.                                   |
| T13 | Bösartige Nachbildungen                           | C1, C3, S1          | Eine geforkte Version ahmt die PWA nach, stiehlt aber Daten.                                        |

## 3. Was werden wir dagegen tun?

### Bedrohungsantworten

| Bedrohung | Antwort-ID                               | Strategie   | Beschreibung                                                                                        |
| --------- | ---------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| T1        | Zugriff auf lokales Gerät                | Reduzieren  | Benutzer ermutigen, ihr Gerät mit einem Passcode/Biometrie zu sichern.                              |
| T1        | Zugriff auf lokales Gerät                | Reduzieren  | Optionale App-interne PIN oder Passphrase.                                                          |
| T2        | Exposition von geteilten Browserprofilen | Reduzieren  | Anleitung zur Verwendung von privatem Surfen oder separaten Profilen bereitstellen.                 |
| T2        | Exposition von geteilten Browserprofilen | Reduzieren  | "Alle Daten löschen"-Button hinzufügen.                                                             |
| T3        | Synchronisationsleck des Browsers        | Reduzieren  | Dokumentieren, dass Browsersynchronisation Daten hochladen kann.                                    |
| T4        | Bösartige Erweiterungen                  | Akzeptieren | Außerhalb der App-Kontrolle; Benutzer über Risiken von Erweiterungen warnen.                        |
| T5        | XSS                                      | Reduzieren  | Strenge Content Security Policy anwenden.                                                           |
| T5        | XSS                                      | Reduzieren  | Inline-Skripte vermeiden.                                                                           |
| T5        | XSS                                      | Reduzieren  | Code einfach und überprüfbar halten.                                                                |
| T6        | Kompromittierter Service Worker          | Reduzieren  | Service Worker minimal halten.                                                                      |
| T6        | Kompromittierter Service Worker          | Reduzieren  | Versionierung und Integritätsprüfungen verwenden.                                                   |
| T6        | Kompromittierter Service Worker          | Reduzieren  | Dynamisches Laden von Skripten vermeiden.                                                           |
| T7        | Hosting-Kompromittierung                 | Reduzieren  | Nur HTTPS-Hosting verwenden (erforderlich).                                                         |
| T7        | Hosting-Kompromittierung                 | Reduzieren  | Integrität des Repositorys überwachen.                                                              |
| T7        | Hosting-Kompromittierung                 | Reduzieren  | Benutzer ermutigen, ihre eigene App zu programmieren oder nur offiziellen Deployments zu vertrauen. |
| T8        | Malware auf dem Gerät                    | Akzeptieren | Außerhalb unserer Kontrolle; Betriebssystem-Updates und Antivirus empfehlen.                        |
| T9        | Datenkorruption                          | Reduzieren  | localStorage-Schreibvorgänge validieren.                                                            |
| T9        | Datenkorruption                          | Reduzieren  | Export-/Import-Funktionalität bereitstellen.                                                        |
| T10       | Inferenzangriffe                         | Akzeptieren | Innewohnend in der Natur von Menstruationsdaten.                                                    |
| T10       | Inferenzangriffe                         | Akzeptieren | Gesammelte Daten minimieren (bereits gemacht).                                                      |
| T11       | Service Worker DoS                       | Reduzieren  | Fallback-Logik bereitstellen, wenn SW fehlschlägt.                                                  |
| T11       | Service Worker DoS                       | Reduzieren  | SW-Logik einfach halten.                                                                            |
| T12       | Rechtliche Beschlagnahme                 | Akzeptieren | Außerhalb unserer Kontrolle; Benutzer warnen; Daten löschen Button.                                 |
| T12       | Rechtliche Beschlagnahme                 | Akzeptieren | Optionale lokale Verschlüsselung.                                                                   |
| T13       | Bösartige Nachbildungen                  | Reduzieren  | Offizielle URLs dokumentieren.                                                                      |
| T13       | Bösartige Nachbildungen                  | Reduzieren  | Codesignierung oder Integritätsüberprüfung, wo möglich, fördern.                                    |

## 4. Haben wir einen ausreichend guten Job gemacht?

### Überprüfungsstatus

- Alle identifizierten Bedrohungen haben mindestens eine Antwort.
- Keine Bedrohungen mit hohem Einfluss sind derzeit unbehandelt.
- Restrisiken (z.B. Spam) werden mit Überwachung akzeptiert.

### Nachverfolgungsmaßnahmen

- Überarbeiten Sie dieses Bedrohungsmodell nach:
  - Wesentlichen Funktionsänderungen
  - Hinzufügen von Abhängigkeiten Dritter
  - Sicherheitsvorfällen
- Überprüfung mindestens einmal pro Jahr.

### Anmerkungen

Dieses Bedrohungsmodell ist absichtlich unvollständig und wird sich weiterentwickeln. Sein Zweck ist es, das gemeinsame Verständnis zu verbessern und Sicherheitsentscheidungen zu leiten, nicht die Abwesenheit von Sicherheitslücken zu garantieren.

## Siehe auch

- [Bedrohungsmodell-Leitfaden](/de/docs/Web/Security/Threat_modeling)
- [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/)
