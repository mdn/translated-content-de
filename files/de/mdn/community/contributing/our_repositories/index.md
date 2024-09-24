---
title: MDN Web Docs Repositories
slug: MDN/Community/Contributing/Our_repositories
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

[MDN Web Docs](/) ist ein komplexes Projekt mit vielen beweglichen Teilen. Es ist eine gute Idee, sich mit den verschiedenen Repositories der Projekte vertraut zu machen. Dieses Dokument soll Ihnen helfen, die verschiedenen Repositories (Repos) zu finden, die Sie benötigen könnten, wenn Sie zu verschiedenen Teilen des MDN Web Docs Projekts beitragen.

## Repository-Stufen

### Stufe 1

Der Code in diesen Repositories ist zentral für das MDN Web Docs Projekt und wird auf von Mozilla gehosteten Domains ausgeführt.

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

Ein Projekt der Stufe 1 sollte mindestens 3 Mitglieder haben, darunter mindestens zwei mit Administratorberechtigungen.

### Stufe 2

Diese Repositories konzentrieren sich hauptsächlich auf unterstützende Inhalte wie Codebeispiele, den Learn-Bereich von MDN Web Docs, Lokalisierung und Beispielprojekte. Beispiele umfassen:

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

Ein Projekt der Stufe 2 sollte mindestens 2 Mitglieder haben, darunter mindestens eines mit Administratorberechtigungen.

### Stufe 3

Diese Repositories werden für die Projektplanung, Dokumentation des Projekts selbst und die Einbindung der Community verwendet. Beispiele umfassen:

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects)

Ein Projekt der Stufe 3 benötigt 1 Administrator.

## Kern-Repos

- **Kerninhalt**: <https://github.com/mdn/content>. Das wichtigste Repository für MDN Web Docs Inhalte — hier wird der gesamte englische Kerninhalt der Website gespeichert, und hier nehmen Sie alle standardmäßigen Änderungen an den Seiteninhalten vor.
- **MDN Web Docs Plattform**: <https://github.com/mdn/yari>. Hier wird die MDN Web Docs Plattform gespeichert, und hier gehen Sie hin, wenn Sie Änderungen an unserer übergeordneten Seitenstruktur oder der Render-Mechanik vornehmen möchten.
- **Browser-Kompatibilitätsdaten**: <https://github.com/mdn/browser-compat-data>. Hier werden die Daten gespeichert, die zur Erstellung der Browser-Kompatibilitätstabellen auf unseren Referenzseiten verwendet werden ([Beispiel](/de/docs/Web/HTML/Element/progress#browser_compatibility)). Wenn Sie Informationen über die Browser-Kompatibilität von Webfeatures haben — oder bereit und in der Lage sind, einige Recherchen und/oder Experimente durchzuführen — können Sie helfen, die [Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) von MDN zu aktualisieren.
- **Interaktive Beispiele**: <https://github.com/mdn/interactive-examples>. Dieses Repository speichert die Codeblöcke, die sich oben auf vielen unserer Referenzseiten befinden ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)). Bearbeiten Sie diese Beispiele hier.
- **Bob** auch bekannt als Builder of Bits: <https://github.com/mdn/bob>
  Dieses Repository speichert den Rendering-Code, der die schönen editierbaren, kopierbaren Beispiele erzeugt, die sich oben auf vielen unserer Referenzseiten befinden ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)).
- **Übersetzte Inhalte**: <https://github.com/mdn/translated-content>. Hier befinden sich die lokalisierten Inhalte. Gehen Sie hierhin, wenn Sie helfen möchten, Seiten in eine unserer [aktiv gepflegten Lokalitäten](https://github.com/mdn/translated-content#locales) zu übersetzen.
- **Workflows**: <https://github.com/mdn/workflows>
  Eine wachsende Sammlung wiederverwendbarer GitHub Actions zur Verwendung in den MDN Web Docs Repositories.

## Codebeispiel

### Codebeispiele und Demos

[//]: # "TODO: MIT REPO-TRIAGE AKTUALISIEREN"

Die GitHub-Organisation von MDN Web Docs enthält eine große Anzahl von Beispiel-Repositories. Diese enthalten im Allgemeinen eigenständige Codebeispiele, die oft von unseren Seiten aus verlinkt sind, aber gelegentlich finden Sie eines dieser Beispiele auf einer Seite eingebettet, indem ein Makroaufruf wie dieser verwendet wird — `\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}`.

Denken Sie immer daran, wenn Sie den Code auf einer bestimmten Seite aktualisieren, müssen Sie auch das entsprechende Beispiel-Repository aktualisieren.

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
