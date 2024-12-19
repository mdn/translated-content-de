---
title: Eine Hitmap auf einem Bild hinzufügen
slug: Learn_web_development/Howto/Solve_HTML_problems/Add_a_hit_map_on_top_of_an_image
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

Hier erklären wir, wie Sie eine Bildkarte einrichten und einige Nachteile, die Sie zuerst beachten sollten.

<table>
<caption>Hier sind einige Dinge, die Sie wissen müssen</caption>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten bereits wissen, wie man <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website">ein grundlegendes HTML-Dokument erstellt</a> und wie man <a href="/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage">zugängliche Bilder auf einer Webseite hinzufügt.</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man verschiedene Bereiche eines Bildes so gestaltet, dass sie zu unterschiedlichen Seiten verlinken.
      </td>
    </tr>
  </tbody>
</table>

> [!WARNING]
> Dieser Artikel behandelt nur clientseitige Bildkarten. Verwenden Sie keine serverseitigen Bildkarten, die den Benutzer benötigen, eine Maus zu haben.

## Bildkarten und ihre Nachteile

Wenn Sie ein Bild in ein {{htmlelement('a')}}-Element einbetten, verlinkt das gesamte Bild zu einer Webseite. Eine Bildkarte hingegen enthält mehrere aktive Bereiche (genannt „Hotspots“), die jeweils zu einer anderen Ressource verlinken.

Früher waren Bildkarten ein beliebtes Navigationsmittel, aber es ist wichtig, deren Leistungs- und Zugänglichkeitsauswirkungen gründlich zu berücksichtigen.

> [!WARNING]
> Mehrere Bilder, die auf dieselbe Bildkarte verweisen, können zu unerwartetem Browserverhalten führen und die Benutzerfreundlichkeit und Zugänglichkeit stark beeinträchtigen. Zum Beispiel, wenn ein Benutzer in Safari und Chromium-basierten Browsern mit der Tastatur ein Bild mit einer wiederverwendeten Bildkarte navigiert, werden spätere Bildinstanzen, die dieselbe Bildkarte verwenden, vollständig übersprungen. In Firefox erhalten alle Bildkarten gleichzeitig den Tastaturfokus, und wenn der Benutzer mit der Tastatur an dem Bild vorbeinavigiert, ist das nächste fokussierte Element dasjenige nach der letzten Bildinstanz, wodurch effektiv alles zwischen den beiden Bildern übersprungen wird.

[Textlinks](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) (vielleicht mit CSS gestaltet) sind Bildkarten aus mehreren Gründen vorzuziehen: Textlinks sind leicht, wartbar, oft SEO-freundlicher und unterstützen Zugänglichkeitsanforderungen (z. B. Screenreader, textbasierte Browser, Übersetzungsdienste).

## Anleitung zum korrekten Einfügen einer Bildkarte

### Schritt 1: Das Bild

Nicht jedes Bild ist akzeptabel.

