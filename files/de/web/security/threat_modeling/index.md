---
title: Bedrohungsmodellierung
slug: Web/Security/Threat_modeling
l10n:
  sourceCommit: 6055a12bd787f1677b182c0c1ed3c233b2c99eb6
---

Die Bedrohungsmodellierung ist ein Prozess, der helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen. Sie kann Ihnen helfen, die spezifischen Schwachstellen Ihrer Anwendung, der Browserumgebung und der Interaktion des Benutzers mit Ihrer Benutzeroberfläche zu verstehen. In diesem Artikel wird beschrieben, was ein Bedrohungsmodell ist und wie man eine Bedrohungsmodellierung durchführt. Dabei wird ein Überblick gegeben und der Prozess der Bedrohungsmodellierung erläutert.

Je nach Ihrem Ziel kann die Bedrohungsmodellierung umfassender sein, als hier beschrieben. Unabhängig davon, ob Sie eine leichte Bedrohungsmodellierung zu Ihrem eigenen Vorteil durchführen oder eine detailliertere Bewertung für ein Software-Audit vornehmen, ermöglicht ein Bedrohungsmodell das Identifizieren und Beheben tatsächlicher und wahrgenommener Bedrohungen.

Auf dieser Seite wird der gesamte Prozess der Bedrohungsmodellierung beschrieben. Für Informationen zu Bedrohungsmodellierungsrahmenwerken und Ressourcen siehe:

- [Bedrohungsmodellierungsrahmenwerke und -tools](/de/docs/Web/Security/Threat_modeling/Frameworks)
  - : Übersicht über die STRIDE- und LINDDUN-Rahmenwerke, die Struktur für Bedrohungsmodellierungsprozesse bieten, sowie zusätzliche Bedrohungsmodellierungstools.

Für ein Beispiel-Bedrohungsmodell siehe:

