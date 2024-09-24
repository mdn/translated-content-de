---
title: "XRBoundedReferenceSpace: Eigenschaft boundsGeometry"
short-title: boundsGeometry
slug: Web/API/XRBoundedReferenceSpace/boundsGeometry
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`boundsGeometry`** von {{domxref("XRBoundedReferenceSpace")}} ist ein Array von {{domxref("DOMPointReadOnly")}}-Objekten, das die Punkte angibt, die ein Polygon bilden, innerhalb dessen sich der Betrachter bewegen darf. Jeder Punkt wird als zweidimensionaler Punkt behandelt und muss sich auf Bodenhöhe befinden (das heißt, sein `y`-Koordinat muss 0 sein).

Diese Grenze wird normalerweise vom Benutzer über die Software konfiguriert, die ihre XR-Hardware steuert. Dies kann geschehen, indem der Benutzer den Rand des gewünschten Raumes abläuft oder die Form seines Raumes mit seinem XR-Eingabegerät zeichnet. Theoretisch könnte ein fortschrittlicheres System Sensoren oder andere Erkennungsmethoden verwenden, um die Grenzen eines speziellen XR-Raums zu bestimmen (beachten Sie, dass wir es bewusst nicht als Holodeck bezeichnen).

## Wert

Die `boundsGeometry`-Eigenschaft ist ein Array von {{domxref("DOMPointReadOnly")}}-Objekten, von denen jedes einen Scheitelpunkt in einem Polygon definiert, innerhalb dessen sich der Betrachter aufhalten muss. Jeder Punkt muss sich auf Bodenhöhe befinden, wobei der `y`-Koordinat-Wert auf 0 gesetzt ist. Außerdem hat der `w`-Wert in jedem Punkt im Array immer den Wert 1. Die Punkte _müssen_ außerdem in Uhrzeigerrichtung aufgelistet sein.

Jeder Eintrag in `boundsGeometry` entspricht einem Eintrag in der Liste der nativen Grenzgeometrie-Punkte für den Raum, vorweggenommen durch das Inverse des Ursprungsentfernungsfaktors. Mit anderen Worten, die Grenzen sind die physischen Einschränkungen des verfügbaren Raums, verschoben, so dass die Grenzpunkte des Referenzraums alle relativ zum effektiven Ursprung des `XRBoundedReferenceSpace` definiert sind.

## Nutzungshinweise

Begrenzte Referenzräume haben ihren Ursprung immer auf Bodenhöhe, wobei `y` 0 ist. Allgemein gilt, dass sich der Ursprung für `x` und `z` in oder nahe dem Zentrum des Raumes befindet und dass die Orientierung in eine logische Vorwärtsrichtung zeigt, die für die zugrunde liegende Plattform oder XR-Hardware geeignet ist.

Um das Risiko zu verringern, dass die Raumgrenzen für [Fingerprinting](/de/docs/Glossary/Fingerprinting) verwendet werden, kann jeder Punkt im `boundsGeometry`-Array um einen bestimmten Betrag gerundet oder angepasst werden. Die Spezifikation empfiehlt, dass Browser die Punkte auf den nächsten 5 Zentimeter verschieben (während vermieden wird, dass die physischen Einschränkungen der Hardware überschritten werden).

### Größe der Grenze

`XRBoundedReferenceSpace` ist nicht für sehr große begrenzte Bereiche gedacht. Stattdessen ist es für einen Raum vorgesehen, der nicht mehr als etwa 15 Meter Bewegungsraum in jede Richtung vom nativen Ursprung hat. Dennoch erstrecken sich die Grenzen unendlich nach oben, da die Grenzen nur in zwei Dimensionen definiert sind.

Wenn Sie einen mehrteiligen Raum, einen sehr großen Raum oder Räume mit unterschiedlichen Bodenhöhen erstellen müssen, sollten Sie stattdessen einen unbegrenzten {{domxref("XRReferenceSpace")}} verwenden und die Grenzen nach Bedarf selbst durchsetzen.

### Form der Grenze

Die durch `boundsGeometry` definierte Form kann so einfach wie ein Quadrat oder so komplex sein, wie es erforderlich ist, und möglicherweise konkave und/oder konvexe Abschnitte umfassen. Sie können jedoch keine Räume mit unebenen Bodenhöhen mit `XRBoundedReferenceSpace` darstellen. Der Boden ist _immer_ bei `y` = 0.

Es ist wichtig, dass Ihre Inhalte nicht darauf ausgelegt sind, von den Benutzern zu verlangen, dass sie die durch `boundsGeometry` festgelegten Grenzen verlassen. Sollten die Umgebung des Benutzers es ihnen jedoch ermöglichen, sich so zu bewegen, dass sie die definierten Grenzen überschreiten, muss Ihr Inhalt in der Lage sein, die Situation griffig zu bewältigen, was nicht als Fehlerbedingung angesehen wird.

Obwohl einige Beispiele ein Netz oder eine andere Form rendern, um die Grenzen dem Benutzer anzuzeigen, sollten Sie dies in einer realen Anwendung nicht tun. Der Browser sollte jedoch angemessene Warnungen an den Benutzer über mögliche Risiken ausgeben (wie das Risiko, dass er möglicherweise gegen eine physische Wand läuft, wenn er weitergeht).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
