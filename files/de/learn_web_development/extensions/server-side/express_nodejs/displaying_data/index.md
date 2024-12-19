---
title: "Express Tutorial Teil 5: Bibliotheksdaten anzeigen"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Wir sind nun bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der [LocalLibrary](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website) Website anzeigen. Die Seiten umfassen eine Startseite, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Auf dem Weg dorthin werden wir praktische Erfahrung darin sammeln, wie man Datensätze aus der Datenbank abruft und Templates verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vervollständigen Sie die vorherigen Tutorial-Themen (einschließlich <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes">Express Tutorial Teil 4: Routen und Controller</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Verstehen, wie man asynchrone Datenbankoperationen mit <code>async</code>/<code>await</code> durchführt, wie man die Pug-Templating-Sprache verwendet und wie man Daten aus der URL in unseren Controller-Funktionen erhält.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In unseren vorherigen Tutorial-Artikeln haben wir [Mongoose-Modelle](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose) definiert, die wir zur Interaktion mit einer Datenbank verwenden können, und einige erste Bibliotheksdatensätze erstellt. Wir haben dann [alle benötigten Routen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes) für die LocalLibrary-Website erstellt, jedoch mit "Dummy-Controller"-Funktionen (das sind Skelett-Controller-Funktionen, die nur eine "nicht implementiert"-Nachricht zurückgeben, wenn eine Seite aufgerufen wird).

Der nächste Schritt ist, ordentliche Implementierungen für die Seiten bereitzustellen, die unsere Bibliotheksinformationen _anzeigen_ (in späteren Artikeln werden wir uns mit der Implementierung von Seiten befassen, die Formulare zum Erstellen, Aktualisieren oder Löschen von Informationen enthalten). Dies beinhaltet die Aktualisierung der Controller-Funktionen, um Datensätze mit unseren Modellen abzurufen, und die Definition von Templates, um diese Informationen den Benutzern anzuzeigen.

Wir beginnen mit der Bereitstellung von Überblicks-/Einführungsthemen, die erklären, wie man asynchrone Operationen in Controller-Funktionen verwaltet und wie man Templates mit Pug schreibt. Dann stellen wir Implementierungen für jede unserer Haupt-"Nur-Lese"-Seiten mit einer kurzen Erklärung spezieller oder neuer Funktionen bereit, die sie verwenden.

Am Ende dieses Artikels sollten Sie ein gutes End-to-End-Verständnis dafür haben, wie Routen, asynchrone Funktionen, Ansichten und Modelle in der Praxis funktionieren.

## Tutorial-Unterartikel zur Anzeige von Bibliotheksdaten

Die folgenden Unterartikel behandeln den Prozess der Hinzufügung der verschiedenen Funktionen, die erforderlich sind, um die benötigten Website-Seiten anzuzeigen. Sie müssen jeden dieser Unterartikel nacheinander lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Einführung in Templates](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [Das LocalLibrary-Basis-Template](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [Buchlisten-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [Buchinstanz-Listen-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [Datumsformatierung mit luxon](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [Autorenlisten-Seite und Genreliste-Seitenherausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [Genre-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [Buch-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [Autor-Detailseite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [Buchinstanz-Detailseite und Herausforderung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Zusammenfassung

Wir haben nun alle "Nur-Lese"-Seiten für unsere Seite erstellt: eine Startseite, die die Anzahl der Instanzen jedes unserer Modelle anzeigt, sowie Listen- und Detailseiten für unsere Bücher, Buchinstanzen, Autoren und Genres. Auf diesem Weg haben wir viel grundlegendes Wissen über Controller, die Steuerung des Flusses bei der Verwendung asynchroner Operationen, die Erstellung von Ansichten mit _Pug_, das Abfragen der Website-Datenbank mit Modellen, das Übergeben von Informationen an eine Ansicht sowie das Erstellen und Erweitern von Templates erworben. Die Herausforderungen werden den Lesern auch etwas über den Umgang mit Daten mit _Luxon_ beigebracht haben.

In unserem nächsten Artikel werden wir auf unserem Wissen aufbauen und HTML-Formulare und Formularverarbeitungscode erstellen, um die von der Seite gespeicherten Daten zu ändern.

## Siehe auch

- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug-Dokumentation)
- [Luxon](https://moment.github.io/luxon/#/) (Luxon-Dokumentation)

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/routes", "Learn_web_development/Extensions/Server-side/Express_Nodejs/forms", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
