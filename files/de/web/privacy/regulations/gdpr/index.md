---
title: DSGVO
slug: Web/Privacy/Regulations/GDPR
l10n:
  sourceCommit: b1323591b2dcff55af31c3b3f0107f7c4f1d38d2
---

Die **Datenschutz-Grundverordnung (DSGVO)** ist ein umfassendes Datenschutzgesetz, das von der [Europäischen Union (EU)](https://en.wikipedia.org/wiki/European_Union) erlassen wurde. Es gibt Einzelpersonen die Kontrolle darüber, wie ihre persönlichen Daten von Organisationen verwendet werden, und legt Einschränkungen fest, wie eine Organisation diese persönlichen Daten verarbeiten darf.

Dieser Artikel erklärt, was die DSGVO ist, auf welche Organisationen sie zutrifft und bietet eine grundlegende Einführung in die Anforderungen, die die DSGVO an Webentwickler stellt. Die DSGVO ist eine komplexe Verordnung und wir können hier keinen vollständigen Leitfaden zur Einhaltung bieten: stattdessen skizzieren wir nur die wichtigsten Verantwortlichkeiten. Die Website [GDPR.EU](https://gdpr.eu/) bietet umfassende Leitfäden.

## Geltungsbereich und Strafen

Die DSGVO gilt für jede Organisation, die in der EU ansässig ist, sowie für jede Organisation außerhalb der EU, die Waren oder Dienstleistungen für EU-Bürger anbietet oder diese verfolgt (zum Beispiel durch das Setzen oder Auslesen von Cookies oder das Aufzeichnen von IP-Adressen).

Sie gilt, wenn solche Organisationen [personenbezogene Daten](#personal_data) von Einwohnern der EU im Rahmen von beruflichen oder kommerziellen Aktivitäten [verarbeiten](#processing_data). Das bedeutet, sie gilt nicht für rein persönliche Tätigkeiten.

Die DSGVO macht keine Ausnahme für kleine Organisationen, obwohl Organisationen mit weniger als 250 Mitarbeitern unter bestimmten Umständen [von einigen Dokumentationsanforderungen befreit](#verzeichnis_von_verarbeitungstätigkeiten) sind.

Organisationen, die gegen die DSGVO verstoßen, können mit Geldstrafen belegt werden. Die Geldstrafen variieren je nach Schwere des Verstoßes und Größe des Unternehmens, können jedoch sehr schwerwiegend sein: bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes des Unternehmens aus dem vorangegangenen Geschäftsjahr.

## DSGVO-Terminologie

- **Personenbezogene Daten**
  - : Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Dazu gehören Daten, die direkt zur Identifizierung einer Person verwendet werden können, wie Name, Sozialversicherungsnummer, Geburtsdatum oder Adresse. Es kann auch physische Merkmale umfassen, wie biometrische Daten oder ethnische Zugehörigkeit, gesellschaftliche Daten wie religiöse oder politische Zugehörigkeit oder finanzbezogene Informationen wie eine Kreditkartennummer.

- **Daten verarbeiten**
  - : Dieser Begriff umfasst sowohl das Sammeln von Daten als auch das Arbeiten mit bereits gesammelten Daten. Die Arbeit mit Daten umfasst Aktivitäten wie das Aufzeichnen, Organisieren, Speichern von Daten oder deren Nutzung auf fast jede andere Weise.

- **Datensubjekt**
  - : Die Personen, denen die verarbeiteten personenbezogenen Daten gehören: die Benutzer Ihrer Webseite.

- **Datenverantwortlicher**
  - : Die Person oder Organisation, die bestimmt, welche Daten verarbeitet werden und wie sie verarbeitet werden. Wenn Sie eine Webseite unterhalten, die personenbezogene Daten sammelt und nutzt, sind Sie dies.

- **Datenverarbeiter**
  - : Jede Person oder Organisation, die im Auftrag eines [Datenverantwortlichen](#data_controller) [Daten verarbeitet](#processing_data).

## Einschränkungen der Datenverarbeitung

Die DSGVO definiert Einschränkungen, welche personenbezogenen Daten verarbeitet werden dürfen und wie sie verarbeitet werden dürfen, einschließlich:

- Sie dürfen die personenbezogenen Daten einer Person nur dann verarbeiten, wenn diese ausdrücklich zugestimmt hat, oder in verschiedenen anderen spezifischen Fällen (einschließlich z.B., dass Sie personenbezogene Daten verarbeiten müssen, um einer gesetzlichen Verpflichtung nachzukommen). Siehe [Artikel 6: Rechtmäßigkeit der Verarbeitung](https://gdpr.eu/article-6-how-to-process-personal-data-legally/).

- Die Einwilligung muss ausdrücklich und freiwillig erteilt werden. Die betroffene Person muss in der Lage sein, ihre Einwilligung jederzeit zu widerrufen, und der Widerruf der Einwilligung muss genauso einfach sein wie das Erteilen der Einwilligung. Wenn eine Webseite den Zugang zu einem Dienst von der Einwilligung abhängig macht, während die angeforderten personenbezogenen Daten für den Dienst nicht benötigt wurden, dann deutet dies auf Zwang hin: das heißt, die Einwilligung wurde möglicherweise nicht freiwillig gegeben. Siehe [Artikel 7: Bedingungen für die Einwilligung](https://gdpr.eu/article-7-how-to-get-consent-to-collect-personal-data/).

- Sie dürfen personenbezogene Daten nur für die Zwecke verwenden, die Sie bei der Anfrage angegeben haben.

- Sie müssen Datenminimierung betreiben: das heißt, Sie dürfen nur die personenbezogenen Daten anfordern, die Sie benötigen, um die angegebenen Zwecke zu erfüllen.

- Sie dürfen personenbezogene Daten nur so lange speichern, wie Sie sie benötigen, um die angegebenen Zwecke zu erfüllen.

- Sie müssen die Genauigkeit der gespeicherten personenbezogenen Daten gewährleisten.

Siehe auch [Artikel 5: Grundsätze für die Verarbeitung personenbezogener Daten](https://gdpr.eu/article-5-how-to-process-personal-data/).

## Datensicherheit

Sie müssen die Vertraulichkeit und Integrität der gespeicherten personenbezogenen Daten wahren. Dies bedeutet typischerweise, dass sie verschlüsselt, vor unbefugtem Zugriff geschützt und das Personal im richtigen Umgang mit sensiblen Daten geschult sein sollte.

Bei einer Datenschutzverletzung müssen Sie die Aufsichtsbehörde innerhalb von 72 Stunden benachrichtigen und, je nach Schwere der Verletzung, möglicherweise auch die betroffenen Datensubjekte informieren.

Siehe auch:

- [Artikel 32: Sicherheit der Verarbeitung](https://gdpr.eu/article-32-security-of-processing/)
- [Artikel 33: Meldung einer Verletzung des Schutzes personenbezogener Daten an die Aufsichtsbehörde](https://gdpr.eu/article-33-notification-of-a-personal-data-breach/)
- [Artikel 34: Benachrichtigung über eine Verletzung des Schutzes personenbezogener Daten an das Datensubjekt](https://gdpr.eu/article-34-communication-of-a-personal-data-breach/).

## Rechte der Datensubjekte

Die DSGVO erkennt eine Reihe von Rechten für Datensubjekte an und verlangt, dass Datenverantwortliche und -verarbeiter den Subjekten die Ausübung dieser Rechte ermöglichen.

Datensubjekte haben das Recht zu wissen, welche personenbezogenen Daten verarbeitet werden, wie sie verarbeitet werden, wer Zugang dazu hat und wie sie geschützt werden. Sie haben auch das Recht, ihre Daten abzurufen, zu korrigieren, zu löschen und zu übertragen.

Siehe auch [Kapitel 3: Rechte der betroffenen Person](https://gdpr.eu/tag/chapter-3/).

## Nachweis der Compliance

Datenverantwortliche müssen in der Lage sein zu zeigen, dass sie die Bedingungen der DSGVO einhalten. Die DSGVO nennt dies _Rechenschaftspflicht_.

### Verzeichnis von Verarbeitungstätigkeiten

Ein wichtiger Bestandteil der Rechenschaftspflicht ist ein Verzeichnis der Datenverarbeitungstätigkeiten, an denen der Datenverantwortliche beteiligt ist, auch _Verzeichnis der Verarbeitungstätigkeiten_ genannt. Dieses dokumentiert die gesammelten Daten und deren Verwendung. Sowohl Datenverantwortliche als auch Datenverarbeiter müssen diese Aufzeichnungen führen.

Organisationen mit weniger als 250 Mitarbeitern können von dieser Anforderung befreit sein, je nach Art der von ihnen durchgeführten Verarbeitung.

Siehe auch [Artikel 30: Verzeichnisse von Verarbeitungstätigkeiten](https://gdpr.eu/article-30-records-of-processing-activities/).

### Datenschutz-Folgenabschätzung

Eine _Datenschutz-Folgenabschätzung_ (DPIA) ist eine weitere Praxis, die eine Organisation befolgen kann, um zu zeigen, dass sie die DSGVO einhält. Sie wird als Teil der Planung für ein Projekt durchgeführt, das die Verarbeitung personenbezogener Daten umfasst, und beinhaltet:

- Eine Beschreibung der Daten, die der Verantwortliche voraussichtlich sammeln wird, und der Zwecke, für die sie verwendet werden.
- Eine Bewertung der Notwendigkeit und Verhältnismäßigkeit der Verarbeitung im Verhältnis zu ihren Zielen.
- Eine Bewertung der Risiken für die Datensubjekte.
- Eine Beschreibung der Maßnahmen, die zur Bewältigung dieser Risiken ergriffen werden.

Je nach spezifischer Aktivität, mit der sie beschäftigt sind, müssen Organisationen nicht immer eine DPIA erstellen, aber es bietet immer guten Nachweis dafür, dass ein Verantwortlicher die DSGVO einhält.

Siehe auch [Artikel 35: Datenschutz-Folgenabschätzung](https://gdpr.eu/article-35-impact-assessment/) und [Datenschutz-Folgenabschätzung (DPIA)](https://gdpr.eu/data-protection-impact-assessment-template/).

### Datenschutzbeauftragter

Ein Datenschutzbeauftragter (DPO) ist eine Person, die von einem Verantwortlichen oder Verarbeiter nominiert wird (und oft, aber nicht notwendigerweise, ein Mitarbeiter des Verantwortlichen oder Verarbeiters ist). Sie sind verantwortlich dafür, den Verantwortlichen oder Verarbeiter über seine Verpflichtungen gemäß der DSGVO zu informieren, die Einhaltung zu überwachen und mit externen Parteien wie Datensubjekten und Aufsichtsbehörden zu interagieren.

Einige Organisationen müssen einen Datenschutzbeauftragten ernennen, während es für andere optional ist: es wird jedoch als eine gute Möglichkeit angesehen, um zu demonstrieren, dass eine Organisation die Compliance einhält.

Siehe [Alles, was Sie über den Datenschutzbeauftragten (DPO) der DSGVO wissen müssen](https://gdpr.eu/data-protection-officer/).

## Siehe auch

- [GDPR.EU](https://gdpr.eu/)
- [Was ist die DSGVO, das neue Datenschutzgesetz der EU?](https://gdpr.eu/what-is-gdpr/)
- [DSGVO-Compliance-Checkliste](https://gdpr.eu/checklist/)
