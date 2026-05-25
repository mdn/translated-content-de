---
title: MVC
slug: Glossary/MVC
l10n:
  sourceCommit: 19578c2d5bf6f2742a189198d5b1f402a9ae573c
---

**MVC** (Model-View-Controller) ist ein Muster im Softwaredesign, das häufig zur Implementierung von Benutzeroberflächen, Daten und Steuerungslogik verwendet wird. Es betont die Trennung zwischen der Geschäftslogik und der Darstellung der Software. Diese "Separation of Concerns" ermöglicht eine bessere Arbeitsteilung und verbesserte Wartung. Einige andere Designmuster basieren auf MVC, wie z.B. MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter) und MVW (Model-View-Whatever).

Die drei Teile des MVC-Softwaredesignmusters können wie folgt beschrieben werden:

1. Model: Verwalten von Daten und Geschäftslogik.
2. View: Handhabt Layout und Anzeige.
3. Controller: Leitet Befehle an die Komponenten Modell und Ansicht weiter.

## Beispiel für Model-View-Controller

Stellen Sie sich eine einfache Einkaufslisten-App vor. Wir möchten lediglich eine Liste mit dem Namen, der Menge und dem Preis jedes zu kaufenden Artikels dieser Woche. Im Folgenden beschreiben wir, wie wir einige dieser Funktionen mithilfe von MVC implementieren könnten.

![Diagramm zur Darstellung der verschiedenen Teile der MVC-Architektur.](model-view-controller-light-blue.png)

### Das Model

Das Model definiert, welche Daten die App enthalten sollte. Wenn sich der Zustand dieser Daten ändert, benachrichtigt das Model normalerweise die View (damit die Anzeige bei Bedarf geändert werden kann) und manchmal den Controller (wenn eine andere Logik zur Steuerung der aktualisierten Ansicht erforderlich ist).

Zurück zu unserer Einkaufslisten-App: Das Model würde festlegen, welche Daten die Listenelemente enthalten sollen — Artikel, Preis usw. — und welche Listenelemente bereits vorhanden sind.

### Die View

Die View definiert, wie die Daten der App angezeigt werden sollen.

In unserer Einkaufslisten-App würde die View festlegen, wie die Liste dem Benutzer präsentiert wird, und die anzuzeigenden Daten vom Model erhalten.

### Der Controller

Der Controller enthält die Logik, die das Model und/oder die View als Reaktion auf Eingaben der Benutzer der App aktualisiert.

So könnte unsere Einkaufsliste zum Beispiel Eingabeformulare und Buttons enthalten, mit denen wir Artikel hinzufügen oder löschen können. Diese Aktionen erfordern eine Aktualisierung des Models, sodass die Eingaben an den Controller gesendet werden, der dann das Model wie erforderlich manipuliert, welches dann aktualisierte Daten an die View sendet.

Man möchte jedoch eventuell auch nur die View aktualisieren, um die Daten in einem anderen Format anzuzeigen, z.B. die Reihenfolge der Artikel alphabetisch oder nach Preis von niedrig nach hoch zu ändern. In diesem Fall könnte der Controller dies direkt handhaben, ohne das Model aktualisieren zu müssen.

## MVC im Web

Als Webentwickler wird Ihnen dieses Muster wahrscheinlich bekannt vorkommen, selbst wenn Sie es noch nie bewusst benutzt haben. Ihr Datenmodell befindet sich wahrscheinlich in irgendeiner Art von Datenbank (sei es eine traditionelle serverseitige Datenbank wie MySQL oder eine clientseitige Lösung wie [IndexedDB](/de/docs/Web/API/IndexedDB_API)). Der Steuerungscode Ihrer App ist wahrscheinlich in HTML/JavaScript geschrieben, und Ihre Benutzeroberfläche ist wahrscheinlich mit HTML/CSS/was auch immer Sie gerne verwenden, entwickelt. Das klingt sehr nach MVC, aber MVC bringt diese Komponenten dazu, einem strengeren Muster zu folgen.

In den frühen Tagen des Webs wurde die MVC-Architektur meist auf der Serverseite implementiert, wobei der Client Updates über Formulare oder Links anforderte und aktualisierte Ansichten zur Anzeige im Browser empfing. Heutzutage wird jedoch mehr Logik auf den Client verlagert, mit der Einführung von clientseitigen Datenspeichern und der [Fetch API](/de/docs/Web/API/Fetch_API), die teilweise Seitenaktualisierungen nach Bedarf ermöglicht.

Web-Frameworks wie [AngularJS](https://en.wikipedia.org/wiki/AngularJS) und [Ember.js](https://en.wikipedia.org/wiki/Ember.js) implementieren alle eine MVC-Architektur, wenn auch auf leicht unterschiedliche Weise.

## Siehe auch

- [Model–view–controller](https://en.wikipedia.org/wiki/Model–view–controller) auf Wikipedia
