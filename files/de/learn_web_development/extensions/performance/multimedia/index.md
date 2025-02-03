---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: 310edab6660ca84384b6370de9819ca94e0ef361
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70% der heruntergeladenen Bytes für die durchschnittliche Webseite aus. In Bezug auf die Download-Leistung ist das Eliminieren von Medien und das Reduzieren der Dateigröße das greifbarste Potenzial. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos, um die Web-Performance zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        > und grundlegendes Wissen über
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >client-seitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um mehr über die verschiedenen Bildformate zu erfahren, deren Auswirkung auf die Leistung und wie man den Einfluss von Bildern auf die Gesamtseitenladezeit reduzieren kann.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine allgemeine Einführung in die Optimierung der Multimedia-Bereitstellung im Web, die allgemeine Prinzipien und Techniken abdeckt. Für einen detaillierteren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollte man Multimedia optimieren?

Für die durchschnittliche Webseite stammen [51% ihrer Bandbreite von Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, sich um die Optimierung Ihrer Multimedia-Inhalte zu kümmern.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen sind in Datentarifen mit Volumenbegrenzung oder sogar in Pay-as-you-go-Tarifen, bei denen sie buchstäblich pro Megabyte zahlen. Dies ist nicht nur ein Problem in aufstrebenden Märkten. Im Jahr 2018 nutzten laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) immer noch 24% des Vereinigten Königreichs Pay-as-you-go.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig zu beachten, dass heruntergeladene Bilder im Speicher gespeichert werden müssen.

## Optimierung der Bildbereitstellung

Trotz des höchsten Bandbreitenverbrauchs ist der Einfluss des Bilddownloads auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) wesentlich geringer als viele erwarten (hauptsächlich weil der Seitentext sofort heruntergeladen wird und die Benutzer die Bilder bereits sehen können, während sie geladen werden). Trotzdem ist es für eine gute Benutzererfahrung wichtig, dass die Besucher sie so schnell wie möglich sehen können.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-Loading](/de/docs/Web/Performance/Lazy_loading) von Bildern, die unterhalb der Falte liegen, anstatt sie alle beim initialen Laden der Seite herunterzuladen, unabhängig davon, ob ein Besucher scrollt, um sie zu sehen. Browser bieten diese Funktion nativ über das [`loading="lazy"`](/de/docs/Web/HTML/Element/img#loading)-Attribut im `<img>`-Element, und es gibt auch viele client-seitige JavaScript-Bibliotheken, die dies tun können.

Abgesehen vom Laden eines Teilsets von Bildern sollten Sie sich das Format der Bilder selbst ansehen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise von der Charakteristik des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types).

Das [SVG](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics)-Format ist für Bilder mit wenigen Farben und die nicht fotorealistisch sind, besser geeignet. Dafür muss die Quelle im Vektorformat verfügbar sein. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) das geeignete Fallback-Format. Beispiele für diese Art von Motiven sind Logos, Illustrationen, Diagramme oder Icons (Hinweis: SVGs sind wesentlich besser als Icon-Schriften!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgangskombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz – bieten vollständige Farbgenauigkeit und glatte Transparenz auf Kosten der Dateigröße. Sie sollten wahrscheinlich diese Kombination zugunsten von WebP (siehe unten) vermeiden.
- 8-Bit-Farbe + 8-Bit-Transparenz – bieten nicht mehr als 255 Farben, behalten jedoch glatte Transparenzen bei. Die Größe ist nicht zu groß. Dies sind die PNGs, die Sie wahrscheinlich verwenden möchten.
- 8-Bit-Farbe + 1-Bit-Transparenz – bieten nicht mehr als 255 Farben und bieten lediglich keine oder volle Transparenz pro Pixel, wodurch die Transparenzränder hart und gezackt erscheinen. Die Größe ist klein, aber der Preis ist visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven ohne Transparenz gibt es eine viel breitere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen möchten, wählen Sie gut komprimierte **Progressive JPEGs**. Progressive JPEGs rendern im Gegensatz zu normalen JPEGs progressiv (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt das Bild in voller Auflösung von oben nach unten oder erst vollständig heruntergeladen anzuzeigen. Ein guter Kompressor dafür wäre MozJPEG, z.B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätsstufe von 75% sollte anständige Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG in Bezug auf die Kompression, sind aber nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) — Ausgezeichnete Wahl sowohl für Bilder als auch für animierte Bilder. WebP bietet eine wesentlich bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Bilder, Transparenz etc. (aber keine progressive Darstellung). Unterstützt von allen großen Browsern außer Safari 14 auf macOS Desktop Big Sur oder älter.

  > [!NOTE]
  > Trotz der Ankündigung von Apple, [WebP-Unterstützung in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174) einzuführen, zeigen Safari-Versionen früher als 16.0 keine `.webp`-Bilder erfolgreich auf macOS-Desktopversionen früher als 11/Big Sur an. Safari für iOS 14 zeigt `.webp`-Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund des leistungsfähigen und lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet). Es wird jetzt auf Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren vorheriger Bildformate in AVIF.