- [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
  - : Ein Beispiel für ein Bedrohungsmodell eines öffentlich zugänglichen Blogs, der statische Seiten bereitstellt. Interaktive Komponenten umfassen Benutzerkommentare, ein Kontaktformular, Analyseskripte und eine Karten-Einbettung.

## Was ist eine Bedrohung?

Eine Bedrohung ist alles, was potenziell die Funktionalität Ihrer Website oder die darin enthaltenen Daten schädigen könnte.

Ein Bedrohungsmodell ist eine strukturierte Darstellung potenzieller Bedrohungen. Es umfasst alle Informationen, die die Sicherheit Ihres Produkts beeinflussen, sei es ein Server, eine Anwendung oder eine Website. Es ist ein lebendiges Dokument oder eine mentale Karte, die Ihre Vermögenswerte (Was schützen Sie?), potenzielle Angreifer (wer möchte Sie, Ihr Produkt oder Ihre Benutzer angreifen?) und potenzielle Schwachstellen (wo und was sind die Schwachstellen Ihres Produkts?) identifiziert.

Bedrohungen sind immer vorhanden, müssen sich jedoch nicht zu Angriffen entwickeln. Ein Angriff ist der tatsächliche Versuch einer Bedrohung auf ein laufendes System (ein System besteht aus einer Sammlung von Vermögenswerten). Idealerweise bleiben Bedrohungen, wenn ein System gut geschützt ist, nur Bedrohungen und treten nie tatsächlich ein.

Wenn wir über Bedrohungen nachdenken, können wir Systemschwächen (Schwachstellen) identifizieren, wie [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) oder [JavaScript-Prototypenverschmutzung](/de/docs/Web/Security/Attacks/Prototype_pollution).

Dann implementieren wir Gegenmaßnahmen als Reaktion auf Schwachstellen: Sie verteidigen das System soweit sie können. In bestimmten Fällen ist es auch möglich zu akzeptieren, dass die Bedrohung eintreten könnte, sich auf die nachteiligen Folgen vorzubereiten und zu überwachen, ob dies tatsächlich der Fall ist. Dies muss eine bewusste Entscheidung sein: Eine Bedrohung zu akzeptieren, ist nichts, was man auf die leichte Schulter nehmen sollte.

Die Wahrscheinlichkeit, dass eine Bedrohung eintritt, und die Schwere ihrer Auswirkungen werden typischerweise als Risiko beschrieben.

Um die verschiedenen Begriffe zu veranschaulichen, nehmen wir ein Haus als Beispiel:

- Bedrohung: ein Einbrecher.
- Schwachstelle: Ein offenes Fenster oder ein schwaches Türschloss.
- Angriff: Der Einbrecher klettert durch das Fenster oder öffnet das Schloss.
- Gegenmaßnahme: Ein starker Riegel, ein Alarmsystem, Vorgehensweise, um sicherzustellen, dass alle Fenster verschlossen sind.
- Risiko: Wir haben öffentlich angekündigt, dass wir im Urlaub sind, was das Risiko erhöht, dass Einbrecher versuchen, in unser Haus einzudringen.
- Schwere der Auswirkungen: Die Auswirkungen werden größer sein, wenn der Einbrecher weiß, dass wir im Urlaub sind, da er sich sicher fühlt, mehr Zeit in unserem Haus zu verbringen. Die Schwere wird geringer sein, wenn ich einen Haussitter habe oder alle meine Wertsachen in einem externen Safe aufbewahre.

## Was ist Bedrohungsmodellierung?

Die Bedrohungsmodellierung ist der Prozess der Erstellung eines repräsentativen Modells, das die Bedrohungen Ihres Systems beschreibt. Es handelt sich um eine Form der Risikoanalyse mit dem Ziel, die wahrscheinlichsten Angriffsvektoren zu analysieren und die Vermögenswerte zu identifizieren, die für einen Angreifer am begehrtesten sind. Es ist ein strukturierter, wiederholbarer Prozess, um eine Darstellung eines Systems zu analysieren, damit Sie relevante Sicherheits- und Datenschutzbedenken identifizieren, verstehen können, was schiefgehen kann, und entscheiden können, wie darauf reagiert werden soll. Laut dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) umfasst die Erstellung eines Bedrohungsmodells typischerweise die Beantwortung von vier entscheidenden Fragen:

1. Was machen wir gerade?
2. Was kann schiefgehen?
3. Was werden wir dagegen tun?
4. Haben wir gute Arbeit geleistet?

## Wie macht man Bedrohungsmodellierung?

Die Bedrohungsmodellierung sollte frühzeitig in Ihrem Entwicklungsprozess stattfinden und regelmäßig überprüft werden. Ähnlich wie Sie ständig über Ihre Software iterieren, sollten Sie auch kontinuierlich die Sicherheit des Systems mit Hilfe Ihres Bedrohungsmodells analysieren. Normalerweise beginnt dies, sobald die Funktionen definiert sind.

Modellierungsaktivitäten werden nicht ausschließlich von Sicherheitsprüfern durchgeführt. Jeder, der sich um die Privatsphäre oder Sicherheit eines Systems sorgt, sollte befähigt werden, zu helfen. Eine funktionsübergreifende Zusammenarbeit eines vielfältigen Teilnehmerkreises stärkt das Bedrohungsmodell. Beispielsweise hat derjenige, der das System entwirft, sicherlich ein klares Verständnis dafür, was gebaut wird und welche Sorgen sie nachts wachhalten könnten.

Ein gemeinsames Verständnis Ihres Systems und seiner Bedrohungen ermöglicht es Ihnen, die Robustheit Ihres Systems zu messen. Dies sollte in einem Bedrohungsmodellierungsdokument festgehalten werden.

