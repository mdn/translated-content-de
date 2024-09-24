---
title: Aktualisieren von Add-ons für Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Schritte, die Sie unternehmen müssen, um Ihr bestehendes Add-on für die Kompatibilität mit Firefox 8 zu aktualisieren. Sehen Sie sich [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8) für eine vollständige Liste aller Änderungen in Firefox 8 an.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsprüfungstool überprüft. Add-ons, die keine APIs verwenden, die sich in Firefox 8 geändert haben und keine Binärkomponenten enthalten (die [für jede wichtige Firefox-Version neu kompiliert werden müssen](/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 8 funktionieren.

Sie sollten daher zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt überarbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 8 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Hinweis zum Entwicklungsprozess

Es ist erwähnenswert, dass Firefox 8 beim ersten Start nun nach Drittanbieter-Add-ons sucht und eine Benutzeroberfläche bereitstellt, über die Benutzer entscheiden können, ob sie aktiviert werden sollen oder nicht. Wenn Sie Ihr Add-on in das Profilverzeichnis legen, um es zu testen, wird Firefox es nicht automatisch beim ersten Start aktivieren, sondern stattdessen diese Benutzeroberfläche anzeigen.

Sie können dies vermeiden, indem Sie die Präferenz `extensions.autoDisableScopes` auf 14 setzen. Dies sollte nur für Entwicklungs- und Testzwecke gemacht werden.

## Schnittstellen wurden zusammengeführt

Im Rahmen unserer laufenden Bemühungen, die internen Abläufe von Gecko zu optimieren, wurden einige Schnittstellen zusammengeführt:

- `nsIDOMWindowInternal` wurde in `nsIDOMWindow` integriert. Die `nsIDOMWindowInternal`-Schnittstelle existiert noch, ist aber leer und wird in Firefox 9 vollständig entfernt. Sie sollten Ihren Code aktualisieren, der sich auf das Vorhandensein von `nsIDOMWindowInternal` verlässt, um stattdessen nach `nsIDOMWindow` zu suchen.
- Alle Unter-Schnittstellen von `nsISelection` wurden in die Basisschnittstelle `nsISelection` integriert. Sollten Sie zuvor `nsISelection2` oder `nsISelection3` verwendet haben, müssen Sie Ihren Code aktualisieren.

## Verbesserte Datumshandhabung

Da das JavaScript-Objekt [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) jetzt ISO 8601-Daten parsen kann, wurde das Code-Modul [`ISO8601DateUtils.jsm`](/de/docs/JavaScript_code_modules/ISO8601DateUtils.jsm) entfernt. Falls Sie dieses Code-Modul verwendet haben, sollten Sie Ihren Code so aktualisieren, dass er die Methoden von `Date` verwendet.

## DOM-Änderungen

Es gab einige Änderungen im DOM, die Auswirkungen auf Add-ons haben:

### Änderungen bei der Auswahl

In der Vergangenheit hat {{ domxref("Document.getSelection()") }} eine stringifizierte Version der Auswahl zurückgegeben, anstatt das {{ domxref("Selection") }}-Objekt selbst. Dieses nicht-standardmäßige Verhalten wurde korrigiert.

### Potenzielle Namenskonflikte

Als die DOM File API hinzugefügt wurde, wurde ein neuer globaler Name {{ domxref("File") }} eingeführt; dies kann mit Objekten in Ihren Skripten in Konflikt stehen. Wenn Sie globale Variablen namens `File` haben, sollten Sie diese umbenennen.

Ebenso wurde ein neuer globaler Name, {{ domxref("ChromeWorker") }}, eingeführt, um die Nutzung von Workern aus Chrome-Code zu unterstützen. Falls Sie globale Variablen mit diesem Namen haben, sollten Sie diese umbenennen.

## Sicherheitsänderungen

Die Unterstützung für SSL 2.0 wurde entfernt. Dies sollte keine aktuellen Add-ons betreffen. Zur Referenz: Einige sehr alte Codes und die Unterstützung für die Präferenzen `security.enable_ssl2` (die standardmäßig auf false gesetzt sind) sowie alle Präferenzen, die mit "`security.ssl2.`" beginnen, wurden entfernt.

## Siehe auch

- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
