---
title: "Multimedia: Bilder"
slug: Learn/Performance/Multimedia
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}

Medien, insbesondere Bilder und Videos, machen über 70 % der heruntergeladenen Bytes einer durchschnittlichen Website aus. In Bezug auf die Download-Performance ist das Eliminieren von Medien und die Reduzierung der Dateigröße die naheliegende Lösung. Dieser Artikel behandelt die Optimierung von Bildern und Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie mehr über die verschiedenen Bildformate, deren Einfluss auf die Performance und wie Sie den Einfluss von Bildern auf die gesamte Ladezeit der Seite reduzieren können.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hoher Ebene zur Optimierung der Multimedia-Bereitstellung im Web, die allgemeine Prinzipien und Techniken behandelt. Für eine detailliertere Anleitung siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [51 % ihrer Bandbreite von Bildern, gefolgt von Videos mit 25 %](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, Ihre Multimedia-Inhalte anzusprechen und zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen nutzen Tarifmodelle mit Datenobergrenzen oder zahlen sogar pro genutztem Megabyte. Dies ist kein Problem nur in aufstrebenden Märkten. Laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) nutzten 2018 immer noch 24 % des Vereinigten Königreichs Pay-as-you-go-Modelle.

Außerdem sollten Sie den Speicher berücksichtigen, da viele mobile Geräte nur über begrenzten RAM verfügen. Es ist wichtig zu bedenken, dass heruntergeladene Bilder im Speicher gespeichert werden müssen.

## Optimierung der Bildbereitstellung

Trotz der größten Bandbreitenverbraucher ist der Einfluss des Bilddownloads auf die [wahrgenommene Leistung](/de/docs/Learn/Performance/Perceived_performance) viel geringer als viele erwarten (hauptsächlich, weil der Seitentextinhalt sofort heruntergeladen wird und Benutzer die Bilder sehen können, während sie gerendert werden). Für eine gute Benutzererfahrung ist es jedoch immer noch wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Ladestrategie

Eine der größten Verbesserungen für die meisten Websites besteht darin, [Lazy-Loading](/de/docs/Web/Performance/Lazy_loading) von Bildern unterhalb des Faltbereichs zu implementieren, anstatt sie alle beim ersten Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher sie durch Scrollen sieht oder nicht. Viele JavaScript-Bibliotheken können dies für Sie umsetzen, wie [lazysizes](https://github.com/aFarkas/lazysizes), und Browser-Anbieter arbeiten an einem nativen `lazyload`-Attribut, das sich derzeit in der experimentellen Phase befindet.

Über das Laden eines Teilbilder-Sets hinaus sollten Sie sich das Format der Bilder selbst ansehen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise von der Charakteristik des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types).

