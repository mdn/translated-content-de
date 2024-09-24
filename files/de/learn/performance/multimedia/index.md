---
title: "Multimedia: Bilder"
slug: Learn/Performance/Multimedia
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. In Bezug auf die Download-Performance ist das Eliminieren von Medien und das Reduzieren der Dateigröße die niedrig hängende Frucht. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn/Getting_started_with_the_web"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Erlernen der verschiedenen Bildformate, ihrer Auswirkungen auf die Leistung und wie man die Auswirkungen von Bildern auf die Gesamt-Ladezeit einer Seite verringert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine hochrangige Einführung in die Optimierung der Multimedia-Auslieferung im Web, die allgemeine Prinzipien und Techniken abdeckt. Für einen detaillierteren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [51% ihrer Bandbreite von Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, Ihre Multimedia-Inhalte zu adressieren und zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen haben begrenzte Datentarife oder zahlen tatsächlich pro Megabyte. Dies ist auch kein Problem der Schwellenmärkte. Im Jahr 2018 nutzten laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) 24% des Vereinigten Königreichs weiterhin Prepaid-Angebote.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig zu beachten, dass, wenn Bilder heruntergeladen werden, sie im Speicher gespeichert werden müssen.

## Optimierung der Bildauslieferung

Trotz des größten Verbrauchs von Bandbreite ist der Einfluss des Bilddownloads auf die [wahrgenommene Leistung](/de/docs/Learn/Performance/Perceived_performance) weit geringer als viele erwarten (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und die Benutzer die Bilder sehen können, während sie ankommen). Dennoch ist es für eine gute Benutzererfahrung wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites besteht darin, Bilder unterhalb des Seitenumbruchs [lazy-loading](/de/docs/Web/Performance/Lazy_loading) zu laden, anstatt sie alle beim ersten Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher scrollt, um sie zu sehen oder nicht. Viele JavaScript-Bibliotheken können dies für Sie implementieren, z. B. [lazysizes](https://github.com/aFarkas/lazysizes). Browseranbieter arbeiten an einem nativen `lazyload`-Attribut, das sich derzeit in der experimentellen Phase befindet.

Über das Laden einer Teilmenge von Bildern hinaus sollten Sie das Format der Bilder selbst betrachten:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt in der Regel vom Charakter des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und Formaten](/de/docs/Web/Media/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Format ist geeigneter für Bilder, die wenige Farben haben und nicht fotorealistisch sind. Dies erfordert, dass die Quelle in einem Vektorgrafikformat vorliegt. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) das Fallback-Format der Wahl. Beispiele für diese Arten von Motiven sind Logos, Illustrationen, Diagramme oder Symbole (Hinweis: SVGs sind viel besser als Icon-Schriften!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bieten volle Farbgenauigkeit und sanfte Transparenz auf Kosten der Größe. Sie möchten wahrscheinlich diese Kombination zugunsten von WebP vermeiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bieten nicht mehr als 255 Farben, aber behalten glatte Transparenzen bei. Die Größe ist nicht zu groß. Das sind die PNGs, die Sie wahrscheinlich möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz — bieten nicht mehr als 255 Farben und bieten nur keine oder volle Transparenz pro Pixel, was die Transparenzränder hart und gezackt erscheinen lässt. Die Größe ist klein, aber der Preis ist die visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel breitere Palette von Formaten zur Auswahl. Wenn Sie auf Nummer sicher gehen wollen, dann sollten Sie gut komprimierte **Progressive JPEGs** wählen. Progressive JPEGs rendern im Gegensatz zu normalen JPEGs progressiv (daher der Name), was bedeutet, dass der Benutzer eine Niedrigauflösungsversion sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt dass das Bild in voller Auflösung von oben nach unten geladen wird oder erst angezeigt wird, wenn es vollständig heruntergeladen ist. Ein guter Kompressor für diese wäre MozJPEG, z. B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätsstufe von 75% sollte anständige Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG hinsichtlich Komprimierung, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) — Hervorragende Wahl für Bilder und animierte Bilder. WebP bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (aber keine progressive Anzeige.). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder früher.

  > [!NOTE]
  > Trotz Apples [Ankündigung der Unterstützung für WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) zeigen Safari-Versionen vor 16.0 `.webp`-Bilder auf macOS-Desktopversionen, die älter als 11/Big Sur sind, nicht erfolgreich an. Safari für iOS 14 _zeigt_ `.webp`-Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund des leistungsstarken und lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so breit unterstützt). Es wird jetzt auf Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren vorheriger Bildformate zu AVIF.
