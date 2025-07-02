---
title: Aktualisieren von Add-ons für Firefox 6
slug: Mozilla/Firefox/Releases/6/Updating_add-ons
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie in Firefox 6 ordnungsgemäß funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 6 finden Sie unter [Firefox 6 für Entwickler](/de/docs/Mozilla/Firefox/Releases/6).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Tool zur Kompatibilitätsüberprüfung überprüft. Add-ons, die keine in Firefox 6 geänderten APIs verwenden und keine binären Komponenten haben (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzugeben, dass sie in Firefox 6 funktionieren.

Deshalb sollten Sie zunächst AMO besuchen und prüfen, ob überhaupt Arbeiten an Ihrem Add-on erforderlich sind.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 6 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## UI-Änderungen

Die Hinzufügung des neuen Untermenüs „Web Developer“ im Menü „Tools“ bedeutet, dass Overlays, die sich auf die dorthin verschobenen Elemente stützen, anders funktionieren werden als früher. Ihre Overlays funktionieren weiterhin, aber Ihre Elemente werden nicht an der erwarteten Stelle erscheinen. Sie sollten Ihre Overlays aktualisieren, um sicherzustellen, dass Menüpunkte an der vorgesehenen Stelle landen.

Ähnlich kann die Reihenfolge der Elemente in den Menüs „History“ und „Bookmarks“ ebenfalls die Overlays Ihres Add-ons beeinflussen.

## Kompatibilität der binären Komponenten

Ein Fehler in Firefox 5 führte dazu, dass binäre Komponenten nicht richtig abgelehnt wurden, wenn sie für eine andere Version von Gecko gebaut wurden. Dies ist in Firefox 6 behoben; wenn die binären Komponenten Ihres Add-ons nicht geladen werden, stellen Sie sicher, dass Sie sie gegen das Gecko 6 SDK neu gebaut haben.

## Einstellungen

Die Einstellung `app.update.timer` wurde entfernt; Sie müssen stattdessen die Einstellung `app.update.timerMinimumDelay` verwenden.

Zudem wurden sitespezifische Datenschutzeinstellungen hinzugefügt. Dies betrifft nur Add-ons, die erwarten, dass datenschutzbezogene Einstellungen (Datenschutz, Passwörter merken usw.) im Hauptpräferenzfenster zu finden sind.

## DOM-Änderungen

Die Eigenschaft [`window.top`](/de/docs/Web/API/Window/top) ist jetzt schreibgeschützt. Dies betrifft Ihr Add-on, wenn Sie eine nicht deklarierte Variable namens `top` in einem Chrome-Skript verwenden.

## URL-Verarbeitung

`javascript:`- und `data:`-URLs, die in die Adressleiste eingegeben werden, erben nicht mehr den Ursprung der aktuell geladenen Seite. Dies wird wahrscheinlich nicht viele Add-ons betreffen, aber wenn Sie Code ausführen, der diese URLs verwendet, sollten Sie überprüfen, ob alles wie erwartet funktioniert.

[Firefox Bug 658949](https://bugzil.la/658949) hat geändert, wie das Hash-Symbol (#) in Daten-URLs behandelt wird, was CSS-Stylesheets, die dieses Symbol enthalten, beeinträchtigen kann, wenn es nicht escape’d ist.

## Schnittstellen

Einige Schnittstellen, die veraltet oder Implementierungsdetails waren, [wurden entfernt](/de/docs/Mozilla/Firefox/Releases/6#removed_interfaces). Wenn Sie auf eine dieser Schnittstellen angewiesen sind, müssen Sie Ihren Code überarbeiten.
