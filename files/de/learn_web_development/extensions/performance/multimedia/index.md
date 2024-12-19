---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70% der heruntergeladenen Bytes einer durchschnittlichen Website aus. In Bezug auf die Download-Leistung ist das Eliminieren von Medien und das Reduzieren der Dateigröße eine einfache Möglichkeit, Verbesserungen zu erzielen. Dieser Artikel behandelt die Optimierung von Bildern und Videos zur Verbesserung der Web-Performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und Grundkenntnisse in
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen der verschiedenen Bildformate, deren Auswirkungen auf die Leistung und wie man die Auswirkungen von Bildern auf die gesamte Ladezeit der Seite reduziert.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hoher Ebene zur Optimierung der Multimedia-Bereitstellung im Web, die allgemeine Prinzipien und Techniken behandelt. Für einen ausführlicheren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia-Inhalte optimieren?

Für die durchschnittliche Website stammen [51% der Bandbreite aus Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, Ihre Multimedia-Inhalte zu adressieren und zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen haben Datenobergrenzen oder zahlen sogar pro Nutzung, wobei sie buchstäblich pro Megabyte bezahlen. Dies ist auch kein Problem aufstrebender Märkte. Laut dem [OFCOM Nations & Regions Technology Tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) nutzten 2018 noch 24% des Vereinigten Königreichs Pay-as-you-go.

Sie sollten auch den Speicher berücksichtigen, da viele mobile Geräte begrenzten RAM haben. Es ist wichtig zu bedenken, dass Bilder, wenn sie heruntergeladen werden, im Speicher gespeichert werden müssen.

## Optimierung der Bildbereitstellung

Trotz des großen Bandbreitenverbrauchs ist die Auswirkung des Herunterladens von Bildern auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer als oft erwartet wird (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und Benutzer die gerenderten Bilder sehen können, während sie ankommen). Für ein gutes Benutzererlebnis ist es jedoch wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Lazy_loading) von Bildern, die außerhalb des sichtbaren Bereichs liegen, anstatt sie alle beim initialen Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher sie durch Scrollen sehen wird oder nicht. Browser bieten dies nativ über das Attribut [`loading="lazy"`](/de/docs/Web/HTML/Element/img#loading) auf dem `<img>`-Element an, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies ermöglichen.

Neben dem Laden eines Teils der Bilder sollten Sie sich das Format der Bilder selbst anschauen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise von der Charakteristik des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types).

