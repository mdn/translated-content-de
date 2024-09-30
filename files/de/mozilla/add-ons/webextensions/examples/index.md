---
title: Beispielerweiterungen
slug: Mozilla/Add-ons/WebExtensions/Examples
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Um zu veranschaulichen, wie die WebExtension-APIs verwendet werden, pflegen wir ein Repository mit Beispielerweiterungen unter <https://github.com/mdn/webextensions-examples>. Dieser Artikel beschreibt, wie Sie diese Beispiele ausführen und listet die Beispiele zusammen mit den gezeigten WebExtension-APIs auf.

Diese Beispiele funktionieren in Firefox Nightly: die meisten funktionieren in früheren Versionen von Firefox, aber überprüfen Sie den [strict_min_version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel in der manifest.json der Erweiterung, um sicherzustellen.

> [!WARNING]
> Einige Beispiele funktionieren nur auf bestimmten Domains oder Seiten. Details zu Einschränkungen werden in der readme-Datei jedes Beispiels bereitgestellt. Keines der Beispiele funktioniert standardmäßig in privaten Browserfenstern, siehe [Erweiterungen im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) für Details.

Um diese Beispiele auszuprobieren, klonen Sie das Repository, installieren Sie die Erweiterung und führen Sie sie mit einer der folgenden Optionen aus:

- Verwenden Sie die Funktion [Load Temporary Add-on](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und öffnen Sie die Erweiterung aus ihrem Quellordner.
- Installieren Sie [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/), öffnen Sie den Quellordner der Erweiterung in der Befehlszeile und verwenden Sie `web-ext run`.

Die Erweiterung bleibt geladen, bis Sie Firefox neu starten.

> [!WARNING]
> Bitte reichen Sie diese WebExtension-Beispiele nicht bei addons.mozilla.org (AMO) ein; Sie müssen die Add-on WebExtension-Beispiele nicht signieren, um sie auszuführen.

Wenn Sie zum Repository beitragen möchten, [senden Sie uns eine Pull-Anfrage.](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md)

{{WebExtAllExamples}}
