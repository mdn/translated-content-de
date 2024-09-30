---
title: "Express Tutorial Teil 5: Bibliotheksdaten anzeigen"
slug: Learn/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

Wir sind nun bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Webseite anzeigen. Die Seiten umfassen eine Startseite, die zeigt, wie viele Einträge wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Unterwegs sammeln wir praktische Erfahrungen beim Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen der vorherigen Tutorial-Themen (einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/routes">Express Tutorial Teil 4: Routen und Controller</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man asynchrone Datenbankoperationen mit <code>async</code>/<code>await</code> ausführt, wie man die Pug-Template-Sprache verwendet und wie man in unseren Controller-Funktionen Daten aus der URL abruft.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

In unseren vorherigen Tutorial-Artikeln haben wir [Mongoose-Modelle](/de/docs/Learn/Server-side/Express_Nodejs/mongoose) definiert, die wir zur Interaktion mit einer Datenbank verwenden können, und einige anfängliche Bibliothekseinträge erstellt. Wir haben dann [alle benötigten Routen](/de/docs/Learn/Server-side/Express_Nodejs/routes) für die LocalLibrary Webseite erstellt, allerdings mit "Dummy-Controller"-Funktionen (dies sind Grundgerüst-Controllerfunktionen, die nur eine "nicht implementiert"-Meldung zurückgeben, wenn eine Seite aufgerufen wird).

Der nächste Schritt besteht darin, ordnungsgemäße Implementierungen für die Seiten bereitzustellen, die unsere Bibliotheksinformationen _anzeigen_ (in späteren Artikeln werden wir uns mit der Implementierung von Seiten befassen, die Formulare zur Erstellung, Aktualisierung oder Löschung von Informationen enthalten). Dazu gehört, die Controller-Funktionen zu aktualisieren, um Datensätze mit unseren Modellen abzurufen und Templates zu definieren, um diese Informationen den Benutzern anzuzeigen.

Wir beginnen mit der Bereitstellung von Überblicks- und Einführungsthemen, die erklären, wie man asynchrone Operationen in Controller-Funktionen verwaltet und wie man Templates mit Pug schreibt. Anschließend bieten wir Implementierungen für jede unserer Hauptseiten im "Nur-Lese"-Format zusammen mit einer kurzen Erklärung zu speziellen oder neuen Funktionen, die sie verwenden.

Am Ende dieses Artikels sollten Sie ein gutes Verständnis dafür haben, wie Routen, asynchrone Funktionen, Ansichten und Modelle in der Praxis zusammenarbeiten.

## Tutorial-Unterartikel zum Anzeigen von Bibliotheksdaten

Die folgenden Unterartikel erläutern den Prozess zum Hinzufügen der verschiedenen Funktionen, die erforderlich sind, um die benötigten Webseiten anzuzeigen. Sie sollten jeden dieser Artikel der Reihe nach lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Template Einführung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [Das LocalLibrary Basistemplate](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [Startseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [Buchlistenseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [BookInstance Listenseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [Datumsformatierung mit Luxon](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [Herausforderung zur Autoren- und Genrelistenseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [Genre-Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [Buchdetailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [Autorendetailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [BookInstance Detailseite und Herausforderung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Zusammenfassung

Wir haben nun alle "Nur-Lese"-Seiten für unsere Seite erstellt: eine Startseite, die Anzahl der Instanzen jedes unserer Modelle anzeigt, sowie Listen- und Detailseiten für unsere Bücher, Buchexemplare, Autoren und Genres. Unterwegs haben wir viel grundlegendes Wissen über Controller, das Management von Kontrollfluss bei Verwendung von asynchronen Operationen, das Erstellen von Ansichten mit _Pug_, das Abfragen der Website-Datenbank über Modelle, das Weitergeben von Informationen an eine Ansicht und das Erstellen und Erweitern von Templates gesammelt. Die Herausforderungen haben den Lesern auch ein wenig über den Umgang mit Daten unter Verwendung von _Luxon_ beigebracht.

In unserem nächsten Artikel werden wir auf unserem Wissen aufbauen, HTML-Formulare und Code zur Formularverarbeitung erstellen, um die von der Website gespeicherten Daten zu ändern.

## Siehe auch

- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug-Dokumentation)
- [Luxon](https://moment.github.io/luxon/#/) (Luxon-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
