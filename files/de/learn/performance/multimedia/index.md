---
title: "Multimedia: Bilder"
slug: Learn/Performance/Multimedia
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}

Medien, insbesondere Bilder und Videos, machen über 70% der heruntergeladenen Bytes einer durchschnittlichen Website aus. In Bezug auf die Download-Geschwindigkeit sind das Entfernen von Medien und das Reduzieren der Dateigröße leicht erreichbare Maßnahmen. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Basissoftware installiert</a
        > und Grundkenntnisse der
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die verschiedenen Bildformate, deren Einfluss auf die Leistung und Möglichkeiten zur Reduzierung des Einflusses von Bildern auf die gesamte Ladezeit der Seite kennenzulernen.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine grundlegende Einführung in die Optimierung der Multimedia-Auslieferung im Web, die allgemeine Prinzipien und Techniken behandelt. Für einen ausführlicheren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia optimieren?

Für die durchschnittliche Website stammen [51% ihrer Bandbreite aus Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, Ihre Multimedia-Inhalte zu adressieren und zu optimieren.

Sie müssen den Umgang mit der Datennutzung berücksichtigen. Viele Menschen haben begrenzte Datenvolumina oder zahlen sogar nach Verbrauch, wo sie buchstäblich pro Megabyte zahlen. Dies ist auch kein Problem nur in aufstrebenden Märkten. Im Jahr 2018 nutzten laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) noch 24% des Vereinigten Königreichs den Pay-as-you-go-Tarif.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenztes RAM verfügen. Es ist wichtig zu bedenken, dass Bilder nach dem Herunterladen im Speicher gespeichert werden müssen.

## Optimierung der Bildauslieferung

Trotz des hohen Bandbreitenverbrauchs ist der Einfluss des Herunterladens von Bildern auf die [wahrgenommene Leistung](/de/docs/Learn/Performance/Perceived_performance) weitaus geringer als viele erwarten (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und die Benutzer die Bilder sehen können, während sie geladen werden). Für eine gute Benutzererfahrung ist es jedoch immer noch wichtig, dass der Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Lazy_loading) von Bildern unterhalb des Sichtfelds, anstelle sie alle beim ersten Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher nach unten scrollt, um sie zu sehen oder nicht. Browser bieten dies nativ über das [`loading="lazy"`](/de/docs/Web/HTML/Element/img#loading) Attribut im `<img>` Element an, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies tun können.

Abgesehen davon, nur einen Teil der Bilder zu laden, sollten Sie sich das Format der Bilder selbst genauer ansehen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimale Format

Das optimale Dateiformat hängt typischerweise vom Charakter des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types).

