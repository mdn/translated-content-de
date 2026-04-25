---
title: Beispiel eines Bedrohungsmodells
slug: Web/Security/Threat_modeling/Example_threat_model
l10n:
  sourceCommit: 254daa6717e1d162f9fff51a0c49162c798f9bb0
---

> [!NOTE]
> Diese Seite zeigt ein Beispiel für ein Bedrohungsmodell einer Website. Es wird empfohlen, es zu kopieren und an Ihr eigenes Projekt anzupassen. Sie können Komponenten entfernen, die Ihr Projekt nicht hat, verschiedene Datenflüsse hinzufügen usw. Gehen Sie jede der vier Schlüsselfragen durch und passen Sie sie nach Bedarf an.
>
> Für weitere Informationen und Anleitungen zur Erstellung eines Bedrohungsmodells siehe den [Bedrohungsmodell-Leitfaden](/de/docs/Web/Security/Threat_modeling).

## Überblick

- Projekt: Blog-Website
- Beschreibung: Öffentlich zugänglicher Blog, der statische Seiten bereitstellt. Interaktive Komponenten umfassen Benutzerkommentare, ein Kontaktformular, Analysetools und eine Karten-Einbettung.
- Version: 1.0
- Letzte Aktualisierung: 2026-04-13

![Diagramm, das Komponenten, Vermögenswerte, Datenflüsse und Vertrauensgrenzen für dieses Beispiel eines Bedrohungsmodells zeigt.](diagram.svg)

## 1. Woran arbeiten wir?

### Annahmen und Umfang

Dieses Bedrohungsmodell deckt die Blog-Website selbst ab, einschließlich Benutzerinteraktion und Backend-Dienste.

Bedrohungen, die sich auf die folgenden Ebenen richten, werden als grundlegender Schutz angenommen, sind jedoch **außerhalb des Geltungsbereichs** und werden hier nur modelliert, wenn sie dieses Projekt direkt betreffen:

- Webbrowser und Webplattform
- Betriebssystem
- Infrastruktur des Hosting-Anbieters

### Vertrauensgrenzen

