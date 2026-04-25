---
title: Bedrohungsmodellierungs-Frameworks und -Tools
slug: Web/Security/Threat_modeling/Frameworks
l10n:
  sourceCommit: ef78a9a3336c884fb3587e4ff833e64704296f01
---

Bedrohungsmodellierung ist ein Prozess, der Entwicklern helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen.

Der [Leitfaden zur Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling) beschreibt, wie man die Bedrohungsmodellierung durchführt. Er bietet eine vereinfachte Übersicht über den Bedrohungsmodellierungsprozess und konzentriert sich auf die vier Schlüsselfragen, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert sind.

Dieser Artikel beschreibt die [STRIDE](#stride)- und [LINDDUN](#linddun)-Frameworks, die Struktur für Bedrohungsmodellierungsprozesse bieten, zusammen mit zusätzlichen Ressourcen.

## Frameworks

Frameworks und Techniken existieren, die Ihnen helfen können, Bedrohungen aus verschiedenen Perspektiven zu betrachten. Sie können Ihnen helfen, strukturierte Antworten auf die [vier Fragen der Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling#1._what_are_we_working_on) zu finden, insbesondere auf die Schlüsselfrage „Was kann schiefgehen“. Dies geschieht durch das Anbieten von Bedrohungskategorien.

Sie können auf diese Kategorien in Ihrem Bedrohungsmodell verweisen (zum Beispiel „STRIDE: Manipulation“), um anzugeben, dass Sie über eine bekannte Kategorie des Bedrohungsmodells nachgedacht haben.

Zwei beliebte Bedrohungsanalyse-Frameworks sind [STRIDE](#stride), das sich auf Sicherheit konzentriert, und [LINDDUN](#linddun), das sich auf Datenschutz fokussiert.

### STRIDE

Das [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model)-Framework ist eine weithin anerkannte Methode zur Bedrohungsmodellierung, die von Microsoft entwickelt wurde. Jeder Buchstabe im STRIDE-Akronym steht für eine der sechs Kategorien von Sicherheitsbedrohungen. Innerhalb jeder Kategorie haben wir relevante Fragen aufgenommen, die Sie in Ihr Bedrohungsmodell einbeziehen können.

- **Spoofing** (Täuschung)
  - : Die Nachahmung eines anderen Benutzers oder Systems, um unbefugten Zugriff zu erlangen, wie zum Beispiel ein Angreifer, der eine Anmeldeschnittstelle vortäuscht, um Benutzeranmeldedaten zu stehlen.
    - Sind Cookies vor Diebstahl oder Wiederverwendung geschützt?
    - Könnte ein Angreifer alte Anmeldedaten oder Sitzungen wiederverwenden?
- **Tampering** (Manipulation)
  - : Unbefugte Änderung von Daten oder Systemen, wie das Ändern eines versteckten Eingabefeldes in einem Bestellformular.
    - Ist alles mit HTTPS verschlüsselt?
    - Können Benutzer Anfrageparameter, -header, API-Nutzlasten ändern?
- **Repudiation** (Abstreitbarkeit)
  - : Die Behauptung, eine Aktion nicht ausgeführt zu haben, wie bei einem Benutzer, der Daten löscht und kein Löschprotokoll hinterlässt.
    - Protokollieren wir sicherheitsrelevante Ereignisse wie Anmeldeausfälle?
    - Können wir Aktionen zu einem bestimmten Benutzer zurückverfolgen?
- **Information disclosure** (Informationsoffenlegung)
  - : Unbefugte Offenlegung vertraulicher Informationen, wie das in Produktion drücken sensibler Umweltwerte.
    - Werden persönliche Daten über URL-Abfragezeichenfolgen offengelegt?
    - Werden geheime Anmeldedaten dem Client offengelegt?
    - Werden private Produktionsdaten in einer Testumgebung offengelegt?
- **Denial of Service (DoS)** (Dienstverweigerung)
  - : Störung von Diensten, um sie unzugänglich zu machen, wie beispielsweise durch Endlosschleifen auf der Client-Seite, die den Browser einfrieren können, oder unendliche Anfragen, die den Server überlasten.
    - Können große Uploads oder schwere Datenbankabfragen von Benutzern ausgelöst werden?
    - Können API-Endpunkte wiederholt ohne Einschränkungen aufgerufen werden?
- **Elevation of privilege** (Rechteerweiterung)
  - : Erlangen höherer Zugriffsrechte als erlaubt, wie ein Benutzer, der sich als Admin ausgibt.
    - Können Benutzer Admin-Endpunkt-URLs erraten?
    - Wann werden Rechteprüfungen durchgeführt?

### LINDDUN

Das [LINDDUN](https://linddun.org)-Framework ist ein weithin anerkanntes Framework zur Bedrohungsmodellierung, inspiriert von STRIDE, das sich auf Datenschutzbedrohungen konzentriert. Jeder Buchstabe im LINDDUN-Akronym steht für eine der sieben Kategorien von Datenschutzbedrohungen. Innerhalb jeder Bedrohungsmodellkategorie haben wir Fragen aufgenommen, die Sie in Ihr Bedrohungsmodell einbeziehen können, die für die aufgelistete Kategorie relevant sind.

- **Linking**
  - : Die Fähigkeit, Daten oder Aktionen einer Person oder Gruppe zuzuordnen.
    - Können Dritte das Verhalten von Benutzern über Websites hinweg verfolgen?
- **Identifying** (Identifikation)
  - : Die Identität einer Person zu erfahren.
    - Sind Pseudonyme oder Benutzer-IDs wirklich nicht identifizierend?
    - Könnten Identitäten durch die Kombination öffentlich zugänglicher Daten aufgedeckt werden?
- **Non-repudiation** (Nichtabstreitbarkeit)
  - : Die Möglichkeit, eine Behauptung (oder Aktion) einer Person zuzuordnen.
    - Können Benutzer Aktionen ohne dauerhafte Aufzeichnungen ausführen?
    - Werden Protokolle länger als nötig aufbewahrt?
- **Detecting** (Erkennung)
  - : Das Bestimmen der Beteiligung einer Person basierend auf Beobachtung.
    - Zeigt das Login, ob ein Benutzer existiert?
    - Leckt das System Informationen, wenn ein Administrator online ist?
- **Data disclosure** (Datenoffenlegung)
  - : Erheben, Speichern, Verarbeiten oder Weitergeben von mehr Informationen als nötig, einschließlich personenbezogener Daten.
    - Sind Backups, Protokolle oder Exporte geschützt?
    - Erhalten Analysen oder andere Metrik-Erfassungen personenbezogene Daten?
- **Unawareness** (Unkenntnis)
  - : Unzureichende Information, Beteiligung oder Befähigung von Personen bei der Verarbeitung personenbezogener Daten.
    - Verstehen Benutzer Opt-in- oder Opt-out-Dialogfelder?
    - Verstehen Benutzer, welche Daten gesammelt werden und warum?
- **Non-compliance** (Nichteinhaltung)
  - : Abweichung von Sicherheits- und Datenmanagement-Best Practices, Standards und Gesetzen.
    - Können Benutzer die Löschung oder den Export ihrer Daten anfordern?
    - Sind Drittanbieterdienste mit Ihren Richtlinien konform?

## Weitere Ressourcen

Die folgenden Dokumente listen eine breite und vielfältige Auswahl an Bedrohungen und Bedrohungsmodellen zur Ihrer Berücksichtigung auf:

- [RFC 9620 Human Rights Considerations](https://datatracker.ietf.org/doc/rfc9620/)
- [W3C TAG: Ethical Web Principles](https://w3ctag.github.io/ethical-web-principles/)
- [W3C Self-Review Questionnaire: Security and Privacy](https://www.w3.org/TR/security-privacy-questionnaire/#missing-questions)
- [RFC 6973 Privacy Considerations for Internet Protocols](https://datatracker.ietf.org/doc/html/rfc6973)
- [RFC 3552 Guidelines for Writing RFC Text on Security Considerations](https://datatracker.ietf.org/doc/html/rfc3552)
- [Invariant-centric threat modeling](https://github.com/defuse/ictm)

## Bedrohungsmodellierungs-Tools

Ein effektives Modell ist eines, das dabei hilft, ein besseres Verständnis Ihres Systems zu entwickeln. Bedrohungsmodellierungs-Tools können es einfacher machen, Diagramme zu erstellen, Datenflüsse zu visualisieren und so weiter, die zu diesem Ziel beitragen.

Es ist wichtig zu beachten, dass Sie keine teuren und leistungsstarken Tools benötigen, um ein effektives Bedrohungsmodell zu erstellen. Wichtig ist der methodische Ansatz und die Diskussion über Ihr System. Übermäßig komplexe Diagramme können tatsächlich nachteilig sein, wenn sie diese Diskussion nicht fördern und unterstützen.

- [OWASP Threat Dragon](https://owasp.org/www-project-threat-dragon/)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## Siehe auch

- [Leitfaden zur Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling)
- [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Threat Modeling Guide für Spezifikationsautoren](https://w3c.github.io/threat-modeling-guide/)
- [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
