---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: d64e1ee3cdbe602324fce3f7320d026f58186715
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, insbesondere Bilder und Videos, machen über 70 % der herunterladen Bytes für die durchschnittliche Website aus. In Bezug auf die Download-Performance ist die Beseitigung von Medien und die Reduzierung der Dateigröße die naheliegende Lösung. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos zur Verbesserung der Web-Performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse der
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Wissen über die verschiedenen Bildformate, deren Auswirkungen auf die Leistung und wie man die Auswirkungen von Bildern auf die gesamte Ladezeit der Seite reduziert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine grundlegende Einführung in die Optimierung der Multimedia-Bereitstellung im Web, die allgemeine Prinzipien und Techniken abdeckt. Für einen ausführlicheren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [51 % ihrer Bandbreite von Bildern, gefolgt von Videos mit 25 %](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Daher ist es wichtig, Ihre Multimedia-Inhalte zu adressieren und zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen nutzen begrenzte Datentarife oder sogar Prepaid-Tarife, bei denen sie buchstäblich pro Megabyte bezahlen. Dies ist kein Problem in aufstrebenden Märkten. Seit 2018 nutzen 24 % des Vereinigten Königreichs laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) noch Prepaid.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig zu bedenken, dass heruntergeladene Bilder im Speicher gespeichert werden müssen.

## Optimierung der Bildbereitstellung