- **JPEG2000** — sollte ursprünglich der Nachfolger von JPEG sein, wird jedoch nur in Safari unterstützt. Unterstützt ebenfalls keine progressive Darstellung.

Angesichts der geringen Unterstützung für JPEG-XR und JPEG2000 und auch der Berücksichtigung von Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Aus diesem Grund könnte man seine Bilder auch in dieser Variante anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements erfolgen, das mit einem [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) ausgestattet ist.

Wenn das alles ein wenig kompliziert klingt oder zu arbeitsaufwändig für Ihr Team ist, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können, um die korrekte Bildformatierung automatisch in Echtzeit gemäß dem zum Abruf der Bilder verwendeten Gerät oder Browser zu bedienen. Beliebte Optionen sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Sollten Sie schließlich animierte Bilder auf Ihrer Seite einfügen wollen, sollten Sie wissen, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>`-Elementen erlaubt. Diese ermöglichen es Ihnen auch, ein **animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Beim Ausliefern von Bildern wird die „Eine-Größe-passt-allen“-Herangehensweise nicht die besten Ergebnisse liefern, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung bereitstellen möchten und umgekehrt für größere Bildschirme. Darüber hinaus möchten Sie auch hochauflösende Bilder für Geräte bereitstellen, die über einen Bildschirm mit hoher DPI verfügen (z.B. "Retina"). Neben dem Erstellen von zahlreichen Zwischenbild-Varianten benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. Dafür müssen Sie Ihre `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Element/source#media)- und/oder [größen](/de/docs/Web/HTML/Element/source#sizes)-Attributen aufrüsten. Ein detaillierter Artikel, wie man all diese Attribute kombiniert, ist [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) zu finden.

Zwei interessante Effekte, die man im Hinblick auf Bildschirme mit hoher DPI berücksichtigen sollte, sind:

- Bei einem Bildschirm mit hoher DPI werden Komprimierungsartefakte von Menschen viel später erkannt. Das bedeutet, dass Sie für Bilder, die für diese Bildschirme bestimmt sind, die Kompression über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Auflösungssteigerung über 2-fach DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie Bilder nicht höher als 2-fach auflösend anbieten müssen.

#### Kontrolle der Priorität (und Reihenfolge) beim Herunterladen von Bildern

Dadurch, dass die wichtigsten Bilder schneller als die weniger wichtigen vor den Besuchern erscheinen, kann ein verbessertes wahrgenommenes Leistungsniveau erreicht werden.

