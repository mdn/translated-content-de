---
title: Eine Hitmap über einem Bild hinzufügen
slug: Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Sie können eine anklickbare Bildkarte in HTML mithilfe der {{htmlelement('area')}}- und {{htmlelement('map')}}-Elemente erstellen. Dieser Artikel beschreibt, wie Sie eine Bildkarte einrichten und einige Nachteile, die Sie vor der Erstellung berücksichtigen sollten.

<table>
<caption>Hier sind einige Dinge, die Sie wissen müssen</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen, wie man ein <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website">grundlegendes HTML-Dokument erstellt</a> und wie man <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage">zugängliche Bilder zu einer Webseite hinzufügt.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie verschiedene Bereiche eines Bildes zu unterschiedlichen Seiten verlinken können.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt ausschließlich clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, die erfordern, dass der Benutzer eine Maus hat.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild im {{htmlelement('a')}}-Element verschachteln, verlinkt das gesamte Bild zu einer Webseite. Eine Bildkarte hingegen enthält mehrere aktive Bereiche (sogenannte „Hotspots“), die jeweils zu einer anderen Ressource verlinken.

Früher waren Bildkarten ein beliebtes Navigationsmittel, aber es ist wichtig, ihre Leistungs- und Zugänglichkeitsaspekte gründlich zu überdenken.

> [!WARNING]
> Mehrere Bilder, die auf dieselbe Bildkarte verweisen, können zu unerwartetem Browserverhalten führen, das die Benutzerfreundlichkeit und Zugänglichkeit stark beeinträchtigt. Zum Beispiel werden in Safari und Chromium-basierten Browsern bei der Tastaturnavigation eines Bildes mit wiederverwendeter Bildkarte spätere Bildinstanzen, die dieselbe Bildkarte verwenden, vollständig übersprungen. In Firefox erhalten alle Bildkarten gleichzeitig Tastaturfokus, und wenn der Benutzer über das Bild hinaus navigiert, wird das nächste fokussierte Element nach der letzten Bildinstanz, wodurch alles zwischen den beiden Bildern effektiv übersprungen wird.

[Textlinks](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) (möglicherweise mit CSS gestaltet) sind aus mehreren Gründen Bildkarten vorzuziehen: Textlinks sind leichtgewichtig, wartbar, oft SEO-freundlicher und unterstützen Zugänglichkeitsanforderungen (z.B. Screenreader, Textbrowser, Übersetzungsdienste).

## Anleitung für die richtige Platzierung einer Bildkarte

### Schritt 1: Das Bild

Nicht jedes Bild ist geeignet.

- Das Bild muss klar machen, was passiert, wenn Benutzer Bildlinks folgen. `alt`-Text ist natürlich obligatorisch, aber viele Menschen sehen ihn nie.
- Das Bild muss deutlich anzeigen, wo Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um bei jeder Ansichtsportgröße bequem angetippt werden zu können. Wie groß ist groß genug? [72 × 72 CSS-Pixel ist ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit zusätzlichen großzügigen Abständen zwischen den Berührungszielen. Die Weltkarte auf [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt des Schreibens) illustriert das Problem perfekt. Es ist viel einfacher, Russland oder Nordamerika als Albanien oder Estland anzutippen.

Sie fügen Ihr Bild [auf fast die gleiche Weise wie immer ein](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage) (mit einem {{htmlelement("img")}}-Element und [`alt`](/de/docs/Web/HTML/Reference/Elements/img#alt)-Text). Wenn das Bild nur als Navigationsgerät vorhanden ist, können Sie `alt=""` schreiben, sofern Sie später im {{htmlelement('area')}}-Element einen geeigneten [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)-Text bereitstellen.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Reference/Elements/img#usemap)-Attribut. Denken Sie sich einen eindeutigen Namen aus, der keine Leerzeichen enthält, für Ihre Bildkarte. Weisen Sie dann diesen Namen (vorangestellt mit einem Hash) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt platzieren Sie Ihren gesamten Code in einem {{htmlelement('map')}}-Element. `<map>` benötigt nur ein Attribut, denselben Bildkarten-`[name](/de/docs/Web/HTML/Reference/Elements/map#name)`, den Sie oben in Ihrem `usemap`-Attribut verwendet haben:

```html
<map name="example-map-1"> </map>
```

Innerhalb des `<map>`-Elements benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzelnen Hotspot. Um die Tastaturnavigation intuitiv zu gestalten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

`<area>`-Elemente sind {{Glossary("void_element", "void elements")}}, erfordern jedoch vier Attribute:

- [`shape`](/de/docs/Web/HTML/Reference/Elements/area#shape)

  - : Das `shape`-Attribut kann einen von vier Werten annehmen: `circle`, `rect`, `poly` und `default`. Ein `<area>`, dessen `shape`-Attribut `default` ist, belegt das gesamte Bild abzüglich etwaiger anderer definierter Hotspots.
    Bei einer Überlappung der definierten Bereiche bestimmt die Quellreihenfolge, welcher Bereich den Vorzug erhält.
    Die von Ihnen gewählte Form bestimmt die Informationen, die Sie in `coords` bereitstellen müssen.

- [`coords`](/de/docs/Web/HTML/Reference/Elements/area#coords)

  - : Koordinaten werden in CSS-Pixeln angegeben, und der Wert hängt von der ausgewählten `shape` ab.
    - Für einen Kreis geben Sie die x- und y-Koordinaten des Mittelpunkts gefolgt von der Länge des Radius an.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecken an.
    - Für ein Polygon geben Sie die x- und y-Koordinaten jedes Eckpunkts an (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Reference/Elements/area#href)

  - : Die URL der Ressource, zu der Sie verlinken. Sie können dieses Attribut leer lassen, wenn Sie _nicht_ möchten, dass der aktuelle Bereich irgendwohin verlinkt (z.B. wenn Sie einen hohlen Kreis erstellen).

- [`alt`](/de/docs/Web/HTML/Reference/Elements/area#alt)

  - : Ein obligatorisches Attribut, das den Leuten mitteilt, wohin der Link führt oder was er bewirkt. `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beziehen Sie sich auf unsere [Richtlinien für das Schreiben von zugänglichem Link-Text](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording).

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

## Erfahren Sie mehr

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online-Bildkarteneditor](https://www.maschek.hu/imagemap/)
