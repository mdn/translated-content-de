---
title: "Empfohlene Web-Performance-Zeiten: Wann ist es zu lang?"
slug: Web/Performance/How_long_is_too_long
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubPages("Web/Performance")}}

Es gibt keine klaren Regeln dafür, was als langsames Laden von Seiten gilt, aber es gibt spezifische Richtlinien für das Anzeigen, dass Inhalte geladen werden (1 Sekunde), für das Leerlaufen (50ms), für Animationen (16,7ms) und für das Reagieren auf Benutzereingaben (50 bis 200ms).

## Ladeziel

Unter einer Sekunde wird oft als optimal für das Laden angepriesen, aber was bedeutet das? Eine Sekunde sollte als maximale Zeit angesehen werden, um dem Benutzer anzuzeigen, dass die Anfrage nach neuen Inhalten gestellt wurde und laden wird, wie das Anzeigen des Seitentitels im Browser und das Anzeigen der Hintergrundfarbe der Seite.

Das erste von einer Anfrage abgerufene Asset ist normalerweise ein HTML-Dokument, das dann Aufrufe für zusätzliche Assets macht. Wie in der Beschreibung des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path) erwähnt, beginnen Browser, sobald sie das HTML erhalten haben, sofort mit der Verarbeitung und dem Rendern der Inhalte, wie sie empfangen werden, anstatt auf das Laden zusätzlicher Assets zu warten.

Ja, eine Sekunde für das Laden ist ein Ziel, aber es ist etwas, das nur wenige Seiten erreichen. Erwartungen unterscheiden sich. Ein 'Hallo Welt' im Firmennetzwerk würde erwartet, in Millisekunden zu laden, aber ein Benutzer, der ein Katzenvideo auf einem fünf Jahre alten Gerät über ein Edge-Netzwerk in Nord-Sibirien herunterlädt, würde wahrscheinlich einen 20-sekündigen Download als schnell empfinden. Wenn Sie drei oder vier Sekunden warten, ohne dem Benutzer zu kommunizieren, dass ein Laden stattfindet und Fortschritte gezeigt werden, verliert die typische Seite potenzielle Besucher, und diese Besucher werden lange brauchen, um zurückzukehren, falls sie es überhaupt tun.

Bei der Optimierung für die Performance sollten Sie sich ein ehrgeiziges erstes Ladeziel setzen, wie zum Beispiel 5 Sekunden über das mobile 3G-Netzwerk und 1,5 Sekunden über eine Büro-T1-Leitung, mit noch ehrgeizigeren Zielen für das Laden nachfolgender Seiten, unter Nutzung von Service-Workern und Caching. Es gibt unterschiedliche empfohlene Zeiten für das initiale Laden der Seite im Vergleich zum Laden zusätzlicher Assets, für das Reagieren auf Benutzerinteraktion und für flüssige Animationen:

## Leerlaufziel

Browser sind single-threaded (obwohl Hintergrundthreads für Web-Worker unterstützt werden). Das bedeutet, dass Benutzerinteraktionen, das Zeichnen und das Ausführen von Skripten alle im selben Thread stattfinden. Wenn der Thread damit beschäftigt ist, komplexe JavaScript-Ausführungen durchzuführen, steht der Hauptthread nicht zur Verfügung, um auf Benutzereingaben wie das Drücken eines Buttons zu reagieren. Aus diesem Grund sollte die Skriptausführung im Umfang begrenzt und in Codeabschnitte unterteilt werden, die in 50ms oder weniger ausgeführt werden können. Dadurch wird der Thread für Benutzerinteraktionen verfügbar.

## Animationsziel

Damit das Scrollen und andere Animationen flüssig aussehen und sich reaktionsschnell anfühlen, sollten die Inhalte mit 60 Frames pro Sekunde (60fps) neu gezeichnet werden, was alle 16,7ms einmal geschieht. Die 16,7 Millisekunden umfassen das Skripting, das Neuanordnen und das Neuzeichnen. Bedenken Sie, dass ein Dokument etwa 6ms benötigt, um einen Frame zu rendern, was etwa 10ms für den Rest übrig lässt. Alles unter 60fps, besonders eine ungleichmäßige oder sich ändernde Bildrate, erscheint ruckelig.

## Reaktionsziel

Wenn der Benutzer mit Inhalten interagiert, ist es wichtig, Feedback zu geben und die Reaktion oder Interaktion des Benutzers innerhalb von 100ms, vorzugsweise innerhalb von 50ms, anzuerkennen. 50ms fühlen sich sofort an. Die Bestätigung der Benutzerinteraktion sollte oft sofort wirken, wie ein Hover oder das Drücken eines Buttons, aber das bedeutet nicht, dass die vollständige Reaktion sofort erfolgen soll. Während eine langsamere Reaktion als 100ms eine Trennung zwischen der Benutzerinteraktion und der Antwort schaffen kann, kann ein Übergang von 100 bis 200ms für eine Reaktion dem Benutzer helfen, die Antwort auf seine Interaktion wahrzunehmen, wie das Öffnen eines Menüs. Wenn eine Reaktion länger als 100ms dauert, um abgeschlossen zu werden, geben Sie dem Benutzer ein Feedback, um ihn darüber zu informieren, dass die Interaktion stattgefunden hat.
