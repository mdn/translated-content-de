---
title: Aktualisierung von Add-ons für Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen zu den Schritten, die Sie unternehmen müssen, um Ihr bestehendes Add-on für die Kompatibilität mit Firefox 8 zu aktualisieren. Eine vollständige Liste aller Änderungen in Firefox 8 finden Sie unter [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) vertrieben wird, wurde es von einem automatisierten Kompatibilitätsprüfungstool überprüft. Add-ons, die keine in Firefox 8 geänderten APIs verwenden und keine Binärkomponenten enthalten (die [für jede Hauptversion von Firefox neu kompiliert werden müssen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 8 funktionieren.

Sie sollten also zuerst AMO besuchen und überprüfen, ob Ihr Add-on irgendwelche Arbeiten erfordert.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 8 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Sie Änderungen vornehmen müssen, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Hinweis zum Entwicklungsprozess

Es ist erwähnenswert, dass Firefox 8 beim Start jetzt beim ersten Start nach Add-ons von Drittanbietern sucht und eine Benutzeroberfläche anzeigt, die es den Benutzern ermöglicht, zu entscheiden, ob sie diese aktivieren möchten. Wenn Sie Ihr Add-on zur Testzwecken in das Profilverzeichnis einfügen, wird es von Firefox beim ersten Start nicht automatisch aktiviert, sondern es wird stattdessen diese Oberfläche angezeigt.

Dies können Sie vermeiden, indem Sie die Einstellung `extensions.autoDisableScopes` auf 14 setzen. Dies sollte nur zu Entwicklungs- und Testzwecken getan werden.

## Schnittstellen wurden zusammengelegt

Als Teil unserer laufenden Bemühungen, die internen Abläufe von Gecko zu vereinfachen, wurden einige Schnittstellen zusammengelegt:

- `nsIDOMWindowInternal` wurde in `nsIDOMWindow` zusammengeführt. Die `nsIDOMWindowInternal`-Schnittstelle existiert noch, ist jedoch leer und wird in Firefox 9 vollständig entfernt. Sie sollten Ihren Code, der auf das Vorhandensein von `nsIDOMWindowInternal` angewiesen ist, so aktualisieren, dass er stattdessen nach `nsIDOMWindow` sucht.
- Alle Unter-Schnittstellen von `nsISelection` wurden in die Basis-Schnittstelle `nsISelection` zusammengeführt. Sollten Sie bislang `nsISelection2` oder `nsISelection3` verwendet haben, sollten Sie Ihren Code aktualisieren.

## Verbesserte Datumsbehandlung

Da das JavaScript-Objekt [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) nun ISO 8601-Daten parsen kann, wurde das [`ISO8601DateUtils.jsm`](/de/docs/JavaScript_code_modules/ISO8601DateUtils.jsm)-Modul entfernt. Wenn Sie dieses Modul verwendet haben, sollten Sie Ihren Code auf die Methoden von `Date` umstellen.

## Änderungen am DOM

Es gab einige Änderungen im DOM, die sich auf Add-ons auswirken:

### Änderungen bei der Selektion

In der Vergangenheit gab [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) eine String-Version der Selektion zurück, statt des [`Selection`](/de/docs/Web/API/Selection)-Objekts selbst. Dieses nicht standardmäßige Verhalten wurde korrigiert.

### Mögliche Namenskonflikte

Als die DOM-File-API hinzugefügt wurde, wurde ein neues Globales [`File`](/de/docs/Web/API/File) hinzugefügt; dies kann mit Objekten in Ihren Skripten in Konflikt geraten. Wenn Sie globale Objekte namens `File` haben, sollten Sie diese umbenennen.

Ähnlich wurde ein neues Globales, `ChromeWorker`, eingeführt, um die Verwendung von Arbeitern aus Chrome-Code zu unterstützen. Sollten Sie zufällig globale Objekte mit diesem Namen haben, sollten Sie diese umbenennen.

## Sicherheitsänderungen

Die Unterstützung für SSL 2.0 wurde entfernt. Dies sollte keine aktuellen Add-ons betreffen. Zur Information: Ein sehr alter Code wurde entfernt, ebenso wie die Unterstützung für die Präferenzen `security.enable_ssl2` (die standardmäßig auf false gesetzt ist) sowie alle Präferenzen, die mit `security.ssl2` beginnen.

## Siehe auch

- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
