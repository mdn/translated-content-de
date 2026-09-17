---
title: Frameworks und Tools für Threat Modeling
slug: Web/Security/Threat_modeling/Frameworks
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Threat Modeling ist ein Prozess, der Entwicklern helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen.

Der [Leitfaden für Threat Modeling](/de/docs/Web/Security/Threat_modeling) beschreibt, wie Threat Modeling durchgeführt wird. Er bietet einen kompakten Überblick über den Threat-Modeling-Prozess und konzentriert sich auf die vier Schlüsselfragen, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert sind.

Dieser Artikel beschreibt die Frameworks [STRIDE](#stride) und [LINDDUN](#linddun), die Threat-Modeling-Prozessen Struktur verleihen, sowie zusätzliche Ressourcen.

## Frameworks

Es gibt Frameworks und Techniken, die Ihnen helfen können, über Bedrohungen aus verschiedenen Perspektiven nachzudenken. Sie können Ihnen helfen, strukturierte Antworten auf die [vier Fragen des Threat Modeling](/de/docs/Web/Security/Threat_modeling#1._what_are_we_working_on) zu erarbeiten, insbesondere auf die Schlüsselfrage „Was kann schiefgehen?“. Dazu bieten sie Bedrohungskategorien an.

Sie können diese Kategorien in Ihrem Threat Model referenzieren (zum Beispiel „STRIDE: Tampering“), um anzugeben, dass Sie eine bekannte Kategorie eines Bedrohungs-Frameworks berücksichtigt haben.

Zwei beliebte Frameworks zur Bedrohungsanalyse sind [STRIDE](#stride), das sich auf Sicherheit konzentriert, und [LINDDUN](#linddun), das sich auf Datenschutz konzentriert.

### STRIDE

Das [STRIDE](https://en.wikipedia.org/wiki/STRIDE_model)-Framework ist eine weithin anerkannte, von Microsoft entwickelte Methode für Threat Modeling. Jeder Buchstabe des Akronyms STRIDE steht für eine der sechs Kategorien von Sicherheitsbedrohungen. Für jede Kategorie haben wir relevante Fragen aufgenommen, die Sie in Ihr Threat Model einbeziehen können.

- **Spoofing**
  - : Die Identität eines anderen Benutzers oder Systems vortäuschen, um unbefugten Zugriff zu erhalten, etwa wenn ein Angreifer eine Anmelde-Benutzeroberfläche fälscht, um Benutzeranmeldedaten zu stehlen.
    - Sind Cookies vor Diebstahl oder Wiederverwendung geschützt?
    - Könnte ein Angreifer alte Anmeldedaten oder Sitzungen wiederverwenden?
- **Tampering**
  - : Unbefugte Veränderung von Daten oder Systemen, etwa das Ändern eines versteckten Eingabefelds in einem Bestellformular.
    - Ist alles mit HTTPS verschlüsselt?
    - Können Benutzer Anfrageparameter, Header oder API-Payloads verändern?
- **Repudiation**
  - : Behaupten, eine Aktion nicht ausgeführt zu haben, etwa wenn ein Benutzer Daten löscht und kein Prüfpfad für die Löschung vorhanden ist.
    - Protokollieren wir sicherheitsrelevante Ereignisse wie fehlgeschlagene Anmeldungen?
    - Können wir Aktionen zu einem bestimmten Benutzer zurückverfolgen?
- **Information disclosure**
  - : Unbefugte Offenlegung vertraulicher Informationen, etwa das Übertragen sensibler Umgebungswerte in die Produktionsumgebung.
    - Werden personenbezogene Daten über URL-Abfragezeichenfolgen offengelegt?
    - Werden geheime Anmeldedaten gegenüber dem Client offengelegt?
    - Werden private Produktionsdaten in einer Testumgebung offengelegt?
- **Denial of Service (DoS)**
  - : Dienste stören, um sie nicht verfügbar zu machen, etwa durch clientseitige Endlosschleifen, die den Browser einfrieren können, oder durch unendliche Anfragen, die den Server überlasten können.
    - Können Benutzer große Uploads oder aufwendige Datenbankabfragen auslösen?
    - Können API-Endpunkte ohne Begrenzung wiederholt aufgerufen werden?
- **Elevation of privilege**
  - : Höhere Zugriffsrechte als erlaubt erlangen, etwa wenn ein Benutzer sich als Administrator ausgibt.
    - Können Benutzer URLs von Administrator-Endpunkten erraten?
    - Wann werden Berechtigungsprüfungen durchgeführt?

### LINDDUN

Das [LINDDUN](https://linddun.org)-Framework ist ein weithin anerkanntes, von STRIDE inspiriertes Framework für Threat Modeling, das sich auf Bedrohungen des Datenschutzes konzentriert. Jeder Buchstabe des Akronyms LINDDUN steht für eine der sieben Kategorien von Datenschutzbedrohungen. Für jede Kategorie des Threat Models haben wir Fragen aufgenommen, die Sie in Ihr Threat Model einbeziehen können und die für die aufgeführte Kategorie relevant sind. Eine ausführlichere Diskussion finden Sie im Artikel über [Privacy Threat Modeling](/de/docs/Web/Privacy/Threat_modeling).

- **Linking**
  - : Die Möglichkeit, Daten oder Aktionen einer Person oder Gruppe zuzuordnen.
    - Können Dritte das Verhalten von Benutzern über verschiedene Websites hinweg nachverfolgen?
- **Identifying**
  - : Die Identität einer Person ermitteln.
    - Sind Pseudonyme oder Benutzer-IDs tatsächlich nicht identifizierend?
    - Könnten Identitäten durch die Kombination öffentlich verfügbarer Daten offengelegt werden?
- **Non-repudiation**
  - : Die Möglichkeit, eine Behauptung (oder Aktion) mit einer Person zu verknüpfen oder ihr zuzuschreiben.
    - Können Benutzer Aktionen ausführen, ohne dauerhafte Aufzeichnungen zu erstellen?
    - Werden Protokolle länger als nötig aufbewahrt?
- **Detecting**
  - : Die Beteiligung einer Person anhand von Beobachtungen feststellen.
    - Gibt die Anmeldung preis, ob ein Benutzer existiert?
    - Gibt das System Informationen preis, wenn ein Administrator online ist?
- **Data disclosure**
  - : Mehr Informationen als nötig sammeln, speichern, verarbeiten oder personenbezogene Daten weitergeben.
    - Sind Backups, Protokolle oder Exporte geschützt?
    - Erhalten eingebettete Analyse- oder andere Metrikerfassungsdienste personenbezogene Daten?
- **Unawareness**
  - : Personen unzureichend über die Verarbeitung personenbezogener Daten informieren, einbeziehen oder dazu befähigen.
    - Verstehen Benutzer Opt-in- oder Opt-out-Dialoge?
    - Verstehen Benutzer, welche Daten erhoben werden und warum?
- **Non-compliance**
  - : Abweichung von Best Practices, Standards und Gesetzen für Sicherheit und Datenmanagement.
    - Können Benutzer die Löschung oder den Export ihrer Daten anfordern?
    - Entsprechen Dienste Dritter Ihren Richtlinien?

## Weitere Ressourcen

Die folgenden Dokumente führen eine breite und vielfältige Auswahl an Bedrohungen und Threat Models auf, die Sie berücksichtigen können:

- [RFC 9620: Überlegungen zu Menschenrechten](https://datatracker.ietf.org/doc/rfc9620/)
- [W3C TAG: Ethische Webprinzipien](https://w3ctag.github.io/ethical-web-principles/)
- [W3C-Selbstbewertungsfragebogen: Sicherheit und Datenschutz](https://w3c.github.io/security-questionnaire/)
- [RFC 6973: Datenschutzüberlegungen für Internetprotokolle](https://datatracker.ietf.org/doc/html/rfc6973)
- [RFC 3552: Leitlinien zum Verfassen von RFC-Texten zu Sicherheitsüberlegungen](https://datatracker.ietf.org/doc/html/rfc3552)
- [Invariantenzentriertes Threat Modeling](https://github.com/defuse/ictm)

## Tools für Threat Modeling

Ein effektives Modell trägt zu einem besseren Verständnis Ihres Systems bei.
Tools für Threat Modeling können das Erstellen von Diagrammen, das Visualisieren von Datenflüssen und Ähnliches erleichtern, was zu diesem Ziel beiträgt.

Es ist wichtig zu beachten, dass Sie keine teuren und leistungsstarken Tools benötigen, um ein effektives Threat Model zu erstellen. Entscheidend sind der methodische Ansatz und die Diskussion über Ihr System. Übermäßig komplexe Diagramme können sogar nachteilig sein, wenn sie diese Diskussion nicht fördern und unterstützen.

- [OWASP Threat Dragon](https://owasp.org/projects/threat-dragon)
- [Microsoft Threat Modeling Tool](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool)

## Siehe auch

- [Leitfaden für Threat Modeling](/de/docs/Web/Security/Threat_modeling)
- [Beispiel eines Threat Models](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C-Leitfaden für Threat Modeling für Autoren von Spezifikationen](https://w3c.github.io/threat-modeling-guide/)
- [Threat Model für die Webplattform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
