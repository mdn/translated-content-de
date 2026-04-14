---
title: Bedrohungsmodellierungs-Frameworks und -Tools
slug: Web/Security/Threat_modeling/Frameworks
l10n:
  sourceCommit: 254daa6717e1d162f9fff51a0c49162c798f9bb0
---

Bedrohungsmodellierung ist ein Prozess, der Entwicklern helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen.

Der [Leitfaden zur Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling) beschreibt, wie Sie die Bedrohungsmodellierung durchführen können. Er bietet einen leichtgewichtigen Überblick über den Bedrohungsmodellierungsprozess, der sich auf die vier zentralen Fragen konzentriert, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert sind.

Dieser Artikel beschreibt die [STRIDE](#stride)- und [LINDDUN](#linddun)-Frameworks, die Struktur für Bedrohungsmodellierungsprozesse bieten, zusammen mit zusätzlichen Ressourcen.

## Frameworks

Es existieren Frameworks und Techniken, die Ihnen helfen können, Bedrohungen aus verschiedenen Perspektiven zu betrachten. Sie helfen Ihnen, strukturierte Antworten auf die [vier Fragen zur Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling#1._what_are_we_working_on) zu finden, insbesondere auf die zentrale Frage "Was kann schiefgehen?". Sie tun dies, indem sie Bedrohungskategorien anbieten.

Sie können diese Kategorien in Ihrem Bedrohungsmodell referenzieren (zum Beispiel, "STRIDE: Manipulation"), um anzuzeigen, dass Sie über eine bekannte Bedrohungskategorie nachgedacht haben.

Zwei beliebte Bedrohungsanalysemethoden sind [STRIDE](#stride), das sich auf Sicherheit konzentriert, und [LINDDUN](#linddun), das sich auf Datenschutz konzentriert.

### STRIDE

Das [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model)-Framework ist eine weithin anerkannte Methode der Bedrohungsmodellierung, die von Microsoft entwickelt wurde. Jeder Buchstabe im STRIDE-Akronym steht für eine der sechs Sicherheitsbedrohungskategorien. Innerhalb jeder Kategorie haben wir relevante Fragen eingefügt, die Sie in Ihr Bedrohungsmodell aufnehmen können.

- **Spoofing**
  - : Sich als ein anderer Benutzer oder ein anderes System ausgeben, um unbefugten Zugriff zu erlangen, wie beispielsweise ein Angreifer, der eine gefälschte Anmeldeschnittstelle benutzt, um Benutzeranmeldedaten zu stehlen.
    - Sind Cookies vor Diebstahl oder Wiederverwendung geschützt?
    - Könnte ein Angreifer alte Anmeldedaten oder Sitzungen wiederverwenden?
- **Tampering**
  - : Unbefugte Änderung von Daten oder Systemen, wie zum Beispiel das Ändern eines versteckten Eingabefeldes in einem Checkout-Formular.
    - Ist alles mit HTTPS verschlüsselt?
    - Können Benutzer Anforderungsparameter, Header oder API-Daten ändern?
- **Repudiation**
  - : Das Behaupten, eine Handlung nicht durchgeführt zu haben, wie zum Beispiel das Löschen von Daten durch einen Benutzer ohne einen Löschprotokoll.
    - Protokollieren wir sicherheitsrelevante Ereignisse wie Anmeldeausfälle?
    - Können wir Aktionen auf einen bestimmten Benutzer zurückverfolgen?
- **Information disclosure**
  - : Unbefugte Offenlegung von vertraulichen Informationen, wie das Pushen sensibler Umgebungswerte in die Produktion.
    - Werden personenbezogene Daten über URL-Query-Strings offengelegt?
    - Werden geheime Anmeldedaten dem Client offengelegt?
    - Werden private Produktionsdaten in einer Testumgebung offengelegt?
- **Denial of Service (DoS)**
  - : Unterbrechen von Diensten, um sie unzugänglich zu machen, wie zum Beispiel clientseitige Endlosschleifen, die den Browser einfrieren können, oder unendliche Anfragen, die den Server überlasten können.
    - Können große Uploads oder umfangreiche Datenbankabfragen durch Benutzer ausgelöst werden?
    - Können API-Endpunkte wiederholt ohne Einschränkungen aufgerufen werden?
- **Elevation of privilege**
  - : Erlangen höherer Zugangsrechte als erlaubt, wie zum Beispiel ein Benutzer, der sich als Administrator ausgibt.
    - Können Benutzer URL-Endpunkte für Administratoren erraten?
    - Wann werden Berechtigungsüberprüfungen durchgeführt?

### LINDDUN

Das [LINDDUN](https://linddun.org)-Framework ist ein weithin anerkanntes Bedrohungsmodellierungs-Framework, inspiriert von STRIDE, das sich auf Datenschutzbedrohungen konzentriert. Jeder Buchstabe im LINDDUN-Akronym steht für eine der sieben Kategorien von Datenschutzbedrohungen. Innerhalb jeder Kategorie des Bedrohungsmodells haben wir Fragen eingefügt, die Sie in Ihr Bedrohungsmodell aufnehmen können, die für die aufgeführte Kategorie relevant sind.

- **Linking**
  - : Die Fähigkeit, Daten oder Aktionen einer Einzelperson oder Gruppe zuzuordnen.
    - Können Dritte das Verhalten von Benutzern über Websites hinweg verfolgen?
- **Identifying**
  - : Die Identität einer Person herausfinden.
    - Sind Pseudonyme oder Benutzer-IDs wirklich nicht identifizierend?
    - Könnten Identitäten durch Kombination öffentlich verfügbarer Daten aufgedeckt werden?
- **Non-repudiation**
  - : Die Fähigkeit, einen Anspruch (oder eine Aktion) einer Einzelperson zuordnen zu können.
    - Können Benutzer Aktionen ohne dauerhafte Aufzeichnungen ausführen?
    - Werden Protokolle länger als notwendig aufbewahrt?
- **Detecting**
  - : Das Feststellen der Beteiligung einer Person basierend auf Beobachtung.
    - Erkennt der Anmeldevorgang, ob ein Benutzer existiert?
    - Gibt das System Informationen preis, wenn ein Administrator online ist?
- **Data disclosure**
  - : Sammlung von mehr Informationen als erforderlich, Speichern, Verarbeiten oder Teilen von personenbezogenen Daten.
    - Sind Backups, Protokolle oder Exporte geschützt?
    - Empfangen Analysen oder andere Metriken-Einbindungen personenbezogene Daten?
- **Unawareness**
  - : Unzureichende Information, Einbeziehung oder Ermächtigung von Individuen bei der Verarbeitung personenbezogener Daten.
    - Verstehen die Benutzer Opt-In- oder Opt-Out-Dialoge?
    - Verstehen die Benutzer, welche Daten gesammelt und warum gesammelt werden?
- **Non-compliance**
  - : Abweichen von Sicherheits- und Datenmanagement-Best Practices, Standards und Gesetzgebung.
    - Können Benutzer die Löschung oder den Export ihrer Daten anfordern?
    - Sind Drittanbieter-Dienste mit Ihren Richtlinien konform?

## Weitere Ressourcen

Die folgenden Dokumente listen eine breite und vielfältige Reihe von Bedrohungen und Bedrohungsmodellen auf, die Sie berücksichtigen sollten:

- [RFC 9620 Menschenrechtsüberlegungen](https://datatracker.ietf.org/doc/rfc9620/)
- [W3C TAG: Ethische Web-Prinzipien](https://w3ctag.github.io/ethical-web-principles/)
- [W3C Selbstüberprüfungs-Fragebogen: Sicherheit und Datenschutz](https://www.w3.org/TR/security-privacy-questionnaire/#missing-questions)
- [RFC 6973 Datenschutzüberlegungen für Internetprotokolle](https://datatracker.ietf.org/doc/html/rfc6973)
- [RFC 3552 Richtlinien für das Schreiben von RFC-Texten zu Sicherheitsüberlegungen](https://datatracker.ietf.org/doc/html/rfc3552)
- [Invariant-zentrierte Bedrohungsmodellierung](https://github.com/defuse/ictm)

## Bedrohungsmodellierungs-Tools

Ein effektives Modell ist eines, das hilft, ein besseres Verständnis Ihres Systems zu entwickeln. Bedrohungsmodellierungs-Tools können es einfacher machen, Diagramme zu erstellen, Datenflüsse zu visualisieren und so weiter, die zu diesem Ziel beitragen.

Es ist wichtig zu beachten, dass Sie keine teuren und leistungsstarken Tools benötigen, um ein effektives Bedrohungsmodell zu erstellen. Wichtig ist der methodische Ansatz und die Diskussion über Ihr System. Zu komplexe Diagramme können tatsächlich nachteilig sein, wenn sie diese Diskussion nicht fördern und unterstützen.

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## Siehe auch

- [Leitfaden zur Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling)
- [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Bedrohungsmodellierungs-Leitfaden für Spezifikationsautoren](https://w3c.github.io/threat-modeling-guide/)
- [Bedrohungsmodell für die Web-Plattform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Bedrohungsmodellierungs-Spickzettel](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
