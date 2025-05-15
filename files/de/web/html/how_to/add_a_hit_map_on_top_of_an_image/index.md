---
title: Fügen Sie eine Hitmap über ein Bild hinzu
slug: Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: f08eb478696946da474cf5c5ecdead4f5955f1b4
---

{{HTMLSidebar}}

Sie können eine klickbare Bildkarte in HTML erstellen, indem Sie die Elemente {{htmlelement('area')}} und {{htmlelement('map')}} verwenden.
Dieser Artikel beschreibt, wie Sie eine Bildkarte erstellen und einige Nachteile, die Sie beachten sollten, bevor Sie eine erstellen.

<table>
<caption>Hier sind einige Dinge, die Sie wissen müssen</caption>
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
        Lernen Sie, wie Sie verschiedene Bereiche eines Bildes so gestalten, dass sie zu unterschiedlichen Seiten verlinken.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt nur clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, die die Nutzung einer Maus erfordern.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild in {{htmlelement('a')}} verschachteln, führt das gesamte Bild zu einer Webseite. Eine Bildkarte hingegen enthält mehrere aktive Regionen (genannt "Hotspots"), die jeweils zu einer anderen Ressource führen.

Früher waren Bildkarten ein beliebtes Navigationsinstrument, aber es ist wichtig, ihre Leistungs- und Zugänglichkeitseffekte gründlich zu berücksichtigen.

> [!WARNING]
> Mehrere Bilder, die auf dieselbe Bildkarte verweisen, können zu unerwartetem Browserverhalten führen, was die Benutzerfreundlichkeit und Zugänglichkeit erheblich beeinträchtigt. Zum Beispiel werden in Safari und Chromium-basierten Browsern beim Tastaturnavigieren eines Bildes mit einer wiederverwendeten Bildkarte spätere Bildinstanzen, die dieselbe Bildkarte verwenden, vollständig übersprungen. In Firefox erhalten alle Bildkarten gleichzeitig den Tastaturfokus und wenn der Benutzer über das Bild hinaus navigiert, ist das nächste fokussierte Element dasjenige nach der letzten Bildinstanz, was effektiv alles zwischen den beiden Bildern überspringt.

[Textlinks](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) (vielleicht mit CSS gestylt) sind Bildkarten aus mehreren Gründen vorzuziehen: Textlinks sind leichtgewichtig, wartbar, oft SEO-freundlicher und unterstützen Zugänglichkeitsbedürfnisse (z. B. Bildschirmlesegeräte, Textbrowser, Übersetzungsdienste).

## Anleitung zum Einfügen einer Bildkarte

### Schritt 1: Das Bild

Nicht jedes Bild ist geeignet.

- Das Bild muss klar machen, was passiert, wenn Nutzer Bildlinks folgen. `alt`-Text ist selbstverständlich obligatorisch, aber viele Menschen sehen ihn nie.
- Das Bild muss deutlich zeigen, wo die Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um komfortabel in jeder Ansicht zu tippen. Wie groß ist groß genug? [72 × 72 CSS-Pixel sind ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit zusätzlichen großzügigen Abständen zwischen den Touch-Zielen. Die Weltkarte bei [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt des Schreibens) illustriert das Problem perfekt. Es ist viel einfacher, Russland oder Nordamerika zu tippen als Albanien oder Estland.

Sie fügen Ihr Bild [im Wesentlichen wie immer](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage) ein (mit einem {{htmlelement("img")}}-Element und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text). Wenn das Bild nur als Navigationsmittel vorhanden ist, können Sie `alt=""` schreiben, sofern Sie später in den {{htmlelement('area')}}-Elementen einen geeigneten [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)-Text bereitstellen.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attribut. Erfinden Sie einen eindeutigen Namen, der keine Leerzeichen enthält, für Ihre Bildkarte. Dann weisen Sie diesen Namen (mit einem vorangestellten Rautenzeichen) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt platzieren Sie Ihren gesamten Code innerhalb eines {{htmlelement('map')}}-Elements. `<map>` benötigt nur ein Attribut, denselben [`name`](/de/docs/Web/HTML/Reference/Elements/map#name) der Karte, den Sie in Ihrem `usemap`-Attribut oben verwendet haben:

```html
<map name="example-map-1"> </map>
```

Innerhalb des `<map>`-Elements benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzigen Hotspot. Um die Tastaturnavigation intuitiv zu halten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

`<area>`-Elemente sind {{Glossary("void_element", "void-Elemente")}}, erfordern jedoch vier Attribute:

- [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape)

  - : Das `shape`-Attribut nimmt einen von vier Werten an: `circle`, `rect`, `poly` und `default`. Ein `<area>`, dessen `shape` `default` ist, nimmt das gesamte Bild ein, abzüglich aller anderen von Ihnen definierten Hotspots.
    Sollte es Überschneidungen zwischen den definierten Bereichen geben, bestimmt die Quellreihenfolge, welcher Bereich Vorrang hat.
    Die von Ihnen gewählte Form bestimmt die Koordinateninformationen, die Sie in `coords` bereitstellen müssen.

- [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords)

  - : Koordinaten werden in CSS-Pixeln angegeben, und ihr Wert hängt von der gewählten Form ab.

    - Für einen Kreis geben Sie die x- und y-Koordinaten des Zentrums an, gefolgt von der Länge des Radius.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecken an.
    - Für ein Polygon geben Sie die x- und y-Koordinaten jeder Ecke an (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Reference/Elements/area#href)

  - : Die URL der Ressource, zu der Sie verlinken möchten. Sie können dieses Attribut leer lassen, wenn Sie _nicht_ möchten, dass der aktuelle Bereich irgendwohin verlinkt (zum Beispiel, wenn Sie einen hohlen Kreis erstellen).

- [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)

  - : Ein obligatorisches Attribut, das den Menschen mitteilt, wohin der Link führt oder was er tut. Der `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beziehen Sie sich auf unsere [Richtlinien zum Schreiben von zugänglichem Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording).

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

Wenn Ihre Bildkarte breiter als etwa 240 px ist, müssen Sie weitere Anpassungen vornehmen, um Ihre Website responsiv zu gestalten. Es reicht nicht aus, das Bild für kleine Bildschirme zu verkleinern, da die Koordinaten gleich bleiben und nicht mehr mit dem Bild übereinstimmen.

## Mehr erfahren

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online-Editor für Bildkarten](https://www.maschek.hu/imagemap/)
