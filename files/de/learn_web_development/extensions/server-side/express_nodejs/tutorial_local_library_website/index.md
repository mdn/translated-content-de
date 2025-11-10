---
title: "Express Tutorial: Die Local Library Webseite"
short-title: "1: Local Library Tutorial"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: e89cf8c2d91de5ac01b7153f833eb8abc30364ad
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel gibt einen Überblick über das MDN Express Tutorial und stellt die "Local Library" Beispielfrontseite vor, die wir in den nächsten Seiten nutzen werden. Sie werden herausfinden, welche Themen das Tutorial behandelt, wie man anfängt, wo man Hilfe anfragen kann und alles andere, was Sie benötigen, um Ihre erste serverseitige JavaScript-Anwendung zu erstellen und bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express</a>.
        Für die folgenden Artikel müssen Sie außerdem <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">eine Node-Entwicklungsumgebung eingerichtet haben</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die in diesem Tutorial verwendete Beispielanwendung vorzustellen und den Lesern zu ermöglichen, zu verstehen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen beim MDN "Local Library" Express (Node) Tutorial, in dem wir eine Webseite entwickeln, die zur Verwaltung des Katalogs einer lokalen Bibliothek genutzt werden könnte.

In dieser Reihe von Tutorial-Artikeln werden Sie:

- Das _Express Application Generator_ Werkzeug verwenden, um eine Grundstruktur für die Website und Anwendung zu erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank verwenden, um die Daten Ihrer Anwendung zu speichern.
- Routen erstellen, um verschiedene Informationen anzufordern, und Templates ("Ansichten"), um die Daten als HTML zu rendern, die im Browser angezeigt werden.
- Mit Formularen arbeiten.
- Ihre Anwendung in der Produktion bereitstellen.

Sie haben bereits über einige dieser Themen gelernt und andere kurz angesprochen. Am Ende der Tutorial-Reihe sollten Sie genug wissen, um einfache Express-Apps selbst zu entwickeln.

## Die LocalLibrary Webseite

_LocalLibrary_ ist der Name der Webseite, die wir im Laufe dieser Tutorial-Reihe erstellen und weiterentwickeln werden. Wie man erwarten würde, besteht der Zweck der Webseite darin, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es sich anpassen lässt, um so viel oder wenig Detail zu zeigen, wie wir benötigen, und fast jedes Express-Feature gezeigt werden kann. Wichtiger ist, dass es uns ermöglicht, einen _geführten_ Pfad durch die Funktionalität zu bieten, die Sie in jeder Website benötigen:

- In den ersten paar Tutorial-Artikeln werden wir eine einfache _nur-durchsuchbare_ Bibliothek definieren, die Bibliotheksmitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu erforschen, die auf fast jeder Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir fortschreiten, erweitert das Bibliotheksbeispiel sich natürlich, um fortschrittlichere Website-Funktionen zu demonstrieren. Beispielsweise können wir die Bibliothek erweitern, um neue Bücher zu erstellen, und dies dazu nutzen, zu demonstrieren, wie man Formulare verwendet und Benutzer-Authentifizierung unterstützt.

Obwohl dies ein sehr erweiterbares Beispiel ist, wird es aus einem Grund _**Local**Library_ genannt — wir hoffen, die minimalen Informationen zu zeigen, die Ihnen helfen, schnell mit Express durchzustarten. Daher werden wir Informationen über Bücher, Buchkopien, Autoren und andere wichtige Informationen speichern. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek verleihen könnte, oder die Infrastruktur bereitstellen, die für mehrere Bibliotheksstandorte oder andere "große Bibliotheken"-Funktionen benötigt wird.

## Ich bin steckengeblieben, wo finde ich den Quellcode?

Während Sie das Tutorial durchlaufen, werden wir Ihnen die entsprechenden Code-Snippets bereitstellen, die Sie an jedem Punkt kopieren und einfügen können, und es wird weiteren Code geben, den wir hoffen, dass Sie selbst erweitern (mit ein wenig Anleitung).

Anstatt alle Code-Snippets zu kopieren und einzufügen, versuchen Sie, sie abzutippen. Es wird Ihnen auf lange Sicht zugutekommen, da Sie mit dem Code vertrauter sein werden, wenn Sie das nächste Mal etwas Ähnliches schreiben.

Wenn Sie stecken bleiben, können Sie die vollständig entwickelte Version der Webseite [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial) finden.

> [!NOTE]
> Die spezifischen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgeführt.

## Zusammenfassung

Jetzt, da Sie ein wenig mehr über die _LocalLibrary_ Webseite wissen und was Sie lernen werden, ist es an der Zeit, ein [Skeleton-Projekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
