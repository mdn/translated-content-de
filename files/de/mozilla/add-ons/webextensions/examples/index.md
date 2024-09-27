---
title: Beispielerweiterungen
slug: Mozilla/Add-ons/WebExtensions/Examples
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Um zu veranschaulichen, wie die WebExtension-APIs genutzt werden können, pflegen wir ein Repository mit Beispielerweiterungen unter <https://github.com/mdn/webextensions-examples>. Dieser Artikel beschreibt, wie Sie diese Beispiele ausführen und listet die Beispiele zusammen mit den demonstrierten WebExtension-APIs auf.

Diese Beispiele funktionieren in Firefox Nightly: Die meisten funktionieren in früheren Versionen von Firefox, aber überprüfen Sie den [strict_min_version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) Schlüssel in der manifest.json der Erweiterung, um sicherzugehen.

> [!WARNING]
> Einige Beispiele funktionieren nur auf bestimmten Domains oder Seiten. Details zu etwaigen Einschränkungen finden Sie in der Readme-Datei jedes Beispiels. Keines der Beispiele funktioniert standardmäßig in privaten Fenstern, siehe [Erweiterungen im Privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) für Details.

Um diese Beispiele auszuprobieren, klonen Sie das Repository, dann installieren und führen Sie die Erweiterung mit einer der folgenden Optionen aus:

- Verwenden Sie die Funktion [Temporäres Add-on laden](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und öffnen Sie die Erweiterung aus ihrem Quellordner.
- Installieren Sie [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/), öffnen Sie den Quellordner der Erweiterung in der Kommandozeile und verwenden Sie `web-ext run`.

Die Erweiterung bleibt geladen, bis Sie Firefox neu starten.

> [!WARNING]
> Bitte reichen Sie diese WebExtension-Beispiele nicht bei addons.mozilla.org (AMO) ein; es ist nicht notwendig, die Zusatz-WebExtension-Beispiele zu signieren, um sie auszuführen.

Wenn Sie zum Repository beitragen möchten, [senden Sie uns einen Pull-Request.](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md)

{{WebExtAllExamples}}
