---
title: Bedrohungsmodellierungs-Frameworks und -Tools
slug: Web/Security/Threat_modeling/Frameworks
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

Die Bedrohungsmodellierung ist ein Prozess, der Entwicklern helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen.

Der [Bedrohungsmodellierungs-Leitfaden](/de/docs/Web/Security/Threat_modeling) beschreibt, wie man Bedrohungsmodellierung durchführt. Er bietet einen leichtgewichtigen Überblick über den Bedrohungsmodellierungsprozess, indem er sich auf die vier wesentlichen Fragen konzentriert, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert sind.

Dieser Artikel beschreibt die [STRIDE](#stride) und [LINDDUN](#linddun) Frameworks, die eine Struktur für Bedrohungsmodellierungsprozesse bieten, zusammen mit zusätzlichen Ressourcen.

## Frameworks

Es gibt Frameworks und Techniken, die Ihnen helfen können, Bedrohungen aus unterschiedlichen Perspektiven zu betrachten. Sie können Ihnen helfen, strukturierte Antworten auf die [vier Bedrohungsmodellierungsfragen](/de/docs/Web/Security/Threat_modeling#1._what_are_we_working_on) zu finden, insbesondere auf die zentrale Frage "Was kann schief gehen". Dies geschieht, indem sie Bedrohungskategorien anbieten.

Sie können diese Kategorien in Ihrem Bedrohungsmodell referenzieren (zum Beispiel "STRIDE: Tampering"), um anzugeben, dass Sie über eine bekannte Kategorie des Bedrohungsframeworks nachgedacht haben.

Zwei beliebte Bedrohungsanalyse-Frameworks sind [STRIDE](#stride), das sich auf Sicherheit konzentriert, und [LINDDUN](#linddun), das sich auf Datenschutz konzentriert.

### STRIDE

Das [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model) Framework ist eine weithin anerkannte Bedrohungsmodellierungsmethode, die von Microsoft entwickelt wurde. Jedes Buchstabe im STRIDE-Akronym steht für eine der sechs Sicherheitsbedrohungskategorien. Innerhalb jeder Kategorie haben wir relevante Fragen einbezogen, die Sie in Ihrem Bedrohungsmodell einbeziehen können.

- **Spoofing**
  - : Vortäuschung eines anderen Benutzers oder Systems, um unautorisierten Zugriff zu erlangen, wie zum Beispiel ein Angreifer, der eine Login-Benutzeroberfläche vortäuscht, um Benutzeranmeldeinformationen zu stehlen.
    - Sind Cookies vor Diebstahl oder Wiederverwendung geschützt?
    - Könnte ein Angreifer alte Anmeldeinformationen oder Sitzungen wiederverwenden?
- **Tampering**
  - : Unautorisierte Änderung von Daten oder Systemen, wie zum Beispiel das Ändern eines versteckten Eingabefelds in einem Checkout-Formular.
    - Ist alles mit HTTPS verschlüsselt?
    - Können Benutzer Anforderungsparameter, Header, API-Nutzdaten ändern?
- **Repudiation**
  - : Behauptung, eine Handlung nicht ausgeführt zu haben, wie zum Beispiel das Löschen von Daten durch einen Benutzer ohne Löschungsprotokoll.
    - Protokollieren wir sicherheitsrelevante Ereignisse wie fehlgeschlagene Anmeldungen?
    - Können wir Aktionen auf einen bestimmten Benutzer zurückverfolgen?
- **Information disclosure**
  - : Unautorisierte Offenlegung vertraulicher Informationen, wie zum Beispiel das Pushen sensibler Umweltparameter in die Produktion.
    - Werden persönliche Daten über URL-Abfragezeichenfolgen offengelegt?
    - Werden geheime Anmeldeinformationen an den Client offengelegt?
    - Werden private Produktionsdaten in einer Testumgebung offengelegt?
- **Denial of Service (DoS)**
  - : Störung von Diensten, um sie unzugänglich zu machen, wie zum Beispiel clientseitige Endlosschleifen, die den Browser einfrieren können, oder unendliche Anfragen, die den Server überlasten können.
    - Können große Uploads oder schwere Datenbankabfragen von Benutzern ausgelöst werden?
    - Können API-Endpunkte wiederholt ohne Einschränkungen aufgerufen werden?
- **Elevation of privilege**
  - : Erlangen höherer Zugriffsrechte als erlaubt, wie zum Beispiel ein Benutzer, der sich als Administrator ausgibt.
    - Können Benutzer Admin-Endpunkt-URLs erraten?
    - Wann werden die Berechtigungsprüfungen durchgeführt?

### LINDDUN

Das [LINDDUN](https://linddun.org) Framework ist ein weithin anerkanntes Bedrohungsmodellierungs-Framework, inspiriert von STRIDE, das sich auf Datenschutzbedrohungen konzentriert. Jedes Buchstabe im LINDDUN-Akronym steht für eine der sieben Kategorien von Datenschutzbedrohungen. Innerhalb jeder Bedrohungsmodellkategorie haben wir Fragen einbezogen, die Sie in Ihrem Bedrohungsmodell für die aufgeführte Kategorie relevant sind.

- **Linking**
  - : Die Fähigkeit, Daten oder Aktionen mit einer Person oder Gruppe zu verknüpfen.
    - Können Dritte das Nutzerverhalten über Websites hinweg verfolgen?
- **Identifying**
  - : Die Identität einer Person herausfinden.
    - Sind Pseudonyme oder Benutzer-IDs wirklich nicht identifizierend?
    - Könnten Identitäten durch die Kombination öffentlich verfügbarer Daten aufgedeckt werden?
- **Non-repudiation**
  - : Die Fähigkeit, eine Behauptung (oder Handlung) einer Person zuzuschreiben oder zu verknüpfen.
    - Können Benutzer Aktionen durchführen, ohne dauerhafte Aufzeichnungen zu erstellen?
    - Werden Protokolle länger als nötig aufbewahrt?
- **Detecting**
  - : Die Beteiligung einer Person basierend auf Beobachtungen bestimmen.
    - Zeigt der Login, ob ein Benutzer existiert?
    - Leakt das System Informationen, wenn ein Administrator online ist?
- **Data disclosure**
  - : Mehr Informationen als nötig sammeln, speichern, verarbeiten oder teilen, persönliche Daten.
    - Sind Backups, Protokolle oder Exporte geschützt?
    - Empfängt die Analyse oder das Sammeln anderer Metrik-Einbindungen persönliche Daten?
- **Unawareness**
  - : Unzureichendes Informieren, Einbeziehen oder Ermächtigen von Personen in der Verarbeitung persönlicher Daten.
    - Verstehen Nutzer Opt-in oder Opt-out-Dialoge?
    - Verstehen Nutzer, welche Daten gesammelt werden und warum?
- **Non-compliance**
  - : Abweichung von bewährten Verfahren, Standards und Gesetzen für Sicherheit und Datenmanagement.
    - Können Nutzer die Löschung oder den Export ihrer Daten anfordern?
    - Sind Drittanbieterdienste mit Ihren Richtlinien konform?

## Weitere Ressourcen

Die folgenden Dokumente listen eine breite und diverse Menge von Bedrohungen und Bedrohungsmodellen zur Überlegung auf:

- [RFC 9620 Human Rights Considerations](https://datatracker.ietf.org/doc/rfc9620/)
- [W3C TAG: Ethical Web Principles](https://w3ctag.github.io/ethical-web-principles/)
- [W3C Self-Review Questionnaire: Security and Privacy](https://w3c.github.io/security-questionnaire/)
- [RFC 6973 Privacy Considerations for Internet Protocols](https://datatracker.ietf.org/doc/html/rfc6973)
- [RFC 3552 Guidelines for Writing RFC Text on Security Considerations](https://datatracker.ietf.org/doc/html/rfc3552)
- [Invariant-centric threat modeling](https://github.com/defuse/ictm)

## Bedrohungsmodellierungs-Tools

Ein effektives Modell ist eines, das hilft, ein besseres Verständnis Ihres Systems zu entwickeln.
Bedrohungsmodellierungs-Tools können es erleichtern, Diagramme zu erstellen, Datenflüsse zu visualisieren und so weiter, die zu diesem Ziel beitragen.

Es ist wichtig zu beachten, dass Sie keine teuren und leistungsstarken Tools benötigen, um ein effektives Bedrohungsmodell zu erstellen. Was wichtig ist, ist der methodische Ansatz und die Diskussion über Ihr System. Übermäßig komplexe Diagramme können tatsächlich schädlich sein, wenn sie diese Diskussion nicht fördern und unterstützen.

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## Siehe auch

- [Leitfaden zur Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling)
- [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Threat Modeling Guide for specification authors](https://w3c.github.io/threat-modeling-guide/)
- [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
