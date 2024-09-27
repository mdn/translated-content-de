---
title: MDN Web Docs Repositories
slug: MDN/Community/Contributing/Our_repositories
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

[MDN Web Docs](/) ist ein komplexes Projekt mit vielen beweglichen Teilen. Es ist sinnvoll, sich mit den verschiedenen Repositories der Projekte vertraut zu machen. Dieses Dokument soll Ihnen helfen, die verschiedenen Repositories (Repos) zu finden, die Sie benötigen, wenn Sie zu verschiedenen Teilen des MDN Web Docs-Projekts beitragen möchten.

## Repository-Ebenen

### Ebene 1

Der Code in diesen Repositories ist zentral für das MDN Web Docs-Projekt und läuft auf von Mozilla verwalteten Domains.

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

Ein Projekt der Ebene 1 sollte mindestens 3 Mitglieder haben, darunter mindestens zwei mit Admin-Rechten.

### Ebene 2

Diese Repositories konzentrieren sich hauptsächlich auf die Unterstützung von Inhalten wie Codebeispielen, den Lernbereich der MDN Web Docs, Lokalisierung und Beispielprojekten. Beispiele sind:

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

Ein Projekt der Ebene 2 sollte mindestens 2 Mitglieder haben, darunter mindestens eines mit Admin-Rechten.

### Ebene 3

Diese Repositories werden für die Projektplanung, die Dokumentation des Projekts selbst und das Engagement der Gemeinschaft genutzt. Beispiele sind:

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects)

Ein Projekt der Ebene 3 benötigt 1 Administrator.

## Core-Repos

- **Core-Inhalt**: <https://github.com/mdn/content>. Das wichtigste Repository für MDN Web Docs-Inhalte — hier wird der gesamte Kerninhalt auf Englisch gespeichert, und hier nehmen Sie alle Standardänderungen am Seiteninhalt vor.
- **MDN Web Docs Plattform**: <https://github.com/mdn/yari>. Hier wird die MDN Web Docs-Plattform gespeichert, und hier gehen Sie hin, wenn Sie Änderungen an unserer übergeordneten Seitenstruktur oder dem Rendering-Mechanismus vornehmen möchten.
- **Browser-Kompatibilitätsdaten**: <https://github.com/mdn/browser-compat-data>. Hier werden die Daten gespeichert, die zur Generierung der Tabellen zur Browser-Kompatibilität auf unseren Referenzseiten verwendet werden ([Beispiel](/de/docs/Web/HTML/Element/progress#browser_compatibility)). Wenn Sie Informationen zur Browser-Kompatibilität von Webfeatures haben — oder bereit und in der Lage sind, einige Recherchen durchzuführen und/oder zu experimentieren — können Sie helfen, die [Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) zu aktualisieren.
- **Interaktive Beispiele**: <https://github.com/mdn/interactive-examples>. Dieses Repo speichert die Beispiel-Codeblöcke, die sich auf vielen unserer Referenzseiten oben finden ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)). Bearbeiten Sie diese Beispiele hier.
- **Bob**, auch bekannt als Builder of Bits: <https://github.com/mdn/bob>
  Dieses Repo speichert den Render-Code, der die schönen, editierbaren, kopierbaren Beispiele erzeugt, die sich oben auf vielen unserer Referenzseiten befinden ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)).
- **Übersetzte Inhalte**: <https://github.com/mdn/translated-content>. Hier befinden sich die lokalisierten Inhalte. Gehen Sie hierhin, wenn Sie helfen möchten, Seiten in eine unserer [aktiven Lokalisierungen](https://github.com/mdn/translated-content#locales) zu übersetzen.
- **Workflows**: <https://github.com/mdn/workflows>
  Eine wachsende Sammlung von wiederverwendbaren GitHub Actions zur Verwendung in den MDN Web Docs-Repositories.

## Code-Beispiel

### Code-Beispiele und Demos

[//]: # "TODO: UPDATE WITH REPO TRIAGE"

Die GitHub-Organisation der MDN Web Docs enthält eine große Anzahl von Beispiel-Repositories. Diese enthalten in der Regel eigenständige Codebeispiele, die oft von unseren Seiten verlinkt sind. Gelegentlich finden Sie eines dieser Beispiele in eine Seite eingebunden durch einen Makroaufruf wie diesen — `\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}`.

Denken Sie immer daran, wenn Sie den Code auf einer bestimmten Seite aktualisieren, müssen Sie auch das entsprechende Beispiel-Repo aktualisieren.

- [**dom-examples**](https://github.com/mdn/dom-examples)
- [**css-examples**](https://github.com/mdn/css-examples)
- [**webaudio-examples**](https://github.com/mdn/webaudio-examples)
- [**webassembly-examples**](https://github.com/mdn/webassembly-examples)
- [**indexeddb-examples**](https://github.com/mdn/indexeddb-examples)
- [**js-examples**](https://github.com/mdn/js-examples)
- [**html-examples**](https://github.com/mdn/html-examples)
- [**web-components-examples**](https://github.com/mdn/web-components-examples)
- [**webextension-examples**](https://github.com/mdn/webextensions-examples)
- [**pwa-examples**](https://github.com/mdn/pwa-examples)
- [**houdini-examples**](https://github.com/mdn/houdini-examples)
- [**headless-examples**](https://github.com/mdn/headless-examples)
- [**perf-examples**](https://github.com/mdn/perf-examples)
