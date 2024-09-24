---
title: Aktualisieren von Add-ons für Firefox 6
slug: Mozilla/Firefox/Releases/6/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie ordnungsgemäß in Firefox 6 funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 6 finden Sie unter [Firefox 6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/6).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on über [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsüberprüfungstool überprüft. Add-ons, die keine in Firefox 6 geänderten APIs verwenden und keine binären Komponenten enthalten (die bei jeder wichtigen Firefox-Veröffentlichung neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 6 funktionieren.

Sie sollten daher damit beginnen, AMO zu besuchen und zu überprüfen, ob Ihr Add-on überhaupt bearbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 6 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Änderungen an der Benutzeroberfläche

Die Ergänzung des neuen Untermenüs "Web Developer" im Menü "Tools" bedeutet, dass Overlays, die von den dort verschobenen Einträgen abhängen, anders funktionieren als bisher. Ihre Overlays funktionieren weiterhin, aber Ihre Elemente landen möglicherweise nicht dort, wo Sie sie erwarten. Sie sollten Ihre Overlays aktualisieren, um sicherzustellen, dass die Menüeinträge an die von Ihnen beabsichtigten Stellen gelangen.

Ebenso kann die Reihenfolge der Menüeinträge in den Menüs "Chronik" und "Lesezeichen" auch die Overlays Ihres Add-ons beeinflussen.

## Kompatibilität von Binärkomponenten

Ein Fehler in Firefox 5 führte dazu, dass Binärkomponenten nicht ordnungsgemäß abgelehnt wurden, wenn sie für eine andere Version von Gecko erstellt wurden. Dies ist in Firefox 6 behoben; wenn die Binärkomponenten Ihres Add-ons nicht geladen werden, überprüfen Sie, ob Sie sie gegen das Gecko 6 SDK neu erstellt haben.

## Einstellungen

Die `app.update.timer`-Einstellung wurde entfernt; Sie müssen stattdessen die Einstellung `app.update.timerMinimumDelay` verwenden.

Außerdem wurden seitenbezogene Datenschutzeinstellungen hinzugefügt. Dies wird nur Add-ons betreffen, die erwarten, dass datenschutzbezogene Einstellungen (Datenschutz, Passwörter merken usw.) im Hauptfenster der Einstellungen vorhanden sind.

## DOM-Änderungen

Die {{ domxref("window.top") }}-Eigenschaft ist jetzt schreibgeschützt. Dies betrifft Ihr Add-on, wenn Sie eine nicht deklarierte Variable namens `top` in einem Chrome-Skript haben.

## URL-Verarbeitung

`javascript:`- und `data:`-URLs, die in die Adressleiste eingegeben werden, erben nicht mehr den Principal der aktuell geladenen Seite. Dies wird wahrscheinlich nicht viele Add-ons betreffen, aber wenn Sie Code ausführen, der diese URLs verwendet, sollten Sie überprüfen, ob alles wie erwartet funktioniert.

[Firefox Bug 658949](https://bugzil.la/658949) hat die Behandlung des Hash-Symbols (#) in Daten-URLs geändert, was CSS-Stylesheets betreffen könnte, die ein solches Symbol enthalten, wenn es nicht maskiert ist.

## Schnittstellen

Einige Schnittstellen, die veraltet oder Implementierungsdetails waren, [wurden entfernt](/de/docs/Mozilla/Firefox/Releases/6#removed_interfaces). Wenn Sie sich auf eine von ihnen verlassen, müssen Sie Ihren Code überarbeiten.
