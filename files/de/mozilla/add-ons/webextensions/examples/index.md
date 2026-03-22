---
title: Beispiel-Erweiterungen
slug: Mozilla/Add-ons/WebExtensions/Examples
l10n:
  sourceCommit: ee33efab7300d7bf7319921a22f2eb2b60df91da
---

Um zu veranschaulichen, wie die WebExtensions-APIs verwendet werden, pflegen wir ein Repository mit Beispiel-Erweiterungen unter <https://github.com/mdn/webextensions-examples>. In diesem Artikel wird beschrieben, wie Sie diese Beispiele ausführen können und welche WebExtensions-APIs sie demonstrieren.

Diese Beispiele funktionieren in Firefox Nightly: Die meisten funktionieren auch in älteren Versionen von Firefox, überprüfen Sie jedoch den [strict_min_version](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings)-Schlüssel in der manifest.json der Erweiterung, um sicherzugehen.

> [!WARNING]
> Einige Beispiele funktionieren nur auf bestimmten Domains oder Seiten. Die Readme-Datei jedes Beispiels enthält Details zu eventuellen Einschränkungen. Keines der Beispiele funktioniert standardmäßig in privaten Browserfenstern; siehe [Erweiterungen im privaten Modus](https://support.mozilla.org/en-US/kb/extensions-private-browsing#w_enabling-or-disabling-extensions-in-private-windows) für weitere Informationen.

Um diese Beispiele auszuprobieren, klonen Sie das Repository, dann installieren und führen Sie die Erweiterung mit einer der folgenden Methoden aus:

- Verwenden Sie die Funktion [Temporäres Add-on laden](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/) und öffnen Sie die Erweiterung aus ihrem Quellordner.
- Installieren Sie [`web-ext`](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/), öffnen Sie den Quellordner der Erweiterung in der Kommandozeile und verwenden Sie `web-ext run`.

Die Erweiterung bleibt geladen, bis Sie Firefox neu starten.

> [!WARNING]
> Reichen Sie diese Erweiterungsbeispiele nicht bei addons.mozilla.org (AMO) ein; Sie müssen die Beispiele nicht signieren, um sie auszuführen.

Wenn Sie zum Repository beitragen möchten, [senden Sie uns eine Pull-Anfrage](https://github.com/mdn/webextensions-examples/blob/main/CONTRIBUTING.md).

{{WebExtAllExamples}}
