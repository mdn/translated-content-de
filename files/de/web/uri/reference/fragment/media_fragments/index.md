---
title: Media-Fragmente
slug: Web/URI/Reference/Fragment/Media_fragments
l10n:
  sourceCommit: 93eb85aec36d1a929ac8dfc7dbf1ed297992608f
---

**Media-Fragmente** können in Medien-Datei-URLs eingefügt werden (zum Beispiel [video](/de/docs/Web/HTML/Reference/Elements/video) und [SVG](/de/docs/Web/SVG)), um anzugeben, dass Sie nur einen Teil des Mediums anzeigen möchten: Eine bestimmte Dauer oder eine bestimmte Dimension.

## Konzepte und Nutzung

Beim Anzeigen mehrerer Medienabschnitte könnte es praktischer und effizienter sein, alle Medien in einer einzigen Datei zu speichern und anschließend in jedem Fall nur den benötigten Teil des Inhalts anzuzeigen.

Media-Fragmente ermöglichen dies durch URL-Fragmente. Die Spezifikation definiert zwei verschiedene Typen:

- **Fragmente der zeitlichen Dimension** erlauben es, einen Teil eines Videos oder einer Animation von einem bestimmten Startzeitpunkt bis zu einem bestimmten Endzeitpunkt abzuspielen, wonach das Medium pausieren wird.
- **Fragmente der räumlichen Dimension** erlauben es, einen spezifischen rechteckigen Bereich des Mediums anzuzeigen, indem Sie die Dimensionen des anzuzeigenden Bereichs und die Koordinaten der oberen linken Ecke dieses Bereichs angeben.

## Syntax für Fragmente der zeitlichen Dimension

```url
https://example.com/video.mp4#t=[npt:][timeStart][,timeEnd]
```

Die wichtigsten Teile der Syntax sind:

- `t=`
  - : Der Beginn der Syntax für die zeitliche Dimension. Dies muss immer nach dem Hash/Pfund-Symbol eingefügt werden.
- `npt:` {{optional_inline}}
  - : Der Bezeichner des verwendeten Syntaxformats. `npt` steht für **normal play time** (normale Abspielzeit) und ist das Standard- und einzige unterstützte Format, weshalb dieser Teil weggelassen werden kann.
- `timeStart` {{optional_inline}}
  - : Die Startdauer des Medienabschnitts.
- `timeEnd` {{optional_inline}}
  - : Die Enddauer des Medienabschnitts.

Die Werte für `timeStart` und `timeEnd` können in den folgenden Formaten angegeben werden, die innerhalb desselben Fragments gemischt werden können:

- `seconds`
  - : Eine Zahl, die einen Wert in Sekunden darstellt. Dies ist eine Zahl von `0` oder darüber, die einen Dezimalanteil enthalten kann, um einen Sekundenbruchteil anzuzeigen.
- `hh:mm:ss`
  - : Stunden-, Minuten- und Sekundenwerte, getrennt durch Doppelpunkte. Der Stundenwert ist eine Ganzzahl von `0` oder mehr. Der Minutenwert ist eine Ganzzahl zwischen `0` und `59`. Der Sekundenwert ist eine Zahl zwischen `0` und `59`, die einen Dezimalanteil enthalten kann, um einen Sekundenbruchteil anzuzeigen.
- `mm:ss`
  - : Minuten- und Sekundenwerte, getrennt durch einen Doppelpunkt. Der Minutenwert ist eine Ganzzahl zwischen `0` und `59`. Der Sekundenwert ist eine Zahl zwischen `0` und `59`, die einen Dezimalanteil enthalten kann, um einen Sekundenbruchteil anzuzeigen.

Zum Beispiel würden die folgenden Fragmente alle das Medium vom Anfang bis 5 Sekunden abspielen:

```plain
#t=0,5
#t=,5
#t=0:00:00,5
#t=00:00,0:00:05
```

Die folgenden zwei Fragmente würden beide das Medium von 2 Sekunden nach Beginn des Mediums bis zum Ende abspielen.

```plain
#t=2
#t=0:00:02
```

Die folgenden Fragmente würden das Medium von 2 Sekunden nach Beginn bis 3,5 Sekunden abspielen.

```plain
#t=2,3.5
#t=0:00:02,3.5
#t=0:00:02,00:03.5
```

## Syntax für Fragmente der räumlichen Dimension

```url
https://example.com/test.svg#xywh=[unit:]xCoord,yCoord,width,height
```

Die wichtigsten Teile der Syntax sind:

- `xywh=`
  - : Der Beginn der Syntax für die räumliche Dimension. Dies muss immer nach dem Hash/Pfund-Symbol eingefügt werden.
- `unit:` {{optional_inline}}
  - : Die Einheiten für die Angabe von `xCoord`, `yCoord`, `width` und `height`. Standardmäßig `pixel:` wenn weggelassen. Mögliche Werte sind:
    - `percent:`
      - : Werte bedeuten eine absolute Anzahl an Pixeln.
    - `pixel:`
      - : Werte bedeuten einen Prozentsatz der intrinsischen Breite oder Höhe des Mediums.
