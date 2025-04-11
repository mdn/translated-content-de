---
title: "Express Tutorial Teil 5: Bibliotheksdaten anzeigen"
short-title: "5: Daten anzeigen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Wir sind jetzt bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der [Lokalen Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) anzeigen. Die Seiten umfassen eine Startseite, die zeigt, wie viele Einträge wir von jedem Modelltyp haben, sowie Liste- und Detailseiten für alle unsere Modelle. Dabei sammeln wir praktische Erfahrungen im Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen der vorherigen Tutorial-Themen (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes">Express Tutorial Teil 4: Routen und Controller</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man asynchrone Datenbankoperationen mit <code>async</code>/<code>await</code> durchführt, wie man die Pug-Templating-Sprache verwendet und wie man Daten aus der URL in unseren Controller-Funktionen erhält.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In unseren vorherigen Tutorial-Artikeln haben wir [Mongoose-Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) definiert, mit denen wir mit einer Datenbank interagieren können, und einige anfängliche Bibliothekseinträge erstellt. Wir haben dann [alle benötigten Routen erstellt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) für die Lokale Bibliothek-Website, jedoch mit "Dummy-Controller"-Funktionen (das sind grobe Controller-Funktionen, die nur eine "nicht implementiert"-Nachricht zurückgeben, wenn eine Seite aufgerufen wird).

Der nächste Schritt ist, ordnungsgemäße Implementierungen für die Seiten bereitzustellen, die unsere Bibliotheksinformationen _anzeigen_ (wir werden uns später mit der Implementierung von Seiten mit Formularen zur Erstellung, Aktualisierung oder Löschung von Informationen befassen). Dies umfasst das Aktualisieren der Controller-Funktionen, um Datensätze mithilfe unserer Modelle abzurufen und Templates zu definieren, um diese Informationen für Benutzer anzuzeigen.

Wir beginnen mit einer Einführung in die Verwaltung von asynchronen Operationen in Controller-Funktionen und wie man Templates mit Pug schreibt. Dann stellen wir Implementierungen für jede unserer Hauptseiten im "Nur-Lesen"-Modus zur Verfügung, mit einer kurzen Erklärung zu speziellen oder neuen Funktionen, die sie verwenden.

Am Ende dieses Artikels sollten Sie ein gutes Verständnis dafür haben, wie Routen, asynchrone Funktionen, Ansichten und Modelle in der Praxis zusammenarbeiten.

## Tutorial-Unterartikel zum Anzeigen von Bibliotheksdaten

Die folgenden Unterartikel führen Sie durch den Prozess der Hinzufügung der verschiedenen notwendigen Funktionen, um die benötigten Webseiten anzuzeigen. Sie sollten jeden dieser Artikel nacheinander lesen und durcharbeiten, bevor Sie mit dem nächsten fortfahren.

1. [Template-Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [Das Basis-Template der Lokalen Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [Buchliste-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [BookInstance-Liste-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [Datumformatierung mit luxon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [Liste-Seiten für Autoren und Genres Herausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [Buch-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [Autor-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [BookInstance-Detailseite und Herausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Zusammenfassung

Wir haben nun alle "Nur-Lesen"-Seiten für unsere Seite erstellt: eine Startseite, die die Anzahl der Instanzen jedes unserer Modelle anzeigt, sowie Listen- und Detailseiten für unsere Bücher, Buchinstanzen, Autoren und Genres. Dabei haben wir viel grundlegendes Wissen über Controller, das Verwalten der Flusskontrolle bei der Verwendung asynchroner Operationen, das Erstellen von Ansichten mit _Pug_, das Abfragen der Website-Datenbank mithilfe von Modellen, das Übermitteln von Informationen an eine Ansicht und das Erstellen und Erweitern von Templates erlangt. Die Herausforderungen haben den Lesern auch ein wenig über das Datumshandling mit _Luxon_ beigebracht.

Im nächsten Artikel werden wir auf unserem Wissen aufbauen, HTML-Formulare und Formularbearbeitungscode erstellen, um die von der Seite gespeicherten Daten zu ändern.

## Siehe auch

- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug-Dokumentation)
- [Luxon](https://moment.github.io/luxon/#/) (Luxon-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
