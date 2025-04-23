---
title: Ein Trefferfeld über ein Bild legen
slug: Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

Hier erfahren Sie, wie Sie eine Bildkarte einrichten, und einige Nachteile, die Sie zuerst berücksichtigen sollten.

<table>
<caption>Hier sind einige Dinge, die Sie wissen sollten</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen, wie man ein <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website">einfaches HTML-Dokument erstellt</a> und wie man <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage">zugängliche Bilder auf einer Webseite hinzufügt.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie verschiedene Bereiche eines Bildes erstellen, die auf verschiedene Seiten verlinken.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt nur clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, die erfordern, dass der Benutzer eine Maus hat.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild innerhalb von {{htmlelement('a')}} platzieren, verlinkt das gesamte Bild zu einer Webseite. Eine Bildkarte hingegen enthält mehrere aktive Bereiche (genannt "Hotspots"), die jeweils zu einer anderen Ressource verlinken.

Früher waren Bildkarten ein beliebtes Navigationsmittel, aber es ist wichtig, ihre Leistungs- und Zugänglichkeitsauswirkungen gründlich zu bedenken.

> [!WARNING]
> Mehrere Bilder, die auf dieselbe Bildkarte verweisen, können zu unerwartetem Browser-Verhalten führen, das die Benutzerfreundlichkeit und Zugänglichkeit stark beeinträchtigt. Zum Beispiel, wenn ein Benutzer mit der Tastatur ein Bild mit einer wiederverwendeten Bildkarte in Safari und Chromium-basierten Browsern navigiert, werden spätere Bildinstanzen, die dieselbe Bildkarte verwenden, vollständig übersprungen. In Firefox erhalten alle Bildkarten gleichzeitig Tastaturfokus und wenn der Benutzer mit der Tastatur am Bild vorbeinavigiert, ist das nächste fokussierte Element das nach der letzten Bildinstanz, wodurch effektiv alles zwischen den beiden Bildern übersprungen wird.

[Textlinks](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) (vielleicht mit CSS gestylt) sind Bildkarten aus mehreren Gründen vorzuziehen: Textlinks sind leichtgewichtig, wartbar, oft suchmaschinenfreundlicher und unterstützen Zugänglichkeitsanforderungen (z.B. Bildschirmleser, Text-Browser, Übersetzungsdienste).

## Anleitung zur korrekten Einfügung einer Bildkarte

### Schritt 1: Das Bild

Nicht jedes Bild ist geeignet.

- Das Bild muss klar machen, was passiert, wenn Personen Bildlinks folgen. `alt`-Text ist selbstverständlich obligatorisch, aber viele Menschen sehen ihn nie.
- Das Bild muss deutlich anzeigen, wo Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um komfortabel getippt werden zu können, in jeder Viewportgröße. Wie groß ist groß genug? [72 × 72 CSS-Pixel sind ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit zusätzlichen großzügigen Lücken zwischen den Touch-Zielen. Die Weltkarte auf [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt des Schreibens) veranschaulicht das Problem perfekt. Es ist viel einfacher, Russland oder Nordamerika zu tippen als Albanien oder Estland.

Sie fügen Ihr Bild [weitgehend wie gewohnt ein](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage) (mit einem {{htmlelement("img")}}-Element und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text). Wenn das Bild nur als Navigationsgerät vorhanden ist, können Sie `alt=""` schreiben, sofern Sie später in den {{htmlelement('area')}}-Elementen geeigneten [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)-Text bereitstellen.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attribut. Überlegen Sie sich einen eindeutigen Namen, der keine Leerzeichen enthält, für Ihre Bildkarte. Weisen Sie dann diesen Namen (vorangestellt mit einem Rautezeichen) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt platzieren Sie all Ihren Code innerhalb eines {{htmlelement('map')}}-Elements. `<map>` benötigt nur ein Attribut, denselben Karten[`name`](/de/docs/Web/HTML/Reference/Elements/map#name), den Sie in Ihrem `usemap`-Attribut oben verwendet haben:

```html
<map name="example-map-1"> </map>
```

Innerhalb des `<map>`-Elements benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzelnen Hotspot. Um die Tastaturnavigation intuitiv zu halten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

`<area>`-Elemente sind {{Glossary("void_element", "void elements")}}, erfordern jedoch vier Attribute:

- [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape)

  - : Das `shape`-Attribut nimmt einen von vier Werten an: `circle`, `rect`, `poly` und `default`. Ein `<area>`, dessen `shape` `default` ist, nimmt das gesamte Bild ein, abzüglich anderer von Ihnen definierter Hotspots.
    Wenn es Überschneidungen zwischen den definierten Bereichen gibt, bestimmt die Quellreihenfolge, welcher Bereich den Vorzug erhält.
    Die Form, die Sie wählen, bestimmt die Koordinateninformationen, die Sie in `coords` bereitstellen müssen.

- [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords)

  - : Koordinaten werden in CSS-Pixeln angegeben, und ihr Wert hängt von der gewählten `shape` ab.

    - Für einen Kreis geben Sie die x- und y-Koordinaten des Mittelpunkts an, gefolgt von der Länge des Radius.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecke an.
    - Für ein Polygon, geben Sie die x- und y-Koordinaten jeder Ecke an (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Reference/Elements/area#href)

  - : Die URL der Ressource, zu der Sie verlinken. Sie können dieses Attribut leer lassen, wenn Sie _nicht_ möchten, dass der aktuelle Bereich irgendwohin verlinkt (zum Beispiel, wenn Sie einen hohlen Kreis erstellen).

- [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)

  - : Ein obligatorisches Attribut, das den Leuten sagt, wohin der Link führt oder was er tut. `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beachten Sie unsere [Richtlinien zum Schreiben zugänglicher Linktexte](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording).

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

Sie sind erst fertig, wenn Sie Bildkarten gründlich auf vielen Browsern und Geräten getestet haben. Versuchen Sie, Links nur mit der Tastatur zu folgen. Versuchen Sie, Bilder auszuschalten.

Wenn Ihre Bildkarte breiter als ungefähr 240px ist, müssen Sie weitere Anpassungen vornehmen, um Ihre Website responsiv zu gestalten. Es reicht nicht aus, das Bild für kleine Bildschirme zu verkleinern, da die Koordinaten gleich bleiben und nicht mehr mit dem Bild übereinstimmen.

## Mehr erfahren

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online-Bildkarten-Editor](https://www.maschek.hu/imagemap/)
