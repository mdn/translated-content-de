---
title: "Express-Tutorial: Die lokale Bibliotheks-Website"
short-title: "1: Tutorial zur lokalen Bibliothek"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel gibt einen Überblick über das MDN Express-Tutorial und führt in die Beispiel-Website „Lokale Bibliothek“ ein, die wir auf den folgenden Seiten verwenden werden. Sie erfahren, welche Themen das Tutorial abdeckt, wie Sie beginnen, wie Sie um Hilfe bitten können und alles andere, was Sie wissen müssen, um Ihre erste serverseitige JavaScript-Anwendung zu erstellen und bereitstellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung zu Express</a>.
        Für die folgenden Artikel müssen Sie auch <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">eine Node-Entwicklungsumgebung eingerichtet haben</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einführung in die im Tutorial verwendete Beispielanwendung und Verständnis ermöglichen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen beim MDN „Lokale Bibliothek“ Express (Node) Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs einer lokalen Bibliothek verwendet werden könnte.

In dieser Reihe von Tutorial-Artikeln werden Sie:

- Das Tool _Express Application Generator_ verwenden, um ein Skelett für die Website und Anwendung zu erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank verwenden, um die Daten Ihrer Anwendung zu speichern.
- Routen erstellen, um verschiedene Informationen anzufordern, und Templates („Views“), um die Daten als HTML darzustellen, die im Browser angezeigt werden.
- Mit Formularen arbeiten.
- Ihre Anwendung in der Produktion bereitstellen.

Sie haben bereits einige dieser Themen kennengelernt und andere kurz angesprochen. Am Ende der Tutorial-Reihe sollten Sie ausreichend Wissen haben, um einfache Express-Anwendungen selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Tutorials erstellen und weiterentwickeln werden. Wie zu erwarten, besteht der Zweck der Website darin, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es so skaliert werden kann, dass es so viele oder so wenige Details wie nötig zeigt und fast alle Express-Funktionen demonstrieren kann. Wichtiger ist jedoch, dass wir Ihnen einen _geführten_ Weg durch die Funktionen zeigen können, die jede Website benötigt:

- In den ersten Tutorial-Artikeln definieren wir eine einfache _nur-Durchsuchen_-Bibliothek, die Bibliotheksmitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dadurch können wir die Operationen erkunden, die auf fast jeder Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Im Verlauf des Tutorials wird das Bibliotheksbeispiel auf natürliche Weise erweitert, um fortgeschrittenere Website-Funktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um neue Bücher zu erstellen, und damit demonstrieren, wie man Formulare verwendet und die Benutzerauthentifizierung unterstützt.

Obwohl dies ein sehr erweiterbares Beispiel ist, wird es aus einem Grund _Lokale_ Library genannt — wir hoffen, das Minimum an Informationen zu zeigen, das Ihnen hilft, schnell mit Express zu arbeiten. Daher speichern wir Informationen über Bücher, Kopien von Büchern, Autoren und andere wichtige Informationen. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek verleihen könnte, oder die Infrastruktur bereitstellen, die erforderlich ist, um mehrere Bibliotheksstandorte oder andere "große Bibliotheks"-Funktionen zu unterstützen.

## Ich komme nicht weiter, wo finde ich den Quellcode?

Während Sie das Tutorial bearbeiten, stellen wir Ihnen an jedem Punkt die passenden Code-Snippets zur Verfügung, die Sie kopieren und einfügen können, und es wird weiteren Code geben, den wir hoffen, dass Sie selbst erweitern werden (mit etwas Anleitung).

Anstatt alle Code-Snippets zu kopieren und einzufügen, versuchen Sie, sie abzutippen. Auf lange Sicht wird es Ihnen zugutekommen, da Sie beim nächsten Schreiben eines ähnlichen Codes mit dem Code vertrauter sein werden.

Wenn Sie nicht weiterkommen, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial).

> [!NOTE]
> Die spezifischen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgelistet.

## Zusammenfassung

Jetzt, da Sie ein wenig mehr über die _LocalLibrary_-Website und das, was Sie lernen werden, wissen, ist es Zeit, ein [Skeleton-Projekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) zu erstellen, um unser Beispiel darin unterzubringen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
