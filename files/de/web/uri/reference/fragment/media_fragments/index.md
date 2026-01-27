---
title: Medienfragmente
slug: Web/URI/Reference/Fragment/Media_fragments
l10n:
  sourceCommit: 465d0f2adc0dd98c6122a8e6fc2c6b32ecce0b0c
---

**Medienfragmente** können in die URLs von Mediendateien (zum Beispiel [Video](/de/docs/Web/HTML/Reference/Elements/video) und [SVG](/de/docs/Web/SVG)) eingefügt werden, um anzugeben, dass Sie nur einen Teil des Mediums anzeigen möchten: Eine bestimmte Dauer oder ein bestimmtes Dimension.

## Konzepte und Verwendung

Beim Anzeigen mehrerer Teile eines Mediums kann es praktischer und effizienter sein, alle Medien in einer einzigen Datei zu speichern und dann jeweils nur den erforderlichen Inhalt anzuzeigen.

Medienfragmente ermöglichen dies über URL-Fragmente. Die Spezifikation definiert zwei verschiedene Typen:

- **Temporale Dimensionfragmente** erlauben es Ihnen, einen Teil eines Videos oder einer Animation von einem bestimmten Startzeitpunkt bis zu einem bestimmten Endzeitpunkt abzuspielen, wonach das Medium pausiert.
- **Räumliche Dimensionfragmente** erlauben es Ihnen, einen bestimmten rechteckigen Bereich des Mediums anzuzeigen, indem Sie die Abmessungen und die Koordinaten der oberen linken Ecke des Anzeigebereichs angeben.

## Syntax für temporale Dimensionfragmente

```url
https://example.com/video.mp4#t=[npt:][timeStart][,timeEnd]
```

Die wichtigsten Teile der Syntax sind:

- `t=`
  - : Der Beginn der Syntax für die temporale Dimension. Dies muss immer hinter dem Rautezeichen eingefügt werden.
- `npt:` {{optional_inline}}
  - : Der Namenkennzeichner des verwendeten Syntaxformats. `npt` steht für **normale Spielzeit** und ist das Standard- und einzige unterstützte Format, daher kann dieser Teil weggelassen werden.
- `timeStart` {{optional_inline}}
  - : Die Startdauer des Medienabschnitts.
- `timeEnd` {{optional_inline}}
  - : Die Enddauer des Medienabschnitts.

Die Werte `timeStart` und `timeEnd` können in den folgenden Formaten angegeben werden, die innerhalb desselben Fragments gemischt werden können:

- `seconds`
  - : Eine Zahl, die einen Wert in Sekunden darstellt. Dies ist eine Zahl von `0` oder höher, die zur Angabe eines Sekundenbruchteils eine Dezimalstelle enthalten kann.
- `hh:mm:ss`
  - : Stunden-, Minuten- und Sekundenwerte, getrennt durch Doppelpunkte. Der Stundenwert ist eine ganze Zahl von `0` oder höher. Der Minutenwert ist eine ganze Zahl zwischen `0` und `59`. Der Sekundenwert ist eine Zahl zwischen `0` und `59`, die zur Angabe eines Sekundenbruchteils eine Dezimalstelle enthalten kann.
- `mm:ss`
  - : Minuten- und Sekundenwerte, getrennt durch einen Doppelpunkt. Der Minutenwert ist eine ganze Zahl zwischen `0` und `59`. Der Sekundenwert ist eine Zahl zwischen `0` und `59`, die zur Angabe eines Sekundenbruchteils eine Dezimalstelle enthalten kann.

Zum Beispiel würden die folgenden Fragmente das Medium alle vom Anfang bis 5 Sekunden abspielen:

```plain
#t=0,5
#t=,5
#t=0:00:00,5
#t=00:00,0:00:05
```

Die folgenden zwei Fragmente würden das Medium beide von 2 Sekunden bis zum Ende abspielen.

```plain
#t=2
#t=0:00:02
```

Die folgenden Fragmente würden das Medium von 2 Sekunden bis 3,5 Sekunden abspielen.

```plain
#t=2,3.5
#t=0:00:02,3.5
#t=0:00:02,00:03.5
```

## Syntax für räumliche Dimensionfragmente

```url
https://example.com/test.svg#xywh=[unit:]xCoord,yCoord,width,height
```

Die wichtigsten Teile der Syntax sind:

- `xywh=`
  - : Der Beginn der Syntax für die räumliche Dimension. Dies muss immer hinter dem Rautezeichen eingefügt werden.
- `unit:` {{optional_inline}}
  - : Die Einheiten, die für `xCoord`, `yCoord`, `width` und `height` anzugeben sind. Standardmäßig `pixel:`, wenn weggelassen. Mögliche Werte sind:
    - `pixel:`
      - : Werte kennzeichnen eine absolute Anzahl von Pixeln.
    - `percent:`
      - : Werte kennzeichnen einen Prozentsatz der intrinsischen Breite oder Höhe des Mediums.
