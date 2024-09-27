---
title: "Django Tutorial: Die lokale Bibliothekswebsite"
slug: Learn/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: 8e303ccc886cce64f1c2dfafaf710513c0b4fbb2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

Der erste Artikel in unserer praktischen Tutorialreihe erklärt, was Sie lernen werden, und bietet einen Überblick über die Beispiel-Website der "lokalen Bibliothek", die wir in den folgenden Artikeln erarbeiten und weiterentwickeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Django/Introduction">Django-Einführung</a>.
        Für die folgenden Artikel müssen Sie auch ein <a href="/de/docs/Learn/Server-side/Django/development_environment">Django-Entwicklungsumgebung</a> eingerichtet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Beispielanwendung vorzustellen, die in diesem Tutorial verwendet wird, und den Lesern zu ermöglichen, die behandelten Themen zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen zum MDN "Local Library" Django-Tutorial, in dem wir eine Website entwickeln, die zum Verwalten des Katalogs einer lokalen Bibliothek verwendet werden könnte.

In dieser Tutorialserie werden Sie:

- Djangos Werkzeuge verwenden, um eine Basis-Website und Anwendung zu erstellen.
- Den Entwicklungsserver starten und stoppen.
- Modelle erstellen, um die Daten Ihrer Anwendung darzustellen.
- Die Django-Admin-Seite nutzen, um die Daten Ihrer Website zu füllen.
- Views erstellen, um auf unterschiedliche Anfragen spezifische Daten abzurufen, und Templates, um die Daten als HTML darzustellen, die im Browser angezeigt werden.
- Mapper erstellen, um verschiedene URL-Muster mit spezifischen Views zu verknüpfen.
- Benutzerautorisierung und Sitzungen hinzufügen, um das Verhalten und den Zugriff der Website zu steuern.
- Mit Formularen arbeiten.
- Testcode für Ihre App schreiben.
- Die Sicherheit von Django effektiv nutzen.
- Ihre Anwendung in die Produktion überführen.

Einige dieser Themen haben Sie bereits gelernt, und andere wurden kurz angesprochen. Am Ende der Tutorialserie sollten Sie genug wissen, um einfache Django-Anwendungen selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Verlauf dieser Tutorialserie erstellen und weiterentwickeln werden. Wie zu erwarten, ist der Zweck der Website, einen Online-Katalog für eine kleine lokale Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchstöbern und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig gewählt, da es sich skalieren lässt, um so viel oder so wenig Details zu zeigen, wie wir benötigen, und es kann verwendet werden, um fast jedes Django-Feature vorzuführen. Wichtiger ist jedoch, dass es uns ermöglicht, einen _geführten_ Pfad durch die wichtigsten Funktionen im Django-Web-Framework zu bieten:

- In den ersten Tutorials werden wir eine einfache _reine-Betrachten_-Bibliothek definieren, die von Bibliotheksmitgliedern genutzt werden kann, um herauszufinden, welche Bücher verfügbar sind. Dies ermöglicht es uns, die Operationen zu erkunden, die auf fast jeder Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Während wir fortschreiten, erweitert sich das Bibliotheksbeispiel natürlicherweise, um fortgeschrittenere Django-Funktionen zu demonstrieren. Zum Beispiel können wir die Bibliothek erweitern, um Benutzern das Reservieren von Büchern zu erlauben und dies nutzen, um zu demonstrieren, wie Formulare verwendet werden und die Unterstützung der Benutzerauthentifizierung.

Obwohl dies ein sehr erweiterbares Beispiel ist, wird es _**Local**Library_ genannt — wir hoffen, die minimalen Informationen zu zeigen, die Ihnen helfen werden, schnell mit Django zu starten. Daher werden wir Informationen über Bücher, Kopien von Büchern, Autoren und andere Schlüsselinformationen speichern. Wir werden jedoch keine Informationen über andere Artikel speichern, die eine Bibliothek speichern könnte, oder die Infrastruktur bereitstellen, um mehrere Bibliotheksstandorte oder andere "große Bibliotheks"-Funktionen zu unterstützen.

## Ich komme nicht weiter, wo finde ich den Quellcode?

Während Sie das Tutorial durcharbeiten, werden wir die entsprechenden Code-Snippets bereitstellen, die Sie an jedem Punkt kopieren und einfügen können, und es wird weiteren Code geben, den wir hoffen, dass Sie mit unserer Anleitung selbst erweitern.

Falls Sie nicht weiterkommen, finden Sie die vollständig entwickelte Version der Website [hier auf GitHub](https://github.com/mdn/django-locallibrary-tutorial).

## Zusammenfassung

Jetzt, da Sie ein wenig mehr über die _LocalLibrary_-Website wissen und was Sie lernen werden, ist es an der Zeit, ein [Skelettprojekt](/de/docs/Learn/Server-side/Django/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}
