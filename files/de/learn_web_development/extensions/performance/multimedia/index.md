---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, insbesondere Bilder und Videos, machen über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. In Bezug auf die Download-Leistung ist das Eliminieren von Medien und das Reduzieren der Dateigröße der leicht erreichbare Gewinn. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos, um die Webperformance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >Client-seitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie die verschiedenen Bildformate, deren Einfluss auf die Leistung und wie Sie den Einfluss von Bildern auf die gesamte Ladezeit der Seite reduzieren können.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung in die Optimierung der Medienbereitstellung im Web, die allgemeine Prinzipien und Techniken behandelt. Für einen detaillierteren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia optimieren?

Für die durchschnittliche Website stammen [51% ihrer Bandbreite von Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, Ihre multimedialen Inhalte in Angriff zu nehmen und zu optimieren.

Sie müssen auf den Datenverbrauch achten. Viele Menschen haben Datenbeschränkungen oder zahlen sogar pro Megabyte. Dies ist kein Problem eines aufstrebenden Marktes. Im Jahr 2018 nutzten 24% des Vereinigten Königreichs immer noch Pay-as-you-go laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142).

Sie müssen auch den Speicher beachten, da viele mobile Geräte über eingeschränkten RAM verfügen. Es ist wichtig zu bedenken, dass Bilder, die heruntergeladen werden, im Speicher gespeichert werden müssen.

## Optimierung der Bildbereitstellung

