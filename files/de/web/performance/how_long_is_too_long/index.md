---
title: "Empfohlene Web-Performance-Timings: Wann ist zu lang?"
slug: Web/Performance/How_long_is_too_long
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubPages("Web/Performance")}}

Es gibt keine klar festgelegten Regeln, was als langsames Laden von Seiten gilt, aber es gibt spezifische Richtlinien für die Anzeige, dass Inhalte geladen werden (1 Sekunde), für das Leerlaufen (50ms), für Animationen (16,7ms) und für die Reaktion auf Benutzereingaben (50 bis 200ms).

## Ladeziel

'Oberhalb von einer Sekunde' wird oft als optimal für das Laden angesehen, aber was bedeutet das? Eine Sekunde sollte als die maximale Zeit betrachtet werden, um dem Benutzer anzuzeigen, dass die Anforderung für neue Inhalte gestellt wurde und geladen wird, z.B. indem der Browser den Seitentitel und die Hintergrundfarbe der Seite anzeigt.

Das erste Asset, das von einer Anfrage abgerufen wird, ist normalerweise ein HTML-Dokument, das dann weitere Assets anfordert. Wie in der Beschreibung des [kritischen Renderpfads](/de/docs/Web/Performance/Critical_rendering_path) erwähnt, beginnen Browser sofort mit der Verarbeitung des HTMLs, sobald es empfangen wird, und rendern den Inhalt, während er empfangen wird, anstatt auf das Laden zusätzlicher Assets zu warten.

Ja, eine Sekunde Ladezeit ist ein Ziel, aber es ist etwas, das nur wenige Seiten erreichen. Die Erwartungen unterscheiden sich. Ein 'Hallo Welt' im Firmennetzwerk würde erwartet, in Millisekunden zu laden, aber ein Benutzer, der ein Katzenvideo auf einem fünf Jahre alten Gerät über ein Edge-Netzwerk in Nord-Sibirien herunterlädt, würde einen 20-sekündigen Download wahrscheinlich als schnell empfinden. Wenn Sie drei oder vier Sekunden warten, ohne dem Benutzer zu kommunizieren, dass ein Laden stattfindet und einen Fortschritt anzuzeigen, wird die typische Seite potenzielle Besucher verlieren, und diese Besucher werden lange brauchen, um zurückzukommen, wenn sie es überhaupt tun.

Bei der Optimierung der Leistung sollten Sie sich ehrgeizige erste Ladeziele setzen, wie z.B. 5 Sekunden über das mobile 3G-Netzwerk und 1,5 Sekunden über eine Büro-T1-Leitung, mit noch ehrgeizigeren Seitenladezielen für nachfolgende Seitenladevorgänge, unter Einsatz von Service Workern und Caching. Es gibt unterschiedliche empfohlene Zeiten für das anfängliche Laden der Seite im Vergleich zum Laden zusätzlicher Assets, zur Reaktion auf Benutzerinteraktionen und zur Sicherstellung reibungsloser Animationen:

## Leerlaufziel

Browser sind Single-Threaded (obwohl Hintergrund-Threads für Web Worker unterstützt werden). Das bedeutet, dass Benutzerinteraktionen, Malen und Skriptausführung alle im selben Thread ablaufen. Wenn der Thread mit komplexer JavaScript-Ausführung beschäftigt ist, steht der Haupt-Thread nicht zur Verfügung, um auf Benutzereingaben wie das Drücken eines Knopfes zu reagieren. Aus diesem Grund sollte die Skriptausführung im Umfang begrenzt und in Codeabschnitte unterteilt werden, die in 50ms oder weniger ausgeführt werden können. Dies macht den Thread für Benutzerinteraktionen verfügbar.

## Ziel für Animationen

Damit das Scrollen und andere Animationen flüssig aussehen und reaktionsschnell wirken, sollten die Inhaltswiedergaben mit 60 Bildern pro Sekunde (60fps) erfolgen, also einmal alle 16,7ms. Die 16,7 Millisekunden umfassen Skripting, Reflow und Repaint. Bedenken Sie, dass ein Dokument etwa 6ms benötigt, um ein Bild darzustellen, was ungefähr 10ms für den Rest lässt. Alles unter 60fps, besonders eine uneinheitliche oder sich ändernde Bildrate, wirkt ruckelig.

## Ziel für Reaktionsfähigkeit

Wenn der Benutzer mit Inhalten interagiert, ist es wichtig, Feedback zu geben und die Benutzereingabe oder -interaktion innerhalb von 100ms, vorzugsweise innerhalb von 50ms, zu bestätigen. 50ms fühlen sich sofort an. Die Bestätigung der Benutzerinteraktion sollte oft unmittelbar wirken, wie ein Hover- oder Tastendruck, aber das bedeutet nicht, dass die vollständige Reaktion sofort sein muss. Während eine langsamere Reaktion als 100ms eine Trennung zwischen der Benutzerinteraktion und der Reaktion erzeugen kann, kann ein Übergang von 100 bis 200ms für eine Reaktion dem Benutzer helfen, die von seiner Interaktion initiierte Reaktion zu bemerken, wie z.B. das Öffnen eines Menüs. Wenn eine Reaktion länger als 100ms dauert, sollten Sie irgendeine Form von Feedback geben, um den Benutzer darüber zu informieren, dass die Interaktion stattgefunden hat.
