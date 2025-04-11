---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, insbesondere Bilder und Videos, machen über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. In Bezug auf die Download-Performance sind das Eliminieren von Medien und die Reduzierung der Dateigröße die leichtesten Ansätze. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos, um die Webperformance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Erfahren Sie mehr über die verschiedenen Bildformate, ihre Auswirkungen auf die Leistung und wie Sie die Auswirkungen von Bildern auf die Gesamtseitenladezeit verringern können.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hoher Ebene zur Optimierung der Multimediabereitstellung im Web und behandelt allgemeine Prinzipien und Techniken. Für einen tiefergehenden Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [51% ihrer Bandbreite aus Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, sich mit Ihren Multimedia-Inhalten zu befassen und diese zu optimieren.

Sie sollten den Datenverbrauch berücksichtigen. Viele Menschen haben eingeschränkte Datenpläne oder bezahlen sogar nach Verbrauch, bei denen sie buchstäblich pro Megabyte zahlen. Dies ist kein Problem von Schwellenländern. Im Jahr 2018 verwendeten laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) immer noch 24% des Vereinigten Königreichs einen Bezahl-modus nach Verwendung.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig zu beachten, dass heruntergeladene Bilder im Speicher gespeichert werden müssen.

## Optimierung der Bildlieferung

Obwohl Bilder den größten Teil der Bandbreite verbrauchen, ist die Auswirkung des Bilddownloads auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer, als viele erwarten (hauptsächlich weil der Seitentext sofort heruntergeladen wird und Benutzer die Bilder sehen können, während sie geladen werden). Für eine gute Benutzererfahrung ist es dennoch wichtig, dass Besucher sie so schnell wie möglich sehen können.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von Bildern unterhalb der Falte, anstatt sie alle beim ersten Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher scrollt, um sie zu sehen oder nicht. Browser bieten dies nativ über das Attribut [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/img#loading) auf dem `<img>`-Element an, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies können.

Neben dem Laden eines Teilsets von Bildern sollten Sie sich das Format der Bilder selbst ansehen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt in der Regel vom Charakter des Bildes ab.

> [!NOTE]
> Für allgemeine Informationen zu Bildtypen siehe den [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Format ist besser geeignet für Bilder, die wenig Farben haben und nicht fotorealistisch sind. Dies erfordert, dass die Quelle im Vektorgrafikformat verfügbar ist. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das Ausweichformat. Beispiele für diese Motive sind Logos, Illustrationen, Diagramme oder Symbole (Hinweis: SVGs sind weitaus besser als Icon-Schriften!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bietet volle Farbgenauigkeit und weiche Transparenz auf Kosten der Größe. Sie sollten wahrscheinlich diese Kombination zugunsten von WebP vermeiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bietet nicht mehr als 255 Farben, behält aber glatte Transparenzen bei. Die Größe ist nicht zu groß. Dies sind die PNGs, die Sie wahrscheinlich möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz — bietet nicht mehr als 255 Farben und nur volle oder keine Transparenz pro Pixel, was die Transparenzränder hart und gezackt erscheinen lässt. Die Größe ist klein, aber der Preis ist die visuelle Qualität.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel breitere Palette von Formaten zur Auswahl. Wenn Sie auf Nummer sicher gehen möchten, sollten Sie gut komprimierte **Progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, werden progressiv gerendert (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die klarer wird, während das Bild heruntergeladen wird, anstatt dass das Bild in voller Auflösung von oben nach unten geladen wird oder erst vollständig gerendert wird, wenn es komplett heruntergeladen ist. Ein guter Kompressor für diese wäre MozJPEG, z.B. verfügbar im Online-Tool zur Bildoptimierung [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75% sollte gute Ergebnisse liefern.

Andere Formate verbessern die Kompressionsfähigkeiten von JPEG, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Ausgezeichnete Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (aber keine progressive Anzeige). Unterstützt von allen wichtigen Browsern außer Safari 14 auf macOS-Desktop Big Sur oder früher.

  > [!NOTE]
  > Obwohl Apple [die Unterstützung von WebP in Safari 14 angekündigt hat](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174), zeigen Safari-Versionen früher als 16.0 `.webp`-Bilder auf macOS-Desktop-Versionen früher als 11/Big Sur nicht erfolgreich an. Safari für iOS 14 zeigt `.webp`-Bilder hingegen erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so breit unterstützt). Jetzt unterstützt auf Chrome, Edge, Opera und Firefox. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool, um frühere Bildformate in AVIF zu konvertieren.
- **JPEG2000** — Sollte einst der Nachfolger von JPEG sein, wird jedoch nur in Safari unterstützt. Unterstützt keine progressive Anzeige.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und unter Berücksichtigung der Dekodierkosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Deshalb könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements ausgestattet mit einem [type-Attribut](/de/docs/Web/HTML/Reference/Elements/picture#the_type_attribute) erfolgen.

Wenn all dies ein wenig kompliziert klingt oder für Ihr Team zu viel Arbeit scheint, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können und die automatisch das richtige Bildformat je nach Gerät oder Browser bereitstellen, das das Bild anfordert. Beliebte Optionen sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Schließlich, sollten Sie animierte Bilder auf Ihrer Seite einfügen wollen, wissen Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>`-Elementen erlaubt. Diese erlauben Ihnen auch, ein **Animated WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Beim Bildversand ergibt das Konzept "eine Größe passt für alle" nicht die besten Ergebnisse. Das bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung und umgekehrt für größere Bildschirme bereitstellen möchten. Außerdem sollten Sie für Geräte, die einen Bildschirm mit hoher DPI aufweisen (z.B. "Retina"), Bilder mit höherer Auflösung bereitstellen. Abgesehen davon, dass Sie viele Zwischenbildvarianten erstellen, benötigen Sie auch eine Möglichkeit, der richtigen Datei an den richtigen Browser auszuliefern. Dafür benötigen Sie die Verbesserung Ihrer `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Reference/Elements/source#media)- und/oder [sizes](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Attributen. Ein ausführlicher Artikel darüber, wie diese Attribute kombiniert werden können, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte, die hinsichtlich hochauflösender Bildschirme zu beachten sind:

- Bei einem hochauflösenden Bildschirm erkennen Menschen Kompressionsartefakte viel später, was bedeutet, dass Sie für diese Bildschirme die Kompression über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Auflösungssteigerung über 2× DPI erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder bereitstellen müssen, die höher als 2× auflösen.

#### Kontrolle der Priorität (und Reihenfolge) des Downloadens von Bildern

Indem die wichtigsten Bilder vor den weniger wichtigen Besuchern angezeigt werden, kann eine verbesserte wahrgenommene Performance erzielt werden.

Das Erste, was zu überprüfen ist, ist, dass Ihre Inhaltsbilder `<img>` oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder in `<img>`-Elementen haben eine höhere Ladepriorität als Hintergrundbilder.

Zweitens, mit der Einführung von Priority Hints können Sie die Priorität weiter kontrollieren, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Eine Beispielanwendung für Prioritätshinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Rendering-Strategie: Verhindern von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und nach dem ersten Rendern weiterladen, können sie, wenn ihre Abmessungen vor dem Laden nicht definiert sind, Neuanordnungen der Seitenelemente verursachen. Zum Beispiel, wenn Text durch das Laden von Bildern auf der Seite nach unten verschoben wird. Aus diesem Grund ist es wichtig, `width`- und `height`-Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width`- und `height`-Attribute eines Bildes in einem HTML-{{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser vor dem Laden des Bildes berechnet werden. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird genutzt, um den benötigten Platz für die Anzeige des Bildes zu reservieren, wodurch ein Layout-Verschiebung beim Herunterladen und Darstellen des Bildes auf dem Bildschirm verringert oder sogar verhindert wird. Die Reduzierung der Layout-Verschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webperformance.

Die Browser beginnen, Inhalte zu rendern, während HTML analysiert wird, oft bevor alle Assets, einschließlich Bilder, heruntergeladen sind. Das Einschließen von Dimensionen ermöglicht es den Browsern, für jedes Bild eine korrekt groß bemessene Platzhalterbox zu reservieren, die angezeigt wird, wenn die Bilder beim ersten Rendern der Seite geladen werden.

![Zwei Screenshots: Der erste ohne Bild, aber mit reserviertem Platz; der zweite zeigt das Bild im reservierten Platz geladen.](ar-guide.jpg)

Ohne die `width`- und `height`-Attribute wird kein Platzhalter erstellt, was bei Laden des Bildes nach dem Rendern der Seite ein bemerkbares {{Glossary("jank", "Ruckeln")}} oder eine Layout-Verschiebung erzeugt. Seitenneuladen und Neudarstellungen sind Leistungs- und Benutzerfreundlichkeitsprobleme.

Die {{Glossary("CLS", "CLS")}}-Metrik misst das Ruckeln beim Laden der Seite oder wie stark sichtbare Inhalte im Viewport verschoben werden und um wie viel. Die Hauptursachen für schlechtes CLS sind ersetzte Elemente ohne deklarierte Dimensionen, die umgeschichtet werden, wenn das Asset geladen wird, einschließlich Bilder, Anzeigen, Einbindungen und Frames ohne Größe oder {{cssxref("aspect-ratio")}} und Webschriften.

Bei responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird normalerweise der folgende CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern herausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Obwohl nützlich für responsive Layouts, verursacht dies Ruckeln und schlechtes CLS, wenn Breiten- und Höheninformationen nicht eingeschlossen sind, da ohne Höheninformationen beim Parsen des `<img>`-Elements der CSS effektiv die Höhe auf 0 setzt. Wenn das Bild nach dem anfänglichen Rendering der Seite auf dem Bildschirm geladen wird, führt das Neuladen und Neudarstellen zu einer Layout-Verschiebung, da es den neu bestimmten Platz für die Höhe schafft.

Browser haben einen Mechanismus zum Größen von Bildern bevor das tatsächliche Bild geladen wird. Wenn ein `<img>`, `<video>`, oder `<input type="button">`-Element mit `width` und `height`-Attributen versehen ist, wird dessen Seitenverhältnis vor der Ladezeit berechnet und ist dem Browser, unter Verwendung der bereitgestellten Abmessungen, verfügbar.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher wird die korrekte Größe auf das `<img>`-Element angewendet, was bedeutet, dass das erwähnte Ruckeln nicht auftreten wird oder minimal ist, wenn die angegebenen Dimensionen beim Bildladen nicht ganz genau sind.

Das Seitenverhältnis wird nur für die Reservierung bei der Bildladung verwendet. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft anstelle des Seitenverhältnisses aus den Attributen verwendet. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, selbst wenn die Attributabmessungen nicht genau sind.

Während Entwickler in der Vergangenheit empfohlen haben mögen, die `width`- und `height`-Attribute eines Bildes in einem HTML-{{htmlelement("img")}} zu weglassen, gilt jetzt, dass das Einfügen dieser zwei Attribute aufgrund der Seitenverhältniszuordnung als beste Entwicklerpraxis angesehen wird.

Für jegliche Hintergrundbilder ist es wichtig, einen `background-color`-Wert festzulegen, damit überlagerte Inhalte lesbar bleiben, bevor das Bild heruntergeladen ist.

## Fazit

In diesem Abschnitt haben wir uns mit der Bildoptimierung befasst. Sie haben nun ein allgemeines Verständnis davon, wie Sie die Bandbreitenkosten der durchschnittlichen Website um die Hälfte optimieren können. Dies ist nur eine der Arten von Medien, die die Bandbreite der Benutzer verbrauchen und das Laden der Seiten verlangsamen. Sehen wir uns die Videooptimierung an, um die nächsten 20% des Bandbreitenverbrauchs anzugehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
