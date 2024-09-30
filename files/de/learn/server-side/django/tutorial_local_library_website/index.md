---
title: "Django-Tutorial: Die Local Library Website"
slug: Learn/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: 8e303ccc886cce64f1c2dfafaf710513c0b4fbb2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und bietet einen Überblick über die Beispiel-Website "Local Library", die wir in den folgenden Artikeln erstellen und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Django/Introduction">Django-Einführung</a>.
        Für die folgenden Artikel müssen Sie außerdem <a href="/de/docs/Learn/Server-side/Django/development_environment">eine Django-Entwicklungsumgebung eingerichtet haben</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Einführung der Beispielanwendung, die in diesem Tutorial verwendet wird, und den Lesern ein Verständnis darüber zu geben, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen beim MDN "Local Library" Django-Tutorial, in dem wir eine Website entwickeln, die möglicherweise zur Verwaltung des Katalogs einer lokalen Bibliothek verwendet wird.

In dieser Serie von Tutorial-Artikeln werden Sie:

- Die Werkzeuge von Django verwenden, um eine Grundstruktur der Website und der Anwendung zu erstellen.
- Den Entwicklungsserver starten und stoppen.
- Modelle erstellen, um die Daten Ihrer Anwendung zu repräsentieren.
- Die Django-Admin-Seite verwenden, um die Daten Ihrer Website zu füllen.
- Sichten (Views) erstellen, um spezifische Daten als Antwort auf unterschiedliche Anfragen abzurufen, und Vorlagen (Templates), um die Daten als HTML darzustellen, das im Browser angezeigt wird.
- Zuordnungen erstellen, um verschiedene URL-Muster mit spezifischen Sichten zu verknüpfen.
- Benutzerberechtigungen und Sitzungen hinzufügen, um das Verhalten und den Zugriff auf die Website zu steuern.
- Mit Formularen arbeiten.
- Testcode für Ihre App schreiben.
- Die Sicherheitsfunktionen von Django effektiv nutzen.
- Ihre Anwendung in einer Produktionsumgebung bereitstellen.

Sie haben bereits über einige dieser Themen gelernt und andere kurz angeschnitten. Am Ende der Tutorial-Serie sollten Sie genug Wissen haben, um selbst einfache Django-Anwendungen zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Serie von Tutorials erstellen und weiterentwickeln werden. Wie Sie erwarten würden, ist der Zweck der Website, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, weil es in der Lage ist, so viel oder so wenig Detail zu zeigen, wie wir benötigen, und es nahezu jede Django-Funktion demonstrieren kann. Noch wichtiger ist, dass es uns ermöglicht, einen _geführten_ Weg durch die wichtigsten Funktionalitäten im Django-Web-Framework zu bieten:

- In den ersten paar Tutorial-Artikeln werden wir eine einfache _durchsuchbare_ Bibliothek definieren, die Mitglieder der Bibliothek verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dies erlaubt uns, die Operationen zu erkunden, die für fast jede Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir fortschreiten, erweitert sich das Bibliothek-Beispiel natürlich, um fortgeschrittenere Django-Funktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um Benutzern die Reservierung von Büchern zu ermöglichen, und dies nutzen, um die Verwendung von Formularen und die Unterstützung von Benutzer-Authentifizierung zu demonstrieren.

Obwohl dies ein sehr anpassungsfähiges Beispiel ist, heißt es _**Local**Library_ aus einem Grund — wir hoffen, die minimalen Informationen zu zeigen, die Ihnen helfen, schnell mit Django loszulegen. Infolgedessen werden wir Informationen über Bücher, Kopien von Büchern, Autoren und andere Schlüsselinformationen speichern. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek aufbewahren könnte, oder die Infrastruktur bereitstellen, die benötigt wird, um mehrere Bibliotheksseiten oder andere "große Bibliotheks"-Funktionen zu unterstützen.

## Ich stecke fest, wo finde ich den Quellcode?

Während Sie das Tutorial durcharbeiten, stellen wir die entsprechenden Code-Snippets zur Verfügung, die Sie bei jedem Punkt kopieren und einfügen können. Es wird auch anderen Code geben, den Sie selbst erweitern sollen (mit etwas Anleitung).

Wenn Sie steckenbleiben, können Sie die vollständig entwickelte Version der Website [hier auf GitHub finden](https://github.com/mdn/django-locallibrary-tutorial).

## Zusammenfassung

Da Sie nun mehr über die _LocalLibrary_ Website und das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Grundgerüst-Projekt](/de/docs/Learn/Server-side/Django/skeleton_website) zu erstellen, um unser Beispiel aufzunehmen.

{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}
