---
title: Arbeitsabläufe und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: 30f3ddc823c82f8135f96a5a7ca081baebda7a33
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, der Anfängern oft fehlt, ist ein Verständnis des größeren Zusammenhangs. Sie könnten ein einzelnes Werkzeug oder eine Sprache lernen, sind jedoch nicht mit allen Bibliotheken, Werkzeugen, Systemen und Berufsrollen vertraut, die zusammenarbeiten, um eine komplette Webanwendung zu liefern. Die folgenden Abschnitte behandeln verschiedene Aspekte des großen Ganzen auf einer hohen Ebene.

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
          <li>Typische Technologie-Kombinationen in Webprojekten.</li>
          <li>Typische Jobrollen in einem Webentwicklungsteam.</li>
          <li>Typische Phasen technischer Projekte und wo die verschiedenen Jobrollen involviert sind.</li>
          <li>Häufige Arbeitsmanagement-Prozesse, wie agil und Wasserfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Erstellen einer Website verwenden Sie eine Kombination verschiedener Technologien, die üblicherweise als **Tech-Stack** bezeichnet wird. Je größer und komplexer Websites werden, desto komplexer wird auch der Tech-Stack. Er mag einfach beginnen, wenn Sie ein Demo erstellen und nur Sie und einige Kollegen es sich ansehen. Doch der Tech-Stack einer scheinbar einfachen Produktionswebsite könnte komplexer sein, als Sie zunächst denken, wenn Sie bedenken, dass sie:

- Schnell laden muss (das ist der Zweck der [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig bedienen muss (sie muss **skalieren**).
- Gut gestaltet sein muss, sodass Benutzer problemlos auf die darin enthaltenen Informationen und Dienste zugreifen können.
- Einfach für ein Team zu bearbeiten und zu pflegen sein muss.

Auf sehr hohem Niveau könnte ein Tech-Stack einer Webanwendung etwa so aussehen:

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
> Sie werden oft Akronyme sehen, die sich auf beliebte Tech-Stacks beziehen, wie [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) oder [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP oder Python).

Auf MDN konzentrieren wir uns hauptsächlich auf den Frontend-Teil, aber selbst dieser kann in viele verschiedene Teile zerlegt werden. Nehmen Sie beispielsweise das Frontend:

- Sie werden wahrscheinlich ein JavaScript-Framework (wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) verwenden, um die Komponenten zu definieren, die zusammen die Benutzeroberfläche erstellen.
- Das Framework wird wahrscheinlich eine Art Templating-Sprache (wie [Mustache](https://mustache.github.io/)) verwenden, um die HTML-Struktur zu definieren, aber auch Funktionen bereitzustellen, um variablen Inhalt dynamisch einzuschließen.
- Sie werden Informationen bereitstellen, um Ihren Inhalt mittels CSS in einer Weise zu gestalten, die mit dem Framework kompatibel ist. Dies kann in reinem CSS geschrieben sein, oder ein CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder Präprozessor (wie [Sass](https://sass-lang.com/)).
- Ein JavaScript-Projekt sollte Tests enthalten, um sicherzustellen, dass alle neuen Codeerweiterungen seine Funktionalität nicht beeinträchtigen. Tests werden normalerweise mit einem Test-Framework implementiert (wie [Jest](https://jestjs.io/)).
- Größere Websites verwenden ein Paketierungs-/Build-Tool (wie [Parcel](https://parceljs.org/)), um die Leistung zu verbessern, indem Dateigrößen reduziert, ungenutzte Komponenten aus dem Produktionscode entfernt usw.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen mit bestimmten **Architekturmustern** beschrieben werden. Zum Beispiel ist das [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ein Muster, dem viele JavaScript-Frameworks folgen, während [publish-subscribe (pub/sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, dass Sie diese Muster im Detail verstehen, aber etwas Vertrautheit kann nützlich sein, wenn Sie versuchen, ein neues Framework oder Tool zu verstehen.

Es wird auch Werkzeuge außen des eigentlichen Tech-Stacks geben, um Ihnen zu helfen, ihn zu verwalten oder Vermögenswerte für die Website zu erstellen, wie zum Beispiel:

- Planungswerkzeuge, um Ihnen zu helfen zu planen, was Sie im Laufe des Projekts auf hoher Ebene tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein auf [git](https://git-scm.com/) basiertes VCS verwenden, wie [GitHub](https://github.com/).
- Grafik-/Schnittstellendesign-Pakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagementwerkzeuge wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

OK, das ist also viel zu verarbeiten. Unser Rat ist **keine Panik!** Das Ziel dieses Artikels ist es nicht, Sie zu beunruhigen, indem er Ihnen glauben lässt, dass Sie plötzlich zehnmal so viele Dinge lernen müssen wie zuvor. Die Idee ist vielmehr, Ihnen ein Bewusstsein für das größere Bild im Hinblick auf Website-Projekte zu geben und Ihnen eine grundlegende Vertrautheit mit einigen der Begriffe, denen Sie begegnen könnten, zu verschaffen.

Am Ende werden Sie einige Kenntnisse über mehrere der oben genannten Werkzeuge und Technologien entwickeln, aber Sie werden nicht Experte in allen sein müssen, noch werden Sie es sein müssen — dafür sind Teams da. Im Moment tun Sie absolut das Richtige, indem Sie die Kernfähigkeiten wie HTML, CSS und JavaScript lernen. Weitere Werkzeuge und Spezialisierungen werden später in Ihrer Karriere folgen.

## Berufsrollen

In einem Webentwicklungsteam gibt es viele verschiedene Berufsrollen; es ist nützlich zu verstehen, was jede beinhaltet:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus Produktsicht — wie schlägt sich das Produkt im Markt, verglichen mit seinen Wettbewerbern? Welche Stärken und Schwächen hat es? Welche neuen Funktionen fordert das Zielpublikum an, und welche haben höchste Priorität? Was sind die Hauptkriterien für den Erfolg der Website und wie haben kürzliche neue Features geholfen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und schreibt Berichte, um dem Team zu helfen, zu verstehen, wie effektiv ihre Arbeit ist, und künftige Arbeiten zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der Arbeit, die das Team leisten muss. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeitsterminen, weist Personal zur Erledigung jeder Aufgabe zu, hält regelmäßige Check-in-Meetings ab, um zu sehen, ob Fortschrittsziele erreicht werden und Probleme zu erkennen, und passt den Plan bei Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich für das Verständnis der Bedürfnisse des Zielpublikums des Produkts und das Design des Produkt-Workflows/-Erlebnisses, sodass diese Bedürfnisse am effektivsten erfüllt werden. Typische UX-Fragen sind "wohin sollten wir den Benutzer zuerst leiten, wenn er auf unserer Homepage landet?" und "wie können wir das Anmelden für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit wird oft mit Benutzerforschung und -tests kombiniert, um das Zielpublikum besser zu verstehen, und Drahtmodelle zu erstellen, um Ideen zu kommunizieren. Der UX-Designer ist einer der Hauptkonsumenten der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für die visuelle Gestaltung der Website. Grafikdesigner sind für eine Vielzahl von Disziplinen verantwortlich, wie Typografie, Farbschemata auswählen, Icons und andere grafische Ressourcen erstellen und Website-Mockups basierend auf den Drahtmodellen des UX-Designers erstellen.
- **Frontend-Entwickler**
  - : Dies ist (wahrscheinlich), was Sie anstreben zu sein, wenn Sie das lesen! Frontend-Entwickler nutzen HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, und hauchen den Verhaltens- und visuellen Mockups Leben ein, die von den UX- und Grafikdesignern erstellt wurden.
- **Backend-Entwickler**
  - : Verantwortlich für die nicht-visuellen Teile der Website. Sie schreiben Backend-Code, um interne Daten anzufordern, HTML-Seiten aus Vorlagen zu generieren und externe Daten von Benutzern zu verarbeiten. Sie kümmern sich auch um die Konfiguration des Webservers, die Sicherheit der Site usw.
- **Full-Stack-Entwickler**
  - : Führt sowohl Frontend- als auch Backend-Entwicklungsaufgaben durch.
- **Qualitätssicherungsingenieur (QA)**
  - : Verantwortlich für das Testen neuer Funktionen, um sicherzustellen, dass sie ordnungsgemäß funktionieren, und Fehler zu melden, sowie die Kommunikation mit den Entwicklern, um ihnen zu helfen, die notwendigen Korrekturen zu priorisieren.
- **Inhaltsspezialist/Technischer Redakteur**
  - : Verantwortlich dafür, dass der Textinhalt der Website so gut wie möglich für die Zielgruppe funktioniert. Dazu gehört die Struktur der Informationen und die Navigation, die Benutzeroberflächen-Textmarkierungen, Blogposts, Marketingtexte und Produktdokumentation.

### Weniger verbreitete Berufsrollen

Andere weniger verbreitete Berufsrollen schließen ein:

- **Benutzerforscher**
  - : Größere Teams haben oft einen dedizierten Forscher, der Benutzerforschung und -tests durchführt.
- **Spezialist für Suchmaschinenoptimierung (SEO)**
  - : Analysiert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die dazu führen, dass die Website in relevanten Suchmaschinenergebnissen sichtbarer wird. Weitere Informationen finden Sie unter {{Glossary("SEO", "SEO")}}.

## Technische Projektphasen

Ein typisches technisches Projekt könnte so ablaufen:

1. Der Produktmanager identifiziert einen neuen Satz von Benutzeranforderungen für die Website.
2. Diese werden mit dem Team besprochen, und es wird entschieden, dass diese Anforderungen durch das Hinzufügen eines neuen Features zur Website erfüllt werden können.
3. Der Projektmanager bespricht mit dem Team, welche individuellen Arbeitsaufgaben für die Erstellung des neuen Features erforderlich sind, und erstellt einen [Arbeitsprozess zur Verwaltung dieser Aufgaben](#arbeitsmanagement-prozesse).
4. Der UX-Designer entwirft einen Workflow für das neue Feature, der beschreibt, wie es funktionieren sollte, und ein Drahtmodell, um eine Idee zu geben, wo es auf der Site passen könnte.
5. Der Grafikdesigner entwirft ein Mockup, das zeigt, wie das Feature auf der Website aussehen wird, zusammen mit den gewählten Schriftarten und der Farbpalette.
6. Der Content-Spezialist schreibt den UI-Text, der für das Feature benötigt wird, und die Dokumentation, die es unterstützt.
7. Der Backend-Entwickler erstellt die notwendigen Systeme, um die Daten, die das Feature antreiben, sicher zu speichern und zu verwalten.
8. Der Frontend-Entwickler erstellt das interaktive Feature basierend auf den Mockups des Grafikdesigners und verbindet es mit dem Backend, sodass es die benötigten Daten abruft.
9. Der QA-Ingenieur testet das neue Feature gründlich und schreibt einen detaillierten Bericht über die festgestellten Probleme.
10. Die Entwickler beheben die Fehler, die als ausreichend ernst angesehen werden, um die Veröffentlichung des Features zu verhindern.
11. Sobald die (blockierenden) Fehler behoben sind und das Projekt abgeschlossen ist, kann das Feature auf der Website live geschaltet werden.

Dies ist eine vereinfachte Darstellung — es wird andere Phasen um die Implementierung des Features selbst geben, und die Phasen werden nicht unbedingt alle in der gezeigten Reihenfolge abgeschlossen werden, aber dies gibt Ihnen eine Vorstellung davon, was beteiligt ist.

## Arbeitsmanagement-Prozesse

Der Projektmanager wird eine Art Prozess verwenden, um das Website-Projekt zu verwalten, den Fortschritt der verschiedenen Arbeitsaufgaben zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und pünktlich erledigt werden, usw. Die zwei Hauptprozessarten sind:

- **Wasserfall**
  - : Bezieht sich auf das Durchführen eines Projekts in klaren, festen Phasen, bei denen jede von der vorherigen abhängt und keine allzu großen Änderungen in den Anforderungen erwartet werden. Im Allgemeinen wird am Ende des Projekts ein einziges großes Resultat geliefert. Das Management des Teams neigt dazu, bürokratischer zu sein, mit weniger Autonomie.
    - Wasserfallprojekte tendieren dazu, am Anfang besser spezifiziert zu werden und weniger Umfangszunahmen (Hinzufügen von Anforderungen während des Projekts) zu haben. Außerdem sind größere, weniger häufige Produktveröffentlichungen in Bezug auf Freigabeplanung, Marketing, Bereitstellung von Schulungen und Dokumentation usw. einfacher zu handhaben.
    - Allerdings ist Wasserfall weniger flexibel, und Änderungen erfolgen viel langsamer. Mehrere Monate auf einen Bugfix zu warten, kann frustrierend sein.
- **Agil**
  - : Bezieht sich auf das flexiblere Durchführen eines Projekts, bei dem mehrere Phasen gleichzeitig voranschreiten können und mehrere kleinere Ergebnisse zu verschiedenen Meilensteinen während des Projekts geliefert werden. Änderungen in den Anforderungen werden erwartet und können durch Verschiebung der Prioritäten nach Bedarf behandelt werden. Teams sind im Allgemeinen autonomer.
    - Agile Projekte sind flexibel und können sich leichter an Änderungen in den Anforderungen anpassen. Es kann auch schön sein, häufigere Veröffentlichungen zu haben – Bugs werden schneller behoben, Innovation passiert häufiger, und es gibt immer etwas, worüber das Marketing-Team sprechen kann. Agile Teams sprechen oft von kontinuierlicher Verbesserung.
    - Allerdings besteht ein höheres Risiko für Umfangszunahmen und Terminüberschreitungen, Projekte fühlen sich oft nie wirklich abgeschlossen an, und es gibt ein konstantes Tempo und Druck zu liefern.

> [!NOTE]
> Webentwicklungsteams ziehen es oft vor, mit einem agilen Prozess zu arbeiten, da die Softwareentwicklung von Natur aus anfällig für (manchmal schnelle) Änderungen in den Anforderungen aufgrund neuer Bugs, Benutzerfeedback, Unternehmensstrategie usw. ist.

### Scrum und Kanban

Es gibt eine spezifische Art der agilen Methodologie namens **Scrum**, die eine feste Reihe von Regeln darüber hat, wie ein Projekt durchgeführt wird. Zum Beispiel:

- Die Person, die für das Scrum verantwortlich ist, wird Scrum Master genannt. Dies ist oft einfach der Projektmanager mit einem anderen Namen.
- Die Arbeit, die zu erledigen ist, wird in Zyklen unterteilt, die als **Sprints** bezeichnet werden, die typischerweise zwei Wochen dauern.
- Vor jedem Sprint werden potenzielle neue Arbeitsaufgaben besprochen, und wenn sie in den Sprint aufgenommen werden, kommen sie in einen Backlog.
- Arbeitsaufgaben werden aus dem Backlog genommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie "in Bearbeitung" und "in Prüfung".
- Der Scrum Master hält kurze tägliche **Stand-up-Meetings** ab, in denen jeder über den Fortschritt spricht, den er gemacht hat, und über eventuelle Probleme, die er möglicherweise hat, sodass Probleme frühzeitig erkannt werden können.
- Am Ende jedes Sprints hält der Scrum Master ein Retrospektiven-Meeting ab, um zu überprüfen, was gut gelaufen ist, was nicht so gut gelaufen ist, und welche Lektionen vor dem nächsten Sprint gelernt werden können.

Eine andere Art der agilen Methodologie wird **Kanban** genannt, die weniger Regeln als Scrum hat, keine Sprints verwendet und sich mehr auf die kontinuierlichen Verbesserungen in der agilen Methodologie fokussiert. Kanban eignet sich besonders gut für die Verwaltung kontinuierlicher Prozesse, die kein klar definiertes Ende haben, wie z.B. Kundensupport-Tickets.

### Kanban-Boards

Werkzeuge wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status verschiedener Arbeitsaufgaben in einem Projekt anzeigen. Sie werden üblicherweise **Kanban-Boards** genannt, obwohl sie verwendet werden können, um verschiedene Prozessarten zu verwalten, nicht nur Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die unterschiedliche Arbeitsstatuse in einem Scrum-Projekt darstellen können ("Backlog", "ToDo", "in Bearbeitung" usw.), verschiedene Arten von Arbeiten ("Forschung", "Design", "Entwicklung" usw.) oder was auch immer für Ihr Projekt nützlich ist.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Werkzeugoption und sind kostenlos zu nutzen — Sie müssen sich nur für ein GitHub-Konto registrieren.

## Praxis mit Projektarbeitsabläufen bekommen

Sie sollten sich über die oben genannten Prozesse informieren und üben, einige Ihrer Arbeits- oder persönlichen Projekte mit einem Kanban-Board zu verfolgen. Machen Sie sich keine Sorgen über die Verwendung einer komplexen Scrum-Methodik; einfaches Kanban ist für den Moment ausreichend. Selbst wenn Sie etwas solo machen, kann es großartig sein, den Arbeitsablauf zu üben:

1. Aufgaben erstellen.
2. Entscheiden, wie groß sie sind oder wie lange sie dauern werden.
3. Aufgaben priorisieren.
4. Sie in Reihenfolge mit Fälligkeitsterminen bringen.
5. Beginnen, an verschiedenen Aufgaben zu arbeiten.
6. Ihre Statuse ("in Bearbeitung", "blockiert", "erledigt" usw.) setzen, während die Arbeit fortschreitet.

Verfolgen Sie den Fortschritt eines kompletten Projekts von Anfang bis Ende — versuchen Sie es mit Ihrer eigenen Website oder einem Nebenprojekt. Versuchen Sie auch, [zu einem Open-Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen verwenden einen Prozess zur Verfolgung ihrer Arbeiten, der dem von uns beschriebenen ähnlich ist.

## Siehe auch

- [Was ist ein Tech-Stack und wie funktionieren sie?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website-Entwicklung Teamstruktur: Rollen und Prozesse](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agil vs. Wasserfall](https://www.productplan.com/learn/agile-vs-waterfall), ProductPlan
- [Was ist Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
