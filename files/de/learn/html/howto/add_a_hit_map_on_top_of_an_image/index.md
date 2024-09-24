---
title: Fügen Sie eine Hitmap zu einem Bild hinzu
slug: Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{QuickLinksWithSubpages("/de/docs/Learn/HTML/Howto")}}

Hier erläutern wir, wie Sie eine Bildkarte einrichten und einige Nachteile, die Sie zuerst berücksichtigen sollten.

<table>
<caption>Hier sind einige Dinge, die Sie wissen müssen</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen, wie Sie <a href="/de/docs/Learn/Getting_started_with_the_web">ein grundlegendes HTML-Dokument erstellen</a> und wie Sie <a href="/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#how_do_we_put_an_image_on_a_webpage">zugängliche Bilder zu einer Webseite hinzufügen.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie verschiedene Bereiche eines Bildes zu unterschiedlichen Seiten verlinken.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt ausschließlich clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, die vom Benutzer die Verwendung einer Maus erfordern.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild innerhalb von {{htmlelement('a')}} verschachteln, verlinkt das gesamte Bild auf eine Webseite. Eine Bildkarte hingegen enthält mehrere aktive Bereiche (sogenannte "Hotspots"), die jeweils zu einer anderen Ressource verlinken.

Früher waren Bildkarten ein beliebtes Navigationsmittel, aber es ist wichtig, ihre Auswirkungen auf Leistung und Zugänglichkeit gründlich zu überprüfen.

[Textlinks](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) (möglicherweise mit CSS gestylt) sind aus mehreren Gründen Bildkarten vorzuziehen: Textlinks sind leichter, wartungsfreundlicher, oft SEO-freundlicher und unterstützen Zugänglichkeit (z. B. Screenreader, Textbrowser, Übersetzungsdienste).

## So fügen Sie eine Bildkarte korrekt ein

### Schritt 1: Das Bild

Nicht jedes Bild ist geeignet.

- Das Bild muss klar machen, was passiert, wenn Benutzer Bildlinks folgen. `alt`-Text ist natürlich obligatorisch, aber viele Leute sehen ihn nie.
- Das Bild muss klar anzeigen, wo Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um bequem angetippt zu werden, unabhängig von der Viewport-Größe. Wie groß ist groß genug? [72 × 72 CSS-Pixel sind ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit zusätzlich großzügigen Abständen zwischen den Berührungszielen. Die Weltkarte auf [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt des Schreibens) illustriert das Problem perfekt. Es ist viel einfacher, Russland oder Nordamerika anzutippen als Albanien oder Estland.

Sie fügen Ihr Bild [fast wie gewohnt ein](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML#how_do_we_put_an_image_on_a_webpage) (mit einem {{htmlelement("img")}}-Element und [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text). Wenn das Bild nur als Navigationshilfe vorhanden ist, können Sie `alt=""` schreiben, vorausgesetzt, Sie liefern später im {{htmlelement('area')}}-Element entsprechenden [`alt`](/de/docs/Web/HTML/Element/area#alt)-Text.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attribut. Überlegen Sie sich einen eindeutigen Namen ohne Leerzeichen für Ihre Bildkarte. Weisen Sie diesen Namen (vorangestellt mit einem Hash) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt fügen Sie Ihren gesamten Code in ein {{htmlelement('map')}}-Element ein. `<map>` benötigt nur ein Attribut, denselben [`name`](/de/docs/Web/HTML/Element/map#name)-Wert wie für das `usemap`-Attribut oben:

```html
<map name="example-map-1"> </map>
```

Im `<map>`-Element benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzelnen Hotspot. Um die Tastaturnavigation intuitiv zu halten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

`<area>`-Elemente sind {{glossary("void element", "void elements")}}, erfordern aber vier Attribute:

- [`shape`](/de/docs/Web/HTML/Element/area#shape)

  - : Das `shape`-Attribut nimmt einen von vier Werten an: `circle`, `rect`, `poly` und `default`. Ein `<area>` mit dem `shape`-Wert `default` nimmt das gesamte Bild ein, abzüglich anderer von Ihnen definierter Hotspots.
    Bei Überlappungen zwischen den definierten Bereichen bestimmt die Quellreihenfolge, welcher Bereich Vorrang hat.
    Die gewählte Form bestimmt die Koordinateninformationen, die Sie in `coords` bereitstellen müssen.

- [`coords`](/de/docs/Web/HTML/Element/area#coords)

  - : Koordinaten werden in CSS-Pixeln angegeben, und ihr Wert hängt von der ausgewählten `shape` ab.

    - Für einen Kreis geben Sie die x- und y-Koordinaten des Mittelpunkts an, gefolgt von der Längen des Radius.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecken an.
    - Für ein Polygon geben Sie die x- und y-Koordinaten jeder Ecke an (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Element/area#href)

  - : Die URL der Ressource, auf die Sie verlinken. Sie können dieses Attribut leer lassen, wenn Sie _nicht_ möchten, dass das aktuelle Gebiet irgendwohin verlinkt (zum Beispiel, wenn Sie einen hohlen Kreis erstellen).

- [`alt`](/de/docs/Web/HTML/Element/area#alt)

  - : Ein obligatorisches Attribut, das den Menschen sagt, wohin der Link geht oder was er tut. `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beachten Sie unsere [Richtlinien zum Schreiben von zugänglichem Linktext.](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#use_clear_link_wording)

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

Sie sind nicht fertig, bis Sie Bildkarten rigoros in vielen Browsern und auf vielen Geräten getestet haben. Versuchen Sie, Links nur mit Ihrer Tastatur zu folgen. Versuchen Sie, Bilder auszuschalten.

Wenn Ihre Bildkarte breiter als ungefähr 240px ist, müssen Sie weitere Anpassungen vornehmen, um Ihre Website responsiv zu gestalten. Es reicht nicht aus, das Bild für kleine Bildschirme zu verkleinern, da die Koordinaten gleich bleiben und nicht mehr mit dem Bild übereinstimmen.

## Mehr erfahren

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online Bildkarten-Editor](https://www.maschek.hu/imagemap/)
