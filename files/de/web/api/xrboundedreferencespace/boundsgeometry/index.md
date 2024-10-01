---
title: "XRBoundedReferenceSpace: boundsGeometry Eigenschaft"
short-title: boundsGeometry
slug: Web/API/XRBoundedReferenceSpace/boundsGeometry
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Eigenschaft **`boundsGeometry`** ist ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekten, die die Punkte angeben, die ein Polygon bilden, innerhalb dessen sich der Betrachter bewegen darf. Jeder Punkt wird als zweidimensionaler Punkt behandelt und muss sich auf Bodenhöhe befinden (d.h. sein `y`-Koordinatensatz muss 0 sein).

Diese Begrenzung wird typischerweise vom Benutzer konfiguriert, mithilfe der Software, die ihre XR-Hardware steuert. Dies kann geschehen, indem der Benutzer die Grenze des Raumes abläuft, den er verwenden möchte, oder indem er die Form seines Raumes mit seinem XR-Eingabegerät zeichnet. Theoretisch könnte ein fortschrittlicheres System Sensoren oder andere Erkennungsmethoden verwenden, um die Grenzen eines dedizierten XR-Raums zu bestimmen (beachten Sie, wie wir es sorgfältig vermeiden, es "Holodeck" zu nennen).

## Wert

Die `boundsGeometry`-Eigenschaft ist ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekten, von denen jedes einen Scheitelpunkt in einem Polygon definiert, innerhalb dessen sich der Betrachter aufhalten muss. Jeder Punkt muss sich auf Bodenhöhe befinden, wobei der Wert der `y`-Koordinate auf 0 gesetzt ist. Darüber hinaus ist der Wert von `w` in jedem Punkt im Array immer 1. Zusätzlich _müssen_ die Punkte in Uhrzeigerrichtung aufgelistet sein.

Jeder Eintrag in `boundsGeometry` entspricht einem Eintrag in der Liste der nativen Begrenzungsgeometrie-Punkte für den Raum, vorab multipliziert mit dem Inversen des Ursprungsversatzes. Mit anderen Worten, die Grenzen sind die physischen Einschränkungen des verfügbaren Raums, verschoben, sodass die Begrenzungspunkte des Referenzraums alle relativ zum effektiven Ursprung des `XRBoundedReferenceSpace` definiert sind.

## Nutzungshinweise

Begrenzte Referenzräume haben ihren Ursprung immer auf Bodenhöhe, wo `y` 0 ist. Im Allgemeinen befindet sich der Ursprung für `x` und `z` im oder nahe dem Zentrum des Raumes, mit der Ausrichtung in eine logische Vorwärtsrichtung gesetzt, wie es für die zugrunde liegende Plattform oder XR-Hardware angemessen ist.

Um das Risiko zu verringern, dass die Raumgrenzen für {{Glossary("Fingerprinting", "Fingerprinting")}} Zwecke verwendet werden, kann jeder Punkt im `boundsGeometry`-Array um einen gewissen Betrag gerundet oder angepasst werden. Die Spezifikation empfiehlt, dass Browser die Punkte auf den nächsten 5 Zentimeter verschieben (während sie vermeiden, außerhalb der physischen Einschränkungen der Hardware zu gelangen).

### Grenzgröße

`XRBoundedReferenceSpace` ist nicht dazu gedacht, für sehr große begrenzte Bereiche verwendet zu werden. Stattdessen ist er für Ein-Raum-Räume vorgesehen, mit nicht mehr als etwa 15 Metern verfügbaren Bewegungsraum in jeder Richtung vom nativen Ursprung. Das heißt, die Grenzen erstrecken sich nach oben unendlich, da die Grenzen nur in zwei Dimensionen definiert sind.

Wenn Sie einen Raum mit mehreren Räumen erstellen müssen, oder einen Raum, der sehr groß ist oder unterschiedliche Bodenhöhen benötigt, sollten Sie stattdessen einen ungebundenen [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) verwenden und die Grenzen selbst entsprechend durchsetzen.

### Grenzform

Die Form, die durch `boundsGeometry` definiert wird, kann so einfach wie ein Quadrat oder so komplex wie erforderlich sein, und potenziell konkave und/oder konvexe Abschnitte enthalten. Sie können jedoch keine Räume mit unebenen Bodenhöhen darstellen, indem Sie `XRBoundedReferenceSpace` verwenden. Der Boden ist _immer_ bei `y` = 0.

Es ist wichtig, dass Ihre Inhalte nicht so gestaltet sind, dass der Benutzer gezwungen ist, die durch `boundsGeometry` festgelegten Grenzen zu verlassen. Wenn jedoch die Umgebung des Benutzers es ihm erlaubt, auf eine Weise zu bewegen, die diese definierten Grenzen verlässt, müssen Ihre Inhalte in der Lage sein, die Situation elegant zu handhaben, was nicht als Fehlerbedingung angesehen wird.

Obwohl einige Beispiele ein Netz oder eine andere Form rendern, um dem Benutzer die Grenzen anzuzeigen, sollten Sie dies in einer realen Anwendung nicht tun. Der Browser jedoch sollte dem Benutzer geeignete Warnungen über alle Risiken bereitstellen (z.B. das Risiko, dass er gegen eine physische Wand stoßen könnte, wenn er weitergeht).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
