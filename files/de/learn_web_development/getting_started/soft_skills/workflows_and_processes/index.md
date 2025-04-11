---
title: Arbeitsabläufe und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, den Anfänger oft übersehen, ist eine Vorstellung vom größeren Ganzen. Sie erlernen möglicherweise ein einzelnes Tool oder eine Sprache, sind jedoch mit all den Bibliotheken, Tools, Systemen und Jobrollen, die zusammenarbeiten, um eine komplette Webanwendung bereitzustellen, nicht vertraut. Die folgenden Abschnitte behandeln verschiedene große Aspekte auf einer hohen Ebene.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Nicht zutreffend
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Typische Technologiekombinationen in Webprojekten.</li>
          <li>Typische Jobrollen in einem Webentwicklungsteam.</li>
          <li>Typische technische Projektphasen und die Rollen, die daran beteiligt sind.</li>
          <li>Gängige Arbeitsmanagementprozesse wie agile und Wasserfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Erstellen einer Website verwenden Sie eine Kombination verschiedener Technologien, die häufig als **Tech-Stack** bezeichnet werden. Websites werden größer und komplexer, ebenso der Tech-Stack. Er könnte einfach beginnen, wenn Sie ein Demo erstellen und nur Sie und ein paar Kollegen es sich ansehen. Eine scheinbar einfache Produktionswebsite könnte jedoch komplexer sein, als Sie zunächst denken, wenn Sie berücksichtigen, dass sie:

