---
title: Bedrohungsmodellierung
slug: Web/Security/Threat_modeling
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

Die Bedrohungsmodellierung ist ein Prozess, der dabei helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen. Sie kann Ihnen helfen, die spezifischen Schwachstellen Ihrer Anwendung, der Browserumgebung und der Interaktion des Benutzers mit Ihrer Benutzeroberfläche zu verstehen. Dieser Artikel beschreibt, was ein Bedrohungsmodell ist und wie man Bedrohungsmodellierung durchführt, indem er einen leichten Überblick gibt und den Prozess der Bedrohungsmodellierung durchläuft.

Abhängig von Ihrem Ziel kann die Bedrohungsmodellierung tiefer gehen, als hier beschrieben. Egal, ob Sie eine leichte Bedrohungsmodellierung für Ihren eigenen Nutzen durchführen oder eine umfassendere Bewertung für eine Softwareprüfung vornehmen, ein Bedrohungsmodell ermöglicht die Identifizierung und Lösung tatsächlicher und wahrgenommener Bedrohungen.

Diese Seite beschreibt den gesamten Prozess der Bedrohungsmodellierung. Für Bedrohungsmodelframeworks und -ressourcen, siehe:

- [Bedrohungsmodelframeworks und Werkzeuge](/de/docs/Web/Security/Threat_modeling/Frameworks)
  - : Überblick über die STRIDE- und LINDDUN-Frameworks, die Struktur für Bedrohungsmodellierungsprozesse bieten, sowie zusätzliche Bedrohungsmodellierungswerkzeuge.

Für ein Beispiel eines Bedrohungsmodells, siehe:

- [Beispielhaftes Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
  - : Ein beispielhaftes Bedrohungsmodell für einen öffentlichen Blog, der statische Seiten bereitstellt. Interaktive Komponenten umfassen Benutzerkommentare, ein Kontaktformular, Analyseskripte und eine Karteneinbettung.

## Was ist eine Bedrohung?

Eine Bedrohung ist alles, was potenziell die Funktionalität Ihrer Website oder die Daten, die sie hält, beschädigen könnte.

Ein Bedrohungsmodell ist eine strukturierte Darstellung potenzieller Bedrohungen. Es umfasst alle Informationen, die die Sicherheit Ihres Produkts beeinflussen, egal ob dieses Produkt ein Server, eine Anwendung oder eine Website ist. Es ist ein lebendiges Dokument oder eine mentale Karte, die Ihre Vermögenswerte (Was schützen Sie?), potenzielle Gegner (wer möchte Sie, Ihr Produkt oder Ihre Benutzer angreifen?) und potenzielle Schwachstellen (wo und was sind die Schwachstellen Ihres Produkts?) identifiziert.

Bedrohungen sind immer vorhanden, müssen sich jedoch nicht in Angriffe verwandeln. Ein Angriff bedeutet, dass eine Bedrohung tatsächlich gegen ein Live-System (ein System ist eine Sammlung von Vermögenswerten) durchgeführt wird. Idealerweise, wenn ein System gut geschützt ist, bleiben Bedrohungen Bedrohungen und treten nie tatsächlich auf.

Wenn wir über Bedrohungen nachdenken, können wir Systemschwächen (Schwachstellen) identifizieren, wie [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) oder [JavaScript-Prototypverschmutzung](/de/docs/Web/Security/Attacks/Prototype_pollution).

Wir implementieren dann Maßnahmen als Reaktion auf Schwachstellen: Sie verteidigen das System soweit sie können. In bestimmten spezifischen Fällen ist es auch möglich zu akzeptieren, dass die Bedrohung in Erscheinung treten könnte, sich darauf vorzubereiten, die negativen Konsequenzen zu akzeptieren, und zu überwachen, ob dies tatsächlich geschieht. Dies muss eine bewusste Entscheidung sein: Eine Bedrohung zu akzeptieren, ist nichts, was man leichtfertig tun sollte.

Wie wahrscheinlich es ist, dass eine Bedrohung auftritt und wie schwerwiegend ihre Auswirkungen wären, wird typischerweise als Risiko beschrieben.

Um die verschiedenen Begriffe zu veranschaulichen, nehmen wir ein Haus als Beispiel:

- Bedrohung: Ein Einbrecher.
- Schwachstelle: Ein unverschlossenes Fenster oder ein schwaches Türschloss.
- Angriff: Der Einbrecher klettert durch das Fenster oder knackt das Schloss.
- Maßnahme: Ein starkes Sicherheitsschloss, ein Alarmsystem, Richtlinien, um sicherzustellen, dass alle Fenster verschlossen sind.
- Risiko: Wir haben öffentlich verkündet, dass wir im Urlaub sind, was das Risiko erhöht, dass Einbrecher versuchen, in unser Haus einzudringen.
- Schwere der Auswirkung: Die Auswirkungen werden größer sein, wenn der Einbrecher weiß, dass wir im Urlaub sind, da er sich sicher fühlt, mehr Zeit in unserem Haus zu verbringen. Die Schwere wird geringer sein, wenn ich einen Haussitter habe oder ich alle meine Wertsachen in einem externen Safe aufbewahrt habe.

## Was ist Bedrohungsmodellierung?

Bedrohungsmodellierung ist der Prozess der Erstellung eines repräsentativen Modells, das die Bedrohungen Ihrer Systeme beschreibt. Es ist eine Form der Risikobewertung mit dem Ziel, die wahrscheinlichsten Angriffsvektoren zu analysieren und Vermögenswerte zu identifizieren, die von einem Angreifer am meisten begehrt werden. Es ist ein strukturierter, wiederholbarer Prozess zur Analyse einer Darstellung eines Systems, damit Sie relevante Sicherheits- und Datenschutzbedenken identifizieren, verstehen, was schiefgehen kann, und entscheiden können, wie darauf reagiert werden soll. Laut dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) umfasst die Erstellung eines Bedrohungsmodells typischerweise die Beantwortung von vier Schlüsselfragen:

