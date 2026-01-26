---
title: "@media"
slug: Web/CSS/Reference/At-rules/@media
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) anzuwenden. Damit können Sie eine Media Query und einen Block von CSS angeben, der nur dann auf das Dokument angewendet wird, wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Schnittstelle abgerufen werden.

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

Die `@media` At-Regel kann entweder auf der obersten Ebene Ihres Codes platziert oder innerhalb einer anderen bedingten Gruppenregel verschachtelt werden.

Für eine Diskussion über die Syntax von Media Queries sehen Sie bitte [Using media queries](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax).

## Beschreibung

Eine Media Query's `<media-query-list>` enthält [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer bei Verwendung des `only` logischen Operators ist der Medientyp optional und der `all` Typ wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Bestimmt für paginierte Materialien und Dokumente, die in der Druckvorschau auf einem Bildschirm angesehen werden. (Bitte sehen Sie [paged media](/de/docs/Web/CSS/Guides/Paged_media) für Informationen zu Formatierungsfragen, die spezifisch für diese Formate sind.)
- `screen`
  - : Hauptsächlich für Bildschirme bestimmt.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet gekennzeichnet und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User-Agenten")}}, des Ausgabegeräts oder der Umgebung.
Ausdrücke für Medienmerkmale testen auf ihre Anwesenheit, ihren Wert oder einen Wertebereich und sind völlig optional. Jeder Ausdruck für ein Medienmerkmal muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt es irgendein verfügbares Eingabegerät, dass der Benutzer über Elemente schwebt?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät eine Zeigervorrichtung, und wenn ja, wie genau ist sie?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breit-zu-Hoch {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts, oder null, wenn das Gerät keine Farbe hat.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbskala, die vom User-Agenten und Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Look-Up-Tabelle des Ausgabegeräts, oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breit-zu-Hoch Seitenverhältnis des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Anzeigefläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, das heißt, ob das Ansichtsfenster in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Anzeigefläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [fullscreen](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#picture-in-picture) Modus. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agenten und dem Ausgabegerät unterstützt wird. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User-Agent die Farbpalette einschränkt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Erkennen, ob das Gerät eine bestimmte Anzahl von Ansichtsfenstersegmenten hat, die horizontal angeordnet sind.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt es das primäre Eingabegerät, dass der Benutzer über Elemente schwebt?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User-Agent oder das zugrunde liegende Betriebssystem Farben? Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Datenpuffer des Ausgabegeräts, oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Ausrichtung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie handhabt das Ausgabegerät den Inhalt, der das Ansichtsfenster entlang der Block-Achse überläuft?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der das Ansichtsfenster entlang der Inline-Achse überläuft, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabegerät eine Zeigervorrichtung und, wenn ja, wie genau ist sie?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennen, ob der Benutzer das System aufgefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennen, ob der Benutzer web-Inhalte bevorzugt, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder transluzenten Schichteneffekte auf dem Gerät zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ist die Anzeigeausgabe progressiv oder interlaced?
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennen, ob Scripting (d.h. JavaScript) verfügbar ist. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennen, ob das Gerät rechteckige oder runde Displays hat.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild von Inhalten ändern.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Erkennen, ob das Gerät eine bestimmte Anzahl von Ansichtsfenstersegmenten hat, die vertikal angeordnet sind. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User-Agenten und dem Ausgabegerät unterstützt wird. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie das [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Merkmal mit der `dppx` Einheit stattdessen.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit` -präfixiertes CSS {{cssxref("animation")}}. Verwenden Sie die [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Abfrage stattdessen.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie das [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Merkmal mit der `dppx` Einheit stattdessen.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit` präfixierte 2D CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Abfrage stattdessen.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit` präfixierte 3D CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Abfrage stattdessen.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit` -präfixiertes CSS {{cssxref("transition")}}. Verwenden Sie die [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Abfrage stattdessen.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen.
Sie können auch mehrere Media Queries kombinieren, indem Sie sie mit Kommata trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzigen Media Query zu kombinieren, wobei jede verknüpfte Funktion `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verknüpfen.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren, wobei `true` zurückgegeben wird, wenn die Abfrage andernfalls `false` zurückgeben würde.
    In einer durch Kommas getrennten Liste von Abfragen negiert es nur die spezifische Abfrage, für die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not` Schlüsselwort nicht verwendet werden, um einen einzelnen Ausdruck für ein Medienmerkmal zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn Sie `only` nicht verwenden, wird die Abfrage `screen and (width <= 500px)` von älteren Browsern als `screen` interpretiert, und der Rest der Abfrage wird ignoriert, sodass die Stile auf allen Bildschirmen angewendet werden.
    Wenn Sie den `only` Operator verwenden, müssen Sie auch einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Medienanweisung `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or` Operator.
- `or`
  - : Entspricht dem `,` Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent Client-Hinweise

Einige Media Queries haben entsprechende [User-Agent Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints).
Diese sind HTTP-Header, die Inhalte anfordern, die für die speziellen Medienanforderungen vorab optimiert sind.
Sie beinhalten {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um bestmöglich auf Menschen einzugehen, die die Textgröße einer Website anpassen, verwenden Sie [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Ziehen Sie auch Media Queries oder [HTTP User-Agent Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) in Betracht, um die Benutzererfahrung zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animationen oder Bewegungen basierend auf den Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten und damit auch in die Merkmale und das Design des Geräts bieten, mit dem der Benutzer arbeitet, besteht das Potenzial, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder zumindest in einem Detailgrad kategorisiert, der für Benutzer unerwünscht sein könnte.

Aufgrund dieses Potenzials könnte ein Browser beschließen, die zurückgegebenen Werte in gewisser Weise zu manipulieren, um zu verhindern, dass sie zur genauen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn die Firefox-Einstellung "Resist Fingerprinting" aktiviert ist, melden viele Media Queries Standardwerte anstelle von Werten, die den tatsächlichen Zustand des Geräts darstellen.

## Beispiele

### Testen für Print- und Screen-Medientypen

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

Die Bereichssyntax ermöglicht weniger ausführliche Media Queries beim Testen eines beliebigen Features, das einen Bereich akzeptiert, wie in den untenstehenden Beispielen gezeigt:

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

Für weitere Beispiele siehe bitte [Using media queries](/de/docs/Web/CSS/Guides/Media_queries/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [Using media queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- CSS {{cssxref("@custom-media")}} At-Regel
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
