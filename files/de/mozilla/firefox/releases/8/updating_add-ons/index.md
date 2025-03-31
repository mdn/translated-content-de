---
title: Aktualisierung von Add-ons für Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: 5ae01a458eced9772d628f91d035ada423cd073c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Schritten, die Sie unternehmen müssen, um Ihr bestehendes Add-on für die Kompatibilität mit Firefox 8 zu aktualisieren. Eine vollständige Liste aller Änderungen in Firefox 8 finden Sie unter [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) vertrieben wird, wurde es durch ein automatisches Kompatibilitätsprüfwerkzeug überprüft. Add-ons, die keine in Firefox 8 geänderten APIs nutzen und keine binären Komponenten haben (die [für jede Hauptversion von Firefox neu kompiliert werden müssen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 8 funktionieren.

Deshalb sollten Sie bei AMO nachsehen, ob Ihr Add-on überhaupt irgendwelche Anpassungen benötigt.

> [!NOTE]
> Sie sollten Ihr Add-on in Firefox 8 dennoch testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Hinweis zum Entwicklungsprozess

Es ist wichtig zu beachten, dass Firefox 8 beim ersten Start nun nach Drittanbieter-Add-ons sucht und eine Benutzeroberfläche anzeigt, die es den Nutzern ermöglicht, zu entscheiden, ob sie aktiviert werden sollen oder nicht. Wenn Sie Ihr Add-on zur Testzwecken in das Profilverzeichnis einfügen, wird Firefox es beim ersten Start nicht automatisch aktivieren, sondern stattdessen diese Benutzeroberfläche anzeigen.

Sie können dies umgehen, indem Sie die Einstellung `extensions.autoDisableScopes` auf 14 setzen. Dies sollte nur für Entwicklungs- und Testzwecke erfolgen.

## Schnittstellen wurden zusammengeführt

Im Rahmen unserer fortlaufenden Bemühungen, die internen Strukturen von Gecko zu optimieren, wurden einige Schnittstellen zusammengeführt:

- `nsIDOMWindowInternal` wurde in `nsIDOMWindow` integriert. Die `nsIDOMWindowInternal` Schnittstelle existiert zwar noch, ist aber leer und wird in Firefox 9 vollständig entfernt. Sie sollten Ihren Code aktualisieren, der von der Existenz von `nsIDOMWindowInternal` abhängt, und stattdessen nach `nsIDOMWindow` suchen.
- Alle Subschnittstellen von `nsISelection` wurden in die Basis-Schnittstelle `nsISelection` integriert. Falls Sie zufällig nach `nsISelection2` oder `nsISelection3` gesucht haben, sollten Sie Ihren Code aktualisieren.

## Verbesserte Datumshandhabung

Da das JavaScript [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt jetzt ISO 8601-Daten parsen kann, wurde das [`ISO8601DateUtils.jsm`](/de/docs/JavaScript_code_modules/ISO8601DateUtils.jsm) Code-Modul entfernt. Wenn Sie dieses Code-Modul verwendet haben, sollten Sie Ihren Code aktualisieren, um stattdessen die Methoden auf `Date` zu verwenden.

## DOM-Änderungen

Es gab einige Änderungen im DOM, die sich auf Add-ons auswirken:

### Auswahländerungen

Früher hat [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) eine stringifizierte Version der Auswahl zurückgegeben, anstatt das [`Selection`](/de/docs/Web/API/Selection) Objekt selbst. Dieses nicht standardmäßige Verhalten wurde korrigiert.

### Potentielle Namenskonflikte

Als die DOM-Datei-API hinzugefügt wurde, wurde eine neue globale Variable namens [`File`](/de/docs/Web/API/File) hinzugefügt; dies kann mit Objekten in Ihren Skripten in Konflikt stehen. Wenn Sie globale Variablen mit dem Namen `File` haben, sollten Sie sie umbenennen.

Ebenso wurde ein neuer globaler Name, `ChromeWorker`, eingeführt, um zu unterstützen, dass Worker aus Chrome-Code verwendet werden können. Sollten Sie zufällig globale Variablen mit diesem Namen haben, sollten Sie sie umbenennen.

## Sicherheitsänderungen

Unterstützung für SSL 2.0 wurde entfernt. Dies sollte keine aktuellen Add-ons betreffen. Allerdings wurde zur Referenz sehr alter Code entfernt sowie die Unterstützung für die Präferenzen `security.enable_ssl2` (die standardmäßig auf false gesetzt ist) sowie alle Präferenzen, die mit `security.ssl2.` beginnen.

## Siehe auch

- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
