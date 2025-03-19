---
title: "Django Tutorial: Die lokale Bibliothekswebsite"
short-title: "1: Lokale Bibliothekstutorial"
slug: Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}

Der erste Artikel in unserer praktischen Tutorials-Serie erklärt, was Sie lernen werden, und bietet einen Überblick über die Beispiel-Website der "lokalen Bibliothek", die wir in den nachfolgenden Artikeln durcharbeiten und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django Einführung</a>.
        Für die folgenden Artikel müssen Sie außerdem eine <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Django-Entwicklungsumgebung einrichten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Einführung in die Beispielanwendung, die in diesem Tutorial verwendet wird, damit die Leser verstehen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Willkommen beim MDN "Lokale Bibliothek" Django-Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs einer lokalen Bibliothek verwendet werden könnte.

In dieser Serie von Tutorial-Artikeln werden Sie:

- Die Werkzeuge von Django nutzen, um eine Grundstruktur für eine Website und Anwendung zu erstellen.
- Den Entwicklungsserver starten und stoppen.
- Modelle erstellen, um die Daten Ihrer Anwendung darzustellen.
- Die Django-Administrationsseite nutzen, um die Daten Ihrer Website zu befüllen.
- Ansichten erstellen, um spezifische Daten auf unterschiedliche Anfragen hin abzurufen, und Templates, um die Daten als HTML zu rendern, das im Browser angezeigt wird.
- Mapper erstellen, um verschiedene URL-Muster mit spezifischen Ansichten zu verknüpfen.
- Benutzerautorisierung und Sessions hinzufügen, um das Verhalten und den Zugriff der Website zu steuern.
- Mit Formularen arbeiten.
- Testcode für Ihre App schreiben.
- Die Sicherheitsfunktionen von Django effektiv nutzen.
- Ihre Anwendung in die Produktion überführen.

Sie haben bereits über einige dieser Themen gelernt und andere kurz angerissen. Am Ende der Tutorials sollten Sie genug wissen, um einfache Django-Apps selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Verlauf dieser Tutorial-Serie erstellen und weiterentwickeln werden. Wie Sie erwarten würden, hat die Website das Ziel, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es skaliert werden kann, um so viel oder so wenig Detail zu zeigen, wie wir benötigen, und fast jedes Django-Feature zeigen kann. Noch wichtiger ist, dass es uns ermöglicht, einen _geführten_ Weg durch die wichtigsten Funktionalitäten im Django-Web-Framework zu bieten:

- In den ersten paar Tutorials definieren wir eine einfache _Nur-Durchsuchen_-Bibliothek, die Bibliotheksbenutzer nutzen können, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu erkunden, die auf fast jeder Website üblich sind: Inhalte aus einer Datenbank lesen und anzeigen.
- Während wir fortschreiten, erweitert sich das Bibliothek-Beispiel naturgemäß, um fortgeschrittenere Django-Funktionen zu demonstrieren. Zum Beispiel könnten wir die Bibliothek erweitern, um Benutzern zu ermöglichen, Bücher zu reservieren, und dies nutzen, um zu demonstrieren, wie man Formulare verwendet und die Benutzer-Authentifizierung unterstützt.

Auch wenn dies ein sehr erweiterbares Beispiel ist, heißt es _**Local**Library_ aus einem guten Grund — wir hoffen, die minimalen Informationen zu zeigen, die Ihnen helfen, schnell mit Django zu beginnen. Daher speichern wir Informationen über Bücher, Kopien von Büchern, Autoren und andere wichtige Informationen. Wir speichern jedoch keine Informationen über andere Gegenstände, die eine Bibliothek möglicherweise aufbewahrt, und bieten auch nicht die Infrastruktur, die benötigt wird, um mehrere Bibliotheksseiten oder andere "große Bibliothek"-Funktionen zu unterstützen.

## Ich bin festgefahren, wo bekomme ich den Quellcode?

Während Sie durch das Tutorial arbeiten, stellen wir Ihnen die entsprechenden Code-Snippets zur Verfügung, die Sie an jedem Punkt kopieren und einfügen können, und es wird anderen Code geben, den wir hoffen, dass Sie selbst (mit etwas Anleitung) erweitern.

Wenn Sie feststecken, können Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/django-locallibrary-tutorial) finden.

## Zusammenfassung

Jetzt, da Sie ein bisschen mehr über die _LocalLibrary_ Website und über das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Gerüstprojekt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}
