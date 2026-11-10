---
title: "Express-Tutorial: Die LocalLibrary-Website"
short-title: "1: LocalLibrary-Tutorial"
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website
l10n:
  sourceCommit: d775e1249487f1a7ab9a8a031c70ca71bc892d63
---

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Dieser Artikel gibt einen Überblick über das MDN-Express-Tutorial und stellt die Beispielwebsite „LocalLibrary“ vor, die wir auf den nächsten Seiten verwenden werden.
Sie erfahren, welche Themen das Tutorial behandelt, wie Sie beginnen und wo Sie Hilfe finden. Außerdem erfahren Sie alles, was Sie benötigen, um Ihre erste serverseitige JavaScript-Anwendung zu erstellen und bereitzustellen.

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
        Die in diesem Tutorial verwendete Beispielanwendung vorstellen und einen Überblick über die behandelten Themen geben.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen beim MDN-Express-Tutorial (Node) zu „LocalLibrary“. Darin entwickeln wir eine Website, mit der sich der Katalog einer örtlichen Bibliothek verwalten lässt.

In dieser Artikelreihe werden Sie:

- Das Grundgerüst einer Website und Anwendung erstellen.
- Den Node-Webserver starten und stoppen.
- Eine Datenbank verwenden, um die Daten Ihrer Anwendung zu speichern.
- Routen für die Abfrage verschiedener Informationen und Templates („Views“) erstellen, die Daten als HTML für die Anzeige im Browser rendern.
- Mit Formularen arbeiten.
- Ihre Anwendung für den Produktivbetrieb bereitstellen.

Einige dieser Themen kennen Sie bereits, andere wurden bisher nur kurz angesprochen. Am Ende der Artikelreihe sollten Sie genug wissen, um selbst einfache Express-Anwendungen zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Tutorialreihe erstellen und weiterentwickeln. Die Website soll, wie Sie vielleicht erwarten, einen Online-Katalog für eine kleine örtliche Bibliothek bereitstellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Wir haben dieses Beispiel bewusst gewählt: Es lässt sich nach Bedarf mit mehr oder weniger Details ausgestalten und eignet sich dazu, nahezu jede Funktion von Express zu demonstrieren. Vor allem ermöglicht es uns, Sie _Schritt für Schritt_ durch die Funktionen zu führen, die Sie für jede Website benötigen:

- In den ersten Artikeln definieren wir eine einfache Bibliothek, in der Mitglieder _nur stöbern_ können, um herauszufinden, welche Bücher verfügbar sind. So können wir die Vorgänge untersuchen, die fast jede Website benötigt: Inhalte aus einer Datenbank lesen und anzeigen.
- Im weiteren Verlauf lässt sich das Bibliotheksbeispiel auf natürliche Weise erweitern, um fortgeschrittenere Website-Funktionen zu demonstrieren. Beispielsweise können wir das Anlegen neuer Bucheinträge ermöglichen und daran zeigen, wie Formulare verwendet und Benutzerauthentifizierung unterstützt werden.

Obwohl dieses Beispiel sehr erweiterbar ist, heißt es aus gutem Grund _**Local**Library_: Wir möchten Ihnen nur die Informationen vermitteln, die Sie benötigen, um schnell mit Express loszulegen. Daher speichern wir Informationen über Bücher, Buchexemplare, Autoren und weitere wichtige Angaben. Informationen über andere Medien, die eine Bibliothek verleihen könnte, speichern wir dagegen nicht. Ebenso wenig stellen wir die Infrastruktur bereit, die für mehrere Bibliotheksstandorte oder andere Funktionen einer großen Bibliothek erforderlich wäre.

## Ich komme nicht weiter – wo finde ich den Quellcode?

Während Sie das Tutorial durcharbeiten, stellen wir Ihnen an den passenden Stellen Codeausschnitte zum Kopieren und Einfügen bereit. Anderen Code sollen Sie mit etwas Anleitung selbst erweitern.

Versuchen Sie, die Codeausschnitte selbst abzutippen, statt sie alle zu kopieren und einzufügen. Langfristig hilft Ihnen das, weil Sie mit dem Code besser vertraut sind, wenn Sie später etwas Ähnliches schreiben.

Falls Sie nicht weiterkommen, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/express-locallibrary-tutorial).

> [!NOTE]
> Die Versionen von Node, Express und den anderen Modulen, mit denen diese Dokumentation getestet wurde, sind in der Datei [package.json](https://github.com/mdn/express-locallibrary-tutorial/blob/main/package.json) des Projekts aufgeführt.

## Zusammenfassung

Nachdem Sie die _LocalLibrary_-Website und die Lernziele kennengelernt haben, ist es an der Zeit, ein [Projektgrundgerüst](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website) für unser Beispiel zu erstellen.

{{PreviousMenuNext("Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment", "Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
