---
title: Arbeitsabläufe und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, den Anfänger oft übersehen, ist das Verständnis des größeren Bildes. Sie könnten ein individuelles Werkzeug oder eine Programmiersprache lernen, aber sich nicht der gesamten Bibliotheken, Werkzeuge, Systeme und Jobrollen bewusst sein, die zusammen eine komplette Webanwendung liefern. Die folgenden Abschnitte behandeln auf hoher Ebene verschiedene Aspekte des größeren Bildes.

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
          <li>Typische Phasen technischer Projekte und die Beteiligung der verschiedenen Jobrollen.</li>
          <li>Häufige Arbeitsmanagement-Prozesse, wie agil und Wasserfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Erstellen einer Website verwenden Sie eine Kombination verschiedener Technologien, die üblicherweise als **Technologie-Stack** bezeichnet werden. Wenn Websites größer und komplexer werden, wird auch der Technologie-Stack größer. Er mag einfach beginnen, wenn Sie ein Demo erstellen und nur Sie und ein paar Kollegen es sich ansehen werden. Eine scheinbar einfache Produktionswebsite könnte jedoch einen komplexeren Technologie-Stack haben, als Sie zuerst denken, wenn Sie bedenken, dass sie:

- Schnell laden muss (dies ist der Zweck der [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig handhaben muss (sie muss **skalieren**).
- Gut gestaltet sein muss, damit Benutzer die darin enthaltenen Informationen und Dienste leicht zugreifen können.
- Einfach für ein Team sein muss, daran zu arbeiten und es zu warten.

Auf sehr hoher Ebene könnte ein Technologie-Stack einer Webanwendung folgendermaßen aussehen:

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
> Sie werden oft Akronyme sehen, die auf beliebte Technologie-Stacks verweisen, wie [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) oder [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP oder Python).

Auf MDN beschäftigen wir uns hauptsächlich mit dem Frontend-Teil, aber selbst dieser kann in viele verschiedene Teile unterteilt werden. Nehmen Sie zum Beispiel das Frontend:

- Sie werden wahrscheinlich ein JavaScript-Framework (wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) verwenden, um die Komponenten zu definieren, die zusammen die Benutzeroberfläche bilden.
- Das Framework wird wahrscheinlich eine Art Templating-Sprache (wie [Mustache](https://mustache.github.io/)) verwenden, um die HTML-Struktur zu definieren, bietet aber auch Funktionalität, um dynamisch variable Inhalte einzuschließen.
- Sie werden Informationen bereitstellen, um Ihre Inhalte über CSS stillistisch anzupassen, und dies auf eine Weise, die mit dem Framework kompatibel ist. Dies könnte in reinem CSS, in einem CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder in einem Präprozessor (wie [Sass](https://sass-lang.com/)) geschrieben sein.
- Ein JavaScript-Projekt sollte Tests enthalten, um sicherzustellen, dass neue Code-Zusätze seine Funktionalität nicht beeinträchtigen. Tests werden normalerweise mit einem Test-Framework (wie [Jest](https://jestjs.io/)) implementiert.
- Größere Websites verwenden ein Packaging-/Build-Tool (wie [Parcel](https://parceljs.org/)), um die Leistung zu verbessern, indem Dateigrößen verkleinert, ungenutzte Komponenten aus dem Produktionscode entfernt usw.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen mit bestimmten **Architekturmustern** beschrieben werden. Zum Beispiel folgt [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) einem Muster, dem viele JavaScript-Frameworks folgen, während [Publish–Subscribe (pub/sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, dass Sie diese Muster im Detail verstehen, aber eine gewisse Vertrautheit kann nützlich sein, wenn Sie versuchen, ein neues Framework oder Tool zu verstehen.

Es wird auch Werkzeuge geben, die außerhalb des eigentlichen Technologie-Stacks verwendet werden, um Ihnen bei der Verwaltung oder Erstellung von Assets für die Website zu helfen, wie zum Beispiel:

- Planungstools, um Ihnen zu helfen, auf hoher Ebene zu planen, was Sie im Verlauf des Projekts tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein [git](https://git-scm.com/)-basiertes VCS verwenden, wie [GitHub](https://github.com/).
- Grafik-/Schnittstellendesignpakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagement-Tools wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

Okay, das ist eine Menge zu verarbeiten. Unser Ratschlag ist **keine Panik!** Der Zweck dieses Artikels ist nicht, Ihnen Angst zu machen, indem er Ihnen vorgaukelt, dass Sie plötzlich zehnmal so viele Dinge lernen müssen wie zuvor. Die Idee ist einfach, Sie für das größere Bild in Bezug auf Website-Projekte zu sensibilisieren und Ihnen eine grundlegende Vertrautheit mit einigen der Begriffe zu geben, denen Sie begegnen könnten.

Letztendlich werden Sie Kenntnisse über mehrere der oben genannten Werkzeuge und Technologien entwickeln, aber Sie werden nicht in allen ein Experte sein müssen — dafür gibt es schließlich Teams. Im Moment sind Sie absolut auf dem richtigen Weg, indem Sie die Kernkompetenzen wie HTML, CSS und JavaScript lernen. Weitere Werkzeuge und Spezialisierungen werden im Laufe Ihrer Karriere folgen.

## Jobrollen

In einem Webentwicklungsteam gibt es viele verschiedene Jobrollen, es ist nützlich zu verstehen, was jede umfasst:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus Produktsicht — wie schneidet das Produkt auf dem Markt im Vergleich zu seinen Konkurrenten ab? Was sind seine Stärken und Schwächen? Welche neuen Funktionen fordert die Zielgruppe, und welche haben höchste Priorität? Was sind die wichtigsten Erfolgskriterien der Website, und inwiefern haben die letzten neuen Funktionen dazu beigetragen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und erstellt Berichte, um dem Team zu helfen, die Effizienz ihrer Arbeit zu verstehen und zukünftige Arbeiten zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der Arbeit, die das Team erledigen muss. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeitsdaten, weist das Personal den einzelnen Aufgaben zu, hält regelmäßig Treffen ab, um zu überprüfen, ob Fortschrittsziele erreicht werden und Probleme sichtbar werden, und passt den Plan bei Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich für das Verständnis der Bedürfnisse der Zielgruppe des Produkts und das Design des Produkt-Workflows/Erlebnisses, damit diese Bedürfnisse am effektivsten erfüllt werden. Typische UX-Fragen sind: "Wohin sollten wir den Benutzer zuerst führen, wenn er auf unserer Homepage landet?" und "Wie können wir die Anmeldung für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit geht oft mit Benutzerforschung und -tests einher, um die Zielgruppe besser zu verstehen, und der Erstellung von Wireframes zur Kommunikation von Ideen. Der UX-Designer ist einer der Hauptkonsumenten der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für die visuelle Gestaltung der Website. Grafikdesigner sind für eine Vielzahl von Disziplinen verantwortlich, wie Typografie, Farbschemata, Erstellen von Icons und anderen grafischen Assets und Erstellen von Website-Mockups basierend auf den Wireframes des UX-Designers.
- **Frontend-Entwickler**
  - : Das ist wahrscheinlich Ihr Ziel, wenn Sie dies lesen! Frontend-Entwickler verwenden HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, und erwecken die von UX- und Grafikdesignern erstellten Verhaltens- und Visuellen-Mockups zum Leben.
- **Backend-Entwickler**
  - : Verantwortlich für die nicht-visuellen Teile der Website. Sie schreiben Backend-Code, um interne Daten abzufragen, HTML-Seiten aus Vorlagen zu generieren und externe Daten, die von Benutzern übermittelt werden, zu verarbeiten. Außerdem kümmern sie sich um die Konfiguration des Webservers und die Sicherheit der Website.
- **Full-Stack-Entwickler**
  - : übernimmt sowohl Frontend- als auch Backend-Entwicklungsaufgaben.
- **Qualitätssicherungs-Ingenieur (QA)**
  - : Verantwortlich für das Testen neuer Funktionen, um sicherzustellen, dass sie korrekt funktionieren, und für die Meldung von Fehlern, mit Kommunikation zu den Entwicklern, um sie bei der Priorisierung der erforderlichen Korrekturen zu unterstützen.
- **Inhaltsspezialist/Technischer Redakteur**
  - : Verantwortlich dafür, dass der Textinhalt der Website so gut wie möglich für die Zielgruppe funktioniert. Dazu gehören die Struktur der Informationen und die Navigation, die Benutzeroberflächentextetiketten, Blogbeiträge, Marketingtexte und Produktdokumentationen.

### Weniger verbreitete Jobrollen

Weitere weniger verbreitete Jobrollen umfassen:

- **Benutzerforscher**
  - : Größere Teams haben oft einen eigenen Forscher für die Benutzerforschung und -tests.
- **Suchmaschinenoptimierung (SEO) Spezialist**
  - : Analysiert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die dazu führen, dass die Website sichtbarer in relevanten Suchergebnissen erscheint. Weitere Informationen finden Sie unter {{Glossary("SEO", "SEO")}}.

## Technische Projektphasen

Ein typisches technisches Projekt könnte folgendermaßen ablaufen:

1. Der Produktmanager identifiziert eine neue Reihe von Benutzeranforderungen für die Website.
2. Es wird mit dem Team besprochen, und es wird entschieden, dass diese Anforderungen durch das Hinzufügen einer neuen Funktion zur Website erfüllt werden können.
3. Der Projektmanager bespricht mit dem Team, welche erforderlichen Einzelarbeiten zur Erstellung der neuen Funktion erforderlich sind, und erstellt einen [Arbeitsprozess, um sie zu verwalten](#arbeitsmanagement_prozesse).
4. Der UX-Designer entwirft einen Workflow für die neue Funktion, der beschreibt, wie sie funktionieren sollte, und einen Wireframe, um eine Vorstellung davon zu vermitteln, wo sie auf der Website passen könnte.
5. Der Grafikdesigner entwirft ein Mockup, das zeigt, wie die Funktion auf der Website aussehen wird, zusammen mit den gewählten Schriften und der Farbpalette.
6. Der Inhaltsspezialist schreibt den für die Funktion erforderlichen Benutzeroberflächentext und die Dokumentation, die zu ihrer Unterstützung erforderlich ist.
7. Der Backend-Entwickler erstellt die notwendigen Systeme, um die Daten, die die Funktion antreiben, sicher zu speichern und zu verwalten.
8. Der Frontend-Entwickler erstellt die interaktive Funktion basierend auf den Mockups des Grafikdesigners und verbindet sie mit dem Backend, damit sie die benötigten Daten abruft.
9. Der QA-Ingenieur testet die neue Funktion gründlich und erstellt einen detaillierten Bericht über die festgestellten Probleme.
10. Die Entwickler beheben die als ausreichend schwerwiegend erachteten Fehler, die die Veröffentlichung der Funktion blockieren sollten.
11. Sobald die (blockierenden) Fehler behoben und das Projekt freigegeben ist, kann die Funktion auf der Website live geschaltet werden.

Dies ist eine vereinfachte Ansicht - es werden andere Phasen um die Implementierung der Funktion selbst herum existieren, und die Phasen werden nicht unbedingt in der dargestellten Reihenfolge abgeschlossen, aber dies gibt Ihnen eine Vorstellung davon, was beteiligt ist.

## Arbeitsmanagement-Prozesse

Der Projektmanager wird irgendeine Form von Prozess verwenden, um das Website-Projekt zu verwalten, den Fortschritt bei den verschiedenen Arbeitsvorgängen zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und pünktlich erledigt werden, usw. Die zwei Hauptprozesse sind:

- **Wasserfall**
  - : Bezieht sich auf die Durchführung eines Projekts in klaren, festen Phasen, wobei jede Phase von der vorherigen abhängt und nicht zu viele Änderungen der Anforderungen erwartet werden. Im Allgemeinen wird am Ende des Projekts ein einzelnes großes Ergebnis geliefert. Das Team-Management neigt dazu, bürokratischer zu sein, mit weniger Autonomie.
    - Wasserfallprojekte sind in der Regel zu Beginn besser spezifiziert und haben weniger Umfangserweiterung (Hinzufügen von Anforderungen während des Projekts). Darüber hinaus sind größere, weniger häufige Produktveröffentlichungen in Bezug auf Release-Planung, Marketing, Bereitstellung von Schulungen und Dokumentationen leichter zu handhaben.
    - Wasserfall ist jedoch weniger flexibel, und Änderungen erfolgen viel langsamer. Mehrere Monate auf eine Fehlerbehebung zu warten, kann frustrierend sein.
- **Agil**
  - : Bezieht sich auf die flexiblere Durchführung eines Projekts, bei dem mehrere Phasen gleichzeitig verlaufen können und in der Regel kleinere Ergebnisse zu verschiedenen Meilensteinen des Projekts geliefert werden. Änderungen der Anforderungen werden erwartet und können durch Verschiebung der Prioritäten gehandhabt werden. Teams sind in der Regel autonomer.
    - Agile Projekte sind flexibel und können sich leichter an Änderungen der Anforderungen anpassen. Es kann auch schön sein, häufiger Releases zu haben — Fehler werden schneller behoben, Innovationen treten häufiger auf, und es gibt immer etwas für das Marketingteam zu besprechen. Agile Teams sprechen oft von kontinuierlicher Verbesserung.
    - Es besteht jedoch ein höheres Risiko für Umfangserweiterung und Terminverzögerung, Projekte fühlen sich oft nie wirklich abgeschlossen an, und es gibt einen ständigen Druck, zu liefern.

> [!NOTE]
> Webentwicklungsteams bevorzugen häufig, mit einem agilen Prozess zu arbeiten, da Softwareentwicklung von Natur aus aufgrund neuer Fehler, Benutzerfeedback, Unternehmensstrategie usw. anfällig für (manchmal schnelle) Änderungen der Anforderungen ist.

### Scrum und Kanban

Es gibt eine spezifische Art von Agile-Methodik, die **Scrum** genannt wird und festgelegte Regeln darüber hat, wie ein Projekt durchgeführt wird. Zum Beispiel:

- Die Person, die für das Scrum verantwortlich ist, wird als Scrum-Master bezeichnet. Dies ist häufig nur der Projektmanager mit einem anderen Namen.
- Die Arbeit wird in Zyklen unterteilt, die als **Sprints** bezeichnet werden und in der Regel zwei Wochen dauern.
- Vor jedem Sprint werden mögliche neue Arbeitsaufgaben besprochen, und wenn sie in den Sprint aufgenommen werden, werden sie in einen Backlog gesetzt.
- Arbeitsaufgaben werden aus dem Backlog genommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie "in Arbeit" und "in Überprüfung".
- Der Scrum-Master hält tägliche kurze **Stand-up-Meetings** ab, in denen jeder über den Fortschritt berichtet, den er gemacht hat, und über mögliche Probleme spricht, damit Probleme frühzeitig erkannt werden.
- Am Ende eines jeden Sprints hält der Scrum-Master ein Retrospektive-Meeting ab, um zu überprüfen, was gut gelaufen ist, was nicht so gut war und welche Lehren vor dem nächsten Sprint gezogen werden können.

Eine andere Art von Agile-Methodik wird **Kanban** genannt, die weniger Regeln als Scrum hat, keine Sprints verwendet und sich eher auf die Aspekte der kontinuierlichen Verbesserung von Agile konzentriert. Kanban ist besonders nützlich für das Management kontinuierlicher Prozesse, die kein klar definiertes Ende haben, wie z.B. Kundensupport-Tickets.

### Kanban-Boards

Werkzeuge wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status der verschiedenen Arbeitsgegenstände in einem Projekt anzeigen. Sie werden normalerweise **Kanban-Boards** genannt, obwohl sie zur Verwaltung verschiedener Prozessarten verwendet werden können, nicht nur Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die verschiedene Arbeitsstatus in einem Scrum-Projekt ("Backlog", "ToDo", "in Arbeit" usw.), verschiedene Arten von Arbeit ("Forschung", "Design", "Entwicklung" usw.) oder alles andere, was für Ihr Projekt nützlich ist, darstellen können.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Tooloption und sind kostenlos zu verwenden — Sie müssen sich nur für ein GitHub-Konto anmelden.

## Üben mit Projektarbeitsabläufen

Sie sollten sich über die oben genannten Prozesse informieren und üben, einige Ihrer Arbeiten oder persönlichen Projekte mit einem Kanban-Board zu verfolgen. Machen Sie sich keine Sorgen darüber, eine komplexe Scrum-Methodik zu verwenden; einfaches Kanban ist im Moment ausreichend. Selbst wenn Sie etwas alleine machen, kann es hilfreich sein, den Workflow zu üben:

1. Aufgaben erstellen.
2. Entscheiden, wie groß sie sind oder wie lange sie dauern.
3. Aufgaben priorisieren.
4. Sie in eine Reihenfolge mit Fälligkeitsdaten bringen.
5. Beginnen, an verschiedenen Aufgaben zu arbeiten.
6. Den Status ("in Bearbeitung", "blockiert", "erledigt" usw.) der Arbeit aktualisieren.

Verfolgen Sie den Fortschritt eines vollständigen Projekts von Anfang bis Ende — versuchen Sie es mit Ihrer eigenen Website oder einem Nebenprojekt irgendeiner Art. Versuchen Sie auch, [zu einem Open Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen werden einen Prozess verwenden, um ihre Arbeit ähnlich zu verfolgen, wie wir es oben beschrieben haben.

## Siehe auch

- [Was ist ein Tech Stack und wie funktionieren sie?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Struktur eines Websiteentwicklungsteams: Rollen und Prozesse](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agil vs. Wasserfall](https://www.productplan.com/learn/agile-vs-waterfall), ProductPlan
- [Was ist Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
