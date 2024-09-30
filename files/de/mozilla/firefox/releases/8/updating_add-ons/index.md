---
title: Add-ons für Firefox 8 aktualisieren
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Schritte, die Sie unternehmen müssen, um Ihr bestehendes Add-on für die Kompatibilität mit Firefox 8 zu aktualisieren. Siehe [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8) für eine vollständige Liste aller Änderungen in Firefox 8.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on über [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) vertrieben wird, wurde es von einem automatisierten Kompatibilitätsüberprüfungstool überprüft. Add-ons, die keine APIs verwenden, die sich in Firefox 8 geändert haben, und keine binären Komponenten haben (die [für jede Hauptversion von Firefox neu kompiliert werden müssen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 8 funktionieren.

Sie sollten daher zunächst AMO besuchen und prüfen, ob mit Ihrem Add-on überhaupt Arbeit erforderlich ist.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 8 testen, selbst wenn es automatisch aktualisiert wurde. Es gibt Ausnahmefälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen weiter.

## Hinweis zum Entwicklungsprozess

Es ist erwähnenswert, dass Firefox 8 beim ersten Start nach Drittanbieter-Add-ons sucht und eine Benutzeroberfläche präsentiert, die es den Nutzern ermöglicht zu entscheiden, ob sie diese aktivieren möchten. Wenn Sie Ihr Add-on in das Profilverzeichnis einfügen, um es zu testen, wird Firefox es beim ersten Start nicht automatisch aktivieren, sondern diese Oberfläche anzeigen.

Sie können dies vermeiden, indem Sie die Einstellung `extensions.autoDisableScopes` auf 14 setzen. Dies sollte nur zu Entwicklungs- und Testzwecken erfolgen.

## Schnittstellen wurden zusammengeführt

Im Rahmen unserer fortlaufenden Bemühungen zur Straffung der Gecko-Interna wurden einige Schnittstellen zusammengeführt:

- `nsIDOMWindowInternal` wurde in `nsIDOMWindow` integriert. Die Schnittstelle `nsIDOMWindowInternal` existiert weiterhin, ist jedoch leer und wird in Firefox 9 vollständig entfernt. Sie sollten Ihren Code aktualisieren, der sich auf die Existenz von `nsIDOMWindowInternal` stützt, um stattdessen nach `nsIDOMWindow` zu suchen.
- Alle Unter-Schnittstellen von `nsISelection` wurden in die Basis-Schnittstelle `nsISelection` integriert. Falls Sie zuvor `nsISelection2` oder `nsISelection3` gesucht haben, sollten Sie Ihren Code aktualisieren.

## Verbesserte Datumshandhabung

Da das JavaScript [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt jetzt ISO-8601-Daten analysieren kann, wurde das [`ISO8601DateUtils.jsm`](/de/docs/JavaScript_code_modules/ISO8601DateUtils.jsm) Code-Modul entfernt. Wenn Sie dieses Code-Modul verwendet haben, sollten Sie Ihren Code aktualisieren, um stattdessen die Methoden von `Date` zu verwenden.

## DOM-Änderungen

Es gab einige Änderungen im DOM, die sich auf Add-ons auswirken:

### Änderungen bei der Auswahl

In der Vergangenheit hat [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) eine als String formatierte Version der Auswahl zurückgegeben, anstatt des [`Selection`](/de/docs/Web/API/Selection)-Objekts selbst. Dieses nicht standardmäßige Verhalten wurde korrigiert.

### Potenzielle Namenskonflikte

Als die DOM-File-API hinzugefügt wurde, kam eine neue globale Variable namens [`File`](/de/docs/Web/API/File) hinzu; dies kann mit Objekten in Ihren Skripten in Konflikt stehen. Wenn Sie globale Variablen namens `File` haben, sollten Sie diese umbenennen.

Ähnlich wurde eine neue globale Variable, [`ChromeWorker`](/de/docs/Web/API/ChromeWorker), eingeführt, um es zu ermöglichen, `Workers` aus Chrome-Code zu verwenden. Sollten Sie zufällig globale Variablen mit diesem Namen haben, sollten Sie diese umbenennen.

## Sicherheitsänderungen

Die Unterstützung für SSL 2.0 wurde entfernt. Dies sollte keine aktuellen Add-ons betreffen. Zur Referenz wurde etwas sehr alter Code entfernt sowie die Unterstützung für die Voreinstellungen `security.enable_ssl2` (die standardmäßig auf `false` gesetzt ist) und alle Voreinstellungen, die mit "`security.ssl2.`" beginnen.

## Siehe auch

- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
