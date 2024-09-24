---
title: "Express-Tutorial Teil 5: Anzeigender Bibliotheksdaten"
slug: Learn/Server-side/Express_Nodejs/Displaying_data
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}

Wir sind nun bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der [LocalLibrary](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website) Website anzeigen. Die Seiten umfassen eine Startseite, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Dabei werden wir praktische Erfahrungen im Abrufen von Datensätzen aus der Datenbank und im Verwenden von Templates sammeln.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Abschließen der vorherigen Tutorial-Themen (einschließlich <a href="/de/docs/Learn/Server-side/Express_Nodejs/routes">Express-Tutorial Teil 4: Routen und Controller</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man asynchrone Datenbankoperationen mit <code>async</code>/<code>await</code> durchführt, wie man die Pug-Template-Sprache verwendet, und wie man Daten aus der URL in unseren Controller-Funktionen erhält.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

In unseren vorherigen Tutorial-Artikeln haben wir [Mongoose-Modelle](/de/docs/Learn/Server-side/Express_Nodejs/mongoose) definiert, die wir zum Interagieren mit einer Datenbank verwenden können, und haben einige anfängliche Bibliotheksdatensätze erstellt. Wir haben dann [alle benötigten Routen erstellt](/de/docs/Learn/Server-side/Express_Nodejs/routes) für die LocalLibrary-Website, aber mit "Dummy-Controller"-Funktionen (dies sind Skelett-Controller-Funktionen, die nur eine "nicht implementiert"-Nachricht zurückgeben, wenn eine Seite aufgerufen wird).

Der nächste Schritt besteht darin, geeignete Implementierungen für die Seiten bereitzustellen, die unsere Bibliotheksinformationen _anzeigen_ (wir werden uns in späteren Artikeln mit der Implementierung von Seiten beschäftigen, die Formulare zum Erstellen, Aktualisieren oder Löschen von Informationen enthalten). Dies beinhaltet, die Controller-Funktionen zu aktualisieren, um Datensätze mit unseren Modellen abzurufen, und Templates zu definieren, um diese Informationen den Benutzern anzuzeigen.

Wir beginnen mit einer Übersicht/einem Einführungsthema, das erklärt, wie man asynchrone Operationen in Controller-Funktionen verwaltet und wie man Templates mit Pug schreibt. Dann bieten wir Implementierungen für jede unserer Hauptseiten im "Nur-Lesen"-Modus mit einer kurzen Erklärung zu besonderen oder neuen Funktionen an, die sie verwenden.

Am Ende dieses Artikels sollten Sie ein gutes Verständnis davon haben, wie Routen, asynchrone Funktionen, Ansichten und Modelle in der Praxis funktionieren.

## Tutorielle Unterartikel zur Anzeige von Bibliotheksdaten

Die folgenden Unterartikel beschreiben den Prozess, um die verschiedenen Funktionen hinzuzufügen, die erforderlich sind, um die benötigten Webseiten anzuzeigen.
Sie müssen jeden dieser Artikel der Reihe nach lesen und durcharbeiten, bevor Sie zum nächsten übergehen.

1. [Template-Einführung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Template_primer)
2. [Das LocalLibrary-Basistemplate](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/LocalLibrary_base_template)
3. [Startseite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Home_page)
4. [Buchlisten-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_list_page)
5. [BookInstance-Listen-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_list_page)
6. [Datumsformatierung mit luxon](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment)
7. [Autorenlisten-Seite und Genre-Listen-Seite Herausforderung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page)
8. [Genre-Detail-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Genre_detail_page)
9. [Buchdetail-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Book_detail_page)
10. [Autorendetail-Seite](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_detail_page)
11. [BookInstance-Detail-Seite und Herausforderung](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data/BookInstance_detail_page_and_challenge)

## Zusammenfassung

Wir haben nun alle "Nur-Lesen"-Seiten für unsere Seite erstellt: eine Startseite, die die Anzahl der Instanzen jedes unserer Modelle anzeigt, sowie Listen- und Detailseiten für unsere Bücher, Buchinstanzen, Autoren und Genres. Dabei haben wir viel grundlegendes Wissen über Controller, das Verwalten der Flusskontrolle bei Verwendung von asynchronen Operationen, das Erstellen von Ansichten mit _Pug_, die Abfrage der Webseite-Datenbank mit Modellen, das Übergeben von Informationen an eine Ansicht und das Erstellen und Erweitern von Templates gesammelt. Die Herausforderungen haben den Lesern auch etwas über die Handhabung von Datumsangaben mit _Luxon_ beigebracht.

In unserem nächsten Artikel werden wir auf unserem Wissen aufbauen und HTML-Formulare sowie Formularkodierung erstellen, um mit der Modifikation der Daten, die von der Seite gespeichert werden, zu beginnen.

## Siehe auch

- [Verwendung von Template-Engines mit Express](https://expressjs.com/en/guide/using-template-engines.html) (Express-Dokumentation)
- [Pug](https://pugjs.org/api/getting-started.html) (Pug-Dokumentation)
- [Luxon](https://moment.github.io/luxon/#/) (Luxon-Dokumentation)

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/routes", "Learn/Server-side/Express_Nodejs/forms", "Learn/Server-side/Express_Nodejs")}}
