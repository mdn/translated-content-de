---
title: Platzieren Sie eine Hitmap auf einem Bild
slug: Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Sie können eine klickbare Bildkarte in HTML mit den Elementen {{htmlelement('area')}} und {{htmlelement('map')}} erstellen. Dieser Artikel beschreibt, wie Sie eine Bildkarte einrichten, und welche Nachteile zu berücksichtigen sind, bevor Sie eine erstellen.

<table>
<caption>Hier sind einige Dinge, die Sie wissen müssen</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen, wie man ein <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website">einfaches HTML-Dokument erstellt</a> und wie man <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage">zugängliche Bilder zu einer Webseite hinzufügt.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie mit verschiedenen Bereichen eines Bildes auf unterschiedliche Seiten verlinken.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt ausschließlich clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, da diese erfordern, dass der Benutzer eine Maus besitzt.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild in ein {{htmlelement('a')}}-Element einfügen, verlinkt das gesamte Bild auf eine Webseite. Eine Bildkarte hingegen enthält mehrere aktive Bereiche (sogenannte "Hotspots"), die jeweils zu einer anderen Ressource verlinken.

Früher waren Bildkarten ein beliebtes Navigationsmittel, aber es ist wichtig, ihre Leistungs- und Zugänglichkeitsaspekte genau zu betrachten.

> [!WARNING]
> Mehrere Bilder, die auf dieselbe Bildkarte verweisen, können zu unerwartetem Browserverhalten führen, was die Benutzerfreundlichkeit und Zugänglichkeit erheblich verschlechtern kann. Zum Beispiel wird in Safari- und Chromium-basierten Browsern bei der Tastaturnavigation ein Bild mit einer wiederverwendeten Bildkarte gänzlich übersprungen. In Firefox erhalten alle Bildkarten gleichzeitig den Tastaturfokus und wenn der Benutzer über das Bild hinaus navigiert, wird das Element fokussiert, das sich hinter dem letzten Bild befindet, wodurch alles zwischen den beiden Bildern effektiv übersprungen wird.

[Textlinks](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) (möglicherweise mit CSS gestaltet) sind Bildkarten aus mehreren Gründen vorzuziehen: Textlinks sind leichtgewichtig, wartbar, oft SEO-freundlicher und unterstützen die Zugänglichkeitsanforderungen (z.B. Bildschirmleser, Nur-Text-Browser, Übersetzungsdienste).

## Anleitung zur korrekten Einbindung einer Bildkarte

### Schritt 1: Das Bild

Nicht jedes Bild ist akzeptabel.

- Das Bild muss klarstellen, was passiert, wenn Benutzer den Bildlinks folgen. `alt`-Text ist natürlich obligatorisch, aber viele Benutzer sehen ihn nie.
- Das Bild muss deutlich anzeigen, wo die Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um bequem getippt zu werden, unabhängig von der Anzeigengröße. Wie groß ist groß genug? [72 × 72 CSS-Pixel sind ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit zusätzlichen großzügigen Abständen zwischen den Berührungszielen. Die Weltkarte auf [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt der Erstellung) illustriert das Problem perfekt. Es ist viel einfacher, auf Russland oder Nordamerika zu tippen als auf Albanien oder Estland.

Sie fügen Ihr Bild auf [fast dieselbe Weise wie immer ein](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage) (mit einem {{htmlelement("img")}}-Element und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text). Wenn das Bild nur als Navigationsmittel vorhanden ist, können Sie `alt=""` schreiben, vorausgesetzt, Sie stellen später in den {{htmlelement('area')}}-Elementen einen geeigneten [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)-Text bereit.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attribut. Überlegen Sie sich einen eindeutigen Namen, der keine Leerzeichen enthält, für Ihre Bildkarte. Weisen Sie dann diesem Namen (vorangestellt mit einem Hashzeichen) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt geben Sie all Ihren Code innerhalb eines {{htmlelement('map')}}-Elements ein. `<map>` benötigt nur ein Attribut, denselben Karten-`[`name`](/de/docs/Web/HTML/Reference/Elements/map#name)` wie bereits im `usemap`-Attribut oben verwendet:

```html
<map name="example-map-1"> </map>
```

Innerhalb des `<map>`-Elements benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzelnen Hotspot. Um die Tastaturnavigation intuitiv zu gestalten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

`<area>`-Elemente sind {{Glossary("void_element", "Void-Elemente")}}, erfordern aber vier Attribute:

- [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape)
  - : Das `shape`-Attribut nimmt einen von vier Werten an: `circle`, `rect`, `poly` und `default`. Ein `<area>`, dessen `shape` `default` ist, nimmt das gesamte Bild ein, abzüglich aller anderen von Ihnen definierten Hotspots.
    Wenn es Überlappungen zwischen den definierten Bereichen gibt, bestimmt die Quellreihenfolge, welcher Bereich bevorzugt wird.
    Die gewählte Form bestimmt die Koordinateninformationen, die Sie in `coords` bereitstellen müssen.

- [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords)
  - : Koordinaten werden in CSS-Pixeln angegeben und der Wert hängt von der gewählten `shape` ab.
    - Bei einem Kreis geben Sie die x- und y-Koordinaten des Mittelpunkts an, gefolgt von der Länge des Radius.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecke an.
    - Für ein Polygon müssen Sie die x- und y-Koordinaten jeder Ecke angeben (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Reference/Elements/area#href)
  - : Die URL der Ressource, auf die Sie verlinken. Sie können dieses Attribut leer lassen, wenn Sie nicht möchten, dass der aktuelle Bereich irgendwohin verlinkt (z.B. wenn Sie einen Hohlkreis erstellen).

- [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)
  - : Ein obligatorisches Attribut, das beschreibt, wohin der Link führt oder was er bewirkt. `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beachten Sie unsere [Richtlinien für das Schreiben von zugänglichem Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording).

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

Sie sind erst fertig, wenn Sie Bildkarten gründlich auf vielen Browsern und Geräten getestet haben. Versuchen Sie, Links nur mit Ihrer Tastatur zu folgen. Versuchen Sie, Bilder auszuschalten.

Wenn Ihre Bildkarte breiter als etwa 240px ist, müssen Sie weitere Anpassungen vornehmen, um Ihre Website reaktionsfähig zu machen. Es reicht nicht aus, das Bild für kleine Bildschirme zu verkleinern, da die Koordinaten gleich bleiben und nicht mehr mit dem Bild übereinstimmen.

## Mehr erfahren

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online-Bildkarten-Editor](https://www.maschek.hu/imagemap/)
