---
title: "Django Tutorial: Die Website der lokalen Bibliothek"
slug: Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}

Der erste Artikel in unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die Beispiel-Website "Lokale Bibliothek", die wir in den folgenden Artikeln bearbeiten und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction">Django-Einführung</a>.
        Für die folgenden Artikel sollten Sie auch eine <a href="/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment">Django-Entwicklungsumgebung eingerichtet</a> haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einführung in die Beispielanwendung, die in diesem Tutorial verwendet wird, und es den Lesern ermöglichen zu verstehen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen beim MDN "Locale Bibliothek" Django-Tutorial, in dem wir eine Website entwickeln, die möglicherweise zur Verwaltung des Katalogs einer lokalen Bibliothek verwendet wird.

In dieser Serie von Tutorial-Artikeln werden Sie:

- Die Werkzeuge von Django verwenden, um eine Grundgerüst-Website und -Anwendung zu erstellen.
- Den Entwicklungsserver starten und stoppen.
- Modelle erstellen, um die Daten Ihrer Anwendung darzustellen.
- Die Django-Admin-Seite verwenden, um die Daten Ihrer Website zu füllen.
- Ansichten erstellen, um spezifische Daten als Antwort auf verschiedene Anfragen abzurufen, und Templates, um die Daten als HTML zu rendern, das im Browser angezeigt wird.
- Zuordnungen erstellen, um unterschiedliche URL-Muster mit spezifischen Ansichten zu verknüpfen.
- Benutzerautorisierung und Sitzungen hinzufügen, um das Verhalten und den Zugriff der Website zu steuern.
- Mit Formularen arbeiten.
- Testcode für Ihre App schreiben.
- Die Sicherheitsfunktionen von Django effektiv einsetzen.
- Ihre Anwendung in der Produktion bereitstellen.

Sie haben bereits über einige dieser Themen gelernt und andere kurz angesprochen. Am Ende der Tutorial-Serie sollten Sie genug wissen, um einfache Django-Apps selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Tutorial-Serie erstellen und weiterentwickeln werden. Wie Sie erwarten würden, besteht der Zweck der Website darin, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchstöbern und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, weil es skalierbar ist, um so viele oder so wenige Details zu zeigen, wie wir benötigen, und es kann fast jede Django-Funktion demonstrieren. Noch wichtiger ist, dass es uns ermöglicht, einen _geführten_ Weg durch die wichtigsten Funktionen im Django-Web-Framework zu bieten:

- In den ersten Artikeln des Tutorials definieren wir eine einfache _ausschließlich durchsuchen_ Bibliothek, die Mitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu erkunden, die für fast jede Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir fortschreiten, erweitert sich das Bibliothek-Beispiel natürlich, um fortgeschrittenere Django-Funktionen zu demonstrieren. Beispielsweise können wir die Bibliothek erweitern, um es Benutzern zu ermöglichen, Bücher zu reservieren, und dies verwenden, um zu demonstrieren, wie man Formulare verwendet und die Benutzer-Authentifizierung unterstützt.

Obwohl dies ein sehr erweiterbares Beispiel ist, wird es aus einem Grund _**Lokale** Bibliothek_ genannt — wir hoffen, die Mindestinformation zu zeigen, die Ihnen hilft, schnell mit Django in Gang zu kommen. Daher speichern wir Informationen über Bücher, Buchkopien, Autoren und andere Schlüsselinformationen. Wir speichern jedoch keine Informationen über andere Gegenstände, die eine Bibliothek speichern könnte, oder bieten die Infrastruktur, die erforderlich ist, um mehrere Bibliotheksstandorte oder andere "große Bibliothek"-Funktionen zu unterstützen.

## Ich bin festgefahren, wo kann ich den Quellcode finden?

Während Sie das Tutorial durcharbeiten, bieten wir geeignete Code-Schnipsel an, die Sie an jedem Punkt kopieren und einfügen können, und es gibt anderen Code, von dem wir hoffen, dass Sie ihn selbst erweitern (mit einigen Anleitungen).

Wenn Sie feststecken, können Sie die vollständig entwickelte Version der Website [hier auf GitHub finden](https://github.com/mdn/django-locallibrary-tutorial).

## Zusammenfassung

Jetzt, da Sie etwas mehr über die _LocalLibrary_ Website und das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Skelettprojekt](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Django/development_environment", "Learn_web_development/Extensions/Server-side/Django/skeleton_website", "Learn_web_development/Extensions/Server-side/Django")}}
