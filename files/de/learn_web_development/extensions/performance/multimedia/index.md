---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, insbesondere Bilder und Videos, machen über 70% der heruntergeladenen Bytes einer durchschnittlichen Website aus. In Bezug auf die Download-Performance ist das Entfernen von Medien und das Reduzieren der Dateigröße der am einfachsten umzusetzende Schritt. Dieser Artikel beschreibt die Optimierung von Bildern und Videos zur Verbesserung der Web-Performance.

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
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verschiedene Bildformate und deren Einfluss auf die Performance kennenzulernen und wie der Einfluss von Bildern auf die gesamte Ladezeit der Seite reduziert werden kann.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hoher Ebene zur Optimierung der Multimedia-Auslieferung im Web, die allgemeine Prinzipien und Techniken abdeckt. Für einen detaillierteren Leitfaden siehe <https://web.dev/learn/images>.

## Warum Multimedia optimieren?

Für die durchschnittliche Website stammen [51% der Bandbreite von Bildmaterial, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367). Daher ist es wichtig, sich mit dem Multimedia-Inhalt auseinanderzusetzen und ihn zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen haben limitierte Datenpläne oder sogar Prepaid-Tarife, bei denen sie buchstäblich pro Megabyte zahlen. Dies ist kein Problem nur in aufstrebenden Märkten. Laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) nutzten 2018 noch 24% des Vereinigten Königreichs Prepaid-Tarife.

Zudem müssen Sie den Speicher berücksichtigen, da viele mobile Geräte nur über begrenzten RAM verfügen. Es ist wichtig, daran zu denken, dass heruntergeladene Bilder auch im Speicher abgelegt werden müssen.

## Optimierung der Bildauslieferung

