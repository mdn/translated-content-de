---
title: "Express-Tutorial Teil 5: Bibliotheksdaten anzeigen"
short-title: "5: Daten anzeigen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Jetzt können wir die Seiten hinzufügen, auf denen Bücher und andere Daten der [LocalLibrary-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) angezeigt werden. Dazu gehören eine Startseite, die die Anzahl der Datensätze für jeden Modelltyp zeigt, sowie Listen- und Detailseiten für alle unsere Modelle. Dabei sammeln wir praktische Erfahrung mit dem Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bearbeiten Sie die vorherigen Teile des Tutorials (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes">Express-Tutorial Teil 4: Routen und Controller</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Sie mit <code>async</code>/<code>await</code> asynchrone Datenbankoperationen durchführen, die Template-Sprache Pug verwenden und in Controller-Funktionen Daten aus der URL abrufen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In den vorherigen Artikeln haben wir [Mongoose-Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) definiert, mit denen wir auf eine Datenbank zugreifen können, und einige erste Bibliotheksdatensätze erstellt. Anschließend haben wir [alle benötigten Routen erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes). Die Controller-Funktionen für die LocalLibrary-Website sind bislang jedoch nur Platzhalter: Beim Aufruf einer Seite geben sie lediglich die Meldung „nicht implementiert“ zurück.

Als Nächstes implementieren wir die Seiten, die unsere Bibliotheksdaten _anzeigen_. Seiten mit Formularen zum Erstellen, Aktualisieren oder Löschen von Daten behandeln wir in späteren Artikeln. Dazu aktualisieren wir die Controller-Funktionen, damit sie mithilfe unserer Modelle Datensätze abrufen, und definieren Templates, die diese Daten den Nutzern anzeigen.

Zunächst geben wir einen Überblick darüber, wie sich asynchrone Operationen in Controller-Funktionen verwalten und Templates mit Pug schreiben lassen. Danach implementieren wir die wichtigsten Seiten zum Anzeigen von Daten und erläutern jeweils kurz die besonderen oder neuen Funktionen, die dabei zum Einsatz kommen.

Am Ende dieses Artikels sollten Sie gut verstehen, wie Routen, asynchrone Funktionen, Views und Modelle in der Praxis zusammenspielen.

## Unterartikel zum Anzeigen von Bibliotheksdaten

In den folgenden Unterartikeln fügen wir die Funktionen hinzu, die zum Anzeigen der Website-Seiten benötigt werden. Lesen und bearbeiten Sie die Artikel der Reihe nach, bevor Sie zum nächsten übergehen.

1. [Einführung in Templates](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [Das Basis-Template von LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [Bücherliste](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [BookInstance-Liste](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [Autorenliste und Übung zur Genreliste](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
7. [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
8. [Buch-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
9. [Autoren-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
10. [BookInstance-Detailseite und Übung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Zusammenfassung

Wir haben nun alle Seiten erstellt, die Daten unserer Website lediglich anzeigen: eine Startseite mit der Anzahl der Datensätze für jedes Modell sowie Listen- und Detailseiten für Bücher, Buchexemplare, Autoren und Genres. Dabei haben wir grundlegende Kenntnisse über Controller, die Ablaufsteuerung bei asynchronen Operationen, das Erstellen von Views mit _Pug_, Datenbankabfragen mithilfe von Modellen, die Übergabe von Informationen an Views sowie das Erstellen und Erweitern von Templates erworben.

Im nächsten Artikel bauen wir auf diesen Kenntnissen auf: Wir erstellen HTML-Formulare und Code für deren Verarbeitung, um die auf der Website gespeicherten Daten ändern zu können.

## Siehe auch

- [Template-Engines mit Express verwenden](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
