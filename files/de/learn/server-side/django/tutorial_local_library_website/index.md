---
title: "Django-Tutorial: Die Local Library-Website"
slug: Learn/Server-side/Django/Tutorial_local_library_website
l10n:
  sourceCommit: 8e303ccc886cce64f1c2dfafaf710513c0b4fbb2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}

Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die Beispiel-Website "Local Library", die wir in den folgenden Artikeln entwickeln und erweitern werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Lesen Sie die <a href="/de/docs/Learn/Server-side/Django/Introduction">Django-Einführung</a>.
        Für die folgenden Artikel müssen Sie außerdem eine <a href="/de/docs/Learn/Server-side/Django/development_environment">Django-Entwicklungsumgebung einrichten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Einführung der Beispielanwendung, die in diesem Tutorial verwendet wird, und den Lesern ein Verständnis für die behandelten Themen zu ermöglichen.
      </td>
    </tr>
  </tbody>
</table>

## Überblick

Willkommen im MDN "Local Library" Django-Tutorial, in dem wir eine Website entwickeln, die zur Verwaltung des Katalogs einer örtlichen Bibliothek verwendet werden könnte.

In dieser Serie von Tutorials werden Sie:

- Die Werkzeuge von Django verwenden, um eine Grundstruktur für die Website und die Anwendung zu erstellen.
- Den Entwicklungsserver starten und stoppen.
- Modelle erstellen, um die Daten Ihrer Anwendung darzustellen.
- Die Django-Admin-Seite verwenden, um die Daten Ihrer Website zu bearbeiten.
- Ansichten erstellen, um auf verschiedene Anfragen spezifische Daten abzurufen, und Templates verwenden, um die Daten als HTML zu rendern zur Anzeige im Browser.
- Zuordnungen erstellen, um verschiedene URL-Muster mit spezifischen Ansichten zu verknüpfen.
- Benutzerautorisierung und Sitzungen hinzufügen, um das Verhalten und den Zugriff auf die Website zu steuern.
- Mit Formularen arbeiten.
- Testcode für Ihre App schreiben.
- Die Sicherheitsfunktionen von Django effektiv nutzen.
- Ihre Anwendung für den produktiven Einsatz bereitstellen.

Einige dieser Themen haben Sie bereits kennengelernt und andere kurz angesprochen. Am Ende der Tutorial-Serie sollten Sie genug wissen, um einfache Django-Apps selbst zu entwickeln.

## Die LocalLibrary-Website

_LocalLibrary_ ist der Name der Website, die wir im Laufe dieser Serie von Tutorials erstellen und weiterentwickeln werden. Wie Sie erwarten würden, besteht der Zweck der Website darin, einen Online-Katalog für eine kleine örtliche Bibliothek bereitzustellen, in dem Benutzer verfügbare Bücher durchsuchen und ihre Konten verwalten können.

Dieses Beispiel wurde sorgfältig ausgewählt, da es skalierbar ist und so viel oder so wenig Details zeigt, wie wir benötigen, und es kann fast jede Django-Funktion demonstrieren. Wichtiger ist aber, dass es uns erlaubt, einen _geführten_ Weg durch die wichtigsten Funktionen im Django-Webframework zu bieten:

- In den ersten Artikeln definieren wir eine einfache _nur-zum-Durchsuchen_ Bibliothek, die Mitglieder verwenden können, um herauszufinden, welche Bücher verfügbar sind. Dies erlaubt uns, die Operationen zu erforschen, die für nahezu jede Website üblich sind: Lesen und Anzeigen von Inhalten aus einer Datenbank.
- Wenn wir fortschreiten, erweitert sich das Bibliotheksbeispiel natürlich, um fortgeschrittenere Django-Funktionen zu demonstrieren. Beispielsweise können wir die Bibliothek erweitern, um Benutzern die Reservierung von Büchern zu erlauben und dies nutzen, um zu demonstrieren, wie Formulare verwendet werden und Benutzerauthentifizierung unterstützt wird.

Auch wenn dieses Beispiel sehr erweiterbar ist, wird es aus einem Grund _**Local**Library_ genannt — wir hoffen, die minimale Information zu zeigen, die Ihnen hilft, schnell mit Django zu beginnen. Daher speichern wir Informationen über Bücher, Exemplare von Büchern, Autoren und andere Schlüsselinformationen. Wir werden jedoch keine Informationen über andere Artikel speichern, die eine Bibliothek möglicherweise aufbewahrt, oder die Infrastruktur zur Unterstützung mehrerer Bibliotheksstandorte oder anderer "großer Bibliothek"-Funktionen bereitstellen.

## Ich bin festgefahren, wo kann ich den Quellcode finden?

Während Sie das Tutorial durcharbeiten, werden wir die entsprechenden Code-Snippets bereitstellen, die Sie an jedem Punkt kopieren und einfügen können, und es wird anderen Code geben, von dem wir hoffen, dass Sie ihn selbst erweitern (mit etwas Anleitung).

Falls Sie feststecken, können Sie die vollständig entwickelte Version der Website [hier auf GitHub finden](https://github.com/mdn/django-locallibrary-tutorial).

## Zusammenfassung

Da Sie nun etwas mehr über die _LocalLibrary_ Website und das, was Sie lernen werden, wissen, ist es Zeit, ein [Grundgerüstprojekt](/de/docs/Learn/Server-side/Django/skeleton_website) zu erstellen, um unser Beispiel zu enthalten.

{{PreviousMenuNext("Learn/Server-side/Django/development_environment", "Learn/Server-side/Django/skeleton_website", "Learn/Server-side/Django")}}
