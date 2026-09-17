---
title: Bedrohungsmodellierung
slug: Web/Security/Threat_modeling
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Bedrohungsmodellierung ist ein Prozess, der dabei helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen. Sie kann Ihnen helfen, die spezifischen Schwachstellen Ihrer Anwendung, der Browserumgebung und der Interaktion der Benutzer mit Ihrer UI zu verstehen. Dieser Artikel beschreibt, was ein Bedrohungsmodell ist und wie Sie Bedrohungsmodellierung durchführen, indem er einen kompakten Überblick gibt und durch den Prozess der Bedrohungsmodellierung führt.

Abhängig von Ihrem Ziel kann die Bedrohungsmodellierung umfassender sein als hier beschrieben. Unabhängig davon, ob Sie eine vereinfachte Bedrohungsmodellierung zu Ihrem eigenen Nutzen durchführen oder eine umfassendere Bewertung für ein Softwareaudit vornehmen: Ein Bedrohungsmodell ermöglicht es, tatsächliche und wahrgenommene Bedrohungen zu identifizieren und zu beheben.

Diese Seite beschreibt den allgemeinen Prozess der Bedrohungsmodellierung. Informationen zu Frameworks und Ressourcen für Bedrohungsmodelle finden Sie unter:

- [Frameworks und Tools für Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks)
  - : Überblick über die Frameworks STRIDE und LINDDUN, die Prozessen zur Bedrohungsmodellierung Struktur geben, sowie über zusätzliche Tools zur Bedrohungsmodellierung.

Ein Beispiel für ein Bedrohungsmodell finden Sie unter:

- [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
  - : Ein Beispiel für ein Bedrohungsmodell für einen öffentlich zugänglichen Blog, der statische Seiten bereitstellt. Interaktive Komponenten umfassen Benutzerkommentare, ein Kontaktformular, Analyse-Skripte und eine eingebettete Karte.

## Was ist eine Bedrohung?

Eine Bedrohung ist alles, was die Funktionalität Ihrer Website oder die darin gespeicherten Daten potenziell beeinträchtigen könnte.

Ein Bedrohungsmodell ist eine strukturierte Darstellung potenzieller Bedrohungen. Es umfasst alle Informationen, die die Sicherheit Ihres Produkts beeinflussen, unabhängig davon, ob dieses Produkt ein Server, eine Anwendung oder eine Website ist. Es ist ein lebendiges Dokument oder eine gedankliche Karte, die Ihre Assets identifiziert (Was schützen Sie?), potenzielle Angreifer (Wer möchte Sie, Ihr Produkt oder Ihre Benutzer angreifen?) und potenzielle Schwachstellen (Wo und worin liegen die Schwachpunkte Ihres Produkts?).

Bedrohungen sind immer vorhanden, müssen aber nicht zu Angriffen werden. Ein Angriff liegt vor, wenn eine Bedrohung tatsächlich gegen ein laufendes System ausgeführt wird (wobei ein System eine Sammlung von Assets ist). Idealerweise bleiben Bedrohungen bei einem gut geschützten System Bedrohungen und treten niemals tatsächlich ein.

Wenn wir über Bedrohungen nachdenken, können wir Systemschwächen (Schwachstellen) identifizieren, etwa [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) oder [JavaScript-Prototypverschmutzung](/de/docs/Web/Security/Attacks/Prototype_pollution).

Als Reaktion auf Schwachstellen implementieren wir dann Gegenmaßnahmen: Sie verteidigen das System, soweit sie dazu in der Lage sind. In bestimmten Fällen ist es auch möglich zu akzeptieren, dass die Bedrohung eintreten könnte, sich auf die negativen Folgen vorzubereiten und zu überwachen, ob dies tatsächlich geschieht. Dies muss eine bewusste Entscheidung sein: Eine Bedrohung zu akzeptieren, sollte nicht leichtfertig erfolgen.

Wie wahrscheinlich das Eintreten einer Bedrohung ist und wie schwerwiegend ihre Auswirkungen wären, wird üblicherweise als Risiko beschrieben.

Um die verschiedenen Begriffe zu veranschaulichen, nehmen wir ein Haus als Beispiel:

- Bedrohung: ein Einbrecher.
- Schwachstelle: ein unverschlossenes Fenster oder ein schwaches Türschloss.
- Angriff: Der Einbrecher klettert durch das Fenster oder knackt das Schloss.
- Gegenmaßnahme: ein stabiles Riegelschloss, eine Alarmanlage, eine Regel, die sicherstellt, dass alle Fenster verschlossen sind.
- Risiko: Wir haben öffentlich angekündigt, dass wir im Urlaub sind, was das Risiko erhöht, dass Einbrecher versuchen, in unser Haus einzudringen.
- Schwere der Auswirkung: Die Auswirkungen sind größer, wenn der Einbrecher weiß, dass wir im Urlaub sind, da er zuversichtlich sein wird, mehr Zeit in unserem Haus verbringen zu können. Die Schwere ist geringer, wenn ich eine Hausbetreuung habe oder alle meine Wertsachen in einem Tresor außerhalb des Hauses aufbewahre.

## Was ist Bedrohungsmodellierung?

Bedrohungsmodellierung ist der Prozess, ein repräsentatives Modell zu erstellen, das die Bedrohungen Ihres Systems beschreibt. Sie ist eine Form der Risikobewertung mit dem Ziel, die wahrscheinlichsten Angriffsvektoren zu analysieren und die für einen Angreifer wertvollsten Assets zu identifizieren. Sie ist ein strukturierter, wiederholbarer Prozess zur Analyse einer Darstellung eines Systems, damit Sie relevante Sicherheits- und Datenschutzbedenken identifizieren, verstehen können, was schiefgehen kann, und entscheiden können, wie Sie darauf reagieren. Laut dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) umfasst die Erstellung eines Bedrohungsmodells typischerweise die Beantwortung von vier Schlüsselfragen:

