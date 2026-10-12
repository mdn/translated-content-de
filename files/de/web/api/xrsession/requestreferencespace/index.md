---
title: "XRSession: Methode requestReferenceSpace()"
short-title: requestReferenceSpace()
slug: Web/API/XRSession/requestReferenceSpace
l10n:
  sourceCommit: 5b85e27155260155bd829fc6d4b98ca2c476b2d1
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`requestReferenceSpace()`** der Schnittstelle [`XRSession`](/de/docs/Web/API/XRSession) gibt ein {{JSxRef("Promise")}} zurück, das je nach angefordertem Referenzraum mit einer Instanz von [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) erfüllt wird.

## Syntax

```js-nolint
requestReferenceSpace(referenceSpaceType)
```

### Parameter

- `type`
  - : Eine Zeichenfolge, die den Typ des Referenzraums angibt, für den eine Instanz zurückgegeben werden soll. Die Zeichenfolge muss einem der unten aufgeführten Werte entsprechen.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Objekt erfüllt wird.

Die Referenzraumtypen sind nachfolgend aufgeführt, zusammen mit kurzen Informationen zu ihren Anwendungsfällen und der Schnittstelle, mit der sie implementiert werden.

- `bounded-floor`
  - : Ein [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace), der dem Typ `local` ähnelt. Allerdings wird nicht erwartet, dass sich der Benutzer über eine vorab festgelegte Grenze hinausbewegt, die durch [`boundsGeometry`](/de/docs/Web/API/XRBoundedReferenceSpace/boundsGeometry) im zurückgegebenen Objekt angegeben wird.
- `local`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Referenzraum für das Tracking, dessen nativer Ursprung sich nahe der Position des Betrachters zum Zeitpunkt der Sitzungserstellung befindet. Die genaue Position hängt von der zugrunde liegenden Plattform und Implementierung ab. Es wird erwartet, dass sich der Benutzer kaum oder gar nicht von seiner Ausgangsposition entfernt. Das Tracking ist für diesen Anwendungsfall optimiert. Auf Geräten mit Tracking in sechs Freiheitsgraden (6DoF) versucht der Referenzraum `local`, den Ursprung relativ zur Umgebung stabil zu halten.
- `local-floor`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace), der dem Typ `local` ähnelt. Die Ausgangsposition wird jedoch an einer sicheren Stelle platziert, an der der Betrachter stehen kann und an der der Wert der y-Achse auf Bodenhöhe 0 beträgt. Wenn die Bodenhöhe nicht bekannt ist, schätzt der {{Glossary("user_agent", "User-Agent")}} sie. Wenn die geschätzte Bodenhöhe nicht 0 ist, sollte der Browser sie so runden, dass {{Glossary("Fingerprinting", "Fingerprinting")}} vermieden wird (vermutlich auf den nächsten Zentimeter).
- `unbounded`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Referenzraum für das Tracking, der dem Benutzer volle Bewegungsfreiheit ermöglicht, möglicherweise auch über sehr große Entfernungen vom Ursprungspunkt. Der Betrachter wird nicht nachverfolgt; das Tracking ist auf Stabilität rund um die aktuelle Position des Benutzers optimiert. Daher kann sich der native Ursprung bei Bedarf verschieben.
- `viewer`
  - : Ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)-Referenzraum für das Tracking, dessen nativer Ursprung der Position und Ausrichtung des Betrachters folgt. Er wird in Umgebungen verwendet, in denen sich der Benutzer physisch bewegen kann, und wird von allen [`XRSession`](/de/docs/Web/API/XRSession)-Instanzen unterstützt, sowohl immersiven als auch Inline-Sitzungen. Besonders nützlich ist er für Inline-Sitzungen, etwa um den Abstand zwischen dem Betrachter und einer Eingabe zu bestimmen oder mit versetzten Referenzräumen zu arbeiten. Ansonsten wird üblicherweise häufiger einer der anderen Referenzraumtypen verwendet.

### Ausnahmen

Statt eine Ausnahme auszulösen, lehnt `requestReferenceSpace()` das zurückgegebene Promise mit einer [`DOMException`](/de/docs/Web/API/DOMException) ab, deren Name unten aufgeführt ist:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der angeforderte Referenzraum wird nicht unterstützt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
