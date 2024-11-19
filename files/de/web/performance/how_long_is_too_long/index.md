---
title: "Empfohlene Web-Performance-Zeitvorgaben: Wie lange ist zu lange?"
slug: Web/Performance/How_long_is_too_long
l10n:
  sourceCommit: fff37e54dad8353fc89f6c61f5ec408094bcebd8
---

{{QuickLinksWithSubPages("Web/Performance")}}

Es gibt keine klaren Regeln dafür, was als langsames Laden von Seiten gilt, aber es gibt spezifische Richtlinien für die Anzeige, dass Inhalte geladen werden (1 Sekunde), für das Warten (50ms), für Animationen (16,7ms) und für die Reaktion auf Benutzereingaben (50 bis 200ms).

## Ladeziel

Die Aussage "Unter einer Sekunde" wird oft als optimal für das Laden angeführt, aber was bedeutet das? Eine Sekunde sollte als maximale Zeit betrachtet werden, um einem Benutzer anzuzeigen, dass die Anfrage für neue Inhalte gestellt wurde und geladen wird, beispielsweise durch das Anzeigen des Seitentitels und der Hintergrundfarbe der Seite im Browser.

Das erste heruntergeladene Asset einer Anfrage ist üblicherweise ein HTML-Dokument, das dann Aufrufe für zusätzliche Assets macht. Wie in der Beschreibung des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path) erwähnt, beginnen Browser sofort mit der Verarbeitung des HTML, wenn es empfangen wird, und rendern die Inhalte, während sie empfangen werden, anstatt auf das Laden zusätzlicher Assets zu warten.

Ja, eine Sekunde für das Laden ist ein Ziel, aber es ist etwas, das nur wenige Seiten erreichen. Erwartungen variieren. Ein "Hello World" im Firmennetzwerk würde erwartet, in Millisekunden zu laden, aber ein Benutzer, der ein Katzenvideo auf einem fünf Jahre alten Gerät über ein Edge-Netzwerk in Nord-Sibirien herunterlädt, würde wahrscheinlich einen 20-sekündigen Download als schnell empfinden. Wenn Sie drei oder vier Sekunden warten, ohne dem Benutzer mitzuteilen, dass ein Ladevorgang stattfindet und einige Fortschritte zu zeigen, wird die typische Seite potenzielle Besucher verlieren, und es wird lange dauern, bis diese Besucher zurückkehren, wenn sie es überhaupt tun.

Beim Optimieren der Performance sollten Sie sich ein ehrgeiziges Erstladeziel setzen, wie zum Beispiel 5 Sekunden über das mobile 3G-Netzwerk und 1,5 Sekunden über eine Büro-T1-Leitung, mit noch ehrgeizigeren Ladezielen für nachfolgende Seitenladevorgänge unter Nutzung von Service Workern und Caching. Es gibt unterschiedliche empfohlene Zeiten für das anfängliche Laden der Seite im Vergleich zum Laden zusätzlicher Assets, zur Reaktion auf Benutzerinteraktionen und zur Gewährleistung flüssiger Animationen:

## Warteziel

Browser sind single-threaded (obwohl Hintergrund-Threads für Web Worker unterstützt werden). Das bedeutet, dass Benutzerinteraktionen, Rendern und Skriptausführung alle auf demselben Thread ablaufen. Wenn der Thread mit der Ausführung komplexer JavaScript-Befehle beschäftigt ist, steht der Haupt-Thread nicht zur Verfügung, um auf Benutzereingaben, wie das Drücken einer Taste, zu reagieren. Aus diesem Grund sollte die Ausführung von Skripten im Umfang begrenzt werden und in Codeabschnitte unterteilt werden, die in 50ms oder weniger ausgeführt werden können. Dies macht den Thread für Benutzerinteraktionen verfügbar.

## Animationsziel

Damit das Scrollen und andere Animationen flüssig aussehen und sich reaktionsschnell anfühlen, sollten die Inhalt-Neuzeichnungen mit 60 Frames pro Sekunde (60fps) auftreten, was einmal alle 16,7ms ist. Die 16,7 Millisekunden umfassen Skriptausführung, Neustrukturierung und Neuzeichnung. Bedenken Sie, dass es etwa 6ms dauert, um ein Dokument-Frame zu rendern, was etwa 10ms für den Rest lässt. Alles unter 60fps, insbesondere eine ungleichmäßige oder wechselnde Framerate, wirkt ruckartig.

## Reaktionsziel

Wenn der Benutzer mit Inhalten interagiert, ist es wichtig, Feedback zu geben und die Benutzerreaktion oder -interaktion innerhalb von 100ms zu bestätigen, vorzugsweise innerhalb von 50ms. 50ms fühlen sich unmittelbar an. Die Bestätigung der Benutzerinteraktion sollte sich oft unmittelbar anfühlen, wie z.B. ein Hover- oder Tastenanschlag, aber das bedeutet nicht, dass die vollständige Reaktion sofort abgeschlossen sein muss. Während eine langsamere Reaktion als 100ms eine Trennung zwischen der Benutzerinteraktion und der Antwort erzeugen kann, kann eine 100 bis 200ms-Übergangszeit für eine Antwort dem Benutzer helfen, die Antwort zu bemerken, die seine Interaktion ausgelöst hat, wie z.B. das Öffnen eines Menüs. Wenn eine Reaktion länger als 100ms dauert, um abgeschlossen zu werden, geben Sie dem Benutzer eine Rückmeldung, dass die Interaktion stattgefunden hat.
