---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. Im Hinblick auf die Download-Performance sind das Eliminieren von Medien und das Reduzieren der Dateigröße die naheliegenden Maßnahmen. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos, um die Web-Performance zu verbessern.

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
          >clientseitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Informationen über die verschiedenen Bildformate zu lernen, ihren Einfluss auf die Leistung und wie man den Einfluss von Bildern auf die gesamte Ladezeit der Seite reduzieren kann.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hoher Ebene zur Optimierung der Multimedia-Übertragung im Web, die allgemeine Prinzipien und Techniken abdeckt. Für einen tiefergehenden Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [51% ihrer Bandbreite von Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), sodass es wichtig ist, Ihre Multimedia-Inhalte zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen nutzen begrenzte Datentarife oder zahlen sogar pro Nutzung, wo sie buchstäblich pro Megabyte zahlen. Dies ist auch kein Problem auf aufstrebenden Märkten. Im Jahr 2018 nutzen laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) noch 24% des Vereinigten Königreichs Prepaid-Tarife.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig zu beachten, dass, wenn Bilder heruntergeladen werden, sie im Speicher gespeichert werden müssen.

## Optimierung der Bildlieferung

Trotz des größten Verbrauchs von Bandbreite ist der Einfluss des Bilderdownloads auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer, als viele erwarten (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und die Benutzer die Bilder sehen können, während sie ankommen). Für eine gute Benutzererfahrung ist es dennoch wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von Bildern unterhalb des Folds, anstatt sie alle beim initialen Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher scrollt, um sie zu sehen oder nicht. Browser bieten dies nativ über das [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/img#loading) Attribut im `<img>`-Element an, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies können.

Neben dem Laden einer Teilmenge von Bildern sollten Sie sich das Format der Bilder selbst ansehen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise von der Charakteristik des Bildes ab.

> [!NOTE]
> Für allgemeine Informationen zu Bildtypen siehe den [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) Format ist besser geeignet für Bilder, die wenige Farben haben und nicht fotorealistisch sind. Dies erfordert, dass die Quelle im Format einer Vektorgrafik verfügbar ist. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das Rückfallformat der Wahl. Beispiele für solche Motive sind Logos, Illustrationen, Diagramme oder Symbole (Hinweis: SVGs sind weitaus besser als Symbolschriften!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bietet eine vollständige Farbgenauigkeit und sanfte Transparenz auf Kosten der Dateigröße. Diese Kombination möchten Sie wahrscheinlich zugunsten von WebP vermeiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bietet nicht mehr als 255 Farben, aber eine sanfte Transparenz. Die Dateigröße ist nicht zu groß. Dies sind die PNGs, die Sie wahrscheinlich möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz — bietet nicht mehr als 255 Farben und nur vollständige oder keine Transparenz pro Pixel, wodurch transparente Kanten hart und gezackt erscheinen. Die Dateigröße ist klein, aber die Preis ist visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel breitere Palette an Formaten zur Auswahl. Wenn Sie auf Nummer sicher gehen wollen, dann würden Sie gut komprimierte **Progressive JPEGs** verwenden. Progressive JPEGs werden im Gegensatz zu normalen JPEGs progressiv gerendert (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt dass das Bild in voller Auflösung von oben nach unten geladen oder erst beim vollständigen Herunterladen gerendert wird. Ein guter Kompressor hierfür wäre MozJPEG, z. B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätsstufe von 75% sollte ordentliche Ergebnisse liefern.

Andere Formate verbessern die JPEG-Fähigkeiten hinsichtlich der Kompression, sind aber nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Bilder, Transparenz usw. (aber keine progressive Darstellung). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder früher.

  > [!NOTE]
  > Obwohl Apple [Unterstützung für WebP in Safari 14 angekündigt hat](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174), zeigen Safari-Versionen älter als 16.0 `.webp` Bilder nicht erfolgreich auf macOS-Desktopversionen älter als 11/Big Sur. Safari für iOS 14 zeigt `.webp` Bilder jedoch erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und des lizenzgebührenfreien Bildformats (es ist noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt von Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool, um frühere Bildformate in AVIF zu konvertieren.
- **JPEG2000** — sollte einmal der Nachfolger von JPEG werden, wird jedoch nur in Safari unterstützt. Unterstützt keine progressive Darstellung.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und unter Berücksichtigung der Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG das WebP-Format. Deshalb könnten Sie auch Ihre Bilder in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements erfolgen, das mit einem [type-Attribut](/de/docs/Web/HTML/Reference/Elements/picture#the_type_attribute) ausgestattet ist.

Wenn all dies ein wenig kompliziert oder zu arbeitsaufwendig für Ihr Team klingt, dann gibt es auch Online-Dienste, die Sie als Bild-CDNs nutzen können, die die Bereitstellung des richtigen Bildformats automatisch entsprechend dem Gerät oder Browser, das/die das Bild anfordert, vornehmen. Beliebte Anbieter sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Sollten Sie schließlich animierte Bilder auf Ihrer Seite einfügen wollen, müssen Sie wissen, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>`-Elementen zulässt. Diese erlauben es Ihnen auch, ein **Animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Bei der Bildbereitstellung führt der Ansatz "One size fits all" nicht zu den besten Ergebnissen, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung und umgekehrt für größere Bildschirme bereitstellen möchten. Darüber hinaus möchten Sie auch höher aufgelöste Bilder für Geräte bereitstellen, die über ein Display mit hoher DPI verfügen (z. B. "Retina"). Daher müssen Sie nicht nur viele Zwischenbildvarianten erstellen, sondern auch eine Möglichkeit finden, die richtige Datei an den richtigen Browser auszuliefern. Dafür ist es erforderlich, Ihre `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Reference/Elements/source#media) und/oder [sizes](/de/docs/Web/HTML/Reference/Elements/source#sizes) Attributen auszustatten. Ein ausführlicher Artikel darüber, wie all diese Attribute kombiniert werden können, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte im Hinblick auf Bildschirme mit hoher DPI sollten berücksichtigt werden:

- Bei einem Bildschirm mit hoher DPI werden Kompressionsartefakte von Menschen viel später erkannt, was bedeutet, dass Sie für Bilder, die für diese Bildschirme gedacht sind, die Kompression über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus wahrnehmen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder mit einer höheren Auflösung als 2× bereitstellen müssen.

#### Kontrolle der Priorität und Reihenfolge beim Herunterladen von Bildern

Die wichtigsten Bilder schneller vor den Besuchern zu platzieren als die weniger wichtigen, kann eine verbesserte wahrgenommene Leistung liefern.

Das erste, was Sie überprüfen sollten, ist, dass Ihre Inhaltsbilder `<img>` oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>`-Elementen referenziert werden, erhalten eine höhere Ladepriorität als Hintergrundbilder.

Darüber hinaus können Sie mit der Einführung von Priority Hints die Priorität weiter kontrollieren, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsfall für Prioritäts-Hinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Render-Strategie: Vermeidung von Verzögerungen beim Laden von Bildern

Da Bilder asynchron geladen werden und auch nach dem ersten Rendern weiterladen, können sie, wenn ihre Dimensionen nicht vor dem Laden festgelegt sind, zu Neuanordnungen des Seiteninhalts führen. Wenn zum Beispiel Text aufgrund von Bildern, die geladen werden, verschoben wird. Aus diesem Grund ist es wichtig, `width` und `height` Attribute zu setzen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width` und `height` Attribute eines Bildes im HTML {{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, wodurch eine Layoutverschiebung beim Herunterladen und Zeichnen des Bildes auf den Bildschirm reduziert oder sogar verhindert wird. Die Reduzierung der Layout-Verschiebung ist eine wesentliche Komponente einer guten Benutzererfahrung und Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, während HTML geparst wird, oft bevor alle Ressourcen, einschließlich Bilder, heruntergeladen sind. Das Einfügen von Dimensionen ermöglicht es Browsern, eine korrekt dimensionierte Platzhalterbox für jedes Bild zu reservieren, die beim ersten Rendern der Seite geladen wird.

![Zwei Screenshots, der erste ohne Bild, aber mit reserviertem Platz, der zweite zeigt das Bild im reservierten Platz.](ar-guide.jpg)

Ohne die `width` und `height` Attribute wird kein Platzhalterplatz erstellt, was zu einer auffälligen {{Glossary("jank", "Verzögerung")}} oder Layoutverschiebung auf der Seite führt, wenn das Bild nach dem Rendern der Seite geladen wird. Seitenneuanordnung und Neuzeichnungen sind Leistungs- und Usability-Probleme.

Die {{Glossary("CLS", "CLS")}} Metrik misst die Verzögerung beim Laden der Seite oder wie viel sichtbarer Inhalt im Ansichtsfenster verschoben wird und um wie viel. Die Hauptursachen für schlechten CLS sind ersetzte Elemente ohne deklarierte Dimensionen, die neu angeordnet werden, wenn die Ressource geladen wird, einschließlich Bilder, Anzeigen, Einbettungen und iframes ohne Größe oder {{cssxref("aspect-ratio")}} und Web-Schriftarten.

In responsiven Designs, wenn ein Container schmaler ist als ein Bild, wird das folgende CSS im Allgemeinen verwendet, um zu verhindern, dass Bilder aus ihren Containern herausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Obwohl nützlich für responsive Layouts, verursacht dies Verzögerungen und schlechten CLS, wenn Breiten- und Höheninformationen nicht enthalten sind. Wenn beim Parsen des `<img>`-Elements keine Höheninformationen vorhanden sind, effektivisiert dieses CSS die Höhen auf 0. Wenn das Bild nach dem anfänglichen Rendern der Seite auf den Bildschirm geladen wird, entsteht eine Seitenneuanordnung und Neuzeichnungen, wodurch eine Layout-Verschiebung entsteht, da Platz für die neu bestimmte Höhe geschaffen wird.

Browser haben einen Mechanismus, um Bilder zu skalieren, bevor das tatsächliche Bild geladen ist. Wenn ein `<img>`, `<video>` oder `<input type="button">`-Element `width` und `height` Attribute gesetzt hat, wird sein Seitenverhältnis vor der Ladezeit berechnet und ist dem Browser über die angegebenen Dimensionen bekannt.

Dieses Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, sodass die korrekte Größe auf das `<img>`-Element angewendet wird, was bedeutet, dass die zuvor genannte Verzögerung nicht auftritt oder minimal ist, wenn die angegebenen Dimensionen nicht vollständig genau sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur bei der Bildladung zur Reservierung von Platz verwendet. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio` Eigenschaft verwendet statt des Seitenverhältnisses aus den Attributen. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, auch wenn die Attributdimensionen nicht genau sind.

Obwohl Entwickler-Best Practices aus dem letzten Jahrzehnt möglicherweise das Weglassen der `width` und `height` Attribute eines Bildes in einem HTML {{htmlelement("img")}} empfohlen haben, gilt aufgrund der Zuordnung der Seitenverhältnisse das Einfügen dieser zwei Attribute als Entwickler-Best Practice.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color` Wert angeben, damit jeglicher überlagerter Inhalt lesbar bleibt, bevor das Bild heruntergeladen ist.

## Fazit

In diesem Abschnitt haben wir uns mit der Bildoptimierung beschäftigt. Sie haben nun ein allgemeines Verständnis dafür, wie man die Hälfte der durchschnittlichen Bandbreitentotalität einer durchschnittlichen Website optimiert. Dies ist nur eine der Arten von Medien, die die Bandbreite der Nutzer beanspruchen und die Ladezeit der Seite verlangsamen. Lassen Sie uns die Videooptimierung betrachten, um die nächsten 20% des Bandbreitenverbrauchs anzugehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
