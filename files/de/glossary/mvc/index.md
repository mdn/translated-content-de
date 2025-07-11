---
title: MVC
slug: Glossary/MVC
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**MVC** (Model-View-Controller) ist ein Muster im Softwaredesign, das häufig zur Implementierung von Benutzeroberflächen, Daten und Steuerlogik verwendet wird. Es betont eine Trennung zwischen der Geschäftslogik und der Anzeige der Software. Diese "Trennung der Anliegen" sorgt für eine bessere Arbeitsteilung und erleichtert die Wartung. Einige andere Entwurfsmuster basieren auf MVC, wie zum Beispiel MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter) und MVW (Model-View-Whatever).

Die drei Teile des MVC-Software-Design-Musters können wie folgt beschrieben werden:

1. Model: Verwaltet Daten und Geschäftslogik.
2. View: Handhabt Layout und Anzeige.
3. Controller: Leitet Befehle an die Model- und View-Teile weiter.

## Model View Controller Beispiel

Stellen Sie sich eine einfache Einkaufslisten-App vor. Alles, was wir wollen, ist eine Liste mit dem Namen, der Menge und dem Preis jedes Artikels, den wir diese Woche kaufen müssen. Im Folgenden beschreiben wir, wie wir einige dieser Funktionalitäten mithilfe von MVC implementieren könnten.

![Diagramm, um die verschiedenen Teile der MVC-Architektur zu zeigen.](model-view-controller-light-blue.png)

### Das Model

Das Model definiert, welche Daten die App enthalten sollte. Wenn sich der Zustand dieser Daten ändert, benachrichtigt das Model normalerweise die View (damit sich die Anzeige bei Bedarf ändern kann) und manchmal den Controller (wenn unterschiedliche Logik zur Steuerung der aktualisierten View erforderlich ist).

Zurück zu unserer Einkaufslisten-App: Das Model würde festlegen, welche Daten die Listenelemente enthalten sollten — Artikel, Preis usw. — und welche Listenelemente bereits vorhanden sind.

### Die View

Die View definiert, wie die Daten der App angezeigt werden sollten.

In unserer Einkaufslisten-App würde die View definieren, wie die Liste dem Benutzer präsentiert wird, und die Daten, die angezeigt werden sollen, vom Model erhalten.

### Der Controller

Der Controller enthält Logiken, die das Model und/oder die View als Reaktion auf Eingaben der Benutzer der App aktualisieren.

Beispielsweise könnte unsere Einkaufsliste Eingabeformulare und Schaltflächen haben, mit denen wir Artikel hinzufügen oder löschen können. Diese Aktionen erfordern, dass das Model aktualisiert wird, sodass die Eingabe an den Controller gesendet wird, der dann das Model entsprechend manipuliert, welches dann aktualisierte Daten an die View sendet.

Es geht jedoch möglicherweise auch nur darum, die View zu aktualisieren, um die Daten in einem anderen Format anzuzeigen, z.B. die Reihenfolge der Artikel in alphabetischer Reihenfolge oder vom niedrigsten zum höchsten Preis zu ändern. In diesem Fall könnte der Controller dies direkt handhaben, ohne das Model aktualisieren zu müssen.

## MVC im Web

Als Webentwickler wird Ihnen dieses Muster vermutlich ziemlich vertraut vorkommen, selbst wenn Sie es noch nie bewusst verwendet haben. Ihr Datenmodell befindet sich wahrscheinlich in einer Art Datenbank (sei es eine traditionelle serverseitige Datenbank wie MySQL oder eine clientseitige Lösung wie [IndexedDB \[en-US\]](/de/docs/Web/API/IndexedDB_API)). Der Steuerungscode Ihrer App ist wahrscheinlich in HTML/JavaScript geschrieben, und Ihre Benutzeroberfläche ist wahrscheinlich in HTML/CSS/was auch immer Sie möchten geschrieben. Dies klingt sehr nach MVC, aber MVC bringt diese Komponenten dazu, einem strengeren Muster zu folgen.

In den frühen Tagen des Webs wurde die MVC-Architektur größtenteils serverseitig implementiert, wobei der Client Updates über Formulare oder Links anforderte und aktualisierte Ansichten zurückerhielt, um sie im Browser anzuzeigen. Heutzutage wird jedoch mehr Logik auf den Client verlagert, mit der Einführung von clientseitigen Datenspeichern und der [Fetch API](/de/docs/Web/API/Fetch_API), die bei Bedarf partielle Seitenaktualisierungen ermöglicht.

Web-Frameworks wie [AngularJS](https://en.wikipedia.org/wiki/AngularJS) und [Ember.js](https://en.wikipedia.org/wiki/Ember.js) implementieren alle eine MVC-Architektur, wenn auch in leicht unterschiedlichen Weisen.

## Siehe auch

- [Model–view–controller](https://de.wikipedia.org/wiki/Model_View_Controller) auf Wikipedia
