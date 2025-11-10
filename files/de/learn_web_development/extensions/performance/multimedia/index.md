---
title: "Multimedien: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. In Bezug auf die Download-Performance sind das Entfernen von Medien und die Reduzierung der Dateigröße die einfachen Lösungen. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos zur Verbesserung der Web-Performance.

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
          >client-seitige Web-Technologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen der verschiedenen Bildformate, ihrer Auswirkungen auf die Performance und wie man die Auswirkungen von Bildern auf die gesamte Seitenauslastungszeit reduzieren kann.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hoher Ebene zur Optimierung der multimedialen Bereitstellung im Web, die allgemeine Prinzipien und Techniken abdeckt. Für einen tiefergehenden Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihre Multimedia optimieren?

Für die durchschnittliche Website stammen [51% ihres Bandbreitenverbrauchs von Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), sodass es wichtig ist, sich mit Ihren Multimedia-Inhalten zu befassen und diese zu optimieren.

Sie müssen auf den Datenverbrauch achten. Viele Menschen haben kontingentierte Datenpläne oder zahlen sogar pro Megabyte. Dies ist kein Problem von Schwellenmärkten. Stand 2018 nutzen gemäß dem [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) in Großbritannien immer noch 24% ein Prepaid-Verfahren.

Sie müssen auch auf Speicher achten, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig, sich daran zu erinnern, dass heruntergeladene Bilder im Speicher gespeichert werden müssen.

## Optimierung der Bildübermittlung

