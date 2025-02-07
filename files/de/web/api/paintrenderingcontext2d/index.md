---
title: PaintRenderingContext2D
slug: Web/API/PaintRenderingContext2D
l10n:
  sourceCommit: 315d781abffb349cbfb730b83ffeccdea980ddeb
---

{{APIRef("CSS Painting API")}}

Die **`PaintRenderingContext2D`**-Schnittstelle der [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) ist der Rendering-Kontext der API, der für Zeichnung auf das Bitmap verwendet wird. Sie implementiert einen Teil der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-API mit folgenden Ausnahmen:

- Sie implementiert keine Methoden der Schnittstellen für [`CanvasImageData` Pixelmanipulation](/de/docs/Web/API/CanvasRenderingContext2D#pixel_manipulation), [`CanvasUserInterface` Fokus](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded), [`CanvasText` Textzeichnung](/de/docs/Web/API/CanvasRenderingContext2D) oder [`CanvasTextDrawingStyles` Textstile](/de/docs/Web/API/CanvasRenderingContext2D#text_styles).
- Das Ausgabe-Bitmap hat die Größe des Objekts, auf das es rendert.
- Der Wert `currentColor` wird bei Verwendung als Farbe als opakes Schwarz behandelt.

Diese Schnittstelle ist nur im [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope) verfügbar.

## Instanz-Eigenschaften und Methoden

`PaintRenderingContext2D` implementiert einen Teil der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-API, wobei alle Eigenschaften und Methoden dieselbe Verwendung wie in `CanvasRenderingContext2D` haben.

### Kontext

- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Zustand

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Sichert den aktuellen Zustand des Zeichenstils in einem Stapel, sodass Änderungen mit `restore()` rückgängig gemacht werden können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstil-Zustand zum letzten im 'Stapel gespeicherten' Element wieder her.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den aktuellen Zeichenstil-Zustand auf die Standardwerte zurück.

### Transformationen

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuell auf den Kontext angewendete Transformationsmatrix als [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) ab.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt eine Rotation zur Transformationsmatrix hinzu. Das Winkelargument stellt einen im Uhrzeigersinn gemessenen Winkel in Radianten dar.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt der Canvas-Einheit eine Skalierungstransformation hinzu: horizontal um x und vertikal um y.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Translations-Transformation hinzu, indem die Canvas und ihr Ursprung horizontal um x und vertikal um y im Raster verschoben werden.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch ihre Argumente beschriebenen Matrix.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Identitätsmatrix zurück und ruft dann die Methode `transform()` mit denselben Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation auf die Identitätsmatrix zurück.

### Komposition

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf die Canvas zusammengesetzt werden.
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Gemeinsam mit `globalAlpha` legt dies fest, wie Formen und Bilder auf das bestehende Bitmap gezeichnet werden.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder beim Skalieren nicht geglättet.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht das Festlegen der Qualität der Bildglättung.

### Füll- und Linienstile

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil für das Innere von Formen.
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil für die Linien um Formen.

### Farbverläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen kegelförmigen Farbverlauf um einen durch die Parameter definierten Punkt.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Farbverlauf entlang der Linie, die durch die Parameterkoordinaten angegeben ist.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Farbverlauf auf Grundlage der Koordinaten von zwei durch die Parameter definierten Kreisen.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Muster des angegebenen Bildes, das in den durch das Wiederholungsargument angegebenen Richtungen wiederholt wird.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Menge des Weichzeichnens als Zahl an.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Gibt die Farbe des Schattens als CSS-{{cssxref("&lt;color&gt;")}} an.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt die horizontale Entfernung an, um die der Schatten verschoben wird, als Zahl.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, um die der Schatten verschoben wird, als Zahl.

### Rechtecke zeichnen

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht die Pixel im angegebenen Rechteck und setzt sie auf transparentes Schwarz.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Mal die Pixel des angegebenen Rechtecks und füllt es mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Malt den Rand des angegebenen Rechtecks mit dem aktuellen Linienstil.

### Pfade zeichnen

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Beginnt einen neuen Pfad und leert die Liste der Unterpfade. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die Unterpfade des aktuellen Pfades mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Umrisse der Unterpfade des aktuellen Pfades mit dem aktuellen Linienstil.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den aktuellen oder angegebenen Pfad in die aktuelle Ausschnittregion um. Verwenden Sie die angegebene Füllregel, um zu bestimmen, welche Punkte im Pfad liegen. Nachfolgende Pfadänderungen werden nur innerhalb des Ausschnittspfades angezeigt.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Ein boolescher Wert, der `true` ist, wenn der angegebene Punkt im aktuellen oder angegebenen Pfad enthalten ist.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Ein boolescher Wert, der `true` ist, wenn der Punkt innerhalb der vom Gestalten eines Pfades eingeschlossenen Fläche liegt.

### Bilder zeichnen

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild oder einen spezifischen Bereich davon, optional in einer bestimmten Größe und Position.

### Linienstile

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Eine Zahl, die die Breite der Linie in Koordinatenraumeinheiten angibt.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Der Typ der Abschlüsse am Ende von Linien. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Definiert den Typ der Ecken, an denen sich zwei Linien treffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Eine Zahl, die das Miter-Begrenzungsverhältnis in Koordinatenraumeinheiten angibt.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Linien-Strichmuster als [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Zahlen zurück, das die Längen der alternativen Linien und Lücken in Koordinatenraumeinheiten angibt.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt die Liste von Linien- und Strichabständen als aktuelles Linien-Strichmuster fest (wie beim Stempeln verwendet).
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnen soll.

### Pfade

- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Markiert den aktuellen Unterpfad als geschlossen, indem eine gerade Linie vom aktuellen Punkt zum Anfang gezeichnet wird, und beginnt einen neuen Unterpfad mit einem Punkt, der mit dem Anfangs- und Endpunkt des neu geschlossenen Unterpfades identisch ist. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, tut diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Verschiebt den Startpunkt eines neuen Unterpfades zu den Koordinaten (x, y).
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit einer geraden Linie zu den angegebenen Koordinaten (x, y).
- [`CanvasRenderingContext2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt eine kubische Bézierkurve zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt eine quadratische Bézierkurve zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt einen kreisförmigen Bogen zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt einen Bogen mit den gegebenen Kontrollpunkten und dem Radius zum aktuellen Pfad hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt einen elliptischen Bogen zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer durch _width_ und _height_ bestimmten Größe.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein Rechteck mit abgerundeten Ecken an der Position (x, y) mit einer durch _width_ und _height_ bestimmten Größe sowie durch _radii_ festgelegten Radien.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) {{Non-standard_Inline}}
  - : Wendet einen CSS- oder SVG-Filter auf die Canvas an, zum Beispiel, um ihre Helligkeit oder Unschärfe zu ändern.

## Beispiele

Vollständige Beispiele finden Sie unter [CSS Painting API](/de/docs/Web/API/CSS_Painting_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
