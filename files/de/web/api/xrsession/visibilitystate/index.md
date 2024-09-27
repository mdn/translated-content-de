---
title: "XRSession: visibilityState-Eigenschaft"
short-title: visibilityState
slug: Web/API/XRSession/visibilityState
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`visibilityState`**-Eigenschaft des
[`XRSession`](/de/docs/Web/API/XRSession)-Interfaces ist ein String, der anzeigt, ob der WebXR-Inhalt derzeit für den Benutzer sichtbar ist und, falls ja, ob es der Hauptfokus ist.

Jedes Mal, wenn sich der Sichtbarkeitsstatus ändert, wird ein
[`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis auf dem
[`XRSession`](/de/docs/Web/API/XRSession)-Objekt ausgelöst.

## Wert

Ein String, der angibt, ob der XR-Inhalt
für den Benutzer sichtbar ist und, falls ja, ob es derzeit der Hauptfokus ist.

Die möglichen Werte von `visibilityState` sind:

- `hidden`
  - : Die virtuelle Szene, die von der [`XRSession`](/de/docs/Web/API/XRSession) generiert wird, ist derzeit nicht für den Benutzer sichtbar,
    daher werden deren [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Callbacks _nicht_ ausgeführt, bis sich der `visibilityState` ändert.
    Eingabegeräte werden _nicht_ für die Sitzung verarbeitet.
- `visible`
  - : Die von der [`XRSession`](/de/docs/Web/API/XRSession) gerenderte virtuelle Szene ist derzeit für den Benutzer sichtbar
    und ist der Hauptfokus der Aufmerksamkeit des Benutzers. Zu diesem Zweck werden die [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Callbacks der Sitzung
    mit der nativen Bildwiederholfrequenz des XR-Geräts verarbeitet und Eingabegeräte werden wie gewohnt verarbeitet.
- `visible-blurred`
  - : Während die von der [`XRSession`](/de/docs/Web/API/XRSession) gerenderte virtuelle Szene derzeit für den Benutzer sichtbar sein kann,
    ist sie nicht der Hauptfokus des Benutzers; es ist auch möglich, dass die Sitzung derzeit überhaupt nicht sichtbar ist.
    Um die Ressourcennutzung zu optimieren, kann der [User-Agent](/de/docs/Glossary/user_agent) die [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Callbacks der Sitzung
    mit einer gedrosselten Rate verarbeiten.
    Eingabegeräte werden _nicht_ für die Sitzung verarbeitet.

## Nutzungshinweise

Es ist wichtig, im Hinterkopf zu behalten, dass, da eine immersive WebXR-Sitzung möglicherweise
auf einem anderen Display angezeigt wird als das HTML-Dokument, in dem sie läuft (zum Beispiel bei Anzeige auf einem Headset),
der Wert des `visibilityState` einer Sitzung möglicherweise nicht unbedingt derselbe ist wie der
_[`document`](/de/docs/Web/API/Document)`'s_ [`visibilityState`](/de/docs/Web/API/Document/visibilityState).
Wenn beispielsweise der Betrachter ein Headset verwendet, das an einen Computer angeschlossen ist, und die immersive Szene von einer Konfigurationsoberfläche verdeckt wird, könnte der Benutzer hinter dem Headset hervorschauen und das Dokument dennoch auf ihrem Computermonitor sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis
