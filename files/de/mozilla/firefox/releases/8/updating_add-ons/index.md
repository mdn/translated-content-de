---
title: Aktualisieren von Add-ons für Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: 6d311a5f07c97dbcd7bb9a6d49c2fe820a228659
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Schritten, die Sie unternehmen müssen, um Ihr bestehendes Add-on für die Kompatibilität mit Firefox 8 zu aktualisieren. Eine vollständige Liste aller Änderungen in Firefox 8 finden Sie unter [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsprüfwerkzeug überprüft. Add-ons, die keine in Firefox 8 geänderten APIs verwenden und keine binären Komponenten haben (die [für jede wichtige Firefox-Version neu kompiliert werden müssen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 8 funktionieren.

Sie sollten daher zunächst die AMO besuchen und überprüfen, ob Ihr Add-on überhaupt bearbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 8 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Sie Änderungen vornehmen müssen, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Hinweis zum Entwicklungsprozess

Es ist wichtig zu beachten, dass Firefox 8 beim Start nun bei seinem ersten Start nach Drittanbieter-Add-ons sucht und eine Benutzeroberfläche anzeigt, die den Benutzern ermöglicht, zu entscheiden, ob sie diese aktivieren möchten oder nicht. Wenn Sie Ihr Add-on zum Testen in das Profilverzeichnis einfügen, wird es von Firefox beim ersten Start nicht automatisch aktiviert, sondern stattdessen diese Benutzeroberfläche angezeigt.

Sie können dies vermeiden, indem Sie die Voreinstellung `extensions.autoDisableScopes` auf 14 setzen. Dies sollte nur für Entwicklungs- und Testzwecke erfolgen.

## Schnittstellen wurden zusammengeführt

Als Teil unserer laufenden Bemühungen, die internen Prozesse von Gecko zu optimieren, wurden einige Schnittstellen zusammengeführt:

- `nsIDOMWindowInternal` wurde in `nsIDOMWindow` integriert. Die `nsIDOMWindowInternal`-Schnittstelle existiert noch, ist jedoch leer und wird in Firefox 9 vollständig entfernt. Sie sollten Ihren Code, der von der Existenz von `nsIDOMWindowInternal` abhängt, aktualisieren, um stattdessen nach `nsIDOMWindow` zu suchen.
- Alle Unter-Schnittstellen von `nsISelection` wurden in die Basisschnittstelle `nsISelection` integriert. Falls Sie zufällig bisher nach `nsISelection2` oder `nsISelection3` gesucht haben, sollten Sie Ihren Code aktualisieren.

## Verbesserte Datumshandhabung

Da das JavaScript-Objekt [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) jetzt ISO 8601-Daten analysieren kann, wurde das Code-Modul [`ISO8601DateUtils.jsm`](/de/docs/JavaScript_code_modules/ISO8601DateUtils.jsm) entfernt. Wenn Sie dieses Code-Modul verwendet haben, sollten Sie Ihren Code so aktualisieren, dass er stattdessen die Methoden von `Date` verwendet.

## DOM-Änderungen

Es gab einige Änderungen im DOM, die sich auf Add-ons auswirken:

### Änderungen bei der Auswahl

In der Vergangenheit gab [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) eine String-Version der Auswahl zurück, anstatt des [`Selection`](/de/docs/Web/API/Selection)-Objekts selbst. Dies war ein nicht standardkonformes Verhalten und wurde korrigiert.

### Potenzielle Namenskonflikte

Als die DOM File API hinzugefügt wurde, wurde ein neuer globaler Name [`File`](/de/docs/Web/API/File) eingeführt; dies kann zu Konflikten mit Objekten in Ihren Skripten führen. Wenn Sie globale Objekte namens `File` haben, sollten Sie diese umbenennen.

Ähnlich wurde ein neuer globaler Name, `ChromeWorker`, eingeführt, um zu unterstützen, dass Worker aus Chrome-Code verwendet werden können. Falls Sie zufällig globale Objekte mit diesem Namen haben, sollten Sie diese umbenennen.

## Sicherheitsänderungen

Die Unterstützung für SSL 2.0 wurde entfernt. Dies sollte keine aktuellen Add-ons betreffen. Zur Information: Einige sehr alte Codes wurden entfernt, ebenso wie die Unterstützung für die Voreinstellungen `security.enable_ssl2` (die standardmäßig auf „false“ gesetzt ist) und alle Voreinstellungen, die mit "`security.ssl2.`" beginnen.

## Siehe auch

- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