Das [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Format ist besser geeignet für Bilder mit wenigen Farben und die nicht fotorealistisch sind. Dies erfordert, dass die Quelle als Vektorgrafikformat verfügbar ist. Sollte ein solches Bild nur als Bitmap existieren, dann wäre [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) das Rückfallformat der Wahl. Beispiele für diese Motive sind Logos, Illustrationen, Diagramme oder Symbole (Hinweis: SVGs sind weitaus besser als Icons-Schriftarten!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bietet volle Farbgenauigkeit und sanfte Transparenz auf Kosten der Größe. Dies ist wahrscheinlich die Kombination, die Sie zugunsten von WebP vermeiden wollen (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bietet nicht mehr als 255 Farben, behält aber sanfte Transparenzen bei. Die Größe ist nicht zu groß. Das sind die PNGs, die Sie wahrscheinlich wollen.
- 8-Bit-Farbe + 1-Bit-Transparenz — bietet nicht mehr als 255 Farben und nur volle oder keine Transparenz pro Pixel, was die Transparenzränder hart und gezackt erscheinen lässt. Die Größe ist klein, aber der Preis ist die visuelle Wiedergabetreue.

Ein gutes Online-Tool zum Optimieren von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel größere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen wollen, dann sollten Sie gut komprimierte **Progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, werden progressiv gerendert (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstelle des Bildes, das in voller Auflösung von oben nach unten geladen wird oder sogar erst vollständig heruntergeladen dargestellt wird. Ein guter Kompressor für diese wäre MozJPEG, z.B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätsstufe von 75 % sollte anständige Ergebnisse liefern.

Andere Formate verbessern die Kompressionsfähigkeiten von JPEGs, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet viel bessere Kompression als PNG oder JPEG mit Unterstützung für tiefere Farbtiefen, animierte Frames, Transparenz usw. (aber keine progressive Anzeige.). Wird von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder früher unterstützt.

  > [!NOTE]
  > Trotz der Ankündigung von Apple zur Unterstützung von WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174), zeigen Safari-Versionen vor 16.0 `.webp`-Bilder nicht erfolgreich auf macOS Desktop-Versionen vor 11/Big Sur. Safari für iOS 14 zeigt `.webp`-Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt auf Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zur Umwandlung vorheriger Bildformate in AVIF.
- **JPEG2000** — sollte der Nachfolger von JPEG werden, wird jedoch nur in Safari unterstützt. Unterstützt auch keine progressive Anzeige.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und unter Berücksichtigung der Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG das WebP-Format. Deshalb könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements geschehen, das mit einem [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) ausgestattet ist.

Wenn dies alles ein wenig kompliziert klingt oder wie zu viel Arbeit für Ihr Team wirkt, dann gibt es auch Online-Dienste, die Sie als Bild-CDNs nutzen können, um das richtige Bildformat je nach Art des anfordernden Geräts oder Browsers automatisch bereitstellen. Die größten sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps) und [Image Engine](https://imageengine.io/).

Wenn Sie schließlich animierte Bilder auf Ihrer Seite einfügen möchten, wissen Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>`- und `<picture>`-Elementen erlaubt. Diese ermöglichen es Ihnen auch, ein **Animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Bei der Bereitstellung von Bildern liefert der Ansatz "eine Größe für alle" nicht die besten Ergebnisse, das heißt, für kleinere Bildschirme sollten Sie Bilder mit geringerer Auflösung und umgekehrt für größere Bildschirme liefern. Darüber hinaus sollten Sie auch höher aufgelöste Bilder für diejenigen Geräte bereitstellen, die einen hochauflösenden Bildschirm bieten (z.B. "Retina"). Also müssen Sie nicht nur viele Zwischenbildvarianten erstellen, sondern auch eine Möglichkeit finden, die richtige Datei an den richtigen Browser zu liefern. Dafür sollten Sie Ihre `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Element/source#media) und/oder [sizes](/de/docs/Web/HTML/Element/source#sizes)-Attributen erweitern. Ein detaillierter Artikel, wie Sie all diese Attribute kombinieren können, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte im Hinblick auf hochauflösende Bildschirme sind:

- Mit einem hochauflösenden Bildschirm erkennen Menschen Kompressionsartefakte viel später, was bedeutet, dass Sie für Bilder, die für diese Bildschirme bestimmt sind, die Kompression über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder mit einer höheren Auflösung als 2× anbieten müssen.

#### Die Priorität (und Reihenfolge) des Herunterladens von Bildern steuern

Die wichtigsten Bilder früher vor den weniger wichtigen in den Vordergrund zu stellen, kann die wahrgenommene Leistung verbessern.

Das Erste, was Sie überprüfen sollten, ist, dass Ihre Inhaltsbilder `<img>`- oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>`-Elementen referenziert werden, erhalten eine höhere Ladepriorität als Hintergrundbilder.

Zweitens, mit der Einführung von Priority Hints, können Sie die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsfall für Prioritätshinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität als die nachfolgenden Bilder hat.

### Rendering-Strategie: Vermeiden von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und nach dem ersten Rendern weiter geladen werden, können sie, wenn ihre Dimensionen vor dem Laden nicht definiert sind, zu Reflows des Seiteninhalts führen. Wenn beispielsweise Text durch beim Laden von Bildern nach unten auf der Seite gedrückt wird. Aus diesem Grund ist es wichtig, `width`- und `height`-Attribute zu setzen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width`- und `height`-Attribute eines Bildes in einem HTML {{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser vor dem Laden berechnet werden. Dieses [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, wodurch ein Layoutwechsel reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und der Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, während HTML geparsed wird, oft bevor alle Ressourcen, einschließlich Bildern, heruntergeladen werden. Das Einschließen von Dimensionen ermöglicht es den Browsern, einen korrekt dimensionierten Platzhalter für jedes Bild zu reservieren, das beim ersten Rendern der Seite erscheinen soll.

Ohne die `width`- und `height`-Attribute wird kein Platzhalterplatz erstellt, was zu einem bemerkenswerten [Ruckeln](/de/docs/Glossary/jank) oder Layoutwechsel auf der Seite führt, wenn das Bild nach dem Rendern der Seite geladen wird. Seitenreflow und Neuzeichnungen sind Performance- und Usability-Probleme.

Die [CLS](/de/docs/Glossary/CLS)-Metrik misst Ruckeln beim Seitenladen oder wie stark sich sichtbare Inhalte im Viewport verschieben und um wie viel. Die Hauptverursacher von schlechtem CLS sind ersetzte Elemente ohne deklarierte Dimensionen, die sich verschieben, wenn das Asset geladen wird, einschließlich Bildern, Werbeanzeigen, Einbettungen und iframes ohne Größe oder {{cssxref("aspect-ratio")}} und Web-Schriftarten.

In responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird im Allgemeinen das folgende CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern herausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Obwohl es für responsive Layouts nützlich ist, verursacht es Ruckeln und schlechtes CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, denn wenn keine Höheninformation vorhanden ist, wenn das `<img>`-Element geparst wird, jedoch vor dem Laden des Bildes, setzt dieses CSS effektive die Höhe auf 0. Wenn das Bild nach dem ersten Rendern der Seite auf dem Bildschirm geladen wird, führt dies zu einem Seitenreflow und einer Neuzeichnung und schafft einen Layoutwechsel, da es Platz für die neu ermittelte Höhe schafft.

Browser haben einen Mechanismus zum Größen von Bildern, bevor das tatsächliche Bild geladen wird. Wenn auf einem `<img>`, `<video>` oder `<input type="button">` Element `width` und `height`-Attribute gesetzt sind, wird das Seitenverhältnis vor der Ladezeit berechnet und steht dem Browser mit den bereitgestellten Dimensionen zur Verfügung.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher wird die korrekte Größe auf das `<img>`-Element angewendet, was bedeutet, dass das zuvor erwähnte Ruckeln nicht auftritt oder minimal ist, wenn die aufgelisteten Dimensionen nicht vollständig genau sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur während des Bildladens verwendet, um Raum zu reservieren. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft verwendet und nicht mehr das aus den Attributen genommene Seitenverhältnis. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, selbst wenn die Attributdimensionen nicht genau sind.

Während Best Practices für Entwickler im letzten Jahrzehnt möglicherweise empfohlen haben, die `width`- und `height`-Attribute eines Bildes auf einem HTML {{htmlelement("img")}}-Element auszulassen, wird aufgrund der Zuordnung des Seitenverhältnisses das Einbeziehen dieser beiden Attribute als Best Practice für Entwickler angesehen.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color`-Wert setzen, damit überlagerte Inhalte vor dem Herunterladen des Bildes noch lesbar sind.

## Fazit

In diesem Abschnitt haben wir uns die Bildoptimierung angesehen. Sie haben nun ein grundlegendes Verständnis dafür, wie Sie die Hälfte der durchschnittlichen Bandbreitenmenge einer durchschnittlichen Website optimieren können. Dies ist nur eine der Arten von Medien, die die Bandbreite der Benutzer verbrauchen und die Seitenladezeiten verlangsamen. Lassen Sie uns nun die Videooptimierung betrachten, um die nächsten 20 % des Bandbreitenverbrauchs anzugehen.

{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}