Trotz des größten Bandbreitenverbrauchers ist der Einfluss des Herunterladens von Bildern auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer als viele erwarten (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und die Benutzer die Bilder sehen können, während sie ankommen). Dennoch ist es für eine gute Benutzererfahrung wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Guides/Lazy_loading) von Bildern unterhalb des sichtbaren Bereichs, anstatt sie alle beim ersten Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher scrollt, um sie zu sehen oder nicht. Browser bieten dies nativ über das Attribut [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/img#loading) im `<img>`-Element an, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies tun können.

Abgesehen vom Laden eines Teilsets von Bildern sollten Sie sich das Format der Bilder selbst ansehen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise vom Charakter des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types).

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Format ist besser geeignet für Bilder, die wenige Farben haben und nicht fotorealistisch sind. Dies erfordert, dass die Quelle als Vektorgrafikformat verfügbar ist. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das bevorzugte Format. Beispiele für diese Art von Motiven sind Logos, Illustrationen, Diagramme oder Symbole (Anmerkung: SVGs sind weit besser als Schriftarten-Icons!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bieten vollständige Farbgenauigkeit und glatte Transparenz auf Kosten der Größe. Sie möchten wahrscheinlich diese Kombination zugunsten von WebP vermeiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bieten nicht mehr als 255 Farben, erhalten jedoch glatte Transparenzen. Die Größe ist nicht zu groß. Das sind wahrscheinlich die PNGs, die Sie bevorzugen würden.
- 8-Bit-Farbe + 1-Bit-Transparenz — bieten nicht mehr als 255 Farben und nur vollständige oder keine Transparenz pro Pixel, was die Transparenzgrenzen hart und gezackt erscheinen lässt. Die Größe ist klein, aber der Preis ist die visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel größere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen möchten, würden Sie gut komprimierte **progressive JPEGs** wählen. Progressive JPEGs, im Gegensatz zu normalen JPEGs, rendern progressiv (daher der Name), was bedeutet, dass der Benutzer eine niedrigauflösende Version sieht, die klarer wird, während das Bild heruntergeladen wird, anstatt dass das Bild in voller Auflösung von oben nach unten lädt oder sogar erst angezeigt wird, wenn es vollständig heruntergeladen ist. Ein guter Kompressor hierfür wäre MozJPEG, z. B. verfügbar im Online-Tool zur Bildoptimierung [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75 % sollte akzeptable Ergebnisse liefern.

Andere Formate verbessern die Komprimierungsfähigkeiten von JPEG, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz, etc. (aber keine progressive Anzeige). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder früher.

  > [!NOTE]
  > Trotz der Ankündigung von Apple zur [Unterstützung für WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) zeigen Safari-Versionen, die früher als 16.0 sind, `.webp`-Bilder nicht erfolgreich auf macOS-Desktop-Versionen, die früher als 11/Big Sur sind. Safari für iOS 14 _zeigt_ `.webp`-Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund des hohen Leistungsvermögens und des lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt in Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren vorheriger Bildformate in AVIF.
- **JPEG2000** — sollte einst der Nachfolger von JPEG werden, wird aber nur in Safari unterstützt. Unterstützt auch keine progressive Anzeige.

Angesichts der eingeschränkten Unterstützung für JPEG-XR und JPEG2000 und unter Berücksichtigung der Dekodierungskosten, ist der einzige ernsthafte Konkurrent für JPEG WebP. Deshalb könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements, das mit einem [type-Attribut](/de/docs/Web/HTML/Reference/Elements/picture#the_type_attribute) ausgestattet ist, geschehen.

Wenn all dies etwas kompliziert klingt oder wie zu viel Arbeit für Ihr Team erscheint, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können, die das korrekte Bildformat gemäß dem anfordernden Gerät oder Browser automatisch bereitstellen. Beliebte Optionen sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Schließlich, wenn Sie animierte Bilder auf Ihrer Seite einfügen möchten, wissen Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>`-Elementen ermöglicht. Diese erlauben Ihnen auch, ein **Animated WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Bei der Bildbereitstellung führt der Ansatz "eine Größe passt für alle" nicht zu den besten Ergebnissen, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung und umgekehrt für größere Bildschirme bereitstellen möchten. Darüber hinaus möchten Sie auch höher auflösende Bilder an solche Geräte liefern, die einen hochauflösenden Bildschirm (z. B. "Retina") besitzen. Abgesehen davon, dass Sie viele Zwischenbildvarianten erstellen müssen, benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. In diesem Fall sollten Sie Ihre `<picture>`- und `<source>`-Elemente mit [`media`](/de/docs/Web/HTML/Reference/Elements/source#media)- und/oder [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes)-Attributen aktualisieren. [Responsive images done right: A guide to `<picture>` and `srcset`](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) erklärt im Detail, wie man all diese Attribute kombiniert.

Zwei interessante Effekte in Bezug auf hochauflösende Bildschirme, die Sie berücksichtigen sollten, sind:

- Bei einem hochauflösenden Bildschirm erkennen Menschen Komprimierungsartefakte viel später, was bedeutet, dass Sie die Komprimierung über das Übliche hinaus erhöhen können, wenn die Bilder für diese Bildschirme bestimmt sind.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie Bilder nicht höher als 2× auflösen müssen.

#### Steuern der Priorität (und Reihenfolge) des Herunterladens von Bildern

Wichtige Bilder früher als weniger wichtige Bilder zu laden, kann die wahrgenommene Leistung verbessern.

Das Erste, das Sie überprüfen müssen, ist, ob Ihre Inhaltsbilder `<img>` oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>`-Elementen referenziert werden, haben eine höhere Ladepriorität als Hintergrundbilder.

Zweitens können Sie mit der Einführung von Prioritäts-Hinweisen die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Ein Beispiel für die Verwendung von Prioritäts-Hinweisen für Bilder ist ein Karussell, bei dem das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Rendering-Strategie: Ruckel beim Laden von Bildern verhindern

Da Bilder asynchron geladen werden und nach dem ersten Rendern weiterhin geladen werden, können sie, wenn ihre Abmessungen vor dem Laden nicht definiert sind, das Layout der Seite verändern. Beispielsweise, wenn Text durch das Laden von Bildern nach unten gedrückt wird. Aus diesem Grund ist es wichtig, `width`- und `height`-Attribute zu setzen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width`- und `height`-Attribute eines Bildes im HTML-{{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, wodurch ein Layoutwechsel beim Herunterladen und Malen des Bildes auf dem Bildschirm reduziert oder sogar verhindert wird. Die Reduzierung des Layoutwechsels ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, während HTML analysiert wird, häufig bevor alle Assets, einschließlich Bilder, heruntergeladen sind. Das Einbinden von Abmessungen ermöglicht es Browsern, eine korrekt dimensionierte Platzhalterbox für jedes Bild zu reservieren, die beim Laden der Bilder beim ersten Rendern der Seite angezeigt wird.

![Zwei Screenshots, der erste ohne Bild, aber mit reserviertem Platz, der zweite zeigt das geladene Bild im reservierten Bereich.](ar-guide.jpg)

Ohne die `width`- und `height`-Attribute wird kein Platzhalterraum erstellt, was einen erkennbaren {{Glossary("jank", "Ruckeln")}} oder Layoutwechsel auf der Seite verursacht, wenn das Bild nach dem Rendering der Seite geladen wird. Seitenneugeladen und Neumalen sind Performance- und Usability-Probleme.

Die {{Glossary("CLS", "CLS")}}-Metrik misst das Ruckeln beim Laden der Seite, oder wie viel sichtbarer Inhalt im Ansichtsfenster verschoben wird und um wie viel. Die Hauptverursacher von schlechtem CLS sind ersetzte Elemente ohne deklarierte Abmessungen, die sich neu laden, wenn das Asset geladen wird, einschließlich Bilder, Anzeigen, Einbettungen und iFrames ohne Größe oder {{cssxref("aspect-ratio")}} und Web-Schriftarten.

In responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird der folgende CSS im Allgemeinen verwendet, um zu verhindern, dass Bilder ihre Container verlassen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Während nützlich für responsive Layouts, verursacht dies Ruckeln und schlechten CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, da, wenn keine Höheninformationen vorhanden sind, wenn das `<img>`-Element analysiert wird, aber bevor das Bild geladen wird, dieser CSS effektiv die Höhe auf 0 setzt. Wenn das Bild nach dem ersten Rendern der Seite auf dem Bildschirm geladen wird, laden und malen sich die Seite neu und erzeugen einen Layoutwechsel, während es Platz für die neu bestimmte Höhe schafft.

Browser haben einen Mechanismus zum Größenermitteln von Bildern, bevor das eigentliche Bild geladen wird. Wenn ein `<img>`, `<video>` oder `<input type="button">`-Element `width`- und `height`-Attribute gesetzt hat, wird das Seitenverhältnis vor der Ladezeit aus den angegebenen Abmessungen berechnet und ist dem Browser verfügbar.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher wird die korrekte Größe auf das `<img>`-Element angewendet, was bedeutet, dass das oben genannte Ruckeln nicht auftritt oder minimal ist, wenn die angegebenen Abmessungen nicht vollständig korrekt sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur beim Bildladen verwendet, um den Platz zu reservieren. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft anstelle des Seitenverhältnisses aus den Attributen verwendet. Dies stellt sicher, dass es im richtigen Seitenverhältnis angezeigt wird, auch wenn die Attributmaße nicht genau sind.

Während Best Practices von Entwicklern im letzten Jahrzehnt empfohlen haben könnten, die `width`- und `height`-Attribute eines Bildes in einem HTML-{{htmlelement("img")}} zu weglassen, wird empfohlen, diese beiden Attribute aufgrund der Zuordnung des Seitenverhältnisses einzuschließen, da dies als Best Practice angesehen wird.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color`-Wert setzen, damit jeder überlagerte Inhalt lesbar bleibt, bevor das Bild heruntergeladen wurde.

## Schlussfolgerung

In diesem Abschnitt haben wir uns mit der Bildoptimierung befasst. Sie haben nun ein allgemeines Verständnis davon, wie man die Hälfte des durchschnittlichen Bandbreitenverbrauchs einer durchschnittlichen Website optimiert. Dies ist nur eine der Arten von Medien, die die Bandbreite der Benutzer verbrauchen und die Seitenladezeit verlangsamen. Lassen Sie uns die Video-Optimierung betrachten und die nächsten 20 % des Bandbreitenverbrauchs angehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