1. Woran arbeiten wir?
2. Was kann schiefgehen?
3. Was werden wir dagegen tun?
4. Haben wir gute Arbeit geleistet?

## Wie führt man Bedrohungsmodellierung durch?

Bedrohungsmodellierung sollte früh in Ihrem Entwicklungsprozess stattfinden und häufig erneut betrachtet werden. Ähnlich wie Sie Ihre Software kontinuierlich weiterentwickeln, sollten Sie auch die Sicherheit des Systems mithilfe Ihres Bedrohungsmodells fortlaufend analysieren. Üblicherweise beginnt dies unmittelbar nachdem die Funktionen definiert wurden.

Modellierungsaktivitäten werden nicht ausschließlich von Sicherheitsauditoren durchgeführt. Jede Person, die sich mit dem Datenschutz oder der Sicherheit eines Systems befasst, sollte dazu befähigt werden, mitzuwirken. Funktionsübergreifende Zusammenarbeit mit vielfältigen Teilnehmern macht das Bedrohungsmodell stärker. Wer das System entwirft, hat beispielsweise sicher ein klares Verständnis davon, was gebaut wird, und von den Bedenken, die ihm möglicherweise schlaflose Nächte bereiten.

Ein gemeinsames Verständnis Ihres Systems und seiner Bedrohungen ermöglicht Ihnen, die Robustheit Ihres Systems zu messen. Dies sollte in einem Bedrohungsmodelldokument festgehalten werden.

Es kann einiges an Arbeit erfordern, ein erstes Dokument zur Bedrohungsmodellierung zu erstellen. Häufig wird diese Arbeit im Rahmen eines Workshops mit Ihrem Team erledigt, entweder selbstorganisiert oder moderiert von einer Fachperson. Das erstellte Bedrohungsmodelldokument muss für künftige Neubewertungen erweiterbar sein und sollte idealerweise versionskontrolliert innerhalb Ihrer Codebasis liegen.

Für jedes Bedrohungsmodell ist es hilfreich:

- Ihre Systemelemente zu beschreiben (Assets, Komponenten)
- Datenflüsse und Interaktionen mit Dritten zu beschreiben
- Stakeholder zu identifizieren
- Bedrohungen zu besprechen
- Reaktionen auf Bedrohungen zu berücksichtigen
- Den Prozess zu wiederholen

## Zu beantwortende Fragen

Es gibt keine einzelne ideale Darstellung für Bedrohungsmodellierung. Daher ist es sinnvoll, mehrere [Frameworks für Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks) zu verwenden, um unterschiedliche Probleme zu beleuchten.

Eine Form des Bedrohungsmodells besteht darin, die vier Hauptfragen aus dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) zu stellen und zu beantworten.

