---
title: Eine Bildkarte über ein Bild hinzufügen
slug: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: ef93687a7a22fa072a7a0021304926e9018eb48a
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Hier erklären wir, wie man eine Bildkarte einrichtet und einige Nachteile, die man zuerst beachten sollte.

<table>
<caption>Einige Dinge, die Sie wissen müssen</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen, wie man ein <a href="/de/docs/Learn/Getting_started_with_the_web">grundlegendes HTML-Dokument erstellt</a> und wie man <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#how_do_we_put_an_image_on_a_webpage">zugängliche Bilder in eine Webseite einfügt.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie verschiedene Bereiche eines Bildes mit unterschiedlichen Seiten verlinken.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt nur clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, die erfordern, dass der Benutzer eine Maus besitzt.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild in ein {{htmlelement('a')}}-Element einbetten, verlinkt das gesamte Bild auf eine Webseite. Eine Bildkarte hingegen enthält mehrere aktive Bereiche (sogenannte "Hotspots"), die jeweils auf eine andere Ressource verweisen.

Früher waren Bildkarten ein beliebtes Navigationsinstrument, aber es ist wichtig, ihre Leistungs- und Barrierefreiheitsaspekte gründlich zu berücksichtigen.

> [!WARNING]
> Mehrere Bilder, die auf dieselbe Bildkarte verweisen, können zu unerwartetem Browserverhalten führen, was die Benutzerfreundlichkeit und Barrierefreiheit erheblich einschränkt. Beispielsweise werden in Safari und Chromium-basierten Browsern die späteren Bildinstanzen, die dieselbe Bildkarte verwenden, beim Navigieren mit der Tastatur vollständig übersprungen. In Firefox erhalten alle Bildkarten gleichzeitig den Tastaturfokus, und wenn der Benutzer die Tastatursteuerung verwendet, wird das nächste fokussierte Element dasjenige nach der letzten Bildinstanz sein, wodurch effektiv alles zwischen den beiden Bildern übersprungen wird.

[Textlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) (vielleicht mit CSS gestaltet) sind Bildkarten aus mehreren Gründen vorzuziehen: Textlinks sind leichtgewichtig, wartbar, oft SEO-freundlicher und unterstützen Barrierefreiheitsanforderungen (z.B. Bildschirmleser, Textbrowser, Übersetzungsdienste).

## Anleitung zum richtigen Einfügen einer Bildkarte

### Schritt 1: Das Bild

Nicht jedes Bild ist akzeptabel.

- Das Bild muss klar machen, was passiert, wenn Leute Bildlinks folgen. `alt`-Text ist selbstverständlich obligatorisch, aber viele Leute sehen ihn nie.
- Das Bild muss klar anzeigen, wo Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um bequem angetippt zu werden, unabhängig von der Anzeigengröße. Wie groß ist groß genug? [72 × 72 CSS-Pixel sind ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit großzügigen Abständen zwischen den Touchzielen. Die Weltkarte auf [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt der Erstellung) veranschaulicht das Problem perfekt. Es ist viel einfacher, Russland oder Nordamerika anzutippen als Albanien oder Estland.

Sie fügen Ihr Bild ein [wie gewohnt](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#how_do_we_put_an_image_on_a_webpage) (mit einem {{htmlelement("img")}}-Element und `alt`-Text). Wenn das Bild nur als Navigationshilfe dient, können Sie `alt=""` schreiben, vorausgesetzt, Sie geben im weiteren Verlauf geeigneten `alt`-Text in den {{htmlelement('area')}}-Elementen an.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attribut. Überlegen Sie sich einen eindeutigen Namen ohne Leerzeichen für Ihre Bildkarte. Weisen Sie dann diesen Namen (vorangestellt mit einem Hash) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt fügen Sie all Ihren Code in ein {{htmlelement('map')}}-Element ein. `<map>` benötigt nur ein Attribut, denselben Karten[`name`](/de/docs/Web/HTML/Element/map#name), den Sie auch in Ihrem `usemap`-Attribut oben verwendet haben:

```html
<map name="example-map-1"> </map>
```

Innerhalb des `<map>`-Elements benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzigen Hotspot. Um die Tastaturnavigation intuitiv zu halten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

`<area>`-Elemente sind {{Glossary("void_element", "void elements")}}, benötigen jedoch vier Attribute:

- [`shape`](/de/docs/Web/HTML/Element/area#shape)

  - : Das `shape`-Attribut nimmt einen von vier Werten an: `circle`, `rect`, `poly` und `default`. Ein `<area>`-Element, dessen `shape` `default` ist, nimmt das gesamte Bild ein, abzüglich der von Ihnen definierten anderen Hotspots.
    Wenn es Überschneidungen zwischen den definierten Bereichen gibt, bestimmt die Quellreihenfolge, welcher Bereich Vorrang hat.
    Die von Ihnen gewählte Form bestimmt die Koordinateninformationen, die Sie in `coords` angeben müssen.

- [`coords`](/de/docs/Web/HTML/Element/area#coords)

  - : Koordinaten werden in CSS-Pixel angegeben, und ihr Wert hängt von der ausgewählten `shape` ab.

    - Für einen Kreis geben Sie die x- und y-Koordinaten des Mittelpunkts sowie die Länge des Radius an.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecken an.
    - Für ein Polygon geben Sie die x- und y-Koordinaten jeder Ecke an (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Element/area#href)

  - : Die URL der Ressource, auf die Sie verlinken. Dieses Attribut kann leer bleiben, wenn Sie nicht möchten, dass der aktuelle Bereich irgendwohin verlinkt (zum Beispiel, wenn Sie einen hohlen Kreis erstellen).

- [`alt`](/de/docs/Web/HTML/Element/area#alt)

  - : Ein obligatorisches Attribut, das anzeigt, wohin der Link führt oder was er bewirkt. Der `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beachten Sie unsere [Richtlinien zum Schreiben von zugänglichem Linktext.](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording)

    Sie können `alt=""` schreiben, wenn das `href`-Attribut leer ist _und_ das gesamte Bild bereits ein `alt`-Attribut hat.

```html
<map name="example-map-1">
  <area
    shape="circle"
    coords="200,250,25"
    href="page-2.html"
    alt="circle example" />

  <area
    shape="rect"
    coords="10, 5, 20, 15"
    href="page-3.html"
    alt="rectangle example" />
</map>
```

### Schritt 3: Stellen Sie sicher, dass es für alle funktioniert

Sie sind nicht fertig, bis Sie Bildkarten gründlich in vielen Browsern und auf vielen Geräten getestet haben. Versuchen Sie, Links nur mit der Tastatur zu folgen. Versuchen Sie, Bilder auszuschalten.

Wenn Ihre Bildkarte breiter als etwa 240px ist, müssen Sie weitere Anpassungen vornehmen, um Ihre Website reaktionsfähig zu machen. Es ist nicht ausreichend, das Bild für kleine Bildschirme zu verkleinern, da die Koordinaten gleich bleiben und nicht mehr mit dem Bild übereinstimmen.

## Weitere Informationen

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online Bildkarten-Editor](https://www.maschek.hu/imagemap/)
