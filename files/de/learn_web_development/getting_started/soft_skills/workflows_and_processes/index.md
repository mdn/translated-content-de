---
title: Arbeitsabläufe und Prozesse
slug: Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes
l10n:
  sourceCommit: 15e1155ab8a0587405601cc4753bb789cd6ac47c
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}

Ein wichtiger Aspekt technischer Projekte, der Einsteigern oft entgeht, ist der Blick auf das Gesamtbild. Sie lernen vielleicht ein einzelnes Werkzeug oder eine Programmiersprache, wissen aber nicht, welche Bibliotheken, Werkzeuge, Systeme und beruflichen Rollen zusammenwirken, um eine vollständige Webanwendung bereitzustellen. Die folgenden Abschnitte geben einen Überblick über verschiedene Aspekte dieses Gesamtbilds.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Keine
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Typische Kombinationen von Technologien in Webprojekten.</li>
          <li>Typische berufliche Rollen in einem Webentwicklungsteam.</li>
          <li>Typische Phasen technischer Projekte und die Beteiligung der verschiedenen Rollen.</li>
          <li>Gängige Prozesse zur Arbeitsorganisation, etwa agile Methoden und das Wasserfallmodell.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Typische Kombinationen von Technologien

Beim Erstellen einer Website verwenden Sie verschiedene Technologien in Kombination. Diese Kombination wird üblicherweise als **Tech-Stack** bezeichnet. Je größer und komplexer Websites werden, desto umfangreicher wird auch ihr Tech-Stack. Bei einer Demo, die nur Sie und einige Kolleginnen und Kollegen ansehen, kann er noch einfach sein. Der Tech-Stack einer scheinbar einfachen produktiven Website kann jedoch komplexer sein, als Sie zunächst denken. Schließlich muss die Website:

- Schnell laden – darum geht es bei der [Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance).
- Viele Benutzer gleichzeitig bedienen können – sie muss **skalieren**.
- Gut gestaltet sein, damit Benutzer leicht auf die enthaltenen Informationen und Dienste zugreifen können.
- Für ein Team leicht zu bearbeiten und zu warten sein.

