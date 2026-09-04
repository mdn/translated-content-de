---
title: Workflows und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, den Anfänger oft übersehen, ist das Verständnis für das größere Ganze. Sie könnten sich ein einzelnes Tool oder eine Sprache aneignen, sind sich aber der gesamten Bibliotheken, Tools, Systeme und Rollen, die zusammenarbeiten, um eine komplette Webanwendung zu erstellen, nicht bewusst. Die folgenden Abschnitte behandeln verschiedene Aspekte des größeren Bildes auf einer hohen Ebene.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Typische Technologiekombinationen in Webprojekten.</li>
          <li>Typische Jobrollen in einem Webentwicklungsteam.</li>
          <li>Typische Phasen technischer Projekte und wo verschiedene Jobrollen beteiligt sind.</li>
          <li>Gängige Arbeitsmanagementprozesse wie agil und Wasserfall.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Erstellen einer Website verwenden Sie eine Kombination verschiedener Technologien, die üblicherweise als **Tech-Stack** bezeichnet wird. Je größer und komplexer Websites werden, desto komplexer wird auch der Tech-Stack. Er mag einfach beginnen, wenn Sie ein Demo erstellen und nur Sie und einige Kollegen es sich ansehen werden. Ein scheinbar einfacher Tech-Stack einer Produktionswebsite könnte jedoch komplexer sein, als Sie zunächst denken, wenn man bedenkt, dass er Folgendes benötigt:

- Schnelles Laden (dies ist der Zweck von [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig verarbeiten (es muss **skalieren**).
- Gut gestaltet sein, damit Benutzer leicht auf die darin enthaltenen Informationen und Dienste zugreifen können.
- Einfach für ein Team zu bearbeiten und zu warten sein.

Auf einer sehr hohen Ebene könnte ein Tech-Stack für Webanwendungen so aussehen:

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

Auf MDN konzentrieren wir uns hauptsächlich auf den Front-End-Bereich, doch selbst dieser kann in viele verschiedene Teile zerlegt werden. Nehmen Sie zum Beispiel das Front-End:

- Sie werden wahrscheinlich ein JavaScript-Framework (wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)) verwenden, um die Komponenten zu definieren, die zusammen die Benutzeroberfläche bilden.
- Das Framework wird wahrscheinlich eine Art Templating-Sprache (wie [Mustache](https://mustache.github.io/)) verwenden, um die HTML-Struktur zu definieren, aber auch Funktionalität bieten, um variablen Inhalt dynamisch einzufügen.
- Sie werden Informationen über CSS einbinden, um Ihren Inhalt auf eine Weise zu gestalten, die mit dem Framework kompatibel ist. Dies kann in reinem CSS, einem CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder einem Präprozessor (wie [Sass](https://sass-lang.com/)) geschrieben sein.
- Ein JavaScript-Projekt sollte Tests beinhalten, um sicherzustellen, dass neue Code-Ergänzungen seine Funktionalität nicht beeinträchtigen. Tests werden normalerweise unter Verwendung eines Test-Frameworks (wie [Jest](https://jestjs.io/)) implementiert.
- Größere Websites werden ein Verpackungs-/Build-Tool (wie [Parcel](https://parceljs.org/)) verwenden, um die Leistung zu optimieren, indem Dateigrößen reduziert und ungenutzte Komponenten aus dem Produktionscode entfernt werden usw.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen unter Verwendung spezifischer **Architektur-Muster** erstellt werden. Zum Beispiel ist [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ein Muster, dem viele JavaScript-Frameworks folgen, während [Publisher-Subscriber (Pub/Sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, dass Sie diese Muster im Detail verstehen, aber eine gewisse Vertrautheit kann nützlich sein, wenn Sie versuchen, ein neues Framework oder Tool zu verstehen.

Es wird auch Tools geben, die außerhalb des eigentlichen Tech-Stacks selbst involviert sind, um Ihnen zu helfen, es zu verwalten oder Ressourcen für die Website zu erstellen, wie:

- Planungstools, um Ihnen zu helfen, was Sie während des gesamten Projekts auf einer hohen Ebene tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein auf [git](https://git-scm.com/) basierendes VCS verwenden, wie [GitHub](https://github.com/).
- Grafik-/Schnittstellengestaltungspakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagement-Tools wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

Okay, das ist also viel zu verarbeiten. Unser Rat lautet **nicht in Panik geraten!** Das Ziel dieses Artikels ist es nicht, Sie zu beunruhigen, indem wir Ihnen das Gefühl geben, dass Sie plötzlich 10-mal so viele Dinge zu lernen haben wie vorher. Die Idee ist einfach, Ihnen das größere Bild in Bezug auf Website-Projekte bewusst zu machen und Ihnen ein grundlegendes Verständnis einiger der Begriffe zu vermitteln, denen Sie begegnen könnten.

Letztendlich werden Sie einige Kenntnisse über mehrere der oben genannten Tools und Technologien entwickeln, aber Sie werden kein Experte in allen sein, und das müssen Sie auch nicht sein — dafür sind Teams da. Im Moment tun Sie absolut das Richtige, indem Sie die Kernkompetenzen wie HTML, CSS und JavaScript lernen. Weitere Tools und Spezialisierungen werden später in ihrer Karriere hinzukommen.

## Jobrollen

In einem Webentwicklungsteam gibt es viele verschiedene Jobrollen; es ist nützlich zu verstehen, was jede davon beinhaltet:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus produktspezifischer Sicht — wie performt das Produkt auf dem Markt im Vergleich zu seinen Wettbewerbern? Was sind seine Stärken und Schwächen? Welche neuen Funktionen fordert das Zielpublikum, und welche haben die höchste Priorität? Was sind die wichtigsten Erfolgskriterien der Website, und wie haben die jüngsten neuen Funktionen dazu beigetragen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und schreibt Berichte, um dem Team zu helfen, die Effektivität ihrer Arbeit zu verstehen und künftige Arbeiten zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der zu erledigenden Arbeiten des Teams. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeitsdaten, weist Personal zur Durchführung der einzelnen Aufgaben zu, hält regelmäßige Check-in-Meetings ab, um zu überprüfen, ob Fortschrittsziele erreicht werden und Probleme zu erkennen, und passt den Plan bei Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich für das Verständnis der Bedürfnisse des Zielpublikums des Produkts und das Entwerfen des Workflow-/Erlebnisses des Produkts, damit diese Bedürfnisse am effektivsten erfüllt werden. Typische UX-Fragen lauten: "Wo sollten wir den Benutzer anleiten, wenn er auf unserer Startseite landet?" und "Wie können wir die Registrierung für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit ist oft mit Benutzerforschung und -tests verbunden, um das Zielpublikum besser zu verstehen, und mit der Erstellung von Drahtmodellen zur Kommunikation von Ideen. Der UX-Designer ist einer der Hauptkonsumenten der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für visuelle Gestaltungsarbeiten im Website-Projekt. Grafikdesigner sind für eine Vielzahl von Disziplinen verantwortlich, wie Typografie, die Auswahl von Farbschemata, das Erstellen von Icons und anderen Grafik-Assets sowie das Erstellen von Website-Mockups basierend auf den Drahtmodellen des UX-Designers.
- **Front-End-Entwickler**
  - : Das ist (wahrscheinlich) das, was Sie anstreben, wenn Sie dies lesen! Front-End-Entwickler verwenden HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, und erwecken die Verhaltens- und visuellen Mockups zum Leben, die von den UX- und Grafikdesignern erstellt wurden.
- **Back-End-Entwickler**
  - : Verantwortlich für die nicht-visuellen Teile der Website. Sie schreiben Backend-Code, um interne Daten anzufordern, HTML-Seiten aus Vorlagen zu generieren und externe, von Benutzern übermittelte Daten zu verarbeiten. Sie sind auch für die Konfiguration des Webservers verantwortlich, die Webseite sicher zu halten usw.
- **Full-Stack-Entwickler**
  - : Behandelt sowohl Front-End- als auch Back-End-Entwicklungsaufgaben.
- **Quality Assurance (QA) Engineer**
  - : Verantwortlich für das Testen neuer Features, um sicherzustellen, dass sie ordnungsgemäß funktionieren, und das Melden von Fehlern, wobei sie mit den Entwicklern kommunizieren, um ihnen zu helfen, die notwendigen Korrekturen zu priorisieren.
- **Content-Spezialist/technischer Schriftsteller**
  - : Verantwortlich dafür, dass der Textinhalt der Website für das Zielpublikum so gut wie möglich funktioniert. Dies umfasst die Struktur der Informationen und deren Navigation, die Benutzeroberflächentextetiketten, Blogbeiträge, Marketingtexte und Produktdokumentationen.

### Weniger häufige Jobrollen

Weitere weniger häufige Jobrollen umfassen:

- **Benutzerforscher**
  - : Größere Teams haben oft einen dedizierten Forscher, um Benutzerforschung und -tests durchzuführen.
- **Suchmaschinenoptimierung (SEO) Spezialist**
  - : Analysiert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die dazu führen, dass die Website in relevanten Suchmaschinenergebnissen besser sichtbar wird. Siehe {{Glossary("SEO", "SEO")}} für weitere Informationen.

## Technische Projektphasen

Ein typisches technisches Projekt könnte so ablaufen:

1. Der Produktmanager identifiziert eine neue Reihe von Benutzeranforderungen für die Website.
2. Sie besprechen dies mit dem Team, und es wird entschieden, dass diese Anforderungen durch Hinzufügen einer neuen Funktion zur Website erfüllt werden können.
3. Der Projektmanager bespricht mit dem Team, welche erforderlichen einzelnen Arbeitsaufgaben zur Erstellung der neuen Funktion benötigt werden, und erstellt einen [Arbeitsprozess zur Verwaltung dieser](#arbeitsmanagementprozesse).
4. Der UX-Designer entwirft einen Workflow für die neue Funktion, der beschreibt, wie sie funktionieren sollte, und erstellt ein Drahtmodell, um eine Idee zu geben, wo sie auf der Seite passen könnte.
5. Der Grafikdesigner entwirft ein Mockup, das zeigt, wie die Funktion auf der Website aussehen wird, zusammen mit den ausgewählten Schriftarten und der Farbpalette.
6. Der Content-Spezialist schreibt den erforderlichen UI-Text für die Funktion und die Dokumentation, die zu ihrer Unterstützung erforderlich ist.
7. Der Back-End-Entwickler erstellt die notwendigen Systeme, um die Daten, die die Funktion antreiben, sicher zu speichern und zu verarbeiten.
8. Der Front-End-Entwickler erstellt die interaktive Funktion basierend auf den Mockups des Grafikdesigners und verbindet sie mit dem Backend, sodass sie die benötigten Daten abruft.
9. Der QA-Engineer testet die neue Funktion gründlich und erstellt einen detaillierten Bericht über die festgestellten Probleme.
10. Die Entwickler beheben die Fehler, die als ausreichend schwerwiegend erachtet werden, um die Veröffentlichung der Funktion zu blockieren.
11. Sobald die (Blockier-)Fehler behoben sind und das Projekt genehmigt wurde, kann die Funktion live auf der Website geschaltet werden.

Dies ist eine vereinfachte Sichtweise - andere Phasen werden um die eigentliche Implementierung der Funktion herum existieren, und die Phasen werden nicht unbedingt in der gezeigten Reihenfolge abgeschlossen, aber dies gibt Ihnen eine Vorstellung davon, was dabei beteiligt ist.

## Arbeitsmanagementprozesse

Der Projektmanager wird einen Prozess verwenden, um das Website-Projekt zu verwalten, den Fortschritt an den verschiedenen Arbeitselementen zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und rechtzeitig erledigt werden usw. Die beiden Haupt-Prozesstypen sind:

- **Wasserfall**
  - : Bezieht sich auf das Führen eines Projekts in klaren, festen Phasen, in denen jede von der vorherigen abhängt und große Änderungen der Anforderungen nicht erwartet werden. Im Allgemeinen wird am Ende des Projekts ein einziges großes Ergebnis geliefert. Die Verwaltung des Teams neigt dazu, bürokratischer zu sein, mit weniger Autonomie.
    - Wasserfallprojekte sind tendenziell besser am Anfang spezifiziert und weisen weniger Umfangserweiterung (Hinzufügen von Anforderungen während des Projekts) auf. Darüber hinaus sind größere, weniger häufige Produktveröffentlichungen leichter zu handhaben in Bezug auf Release-Planung, Marketing, Schulungsdurchführung und Dokumentation usw.
    - Allerdings ist der Wasserfall weniger flexibel, und Änderungen erfolgen viel langsamer. Mehrere Monate auf einen Bugfix zu warten, kann frustrierend sein.
- **Agil**
  - : Bezieht sich auf das flexiblere Führen eines Projekts, bei dem mehrere Phasen gleichzeitig fortschreiten können und mehrere kleinere Ergebnisse bei verschiedenen Meilensteinen im Projektverlauf geliefert werden. Änderungen in den Anforderungen werden erwartet und können durch Ändern der Prioritäten nach Bedarf gehandhabt werden. Teams sind in der Regel autonomer.
    - Agile Projekte sind flexibel und können sich leichter an Änderungen der Anforderungen anpassen. Es kann auch angenehm sein, häufigere Veröffentlichungen zu haben — Fehler werden schneller behoben, Innovation erfolgt häufiger, und es gibt immer etwas, worüber das Marketingteam sprechen kann. Agile Teams sprechen oft über kontinuierliche Verbesserung.
    - Allerdings besteht ein höheres Risiko der Umfangserweiterung und Fristverschiebung, Projekte fühlen sich oft nie wirklich abgeschlossen, und es gibt mehr ein konstantes Tempo und Druck zu liefern.

> [!NOTE]
> Webentwicklungsteams bevorzugen oft, mit einem agilen Prozess zu arbeiten, da die Softwareentwicklung von Natur aus anfällig für (manchmal schnelle) Änderungen der Anforderungen aufgrund neuer Fehler, Benutzerfeedback, Unternehmensstrategie usw. ist.

### Scrum und Kanban

Es gibt eine spezifische Art der agilen Methodik, die **Scrum** genannt wird und ein festgelegtes Regelwerk darüber hat, wie ein Projekt abläuft. Zum Beispiel:

- Die Person, die für das Scrum verantwortlich ist, wird Scrum Master genannt. Dies ist oft nur der Projektmanager mit einem anderen Titel.
- Die zu erledigende Arbeit wird in Zyklen unterteilt, die **Sprints** genannt werden und typischerweise zwei Wochen lang dauern.
- Vor jedem Sprint werden potenzielle neue Arbeitselemente besprochen, und wenn sie in den Sprint übernommen werden, werden sie in ein Backlog aufgenommen.
- Arbeitselemente werden aus dem Backlog entnommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie "in Bearbeitung" und "in Überprüfung".
- Der Scrum Master hält kurze tägliche **Stand-up-Meetings** ab, in denen jeder über den Fortschritt spricht, den sie gemacht haben und welche Probleme sie möglicherweise haben, damit Probleme rechtzeitig erkannt werden.
- Am Ende jedes Sprints hält der Scrum Master ein Retrospektive-Meeting ab, um zu überprüfen, was gut lief, was nicht so gut lief, und welche Lektionen vor dem nächsten Sprint gelernt werden können.

Eine andere Art der agilen Methodik wird **Kanban** genannt, die weniger Regeln als Scrum hat, keine Sprints verwendet und sich stärker auf die kontinuierlichen Verbesserungsaspekte von Agilität konzentriert. Kanban ist besonders nützlich zur Verwaltung kontinuierlicher Prozesse, die kein klar definiertes Ende haben, wie Kundensupport-Tickets.

### Kanban-Boards

Tools wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status verschiedener Arbeitselemente in einem Projekt anzeigen. Sie werden üblicherweise als **Kanban-Boards** bezeichnet, obwohl sie verwendet werden können, um verschiedene Prozesstypen zu verwalten, nicht nur Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die unterschiedliche Arbeitsstatus in einem Scrum-Projekt ("Backlog", "ToDo", "in Bearbeitung" usw.), verschiedene Arten von Arbeit ("Forschung", "Design", "Entwicklung" usw.) oder was auch immer sonst für Ihr Projekt nützlich ist, darstellen können.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Werkzeugoption und sind kostenlos zu verwenden — Sie müssen sich nur für ein GitHub-Konto anmelden.

## Übung mit Projektworkflows

Sie sollten sich über die oben genannten Prozesse informieren und üben, einige Ihrer Arbeits- oder persönlichen Projekte mithilfe eines Kanban-Boards zu verfolgen. Machen Sie sich keine Sorgen, dass Sie eine komplexe Scrum-Methodik verwenden; einfaches Kanban ist vorerst ausreichend. Selbst wenn Sie etwas allein tun, kann es großartig sein, den Workflow zu üben:

1. Aufgaben erstellen.
2. Entscheiden, wie groß sie sind oder wie lange sie dauern werden.
3. Aufgaben priorisieren.
4. Sie in eine Reihenfolge mit Fälligkeitsdaten bringen.
5. Beginnen, an verschiedenen Aufgaben zu arbeiten.
6. Ihren Status ("in Bearbeitung", "blockiert", "fertig" usw.) je nach Fortschritt ändern.

Verfolgen Sie den Fortschritt eines kompletten Projekts von Anfang bis Ende — probieren Sie es mit Ihrer eigenen Website oder einem Nebenprojekt einer Art. Versuchen Sie auch, [zu einem Open-Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen verwenden einen Prozess zur Nachverfolgung ihrer Arbeit ähnlich dem, den wir oben beschrieben haben.

## Siehe auch

- [Was ist ein Tech-Stack und wie funktionieren sie?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Struktur: Rollen und Prozesse von Website-Entwicklungsteams](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agil vs. Wasserfall](https://www.productplan.com/learn/agile-vs-waterfall), ProductPlan
- [Was ist Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
