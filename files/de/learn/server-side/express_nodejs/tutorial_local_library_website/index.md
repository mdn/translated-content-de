---
title: "Express Tutorial: Die Local Library-Website"
slug: Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}

Der erste Artikel unserer praktischen Tutorial-Reihe erklärt, was Sie lernen werden, und bietet einen Überblick über die Beispiel-Website "Local Library", die wir in den folgenden Artikeln durchgehen und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Express_Nodejs/Introduction">Express Einführung</a>.
        Für die folgenden Artikel müssen Sie außerdem eine <a href="/de/docs/Learn/Server-side/Express_Nodejs/development_environment">Node-Entwicklungsumgebung eingerichtet haben</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einführung in die Beispielanwendung, die in diesem Tutorial verwendet wird, und den Lesern ermöglichen zu verstehen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen zum MDN "Local Library" Express (Node) Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs einer lokalen Bibliothek verwendet werden könnte.

In dieser Tutorial-Serie werden Sie:

- Das _Express Application Generator_-Tool verwenden, um eine Grundgerüst-Website und -Anwendung zu erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank verwenden, um die Daten Ihrer Anwendung zu speichern.
- Routen erstellen, um verschiedene Informationen anzufordern, und Templates ("Views"), um die Daten als HTML zu rendern, das im Browser angezeigt wird.
- Mit Formularen arbeiten.
- Ihre Anwendung in die Produktion überführen.

Sie haben bereits einige dieser Themen gelernt und andere kurz angesprochen. Am Ende der Tutorial-Serie sollten Sie genug wissen, um einfache Express-Apps selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Tutorial-Serie erstellen und weiterentwickeln werden. Wie Sie erwarten würden, ist der Zweck der Website, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es so weit oder detailliert skaliert werden kann, wie wir es benötigen, und fast jedes Express-Feature zeigen kann. Wichtiger noch, es ermöglicht uns, einen _geführten_ Weg durch die Funktionalität zu bieten, die Sie auf jeder Website benötigen:

- In den ersten Tutorials werden wir eine einfache _Nur-Browsing_-Bibliothek definieren, mit der Bibliotheksmitglieder feststellen können, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu erkunden, die auf fast jeder Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Im weiteren Verlauf wird das Bibliotheksbeispiel natürlich erweitert, um fortgeschrittenere Website-Funktionen zu demonstrieren. Beispielsweise können wir die Bibliothek erweitern, um die Erstellung neuer Bücher zu ermöglichen, und dies verwenden, um zu zeigen, wie man Formulare verwendet und die Benutzer-Authentifizierung unterstützt.

Auch wenn dies ein sehr erweiterbares Beispiel ist, heißt es aus einem Grund _**Local**Library_ – wir hoffen, das Minimum an Informationen bereitzustellen, das Ihnen hilft, schnell mit Express zu arbeiten. Daher werden wir Informationen zu Büchern, Buchkopien, Autoren und anderen wichtigen Informationen speichern. Wir werden jedoch keine Informationen zu anderen Gegenständen speichern, die eine Bibliothek verleihen könnte, oder die Infrastruktur bereitstellen, die benötigt wird, um mehrere Bibliotheksseiten oder andere "große Bibliothek"-Funktionen zu unterstützen.

## Ich bin festgefahren, wo finde ich den Quellcode?

Während Sie das Tutorial durcharbeiten, stellen wir Ihnen die entsprechenden Code-Snippets zum Kopieren und Einfügen an jedem Punkt bereit, und es wird anderen Code geben, den wir hoffen, dass Sie selbst erweitern (mit einigen Anleitungen).

Anstatt alle Code-Snippets zu kopieren und einzufügen, versuchen Sie, sie abzutippen. Das wird Ihnen auf lange Sicht nützen, da Sie mit dem Code vertrauter werden, wenn Sie das nächste Mal etwas Ähnliches schreiben.

Wenn Sie stecken bleiben, können Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial) finden.

> [!NOTE]
> Die spezifischen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgeführt.

## Zusammenfassung

Nun, da Sie ein wenig mehr über die _LocalLibrary_ Website und das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Grundgerüst-Projekt](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}