- `xCoord`
  - : Der horizontale Abstand der linken oberen Ecke des Anzeigebereichs von der oberen linken Ecke des Mediums.
- `yCoord`
  - : Der vertikale Abstand der oberen linken Ecke des Anzeigebereichs von der oberen linken Ecke des Mediums.
- `width`
  - : Die Breite des Anzeigebereichs.
- `height`
  - : Die Höhe des Anzeigebereichs.

Zum Beispiel würden die folgenden Fragmente beide einen `320x240` Pixel großen Bereich anzeigen, dessen obere linke Ecke `160px` von links und `120px` von oben des ursprünglichen Mediums verschoben ist.

```plain
xywh=160,120,320,240
xywh=pixel:160,120,320,240
```

Das folgende Fragment würde einen `50%x50%` Bereich anzeigen, dessen obere linke Ecke `25%` von links und `25%` von oben des ursprünglichen Mediums verschoben ist.

```plain
xywh=percent:25,25,50,50
```

## Beispiele

### Begrenzte Zeitabschnitte aus Audio- und Videodateien abspielen

#### HTML

Der folgende HTML-Ausschnitt bettet ein Video und ein Audio-Snippet auf der Seite ein und enthält temporale Fragmente auf den Medien-URLs, um die Wiedergabemenge zu begrenzen:

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

Versuchen Sie, die Video- und Audiodateien mit den bereitgestellten Playern abzuspielen, um zu sehen, wie die temporalen Fragmente die Wiedergabe beeinflussen. Das ursprüngliche Video ist 5 Sekunden lang, aber es wird ein Abschnitt zwischen Sekunde 2 und 4 abgespielt. Das ursprüngliche Audio ist 2 Sekunden lang, aber nur die erste Sekunde wird abgespielt.

### Ein Teil eines SVG-Bildes anzeigen

#### HTML

In diesem Beispiel betten wir ein SVG-Bild in die Seite ein, indem wir ein {{htmlelement("img")}}-Element verwenden, und fügen dasselbe Bild als CSS-Hintergrund auf einem {{htmlelement("div")}}-Element hinzu.

Beim Quellpfad des `<img>`-Elements fügen wir ein räumliches Fragment `#xywh=100,100,400,400` ein, das einen 400x400 Pixel großen Teil des Bildes anzeigt, dessen obere linke Ecke bei einer Koordinate `(100,100)` von der oberen linken Ecke des ursprünglichen Bildes liegt. Wir setzen `width` und `height` auf `200`, wodurch der ausgeschnittene Bildbereich in einer Größe von 200x200 Pixeln angezeigt wird.

```html live-sample___limited-dimension
<img
  src="/shared-assets/images/examples/firefox-logo.svg#xywh=100,100,400,400"
  width="200"
  height="200" />

<hr />

<div class="bgtest"></div>
```

#### CSS

Wir setzen ein CSS-{{cssxref("background-image")}} auf unser `<div>`-Element, das auf dasselbe SVG-Bild verweist. Diesmal ist das räumliche Fragment `#xywh=100,100,100,100`, was den Bildteil 100x100 Pixel groß macht, mit seiner oberen linken Ecke bei einer Koordinate `(100,100)` von der oberen linken Ecke des ursprünglichen Bildes. Wir setzen die {{cssxref("background-size")}}-Eigenschaft auf `50px 50px`, sodass der Bereich in der Größe 50x50 Pixel über den `<div>`-Hintergrund gekachelt wird.

```css live-sample___limited-dimension
.bgtest {
  width: 100%;
  height: 200px;
  background-image: url("/shared-assets/images/examples/firefox-logo.svg#xywh=100,100,100,100");
  background-size: 50px 50px;
}
```

#### Ergebnis

Der obige Code wird wie folgt angezeigt:

{{embedlivesample("limited-dimension", "100%", 440)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Die Unterstützung für Medienfragmente ist auf die folgenden Kontexte beschränkt:

- Temporale Fragmente funktionieren bei Video- und Audiodatei-URLs (zum Beispiel, wie sie in `<audio>` und `<video>`-Elementen verwendet werden) in allen modernen Browsern.
- Temporale Fragmente funktionieren auch mit [SVG-Bilddateien](/de/docs/Web/SVG/Guides/SVG_as_an_image), die [SMIL-Animationen](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL) in [Firefox 147](/de/docs/Mozilla/Firefox/Releases/147) und höher enthalten.
- Räumliche Fragmente funktionieren mit SVG-Bilddateien in Firefox 147 und höher. Pixelwerte funktionieren erwartungsgemäß, aber Prozentwerte scheinen unzuverlässig zu funktionieren, weshalb wir empfehlen, sie zu vermeiden.
