---
title: "Express-Tutorial: Die Website der lokalen Bibliothek"
slug: Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}

Der erste Artikel in unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die Beispiel-Website "lokale Bibliothek", die wir in den folgenden Artikeln entwickeln und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Express_Nodejs/Introduction">Einführung zu Express</a>.
        Für die folgenden Artikel müssen Sie außerdem ein <a href="/de/docs/Learn/Server-side/Express_Nodejs/development_environment">Node-Entwicklungsumgebung eingerichtet</a> haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Einführung der Beispielanwendung, die in diesem Tutorial verwendet wird, und es den Lesern ermöglichen, zu verstehen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen im MDN-"Lokale Bibliothek" Express (Node) Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs für eine lokale Bibliothek verwendet werden könnte.

In dieser Serie von Tutorial-Artikeln werden Sie:

- Das _Express Application Generator_-Tool verwenden, um ein Grundgerüst einer Website und Anwendung zu erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank verwenden, um die Daten Ihrer Anwendung zu speichern.
- Routen erstellen, um verschiedene Informationen anzufordern, und Vorlagen ("Views"), um die Daten als HTML zu rendern, die im Browser angezeigt werden sollen.
- Mit Formularen arbeiten.
- Ihre Anwendung in die Produktion überführen.

Sie haben einige dieser Themen bereits kennengelernt und andere kurz angesprochen. Am Ende der Tutorial-Serie sollten Sie genug wissen, um einfache Express-Anwendungen selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Verlauf dieser Serie von Tutorials erstellen und weiterentwickeln werden. Wie Sie erwarten, ist der Zweck der Website, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es skalierbar ist, um so viele oder so wenige Details zu zeigen, wie wir benötigen, und nahezu jede Express-Funktion demonstrieren kann. Wichtiger ist jedoch, dass es uns ermöglicht, einen _geführten_ Pfad durch die Funktionalität zu bieten, die Sie auf jeder Website benötigen:

- In den ersten paar Tutorial-Artikeln werden wir eine einfache _nur zum Durchsuchen_ Bibliothek definieren, die Bibliotheksmitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu erkunden, die auf nahezu jeder Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Im weiteren Verlauf erweitert sich das Bibliotheksbeispiel natürlich, um fortgeschrittenere Website-Funktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um die Erstellung neuer Bücher zu ermöglichen, und dies nutzen, um zu demonstrieren, wie man Formulare verwendet und die Benutzerauthentifizierung unterstützt.

Auch wenn dies ein sehr erweiterbares Beispiel ist, wird es aus einem Grund _**Lokale**Bibliothek_ genannt — wir hoffen, das Mindestmaß an Informationen zu zeigen, das Ihnen hilft, schnell mit Express zu starten. Daher speichern wir Informationen über Bücher, Kopien von Büchern, Autoren und andere wichtige Informationen. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek verleihen könnte, oder die Infrastruktur bereitstellen, die erforderlich ist, um mehrere Bibliotheksstandorte oder andere "große Bibliothek"-Funktionen zu unterstützen.

## Ich bin festgefahren, wo finde ich den Quellcode?

Während Sie das Tutorial durchgehen, stellen wir Ihnen die entsprechenden Code-Snippets zur Verfügung, die Sie an jedem Punkt kopieren und einfügen können, und es wird anderen Code geben, den wir hoffen, dass Sie selbst erweitern werden (mit einigen Anleitungen).

Anstatt alle Code-Snippets zu kopieren und einzufügen, versuchen Sie, sie abzutippen. Dies wird Ihnen langfristig zugutekommen, da Sie mit dem nächsten Mal, wenn Sie etwas Ähnliches schreiben, vertrauter sein werden.

Wenn Sie feststecken, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial).

> [!NOTE]
> Die spezifischen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgeführt.

## Zusammenfassung

Jetzt, da Sie ein bisschen mehr über die _LocalLibrary_-Website wissen und was Sie lernen werden, ist es an der Zeit, ein [Grundgerüstprojekt](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}
