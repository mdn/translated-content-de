---
title: Aktualisieren von Add-ons für Firefox 6
slug: Mozilla/Firefox/Releases/6/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie in Firefox 6 ordnungsgemäß funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 6 finden Sie unter [Firefox 6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/6).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on über [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsüberprüfungstool überprüft. Add-ons, die keine APIs nutzen, die sich in Firefox 6 geändert haben, und keine Binärkomponenten enthalten (die für jede Hauptversion von Firefox neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 6 funktionieren.

Sie sollten daher zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt überarbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 6 testen, selbst wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zurück zu dieser Seite und lesen Sie weiter.

## UI-Änderungen

Die Hinzufügung des neuen Untermenüs „Web Developer“ im Menü „Extras“ bedeutet, dass Overlays, die von den dort verschobenen Elementen abhängen, anders funktionieren werden als bisher. Ihre Overlays werden weiterhin funktionieren, aber Ihre Elemente werden nicht dort landen, wo Sie sie erwarten. Sie sollten Ihre Overlays aktualisieren, um sicherzustellen, dass Menüeinträge dort platziert werden, wo Sie sie haben möchten.

Ähnlich kann die Reihenfolge der Menüeinträge in den Menüs „Verlauf“ und „Lesezeichen“ auch die Overlays Ihres Add-ons beeinflussen.

## Kompatibilität von Binärkomponenten

Ein Fehler in Firefox 5 bedeutete, dass Binärkomponenten nicht ordnungsgemäß abgelehnt wurden, wenn sie für eine andere Version von Gecko erstellt wurden. Dies ist in Firefox 6 behoben; wenn die Binärkomponenten Ihres Add-ons nicht geladen werden, stellen Sie sicher, dass Sie sie gegen das Gecko 6 SDK neu erstellt haben.

## Voreinstellungen

Die Voreinstellung `app.update.timer` wurde entfernt; Sie müssen stattdessen die Voreinstellung `app.update.timerMinimumDelay` verwenden.

Außerdem wurden site-spezifische Datenschutzvoreinstellungen hinzugefügt. Dies betrifft nur Add-ons, die erwarten, dass datenschutzbezogene Voreinstellungen (Datenschutz, Passwörter merken usw.) im Hauptfenster der Voreinstellungen vorhanden sind.

## DOM-Änderungen

Die [`window.top`](/de/docs/Web/API/Window/top)-Eigenschaft ist jetzt schreibgeschützt. Dies wirkt sich auf Ihr Add-on aus, wenn Sie eine nicht deklarierte Variable namens `top` in einem Chrome-Skript haben.

## URL-Verarbeitung

`javascript:` und `data:` URLs, die in die Adressleiste eingegeben werden, erben nicht mehr den Hauptbeteiligten der aktuell geladenen Seite. Dies wird wahrscheinlich nur wenige Add-ons betreffen, aber wenn Sie Code ausführen, der diese URLs verwendet, sollten Sie sicherstellen, dass alles wie erwartet funktioniert.

[Firefox-Bug 658949](https://bugzil.la/658949) hat geändert, wie das Hash-Symbol (#) in Daten-URLs behandelt wird, was möglicherweise CSS-Stilexemplare, die dieses Symbol enthalten, beeinträchtigen kann, wenn es nicht maskiert ist.

## Schnittstellen

Einige Schnittstellen, die veraltet oder Implementierungsdetails waren, [wurden entfernt](/de/docs/Mozilla/Firefox/Releases/6#removed_interfaces). Wenn Sie auf eine von ihnen angewiesen sind, müssen Sie Ihren Code überarbeiten.
