---
title: Workflows und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: 11a5944cd0a3bf015b2ee9c7ee4c55025dd878ca
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, der Anfängern oft entgeht, ist der Blick für das größere Ganze. Sie könnten ein einzelnes Werkzeug oder eine Sprache lernen, sind jedoch nicht über alle Bibliotheken, Tools, Systeme und Jobrollen informiert, die zusammen erforderlich sind, um eine vollständige Webanwendung bereitzustellen. Die folgenden Abschnitte behandeln verschiedene Aspekte des großen Ganzen auf hoher Ebene.

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
          <li>Typische Phasen technischer Projekte und die Beteiligung verschiedener Jobrollen.</li>
          <li>Häufige Arbeitsmanagement-Prozesse, wie agile und Wasserfallmethoden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Erstellen einer Website verwenden Sie eine Kombination verschiedener Technologien, die üblicherweise als **Tech-Stack** bezeichnet wird. Je größer und komplexer Websites werden, desto komplexer wird auch der Tech-Stack. Er könnte einfach beginnen, wenn Sie ein Demo erstellen und es nur von Ihnen und ein paar Kollegen betrachtet wird. Ein scheinbar einfacher Produktions-Webseitentech-Stack könnte jedoch komplexer sein, als Sie zuerst denken, wenn Sie bedenken, dass er:

- Schnell laden muss (das ist der Zweck von [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig handhaben muss (er muss **skalierbar** sein).
- Gut gestaltet sein muss, damit Benutzer leicht auf die Informationen und Dienste zugreifen können, die er enthält.
- Es einem Team einfach machen muss, daran zu arbeiten und es zu warten.

Auf einer sehr hohen Ebene könnte ein Webanwendungstech-Stack in etwa so aussehen:

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

Auf MDN konzentrieren wir uns hauptsächlich auf den Front-End-Teil, aber auch dieser kann in viele verschiedene Teile unterteilt werden. Nehmen Sie zum Beispiel das Front-End:

- Sie werden wahrscheinlich ein JavaScript-Framework (wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) verwenden, um die Komponenten zu definieren, die zusammen die Benutzeroberfläche erstellen.
- Das Framework wird wahrscheinlich eine Art von Templating-Sprache (wie [Mustache](https://mustache.github.io/)) verwenden, um die HTML-Struktur zu definieren, aber auch Funktionalität zum dynamischen Einfügen variabler Inhalte bereitzustellen.
- Sie werden Informationen bereitstellen, um Ihre Inhalte über CSS so zu gestalten, dass sie mit dem Framework kompatibel sind. Dies könnte in reinem CSS geschrieben sein oder in einem CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder Präprozessor (wie [Sass](https://sass-lang.com/)).
- Ein JavaScript-Projekt sollte Tests enthalten, um sicherzustellen, dass alle neuen Code-Zugänge die Funktionalität nicht beeinträchtigen. Tests werden normalerweise mit einem Test-Framework implementiert (wie [Jest](https://jestjs.io/)).
- Größere Websites verwenden ein Verpackungs-/Build-Tool (wie [Parcel](https://parceljs.org/)), um die Leistung zu verbessern, indem Dateigrößen reduziert, ungenutzte Komponenten aus dem Produktionscode entfernt usw.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen mit spezifischen **Architekturmustern** gebaut werden. Zum Beispiel ist [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ein Muster, dem viele JavaScript-Frameworks folgen, während [Publish-Subscribe (pub/sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, dass Sie diese Muster im Detail verstehen, aber eine gewisse Vertrautheit kann nützlich sein, wenn Sie versuchen, ein neues Framework oder Tool zu verstehen.

Es gibt auch Tools, die außerhalb des eigentlichen Tech-Stacks verwendet werden, um Ihnen bei der Verwaltung oder Erstellung von Assets für die Website zu helfen, wie zum Beispiel:

- Planungstools, die Ihnen helfen sollen, auf hoher Ebene zu planen, was Sie im Verlauf des Projekts tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein auf [git](https://git-scm.com/) basierendes VCS verwenden, wie [GitHub](https://github.com/).
- Grafik-/Schnittstellendesignpakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagement-Tools wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

Ok, das ist eine Menge zu verarbeiten. Unser Rat ist **keine Panik!** Das Ziel dieses Artikels ist es nicht, Sie zu beunruhigen, indem Sie denken, dass Sie auf einmal 10-mal so viele Dinge lernen müssen. Die Idee ist einfach, Ihnen ein Bewusstsein für das größere Bild im Hinblick auf Website-Projekte zu vermitteln und Ihnen eine grundlegende Vertrautheit mit einigen der Begriffe, auf die Sie stoßen könnten, zu geben.

Letztendlich werden Sie ein gewisses Wissen über mehrere der oben genannten Tools und Technologien entwickeln, aber Sie werden nicht in allen Experten sein, noch müssen Sie das — dafür sind Teams da. Im Moment machen Sie absolut das Richtige, indem Sie die Kernkompetenzen wie HTML, CSS und JavaScript erlernen. Weitere Tools und Spezialisierungen werden im Laufe Ihrer Karriere hinzukommen.

## Jobrollen

In einem Webentwicklungsteam gibt es viele verschiedene Jobrollen; es ist nützlich zu verstehen, was jede Rolle umfasst:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus einer Produktsicht — wie schneidet das Produkt auf dem Markt im Vergleich zu seinen Wettbewerbern ab? Was sind seine Stärken und Schwächen? Welche neuen Funktionen fordert die Zielgruppe, und welche haben die höchste Priorität? Was sind die Haupt-Erfolgskriterien der Website und wie haben kürzlich neue Funktionen dazu beigetragen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und schreibt Berichte, um dem Team zu helfen, die Wirksamkeit ihrer Arbeit zu verstehen und zukünftige Arbeiten zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der Arbeiten, die das Team erledigen muss. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeitsdaten, weist Personal zu, das jede Aufgabe erledigt, hält regelmäßige Check-in-Meetings ab, um zu prüfen, ob Fortschrittsziele erreicht werden und Probleme sichtbar zu machen, und passt den Plan nach Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich für das Verständnis der Bedürfnisse der Zielgruppe des Produkts und das Entwerfen des Produktworkflows/-erlebnisses, damit diese Bedürfnisse am effektivsten erfüllt werden. Typische UX-Fragen sind "Wohin sollten wir den Nutzer zuerst leiten, wenn er auf unserer Homepage ankommt?" und "Wie können wir die Anmeldung für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit wird oft mit Nutzerforschung und Tests gekoppelt, um die Zielgruppe besser zu verstehen und Wireframes zu erstellen, um Ideen zu kommunizieren. Der UX-Designer ist einer der Hauptverbraucher der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für visuelle Designarbeiten am Website-Projekt. Grafikdesigner sind verantwortlich für eine Vielzahl von Disziplinen wie Typografie, Auswahl von Farbpaletten, Erstellung von Icon und anderen grafischen Assets sowie Erstellung von Website-Mockups basierend auf den Wireframes des UX-Designers.
- **Front-End-Entwickler**
  - : Das ist (wahrscheinlich), was Sie werden wollen, wenn Sie dies lesen! Front-End-Entwickler verwenden HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, und die von den UX- und Grafikdesignern erstellten Verhaltens- und visuelle Mockups zum Leben zu erwecken.
- **Back-End-Entwickler**
  - : Verantwortlich für die nicht-visuellen Teile der Website. Sie schreiben Back-End-Code, um interne Daten anzufordern, HTML-Seiten aus Vorlagen zu generieren und von Benutzern übermittelte externe Daten zu verarbeiten. Sie kümmern sich auch um die Konfiguration des Webservers, die Sicherstellung der Sicherheit der Website usw.
- **Full-Stack-Entwickler**
  - : Bearbeitet sowohl Front-End-Entwicklungs- als auch Back-End-Entwicklungsaufgaben.
- **Qualitätssicherungsingenieur (QA)**
  - : Verantwortlich für das Testen neuer Funktionen, um sicherzustellen, dass sie ordnungsgemäß funktionieren, und für das Melden von Fehlern, die Kommunikation mit den Entwicklern, um ihnen zu helfen, die notwendigen Korrekturen zu priorisieren.
- **Contentspezialist/technischer Redakteur**
  - : Verantwortlich dafür, dass der Textinhalt der Website für die Zielgruppe so gut wie möglich funktioniert. Dazu gehören die Struktur der Informationen und deren Navigation, die Textbeschriftungen der Benutzeroberfläche, Blogbeiträge, Marketingtexte und Produktdokumentationen.

### Weniger häufige Jobrollen

Andere weniger häufige Jobrollen beinhalten:

- **User Researcher**
  - : Größere Teams haben oft einen dedizierten Forscher, der Benutzerforschung und Tests durchführt.
- **Suchmaschinenoptimierungsspezialist (SEO)**
  - : Analyziert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die die Website in relevanten Suchmaschinenergebnissen sichtbarer machen. Siehe {{Glossary("SEO", "SEO")}} für weitere Informationen.

## Technische Projektphasen

Ein typisches technisches Projekt könnte folgendermaßen ablaufen:

1. Der Produktmanager identifiziert einen neuen Satz von Benutzeranforderungen für die Website.
2. Diese werden mit dem Team besprochen, und es wird beschlossen, dass diese Anforderungen durch Hinzufügen einer neuen Funktion zur Website erfüllt werden können.
3. Der Projektmanager bespricht mit dem Team, welche die erforderlichen individuellen Arbeitsaufgaben für die Erstellung der neuen Funktion sind, und erstellt einen [Arbeitsprozess zur Verwaltung dieser](#arbeitsmanagementprozesse).
4. Der UX-Designer entwirft einen Workflow für die neue Funktion, der beschreibt, wie sie funktionieren soll, und ein Wireframe, um eine Vorstellung davon zu geben, wo sie auf der Website integriert werden könnte.
5. Der Grafikdesigner entwirft ein Mockup, das zeigt, wie die Funktion auf der Website aussehen wird, zusammen mit den gewählten Schriftarten und der Farbpalette.
6. Der Inhalte-Spezialist schreibt den für die Funktion erforderlichen UI-Text und die Dokumentation, die zu ihrer Unterstützung erforderlich ist.
7. Der Back-End-Entwickler erstellt die notwendigen Systeme, um die Daten, die die Funktion antreiben, sicher zu speichern und zu verarbeiten.
8. Der Front-End-Entwickler erstellt die interaktive Funktion basierend auf den Mockups des Grafikdesigners und verbindet sie mit dem Back-End, um die benötigten Daten abzurufen.
9. Der Qualitätssicherungsingenieur testet die neue Funktion gründlich und schreibt einen detaillierten Bericht über die festgestellten Probleme.
10. Die Entwickler beheben die als ausreichend schwerwiegend erachteten Fehler, sodass sie die Veröffentlichung der Funktion blockieren würden.
11. Sobald die (blockierenden) Fehler behoben sind und das Projekt abgesegnet wurde, kann die Funktion auf der Website veröffentlicht werden.

Dies ist eine vereinfachte Sichtweise — es werden noch andere Phasen um die eigentliche Implementierung der Funktion existieren, und die Phasen werden nicht unbedingt in der gezeigten Reihenfolge abgeschlossen, aber dies gibt Ihnen eine Vorstellung davon, was alles beinhaltet ist.

## Arbeitsmanagementprozesse

Der Projektmanager wird irgendeine Art von Prozess verwenden, um das Websiteprojekt zu verwalten und den Fortschritt der verschiedenen Arbeitsaufgaben zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und rechtzeitig erledigt werden usw. Die beiden Hauptprozessarten sind:

- **Wasserfall**
  - : Bezieht sich auf das Führen eines Projekts in klaren, festen Phasen, wobei jede von der vorherigen abhängig ist und nicht zu viele Änderungen in den Anforderungen erwartet werden. Im Allgemeinen wird ein einziges großes Ergebnis am Ende des Projekts geliefert. Das Management des Teams neigt dazu, bürokratischer zu sein, mit weniger Autonomie.
    - Wasserfall-Projekte sind tendenziell zu Beginn besser spezifiziert und haben weniger Umfangserweiterung (Hinzufügen von Anforderungen während des Projekts). Außerdem sind größere, seltener stattfindende Produktveröffentlichungen in Bezug auf Release-Planung, Marketing, Bereitstellung von Schulungen und Dokumentation usw. leichter zu handhaben.
    - Wasserfallneigt jedoch dazu, weniger flexibel zu sein, und Änderungen geschehen viel langsamer. Mehrere Monate auf eine Fehlerbehebung zu warten, kann frustrierend sein.
- **Agil**
  - : Bezieht sich auf die Durchführung eines Projekts flexibler, wobei mehrere Phasen gleichzeitig fortschreiten können und mehrere kleinere Ergebnisse tendenziell zu verschiedenen Meilensteinen im Verlauf des Projekts geliefert werden. Änderungen der Anforderungen werden erwartet und können durch entsprechende Prioritätsänderungen behandelt werden. Teams sind allgemein autonomer.
    - Agile Projekte sind flexibel und können sich leichter an Änderungen der Anforderungen anpassen. Es kann auch angenehm sein, häufigere Veröffentlichungen zu haben — Fehler werden schneller behoben, Innovationen geschehen häufiger, und es gibt immer etwas für das Marketingteam zu berichten. Agile Teams sprechen oft von kontinuierlicher Verbesserung.
    - Es gibt jedoch ein höheres Risiko für Umfangserweiterung und Terminverzögerungen, Projekte fühlen sich oft nie wirklich abgeschlossen an, und es besteht ein konstanter Druck, zu liefern.

> [!NOTE]
> Webentwicklungsteams bevorzugen es oft, mit einem agilen Prozess zu arbeiten, da die Softwareentwicklung von Natur aus anfällig für (manchmal schnelle) Anforderungenänderungen ist, die durch neue Fehler, Benutzerfeedback, Unternehmensstrategien usw. verursacht werden.

### Scrum und Kanban

Es gibt eine spezielle Art von agiler Methodik namens **Scrum**, die einen festen Satz von Regeln darüber hat, wie ein Projekt durchgeführt wird. Zum Beispiel:

- Die Person, die für den Scrum verantwortlich ist, wird Scrum Master genannt. Dies ist häufig einfach der Projektmanager mit einem anderen Namen.
- Die zu erledigende Arbeit wird in Zyklen unterteilt, die **Sprints** genannt werden und typischerweise zwei Wochen dauern.
- Vor jedem Sprint werden mögliche neue Arbeitsaufgaben besprochen, und wenn sie in den Sprint aufgenommen werden, werden sie in ein Backlog aufgenommen.
- Arbeitsaufgaben werden aus dem Backlog genommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie „in Arbeit“ und „in Prüfung“.
- Der Scrum Master hält kurze tägliche **Stand-up-Meetings** ab, in denen alle über den Fortschritt, den sie gemacht haben, und eventuelle Probleme berichten, damit Probleme frühzeitig erkannt werden können.
- Am Ende jedes Sprints hält der Scrum Master ein retrospektives Meeting ab, um zu überprüfen, was gut gelaufen ist, was nicht so gut gelaufen ist und welche Lektionen vor dem nächsten Sprint gelernt werden können.

Eine andere Art von agiler Methode wird als **Kanban** bezeichnet, die weniger Regeln als Scrum hat, keine Sprints verwendet und sich eher auf die Aspekte der kontinuierlichen Verbesserung des agilen Ansatzes konzentriert. Kanban ist besonders nützlich für die Verwaltung kontinuierlicher Prozesse, die kein klares definiertes Ende haben, wie etwa Kundensupporttickets.

### Kanban-Boards

Tools wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status verschiedener Arbeitsaufgaben in einem Projekt zeigen. Sie werden üblicherweise **Kanban-Boards** genannt, obwohl sie zur Verwaltung verschiedener Prozessarten verwendet werden können, nicht nur Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die unterschiedliche Arbeitsstatus in einem Scrum-Projekt („Backlog“, „To-Do“, „In Bearbeitung“ usw.), unterschiedliche Arbeitypen („Forschung“, „Design“, „Entwicklung“ usw.) oder was auch immer für Ihr Projekt nützlich ist, darstellen können.

[GitHub Projekte](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Werkzeugalternative und sind kostenlos nutzbar — Sie müssen sich nur für ein GitHub-Konto anmelden.

## Praxis mit Projekt-Workflows sammeln

Sie sollten sich über die oben genannten Prozesse informieren und einige Ihrer Arbeits- oder persönlichen Projekte mit einem Kanban-Board verfolgen. Machen Sie sich keine Sorgen darüber, eine komplexe Scrum-Methodik zu verwenden; einfaches Kanban ist im Moment ausreichend. Auch wenn Sie etwas alleine machen, kann es großartig sein, den Workflow von:

1. Aufgaben erstellen.
2. Entscheiden, wie groß sie sind oder wie lange sie dauern werden.
3. Aufgaben priorisieren.
4. Sie in Reihenfolge mit Fälligkeitsterminen setzen.
5. Mit der Arbeit an verschiedenen Aufgaben beginnen.
6. Ihre Status („in Bearbeitung“, „blockiert“, „fertig“ usw.) setzen, während die Arbeit fortschreitet.

Verfolgen Sie den Fortschritt eines vollständigen Projekts von Anfang bis Ende — versuchen Sie es mit Ihrer eigenen Website oder einem Nebenprojekt irgendeiner Art. Versuchen Sie auch, [zu einem Open-Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen verwenden einen Arbeitsprozess, der dem, den wir oben beschrieben haben, ähnlich ist.

## Siehe auch

- [What is a Tech Stack and How Do They Work?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website development team structure: roles and processes](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agile vs. Waterfall](https://www.productplan.com/learn/agile-vs-waterfall), ProductPlan
- [What is Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