Das [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Format ist besser geeignet für Bilder mit wenigen Farben, die nicht fotorealistisch sind. Dies setzt voraus, dass das Quellmaterial im Vektorformat vorliegt. Sollte ein solches Bild nur als Bitmap vorliegen, wäre [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) das bevorzugte Format. Beispiele für solche Motive sind Logos, Illustrationen, Diagramme oder Icons (Hinweis: SVGs sind viel besser als Icon-Schriften!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bieten volle Farbgenauigkeit und sanfte Transparenz auf Kosten der Größe. Sie sollten wahrscheinlich diese Kombination zugunsten von WebP vermeiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bieten nicht mehr als 255 Farben, halten aber sanfte Transparenzen aufrecht. Die Größe ist nicht zu groß. Dies sind die PNGs, die Sie wahrscheinlich möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz — bieten nicht mehr als 255 Farben und nur keine oder volle Transparenz pro Pixel, was die Transparenzgrenzen hart und gezackt erscheinen lässt. Die Größe ist klein, aber der Preis ist die visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel größere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen wollen, sollten Sie gut komprimierte **Progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, werden progressiv gerendert (daher der Name), was bedeutet, dass der Benutzer eine niedrigauflösende Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt dass das Bild vollständig von oben nach unten geladen wird oder erst vollständig angezeigt wird, wenn es vollständig heruntergeladen ist. Ein guter Kompressor hierfür wäre MozJPEG, zum Beispiel verfügbar im Online-Bildoptimierungs-Tool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75% sollte anständige Ergebnisse liefern.

Andere Formate verbessern die Kompressionsfähigkeiten von JPEG, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder. WebP bietet eine wesentlich bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (aber keine progressive Anzeige). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder älter.

  > [!NOTE]
  > Trotz Apples [Ankündigung der Unterstützung für WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) zeigen Safari-Versionen vor 16.0 `.webp`-Bilder nicht erfolgreich auf macOS-Desktop-Versionen älter als 11/Big Sur an. Safari für iOS 14 _zeigt_ `.webp`-Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund hoher Leistung und lizenzfreies Bildformat (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Jetzt unterstützt auf Chrome, Edge, Opera und Firefox. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren vorheriger Bildformate in AVIF.
- **JPEG2000** — sollte einmal der Nachfolger von JPEG sein, wird jedoch nur in Safari unterstützt. Unterstützt auch keine progressive Anzeige.

Angesichts der geringen Unterstützung von JPEG-XR und JPEG2000 und unter Berücksichtigung der Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Daher könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements erfolgen, das mit einem [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) ausgestattet ist.

Wenn all dies etwas kompliziert oder nach zu viel Arbeit für Ihr Team klingt, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können, die das Servieren des richtigen Bildformats je nach Art des Geräts oder Browsers, der das Bild anfordert, automatisch erledigen. Die größten sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps) und [Image Engine](https://imageengine.io/).

Sollten Sie schließlich animierte Bilder auf Ihrer Seite einfügen wollen, wissen Sie, dass Safari die Verwendung von Videodateien innerhalb der `<img>`- und `<picture>`-Elemente zulässt. Diese erlauben es Ihnen auch, eine **animierte WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Bei der Bereitstellung von Bildern wird der "Eine Größe passt für alle"-Ansatz keine optimalen Ergebnisse liefern. Das bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung bereitstellen möchten und umgekehrt für größere Bildschirme. Darüber hinaus möchten Sie auch hochauflösende Bilder an Geräte liefern, die einen Bildschirm mit hoher DPI aufweisen (z.B. "Retina"). Abgesehen davon, dass Sie viele Zwischenbildvarianten erstellen, benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. Dazu müssten Sie Ihre `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Element/source#media)- und/oder [sizes](/de/docs/Web/HTML/Element/source#sizes)-Attributen erweitern. Einen detaillierten Artikel dazu, wie man all diese Attribute kombiniert, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte im Zusammenhang mit Bildschirmen mit hoher DPI, die zu beachten sind:

- Bei einem Bildschirm mit hoher DPI werden Menschen Kompressionsartefakte viel später bemerken, was bedeutet, dass Sie für Bilder, die für diese Bildschirme bestimmt sind, die Kompression über die übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI wahrnehmen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine höher aufgelösten Bilder als 2× bereitstellen müssen.

#### Die Priorität (und Ordnung) beim Herunterladen von Bildern steuern

Wichtigere Bilder früher vor Besuchern zu präsentieren als weniger wichtige kann die wahrgenommene Leistung verbessern.

Zuerst sollten Sie überprüfen, ob Ihre Inhaltsbilder `<img>`- oder `<picture>`-Elemente verwenden und ob Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>`-Elementen referenziert werden, haben eine höhere Ladepriorität als Hintergrundbilder.

Zweitens können Sie mit der Einführung von Priority Hints die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsfall für Prioritätshinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Rendering-Strategie: Vermeidung von Jank beim Laden von Bildern

Da Bilder asynchron geladen werden und nach dem ersten Paint noch weiterladen, können sie, wenn ihre Dimensionen nicht vor dem Laden definiert sind, Neuanordnungen der Seiteninhalte verursachen. Zum Beispiel, wenn Text durch das Laden von Bildern nach unten auf der Seite verschoben wird. Aus diesem Grund ist es wichtig, `width`- und `height`-Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width`- und `height`-Attribute eines Bildes im HTML-{{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den Platzbedarf für die Anzeige des Bildes zu reservieren und so eine Layout-Verschiebung zu reduzieren oder sogar zu verhindern, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung der Layout-Verschiebung ist ein wesentlicher Bestandteil eines guten Benutzererlebnisses und der Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, während HTML analysiert wird, oft bevor alle Assets, einschließlich Bilder, heruntergeladen sind. Das Einschließen von Dimensionen ermöglicht es Browsern, einen korrekt dimensionierten Platzhalterrahmen für jedes Bild zu reservieren, das beim Laden der Bilder angezeigt wird, wenn die Seite zuerst gerendert wird.

![Zwei Screenshots: Der erste ohne Bild, aber mit reserviertem Platz, der zweite zeigt das Bild im reservierten Platz.](ar-guide.jpg)

Ohne die `width`- und `height`-Attribute wird kein Platzhalterraum erstellt, was zu einer spürbaren {{Glossary("jank", "Jank")}} oder Layout-Verschiebung auf der Seite führt, wenn das Bild nach dem Rendern der Seite geladen wird. Seiten-Neuanordnungen und Neuzeichnungen sind Leistungs- und Usability-Probleme.

Die {{Glossary("CLS", "CLS")}}-Metrik misst das Jank beim Laden der Seite oder wie stark sichtbare Inhalte im Ansichtsfenster verschoben werden und wie viel. Die Hauptverursacher schlechter CLS sind ersetzte Elemente ohne deklarierte Dimensionen, die bei Asset-Ladung eine Neuanordnung verursachen, einschließlich Bilder, Anzeigen, Einbettungen und iFrames ohne Größe oder {{cssxref("aspect-ratio")}} und Web-Schriften.

In responsiven Designs, wenn ein Container schmaler ist als ein Bild, wird üblicherweise folgender CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern ausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Obwohl nützlich für responsive Layouts, verursacht dies Jank und schlechte CLS, wenn Breiten- und Höhenangaben nicht eingeschlossen sind, da, wenn keine Höhenangaben vorhanden sind, während das `<img>`-Element analysiert wird, aber bevor das Bild geladen ist, dieses CSS effektiv die Höhe auf 0 gesetzt hat. Wenn das Bild nach dem ursprünglichen Rendern der Seite auf dem Bildschirm geladen wird, erfolgt eine Neuanordnung und Neuzeichnung der Seite, was eine Layout-Verschiebung verursacht, da Platz für die neu bestimmte Höhe geschaffen wird.

Browser haben einen Mechanismus zum Dimensionieren von Bildern, bevor das tatsächliche Bild geladen wird. Wenn ein `<img>`-, `<video>`- oder `<input type="button">`-Element `width`- und `height`-Attribute hat, wird sein Seitenverhältnis vor der Ladezeit berechnet und ist für den Browser verfügbar, basierend auf den bereitgestellten Dimensionen.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher wird die richtige Größe auf das `<img>`-Element angewendet, was bedeutet, dass der erwähnte Jank nicht auftritt oder minimal ist, wenn die aufgeführten Dimensionen beim Laden des Bildes nicht vollständig genau sind.

Das Seitenverhältnis wird nur beim ersten Laden des Bildes zur Platzreservierung genutzt. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft verwendet, anstelle des Seitenverhältnisses aus den Attributen. Dies stellt sicher, dass es im richtigen Seitenverhältnis angezeigt wird, auch wenn die Attributdimensionen nicht genau sind.

Während Entwickler-Best-Practices aus dem letzten Jahrzehnt möglicherweise empfohlen haben, die `width`- und `height`-Attribute eines Bildes auf einem HTML-{{htmlelement("img")}} zu weglassen, wird das Einschließen dieser beiden Attribute aufgrund der Zuordnung des Seitenverhältnisses nun als Best-Practice für Entwickler angesehen.

Für alle Hintergrundbilder ist es wichtig, einen `background-color`-Wert festzulegen, damit überlagerte Inhalte lesbar bleiben, bevor das Bild heruntergeladen wurde.

## Fazit

In diesem Abschnitt haben wir die Bildoptimierung untersucht. Sie haben jetzt ein allgemeines Verständnis dafür, wie Sie die Hälfte der durchschnittlichen Bandbreitenmenge einer Website optimieren können. Dies ist nur eine der Arten von Medien, die die Bandbreite der Benutzer beanspruchen und die Ladezeiten der Seiten verlangsamen. Schauen wir uns die Video-Optimierung an und nehmen wir die nächsten 20% des Bandbreitenverbrauchs in Angriff.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
