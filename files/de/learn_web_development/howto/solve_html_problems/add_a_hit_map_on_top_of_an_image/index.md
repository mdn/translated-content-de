---
title: Ein Hitmap auf ein Bild hinzufügen
slug: Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Hier erklären wir, wie man eine Bildkarte einrichtet und einige Nachteile, die man zuerst bedenken sollte.

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
        Lernen Sie, wie Sie verschiedene Bereiche eines Bildes mit unterschiedlichen Seiten verlinken.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt nur clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, bei denen der Benutzer eine Maus haben muss.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild in {{htmlelement('a')}} verschachteln, verlinkt das gesamte Bild auf eine Webseite. Eine Bildkarte hingegen enthält mehrere aktive Bereiche (genannt "Hotspots"), die jeweils auf eine andere Ressource verlinken.

Früher waren Bildkarten ein beliebtes Navigationsmittel, aber es ist wichtig, ihre Leistungs- und Zugänglichkeitsauswirkungen gründlich zu überdenken.

> [!WARNING]
> Mehrere Bilder, die auf dieselbe Bildkarte verweisen, können zu unerwartetem Browser-Verhalten führen, was die Benutzerfreundlichkeit und Zugänglichkeit stark beeinträchtigt. Beispielsweise wird bei der Tastaturnavigation eines Bildes mit einer wiederverwendeten Bildkarte in Safari und auf Chromium basierenden Browsern der letzten Instanzen des Bildes, die dieselbe Bildkarte verwenden, vollständig übersprungen. In Firefox erhalten alle Bildkarten gleichzeitig Tastaturfokus, und wenn der Benutzer über das Bild hinaus navigiert, wird das nächste fokussierte Element dasjenige nach der letzten Instanz, wodurch effektiv alles zwischen den beiden Bildern übersprungen wird.

[Textlinks](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) (vielleicht mit CSS gestaltet) sind aus mehreren Gründen Bildkarten vorzuziehen: Textlinks sind leichtgewichtig, wartbar, oft SEO-freundlicher und unterstützen Zugänglichkeitsbedürfnisse (z.B. Bildschirmleser, textbasierte Browser, Übersetzungsdienste).

## Anleitung zum richtigen Einfügen einer Bildkarte

### Schritt 1: Das Bild

Nicht jedes Bild ist geeignet.

- Das Bild muss deutlich machen, was passiert, wenn man Bildlinks folgt. `alt`-Text ist natürlich obligatorisch, aber viele Menschen sehen ihn nie.
- Das Bild muss klar anzeigen, wo Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um bequem auf sie zu tippen, egal wie groß der Anzeigebereich ist. Wie groß ist genügend groß? [72 × 72 CSS-Pixel ist ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit zusätzlichen großzügigen Lücken zwischen den Berührungszielen. Die Weltkarte auf [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt der Erstellung dieses Artikels) veranschaulicht das Problem perfekt. Es ist viel einfacher, Russland oder Nordamerika zu tippen als Albanien oder Estland.

Sie fügen Ihr Bild [ähnlich wie immer](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage) (mit einem {{htmlelement("img")}}-Element und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text) ein. Wenn das Bild nur als Navigationsmittel vorhanden ist, können Sie `alt=""` schreiben, vorausgesetzt, Sie liefern später in den {{htmlelement('area')}}-Elementen geeigneten [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)-Text.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attribut. Denken Sie sich einen eindeutigen Namen aus, der keine Leerzeichen enthält, für Ihre Bildkarte. Weisen Sie diesen Namen (mit einem Hash-Zeichen vorangestellt) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt platzieren Sie all Ihren Code in einem {{htmlelement('map')}}-Element. `<map>` benötigt nur ein Attribut, den gleichen Karten[`name`](/de/docs/Web/HTML/Reference/Elements/map#name) wie den, den Sie oben in Ihrem `usemap`-Attribut verwendet haben:

```html
<map name="example-map-1"> </map>
```

Innerhalb des `<map>`-Elements benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzelnen Hotspot. Um die Tastaturnavigation intuitiv zu gestalten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

`<area>`-Elemente sind {{Glossary("void_element", "leere Elemente")}}, erfordern aber vier Attribute:

- [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape)

  - : Das `shape`-Attribut nimmt einen von vier Werten an: `circle`, `rect`, `poly` und `default`. Ein `<area>`, dessen `shape` `default` ist, nimmt das gesamte Bild ein, abgesehen von anderen von Ihnen definierten Hotspots.
    Wenn es Überschneidungen zwischen den definierten Bereichen gibt, bestimmt die Quellreihenfolge, welcher Bereich bevorzugt wird.
    Die von Ihnen gewählte Form bestimmt die Koordinateninformationen, die Sie in `coords` bereitstellen müssen.

- [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords)

  - : Koordinaten werden in CSS-Pixeln angegeben, und ihr Wert hängt von der gewählten `shape` ab.

    - Für einen Kreis geben Sie die x- und y-Koordinaten des Mittelpunkts an, gefolgt von der Länge des Radius.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecken an.
    - Für ein Polygon geben Sie die x- und y-Koordinaten jeder Ecke an (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Reference/Elements/area#href)

  - : Die URL der Ressource, auf die Sie verlinken möchten. Sie dürfen dieses Attribut leer lassen, wenn der aktuelle Bereich nicht verlinkt werden soll (zum Beispiel, wenn Sie einen hohlen Kreis erstellen).

- [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)

  - : Ein obligatorisches Attribut, welches den Menschen mitteilt, wohin der Link führt oder was er bewirkt. `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beziehen Sie sich auf unsere [Richtlinien zum Schreiben von zugänglichem Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording).

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

### Schritt 3: Sicherstellen, dass es für alle funktioniert

Sie sind erst fertig, wenn Sie Bildkarten gründlich auf vielen Browsern und Geräten testen. Versuchen Sie, Links nur mit Ihrer Tastatur zu folgen. Versuchen Sie, Bilder auszuschalten.

Wenn Ihre Bildkarte breiter als etwa 240px ist, müssen Sie weitere Anpassungen vornehmen, um Ihre Website responsive zu machen. Es reicht nicht aus, das Bild für kleine Bildschirme zu verkleinern, da die Koordinaten dieselben bleiben und nicht mehr mit dem Bild übereinstimmen.

## Erfahren Sie mehr

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online Bildkarten-Editor](https://www.maschek.hu/imagemap/)
