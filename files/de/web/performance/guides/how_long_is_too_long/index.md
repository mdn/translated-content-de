---
title: "Empfohlene Web-Performance-Zeiten: Wie lange ist zu lang?"
short-title: Wie lange ist zu lang?
slug: Web/Performance/Guides/How_long_is_too_long
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

Es gibt keine klaren, festgelegten Regeln dafür, was ein langsames Tempo beim Laden von Seiten ausmacht, aber es gibt spezifische Richtlinien, die darauf hinweisen, dass Inhalte geladen werden (1 Sekunde), im Leerlauf sind (50ms), Animationen ablaufen (16,7ms) und auf Benutzereingaben reagieren (50 bis 200ms).

## Ladeziel

"Unter einer Sekunde" wird oft als optimal für das Laden angepriesen, aber was bedeutet das? Eine Sekunde sollte als maximale Zeit betrachtet werden, um dem Benutzer anzuzeigen, dass die Anforderung neuer Inhalte erfolgt ist und geladen wird, z.B. indem der Browser den Seitentitel und die Hintergrundfarbe der Seite anzeigt.

Das erste Asset, das von einer Anfrage abgerufen wird, ist normalerweise ein HTML-Dokument, das dann weitere Assets anfordert. Wie in der Beschreibung des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Guides/Critical_rendering_path) hervorgehoben, beginnen Browser beim Empfang sofort mit der Verarbeitung des HTML und rendern den Inhalt, während er empfangen wird, anstatt auf das Laden zusätzlicher Assets zu warten.

Ja, eine Sekunde für das Laden ist ein Ziel, aber es ist etwas, das nur wenige Websites erreichen. Die Erwartungen variieren. Ein 'Hello World' im Unternehmensnetzwerk würde erwartet, innerhalb von Millisekunden zu laden, aber ein Benutzer, der ein Katzenvideo auf einem fünf Jahre alten Gerät über ein Edge-Netzwerk in Nord-Sibirien herunterlädt, würde wahrscheinlich einen 20-Sekunden-Download als schnell empfinden. Wenn Sie drei oder vier Sekunden warten, ohne dem Benutzer zu kommunizieren, dass ein Ladevorgang stattfindet und ohne Fortschritte anzuzeigen, wird die typische Website potenzielle Besucher verlieren, und diese Besucher werden lange brauchen, um zurückzukehren, wenn sie es überhaupt tun.

Bei der Optimierung der Leistung sollten Sie ein ehrgeiziges Erstladeziel setzen, z. B. 5 Sekunden über das mobile 3G-Netzwerk und 1,5 Sekunden über eine Büro-T1-Leitung, mit noch ehrgeizigeren Seitladezielen für nachfolgende Seitenladungen, unter Verwendung von Service Workern und Caching. Es gibt unterschiedliche empfohlene Zeiten für das anfängliche Laden der Seite im Vergleich zum Laden zusätzlicher Assets, der Reaktion auf Benutzerinteraktionen und der Sicherstellung flüssiger Animationen:

## Leerlaufziel

Browser sind Single-Threaded (obwohl Hintergrund-Threads für Web Worker unterstützt werden). Dies bedeutet, dass Benutzerinteraktionen, Malvorgänge und Skriptausführungen alle im selben Thread ablaufen. Wenn der Thread mit komplexer JavaScript-Ausführung beschäftigt ist, steht der Hauptthread nicht zur Verfügung, um auf Benutzereingaben zu reagieren, z.B. das Drücken eines Buttons. Aus diesem Grund sollte die Skriptausführung im Umfang begrenzt und in Codeabschnitte unterteilt werden, die in 50ms oder weniger ausgeführt werden können. Dies macht den Thread für Benutzerinteraktionen verfügbar.

## Animationsziel

Damit Bildlauf und andere Animationen glatt aussehen und reaktionsschnell wirken, sollten die Inhalte mit 60 Frames pro Sekunde (60fps) neu gezeichnet werden, was alle 16,7ms einmal bedeutet. Die 16,7 Millisekunden umfassen das Skripting, Neufluss und Neumalen. Es dauert etwa 6ms, um ein Frame zu rendern, wodurch etwa 10ms für den Rest bleiben. Alles unter 60fps, besonders eine ungleichmäßige oder sich ändernde Bildrate, wird als ruckelig erscheinen.

## Reaktionsziel

Wenn der Benutzer mit Inhalten interagiert, ist es wichtig, eine Rückmeldung zu geben und die Reaktion oder Interaktion des Benutzers innerhalb von 100ms, vorzugsweise innerhalb von 50ms, anzuerkennen. 50ms fühlt sich unmittelbar an. Die Bestätigung der Benutzerinteraktion sollte oft unmittelbar wirken, wie z.B. ein Hover oder Knopfdruck, aber das bedeutet nicht, dass die vollständige Antwort sofort erfolgen sollte. Während eine Reaktion, die langsamer als 100ms ist, eine Trennung zwischen der Benutzerinteraktion und der Antwort verursachen kann, kann eine Reaktion von 100 bis 200ms dem Benutzer helfen, die Reaktion wahrzunehmen, die seine Interaktion ausgelöst hat, wie z.B. das Öffnen eines Menüs. Wenn eine Reaktion länger als 100ms dauert, sollte eine Form der Rückmeldung bereitgestellt werden, um den Benutzer darüber zu informieren, dass die Interaktion stattgefunden hat.