Auf einer sehr allgemeinen Ebene könnte der Tech-Stack einer Webanwendung etwa so aussehen:

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
> Häufig werden Ihnen Akronyme für beliebte Tech-Stacks begegnen, etwa [MEAN](https://www.mongodb.com/resources/languages/mean-stack) (MongoDB, Express, Angular, Node) oder [LAMP](<https://en.wikipedia.org/wiki/LAMP_(software_bundle)>) (Linux, Apache, MySQL, PHP oder Python).

Auf MDN befassen wir uns hauptsächlich mit dem Frontend. Doch auch dieses lässt sich in viele verschiedene Teile untergliedern. Betrachten wir zum Beispiel das Frontend:

- Wahrscheinlich verwenden Sie ein JavaScript-Framework (etwa [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)), um die Komponenten zu definieren, aus denen die Benutzeroberfläche entsteht.
- Das Framework verwendet vermutlich eine Template-Sprache (etwa [Mustache](https://mustache.github.io/)), um die HTML-Struktur zu definieren und zugleich variable Inhalte dynamisch einzubinden.
- Sie ergänzen CSS-Informationen, um Ihre Inhalte passend zum Framework zu gestalten. Dazu können Sie reines CSS, ein CSS-Framework (etwa [Tailwind](https://tailwindcss.com/)) oder einen Präprozessor (etwa [Sass](https://sass-lang.com/)) verwenden.
- Ein JavaScript-Projekt sollte Tests enthalten, damit neue Code-Ergänzungen die Funktionalität nicht beeinträchtigen. Tests werden üblicherweise mit einem Test-Framework (etwa [Jest](https://jestjs.io/)) implementiert.
- Größere Websites verwenden ein Paketierungs- oder Build-Tool (etwa [Parcel](https://parceljs.org/)), um die Performance zu verbessern: Es hält unter anderem Dateigrößen gering und entfernt ungenutzte Komponenten aus dem produktiven Code.
- Und so weiter.

> [!NOTE]
> Sie werden häufig hören, dass Websites und Anwendungen nach bestimmten **Architekturmustern** aufgebaut sind. Beispielsweise ist [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) ein Muster, dem viele JavaScript-Frameworks folgen. [Publish–Subscribe (Pub/Sub)](https://dev.to/willvelida/the-publisher-subscriber-pattern-pubsub-messaging-10in) wird dagegen häufig von Messaging-Anwendungen verwendet. Sie müssen diese Muster nicht im Detail verstehen. Ein wenig Vertrautheit damit kann aber helfen, wenn Sie ein neues Framework oder Werkzeug kennenlernen.

Neben dem eigentlichen Tech-Stack kommen auch Werkzeuge zum Einsatz, mit denen Sie ihn verwalten oder Materialien für die Website erstellen können, zum Beispiel:

- Planungswerkzeuge, die Ihnen helfen, das Vorgehen im Projekt auf übergeordneter Ebene zu planen (etwa [Miro](https://miro.com/)).
- Versionskontrollsysteme (VCS). Wahrscheinlich verwenden Sie ein auf [git](https://git-scm.com/) basierendes VCS, etwa [GitHub](https://github.com/).
- Programme für Grafik- und Oberflächendesign (etwa [Figma](https://www.figma.com/) oder [Canva](https://www.canva.com/)).
- Projektmanagement-Werkzeuge wie [Trello](https://trello.com/) oder [Asana](https://asana.com/).

Das sind viele Informationen auf einmal. Unser Rat lautet: **Keine Panik!** Dieser Artikel soll Sie nicht beunruhigen oder den Eindruck erwecken, Sie müssten plötzlich zehnmal so viel lernen wie zuvor. Er soll Ihnen lediglich das Gesamtbild von Website-Projekten näherbringen und Sie mit einigen Begriffen vertraut machen, denen Sie begegnen könnten.

Mit der Zeit werden Sie Kenntnisse über mehrere der genannten Werkzeuge und Technologien erwerben. Sie werden aber nicht in allen zum Experten werden – und müssen das auch nicht. Dafür gibt es Teams. Im Moment ist es genau richtig, dass Sie die Kernkompetenzen HTML, CSS und JavaScript lernen. Weitere Werkzeuge und Spezialisierungen kommen später in Ihrer beruflichen Laufbahn hinzu.

## Berufliche Rollen

In einem Webentwicklungsteam gibt es viele verschiedene berufliche Rollen. Es ist hilfreich zu verstehen, welche Aufgaben damit jeweils verbunden sind:

- **Produktmanager**
  - : Verantwortlich für die gesamte Website aus Produktsicht: Wie behauptet sich das Produkt auf dem Markt im Vergleich zur Konkurrenz? Wo liegen seine Stärken und Schwächen? Welche neuen Funktionen wünscht sich die Zielgruppe, und welche haben die höchste Priorität? Was sind die wichtigsten Erfolgskriterien der Website, und wie haben kürzlich eingeführte Funktionen dazu beigetragen, sie zu erfüllen? Der Produktmanager sammelt Daten und erstellt Berichte, damit das Team die Wirksamkeit seiner Arbeit einschätzen und künftige Arbeiten priorisieren kann.
- **Projektmanager**
  - : Verantwortlich für die Organisation der Arbeit, die das Team erledigen muss. Der Projektmanager erstellt einen Projektplan mit priorisierten Aufgaben und Fristen, teilt den Aufgaben Personen zu und hält regelmäßige Besprechungen ab. Dabei prüft er, ob die angestrebten Fortschritte erreicht werden, macht Probleme sichtbar und passt den Plan bei Bedarf an.
- **User-Experience-Designer (UX-Designer)**
  - : Verantwortlich dafür, die Bedürfnisse der Zielgruppe des Produkts zu verstehen und die Abläufe sowie die Benutzererfahrung so zu gestalten, dass diese Bedürfnisse möglichst gut erfüllt werden. Typische UX-Fragen sind: „Wohin sollten wir Benutzer zuerst führen, wenn sie auf unserer Startseite landen?“ und „Wie können wir die Registrierung eines Kontos so einfach und intuitiv wie möglich machen?“ Diese Arbeit geht häufig mit Nutzerforschung und Tests einher, um die Zielgruppe besser zu verstehen, sowie mit der Erstellung von Wireframes, um Ideen zu vermitteln. Der UX-Designer gehört zu den wichtigsten Empfängern der Berichte des Produktmanagers.
- **Grafikdesigner**
  - : Verantwortlich für die visuelle Gestaltung des Website-Projekts. Die Aufgaben umfassen verschiedene Bereiche, etwa Typografie, die Auswahl von Farbschemata, die Erstellung von Icons und anderen Grafiken sowie die Gestaltung von Website-Mockups auf Grundlage der Wireframes des UX-Designers.
- **Frontend-Entwickler**
  - : Das ist (wahrscheinlich) die Rolle, die Sie anstreben, wenn Sie diesen Artikel lesen! Frontend-Entwickler verwenden HTML, CSS und JavaScript, um den sichtbaren Teil der Website zu erstellen, mit dem Benutzer interagieren. So setzen sie die von UX- und Grafikdesignern erstellten Entwürfe für Verhalten und Aussehen um.
- **Backend-Entwickler**
  - : Verantwortlich für die nicht sichtbaren Teile der Website. Backend-Entwickler schreiben Code, um interne Daten abzurufen, HTML-Seiten aus Templates zu erzeugen und von Benutzern übermittelte Daten zu verarbeiten. Außerdem kümmern sie sich unter anderem um die Konfiguration des Webservers und die Sicherheit der Website.
- **Full-Stack-Entwickler**
  - : Übernimmt sowohl Aufgaben der Frontend- als auch der Backend-Entwicklung.
- **QA-Engineer (Qualitätssicherung)**
  - : Verantwortlich dafür, neue Funktionen zu testen, ihre korrekte Funktionsweise zu prüfen und Fehler zu melden. QA-Engineers tauschen sich mit den Entwicklern aus, damit notwendige Korrekturen priorisiert werden können.
- **Content-Spezialist/Technischer Redakteur**
  - : Verantwortlich dafür, dass die Textinhalte der Website für die Zielgruppe möglichst gut funktionieren. Dazu gehören die Informationsstruktur und Navigation, Textbeschriftungen der Benutzeroberfläche, Blogbeiträge, Marketingtexte und die Produktdokumentation.

### Weniger verbreitete berufliche Rollen

Weitere, weniger verbreitete Rollen sind:

- **Nutzerforscher**
  - : Größere Teams haben häufig eine eigene Person für Nutzerforschung und Tests.
- **Spezialist für Suchmaschinenoptimierung (SEO)**
  - : Analysiert Inhalt und Struktur der Website und nimmt Änderungen vor, damit die Website in relevanten Suchergebnissen besser sichtbar wird. Weitere Informationen finden Sie unter {{Glossary("SEO", "SEO")}}.

## Phasen technischer Projekte

Ein typisches technisches Projekt könnte folgendermaßen ablaufen:

1. Der Produktmanager identifiziert neue Anforderungen von Benutzern an die Website.
2. Er bespricht sie mit dem Team. Gemeinsam wird entschieden, dass sich diese Anforderungen durch eine neue Funktion auf der Website erfüllen lassen.
3. Der Projektmanager bespricht mit dem Team, welche einzelnen Arbeiten für die neue Funktion nötig sind, und erstellt einen [Prozess zu deren Organisation](#prozesse_zur_arbeitsorganisation).
4. Der UX-Designer entwirft einen Ablauf, der beschreibt, wie die neue Funktion funktionieren soll, und erstellt ein Wireframe, das eine Vorstellung von ihrer möglichen Platzierung auf der Website vermittelt.
5. Der Grafikdesigner erstellt ein Mockup, das zeigt, wie die Funktion auf der Website aussehen wird, und legt Schriftarten und Farbpalette fest.
6. Der Content-Spezialist verfasst die für die Funktion benötigten Texte der Benutzeroberfläche sowie die zugehörige Dokumentation.
7. Der Backend-Entwickler erstellt die erforderlichen Systeme, um die für die Funktion benötigten Daten sicher zu speichern und zu verarbeiten.
8. Der Frontend-Entwickler erstellt die interaktive Funktion anhand der Mockups des Grafikdesigners und verbindet sie mit dem Backend, damit sie die benötigten Daten abrufen kann.
9. Der QA-Engineer testet die neue Funktion gründlich und erstellt einen detaillierten Bericht über die gefundenen Probleme.
10. Die Entwickler beheben die Fehler, die als so schwerwiegend eingestuft werden, dass sie die Veröffentlichung der Funktion verhindern.
11. Sobald diese blockierenden Fehler behoben sind und das Projekt freigegeben wurde, kann die Funktion auf der Website veröffentlicht werden.

Dies ist eine vereinfachte Darstellung: Rund um die Implementierung der Funktion gibt es weitere Phasen, und die genannten Phasen werden nicht unbedingt alle in dieser Reihenfolge abgeschlossen. Sie vermittelt Ihnen aber einen Eindruck davon, welche Arbeiten dazugehören.

## Prozesse zur Arbeitsorganisation

Der Projektmanager verwendet einen Prozess, um das Website-Projekt zu organisieren. Dabei überwacht er den Fortschritt der einzelnen Aufgaben und stellt unter anderem sicher, dass sie in der richtigen Reihenfolge und rechtzeitig erledigt werden. Die beiden wichtigsten Prozessarten sind:

- **Wasserfallmodell**
  - : Ein Projekt durchläuft klar definierte, feste Phasen. Jede Phase baut auf der vorherigen auf, und es werden nicht allzu viele Änderungen der Anforderungen erwartet. Üblicherweise wird am Ende des Projekts ein einziges großes Ergebnis geliefert. Die Teamführung ist tendenziell bürokratischer und lässt weniger Eigenständigkeit zu.
    - Wasserfallprojekte sind zu Beginn meist genauer spezifiziert und weniger anfällig für eine schleichende Ausweitung des Projektumfangs durch zusätzliche Anforderungen. Außerdem lassen sich größere, seltenere Produktveröffentlichungen hinsichtlich Veröffentlichungsplanung, Marketing sowie der Bereitstellung von Schulungen und Dokumentation leichter handhaben.
    - Allerdings ist das Wasserfallmodell tendenziell weniger flexibel, und Änderungen erfolgen deutlich langsamer. Mehrere Monate auf die Behebung eines Fehlers zu warten, kann frustrierend sein.
- **Agile Methoden**
  - : Ein Projekt wird flexibler durchgeführt. Mehrere Phasen können gleichzeitig voranschreiten, und im Verlauf des Projekts werden an verschiedenen Meilensteinen eher mehrere kleinere Ergebnisse geliefert. Änderungen der Anforderungen werden erwartet und können durch eine entsprechende Anpassung der Prioritäten berücksichtigt werden. Teams arbeiten in der Regel eigenständiger.
    - Agile Projekte sind flexibel und können sich leichter an geänderte Anforderungen anpassen. Häufigere Veröffentlichungen können ebenfalls von Vorteil sein: Fehler werden schneller behoben, Innovationen finden öfter statt, und das Marketingteam hat immer etwas Neues zu berichten. Agile Teams sprechen häufig von kontinuierlicher Verbesserung.
    - Allerdings steigt das Risiko, dass sich der Projektumfang schleichend ausweitet und Fristen überschritten werden. Projekte fühlen sich oft nie wirklich abgeschlossen an, und es herrscht ein gleichmäßiger Arbeitsrhythmus mit ständigem Druck, Ergebnisse zu liefern.

> [!NOTE]
> Webentwicklungsteams bevorzugen häufig einen agilen Prozess. Bei der Softwareentwicklung ändern sich Anforderungen naturgemäß mitunter schnell, etwa durch neue Fehler, Rückmeldungen von Benutzern oder Änderungen der Unternehmensstrategie.

### Scrum und Kanban

Eine bestimmte agile Methodik heißt **Scrum**. Sie umfasst feste Regeln dafür, wie ein Projekt durchgeführt wird. Zum Beispiel:

- Die für Scrum verantwortliche Person heißt Scrum Master. Häufig ist das einfach der Projektmanager unter einer anderen Bezeichnung.
- Die anstehende Arbeit wird in Zyklen unterteilt, sogenannte **Sprints**, die üblicherweise zwei Wochen dauern.
- Vor jedem Sprint werden mögliche neue Aufgaben besprochen. Werden sie für den Sprint angenommen, kommen sie in ein Backlog.
- Aufgaben werden aus dem Backlog entnommen und durchlaufen bis zu ihrem Abschluss verschiedene Phasen, etwa „in Bearbeitung“ und „in Prüfung“.
- Der Scrum Master hält täglich kurze **Stand-up-Meetings** ab. Darin berichten alle über ihre Fortschritte und mögliche Schwierigkeiten, damit Probleme frühzeitig erkannt werden.
- Am Ende jedes Sprints hält der Scrum Master ein retrospektives Meeting ab. Dabei bespricht das Team, was gut und was weniger gut lief und welche Erkenntnisse es für den nächsten Sprint mitnehmen kann.

Eine weitere agile Methodik heißt **Kanban**. Sie hat weniger Regeln als Scrum, verwendet keine Sprints und konzentriert sich stärker auf den Aspekt der kontinuierlichen Verbesserung. Kanban eignet sich besonders für die Organisation fortlaufender Prozesse ohne klar definiertes Ende, etwa für die Bearbeitung von Kundensupport-Tickets.

### Kanban-Boards

Werkzeuge wie [Trello](https://trello.com/) und [Asana](https://asana.com/) bieten visuelle Darstellungen des Status verschiedener Aufgaben in einem Projekt. Sie werden üblicherweise **Kanban-Boards** genannt, können aber auch zur Organisation anderer Prozessarten als Kanban verwendet werden. Kanban-Boards bestehen aus Spalten. Diese können verschiedene Aufgabenstatus in einem Scrum-Projekt („Backlog“, „zu erledigen“, „in Bearbeitung“ usw.), verschiedene Arten von Arbeit („Recherche“, „Design“, „Entwicklung“ usw.) oder andere für Ihr Projekt nützliche Kategorien darstellen.

[GitHub Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) ist eine weitere gute Werkzeugoption und kostenlos nutzbar. Sie müssen lediglich ein GitHub-Konto anlegen.

## Projektabläufe praktisch üben

Lesen Sie mehr über die oben beschriebenen Prozesse und üben Sie, einige Ihrer beruflichen oder privaten Projekte mit einem Kanban-Board zu verfolgen. Sie müssen dafür keine komplexe Scrum-Methodik verwenden; einfaches Kanban reicht vorerst aus. Selbst wenn Sie allein arbeiten, kann es hilfreich sein, den folgenden Ablauf zu üben:

1. Aufgaben erstellen.
2. Einschätzen, wie umfangreich sie sind oder wie lange sie dauern werden.
3. Aufgaben priorisieren.
4. Sie in eine Reihenfolge bringen und mit Fristen versehen.
5. Mit der Bearbeitung verschiedener Aufgaben beginnen.
6. Ihren Status entsprechend dem Arbeitsfortschritt festlegen („in Bearbeitung“, „blockiert“, „erledigt“ usw.).

Verfolgen Sie den Fortschritt eines vollständigen Projekts von Anfang bis Ende – versuchen Sie es mit Ihrer eigenen Website oder einem anderen Nebenprojekt. Probieren Sie außerdem aus, zu einem oder zwei [Open-Source-Projekten beizutragen](/de/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork#participate_in_open_source). Viele davon verwenden einen ähnlichen Prozess zur Nachverfolgung ihrer Arbeit, wie wir ihn oben beschrieben haben.

## Siehe auch

- [Was ist ein Tech-Stack und wie funktioniert er?](https://www.mongodb.com/resources/basics/technology-stack), mongodb.com
- [Agile Methoden im Vergleich zum Wasserfallmodell](https://www.productplan.com/learn/agile-vs-waterfall), ProductPlan
- [Was ist Scrum?](https://www.scrum.org/learning-series/what-is-scrum/), scrum.org

{{PreviousMenuNext("Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork", "Learn_web_development/Getting_started/Soft_skills/Finding_a_job", "Learn_web_development/Getting_started/Soft_skills")}}