- Schnell geladen werden muss (dies ist der Zweck der [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig verarbeiten muss (sie muss **skalieren**).
- Gut gestaltet sein muss, damit Benutzer leicht auf die Informationen und Dienste zugreifen können.
- Einfach für ein Team zu bearbeiten und zu warten sein muss.

Auf sehr hoher Ebene könnte ein Tech-Stack für Webanwendungen so aussehen:

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

Auf MDN befassen wir uns hauptsächlich mit dem Frontend, aber auch das kann in viele unterschiedliche Teile aufgeteilt werden. Nehmen Sie zum Beispiel das Frontend:

- Sie werden wahrscheinlich ein JavaScript-Framework (wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) verwenden, um die Komponenten zu definieren, die zusammen die Benutzeroberfläche bilden.
- Das Framework wird wahrscheinlich eine Art Template-Sprache (wie [Mustache](https://mustache.github.io/)) verwenden, um die HTML-Struktur zu definieren, bietet jedoch auch Funktionalitäten zum dynamischen Einfügen von variablen Inhalten.
- Sie werden Informationen hinzufügen, um Ihren Inhalt über CSS in einer Weise zu gestalten, die mit dem Framework kompatibel ist. Dies könnte in reinem CSS, oder mit einem CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder einem Präprozessor (wie [Sass](https://sass-lang.com/)) geschrieben sein.
- Ein JavaScript-Projekt sollte Tests enthalten, um sicherzustellen, dass keine neuen Codezugänge seine Funktionalität beeinträchtigen. Tests werden normalerweise mit einem Testframework (wie [Jest](https://jestjs.io/)) implementiert.
- Größere Websites verwenden ein Paketierungs-/Build-Tool (wie [Parcel](https://parceljs.org/)), um die Leistung zu verbessern, indem Dateigrößen reduziert, nicht verwendete Komponenten aus dem Produktionscode entfernt usw.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen nach bestimmten **architektonischen Mustern** gebaut werden. Zum Beispiel ist [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ein Muster, dem viele JavaScript-Frameworks folgen, während [Publish–Subscribe (pub/sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, diese Muster im Detail zu verstehen, aber eine gewisse Vertrautheit kann nützlich sein, wenn Sie versuchen, ein neues Framework oder Tool zu verstehen.

Es werden auch Tools außerhalb des eigentlichen Tech-Stacks verwendet, die Ihnen bei der Verwaltung oder Erstellung von Assets für die Website helfen, z. B.:

- Planungstools, die Ihnen helfen, zu planen, was Sie im Verlauf des Projekts auf hoher Ebene tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein [git](https://git-scm.com/)-basiertes VCS wie [GitHub](https://github.com/) verwenden.
- Grafik-/Interface-Design-Pakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagement-Tools wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

Gut, das war eine Menge. Unser Rat ist **keine Panik!** Ziel dieses Artikels ist es nicht, Sie zu beunruhigen, indem er Sie glauben lässt, dass Sie plötzlich zehnmal so viele Dinge lernen müssen wie zuvor. Die Idee ist einfach, Ihnen ein Bewusstsein für das größere Ganze in Bezug auf Website-Projekte zu vermitteln und Ihnen ein grundlegendes Verständnis für einige der Begriffe zu verschaffen, denen Sie möglicherweise begegnen.

Letztendlich werden Sie Wissen zu mehreren der oben genannten Tools und Technologien entwickeln, aber Sie werden nicht in allen ein Experte sein müssen — dafür gibt es Teams. Derzeit machen Sie absolut das Richtige, indem Sie die Kernkompetenzen wie HTML, CSS und JavaScript erlernen. Weitere Tools und Spezialisierungen werden später in Ihrer Karriere hinzukommen.

## Jobrollen

In einem Webentwicklungsteam gibt es viele unterschiedliche Jobrollen; es ist nützlich, zu verstehen, worum es bei jeder geht:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus Produktsicht — wie schneidet das Produkt im Markt ab, verglichen mit seinen Mitbewerbern? Was sind seine Stärken und Schwächen? Welche neuen Funktionen fordert die Zielgruppe, und welche haben höchste Priorität? Was sind die Hauptkriterien für den Erfolg der Website, und wie haben die jüngsten neuen Funktionen dazu beigetragen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und schreibt Berichte, um dem Team zu helfen zu verstehen, wie effektiv ihre Arbeit ist, und zukünftige Arbeiten zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der vom Team zu erledigenden Arbeiten. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeitsterminen, weist das Personal zu, um jede Aufgabe zu erledigen, hält regelmäßig Meetings ab, um zu sehen, ob die Fortschrittsziele erreicht werden und Probleme auftauchen, und passt den Plan bei Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich dafür, die Bedürfnisse der Zielgruppe des Produkts zu verstehen und das Produkt-Workflow/Erlebnis so zu gestalten, dass diese Bedürfnisse so effektiv wie möglich erfüllt werden. Typische UX-Fragen sind "Wohin sollen wir den Benutzer zuerst lenken, wenn er auf unserer Homepage landet?" und "Wie können wir die Registrierung für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit wird oft von Nutzerforschung und Tests begleitet, um die Zielgruppe besser zu verstehen und Wireframes zu erstellen, um Ideen zu kommunizieren. Der UX-Designer ist einer der Hauptverbraucher der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für visuelle Designarbeiten am Website-Projekt. Grafikdesigner sind verantwortlich für eine Vielzahl von Disziplinen wie Typografie, Auswahl von Farbschemata, Erstellung von Symbolen und anderen Grafik-Assets und Erstellung von Website-Mockups basierend auf den Wireframes des UX-Designers.
- **Front-End-Entwickler**
  - : Das ist wahrscheinlich das, was Sie anstreben, wenn Sie dies lesen! Front-End-Entwickler verwenden HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, und bringen die von den UX- und Grafikdesignern erstellten Verhaltens- und visuellen Mockups zum Leben.
- **Back-End-Entwickler**
  - : Verantwortlich für die nicht-visuellen Teile der Website. Sie schreiben Back-End-Code, um interne Daten anzufordern, HTML-Seiten aus Templates zu generieren und externe von Benutzern übermittelte Daten zu verarbeiten. Sie kümmern sich auch um die Konfiguration des Webservers, sorgen für die Sicherheit der Website usw.
- **Full-Stack-Entwickler**
  - : Bearbeitet sowohl Aufgaben der Front-End-Entwicklung als auch der Back-End-Entwicklung.
- **Quality Assurance (QA) Ingenieur**
  - : Verantwortlich für das Testen neuer Funktionen, um sicherzustellen, dass sie ordnungsgemäß funktionieren, und das Melden von Fehlern, um mit den Entwicklern zu kommunizieren und ihnen zu helfen, die notwendigen Korrekturen zu priorisieren.
- **Inhaltspezialist/technischer Redakteur**
  - : Verantwortlich dafür, dass der Textinhalt der Website so gut wie möglich für die Zielgruppe funktioniert. Dies umfasst die Struktur der Informationen und deren Navigation, die Textbeschriftungen der Benutzeroberfläche, Blogposts, Marketingtexte und Produktdokumentation.

### Weniger häufige Jobrollen

Andere weniger häufige Jobrollen umfassen:

- **Nutzerforscher**
  - : Größere Teams haben oft einen dedizierten Forscher, der Nutzerforschung und Tests durchführt.
- **Search Engine Optimization (SEO) Spezialist**
  - : Analysiert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die dazu führen, dass die Website in relevanten Suchergebnissen sichtbarer wird. Siehe {{Glossary("SEO", "SEO")}} für weitere Informationen.

## Technische Projektphasen

Ein typisches technisches Projekt könnte so ablaufen:

1. Der Produktmanager identifiziert einen neuen Satz von Benutzeranforderungen für die Website.
2. Er bespricht dies mit dem Team, und es wird entschieden, dass diese Anforderungen durch das Hinzufügen einer neuen Funktion zur Website erfüllt werden können.
3. Der Projektmanager bespricht mit dem Team, welche erforderlichen einzelnen Arbeitsitems zur Erstellung der neuen Funktion gehören, und erstellt einen [Arbeitsprozess, um sie zu verwalten](#arbeitsmanagementprozesse).
4. Der UX-Designer entwirft einen Workflow für die neue Funktion, der beschreibt, wie sie funktionieren sollte, und ein Wireframe, um eine Vorstellung davon zu geben, wo sie auf der Website passen könnte.
5. Der Grafikdesigner entwirft ein Mockup, das zeigt, wie die Funktion auf der Website aussehen wird, zusammen mit den ausgewählten Schriftarten und der Farbpalette.
6. Der Inhaltspezialist schreibt den erforderlichen UI-Text für die Funktion und die notwendigen Dokumentationen zu ihrer Unterstützung.
7. Der Back-End-Entwickler erstellt die notwendigen Systeme, um die Daten, die die Funktion antreiben, sicher zu speichern und zu verarbeiten.
8. Der Front-End-Entwickler erstellt die interaktive Funktion basierend auf den Mockups des Grafikdesigners und verbindet sie mit dem Back-End, sodass sie die benötigten Daten abruft.
9. Der QA-Ingenieur testet die neue Funktion umfassend und schreibt einen detaillierten Bericht über die gefundenen Probleme.
10. Die Entwickler beheben die als ausreichend schwerwiegend eingestuften Bugs, die die Veröffentlichung der Funktion blockieren würden.
11. Sobald die (blockierenden) Fehler behoben und das Projekt freigegeben ist, kann die Funktion live auf der Website geschaltet werden.

Dies ist eine vereinfachte Sichtweise — es werden auch andere Phasen um die Implementierung der Funktion selbst herum existieren, und die Phasen werden nicht unbedingt alle in der angegebenen Reihenfolge abgeschlossen, aber dies gibt Ihnen eine Vorstellung davon, was beteiligt ist.

## Arbeitsmanagementprozesse

Der Projektmanager wird eine Art Prozess verwenden, um das Website-Projekt zu verwalten, den Fortschritt der verschiedenen Arbeitsitems zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und pünktlich erledigt werden usw. Die beiden Hauptprozesstypen sind:

- **Wasserfall**
  - : Bezieht sich auf das Ausführen eines Projekts in klaren, festen Phasen, wobei jede von der vorherigen abhängt und nicht zu viele Änderungen der Anforderungen erwartet werden. Im Allgemeinen wird am Ende des Projekts ein einziges großes Ergebnis geliefert. Das Management des Teams ist tendenziell bürokratischer mit weniger Autonomie.
    - Wasserfallprojekte sind in der Regel besser am Anfang spezifiziert und haben weniger Scope Creep (Hinzufügen von Anforderungen mitten im Projekt). Außerdem sind größere, weniger häufige Produktveröffentlichungen leichter zu handhaben in Bezug auf die Release-Planung, das Marketing, die Bereitstellung von Training und Dokumentation usw.
    - Allerdings ist Wasserfall tendenziell weniger flexibel, und Änderungen passieren viel langsamer. Mehrere Monate auf eine Fehlerkorrektur zu warten, kann frustrierend sein.
- **Agil**
  - : Bezieht sich auf ein flexibleres Durchführen eines Projekts, bei dem mehrere Phasen gleichzeitig ablaufen können und mehrere kleinere Ergebnisse zu verschiedenen Meilensteinen im Laufe des Projekts geliefert werden. Änderungen der Anforderungen werden erwartet und können durch Prioritätsverschiebungen nach Bedarf gehandhabt werden. Teams sind in der Regel autonomer.
    - Agile Projekte sind flexibel und können sich leichter an Änderungen der Anforderungen anpassen. Es kann auch angenehm sein, häufigere Veröffentlichungen zu haben — Bugs werden schneller behoben, Innovationen passieren häufiger, und es gibt immer etwas für das Marketingteam zu besprechen. Agile Teams sprechen oft von kontinuierlicher Verbesserung.
    - Allerdings besteht mehr Risiko von Scope Creep und Verzögerungen bei Fristen, Projekte fühlen sich oft nie wirklich abgeschlossen an, und es besteht mehr kontinuierliches Tempo und Druck, zu liefern.

> [!NOTE]
> Webentwicklungsteams ziehen es oft vor, mit einem agilen Prozess zu arbeiten, da Softwareentwicklung von Natur aus dazu neigt, (manchmal schnellen) Änderungen der Anforderungen aufgrund neuer Bugs, Benutzerfeedback, Unternehmensstrategie usw. ausgesetzt zu sein.

### Scrum und Kanban

Es gibt eine spezielle Art von agiler Methodik namens **Scrum**, die eine feste Anzahl von Regeln darüber hat, wie ein Projekt ausgeführt wird. Zum Beispiel:

- Die Person, die für Scrum verantwortlich ist, wird als Scrum-Master bezeichnet. Dies ist oft einfach der Projektmanager mit einem anderen Namen.
- Die Arbeit wird in Zyklen unterteilt, sogenannte **Sprints**, die typischerweise zwei Wochen lang sind.
- Vor jedem Sprint werden potenzielle neue Arbeitsitems besprochen, und wenn sie in den Sprint aufgenommen werden, landen sie in einem Backlog.
- Arbeitsitems werden aus dem Backlog genommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie "in Bearbeitung" und "in Prüfung".
- Der Scrum-Master hält kurze tägliche **Stand-up-Meetings** ab, bei denen jeder über den Fortschritt seiner Arbeit spricht und über Probleme, die möglicherweise auftreten, spricht, damit Probleme frühzeitig erkannt werden können.
- Am Ende jedes Sprints hält der Scrum-Master ein Retrospektiv-Meeting ab, um zu überprüfen, was gut gelaufen ist, was nicht so gut gelaufen ist und welche Lektionen vor dem nächsten Sprint gelernt werden können.

Eine andere Art von agiler Methodik wird **Kanban** genannt, die weniger Regeln als Scrum hat, keine Sprints verwendet und sich tendenziell mehr auf die Aspekte der kontinuierlichen Verbesserung von agil konzentriert. Kanban ist besonders nützlich für das Management von kontinuierlichen Prozessen, die kein klar definiertes Ende haben, wie Kundensupporttickets.

### Kanban-Boards

Tools wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status verschiedener Arbeitsitems in einem Projekt anzeigen. Sie werden normalerweise als **Kanban-Boards** bezeichnet, obwohl sie auch zur Verwaltung verschiedener Prozesstypen verwendet werden können, nicht nur für Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die unterschiedliche Arbeitsstatus in einem Scrum-Projekt darstellen können ("Backlog", "zu erledigen", "in Bearbeitung" etc.), verschiedene Arten von Arbeit ("Forschung", "Design", "Entwicklung" usw.) oder was auch immer für Ihr Projekt nützlich ist.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Tooloption und sind kostenlos nutzbar — Sie müssen sich nur für ein GitHub-Konto anmelden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Sie sollten sich über die oben genannten Prozesse informieren und versuchen, einige Ihrer Arbeits- oder persönlichen Projekte mit einem Kanban-Board zu verfolgen. Machen Sie sich keine Sorgen über die Verwendung einer komplexen Scrum-Methodik; einfaches Kanban ist momentan ausreichend. Auch wenn Sie etwas alleine machen, kann es großartig sein, den folgenden Workflow zu üben:
>
> 1. Aufgaben erstellen.
> 2. Entscheiden, wie groß sie sind oder wie lange sie dauern werden.
> 3. Aufgaben priorisieren.
> 4. Sie in eine Reihenfolge mit Fälligkeitsterminen bringen.
> 5. Beginnen, an verschiedenen Aufgaben zu arbeiten.
> 6. Ihre Status ("in Bearbeitung", "blockiert", "fertig" usw.) einstellen, während die Arbeit voranschreitet.
>
> Verfolgen Sie den Fortschritt eines vollständigen Projekts von Anfang bis Ende — versuchen Sie es mit Ihrer eigenen Website oder einem Nebenprojekt irgendeiner Art. Versuchen Sie auch, [zu einem Open-Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen verwenden einen Prozess, um ihre Arbeit zu verfolgen, ähnlich dem, den wir oben beschrieben haben.

## Siehe auch

- [Was ist ein Tech-Stack und wie funktionieren sie?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website-Entwicklungsteamstruktur: Rollen und Prozesse](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agil vs. Wasserfall](https://www.productplan.com/learn/agile-vs-waterfall/), ProductPlan
- [Was ist Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
