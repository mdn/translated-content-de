---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70 % der heruntergeladenen Bytes einer durchschnittlichen Website aus. Bezüglich der Download-Performance sind das Eliminieren von Medien und die Reduzierung der Dateigröße die leicht zu erreichenden Maßnahmen. Dieser Artikel betrachtet die Optimierung von Bildern und Videos, um die Web-Performance zu verbessern.

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
          >Client-seitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie über die verschiedenen Bildformate, deren Einfluss auf die Performance und wie man den Einfluss von Bildern auf die gesamte Ladezeit der Seite reduzieren kann.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hohem Niveau zur Optimierung der Multimedia-Auslieferung im Web und behandelt allgemeine Prinzipien und Techniken. Für einen detaillierteren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [51 % der Bandbreite von Bildern, gefolgt von Videos mit 25 %](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, Multimedia-Inhalte anzusprechen und zu optimieren.

Sie sollten den Datenverbrauch berücksichtigen. Viele Menschen haben Begrenzungen bei ihren Datentarifen oder zahlen sogar pro Megabyte. Das ist auch kein Problem nur aufstrebender Märkte. Laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) nutzten 2018 noch 24 % des Vereinigten Königreichs Pay-as-you-go.

Sie sollten auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten Arbeitsspeicher verfügen. Es ist wichtig zu bedenken, dass Bilder, wenn sie heruntergeladen werden, im Speicher gespeichert werden müssen.

## Optimierung der Bildlieferung

