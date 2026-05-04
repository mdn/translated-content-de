---
title: Workflows und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, den Anfänger oft übersehen, ist das Gesamtbild. Sie könnten ein einzelnes Werkzeug oder eine Sprache lernen, sind sich aber nicht aller Bibliotheken, Werkzeuge, Systeme und Jobrollen bewusst, die zusammenarbeiten, um eine vollständige Webanwendung zu liefern. Die folgenden Abschnitte decken verschiedene Aspekte des Gesamtbildes auf hoher Ebene ab.

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
          <li>Typische Technologiekombinationen in Webprojekten.</li>
          <li>Typische Jobrollen in einem Webentwicklungsteam.</li>
          <li>Typische Phasen eines technischen Projektes und wo die verschiedenen Jobrollen beteiligt sind.</li>
          <li>Häufige Arbeitsmanagementprozesse, wie agiles Arbeiten und Wasserfallmodell.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Erstellen einer Website verwenden Sie eine Kombination verschiedener Technologien, die üblicherweise als **Tech-Stack** bezeichnet werden. Je größer und komplexer Websites werden, desto größer wird der Tech-Stack. Es mag einfach beginnen, wenn Sie eine Demo erstellen und nur Sie und einige Kollegen sie ansehen werden. Allerdings könnte der Tech-Stack einer scheinbar einfachen Produktions-Website komplizierter sein, als Sie zunächst denken, wenn man bedenkt, dass sie:

- Schnell laden muss (das ist das Ziel der [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig verarbeiten muss (sie muss **skalieren**).
- Gut gestaltet sein muss, damit Benutzer leicht auf die Informationen und Dienste zugreifen können, die sie enthält.
- Einfach für ein Team zu bearbeiten und zu warten sein muss.

Auf einer sehr hohen Ebene könnte ein Tech-Stack einer Webanwendung so aussehen:

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
> Sie werden oft Akronyme sehen, die sich auf bekannte Tech-Stacks beziehen, wie [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) oder [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP oder Python).

Auf MDN konzentrieren wir uns hauptsächlich auf den Front-End-Teil, aber selbst dieser kann in viele verschiedene Teile unterteilt werden. Nehmen Sie zum Beispiel das Front-End:

- Sie werden wahrscheinlich ein JavaScript-Framework (wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) verwenden, um die Komponenten zu definieren, die zusammen die Benutzeroberfläche erstellen.
- Das Framework wird wahrscheinlich irgendeine Art von Template-Sprache (wie [Mustache](https://mustache.github.io/)) verwenden, um die HTML-Struktur zu definieren, aber auch Funktionalitäten bereitzustellen, um variablen Inhalt dynamisch einzubinden.
- Sie werden Informationen bereitstellen, um Ihre Inhalte per CSS auf eine Weise zu gestalten, die mit dem Framework kompatibel ist. Dies könnte in reinem CSS oder über ein CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder einen Präprozessor (wie [Sass](https://sass-lang.com/)) geschehen.
- Ein JavaScript-Projekt sollte Tests enthalten, um sicherzustellen, dass jegliche neuen Code-Ergänzungen seine Funktionalität nicht beeinträchtigen. Tests werden üblicherweise mit einem Test-Framework (wie [Jest](https://jestjs.io/)) implementiert.
- Größere Websites verwenden ein Packaging-/Build-Tool (wie [Parcel](https://parceljs.org/)), um die Leistung zu verbessern, indem Dateigrößen reduziert, unbenutzte Komponenten aus dem Produktionscode entfernt, etc.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen mithilfe spezifischer **Architekturmuster** erstellt werden. Zum Beispiel ist [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ein Muster, dem viele JavaScript-Frameworks folgen, während [Publish–Subscribe (pub/sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, dass Sie diese Muster im Detail verstehen, aber eine gewisse Vertrautheit kann nützlich sein, um ein neues Framework oder Tool zu verstehen.

Es gibt auch außerhalb des eigentlichen Tech-Stacks Werkzeuge, die Ihnen helfen, diesen zu verwalten oder Assets für die Website zu erstellen, wie:

- Planungstools, um zu helfen, was Sie im Verlauf des Projekts auf hoher Ebene tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein [git](https://git-scm.com/)-basiertes VCS verwenden, wie [GitHub](https://github.com/).
- Grafik- / Interface-Design-Pakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagement-Tools wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

OK, das ist eine Menge zu verarbeiten. Unser Rat ist: **Keine Panik!** Das Ziel dieses Artikels ist es nicht, Sie zu beunruhigen, indem Sie denken, dass Sie plötzlich 10-mal so viele Dinge lernen müssen wie zuvor. Die Idee ist einfach, Sie auf das Gesamtbild von Website-Projekten aufmerksam zu machen und Ihnen eine grundlegende Vertrautheit mit einigen der Begriffe zu geben, denen Sie begegnen könnten.

Letztendlich werden Sie einige Kenntnisse über mehrere der oben genannten Werkzeuge und Technologien entwickeln, aber Sie werden nicht in allen ein Experte sein müssen — das ist der Zweck von Teams. Im Moment tun Sie absolut das Richtige, indem Sie die Kernfähigkeiten wie HTML, CSS und JavaScript lernen. Weitere Werkzeuge und Spezialisierungen werden im Laufe Ihrer Karriere folgen.

## Jobrollen

In einem Webentwicklungsteam gibt es viele verschiedene Jobrollen; es ist nützlich zu verstehen, was jede davon beinhaltet:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus einer Produktperspektive — wie schlägt sich das Produkt im Vergleich zu seinen Konkurrenten auf dem Markt? Was sind seine Stärken und Schwächen? Welche neuen Funktionen fordert die Zielgruppe, und welche haben die höchste Priorität? Was sind die Haupt-Erfolgskriterien der Website, und wie haben neuere Funktionen dazu beigetragen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und schreibt Berichte, um dem Team zu helfen, zu verstehen, wie effektiv ihre Arbeit ist, und zukünftige Arbeiten zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der Arbeit, die das Team erledigen muss. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeiten, weist jedem die zu erledigenden Aufgaben zu, hält regelmäßige Kontrollsitzungen ab, um zu sehen, ob Fortschrittsziele erreicht werden, und passt den Plan bei Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich für das Verstehen der Bedürfnisse der Zielgruppe des Produkts und das Entwerfen des Produkt-Workflows/Erlebnisses, damit diese Bedürfnisse am effektivsten erfüllt werden. Typische UX-Fragen sind "Wohin sollen wir den Benutzer zuerst leiten, wenn er auf unserer Homepage landet?" und "Wie können wir die Anmeldung für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit wird oft mit Benutzerforschung und -tests gekoppelt, um die Zielgruppe besser zu verstehen, und mit dem Erstellen von Wireframes, um Ideen zu kommunizieren. Der UX-Designer ist einer der Hauptkonsumenten der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für die visuelle Gestaltung auf dem Website-Projekt. Grafikdesigner sind verantwortlich für eine Vielzahl von Disziplinen wie Typografie, Farbschemata wählen, Erstellen von Icons und anderen grafischen Assets sowie Erstellen von Website-Mockups basierend auf den Wireframes des UX-Designers.
- **Front-End-Entwickler**
  - : Dies ist (wahrscheinlich) das, worauf Sie abzielen, wenn Sie dies lesen! Front-End-Entwickler verwenden HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, und bringen die von den UX- und Grafikdesignern erstellten Verhaltens- und visuelle Mockups zum Leben.
- **Back-End-Entwickler**
  - : Verantwortlich für die nicht-visuellen Teile der Website. Sie schreiben Back-End-Code, um interne Daten anzufordern, HTML-Seiten aus Templates zu generieren und externe Daten zu verarbeiten, die von Benutzern bereitgestellt werden. Sie kümmern sich auch um die Konfiguration des Webservers, die Sicherheit der Seite, usw.
- **Full-Stack-Entwickler**
  - : Bearbeitet sowohl Aufgaben der Front-End-Entwicklung als auch der Back-End-Entwicklung.
- **Quality Assurance (QA) Ingenieur**
  - : Verantwortlich für das Testen neuer Funktionen, um sicherzustellen, dass sie richtig funktionieren und Fehler melden, und mit den Entwicklern kommunizieren, um ihnen zu helfen, die notwendigen Anpassungen zu priorisieren.
- **Inhaltsspezialist/Technischer Redakteur**
  - : Verantwortlich dafür, dass der Textinhalt der Website so gut wie möglich für die Zielgruppe funktioniert. Dies umfasst die Struktur der Informationen und wie sie navigiert werden, die Benutzeroberflächentextbezeichnungen, Blogbeiträge, Marketingtexte und Produktdokumentation.

### Weniger häufige Jobrollen

Andere weniger häufige Jobrollen umfassen:

- **Benutzerforscher**
  - : Größere Teams haben oft einen dedizierten Forscher, der Benutzerforschung und -tests durchführt.
- **Suchmaschinenoptimierung (SEO) Spezialist**
  - : Analysiert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die dazu führen, dass die Website in relevanten Suchmaschinenergebnissen sichtbarer wird. Siehe {{Glossary("SEO", "SEO")}} für weitere Informationen.

## Phasen eines technischen Projektes

Ein typisches technisches Projekt könnte so ablaufen:

1. Der Produktmanager identifiziert einen neuen Satz von Benutzeranforderungen für die Website.
2. Sie besprechen es mit dem Team und es wird beschlossen, dass diese Anforderungen durch das Hinzufügen einer neuen Funktion zur Website erfüllt werden können.
3. Der Projektmanager bespricht mit dem Team, was die erforderlichen einzelnen Arbeitselemente für die Erstellung der neuen Funktion sind, und erstellt einen [Arbeitsprozess, um sie zu verwalten](#arbeit-managementprozesse).
4. Der UX-Designer entwirft einen Workflow für die neue Funktion, der beschreibt, wie sie funktionieren sollte, und ein Wireframe, um eine Idee zu geben, wo sie auf der Seite passen könnte.
5. Der Grafikdesigner erstellt ein Mockup, das zeigt, wie die Funktion auf der Website aussehen wird, zusammen mit den gewählten Schriftarten und der Farbpalette.
6. Der Inhaltsspezialist schreibt den benötigten UI-Text der durch die Funktion benötigt wird, und die Dokumentation zur Unterstützung.
7. Der Back-End-Entwickler erstellt die notwendigen Systeme, um die den Funktionsbetrieb erfordernden Daten sicher zu speichern und zu verwalten.
8. Der Front-End-Entwickler erstellt die interaktive Funktion basierend auf den Mockups des Grafikdesigners und verbindet sie mit dem Back-End, sodass sie die benötigten Daten abruft.
9. Der QA-Ingenieur testet die neue Funktion gründlich und erstellt einen detaillierten Bericht über die gefundenen Probleme.
10. Die Entwickler beheben die Fehler, die als ausreichend schwerwiegend erachtet werden, um die Veröffentlichung der Funktion zu blockieren.
11. Sobald die (blockierenden) Fehler behoben sind und das Projekt abgesegnet ist, kann die Funktion live auf der Website geschaltet werden.

Dies ist eine vereinfachte Ansicht — andere Phasen werden um die Feature-Implementierung selbst existieren, und die Phasen werden nicht unbedingt alle in der dargestellten Reihenfolge abgeschlossen, aber das gibt Ihnen eine Vorstellung davon, was daran beteiligt ist.

## Arbeitsmanagementprozesse

Der Projektmanager wird einen Prozess verwenden, um das Projekt der Website zu verwalten, den Fortschritt der verschiedenen Arbeitselemente zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und rechtzeitig abgeschlossen werden, usw. Die beiden Hauptprozessarten sind:

- **Wasserfall**
  - : Bezieht sich auf die Ausführung eines Projekts in klaren, festen Phasen, wobei jede von der vorherigen abhängig ist und nicht mit zu vielen Änderungen in den Anforderungen gerechnet wird. In der Regel wird am Ende des Projekts ein einziges großes Ergebnis geliefert. Das Management des Teams tendiert zu mehr Bürokratie, mit weniger Autonomie.
    - Wasserfallprojekte sind tendenziell besser spezifiziert am Anfang und haben weniger Projektschleichen (Hinzufügen von Anforderungen während des Projekts). Darüber hinaus sind größere, weniger häufige Produktveröffentlichungen einfacher zu handhaben in Bezug auf Veröffentlichungsplanung, Marketing, Schulung und Dokumentation, usw.
    - Allerdings tendiert Wasserfall zu weniger Flexibilität, und Änderungen geschehen viel langsamer. Mehrere Monate auf die Behebung eines Fehlers zu warten, kann frustrierend sein.
- **Agil**
  - : Bezieht sich auf die flexiblere Abwicklung eines Projekts, bei dem mehrere Phasen gleichzeitig fortschreiten können und tendenziell mehrere kleinere Ergebnisse zu verschiedenen Meilensteinen während des Projekts geliefert werden. Änderungen der Anforderungen werden erwartet und können durch Verschieben der Prioritäten bei Bedarf gehandhabt werden. Die Teams sind generell autonomer.
    - Agile Projekte sind flexibel und können sich leichter an Änderungen in den Anforderungen anpassen. Es kann auch angenehm sein, häufigere Releases zu haben — Fehler werden schneller behoben, Innovationen geschehen häufiger, und es gibt immer etwas für das Marketingteam zu besprechen. Agile Teams sprechen oft von kontinuierlicher Verbesserung.
    - Allerdings besteht ein höheres Risiko für Projektschleichen und Fristüberschreitungen, Projekte fühlen sich oft nie wirklich abgeschlossen an, und es gibt ein konstanteres Tempo und Druck zur Lieferung.

> [!NOTE]
> Webentwicklungsteams ziehen es oft vor, mit einem agilen Prozess zu arbeiten, da Softwareentwicklung ihrer Natur nach anfällig für (manchmal schnelle) Änderungen in den Anforderungen aufgrund neuer Fehler, Kundenfeedbacks, Unternehmensstrategien, usw. ist.

### Scrum und Kanban

Es gibt eine spezielle Art der agilen Methodologie namens **Scrum**, die eine festgelegte Reihe von Regeln darüber hat, wie ein Projekt geführt wird. Zum Beispiel:

- Die Person, die das Scrum leitet, wird Scrum Master genannt. Dies ist oft einfach der Projektmanager mit einem anderen Namen.
- Die Arbeit wird in Zyklen, genannt **Sprints**, aufgeteilt, die typischerweise zwei Wochen lang sind.
- Vor jedem Sprint werden potenzielle neue Arbeitselemente diskutiert und, wenn sie in den Sprint aufgenommen werden, in ein Backlog gelegt.
- Arbeitselemente werden aus dem Backlog genommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie "in Bearbeitung" und "in Prüfung".
- Der Scrum Master hält kurze tägliche **Stand-up-Meetings** ab, bei denen jeder über die Fortschritte spricht, die er gemacht hat, und über Probleme, die er möglicherweise hat, sodass Probleme frühzeitig erkannt werden können.
- Am Ende jedes Sprints hält der Scrum Master ein Retrospektiv-Meeting ab, um zu bewerten, was gut gelaufen ist, was nicht so gut gelaufen ist, und welche Lektionen vor dem nächsten Sprint gelernt werden können.

Eine andere Art der agilen Methodologie ist **Kanban**, das weniger Regeln als Scrum hat, keine Sprints verwendet, und sich tendenziell mehr auf die kontinuierlichen Verbesserungsaspekte von Agile konzentriert. Kanban ist besonders nützlich zur Verwaltung kontinuierlicher Prozesse, die kein klar definiertes Ende haben, wie z.B. Kundenunterstützungstickets.

### Kanban-Boards

Werkzeuge wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status verschiedener Arbeitselemente in einem Projekt anzeigen. Sie werden normalerweise **Kanban-Boards** genannt, obwohl sie verwendet werden können, um verschiedene Prozessarten zu verwalten, nicht nur Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die unterschiedliche Arbeitsstatus in einem Scrum-Projekt ("Backlog", "To-do", "In Progress", etc.), verschiedene Arten von Arbeit ("Forschung", "Design", "Entwicklung", etc.) oder was sonst für Ihr Projekt nützlich ist, darstellen können.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Option für Tools, und sind kostenlos zu verwenden — Sie müssen sich nur für ein GitHub-Konto anmelden.

## Praxis mit Projekt-Workflows

Sie sollten sich über die oben genannten Prozesse informieren und üben, einige Ihrer Arbeiten oder persönlichen Projekte mithilfe eines Kanban-Boards zu verfolgen. Machen Sie sich keine Sorgen über die Verwendung einer komplexen Scrum-Methodologie; ein einfaches Kanban reicht im Moment aus. Selbst wenn Sie etwas alleine machen, kann es großartig sein, den Workflow zu üben:

1. Aufgaben erstellen.
2. Entscheiden, wie groß sie sind oder wie lange sie dauern werden.
3. Aufgaben priorisieren.
4. Sie in Reihenfolge mit Fälligkeitsdaten bringen.
5. Beginnen, an verschiedenen Aufgaben zu arbeiten.
6. Den Status der Aufgaben ("in Bearbeitung", "blockiert", "erledigt", etc.) einstellen, sobald die Arbeit voranschreitet.

Verfolgen Sie den Fortschritt eines kompletten Projekts von Anfang bis Ende — versuchen Sie es mit Ihrer eigenen Website oder einem Nebenprojekt. Versuchen Sie auch, [zu einem Open-Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen werden einen Prozess verwenden, um ihre Arbeit zu verfolgen, ähnlich wie oben beschrieben.

## Siehe auch

- [What is a Tech Stack and How Do They Work?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website development team structure: roles and processes](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agile vs. Waterfall](https://www.productplan.com/learn/agile-vs-waterfall), ProductPlan
- [What is Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
