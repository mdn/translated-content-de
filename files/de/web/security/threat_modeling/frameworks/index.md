---
title: Bedrohungsmodellierungs-Frameworks und -Tools
slug: Web/Security/Threat_modeling/Frameworks
l10n:
  sourceCommit: f7740136226ddfb686dede1dc291660c5729d17d
---

Die Bedrohungsmodellierung ist ein Prozess, der Entwicklern helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen.

Der [Bedrohungsmodellierungs-Leitfaden](/de/docs/Web/Security/Threat_modeling) beschreibt, wie man Bedrohungsmodellierung durchführt. Er bietet einen Überblick über den Bedrohungsmodellierungsprozess und konzentriert sich auf die vier Schlüsselfragen, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert wurden.

Dieser Artikel beschreibt die Frameworks [STRIDE](#stride) und [LINDDUN](#linddun), die Struktur für Bedrohungsmodellierungsprozesse bieten, zusammen mit zusätzlichen Ressourcen.

## Frameworks

Es existieren Frameworks und Techniken, die Ihnen helfen können, Bedrohungen aus unterschiedlichen Perspektiven zu betrachten. Sie können Ihnen helfen, strukturierte Antworten auf die [vier Bedrohungsmodellierungsfragen](/de/docs/Web/Security/Threat_modeling#1._what_are_we_working_on) zu finden, insbesondere auf die Schlüsselfrage "Was kann schiefgehen". Dies tun sie, indem sie Bedrohungskategorien anbieten.

Sie können diese Kategorien in Ihrem Bedrohungsmodell referenzieren (zum Beispiel "STRIDE: Manipulation"), um anzuzeigen, dass Sie über eine bekannte Bedrohungsframework-Kategorie nachgedacht haben.

Zwei beliebte Bedrohungsanalyse-Frameworks sind [STRIDE](#stride), das sich auf Sicherheit konzentriert, und [LINDDUN](#linddun), das sich auf Datenschutz konzentriert.

### STRIDE

Das [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model) Framework ist eine weithin anerkannte Methode der Bedrohungsmodellierung, die von Microsoft entwickelt wurde. Jeder Buchstabe im STRIDE-Akronym steht für eine der sechs Sicherheitsbedrohungskategorien. Innerhalb jeder Kategorie haben wir relevante Fragen aufgenommen, die Sie in Ihr Bedrohungsmodell einbeziehen können.

- **Spoofing**
  - : Imitieren eines anderen Nutzers oder Systems, um unbefugten Zugang zu erhalten, wie ein Angreifer, der eine gefälschte Anmeldeoberfläche erstellt, um Benutzeranmeldeinformationen zu stehlen.
    - Sind Cookies vor Diebstahl oder Missbrauch geschützt?
    - Könnte ein Angreifer alte Anmeldeinformationen oder Sitzungen wiederverwenden?
- **Manipulation**
  - : Unbefugte Änderung von Daten oder Systemen, wie das Ändern eines versteckten Eingabefeldes in einem Checkout-Formular.
    - Ist alles mit HTTPS verschlüsselt?
    - Können Benutzer Anfrageparameter, Header, API-Daten ändern?
- **Nichtabstreitbarkeit**
  - : Behaupten, eine Aktion nicht ausgeführt zu haben, wie ein Benutzer, der Daten löscht und keine Löschprotokollierung vorliegt.
    - Protokollieren wir sicherheitsrelevante Ereignisse wie fehlgeschlagene Anmeldungen?
    - Können wir Aktionen einem bestimmten Benutzer zuordnen?
- **Informationsoffenlegung**
  - : Unbefugte Offenlegung vertraulicher Informationen, wie das Übertragen sensibler Umgebungswerte in die Produktion.
    - Werden persönliche Daten über URL-Abfragezeichenfolgen offengelegt?
    - Werden geheime Anmeldeinformationen dem Client offengelegt?
    - Werden private Produktionsdaten in einer Testumgebung offengelegt?
- **Denial of Service (DoS)**
  - : Stören von Diensten, um sie unzugänglich zu machen, wie clientseitige Endlosschleifen, die den Browser einfrieren können, oder unendliche Anfragen, die den Server überlasten können.
    - Können große Uploads oder schwere Datenbankabfragen von Benutzern ausgelöst werden?
    - Können API-Endpunkte wiederholt ohne Begrenzung aufgerufen werden?
- **Rechteerweiterung**
  - : Erlangen höherer Zugriffsrechte als erlaubt, wie ein Benutzer, der sich als Administrator ausgibt.
    - Können Benutzer Admin-Endpunkt-URLs erraten?
    - Wann werden Rechteüberprüfungen durchgeführt?

### LINDDUN

Das [LINDDUN](https://linddun.org) Framework ist ein weithin anerkanntes Bedrohungsmodellierungs-Framework, inspiriert von STRIDE, das sich auf Bedrohungen des Datenschutzes konzentriert. Jeder Buchstabe im LINDDUN-Akronym steht für eine der sieben Kategorien von Datenschutzbedrohungen. Innerhalb jeder Bedrohungsmodellkategorie haben wir Fragen aufgenommen, die Sie in Ihr Bedrohungsmodell einbeziehen können, die für die aufgeführte Kategorie relevant sind. Für eine ausführlichere Diskussion konsultieren Sie den Artikel [Datenschutzbedrohungsmodellierung](/de/docs/Web/Privacy/Threat_modeling).

- **Verknüpfung**
  - : Die Fähigkeit, Daten oder Aktionen mit einer Einzelperson oder Gruppe zu verknüpfen.
    - Können Drittparteien das Verhalten von Benutzern über Websites hinweg verfolgen?
- **Identifikation**
  - : Die Identität einer Person herausfinden.
    - Sind Pseudonyme oder Benutzer-IDs wirklich nicht identifizierend?
    - Könnten Identitäten durch die Kombination öffentlich verfügbarer Daten aufgedeckt werden?
- **Nichtabstreitbarkeit**
  - : Die Fähigkeit, eine Behauptung (oder Aktion) einer Person zuzuordnen.
    - Können Benutzer Aktionen ausführen, ohne dauerhafte Aufzeichnungen zu erstellen?
    - Werden Protokolle länger als nötig aufbewahrt?
- **Erkennung**
  - : Feststellen der Beteiligung einer Person aufgrund von Beobachtungen.
    - Zeigt der Login an, ob ein Benutzer existiert?
    - Leakt das System Informationen, wenn ein Administrator online ist?
- **Datenschutzverletzung**
  - : Sammlung von mehr Informationen als nötig, Speicherung, Verarbeitung oder Weitergabe persönlicher Daten.
    - Sind Backups, Protokolle oder Exporte geschützt?
    - Empfangen Analysen oder andere Metrik-Erfassungen persönliche Daten?
- **Unkenntnis**
  - : Unzureichende Information, Einbindung oder Befähigung von Einzelpersonen bei der Verarbeitung persönlicher Daten.
    - Verstehen Benutzer Opt-in- oder Opt-out-Dialoge?
    - Verstehen Benutzer, welche Daten gesammelt werden und warum?
- **Nichtkonformität**
  - : Abweichung von Sicherheits- und Datenmanagement-Best-Practices, Standards und Gesetzen.
    - Können Benutzer die Löschung oder den Export ihrer Daten anfordern?
    - Sind Drittanbieterdienste konform mit Ihren Richtlinien?

## Weitere Ressourcen

Die folgenden Dokumente listen eine breite und vielfältige Auswahl an Bedrohungen und Bedrohungsmodellen zu Ihrer Überlegung auf:

- [RFC 9620 Menschenrechtsüberlegungen](https://datatracker.ietf.org/doc/rfc9620/)
- [W3C TAG: Ethische Web-Prinzipien](https://w3ctag.github.io/ethical-web-principles/)
- [W3C Selbstüberprüfungs-Fragebogen: Sicherheit und Datenschutz](https://w3c.github.io/security-questionnaire/)
- [RFC 6973 Überlegungen zum Datenschutz für Internetprotokolle](https://datatracker.ietf.org/doc/html/rfc6973)
- [RFC 3552 Richtlinien zum Schreiben von RFC-Texten über Sicherheitsüberlegungen](https://datatracker.ietf.org/doc/html/rfc3552)
- [Invarianz-zentrierte Bedrohungsmodellierung](https://github.com/defuse/ictm)

## Bedrohungsmodellierungstools

Ein effektives Modell ist eines, das ein besseres Verständnis Ihres Systems fördert. Bedrohungsmodellierungstools können es einfacher machen, Diagramme zu erstellen, Datenflüsse zu visualisieren usw., die zu diesem Ziel beitragen.

Es ist wichtig zu beachten, dass Sie keine teuren und leistungsstarken Werkzeuge benötigen, um ein effektives Bedrohungsmodell zu erstellen. Wichtig ist ein methodischer Ansatz und die Diskussion über Ihr System. Übermäßig komplexe Diagramme können tatsächlich nachteilig sein, wenn sie diese Diskussion nicht fördern und unterstützen.

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## Siehe auch

- [Leitfaden zur Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling)
- [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Leitfaden zur Bedrohungsmodellierung für Spezifikationsautoren](https://w3c.github.io/threat-modeling-guide/)
- [Bedrohungsmodell für die Web-Plattform](https://w3c.github.io/threat-model-web/)
- [OWASP Bedrohungsmodellierung-Handbuch](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Bedrohungsmodellierung Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
