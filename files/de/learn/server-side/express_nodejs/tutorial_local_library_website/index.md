---
title: "Express-Tutorial: Die Website der lokalen Bibliothek"
slug: Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}

Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und bietet einen Überblick über die "Lokale Bibliothek"-Beispielwebsite, die wir in den folgenden Artikeln bearbeiten und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Express_Nodejs/Introduction">Einführung in Express</a>.
        Für die folgenden Artikel müssen Sie auch eine <a href="/de/docs/Learn/Server-side/Express_Nodejs/development_environment">Node-Entwicklungsumgebung einrichten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Beispielanwendung, die in diesem Tutorial verwendet wird, vorstellen und den Lesern zeigen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Übersicht

Willkommen zum MDN "Lokale Bibliothek" Express (Node) Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs einer lokalen Bibliothek genutzt werden könnte.

In dieser Reihe von Tutorial-Artikeln werden Sie:

- Das Tool _Express Application Generator_ nutzen, um eine Basiswebsite und -anwendung zu erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank verwenden, um die Daten Ihrer Anwendung zu speichern.
- Routen erstellen, um verschiedene Informationen anzufordern, und Templates ("Views"), um die Daten als HTML darzustellen, das im Browser angezeigt wird.
- Mit Formularen arbeiten.
- Ihre Anwendung in die Produktion überführen.

Sie haben bereits einiges über diese Themen gelernt und andere kurz angerissen. Am Ende der Tutorial-Serie sollten Sie genug wissen, um einfache Express-Anwendungen selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Verlauf dieser Tutorial-Serie erstellen und weiterentwickeln werden. Wie zu erwarten, ist der Zweck der Website, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig gewählt, weil es skaliert, um so viele oder so wenig Details zu zeigen, wie wir benötigen, und fast jedes Express-Feature demonstrieren kann. Noch wichtiger ist, dass es uns ermöglicht, Ihnen einen _geführten_ Pfad durch die Funktionen zu bieten, die Sie für jede Website benötigen:

- In den ersten Tutorial-Artikeln definieren wir eine einfache _Nur-Browse_-Bibliothek, die von Bibliotheksmitgliedern verwendet werden kann, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu erkunden, die für fast jede Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir voranschreiten, erweitert sich das Bibliotheksbeispiel natürlich, um fortgeschrittenere Website-Features zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um neue Bücher erstellen zu können, und dieses nutzen, um zu zeigen, wie Formulare verwendet werden und wie man Benutzer-Authentifizierung unterstützt.

Auch wenn dies ein sehr erweiterbares Beispiel ist, wird es aus gutem Grund _**Lokale**Bibliothek_ genannt — wir hoffen, die minimalen Informationen zu zeigen, die Ihnen helfen, schnell mit Express loszulegen. Daher speichern wir Informationen über Bücher, Kopien von Büchern, Autoren und andere Schlüsselinformationen. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek verleihen könnte, oder die Infrastruktur bereitstellen, die notwendig wäre, um mehrere Bibliotheksstandorte oder andere "große Bibliothek"-Features zu unterstützen.

## Ich komme nicht weiter, wo finde ich den Quellcode?

Während Sie das Tutorial durchgehen, werden wir die entsprechenden Code-Snippets bereitstellen, die Sie bei jedem Punkt kopieren und einfügen können. Es wird auch anderen Code geben, den wir hoffen, dass Sie selbst erweitern (mit etwas Anleitung).

Anstatt alle Code-Snippets zu kopieren und einzufügen, versuchen Sie, sie abzutippen, das wird Ihnen auf lange Sicht Nutzen bringen, da Sie mit dem Code vertrauter sein werden, wenn Sie das nächste Mal etwas Ähnliches schreiben.

Wenn Sie nicht weiterkommen, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial).

> [!NOTE]
> Die spezifischen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgeführt.

## Zusammenfassung

Nun, da Sie ein wenig mehr über die _LocalLibrary_-Website und das, was Sie lernen werden, wissen, ist es an der Zeit, ein [Gerüstprojekt](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website) zu erstellen, um unser Beispiel darin unterzubringen.

{{PreviousMenuNext("Learn/Server-side/Express_Nodejs/development_environment", "Learn/Server-side/Express_Nodejs/skeleton_website", "Learn/Server-side/Express_Nodejs")}}