Es kann ziemlich viel Arbeit bedeuten, ein anfängliches Bedrohungsmodellierungsdokument zu erstellen. Oft wird diese Arbeit im Rahmen eines Workshops mit Ihrem Team erledigt, entweder selbst geführt oder von einem Fachmann moderiert. Das erstellte Bedrohungsmodellierungsdokument muss erweiterbar für zukünftige Neubewertungen sein und idealerweise versionskontrolliert in Ihrer Codebasis leben.

Für jedes Bedrohungsmodell hilft es zu:

- Ihre Systemelemente (Vermögenswerte, Komponenten) zu beschreiben
- Datenflüsse und Interaktionen mit Dritten zu beschreiben
- Stakeholder zu identifizieren
- Bedrohungen zu diskutieren
- Bedrohungsreaktionen zu berücksichtigen
- Iterieren

## Zu beantwortende Fragen

Es gibt keine einzig ideale Darstellung der Bedrohungsmodellierung, daher ist es eine gute Idee, mehrere [Bedrohungsmodellierungsrahmen](/de/docs/Web/Security/Threat_modeling/Frameworks) zu verwenden, um verschiedene Probleme zu beleuchten.

Eine Form eines Bedrohungsmodells besteht darin, die vier Hauptfragen aus dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) zu stellen und zu beantworten.

