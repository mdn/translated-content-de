---
title: Workflows und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: e62e7004a66229b1b630fbe30ac809f50450896c
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, den Anfänger oft übersehen, ist der Überblick über das große Ganze. Sie erlernen vielleicht ein einzelnes Werkzeug oder eine Sprache, sind sich aber nicht all der Bibliotheken, Werkzeuge, Systeme und Jobrollen bewusst, die zusammenwirken, um eine komplette Webanwendung zu liefern. Die folgenden Abschnitte behandeln verschiedene große Aspekte auf einer hohen Ebene.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        N/A
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Typische Technologiekombinationen in Webprojekten.</li>
          <li>Typische Jobrollen in einem Webentwicklungsteam.</li>
          <li>Typische Phasen technischer Projekte und wo die verschiedenen Jobrollen einbezogen sind.</li>
          <li>Gemeinsame Arbeitsmanagementprozesse, wie z.B. agil und Wasserfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Bau einer Website verwenden Sie eine Kombination verschiedener Technologien, die allgemein als **Tech Stack** bezeichnet wird. Je größer und komplexer Websites werden, desto komplexer wird der Tech Stack. Er mag einfach beginnen, wenn Sie ein Demo erstellen und nur Sie und einige Kollegen es sich ansehen. Allerdings könnte der Tech Stack einer scheinbar einfachen Produktionswebsite komplexer sein, als Sie es anfangs denken, wenn Sie berücksichtigen, dass er Folgendes leisten muss:

- Schnell laden (das ist der Zweck der [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig handhaben (es muss **skalieren**).
- Gut gestaltet sein, damit Benutzer leicht auf die enthaltenen Informationen und Dienste zugreifen können.
- Einfach für ein Team zu bearbeiten und zu warten sein.

Auf einer sehr hohen Ebene könnte ein Tech Stack einer Webanwendung so aussehen:

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
> Sie werden oft Akronyme sehen, die sich auf beliebte Tech Stacks beziehen, wie [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) oder [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP oder Python).

Auf MDN konzentrieren wir uns hauptsächlich auf den Frontend-Bereich, aber auch dieser kann in viele verschiedene Teile zerlegt werden. Nehmen wir zum Beispiel das Frontend:

- Sie werden wahrscheinlich ein JavaScript-Framework verwenden (wie z.B. [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)), um die Komponenten zu definieren, die zusammen die Benutzeroberfläche erstellen.
- Das Framework verwendet wahrscheinlich eine Art Templatesprache (wie [Mustache](https://mustache.github.io/)), um die HTML-Struktur zu definieren, aber auch Funktionalität für die dynamische Einbindung variabler Inhalte bereitzustellen.
- Sie werden Informationen einfügen, um Ihren Inhalt über CSS zu gestalten, auf eine Weise, die mit dem Framework kompatibel ist. Dies könnte in reinem CSS, einem CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder einem Präprozessor (wie [Sass](https://sass-lang.com/)) geschrieben sein.
- Ein JavaScript-Projekt sollte Tests enthalten, um sicherzustellen, dass neue Code-Ergänzungen die Funktionalität nicht beeinträchtigen. Tests werden normalerweise mit einem Test-Framework (wie [Jest](https://jestjs.io/)) implementiert.
- Größere Websites werden ein Verpackungs-/Build-Werkzeug (wie [Parcel](https://parceljs.org/)) verwenden, um die Leistung zu verbessern, indem die Dateigrößen niedrig gehalten, ungenutzte Komponenten aus dem Produktionscode entfernt usw.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen unter Verwendung bestimmter **Architekturmuster** beschrieben werden. Zum Beispiel ist [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ein Muster, dem viele JavaScript-Frameworks folgen, während [Publish-Subscribe (Pub/Sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, diese Muster im Detail zu verstehen, aber eine gewisse Vertrautheit kann nützlich sein, wenn man versucht, ein neues Framework oder Werkzeug zu verstehen.

Es wird auch Werkzeuge geben, die außerhalb des eigentlichen Tech Stacks verwendet werden, um Ihnen bei der Verwaltung oder Erstellung von Assets für die Website zu helfen, wie z.B.:

- Planungswerkzeuge, die Ihnen helfen, zu planen, was Sie im Verlauf des Projekts auf hoher Ebene tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein auf [git](https://git-scm.com/) basierendes VCS, wie [GitHub](https://github.com/), verwenden.
- Grafik-/Oberflächendesign-Pakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagement-Tools wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

Das ist viel, um es aufzunehmen. Unser Rat ist: **keine Panik!** Ziel dieses Artikels ist es nicht, Ihnen Sorgen zu bereiten, indem Sie denken, dass Sie plötzlich zehnmal so viele Dinge lernen müssen wie zuvor. Die Idee ist einfach, Sie mit dem größeren Bild in Bezug auf Website-Projekte vertraut zu machen und Ihnen ein grundlegendes Verständnis einiger der Begriffe zu geben, auf die Sie stoßen könnten.

Schließlich werden Sie einige Kenntnisse über mehrere der oben genannten Werkzeuge und Technologien entwickeln, aber Sie werden kein Experte sein müssen — das ist der Sinn von Teams. Im Moment tun Sie absolut das Richtige, indem Sie die Kernkompetenzen wie HTML, CSS und JavaScript erlernen. Weitere Werkzeuge und Spezialisierungen werden später in Ihrer Karriere hinzukommen.

## Jobrollen

In einem Webentwicklungsteam gibt es viele verschiedene Jobrollen; es ist nützlich zu verstehen, was jede dieser Rollen beinhaltet:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus produktsicht — wie schlägt sich das Produkt auf dem Markt im Vergleich zu seinen Konkurrenten? Was sind seine Stärken und Schwächen? Welche neuen Funktionen fragt die Zielgruppe nach, und welche haben höchste Priorität? Was sind die Haupt-Erfolgskriterien der Website, und wie haben die kürzlich eingeführten Funktionen geholfen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und schreibt Berichte, um dem Team zu helfen zu verstehen, wie effektiv ihre Arbeit ist, und zukünftige Arbeiten zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der Arbeit, die das Team erledigen muss. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeitsterminen, weist Personal zur Durchführung jeder Aufgabe zu, hält regelmäßige Check-in-Meetings ab, um zu sehen, ob Fortschrittsziele erreicht werden und Probleme aufgedeckt werden, und passt den Plan nach Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich dafür, die Bedürfnisse der Zielgruppe des Produkts zu verstehen und das Produktworkflow/-erfahrung so zu gestalten, dass diese Bedürfnisse am effektivsten erfüllt werden. Typische UX-Fragen sind "Wohin sollen wir den Benutzer zuerst leiten, wenn er auf unserer Homepage landet?" und "Wie können wir die Registrierung für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit ist oft mit Nutzerforschung und -tests gekoppelt, um die Zielgruppe besser zu verstehen und Wireframes zur Kommunikation von Ideen zu erstellen. Der UX-Designer ist einer der Hauptkonsumenten der Reports des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für die visuelle Gestaltung der Website-Projekts. Grafikdesigner sind für eine Vielzahl von Disziplinen verantwortlich, wie Typographie, Farbschemata wählen, Icons und andere grafische Assets erstellen und Website-Mockups basierend auf den Wireframes des UX-Designers erstellen.
- **Frontend-Entwickler**
  - : Das ist (wahrscheinlich), was Sie anstreben, wenn Sie dies lesen! Frontend-Entwickler nutzen HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, und bringen die Verhaltens- und visuelle Mockups des UX- und Grafikdesigners zum Leben.
- **Backend-Entwickler**
  - : Verantwortlich für die nicht-visuellen Teile der Website. Sie schreiben Backend-Code, um interne Daten anzufordern, HTML-Seiten aus Templates zu generieren und externe Daten von Benutzern zu verarbeiten. Sie kümmern sich auch um die Webserver-Konfiguration, die Sicherung der Website usw.
- **Full-Stack-Entwickler**
  - : Verantwortlich sowohl für Frontend- als auch Backend-Entwicklungsaufgaben.
- **Qualitätssicherungs- (QA) Ingenieur**
  - : Verantwortlich für das Testen neuer Funktionen, um sicherzustellen, dass sie richtig funktionieren und Fehlerberichte zu erstellen, sowie die Kommunikation mit den Entwicklern, um ihnen zu helfen, die notwendigen Korrekturen zu priorisieren.
- **Content Specialist/Technical Writer**
  - : Verantwortlich dafür, sicherzustellen, dass der textuelle Inhalt der Website so gut wie möglich für die Zielgruppe funktioniert. Dazu gehört die Struktur der Informationen und wie diese navigiert wird, Textbeschriftungen der Benutzeroberfläche, Blog-Beiträge, Marketingtexte und Produktdokumentation.

### Weniger verbreitete Jobrollen

Andere weniger häufige Jobrollen umfassen:

- **Benutzerforscher**
  - : Größere Teams haben häufig einen dedizierten Forscher für Benutzerforschung und -tests.
- **Suchmaschinenoptimierungs- (SEO) Spezialist**
  - : Analysiert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die die Sichtbarkeit der Website in relevanten Suchmaschinenergebnissen erhöhen. Weitere Informationen finden Sie unter {{Glossary("SEO", "SEO")}}.

## Technische Projektphasen

Ein typisches technisches Projekt könnte so ablaufen:

1. Der Produktmanager identifiziert eine neue Reihe von Benutzeranforderungen für die Website.
2. Sie besprechen es mit dem Team und es wird entschieden, dass diese Anforderungen durch das Hinzufügen eines neuen Features zur Website erfüllt werden können.
3. Der Projektmanager bespricht mit dem Team, welche individuellen Arbeitselemente für die Erstellung des neuen Features erforderlich sind, und erstellt einen [Arbeitsprozess zu deren Verwaltung](#arbeitsmanagementprozesse).
4. Der UX-Designer entwirft ein Workflow für das neue Feature, das beschreibt, wie es funktionieren sollte, und ein Wireframe, um eine Vorstellung davon zu geben, wo es auf die Seite passen könnte.
5. Der Grafikdesigner entwirft ein Mockup, das zeigt, wie das Feature auf der Website aussehen wird, zusammen mit den gewählten Schriftarten und der Farbpalette.
6. Der Contentspezialist schreibt den benötigten UI-Text für das Feature und die erforderliche Dokumentation zur Unterstützung.
7. Der Backend-Entwickler erstellt die notwendigen Systeme, um die Daten, die das Feature antreiben, sicher zu speichern und zu verarbeiten.
8. Der Frontend-Entwickler erstellt das interaktive Feature basierend auf den Mockups des Grafikdesigners und verbindet es mit dem Backend, damit es die benötigten Daten abrufen kann.
9. Der QA-Ingenieur testet das neue Feature gründlich und erstellt einen detaillierten Bericht über die gefundenen Probleme.
10. Die Entwickler beheben die als schwerwiegend genug erachteten Bugs, dass sie die Freigabe des Features blockieren sollten.
11. Sobald die (blockierenden) Bugs behoben sind und das Projekt freigegeben ist, kann das Feature live auf der Website geschaltet werden.

Dies ist eine vereinfachte Ansicht — es werden weitere Phasen um die eigentliche Implementierung des Features herum existieren, und die Phasen werden nicht unbedingt in der gezeigten Reihenfolge abgeschlossen, aber es gibt Ihnen eine Vorstellung davon, was beteiligt ist.

## Arbeitsmanagementprozesse

Der Projektmanager wird einen Prozess verwenden, um das Website-Projekt zu verwalten, den Fortschritt der verschiedenen Arbeitselemente zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und pünktlich erledigt werden, usw. Die beiden Hauptprozessarten sind:

- **Wasserfall**
  - : Bezieht sich auf die Durchführung eines Projekts in klaren, festgelegten Phasen, wobei jede von der vorherigen abhängig ist und nicht zu viele Änderungen der Anforderungen erwartet werden. Im Allgemeinen wird ein einziges großes Ergebnis am Ende des Projekts geliefert. Die Verwaltung des Teams tendiert eher zu bürokratischeren Strukturen, mit weniger Autonomie.
    - Wasserfallprojekte sind bei Beginn besser spezifiziert und haben weniger Scope Creep (Anforderungen während des Projekts hinzufügen). Außerdem sind größere, seltener vorkommende Produktveröffentlichungen einfacher in Hinsicht auf Veröffentlichungsplanung, Marketing, Durchführung von Schulungen und Dokumentationen zu handhaben.
    - Allerdings tendiert Wasserfall zu weniger Flexibilität und Änderungen erfolgen wesentlich langsamer. Es kann frustrierend sein, mehrere Monate auf eine Fehlerbehebung zu warten.
- **Agil**
  - : Bezieht sich auf die Durchführung eines Projekts flexibler, wobei mehrere Phasen gleichzeitig fortschreiten können und mehrere kleinere Ergebnisse tendenziell an verschiedenen Meilensteinen im Verlauf des Projekts geliefert werden. Änderungen der Anforderungen werden erwartet und können durch Prioritätsverschiebungen nach Bedarf behandelt werden. Teams sind im Allgemeinen autarker.
    - Agile Projekte sind flexibel und können sich leichter an Änderungen der Anforderungen anpassen. Es kann auch angenehm sein, häufigere Releases zu haben — Bugs werden schneller behoben, Innovationen kommen öfter vor und es gibt immer etwas, worüber das Marketing-Team sprechen kann. Agile Teams sprechen oft von kontinuierlicher Verbesserung.
    - Allerdings gibt es ein größeres Risiko von Scope Creep und Terminüberschreitungen, Projekte fühlen sich oft nie wirklich abgeschlossen an und es gibt mehr kontinuierlichen Druck und Geschwindigkeit, um zu liefern.

> [!NOTE]
> Webentwicklungsteams bevorzugen oft die Arbeit mit einem agilen Prozess, da Softwareentwicklung von Natur aus anfällig für (manchmal schnelle) Änderungen der Anforderungen durch neue Bugs, Benutzerfeedback, Unternehmensstrategie usw. ist.

### Scrum und Kanban

Es gibt eine spezifische Art von agiler Methodik genannt **Scrum**, die eine feste Regelmenge dafür hat, wie ein Projekt geleitet wird. Zum Beispiel:

- Die Person, die für das Scrum verantwortlich ist, wird Scrum Master genannt. Dies ist oft einfach nur der Projektmanager unter einem anderen Namen.
- Die zu erledigende Arbeit wird in Zyklen aufgeteilt, die **Sprints** genannt werden, die typischerweise zwei Wochen dauern.
- Vor jedem Sprint werden potenzielle neue Arbeitselemente besprochen und, wenn sie in den Sprint aufgenommen werden, in ein Backlog gestellt.
- Arbeitselemente werden dem Backlog entnommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie "in Bearbeitung" und "zur Überprüfung".
- Der Scrum Master hält kurze tägliche **Stand-up-Meetings** ab, in denen jeder über den gemachten Fortschritt und eventuell auftretende Probleme spricht, sodass Probleme frühzeitig erkannt werden können.
- Am Ende jedes Sprints hält der Scrum Master ein Retro-Meeting ab, um zu bewerten, was gut gelaufen ist, was nicht so gut gelaufen ist und welche Lektionen vor dem nächsten Sprint gelernt werden können.

Eine andere Art der agilen Methodik ist **Kanban**, die weniger Regeln als Scrum hat, keine Sprints verwendet und sich tendenziell mehr auf die Aspekte der kontinuierlichen Verbesserung von Agil konzentriert. Kanban ist besonders nützlich für das Management kontinuierlicher Prozesse, die kein klar definiertes Ende haben, wie Kundensupport-Tickets.

### Kanban-Boards

Werkzeuge wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status der verschiedenen Arbeitselemente in einem Projekt zeigen. Sie werden in der Regel **Kanban-Boards** genannt, obwohl sie zur Verwaltung unterschiedlicher Prozessarten verwendet werden können, nicht nur Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die unterschiedliche Arbeitsstadien in einem Scrum-Projekt ("Backlog", "Todo", "In Bearbeitung" usw.), verschiedene Arten von Arbeit ("Forschung", "Design", "Entwicklung" usw.) oder was auch immer für Ihr Projekt nützlich ist, repräsentieren können.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Tool-Option und sind kostenlos zu verwenden — Sie müssen sich nur für ein GitHub-Konto anmelden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Sie sollten sich über die obigen Prozesse informieren und üben, einige Ihrer Arbeiten oder persönlichen Projekte mit einem Kanban-Board zu verfolgen. Machen Sie sich keine Sorgen darüber, eine komplexe Scrum-Methodik zu verwenden; einfaches Kanban reicht für den Moment aus. Selbst wenn Sie etwas alleine machen, kann es großartig sein, den Workflow zu üben von:
>
> 1. Aufgaben erstellen.
> 2. Entscheiden, wie groß sie sind oder wie lange sie dauern werden.
> 3. Aufgaben priorisieren.
> 4. Sie in Reihenfolge mit Fälligkeitsterminen setzen.
> 5. Beginnen, an verschiedenen Aufgaben zu arbeiten.
> 6. Ihren Status ("in Bearbeitung", "blockiert", "fertig" usw.) festlegen, während die Arbeit voranschreitet.
>
> Verfolgen Sie den Fortschritt eines vollständigen Projekts von Anfang bis Ende — versuchen Sie es mit Ihrer eigenen Website oder einem Nebenprojekt irgendeiner Art. Versuchen Sie auch, [zu einem Open-Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen verwenden einen Prozess, um ihre Arbeit ähnlich dem zu verfolgen, den wir oben beschrieben haben.

## Siehe auch

- [What is a Tech Stack and How Do They Work?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website development team structure: roles and processes](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agile vs. Waterfall](https://www.productplan.com/learn/agile-vs-waterfall/), ProductPlan
- [What is Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
