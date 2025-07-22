---
title: Aktualisieren von Add-ons für Firefox 8
slug: Mozilla/Firefox/Releases/8/Updating_add-ons
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel liefert Informationen über die Schritte, die Sie unternehmen müssen, um Ihr bestehendes Add-on für die Kompatibilität mit Firefox 8 zu aktualisieren. Siehe [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8) für eine vollständige Liste aller Änderungen in Firefox 8.

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on über [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es durch ein automatisches Kompatibilitätsüberprüfungstool geprüft. Add-ons, die keine in Firefox 8 geänderten APIs nutzen und keine Binärkomponenten enthalten (die [für jede größere Firefox-Version neu kompiliert werden müssen](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/de/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces)), wurden automatisch auf AMO aktualisiert, um anzuzeigen, dass sie in Firefox 8 funktionieren.

Sie sollten daher zuerst AMO besuchen und überprüfen, ob Ihr Add-on überhaupt Änderungen benötigt.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 8 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Hinweis zum Entwicklungsprozess

Es ist erwähnenswert, dass Firefox 8 beim ersten Start nun nach Add-ons von Drittanbietern sucht und eine Benutzeroberfläche anzeigt, mit der die Benutzer entscheiden können, ob sie diese aktivieren möchten oder nicht. Wenn Sie Ihr Add-on in das Profilverzeichnis legen, um es zu testen, wird Firefox es beim ersten Start nicht automatisch aktivieren, sondern diese Schnittstelle anzeigen.

Sie können dies vermeiden, indem Sie die Einstellung `extensions.autoDisableScopes` auf 14 setzen. Dies sollte nur zu Entwicklungs- und Testzwecken erfolgen.

## Schnittstellen wurden zusammengeführt

Im Rahmen unserer laufenden Bemühungen, die internen Abläufe von Gecko effizienter zu gestalten, wurden einige Schnittstellen zusammengeführt:

- `nsIDOMWindowInternal` ist in `nsIDOMWindow` integriert worden. Die Schnittstelle `nsIDOMWindowInternal` existiert noch, ist aber leer und wird in Firefox 9 vollständig entfernt. Sie sollten jeden Code aktualisieren, der auf das Vorhandensein von `nsIDOMWindowInternal` angewiesen ist, um stattdessen nach `nsIDOMWindow` zu suchen.
- Alle Unter-Schnittstellen von `nsISelection` wurden in die Basis-Schnittstelle `nsISelection` integriert. Falls Sie bisher möglicherweise nach `nsISelection2` oder `nsISelection3` gesucht haben, sollten Sie Ihren Code aktualisieren.

## Verbesserte Datumsverarbeitung

Da das JavaScript [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt jetzt ISO 8601-Daten parsen kann, wurde das [`ISO8601DateUtils.jsm`](https://web.archive.org/web/20210613204753/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules/ISO8601DateUtils.jsm) Code-Modul entfernt. Wenn Sie dieses Code-Modul verwendet haben, sollten Sie Ihren Code aktualisieren, um stattdessen die Methoden auf `Date` zu verwenden.

## DOM-Änderungen

Es gab einige Änderungen im DOM, die Auswirkungen auf Add-ons haben:

### Änderungen bei der Auswahl

In der Vergangenheit gab [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection) eine String-Darstellung der Auswahl zurück, anstatt des [`Selection`](/de/docs/Web/API/Selection) Objekts selbst. Dies war ein nicht standardmäßiges Verhalten und wurde korrigiert.

### Mögliche Namenskonflikte

Als die DOM File API hinzugefügt wurde, wurde ein neues Globales namens [`File`](/de/docs/Web/API/File) hinzugefügt; dies kann mit Objekten in Ihren Skripten in Konflikt stehen. Wenn Sie globale Objekte namens `File` haben, sollten Sie diese umbenennen.

Ähnlich wurde ein neues Globales `ChromeWorker` eingeführt, um zu unterstützen, dass Workers aus Chrome-Code verwendet werden können. Falls Sie globale Objekte mit diesem Namen haben, sollten Sie diese umbenennen.

## Sicherheitsänderungen

Die Unterstützung für SSL 2.0 wurde entfernt. Dies sollte keine aktuellen Add-ons betreffen. Als Referenz wurden jedoch einige sehr alte Codes entfernt, sowie die Unterstützung für die Einstellungen `security.enable_ssl2` (die standardmäßig auf false ist) und alle Einstellungen, die mit `security.ssl2` beginnen.

## Siehe auch

- [Firefox 8 für Entwickler](/de/docs/Mozilla/Firefox/Releases/8)