Das erste, was zu prüfen ist, ist, dass Ihre Inhaltsbilder `<img>` oder `<picture>`-Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>`-Elementen referenziert werden, haben eine höhere Ladepriorität als Hintergrundbilder.

Zweitens können Sie mit der Einführung von Prioritätshinweisen die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsbeispiel für Prioritätshinweise bei Bildern sind Karusselle, bei denen das erste Bild eine höhere Priorität als die nachfolgenden Bilder hat.

### Rendering-Strategie: Verhindern von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und mit dem Laden nach dem ersten Paint fortfahren, können sie, wenn ihre Abmessungen nicht vorher definiert sind, Neuanordnungen des Seiteninhalts verursachen. Beispielsweise wenn Text durch das Laden von Bildern auf der Seite nach unten geschoben wird. Deshalb ist es wichtig, `Breite`- und `Höhe`-Attribute festzulegen, damit der Browser Platz im Layout für sie reservieren kann.

Wenn die `width`- und `height`-Attribute eines Bildes in einem HTML-{{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, wodurch oder gar vermeidend eine Layoutänderung reduziert wird, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung der Layoutänderung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, sobald das HTML geparst wurde, oft bevor alle Ressourcen, einschließlich Bilder, heruntergeladen werden. Das Einschließen von Dimensionen ermöglicht den Browsern, einen korrekt dimensionierten Platzhalterbox für jedes Bild zu reservieren, das geladen werden soll, wenn die Bilder beim ersten Rendern der Seite geladen werden.

![Zwei Screenshots, der erste ohne ein Bild, jedoch mit reserviertem Platz, der zweite zeigt das geladene Bild im reservierten Platz.](ar-guide.jpg)

Ohne die `width`- und `height`-Attribute wird kein Platzhalterplatz reserviert, was bei der Seite zu einem merklichen {{Glossary("jank", "Ruckeln")}} oder einer Layoutverschiebung führt, wenn das Bild nach der Seite gerendert wird. Seitenreflow und Neuanstrich sind Leistungs- und Nutzerfreundlichkeitsprobleme.

Die {{Glossary("CLS", "CLS")}}-Metrik misst das Ruckeln beim Laden von Seiten oder wie stark sichtbare Inhalte im Viewport verschoben werden und um wie viel. Die Hauptverursacher eines schlechten CLS sind Ersatzelemente ohne erklärte Dimensionen, die sich beim Laden der Ressource neu anordnen, einschließlich Bildern, Anzeigen, Einbettungen und iFrames ohne Größe oder {{cssxref("aspect-ratio")}} und Webschriften.

In responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird häufig das folgende CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern herausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Während dies für responsive Layouts nützlich ist, verursacht es Ruckeln und schlechten CLS, wenn keine Breiten- und Höheninformationen enthalten sind, da, wenn keine Höheninformationen vorhanden sind, während das `<img>`-Element geparst wird, aber bevor das Bild geladen ist, dieses CSS effektiv die Höhe auf 0 gesetzt hat. Wenn das Bild nach der anfänglichen Darstellung der Seite auf dem Bildschirm geladen wird, fließt die Seite neu und malt neu, was zu einer Layoutverschiebung führt, da es den neu bestimmten Platz für die Höhe schafft.

Browser haben einen Mechanismus zum Größieren von Bildern, bevor das tatsächliche Bild geladen ist. Wenn ein `<img>`, `<video>` oder `<input type="button">`-Element `width`- und `height`-Attribute hat, wird sein Seitenverhältnis vor der Ladezeit berechnet und steht dem Browser zur Verfügung, wobei die bereitgestellten Dimensionen verwendet werden.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und somit wird die richtige Größenberechnung auf das `<img>`-Element angewendet, was bedeutet, dass das oben genannte Ruckeln nicht auftritt oder minimal ist, wenn die angegebenen Dimensionen nicht vollständig genau sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur bei der Bildladung verwendet, um Platz zu reservieren. Sobald das Bild geladen ist, wird das inhärente Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft anstelle des Seitenverhältnisses aus den Attributen verwendet. Dies stellt sicher, dass es im richtigen Seitenverhältnis angezeigt wird, auch wenn die Attributabmessungen nicht genau sind.

Während Entwickler-Best-Practices aus dem letzten Jahrzehnt möglicherweise empfohlen haben, die `width`- und `height`-Attribute eines Bildes auf einem HTML-{{htmlelement("img")}}-Element zu weglassen, gilt es aufgrund der Seitenverhältnisabbildung nun als Entwickler-Best-Practice, diese beiden Attribute einzuschließen.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color`-Wert festlegen, damit alle überlagerten Inhalte trotzdem lesbar sind, bevor das Bild heruntergeladen wurde.

## Fazit

In diesem Abschnitt haben wir uns die Bildoptimierung angesehen. Sie haben nun ein grundlegendes Verständnis dafür, wie Sie die Hälfte der durchschnittlichen Bandbreite einer durchschnittlichen Webseite optimieren können. Dies ist nur eine der Arten von Medien, die die Bandbreite der Nutzer beanspruchen und die Seitenladezeiten verlangsamen. Lassen Sie uns die Videooptimierung betrachten, um die nächsten 20% des Bandbreitenverbrauchs anzugehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
