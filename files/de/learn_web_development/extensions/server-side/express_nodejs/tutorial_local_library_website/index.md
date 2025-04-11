---
title: "Express Tutorial: Die lokale Bibliotheks-Website"
short-title: "1: Tutorial zur lokalen Bibliothek"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die Beispiel-Website "lokale Bibliothek", die wir im Verlauf der weiteren Artikel durchgehen und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Express-Einführung</a>.
        Für die folgenden Artikel müssen Sie außerdem eine <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Node-Entwicklungsumgebung einrichten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Einführung der Beispielanwendung, die in diesem Tutorial verwendet wird, und ein Verständnis dafür, welche Themen abgedeckt werden.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Willkommen beim MDN "Local Library" Express (Node) Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs einer lokalen Bibliothek genutzt werden könnte.

In dieser Serie von Tutorial-Artikeln werden Sie:

- Das _Express Application Generator_-Tool verwenden, um eine Grundstruktur für die Website und Anwendung zu erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank nutzen, um die Daten Ihrer Anwendung zu speichern.
- Routen erstellen, um verschiedene Informationen anzufordern, und Templates ("Views"), um die Daten als HTML zu rendern, das im Browser angezeigt wird.
- Mit Formularen arbeiten.
- Ihre Anwendung in die Produktion bereitstellen.

Einige dieser Themen haben Sie bereits kennengelernt und andere kurz angeschnitten. Am Ende der Tutorial-Serie sollten Sie genug Wissen erlangt haben, um einfache Express-Apps selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Serie von Tutorials erstellen und weiterentwickeln werden. Wie Sie erwarten würden, ist der Zweck der Website, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es so skaliert werden kann, dass es so viele oder so wenige Details zeigt, wie wir benötigen, und es ermöglicht, fast jedes Express-Feature zu demonstrieren. Noch wichtiger ist, dass es uns ermöglicht, einen _geführten_ Weg durch die Funktionalitäten zu bieten, die Sie auf jeder Website benötigen:

- In den ersten Tutorial-Artikeln werden wir eine einfache _Nur-Browsen_-Bibliothek definieren, die Bibliotheksmitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht uns, die Operationen zu erkunden, die auf fast jeder Website üblich sind: das Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir fortschreiten, wird das Bibliotheksbeispiel auf natürliche Weise erweitert, um fortgeschrittenere Website-Funktionen zu demonstrieren. Beispielsweise können wir die Bibliothek erweitern, um die Erstellung neuer Bücher zu ermöglichen und dies zu nutzen, um zu demonstrieren, wie man Formulare verwendet und die Benutzer-Authentifizierung unterstützt.

Auch wenn dies ein sehr erweiterbares Beispiel ist, heißt es aus einem Grund _**Local**Library_ — wir hoffen, die minimalen Informationen zu zeigen, die Ihnen helfen, schnell mit Express zu starten. Daher werden wir Informationen zu Büchern, Buchkopien, Autoren und anderen wichtigen Informationen speichern. Wir werden jedoch keine Informationen zu anderen Gegenständen speichern, die eine Bibliothek verleihen könnte, oder die Infrastruktur bereitstellen, die notwendig wäre, um mehrere Bibliotheksstandorte oder andere "große Bibliothek"-Funktionen zu unterstützen.

## Ich bin festgefahren, wo kann ich den Quellcode bekommen?

Während Sie das Tutorial durchlaufen, stellen wir Ihnen die entsprechenden Code-Snippets zur Verfügung, die Sie an jedem Punkt kopieren und einfügen können, und es wird weiteren Code geben, den wir hoffen, dass Sie selbst erweitern werden (mit etwas Anleitung).

Anstatt alle Code-Snippets zu kopieren und einzufügen, versuchen Sie, sie selbst abzutippen. Auf lange Sicht wird es Ihnen zugutekommen, da Sie mit dem Code besser vertraut sein werden, wenn Sie das nächste Mal etwas Ähnliches schreiben.

Falls Sie nicht weiterkommen, können Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial) finden.

> [!NOTE]
> Die spezifischen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgelistet.

## Zusammenfassung

Nun, da Sie etwas mehr über die _LocalLibrary_ Website und das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Grundgerüst-Projekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) zu erstellen, das unser Beispiel enthält.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