Das [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Format ist besser geeignet für Bilder, die wenige Farben haben und nicht fotorealistisch sind. Dies erfordert jedoch, dass die Quelle bereits als Vektor-Grafikformat vorliegt. Sollte ein solches Bild nur als Bitmap existieren, dann wäre [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) das Fallback-Format der Wahl. Beispiele für diese Arten von Motiven sind Logos, Illustrationen, Diagramme oder Symbole (Anmerkung: SVGs sind weit besser als Icon-Schriftarten!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgangskombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bietet volle Farbgenauigkeit und glatte Transparenz auf Kosten der Dateigröße. Diese Kombination sollte man zugunsten von WebP meiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bietet nicht mehr als 255 Farben, erhält aber glatte Transparenzen bei moderater Größe. Dies sind wahrscheinlich die PNGs, die sie möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz — bietet nicht mehr als 255 Farben und nur volle Transparenz pro Pixel, was die Transparenzränder hart und gezackt aussehen lässt. Die Größe ist klein, aber der Preis ist die visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel breitere Palette von Formaten zur Auswahl. Wenn Sie auf Nummer sicher gehen wollen, dann sollten Sie gut komprimierte **progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, rendert progressiv (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt dass das Bild von oben nach unten in voller Auflösung geladen wird oder erst vollständig gerendert wird, wenn der gesamte Download abgeschlossen ist. Ein guter Kompressor hierfür wäre MozJPEG, z.B. verfügbar in dem Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75% sollte gute Ergebnisse erzielen.

Andere Formate verbessern JPEGs Fähigkeiten hinsichtlich der Komprimierung, sind jedoch nicht in allen Browsern verfügbar:

- [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) — Eine hervorragende Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Bilder, Transparenz etc. (aber keine progressive Darstellung.). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder früher.

  > [!NOTE]
  > Obwohl Apple [die Unterstützung für WebP in Safari 14 angekündigt hat](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174), zeigen Safari-Versionen früher als 16.0 keine `.webp` Bilder erfolgreich auf macOS Desktop-Versionen früher als 11/Big Sur an. Safari für iOS 14 _zeigt_ `.webp` Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Performance und des lizenzfreien Bildformates (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Jetzt unterstützt in Chrome, Edge, Opera und Firefox. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool, um frühere Bildformate in AVIF zu konvertieren.
- **JPEG2000** — solle ursprünglich der Nachfolger von JPEG werden, wird aber nur in Safari unterstützt. Unterstützt auch keine progressive Darstellung.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und auch unter Berücksichtigung der Dekodierkosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Daher könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements erfolgen, das mit einem [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) ausgestattet ist.

Wenn sich all dies ein wenig kompliziert anhört oder wie zu viel Arbeit für Ihr Team anfühlt, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können, die das korrekte Bildformat entsprechend dem Gerätetyp oder dem Browser, der das Bild anfordert, automatisch ausliefern. Die größten sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps) und [Image Engine](https://imageengine.io/).

Schließlich, sollten Sie animierte Bilder auf Ihrer Seite einbinden wollen, dann wissen Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>` Elementen erlaubt. Damit können Sie auch ein **Animated WebP** für alle anderen modernen Browser hinzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

In der Bildlieferung führt der Ansatz "eine Größe passt für alle" nicht zu den besten Ergebnissen. Das bedeutet, dass für kleinere Bildschirme Bilder mit kleinerer Auflösung bereitgestellt werden sollen und umgekehrt für größere Bildschirme. Darüber hinaus möchten Sie auch hochauflösende Bilder für Geräte mit einem hochauflösenden Bildschirm (z.B. "Retina") bereitstellen. Abgesehen davon, dass viele Zwischenvarianten von Bildern erstellt werden müssen, benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. Hierbei müssen Sie Ihre `<picture>` und `<source>` Elemente mit [media](/de/docs/Web/HTML/Element/source#media) und/oder [sizes](/de/docs/Web/HTML/Element/source#sizes) Attributen erweitern. Ein detaillierter Artikel darüber, wie Sie all diese Attribute kombinieren können, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte, die bei hochauflösenden Bildschirmen zu beachten sind, sind:

- Bei einem hochauflösenden Bildschirm werden Kompressionsartefakte von Menschen viel später erkannt, was bedeutet, dass Sie die Komprimierung für Bilder, die für diese Bildschirme bestimmt sind, über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder bereitstellen müssen, die über 2× auflösen.

#### Kontrolle der Priorität (und Reihenfolge) beim Herunterladen von Bildern

Die Bereitstellung der wichtigsten Bilder für Besucher vor den weniger wichtigen kann die wahrgenommene Leistung verbessern.

Das erste, was überprüft werden muss, ist, dass Ihre Inhaltsbilder `<img>` oder `<picture>` Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>` Elementen referenziert werden, erhalten eine höhere Ladepriorität als Hintergrundbilder.

Zweitens, mit der Einführung von Priority Hints können Sie die Priorität weiter steuern, indem Sie ein `fetchPriority` Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsfall für Prioritätshinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Rendering-Strategie: Vermeidung von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und nach dem ersten Bildschirmaufbau weiterhin geladen werden, können sie, wenn ihre Dimensionen nicht vor dem Laden definiert sind, zu einem Reflow des Seiteninhalts führen. Beispielsweise, wenn Text durch das Laden von Bildern auf der Seite nach unten geschoben wird. Aus diesem Grund ist es wichtig, `width` und `height` Attribute zu setzen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn `width` und `height` Attribute eines Bildes in einem HTML {{htmlelement("img")}} Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, wodurch ein Layout-Shift vermieden oder zumindest reduziert wird, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung von Layout-Shift ist eine wesentliche Komponente für eine gute Benutzererfahrung und Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, sobald das HTML geparst wird, oft bevor alle Assets, einschließlich Bilder, heruntergeladen werden. Durch die Angabe von Dimensionen können Browser einen korrekt dimensionierten Platzhalter für jedes Bild reservieren, der beim ersten Rendern der Seite erscheint, wenn die Bilder geladen werden.

![Zwei Screenshots: der erste ohne ein Bild, aber mit reserviertem Platz, der zweite zeigt das Bild im reservierten Platz geladen.](ar-guide.jpg)

Ohne die `width` und `height` Attribute wird kein Platzhalter erzeugt, was zu einem spürbaren {{Glossary("jank", "Jank")}} oder Layout-Shift auf der Seite führt, wenn das Bild nach dem Rendern der Seite geladen wird. Page Reflow und Repaints sind Leistungs- und Usability-Probleme.

Die {{Glossary("CLS", "CLS")}} Metrik misst den Jank beim Laden der Seite, oder wie stark sichtbarer Inhalt im Viewport verschoben wird und um wie viel. Die Hauptverursacher eines schlechten CLS sind ersetzte Elemente ohne deklarierte Abmessungen, die beim Laden des Assets neu angeordnet werden, einschließlich Bildern, Werbung, Einbettungen und Iframes ohne definierte Größe oder {{cssxref("aspect-ratio")}} und Webschriftarten.

In responsiven Designs, wenn ein Container schmaler ist als ein Bild, wird üblicherweise der folgende CSS eingesetzt, um zu verhindern, dass Bilder aus ihren Containern ausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Während dies für responsive Layouts nützlich ist, verursacht es Jank und schlechten CLS, wenn keine Breiten- und Höheninformationen enthalten sind, da, wenn keine Höheninformationen vorhanden sind, wenn das `<img>` Element geparst, aber das Bild noch nicht geladen wird, dieses CSS effektiv die Höhe auf 0 festgelegt hat. Wenn das Bild geladen wird, nachdem die Seite initial auf dem Bildschirm gerendert wurde, erfolgt ein Reflow und Repaint der Seite, was zu einem Layout-Shift führt, da Platz für die neu bestimmte Höhe geschaffen wird.

Browser haben einen Mechanismus, um Bilder vorzuladen, bevor das tatsächliche Bild geladen wird. Wenn ein `<img>`, `<video>` oder `<input type="button">` Element `width` und `height` Attribute gesetzt hat, wird sein Seitenverhältnis vor der Ladezeit berechnet und dem Browser bereitgestellt, indem die angegebenen Dimensionen verwendet werden.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher, die richtige Größe auf das `<img>` Element anzuwenden, was bedeutet, dass der oben genannte Jank nicht auftritt oder minimal ist, wenn die angegebenen Dimensionen beim Laden des Bildes nicht vollständig genau sind.

Das Seitenverhältnis wird nur bei der Bildladung verwendet, um Platz zu reservieren. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio` Eigenschaft verwendet, anstatt des Seitenverhältnisses aus den Attributen. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, auch wenn die Attributdimensionen nicht genau sind.

Während Entwicklerbeste Praktiken in den letzten Jahrzehnten möglicherweise empfohlen haben, die `width` und `height` Attribute eines Bildes auf einem HTML {{htmlelement("img")}} zu weglassen, gilt das Hinzufügen dieser beiden Attribute aufgrund der Zuordnung des Seitenverhältnisses nun als Entwicklungs-Best-Practice.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color` Wert setzen, damit überlagerter Inhalt vor dem Herunterladen des Bildes noch lesbar ist.

## Fazit

In diesem Abschnitt haben wir uns mit der Bildoptimierung beschäftigt. Sie haben nun ein allgemeines Verständnis dafür, wie man ungefähr die Hälfte des durchschnittlichen Bandbreitenverbrauchs einer Website optimieren kann. Dies ist nur eine der Arten von Medien, die die Bandbreite der Benutzer verbraucht und die Ladezeit der Seite verlangsamt. Lassen Sie uns einen Blick auf die Video-Optimierung werfen, um die nächsten 20% des Bandbreitenverbrauchs anzugehen.

{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}
