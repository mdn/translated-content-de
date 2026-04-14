---
title: Bedrohungsmodellierung
slug: Web/Security/Threat_modeling
l10n:
  sourceCommit: 254daa6717e1d162f9fff51a0c49162c798f9bb0
---

Bedrohungsmodellierung ist ein Prozess, der dabei helfen kann, potenzielle Sicherheitsrisiken in Anwendungen und Websites zu identifizieren und zu verstehen. Sie kann Ihnen helfen, die spezifischen Schwachstellen Ihrer Anwendung, der Browserumgebung und der Interaktion des Benutzers mit Ihrer Benutzeroberfläche zu verstehen. Dieser Artikel beschreibt, was ein Bedrohungsmodell ist und wie man Bedrohungsmodellierung durchführt, indem er einen einfachen Überblick gibt und den Prozess der Bedrohungsmodellierung durchläuft.

Je nach Zielsetzung kann die Bedrohungsmodellierung umfangreicher sein als hier beschrieben. Egal, ob Sie eine einfache Bedrohungsmodellierung zu Ihrem eigenen Nutzen durchführen oder eine umfangreichere Bewertung für ein Software-Audit vornehmen, ein Bedrohungsmodell ermöglicht es Ihnen, tatsächliche und wahrgenommene Bedrohungen zu identifizieren und zu lösen.

Diese Seite beschreibt den allgemeinen Prozess der Bedrohungsmodellierung. Für Bedrohungsmodelli-Rahmenwerke und Ressourcen, siehe:

- [Bedrohungsmodellierungs-Rahmenwerke und Werkzeuge](/de/docs/Web/Security/Threat_modeling/Frameworks)
  - : Überblick über die STRIDE- und LUNDDUN-Rahmenwerke, die Struktur für Bedrohungsmodellierungsprozesse bieten, sowie zusätzliche Bedrohungsmodellierungswerkzeuge.

Für ein Beispiel-Bedrohungsmodell, siehe:

