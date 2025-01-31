---
title: MDN Web Docs Repositories
short-title: GitHub repositories
slug: MDN/Community/Our_repositories
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

[MDN Web Docs](/) ist ein komplexes Projekt mit vielen beweglichen Teilen. Es ist eine gute Idee, sich mit den verschiedenen Repositories des Projekts vertraut zu machen. Dieses Dokument soll Ihnen helfen, die verschiedenen Repositories (Repos) zu finden, die Sie benötigen könnten, wenn Sie zu verschiedenen Teilen des MDN Web Docs-Projekts beitragen möchten.

## Repository-Kategorien

### Kategorie 1

Der Code in diesen Repositories ist zentral für das MDN Web Docs-Projekt und läuft auf von Mozilla betriebenen Domains.

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

Ein Projekt der Kategorie 1 sollte mindestens 3 Mitglieder haben, darunter mindestens zwei mit Administratorrechten.

### Kategorie 2

Diese Repositories konzentrieren sich hauptsächlich auf die Unterstützung von Inhalten wie Codebeispiele, den MDN Web Docs-Lernbereich, Lokalisierung und Beispielprojekte. Beispiele sind:

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

Ein Projekt der Kategorie 2 sollte mindestens 2 Mitglieder haben, darunter mindestens eines mit Administratorrechten.

### Kategorie 3

Diese Repositories werden für die Projektplanung, die Dokumentation des Projekts selbst und die Community-Einbindung verwendet. Beispiele sind:

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects)

Ein Projekt der Kategorie 3 benötigt 1 Administrator.

## Kern-Repos

- **Kerninhalt**: <https://github.com/mdn/content>. Das wichtigste Repo für MDN Web Docs-Inhalte — hier wird der gesamte zentrale englische Inhalt der Seite gespeichert, und hier nehmen Sie alle Standardänderungen an den Seiteninhalten vor.
- **MDN Web Docs Plattform**: <https://github.com/mdn/yari>. Hier wird die MDN Web Docs-Plattform gespeichert, und hier gehen Sie hin, wenn Sie Änderungen an unserer übergeordneten Seitenstruktur oder der Rendering-Mechanik vornehmen möchten.
- **Browser-Kompatibilitätsdaten**: <https://github.com/mdn/browser-compat-data>. Hier werden die Daten gespeichert, die zur Erstellung der Browser-Kompatibilitätstabellen auf unseren Referenzseiten verwendet werden ([Beispiel](/de/docs/Web/HTML/Element/progress#browser_compatibility)). Wenn Sie Informationen über die Browser-Kompatibilität von Webfunktionen haben — oder bereit und in der Lage sind, einige Recherchen und/oder Experimente durchzuführen — können Sie helfen, die [Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) zu aktualisieren.
- **Interaktive Beispiele**: <https://github.com/mdn/interactive-examples>. Dieses Repo speichert die Beispiel-Codeblöcke, die am Anfang vieler unserer Referenzseiten zu finden sind ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)). Bearbeiten Sie diese Beispiele hier.
- **Bob**, auch bekannt als Builder of Bits: <https://github.com/mdn/bob>
  Dieses Repo speichert den Rendering-Code, der die schönen editierbaren, kopierbaren Beispiele produziert, die am Anfang vieler unserer Referenzseiten zu finden sind ([Beispiel](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)).
- **Übersetzte Inhalte**: <https://github.com/mdn/translated-content>. Hier befinden sich die lokalisierten Inhalte. Gehen Sie hierher, wenn Sie helfen möchten, Seiten in eine unserer [aktiv betreuten Sprachen](https://github.com/mdn/translated-content#locales) zu übersetzen.
- **Workflows**: <https://github.com/mdn/workflows>
  Eine wachsende Sammlung von wiederverwendbaren GitHub-Aktionen für die Verwendung in MDN Web Docs-Repositories.

## Codebeispiel

### Codebeispiele und Demos

[//]: # "TODO: UPDATE WITH REPO TRIAGE"

Die MDN Web Docs GitHub-Organisation enthält eine große Anzahl von Beispiel-Repos. Diese enthalten in der Regel eigenständige Codebeispiele, die zu groß sind oder nicht mit dem [`EmbedLiveSample`](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples#live_sample_macros) Makro gerendert werden können. Diese Beispiele werden mithilfe eines Makroaufrufs wie diesem — `\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}` in die Inhaltsseiten eingebettet.

Vergessen Sie nie, wenn Sie den Code auf einer bestimmten Seite aktualisieren, dass Sie auch das entsprechende Beispielrepo aktualisieren müssen.

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
