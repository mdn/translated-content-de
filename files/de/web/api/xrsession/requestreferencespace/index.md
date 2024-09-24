---
title: "XRSession: requestReferenceSpace() Methode"
short-title: requestReferenceSpace()
slug: Web/API/XRSession/requestReferenceSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestReferenceSpace()`** Methode der
{{DOMxRef("XRSession")}} Schnittstelle gibt ein {{JSxRef("promise")}} zurück, das mit
einer Instanz von entweder {{DOMxRef("XRReferenceSpace")}} oder
{{DOMxRef("XRBoundedReferenceSpace")}} aufgelöst wird, je nach dem angeforderten Typ des Referenzraums.

## Syntax

```js-nolint
requestReferenceSpace(referenceSpaceType)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Referenzraums angibt, für den eine Instanz zurückgegeben werden soll.
    Der String muss einer der unten aufgeführten Werte sein.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem {{DOMxRef("XRReferenceSpace")}} Objekt aufgelöst wird.

Die Typen von Referenzräumen sind unten aufgeführt, mit kurzen Informationen über ihre Anwendungsfälle und welche Schnittstelle zu deren Implementierung verwendet wird.

- `bounded-floor`
  - : Ein {{domxref("XRBoundedReferenceSpace")}}, ähnlich dem `local` Typ, außer dass der Benutzer nicht erwarten sollte, sich außerhalb einer vorbestimmten Grenze zu bewegen, die durch die {{domxref("XRBoundedReferenceSpace.boundsGeometry", "boundsGeometry")}} im zurückgegebenen Objekt angegeben wird.
- `local`
  - : Ein {{domxref("XRReferenceSpace")}} Verfolgungsraum, dessen natürlicher Ursprung sich in der Nähe der Position des Betrachters zum Zeitpunkt der Erstellung der Sitzung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass der Benutzer sich viel über seine Ausgangsposition hinaus bewegt, und das Tracking ist für diesen Anwendungsfall optimiert. Bei Geräten mit sechs Freiheitsgraden (6DoF) versucht der `local` Referenzraum, den Ursprung stabil relativ zur Umgebung zu halten.
- `local-floor`
  - : Ein {{domxref("XRReferenceSpace")}}, ähnlich dem `local` Typ, außer dass die Ausgangsposition an einem sicheren Ort für den Betrachter zum Stehen platziert wird, wo der Wert der y-Achse auf Bodenniveau 0 beträgt. Wenn dieses Bodenniveau nicht bekannt ist, wird der {{Glossary("user agent")}} das Bodenniveau schätzen. Wenn das geschätzte Bodenniveau ungleich null ist, wird erwartet, dass der Browser es auf eine Weise rundet, die [Fingerprinting](/de/docs/Glossary/Fingerprinting) vermeidet (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein {{domxref("XRReferenceSpace")}} Verfolgungsraum, der dem Benutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise über extrem lange Distanzen von seinem Ursprungspunkt. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist für Stabilität um die aktuelle Position des Benutzers optimiert, sodass der natürliche Ursprung je nach Bedarf driften kann, um diesem Bedarf gerecht zu werden.
- `viewer`
  - : Ein {{domxref("XRReferenceSpace")}} Verfolgungsraum, dessen natürlicher Ursprung die Position und Orientierung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen der Benutzer sich physisch bewegen kann, und wird von allen Instanzen von {{domxref("XRSession")}}, sowohl immersiven als auch Inline-Sitzungen, unterstützt, obwohl es für Inline-Sitzungen am nützlichsten ist. Es ist besonders nützlich, wenn der Abstand zwischen dem Betrachter und einer Eingabe bestimmt wird oder wenn mit Offseträumen gearbeitet wird. Ansonsten wird in der Regel einer der anderen Referenzraumtypen häufiger verwendet.

### Ausnahmen

Statt echte Ausnahmen zu werfen, lehnt `requestReferenceSpace()` das zurückgegebene Promise mit einem {{domxref("DOMException")}} ab, dessen Name in der Liste unten zu finden ist:

- `NotSupportedError`
  - : Der angeforderte Referenzraum wird nicht unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
