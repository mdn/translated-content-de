---
title: MDN GitHub-Repositories
short-title: GitHub repositories
slug: MDN/Community/Our_repositories
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

MDN Web Docs ist ein komplexes Projekt mit vielen beweglichen Teilen. Es ist eine gute Idee, sich mit den verschiedenen Code-Repositories vertraut zu machen. Dieses Dokument beschreibt die Repositories (Repos), die Sie benötigen könnten, wenn Sie zu MDN Web Docs beitragen.

## Hauptrepositories

- [content](https://github.com/mdn/content)
  - : Hier wird der gesamte englische Inhalt der Seite verwaltet, und hier nehmen Sie alle Änderungen an Seiteninhalten, Prosa und Code-Beispielen auf den Seiten vor.
- [rari](https://github.com/mdn/rari)
  - : Das **Backend** der MDN Web Docs-Plattform. Hier arbeiten Sie, wenn Sie Änderungen an Seitenstrukturen, Templates und Rendering-Mechanismen vornehmen möchten.
- [yari](https://github.com/mdn/yari)
  - : Das **Frontend** der MDN Web Docs. Hier finden Sie Stile, Design- und Layout-Funktionen.
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
  - : Daten, die verwendet werden, um die Browser-Kompatibilitätstabellen auf unseren Referenzseiten zu generieren.
    Wenn Sie Informationen über die Browser-Kompatibilität von Web-Features haben – oder bereit und in der Lage sind, Recherchen und/oder Experimente durchzuführen – können Sie MDNs [Browser-Kompatibilitätsdaten](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) aktualisieren.
- [translated-content](https://github.com/mdn/translated-content)
  - : Hier befinden sich die lokalisierten Inhalte.
    Besuchen Sie dieses Repository, wenn Sie Seiten in eine unserer [aktiv gewarteten Lokalisierungen](https://github.com/mdn/translated-content#locales) übersetzen möchten.

### Infrastruktur

- [rumba](https://github.com/mdn/rumba)
  - : Ein Backend-System, das MDN Plus unterstützt.
- [workflows](https://github.com/mdn/workflows)
  - : Eine Sammlung von wiederverwendbaren GitHub Actions, die in MDN Web Docs-Repositories verwendet werden können.

### Planung und Koordination

Diese Repositories werden für die Projektplanung, die Dokumentation des Projekts selbst und Community-Projekte verwendet.

- [mdn/mdn](https://github.com/mdn/mdn)
  - : Projektvorschläge und Planungsprobleme werden hier verwaltet.
- [mdn-community](https://github.com/mdn/mdn-community)
  - : Dieses Repository beherbergt GitHub Discussions, wenn Autoren und Mitwirkende entscheiden müssen, wie sie inhaltliche oder technische Entscheidungen voranbringen.

## Code-Beispiele

Diese Repositories enthalten im Allgemeinen eigenständige Code-Beispiele, die zu groß sind oder nicht mit dem [`EmbedLiveSample`](/de/docs/MDN/Writing_guidelines/Page_structures/Live_samples#live_sample_macros)-Makro gerendert werden können.

> [!NOTE]
> Wenn Sie den Code auf einer bestimmten Seite aktualisieren, prüfen Sie, ob er in einem entsprechenden Beispiel-Repository referenziert ist, und stellen Sie sicher, dass Sie das Beispiel-Repository ebenfalls aktualisiert haben.

- [learning-area](https://github.com/mdn/learning-area)
- [dom-examples](https://github.com/mdn/dom-examples)
- [css-examples](https://github.com/mdn/css-examples)
- [webaudio-examples](https://github.com/mdn/webaudio-examples)
- [webassembly-examples](https://github.com/mdn/webassembly-examples)
- [indexeddb-examples](https://github.com/mdn/indexeddb-examples)
- [js-examples](https://github.com/mdn/js-examples)
- [html-examples](https://github.com/mdn/html-examples)
- [web-components-examples](https://github.com/mdn/web-components-examples)
- [webextension-examples](https://github.com/mdn/webextensions-examples)
- [pwa-examples](https://github.com/mdn/pwa-examples)
- [houdini-examples](https://github.com/mdn/houdini-examples)
- [headless-examples](https://github.com/mdn/headless-examples)
- [perf-examples](https://github.com/mdn/perf-examples)
