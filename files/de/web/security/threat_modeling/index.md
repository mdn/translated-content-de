---
title: Bedrohungsmodellierung
slug: Web/Security/Threat_modeling
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

Bedrohungsmodellierung ist ein Prozess, der dabei helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen. Es kann Ihnen helfen, die spezifischen Schwachstellen Ihrer Anwendung, der Browserumgebung und die Interaktion des Benutzers mit Ihrem UI zu verstehen. Dieser Artikel beschreibt, was ein Bedrohungsmodell ist und wie man Bedrohungsmodellierung durchführt. Es bietet einen leichtgewichtigen Überblick und führt Schritt für Schritt durch den Prozess der Bedrohungsmodellierung.

Abhängig von Ihrem Ziel kann die Bedrohungsmodellierung umfangreicher sein als hier beschrieben. Ob Sie eine leichtgewichtige Bedrohungsmodellierung zu Ihrem eigenen Nutzen durchführen oder eine umfassendere Bewertung für eine Softwareprüfung vornehmen, ein Bedrohungsmodell ermöglicht die Identifizierung und Beseitigung tatsächlicher und wahrgenommener Bedrohungen.

Diese Seite beschreibt den allgemeinen Prozess der Bedrohungsmodellierung. Für Bedrohungsmodellerahmen und Ressourcen siehe:

- [Frameworks und Tools für die Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks)
  - : Übersicht über die STRIDE- und LINDDUN-Frameworks, die Struktur für Bedrohungsmodellierungsprozesse bieten, und zusätzliche Bedrohungsmodellierungstools.

Für ein Beispiel eines Bedrohungsmodells siehe:

- [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
  - : Ein Beispiel-Bedrohungsmodell für einen öffentlich zugänglichen Blog, der statische Seiten bereitstellt. Interaktive Komponenten umfassen Benutzerkommentare, ein Kontaktformular, Analyseskripte und eine Karteneinbettung.

## Was ist eine Bedrohung?

Eine Bedrohung ist alles, was potenziell der Funktionalität Ihrer Website oder den darin enthaltenen Daten schaden könnte.

Ein Bedrohungsmodell ist eine strukturierte Darstellung potenzieller Bedrohungen. Es enthält alle Informationen, die die Sicherheit Ihres Produkts betreffen, egal ob es sich um einen Server, eine Anwendung oder eine Website handelt. Es ist ein lebendiges Dokument oder eine geistige Landkarte, die Ihre Vermögenswerte (Was schützen Sie?), potenzielle Gegner (Wer möchte Sie, Ihr Produkt oder Ihre Benutzer angreifen?) und potenzielle Schwachstellen (Wo und was sind die Schwachstellen Ihres Produkts?) identifiziert.

Bedrohungen sind immer vorhanden, aber sie müssen nicht in Angriffe münden. Ein Angriff ist, wenn eine Bedrohung tatsächlich gegen ein aktives System durchgeführt wird (ein System ist eine Sammlung von Vermögenswerten). Ideal wäre es, wenn ein System gut geschützt ist, Bedrohungen nur als solche verbleiben und niemals tatsächlich eintreten.

Wenn wir über Bedrohungen nachdenken, können wir Systemschwächen (Schwachstellen) identifizieren, wie [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) oder [JavaScript-Prototyp-Pollution](/de/docs/Web/Security/Attacks/Prototype_pollution).

Wir setzen dann Abschwächungen als Reaktion auf Schwachstellen um: Sie verteidigen das System, soweit sie dazu in der Lage sind. In bestimmten spezifischen Fällen ist es auch möglich zu akzeptieren, dass die Bedrohung eintreten könnte, sich auf die negativen Konsequenzen vorzubereiten und zu überwachen, ob dies tatsächlich passiert. Dies muss eine bewusste Entscheidung sein: Eine Bedrohung zu akzeptieren, ist nichts, das auf die leichte Schulter genommen werden sollte.

Wie wahrscheinlich es ist, dass eine Bedrohung auftritt, und wie schwerwiegend ihre Auswirkungen wären, wird typischerweise als Risiko beschrieben.

Um die verschiedenen Begriffe zu veranschaulichen, nehmen wir ein Haus als Beispiel:

- Bedrohung: ein Einbrecher.
- Schwachstelle: ein unverschlossenes Fenster oder ein schwaches Türschloss.
- Angriff: der Einbrecher, der durch das Fenster klettert oder das Schloss knackt.
- Abschwächung: ein starkes Riegelschloss, ein Alarmsystem, Richtlinien, die sicherstellen, dass alle Fenster verschlossen sind.
- Risiko: Wir haben öffentlich angekündigt, dass wir im Urlaub sind, was das Risiko erhöht, dass Einbrecher versuchen, in unser Haus zu gelangen.
- Schwere der Auswirkungen: Die Auswirkungen werden größer sein, wenn der Einbrecher weiß, dass wir im Urlaub sind, da er sich sicher fühlen wird, mehr Zeit in unserem Zuhause zu verbringen. Die Schwere wird geringer sein, wenn ich einen Haussitter habe oder ich alle meine Wertgegenstände in einem externen Safe aufbewahrt habe.

## Was ist Bedrohungsmodellierung?

Bedrohungsmodellierung ist der Prozess der Erstellung eines repräsentativen Modells, das die Bedrohungen Ihres Systems beschreibt. Es ist eine Form der Risikobewertung mit dem Ziel, die wahrscheinlichsten Angriffsvektoren zu analysieren und Vermögenswerte zu identifizieren, die von einem Angreifer am meisten begehrt werden. Es ist ein strukturierter, wiederholbarer Prozess zur Analyse einer Darstellung eines Systems, sodass Sie relevante Sicherheits- und Datenschutzbedenken identifizieren, verstehen, was schiefgehen kann, und entscheiden können, wie Sie reagieren möchten. Laut dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) beinhaltet die Erstellung eines Bedrohungsmodells typischerweise das Beantworten von vier Schlüsselfragen:

1. Woran arbeiten wir?
2. Was kann schiefgehen?
3. Was werden wir dagegen tun?
4. Haben wir gute Arbeit geleistet?

## Wie macht man Bedrohungsmodellierung?

Bedrohungsmodellierung sollte früh in Ihrem Entwicklungsprozess beginnen und häufig überarbeitet werden. Genau wie Sie ständig über Ihre Software iterieren, sollten Sie auch kontinuierlich die Sicherheit des Systems unter Verwendung Ihres Bedrohungsmodells analysieren. In der Regel beginnt dies direkt nach der Definition der Funktionen.

Modellierungsaktivitäten werden nicht ausschließlich von Sicherheitsprüfern durchgeführt. Jeder, der sich um die Privatsphäre oder Sicherheit eines Systems sorgt, sollte befähigt werden, zu helfen. Querschnittliche Zusammenarbeit aus einer vielfältigen Gruppe von Teilnehmern stärkt das Bedrohungsmodell. Zum Beispiel hat derjenige, der das System entwirft, sicherlich ein klares Verständnis davon, was gebaut wird und welche Sorgen ihn nachts wachhalten könnten.

Ein gemeinsames Verständnis Ihres Systems und seiner Bedrohungen erlaubt es Ihnen, die Robustheit Ihres Systems zu messen. Dies sollte in einem Bedrohungsmodelldokument festgehalten werden.

Es kann einiges an Arbeit sein, bis man ein anfängliches Bedrohungsmodellierungsdokument hat. Oft wird diese Arbeit im Rahmen eines Workshops mit Ihrem Team erledigt, entweder selbstgesteuert oder von einem Fachmann moderiert. Das erstellte Bedrohungsmodelldokument muss erweiterbar für zukünftige Neubewertungen sein und idealerweise versionskontrolliert innerhalb Ihres Codespeichers leben.

Für jedes Bedrohungsmodell hilft es, Folgendes zu tun:

- Beschreiben Sie Ihre Systemelemente (Vermögenswerte, Komponenten)
- Beschreiben Sie Datenflüsse und Interaktionen mit Dritten
- Identifizieren Sie Stakeholder
- Diskutieren Sie Bedrohungen
- Erwägen Sie Bedrohungsreaktionen
- Iterieren

## Zu beantwortende Fragen

Es gibt keine ideale einheitliche Darstellung der Bedrohungsmodellierung, daher ist es empfehlenswert, mehrere [Frameworks für die Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks) zu verwenden, um verschiedene Probleme aufzuzeigen.

Eine Form des Bedrohungsmodells umfasst das Stellen und Beantworten der vier Hauptfragen aus dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org).

- [Woran arbeiten wir?](#1._what_are_we_working_on)
- [Was kann schiefgehen?](#2._what_can_go_wrong)
- [Was werden wir dagegen tun?](#3._what_are_we_going_to_do_about_it)
- [Haben wir gute Arbeit geleistet?](#4._did_we_do_a_good_enough_job)

Lassen Sie uns diese Fragen der Reihe nach durchgehen.

## 1. Woran arbeiten wir?

Die erste Frage dreht sich um die Beschreibung des Projekts. Dazu erstellen Sie ein Modell des Systems, das aus Datenflussdiagrammen, Architekturdiagrammen oder Anwendungsfalldiagrammen besteht, die Komponenten, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und wichtige Stakeholder zeigen.

Um den Umfang des Bedrohungsmodells zu definieren, müssen wir abgrenzen, welche Bedrohungen unser eigenes Projekt und welche den Browser oder andere Schichten des Webplattform-Stacks betreffen — wir definieren diese als externe Abhängigkeiten für unser Bedrohungsmodell. Das [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/) bietet einen nützlichen Ausgangspunkt und skizziert die Umgebung, die von den meisten Websites und Webanwendungen geteilt wird.

Es ist hilfreich, sich bewusst zu machen, für welche Teile Sie verantwortlich sein werden und welche Teile von anderen übernommen werden, wie zum Beispiel Schutzmaßnahmen, die der Browser normalerweise für Sie bereitstellt. Wenn Sie eine Liste relevanter bestehender Bedrohungsmodelle für Ihre Softwareabhängigkeiten und Ihre Umgebung pflegen, können Sie diese in Ihrem eigenen Bedrohungsmodell referenzieren und müssen das Modellieren nicht erneut durchführen. Bedrohungsmodellierung dreht sich nicht um Vollständigkeit; es geht darum, das Verständnis im Laufe der Zeit zu verbessern.

Zu Lernzwecken werden die folgenden Abschnitte das Beispiel einer Blog-Website verwenden. Siehe die Seite [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model), um zu sehen, wie dieser Leitfaden in ein Bedrohungsmodelldokument übersetzt wird.
Beachten Sie, dass die Annahmen, die wir über den Blog machen werden, unvollständig sind und nehmen Sie an, dass die Annahmen, die Sie über Ihr eigenes System machen werden, wahrscheinlich auch unvollständig sein werden. Es ist eine gute Idee, mit Ihrem Team zu brainstormen, um einen umfassenderen Überblick über das System zu erhalten, das Sie schützen möchten.

Lassen Sie uns beschreiben, woran wir arbeiten, in Bezug auf Komponenten, Vermögenswerte, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und Stakeholder.

### Komponenten

Komponenten sind Dinge, die Code ausführen oder Daten speichern. Zum Beispiel könnten wir sagen, dass unsere Blog-Website aus mehreren Softwarekomponenten bestehen wird, die für unser Bedrohungsmodell interessant sein werden:

- Webserver
- Blog-Software (zum Beispiel ein statischer Site-Generator oder ein CMS)
- Statische Seiten
- Benutzerauthentifizierung
- Vom Benutzer bereitgestellte Inhalte (zum Beispiel ein Kommentarbereich)
- Kontaktformular
- Fetch-Aufrufe zu (eigenen oder externen) APIs
- Drittskripte, zum Beispiel zur Anzeige einer Karte oder Nutzungsstatistiken

Natürlich kann die Komplexität Ihrer Website stark variieren. Vielleicht erstellen Sie eine statische Website hauptsächlich mit HTML und CSS, vielleicht hosten Sie eine Website mit einem CMS, einem Server und einer Datenbank, oder vielleicht entwickeln Sie eine komplexe Webanwendung wie ein Online-Spiel, einen E-Mail-Client oder eine Zeichenwebanwendung.

Je nachdem, was Sie tun, kann Ihr Bedrohungsmodell entweder recht kurz und in sich geschlossen sein, oder es kann sehr lang sein und Sie bevorzugen es, mehrere Bedrohungsmodelle für verschiedene Teile Ihres Systems zu erstellen, die sich jeweils auf einen Teil konzentrieren.

Um identifizierte Komponenten zu referenzieren, indexieren Sie sie im Bedrohungsmodell mit dem Buchstaben C (C1, C2, C3, ...).

### Vermögenswerte

Vermögenswerte sind Dinge, die ein Angreifer will und die geschützt werden müssen. Das könnte sein:

- Benutzerdaten: Allgemeine Benutzerdaten und persönlich identifizierbare Informationen (PII).
- Benutzeranmeldeinformationen: Anmeldedaten, Benutzernamen, Passwörter, Passkeys.
- Cookies und Sitzungsinformationen.
- Private Inhaltsressourcen (zum Beispiel Entwürfe von Blogbeiträgen).

Um identifizierte Vermögenswerte zu referenzieren, indexieren Sie sie im Bedrohungsmodell mit dem Buchstaben A (A1, A2, A3, ...).

### Datenflüsse und Vertrauensgrenzen

Alles, was im Browser passiert oder aus einer Benutzereingabe stammt, ist _nicht vertrauenswürdig_. Die Bedrohungsmodellierung hilft Ihnen dabei, die **Vertrauensgrenze** zu identifizieren — den Punkt, an dem Daten von nicht vertrauenswürdigen Bereichen außerhalb Ihrer Kontrolle in Ihre vertrauenswürdige Anwendungslogik übergehen.

Wir identifizieren den Mechanismus, durch den Vermögenswerte zwischen Komponenten bewegt werden. Sie können unidirektional oder bidirektional sein.

- Authentifizierungsflüsse
- Kontaktformularfluss
- Datenflüsse zu externen Diensten

Wenn Daten zwischen einem Benutzer und Ihrer Anwendung oder zwischen Ihrer Anwendung und Drittanbieterdiensten fließen, bewegen sie sich über Vertrauen hinweg, die von verschiedenen Autoritäten kontrolliert werden. Angriffe passieren oft zwischen diesen ungleich privilegierten Komponenten, und wir sollten uns dieser Angriffsflächen bewusst machen, indem wir identifizieren, wo Validierung, Verschlüsselung oder andere Sicherheitskontrollen erforderlich sind.

Um identifizierte Datenflüsse zu referenzieren, indexieren Sie sie im Bedrohungsmodell mit dem Buchstaben F (F1, F2, F3, ...). Vertrauensgrenzen werden normalerweise mit einer gestrichelten Linie visualisiert.

### Externe Abhängigkeiten

Sie müssen externe Abhängigkeiten möglicherweise nicht im Detail modellieren, aber Sie sollten Ihre Annahmen darüber dokumentieren und sie auf dem Niveau modellieren, das erforderlich ist, um Ihr eigenes Risiko einzuschätzen. Wir können sie wie Blackboxes betrachten, deren Interna uns unbekannt sind, die idealerweise jedoch auch ihre eigenen Bedrohungsmodelle haben, die wir in unseren eigenen referenzieren. Zum Beispiel:

- Betriebssystem (OS)
- Browser und die Webplattform (siehe auch [Bedrohungsmodell der Webplattform](https://w3c.github.io/threat-model-web/))
- Browser-Erweiterungen (WebExtensions)

Um identifizierte externe Abhängigkeiten zu referenzieren, indexieren Sie sie im Bedrohungsmodell mit dem Buchstaben E (E1, E2, E3, ...).

### Stakeholder

Identifizieren Sie Ihr Publikum und verstehen Sie deren Interessen, Vorteile und potenzielle Schäden. Wer könnte von potenziellen Bedrohungen betroffen sein? Indem Sie Menschen und Gruppen in den Mittelpunkt stellen, vermeiden Sie es, nur über die Sicherheit technischer Komponenten nachzudenken. Ihr Fokus liegt stattdessen darauf, wie sicher und vertrauenswürdig die Beziehung zwischen realen Menschen und Ihrer Software ist.

- Anonymer Benutzer
- Registrierter Benutzer
- Behinderter Benutzer
- Blog-Administrator oder Entwickler

Zum Beispiel könnte Spam in erster Linie Administratoren schaden, während das Lecken von Anmeldedaten sowohl Benutzer als auch Administratoren schädigen könnte.

Beachten Sie, dass Sie keine potenziellen Angreifer modellieren. Eine übermäßige Charakterisierung von Angreifern kann zu einem Analysebias führen.

Um identifizierte Stakeholder zu referenzieren, indexieren Sie sie im Bedrohungsmodell mit dem Buchstaben S (S1, S2, S3, ...).

## 2. Was kann schiefgehen?

Nachdem wir nun unsere Umgebung modelliert haben, können wir anfangen, darüber nachzudenken, was schiefgehen kann. Bedrohungen können auf verschiedene Weise identifiziert werden, und eine übliche Methode ist, sich Bedrohungslisten anzusehen. Zum Beispiel könnten wir damit beginnen, einen Blick auf Bedrohungskarten zu werfen oder uns auf externe Bedrohungslisten wie die OWASP Top Ten oder andere zu verlassen.

- [OWASP Top Ten](https://owasp.org/Top10/2025/)
- Sicherheitsabschnitte in Webplattform-Spezifikationen sowie in den MDN Web Docs.

Für eine Webanwendung könnte dies Cross-Site Scripting, Cross-Site Request Forgery, Kontenübernahme oder Datenlecks über Drittanbieterskripte umfassen.

Eine andere verbreitete Methode zur Identifizierung von Bedrohungen besteht in der Verwendung von [Bedrohungsanalyse-Frameworks](/de/docs/Web/Security/Threat_modeling/Frameworks), insbesondere STRIDE und LINDDUN.

Sie können entscheiden, ob Sie identifizierte Bedrohungen in einer Tabelle präsentieren oder sie analytischer beschreiben möchten, zum Beispiel indem Sie die Kette von Ereignissen, die zu einem Angriff führen ("Kill Chain"), aufschreiben. Der [W3C-Leitfaden zur Bedrohungsmodellierung](https://w3c.github.io/threat-modeling-guide/#curatorial-storytelling) empfiehlt, eine Geschichte zu erzählen und Bedrohungen Prioritäten zu geben, sodass die wichtigsten Bedrohungen zuerst diskutiert werden und die Leser nicht mit überflüssigen Details überfordert werden.

Um identifizierte Bedrohungen zu referenzieren, indexieren Sie sie im Bedrohungsmodell mit dem Buchstaben T (T1, T2, T3, ...).

## 3. Was werden wir dagegen tun?

Im dritten Schritt müssen wir beantworten, wie wir auf die Bedrohungen, die wir im zweiten Schritt identifiziert haben, reagieren werden.

Es gibt verschiedene Optionen, wie wir auf Bedrohungen reagieren könnten. Im Allgemeinen können die Reaktionen in vier Kategorien eingeteilt werden, indem die **ERTA**-Eselsbrücke verwendet wird:

- **E**liminieren: Entfernen Sie das Vermögen oder die Bedrohung.
- **R**eduzieren: Machen Sie es schwieriger, zum Beispiel durch Hinzufügen einer Kontrolle, Minderung oder Gegenmaßnahme.
- **T**ransferieren: Verschieben Sie die Verantwortung für die Abdämpfung der Bedrohung auf ein anderes System oder eine Organisation (zum Beispiel einen Drittanbieterdienst).
- **A**kzeptieren: Akzeptieren Sie, dass es derzeit nicht möglich ist, die Bedrohung zu mindern; sie bleibt offen und muss überwacht werden.

Beispiele:

- Eliminieren: Wir entfernen die Kommentarfunktionalität von unserem Blog, da sie nicht häufig genutzt wird und wir uns nicht um ihre Sicherung kümmern möchten.
- Reduzieren: Wir erlauben nur registrierten Benutzern, die Kommentarfunktion zu nutzen.
- Transferieren: Wir verwenden ein externes Plugin für Kommentare.
- Akzeptieren: Wir akzeptieren, dass unsere Kommentarfunktion Bedrohungen wie Spam ausgesetzt ist, aber wir akzeptieren diese Bedrohung und implementieren eine Spam-Überwachung.

Dokumentieren Sie Ihre Reaktionen und Entscheidungen. Sie werden wahrscheinlich im vierten Schritt darauf zurückkommen, wenn Sie fragen, ob diese Reaktionen gut genug sind.

Um identifizierte Reaktionen zu referenzieren, indexieren Sie sie im Bedrohungsmodell mit dem Buchstaben R (R1, R2, R3, ...).

## 4. Haben wir gute Arbeit geleistet?

Sobald Sie eine Runde der Bedrohungsmodellierung abgeschlossen haben, verzeichnen Sie (private) Probleme mit Ihrem Projekt und beschreiben Sie Ihre Ergebnisse in einem Bedrohungsmodelldokument. Selbst wenn keine Aktion oder Fehlerbehebung erforderlich ist, wird die Dokumentation Ihres Bedrohungsmodells später nützlich sein.

Sie können die von Ihnen verzeichneten Probleme und die von Ihnen geschriebene Dokumentation in der nächsten Runde der Bedrohungsmodellierung erneut prüfen und sehen, ob sich etwas geändert hat oder neu bewertet werden muss. Es ist hilfreich, Ihre dokumentierten Probleme zu überprüfen. Mit jeder Iteration der Bedrohungsmodellierung sollte Ihr System sicherer werden und Sie werden sich weiterer Bedrohungen und Risiken bewusster. Die Erfahrung, die Sie im Laufe der Zeit sammeln, wird Ihnen helfen, Ihre Bedrohungsmodellierung robuster zu machen; es wird nicht von Anfang an perfekt oder vollständig sein, und das muss es auch nicht, um nützlich zu sein.

Wir bieten ein [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) zur Inspiration an. Leider werden Bedrohungsmodelldokumente nicht sehr oft veröffentlicht und nicht weit verbreitet geteilt; sie sind oft eine interne Ressource. Es ist jedoch gute Praxis, Ihr Bedrohungsmodell zu veröffentlichen, sowohl um Vertrauenswürdigkeit zu demonstrieren als auch um zusätzliches Feedback zu erbitten.

In unserer oben genannten Bedrohungsmodellierung konzentrieren wir uns auf die vier Schlüsselfragen, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert sind. Es gibt Frameworks, darunter STRIDE und LINDDUN, die Struktur für Bedrohungsmodellierungsprozesse bieten. Siehe den Leitfaden zu [Frameworks und Ressourcen für die Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks) für eine Liste von Datenschutz- und Sicherheitsbedrohungen sowie Beispiele für Fragen, die Ihnen bei der Entwicklung Ihres eigenen Bedrohungsmodells helfen können.

## Siehe auch

- [Frameworks und Ressourcen für die Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks)
- [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C-Leitfaden zur Bedrohungsmodellierung für Spezifikationsautoren](https://w3c.github.io/threat-modeling-guide/)
- [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/)
- [OWASP Bedrohungsmodellierungs-Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Bedrohungsmodellierung Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
