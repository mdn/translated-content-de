---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. In Bezug auf die Download-Performance ist das Entfernen von Medien und das Reduzieren der Dateigröße die einfache Lösung. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erfahren Sie mehr über die verschiedenen Bildformate, ihre Auswirkungen
        auf die Performance und wie Sie die Auswirkungen von Bildern auf die
        gesamte Ladezeit der Seite reduzieren können.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hoher Ebene zur Optimierung der Multimedia-Bereitstellung im Web, die allgemeine Prinzipien und Techniken abdeckt. Für einen ausführlicheren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihr Multimedia optimieren?

Für die durchschnittliche Website stammen [51% ihrer Bandbreite aus Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es offensichtlich wichtig, sich mit Ihrem Multimedia-Content zu befassen und diesen zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen haben begrenzte Datentarife oder sogar Prepaid-Pläne, bei denen sie buchstäblich pro Megabyte bezahlen. Dies ist kein Problem für aufstrebende Märkte. Im Jahr 2018 nutzen laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) immer noch 24% der Menschen im Vereinigten Königreich Prepaid-Pläne.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig zu beachten, dass Bilder, wenn sie heruntergeladen werden, im Speicher gespeichert werden müssen.

## Optimierung der Bildbereitstellung

Obwohl Bilder die größte Bandbreitenverbraucher sind, ist der Einfluss von Bilddownloads auf die [wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer als viele vermuten (hauptsächlich weil der Textinhalt der Seite sofort heruntergeladen wird und die Nutzer die Bilder sehen können, wenn sie ankommen). Trotzdem ist es für eine gute Benutzererfahrung wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Einer der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Lazy_loading) von Bildern unterhalb der Faltung anstatt beim ersten Laden der Seite alle Bilder herunterzuladen, unabhängig davon, ob ein Besucher herunterscrollt, um sie zu sehen oder nicht. Browser stellen dies nativ über das [`loading="lazy"`](/de/docs/Web/HTML/Element/img#loading) Attribut am `<img>`-Element zur Verfügung, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies können.

Neben dem Laden eines Teils der Bilder sollten Sie das Format der Bilder selbst untersuchen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise von der Charakteristik des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) Format ist besser geeignet für Bilder, die wenige Farben haben und nicht fotorealistisch sind. Dies erfordert, dass die Quelle in einem Vektorgraphikformat vorliegt. Sollte ein solches Bild nur als Bitmap existieren, dann wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das Fallback-Format, das Sie wählen sollten. Beispiele für diese Arten von Motiven sind Logos, Illustrationen, Diagramme oder Icons (Hinweis: SVGs sind weitaus besser als Icon-Schriften!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit Farbe + 8-Bit Transparenz — bieten volle Farbgenauigkeit und glatte Transparenz auf Kosten der Größe. Diese Kombination sollten Sie wahrscheinlich zugunsten von WebP (siehe unten) vermeiden.
- 8-Bit Farbe + 8-Bit Transparenz — bieten nicht mehr als 255 Farben, aber erhalten glatte Transparenzen. Die Größe ist nicht zu groß. Das sind die PNGs, die Sie wahrscheinlich möchten.
- 8-Bit Farbe + 1-Bit Transparenz — bieten nicht mehr als 255 Farben und nur volle oder keine Transparenz pro Pixel, wodurch die Transparenzränder hart und gezackt erscheinen. Die Größe ist klein, aber der Preis ist die Bildqualität.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz haben, gibt es ein viel breiteres Spektrum an Formaten zur Auswahl. Wenn Sie auf Nummer sicher gehen wollen, sollten Sie gut komprimierte **Progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, stellen progressiv dar (daher der Name), was bedeutet, der Benutzer sieht eine niedrigauflösende Version, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt das Bild in voller Auflösung von oben nach unten zu laden oder es erst anzuzeigen, wenn es vollständig heruntergeladen ist. Ein guter Kompressor für diese wäre MozJPEG, z.B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75% sollte gute Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG in Bezug auf Kompression, sind aber nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (jedoch keine progressive Anzeige). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder älter.

  > [!NOTE]
  > Trotz der [Ankündigung von Apple zur Unterstützung von WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) zeigen Safari-Versionen vor 16.0 keine `.webp` Bilder erfolgreich auf macOS Desktop-Versionen vor 11/Big Sur. Safari für iOS 14 _zeigt_ `.webp` Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung und des lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt in Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren früherer Bildformate in AVIF.
- **JPEG2000** — sollte ursprünglich der Nachfolger von JPEG sein, wird aber nur in Safari unterstützt. Unterstützt ebenfalls keine progressive Anzeige.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und unter Berücksichtigung der Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Daher könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements geschehen, das mit einem [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) ausgestattet ist.

Wenn all dies etwas kompliziert klingt oder sich nach zu viel Arbeit für Ihr Team anfühlt, gibt es auch Online-Dienste, die Sie als Bild-CDNs nutzen können, die das Ausliefern des richtigen Bildformats automatisch und je nach Gerät oder Browser, das/die das Bild anfordert, durchführen. Beliebte Optionen sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Sollten Sie schließlich animierte Bilder auf Ihrer Seite einfügen wollen, wissen Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>`-Elementen erlaubt. Dies ermöglicht es Ihnen auch, ein **animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Bei der Bildbereitstellung wird die Strategie "eine Größe für alle" nicht die besten Ergebnisse liefern, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung und umgekehrt für größere Bildschirme bereitstellen möchten. Außerdem würden Sie hochauflösende Bilder an diejenigen Geräte liefern, die über ein hochauflösendes Display verfügen (z.B. "Retina"). Neben der Erstellung vieler Zwischenvarianten von Bildern benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. Hierfür müssen Sie Ihre `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Element/source#media)- und/oder [sizes](/de/docs/Web/HTML/Element/source#sizes)-Attributen erweitern. Ein detaillierter Artikel darüber, wie man all diese Attribute kombiniert, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte, die im Hinblick auf hochauflösende Bildschirme zu beachten sind, umfassen:

- Bei einem hochauflösenden Bildschirm werden Menschen Komprimierungsartefakte viel später bemerken, was bedeutet, dass Sie für Bilder, die für diese Bildschirme gedacht sind, die Kompression über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder mit einer Auflösung höher als 2× bereitstellen müssen.

#### Die Priorität (und Reihenfolge) des Herunterladens von Bildern steuern

Indem Sie die wichtigsten Bilder früher als die weniger wichtigen Bilder vor den Besuchern erscheinen lassen, können Sie die wahrgenommene Performance verbessern.

Das Erste, was zu überprüfen ist, dass Ihre Inhaltsbilder `<img>`- oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind – Bilder, die in `<img>`-Elementen referenziert werden, haben eine höhere Ladepriorität als Hintergrundbilder.

Zweitens, mit der Einführung von Priority Hints, können Sie die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bilder-Tags hinzufügen. Ein Anwendungsfall für Prioritätshinweise bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Rendering-Strategie: Vermeidung von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und nach dem ersten Rendering weitergeladen werden, können sie, wenn ihre Abmessungen nicht vor dem Laden definiert sind, Neufluss auf den Seiteninhalt verursachen. Zum Beispiel, wenn Text durch das Laden von Bildern nach unten verschoben wird. Aus diesem Grund ist es wichtig, `width` und `height`-Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width` und `height` Attribute eines Bildes im HTML {{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, wodurch ein Layout-Verschiebung reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf den Bildschirm gezeichnet wird. Die Reduzierung von Layout-Verschiebungen ist ein wichtiger Bestandteil einer guten Benutzererfahrung und Web-Performance.

Browsers beginnen mit dem Rendern von Inhalten, sobald HTML analysiert wird, oft bevor alle Ressourcen einschließlich Bilder heruntergeladen wurden. Durch das Einschließen von Abmessungen können Browser eine korrekt dimensionierte Platzhalterbox für jedes Bild reservieren, die beim Laden der Bilder bei der ersten Darstellung der Seite erscheint.

![Zwei Screenshots: Der erste ohne ein Bild, aber mit reserviertem Platz; der zweite zeigt das Bild, das in den reservierten Platz geladen wurde.](ar-guide.jpg)

Ohne die `width` und `height` Attribute wird kein Platzhalter erstellt, was eine bemerkbare {{Glossary("jank", "Ruckelbewegung")}} oder Layout-Verschiebung auf der Seite verursacht, wenn das Bild nach dem Rendering der Seite geladen wird. Seitenneufluss und Neumalrichtungen sind Performance- und Nutzungsprobleme.

Die {{Glossary("CLS", "CLS")}}-Metrik misst Ruckeln beim Seitenladen oder wie stark sichtbare Inhalte im Viewport verschoben werden und um wie viel. Die Hauptverursacher schlechter CLS sind ersetzte Elemente ohne deklarierte Abmessungen, die beim Laden der Ressource neu fließen, einschließlich Bilder, Anzeigen, Einbettungen und iframes ohne eine Größe oder {{cssxref("aspect-ratio")}} und Web-Schriften.

In responsiven Designs, wenn ein Container schmaler ist als ein Bild, wird im Allgemeinen das folgende CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern herausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Während dies für responsive Layouts nützlich ist, verursacht dies Ruckeln und schlechte CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, da, wenn keine Höheninformationen vorhanden sind, wenn das `<img>`-Element analysiert wird, aber bevor das Bild geladen hat, dieses CSS effektiv die Höhe auf 0 gesetzt hat. Wenn das Bild nach dem ersten Rendern der Seite auf dem Bildschirm geladen wird, wird die Seite neu geflossen und neu gezeichnet, wodurch eine Layout-Verschiebung entsteht, da Platz für die neu bestimmte Höhe geschaffen wird.

Browsers haben einen Mechanismus zur Größenbestimmung von Bildern, bevor das eigentliche Bild geladen wird. Wenn ein `<img>`, `<video>`, oder `<input type="button">`-Element `width` und `height`-Attribute darauf gesetzt hat, wird sein Seitenverhältnis vor der Ladezeit berechnet und steht dem Browser mit den bereitgestellten Dimensionen zur Verfügung.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und daher wird die richtige Größe auf das `<img>`-Element angewendet, was bedeutet, dass das zuvor erwähnte Ruckeln nicht auftritt oder minimal ist, wenn die angegebenen Abmessungen beim Laden des Bildes nicht vollständig genau sind.

Das Seitenverhältnis wird nur beim Laden des Bilds zur Platzreservierung verwendet. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft verwendet, statt des Seitenverhältnisses von den Attributen. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, auch wenn die Attributabmessungen nicht genau sind.

Während Entwickler-Best-Practices aus dem letzten Jahrzehnt empfohlen haben könnten, die `width` und `height`-Attribute eines Bildes auf einem HTML {{htmlelement("img")}} zu weglassen, wird das Einschließen dieser beiden Attribute aufgrund der Zuordnung des Seitenverhältnisses als Best Practice für Entwickler angesehen.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color`-Wert festlegen, damit überlagerte Inhalte immer noch lesbar sind, bevor das Bild heruntergeladen wurde.

## Fazit

In diesem Abschnitt haben wir uns mit der Bildoptimierung befasst. Sie haben nun ein allgemeines Verständnis davon, wie Sie die Hälfte der durchschnittlichen Bandbreite einer durchschnittlichen Website optimieren können. Dies ist nur eine der Arten von Medien, die den Bandbreitenverbrauch der Nutzer belasten und die Ladezeit der Seite verlangsamen. Lassen Sie uns die Videooptimierung angehen, um die nächsten 20% des Bandbreitenverbrauchs zu bekämpfen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
