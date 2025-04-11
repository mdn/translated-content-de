---
title: "Django-Tutorial: Die Website der lokalen Bibliothek"
short-title: "1: Tutorial zur lokalen Bibliothek"
slug: Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}

Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die Beispiel-Website "Lokale Bibliothek", die wir in weiteren Artikeln durchlaufen und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Einführung in Django</a>.
        Für die folgenden Artikel sollten Sie ebenfalls <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">eine Django-Entwicklungsumgebung eingerichtet</a> haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Einführung der Beispielanwendung, die in diesem Tutorial verwendet wird, damit die Leser verstehen, welche Themen abgedeckt werden.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Willkommen beim MDN "Lokale Bibliothek" Django-Tutorial, in dem wir eine Website entwickeln, die verwendet werden könnte, um den Katalog einer lokalen Bibliothek zu verwalten.

In dieser Serie von Tutorial-Artikeln werden Sie:

- Djangos Werkzeuge nutzen, um eine Gerüst-Website und -Anwendung zu erstellen.
- Den Entwicklungsserver starten und stoppen.
- Modelle erstellen, um die Daten Ihrer Anwendung darzustellen.
- Die Django-Admin-Site nutzen, um die Daten Ihrer Site zu füllen.
- Ansichten erstellen, um spezifische Daten als Antwort auf verschiedene Anfragen abzurufen, und Vorlagen erstellen, die die Daten als HTML rendern, um sie im Browser anzuzeigen.
- Zuordnungen erstellen, um verschiedene URL-Muster mit spezifischen Ansichten zu verknüpfen.
- Benutzerautorisierung und Sitzungen hinzufügen, um das Verhalten und den Zugriff auf die Site zu steuern.
- Mit Formularen arbeiten.
- Testcode für Ihre App schreiben.
- Djangos Sicherheitsfunktionen effektiv nutzen.
- Ihre Anwendung in der Produktion bereitstellen.

Sie haben über einige dieser Themen bereits gelernt und andere kurz angesprochen. Am Ende der Tutorial-Serie sollten Sie genug wissen, um einfache Django-Anwendungen selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Tutorial-Serie erstellen und weiterentwickeln werden. Wie Sie erwarten würden, ist der Zweck der Website, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Nutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, weil es sich auf eine Art skalieren lässt, die so detailliert oder einfach ist, wie wir es benötigen, und es fast jede Django-Funktion demonstrieren kann. Noch wichtiger ist, dass es uns ermöglicht, einen _geführten_ Weg durch die wichtigsten Funktionen des Django-Web-Frameworks zu bieten:

- In den ersten wenigen Tutorial-Artikeln definieren wir eine einfache _nur-Durchsuchen_-Bibliothek, die Bibliotheksmitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dadurch können wir die Operationen erkunden, die fast allen Websites gemeinsam sind: das Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir fortschreiten, erweitert sich das Bibliotheksbeispiel natürlich, um fortgeschrittenere Django-Funktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um es Nutzern zu ermöglichen, Bücher zu reservieren, und dies nutzen, um zu demonstrieren, wie man Formulare verwendet und die Benutzerauthentifizierung unterstützt.

Obwohl dies ein sehr erweiterbares Beispiel ist, wird es _**Local**Library_ genannt — wir hoffen, die minimalen Informationen zu zeigen, die Ihnen helfen, schnell mit Django zu starten. Daher speichern wir Informationen über Bücher, Buchkopien, Autoren und andere Schlüsselinformationen. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek speichern könnte, oder die Infrastruktur bereitstellen, die benötigt wird, um mehrere Bibliotheksstandorte oder andere "große Bibliothek"-Funktionen zu unterstützen.

## Ich komme nicht weiter, wo kann ich den Quellcode bekommen?

Während Sie das Tutorial durchlaufen, werden wir die entsprechenden Code-Snippets bereitstellen, die Sie an jedem Punkt kopieren und einfügen können, und es wird anderen Code geben, den wir hoffen, dass Sie selbst erweitern (mit einiger Anleitung).

Wenn Sie nicht weiterkommen, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/django-locallibrary-tutorial).

## Zusammenfassung

Jetzt, da Sie ein bisschen mehr über die _LocalLibrary_-Website und das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Gerüstprojekt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}
