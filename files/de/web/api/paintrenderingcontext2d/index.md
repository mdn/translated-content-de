---
title: PaintRenderingContext2D
slug: Web/API/PaintRenderingContext2D
l10n:
  sourceCommit: bad620560c435cae3d3436b9b01ff654680af9a3
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

Das **`PaintRenderingContext2D`** Interface der [CSS Painting API](/de/docs/Web/API/CSS_Painting_API) ist der Rendering-Kontext der API zum Zeichnen auf das Bitmap. Es implementiert einen Teil der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) API, mit den folgenden Ausnahmen:

- Es implementiert nicht die [`CanvasImageData` Pixelmanipulation](/de/docs/Web/API/CanvasRenderingContext2D#pixel_manipulation), [`CanvasUserInterface` Fokus](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded), [`CanvasText` Textzeichnung](/de/docs/Web/API/CanvasRenderingContext2D) oder [`CanvasTextDrawingStyles` Textstil](/de/docs/Web/API/CanvasRenderingContext2D#text_styles) Schnittstellenmethoden.
- Das Ausgabebitmap hat die Größe des Objekts, auf das es rendert.
- Der Wert `currentColor`, wenn er als Farbe verwendet wird, wird als opakes Schwarz behandelt.

Das Interface ist nur im [`PaintWorkletGlobalScope`](/de/docs/Web/API/PaintWorkletGlobalScope) verfügbar.

## Instanzeigenschaften und Methoden

_Das `PaintRenderingContext2D` implementiert einen Teil der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) API, wobei alle Eigenschaften und Methoden die gleiche Verwendung wie in `CanvasRenderingContext2D` haben._

### Kontext

- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Zustand

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichenstilzustand mithilfe eines Stacks, sodass Sie jede Änderung daran mit `restore()` rückgängig machen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstilzustand auf das letzte Element im 'Zustands-Stack' zurück, das von `save()` gespeichert wurde.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den aktuellen Zeichenstilzustand auf die Standardwerte zurück.

### Transformationen

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuell angewendete Transformationsmatrix als [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) ab.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt der Transformationsmatrix eine Rotation hinzu. Das Winkelargument stellt einen im Uhrzeigersinn gemessenen Rotationswinkel dar und wird in Bogenmaß angegeben.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt eine Skalierungstransformation zu den Canvas-Einheiten horizontal nach x und vertikal nach y hinzu.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Verschiebungstransformation hinzu, indem das Canvas und sein Ursprung horizontal nach x und vertikal nach y verschoben wird.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch ihre Argumente beschriebenen Matrix.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit denselben Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation mit der Einheitsmatrix zurück.

### Komposition

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf dem Canvas zusammengefügt werden.
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Mit `globalAlpha` angewandt, legt fest, wie Formen und Bilder auf das vorhandene Bitmap gezeichnet werden.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder beim Skalieren nicht geglättet.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht es Ihnen, die Qualität der Bildglättung festzulegen.

### Füll- und Linienstile

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil zum Füllen von Formen.
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil für die Linien um Formen.

### Verläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen konischen Verlauf um einen durch Koordinaten benannten Punkt, der durch die Parameter dargestellt wird.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Verlauf entlang der Linie, die durch die Koordinaten dargestellt wird, die durch die Parameter gegeben sind.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf, der durch die Koordinaten der beiden durch die Parameter dargestellten Kreise bestimmt wird.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Muster des angegebenen Bildes, das in die durch das Wiederholungsargument angegebenen Richtungen wiederholt wird.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt die Menge an Unschärfe als Zahl an.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Gibt die Farbe des Schattens als CSS {{cssxref("&lt;color&gt;")}} an.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Gibt die horizontale Entfernung an, um die der Schatten versetzt wird, als Zahl.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Gibt die vertikale Entfernung an, um die der Schatten versetzt wird, als Zahl.

### Rechtecke zeichnen

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Löscht die Pixel im angegebenen Rechteck und setzt sie auf transparentes Schwarz.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Malt die Pixel des angegebenen Rechtecks und füllt es mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Malt die Umrandung des angegebenen Rechtecks mit dem aktuellen Linienstil.

### Pfade zeichnen

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Startet einen neuen Pfad und leert die Liste der Unterpfade. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die Unterpfade des aktuellen Pfades mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Umrandungen der Unterpfade des aktuellen Pfades mit dem aktuellen Linienstil.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Wandelt den aktuellen oder angegebenen Pfad in die aktuelle Clipping-Region um und verwendet die angegebene Füllregel, um zu bestimmen, welche Punkte im Pfad liegen. Nachfolgende Pfadänderungen erscheinen nur innerhalb des Clipping-Pfades.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Ein Boolean, dessen Wert `true` ist, wenn der angegebene Punkt im aktuellen oder angegebenen Pfad enthalten ist.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Ein Boolean, dessen Wert `true` ist, wenn der Punkt innerhalb des durch das Streichen eines Pfades eingefassten Bereichs liegt.

### Bilder zeichnen

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild oder einen bestimmten Teil davon, optional in einer angegebenen Größe und Position.

### Linienstile

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Eine Zahl, die die Linienstärke in Koordinatenraumeinheiten angibt.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Typ der Enden an den Linienenden. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Definiert die Art der Ecken, an denen zwei Linien aufeinandertreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Eine Zahl, die das Verhältnis der Gehrungslimit in Koordinatenraumeinheiten angibt.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Liniendash-Muster als [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Zahlen zurück, die die Längen der abwechselnden Striche und Lücken in Koordinatenraumeinheiten angeben.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt die Liste der Linien- und Strichabstände als aktuelles Liniendash-Muster (wie bei der Strichzeichnung verwendet).
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnen soll.

### Pfade

- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Markiert den aktuellen Unterpfad als geschlossen, indem eine gerade Linie vom aktuellen Punkt zum Start gezeichnet wird, und beginnt einen neuen Unterpfad mit einem Punkt, der derselbe wie der Anfang und das Ende des neu geschlossenen Unterpfads ist. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, tut diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Verschiebt den Startpunkt eines neuen Unterpfads an die (x, y)-Koordinaten.
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit den angegebenen (x, y)-Koordinaten mit einer geraden Linie.
- [`CanvasRenderingContext2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt dem aktuellen Pfad eine kubische Bézierkurve hinzu.
- [`CanvasRenderingContext2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt dem aktuellen Pfad eine quadratische Bézierkurve hinzu.
- [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt dem aktuellen Pfad einen kreisförmigen Bogen hinzu.
- [`CanvasRenderingContext2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt dem aktuellen Pfad einen Bogen mit den angegebenen Kontrollpunkten und dem Radius hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt dem aktuellen Pfad einen elliptischen Bogen hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer durch _width_ und _height_ bestimmten Größe.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein Rechteck mit abgerundeten Ecken an der Position (x, y) mit einer durch _width_ und _height_ bestimmten Größe und durch _radii_ bestimmten Radien.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter) {{Non-standard_Inline}}
  - : Wendet einen CSS- oder SVG-Filter auf das Canvas an, z.B. um dessen Helligkeit oder Unschärfe zu ändern.

## Beispiele

Siehe vollständige Beispiele bei der [CSS Painting API](/de/docs/Web/API/CSS_Painting_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS Painting API](/de/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