Trotz des größten Bandbreitenverbrauchs ist die Auswirkung des Herunterladens von Bildern auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weitaus geringer, als viele erwarten (vor allem, weil der Textinhalt der Seite sofort heruntergeladen wird und Benutzer die Bilder sehen können, wenn sie ankommen). Für ein gutes Benutzererlebnis ist es jedoch weiterhin wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites besteht darin, Bilder unterhalb des Falzbereichs [Lazy zu laden](/de/docs/Web/Performance/Guides/Lazy_loading), anstatt sie alle beim ersten Laden der Seite herunterzuladen – unabhängig davon, ob ein Besucher scrollt, um sie zu sehen. Browser bieten dies nativ über das [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/img#loading) Attribut auf dem `<img>` Element, und es gibt viele clientseitige JavaScript-Bibliotheken, die dies tun können.

Über das Laden eines Teils von Bildern hinaus sollten Sie sich das Format der Bilder selbst ansehen:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise vom Charakter des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und Formaten](/de/docs/Web/Media/Guides/Formats/Image_types).

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) Format ist besser geeignet für Bilder mit wenigen Farben, die nicht fotorealistisch sind. Dies erfordert die Quelle in einem Vektorgrafikformat. Sollte solch ein Bild nur als Bitmap existieren, dann wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das Rückfallformat. Beispiele für diese Motive sind Logos, Illustrationen, Diagramme oder Icons (Hinweis: SVGs sind weitaus besser als Icon-Schriften!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit Farben + 8-Bit Transparenz – bietet volle Farbgenauigkeit und sanfte Transparenzen auf Kosten der Größe. Vermutlich möchten Sie diese Kombination zugunsten von WebP (siehe unten) vermeiden.
- 8-Bit Farben + 8-Bit Transparenz – bietet nicht mehr als 255 Farben, aber erhält sanfte Transparenzen. Die Größe ist nicht zu groß. Das sind vermutlich die PNGs, die Sie möchten.
- 8-Bit Farben + 1-Bit Transparenz – bietet nicht mehr als 255 Farben und nur keine oder volle Transparenz pro Pixel, wodurch die Transparenzränder hart und gezackt erscheinen. Die Größe ist klein, aber der Preis ist die visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel breitere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen wollen, sollten Sie gut komprimierte **progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, rendern progressiv (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt das Bild in voller Auflösung von oben nach unten zu laden oder nur zu rendern, sobald vollständig heruntergeladen. Ein guter Kompressor dafür wäre MozJPEG, z.B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Ein Qualitätswert von 75% sollte akzeptable Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG in Bezug auf Kompression, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Eine ausgezeichnete Wahl für sowohl Bilder als auch animierte Bilder. WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (aber kein progressives Display). Unterstützt von allen großen Browsern mit Ausnahme von Safari 14 auf macOS Desktop Big Sur oder früher.

  > [!NOTE]
  > Trotz Apples Ankündigung der Unterstützung für WebP in Safari 14 unterstützen Safari-Versionen vor 16.0 die Anzeige von `.webp` Bildern auf macOS-Desktop-Versionen vor 11/Big Sur nicht erfolgreich. Safari für iOS 14 zeigt `.webp` Bilder erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund des effizienten und lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt auf Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren vorheriger Bildformate zu AVIF.
- **JPEG2000** — einst der Nachfolger von JPEG, aber nur in Safari unterstützt. Unterstützt ebenfalls kein progressives Display.

Angesichts der begrenzten Unterstützung für JPEG-XR und JPEG2000 sowie der Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Deshalb könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>` Element mit Hilfe eines `<source>` Elements geschehen, das mit einem [type Attribut](/de/docs/Web/HTML/Reference/Elements/picture#the_type_attribute) ausgestattet ist.

Wenn das alles etwas kompliziert klingt oder es zu viel Arbeit für Ihr Team ist, dann gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können und die das Bereitstellen des korrekten Bildformats automatisch auf Basis des Gerätetyps oder des Browsers, der das Bild anfordert, automatisieren. Beliebte Auswahlmöglichkeiten sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Sollten Sie schließlich animierte Bilder auf Ihrer Seite einfügen wollen, beachten Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>` Elementen ermöglicht. Diese ermöglichen es Ihnen auch, ein **Animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Optimale Größe bereitstellen

Bei der Bildübermittlung wird der "Einheitsgröße-fits-alle"-Ansatz nicht die besten Ergebnisse erzielen, was bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung bereitstellen möchten und umgekehrt für größere Bildschirme. Darüber hinaus möchten Sie Bilder in höherer Auflösung an diejenigen Geräte bereitstellen, die über einen hohen DPI-Bildschirm verfügen (z.B. "Retina"). Abgesehen davon, dass Sie viele Zwischenbildvarianten erstellen, benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. Zu diesem Zweck sollten Sie Ihre `<picture>` und `<source>` Elemente mit [`media`](/de/docs/Web/HTML/Reference/Elements/source#media) und/oder [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes) Attributen aufrüsten. [Responsive images done right: A guide to `<picture>` and `srcset`](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) erklärt im Detail, wie Sie all diese Attribute kombinieren.

Zwei interessante Effekte, die man im Hinblick auf hochauflösende Bildschirme im Auge behalten sollte:

- bei einem hochauflösenden Bildschirm bemerken Menschen Kompressionsartefakte viel später, was bedeutet, dass Sie für Bilder, die für diese Bildschirme bestimmt sind, die Kompression über das Übliche hinaus steigern können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus wahrnehmen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder mit einer Auflösung von mehr als 2× bereitstellen müssen.

#### Priorität (und Reihenfolge) beim Herunterladen von Bildern kontrollieren

Die wichtigsten Bilder vor den weniger wichtigen vor den Augen der Besucher zu platzieren, kann die wahrgenommene Leistung verbessern.

Das erste, was Sie überprüfen sollten, ist, dass Ihre Inhaltsbilder `<img>` oder `<picture>` Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>` Elementen referenziert werden, erhalten eine höhere Ladepriorität als Hintergrundbilder.

Zweitens können Sie mit der Übernahme von Priority Hints die Priorität weiter kontrollieren, indem Sie Ihrem Image-Tag ein `fetchPriority` Attribut hinzufügen. Ein Beispiel für die Verwendung von Priority Hints bei Bildern sind Karussells, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Rendering-Strategie: Ruckeln beim Laden von Bildern verhindern

Da Bilder asynchron geladen werden und nach dem ersten Rendering-Element weiterladen, können sie, wenn ihre Dimensionen vor dem Laden nicht definiert sind, zu Neuanordnungen des Seiteninhalts führen. Zum Beispiel, wenn Text durch das Laden von Bildern nach unten verschoben wird. Aus diesem Grund ist es wichtig, `width` und `height` Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width` und `height` Attribute eines Bildes auf einem HTML {{htmlelement("img")}} Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios#adjusting_aspect_ratios_of_replaced_elements) durch den Browser vor dem Laden berechnet werden. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, wodurch eine Layoutverschiebung vermieden oder reduziert wird, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Die Reduzierung der Layoutverschiebung ist ein wesentlicher Bestandteil eines guten Benutzererlebnisses und der Web-Performance.

Browser beginnen mit dem Rendern von Inhalten, während HTML geparst wird, oft bevor alle Assets, einschließlich Bilder, heruntergeladen sind. Das Einbeziehen von Dimensionen ermöglicht es den Browsern, eine korrekt dimensionierte Platzhalterbox für jedes Bild zu reservieren, das angezeigt wird, wenn die Bilder beim ersten Rendering der Seite geladen werden.

![Zwei Screenshots, der erste ohne Bild, aber mit reserviertem Platz, der zweite zeigt das Bild, das in den reservierten Platz geladen wird.](ar-guide.jpg)

Ohne die `width` und `height` Attribute wird kein Platzhalter erstellt, wodurch ein spürbares {{Glossary("jank", "Ruckeln")}} oder eine Layoutverschiebung auf der Seite auftritt, wenn das Bild nach dem Rendern der Seite geladen wird. Seiten-Umfluss und Neuanstriche sind Performance- und Usability-Probleme.

Die {{Glossary("CLS", "CLS")}} Metrik misst Ruckeln beim Laden der Seite oder wie viel sichtbarer Inhalt sich im Ansichtsfenster verschiebt und um wie viel. Die Hauptverantwortlichen für schlechte CLS sind ersetzte Elemente ohne deklarierte Abmessungen, die sich beim Laden des Assets neu anordnen, einschließlich Bilder, Anzeigen, Einbettungen und iframes ohne Größe oder {{cssxref("aspect-ratio")}} sowie Web-Schriften.

In responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird im Allgemeinen das folgende CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern herausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Obwohl es für responsive Layouts nützlich ist, verursacht es Ruckeln und schlechte CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, da, wenn keine Höheninformationen vorhanden sind, wenn das `<img>` Element geparst wird, aber bevor das Bild geladen ist, dieses CSS effektiv die Höhe auf 0 gesetzt hat. Wenn das Bild nach dem ersten Rendern der Seite auf den Bildschirm geladen wird, fließt und malt die Seite neu und erzeugt eine Layoutverschiebung, da Platz für die neu bestimmte Höhe geschaffen wird.

Browser haben einen Mechanismus zum Festlegen der Bildgrößen, bevor das eigentliche Bild geladen wird. Wenn ein `<img>`, `<video>` oder `<input type="button">` Element `width` und `height` Attribute darauf gesetzt hat, wird sein Seitenverhältnis vor der Ladezeit berechnet und ist dem Browser mit den angegebenen Dimensionen zugänglich.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen, und die korrekte Größe wird auf das `<img>` Element angewandt, was bedeutet, dass das oben erwähnte Ruckeln nicht auftritt oder minimiert wird, wenn die aufgelisteten Dimensionen beim Laden des Bildes nicht vollständig genau sind.

Das Seitenverhältnis wird nur zur Reservierung von Speicherplatz beim Bildladen verwendet. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio` Eigenschaft verwendet, anstatt das Seitenverhältnis von den Attributen. Dies stellt sicher, dass es im richtigen Seitenverhältnis angezeigt wird, auch wenn die Attributdimensionen nicht genau sind.

Während Entwicklerpraktiken aus dem letzten Jahrzehnt möglicherweise empfohlen haben, die `width` und `height` Attribute eines Bildes auf einem HTML {{htmlelement("img")}} wegzulassen, wird aufgrund der Zuordnung des Seitenverhältnisses das Einbeziehen dieser beiden Attribute als eine bewährte Praxis für Entwickler angesehen.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color` Wert setzen, damit jeder überlagerte Inhalt auch vor dem Herunterladen des Bildes lesbar bleibt.

## Fazit

In diesem Abschnitt haben wir uns die Bildoptimierung angesehen. Sie haben nun ein allgemeines Verständnis dafür, wie Sie die Hälfte der durchschnittlichen Bandbreite einer durchschnittlichen Website optimieren können. Dies ist nur eine der Arten von Medien, die den Bandbreitenverbrauch der Nutzer beeinträchtigen und die Ladezeit der Seite verlangsamen. Lassen Sie uns die Videooptimierung betrachten und die nächsten 20% des Bandbreitenverbrauchs angehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
