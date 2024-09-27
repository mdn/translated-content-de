---
title: Aktualisieren von Add-ons für Firefox 6
slug: Mozilla/Firefox/Releases/6/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie in Firefox 6 ordnungsgemäß funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 6 finden Sie unter [Firefox 6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/6).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsprüfungstool überprüft. Add-ons, die keine APIs verwenden, die sich in Firefox 6 geändert haben, und keine binären Komponenten enthalten (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 6 funktionieren.

Sie sollten daher zunächst AMO besuchen und prüfen, ob Ihre Erweiterung überhaupt bearbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 6 testen, selbst wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## UI-Änderungen

Die Hinzufügung des neuen Untermenüs "Web-Entwickler" im Menü "Extras" bedeutet, dass Overlays, die sich auf die dort verschobenen Elemente stützen, anders funktionieren als zuvor. Ihre Overlays funktionieren weiterhin, aber Ihre Elemente befinden sich nicht an der erwarteten Stelle. Sie sollten Ihre Overlays aktualisieren, um sicherzustellen, dass die Menüelemente dort platziert werden, wo Sie sie haben möchten.

Ähnlich kann die Reihenfolge der Menüeinträge in den Menüs "Chronik" und "Lesezeichen" auch die Overlays Ihres Add-ons beeinflussen.

## Kompatibilität der binären Komponenten

Ein Fehler in Firefox 5 führte dazu, dass binäre Komponenten nicht ordnungsgemäß abgelehnt wurden, wenn sie für eine andere Version von Gecko erstellt wurden. Dies wurde in Firefox 6 behoben; wenn die binären Komponenten Ihres Add-ons nicht geladen werden, überprüfen Sie, ob Sie sie gegen das Gecko 6 SDK neu kompiliert haben.

## Einstellungen

Die `app.update.timer` Einstellung wurde entfernt; Sie müssen stattdessen die `app.update.timerMinimumDelay` Einstellung verwenden.

Außerdem wurden sitzungsabhängige Datenschutzeinstellungen hinzugefügt. Dies betrifft nur Add-ons, die erwarten, dass datenschutzbezogene Einstellungen (Datenschutz, Passwörter merken usw.) in das Hauptpräferenzfenster gehören.

## DOM-Änderungen

Die [`window.top`](/de/docs/Web/API/Window/top) Eigenschaft ist jetzt schreibgeschützt. Dies wirkt sich auf Ihr Add-on aus, wenn Sie eine nicht deklarierte Variable namens `top` in einem Chrome-Skript haben.

## URL-Verarbeitung

`javascript:` und `data:` URLs, die in die Adressleiste eingegeben werden, erben nicht mehr das Prinzip der aktuell geladenen Seite. Dies wird wahrscheinlich nicht viele Add-ons betreffen, aber wenn Sie Code ausführen, der diese URLs verwendet, sollten Sie überprüfen, ob alles wie erwartet funktioniert.

[Firefox Bug 658949](https://bugzil.la/658949) hat geändert, wie das Hash-Symbol (#) in data-URLs behandelt wird, was CSS-Stile, die ein solches Symbol enthalten, beeinträchtigen kann, wenn es nicht maskiert ist.

## Schnittstellen

Einige Schnittstellen, die veraltet waren oder Implementierungsdetails sind, [wurden entfernt](/de/docs/Mozilla/Firefox/Releases/6#removed_interfaces). Wenn Sie sich auf eine von ihnen verlassen, müssen Sie Ihren Code überarbeiten.