Obwohl Bilder der größte Bandbreitenverbraucher sind, ist der Einfluss des Bilddownloads auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer als viele erwarten (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und Benutzer die Bilder sehen können, die angezeigt werden, sobald sie ankommen). Für eine gute Benutzererfahrung ist es jedoch wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von Bildern unterhalb des sichtbaren Bereichs, anstatt sie alle beim ersten Seitenaufruf herunterzuladen, egal ob ein Besucher scrollt, um sie zu sehen oder nicht. Browser bieten dies nativ über das Attribut [`loading="lazy"`](/de/docs/Web/HTML/Element/img#loading) auf dem `<img>`-Element an, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies tun können.

Neben dem Laden eines Teils der Bilder sollten Sie sich das Format der Bilder selbst ansehen:

- Laden Sie die besten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt normalerweise vom Charakter des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Format ist geeigneter für Bilder mit wenigen Farben und die nicht fotorealistisch sind. Dies erfordert, dass die Quelle als Vektorgrafikformat verfügbar ist. Sollte ein solches Bild nur als Bitmap existieren, dann wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das Format der Wahl. Beispiele für diese Arten von Motiven sind Logos, Illustrationen, Diagramme oder Symbole (Hinweis: SVGs sind viel besser als Symbolfonts!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz – bietet vollständige Farbgenauigkeit und fließende Transparenz auf Kosten der Größe. Diese Kombination sollten Sie wahrscheinlich zugunsten von WebP (siehe unten) vermeiden.
- 8-Bit-Farbe + 8-Bit-Transparenz – bietet nicht mehr als 255 Farben, behält aber fließende Transparenzen bei. Die Größe ist nicht zu groß. Das sind die PNGs, die Sie wahrscheinlich möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz – bietet nicht mehr als 255 Farben und bietet nur keine oder vollständige Transparenz pro Pixel, was die Transparenzränder hart und gezackt erscheinen lässt. Die Größe ist klein, der Preis ist jedoch die visuelle Wiedergabetreue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine wesentlich größere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen wollen, sollten Sie gut komprimierte **progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, rendert progressiv (daher der Name), was bedeutet, dass der Benutzer eine Version mit niedriger Auflösung sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt das Bild, das in voller Auflösung von oben nach unten geladen oder sogar nur gerendert wird, wenn es vollständig heruntergeladen ist. Ein guter Kompressor dafür wäre MozJPEG, z.B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75% sollte anständige Ergebnisse liefern.

Andere Formate verbessern die Komprimierungsmöglichkeiten von JPEG, sind aber nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) – Hervorragende Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet eine viel bessere Komprimierung als PNG oder JPEG bei Unterstützung für höhere Farbtiefen, animierte Bilder, Transparenz usw. (aber keine progressive Anzeige). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Big Sur oder früher.

  > [!NOTE]
  > Trotz der Ankündigung von Apple [Unterstützung für WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) anzubieten, zeigen Safari-Versionen früher als 16.0 keine `.webp`-Bilder erfolgreich auf macOS-Desktop-Versionen früher als 11/Big Sur an. Safari für iOS 14 _zeigt_ `.webp`-Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) – Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und dem gebührenfreien Bildformat (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt auf Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Tool, um vorherige Bildformate zu AVIF zu konvertieren.
- **JPEG2000** – sollte der Nachfolger von JPEG sein, wird aber nur in Safari unterstützt. Unterstützt auch keine progressive Anzeige.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und unter Berücksichtigung der Kosten für die Dekodierung ist der einzige ernsthafte Konkurrent für JPEG WebP. Deshalb können Sie Ihre Bilder auch in diesem Format anbieten. Dies kann mittels des `<picture>`-Elements und mit einem `<source>`-Element erfolgen, das mit einem [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) ausgestattet ist.

Wenn all dies etwas kompliziert klingt oder sich nach zu viel Arbeit für Ihr Team anfühlt, gibt es auch Online-Dienste, die Sie als Bild-CDNs nutzen können, die das Servieren des richtigen Bildformats in Echtzeit je nach Gerätetyp oder Browser, der das Bild anfordert, automatisieren. Beliebte Optionen sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion), und [imgix](https://www.imgix.com/).

Wenn Sie schließlich animierte Bilder auf Ihrer Seite einfügen möchten, sollten Sie wissen, dass Safari die Verwendung von Videodateien innerhalb von `<img>`- und `<picture>`-Elementen erlaubt. Diese ermöglichen es, ein **animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

In der Bildbereitstellung wird der Ansatz "Eine Größe passt für alle" nicht die besten Ergebnisse liefern, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit geringerer Auflösung bereitstellen möchten und umgekehrt für größere Bildschirme. Darüber hinaus möchten Sie auch hochaufgelöste Bilder für diese Geräte bereitstellen, die mit einem hochauflösenden Bildschirm ausgestattet sind (z.B. "Retina"). Abgesehen davon, dass Sie viele Zwischenbildvarianten erstellen, benötigen Sie auch eine Möglichkeit, der richtigen Datei an den richtigen Browser zu liefern. Dafür sollten Sie Ihr `<picture>`- und `<source>`-Element um [media](/de/docs/Web/HTML/Element/source#media) und/oder [sizes](/de/docs/Web/HTML/Element/source#sizes) Attribute erweitern. Ein detaillierter Artikel darüber, wie Sie all diese Attribute kombinieren können, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte, die man sich bezüglich hochauflösender Bildschirme merken kann, sind:

- Mit einem hochauflösenden Bildschirm können Menschen Komprimierungsartefakte viel später erkennen, was bedeutet, dass Sie für Bilder, die für diese Bildschirme bestimmt sind, die Komprimierung über die üblichen Werte hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Steigerung der Auflösung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder servieren müssen, die höher als 2× aufgelöst sind.

#### Steuerung der Priorität (und Reihenfolge) beim Herunterladen von Bildern

Wenn die wichtigsten Bilder schneller vor den Besuchern angezeigt werden als weniger wichtige, kann dies die wahrgenommene Leistung verbessern.

Das erste, was überprüft werden muss, ist, dass Ihre Inhaltsbilder `<img>`- oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind – Bilder, die in `<img>`-Elementen referenziert sind, haben eine höhere Ladepriorität als Hintergrundbilder.

Zweitens ermöglicht die Adoption von Priority Hints, die Priorität weiter zu kontrollieren, indem ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzugefügt wird. Ein Anwendungsbeispiel für Priority Hints bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Renderstrategie: Verhinderung von Rucklern beim Laden von Bildern

Da Bilder asynchron geladen werden und nach dem ersten Rendern weiter geladen werden, können sie, wenn ihre Abmessungen vor dem Laden nicht definiert sind, Nachladen der Seiteninhalte verursachen. Zum Beispiel, wenn Text durch das Laden von Bildern nach unten auf der Seite verschoben wird. Aus diesem Grund ist es wichtig, `width` und `height` Attribute festzulegen, damit der Browser Platz dafür im Layout reservieren kann.

Wenn die `width` und `height` Attribute eines Bildes im HTML-{{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zum Anzeigen des Bildes zu reservieren, wobei ein Layout-Verschiebung reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf den Bildschirm gerendert wird. Das Reduzieren von Layout-Verschiebungen ist ein wichtiger Bestandteil einer guten Benutzererfahrung und Webperformance.

Browser beginnen, Inhalte zu rendern, während HTML analysiert wird, oft bevor alle Assets, einschließlich Bilder, heruntergeladen sind. Das Hinzufügen von Abmessungen ermöglicht es Browsern, korrekt dimensionierte Platzhalterkästchen für jedes Bild zu reservieren, die angezeigt werden, wenn die Bilder geladen sind, wenn die Seite zum ersten Mal gerendert wird.

![Zwei Screenshots, der erste ohne ein Bild, aber mit reserviertem Platz, der zweite zeigt das Bild, das in den reservierten Platz geladen ist.](ar-guide.jpg)

Ohne die `width` und `height` Attribute wird kein Platzhalterplatz erstellt, was zu einem auffälligen {{Glossary("jank", "Ruckler")}} oder einer Layout-Verschiebung auf der Seite führt, wenn das Bild nach dem Rendern der Seite geladen wird. Seitenneuladen und Neuzeichnen sind Leistungs- und Benutzerfreundlichkeitsprobleme.

Die {{Glossary("CLS", "CLS")}}-Metrik misst das Ruckeln beim Laden der Seite, oder wie viel sichtbarer Inhalt im Ansichtsfenster verschiebt sich und um wie viel. Die Hauptschuldigen für schlechten CLS sind ersetzte Elemente ohne deklarierte Abmessungen, die sich nach dem Laden der Assets verschieben, einschließlich Bilder, Werbung, Einbettungen und iframes ohne Größe oder {{cssxref("aspect-ratio")}} und Web-Schriften.

In responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird folgendes CSS allgemein verwendet, um zu verhindern, dass Bilder aus ihren Containern heraustreten:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Zwar nützlich für responsive Layouts, verursacht dies Ruckler und schlechten CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, da, wenn keine Höheninformationen vorhanden sind, wenn das `<img>`-Element analysiert wird, aber bevor das Bild geladen ist, dieses CSS effektiv die Höhe auf 0 gesetzt hat. Wenn das Bild nach dem ersten Rendering der Seite auf dem Bildschirm geladen wird, wird die Seite neu geladen und neu gezeichnet, wobei eine Layout-Verschiebung entsteht, um den neu bestimmten Platz zu schaffen.

Browser haben einen Mechanismus zur Dimensionierung von Bildern, bevor das tatsächliche Bild geladen ist. Wenn ein `<img>`, `<video>` oder `<input type="button">` Element `width` und `height` Attribute gesetzt hat, wird vor der Ladezeit die Seitenverhältnis berechnet, und dem Browser zur Verfügung gestellt, indem die bereitgestellten Dimensionen verwendet werden.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und somit, die richtige Größe wird auf das `<img>`-Element angewendet, was bedeutet, dass der oben genannte Ruckler nicht auftreten wird oder minimal ist, wenn die gelisteten Dimensionen nicht vollständig korrekt sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur für die Bildladung verwendet, um Platz zu reservieren. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio` Eigenschaft verwendet, anstatt des Seitenverhältnisses aus den Attributen. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, selbst wenn die attribute Größen nicht korrekt sind.

Während Entwickler-Best Praktiken aus dem letzten Jahrzehnt empfohlen haben könnten, die `width` und `height` Attribute eines Bildes im HTML-{{htmlelement("img")}}-Element wegzulassen, wird durch die Zuordnung von Seitenverhältnissen empfohlen, diese beiden Attribute als Entwickler-Best-Practice zu betrachten.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color` Wert festlegen, sodass überlagerte Inhalte weiterhin lesbar sind, bevor das Bild heruntergeladen ist.

## Fazit

In diesem Abschnitt haben wir uns mit der Bildoptimierung befasst. Sie haben jetzt ein allgemeines Verständnis dafür, wie Sie die Hälfte der durchschnittlichen Bandbreitennutzung einer durchschnittlichen Website optimieren können. Dies ist nur eine der Medienarten, die die Bandbreite der Benutzer verbrauchen und die Ladezeit der Seite verlangsamen. Lassen Sie uns die Videooptimierung betrachten und die nächsten 20% des Bandbreitenverbrauchs angehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
