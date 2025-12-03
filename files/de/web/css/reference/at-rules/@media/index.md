---
title: "@media"
slug: Web/CSS/Reference/At-rules/@media
l10n:
  sourceCommit: 3ee2355c3c90cf92c3119b82f8ebfa5d16c91c53
---

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) anzuwenden. Damit spezifizieren Sie eine Media Query und einen Block von CSS, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln mit der [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Schnittstelle abgerufen werden.

{{InteractiveExample("CSS Demo: @media", "tabbed-standard")}}

```css interactive-example
abbr {
  color: #860304;
  font-weight: bold;
  transition: color 0.5s ease;
}

@media (hover: hover) {
  abbr:hover {
    color: #001ca8;
    transition-duration: 0.5s;
  }
}

@media not all and (hover: hover) {
  abbr::after {
    content: " (" attr(title) ")";
  }
}
```

```html interactive-example
<p>
  <abbr title="National Aeronautics and Space Administration">NASA</abbr> is a
  U.S. government agency that is responsible for science and technology related
  to air and space.
</p>
```

## Syntax

```css
/* At the top level of your code */
@media screen and (width >= 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (width >= 900px) {
    article {
      display: flex;
    }
  }
}
```

Die `@media`-At-Regel kann entweder auf oberster Ebene Ihres Codes oder verschachtelt innerhalb jeder anderen bedingten Gruppenregel platziert werden.

Für eine Diskussion der Media Query-Syntax, siehe bitte [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax).

## Beschreibung

Eine Media Query-Liste `<media-query-list>` enthält [`<media-type>`s](#medientypen), [`<media-feature>`s](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Mit Ausnahme der Verwendung des `only`-Logikoperators ist der Medientyp optional und der `all`-Typ wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Beabsichtigt für seitenorientiertes Material und Dokumente, die auf einem Bildschirm im Druckvorschau-Modus angezeigt werden. (Bitte siehe [Paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media) für Informationen zu Formatierungsproblemen, die für diese Formate spezifisch sind.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`, aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) veraltet und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User-Agents")}}, Ausgabegeräts oder der Umgebung.
Medienmerkmalsausdrücke prüfen auf deren Vorhandensein, Wert oder Wertebereich und sind vollständig optional. Jeder Medienmerkmalsausdruck muss in Klammern eingeschlossen sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät, und falls ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Reichweite der Farben, die vom User-Agent und dem Ausgabegerät unterstützt werden.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbwiedergabetabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe Seitenverhältnis des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Anzeigefläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, also ob der Viewport in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Anzeigefläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [Vollbild](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#fullscreen) oder [Bild-in-Bild](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User-Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmapschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Erkennt, ob das Gerät eine angegebene Anzahl von Viewport-Segmenten horizontal anordnet.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Kehrt der User-Agent oder das zugrunde liegende Betriebssystem Farben um?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Rahmenpuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie verarbeitet das Ausgabegerät Inhalt, der über den Viewport entlang der Blockachse hinausgeht?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der über den Viewport entlang der Inline-Achse hinausgeht, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und falls ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System gebeten hat, den Kontrast zwischen angrenzenden Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die durchscheinenden oder transparenten Schichteffekte auf dem Gerät zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Bildschirmausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Skripte (d.h. JavaScript) verfügbar sind.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Anzeigen zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Aussehen von Inhalten ändern kann.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Erkennt, ob das Gerät eine angegebene Anzahl von Viewport-Segmenten vertikal anordnet. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User-Agents und des Ausgabegeräts unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports, einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen das Merkmal [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-gekennzeichnete CSS {{cssxref("animation")}}. Verwenden Sie stattdessen die Merkmalabfrage [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen das Merkmal [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-gekennzeichnete 2D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die Merkmalabfrage [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-gekennzeichnete 3D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die Merkmalabfrage [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-gekennzeichnete CSS {{cssxref("transition")}}. Verwenden Sie stattdessen die Merkmalabfrage [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports).

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen.
Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie durch Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzigen Media Query zu kombinieren, wobei jedes verknüpfte Merkmal `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verbinden.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren und `true` zurückzugeben, wenn die Abfrage ansonsten `false` wäre.
    Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, wird nur die spezifische Abfrage negiert, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das Schlüsselwort `not` nicht verwendet werden, um einen einzelnen Medienmerkmalsausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Gilt eine Art nur, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Ohne die Verwendung von `only` würden ältere Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren, den Rest der Abfrage ignorieren und ihre Stile auf alle Bildschirme anwenden.
    Wenn Sie den Operator `only` verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird unabhängig von den anderen behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Medienanweisung `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or` Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent-Client-Hinweise

Einige Media Queries haben entsprechende [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints).
Dies sind HTTP-Header, die Inhalte anfordern, die für die spezifische Medienanforderung voroptimiert sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Personen, die die Textgröße einer Website anpassen, am besten zu unterstützen, verwenden Sie [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Browser-Textgröße ändert.

Denken Sie auch an Media Queries oder [HTTP User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um die Benutzererfahrung zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um je nach Benutzerpräferenz die Menge an Animationen oder Bewegungen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten—und somit in die Merkmale und das Design—des Geräts geben, das der Benutzer verwendet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerabdruck\"")}} zu erstellen, der das Gerät identifiziert oder zumindest in einem Detailgrad kategorisiert, der für Benutzer unerwünscht sein kann.

Aufgrund dieses Potentials kann ein Browser beschließen, die zurückgegebenen Werte in irgendeiner Weise zu verschleiern, um zu verhindern, dass sie verwendet werden, um einen Computer präzise zu identifizieren. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn die "Resist Fingerprinting"-Einstellung von Firefox aktiviert ist, melden viele Media Queries Standardwerte anstelle von Werten, die den tatsächlichen Gerätezustand darstellen.

## Beispiele

### Testen von Druck- und Bildschirmmedientypen

```css
@media print {
  body {
    font-size: 10pt;
  }
}

@media screen {
  body {
    font-size: 13px;
  }
}

@media screen, print {
  body {
    line-height: 1.2;
  }
}
```

Die Bereichs-Syntax ermöglicht weniger ausführliche Media Queries beim Testen von Merkmalen, die einen Bereich akzeptieren, wie in den folgenden Beispielen gezeigt:

```css
@media (height > 600px) {
  body {
    line-height: 1.4;
  }
}

@media (400px <= width <= 700px) {
  body {
    line-height: 1.4;
  }
}
```

Für weitere Beispiele siehe bitte [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- CSS [`@custom-media`](/de/docs/Web/CSS/Reference/At-rules/@custom-media) At-Regel
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
