---
title: "Multimedia: Bilder"
slug: Learn/Performance/Multimedia
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70% der heruntergeladenen Bytes einer durchschnittlichen Website aus. In Bezug auf die Download-Performance sind das Entfernen von Medien und die Reduzierung der Dateigröße die leichtesten Optimierungen. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und grundlegende Kenntnisse der
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie die verschiedenen Bildformate, deren Einfluss auf die Leistung und wie Sie die Auswirkungen von Bildern auf die gesamte Ladezeit der Seite reduzieren können.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine allgemeine Einführung in die Optimierung der Multimedia-Bereitstellung im Web und behandelt grundlegende Prinzipien und Techniken. Für einen detaillierteren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [51% ihrer Bandbreite von Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher kann man sagen, dass es wichtig ist, seine Multimedia-Inhalte anzusprechen und zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen haben begrenzte Datenpläne oder sogar Prepaid-Pläne, bei denen sie buchstäblich pro Megabyte zahlen. Dies ist auch kein Problem nur in aufstrebenden Märkten. Laut dem [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) nutzten 2018 noch 24% des Vereinigten Königreichs Pay-as-you-go-Tarife.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig zu bedenken, dass heruntergeladene Bilder im Speicher gespeichert werden müssen.

## Optimierung der Bildbereitstellung

Trotz des größten Bandbreitenverbrauchs ist die Auswirkung des Herunterladens von Bildern auf die [wahrgenommene Leistung](/de/docs/Learn/Performance/Perceived_performance) weit geringer als viele erwarten (hauptsächlich, weil der Seitentext sofort heruntergeladen wird und Benutzer die Bilder beim Eintreffen gerendert sehen können). Für eine gute Benutzererfahrung ist es jedoch immer noch wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites besteht darin, Bilder unterhalb der sichtbaren Bildschirmfläche [lazy-loading](/de/docs/Web/Performance/Lazy_loading) zu laden, anstatt sie alle beim ersten Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher sie durch Scrollen sieht oder nicht. Viele JavaScript-Bibliotheken können dies für Sie umsetzen, wie z. B. [lazysizes](https://github.com/aFarkas/lazysizes), und Browser-Hersteller arbeiten an einem nativen `lazyload`-Attribut, das sich derzeit in der experimentellen Phase befindet.

Über das Laden eines Bildausschnitts hinaus sollten Sie das Format der Bilder selbst betrachten:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt in der Regel vom Charakter des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Format eignet sich besser für Bilder mit wenigen Farben, die nicht fotorealistisch sind. Dies erfordert, dass die Quelle in einem Vektorgrafikformat verfügbar ist. Sollte ein solches Bild nur als Bitmap existieren, dann wäre [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) das fallback-Format für die Wahl. Beispiele für diese Arten von Motiven sind Logos, Illustrationen, Diagramme oder Symbole (beachten Sie: SVGs sind weitaus besser als Icon-Schriftarten!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-bit Farbe + 8-bit Transparenz — bieten eine vollständige Farbgenauigkeit und glatte Transparenz auf Kosten der Größe. Sie sollten wahrscheinlich diese Kombination meiden zugunsten von WebP (siehe unten).
- 8-bit Farbe + 8-bit Transparenz — bieten nicht mehr als 255 Farben, aber erhalten glatte Transparenzen. Die Größe ist nicht zu groß. Das sind wahrscheinlich die PNGs, die Sie möchten.
- 8-bit Farbe + 1-bit Transparenz — bieten nicht mehr als 255 Farben und einfach nur keine oder vollständige Transparenz pro Pixel, was die Transparenzerhebungskante hart und gezackt erscheinen lässt. Die Größe ist klein, aber der Preis ist die visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, steht eine viel breitere Palette von Formaten zur Auswahl. Wenn Sie auf Nummer sicher gehen wollen, würden Sie gut komprimierte **Progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, rendern progressiv (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, statt das Bild in voller Auflösung von oben nach unten zu laden oder nur dann zu rendern, wenn es vollständig heruntergeladen ist. Ein guter Komprimierer für diese ist MozJPEG, zum Beispiel verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75% sollte anständige Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG in Bezug auf die Komprimierung, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder. WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (aber keine progressive Anzeige). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder älter.

  > [!NOTE]
  > Trotz Apples [Ankündigung der Unterstützung für WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) zeigen Safari-Versionen früher als 16.0 `.webp`-Bilder auf macOS-Desktop-Versionen früher als 11/Big Sur nicht erfolgreich an. Safari für iOS 14 _zeigt_ `.webp`-Bilder jedoch erfolgreich an.

- [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund des leistungsstarken und gebührenfreien Bildformats (noch effektiver als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt von Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren vorheriger Bildformate in AVIF.
- **JPEG2000** — sollte einst der Nachfolger von JPEG sein, wird aber nur in Safari unterstützt. Unterstützt auch keine progressive Anzeige.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und auch unter Berücksichtigung der Dekodierungskosten, ist der einzige ernsthafte Konkurrent für JPEG WebP. Deshalb könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements, das mit einem [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) ausgestattet ist, erfolgen.

Wenn all dies ein wenig kompliziert klingt oder wie zu viel Arbeit für Ihr Team, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können, die das Servieren des richtigen Bildformats automatisch an den Typ des Geräts oder Browsers anpassen, der das Bild anfordert. Die größten davon sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps) und [Image Engine](https://imageengine.io/).

Sollten Sie schließlich animierte Bilder auf Ihrer Seite einfügen wollen, dann wissen Sie, dass Safari es ermöglicht, Videodateien innerhalb von `<img>`- und `<picture>`-Elementen zu verwenden. Diese erlauben Ihnen auch, ein **animiertes WebP** für alle anderen modernen Browser einzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Bei der Bildbereitstellung wird der Ansatz "Eine Größe passt für alle" nicht die besten Ergebnisse liefern, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung servieren möchten und umgekehrt für größere Bildschirme. Außerdem möchten Sie hochauflösende Bilder auf Geräte mit einem hohen DPI-Bildschirm (z.B. "Retina") liefern. Um die richtige Datei an den richtigen Browser zu geliefert bekommen, müssen Sie Ihre `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Element/source#media) und/oder [sizes](/de/docs/Web/HTML/Element/source#sizes)-Attributen aufrüsten. Ein detaillierter Artikel darüber, wie Sie all diese Attribute kombinieren können, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte in Bezug auf hochauflösende Bildschirme, die Sie im Kopf behalten sollten:

- Bei einem Bildschirm mit hoher DPI werden Menschen Kompressionsartefakte viel später erkennen, was bedeutet, dass Sie für Bilder, die für diese Bildschirme bestimmt sind, die Kompression über das Übliche hinaus erhöhen können.
- [Sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder höher als 2× auflösen müssen.

#### Kontrolle der Priorität (und Reihenfolge) beim Herunterladen von Bildern

Die Darstellung der wichtigsten Bilder vor den weniger wichtigen kann die wahrgenommene Leistung verbessern.

Das Erste, was zu überprüfen ist, ob Ihre Inhaltsbilder `<img>`- oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>`-Elementen referenziert sind, werden mit einer höheren Ladepriorität als Hintergrundbilder versehen.

Zweitens, mit der Einführung der Priority Hints können Sie die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bildtags hinzufügen. Ein Anwendungsfall für Prioritätshinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die folgenden Bilder.

### Rendering-Strategie: Verhindern von Jank beim Laden von Bildern

Da Bilder asynchron geladen werden und weiter geladen werden, nachdem der erste Anstrich erfolgt ist, können sie, wenn ihre Dimensionen nicht vor dem Laden definiert sind, Umverteilungen des Seiteninhalts verursachen. Zum Beispiel, wenn Text durch heruntergeladene Bilder nach unten auf der Seite geschoben wird. Aus diesem Grund ist es wichtig, `width`- und `height`-Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn `width`- und `height`-Attribute eines Bildes in einem HTML {{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser vor dem Laden des Bildes berechnet werden. Dieser {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz für die Anzeige des Bildes zu reservieren, wodurch unnötige Umverteilungen beim Herunterladen und Rendern des Bildes auf dem Bildschirm reduziert oder sogar verhindert werden. Die Reduzierung der Umverteilung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, während HTML geparst wird, oft bevor alle Assets, einschließlich Bilder, heruntergeladen wurden. Das Einfügen von Dimensionen ermöglicht es Browsern, ein korrekt dimensioniertes Platzhalterfeld für jedes Bild zu reservieren, das bei der ersten Seitenanzeige geladen wird.

![Zwei Screenshots, der erste ohne Bild, aber mit reserviertem Platz, der zweite zeigt das Bild, das in den reservierten Platz geladen ist.](ar-guide.jpg)

Ohne die `width`- und `height`-Attribute wird kein Platzhalterraum erstellt, was zu einem bemerkbaren {{Glossary("jank", "Jank")}} oder Layoutwechsel auf der Seite führt, wenn das Bild nach dem Rendern der Seite geladen wird. Seiten-Umverteilung und Neuzeichnungen sind Leistungs- und Nutzbarkeitsprobleme.

Die {{Glossary("CLS", "CLS")}}-Metrik misst den Jank beim Laden der Seite oder wie viel sichtbarer Inhalt im Ansichtsfenster verschiebt und um wie viel. Die Hauptschuldigen für schlechten CLS sind ersetzte Elemente ohne deklarierte Dimensionen, die umverteilen, wenn das Asset geladen wird, einschließlich Bilder, Anzeigen, Einbettungen und iframes ohne Größe oder {{cssxref("aspect-ratio")}} und Web-Schriftarten.

In responsiven Designs, wenn ein Container schmäler als ein Bild ist, wird der folgende CSS-Code häufig verwendet, um zu verhindern, dass Bilder aus ihren Containern ausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Obwohl nützlich für responsive Layouts, verursacht dies Jank und schlechten CLS, wenn keine Breiten- und Höheninformationen enthalten sind, da, wenn keine Höheninformationen vorhanden sind, wenn das `<img>`-Element geparst wird, aber bevor das Bild geladen ist, diese CSS effektiv die Höhe auf 0 gesetzt hat. Wenn das Bild geladen wird, nachdem die Seite anfänglichauf den Bildschirm gerendert wurde, erfolgt eine Umverteilung und Neuzeichnung der Seite, wodurch ein Layoutverschiebung erstellt wird, da Platz für die neu bestimmte Höhe erstellt wird.

Browser haben einen Mechanismus zur Größenbestimmung von Bildern vor dem tatsächlichen Laden des Bildes. Wenn ein `<img>`, `<video>` oder `<input type="button">`-Element `width`- und `height`-Attribute auf sich hat, wird das Seitenverhältnis vor der Ladezeit berechnet und ist dem Browser verfügbar, indem die angegebenen Dimensionen verwendet werden.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher wird die richtige Größe auf das `<img>`-Element angewendet, was bedeutet, dass der erwähnte Jank nicht oder minimal auftritt, wenn die angegebenen Dimensionen nicht vollständig genau sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur bei Laden des Bildes verwendet, um Platz zu reservieren. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft anstelle des Seitenverhältnisses aus den Attributen verwendet. Dies stellt sicher, dass es im richtigen Seitenverhältnis angezeigt wird, auch wenn die Attributdimensionen nicht korrekt sind.

Während von Entwicklern empfohlene Best Practices der letzten zehn Jahre das Weglassen der `width`- und `height`-Attribute eines Bildes in einem HTML {{htmlelement("img")}} empfohlen haben, ist das Hinzufügen dieser zwei Attribute durch die Zuordnung des Seitenverhältnisses als Best Practice für Entwickler zu betrachten.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color`-Wert festlegen, damit alle überlagerten Inhalte lesbar bleiben, bevor das Bild heruntergeladen wird.

## Fazit

In diesem Abschnitt haben wir uns die Bildoptimierung angesehen. Sie haben jetzt ein allgemeines Verständnis dafür, wie man die Hälfte der Bandbreite einer durchschnittlichen Website optimiert. Dies ist nur eine der Medienarten, die die Bandbreite der Benutzer verbraucht und das Laden von Seiten verlangsamt. Schauen wir uns die Video-Optimierung an, um die nächsten 20% des Bandbreitenverbrauchs zu bewältigen.

{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}