Trotz dessen, dass Bilder der größte Bandbreitenverbraucher sind, ist der Einfluss des Bilddownloads auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer, als viele erwarten (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und Benutzer die Bilder sehen können, während sie geladen werden). Für eine gute Benutzererfahrung ist es jedoch wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites besteht darin, Bilder unterhalb der Falte [lazy zu laden](/de/docs/Web/Performance/Guides/Lazy_loading), anstatt alle Bilder direkt beim ersten Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher sie sieht oder nicht. Dies bieten Browser nativ mit dem Attribut [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/img#loading) auf dem `<img>`-Element an, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies ermöglichen.

Abgesehen vom Laden einer Teilmenge von Bildern sollten Sie das Format der Bilder selbst betrachten:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die korrekten Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt in der Regel vom Charakter des Bildes ab.

> [!NOTE]
> Für allgemeine Informationen zu Bildtypen siehe den [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Format ist besser geeignet für Bilder, die wenige Farben haben und nicht fotorealistisch sind. Dies erfordert, dass die Quelle als Vektorgrafik vorliegt. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das Format der Wahl. Beispiele für solche Motive sind Logos, Illustrationen, Diagramme oder Symbole (Anmerkung: SVGs sind weit besser als Icon-Schriften!). Beide Formate unterstützen Transparenz.

PNGs können in drei verschiedenen Kombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bieten volle Farbgenauigkeit und sanfte Transparenz auf Kosten der Größe. Diese Kombination sollte zugunsten von WebP (siehe unten) vermieden werden.
- 8-Bit-Farbe + 8-Bit-Transparenz — bieten nicht mehr als 255 Farben, erhalten jedoch sanfte Transparenzen. Die Größe ist nicht zu groß. Dies sind die PNGs, die Sie wahrscheinlich verwenden möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz — bieten nicht mehr als 255 Farben und nur keine oder volle Transparenz pro Pixel, was die Transparenzgrenzen hart und gezackt erscheinen lässt. Die Größe ist klein, aber der Preis ist die visuelle Qualität.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel breitere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen wollen, dann sollten Sie gut komprimierte **Progressive JPEGs** verwenden. Progressive JPEGs laden sich progressiv (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt das Bild in voller Auflösung von oben nach unten oder erst vollständig angezeigt zu bekommen, wenn es komplett heruntergeladen ist. Ein guter Kompressor für diese wäre MozJPEG, z.B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75% sollte annehmbare Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG hinsichtlich der Kompression, sind aber nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder. WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (aber keine progressive Anzeige.). Wird von allen großen Browsern unterstützt, außer Safari 14 auf macOS-Desktop Big Sur oder früher.

  > [!NOTE]
  > Trotz Apples [Ankündigung der Unterstützung für WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) zeigen Safari-Versionen früher als 16.0 `.webp`-Bilder auf macOS-Desktop-Versionen früher als 11/Big Sur nicht erfolgreich an. Safari für iOS 14 _zeigt_ `.webp`-Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt von Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren früherer Bildformate in AVIF.
- **JPEG2000** — Einst der Nachfolger von JPEG, aber nur in Safari unterstützt. Unterstützt auch keine progressive Anzeige.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und unter Berücksichtigung der Dekodierungskosten ist der einzige ernsthafte Herausforderer für JPEG das WebP-Format. Daher könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements geschehen, das mit einem [type-Attribut](/de/docs/Web/HTML/Reference/Elements/picture#the_type_attribute) ausgestattet ist.

Sollte all dies etwas kompliziert oder zu arbeitsintensiv für Ihr Team erscheinen, gibt es auch Online-Dienste, die als Bild-CDNs fungieren und die Bereitstellung des richtigen Bildformats für das jeweilige Gerät oder den jeweiligen Browser, der das Bild anfordert, automatisch übernehmen. Beliebte Optionen sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Sollten Sie schließlich animierte Bilder auf Ihrer Seite einbinden wollen, wissen Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>`- und `<picture>`-Elementen ermöglicht. Diese ermöglichen es Ihnen auch, ein **Animated WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe servieren

Beim Bilder-Delivery funktioniert die "eine Größe passt für alle"-Strategie nicht optimal, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung und umgekehrt für größere Bildschirme bereitstellen sollten. Darüber hinaus sollten Sie hochauflösende Bilder an Geräte mit einem hohen DPI-Bildschirm (z.B. "Retina") ausliefern. Abgesehen davon, dass Sie eine Vielzahl von Zwischenvarianten von Bildern erstellen, benötigen Sie auch eine Methode, um die richtige Datei an den richtigen Browser zu liefern. Hierfür ist es notwendig, Ihre `<picture>`- und `<source>`-Elemente mit den Attributen [`media`](/de/docs/Web/HTML/Reference/Elements/source#media) und/oder [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes) aufzurüsten. [Responsive Bilder richtig gemacht: Ein Leitfaden zu `<picture>` und `srcset`](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) erklärt im Detail, wie man all diese Attribute kombiniert.

Zwei interessante Effekte, die im Hinblick auf hochauflösende Bildschirme zu beachten sind:

- Bei einem hochauflösenden Bildschirm erkennen Menschen Kompressionsartefakte deutlich später, was bedeutet, dass Sie die Kompression für Bilder, die für diese Bildschirme gedacht sind, über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus wahrnehmen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie Bilder nicht in höherer Auflösung als 2× bereitstellen müssen.

#### Die Priorität (und Reihenfolge) des Bilddownloads steuern

Die wichtigsten Bilder vor den weniger wichtigen für Besucher bereitzustellen, kann die wahrgenommene Leistung verbessern.

Das erste, was Sie überprüfen sollten, ist, dass Ihre Inhaltsbilder `<img>` oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>`-Elementen referenziert werden, erhalten eine höhere Ladepriorität als Hintergrundbilder.

Zweitens, mit der Einführung von Priority Hints können Sie die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Ein Beispiel für die Verwendung von Priority Hints bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die folgenden Bilder.

### Render-Strategie: Vermeidung von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und auch nach dem ersten Paint weiter laden, können sie, wenn ihre Dimensionen vor dem Laden nicht definiert sind, Neuanordnungen des Seiteninhalts verursachen. Beipsielsweise wird Text auf der Seite nach unten gedrückt, wenn Bilder geladen werden. Aus diesem Grund ist es wichtig, `width`- und `height`-Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width`- und `height`-Attribute eines Bildes im HTML-{{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser vor dem Laden des Bildes berechnet werden. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zur Darstellung des Bildes zu reservieren, wodurch ein Layoutwechsel reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung von Layoutwechseln ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

Browser beginnen mit der Darstellung von Inhalten während des Parsens von HTML, oft bevor alle Assets, einschließlich Bilder, heruntergeladen sind. Durch das Einfügen von Dimensionen können Browser einen korrekt dimensionierten Platzhalterrahmen für jedes Bild reservieren, der dann erscheint, wenn die Bilder geladen sind, bei der ersten Darstellung der Seite.

![Zwei Screenshots, der erste ohne ein Bild, aber mit reserviertem Platz, der zweite zeigt das Bild im reservierten Platz geladen.](ar-guide.jpg)

Ohne die `width`- und `height`-Attribute wird kein Platzhalterbereich erstellt, was ein wahrnehmbares {{Glossary("jank", "Ruckeln")}}, oder einen Layoutwechsel, auf der Seite verursacht, wenn das Bild geladen wird, nachdem die Seite gerendert wurde. Seitenumbruch und -neuzeichnung sind Performance- und Usability-Probleme.

Der {{Glossary("CLS", "CLS")}}-Wert misst das Ruckeln beim Laden der Seite oder wie viel sichtbarer Inhalt sich im Ansichtsfenster verschiebt und um wie viel. Die Hauptursachen für schlechten CLS sind ersetzte Elemente ohne deklarierte Dimensionen, die sich neuanordnen, wenn das Asset geladen wird, einschließlich Bilder, Anzeigen, eingebettete Objekte und iFrames ohne Größe oder {{cssxref("aspect-ratio")}} sowie Web-Schriftarten.

In responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird im Allgemeinen das folgende CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern austreten:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Während dies für responsive Layouts nützlich ist, verursacht es Ruckeln und einen schlechten CLS-Wert, wenn keine Breiten- und Höheninformationen enthalten sind. Wenn keine Höheninformationen vorhanden sind, wenn das `<img>`-Element analysiert wird, aber bevor das Bild geladen ist, hat dieses CSS effektiv die Höhe auf 0 gesetzt. Wenn das Bild nach dem erstmaligen Rendern der Seite auf dem Bildschirm geladen wird, erfolgt ein Seitenumbruch und eine Neuzeichnung, was einen Layoutwechsel verursacht, während Raum für die neu festgelegte Höhe geschaffen wird.

Browser haben einen Mechanismus zum Größen von Bildern, bevor das eigentliche Bild geladen wird. Wenn ein `<img>`, `<video>`, oder `<input type="button">`-Element `width`- und `height`-Attribute gesetzt hat, wird das Seitenverhältnis bereits vor der Ladezeit berechnet und ist für den Browser verfügbar, indem die angegebenen Dimensionen verwendet werden.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher wird die richtige Größe auf das `<img>`-Element angewendet, was bedeutet, dass das oben erwähnte Ruckeln nicht oder nur minimal auftritt, wenn die angegebenen Dimensionen nicht vollständig genau sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur zur Platzreservierung während des Bildladens verwendet. Sobald das Bild geladen ist, wird anstelle des Seitenverhältnisses aus den Attributen das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der Eigenschaft `aspect-ratio` verwendet. Dies stellt sicher, dass es im richtigen Seitenverhältnis angezeigt wird, auch wenn die Attributdimensionen nicht genau sind.

Während Entwickler in der Vergangenheit vielleicht empfohlenen haben, die `width`- und `height`-Attribute eines Bildes in einem HTML-{{htmlelement("img")}}-Element wegzulassen, wird durch die Zuordnung des Seitenverhältnisses das Einschließen dieser zwei Attribute als bewährte Methode für Entwickler angesehen.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color`-Wert festlegen, damit überlagerte Inhalte vor dem Herunterladen des Bildes noch lesbar sind.

## Fazit

In diesem Abschnitt haben wir die Bildoptimierung betrachtet. Sie haben nun ein allgemeines Verständnis dafür, wie man die Hälfte des durchschnittlichen Bandbreitengesamtverbrauchs einer durchschnittlichen Website optimiert. Dies ist nur eine der Arten von Medien, die die Bandbreite der Nutzer verbrauchen und die Ladezeiten von Seiten verlangsamen. Schauen wir uns die Videooptimierung an, um die nächsten 20% des Bandbreitenverbrauchs anzugehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
