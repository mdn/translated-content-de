---
title: Beispiel-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions/Examples
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Um zu veranschaulichen, wie die WebExtension-APIs verwendet werden, pflegen wir ein Repository mit Beispiel-Erweiterungen unter <https://github.com/mdn/webextensions-examples>. Dieser Artikel beschreibt, wie Sie diese Beispiele ausführen und listet die Beispiele zusammen mit den WebExtension-APIs, die sie demonstrieren.

Diese Beispiele funktionieren in Firefox Nightly: Die meisten funktionieren in früheren Versionen von Firefox, aber überprüfen Sie den Schlüssel [strict_min_version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) im manifest.json der Erweiterung, um sicherzustellen.

> [!WARNING]
> Einige Beispiele funktionieren nur auf bestimmten Domains oder Seiten. Einzelheiten zu eventuellen Einschränkungen finden Sie in der Readme-Datei jedes Beispiels. Keines der Beispiele funktioniert standardmäßig in privaten Browserfenstern, siehe [Erweiterungen im privaten Browsing](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) für Details.

Um diese Beispiele auszuprobieren, klonen Sie das Repository, installieren und führen Sie dann die Erweiterung mit einer der folgenden Optionen aus:

- Verwenden Sie die Funktion [Temporäres Add-on laden](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und öffnen Sie die Erweiterung aus ihrem Quellordner.
- Installieren Sie [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/), öffnen Sie den Quellordner der Erweiterung in der Befehlszeile und verwenden Sie `web-ext run`.

Die Erweiterung bleibt geladen, bis Sie Firefox neu starten.

> [!WARNING]
> Bitte reichen Sie diese WebExtension-Beispiele nicht bei addons.mozilla.org (AMO) ein; Sie müssen das Add-on WebExtension-Beispiele nicht signieren, um sie auszuführen.

Wenn Sie zum Repository beitragen möchten, [senden Sie uns einen Pull-Request.](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md)

{{WebExtAllExamples}}