- [Woran arbeiten wir?](#1._what_are_we_working_on)
- [Was kann schiefgehen?](#2._what_can_go_wrong)
- [Was werden wir dagegen tun?](#3._what_are_we_going_to_do_about_it)
- [Haben wir gute Arbeit geleistet?](#4._did_we_do_a_good_enough_job)

Gehen wir diese Fragen der Reihe nach durch.

## 1. Woran arbeiten wir?

Die erste Frage betrifft die Beschreibung des Projekts. Dazu erstellen Sie ein Modell des Systems, das aus Datenflussdiagrammen, Architekturdiagrammen oder Anwendungsfalldiagrammen besteht, die Komponenten, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und wichtige Stakeholder zeigen.

Um den Umfang des Bedrohungsmodells festzulegen, müssen wir abgrenzen, welche Bedrohungen unser eigenes Projekt betreffen und welche auf den Browser oder andere Schichten des Webplattform-Stacks abzielen — diese definieren wir als externe Abhängigkeiten unseres Bedrohungsmodells. Das [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/) bietet einen hilfreichen Ausgangspunkt und beschreibt die Umgebung, die von den meisten Websites und Webanwendungen gemeinsam genutzt wird.

Es ist hilfreich, sich bewusst zu machen, für welche Teile Sie verantwortlich sein werden und welche Teile von anderen übernommen werden, beispielsweise Schutzmaßnahmen, die der Browser üblicherweise für Sie bereitstellt. Wenn Sie eine Liste relevanter bestehender Bedrohungsmodelle für Ihre Softwareabhängigkeiten und Ihre Umgebung pflegen, können Sie in Ihrem eigenen Bedrohungsmodell darauf verweisen und müssen die Modellierung nicht erneut durchführen. Bei der Bedrohungsmodellierung geht es nicht um Vollständigkeit, sondern darum, das Verständnis im Laufe der Zeit zu verbessern.

Zu Lernzwecken verwenden die folgenden Abschnitte das Beispiel einer Blog-Website. Auf der Seite [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) erfahren Sie, wie dieser Leitfaden in ein Bedrohungsmodelldokument übertragen wird.
Beachten Sie, dass die Annahmen, die wir über den Blog treffen, unvollständig sind, und berücksichtigen Sie, dass auch die Annahmen über Ihr eigenes System wahrscheinlich unvollständig sein werden. Es ist sinnvoll, mit Ihrem Team ein Brainstorming durchzuführen, um einen vollständigeren Überblick über das System zu erhalten, das Sie schützen möchten.

Beschreiben wir, woran wir arbeiten, anhand von Komponenten, Assets, Datenflüssen, Vertrauensgrenzen, Abhängigkeiten und Stakeholdern.

### Komponenten

Komponenten sind Dinge, die Code ausführen oder Daten speichern. Beispielsweise könnten wir sagen, dass unsere Blog-Website aus mehreren Softwarekomponenten besteht, die für unser Bedrohungsmodell interessant sind:

- Webserver
- Blog-Software (beispielsweise ein Generator für statische Websites oder ein CMS)
- Statische Seiten
- Benutzerauthentifizierung
- Von Benutzern eingereichte Inhalte (beispielsweise ein Kommentarbereich)
- Kontaktformular
- Fetch-Aufrufe an APIs (eigene oder externe)
- Skripte von Drittanbietern, beispielsweise zum Anzeigen einer Karte oder zur Nutzungsanalyse

Natürlich kann die Komplexität Ihrer Website stark variieren. Vielleicht erstellen Sie eine statische Website, hauptsächlich mit HTML und CSS, vielleicht hosten Sie eine Website mit einem CMS, einem Server und einer Datenbank, oder vielleicht entwickeln Sie eine komplexe Webanwendung wie ein Online-Spiel, einen E-Mail-Client oder eine Zeichen-Webanwendung.

Je nachdem, was Sie tun, kann Ihr Bedrohungsmodell entweder recht kurz und eigenständig sein oder sehr lang werden. Vielleicht ziehen Sie es vor, mehrere Bedrohungsmodelle für verschiedene Teile Ihres Systems zu erstellen und sich jeweils auf einen Teil zu konzentrieren.

Um identifizierte Komponenten zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben C (C1, C2, C3, ...).

### Assets

Assets sind Dinge, die ein Angreifer haben möchte und die geschützt werden müssen. Dazu können gehören:

- Benutzerdaten: Allgemeine Benutzerdaten und personenbezogene Informationen (PII).
- Benutzeranmeldedaten: Anmeldeinformationen, Benutzernamen, Passwörter, Passkeys.
- Cookies und Sitzungsinformationen.
- Private Inhalts-Assets (beispielsweise Entwürfe von Blogbeiträgen).

Um identifizierte Assets zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben A (A1, A2, A3, ...).

### Datenflüsse und Vertrauensgrenzen

Alles, was innerhalb des Browsers geschieht oder aus einer Benutzereingabe stammt, ist _nicht vertrauenswürdig_. Bedrohungsmodellierung hilft Ihnen, die **Vertrauensgrenze** zu identifizieren — den Punkt, an dem Daten von nicht vertrauenswürdigen Bereichen außerhalb Ihrer Kontrolle in Ihre vertrauenswürdige Anwendungslogik übergehen.

Wir identifizieren den Mechanismus, über den Assets zwischen Komponenten verschoben werden. Sie können uni- oder bidirektional sein.

- Authentifizierungsflüsse
- Ablauf des Kontaktformulars
- Datenflüsse zu externen Diensten

Wenn Daten zwischen einem Benutzer und Ihrer Anwendung oder zwischen Ihrer Anwendung und Diensten von Drittanbietern fließen, überschreiten sie Vertrauensgrenzen, die von unterschiedlichen Instanzen kontrolliert werden. Angriffe erfolgen häufig zwischen diesen Komponenten mit unterschiedlichen Berechtigungen. Wir sollten uns daher dieser Angriffsflächen bewusst werden und identifizieren, wo Validierung, Verschlüsselung oder andere Sicherheitskontrollen erforderlich sind.

Um identifizierte Datenflüsse zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben F (F1, F2, F3, ...). Vertrauensgrenzen werden üblicherweise durch eine gestrichelte Linie visualisiert.

### Externe Abhängigkeiten

Sie müssen externe Abhängigkeiten möglicherweise nicht detailliert modellieren, sollten jedoch Ihre Annahmen über sie dokumentieren und sie auf der Ebene modellieren, die erforderlich ist, um über Ihre eigenen Risiken nachzudenken. Wir können sie als Black Boxes betrachten, deren Interna uns unbekannt sind, die aber idealerweise ebenfalls eigene Bedrohungsmodelle haben, auf die wir in unserem eigenen Modell verweisen. Zum Beispiel:

- Betriebssystem (OS)
- Browser und die Webplattform (siehe auch [Bedrohungsmodell der Webplattform](https://w3c.github.io/threat-model-web/))
- Browsererweiterungen (WebExtensions)

Um identifizierte externe Abhängigkeiten zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben E (E1, E2, E3, ...).

### Stakeholder

Identifizieren Sie Ihre Zielgruppe und verstehen Sie ihre Interessen, Vorteile und potenziellen Schäden. Wer könnte von potenziellen Bedrohungen betroffen sein? Menschen und Gruppen an erste Stelle zu setzen, hilft Ihnen dabei, nicht nur über die Sicherheit technischer Komponenten nachzudenken. Stattdessen liegt Ihr Fokus darauf, wie sicher und vertrauenswürdig die Beziehung zwischen echten Menschen und Ihrer Software ist.

- Anonymer Benutzer
- Registrierter Benutzer
- Benutzer mit Behinderung
- Blogadministrator oder Entwickler

Spam kann beispielsweise in erster Linie Administratoren schaden, während das Offenlegen von Anmeldedaten sowohl Benutzern als auch Administratoren schaden kann.

Beachten Sie, dass Sie potenzielle Angreifer nicht modellieren. Eine übermäßige Charakterisierung von Angreifern kann zu Verzerrungen in der Analyse führen.

Um identifizierte Stakeholder zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben S (S1, S2, S3, ...).

## 2. Was kann schiefgehen?

Nachdem wir unsere Umgebung modelliert haben, können wir darüber nachdenken, was damit schiefgehen kann. Bedrohungen können auf verschiedene Arten identifiziert werden; eine gängige Methode besteht darin, Bedrohungslisten zu betrachten. Beispielsweise könnten wir zunächst Bedrohungskarten ansehen oder uns auf externe Bedrohungslisten wie die OWASP Top Ten oder andere stützen.

- [OWASP Top Ten](https://top10.owasp.org/2025/)
- Abschnitte zu Sicherheitsaspekten in Spezifikationen der Webplattform sowie in MDN Web Docs.

Bei einer Webanwendung kann dies Cross-Site Scripting, Cross-Site Request Forgery, Kontoübernahme oder Datenlecks über Skripte von Drittanbietern umfassen.

Eine weitere gängige Methode zur Identifizierung von Bedrohungen ist die Verwendung von [Frameworks zur Bedrohungsanalyse](/de/docs/Web/Security/Threat_modeling/Frameworks), insbesondere STRIDE und LINDDUN.

Sie können entscheiden, ob Sie identifizierte Bedrohungen in einer Tabelle darstellen oder sie lieber analytischer beschreiben möchten, beispielsweise indem Sie die Ereigniskette aufschreiben, die zu einem Angriff führt („Kill Chain“). Der [W3C Threat Modeling Guide](https://w3c.github.io/threat-modeling-guide/#curatorial-storytelling) empfiehlt, eine Geschichte zu erzählen und Bedrohungen zu priorisieren, damit die wichtigsten Bedrohungen zuerst besprochen werden und Leser nicht mit überflüssigen Details überfordert werden.

Um die identifizierten Bedrohungen zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben T (T1, T2, T3, ...).

## 3. Was werden wir dagegen tun?

Im dritten Schritt müssen wir beantworten, wie wir auf die Bedrohungen reagieren werden, die wir im zweiten Schritt identifiziert haben.

Es gibt verschiedene Optionen dafür, wie wir auf Bedrohungen reagieren können. Im Allgemeinen lassen sich Reaktionen mithilfe der Eselsbrücke **ERTA** in vier Kategorien einteilen:

- **E**liminieren: Das Asset oder die Bedrohung entfernen.
- **R**eduzieren: Es erschweren, beispielsweise durch Hinzufügen einer Kontrolle, Gegenmaßnahme oder Abwehrmaßnahme.
- **T**ransferieren: Die Verantwortung für die Eindämmung der Bedrohung auf ein anderes System oder eine andere Organisation verlagern (beispielsweise einen Dienst eines Drittanbieters).
- **A**kzeptieren: Akzeptieren, dass es derzeit nicht möglich ist, die Bedrohung einzudämmen; sie ist weiterhin offen und muss überwacht werden.

Beispiele:

- Eliminieren: Wir entfernen die Kommentarfunktion aus unserem Blog, da sie nicht weit verbreitet genutzt wird und wir uns nicht mit ihrer Absicherung befassen möchten.
- Reduzieren: Wir erlauben nur registrierten Benutzern, die Kommentarfunktion zu verwenden.
- Transferieren: Wir verwenden ein externes Plugin für Kommentare.
- Akzeptieren: Wir akzeptieren, dass unsere Kommentarfunktion Bedrohungen wie Spam ausgesetzt ist, akzeptieren diese Bedrohung jedoch und implementieren eine Spamüberwachung.

Dokumentieren Sie Ihre Reaktionen und Entscheidungen. Sie werden wahrscheinlich in Schritt 4 darauf zurückkommen, wenn Sie fragen, ob diese Reaktionen gut genug sind.

Um identifizierte Reaktionen zu referenzieren, indexieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben R (R1, R2, R3, ...).

## 4. Haben wir gute Arbeit geleistet?

Nachdem Sie eine Runde der Bedrohungsmodellierung durchgeführt haben, erstellen Sie (private) Issues für Ihr Projekt und beschreiben Sie Ihre Ergebnisse in einem Bedrohungsmodelldokument. Auch wenn keine Maßnahme oder Fehlerbehebung erforderlich ist, wird die Dokumentation Ihres Bedrohungsmodells später nützlich sein.

Sie können die erstellten Issues und die verfasste Dokumentation in der nächsten Runde der Bedrohungsmodellierung erneut betrachten und prüfen, ob sich etwas geändert hat oder neu bewertet werden muss. Es ist hilfreich, Ihre dokumentierten Issues erneut zu validieren. Mit jeder Iteration der Bedrohungsmodellierung sollte Ihr System sicherer werden und Sie werden sich weiterer Bedrohungen und Risiken bewusster. Die Erfahrung, die Sie im Laufe der Zeit sammeln, hilft Ihnen dabei, Ihre Bedrohungsmodellierung robuster zu gestalten; sie wird nicht von Anfang an perfekt oder vollständig sein, und das muss sie auch nicht sein, um nützlich zu sein.

Wir stellen ein [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) als Inspiration bereit. Bedrohungsmodelldokumente werden leider nicht sehr häufig veröffentlicht und nicht breit geteilt; sie sind oft eine interne Ressource. Es ist jedoch eine gute Praxis, Ihr Bedrohungsmodell zu veröffentlichen, sowohl um Vertrauenswürdigkeit zu demonstrieren als auch um zusätzliches Feedback einzuholen.

In der obigen Bedrohungsmodellierung konzentrieren wir uns auf die vier Schlüsselfragen, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert sind. Es gibt Frameworks, einschließlich STRIDE und LINDDUN, die Prozessen zur Bedrohungsmodellierung Struktur geben. Im Leitfaden [Frameworks und Ressourcen für Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks) finden Sie eine Liste von Datenschutz- und Sicherheitsbedrohungen sowie Beispielfragen, die Sie bei der Entwicklung Ihres eigenen Bedrohungsmodells unterstützen können.

## Siehe auch

- [Frameworks und Ressourcen für Bedrohungsmodelle](/de/docs/Web/Security/Threat_modeling/Frameworks)
- [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Threat Modeling Guide für Autoren von Spezifikationen](https://w3c.github.io/threat-modeling-guide/)
- [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