- **JPEG2000** — wollte einst der Nachfolger von JPEG sein, wird jedoch nur in Safari unterstützt. Unterstützt ebenfalls keine progressive Anzeige.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 sowie unter Berücksichtigung der Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Aus diesem Grund könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements erfolgen, das mit einem [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) ausgestattet ist.

Wenn das alles kompliziert klingt oder zu viel Arbeit für Ihr Team ist, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können, die das Servieren des richtigen Bildformats automatisch nach dem Gerätetyp oder dem anfordernden Browser bereitstellen. Die größten sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps) und [Image Engine](https://imageengine.io/).

Schließlich, wenn Sie animierte Bilder in Ihre Seite einbinden möchten, können Sie wissen, dass Safari die Verwendung von Videodateien in `<img>`- und `<picture>`-Elementen erlaubt. Diese ermöglichen es Ihnen auch, ein **animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Beim Bildversand bringt der „One Size Fits All“-Ansatz nicht die besten Ergebnisse. Das bedeutet, dass Sie für kleinere Bildschirme Bilder mit geringerer Auflösung bereitstellen und umgekehrt für größere Bildschirme. Darüber hinaus sollten Sie hochauflösende Bilder an Geräte liefern, die ein hochauflösendes Display aufweisen (z. B. „Retina“). Neben der Erstellung vieler Zwischenbildvarianten benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. Dazu müssen Sie Ihre `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Element/source#media)- und/oder [sizes](/de/docs/Web/HTML/Element/source#sizes)-Attributen aktualisieren. Ein ausführlicher Artikel, wie man all diese Attribute kombiniert, ist [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) zu finden.

Zwei interessante Effekte, die Sie bezüglich hochauflösender Displays beachten sollten, sind:

- Bei einem hochauflösenden Bildschirm werden Komprimierungsartefakte von Menschen viel später erkannt, was bedeutet, dass Sie für Bilder, die für diese Bildschirme bestimmt sind, die Komprimierung stärker als sonst erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder mit höherer Auflösung als 2× ausliefern müssen.

#### Die Priorität (und Reihenfolge) des Bilddownloads steuern

Die wichtigsten Bilder vor den weniger wichtigen Besuchern bereitstellen, kann die wahrgenommene Leistung verbessern.

Das Erste, was Sie überprüfen sollten, ist, dass Ihre Inhaltbilder `<img>`- oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die auf `<img>`-Elemente verweisen, erhalten eine höhere Ladepriorität als Hintergrundbilder.

Zweitens, mit der Einführung von Priority Hints können Sie die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsfall für Prioritätshinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden.

### Render-Strategie: Verhinderung von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und auch nach dem ersten Anstrich weiterhin geladen werden, können sie, wenn ihre Abmessungen nicht vor dem Laden definiert sind, Reflows im Seiteninhalt verursachen. Zum Beispiel, wenn Text durch ladende Bilder auf der Seite nach unten gedrückt wird. Aus diesem Grund ist es wichtig, `width`- und `height`-Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width`- und `height`-Attribute eines Bildes in einem HTML-{{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser vor dem Laden berechnet werden. Dieses {{glossary("Seitenverhältnis")}} wird verwendet, um den Platz zu reservieren, der zur Anzeige des Bildes benötigt wird, wodurch ein Layoutwechsel reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf den Bildschirm gebracht wird. Das Reduzieren von Layoutwechseln ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webleistung.

Browser beginnen mit dem Rendern von Inhalten, sobald HTML analysiert wird, oft bevor alle Assets, einschließlich Bilder, heruntergeladen werden. Durch das Einschließen von Abmessungen ermöglichen Sie es Browsern, eine korrekt dimensionierte Platzhalterbox für jedes Bild zu reservieren, das beim Laden der Bilder erscheint, wenn die Seite erstmals gerendert wird.

![Zwei Screenshots, der erste ohne Bild, aber mit reserviertem Platz, der zweite zeigt das Bild, geladen im reservierten Platz.](ar-guide.jpg)

Ohne die `width`- und `height`-Attribute wird kein Platzhalterraum erstellt, was zu einer spürbaren {{glossary('Ruckeln')}}, oder einem Layoutwechsel auf der Seite führt, wenn das Bild lädt, nachdem die Seite gerendert wurde. Seitenerneuerungen und Neulackierungen sind Leistungs- und Benutzbarkeitsprobleme.

Die {{glossary("CLS")}}-Metrik misst das Ruckeln beim Seitenladen oder wie stark sichtbare Inhalte im Ansichtsfenster verschoben werden und um wieviel. Die Hauptursachen für schlechte CLS sind ersetzte Elemente ohne deklarierte Abmessungen, die sich neu anordnen, wenn das Asset geladen wird, einschließlich Bilder, Anzeigen, Einbettungen und Iframes ohne Größe oder {{cssxref("aspect-ratio")}} und Web-Schriftarten.

In responsiven Designs wird, wenn ein Container schmaler als ein Bild ist, das folgende CSS im Allgemeinen verwendet, um zu verhindern, dass Bilder aus ihren Containern ausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Obwohl nützlich für responsive Layouts, verursacht dies Ruckeln und schlechte CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, da, wenn keine Höheninformationen vorhanden sind, wenn das `<img>`-Element analysiert wird, bevor das Bild geladen ist, dieses CSS effektiv die Höhe auf 0 gesetzt hat. Wenn das Bild nach dem ersten Rendern der Seite auf den Bildschirm geladen wird, reflowt und neulackiert sich die Seite, und erzeugt einen Layoutwechsel, da sie Platz für die neu bestimmte Höhe schafft.

Browser haben einen Mechanismus, um Bilder vor dem eigentlichen Laden zu dimensionieren. Wenn ein `<img>`, `<video>` oder `<input type="button">`-Element `width`- und `height`-Attribute aufweist, wird sein Seitenverhältnis vor der Ladezeit berechnet und steht dem Browser zur Verfügung, wobei die angegebenen Abmessungen verwendet werden.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher wird die richtige Größe auf das `<img>`-Element angewendet, was bedeutet, dass das oben erwähnte Ruckeln nicht oder nur minimal auftritt, wenn die angegebenen Abmessungen beim Laden des Bildes nicht vollständig genau sind.

Das Seitenverhältnis wird nur beim Bildladen verwendet, um Platz zu reservieren. Sobald das Bild geladen ist, wird das inhärente Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft anstelle des Seitenverhältnisses aus den Attributen verwendet. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, selbst wenn die Attributabmessungen nicht korrekt sind.

Während Entwickler-Best-Practices der letzten Dekade möglicherweise empfohlen haben, die `width`- und `height`-Attribute eines Bildes in einem HTML-{{htmlelement("img")}} zu weglassen, wird wegen der Zuordnung des Seitenverhältnisses das Einfügen dieser beiden Attribute als Entwickler-Best-Practice angesehen.

Für jegliche Hintergrundbilder ist es wichtig, dass Sie einen `background-color`-Wert festlegen, damit überlagerte Inhalte lesbar bleiben, bevor das Bild heruntergeladen wurde.

## Fazit

In diesem Abschnitt haben wir uns die Bildoptimierung angesehen. Sie haben jetzt ein allgemeines Verständnis dafür, wie Sie die Hälfte der durchschnittlichen Bandbreiten-Nutzung einer durchschnittlichen Website optimieren können. Dies ist nur einer der Medientypen, die die Bandbreite von Nutzern auslasten und die Seitengeschwindigkeit verlangsamen. Lassen Sie uns als nächstes die Video-Optimierung betrachten, um die nächsten 20% des Bandbreitenverbrauchs anzugehen.

{{PreviousMenuNext("Learn/Performance/measuring_performance", "Learn/Performance/video", "Learn/Performance")}}