- [Was machen wir gerade?](#1._was_machen_wir_gerade)
- [Was kann schiefgehen?](#2._was_kann_schiefgehen)
- [Was werden wir dagegen tun?](#3._was_werden_wir_dagegen_tun)
- [Haben wir gut genug gearbeitet?](#4._haben_wir_gute_arbeit_geleistet)

Lassen Sie uns diese Fragen der Reihe nach durchgehen.

## 1. Was machen wir gerade?

Die erste Frage dreht sich darum, das Projekt zu beschreiben. Dazu erstellen Sie ein Modell des Systems, das aus Datenflussdiagrammen, Architekturdiagrammen oder Anwendungsfalldiagrammen besteht, die Komponenten, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und Hauptstakeholder zeigen.

Um den Umfang des Bedrohungsmodells zu definieren, müssen wir abgrenzen, welche Bedrohungen auf unser eigenes Projekt und welche auf den Browser oder andere Ebenen des Webplattform-Stacks abzielen – wir definieren diese als externe Abhängigkeiten für unser Bedrohungsmodell. Das [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/) bietet einen nützlichen Ausgangspunkt und skizziert die Umgebung, die von den meisten Websites und Webanwendungen geteilt wird.

Es ist hilfreich, sich bewusst zu machen, für welche Teile Sie verantwortlich sein werden und welche Teile von anderen übernommen werden, wie z. B. Schutzmaßnahmen, die der Browser normalerweise für Sie bereitstellt. Wenn Sie eine Liste relevanter bestehender Bedrohungsmodelle für Ihre Softwareabhängigkeiten und Ihr Umfeld führen, können Sie sie in Ihr eigenes Bedrohungsmodell aufnehmen und müssen die Modellierung nicht erneut durchführen. Bedrohungsmodellierung dreht sich nicht um Vollständigkeit; es geht darum, das Verständnis im Laufe der Zeit zu verbessern.

Zum Lernen werden die folgenden Abschnitte das Beispiel einer Blog-Website verwenden. Sehen Sie sich die Seite [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) an, um zu erfahren, wie dieser Leitfaden in ein Bedrohungsmodellierungsdokument übersetzt werden kann. Beachten Sie, dass die Annahmen, die wir über den Blog machen werden, unvollständig sind und dass die Annahmen, die Sie über Ihr eigenes System machen werden, wahrscheinlich auch unvollständig sein werden. Es ist eine gute Idee, mit Ihrem Team zu brainstormen, um einen umfassenderen Überblick über das System zu erhalten, das Sie schützen möchten.

Lassen Sie uns beschreiben, woran wir in Bezug auf Komponenten, Vermögenswerte, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und Stakeholder arbeiten.

### Komponenten

Komponenten sind Dinge, die Code ausführen oder Daten speichern. Zum Beispiel könnten wir sagen, dass unsere Blog-Website aus mehreren Softwarekomponenten besteht, die für unser Bedrohungsmodell interessant sein werden:

- Webserver
- Blog-Software (zum Beispiel ein statischer Seitengenerator oder ein CMS)
- Statische Seiten
- Benutzerauthentifizierung
- Vom Benutzer eingereichte Inhalte (zum Beispiel ein Kommentarbereich)
- Kontaktformular
- Abrufaufrufe an (eigene oder externe) APIs
- Drittanbieterskripte, zum Beispiel zur Anzeige einer Karte oder zu Nutzungsanalysen

Natürlich kann die Komplexität Ihrer Website stark variieren. Vielleicht erstellen Sie eine statische Website, hauptsächlich mit HTML und CSS, vielleicht hosten Sie eine Website mit einem CMS, einem Server und einer Datenbank, oder vielleicht bauen Sie eine komplexe Webanwendung wie ein Online-Spiel, ein E-Mail-Client oder eine Zeichen-Webapp.

Je nachdem, was Sie tun, kann Ihr Bedrohungsmodell entweder ziemlich kurz und eigenständig oder sehr lang sein, und vielleicht bevorzugen Sie es, mehrere Bedrohungsmodelle für verschiedene Teile Ihres Systems zu erstellen, wobei Sie sich jeweils auf einen Teil konzentrieren.

Um identifizierte Komponenten zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben C (C1, C2, C3, ...).

### Vermögenswerte

Vermögenswerte sind Dinge, die ein Angreifer will und die geschützt werden müssen. Dies könnte sein:

- Benutzerdaten: Allgemeine Benutzerdaten und personenbezogene Informationen (PII).
- Benutzeranmeldedaten: Anmeldeinformationen, Benutzernamen, Passwörter, Zugangsschlüssel.
- Cookies und Sitzungsinformationen.
- Private Inhaltsressourcen (zum Beispiel Entwürfe von Blogbeiträgen).

Um identifizierte Vermögenswerte zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben A (A1, A2, A3, ...).

### Datenflüsse und Vertrauensgrenzen

Alles, was im Browser passiert oder aus einer Benutzereingabe stammt, ist _nicht vertrauenswürdig_. Die Bedrohungsmodellierung hilft dabei, die **Vertrauensgrenze** zu identifizieren – den Punkt, an dem Daten von nicht vertrauenswürdigen Bereichen außerhalb Ihrer Kontrolle in Ihre vertrauenswürdige Anwendung übergehen.

Wir identifizieren den Mechanismus, durch den Vermögenswerte zwischen Komponenten bewegt werden. Sie können uni- oder bidirektional sein.

- Authentifizierungsflüsse
- Kontaktformular-Fluss
- Datenflüsse zu externen Diensten

Wenn Daten zwischen einem Benutzer und Ihrer Anwendung oder zwischen Ihrer Anwendung und Drittanbieterdiensten fließen, bewegen sie sich über vertrauenswürdige Grenzen hinweg, die von verschiedenen Autoritäten kontrolliert werden. Angriffe erfolgen häufig zwischen diesen ungleich privilegierten Komponenten, und wir sollten uns dieser Angriffsflächen bewusst machen und identifizieren, wo Validierung, Verschlüsselung oder andere Sicherheitskontrollen erforderlich sind.

Um identifizierte Datenflüsse zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben F (F1, F2, F3, ...). Vertrauensgrenzen werden normalerweise mit einer gestrichelten Linie visualisiert.

### Externe Abhängigkeiten

Möglicherweise modellieren Sie externe Abhängigkeiten nicht in vollständiger Detailtiefe, aber Sie sollten Ihre Annahmen über sie dokumentieren und sie auf dem erforderlichen Niveau modellieren, um über Ihre eigenen Risiken nachzudenken. Wir können sie wie Blackboxes ansehen, deren Interna uns unbekannt sind, aber idealerweise haben sie auch ihre eigenen Bedrohungsmodelle, die wir in unserem eigenen referenzieren. Zum Beispiel:

- Betriebssystem (OS)
- Browser und die Webplattform (siehe auch [Webplattform-Bedrohungsmodell](https://w3c.github.io/threat-model-web/))
- Browser-Erweiterungen (WebExtensions)

Um identifizierte externe Abhängigkeiten zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben E (E1, E2, E3, ...).

### Stakeholder

Identifizieren Sie Ihr Publikum und verstehen Sie ihre Interessen, Vorteile und möglichen Schäden. Wer könnte von potenziellen Bedrohungen betroffen sein? Die Menschen und Gruppen in den Vordergrund zu stellen, hilft Ihnen dabei, nicht nur über die Sicherheit technischer Komponenten nachzudenken. Stattdessen konzentrieren Sie sich darauf, wie sicher und vertrauenswürdig die Beziehung zwischen realen Menschen und Ihrer Software ist.

- Anonymer Benutzer
- Registrierter Benutzer
- Behinderter Benutzer
- Blog-Administrator oder Entwickler

Zum Beispiel kann Spam in erster Linie Administratoren schaden, während das Leaken von Anmeldedaten sowohl Benutzern als auch Administratoren schaden kann.

Beachten Sie, dass Sie keine potenziellen Angreifer modellieren. Eine Übercharakterisierung der Angreifer kann zur Analyseverzerrung führen.

Um identifizierte Stakeholder zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben S (S1, S2, S3, ...).

## 2. Was kann schiefgehen?

Jetzt, da wir unsere Umgebung modelliert haben, können wir darüber nachdenken, was schiefgehen kann. Bedrohungen können auf verschiedene Arten identifiziert werden, eine gängige Methode ist das Durchsuchen von Bedrohungslisten. Zum Beispiel könnten wir damit beginnen, Bedrohungskarten anzuschauen oder auf externe Bedrohungslisten wie OWASP Top Ten oder andere zuzugreifen.

- [OWASP Top Ten](https://owasp.org/Top10/2025/)
- Sicherheitsüberlegungen in Spezifikationen der Webplattform sowie in den MDN Web Docs.

Für eine Webanwendung könnte dies Cross-Site-Scripting, Cross-Site-Request-Forgery, Kontoübernahme oder Datenleckage über Drittanbieterskripte umfassen.

Eine weitere häufige Methode zur Identifizierung von Bedrohungen ist die Verwendung von [Bedrohungsanalyse-Rahmenwerken](/de/docs/Web/Security/Threat_modeling/Frameworks), insbesondere STRIDE und LINDDUN.

Sie können entscheiden, ob Sie identifizierte Bedrohungen in einer Tabelle präsentieren oder sie analytischer beschreiben, indem Sie zum Beispiel die Ereigniskette, die zu einem Angriff führt, aufschreiben ("Kill Chain"). Der [W3C Threat Modeling Guide](https://w3c.github.io/threat-modeling-guide/#curatorial-storytelling) empfiehlt, eine Geschichte zu erzählen und Bedrohungen zu priorisieren, sodass zuerst die wichtigsten Bedrohungen diskutiert werden und die Leser nicht mit unnötigen Details überladen werden.

Um die identifizierten Bedrohungen zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben T (T1, T2, T3, ...).

## 3. Was werden wir dagegen tun?

Im dritten Schritt müssen wir beantworten, wie wir auf die im zweiten Schritt identifizierten Bedrohungen reagieren werden.

Es gibt verschiedene Optionen, wie wir auf Bedrohungen reagieren könnten. Generell lassen sich Reaktionen in vier Kategorien einteilen, unter Verwendung des **ERTA**-Mnemonikons:

- **E**liminieren: Den Vermögenswert oder die Bedrohung entfernen.
- **R**eduzieren: Es erschweren, zum Beispiel durch Hinzufügen einer Kontrolle, Minderung oder Gegenmaßnahme.
- **T**ransferieren: Die Verantwortung zur Minderung der Bedrohung an ein anderes System oder eine Organisation verlagern (zum Beispiel einen Drittanbieterdienst).
- **A**kzeptieren: Dass es momentan nicht möglich ist, die Bedrohung zu mindern; es bleibt offen und muss überwacht werden.

Beispiele:

- Eliminieren: Wir entfernen die Kommentarfunktionalität von unserem Blog, da sie kaum genutzt wird und wir uns nicht um die Sicherung kümmern möchten.
- Reduzieren: Wir erlauben nur registrierten Benutzern die Nutzung der Kommentarfunktion.
- Transferieren: Wir verwenden ein externes Plugin für Kommentare.
- Akzeptieren: Wir akzeptieren, dass unsere Kommentarfunktionalität Bedrohungen wie Spam ausgesetzt ist, aber wir akzeptieren diese Bedrohung und implementieren Spam-Monitoring.

Dokumentieren Sie Ihre Reaktionen und Entscheidungen. Sie werden wahrscheinlich in Schritt 4 darauf zurückkommen, wenn Sie fragen, ob diese Reaktionen gut genug sind.

Um die identifizierten Reaktionen zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben R (R1, R2, R3, ...).

## 4. Haben wir gut genug gearbeitet?

Sobald Sie eine Runde der Bedrohungsmodellierung abgeschlossen haben, hinterlegen Sie (private) Probleme in Ihrem Projekt und beschreiben Sie Ihre Erkenntnisse in einem Bedrohungsmodellierungsdokument. Auch wenn keine Maßnahmen oder Fehlerbehebungen erforderlich sind, wird die Dokumentation Ihres Bedrohungsmodells später nützlich sein.

Sie können die von Ihnen hinterlegten Probleme und die von Ihnen verfasste Dokumentation bei der nächsten Runde der Bedrohungsmodellierung überprüfen und feststellen, ob sich etwas geändert hat oder neu bewertet werden muss. Es ist hilfreich, die dokumentierten Probleme zu validieren. Mit jeder Iteration der Bedrohungsmodellierung sollte Ihr System sicherer werden, und Sie werden sich weiterer Bedrohungen und Risiken bewusster. Die Erfahrung, die Sie im Laufe der Zeit sammeln, wird Ihnen helfen, Ihre Bedrohungsmodellierung robuster zu machen; es wird von Anfang an nicht perfekt oder vollständig sein, und das muss es auch nicht, um nützlich zu sein.

Wir bieten ein [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) zur Inspiration an. Bedrohungsmodellierungsdokumente werden leider nicht sehr häufig veröffentlicht oder weit verbreitet; sie sind oft eine interne Ressource. Es ist jedoch gute Praxis, Ihr Bedrohungsmodell zu veröffentlichen, sowohl um Vertrauenswürdigkeit zu demonstrieren als auch um zusätzliches Feedback einzuholen.

In unserer obigen Bedrohungsmodellierung konzentrieren wir uns auf die vier Schlüsselfragen, wie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert. Es existieren Rahmenwerke, darunter STRIDE und LINDDUN, die Struktur für Bedrohungsmodellierungsprozesse bieten. Sehen Sie sich den [Leitfaden für Bedrohungsmodellierungsrahmen und -ressourcen](/de/docs/Web/Security/Threat_modeling/Frameworks) an für eine Liste von Datenschutz- und Sicherheitsbedrohungen sowie Beispiel-Fragen, die Ihnen helfen können, Ihre eigene Bedrohungsmodellentwicklung zu lenken.

## Siehe auch

- [Bedrohungsmodellierungsrahmen und Ressourcen](/de/docs/Web/Security/Threat_modeling/Frameworks)
- [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Threat Modeling Guide for specification authors](https://w3c.github.io/threat-modeling-guide/)
- [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