- `xCoord`
  - : Die horizontale Entfernung der oberen linken Ecke des dargestellten Bereichs von der oberen linken Ecke des Mediums.
- `yCoord`
  - : Die vertikale Entfernung der oberen linken Ecke des dargestellten Bereichs von der oberen linken Ecke des Mediums.
- `width`
  - : Die Breite des dargestellten Bereichs.
- `height`
  - : Die Höhe des dargestellten Bereichs.

Zum Beispiel würden die folgenden Fragmente beide ein `320x240` Pixel großes Rechteck anzeigen, dessen obere linke Ecke `160px` vom linken und `120px` vom oberen Rand des ursprünglichen Mediums entfernt ist.

```plain
xywh=160,120,320,240
xywh=pixel:160,120,320,240
```

Das folgende Fragment würde ein `50%x50%` großes Rechteck anzeigen, dessen obere linke Ecke `25%` vom linken und `25%` vom oberen Rand des ursprünglichen Mediums entfernt ist.

```plain
xywh=percent:25,25,50,50
```

## Beispiele

### Abspielen zeitlich begrenzter Auszüge aus Audio- und Videodateien

#### HTML

Das folgende HTML-Snippet bettet ein Video und ein Audio-Snippet auf der Seite ein und enthält zeitliche Fragmente in den Medien-URLs, um die Wiedergabemenge zu begrenzen:

```html live-sample___limited-time
<video controls width="250">
  <source src="/shared-assets/videos/flower.mp4#t=2,4" type="video/mp4" />
</video>

<hr />

<audio controls src="/shared-assets/audio/t-rex-roar.mp3#t=,00:01"></audio>
```

#### Ergebnis

Dies wird wie folgt dargestellt:

{{embedlivesample("limited-time", "100%", 220)}}

Versuchen Sie, die Video- und Audiodateien mit den bereitgestellten Playern abzuspielen, um zu sehen, wie die zeitlichen Fragmente die Wiedergabe beeinflussen. Das Originalvideo ist 5 Sekunden lang, aber ein Auszug zwischen der 2. und 4. Sekunde wird abgespielt. Das Originalaudio ist 2 Sekunden lang, aber nur die erste Sekunde wird abgespielt.

### Anzeigen eines Teils eines SVG-Bildes

#### HTML

In diesem Beispiel betten wir ein SVG-Bild auf der Seite mit einem {{htmlelement("img")}} Element ein und fügen dasselbe Bild auch als CSS-Hintergrund auf ein {{htmlelement("div")}} Element ein.

In der Quelle des `<img>` Elements fügen wir ein räumliches Fragment, `#xywh=100,100,400,400`, ein, das einen 400x400 Pixel großen Teil des Bildes mit dessen oberer, linker Ecke an einer Koordinate von `(100,100)` von der oberen, linken Ecke des ursprünglichen Bildes anzeigt. Wir setzen `width` und `height` auf `200`, was dazu führt, dass der ausgeschnittene Bildabschnitt in einer Größe von 200x200 Pixeln angezeigt wird.

```html live-sample___limited-dimension
<img
  src="/shared-assets/images/examples/firefox-logo.svg#xywh=100,100,400,400"
  width="200"
  height="200" />

<hr />

<div class="bgtest"></div>
```

#### CSS

Wir setzen ein CSS {{cssxref("background-image")}} auf unser `<div>` Element, das auf dasselbe SVG-Bild zeigt. Dabei ist das räumliche Fragment `#xywh=100,100,100,100`, was den Bildabschnitt auf 100x100 Pixel macht, mit dessen oberer, linker Ecke an einer Koordinate von `(100,100)` von der oberen, linken Ecke des ursprünglichen Bildes. Wir setzen die {{cssxref("background-size")}} Eigenschaft auf `50px 50px`, sodass der Abschnitt mit einer Größe von 50x50 Pixeln über den `<div>` Hintergrund gekachelt wird.

```css live-sample___limited-dimension
.bgtest {
  width: 100%;
  height: 200px;
  background-image: url("/shared-assets/images/examples/firefox-logo.svg#xywh=100,100,100,100");
  background-size: 50px 50px;
}
```

#### Ergebnis

Der obige Code wird wie folgt dargestellt:

{{embedlivesample("limited-dimension", "100%", 440)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Unterstützung für Media-Fragmente ist auf die folgenden Kontexte beschränkt:

- Zeitliche Fragmente funktionieren bei Video- und Audio-Datei-URLs (zum Beispiel, wie sie in `<audio>` und `<video>` Elementen verwendet werden) in allen modernen Browsern.
- Zeitliche Fragmente funktionieren auch bei [SVG-Bilddateien](/de/docs/Web/SVG/Guides/SVG_as_an_image) mit [SMIL-Animationen](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) in [Firefox 147](/de/docs/Mozilla/Firefox/Releases/147) und höher.
- Räumliche Fragmente funktionieren bei SVG-Bilddateien in Firefox 147 und höher. Pixelwerte funktionieren wie erwartet, aber Prozentwerte scheinen unzuverlässig zu funktionieren, und wir empfehlen, sie zu vermeiden.
