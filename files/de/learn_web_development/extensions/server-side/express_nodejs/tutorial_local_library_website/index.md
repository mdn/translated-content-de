---
title: "Express Tutorial: Die Website der lokalen Bibliothek"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die Beispiel-Website "Lokale Bibliothek", die wir in den folgenden Artikeln entwickeln und erweitern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express</a>.
        Für die folgenden Artikel müssen Sie außerdem eine <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">Node-Entwicklungsumgebung eingerichtet haben</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Beispielanwendung, die in diesem Tutorial verwendet wird, vorzustellen und den Lesern zu ermöglichen, zu verstehen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen zum MDN "Lokale Bibliothek" Express (Node) Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs einer lokalen Bibliothek verwendet werden könnte.

In dieser Serie von Tutorial-Artikeln werden Sie:

- Das Werkzeug _Express Application Generator_ verwenden, um eine Grundgerüst-Website und -Anwendung zu erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank verwenden, um Ihre Anwendungsdaten zu speichern.
- Routen erstellen, um verschiedene Informationen anzufordern, und Vorlagen ("views"), um die Daten als HTML darzustellen, das im Browser angezeigt werden soll.
- Mit Formularen arbeiten.
- Ihre Anwendung in der Produktion bereitstellen.

Einige dieser Themen haben Sie bereits kennengelernt, und andere kurz angeschnitten. Am Ende der Tutorial-Serie sollten Sie genug wissen, um einfache Express-Anwendungen selbst zu entwickeln.

## Die LocalLibrary Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Serie von Tutorials erstellen und weiterentwickeln werden. Wie Sie erwarten würden, besteht der Zweck der Website darin, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es sich in dem Umfang skalieren lässt, den wir benötigen, und nahezu jede Express-Funktion darstellen kann. Noch wichtiger ist, dass es uns erlaubt, einen _geführten_ Weg durch die Funktionalitäten zu bieten, die Sie auf jeder Website benötigen werden:

- In den ersten Tutorial-Artikeln werden wir eine einfache _nur-Durchsuchen_-Bibliothek definieren, die Bibliotheksmitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dies erlaubt uns, die Vorgänge zu erkunden, die auf nahezu jeder Website üblich sind: das Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir fortschreiten, erweitert sich das Bibliotheksbeispiel auf natürliche Weise, um fortgeschrittenere Webseitenfunktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um das Erstellen neuer Bücher zu ermöglichen, und dies verwenden, um zu demonstrieren, wie Formulare verwendet werden und wie die Benutzer-Authentifizierung unterstützt wird.

Auch wenn dies ein sehr erweiterbares Beispiel ist, wird es _**Lokale**Bibliothek_ genannt – aus gutem Grund. Wir wollen die minimal benötigten Informationen zeigen, um Ihnen zu helfen, schnell mit Express zu starten. Deshalb speichern wir Informationen über Bücher, Kopien von Büchern, Autoren und andere wichtige Informationen. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek verleihen könnte, oder die Infrastruktur bereitstellen, die für die Unterstützung mehrerer Bibliotheksstandorte oder anderer "großer Bibliotheks"-Funktionen benötigt wird.

## Ich komme nicht weiter, wo finde ich den Quellcode?

Während Sie das Tutorial durchgehen, werden wir die entsprechenden Code-Schnipsel bereitstellen, die Sie an jedem Punkt kopieren und einfügen können, und es wird weiteren Code geben, den wir hoffen, dass Sie selbst erweitern (mit einigen Anleitungen).

Anstatt alle Code-Schnipsel zu kopieren und einzufügen, versuchen Sie, sie abzutippen. Es wird Ihnen auf lange Sicht zugute kommen, da Sie mit dem Code vertrauter sind, wenn Sie das nächste Mal etwas Ähnliches schreiben.

Wenn Sie nicht weiterkommen, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial).

> [!NOTE]
> Die spezifischen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgelistet.

## Zusammenfassung

Nun, da Sie ein bisschen mehr über die _LocalLibrary_ Website wissen und was Sie lernen werden, ist es an der Zeit, ein [Skeleton-Projekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
