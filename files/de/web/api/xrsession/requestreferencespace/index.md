---
title: "XRSession: requestReferenceSpace()-Methode"
short-title: requestReferenceSpace()
slug: Web/API/XRSession/requestReferenceSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestReferenceSpace()`**-Methode des
[`XRSession`](/de/docs/Web/API/XRSession)-Interfaces gibt ein {{JSxRef("promise")}} zurück, das mit
einer Instanz von entweder [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)
oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) aufgelöst wird, je nach dem angeforderten Typ des Referenzraums.

## Syntax

```js-nolint
requestReferenceSpace(referenceSpaceType)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Referenzraums spezifiziert, für den eine Instanz zurückgegeben werden soll.
    Der String muss einer der untenstehenden Werte sein.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt aufgelöst wird.

Die Arten von Referenzräumen sind unten aufgeführt, mit kurzen Informationen über ihre Anwendungsfälle und welches Interface verwendet wird, um sie zu implementieren.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) ähnlich dem `local`-Typ, außer dass der Benutzer nicht erwartet wird, sich außerhalb einer vorbestimmten Grenze zu bewegen, gegeben durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt.
- `local`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Tracking-Raum, dessen nativer Ursprung sich in der Nähe der Ansicht des Nutzers bei der Erstellung der Sitzung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Der Benutzer sollte sich von seinem Ausgangspunkt aus nicht wesentlich bewegen, und das Tracking ist für diesen Anwendungsfall optimiert. Für Geräte mit sechs Freiheitsgraden (6DoF)-Tracking versucht der `local`-Referenzraum, den Ursprung stabil in Bezug auf die Umgebung zu halten.
- `local-floor`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) ähnlich dem `local`-Typ, außer dass die Ausgangsposition an einem sicheren Ort für den Betrachter platziert ist, wobei der y-Achsen-Wert auf Bodenniveau bei 0 liegt. Wenn dieses Bodenniveau nicht bekannt ist, wird der [User-Agent](/de/docs/Glossary/user_agent) das Bodenniveau schätzen. Wenn das geschätzte Bodenniveau ungleich Null ist, wird erwartet, dass der Browser es so rundet, dass Fingerprinting vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Tracking-Raum, der dem Benutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise über extrem lange Distanzen von ihrem Ursprungsort. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist auf die Stabilität um die aktuelle Position des Benutzers optimiert, sodass der native Ursprung sich möglicherweise nach Bedarf verschieben kann, um diesem Bedarf gerecht zu werden.
- `viewer`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Tracking-Raum, dessen nativer Ursprung die Position und Orientierung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen der Benutzer sich physisch bewegen kann und wird von allen Instanzen von [`XRSession`](/de/docs/Web/API/XRSession) unterstützt, sowohl immersiv als auch inline, obwohl es für inline-Sitzungen am nützlichsten ist. Es ist besonders nützlich, um die Entfernung zwischen dem Betrachter und einer Eingabe zu bestimmen oder beim Arbeiten mit Offset-Räumen. Ansonsten wird typischerweise eine der anderen Arten von Referenzräumen häufiger verwendet.

### Ausnahmen

Anstatt echte Ausnahmen zu werfen, lehnt `requestReferenceSpace()` das
zurückgegebene Promise mit einem [`DOMException`](/de/docs/Web/API/DOMException) ab, dessen Name in der untenstehenden Liste zu finden ist:

- `NotSupportedError`
  - : Der angeforderte Referenzraum wird nicht unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
