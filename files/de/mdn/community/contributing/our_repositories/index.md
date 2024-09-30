---
title: MDN Web Docs Repositories
slug: MDN/Community/Contributing/Our_repositories
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{MDNSidebar}}

[MDN Web Docs](/) ist ein komplexes Projekt mit vielen beweglichen Teilen. Es ist ratsam, sich mit den verschiedenen Repositories der Projekte vertraut zu machen. Dieses Dokument soll Ihnen helfen, die verschiedenen Repositories (Repos) zu finden, die Sie benötigen, wenn Sie zu verschiedenen Teilen des MDN Web Docs Projekts beitragen.

## Repository-Stufen

### Stufe 1

Der Code in diesen Repositories ist zentral für das MDN Web Docs-Projekt und läuft auf von Mozilla betriebenen Domains.

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

Ein Stufe-1-Projekt sollte mindestens 3 Mitglieder haben, darunter mindestens zwei mit Administratorrechten.

### Stufe 2

Diese Repositories konzentrieren sich hauptsächlich auf unterstützende Inhalte wie Codebeispiele, den MDN Web Docs Lernbereich, Lokalisierung und Beispielprojekte. Beispiele beinhalten:

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

Ein Stufe-2-Projekt sollte mindestens 2 Mitglieder haben, darunter mindestens eines mit Administratorrechten.

### Stufe 3

Diese Repositories werden für die Projektplanung, die Dokumentation des Projekts selbst und die Einbindung der Community verwendet. Beispiele beinhalten:

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects)

Ein Stufe-3-Projekt benötigt einen Admin.

## Kern-Repos

- **Kerninhalt**: <https://github.com/mdn/content>. Das wichtigste Repo für Inhalte von MDN Web Docs — hier wird der gesamte Kerninhalt in Englisch gespeichert, und hier machen Sie alle standardmäßigen Änderungen an den Seiteninhalten.
- **MDN Web Docs Plattform**: <https://github.com/mdn/yari>. Hier wird die MDN Web Docs-Plattform gespeichert, und hier gehen Sie hin, wenn Sie Änderungen an unserer Seitenstruktur auf hoher Ebene oder der Rendering-Mechanik vornehmen möchten.
- **Daten zur Browser-Kompatibilität**: <https://github.com/mdn/browser-compat-data>. Hier werden die Daten gespeichert, die verwendet werden, um die Tabellen zur Browser-Kompatibilität zu erstellen, die auf unseren Referenzseiten zu finden sind ([Beispiel](/de/docs/Web/HTML/Element/progress#browser_compatibility)). Wenn Sie Informationen zur Browser-Kompatibilität von Web-Features haben — oder bereit und in der Lage sind, einige Recherchen und/oder Experimente durchzuführen — können Sie helfen, MDN's [Daten zur Browser-Kompatibilität](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) zu aktualisieren.
- **Interaktive Beispiele**: <https://github.com/mdn/interactive-examples>. Dieses Repo speichert die Beispielcodeblöcke, die am Anfang vieler unserer Referenzseiten zu finden sind ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)). Bearbeiten Sie diese Beispiele hier.
- **Bob** aka Builder of Bits: <https://github.com/mdn/bob>
  Dieses Repo speichert den Rendering-Code, der die schönen editierbaren und kopierbaren Beispiele erzeugt, die am Anfang vieler unserer Referenzseiten zu finden sind ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)).
- **Übersetzte Inhalte**: <https://github.com/mdn/translated-content>. Hier leben lokalisierte Inhalte. Gehen Sie hierhin, wenn Sie helfen möchten, Seiten in eine unserer [aktiv gepflegten Sprachen](https://github.com/mdn/translated-content#locales) zu übersetzen.
- **Workflows**: <https://github.com/mdn/workflows>
  Eine wachsende Sammlung von wiederverwendbaren GitHub Actions zur Verwendung in MDN Web Docs-Repositories.

## Codebeispiel

### Codebeispiele und Demos

[//]: # "TODO: UPDATE WITH REPO TRIAGE"

Die GitHub-Organisation von MDN Web Docs enthält eine große Anzahl von Beispiel-Repos. Diese enthalten im Allgemeinen eigenständige Codebeispiele, die häufig von unseren Seiten verlinkt werden. Gelegentlich finden Sie eines dieser Beispiele, das auf einer Seite mit einem Makroaufruf wie diesem eingebettet ist — `\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}`.

Denken Sie immer daran, dass, wenn Sie den Code auf einer beliebigen Seite aktualisieren, Sie auch das entsprechende Beispiel-Repo aktualisieren müssen.

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
