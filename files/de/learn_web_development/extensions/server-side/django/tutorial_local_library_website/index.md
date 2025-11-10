---
title: "Django-Tutorial: Die Local Library-Website"
short-title: "1: Local Library-Tutorial"
slug: Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: e89cf8c2d91de5ac01b7153f833eb8abc30364ad
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}

Dieser Artikel bietet eine Übersicht über das MDN Django-Tutorial und stellt die „Local Library“-Beispielwebsite vor, die wir auf den nächsten Seiten verwenden werden. Sie erfahren, welche Themen das Tutorial abdeckt, wie Sie loslegen können, wie Sie Hilfe bekommen können und alles, was Sie benötigen, um Ihre erste serverseitige Python-App zu erstellen und bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Einführung in Django</a>.
        Für die nachfolgenden Artikel müssen Sie außerdem eine <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Django-Entwicklungsumgebung eingerichtet haben</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Einführung der Beispielanwendung, die in diesem Tutorial verwendet wird, und Verständnis der behandelten Themen ermöglichen.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Willkommen zum MDN „Local Library“ Django-Tutorial, in dem wir eine Website entwickeln, die zur Katalogverwaltung einer örtlichen Bibliothek verwendet werden könnte.

In dieser Tutorial-Reihe werden Sie:

- Die Werkzeuge von Django nutzen, um eine Grundgerüst-Website und -Anwendung zu erstellen.
- Den Entwicklungsserver starten und stoppen.
- Modelle erstellen, um die Daten Ihrer Anwendung darzustellen.
- Die Django-Admin-Website verwenden, um die Daten Ihrer Website zu füllen.
- Ansichten erstellen, um auf unterschiedliche Anfragen hin spezifische Daten abzurufen, und Templates, um die Daten als HTML darzustellen, das im Browser angezeigt wird.
- Mapper erstellen, um verschiedene URL-Muster mit spezifischen Ansichten zu verknüpfen.
- Benutzerberechtigungen und Sitzungen hinzufügen, um das Verhalten und den Zugriff auf die Website zu steuern.
- Mit Formularen arbeiten.
- Testcode für Ihre App schreiben.
- Die Sicherheitsfunktionen von Django effektiv nutzen.
- Ihre Anwendung in die Produktion bringen.

Sie haben über einige dieser Themen bereits gelernt und andere kurz gestreift. Am Ende der Tutorial-Reihe sollten Sie genug wissen, um selbst einfache Django-Apps zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Tutorial-Reihe erstellen und weiterentwickeln werden. Wie zu erwarten, ist der Zweck der Website, einen Online-Katalog für eine kleine örtliche Bibliothek bereitzustellen, in dem Benutzer durch verfügbare Bücher stöbern und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es so skaliert werden kann, dass es so viele oder so wenige Details zeigt, wie wir benötigen, und fast jede Django-Funktion demonstrieren kann. Noch wichtiger ist, dass es uns ermöglicht, einen _geführten_ Pfad durch die wichtigsten Funktionalitäten im Django-Web-Framework anzubieten:

- In den ersten paar Tutorial-Artikeln werden wir eine einfache _Nur-Anzeige_-Bibliothek definieren, die Bibliotheksmitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht uns, die Vorgänge zu erkunden, die fast jeder Website gemeinsam haben: das Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir Fortschritte machen, erweitert sich das Bibliotheksbeispiel auf natürliche Weise, um fortgeschrittenere Django-Funktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um Benutzern zu ermöglichen, Bücher zu reservieren, und dies nutzen, um zu zeigen, wie man Formulare verwendet und die Benutzerauthentifizierung unterstützt.

Obwohl dies ein sehr erweiterbares Beispiel ist, wird es _**Local**Library_ genannt – wir hoffen, die minimalen Informationen zu zeigen, die Ihnen helfen, schnell mit Django zu beginnen. Daher werden wir Informationen über Bücher, Buchexemplare, Autoren und andere Schlüsselinformationen speichern. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek aufbewahren könnte, oder die Infrastruktur bereitstellen, die erforderlich ist, um mehrere Bibliotheksseiten oder andere „große Bibliothek“-Funktionen zu unterstützen.

## Ich hänge fest, wo finde ich den Quellcode?

Während Sie das Tutorial durcharbeiten, werden wir die entsprechenden Code-Snippets bereitstellen, die Sie an jedem Punkt kopieren und einfügen können, und es wird anderen Code geben, den Sie mit etwas Anleitung selbst erweitern sollen.

Sollten Sie feststecken, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/django-locallibrary-tutorial).

## Zusammenfassung

Jetzt, da Sie ein bisschen mehr über die _LocalLibrary_ Website und das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Grundgerüstprojekt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}
