---
title: Eine Hitmap über ein Bild legen
slug: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Hier erläutern wir, wie Sie eine Bildkarte einrichten und welche Nachteile Sie zuerst beachten sollten.

<table>
<caption>Hier sind einige Dinge, die Sie wissen müssen</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen, wie man ein <a href="/de/docs/Learn/Getting_started_with_the_web">grundlegendes HTML-Dokument erstellt</a> und wie man <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#how_do_we_put_an_image_on_a_webpage">zugängliche Bilder zu einer Webseite hinzufügt.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie verschiedene Bereiche eines Bildes zu unterschiedlichen Seiten verlinken.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt ausschließlich clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, die voraussetzen, dass der Benutzer eine Maus hat.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild innerhalb eines {{htmlelement('a')}}-Elements verschachteln, verlinkt das gesamte Bild auf eine Webseite. Eine Bildkarte hingegen enthält mehrere aktive Bereiche (genannt "Hotspots"), die jeweils zu einer anderen Ressource führen.

Bildkarten waren früher ein beliebtes Navigationsmittel, aber es ist wichtig, ihre Leistungs- und Zugänglichkeitsauswirkungen gründlich zu berücksichtigen.

[Textlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) (möglicherweise mit CSS gestaltet) sind gegenüber Bildkarten aus mehreren Gründen vorzuziehen: Textlinks sind leichtgewichtig, wartungsfreundlich, oft SEO-freundlicher und unterstützen Barrierefreiheitsbedürfnisse (z.B. Bildschirmleser, Textbrowser, Übersetzungsdienste).

## Anleitung zum korrekten Einfügen einer Bildkarte

### Schritt 1: Das Bild

Nicht jedes Bild ist geeignet.

- Es muss klar erkennbar sein, was passiert, wenn Leute den Bildlinks folgen. `alt`-Text ist natürlich obligatorisch, aber viele Menschen sehen ihn nie.
- Das Bild muss klar angeben, wo Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um bequem angetippt werden zu können, unabhängig von der Größe des Viewports. Wie groß ist groß genug? [72 × 72 CSS-Pixel sind ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit zusätzlichen großzügigen Abständen zwischen den Zielen. Die Weltkarte auf [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt des Schreibens) illustriert das Problem perfekt. Es ist viel einfacher, Russland oder Nordamerika anzutippen als Albanien oder Estland.

Sie fügen Ihr Bild ein [wie gewohnt](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#how_do_we_put_an_image_on_a_webpage) (mit einem {{htmlelement("img")}}-Element und [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text). Wenn das Bild nur als Navigationsmittel vorhanden ist, können Sie `alt=""` schreiben, vorausgesetzt, Sie stellen später geeigneten [`alt`](/de/docs/Web/HTML/Element/area#alt)-Text in den {{htmlelement('area')}}-Elementen bereit.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attribut. Überlegen Sie sich einen einzigartigen Namen ohne Leerzeichen für Ihre Bildkarte. Weisen Sie diesen Namen (mit einem Rautezeichen davor) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt setzen Sie Ihren gesamten Code in ein {{htmlelement('map')}}-Element. `<map>` benötigt nur ein Attribut, den gleichen Karten[`namen`](/de/docs/Web/HTML/Element/map#name), den Sie oben in Ihrem `usemap`-Attribut verwendet haben:

```html
<map name="example-map-1"> </map>
```

Innerhalb des `<map>`-Elements benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzelnen Hotspot. Um die Tastaturnavigation intuitiv zu gestalten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

`<area>`-Elemente sind [leere Elemente](/de/docs/Glossary/void_element), benötigen jedoch vier Attribute:

- [`shape`](/de/docs/Web/HTML/Element/area#shape)

  - : Das `shape`-Attribut nimmt einen von vier Werten an: `circle`, `rect`, `poly` und `default`. Ein `<area>`, dessen `shape` `default` ist, nimmt das gesamte Bild ein, abzüglich anderer definierter Hotspots. Falls es Überlappungen zwischen den definierten Bereichen gibt, bestimmt die Quellreihenfolge, welcher Bereich bevorzugt wird. Die gewählte Form bestimmt die Koordinateninformationen, die Sie in `coords` angeben müssen.

- [`coords`](/de/docs/Web/HTML/Element/area#coords)

  - : Die Koordinaten werden in CSS-Pixeln angegeben und der Wert hängt von der gewählten `shape` ab.

    - Für einen Kreis geben Sie die x- und y-Koordinaten des Zentrums an, gefolgt von der Länge des Radius.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecken an.
    - Für ein Polygon geben Sie die x- und y-Koordinaten jeder Ecke an (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Element/area#href)

  - : Die URL der Ressource, zu der Sie verlinken. Sie können dieses Attribut leer lassen, wenn Sie _nicht_ möchten, dass der aktuelle Bereich irgendwohin verlinkt (z.B. wenn Sie einen hohlen Kreis erstellen).

- [`alt`](/de/docs/Web/HTML/Element/area#alt)

  - : Ein obligatorisches Attribut, das den Leuten sagt, wohin der Link geht oder was er tut. `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beachten Sie unsere [Leitlinien zum Schreiben zugänglicher Linktexte.](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording)

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

Sie sind erst fertig, wenn Sie Bildkarten gründlich in vielen Browsern und auf vielen Geräten getestet haben. Versuchen Sie, Links nur mit der Tastatur zu folgen. Versuchen Sie, Bilder auszuschalten.

Wenn Ihre Bildkarte breiter als etwa 240px ist, müssen Sie weitere Anpassungen vornehmen, um Ihre Website responsiv zu gestalten. Es reicht nicht aus, das Bild für kleine Bildschirme zu verkleinern, da die Koordinaten gleich bleiben und nicht mehr zum Bild passen.

## Mehr erfahren

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online-Bildkarteneditor](https://www.maschek.hu/imagemap/)
