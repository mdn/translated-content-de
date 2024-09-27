---
title: MVC
slug: Glossary/MVC
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GlossarySidebar}}

**MVC** (Model-View-Controller) ist ein Muster im Softwaredesign, das häufig zur Implementierung von Benutzeroberflächen, Daten und Steuerungslogik verwendet wird. Es betont eine Trennung zwischen der Geschäftslogik und der Anzeige der Software. Diese "Trennung der Anliegen" ermöglicht eine bessere Arbeitsteilung und verbesserte Wartung. Einige andere Entwurfsmuster basieren auf MVC, wie z.B. MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter) und MVW (Model-View-Whatever).

Die drei Teile des MVC-Softwaredesignmusters lassen sich wie folgt beschreiben:

1. Model: Verwaltet Daten und Geschäftslogik.
2. View: Übernimmt das Layout und die Anzeige.
3. Controller: Leitet Befehle an die Teile Modell und Ansicht weiter.

## Model-View-Controller-Beispiel

Stellen Sie sich eine einfache Einkaufslisten-App vor. Alles, was wir wollen, ist eine Liste mit dem Namen, der Menge und dem Preis jedes Artikels, den wir diese Woche kaufen müssen. Im Folgenden beschreiben wir, wie wir einige dieser Funktionen mithilfe von MVC implementieren könnten.

![Diagramm zur Darstellung der verschiedenen Teile der MVC-Architektur.](model-view-controller-light-blue.png)

### Das Model

Das Model definiert, welche Daten die App enthalten soll. Wenn sich der Zustand dieser Daten ändert, benachrichtigt das Model normalerweise die Ansicht (damit die Anzeige bei Bedarf geändert werden kann) und manchmal auch den Controller (wenn unterschiedliche Logik zur Steuerung der aktualisierten Ansicht erforderlich ist).

In Bezug auf unsere Einkaufslisten-App würde das Model festlegen, welche Daten die Listenelemente enthalten sollen – Artikel, Preis usw. – und welche Listenelemente bereits vorhanden sind.

### Die View

Die View definiert, wie die Daten der App angezeigt werden sollen.

In unserer Einkaufslisten-App würde die View definieren, wie die Liste dem Benutzer präsentiert wird und die anzuzeigenden Daten vom Model empfangen.

### Der Controller

Der Controller enthält Logik, die das Model und/oder die View als Antwort auf Eingaben der Benutzer der App aktualisiert.

In unserem Beispiel könnte die Einkaufsliste Eingabeformulare und Schaltflächen enthalten, die es uns ermöglichen, Elemente hinzuzufügen oder zu löschen. Diese Aktionen erfordern eine Aktualisierung des Models, daher wird die Eingabe an den Controller gesendet, der dann das Model entsprechend manipuliert, welches dann aktualisierte Daten an die View sendet.

Es könnte jedoch auch sein, dass Sie nur die View aktualisieren möchten, um die Daten in einem anderen Format anzuzeigen, z.B. die Reihenfolge der Artikel alphabetisch oder nach Preis sortiert ändern. In diesem Fall könnte der Controller dies direkt ohne Aktualisierung des Models handhaben.

## MVC im Web

Als Webentwickler wird Ihnen dieses Muster wahrscheinlich ziemlich vertraut sein, auch wenn Sie es noch nie bewusst verwendet haben. Ihr Datenmodell befindet sich wahrscheinlich in einer Art Datenbank (sei es eine traditionelle serverseitige Datenbank wie MySQL oder eine clientseitige Lösung wie [IndexedDB \[en-US\]](/de/docs/Web/API/IndexedDB_API)). Der Steuerungscode Ihrer App ist wahrscheinlich in HTML/JavaScript geschrieben, und Ihre Benutzeroberfläche ist wahrscheinlich mit HTML/CSS/was auch immer Sie mögen erstellt. Das klingt sehr nach MVC, aber MVC lässt diese Komponenten einem strikteren Muster folgen.

In den frühen Tagen des Webs wurde die MVC-Architektur hauptsächlich serverseitig implementiert, wobei der Client Updates über Formulare oder Links anforderte und aktualisierte Ansichten zur Anzeige im Browser zurückerhielt. Heutzutage wird jedoch mehr Logik auf den Client verschoben, mit der Einführung clientseitiger Datenspeicher und der [Fetch API](/de/docs/Web/API/Fetch_API), die teilweise Seitenaktualisierungen nach Bedarf ermöglicht.

Web-Frameworks wie [AngularJS](https://en.wikipedia.org/wiki/AngularJS) und [Ember.js](https://en.wikipedia.org/wiki/Ember.js) implementieren alle eine MVC-Architektur, wenn auch auf leicht unterschiedliche Weise.

## Siehe auch

- [Model–view–controller](https://en.wikipedia.org/wiki/Model–view–controller) auf Wikipedia
