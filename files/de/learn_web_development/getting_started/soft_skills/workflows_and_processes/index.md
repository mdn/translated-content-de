---
title: Workflows und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt von technischen Projekten, den Anfänger oft übersehen, ist der Blick für das große Ganze. Sie könnten ein einzelnes Tool oder eine Sprache lernen, sind sich jedoch nicht der Bibliotheken, Tools, Systeme und Jobrollen bewusst, die zusammenwirken, um eine vollständige Webanwendung bereitzustellen. Die folgenden Abschnitte decken verschiedene Aspekte des großen Ganzen auf hohem Niveau ab.

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
          <li>Typische technische Projektphasen und wo die verschiedenen Jobrollen involviert sind.</li>
          <li>Gemeinsame Arbeitsmanagementprozesse wie agile und Wasserfallmethode.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Technologiekombinationen

Beim Erstellen einer Website verwenden Sie eine Kombination aus verschiedenen Technologien, die gemeinhin als **Tech-Stack** bezeichnet wird. Je größer und komplexer eine Website wird, desto komplexer wird auch der Tech-Stack. Er könnte einfach beginnen, wenn Sie ein Demo erstellen und nur Sie und einige Kollegen es sehen. Eine scheinbar einfache Produktionswebsite könnte jedoch komplexer sein, als Sie anfangs dachten, wenn Sie berücksichtigen, dass sie Folgendes benötigt:

- Schnell geladen zu werden (dies ist der Zweck von [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)).
- Eine große Anzahl von Benutzern gleichzeitig zu bearbeiten (sie muss **skalierbar** sein).
- Gut gestaltet zu sein, damit Benutzer leicht auf die Informationen und Dienste zugreifen können, die sie enthält.
- Einfach für ein Team zu pflegen und daran zu arbeiten.

Auf einem sehr hohen Niveau könnte ein Webanwendungs-Tech-Stack etwa so aussehen:

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
> Sie werden häufig Akronyme sehen, die sich auf bekannte Tech-Stacks beziehen, wie [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) oder [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP oder Python).

Auf MDN konzentrieren wir uns hauptsächlich auf den Frontend-Teil, aber auch dieser kann in viele verschiedene Teile unterteilt werden. Nehmen Sie zum Beispiel das Frontend:

- Sie werden wahrscheinlich ein JavaScript-Framework verwenden (wie [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)), um die Komponenten zu definieren, die zusammen die Benutzeroberfläche erstellen.
- Das Framework wird wahrscheinlich eine Art von Template-Sprache verwenden (wie [Mustache](https://mustache.github.io/)), um die HTML-Struktur zu definieren, bietet aber auch Funktionen, um variablen Inhalt dynamisch einzuschließen.
- Sie werden Informationen bereitstellen, um Ihren Inhalt über CSS in einer mit dem Framework kompatiblen Weise zu gestalten. Dies könnte in reinem CSS geschrieben sein, oder mit einem CSS-Framework (wie [Tailwind](https://tailwindcss.com/)) oder einem Präprozessor (wie [Sass](https://sass-lang.com/)).
- Ein JavaScript-Projekt sollte Tests enthalten, um sicherzustellen, dass neue Code-Änderungen seine Funktionalität nicht beeinträchtigen. Tests werden in der Regel mit einem Test-Framework (wie [Jest](https://jestjs.io/)) implementiert.
- Größere Websites verwenden ein Packaging/Build-Tool (wie [Parcel](https://parceljs.org/)), um die Leistung zu verbessern, indem die Dateigrößen klein gehalten, unbenutzte Komponenten aus dem Produktionscode entfernt usw.
- Und so weiter.

> [!NOTE]
> Sie werden oft hören, dass Websites und Anwendungen mit spezifischen **Architekturmustern** erstellt wurden. Zum Beispiel ist [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ein Muster, dem viele JavaScript-Frameworks folgen, während [Publish–Subscribe (Pub/Sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) häufig von Messaging-Anwendungen verwendet wird. Es ist nicht besonders wichtig, diese Muster im Detail zu verstehen, aber eine gewisse Vertrautheit kann nützlich sein, wenn Sie versuchen, ein neues Framework oder Tool zu verstehen.

Es werden auch Tools außerhalb des eigentlichen Tech-Stacks selbst erforderlich sein, um Sie bei der Verwaltung oder Erstellung von Assets für die Website zu unterstützen, wie zum Beispiel:

- Planungstools, die Ihnen helfen, auf einem hohen Niveau zu planen, was Sie im Laufe des Projekts tun werden (wie [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Sie werden wahrscheinlich ein [git](https://git-scm.com/)-basiertes VCS verwenden, wie [GitHub](https://github.com/).
- Grafik-/Interface-Design-Pakete (wie [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagement-Tools wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

Das ist eine Menge zu verarbeiten. Unser Rat ist: **keine Panik!** Das Ziel dieses Artikels ist es nicht, Sie zu beunruhigen, indem wir Sie glauben lassen, dass Sie plötzlich zehnmal so viele Dinge lernen müssen wie zuvor. Die Idee ist einfach, Sie für das größere Bild im Hinblick auf Website-Projekte zu sensibilisieren und Ihnen ein grundlegendes Verständnis einiger Begriffe zu vermitteln, denen Sie möglicherweise begegnen.

Schließlich werden Sie einige Kenntnisse über mehrere der oben genannten Tools und Technologien entwickeln, aber Sie werden kein Experte in allen. Das ist nicht nötig — genau dafür gibt es Teams. Im Moment sind Sie absolut auf dem richtigen Weg, indem Sie die Kernkompetenzen wie HTML, CSS und JavaScript erlernen. Mehr Tools und Spezialisierungen werden später in Ihrer Karriere dazukommen.

## Jobrollen

In einem Webentwicklungsteam gibt es viele verschiedene Jobrollen; es ist nützlich zu verstehen, was jede einzelne beinhaltet:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus Sicht des Produkts — wie schneidet das Produkt im Vergleich zu seinen Wettbewerbern auf dem Markt ab? Was sind seine Stärken und Schwächen? Welche neuen Funktionen fordert die Zielgruppe, und welche haben höchste Priorität? Was sind die wichtigsten Erfolgskriterien der Website und wie haben neue Funktionen dazu beigetragen, diese Kriterien zu erfüllen? Der Produktmanager sammelt Daten und schreibt Berichte, um dem Team zu helfen, die Effektivität ihrer Arbeit zu verstehen und zukünftige Arbeiten zu priorisieren.
- **Projektmanager**
  - : Verantwortlich für die Organisation der Arbeiten, die das Team ausführen muss. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fälligkeitsterminen, weist das Personal zu, um jede Aufgabe zu erledigen, hält regelmäßige Check-in-Meetings, um zu überprüfen, ob die Fortschrittsziele erreicht werden, und Probleme aufzuzeigen, und passt den Plan bei Bedarf an.
- **User Experience (UX) Designer**
  - : Verantwortlich für das Verständnis der Bedürfnisse der Zielgruppe des Produkts und das Entwerfen des Produktworkflows/-erlebnisses, damit diese Bedürfnisse am effektivsten erfüllt werden. Typische UX-Fragen sind "wohin sollten wir den Benutzer lenken, wenn er auf unserer Homepage landet?" und "wie können wir das Anmelden für ein Konto so einfach und intuitiv wie möglich gestalten?" Diese Arbeit wird oft von Benutzerforschung und -tests begleitet, um die Zielgruppe besser zu verstehen, und das Erstellen von Wireframes, um Ideen zu kommunizieren. Der UX-Designer ist einer der Hauptnutzer der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für die visuelle Gestaltung des Website-Projekts. Grafikdesigner sind verantwortlich für eine Vielzahl von Disziplinen wie Typografie, Farbpalettenauswahl, das Erstellen von Symbolen und anderen grafischen Assets sowie Website-Mockups basierend auf den Wireframes des UX-Designers.
- **Frontend-Entwickler**
  - : Das ist (wahrscheinlich), was Sie anstreben, wenn Sie dies lesen! Frontend-Entwickler verwenden HTML, CSS und JavaScript, um den visuellen Teil der Website zu erstellen, mit dem Benutzer interagieren, und die Verhaltens- und visuellen Mockups der UX- und Grafikdesigner zum Leben zu erwecken.
- **Backend-Entwickler**
  - : Verantwortlich für die nicht-visuellen Teile der Website. Sie schreiben Backend-Code, um interne Daten anzufordern, HTML-Seiten aus Templates zu erstellen und externe Daten, die von Benutzern übermittelt wurden, zu verarbeiten. Sie kümmern sich auch um die Konfiguration des Webservers, halten die Seite sicher usw.
- **Full-Stack-Entwickler**
  - : Übernimmt sowohl Frontend-Entwicklungs- als auch Backend-Entwicklungsaufgaben.
- **Qualitätssicherungsingenieur (QA)**
  - : Verantwortlich für das Testen neuer Funktionen, um sicherzustellen, dass sie ordnungsgemäß funktionieren, und das Melden von Fehlern, um mit den Entwicklern zu kommunizieren, um ihnen bei der Priorisierung der erforderlichen Korrekturen zu helfen.
- **Content-Spezialist/Technischer Redakteur**
  - : Verantwortlich dafür, dass der textliche Inhalt der Website so gut wie möglich für die Zielgruppe funktioniert. Dies umfasst die Struktur der Informationen und wie diese navigiert werden, die Textbeschriftungen der Benutzeroberfläche, Blogeinträge, Marketingtexte und Produktdokumentation.

### Weniger häufige Jobrollen

Weitere weniger häufige Jobrollen sind:

- **Benutzerforscher**
  - : Größere Teams haben oft einen speziellen Forscher, der Benutzerforschung und -tests durchführt.
- **Suchmaschinenoptimierung (SEO) Spezialist**
  - : Analysiert den Inhalt und die Struktur der Website und nimmt Änderungen vor, die die Sichtbarkeit der Website in relevanten Suchmaschinenergebnissen erhöhen. Weitere Informationen finden Sie unter {{Glossary("SEO", "SEO")}}.

## Technische Projektphasen

Ein typisches technisches Projekt könnte so ablaufen:

1. Der Produktmanager identifiziert eine neue Reihe von Benutzeranforderungen für die Website.
2. Er diskutiert es mit dem Team, und es wird beschlossen, dass diese Anforderungen durch das Hinzufügen einer neuen Funktion zur Website erfüllt werden können.
3. Der Projektmanager diskutiert mit dem Team, welche individuellen Arbeitsaufgaben für die Erstellung der neuen Funktion erforderlich sind, und erstellt einen [Arbeitsprozess zur Verwaltung dieser Aufgaben](#work_management_prozesse).
4. Der UX-Designer entwirft einen Workflow für die neue Funktion, der beschreibt, wie sie funktionieren sollte, und einen Wireframe, um eine Vorstellung davon zu geben, wo sie auf der Seite passen könnte.
5. Der Grafikdesigner entwirft ein Mockup, das zeigt, wie die Funktion auf der Website aussehen wird, zusammen mit den gewählten Schriftarten und dem Farbschema.
6. Der Content-Spezialist schreibt den erforderlichen UI-Text für die Funktion und die Dokumentation, um diese zu unterstützen.
7. Der Backend-Entwickler erstellt die notwendigen Systeme, um die Daten, die die Funktion antreiben, sicher zu speichern und zu verarbeiten.
8. Der Frontend-Entwickler erstellt die interaktive Funktion basierend auf den Mockups des Grafikdesigners und verbindet sie mit dem Backend, damit sie die benötigten Daten abruft.
9. Der QA-Ingenieur testet die neue Funktion gründlich und erstellt einen detaillierten Bericht über die gefundenen Fehler.
10. Die Entwickler beheben die als ausreichend ernsthaft erachteten Fehler, die die Veröffentlichung der Funktion blockieren sollten.
11. Sobald die (blockierenden) Fehler behoben und das Projekt abgesegnet ist, kann die Funktion auf der Website live geschaltet werden.

Dies ist eine vereinfachte Ansicht — es gibt andere Phasen um die eigentliche Implementierung der Funktion herum, und die Phasen werden nicht unbedingt alle in der gezeigten Reihenfolge abgeschlossen, aber es gibt Ihnen eine Vorstellung davon, was involviert ist.

## Work Management Prozesse

Der Projektmanager wird eine Art von Prozess verwenden, um das Website-Projekt zu verwalten, den Fortschritt der verschiedenen Arbeitselemente zu überwachen, sicherzustellen, dass sie in der richtigen Reihenfolge und rechtzeitig erledigt werden, usw. Die beiden Hauptprozesse sind:

- **Wasserfall**
  - : Bezieht sich auf die Durchführung eines Projekts in klaren, festen Phasen, in denen jede Phase von der vorherigen abhängig ist und keine allzu großen Veränderungen in den Anforderungen erwartet werden. Generell wird am Ende des Projekts ein einziges großes Ergebnis geliefert. Das Management des Teams tendiert dazu, bürokratischer zu sein, mit weniger Autonomie.
    - Wasserfallprojekte sind in der Regel besser spezifiziert am Anfang und haben weniger Änderungen im Projektumfang (das Hinzufügen von Anforderungen während des Projekts). Darüber hinaus sind größere, weniger häufige Produktveröffentlichungen in Bezug auf Release-Planung, Marketing, Bereitstellung von Schulungen und Dokumentation usw. leichter zu handhaben.
    - Allerdings ist die Wasserfallmethode weniger flexibel, und Änderungen geschehen langsamer. Mehrere Monate auf eine Fehlerbehebung zu warten, kann frustrierend sein.
- **Agil**
  - : Bezieht sich auf die flexible Durchführung eines Projekts, bei dem mehrere Phasen gleichzeitig fortschreiten können und in der Regel mehrere kleinere Ergebnisse an verschiedenen Meilensteinen im Laufe des Projekts geliefert werden. Änderungen in den Anforderungen werden erwartet und können durch Prioritätsverschiebungen gehandhabt werden. Teams sind in der Regel autonomer.
    - Agile Projekte sind flexibel und können leichter auf Änderungen der Anforderungen reagieren. Außerdem kann es angenehm sein, häufiger Releases zu haben — Fehler werden schneller behoben, Innovationen geschehen häufiger und es gibt immer etwas, worüber das Marketing-Team sprechen kann. Agile Teams sprechen oft von kontinuierlicher Verbesserung.
    - Allerdings besteht ein höheres Risiko von Änderungen im Projektumfang und Terminüberschreitungen, Projekte fühlen sich oft nie wirklich abgeschlossen an und es gibt einen ständigen Druck, etwas zu liefern.

> [!NOTE]
> Webentwicklungsteams bevorzugen oft, mit einem agilen Prozess zu arbeiten, da die Softwareentwicklung von Natur aus anfällig für (manchmal schnelle) Änderungen in den Anforderungen ist, aufgrund neuer Fehler, Benutzerfeedback, Unternehmensstrategie usw.

### Scrum und Kanban

Es gibt eine spezielle Art der agilen Methodik, die **Scrum** genannt wird und einen festen Satz von Regeln hat, wie ein Projekt durchgeführt wird. Zum Beispiel:

- Die Person, die für das Scrum verantwortlich ist, wird Scrum Master genannt. Dies ist oft einfach der Projektmanager mit einem anderen Namen.
- Die Arbeit wird in Zyklen unterteilt, die **Sprints** genannt werden und typischerweise zwei Wochen dauern.
- Vor jedem Sprint werden potenzielle neue Aufgaben diskutiert, und wenn sie in den Sprint aufgenommen werden, kommen sie in einen Backlog.
- Arbeitselemente werden aus dem Backlog entnommen und durchlaufen verschiedene Phasen bis zur Fertigstellung, wie "in Bearbeitung" und "in Überprüfung".
- Der Scrum Master hält kurze tägliche **Stand-up-Meetings** ab, bei denen jeder über den Fortschritt spricht, den er gemacht hat, und über eventuelle Probleme, die er haben könnte, damit Probleme früh erkannt werden können.
- Am Ende jedes Sprints hält der Scrum Master ein Retrospektive-Meeting ab, um zu überprüfen, was gut gelaufen ist, was nicht so gut gelaufen ist und welche Lektionen vor dem nächsten Sprint gelernt werden können.

Eine andere Art der agilen Methodik nennt sich **Kanban**, die weniger Regeln als Scrum hat, keine Sprints verwendet und sich mehr auf die Aspekte der kontinuierlichen Verbesserung von Agilität konzentriert. Kanban ist besonders nützlich für die Verwaltung kontinuierlicher Prozesse, die kein klar definiertes Ende haben, wie z. B. Kundensupport-Tickets.

### Kanban-Boards

Tools wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten Visualisierungen, die den Status der verschiedenen Arbeitselemente in einem Projekt zeigen. Sie werden normalerweise **Kanban-Boards** genannt, obwohl sie zur Verwaltung verschiedener Prozesstypen verwendet werden können, nicht nur Kanban. Kanban-Boards bestehen aus verschiedenen Spalten, die unterschiedliche Arbeitsstatus in einem Scrum-Projekt darstellen können ("Backlog", "todo", "in Bearbeitung" usw.), verschiedene Arten von Arbeit ("Forschung", "Design", "Entwicklung" usw.) oder was auch immer für Ihr Projekt nützlich ist.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) bieten eine weitere gute Werkzeugoption und sind kostenlos zu nutzen — Sie müssen sich nur für ein GitHub-Konto anmelden.

## Übung von Projekt-Workflows

Sie sollten sich über die oben genannten Prozesse informieren und üben, einige Ihrer Arbeits- oder persönlichen Projekte mit einem Kanban-Board zu verfolgen. Machen Sie sich keine Sorgen über die Verwendung einer komplexen Scrum-Methodik; einfaches Kanban reicht im Moment aus. Selbst wenn Sie etwas alleine machen, kann es großartig sein, den Workflow zu üben:

1. Aufgaben erstellen.
2. Entscheiden, wie groß sie sind oder wie lange sie dauern werden.
3. Aufgaben priorisieren.
4. Sie in eine Reihenfolge mit Fälligkeitsterminen bringen.
5. Beginnen, an verschiedenen Aufgaben zu arbeiten.
6. Ihre Status ("in Bearbeitung", "blockiert", "erledigt" usw.) festlegen, während die Arbeit fortschreitet.

Verfolgen Sie den Fortschritt eines vollständigen Projekts von Anfang bis Ende — versuchen Sie es mit Ihrer eigenen Website oder einem Nebenprojekt. Versuchen Sie auch, [zu einem Open-Source-Projekt beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source); viele von ihnen werden einen Prozess verwenden, um ihre Arbeit zu verfolgen, ähnlich dem, was wir oben beschrieben haben.

## Siehe auch

- [What is a Tech Stack and How Do They Work?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Website development team structure: roles and processes](https://www.truemark.dev/blog/web-development-team-structure-role-process/), truemark.dev (2017)
- [Agile vs. Waterfall](https://www.productplan.com/learn/agile-vs-waterfall/), ProductPlan
- [What is Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
