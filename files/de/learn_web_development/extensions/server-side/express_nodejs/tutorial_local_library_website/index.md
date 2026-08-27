---
title: "Express Tutorial: Die Website der Lokalen Bibliothek"
short-title: "1: Tutorial zur lokalen Bibliothek"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel bietet einen Überblick über das MDN Express-Tutorial und stellt die Beispiel-Website "Lokale Bibliothek" vor, die wir auf den nächsten Seiten verwenden werden. Sie erfahren, welche Themen das Tutorial behandelt, wie Sie starten, wie Sie um Hilfe bitten können und alles andere, was Sie benötigen, um Ihre erste serverseitige JavaScript-Anwendung zu erstellen und bereitzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction">Einführung in Express</a>. Für die folgenden Artikel müssen Sie außerdem <a href="/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment">eine Node-Entwicklungsumgebung einrichten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Beispielanwendung in diesem Tutorial vorzustellen und den Lesern zu ermöglichen, zu verstehen, welche Themen behandelt werden.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen beim MDN "Lokale Bibliothek" Express (Node) Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs einer lokalen Bibliothek verwendet werden könnte.

In dieser Reihe von Tutorial-Artikeln werden Sie:

- Das Werkzeug _Express Application Generator_ verwenden, um eine Grundgerüst-Website und -Anwendung zu erstellen.
- Den Node Webserver starten und stoppen.
- Eine Datenbank zur Speicherung der Daten Ihrer Anwendung verwenden.
- Routen erstellen, um unterschiedliche Informationen anzufordern, und Vorlagen ("Views"), um die Daten als HTML zu rendern, das im Browser angezeigt wird.
- Mit Formularen arbeiten.
- Ihre Anwendung für die Produktion bereitstellen.

Sie haben bereits einiges über diese Themen gelernt und andere kurz angesprochen. Am Ende der Tutorial-Serie sollten Sie genug wissen, um einfache Express-Apps selbst zu entwickeln.

## Die Website LocalLibrary

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Tutorial-Serie erstellen und weiterentwickeln werden. Wie erwartet ist es das Ziel der Website, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es sich skalieren lässt, um so viel oder so wenig Detail wie nötig zu zeigen, und es kann verwendet werden, um fast jedes Express-Feature vorzuführen. Wichtiger ist jedoch, dass es uns ermöglicht, einen _geführten_ Pfad durch die Funktionalität bereitzustellen, die Sie in jeder Website benötigen:

- In den ersten paar Tutorial-Artikeln werden wir eine einfache _nur-befahrbare_ Bibliothek definieren, die Mitglieder der Bibliothek nutzen können, um zu erfahren, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu erkunden, die für nahezu jede Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Im weiteren Verlauf wird das Bibliothek-Beispiel natürlicherweise erweitert, um fortgeschrittenere Website-Funktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um neue Bücher zu erstellen, und dieses verwenden, um zu demonstrieren, wie Formulare verwendet und die Benutzer-Authentifizierung unterstützt wird.

Obwohl dies ein sehr erweiterbares Beispiel ist, wird es aus einem bestimmten Grund _**Local**Library_ genannt — wir hoffen, die Mindestinformationen zu zeigen, die Ihnen helfen, schnell mit Express in Gang zu kommen. Infolgedessen speichern wir Informationen über Bücher, Kopien von Büchern, Autoren und andere wichtige Informationen. Wir werden jedoch keine Informationen über andere Gegenstände speichern, die eine Bibliothek verleihen könnte, oder die Infrastruktur bereitstellen, die notwendig ist, um mehrere Bibliotheksstandorte oder andere "große Bibliothek"-Funktionen zu unterstützen.

## Ich bin festgefahren, wo kann ich den Quellcode erhalten?

Während Sie das Tutorial durcharbeiten, werden wir Ihnen die entsprechenden Code-Snippets zur Verfügung stellen, die Sie an jedem Punkt kopieren und einfügen können, und es wird anderen Code geben, den Sie hoffentlich selbst erweitern (mit ein wenig Anleitung).

Statt alle Code-Snippets zu kopieren und einzufügen, versuchen Sie, sie abzutippen. Es wird Ihnen langfristig zugutekommen, da Sie beim nächsten Mal, wenn Sie etwas Ähnliches schreiben, vertrauter mit dem Code sind.

Wenn Sie feststecken, können Sie die vollständig entwickelte Version der Website [hier auf GitHub finden](https://github.com/mdn/express-locallibrary-tutorial).

> [!NOTE]
> Die spezifischen Versionen von Node, Express und den anderen Modulen, gegen die diese Dokumentation getestet wurde, sind im Projekt [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) aufgelistet.

## Zusammenfassung

Jetzt, da Sie ein bisschen mehr über die _LocalLibrary_ Website wissen und was Sie lernen werden, ist es Zeit, ein [Skeleton-Projekt](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
