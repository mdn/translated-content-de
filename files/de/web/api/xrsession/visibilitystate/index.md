---
title: "XRSession: Eigenschaft visibilityState"
short-title: visibilityState
slug: Web/API/XRSession/visibilityState
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`visibilityState`**-Eigenschaft des
[`XRSession`](/de/docs/Web/API/XRSession)-Interfaces ist ein String, der angibt, ob der WebXR-Inhalt
derzeit für den Benutzer sichtbar ist und, wenn ja, ob er der primäre Fokus ist.

Jedes Mal, wenn sich der Sichtbarkeitszustand ändert, wird ein
[`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event)-Ereignis auf dem
[`XRSession`](/de/docs/Web/API/XRSession)-Objekt ausgelöst.

## Wert

Ein String, der angibt, ob der XR-Inhalt für den Benutzer sichtbar ist und, wenn dies der Fall ist, ob er gerade der primäre Fokus ist.

Die möglichen Werte von `visibilityState` sind:

- `hidden`
  - : Die virtuelle Szene, die von der [`XRSession`](/de/docs/Web/API/XRSession) generiert wird, ist derzeit nicht für den Benutzer sichtbar,
    daher werden ihre [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Rückrufe _nicht_ ausgeführt, bis sich der `visibilityState` ändert.
    Eingabegeräte werden für die Sitzung _nicht_ verarbeitet.
- `visible`
  - : Die virtuelle Szene, die von der [`XRSession`](/de/docs/Web/API/XRSession) gerendert wird, ist derzeit für den Benutzer sichtbar
    und ist der primäre Fokus der Aufmerksamkeit des Benutzers. Zu diesem Zweck werden die
    [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Rückrufe der Sitzung mit der nativen Bildwiederholrate des XR-Geräts verarbeitet, und Eingabegeräte werden normal verarbeitet.
- `visible-blurred`
  - : Obwohl die virtuelle Szene, die von der [`XRSession`](/de/docs/Web/API/XRSession) gerendert wird, derzeit für den Benutzer sichtbar sein kann,
    ist sie nicht der primäre Fokus des Benutzers im Moment; es ist auch möglich, dass die Sitzung derzeit überhaupt nicht sichtbar ist.
    Um die Ressourcenauslastung zu optimieren, kann der [User-Agent](/de/docs/Glossary/user_agent) die
    [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Rückrufe der Sitzung mit einer reduzierten Rate verarbeiten.
    Eingabegeräte werden für die Sitzung _nicht_ verarbeitet.

## Nutzungshinweise

Es ist wichtig zu beachten, dass, da eine immersive WebXR-Sitzung möglicherweise auf einem anderen Display angezeigt wird als das HTML-Dokument, in dem sie ausgeführt wird (z. B. wenn sie auf einem Headset gezeigt wird), der Wert der `visibilityState` einer Sitzung nicht unbedingt der gleiche sein muss wie der des zugehörigen
_[`documents`](/de/docs/Web/API/Document)'s_ [`visibilityState`](/de/docs/Web/API/Document/visibilityState).
Zum Beispiel, wenn der Betrachter ein an einen Computer angeschlossenes Headset verwendet und die immersive Szene durch eine Konfigurations-UI verdeckt ist, könnte der Benutzer hinter das Headset schauen und das Dokument selbst auf dem Monitor ihres Computers sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`visibilitychange`](/de/docs/Web/API/XRSession/visibilitychange_event) Ereignis
