---
title: Aktualisieren von Add-ons für Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Schritten, die Sie unternehmen müssen, um Ihr bestehendes Add-on für die Kompatibilität mit Firefox 8 zu aktualisieren. Siehe [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8) für eine vollständige Liste aller Änderungen in Firefox 8.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/de/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Tool zur Überprüfung der Kompatibilität geprüft. Add-ons, die keine APIs verwenden, die in Firefox 8 geändert wurden, und keine binären Komponenten haben (die [für jede Hauptversion von Firefox neu kompiliert werden müssen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 8 funktionieren.

Sie sollten also zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt Arbeit erfordert.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 8 testen, auch wenn es automatisch aktualisiert wurde. Es gibt spezielle Fälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kommen Sie zurück zu dieser Seite und lesen Sie weiter.

## Hinweis zum Entwicklungsprozess

Es ist erwähnenswert, dass Firefox 8 beim Start jetzt auf Add-ons von Drittanbietern prüft und beim ersten Start eine Benutzeroberfläche anzeigt, mit der Benutzer entscheiden können, ob sie diese aktivieren möchten oder nicht. Wenn Sie Ihr Add-on in das Profilverzeichnis legen, um es zu testen, wird Firefox es beim ersten Start nicht automatisch aktivieren, sondern stattdessen diese Benutzeroberfläche zeigen.

Sie können dies vermeiden, indem Sie die Einstellung `extensions.autoDisableScopes` auf 14 setzen. Dies sollte nur zu Entwicklungs- und Testzwecken erfolgen.

## Schnittstellen wurden zusammengeführt

Im Rahmen unserer laufenden Bemühungen, die internen Abläufe von Gecko zu optimieren, wurden einige Schnittstellen zusammengeführt:

- `nsIDOMWindowInternal` wurde in `nsIDOMWindow` integriert. Die `nsIDOMWindowInternal`-Schnittstelle existiert noch, ist jedoch leer und wird in Firefox 9 vollständig entfernt. Sie sollten jeden Code aktualisieren, der auf die Existenz von `nsIDOMWindowInternal` angewiesen ist, sodass stattdessen `nsIDOMWindow` verwendet wird.
- Alle Unter-Schnittstellen von `nsISelection` wurden in die Basis-Schnittstelle `nsISelection` integriert. Falls Sie zufällig zuvor nach `nsISelection2` oder `nsISelection3` gesucht haben, sollten Sie Ihren Code aktualisieren.

## Verbesserung der Datumshandhabung

Jetzt, da das JavaScript [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt ISO 8601-Daten parsen kann, wurde das [`ISO8601DateUtils.jsm`](/de/docs/JavaScript_code_modules/ISO8601DateUtils.jsm)-Modul entfernt. Wenn Sie dieses Modul verwendet haben, sollten Sie Ihren Code aktualisieren, um stattdessen die Methoden von `Date` zu verwenden.

## Änderungen im DOM

Es gab einige Änderungen im DOM, die sich auf Add-ons auswirken:

### Änderungen an Selection

In der Vergangenheit gab [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) eine String-Darstellung der Auswahl zurück, anstatt das [`Selection`](/de/docs/Web/API/Selection)-Objekt selbst. Dieses nicht standardmäßige Verhalten wurde korrigiert.

### Potenzielle Namenskonflikte

Als die DOM File API hinzugefügt wurde, wurde ein neues globales Objekt namens [`File`](/de/docs/Web/API/File) hinzugefügt; dies kann mit Objekten in Ihren Skripten in Konflikt stehen. Wenn Sie globale Objekte mit dem Namen `File` haben, sollten Sie diese umbenennen.

Ähnlich wurde ein neues globales Objekt, `ChromeWorker`, eingeführt, um die Verwendung von Workers in Chrome-Code zu unterstützen. Falls Sie zufällig globale Objekte mit diesem Namen haben, sollten Sie diese umbenennen.

## Sicherheitsänderungen

Die Unterstützung für SSL 2.0 wurde entfernt. Dies sollte sich auf keine aktuellen Add-ons auswirken. Zur Information: Einige sehr alte Codes wurden entfernt, ebenso wie die Unterstützung für die Präferenzen `security.enable_ssl2` (die standardmäßig auf false gesetzt ist) und alle Präferenzen, die mit `security.ssl2` beginnen.

## Siehe auch

- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
