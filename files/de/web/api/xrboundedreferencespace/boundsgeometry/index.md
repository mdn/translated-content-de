---
title: "XRBoundedReferenceSpace: boundsGeometry-Eigenschaft"
short-title: boundsGeometry
slug: Web/API/XRBoundedReferenceSpace/boundsGeometry
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)-Eigenschaft **`boundsGeometry`** ist ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekten, die die Punkte eines Polygons spezifizieren, innerhalb dessen sich der Betrachter bewegen darf. Jeder Punkt wird als zweidimensionaler Punkt behandelt und muss sich auf Bodenniveau befinden (das heißt, sein `y`-Koordinate muss 0 sein).

Diese Grenze wird normalerweise vom Benutzer mit der Software konfiguriert, die ihre XR-Hardware steuert. Dies kann durch Gehen entlang der Grenze des gewünschten Bereichs oder durch Zeichnen der Form ihres Raumes mit ihrem XR-Eingabegerät erfolgen. Theoretisch könnte ein fortschrittlicheres System Sensoren oder andere Erkennungsmethoden verwenden, um die Grenzen eines dedizierten XR-Raums zu bestimmen (beachten Sie, wie wir es sorgfältig vermeiden, es Holodeck zu nennen?).

## Wert

Die `boundsGeometry`-Eigenschaft ist ein Array von [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Objekten, von denen jedes einen Scheitelpunkt eines Polygons definiert, innerhalb dessen der Betrachter verbleiben muss. Jeder Punkt muss sich auf Bodenniveau befinden, wobei der Wert der `y`-Koordinate auf 0 gesetzt ist. Zusätzlich ist der Wert von `w` immer 1 in jedem Punkt des Arrays. Darüber hinaus _müssen_ die Punkte in Uhrzeigersinn-Reihenfolge aufgelistet werden.

Jeder Eintrag in `boundsGeometry` entspricht einem Eintrag in der Liste der nativen Begrenzungsgeometriepunkte des Raumes, präzisionsmultipliziert mit dem Inversen des Ursprungsversatzes. Mit anderen Worten, die Grenzen sind die physischen Begrenzungen des verfügbaren Raums, verschoben so, dass die Begrenzungspunkte des Referenzraums alle relativ zum effektiven Ursprung von `XRBoundedReferenceSpace` definiert sind.

## Nutzungshinweise

Begrenzte Referenzräume haben ihren Ursprung immer auf Bodenniveau, wo `y` 0 ist. In der Regel ist der Ursprung für `x` und `z` im oder nahe dem Zentrum des Raums, und die Ausrichtung ist in einer logischen Vorwärtsrichtung eingestellt, wie es für die zugrunde liegende Plattform oder XR-Hardware angemessen ist.

Um das Risiko zu verringern, dass die Raumgrenzen für [Fingerabdrücke](/de/docs/Glossary/Fingerprinting) verwendet werden, kann jeder Punkt im `boundsGeometry`-Array um einen bestimmten Betrag gerundet oder angepasst werden. Die Spezifikation empfiehlt, dass Browser die Punkte auf die nächsten 5 Zentimeter verschieben (wobei vermieden wird, die physischen Begrenzungen der Hardware zu überschreiten).

### Begrenzungsgröße

`XRBoundedReferenceSpace` ist nicht für sehr große abgegrenzte Bereiche gedacht. Es ist stattdessen dazu gedacht, für Räume mit nicht mehr als etwa 15 Metern verfügbarem Bewegungsraum in jede Richtung vom nativen Ursprung verwendet zu werden. Dennoch erstrecken sich die Grenzen unbegrenzt nach oben, da die Begrenzungen nur in zwei Dimensionen definiert sind.

Wenn Sie einen mehrräumigen Bereich schaffen oder einen sehr großen Raum mit unterschiedlichen Bodenniveaus benötigen, sollten Sie stattdessen einen unbegrenzten [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) verwenden und die Grenzen selbst durchsetzen, wie es angemessen ist.

### Begrenzungsform

Die mit `boundsGeometry` definierte Form kann so einfach wie ein Quadrat oder so komplex wie nötig sein, potenziell inklusive konkaver und/oder konvexer Abschnitte. Allerdings können Sie Räume mit unebenen Bodenniveaus nicht mit `XRBoundedReferenceSpace` darstellen. Der Boden ist _immer_ bei `y` = 0.

Es ist wichtig, dass Ihre Inhalte nicht so gestaltet sind, dass der Benutzer die durch `boundsGeometry` angegebenen Grenzen überschreiten muss. Sollte es jedoch die Umgebung des Benutzers zulassen, dass er sich so bewegt, dass er die definierten Grenzen verlässt, müssen Ihre Inhalte in der Lage sein, diese Situation gracios zu handzuhaben, die nicht als Fehlerbedingung gilt.

Obwohl einige Beispiele ein Netz oder eine andere Form rendern, um die Grenzen dem Benutzer anzuzeigen, sollten Sie dies in einer realen Anwendung nicht tun. Der Browser sollte jedoch dem Benutzer angemessene Warnungen über etwaige Risiken geben (wie z.B. das Risiko, gegen eine physische Wand zu laufen, wenn er sich weiter bewegt).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