1. Woran arbeiten wir?
2. Was kann schiefgehen?
3. Was werden wir dagegen tun?
4. Haben wir einen guten genug Job gemacht?

## Wie macht man Bedrohungsmodellierung?

Bedrohungsmodellierung sollte früh in Ihrem Entwicklungsprozess stattfinden und häufig überprüft werden. Genauso wie Sie ständig über Ihre Software iterieren, sollten Sie auch kontinuierlich die Sicherheit des Systems mit Hilfe Ihres Bedrohungsmodells analysieren. Normalerweise beginnt dies direkt, nachdem die Funktionen definiert wurden.

Modellierungsaktivitäten werden nicht ausschließlich von Sicherheitsprüfern durchgeführt. Jeder, der sich um die Privatsphäre oder Sicherheit eines Systems sorgt, sollte befähigt werden, zu helfen. Eine funktionsübergreifende Zusammenarbeit von einer vielfältigen Gruppe von Teilnehmern macht das Bedrohungsmodell stärker. Zum Beispiel hat vermutlich jeder, der das System entwirft, ein klares Verständnis dafür, was gebaut wird und welche Bedenken sie nachts wach halten könnten.

Ein gemeinsames Verständnis Ihres Systems und seiner Bedrohungen ermöglicht es Ihnen, die Robustheit Ihres Systems zu messen. Dies sollte in einem Bedrohungsmodelldokument festgehalten werden.

Es kann sehr viel Arbeit sein, ein erstes Bedrohungsmodelldokument zu erstellen. Oft wird diese Arbeit im Rahmen eines Workshops mit Ihrem Team durchgeführt, entweder selbstgeführt oder von einem Fachmann moderiert. Das produzierte Bedrohungsmodelldokument muss erweiterbar sein für zukünftige Neubewertungen und idealerweise versionskontrolliert innerhalb Ihres Codebestandes leben.