- [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
  - : Ein Beispiel-Bedrohungsmodell für einen öffentlich zugänglichen Blog, der statische Seiten bereitstellt. Interaktive Komponenten umfassen Benutzerkommentare, ein Kontaktformular, Analyseskripte und eine Karten-Einbettung.

## Was ist eine Bedrohung?

Eine Bedrohung ist alles, was potenziell die Funktionalität Ihrer Website oder die darin enthaltenen Daten schädigen könnte.

Ein Bedrohungsmodell ist eine strukturierte Darstellung potenzieller Bedrohungen. Es umfasst alle Informationen, die die Sicherheit Ihres Produkts betreffen, sei es ein Server, eine Anwendung oder eine Website. Es ist ein lebendiges Dokument oder eine mentale Karte, die Ihre Vermögenswerte (Was schützen Sie?), potenziellen Gegner (Wer könnte Sie, Ihr Produkt oder Ihre Benutzer angreifen wollen?) und potenziellen Schwachstellen (Wo und was sind die Schwachstellen Ihres Produkts?) identifiziert.

Bedrohungen sind immer vorhanden, aber sie müssen nicht in Angriffe übergehen. Ein Angriff erfolgt, wenn eine Bedrohung tatsächlich gegen ein laufendes System (ein System ist eine Sammlung von Vermögenswerten) ausgeführt wird. Idealerweise bleiben Bedrohungen, wenn ein System gut geschützt ist, als solche bestehen und treten nie tatsächlich ein.

Wenn wir über Bedrohungen nachdenken, können wir Systemschwächen (Schwachstellen) identifizieren, wie [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) oder [JavaScript-Prototypenverschmutzung](/de/docs/Web/Security/Attacks/Prototype_pollution).

Dann implementieren wir Milderungsmaßnahmen als Antwort auf Schwachstellen: Sie verteidigen das System, soweit sie dazu in der Lage sind. In bestimmten Fällen ist es auch möglich, zu akzeptieren, dass sich die Bedrohung materialisieren könnte, sich vorzubereiten, die nachteiligen Folgen zu akzeptieren, und zu überwachen, ob dies tatsächlich geschieht. Dies muss eine bewusste Entscheidung sein: Eine Bedrohung zu akzeptieren ist nichts, was leichtfertig getroffen werden sollte.

Wie wahrscheinlich es ist, dass eine Bedrohung auftritt und wie schwerwiegend ihre Auswirkungen wären, wird typischerweise als Risiko beschrieben.

Um die verschiedenen Begriffe zu veranschaulichen, nehmen wir ein Haus als Beispiel:

- Bedrohung: Ein Einbrecher.
- Schwachstelle: Ein unverschlossenes Fenster oder ein schwaches Türschloss.
- Angriff: Der Einbrecher, der durch das Fenster klettert oder das Schloss knackt.
- Minderung: Ein starkes Riegelschloss, ein Alarmsystem, die Richtlinie, sicherzustellen, dass alle Fenster verschlossen sind.
- Risiko: Wir haben öffentlich angekündigt, dass wir im Urlaub sind, was das Risiko erhöht, dass Einbrecher versuchen, in unser Haus einzubrechen.
- Schwere der Auswirkungen: Die Auswirkungen sind größer, wenn der Einbrecher weiß, dass wir im Urlaub sind, da er sich sicher fühlt, mehr Zeit in unserem Haus zu verbringen. Die Schwere wird geringer sein, wenn ich einen Haussitter habe oder alle Wertsachen in einem Offsite-Tresor platziert habe.

## Was ist Bedrohungsmodellierung?

Bedrohungsmodellierung ist der Prozess, ein repräsentatives Modell zu erstellen, das die Bedrohungen Ihres Systems beschreibt. Es ist eine Form der Risikobewertung mit dem Ziel, die wahrscheinlichsten Angriffsvektoren zu analysieren und die von einem Angreifer am meisten begehrten Vermögenswerte zu identifizieren. Es ist ein strukturierter, wiederholbarer Prozess zur Analyse einer Darstellung eines Systems, sodass Sie relevante Sicherheits- und Datenschutzbedenken identifizieren, verstehen können, was schiefgehen kann und entscheiden, wie Sie darauf reagieren. Laut dem [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) beinhaltet die Erstellung eines Bedrohungsmodells typischerweise das Beantworten von vier Schlüsselfragen:

1. Woran arbeiten wir?
2. Was kann schiefgehen?
3. Was werden wir dagegen tun?
4. Haben wir einen ausreichenden Job gemacht?

## Wie macht man Bedrohungsmodellierung?

Die Bedrohungsmodellierung sollte früh in Ihrem Entwicklungsprozess erfolgen und regelmäßig überprüft werden. Genau wie Sie Ihre Software ständig weiterentwickeln, sollten Sie auch kontinuierlich die Sicherheit des Systems mit Ihrem Bedrohungsmodell analysieren. Normalerweise beginnt dieser Prozess direkt nachdem die Features definiert wurden.

Modellierungsaktivitäten werden nicht ausschließlich von Sicherheitsprüfern durchgeführt. Jeder, der sich um die Privatsphäre oder Sicherheit eines Systems sorgt, sollte in der Lage sein, mitzuhelfen. Eine funktionsübergreifende Zusammenarbeit von einer Vielzahl von Teilnehmern macht das Bedrohungsmodell stärker. Zum Beispiel hat derjenige, der das System entwirft, sicherlich ein klares Verständnis davon, was gebaut wird und welche Bedenken sie nachts wach halten könnten.

Ein gemeinsames/verbreitetes Verständnis Ihres Systems und seiner Bedrohungen ermöglicht es Ihnen, die Robustheit Ihres Systems zu messen. Dies sollte in einem Bedrohungsmodell-Dokument festgehalten werden.

Es kann durchaus einige Arbeit sein, ein anfängliches Bedrohungsmodell-Dokument zu erstellen. Oft wird diese Arbeit als Teil eines Workshops mit Ihrem Team erledigt, entweder eigenständig oder von einem Profi moderiert. Das erstellte Bedrohungsmodell-Dokument muss erweiterbar für zukünftige Neubewertungen sein und idealerweise versionskontrolliert in Ihrer Codebasis leben.

Für jedes Bedrohungsmodell hilft es:

- Beschreiben Sie Ihre Systemelemente (Vermögenswerte, Komponenten)
- Beschreiben Sie Datenflüsse und Interaktionen mit Drittparteien
- Identifizieren Sie Interessenvertreter
- Diskutieren Sie Bedrohungen
- Berücksichtigen Sie Bedrohungsantworten
- Iterieren

## Zu beantwortende Fragen

Es gibt keine einheitliche ideale Darstellung der Bedrohungsmodellierung, deshalb ist es ratsam, mehrere [Bedrohungsmodellierungs-Rahmenwerke](/de/docs/Web/Security/Threat_modeling/Frameworks) zu verwenden, um unterschiedliche Probleme zu beleuchten.

Eine Form des Bedrohungsmodells beinhaltet das Stellen und Beantworten der vier Hauptfragen des [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org).

- [Woran arbeiten wir?](#1._was_arbeiten_wir_an)
- [Was kann schiefgehen?](#2._was_kann_schiefgehen)
- [Was werden wir dagegen tun?](#3._was_werden_wir_dagegen_tun)
- [Haben wir einen ausreichenden Job gemacht?](#4._haben_wir_einen_ausreichenden_job_gemacht)

Lassen Sie uns diese Fragen der Reihe nach durchgehen.

## 1. Woran arbeiten wir?

Die erste Frage bezieht sich auf die Beschreibung des Projekts. Dazu erstellen Sie ein Modell des Systems, welches aus Datenflussdiagrammen, Architekturschaubildern oder Anwendungsfalldiagrammen besteht, die Komponenten, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und wichtige Interessenvertreter zeigen.

Um den Umfang des Bedrohungsmodells zu definieren, müssen wir abgrenzen, welche Bedrohungen unser eigenes Projekt und welche den Browser oder andere Schichten des Webplattform-Stacks betreffen – wir definieren diese als externe Abhängigkeiten zu unserem Bedrohungsmodell. Das [Threat Model for the Web Platform](https://w3c.github.io/threat-model-web/) bietet einen nützlichen Ausgangspunkt und skizziert die Umgebung, die die meisten Websites und Webanwendungen gemeinsam haben.

Es ist hilfreich, sich bewusst zu machen, welche Teile Sie selbst verantworten und welche von anderen, wie etwa vom Browser bereitgestellte Schutzmechanismen, übernommen werden. Wenn Sie eine Liste relevanter vorhandener Bedrohungsmodelle für Ihre Softwareabhängigkeiten und Ihre Umgebung pflegen, können Sie diese in Ihrem eigenen Bedrohungsmodell referenzieren und müssen die Modellierung nicht erneut durchführen. Bedrohungsmodellierung geht nicht um Vollständigkeit; es geht darum, das Verständnis im Laufe der Zeit zu verbessern.

Für Lernzwecke verwenden die folgenden Abschnitte das Beispiel einer Blog-Website. Siehe die Seite [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) für eine Umsetzung dieses Leitfadens in ein Bedrohungsmodell-Dokument. Beachten Sie, dass die Annahmen, die wir über den Blog machen, unvollständig sind und erkennen Sie, dass die Annahmen, die Sie über Ihr eigenes System machen werden, wahrscheinlich ebenfalls unvollständig sein werden. Es ist eine gute Idee, mit Ihrem Team zu brainstormen, um einen vollständigeren Überblick über das System zu bekommen, das Sie schützen möchten.

Lassen Sie uns beschreiben, woran wir arbeiten, in Bezug auf Komponenten, Vermögenswerte, Datenflüsse, Vertrauensgrenzen, Abhängigkeiten und Interessenvertreter.

### Komponenten

Komponenten sind Dinge, die Code ausführen oder Daten speichern. Zum Beispiel könnten wir sagen, dass unsere Blog-Website aus mehreren Softwarekomponenten besteht, die für unser Bedrohungsmodell interessant sind:

- Webserver
- Blog-Software (zum Beispiel ein statischer Seitengenerator oder ein CMS)
- Statische Seiten
- Benutzer-Authentifizierung
- Benutzer-eingereichte Inhalte (zum Beispiel eine Kommentarsektion)
- Kontaktformular
- Abrufaufrufe zu (eigenen oder externen) APIs
- Drittanbieter-Skripte, zum Beispiel zur Anzeige einer Karte oder zur Nutzungsanalyse

Natürlich kann die Komplexität Ihrer Website stark variieren. Vielleicht erstellen Sie eine statische Website, hauptsächlich mit HTML und CSS, vielleicht hosten Sie eine Website mit einem CMS, einem Server und einer Datenbank, oder vielleicht bauen Sie eine komplexe Webanwendung wie ein Online-Spiel, einen E-Mail-Client oder eine Zeichnungs-Webapp.

Je nachdem, was Sie tun, kann Ihr Bedrohungsmodell entweder sehr kurz und in sich geschlossen sein, oder es kann sehr umfangreich sein und Sie ziehen es vor, für verschiedene Teile Ihres Systems mehrere Bedrohungsmodelle zu erstellen, die jeweils auf einen Teil fokussiert sind.

Um identifizierte Komponenten zu referenzieren, indizieren Sie diese in Ihrem Bedrohungsmodell mit dem Buchstaben C (C1, C2, C3, ...).

### Vermögenswerte

Vermögenswerte sind Dinge, die ein Angreifer will, und die geschützt werden müssen. Dies könnte sein:

- Benutzerdaten: Allgemeine Benutzerdaten und persönlich identifizierbare Informationen (PII).
- Benutzeranmeldedaten: Anmeldeinformationen, Benutzernamen, Passwörter, Passwörter.
- Cookies und Sitzungsinformationen.
- Private Inhaltswerte (zum Beispiel Entwürfe von Blogbeiträgen).

Um identifizierte Vermögenswerte zu referenzieren, indizieren Sie diese in Ihrem Bedrohungsmodell mit dem Buchstaben A (A1, A2, A3, ...).

### Datenflüsse und Vertrauensgrenzen

Alles, was innerhalb des Browsers passiert oder aus einer Benutzereingabe stammt, ist _nicht vertrauenswürdig_. Die Bedrohungsmodellierung hilft Ihnen, die **Vertrauensgrenze** zu identifizieren — den Punkt, an dem Daten von nicht vertrauenswürdigen Bereichen außerhalb Ihrer Kontrolle in Ihre vertrauenswürdige Anwendungslogik übergehen.

Wir identifizieren den Mechanismus, durch den Vermögenswerte zwischen Komponenten bewegt werden. Sie können uni- oder bidirektional sein.

- Authentifizierungsflüsse
- Kontaktformularfluss
- Datenflüsse zu externen Diensten

Wenn Daten zwischen einem Benutzer und Ihrer Anwendung oder zwischen Ihrer Anwendung und Drittanbieterdiensten fließen, bewegen sie sich über vertrauenswürdige Grenzen hinweg, die von unterschiedlichen Autoritäten kontrolliert werden. Angriffe passieren oft zwischen diesen ungleich privilegierten Komponenten und wir sollten uns dieser Angriffsflächen bewusst machen und herausfinden, wo Validierung, Verschlüsselung oder andere Sicherheitskontrollen notwendig sind.

Um identifizierte Datenflüsse zu referenzieren, indizieren Sie diese in Ihrem Bedrohungsmodell mit dem Buchstaben F (F1, F2, F3, ...). Vertrauensgrenzen werden üblicherweise durch eine gestrichelte Linie visualisiert.

### Externe Abhängigkeiten

Sie müssen externe Abhängigkeiten möglicherweise nicht im Detail modellieren, sollten jedoch Ihre Annahmen über sie dokumentieren und sie auf der nötigen Ebene modellieren, um vernünftig über Ihre eigenen Risiken nachzudenken. Wir können sie als Blackboxes betrachten, deren Interna uns unbekannt sind, aber idealerweise haben auch sie ihre eigenen Bedrohungsmodelle, die wir in unserem eigenen referenzieren. Zum Beispiel:

- Betriebssystem (OS)
- Browser und die Webplattform (siehe auch [web platform threat model](https://w3c.github.io/threat-model-web/))
- Browser-Erweiterungen (WebExtensions)

Um identifizierte externe Abhängigkeiten zu referenzieren, indizieren Sie diese in Ihrem Bedrohungsmodell mit dem Buchstaben E (E1, E2, E3, ...).

### Interessenvertreter

Identifizieren Sie Ihr Publikum und verstehen Sie deren Interessen, Vorteile und potenzielle Schäden. Wer könnte von potenziellen Bedrohungen betroffen sein? Indem Sie Menschen und Gruppen in den Vordergrund stellen, vermeiden Sie, nur über die Sicherheit technischer Komponenten nachzudenken. Stattdessen richten Sie Ihren Fokus darauf, wie sicher und vertrauenswürdig die Beziehung zwischen echten Menschen und Ihrer Software ist.

- Anonymer Benutzer
- Registrierter Benutzer
- Benutzer mit Behinderung
- Blog-Administrator oder Entwickler

Zum Beispiel kann Spam hauptsächlich Administratoren schädigen, während das Leaken von Anmeldeinformationen sowohl Benutzern als auch Administratoren schaden kann.

Beachten Sie, dass Sie potenzielle Angreifer nicht modellieren. Eine Übercharakterisierung von Angreifern kann zu Analyse-Bias führen.

Um identifizierte Interessenvertreter zu referenzieren, indizieren Sie diese in Ihrem Bedrohungsmodell mit dem Buchstaben S (S1, S2, S3, ...).

## 2. Was kann schiefgehen?

Nachdem wir unser Umfeld modelliert haben, können wir nun darüber nachdenken, was mit ihm schiefgehen kann. Bedrohungen können auf verschiedene Weise identifiziert werden, und ein üblicher Weg ist, sich Bedrohungslisten anzusehen. Zum Beispiel könnten wir damit anfangen, einen Blick auf Bedrohungskarten zu werfen oder auf externe Bedrohungslisten wie die OWASP Top Ten oder andere zu setzen.

- [OWASP Top Ten](https://owasp.org/Top10/2025/)
- Sicherheitsbedenken Abschnitte in Webplattform-Spezifikationen sowie in den MDN Web Docs.

Für eine Webanwendung könnte dies Cross-Site Scripting, Cross-Site Request Forgery, Kontenübernahmen oder Datenlecks über Drittanbieter-Skripte umfassen.

Ein weiterer üblicher Weg, Bedrohungen zu identifizieren, ist die Verwendung von [Bedrohungsanalyse-Rahmenwerken](/de/docs/Web/Security/Threat_modeling/Frameworks), insbesondere STRIDE und LINDDUN.

Sie können entscheiden, ob Sie identifizierte Bedrohungen in einer Tabelle präsentieren oder sie lieber analytisch beschreiben, indem Sie zum Beispiel die Kette von Ereignissen aufschreiben, die zu einem Angriff führen ("kill chain"). Der [W3C Bedrohungsmodellierungs-Leitfaden](https://w3c.github.io/threat-modeling-guide/#curatorial-storytelling) empfiehlt, eine Geschichte zu erzählen und Bedrohungen Prioritäten zu geben, so dass die wichtigsten Bedrohungen zuerst besprochen werden und die Leser nicht mit überflüssigen Details überfordert werden.

Um die identifizierten Bedrohungen zu referenzieren, indizieren Sie diese in Ihrem Bedrohungsmodell mit dem Buchstaben T (T1, T2, T3, ...).

## 3. Was werden wir dagegen tun?

Im dritten Schritt müssen wir beantworten, wie wir auf die Bedrohungen reagieren, die wir im zweiten Schritt identifiziert haben.

Es gibt verschiedene Möglichkeiten, wie wir auf Bedrohungen reagieren könnten. Im Allgemeinen können Antworten in vier Kategorien eingeteilt werden, wobei die **ERTA**-Mnemonik verwendet wird:

- **E**liminieren: Entfernen Sie den Vermögenswert oder die Bedrohung.
- **R**eduzieren: Machen Sie es schwieriger, zum Beispiel durch das Hinzufügen einer Kontrolle, Minderung oder Gegenmaßnahme.
- **T**ransfer: Übertragen Sie die Verantwortlichkeit für die Minderung der Bedrohung auf ein anderes System oder eine Organisation (zum Beispiel einen Drittanbieter-Dienst).
- **A**kzeptieren: dass es momentan nicht möglich ist, die Bedrohung zu mindern; sie ist weiterhin offen und muss überwacht werden.

Beispiele:

- Eliminieren: Wir entfernen die Kommentarfunktion von unserem Blog, da sie nicht häufig verwendet wird und wir uns nicht um deren Sicherheit kümmern möchten.
- Reduzieren: Wir erlauben nur registrierten Benutzern die Nutzung der Kommentarfunktion.
- Transfer: Wir verwenden ein externes Plugin für Kommentare.
- Akzeptieren: Wir akzeptieren, dass unsere Kommentarfunktion Bedrohungen wie Spam ausgesetzt ist, aber wir akzeptieren diese Bedrohung und implementieren Spam-Monitoring.

Dokumentieren Sie Ihre Antworten und Entscheidungen. Sie werden wahrscheinlich in Schritt 4 darauf zurückkommen, wenn Sie sich fragen, ob diese Antworten ausreichend waren.

Um die identifizierten Antworten zu referenzieren, indizieren Sie diese in Ihrem Bedrohungsmodell mit dem Buchstaben R (R1, R2, R3, ...).

## 4. Haben wir einen ausreichenden Job gemacht?

Sobald Sie eine Runde Bedrohungsmodellierung abgeschlossen haben, erstellen Sie (private) Probleme mit Ihrem Projekt und beschreiben Sie Ihre Ergebnisse in einem Bedrohungsmodell-Dokument. Auch wenn keine Maßnahme oder Fehlerbehebung benötigt wird, wird die Dokumentation Ihres Bedrohungsmodells später nützlich sein.

Sie können die erstellten Probleme und die von Ihnen geschriebene Dokumentation in der nächsten Runde der Bedrohungsmodellierung erneut überprüfen und sehen, ob sich etwas geändert hat oder eine Neubewertung benötigt. Es ist hilfreich, Ihre dokumentierten Probleme zu validieren. Mit jeder Iteration der Bedrohungsmodellierung sollte Ihr System sicherer werden und Sie werden sich weiterer Bedrohungen und Risiken bewusster. Die Erfahrung, die Sie im Verlauf sammeln, wird Ihnen helfen, Ihre Bedrohungsmodellierung robuster zu machen; sie wird nicht von Anfang an perfekt oder vollständig sein, und sie muss es auch nicht sein, um nützlich zu sein.

Wir bieten ein [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model) zur Inspiration. Bedrohungsmodelle werden leider nicht sehr oft veröffentlicht und nicht breit geteilt; sie sind oft eine interne Ressource. Obwohl es eine bewährte Praxis ist, Ihr Bedrohungsmodell zu veröffentlichen, um sowohl Vertrauenswürdigkeit zu demonstrieren als auch zusätzliches Feedback einzuholen.

In unserer oben beschriebenen Bedrohungsmodellierung konzentrieren wir uns auf die vier Schlüsselfragen, wie sie im [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org) definiert sind. Es existieren Rahmensysteme, einschließlich STRIDE und LUNDDUN, die Struktur für Bedrohungsmodellierungsprozesse bieten. Siehe den [Leitfaden für Bedrohungsmodellierungsrahmenwerke und Ressourcen](/de/docs/Web/Security/Threat_modeling/Frameworks) für eine Liste von Datenschutz- und Sicherheitsbedrohungen sowie Beispiel-Fragen, die Ihnen bei Ihrer eigenen Bedrohungsmodell-Entwicklung helfen können.

## Siehe auch

- [Bedrohungsmodellierungs-Rahmenwerke und Ressourcen](/de/docs/Web/Security/Threat_modeling/Frameworks)
- [Beispiel-Bedrohungsmodell](/de/docs/Web/Security/Threat_modeling/Example_threat_model)
- [Sicherheit](/de/docs/Web/Security)
- [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org)
- [W3C Bedrohungsmodellierungs-Leitfaden für Spezifikationsautoren](https://w3c.github.io/threat-modeling-guide/)
- [Bedrohungsmodell für die Webplattform](https://w3c.github.io/threat-model-web/)
- [OWASP Threat Modeling Playbook](https://github.com/OWASP/threat-modeling-playbook)
- [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
