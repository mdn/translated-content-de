---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: 31ff21cf5f083a3258fc04267d54b1fb72224ff6
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, insbesondere Bilder und Videos, machen über 70 % der heruntergeladenen Bytes für die durchschnittliche Website aus. In Bezug auf die Download-Performance sind das Eliminieren von Medien und das Reduzieren der Dateigröße das naheliegendste Ziel. Dieser Artikel befasst sich mit der Optimierung von Bildern und Videos zur Verbesserung der Web-Performance.

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
          >Clientseitige Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie die verschiedenen Bildformate, ihre Auswirkungen auf die Leistung und wie man die Auswirkungen von Bildern auf die Gesamtseitenladezeit reduzieren kann.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine Einführung auf hoher Ebene zur Optimierung der Bereitstellung von Multimedia im Web und deckt allgemeine Prinzipien und Techniken ab. Für einen ausführlicheren Leitfaden sehen Sie <https://web.dev/learn/images>.

## Warum sollte man Multimedia optimieren?

Für die durchschnittliche Website stammen [51 % der Bandbreite aus Bildern, gefolgt von Video mit 25 %](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, Ihr Multimedia-Content zu adressieren und zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Menschen sind auf datenbeschränkten Verträgen oder sogar auf Prepaid-Plänen, wo sie buchstäblich pro Megabyte bezahlen. Dies ist auch kein Problem nur in aufstrebenden Märkten. Im Jahr 2018 nutzten laut [OFCOM Nations & regions technology tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142) 24 % des Vereinigten Königreichs immer noch Prepaid-Tarife.

Sie müssen auch den Speicher berücksichtigen, da viele mobile Geräte über begrenzten RAM verfügen. Es ist wichtig zu bedenken, dass Bilder im Speicher gespeichert werden müssen, sobald sie heruntergeladen werden.

## Optimierung der Bildbereitstellung

Trotz des hohen Bandbreitenverbrauchs ist die Auswirkung des Bilddownloads auf die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer als viele erwarten (hauptsächlich, weil der Textinhalt der Seite sofort heruntergeladen wird und die Nutzer die Bilder sehen können, während sie geladen werden). Für ein gutes Benutzererlebnis ist es jedoch dennoch wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites ist das [Lazy-loading](/de/docs/Web/Performance/Guides/Lazy_loading) von Bildern unterhalb der Falte, anstatt sie alle beim ersten Seitenaufruf herunterzuladen, egal ob ein Besucher hinunterscrollt, um sie zu sehen, oder nicht. Browser bieten dies nativ über das [`loading="lazy"`](/de/docs/Web/HTML/Element/img#loading)-Attribut auf dem `<img>`-Element an, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies tun können.

Unabhängig von der Lade-Teilmenge der Bilder sollten Sie auch das Format der Bilder selbst betrachten:

- Laden Sie die optimalsten Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtigen Größen?

#### Das optimalste Format

Das optimale Dateiformat hängt typischerweise vom Charakter des Bildes ab.

> [!NOTE]
> Für allgemeine Informationen über Bildtypen siehe den [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics)-Format eignet sich besser für Bilder, die wenige Farben haben und nicht fotorealistisch sind. Dies erfordert, dass die Quelle in einem Vektorgrafikformat verfügbar ist. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das zu wählende Ausweichformat. Beispiele für diese Arten von Motiven sind Logos, Illustrationen, Diagramme oder Symbole (Hinweis: SVGs sind weitaus besser als Iconschriften!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgabekombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bietet vollständige Farbgenauigkeit und sanfte Transparenz auf Kosten der Größe. Sie möchten wahrscheinlich diese Kombination zugunsten von WebP vermeiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bietet nicht mehr als 255 Farben, behält jedoch sanfte Transparenzen bei. Die Größe ist nicht zu groß. Das sind die PNGs, die Sie wahrscheinlich wollen.
- 8-Bit-Farbe + 1-Bit-Transparenz — bietet nicht mehr als 255 Farben und nur keine oder vollständige Transparenz pro Pixel, wodurch die Transparenzränder hart und gezackt erscheinen. Die Größe ist klein, aber der Preis ist visuelle Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei Fotomotiven, die keine Transparenz aufweisen, gibt es eine viel größere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen wollen, entscheiden Sie sich für gut komprimierte **Progressive JPEGs**. Progressive JPEGs, im Gegensatz zu normalen JPEGs, werden progressiv gerendert (daher der Name), was bedeutet, dass der Benutzer eine niedrigauflösende Version sieht, die klarer wird, während das Bild heruntergeladen wird, anstatt dass das Bild von oben nach unten oder erst beim vollständigen Herunterladen in voller Auflösung geladen wird. Ein guter Kompressor hierfür wäre MozJPEG, z. B. verfügbar im Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75 % sollte anständige Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG hinsichtlich der Kompression, sind jedoch nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder. WebP bietet eine viel bessere Kompression als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Rahmen, Transparenz usw. (aber keine progressive Darstellung.). Wird von allen großen Browsern mit Ausnahme von Safari 14 auf macOS-Desktop Big Sur oder früher unterstützt.

  > [!NOTE]
  > Trotz der Ankündigung von Apple [Unterstützung für WebP in Safari 14](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174), zeigen Safari-Versionen früher als 16.0 keine `.webp`-Bilder erfolgreich auf macOS-Desktop-Versionen früher als 11/Big Sur. Safari für iOS 14 zeigt `.webp`-Bilder jedoch erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund des leistungsstarken und lizenzgebührenfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt auf Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool, um frühere Bildformate in AVIF zu konvertieren.
- **JPEG2000** — sollte der Nachfolger von JPEG sein, wird jedoch nur in Safari unterstützt. Unterstützung für progressive Darstellung fehlt ebenfalls.

Angesichts der geringen Unterstützung von JPEG-XR und JPEG2000 und unter Berücksichtigung der Dekodierungskosten ist der einzige ernstzunehmende Konkurrent für JPEG WebP. Daher könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>`-Element mit Hilfe eines `<source>`-Elements erfolgen, das über ein [type-Attribut](/de/docs/Web/HTML/Element/picture#the_type_attribute) verfügt.

Wenn all dies ein wenig kompliziert erscheint oder wie zu viel Arbeit für Ihr Team, gibt es auch Online-Dienste, die Sie als Bild-CDNs verwenden können, die die automatische Bereitstellung des richtigen Bildformats je nach Art des Geräts oder Browsers, der das Bild anfordert, bedienen. Beliebte Auswahlmöglichkeiten sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Schließlich, wenn Sie animierte Bilder auf Ihrer Seite hinzufügen möchten, wissen Sie, dass Safari die Verwendung von Video-Dateien innerhalb von `<img>` und `<picture>`-Elementen zulässt. Diese ermöglichen es Ihnen auch, eine **Animated WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Bereitstellung der optimalen Größe

Bei der Bereitstellung von Bildern führt die "One-Size-Fits-All"-Lösung nicht zu den besten Ergebnissen. Das bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung bereitstellen möchten und umgekehrt für größere Bildschirme. Darüber hinaus möchten Sie höhere Auflösung für diejenigen Geräte bereitstellen, die einen Bildschirm mit hoher DPI (z. B. "Retina") haben. Abgesehen davon, dass Sie viele Zwischenbildvarianten erstellen, benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. Dazu müssen Sie die `<picture>`- und `<source>`-Elemente mit [media](/de/docs/Web/HTML/Element/source#media) und/oder [sizes](/de/docs/Web/HTML/Element/source#sizes) Attributen aufrüsten. Ein ausführlicher Artikel, wie man all diese Attribute kombiniert, finden Sie [hier](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/).

Zwei interessante Effekte, die Sie bei Hoch-DPI-Bildschirmen beachten sollten, sind:

- Mit einem Hoch-DPI-Bildschirm erkennen Menschen Komprimierungsartefakte viel später, was bedeutet, dass Sie für Bilder, die für diese Bildschirme bestimmt sind, die Komprimierung über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder bereitstellen müssen, die höher als 2× aufgelöst sind.

#### Steuerung der Priorität (und Reihenfolge) beim Herunterladen von Bildern

Wichtige Bilder schneller als weniger wichtige vor Besuchern anzuzeigen, kann die wahrgenommene Performance verbessern.

Das Erste, was zu überprüfen ist, ist, dass Ihre Inhaltsbilder `<img>`- oder `<picture>`-Elemente verwenden, und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>`-Elementen referenziert sind, erhalten eine höhere Ladepriorität als Hintergrundbilder.

Zweitens können Sie mit der Einführung von Priority Hints die Priorität weiter steuern, indem Sie ein `fetchPriority`-Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsfall für Prioritätshinweise für Bilder sind Karussells, bei denen das erste Bild eine höhere Priorität als die nachfolgenden Bilder hat.

### Rendering-Strategie: Verhinderung von Ruckeln beim Laden von Bildern

Da Bilder asynchron geladen werden und nach dem ersten Anstrich weitergeladen werden, können sie, wenn ihre Abmessungen vor dem Laden nicht definiert sind, Umflows des Seiteninhalts verursachen. Zum Beispiel, wenn Text durch das Laden von Bildern nach unten auf der Seite geschoben wird. Aus diesem Grund ist es wichtig, `width` und `height` Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width` und `height` Attribute eines Bildes auf einem HTML {{htmlelement("img")}}-Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser berechnet werden, bevor das Bild geladen wird. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zum Anzeigen des Bildes zu reservieren, wodurch oder sogar verhindert wird, dass ein Layoutwechsel auftritt, wenn das Bild heruntergeladen und auf dem Bildschirm dargestellt wird. Das Reduzieren von Layoutverschiebungen ist eine wichtige Komponente für ein gutes Benutzererlebnis und die Webperformance.

Browser beginnen mit dem Rendern von Inhalten, während HTML analysiert wird, oft bevor alle Ressourcen einschließlich der Bilder heruntergeladen sind. Durch die Angabe von Dimensionen können Browser einen korrekt dimensionierten Platzhalterkasten für jedes Bild reservieren, der erscheint, wenn die Bilder geladen werden, beim ersten Rendern der Seite.

![Zwei Screenshots, der erste ohne ein Bild aber mit reserviertem Platz, der zweite zeigt das Bild, das in den reservierten Platz geladen wurde.](ar-guide.jpg)

Ohne die `width` und `height` Attribute wird kein Platzhalterraum erstellt, was zu einem sichtbaren {{Glossary("jank", "Ruckeln")}} oder Layoutwechsel auf der Seite führt, wenn das Bild nach dem Rendern der Seite geladen wird. Seiten-Umfluss und -Neuzeichnungen sind Leistungs- und Nutzbarkeitsprobleme.

Der {{Glossary("CLS", "CLS")}} Metrik misst das Ruckeln beim Laden der Seite, oder wie stark sichtbarer Inhalt im Ansichtsfenster verschoben wird und um wie viel. Die Hauptursachen für schlechten CLS sind ersetzte Elemente ohne deklarierte Dimensionen, die einen Umfluss verursachen, wenn das Asset geladen wird, einschließlich Bilder, Anzeigen, Embeds und Iframes ohne eine Größe oder {{cssxref("aspect-ratio")}} und Web-Schriften.

Bei responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird normalerweise das folgende CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern herausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Während nützlich für responsive Layouts, verursacht dies Ruckeln und schlechte CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, denn wenn keine Höheninformationen vorhanden sind, wenn das `<img>`-Element analysiert wird, aber bevor das Bild geladen ist, hat dieses CSS die Höhe effektiv auf 0 gesetzt. Wenn das Bild nach dem anfänglichen Rendern der Seite auf den Bildschirm geladen wird, fließt die Seite neu und wird neu gezeichnet, wodurch ein Layoutwechsel entsteht, da es Platz für die neu ermittelte Höhe schafft.

Browser haben einen Mechanismus zum Größen der Bilder vor dem tatsächlichen Laden des Bildes. Wenn auf einem `<img>`, `<video>` oder `<input type="button">`-Element `width` und `height` Attribute gesetzt sind, wird das Seitenverhältnis vor der Ladezeit berechnet und steht dem Browser zur Verfügung, indem die bereitgestellten Dimensionen verwendet werden.

Das Seitenverhältnis wird dann verwendet, um die Höhe zu berechnen und somit die korrekte Größe auf das `<img>`-Element anzuwenden, was bedeutet, dass das zuvor erwähnte Ruckeln nicht auftritt oder minimal ist, wenn die angegebenen Dimensionen nicht vollends korrekt sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur für die Bildreservierung beim Laden verwendet. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio`-Eigenschaft anstelle des Seitenverhältnisses aus den Attributen verwendet. Dies stellt sicher, dass es im korrekten Seitenverhältnis angezeigt wird, auch wenn die Attributdimensionen nicht genau sind.

Während Entwickler Best Practices aus dem letzten Jahrzehnt möglicherweise empfohlen haben, die `width` und `height` Attribute eines Bildes in einem HTML {{htmlelement("img")}} auszuschließen, wird das Hinzufügen dieser beiden Attribute aufgrund der Zuordnung von Seitenverhältnissen als Entwickler-Best Practice angesehen.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color`-Wert festlegen, damit alle überlagerten Inhalte immer noch lesbar sind, bevor das Bild heruntergeladen wurde.

## Fazit

In diesem Abschnitt haben wir uns mit der Bildoptimierung befasst. Sie haben nun ein allgemeines Verständnis dafür, wie man die Hälfte der durchschnittlichen Bandbreitennutzung einer Website optimiert. Dies ist nur eine der Arten von Medien, die die Bandbreite der Nutzer konsumieren und die Seitenladezeit verlangsamen. Schauen wir uns Video-Optimierung an, um die nächsten 20 % des Bandbreitenverbrauchs anzugehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
