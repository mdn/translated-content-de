---
title: "Empfohlene Web-Performance-Zeiten: Wie lang ist zu lang?"
slug: Web/Performance/How_long_is_too_long
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubPages("Web/Performance")}}

Es gibt keine klaren Regeln dafür, was als langsames Tempo beim Laden von Seiten gilt, aber es gibt spezifische Richtlinien für die Anzeige, dass Inhalte geladen werden (1 Sekunde), Leerlauf (50ms), Animationen (16,7ms) und Reaktionen auf Benutzereingaben (50 bis 200ms).

## Ladeziel

Die „Unter einer Sekunde“-Regel wird oft als optimal für das Laden angesehen, aber was bedeutet das? Eine Sekunde sollte als maximale Zeit betrachtet werden, um einem Benutzer zu signalisieren, dass die Anfrage für neue Inhalte gestellt wurde und geladen wird, wie das Anzeigen des Seitentitels durch den Browser und die Hintergrundfarbe der Seite.

Das erste Asset, das von einer Anfrage abgerufen wird, ist normalerweise ein HTML-Dokument, das dann zusätzliche Assets anfordert. Wie in der Beschreibung des [kritischen Rendering-Pfads](/de/docs/Web/Performance/Critical_rendering_path) erwähnt, beginnen Browser bei Empfang sofort mit der Verarbeitung des HTML-Dokuments, um den Inhalt darzustellen, während er empfangen wird, anstatt auf das Laden zusätzlicher Assets zu warten.

Ja, eine Sekunde für das Laden ist ein Ziel, aber es ist etwas, das nur wenige Seiten erreichen. Erwartungen unterscheiden sich. Ein "Hello World" im Firmennetzwerk würde erwartet, in Millisekunden zu laden, aber ein Benutzer, der ein Katzenvideo auf einem fünf Jahre alten Gerät über ein Edge-Netzwerk in Nord-Sibirien herunterlädt, würde wahrscheinlich einen 20-Sekunden-Download als schnell empfinden. Wenn Sie drei oder vier Sekunden warten, ohne dem Benutzer mitzuteilen, dass ein Ladevorgang stattfindet und etwas Fortschritt gezeigt wird, wird die typische Website potenzielle Besucher verlieren, und diese Besucher werden lange brauchen, um zurückzukommen, wenn sie es überhaupt tun.

Beim Optimieren der Leistung sollten Sie sich ehrgeizige erste Ladeziele setzen, wie 5 Sekunden über das mobile 3G-Netzwerk und 1,5 Sekunden über eine Büro-T1-Leitung, mit noch ehrgeizigeren Ladezielen für nachfolgende Seitenladungen unter Nutzung von Service Workern und Caching. Es werden unterschiedliche vorgeschlagene Zeiten für das anfängliche Laden der Seite im Vergleich zum Laden zusätzlicher Assets, Reaktion auf Benutzerinteraktionen und dem Gewährleisten flüssiger Animationen angegeben:

## Leerlaufziel

Browser sind Single-Threaded (obwohl Hintergrund-Threads für Web Worker unterstützt werden). Dies bedeutet, dass Benutzerinteraktion, Rendering und Skriptausführung alle im selben Thread stattfinden. Wenn der Thread mit komplexer JavaScript-Ausführung beschäftigt ist, steht der Hauptthread nicht für die Reaktion auf Benutzereingaben wie das Drücken einer Taste zur Verfügung. Aus diesem Grund sollte die Skriptausführung im Umfang begrenzt sein und in Codeabschnitte unterteilt werden, die in 50ms oder weniger ausgeführt werden können. Dies macht den Thread für Benutzerinteraktionen verfügbar.

## Animationsziel

Damit das Scrollen und andere Animationen flüssig und reaktionsschnell wirken, sollten die Inhaltsdarstellungen bei 60 Frames pro Sekunde (60fps) erfolgen, was alle 16,7ms einmal ist. Die 16,7 Millisekunden umfassen Scripting, Reflow und Repaint. Für das Rendern eines Frames benötigt ein Dokument etwa 6ms, sodass etwa 10ms für den Rest übrig bleiben. Alles unter 60fps, insbesondere eine ungleichmäßige oder sich verändernde Framerate, wird ruckelig erscheinen.

## Reaktionsziel

Wenn der Benutzer mit dem Inhalt interagiert, ist es wichtig, Feedback zu geben und die Benutzerinteraktion innerhalb von 100ms, vorzugsweise innerhalb von 50ms, anzuerkennen. 50ms fühlen sich unmittelbar an. Die Bestätigung der Benutzerinteraktion sollte oft unmittelbar erscheinen, wie ein Hover-Effekt oder das Drücken einer Taste, aber das bedeutet nicht, dass die vollständige Reaktion sofort erfolgen sollte. Während eine langsamere Reaktion als 100ms eine Trennung zwischen Benutzerinteraktion und Reaktion erzeugen kann, kann eine Reaktion von 100 bis 200ms dem Benutzer helfen, die Antwort auf seine Interaktion, wie das Öffnen eines Menüs, wahrzunehmen. Wenn eine Antwort länger als 100ms dauert, geben Sie eine Art Feedback, um dem Benutzer mitzuteilen, dass die Interaktion stattgefunden hat.
