---
title: "Express-Tutorial Teil 5: Bibliotheksdaten anzeigen"
slug: Learn/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

Wir sind nun bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Website anzeigen. Die Seiten umfassen eine Startseite, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Unterwegs werden wir praktische Erfahrungen im Abrufen von Datensätzen aus der Datenbank und der Nutzung von Templates sammeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen der vorherigen Tutorial-Themen (einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/routes">Express Tutorial Teil 4: Routen und Controller</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man asynchrone Datenbankoperationen mit <code>async</code>/<code>await</code> durchführt, wie man die Pug-Templetsprache verwendet und wie man Daten von der URL in unseren Controller-Funktionen abruft.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In unseren vorherigen Tutorial-Artikeln haben wir [Mongoose-Modelle](/de/docs/Learn/Server-side/Express_Nodejs/mongoose) definiert, die wir zur Interaktion mit einer Datenbank verwenden können, und einige anfängliche Bibliotheksdatensätze erstellt. Dann haben wir [alle Routen erstellt](/de/docs/Learn/Server-side/Express_Nodejs/routes), die für die LocalLibrary-Website benötigt werden, jedoch mit "Dummy-Controller"-Funktionen (dies sind Gerüst-Controller-Funktionen, die nur eine "nicht implementiert"-Nachricht zurückgeben, wenn eine Seite aufgerufen wird).

Der nächste Schritt besteht darin, ordnungsgemäße Implementierungen für die Seiten bereitzustellen, die unsere Bibliotheksinformationen _anzeigen_ (wir werden später auf das Implementieren von Seiten eingehen, die Formulare zum Erstellen, Aktualisieren oder Löschen von Informationen enthalten). Dazu gehört das Aktualisieren der Controller-Funktionen, um Datensätze mithilfe unserer Modelle abzurufen, und das Definieren von Templates, um diese Informationen den Benutzern anzuzeigen.

Wir beginnen mit der Bereitstellung von Überblicks-/Einführungsthemen, die erklären, wie man asynchrone Operationen in Controller-Funktionen verwaltet und wie man Templates mit Pug schreibt. Anschließend liefern wir Implementierungen für jede unserer wichtigsten "nur lesbaren" Seiten mit einer kurzen Erklärung der besonderen oder neuen Funktionen, die sie verwenden.

Am Ende dieses Artikels sollten Sie ein gutes Verständnis dafür haben, wie Routen, asynchrone Funktionen, Ansichten und Modelle in der Praxis funktionieren.

## Anleitung für das Anzeigen von Bibliotheksdaten

Die folgenden Unterartikel behandeln den Prozess des Hinzufügens der verschiedenen Funktionen, die erforderlich sind, um die erforderlichen Website-Seiten anzuzeigen.
Sie müssen jeden dieser Artikel der Reihe nach lesen und durcharbeiten, bevor Sie weitergehen.

1. [Template-Einführung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [Das LocalLibrary-Basistemplate](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [Startseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [Buchliste-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [BookInstance-Liste-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [Datumsformatierung mit Luxon](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [Herausforderung: Autorenliste und Genreliste](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [Genre Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [Buch Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [Autor Detailseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [BookInstance Detailseite und Herausforderung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Zusammenfassung

Wir haben nun alle "nur lesbaren" Seiten für unsere Seite erstellt: eine Startseite, die die Anzahl der Instanzen jedes unserer Modelle anzeigt, sowie Listen- und Detailseiten für unsere Bücher, Buchinstanzen, Autoren und Genres. Unterwegs haben wir viel grundlegendes Wissen über Controller, die Verwaltung der Ablaufsteuerung bei asynchronen Operationen, das Erstellen von Ansichten mit _Pug_, das Abfragen der Website-Datenbank mit Modellen, das Übergeben von Informationen an eine Ansicht und das Erstellen und Erweitern von Templates erworben. Die Herausforderungen haben den Lesern auch ein wenig über den Umgang mit Daten mithilfe von _Luxon_ beigebracht.

In unserem nächsten Artikel bauen wir auf unserem Wissen auf, erstellen HTML-Formulare und Code zur Formularbearbeitung, um die von der Website gespeicherten Daten zu ändern.

## Siehe auch

- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug-Dokumentation)
- [Luxon](https://moment.github.io/luxon/#/) (Luxon-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
