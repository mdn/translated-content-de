---
title: Bedrohungsmodellierung
slug: Web/Security/Threat_modeling
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Bedrohungsmodellierung ist ein Prozess, der dabei hilft, potenzielle Sicherheitsrisiken in Anwendungen und auf Websites zu erkennen und zu verstehen. Sie hilft Ihnen, die spezifischen Schwachstellen Ihrer Anwendung, der Browserumgebung und der Interaktion der Benutzer mit Ihrer Benutzeroberfläche zu verstehen. Dieser Artikel erläutert, was ein Bedrohungsmodell ist und wie Sie eine Bedrohungsmodellierung durchführen. Er gibt einen kompakten Überblick und führt Sie durch den Prozess.

Je nach Ziel kann eine Bedrohungsmodellierung aufwendiger sein als hier beschrieben. Ob Sie eine einfache Bedrohungsmodellierung für Ihre eigenen Zwecke durchführen oder eine umfassendere Bewertung für ein Software-Audit vornehmen: Ein Bedrohungsmodell ermöglicht es Ihnen, tatsächliche und wahrgenommene Bedrohungen zu erkennen und darauf zu reagieren.

Diese Seite beschreibt den allgemeinen Prozess der Bedrohungsmodellierung. Informationen zu Frameworks und Ressourcen finden Sie unter:

- [Frameworks und Werkzeuge für die Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks)
  - : Überblick über die Frameworks STRIDE und LINDDUN, die Bedrohungsmodellierungsprozessen eine Struktur geben, sowie über weitere Werkzeuge für die Bedrohungsmodellierung.

Ein Beispiel finden Sie unter:

- [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
  - : Ein Beispiel für das Bedrohungsmodell eines öffentlich zugänglichen Blogs mit statischen Seiten. Zu den interaktiven Komponenten gehören Benutzerkommentare, ein Kontaktformular, Analyseskripte und eine eingebettete Karte.

## Was ist eine Bedrohung?

Eine Bedrohung ist alles, was der Funktionalität Ihrer Website oder den dort gespeicherten Daten potenziell schaden könnte.

Ein Bedrohungsmodell ist eine strukturierte Darstellung potenzieller Bedrohungen. Es umfasst alle Informationen, die für die Sicherheit Ihres Produkts relevant sind – unabhängig davon, ob es sich dabei um einen Server, eine Anwendung oder eine Website handelt. Es ist ein fortlaufend gepflegtes Dokument oder eine gedankliche Übersicht, die Ihre schützenswerten Werte identifiziert (Was schützen Sie?), potenzielle Angreifer (Wer könnte Sie, Ihr Produkt oder Ihre Benutzer angreifen wollen?) und potenzielle Schwachstellen (Wo liegen die Schwachstellen Ihres Produkts und worin bestehen sie?).

Bedrohungen sind stets vorhanden, müssen aber nicht zu Angriffen führen. Ein Angriff liegt vor, wenn eine Bedrohung tatsächlich gegen ein aktives System umgesetzt wird. Ein System besteht dabei aus einer Sammlung schützenswerter Werte. Ist ein System gut geschützt, bleiben Bedrohungen im Idealfall Bedrohungen und führen nie zu einem tatsächlichen Angriff.

Wenn wir über Bedrohungen nachdenken, können wir Schwachstellen des Systems erkennen, etwa [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) oder [JavaScript Prototype Pollution](/de/docs/Web/Security/Attacks/Prototype_pollution).

Als Reaktion auf Schwachstellen setzen wir dann Schutzmaßnahmen um: Sie schützen das System, soweit es ihnen möglich ist. In bestimmten Fällen kann es auch sinnvoll sein, zu akzeptieren, dass eine Bedrohung eintreten könnte, sich auf die negativen Folgen vorzubereiten und zu beobachten, ob sie tatsächlich eintritt. Dies muss eine bewusste Entscheidung sein: Eine Bedrohung zu akzeptieren, sollte nicht leichtfertig geschehen.

Wie wahrscheinlich eine Bedrohung eintritt und wie schwerwiegend ihre Auswirkungen wären, wird üblicherweise als Risiko beschrieben.

Zur Veranschaulichung der verschiedenen Begriffe dient ein Haus als Beispiel:

- Bedrohung: ein Einbrecher.
- Schwachstelle: ein unverschlossenes Fenster oder ein schwaches Türschloss.
- Angriff: Der Einbrecher steigt durch das Fenster oder knackt das Schloss.
- Schutzmaßnahme: ein stabiles Sicherheitsschloss, eine Alarmanlage oder eine Regel, nach der alle Fenster verschlossen sein müssen.
- Risiko: Wir haben öffentlich angekündigt, dass wir im Urlaub sind. Das erhöht das Risiko, dass Einbrecher versuchen, in unser Haus einzudringen.
- Schwere der Auswirkungen: Die Auswirkungen können gravierender sein, wenn der Einbrecher weiß, dass wir im Urlaub sind, da er sich dann vermutlich mehr Zeit im Haus nimmt. Sie fallen möglicherweise geringer aus, wenn sich jemand während unserer Abwesenheit um das Haus kümmert oder wenn ich alle meine Wertsachen in einem externen Safe untergebracht habe.

## Was ist Bedrohungsmodellierung?

Bedrohungsmodellierung ist der Prozess, ein repräsentatives Modell zu erstellen, das die Bedrohungen für Ihr System beschreibt. Sie ist eine Form der Risikobewertung mit dem Ziel, die wahrscheinlichsten Angriffswege zu analysieren und die für Angreifer attraktivsten Werte zu identifizieren. Es handelt sich um einen strukturierten, wiederholbaren Prozess zur Analyse einer Systemdarstellung. So können Sie relevante Sicherheits- und Datenschutzaspekte erkennen, verstehen, was schiefgehen kann, und entscheiden, wie Sie darauf reagieren. Laut dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) umfasst die Erstellung eines Bedrohungsmodells typischerweise die Beantwortung von vier zentralen Fragen:

1. Woran arbeiten wir?
2. Was kann schiefgehen?
3. Was werden wir dagegen unternehmen?
4. Haben wir gute Arbeit geleistet?

## Wie führt man eine Bedrohungsmodellierung durch?

Die Bedrohungsmodellierung sollte früh im Entwicklungsprozess beginnen und regelmäßig erneut aufgegriffen werden. So wie Sie Ihre Software fortlaufend weiterentwickeln, sollten Sie auch die Sicherheit des Systems mithilfe Ihres Bedrohungsmodells kontinuierlich analysieren. Üblicherweise beginnt dies unmittelbar nach der Festlegung der Funktionen.

Die Modellierung ist nicht ausschließlich Aufgabe von Sicherheitsprüfern. Alle, denen der Datenschutz oder die Sicherheit eines Systems wichtig ist, sollten sich daran beteiligen können. Die fachübergreifende Zusammenarbeit von Personen mit unterschiedlichen Perspektiven stärkt das Bedrohungsmodell. Wer beispielsweise das System entwirft, versteht in der Regel genau, was entwickelt wird und welche möglichen Probleme besonders beunruhigend sind.

Ein gemeinsames Verständnis Ihres Systems und seiner Bedrohungen ermöglicht es Ihnen, seine Widerstandsfähigkeit zu beurteilen. Dieses Verständnis sollte in einem Bedrohungsmodelldokument festgehalten werden.

Die Erstellung eines ersten Bedrohungsmodelldokuments kann einigen Aufwand erfordern. Häufig geschieht dies in einem Workshop mit Ihrem Team, entweder eigenständig oder unter Anleitung einer Fachperson. Das entstandene Dokument muss sich für spätere Neubewertungen erweitern lassen und sollte idealerweise zusammen mit Ihrer Codebasis versionskontrolliert werden.

Für jedes Bedrohungsmodell ist es hilfreich, Folgendes zu tun:

- Die Elemente Ihres Systems beschreiben (schützenswerte Werte und Komponenten)
- Datenflüsse und Interaktionen mit Dritten beschreiben
- Beteiligte und Betroffene identifizieren
- Bedrohungen besprechen
- Reaktionen auf Bedrohungen erwägen
- Den Prozess wiederholen

## Zu beantwortende Fragen

Es gibt keine einzelne ideale Darstellungsform für ein Bedrohungsmodell. Daher ist es sinnvoll, mehrere [Frameworks für die Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks) zu nutzen, um unterschiedliche Probleme sichtbar zu machen.

Eine Form des Bedrohungsmodells besteht darin, die vier Hauptfragen aus dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) zu stellen und zu beantworten.

- [Woran arbeiten wir?](#1._what_are_we_working_on)
- [Was kann schiefgehen?](#2._what_can_go_wrong)
- [Was werden wir dagegen unternehmen?](#3._what_are_we_going_to_do_about_it)
- [Haben wir gute Arbeit geleistet?](#4._did_we_do_a_good_enough_job)

Gehen wir diese Fragen der Reihe nach durch.

## 1. Woran arbeiten wir?

Bei der ersten Frage geht es darum, das Projekt zu beschreiben. Dazu erstellen Sie ein Modell des Systems, beispielsweise mit Datenflussdiagrammen, Architekturdiagrammen oder Anwendungsfalldiagrammen. Diese zeigen Komponenten, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und die wichtigsten Beteiligten und Betroffenen.

Um den Umfang des Bedrohungsmodells festzulegen, müssen wir unterscheiden, welche Bedrohungen unser eigenes Projekt betreffen und welche den Browser oder andere Schichten der Webplattform. Letztere betrachten wir als externe Abhängigkeiten unseres Bedrohungsmodells. Das [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/) bietet einen nützlichen Ausgangspunkt und beschreibt die Umgebung, die die meisten Websites und Webanwendungen gemeinsam haben.

Es ist hilfreich, sich bewusst zu machen, für welche Teile Sie selbst verantwortlich sind und um welche sich andere kümmern – etwa um Schutzmechanismen, die der Browser normalerweise bereitstellt. Wenn Sie eine Liste relevanter bestehender Bedrohungsmodelle für Ihre Softwareabhängigkeiten und Ihre Umgebung pflegen, können Sie in Ihrem eigenen Bedrohungsmodell darauf verweisen und müssen die Modellierung nicht wiederholen. Bei der Bedrohungsmodellierung geht es nicht um Vollständigkeit, sondern darum, das Verständnis im Laufe der Zeit zu verbessern.

Zu Lernzwecken verwenden die folgenden Abschnitte eine Blog-Website als Beispiel. Auf der Seite [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) sehen Sie, wie dieser Leitfaden in ein Bedrohungsmodelldokument umgesetzt wird.
Beachten Sie, dass unsere Annahmen über den Blog unvollständig sind. Auch die Annahmen, die Sie über Ihr eigenes System treffen, werden wahrscheinlich nicht vollständig sein. Ein Brainstorming mit Ihrem Team hilft dabei, einen umfassenderen Überblick über das zu schützende System zu gewinnen.

Beschreiben wir also, woran wir arbeiten: Komponenten, schützenswerte Werte, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten sowie Beteiligte und Betroffene.

### Komponenten

Komponenten sind Dinge, die Code ausführen oder Daten speichern. Beispielsweise könnten wir festhalten, dass unsere Blog-Website aus mehreren Softwarekomponenten besteht, die für unser Bedrohungsmodell relevant sind:

- Webserver
- Blogsoftware (beispielsweise ein Static-Site-Generator oder ein CMS)
- Statische Seiten
- Benutzerauthentifizierung
- Von Benutzern eingereichte Inhalte (beispielsweise ein Kommentarbereich)
- Kontaktformular
- Fetch-Aufrufe an eigene oder externe APIs
- Skripte von Drittanbietern, beispielsweise zur Anzeige einer Karte oder zur Nutzungsanalyse

Die Komplexität Ihrer Website kann natürlich stark variieren. Vielleicht erstellen Sie eine statische Website hauptsächlich mit HTML und CSS, betreiben eine Website mit CMS, Server und Datenbank oder entwickeln eine komplexe Webanwendung wie ein Onlinespiel, einen E-Mail-Client oder eine Zeichenanwendung.

Je nach Projekt kann Ihr Bedrohungsmodell kurz und in sich abgeschlossen sein. Es kann aber auch sehr umfangreich werden. Dann ist es möglicherweise sinnvoll, mehrere Bedrohungsmodelle für verschiedene Teile Ihres Systems zu erstellen und sich jeweils auf einen Teil zu konzentrieren.

Um identifizierte Komponenten in Ihrem Bedrohungsmodell zu referenzieren, kennzeichnen Sie sie mit dem Buchstaben C (C1, C2, C3, ...).

### Schützenswerte Werte

Schützenswerte Werte sind Dinge, die ein Angreifer erlangen möchte und die geschützt werden müssen. Dazu gehören beispielsweise:

- Benutzerdaten: allgemeine Benutzerdaten und personenbezogene Daten (PII).
- Zugangsdaten: Anmeldeinformationen, Benutzernamen, Passwörter und Passkeys.
- Cookies und Sitzungsinformationen.
- Nicht öffentliche Inhalte (beispielsweise Entwürfe von Blogbeiträgen).

Um identifizierte schützenswerte Werte in Ihrem Bedrohungsmodell zu referenzieren, kennzeichnen Sie sie mit dem Buchstaben A (A1, A2, A3, ...).

### Datenflüsse und Vertrauensgrenzen

Alles, was innerhalb des Browsers geschieht oder aus Benutzereingaben stammt, ist _nicht vertrauenswürdig_. Die Bedrohungsmodellierung hilft Ihnen, die **Vertrauensgrenze** zu identifizieren: den Punkt, an dem Daten aus nicht vertrauenswürdigen Bereichen außerhalb Ihrer Kontrolle in die vertrauenswürdige Logik Ihrer Anwendung gelangen.

Wir identifizieren die Wege, auf denen sich schützenswerte Werte zwischen Komponenten bewegen. Diese können in eine oder beide Richtungen verlaufen.

- Authentifizierungsabläufe
- Datenfluss des Kontaktformulars
- Datenflüsse zu externen Diensten

Wenn Daten zwischen einem Benutzer und Ihrer Anwendung oder zwischen Ihrer Anwendung und Diensten von Drittanbietern fließen, überschreiten sie Vertrauensgrenzen zwischen Bereichen, die von unterschiedlichen Stellen kontrolliert werden. Angriffe erfolgen häufig an den Übergängen zwischen diesen Komponenten mit unterschiedlichen Berechtigungen. Deshalb sollten wir uns dieser Angriffsflächen bewusst sein und ermitteln, wo Validierung, Verschlüsselung oder andere Sicherheitsmaßnahmen erforderlich sind.

Um identifizierte Datenflüsse in Ihrem Bedrohungsmodell zu referenzieren, kennzeichnen Sie sie mit dem Buchstaben F (F1, F2, F3, ...). Vertrauensgrenzen werden üblicherweise als gestrichelte Linien dargestellt.

### Externe Abhängigkeiten

Sie müssen externe Abhängigkeiten nicht vollständig modellieren. Sie sollten jedoch Ihre Annahmen darüber dokumentieren und sie so detailliert modellieren, wie es für die Einschätzung Ihrer eigenen Risiken nötig ist. Wir können sie als Blackboxes betrachten, deren Interna wir nicht kennen. Idealerweise gibt es für sie eigene Bedrohungsmodelle, auf die wir in unserem Modell verweisen können. Beispiele sind:

- Betriebssystem (OS)
- Browser und Webplattform (siehe auch das [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/))
- Browsererweiterungen (WebExtensions)

Um identifizierte externe Abhängigkeiten in Ihrem Bedrohungsmodell zu referenzieren, kennzeichnen Sie sie mit dem Buchstaben E (E1, E2, E3, ...).

### Beteiligte und Betroffene

Identifizieren Sie die Menschen und Gruppen, die mit Ihrem System zu tun haben, und verstehen Sie ihre Interessen, Vorteile und möglichen Schäden. Wer könnte von potenziellen Bedrohungen betroffen sein? Wenn Sie Menschen und Gruppen in den Mittelpunkt stellen, vermeiden Sie es, nur über die Sicherheit technischer Komponenten nachzudenken. Stattdessen richten Sie den Blick darauf, wie sicher und vertrauenswürdig die Beziehung zwischen echten Menschen und Ihrer Software ist.

- Anonyme Benutzer
- Registrierte Benutzer
- Benutzer mit Behinderungen
- Blogadministratoren oder -entwickler

Spam kann beispielsweise vor allem Administratoren schaden, während der Verlust von Zugangsdaten sowohl Benutzern als auch Administratoren schaden kann.

Beachten Sie, dass Sie potenzielle Angreifer nicht modellieren. Eine zu detaillierte Charakterisierung von Angreifern kann zu Verzerrungen bei der Analyse führen.

Um identifizierte Beteiligte und Betroffene in Ihrem Bedrohungsmodell zu referenzieren, kennzeichnen Sie sie mit dem Buchstaben S (S1, S2, S3, ...).

## 2. Was kann schiefgehen?

Nachdem wir unsere Umgebung modelliert haben, können wir überlegen, was darin schiefgehen könnte. Bedrohungen lassen sich auf unterschiedliche Weise identifizieren. Eine verbreitete Methode ist die Arbeit mit Bedrohungslisten. Beispielsweise könnten wir zunächst Bedrohungsübersichten betrachten oder externe Listen wie die OWASP Top Ten heranziehen.

- [OWASP Top Ten](https://top10.owasp.org/2025/)
- Abschnitte zu Sicherheitsaspekten in Spezifikationen der Webplattform sowie in den MDN Web Docs.

Bei einer Webanwendung könnten dazu Cross-Site Scripting, Cross-Site Request Forgery, die Übernahme von Benutzerkonten oder der Abfluss von Daten über Skripte von Drittanbietern gehören.

Eine weitere verbreitete Möglichkeit, Bedrohungen zu identifizieren, ist die Verwendung von [Frameworks zur Bedrohungsanalyse](/de/docs/Web/Security/Threat_modeling/Frameworks), insbesondere STRIDE und LINDDUN.

Sie können entscheiden, ob Sie identifizierte Bedrohungen in einer Tabelle darstellen oder sie lieber analytisch beschreiben, indem Sie beispielsweise die Ereigniskette aufschreiben, die zu einem Angriff führt („Kill Chain“). Der [W3C-Leitfaden zur Bedrohungsmodellierung](https://w3c.github.io/threat-modeling-guide/#curatorial-storytelling) empfiehlt, Bedrohungen anhand einer nachvollziehbaren Darstellung zu erläutern und Prioritäten zu setzen. So werden die wichtigsten Bedrohungen zuerst besprochen und Leser nicht mit nebensächlichen Details überfordert.

Um identifizierte Bedrohungen in Ihrem Bedrohungsmodell zu referenzieren, kennzeichnen Sie sie mit dem Buchstaben T (T1, T2, T3, ...).

## 3. Was werden wir dagegen unternehmen?

Im dritten Schritt müssen wir beantworten, wie wir auf die im zweiten Schritt identifizierten Bedrohungen reagieren wollen.

Es gibt verschiedene Möglichkeiten, auf Bedrohungen zu reagieren. Grundsätzlich lassen sich die Reaktionen anhand der Eselsbrücke **ERTA** in vier Kategorien einteilen:

- **E**liminate (beseitigen): Den schützenswerten Wert oder die Bedrohung entfernen.
- **R**educe (verringern): Einen Angriff erschweren, beispielsweise durch eine Sicherheitskontrolle, Schutzmaßnahme oder Gegenmaßnahme.
- **T**ransfer (übertragen): Die Verantwortung für die Eindämmung der Bedrohung auf ein anderes System oder eine andere Organisation übertragen (beispielsweise einen Dienst von Drittanbietern).
- **A**ccept (akzeptieren): Anerkennen, dass die Bedrohung derzeit nicht eingedämmt werden kann; sie besteht fort und muss beobachtet werden.

Beispiele:

- Beseitigen: Wir entfernen die Kommentarfunktion aus unserem Blog, weil sie kaum genutzt wird und wir den Aufwand für ihre Absicherung vermeiden möchten.
- Verringern: Wir erlauben nur registrierten Benutzern, die Kommentarfunktion zu verwenden.
- Übertragen: Wir nutzen ein externes Plugin für Kommentare.
- Akzeptieren: Wir akzeptieren, dass unsere Kommentarfunktion Bedrohungen wie Spam ausgesetzt ist, und führen eine Überwachung auf Spam ein.

Dokumentieren Sie Ihre Reaktionen und Entscheidungen. Im vierten Schritt werden Sie wahrscheinlich darauf zurückkommen, um zu prüfen, ob diese Reaktionen ausreichen.

Um identifizierte Reaktionen in Ihrem Bedrohungsmodell zu referenzieren, kennzeichnen Sie sie mit dem Buchstaben R (R1, R2, R3, ...).

## 4. Haben wir gute Arbeit geleistet?

Nachdem Sie einen Durchlauf der Bedrohungsmodellierung abgeschlossen haben, erstellen Sie (private) Issues für Ihr Projekt und dokumentieren Ihre Erkenntnisse in einem Bedrohungsmodelldokument. Auch wenn keine Maßnahmen oder Fehlerbehebungen erforderlich sind, wird die Dokumentation Ihres Bedrohungsmodells später nützlich sein.

Beim nächsten Durchlauf der Bedrohungsmodellierung können Sie die erstellten Issues und die Dokumentation erneut prüfen, um festzustellen, ob sich etwas geändert hat oder neu bewertet werden muss. Es ist hilfreich, dokumentierte Probleme erneut zu überprüfen. Mit jedem Durchlauf sollte Ihr System sicherer werden und Ihr Bewusstsein für weitere Bedrohungen und Risiken wachsen. Die im Laufe der Zeit gesammelte Erfahrung hilft Ihnen, Ihre Bedrohungsmodellierung fundierter zu gestalten. Sie muss nicht von Anfang an perfekt oder vollständig sein, um nützlich zu sein.

Zur Anregung stellen wir ein [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) bereit. Leider werden Bedrohungsmodelldokumente nur selten veröffentlicht oder breit geteilt; häufig bleiben sie interne Ressourcen. Dabei ist es eine gute Praxis, Ihr Bedrohungsmodell zu veröffentlichen, um Vertrauenswürdigkeit zu demonstrieren und zusätzliches Feedback einzuholen.

Bei der obigen Bedrohungsmodellierung konzentrieren wir uns auf die vier zentralen Fragen aus dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org). Frameworks wie STRIDE und LINDDUN geben Bedrohungsmodellierungsprozessen eine Struktur. Eine Liste von Bedrohungen für Datenschutz und Sicherheit sowie Beispielfragen, die Ihnen bei der Entwicklung Ihres eigenen Bedrohungsmodells helfen können, finden Sie im [Leitfaden zu Frameworks und Ressourcen für die Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks).

## Siehe auch

- [Frameworks und Ressourcen für die Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling/Frameworks)
- [Beispiel für ein Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C-Leitfaden zur Bedrohungsmodellierung für Verfasser von Spezifikationen](https://w3c.github.io/threat-modeling-guide/)
- [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