Obwohl Bilder die größten Bandbreitenverbraucher sind, ist der Einfluss des Bild-Downloads auf die [wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weitaus geringer als viele erwarten (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und Benutzer die Bilder beim Laden sehen können). Dennoch ist es für eine gute Benutzererfahrung wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von Bildern unterhalb des sichtbaren Bereichs, anstatt alle beim initialen Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher sie durch Scrollen anschaut oder nicht. Browser bieten dies nativ über das [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/img#loading) Attribut für die `<img>` `<iframe>`, `<video>` und `<audio>` Elemente. Es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies übernehmen können.

Neben dem Laden eines Teilsets von Bildern sollten Sie sich das Format der Bilder selbst ansehen:

- Verwenden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise vom Charakter des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types).

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) Format ist besser geeignet für Bilder mit wenigen Farben, die nicht fotorealistisch sind. Dies erfordert, dass die Quelle in einem Vektorformat vorliegt. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das Fallback-Format der Wahl. Beispiele für diese Art von Motiven sind Logos, Illustrationen, Diagramme oder Icons (Hinweis: SVGs sind viel besser als Icon-Schriftarten!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bieten volle Farbgenauigkeit und glatte Transparenz, allerdings auf Kosten der Größe. Sie möchten diese Kombination wahrscheinlich zugunsten von WebP vermeiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bieten nicht mehr als 255 Farben, behalten jedoch glatte Transparenzen bei. Die Größe ist nicht zu groß. Das sind die PNGs, die Sie wahrscheinlich möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz — bieten nicht mehr als 255 Farben und nur volle Transparenz pro Pixel, was die Transparenzränder hart und gezackt erscheinen lässt. Die Größe ist klein, jedoch auf Kosten der visuellen Qualität.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz haben, gibt es eine viel größere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen möchten, verwenden Sie gut komprimierte **Progressive JPEGs**. Progressive JPEGs werden im Gegensatz zu normalen JPEGs schrittweise gerendert (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt dass das Bild in voller Auflösung von oben nach unten geladen wird oder nur einmalig angezeigt wird, wenn es vollständig heruntergeladen ist. Ein guter Kompressor hierfür wäre MozJPEG, zum Beispiel verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75 % sollte ordentliche Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG hinsichtlich der Komprimierung, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (aber keine progressive Anzeige). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder früher.

  > [!NOTE]
  > Obwohl Apple [die Unterstützung für WebP in Safari 14 angekündigt hat](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174), zeigen Safari-Versionen vor 16.0 `.webp` Bilder nicht erfolgreich auf macOS Desktop-Versionen vor 11/Big Sur. Safari für iOS 14 zeigt `.webp` Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet). Es wird jetzt in Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zur Konvertierung vorheriger Bildformate in AVIF.
- **JPEG2000** — Sollte ursprünglich der Nachfolger von JPEG werden, wird aber nur in Safari unterstützt. Unterstützt auch keine progressive Anzeige.

Angesichts der begrenzten Unterstützung für JPEG-XR und JPEG2000 und auch der Berücksichtigung von Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Aus diesem Grund könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>` Element mit Hilfe eines `<source>` Elements erfolgen, das mit einem [type Attribut](/de/docs/Web/HTML/Reference/Elements/picture#the_type_attribute) ausgestattet ist.

Wenn all dies kompliziert oder nach zu viel Arbeit für Ihr Team klingt, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können, die das Servieren des richtigen Bildformats automatisch für das Gerät oder den Browser, der das Bild anfordert, automatisieren. Beliebte Optionen sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Abschließend, wenn Sie animierte Bilder auf Ihrer Seite einfügen möchten, wissen Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>` Elementen erlaubt. Diese erlauben es Ihnen auch, ein **Animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Bei der Bildlieferung wird die "Eine Größe passt für alle"-Herangehensweise keine besten Ergebnisse liefern, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung und umgekehrt für größere Bildschirme bereitstellen möchten. Darüber hinaus möchten Sie auch hochauflösende Bilder an diejenigen Geräte ausliefern, die über ein hochauflösendes Display verfügen (z. B. "Retina"). Neben der Erstellung zahlreicher Bildvarianten benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser auszuliefern. Dazu müssen Sie Ihre `<picture>` und `<source>` Elemente mit [`media`](/de/docs/Web/HTML/Reference/Elements/source#media) und/oder [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes) Attributen aufrüsten. [Responsive Bilder richtig gemacht: Ein Leitfaden zu `<picture>` und `srcset`](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) erklärt detailliert, wie man all diese Attribute kombiniert.

Zwei interessante Effekte, die bei hochauflösenden Bildschirmen zu beachten sind:

- Bei einem hochauflösenden Bildschirm werden Kompressionsartefakte viel später wahrgenommen, was bedeutet, dass Sie für Bilder, die für diese Bildschirme gedacht sind, die Kompression stärker einstellen können als üblich.
- [Nur sehr wenige Menschen können eine Auflösungssteigerung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder mit höherer Auflösung als 2× bereitstellen müssen.

#### Die Kontrolle über die Priorität (und Reihenfolge) des Herunterladens von Bildern

Wichtige Bilder früher vor den Besuchern anzuzeigen als weniger wichtige, kann die wahrgenommene Leistung verbessern.

Das Erste, was Sie überprüfen sollten, ist, dass Ihre Inhaltbilder `<img>` oder `<picture>` Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder in `<img>`-Elementen erhalten eine höhere Ladepriorität als Hintergrundbilder.

Zweitens, mit der Einführung von Priority Hints, können Sie die Priorität weiter steuern, indem Sie ein `fetchPriority` Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsfall für Prioritätenhinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Rendering-Strategie: Vermeidung von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und nach dem ersten Anstrich weitergeladen werden, können sie, wenn ihre Dimensionen nicht vor dem Laden definiert werden, Neuanordnungen des Seiteninhalts verursachen. Zum Beispiel, wenn Text durch geladene Bilder nach unten auf der Seite gedrückt wird. Aus diesem Grund ist es wichtig, `width` und `height` Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width` und `height` Attribute eines Bildes im HTML {{htmlelement("img")}} Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, wodurch das Layout beim Herunterladen und Anzeigen des Bildes nicht verschoben wird oder nur minimal verschoben wird. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, sobald HTML analysiert wird, oft bevor alle Ressourcen, einschließlich Bilder, heruntergeladen sind. Das Einfügen von Dimensionen ermöglicht es Browsern, einen korrekt dimensionierten Platzhalterkasten für jedes Bild zu reservieren, wenn die Bilder beim ersten Rendern der Seite geladen werden.

![Zwei Screenshots, der erste ohne Bild, aber mit reserviertem Platz, der zweite zeigt das Bild, das in den reservierten Platz geladen wurde.](ar-guide.jpg)

Ohne die `width` und `height` Attribute wird kein Platzhalter erstellt, was zu einem bemerkbaren {{Glossary("jank", "Ruckeln")}} oder Layoutverschiebungen auf der Seite führt, wenn das Bild nach dem Rendern der Seite geladen wird. Seitenumschaltung und Neuanstriche sind Performance- und Usability-Probleme.

Die {{Glossary("CLS", "CLS")}} Metrik misst das Ruckeln beim Laden der Seite oder wie viel sich sichtbarer Inhalt im Viewport verschiebt und um wie viel. Die Hauptverursacher schlechter CLS sind ersetzte Elemente ohne deklarierte Dimensionen, die sich beim Laden der Ressource neu anordnen, einschließlich Bildern, Anzeigen, Einbettungen und iframes ohne Größe oder {{cssxref("aspect-ratio")}} und Webfonts.

In responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird allgemein folgendes CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern ausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Obwohl nützlich für responsive Layouts, verursacht dies Ruckeln und schlechte CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, da wenn keine Höheninformationen vorhanden sind, wenn das `<img>` Element analysiert, aber das Bild noch nicht geladen wurde, dieses CSS effektiv die Höhe auf 0 setzt. Wenn das Bild nach dem ersten Rendern der Seite auf den Bildschirm geladen wird, kommt es zu einer Neuanordnung und zum Neuanstrich der Seite, was zu einer Layoutverschiebung führt, da Platz für die neu bestimmte Höhe geschaffen wird.

Browser haben einen Mechanismus zur Größenanpassung von Bildern, bevor das tatsächliche Bild geladen wird. Wenn ein `<img>`, `<video>` oder `<input type="button">` Element `width` und `height` Attribute festgelegt hat, wird das Seitenverhältnis vor der Ladezeit berechnet und ist dem Browser verfügbar, indem die bereitgestellten Dimensionen verwendet werden.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und die korrekte Größe wird auf das `<img>` Element angewendet, was bedeutet, dass das oben erwähnte Ruckeln nicht auftritt oder minimal ist, wenn die angegebenen Dimensionen beim Laden des Bildes nicht vollständig akkurat sind.

Das Seitenverhältnis wird nur verwendet, um Platz auf dem Bild zu reservieren. Sobald das Bild geladen ist, wird das innere Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio` Eigenschaft anstelle des Seitenverhältnisses aus den Attributen verwendet. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, auch wenn die Attributdimensionen nicht genau sind.

Während Entwickler in den letzten zehn Jahren empfohlen haben könnten, die `width` und `height` Attribute eines Bildes im HTML {{htmlelement("img")}} zu weglassen, gilt aus der Perspektive des Seitenverhältnisses die Aufnahme dieser beiden Attribute als Best Practice für Entwickler.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color` Wert setzen, damit Inhalte darüber weiterhin lesbar sind, bevor das Bild heruntergeladen wurde.

## Fazit

In diesem Abschnitt haben wir uns mit Bildoptimierung befasst. Sie haben jetzt ein grundsätzliches Verständnis dafür, wie Sie die Hälfte des durchschnittlichen Bandbreitenverbrauchs einer Website optimieren können. Dies ist nur eine der Arten von Medien, die die Bandbreite der Benutzer beanspruchen und die Ladezeit der Seite verlangsamen. Lassen Sie uns die Videooptimierung betrachten, die sich mit den nächsten 20 % des Bandbreitenverbrauchs befasst.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
