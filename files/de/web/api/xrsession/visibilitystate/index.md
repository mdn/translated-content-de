---
title: "XRSession: visibilityState-Eigenschaft"
short-title: visibilityState
slug: Web/API/XRSession/visibilityState
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`visibilityState`**-Eigenschaft der {{DOMxRef("XRSession")}}-Schnittstelle ist eine Zeichenkette, die angibt, ob der WebXR-Inhalt derzeit für den Benutzer sichtbar ist und ob er der primäre Fokus ist.

Jedes Mal, wenn sich der Sichtbarkeitsstatus ändert, wird ein {{DOMxRef("XRSession.visibilitychange_event", "visibilitychange")}}-Ereignis auf dem {{DOMxRef("XRSession")}}-Objekt ausgelöst.

## Wert

Eine Zeichenkette, die angibt, ob der XR-Inhalt für den Benutzer sichtbar ist und ob er derzeit der primäre Fokus ist.

Die möglichen Werte von `visibilityState` sind:

- `hidden`
  - : Die vom {{domxref("XRSession")}} erzeugte virtuelle Szene ist derzeit nicht für den Benutzer sichtbar,
    sodass ihre {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}-Rückrufe _nicht_ ausgeführt werden, bis sich der `visibilityState` ändert.
    Eingabegeräte werden für die Sitzung _nicht_ verarbeitet.
- `visible`
  - : Die vom {{domxref("XRSession")}} gerenderte virtuelle Szene ist derzeit für den Benutzer sichtbar
    und ist der primäre Fokus der Aufmerksamkeit des Benutzers. Zu diesem Zweck werden die {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}-Rückrufe der Sitzung
    mit der nativen Bildwiederholrate des XR-Geräts verarbeitet, und Eingabegeräte werden wie gewohnt verarbeitet.
- `visible-blurred`
  - : Während die vom {{domxref("XRSession")}} gerenderte virtuelle Szene derzeit für den Benutzer sichtbar sein kann,
    ist sie momentan nicht der primäre Fokus des Benutzers; es ist auch möglich, dass die Sitzung derzeit überhaupt nicht sichtbar ist.
    Um die Ressourcennutzung zu optimieren, kann der {{Glossary("user agent")}} die {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}-Rückrufe der Sitzung mit einer gedrosselten Rate verarbeiten.
    Eingabegeräte werden für die Sitzung _nicht_ verarbeitet.

## Hinweise zur Nutzung

Es ist wichtig zu beachten, dass eine immersive WebXR-Sitzung möglicherweise auf einem anderen Display als dem HTML-Dokument angezeigt wird, in dem sie läuft (z. B. wenn sie auf einem Headset angezeigt wird), sodass der Wert des `visibilityState` einer Sitzung nicht unbedingt derselbe wie der Besitz _{{domxref("document")}}'s_ {{domxref("Document.visibilityState", "visibilityState")}} ist. Wenn der Betrachter zum Beispiel ein an einen Computer angeschlossenes Headset verwendet und die immersive Szene durch eine Konfigurationsoberfläche verdeckt wird, könnte der Benutzer hinter dem Headset hervorschauen und das Dokument selbst immer noch auf dem Bildschirm seines Computers sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("XRSession.visibilitychange_event","visibilitychange")}}-Ereignis
