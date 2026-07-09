---
title: "Express Tutorial Teil 5: Anzeigender Bibliotheksdaten"
short-title: "5: Daten anzeigen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Wir sind nun bereit, die Seiten hinzuzufügen, die die Bücher der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website und andere Daten anzeigen. Die Seiten umfassen eine Startseite, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unserer Modelle. Dabei werden wir praktische Erfahrungen darin sammeln, Datensätze aus der Datenbank zu holen und Vorlagen zu verwenden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie die vorhergehenden Tutorial-Themen (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes">Express Tutorial Teil 4: Routen und Controller</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, wie man asynchrone Datenbankoperationen mit <code>async</code>/<code>await</code> ausführt, wie man die Pug-Templating-Sprache verwendet und wie man Daten aus der URL in unseren Controller-Funktionen erhält.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In unseren vorherigen Tutorial-Artikeln haben wir [Mongoose-Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) definiert, die wir zur Interaktion mit einer Datenbank verwenden können, und einige erste Bibliotheksdatensätze erstellt. Danach haben wir [alle benötigten Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) für die LocalLibrary Website erstellt, jedoch mit „Dummy-Controller“-Funktionen (das sind Skelett-Controller-Funktionen, die nur eine "nicht implementiert"-Nachricht zurückgeben, wenn eine Seite aufgerufen wird).

Der nächste Schritt besteht darin, ordnungsgemäße Implementierungen für die Seiten bereitzustellen, die unsere Bibliotheksinformationen _anzeigen_ (Wir werden uns in späteren Artikeln mit der Implementierung von Seiten befassen, die Formulare zum Erstellen, Aktualisieren oder Löschen von Informationen enthalten). Dies umfasst das Aktualisieren der Controller-Funktionen, um Datensätze mit unseren Modellen abzurufen, und das Definieren von Vorlagen, um diese Informationen den Benutzern anzuzeigen.

Wir werden mit Überblicks-/Einführungsthemen beginnen, die erklären, wie man asynchrone Operationen in Controller-Funktionen verwaltet und wie man Vorlagen mit Pug schreibt. Anschließend bieten wir Implementierungen für jede unserer Haupt-"Read-only"-Seiten mit einer kurzen Erklärung der speziellen oder neuen Funktionen, die sie verwenden.

Am Ende dieses Artikels sollten Sie ein gutes Verständnis dafür haben, wie Routen, asynchrone Funktionen, Ansichten und Modelle in der Praxis funktionieren.

## Tutorial-Unterartikel zur Anzeige von Bibliotheksdaten

Die folgenden Unterartikel führen durch den Prozess des Hinzufügens der verschiedenen Funktionen, die erforderlich sind, um die erforderlichen Website-Seiten anzuzeigen.
Sie müssen jeden dieser Artikel lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Einführung in Vorlagen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [Die LocalLibrary-Basisvorlage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [Buchlisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [BuchInstanz-Listen-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [Datumsformatierung mit Luxon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [Herausforderung: Autorenlisten-Seite und Genrelisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [Buch-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [Autoren-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [Herausforderung: BuchInstanz-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Zusammenfassung

Wir haben nun alle "Read-only"-Seiten für unsere Website erstellt: eine Startseite, die die Anzahl der Instanzen jedes unserer Modelle anzeigt, sowie Listen- und Detailseiten für unsere Bücher, Buchinstanzen, Autoren und Genres. Auf diesem Weg haben wir viel grundlegendes Wissen über Controller, das Verwalten der Flusskontrolle bei der Verwendung von asynchronen Operationen, das Erstellen von Ansichten mit _Pug_, das Abfragen der Site-Datenbank mit Modellen, das Übergeben von Informationen an eine Ansicht sowie das Erstellen und Erweitern von Vorlagen gewonnen. Die Herausforderungen haben den Lesern sicherlich auch einiges über den Umgang mit Daten mithilfe von _Luxon_ beigebracht.

In unserem nächsten Artikel werden wir auf unserem Wissen aufbauen und HTML-Formulare und Formularbearbeitungscode erstellen, um die auf der Website gespeicherten Daten zu modifizieren.

## Siehe auch

- [Verwendung von Template Engines mit Express](https://expressjs.com/en/guide/using-template-engines/) (Express-Dokumentation)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug-Dokumentation)
- [Luxon](https://moment.github.io/luxon/#/) (Luxon-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