Dieses Bedrohungsmodell nimmt eine [Vertrauensgrenze](/de/docs/Web/Security/Threat_modeling#data_flows_and_trust_boundaries) an zwischen:

- Dem Browser des Benutzers und dem Server
- Erster-Serverkomponenten und Drittanbieter-Skripten

Bedrohungen treten am wahrscheinlichsten dort auf, wo Daten diese Grenzen überschreiten.

### Komponenten

| ID  | Komponente               | Beschreibung                                                |
| --- | ------------------------ | ----------------------------------------------------------- |
| C1  | Server mit Blogsoftware  | Empfängt und verarbeitet Anfragen, liefert statische Seiten |
| C2  | Authentifizierungssystem | Verarbeitet Benutzereinlog und -sitzungen                   |
| C3  | Kommentarsystem          | Speichert und zeigt benutzergenerierte Inhalte an           |
| C4  | Kontaktformular          | Ermöglicht Benutzern das Senden von E-Mails                 |
| C5  | Drittanbieter-Skripte    | Analysen und eingebettete Karte                             |

### Vermögenswerte

| ID  | Vermögenswert              | Beschreibung                                                                    |
| --- | -------------------------- | ------------------------------------------------------------------------------- |
| A1  | Benutzeranmeldedaten       | Passwörter und Zugangsdaten                                                     |
| A2  | Sitzungsinformationen      | Cookies                                                                         |
| A3  | Persönliche Daten          | E-Mail-Adressen, Benutzernamen, persönlich identifizierbare Informationen (PII) |
| A4  | Benutzergenerierte Inhalte | Blog-Kommentare                                                                 |
| A5  | Entwurfsinhalte            | Unveröffentlichte Blog-Posts                                                    |

### Datenflüsse

| ID  | Fluss                   | Beschreibung                                   |
| --- | ----------------------- | ---------------------------------------------- |
| F1  | Authentifizierungsfluss | Benutzer-Login und Sitzungsaufbau              |
| F2  | Kommentarübermittlung   | Benutzer übermittelt Inhalte an den Server     |
| F3  | Seitenrendering         | Server liefert HTML an Browser                 |
| F4  | Kontaktformular         | Nachrichtenübermittlung an Administratoren     |
| F5  | Analysefluss            | Seitennutzungen verfolgen                      |
| F6  | Karteneinbettung        | Seite lädt externe Daten für interaktive Karte |

### Externe Abhängigkeiten

| ID  | Abhängigkeit          | Hinweise                                                                                                                                                      |
| --- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E1  | Webbrowser            | Angenommen, dass die üblichen Sicherheitsmechanismen (z.B. gleiche Ursprungsrichtlinie) durchgesetzt werden und keine bösartigen WebExtensions vorhanden sind |
| E2  | Hosting-Anbieter      | Angenommen, dass Schutzmaßnahmen wie DDoS-Schutz bereitgestellt werden                                                                                        |
| E3  | Drittanbieter-Skripte | Von externen Ursprüngen geladen                                                                                                                               |

### Stakeholder

| ID  | Stakeholder                | Interessen / Potenzieller Schaden         |
| --- | -------------------------- | ----------------------------------------- |
| S1  | Anonyme Benutzer           | Datenschutz, Sicherheit, Inhaltintegrität |
| S2  | Registrierte Benutzer      | Kontosicherheit, Datenschutz              |
| S3  | Benutzer mit Behinderungen | Gleicher Zugang                           |
| S4  | Blog-Administratoren       | Systemintegrität und Verfügbarkeit        |
| S5  | Blog-Entwickler            | Frühzeitige Behebung von Fehlern          |
| S6  | Geschäftsinhaber           | Schutz des Markenrufs                     |

## 2. Was kann schiefgehen?

### Identifizierte Bedrohungen

| ID  | Bedrohung                  | Betroffene Elemente | Beschreibung                                                                                |
| --- | -------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| T1  | Cross-Site Scripting (XSS) | C3, A4, S1          | Bösartige Kommentare injizieren JavaScript, das im Browser anderer Benutzer ausgeführt wird |
| T2  | Kontoübernahme             | C2, A1, A2, A3, S2  | Gestohlene Zugangsdaten oder Sitzungen                                                      |
| T3  | Spam und Missbrauch        | C3, C4, S4          | Automatisierter Spam                                                                        |
| T4  | Datenleck                  | A3, A5, S2          | Sensible Daten werden durch Fehlkonfiguration offengelegt                                   |
| T5  | Dienstverweigerung         | C1, S4, S5          | Übermäßige Anfragen überlasten den Server                                                   |

## 3. Was werden wir dagegen unternehmen?

### Bedrohungsreaktionen

| Bedrohung | Reaktions-ID | Strategie   | Beschreibung                                               |
| --------- | ------------ | ----------- | ---------------------------------------------------------- |
| T1        | R1           | Reduzieren  | Benutzergenerierte Inhalte bereinigen                      |
| T1        | R2           | Reduzieren  | Eine strenge Content-Security-Policy anwenden              |
| T1        | R3           | Reduzieren  | Template-Engine kodiert Ausgabe                            |
| T2        | R4           | Reduzieren  | CSRF-Abwehr implementieren                                 |
| T2        | R5           | Reduzieren  | Verwendung `Secure`, `HttpOnly`, `SameSite=Strict` Cookies |
| T2        | R6           | Reduzieren  | Sitzung endet nach 30 Tagen Inaktivität                    |
| T3        | R7           | Reduzieren  | Ratenbegrenzung und Spamfilterung anwenden                 |
| T3        | R8           | Akzeptieren | Manuelle Moderation von restlichem Spam                    |
| T4        | R9           | Reduzieren  | Datenausstellung begrenzen und Logs überprüfen             |
| T5        | R10          | Reduzieren  | Anfragelimits und Zeitüberschreitungen anwenden            |

## 4. Haben wir gute Arbeit geleistet?

### Überprüfungsstatus

- Alle identifizierten Bedrohungen haben mindestens eine Reaktion.
- Keine hochwirksamen Bedrohungen sind derzeit unadressiert.
- Restliche Risiken (z.B. Spam) werden mit Überwachung akzeptiert.

### Folgeaktionen

- Überarbeitung dieses Bedrohungsmodells nach:
  - Wesentlichen Funktionsänderungen
  - Neuen Drittanbieter-Abhängigkeiten
  - Sicherheitsvorfällen
- Überprüfung mindestens einmal pro Jahr.

### Anmerkungen

Dieses Modell ist unvollständig. Bedrohungsmodelle entwickeln sich weiter, während sich die Website und Sicherheitsanfälligkeiten weiter entwickeln. Der Zweck eines Bedrohungsmodells besteht darin, das gemeinsame Verständnis zu verbessern und Sicherheitsentscheidungen zu leiten, nicht um die Abwesenheit von Schwachstellen zu garantieren.

## Siehe auch

- [Bedrohungsmodell-Leitfaden](/de/docs/Web/Security/Threat_modeling)
- [Bedrohungsmodell für die Web-Plattform](https://w3c.github.io/threat-model-web/)
