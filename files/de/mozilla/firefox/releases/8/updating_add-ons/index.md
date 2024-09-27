---
title: Aktualisierung von Add-ons für Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Schritten, die Sie unternehmen müssen, um Ihr bestehendes Add-on für die Kompatibilität mit Firefox 8 zu aktualisieren. Siehe [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8) für eine vollständige Liste aller Änderungen in Firefox 8.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsprüfwerkzeug überprüft. Add-ons, die keine APIs verwenden, die in Firefox 8 geändert wurden, und keine binären Komponenten enthalten (die [für jede wichtige Firefox-Version neu kompiliert werden müssen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), wurden automatisch auf AMO aktualisiert, um anzuzeigen, dass sie in Firefox 8 funktionieren.

Sie sollten also zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt überarbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 8 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Hinweis zum Entwicklungsprozess

Es ist erwähnenswert, dass Firefox 8 beim Start nun auf am ersten Start auf Add-ons von Drittanbietern prüft und eine Benutzeroberfläche anzeigt, mit der Benutzer entscheiden können, ob sie diese aktivieren möchten. Wenn Sie Ihr Add-on in das Profilverzeichnis einfügen, um es zu testen, wird es von Firefox beim ersten Start nicht automatisch aktiviert, sondern zeigt stattdessen diese Schnittstelle an.

Sie können dies vermeiden, indem Sie die Einstellung `extensions.autoDisableScopes` auf 14 setzen. Dies sollte nur für Entwicklungs- und Testzwecke erfolgen.

## Schnittstellen wurden zusammengeführt

Im Rahmen unserer laufenden Bemühungen, die internen Abläufe von Gecko zu optimieren, wurden einige Schnittstellen zusammengeführt:

- `nsIDOMWindowInternal` wurde in `nsIDOMWindow` integriert. Die Schnittstelle `nsIDOMWindowInternal` existiert zwar noch, ist aber leer und wird in Firefox 9 vollständig entfernt. Sie sollten jeden Code aktualisieren, der auf die Existenz von `nsIDOMWindowInternal` angewiesen ist, sodass er stattdessen nach `nsIDOMWindow` sucht.
- Alle Unterschnittstellen von `nsISelection` wurden in die Basisschnittstelle `nsISelection` integriert. Falls Sie bisher auf `nsISelection2` oder `nsISelection3` verwiesen haben, sollten Sie Ihren Code aktualisieren.

## Datumshandhabung verbessert

Da das JavaScript [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt nun ISO 8601-Daten parsen kann, wurde das [`ISO8601DateUtils.jsm`](/de/docs/JavaScript_code_modules/ISO8601DateUtils.jsm) Code-Modul entfernt. Wenn Sie dieses Code-Modul verwendet haben, sollten Sie Ihren Code aktualisieren, um stattdessen die Methoden von `Date` zu verwenden.

## Änderungen im DOM

Es gab einige Änderungen im DOM, die Add-ons betreffen:

### Änderungen an der Auswahl

In der Vergangenheit gab [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) eine stringifizierte Version der Auswahl zurück, anstatt des [`Selection`](/de/docs/Web/API/Selection) Objekts selbst. Dieses Verhalten war nicht standardgemäß und wurde korrigiert.

### Mögliche Namenskonflikte

Als die DOM File API hinzugefügt wurde, wurde ein neuer globaler Wert namens [`File`](/de/docs/Web/API/File) hinzugefügt; dies kann mit Objekten in Ihren Skripten kollidieren. Wenn Sie globale Werte namens `File` haben, sollten Sie diese umbenennen.

Ein ähnlicher neuer globaler Wert, [`ChromeWorker`](/de/docs/Web/API/ChromeWorker), wurde eingeführt, um die Verwendung von Workers aus Chrome-Code zu unterstützen. Falls Sie zufällig globale Werte mit diesem Namen haben, sollten Sie diese umbenennen.

## Sicherheitsänderungen

Die Unterstützung für SSL 2.0 wurde entfernt. Dies sollte keine aktuellen Add-ons betreffen. Zur Referenz wurden jedoch einige sehr alte Codes sowie die Unterstützung für die Einstellungen `security.enable_ssl2` (die standardmäßig auf false gesetzt ist) und alle mit "`security.ssl2.`" beginnenden Einstellungen entfernt.

## Siehe auch

- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
