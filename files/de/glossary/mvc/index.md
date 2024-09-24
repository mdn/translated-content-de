---
title: MVC
slug: Glossary/MVC
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GlossarySidebar}}

**MVC** (Model-View-Controller) ist ein Muster im Softwaredesign, das häufig zur Implementierung von Benutzeroberflächen, Daten und Kontrolllogik verwendet wird. Es betont eine Trennung zwischen der Geschäftslogik der Software und der Darstellung. Diese "Trennung der Anliegen" sorgt für eine bessere Arbeitsteilung und verbesserte Wartung. Einige andere Entwurfsmuster basieren auf MVC, wie MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter) und MVW (Model-View-Whatever).

Die drei Teile des MVC-Software-Design-Musters können wie folgt beschrieben werden:

1. Model: Verwaltet Daten und Geschäftslogik.
2. View: Bearbeitet Layout und Anzeige.
3. Controller: Leitet Befehle an die Modell- und Ansichtsteile weiter.

## Beispiel für Model-View-Controller

Stellen Sie sich eine einfache Einkaufslisten-App vor. Alles, was wir wollen, ist eine Liste der Namen, Mengen und Preise jedes Artikels, den wir diese Woche kaufen müssen. Im Folgenden beschreiben wir, wie wir einige dieser Funktionen mit MVC implementieren könnten.

![Diagramm zur Darstellung der verschiedenen Teile der MVC-Architektur.](model-view-controller-light-blue.png)

### Das Model

Das Modell definiert, welche Daten die App enthalten soll. Wenn sich der Zustand dieser Daten ändert, wird das Modell normalerweise die Ansicht benachrichtigen (damit die Anzeige bei Bedarf geändert werden kann) und manchmal den Controller (falls unterschiedliche Logik zur Steuerung der aktualisierten Ansicht benötigt wird).

Zurück zu unserer Einkaufslisten-App würde das Modell festlegen, welche Daten die Listenelemente enthalten sollen — Artikel, Preis usw. — und welche Listenelemente bereits vorhanden sind.

### Die View

Die Ansicht definiert, wie die Daten der App angezeigt werden sollen.

In unserer Einkaufslisten-App würde die Ansicht definieren, wie die Liste dem Benutzer präsentiert wird, und die anzuzeigenden Daten vom Modell erhalten.

### Der Controller

Der Controller enthält Logik, die das Modell und/oder die Ansicht als Reaktion auf Eingaben der Benutzer der App aktualisiert.

Unser Einkaufszettel könnte zum Beispiel Eingabeformulare und Schaltflächen haben, mit denen wir Artikel hinzufügen oder löschen können. Diese Aktionen erfordern eine Aktualisierung des Modells, daher wird die Eingabe an den Controller gesendet, der dann das Modell entsprechend manipuliert, welches dann aktualisierte Daten an die Ansicht sendet.

Sie könnten jedoch auch nur die Ansicht aktualisieren wollen, um die Daten in einem anderen Format anzuzeigen, z.B. die Artikelreihenfolge in alphabetischer Reihenfolge oder vom niedrigsten zum höchsten Preis ändern. In diesem Fall könnte der Controller dies direkt handhaben, ohne das Modell aktualisieren zu müssen.

## MVC im Web

Als Webentwickler wird Ihnen dieses Muster wahrscheinlich vertraut sein, auch wenn Sie es nie bewusst verwendet haben. Ihr Datenmodell ist wahrscheinlich in einer Art von Datenbank enthalten (sei es eine traditionelle serverseitige Datenbank wie MySQL oder eine clientseitige Lösung wie [IndexedDB \[en-US\]](/de/docs/Web/API/IndexedDB_API).) Der Steuerungscode Ihrer App ist wahrscheinlich in HTML/JavaScript geschrieben, und Ihre Benutzeroberfläche wahrscheinlich mit HTML/CSS/welche weiteren Technologien Sie verwenden möchten. Dies klingt sehr nach MVC, aber MVC lässt diese Komponenten einem festeren Muster folgen.

In den frühen Tagen des Webs wurde die MVC-Architektur hauptsächlich serverseitig implementiert, wobei der Client Aktualisierungen über Formulare oder Links anforderte und aktualisierte Ansichten zur Anzeige im Browser zurückerhielt. Heutzutage wird jedoch mehr der Logik auf den Client verlagert, mit der Einführung von clientseitigen Datenspeichern und der [Fetch API](/de/docs/Web/API/Fetch_API), die teilweise Seitenaktualisierungen bei Bedarf ermöglicht.

Web-Frameworks wie [AngularJS](https://en.wikipedia.org/wiki/AngularJS) und [Ember.js](https://en.wikipedia.org/wiki/Ember.js) implementieren alle eine MVC-Architektur, wenn auch auf leicht unterschiedliche Weise.

## Siehe auch

- [Model–view–controller](https://en.wikipedia.org/wiki/Model–view–controller) auf Wikipedia
