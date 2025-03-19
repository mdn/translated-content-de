---
title: "Express Tutorial Teil 5: Anzeigung von Bibliotheksdaten"
short-title: "5: Anzeigung von Daten"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Wir sind jetzt bereit, die Seiten hinzuzufügen, die die Bücher und anderen Daten der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website anzeigen. Die Seiten werden eine Homepage enthalten, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Dabei werden wir praktische Erfahrungen im Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates sammeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Schließen Sie die vorherigen Themen des Tutorials ab (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes">Express-Tutorial Teil 4: Routen und Controller</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man asynchrone Datenbankoperationen mit <code>async</code>/<code>await</code> durchführt, wie man die Pug-Template-Sprache verwendet und wie man Daten von der URL in unseren Controller-Funktionen erhält.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In unseren bisherigen Tutorial-Artikeln haben wir [Mongoose-Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) definiert, die wir zur Interaktion mit einer Datenbank verwenden können, und einige anfängliche Bibliotheksdatensätze erstellt. Wir haben dann [alle benötigten Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) für die LocalLibrary-Website erstellt, jedoch mit „Dummy-Controller“-Funktionen (diese sind Skelett-Controller-Funktionen, die nur eine „Nicht implementiert“-Nachricht zurückgeben, wenn eine Seite aufgerufen wird).

Der nächste Schritt besteht darin, ordnungsgemäße Implementierungen für die Seiten bereitzustellen, die unsere Bibliotheksinformationen _anzeigen_ (wir werden das Implementieren von Seiten mit Formularen, um Informationen zu erstellen, zu aktualisieren oder zu löschen, in späteren Artikeln betrachten). Dies umfasst die Aktualisierung der Controller-Funktionen zum Abrufen von Datensätzen mit unseren Modellen und die Definition von Templates, um diese Informationen den Benutzern anzuzeigen.

Wir beginnen mit einer Einführung zu den Themen, wie man asynchrone Operationen in Controller-Funktionen verwaltet und wie man Templates mit Pug schreibt. Dann bieten wir Implementierungen für jede unserer Haupt-"Nur-Lese"-Seiten an, mit einer kurzen Erklärung der besonderen oder neuen Funktionen, die sie verwenden.

Am Ende dieses Artikels sollten Sie ein gutes Verständnis dafür haben, wie Routen, asynchrone Funktionen, Views und Modelle in der Praxis funktionieren.

## Tutorial-Unterartikel zur Anzeigung von Bibliotheksdaten

Die folgenden Unterartikel erläutern den Prozess des Hinzufügens der verschiedenen Funktionen, die erforderlich sind, um die erforderlichen Webseiten anzuzeigen. Sie müssen jeden dieser Artikel der Reihe nach lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Template Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [Das LocalLibrary Basistemplate](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [Homepage](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [Bücherlisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [BookInstance-Listen-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [Datumsformatierung mit luxon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [Autorenlisten-Seite und Genrelisten-Seite Herausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [Buch-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [Autoren-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [BookInstance-Detailseite und Herausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Zusammenfassung

Wir haben nun alle "Nur-Lese"-Seiten für unsere Website erstellt: eine Homepage, die die Anzahl der Instanzen jedes unserer Modelle anzeigt, sowie Listen- und Detailseiten für unsere Bücher, Buchinstanzen, Autoren und Genres. Dabei haben wir viel grundlegendes Wissen über Controller, das Verwalten des Kontrollflusses bei der Verwendung asynchroner Operationen, das Erstellen von Views mit _Pug_, das Abfragen der Site-Datenbank mit Modellen, das Übergeben von Informationen an eine View sowie das Erstellen und Erweitern von Templates erlangt. Die Herausforderungen haben den Lesern auch ein wenig über den Umgang mit Daten mithilfe von _Luxon_ beigebracht.

In unserem nächsten Artikel werden wir auf unserem Wissen aufbauen, indem wir HTML-Formulare und Code zur Formularverarbeitung erstellen, um die von der Seite gespeicherten Daten zu ändern.

## Siehe auch

- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug-Dokumentation)
- [Luxon](https://moment.github.io/luxon/#/) (Luxon-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
