---
title: "Express Tutorial: Die Website der Lokalen Bibliothek"
short-title: "1: Tutorial zur lokalen Bibliothek"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Der erste Artikel in unserer praktischen Tutorialreihe erklärt, was Sie lernen werden, und gibt einen Überblick über die Beispiel-Website der "lokalen Bibliothek", die wir in den folgenden Artikeln durchgehen und erweitern werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express-Einführung</a>.
        Für die folgenden Artikel müssen Sie außerdem eine <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Node-Entwicklungsumgebung eingerichtet haben</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Einführung in die Beispielanwendung, die in diesem Tutorial verwendet wird, sowie das Verständnis der behandelten Themen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen zum MDN-Tutorial "Lokale Bibliothek" mit Express (Node), in dem wir eine Website entwickeln, die möglicherweise zur Verwaltung des Katalogs einer lokalen Bibliothek verwendet wird.

In dieser Reihe von Tutorial-Artikeln werden Sie:

- Das Tool _Express Application Generator_ nutzen, um eine Grundstruktur für Website und Anwendung zu erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank verwenden, um die Daten Ihrer Anwendung zu speichern.
- Routen zum Anfordern verschiedener Informationen erstellen und Vorlagen ("Views") nutzen, um die Daten als HTML zu rendern, das im Browser angezeigt wird.
- Mit Formularen arbeiten.
- Ihre Anwendung in der Produktion bereitstellen.

Einige dieser Themen haben Sie bereits kennengelernt und andere kurz angeschnitten. Am Ende der Tutorialreihe sollten Sie genug wissen, um einfache Express-Anwendungen selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Tutorialreihe erstellen und weiterentwickeln werden. Wie Sie erwarten würden, besteht der Zweck der Website darin, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchstöbern und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es so skalierbar ist, dass es je nach Bedarf mehr oder weniger Details zeigen kann und fast jede Express-Funktion demonstriert. Noch wichtiger ist, dass es uns ermöglicht, einen _geführten_ Weg durch die Funktionalität der benötigten Website zu bieten:

- In den ersten Tutorial-Artikeln werden wir eine einfache _nur-browsende_ Bibliothek definieren, die Bibliotheksmitglieder nutzen können, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu untersuchen, die für fast jede Website üblich sind: das Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir fortschreiten, erweitert sich das Bibliotheksbeispiel natürlich, um fortgeschrittenere Website-Funktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um neue Bücher zu erstellen, und dies nutzen, um zu zeigen, wie man Formulare verwendet und die Benutzer-Authentifizierung unterstützt.

Obwohl dies ein sehr erweiterbares Beispiel ist, wird es aus gutem Grund _**Lokale**Bibliothek_ genannt — wir hoffen, die minimale Information zu zeigen, die Ihnen hilft, schnell mit Express zu starten. Daher werden wir Informationen über Bücher, Buchkopien, Autoren und andere wichtige Informationen speichern. Wir speichern jedoch keine Informationen über andere Artikel, die eine Bibliothek verleihen könnte, und bieten keine Infrastruktur zur Unterstützung mehrerer Bibliotheksstandorte oder anderer "großer" Bibliotheksfunktionen.

## Ich bin steckengeblieben, wo finde ich den Quellcode?

Während Sie das Tutorial durcharbeiten, werden wir die entsprechenden Code-Snippets bereitstellen, die Sie an jedem Punkt kopieren und einfügen können, und es wird weiteren Code geben, den wir hoffen, dass Sie selbst erweitern (mit etwas Anleitung).

Statt alle Code-Snippets zu kopieren und einzufügen, versuchen Sie, sie abzutippen. Das wird Ihnen auf lange Sicht nützen, da Sie mit dem Code vertrauter werden, das nächste Mal, wenn Sie etwas Ähnliches schreiben.

Wenn Sie nicht weiterkommen, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial).

> [!NOTE]
> Die speziellen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgeführt.

## Zusammenfassung

Da Sie jetzt ein wenig mehr über die _LocalLibrary_-Website und das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Skelettprojekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
