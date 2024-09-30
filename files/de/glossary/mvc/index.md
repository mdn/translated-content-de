---
title: MVC
slug: Glossary/MVC
l10n:
  sourceCommit: e72890bafe775a38620def9a74beda8cf9c47411
---

{{GlossarySidebar}}

**MVC** (Model-View-Controller) ist ein Muster im Software-Design, das häufig zur Implementierung von Benutzeroberflächen, Daten und Steuerungslogik verwendet wird. Es betont die Trennung zwischen der Geschäftslogik und der Anzeige der Software. Diese "Trennung der Zuständigkeiten" sorgt für eine bessere Arbeitsaufteilung und verbesserte Wartbarkeit. Einige andere Designmuster basieren auf MVC, wie z.B. MVVM (Model-View-Viewmodel), MVP (Model-View-Presenter) und MVW (Model-View-Whatever).

Die drei Teile des MVC-Software-Designmusters können wie folgt beschrieben werden:

1. Model: Verwalten von Daten und Geschäftslogik.
2. View: Bearbeitung von Layout und Anzeige.
3. Controller: Weiterleitung von Befehlen an die Modell- und Ansichtsteile.

## Beispiel für Model View Controller

Stellen Sie sich eine einfache Einkaufslisten-App vor. Alles, was wir wollen, ist eine Liste der Namen, Mengen und Preise der Artikel, die wir diese Woche kaufen müssen. Unten beschreiben wir, wie wir einige dieser Funktionen mit MVC implementieren könnten.

![Diagramm zur Darstellung der verschiedenen Teile der MVC-Architektur.](model-view-controller-light-blue.png)

### Das Modell

Das Modell definiert, welche Daten die App enthalten sollte. Wenn sich der Zustand dieser Daten ändert, benachrichtigt das Modell in der Regel die Ansicht (damit die Anzeige bei Bedarf geändert werden kann) und manchmal den Controller (wenn andere Logik erforderlich ist, um die aktualisierte Ansicht zu steuern).

Zurück zu unserer Einkaufslisten-App: Das Modell würde festlegen, welche Daten die Listenelemente enthalten sollten — Artikel, Preis usw. — und welche Listenelemente bereits vorhanden sind.

### Die Ansicht

Die Ansicht definiert, wie die Daten der App angezeigt werden sollen.

In unserer Einkaufslisten-App würde die Ansicht definieren, wie die Liste dem Benutzer präsentiert wird, und die anzuzeigenden Daten vom Modell erhalten.

### Der Controller

Der Controller enthält Logik, die das Modell und/oder die Ansicht als Reaktion auf Eingaben von Benutzern der App aktualisiert.

Beispielsweise könnte unsere Einkaufsliste Eingabeformulare und Schaltflächen haben, die es uns ermöglichen, Artikel hinzuzufügen oder zu löschen. Diese Aktionen erfordern, dass das Modell aktualisiert wird, sodass die Eingabe an den Controller gesendet wird, der dann das Modell entsprechend manipuliert, welches dann aktualisierte Daten an die Ansicht sendet.

Möglicherweise möchten Sie jedoch auch einfach die Ansicht aktualisieren, um die Daten in einem anderen Format darzustellen, z.B. die Artikelreihenfolge nach Alphabet oder vom niedrigsten zum höchsten Preis ändern. In diesem Fall könnte der Controller dies direkt handhaben, ohne dass das Modell aktualisiert werden muss.

## MVC im Web

Als Webentwickler wird Ihnen dieses Muster wahrscheinlich ziemlich vertraut vorkommen, selbst wenn Sie es noch nie bewusst verwendet haben. Ihr Datenmodell befindet sich wahrscheinlich in einer Art Datenbank (sei es eine traditionelle serverseitige Datenbank wie MySQL oder eine clientseitige Lösung wie [IndexedDB \[en-US\]](/de/docs/Web/API/IndexedDB_API)). Der Steuerungscode Ihrer App ist wahrscheinlich in HTML/JavaScript geschrieben, und Ihre Benutzeroberfläche ist wahrscheinlich mit HTML/CSS/was auch immer Sie möchten geschrieben. Das klingt sehr nach MVC, aber MVC lässt diese Komponenten einem starreren Muster folgen.

In den frühen Tagen des Webs wurde die MVC-Architektur hauptsächlich serverseitig implementiert, wobei der Client Aktualisierungen über Formulare oder Links anforderte und aktualisierte Ansichten zurückerhielt, um sie im Browser anzuzeigen. Heutzutage wird mit dem Aufkommen von clientseitigen Datenspeichern und der [Fetch API](/de/docs/Web/API/Fetch_API) mehr Logik auf den Client verlagert, sodass teilweise Seitenaktualisierungen bei Bedarf möglich sind.

Web-Frameworks wie [AngularJS](https://en.wikipedia.org/wiki/AngularJS) und [Ember.js](https://en.wikipedia.org/wiki/Ember.js) implementieren alle eine MVC-Architektur, wenn auch auf leicht unterschiedliche Weise.

## Siehe auch

- [Model–view–controller](https://en.wikipedia.org/wiki/Model–view–controller) auf Wikipedia
