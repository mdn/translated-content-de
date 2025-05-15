---
title: "Multimedia: Bilder"
slug: Learn_web_development/Extensions/Performance/Multimedia
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}

Medien, nämlich Bilder und Videos, machen über 70% der heruntergeladenen Bytes für die durchschnittliche Website aus. In Bezug auf die Download-Performance ist das Eliminieren von Medien und Reduzieren der Dateigröße der naheliegende Schritt. Dieser Artikel betrachtet die Optimierung von Bildern und Videos zur Verbesserung der Web-Performance.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, und grundlegende Kenntnisse von
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >clientseitigen Webtechnologien</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen Sie die verschiedenen Bildformate, ihre Auswirkungen auf die Performance und wie Sie die Auswirkungen von Bildern auf die gesamte Ladezeit der Seite reduzieren können.
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Dies ist eine allgemeine Einführung in die Optimierung der Medienübertragung im Web, die allgemeine Prinzipien und Techniken abdeckt. Für einen ausführlicheren Leitfaden siehe <https://web.dev/learn/images>.

## Warum sollten Sie Ihr Multimedia optimieren?

Für die durchschnittliche Website stammen [51% der Bandbreite von Bildern, gefolgt von Videos mit 25%](https://discuss.httparchive.org/t/state-of-the-web-top-image-optimization-strategies/1367), daher ist es wichtig, Ihr Multimedia-Inhalt anzugehen und zu optimieren.

Sie müssen den Datenverbrauch berücksichtigen. Viele Personen haben begrenzte Datenpläne oder zahlen sogar nach Verbrauch, wobei sie buchstäblich pro Megabyte zahlen. Dies ist auch kein Problem nur in Schwellenmärkten. Stand 2018 nutzen immer noch 24% des Vereinigten Königreichs Prepaid-Tarife gemäß [OFCOM Nations & Regions Technology Tracker - H1 2018 (PDF)](https://www.ofcom.org.uk/siteassets/resources/documents/research-and-data/technology-research/technology-tracker/technology-tracker-h1-2018-data-tables?v=323142).

Außerdem müssen Sie den Speicher berücksichtigen, da viele mobile Geräte nur begrenzten RAM haben. Es ist wichtig zu bedenken, dass Bilder, wenn sie heruntergeladen werden, im Speicher gespeichert werden müssen.

## Optimierung der Bildübertragung

Trotz des großen Bandbreiteneinsatzes ist die Auswirkung des Bilddownloads auf die [wahrgenommene Performance](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) weit geringer als viele erwarten (vor allem, weil der Seitentext sofort heruntergeladen wird und Benutzer die Bilder sehen können, während sie gerendert werden). Dennoch ist es für eine gute Benutzererfahrung wichtig, dass ein Besucher sie so schnell wie möglich sehen kann.

### Lade-Strategie

Eine der größten Verbesserungen für die meisten Websites besteht darin, [Lazy-Loading](/de/docs/Web/Performance/Guides/Lazy_loading) für Bilder unterhalb des Folds zu nutzen, anstatt sie alle beim ersten Seitenaufruf herunterzuladen, unabhängig davon, ob ein Besucher sie durch Scrollen sehen möchte oder nicht. Browser unterstützen dies nativ über das [`loading="lazy"`](/de/docs/Web/HTML/Reference/Elements/img#loading) Attribut auf dem `<img>` Element, und es gibt auch viele clientseitige JavaScript-Bibliotheken, die dies tun können.

Abgesehen davon, dass nur eine Teilmenge an Bildern geladen wird, sollten Sie sich das Format der Bilder selbst ansehen:

- Laden Sie die optimalen Dateiformate?
- Haben Sie die Bilder gut komprimiert?
- Laden Sie die richtige Größe?

#### Das optimale Format

Das optimale Dateiformat hängt in der Regel vom Charakter des Bildes ab.

> [!NOTE]
> Allgemeine Informationen zu Bildtypen finden Sie im [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)

Das [SVG](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) Format ist besser geeignet für Bilder, die wenige Farben haben und nicht fotorealistisch sind. Dies erfordert, dass die Quelle als Vektorgrafikformat vorliegt. Sollte ein solches Bild nur als Bitmap existieren, wäre [PNG](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) das Backup-Format. Beispiele für solche Motive sind Logos, Illustrationen, Diagramme oder Icons (Hinweis: SVGs sind viel besser als Icon-Schriftarten!). Beide Formate unterstützen Transparenz.

PNGs können mit drei verschiedenen Ausgangskombinationen gespeichert werden:

- 24-Bit-Farbe + 8-Bit-Transparenz — bieten volle Farbgenauigkeit und sanfte Transparenz auf Kosten der Größe. Sie möchten wahrscheinlich diese Kombination zugunsten von WebP vermeiden (siehe unten).
- 8-Bit-Farbe + 8-Bit-Transparenz — bieten nicht mehr als 255 Farben, aber erhalten sanfte Transparenzen. Die Größe ist nicht zu groß. Das sind wahrscheinlich die PNGs, die Sie wollen.
- 8-Bit-Farbe + 1-Bit-Transparenz — bieten nicht mehr als 255 Farben und bieten pro Pixel nur keine oder volle Transparenz, was die Transparenzränder hart und gezackt erscheinen lässt. Die Größe ist klein, der Preis jedoch visueller Treue.

Ein gutes Online-Tool zur Optimierung von SVGs ist [SVGOMG](https://jakearchibald.github.io/svgomg/). Für PNGs gibt es [ImageOptim online](https://imageoptim.com/online) oder [Squoosh](https://squoosh.app/).

Bei fotografischen Motiven, die keine Transparenz aufweisen, gibt es eine viel größere Auswahl an Formaten. Wenn Sie auf Nummer sicher gehen wollen, sollten Sie gut komprimierte **Progressive JPEGs** verwenden. Progressive JPEGs, im Gegensatz zu normalen JPEGs, rendern progressiv (daher der Name), was bedeutet, dass der Benutzer eine niedrig aufgelöste Version sieht, die an Klarheit gewinnt, während das Bild heruntergeladen wird, anstatt das Bild in voller Auflösung von oben nach unten zu laden oder rendert nur einmal vollständig heruntergeladen. Ein guter Kompressor hierfür wäre MozJPEG, z.B. verfügbar in dem Online-Bildoptimierungstool [Squoosh](https://squoosh.app/). Eine Qualitätseinstellung von 75% sollte anständige Ergebnisse liefern.

Andere Formate verbessern die Fähigkeiten von JPEG in Bezug auf die Komprimierung, sind aber nicht in jedem Browser verfügbar:

- [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder. WebP bietet eine viel bessere Komprimierung als PNG oder JPEG mit Unterstützung für höhere Farbtiefen, animierte Frames, Transparenz usw. (aber keine progressive Anzeige). Unterstützt von allen wichtigen Browsern außer Safari 14 auf macOS Desktop Big Sur oder früher.

  > [!NOTE]
  > Obwohl Apple [die Unterstützung für WebP in Safari 14 angekündigt hat](https://developer.apple.com/videos/play/wwdc2020/10663/?time=1174), zeigen Safari-Versionen vor 16.0 `.webp`-Bilder nicht erfolgreich auf macOS-Desktop-Versionen früher als 11/Big Sur an. Safari für iOS 14 zeigt `.webp`-Bilder jedoch erfolgreich an.

- [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund des hohen Leistungsvermögens und des lizenzfreien Bildformats (noch effizienter als WebP, aber nicht so weit verbreitet unterstützt). Es wird jetzt auf Chrome, Edge, Opera und Firefox unterstützt. [Squoosh](https://squoosh.app/) ist ein gutes Online-Tool zum Konvertieren vorheriger Bildformate in AVIF.
- **JPEG2000** — sollte einst der Nachfolger von JPEG werden, wird aber nur in Safari unterstützt. Unterstützt auch keine progressive Anzeige.

Angesichts der begrenzten Unterstützung für JPEG-XR und JPEG2000 und auch unter Berücksichtigung der Dekodierungskosten ist der einzige ernsthafte Konkurrent für JPEG WebP. Aus diesem Grund könnten Sie Ihre Bilder auch in diesem Format anbieten. Dies kann über das `<picture>` Tag mit Hilfe eines `<source>` Elements geschehen, das mit einem [type Attribut](/de/docs/Web/HTML/Reference/Elements/picture#the_type_attribute) ausgestattet ist.

Falls all dies kompliziert klingt oder sich zu arbeitsintensiv für Ihr Team anfühlt, gibt es auch Online-Dienste, die Sie als Bild-CDNs nutzen können und die das automatische Bereitstellen des richtigen Bildformats dynamisch gemäß des Gerätetyps oder Browsers, der das Bild anfordert, übernehmen. Beliebte Optionen sind [Cloudinary](https://cloudinary.com/blog/make_all_images_on_your_website_responsive_in_3_easy_steps), [Image Engine](https://imageengine.io/), [ImageKit](https://imagekit.io/docs/image-optimization#automatic-format-conversion) und [imgix](https://www.imgix.com/).

Sollten Sie schließlich animierte Bilder auf Ihrer Seite einbinden wollen, wissen Sie, dass Safari die Verwendung von Videodateien innerhalb von `<img>` und `<picture>` Elementen erlaubt. Diese ermöglichen es Ihnen auch, ein **Animiertes WebP** für alle anderen modernen Browser hinzuzufügen.

```html
<picture>
  <source type="video/mp4" src="giphy.mp4" />
  <source type="image/webp" src="giphy.webp" />
  <img src="giphy.gif" alt="A GIF animation" />
</picture>
```

#### Die optimale Größe bereitstellen

Bei der Bildübertragung wird der Ansatz "eine Größe passt für alle" nicht die besten Ergebnisse liefern. Das bedeutet, dass Sie für kleinere Bildschirme Bilder mit kleinerer Auflösung und umgekehrt für größere Bildschirme bereitstellen möchten. Darüber hinaus möchten Sie auch hochauflösende Bilder an jene Geräte liefern, die einen High-DPI-Bildschirm (z.B. "Retina") besitzen. Abgesehen davon, dass Sie viele Zwischenbildvarianten erstellen, benötigen Sie auch eine Möglichkeit, die richtige Datei an den richtigen Browser zu liefern. Dazu müssten Sie Ihre `<picture>` und `<source>` Elemente mit [`media`](/de/docs/Web/HTML/Reference/Elements/source#media) und/oder [`sizes`](/de/docs/Web/HTML/Reference/Elements/source#sizes) Attributen erweitern. Der Artikel [Responsive images done right: A guide to `<picture>` and `srcset`](https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/) erklärt im Detail, wie all diese Attribute kombiniert werden können.

Zwei interessante Effekte, an die Sie bei hohen DPI-Bildschirmen denken sollten:

- Mit einem High-DPI-Bildschirm erkennen Menschen Komprimierungsartefakte viel später, was bedeutet, dass Sie für Bilder, die für diese Bildschirme gedacht sind, die Komprimierung über das Übliche hinaus erhöhen können.
- [Nur sehr wenige Menschen können eine Erhöhung der Auflösung über 2× DPI hinaus erkennen](https://observablehq.com/@eeeps/visual-acuity-and-device-pixel-ratio), was bedeutet, dass Sie keine Bilder bereitstellen müssen, die höher als 2× auflösen.

#### Priorität (und Reihenfolge) des Bilddownloads steuern

Die wichtigsten Bilder vor den weniger wichtigen Besuchern anzeigen zu lassen, kann die wahrgenommene Leistung verbessern.

Das Erste, was zu überprüfen ist, dass Ihre Inhaltsbilder `<img>` oder `<picture>` Elemente verwenden und Ihre Hintergrundbilder in CSS mit `background-image` definiert sind — Bilder, die in `<img>` Elementen referenziert werden, erhalten eine höhere Ladepriorität als Hintergrundbilder.

Zweitens, mit der Einführung der Priority Hints, können Sie die Priorität weiter steuern, indem Sie ein `fetchPriority` Attribut zu Ihren Bild-Tags hinzufügen. Ein Anwendungsfall für Prioritätshinweise bei Bildern sind Karusselle, bei denen das erste Bild eine höhere Priorität hat als die nachfolgenden Bilder.

### Rendering Stratagie: Jank beim Laden von Bildern verhindern

Da Bilder asynchron geladen werden und auch nach dem ersten Rendern weiter geladen werden, können sie, wenn ihre Abmessungen vor dem Laden nicht definiert sind, zu einem Reflow auf der Seite führen. Zum Beispiel, wenn Text durch Bilder, die geladen werden, auf der Seite nach unten geschoben wird. Aus diesem Grund ist es wichtig, `width` und `height` Attribute festzulegen, damit der Browser Platz für sie im Layout reservieren kann.

Wenn die `width` und `height` Attribute eines Bildes in einem HTML {{htmlelement("img")}} Element enthalten sind, kann das [Seitenverhältnis des Bildes](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio#adjusting_aspect_ratios_of_replaced_elements) vom Browser vor dem Laden des Bildes berechnet werden. Dieses {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, wodurch ein Layoutversatz reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf dem Bildschirm dargestellt wird. Die Reduzierung des Layout-Wechsels ist ein wichtiger Bestandteil eines guten Benutzererlebnisses und der Web-Performance.

Browser beginnen damit, Inhalte zu rendern, sobald HTML analysiert wird, oft bevor alle Ressourcen, einschließlich Bilder, heruntergeladen wurden. Das Einfügen von Abmessungen ermöglicht es den Browsern, einen korrekt dimensionierten Platzhalterkasten für jedes Bild zu reservieren, der erscheint, wenn die Bilder geladen werden, während die Seite zuerst gerendert wird.

![Zwei Screenshots, der erste ohne ein Bild, aber mit reserviertem Platz, der zweite zeigt das Bild, das in den reservierten Platz geladen wurde.](ar-guide.jpg)

Ohne die `width` und `height` Attribute wird kein Platzhalterraum erstellt, was auf der Seite beim Laden des Bildes nach dem Rendern der Seite zu einem bemerkbaren {{Glossary("jank", "Jank")}} oder Layoutverschiebung führt. Seiten-RefloAnd -Repaints sind Performance- und Usability-Themen.

Die {{Glossary("CLS", "CLS")}} Metrik misst Jank beim Seitenladen oder wie stark sichtbarer Inhalt im Viewport verschoben wird und um wie viel. Die Hauptverursacher von schlechtem CLS sind ersetzte Elemente ohne deklarierte Abmessungen, die bei geladenen Ressourcen wie Bildern, Anzeigen, Embeds und Iframes ohne Größe oder {{cssxref("aspect-ratio")}} und Webfonts reflowen.

Bei responsiven Designs, wenn ein Container schmaler als ein Bild ist, wird im Allgemeinen das folgende CSS verwendet, um zu verhindern, dass Bilder aus ihren Containern herausbrechen:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Während dies für responsive Layouts nützlich ist, verursacht es Jank und schlechten CLS, wenn Breiten- und Höheninformationen nicht enthalten sind, denn wenn keine Höheninformationen vorhanden sind, wenn das `<img>` Element analysiert wird, bevor das Bild geladen wird, hat dieses CSS die Höhe auf 0 gesetzt. Wenn das Bild geladen wird, nachdem die Seite bereits auf den Bildschirm gerendert wurde, erfolgt ein Seitenrefow und Repaint, wodurch ein Layout-Verschiebung entsteht, da es Platz für die neu bestimmte Höhe schafft.

Browser haben einen Mechanismus zur Größenbestimmung von Bildern vor dem tatsächlichen Laden des Bildes. Wenn ein `<img>`, `<video>` oder `<input type="button">` Element Breiten- und Höhenattribute gesetzt hat, wird sein Seitenverhältnis vor der Ladezeit berechnet und steht dem Browser mit den bereitgestellten Abmessungen zur Verfügung.

Das Seitenverhältnis wird dann zur Berechnung der Höhe verwendet, und folglich wird die korrekte Größe auf das `<img>` Element angewendet, was bedeutet, dass der oben erwähnte Jank nicht auftritt oder minimal ist, wenn die aufgelisteten Abmessungen nicht vollständig genau sind, wenn das Bild geladen wird.

Das Seitenverhältnis wird nur verwendet, um Platz für die Bildladung zu reservieren. Sobald das Bild geladen ist, wird das intrinsische Seitenverhältnis des geladenen Bildes oder der Wert der `aspect-ratio` Eigenschaft verwendet, anstelle des Seitenverhältnisses aus den Attributen. So wird sichergestellt, dass es im korrekten Seitenverhältnis dargestellt wird, selbst wenn die Attributmaße nicht genau sind.

Während Entwickler-Best Practices aus dem letzten Jahrzehnt möglicherweise empfohlen haben, die `width` und `height` Attribute eines Bildes auf einem HTML {{htmlelement("img")}} Element wegzulassen, wird aufgrund der Zuordnung des Seitenverhältnisses das Einhalten dieser beiden Attribute als Entwickler-Best-Practice betrachtet.

Für alle Hintergrundbilder ist es wichtig, dass Sie einen `background-color` Wert festlegen, damit jeglicher darüber liegender Inhalt lesbar bleibt, bevor das Bild geladen wurde.

## Fazit

In diesem Abschnitt haben wir uns die Bildoptimierung angesehen. Sie haben jetzt ein allgemeines Verständnis davon, wie man die Nutzung von durchschnittlich der Hälfte der durchschnittlichen Bandbreitennutzung einer Website optimiert. Dies ist nur eine der Arten von Medien, die die Bandbreite der Nutzer beanspruchen und die Seitenladegeschwindigkeit verlangsamen. Als nächstes schauen wir uns die Video-Optimierung an, die nächsten 20% des Bandbreitenverbrauchs zu bewältigen.

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/measuring_performance", "Learn_web_development/Extensions/Performance/video", "Learn_web_development/Extensions/Performance")}}
