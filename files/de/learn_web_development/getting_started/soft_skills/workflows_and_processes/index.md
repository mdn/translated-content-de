---
title: Arbeitsabläufe und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, den Anfänger oft übersehen, ist das Verständnis für das große Ganze. Sie könnten ein einzelnes Werkzeug oder eine Sprache lernen, aber nicht alle Bibliotheken, Werkzeuge, Systeme und Jobrollen kennen, die zusammen erforderlich sind, um eine vollständige Webanwendung bereitzustellen. Die folgenden Abschnitte behandeln verschiedene Aspekte des großen Ganzen auf einer hohen Ebene.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        N/A
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Übliche Technologiekombinationen in Webprojekten.</li>
          <li>Übliche Jobrollen in einem Webentwicklungsteam.</li>
          <li>Typische technische Projektphasen und wo die verschiedenen Jobrollen einbezogen sind.</li>
          <li>Gemeinsame Arbeitsmanagementprozesse wie agil und Wasserfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Erstellen einer Website werden Sie eine Kombination verschiedener Technologien verwenden, die gemeinhin als **Tech-Stack** bezeichnet werden. Je größer und komplexer Websites werden, desto komplexer wird auch der Tech-Stack. Er könnte einfach beginnen, wenn Sie eine Demo erstellen und nur Sie und einige Kollegen sie anschauen. Allerdings könnte der Tech-Stack einer scheinbar einfachen Produktionswebsite komplexer sein, als Sie zunächst denken, wenn Sie berücksichtigen, dass er:

- Schnell laden muss (dies ist der Zweck von [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig verarbeiten muss (er muss **skalieren**).
- Gut gestaltet sein muss, damit Benutzer leicht auf die Informationen und Dienste zugreifen können, die er enthält.
- Einfach für ein Team zu bearbeiten und zu warten sein muss.

Auf einer sehr hohen Ebene könnte ein Webanwendungs-Tech-Stack ungefähr so aussehen:

```plain
Front-end
HTML, CSS, JavaScript
|
Back-end
Node.js, .NET, PHP, Python, or some other server-side language
|
Database
MySQL, Postgres, MongoDB, or some other database
|
Web server
Your own, built around a server product such as Apache, or a service like Netlify
```

> [!NOTE]
> Sie werden oft Abkürzungen sehen, die sich auf beliebte Tech-Stacks beziehen, wie [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) oder [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP oder Python).

Auf MDN konzentrieren wir uns hauptsächlich auf den Frontend-Teil, aber auch dieser kann in viele verschiedene Teile untergliedert werden. Nehmen Sie zum Beispiel das Frontend:

- Sie werden wahrscheinlich ein JavaScript-Framework (wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) verwenden, um die Komponenten zu definieren, die zusammen die Benutzeroberfläche bilden.
- Das Framework wird wahrscheinlich eine Art Templating-Sprache (wie [Mustache](https://mustache.github.io/)) verwenden, um die HTML-Struktur zu definieren, aber auch Funktionalität bieten, um dynamisch variablen Inhalt einzufügen.
- Sie werden Informationen einbinden, um Ihren Inhalt mit CSS in einer Weise zu gestalten, die mit dem Framework kompatibel ist. Dies könnte in reinem CSS geschrieben sein, oder ein CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder ein Präprozessor (wie [Sass](https://sass-lang.com/)).
- Ein JavaScript-Projekt sollte Tests beinhalten, um sicherzustellen, dass neue Code-Ergänzungen seine Funktionalität nicht beeinträchtigen. Tests werden üblicherweise mit einem Test-Framework (wie [Jest](https://jestjs.io/)) implementiert.
- Größere Websites verwenden ein Packaging/Buil-Tool (wie [Parcel](https://parceljs.org/)), um die Leistung zu verbessern, indem Dateigrößen klein gehalten, ungenutzte Komponenten aus dem Produktionscode entfernt usw.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen unter Verwendung spezifischer **Architekturmuster** beschrieben werden. Zum Beispiel ist das [Model View Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)-Muster eines, dem viele JavaScript-Frameworks folgen, während [Publish-Subscribe (Pub/Sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, dass Sie diese Muster im Detail verstehen, aber eine gewisse Vertrautheit kann nützlich sein, um ein neues Framework oder Tool zu verstehen.

Es wird auch Werkzeuge geben, die außerhalb des eigentlichen Tech-Stacks verwendet werden, um Ihnen bei der Verwaltung zu helfen oder Assets für die Website zu erstellen, wie zum Beispiel:

- Planungstools, die Ihnen helfen, auf hoher Ebene zu planen, was Sie im Laufe des Projekts tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein auf [Git](https://git-scm.com/)-basiertes VCS verwenden, wie [GitHub](https://github.com/).
- Grafik-/Interface-Design-Pakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagementtools wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

Okay, das ist eine Menge zu verarbeiten. Unser Rat ist **keine Panik!** Das Ziel dieses Artikels ist es nicht, Sie zu beunruhigen, indem Sie denken, dass Sie plötzlich zehnmal so viele Dinge lernen müssen wie zuvor. Die Idee ist einfach, Ihnen das große Ganze in Bezug auf Website-Projekte bewusst zu machen und Ihnen ein grundlegendes Verständnis einiger Begriffe zu vermitteln, denen Sie begegnen könnten.

Letztendlich werden Sie ein gewisses Wissen über einige der oben genannten Werkzeuge und Technologien entwickeln, aber Sie werden nicht in allen ein Experte sein, noch müssen Sie es sein - dafür gibt es Teams. Im Moment machen Sie absolut das Richtige, indem Sie die Kernfähigkeiten wie HTML, CSS und JavaScript lernen. Weitere Werkzeuge und Spezialisierungen werden später in Ihrer Karriere kommen.

## Jobrollen

In einem Webentwicklungsteam gibt es viele verschiedene Jobrollen; es ist nützlich zu verstehen, was jede einzelne umfasst:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus Produktsicht — wie schneidet das Produkt im Vergleich zu seinen Wettbewerbern im Markt ab? Was sind seine Stärken und Schwächen? Welche neuen Funktionen verlangt die Zielgruppe, und welche haben die höchste Priorität? Was sind die wichtigsten Erfolgskriterien der Website, und wie haben die jüngsten neuen Funktionen geholfen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und schreibt Berichte, um dem Team zu helfen, zu verstehen, wie effektiv ihre Arbeit ist, und um zukünftige Arbeit zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der Arbeiten, die das Team erledigen muss. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeitsdaten, weist Personen zu, um jede Aufgabe zu erledigen, hält regelmäßige Check-in-Meetings ab, um zu sehen, ob Fortschrittsziele erreicht werden und zeigt Probleme auf, und passt den Plan bei Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich für das Verständnis der Bedürfnisse der Zielgruppe des Produkts und das Entwerfen des Produktablaufs/-erlebnisses, damit diese Bedürfnisse am effektivsten erfüllt werden. Typische UX-Fragen sind "wo sollten wir den Benutzer zuerst hinlenken, wenn er auf unsere Homepage kommt?" und "wie können wir die Anmeldung für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit wird oft mit Benutzerforschung und Tests gekoppelt, um die Zielgruppe besser zu verstehen, und mit dem Erstellen von Wireframes, um Ideen zu kommunizieren. Der UX-Designer ist einer der Hauptverbraucher der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für visuelle Designarbeiten am Website-Projekt. Grafikdesigner sind verantwortlich für eine Vielzahl von Disziplinen wie Typografie, Auswahl von Farbschemata, Erstellen von Symbolen und anderen grafischen Assets und Erstellen von Website-Mockups basierend auf den Wireframes des UX-Designers.
- **Frontend-Entwickler**
  - : Dies ist (wahrscheinlich) das, was Sie werden wollen, wenn Sie dies lesen! Frontend-Entwickler verwenden HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, um die Verhaltens- und visuellen Mockups der UX- und Grafikdesigner zum Leben zu erwecken.
- **Backend-Entwickler**
  - : Verantwortlich für die nicht visuellen Teile der Website. Sie schreiben Backend-Code, um interne Daten anzufordern, HTML-Seiten aus Vorlagen zu generieren und von Benutzern übermittelte externe Daten zu verarbeiten. Sie sind auch für die Konfiguration des Webservers verantwortlich und sorgen dafür, dass die Seite sicher ist, usw.
- **Full-Stack-Entwickler**
  - : Behandelt sowohl Frontend- als auch Backend-Entwicklungsaufgaben.
- **Quality Assurance (QA) Engineer**
  - : Verantwortlich für das Testen neuer Funktionen, um sicherzustellen, dass sie ordnungsgemäß funktionieren, und das Melden von Fehlern sowie die Kommunikation mit den Entwicklern, um ihnen zu helfen, die notwendigen Korrekturen zu priorisieren.
- **Contentspezialist/Technischer Redakteur**
  - : Verantwortlich dafür, dass der Textinhalt der Website so gut wie möglich für die Zielgruppe funktioniert. Dies umfasst die Struktur der Informationen und wie sie navigiert wird, die Beschriftungen der Benutzeroberfläche, Blog-Posts, Marketingtexte und Produktdokumentation.

### Weniger häufige Jobrollen

Andere weniger häufige Jobrollen sind:

- **Benutzerforscher**
  - : Größere Teams haben oft einen dedizierten Forscher für Benutzerforschung und Tests.
- **Suchmaschinenoptimierung (SEO) Spezialist**
  - : Analysiert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die dazu führen, dass die Website in relevanten Suchmaschinenergebnissen sichtbarer wird. Siehe {{Glossary("SEO", "SEO")}} für weitere Informationen.

## Technische Projektphasen

Ein typisches technisches Projekt könnte so ablaufen:

1. Der Produktmanager identifiziert ein neues Set an Benutzeranforderungen für die Website.
2. Er bespricht es mit dem Team, und es wird beschlossen, dass diese Anforderungen durch das Hinzufügen einer neuen Funktion zur Website erfüllt werden können.
3. Der Projektmanager bespricht mit dem Team, welche individuellen Arbeitsschritte für die Erstellung der neuen Funktion erforderlich sind, und erstellt einen [Arbeitsprozess, um sie zu verwalten](#arbeitsmanagementprozesse).
4. Der UX-Designer entwirft einen Arbeitsablauf für die neue Funktion, der beschreibt, wie sie funktionieren sollte, und ein Wireframe, um eine Idee zu geben, wo sie auf der Website passen könnte.
5. Der Grafikdesigner entwirft ein Mockup, das zeigt, wie die Funktion auf der Website aussehen wird, zusammen mit den ausgewählten Schriftarten und der Farbpalette.
6. Der Contentspezialist schreibt den erforderlichen UI-Text der Funktion sowie die nötige Dokumentation zur Unterstützung.
7. Der Backend-Entwickler erstellt die notwendigen Systeme, um die Daten, die die Funktion antreiben, sicher zu speichern und zu handhaben.
8. Der Frontend-Entwickler erstellt die interaktive Funktion basierend auf den Mockups des Grafikdesigners und verbindet sie mit dem Backend, damit sie die benötigten Daten abruft.
9. Der QA-Engineer testet die neue Funktion gründlich und erstellt einen detaillierten Bericht über die gefundenen Probleme.
10. Die Entwickler beheben die Fehler, die als so schwerwiegend erachtet werden, dass sie die Veröffentlichung der Funktion verhindern sollten.
11. Sobald die (blockierenden) Fehler behoben sind und das Projekt abgenommen wurde, kann die Funktion auf der Website veröffentlicht werden.

Dies ist eine vereinfachte Ansicht — es wird andere Phasen rund um die Funktionimplementierung selbst geben, und die Phasen werden nicht unbedingt alle in der angegebenen Reihenfolge abgeschlossen, aber dies gibt Ihnen eine Vorstellung davon, was beteiligt ist.

## Arbeitsmanagementprozesse

Der Projektmanager wird eine Art Prozess verwenden, um das Website-Projekt zu verwalten, den Fortschritt der verschiedenen Arbeitselemente zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und pünktlich erledigt werden usw. Die beiden Hauptprozessarten sind:

- **Wasserfall**
  - : Bezeichnet das Durchführen eines Projekts in klaren, festen Phasen, bei denen jede Phase von der vorhergehenden abhängt und nicht allzu viele Änderungen in den Anforderungen erwartet werden. Im Allgemeinen wird am Ende des Projekts ein einziges großes Ergebnis geliefert. Das Management des Teams neigt dazu, bürokratischer zu sein, mit weniger Autonomie.
    - Wasserfallprojekte sind tendenziell besser spezifiziert am Anfang und haben weniger Scope-Creep (hinzufügen von Anforderungen mitten im Projekt). Darüber hinaus sind größere, weniger häufige Produktveröffentlichungen einfacher in Bezug auf die Releaseplanung, das Marketing, die Schulungs- und Dokumentationsbereitstellung.
    - Wasserfall ist jedoch tendenziell weniger flexibel und Änderungen erfolgen viel langsamer. Mehrere Monate auf einen Bugfix zu warten, kann frustrierend sein.
- **Agil**
  - : Bezieht sich auf ein flexibleres Durchführen eines Projekts, bei dem mehrere Phasen gleichzeitig fortschreiten können und mehrere kleinere Ergebnisse an verschiedenen Meilensteinen im Projekt geliefert werden. Änderungen in den Anforderungen werden erwartet und können durch Prioritätsverschiebungen behandelt werden. Teams sind im Allgemeinen autonomer.
    - Agile Projekte sind flexibel und können sich leichter an Änderungen in den Anforderungen anpassen. Es kann auch schön sein, häufigere Veröffentlichungen zu haben - Bugs werden schneller behoben, Innovationen passieren öfter, und es gibt immer etwas, über das das Marketingteam sprechen kann. Agile Teams sprechen oft von kontinuierlicher Verbesserung.
    - Es besteht jedoch das Risiko von Scope-Creep und Verzögerungen bei Fristen. Projekte fühlen sich oft nie wirklich abgeschlossen an, und es gibt einen konstanten Druck, Ergebnisse zu liefern.

> [!NOTE]
> Webentwicklungsteams bevorzugen oft, mit einem agilen Prozess zu arbeiten, da Softwareentwicklung aufgrund neuer Fehler, Benutzerfeedback, Unternehmensstrategie usw. von Natur aus anfällig für (manchmal schnelle) Änderungen in den Anforderungen ist.

### Scrum und Kanban

Es gibt eine spezifische Art von agilem Ansatz namens **Scrum**, die einen festen Satz von Regeln darüber hat, wie ein Projekt durchgeführt wird. Zum Beispiel:

- Die Person, die für den Scrum verantwortlich ist, wird Scrum Master genannt. Dies ist oft einfach der Projektmanager mit einem anderen Namen.
- Die Arbeit wird in Zyklen, sogenannte **Sprints**, unterteilt, die typischerweise zwei Wochen lang sind.
- Vor jedem Sprint werden potenzielle neue Arbeitselemente besprochen, und wenn sie in den Sprint aufgenommen werden, werden sie in ein Backlog aufgenommen.
- Arbeitselemente werden aus dem Backlog entnommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie "in Bearbeitung" und "zur Überprüfung".
- Der Scrum Master hält kurze tägliche **Stand-up-Meetings**, bei denen jeder über den Fortschritt berichtet, den er gemacht hat, und über etwaige Probleme, die er möglicherweise hat, damit Probleme frühzeitig erkannt werden.
- Am Ende jedes Sprints hält der Scrum Master ein Retrospektiv-Meeting ab, um zu überprüfen, was gut lief, was nicht so gut lief und welche Lektionen vor dem nächsten Sprint gelernt werden können.

Eine andere Art von agilem Ansatz wird **Kanban** genannt, der weniger Regeln als Scrum hat, keine Sprints verwendet und sich mehr auf die Aspekte der kontinuierlichen Verbesserung von Agilität konzentriert. Kanban ist besonders nützlich für die Verwaltung von kontinuierlichen Prozessen, die kein klar definiertes Ende haben, wie bspw. Kunden-Support-Tickets.

### Kanban-Boards

Werkzeuge wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status der verschiedenen Arbeitselemente in einem Projekt zeigen. Sie werden normalerweise **Kanban-Boards** genannt, obwohl sie verwendet werden können, um verschiedene Prozessarten zu verwalten, nicht nur Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die unterschiedliche Arbeitszustände in einem Scrum-Projekt (wie "Backlog", "Todo", "in Bearbeitung" usw.), verschiedene Arten von Arbeit ("Forschung", "Design", "Entwicklung" usw.) oder was auch immer für Ihr Projekt nützlich ist, repräsentieren können.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Werkzeugoption und sind kostenlos zu verwenden - Sie müssen sich nur für ein GitHub-Konto registrieren.

## Übung mit Projektarbeitsabläufen

Sie sollten sich über die oben genannten Prozesse informieren und üben, einige Ihrer Arbeiten oder persönlichen Projekte mit einem Kanban-Board zu verfolgen. Machen Sie sich keine Sorgen, eine komplexe Scrum-Methode zu verwenden; grundlegendes Kanban ist momentan ausreichend. Auch wenn Sie etwas allein machen, kann es großartig sein, den Arbeitsablauf zu üben:

1. Aufgaben erstellen.
2. Entscheiden, wie groß sie sind oder wie lange sie dauern werden.
3. Aufgaben priorisieren.
4. Sie in Reihenfolge mit Fälligkeitsdaten bringen.
5. Beginnen, an verschiedenen Aufgaben zu arbeiten.
6. Den Status ("in progress", "blocked", "done" usw.) einstellen, während die Arbeit fortschreitet.

Verfolgen Sie den Fortschritt eines vollständigen Projekts von Anfang bis Ende - probieren Sie es mit Ihrer eigenen Website oder einem persönlichen Projekt aus. Versuchen Sie auch, [zu einem Open-Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen verwenden einen Prozess zur Verfolgung ihrer Arbeit, ähnlich wie wir es oben beschrieben haben.

## Siehe auch

- [What is a Tech Stack and How Do They Work?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website development team structure: roles and processes](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agile vs. Waterfall](https://www.productplan.com/learn/agile-vs-waterfall), ProductPlan
- [What is Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