- Das Bild muss verdeutlichen, was passiert, wenn Benutzer Bildlinks folgen. `alt`-Text ist selbstverständlich obligatorisch, aber viele Menschen sehen ihn nie.
- Das Bild muss klar zeigen, wo Hotspots beginnen und enden.
- Hotspots müssen groß genug sein, um bequem angetippt zu werden, unabhängig von der Ansichtshöhe. Wie groß ist groß genug? [72 × 72 CSS-Pixel sind ein gutes Minimum,](https://uxmovement.com/mobile/finger-friendly-design-ideal-mobile-touch-target-sizes/) mit zusätzlichen großzügigen Abständen zwischen den Zielen. Die Weltkarte bei [50languages.com](https://www.goethe-verlag.com/book2/) (zum Zeitpunkt des Schreibens) veranschaulicht das Problem perfekt. Es ist viel einfacher, Russland oder Nordamerika zu tippen als Albanien oder Estland.

Sie fügen Ihr Bild [auf ähnliche Weise wie immer ein](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images#how_do_we_put_an_image_on_a_webpage) (mit einem {{htmlelement("img")}}-Element und [`alt`](/de/docs/Web/HTML/Element/img#alt)-Text). Wenn das Bild nur als Navigationsgerät vorhanden ist, können Sie `alt=""` schreiben, vorausgesetzt, Sie liefern später einen geeigneten [`alt`](/de/docs/Web/HTML/Element/area#alt)-Text in den {{htmlelement('area')}}-Elementen.

Sie benötigen ein spezielles [`usemap`](/de/docs/Web/HTML/Element/img#usemap)-Attribut. Denken Sie sich einen einzigartigen Namen ohne Leerzeichen für Ihre Bildkarte aus. Weisen Sie diesen Namen (vorausgegangen von einem Hash) als Wert für das `usemap`-Attribut zu:

```html
<img src="image-map.png" alt="" usemap="#example-map-1" />
```

### Schritt 2: Aktivieren Sie Ihre Hotspots

In diesem Schritt platzieren Sie Ihren gesamten Code innerhalb eines {{htmlelement('map')}}-Elements. `<map>` benötigt nur ein Attribut, denselben [`name`](/de/docs/Web/HTML/Element/map#name)-Namen wie Sie in Ihrem `usemap`-Attribut oben verwendet haben:

```html
<map name="example-map-1"> </map>
```

Innerhalb des `<map>`-Elements benötigen wir {{htmlelement('area')}}-Elemente. Ein `<area>`-Element entspricht einem einzelnen Hotspot. Um die Tastaturnavigation intuitiv zu gestalten, stellen Sie sicher, dass die Quellreihenfolge der `<area>`-Elemente der visuellen Reihenfolge der Hotspots entspricht.

Die `<area>`-Elemente sind {{Glossary("void_element", "leere Elemente")}}, benötigen jedoch vier Attribute:

- [`shape`](/de/docs/Web/HTML/Element/area#shape)

  - : Das `shape`-Attribut nimmt einen von vier Werten an: `circle`, `rect`, `poly` und `default`. Ein `<area>`, dessen `shape` `default` ist, nimmt das gesamte Bild ein, abzüglich aller anderen von Ihnen definierten Hotspots.
    Wenn es eine Überlappung zwischen den definierten Bereichen gibt, bestimmt die Quellreihenfolge, welcher Bereich Vorzug hat.
    Die gewählte Form bestimmt die Koordinateninformationen, die Sie in `coords` bereitstellen müssen.

- [`coords`](/de/docs/Web/HTML/Element/area#coords)

  - : Koordinaten werden in CSS-Pixeln angegeben, und ihr Wert hängt von der ausgewählten `shape` ab.

    - Für einen Kreis geben Sie die x- und y-Koordinaten des Zentrums sowie die Länge des Radius an.
    - Für ein Rechteck geben Sie die x- und y-Koordinaten der oberen linken und unteren rechten Ecken an.
    - Für ein Polygon geben Sie die x- und y-Koordinaten jeder Ecke an (also mindestens sechs Werte).

- [`href`](/de/docs/Web/HTML/Element/area#href)

  - : Die URL der Ressource, zu der Sie verlinken. Sie können dieses Attribut leer lassen, wenn Sie nicht möchten, dass der aktuelle Bereich irgendwohin verlinkt wird (z.B. wenn Sie einen hohlen Kreis erstellen).

- [`alt`](/de/docs/Web/HTML/Element/area#alt)

  - : Ein obligatorisches Attribut, das angibt, wohin der Link führt oder was er tut. `alt`-Text wird nur angezeigt, wenn das Bild nicht verfügbar ist. Bitte beachten Sie unsere [Richtlinien zum Schreiben von zugänglichem Linktext](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#use_clear_link_wording).

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

Sie sind nicht fertig, bis Sie Bildkarten gründlich in vielen Browsern und auf verschiedenen Geräten getestet haben. Versuchen Sie, Links nur mit Ihrer Tastatur zu folgen. Versuchen Sie, Bilder auszuschalten.

Wenn Ihre Bildkarte breiter als etwa 240px ist, müssen Sie weitere Anpassungen vornehmen, um Ihre Website responsiv zu machen. Es reicht nicht aus, das Bild für kleine Bildschirme zu verkleinern, da die Koordinaten gleich bleiben und nicht mehr mit dem Bild übereinstimmen.

## Mehr erfahren

- {{htmlelement("img")}}
- {{htmlelement("map")}}
- {{htmlelement("area")}}
- [Online-Bildkarten-Editor](https://www.maschek.hu/imagemap/)