Für jedes Bedrohungsmodell hilft es:

- Beschreiben Sie Ihre Systemelemente (Vermögenswerte, Komponenten)
- Beschreiben Sie Datenflüsse und Interaktionen mit Dritten
- Identifizieren Sie Beteiligte
- Diskutieren Sie Bedrohungen
- Betrachten Sie Bedrohungsreaktionen
- Iterieren Sie

## Zu beantwortende Fragen

Es gibt keine einzige ideale Darstellung der Bedrohungsmodellierung, daher ist es eine gute Idee, mehrere [Bedrohungsmodelframeworks](/de/docs/Web/Security/Threat_modeling/Frameworks) zu verwenden, um verschiedene Probleme zu beleuchten.

Eine Form des Bedrohungsmodells beinhaltet das Fragen und Beantworten der vier Hauptfragen aus dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org).

- [Woran arbeiten wir?](#1._woran_arbeiten_wir)
- [Was kann schiefgehen?](#2._was_kann_schiefgehen)
- [Was werden wir dagegen tun?](#3._was_werden_wir_dagegen_tun)
- [Haben wir einen guten Job gemacht?](#4._haben_wir_einen_guten_genug_job_gemacht)

Gehen wir diese Fragen der Reihe nach durch.

## 1. Woran arbeiten wir?

Die erste Frage betrifft die Beschreibung des Projekts. Dazu erstellen Sie ein Modell des Systems, das aus Datenflussdiagrammen, Architekturdiagrammen oder Anwendungsfalldiagrammen besteht, die Komponenten, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und wichtige Beteiligte zeigen.

Um den Umfang des Bedrohungsmodells zu definieren, müssen wir abgrenzen, welche Bedrohungen unser eigenes Projekt betreffen und welche den Browser oder andere Ebenen des Webplattform-Stacks betreffen - wir definieren diese als externe Abhängigkeiten zu unserem Bedrohungsmodell. Das [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/) bietet einen nützlichen Ausgangspunkt und skizziert die Umgebung, die von den meisten Websites und Webanwendungen geteilt wird.

Es ist hilfreich, sich darüber im Klaren zu sein, für welche Teile Sie verantwortlich sein werden und welche Teile von anderen übernommen werden, z. B. Schutzmaßnahmen, die der Browser normalerweise für Sie bereitstellt. Wenn Sie eine Liste der relevanten bestehenden Bedrohungsmodelle für Ihre Softwareabhängigkeiten und Ihre Umgebung pflegen, können Sie diese in Ihrem eigenen Bedrohungsmodell referenzieren und müssen nicht die Modellierung erneut durchführen. Bedrohungsmodellierung dreht sich nicht um Vollständigkeit; es geht darum, das Verständnis im Laufe der Zeit zu verbessern.

Für Lernzwecke verwenden die folgenden Abschnitte das Beispiel einer Blog-Website. Siehe die Seite [Beispielhaftes Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) für die Übersetzung dieses Leitfadens in ein Bedrohungsmodelldokument.
Beachten Sie, dass die Annahmen, die wir über den Blog machen werden, unvollständig sind, und erkennen Sie an, dass die Annahmen, die Sie über Ihr eigenes System machen werden, wahrscheinlich auch unvollständig sein werden. Es ist eine gute Idee, mit Ihrem Team zu brainstormen, um einen vollständigeren Überblick über das System zu erhalten, das Sie schützen möchten.

Lassen Sie uns beschreiben, woran wir in Bezug auf Komponenten, Vermögenswerte, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und Beteiligte arbeiten.

### Komponenten

Komponenten sind Dinge, die Code ausführen oder Daten speichern. Zum Beispiel könnten wir sagen, dass unsere Blog-Website aus mehreren Softwarekomponenten besteht, die für unser Bedrohungsmodell interessant sein werden:

- Webserver
- Blogsoftware (zum Beispiel ein statischer Seitengenerator oder ein CMS)
- Statische Seiten
- Benutzerauthentifizierung
- Vom Benutzer bereitgestellte Inhalte (zum Beispiel eine Kommentarsektion)
- Kontaktformular
- Abrufe von (eigenen oder externen) APIs
- Drittanbieterskripte, zum Beispiel zum Anzeigen einer Karte oder zur Nutzung der Analyse

Natürlich kann die Komplexität Ihrer Website erheblich variieren. Vielleicht bauen Sie eine statische Website, hauptsächlich mit HTML und CSS, vielleicht betreiben Sie eine Site mit einem CMS, einem Server und einer Datenbank, oder vielleicht bauen Sie eine komplexe Webanwendung wie ein Online-Spiel, einen E-Mail-Client oder eine Zeichenanwendung.

Abhängig von dem, was Sie tun, kann Ihr Bedrohungsmodell entweder ziemlich kurz und in sich abgeschlossen sein, oder es kann sehr lang sein, und Sie ziehen es vielleicht vor, mehrere Bedrohungsmodelle für verschiedene Teile Ihres Systems zu erstellen, wobei Sie sich gleichzeitig auf einen Teil konzentrieren.

Zur Referenzierung identifizierter Komponenten indizieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben C (C1, C2, C3, ...).

### Vermögenswerte

Vermögenswerte sind Dinge, die ein Angreifer will und die geschützt werden müssen. Das könnte sein:

- Benutzerdaten: Allgemeine Benutzerdaten und persönlich identifizierbare Informationen (PII).
- Benutzeranmeldeinformationen: Login-Informationen, Benutzernamen, Passwörter, Zugangsschlüssel.
- Cookies und Sitzungsinformationen.
- Private Inhaltsressourcen (zum Beispiel Entwürfe von Blogbeiträgen).

Zur Referenzierung identifizierter Vermögenswerte indizieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben A (A1, A2, A3, ...).

### Datenflüsse und Vertrauensgrenzen

Alles, was im Browser passiert oder von einem Benutzer eingegeben wird, ist _nicht vertrauenswürdig_. Die Bedrohungsmodellierung hilft Ihnen, die **Vertrauensgrenze** zu identifizieren - den Punkt, an dem Daten von nicht vertrauenswürdigen Bereichen außerhalb Ihrer Kontrolle in Ihre vertrauenswürdige Anwendungslogik übergehen.

Wir identifizieren den Mechanismus, durch den Vermögenswerte zwischen Komponenten bewegt werden. Diese können ein- oder bidirektional sein.

- Authentifizierungsflüsse
- Kontaktformularfluss
- Datenflüsse zu externen Diensten

Wenn Daten zwischen einem Benutzer und Ihrer Anwendung oder zwischen Ihrer Anwendung und Drittanbieterdiensten fließen, überqueren sie vertrauenswürdige Grenzen, die von verschiedenen Behörden kontrolliert werden. Angriffe geschehen oft zwischen diesen ungleich privilegierten Komponenten und wir sollten uns dieser Angriffsflächen bewusst machen, indem wir identifizieren, wo Validierung, Verschlüsselung oder andere Sicherheitskontrollen notwendig sind.

Zur Referenzierung identifizierter Datenflüsse indizieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben F (F1, F2, F3, ...). Vertrauensgrenzen werden normalerweise mit einer gestrichelten Linie visualisiert.

### Externe Abhängigkeiten

Sie modellieren externe Abhängigkeiten möglicherweise nicht im Detail, aber Sie sollten Ihre Annahmen darüber dokumentieren und sie auf der Ebene modellieren, die notwendig ist, um über Ihre eigenen Risiken nachzudenken. Wir können sie als Blackboxen betrachten, deren Inneres uns unbekannt ist, aber idealerweise haben sie auch ihre eigenen Bedrohungsmodelle, auf die wir uns in unserem eigenen beziehen. Zum Beispiel:

- Betriebssystem (OS)
- Browser und die Webplattform (siehe auch [Webplattform-Bedrohungsmodell](https://w3c.github.io/threat-model-web/))
- Browsererweiterungen (WebExtensions)

Zur Referenzierung identifizierter externer Abhängigkeiten indizieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben E (E1, E2, E3, ...).

### Beteiligte

Identifizieren Sie Ihr Publikum und verstehen Sie deren Interessen, Nutzen und potenzielle Schäden. Wer könnte von potenziellen Bedrohungen betroffen sein? Indem Sie Menschen und Gruppen in den Vordergrund stellen, vermeiden Sie es, nur über die Sicherheit technischer Komponenten nachzudenken. Stattdessen konzentrieren Sie sich darauf, wie sicher und vertrauenswürdig die Beziehung zwischen realen Menschen und Ihrer Software ist.

- Anonymer Benutzer
- Registrierter Benutzer
- Behinderter Benutzer
- Blog-Administrator oder Entwickler

Zum Beispiel könnte Spam hauptsächlich Administratoren schaden, während das Leck von Anmeldeinformationen sowohl Benutzern als auch Administratoren schaden könnte.

Beachten Sie, dass Sie potenzielle Angreifer nicht modellieren. Das Übercharakterisieren von Angreifern kann zu Analyseverzerrungen führen.

Zur Referenzierung identifizierter Beteiligter indizieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben S (S1, S2, S3, ...).

## 2. Was kann schiefgehen?

Nachdem wir unsere Umgebung modelliert haben, können wir darüber nachdenken, was schiefgehen kann. Bedrohungen können auf verschiedene Arten identifiziert werden, und eine häufige Methode ist die Betrachtung von Bedrohungslisten. Zum Beispiel könnten wir damit beginnen, Bedrohungskarten zu betrachten oder uns auf externe Bedrohungslisten wie die OWASP Top Ten oder andere zu verlassen.

- [OWASP Top Ten](https://owasp.org/Top10/2025/)
- Sicherheitsüberlegungen in Webplattform-Spezifikationen sowie auf MDN Web Docs.

Für eine Webanwendung könnte dies Cross-Site-Scripting, Cross-Site-Request-Forgery, Kontoübernahme oder Datenleckage durch Drittanbieterskripte umfassen.

Eine weitere gängige Methode zur Identifizierung von Bedrohungen besteht darin, [Bedrohungsanalyse-Frameworks](/de/docs/Web/Security/Threat_modeling/Frameworks) zu verwenden, insbesondere STRIDE und LINDDUN.

Sie können entscheiden, ob Sie identifizierte Bedrohungen in einer Tabelle präsentieren oder sie analytischer beschreiben, beispielsweise indem Sie die Ereigniskette aufschreiben, die zu einem Angriff führt ("Kill Chain"). Der [W3C Threat Modeling Guide](https://w3c.github.io/threat-modeling-guide/#curatorial-storytelling) empfiehlt, eine Geschichte zu erzählen und Bedrohungen Prioritäten zu geben, sodass die wichtigsten Bedrohungen zuerst diskutiert werden und die Leser nicht mit überflüssigen Details überfordert werden.

Zur Referenzierung der identifizierten Bedrohungen indizieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben T (T1, T2, T3, ...).

## 3. Was werden wir dagegen tun?

Im dritten Schritt müssen wir beantworten, wie wir auf die in Schritt zwei identifizierten Bedrohungen reagieren werden.

Es gibt verschiedene Möglichkeiten, auf Bedrohungen zu reagieren. Im Allgemeinen können Antworten in vier Kategorien eingeteilt werden, die durch das **ERTA**-Akronym beschrieben werden:

- **E**liminieren: Entfernen Sie das Vermögen oder die Bedrohung.
- **R**educieren: Machen Sie es schwieriger, z. B. durch Hinzufügen einer Kontrolle, Minderung oder Gegenmaßnahme.
- **T**ransferieren: Übertragen Sie die Verantwortung für die Minderung der Bedrohung auf ein anderes System oder eine Organisation (zum Beispiel ein Drittanbieterdienst).
- **A**kzeptieren: dass es derzeit nicht möglich ist, die Bedrohung zu mindern; sie ist noch offen und muss überwacht werden.

Beispiele:

- Eliminieren: Wir entfernen die Kommentarfunktionalität von unserem Blog, da sie nicht weit verbreitet genutzt wird und wir uns nicht mit deren Sicherung befassen möchten.
- Reduzieren: Wir erlauben nur registrierten Benutzern, die Kommentarfunktion zu nutzen.
- Transferieren: Wir verwenden ein externes Plugin für Kommentare.
- Akzeptieren: Wir akzeptieren, dass unsere Kommentarfunktion Bedrohungen wie Spam ausgesetzt ist, aber akzeptieren diese Bedrohung und implementieren eine Spam-Überwachung.

Dokumentieren Sie Ihre Antworten und Entscheidungen. Sie werden wahrscheinlich in Schritt 4 darauf zurückkommen, um zu fragen, ob diese Antworten gut genug sind.

Zur Referenzierung identifizierter Antworten indizieren Sie sie in Ihrem Bedrohungsmodell mit dem Buchstaben R (R1, R2, R3, ...).

## 4. Haben wir einen guten genug Job gemacht?

Sobald Sie eine Runde Bedrohungsmodellierung abgeschlossen haben, legen Sie (private) Probleme mit Ihrem Projekt an und beschreiben Ihre Erkenntnisse in einem Bedrohungsmodelldokument. Auch wenn keine Maßnahmen oder Fehlerbehebungen erforderlich sind, wird die Dokumentation Ihres Bedrohungsmodells später nützlich sein.

Sie können die Probleme, die Sie erfasst haben, und die Dokumentation, die Sie geschrieben haben, in der nächsten Runde der Bedrohungsmodellierung überprüfen und sehen, ob sich etwas geändert hat oder eine Neubewertung erforderlich ist. Es ist hilfreich, Ihre dokumentierten Probleme zu validieren. Mit jeder Iteration der Bedrohungsmodellierung sollte Ihr System sicherer werden und Sie werden sich weiterer Bedrohungen und Risiken bewusster. Die Erfahrung, die Sie im Laufe der Zeit sammeln, wird Ihnen helfen, Ihre Bedrohungsmodellierung robuster zu machen; sie wird nicht von Anfang an perfekt oder vollständig sein, und sie muss es auch nicht, um nützlich zu sein.

Wir bieten ein [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) zur Inspiration an. Bedrohungsmodell-Dokumente werden leider nicht sehr oft veröffentlicht und nicht breit geteilt; sie sind oft eine interne Ressource. Obwohl es eine gute Praxis ist, Ihr Bedrohungsmodell zu veröffentlichen, sowohl um Vertrauenswürdigkeit zu demonstrieren als auch um zusätzliches Feedback einzuholen.

In unserer obigen Bedrohungsmodellierung konzentrieren wir uns auf die vier Schlüsselfragen, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert sind. Es existieren Frameworks, einschließlich STRIDE und LINDDUN, die Struktur für Bedrohungsmodellierungsprozesse bieten. Siehe den [Leitfaden zu Bedrohungsmodelframeworks und -ressourcen](/de/docs/Web/Security/Threat_modeling/Frameworks) für eine Liste von Datenschutz- und Sicherheitsbedrohungen sowie beispielhafte Fragen, die Ihnen bei der Entwicklung Ihres eigenen Bedrohungsmodells helfen können.

## Siehe auch

- [Bedrohungsmodelframeworks und -ressourcen](/de/docs/Web/Security/Threat_modeling/Frameworks)
- [Beispielhaftes Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C-Leitfaden zur Bedrohungsmodellierung für Spezifikationsautoren](https://w3c.github.io/threat-modeling-guide/)
- [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/)
- [OWASP Bedrohungsmodellierungsleitfaden](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Bedrohungsmodellierungs-Cheat-Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
