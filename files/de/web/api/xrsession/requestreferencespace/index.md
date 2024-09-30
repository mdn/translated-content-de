---
title: "XRSession: Methode requestReferenceSpace()"
short-title: requestReferenceSpace()
slug: Web/API/XRSession/requestReferenceSpace
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestReferenceSpace()`**-Methode des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces gibt ein {{JSxRef("promise")}} zurück, das sich mit einer Instanz von entweder [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) auflöst, je nach dem angeforderten Typ des Referenzraums.

## Syntax

```js-nolint
requestReferenceSpace(referenceSpaceType)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Referenzraums angibt, für den eine Instanz zurückgegeben werden soll. Der String muss einer der unten aufgeführten Werte sein.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das sich mit einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt auflöst.

Die Arten von Referenzräumen sind unten aufgeführt, mit kurzen Informationen über ihre Anwendungsfälle und welches Interface zur Implementierung verwendet wird.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), ähnlich dem Typ `local`, außer dass der Benutzer nicht erwartet wird, sich außerhalb einer vorbestimmten Grenze zu bewegen, die durch die [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben ist.
- `local`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Trackingraum, dessen Ursprung in der Nähe der Position des Betrachters zum Zeitpunkt der Erstellung der Sitzung liegt. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird nicht erwartet, dass sich der Benutzer weit über seine Ausgangsposition hinaus bewegt, und das Tracking ist für diesen Anwendungsfall optimiert. Für Geräte mit sechs Freiheitsgraden (6DoF)-Tracking versucht der `local` Referenzraum den Ursprung relativ zur Umgebung stabil zu halten.
- `local-floor`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), ähnlich dem Typ `local`, jedoch ist die Startposition an einem sicheren Ort für den Betrachter positioniert, wo der Wert der y-Achse auf 0 auf Bodenhöhe gesetzt ist. Wenn diese Bodenhöhe nicht bekannt ist, schätzt der [user agent](/de/docs/Glossary/user_agent) die Bodenhöhe. Wenn die geschätzte Bodenhöhe ungleich null ist, wird vom Browser erwartet, dass er sie so rundet, dass [Fingerabdruckerkennung](/de/docs/Glossary/Fingerprinting) vermieden wird (wahrscheinlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Trackingraum, der dem Benutzer völlige Bewegungsfreiheit ermöglicht, möglicherweise über extrem lange Distanzen von ihrem Ursprungspunkt hinweg. Der Betrachter wird überhaupt nicht verfolgt; das Tracking ist für Stabilität um die aktuelle Position des Benutzers optimiert, sodass sich der native Ursprung nach Bedarf verschieben kann, um diesem Bedürfnis gerecht zu werden.
- `viewer`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Trackingraum, dessen nativem Ursprung die Position und Orientierung des Betrachters verfolgt. Dies wird für Umgebungen verwendet, in denen sich der Benutzer physisch bewegen kann, und wird von allen Instanzen von [`XRSession`](/de/docs/Web/API/XRSession), sowohl immersiv als auch inline, unterstützt, obwohl es für Inline-Sitzungen am nützlichsten ist. Es ist besonders nützlich, wenn der Abstand zwischen dem Betrachter und einer Eingabe ermittelt werden soll oder wenn mit Offset-Räumen gearbeitet wird. Andernfalls wird in der Regel einer der anderen Referenzraumtypen häufiger verwendet.

### Ausnahmen

Statt echte Ausnahmen auszulösen, lehnt `requestReferenceSpace()` das zurückgegebene Promise mit einem [`DOMException`](/de/docs/Web/API/DOMException) ab, dessen Name in der folgenden Liste zu finden ist:

- `NotSupportedError`
  - : Der angeforderte Referenzraum wird nicht unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
