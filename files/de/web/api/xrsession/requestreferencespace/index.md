---
title: "XRSession: requestReferenceSpace()-Methode"
short-title: requestReferenceSpace()
slug: Web/API/XRSession/requestReferenceSpace
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestReferenceSpace()`**-Methode des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces gibt ein {{JSxRef("Promise")}} zurück, das mit einer Instanz von entweder [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) aufgelöst wird, je nachdem, welcher Typ von Referenzraum angefordert wurde.

## Syntax

```js-nolint
requestReferenceSpace(referenceSpaceType)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Referenzraums angibt, für den eine Instanz zurückgegeben werden soll. Der String muss einen der unten stehenden Werte haben.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt aufgelöst wird.

Die Typen der Referenzräume sind unten aufgelistet, mit kurzen Informationen zu ihren Anwendungsfällen und welchem Interface sie implementieren.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), ähnlich dem `local`-Typ, jedoch wird nicht erwartet, dass sich der Benutzer außerhalb einer vorgegebenen Grenze bewegt, die durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben wird.
- `local`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), dessen nativer Ursprung sich in der Nähe der Position des Betrachters zum Zeitpunkt der Sitzungserstellung befindet. Der genaue Ort hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass sich der Benutzer weit von seiner Startposition entfernt, und das Tracking ist für diesen Anwendungsfall optimiert. Für Geräte mit sechs Freiheitsgraden (6DoF)-Tracking versucht der `local`-Referenzraum den Ursprung stabil relativ zur Umgebung zu halten.
- `local-floor`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), ähnlich dem `local`-Typ, jedoch wird die Startposition an einem sicheren Ort für den Betrachter platziert, wo der Wert der y-Achse auf Bodenhöhe 0 ist. Falls diese Bodenhöhe nicht bekannt ist, schätzt der {{Glossary("user_agent", "User Agent")}} die Bodenhöhe. Wenn die geschätzte Bodenhöhe nicht null ist, wird erwartet, dass der Browser sie auf eine Weise rundet, um {{Glossary("Fingerprinting", "Fingerabdruck")}} zu vermeiden (vermutlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), der dem Benutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise über extrem große Entfernungen vom Ursprungspunkt. Der Betrachter wird nicht dauerhaft verfolgt; das Tracking ist für Stabilität um die aktuelle Position des Benutzers optimiert, sodass sich der native Ursprung nach Bedarf verschieben kann, um dieser Anforderung gerecht zu werden.
- `viewer`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt. Dies wird in Umgebungen verwendet, in denen sich der Benutzer physisch bewegen kann, und wird von allen Instanzen von [`XRSession`](/de/docs/Web/API/XRSession), sowohl immersiv als auch inline, unterstützt, obwohl es für inline-Sitzungen am nützlichsten ist. Es ist besonders nützlich, um den Abstand zwischen dem Betrachter und einer Eingabe zu bestimmen oder beim Arbeiten mit Versatzräumen. Ansonsten wird typischerweise einer der anderen Referenzraumtypen häufiger verwendet.

### Ausnahmen

Anstatt echte Ausnahmen zu werfen, lehnt `requestReferenceSpace()` das zurückgegebene Promise mit einem [`DOMException`](/de/docs/Web/API/DOMException) ab, dessen Name in der folgenden Liste zu finden ist:

- `NotSupportedError`
  - : Der angeforderte Referenzraum wird nicht unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
