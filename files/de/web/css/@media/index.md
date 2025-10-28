---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Mit ihr geben Sie eine Media-Query und einen Block von CSS an, der auf das Dokument angewendet wird, wenn und nur wenn die Media-Query dem Gerät entspricht, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Schnittstelle zugegriffen werden.

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

Die `@media` At-Regel kann auf der obersten Ebene Ihres Codes oder verschachtelt in einer anderen bedingten Gruppenregel platziert werden.

Für eine Diskussion der Media-Query-Syntax, siehe bitte [Verwendung von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Die `<media-query-list>` einer Media-Query umfasst [`<media-type>`s](#medientypen), [`<media-feature>`s](#media_features) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts. Außer bei Verwendung des `only`-Operators ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Bestimmt für paginiertes Material und Dokumente, die auf einem Bildschirm im Druckvorschau-Modus angezeigt werden. (Bitte sehen Sie [paged media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu spezifischen Formatierungsproblemen dieser Formate nach.)
- `screen`
  - : Hauptsächlich für Bildschirme bestimmt.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) veraltet und sollten nicht mehr verwendet werden.

### Media Features

Ein _`<media feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User-Agenten")}}, des Ausgabegerätes oder der Umgebung. Media-Feature-Ausdrücke testen auf ihre Präsenz, ihren Wert oder Bereich von Werten und sind völlig optional. Jeder Media-Feature-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbares Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabemechanismus ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe-{{Glossary("aspect_ratio", "Seitenverhältnis")}} des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät keine Farbe hat.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbpalette, die vom User-Agenten und dem Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbsuch-Tabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe-Seitenverhältnis des Ausgabegeräts. Abgelehnt in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Oberfläche des Ausgabegeräts. Abgelehnt in Media Queries Level 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, das heißt, ob der Viewport in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Oberfläche des Ausgabegeräts. Abgelehnt in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird, beispielsweise [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture). Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agenten und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User-Agent die Farbpalette einschränkt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster oder einen Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten horizontal angeordnet hat.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt das primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Der User-Agent oder das zugrundeliegende Betriebssystem invertiert die Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromatischen Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die entlang der Blockachse über den Viewport hinausreichen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Können Inhalte, die entlang der Inline-Achse über den Viewport hinausgehen, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabemechanismus ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbdesign bevorzugt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um transparente oder transluzente Schichteffekte auf dem Gerät zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Display-Ausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Aussehen von Inhalten ändern kann.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von vertikal angeordneten Viewport-Segmenten hat. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User-Agenten und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie das Feature [`resolution`](/de/docs/Web/CSS/@media/resolution) mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präsentierte CSS-{{cssxref("animation")}}. Verwenden Sie die Feature-Abfrage [`@supports (animation)`](/de/docs/Web/CSS/@supports) stattdessen.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie das Feature [`resolution`](/de/docs/Web/CSS/@media/resolution) mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-präsentierte 2D-CSS-{{cssxref("transform")}}. Verwenden Sie die Feature-Abfrage [`@supports (transform)`](/de/docs/Web/CSS/@supports) stattdessen.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-präsentierte 3D-CSS-{{cssxref("transform")}}. Verwenden Sie die Feature-Abfrage [`@supports (transform)`](/de/docs/Web/CSS/@supports) stattdessen.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-präsentierte CSS-{{cssxref("transition")}}. Verwenden Sie die Feature-Abfrage [`@supports (transition)`](/de/docs/Web/CSS/@supports) stattdessen.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media-Query zu erstellen. Sie können auch mehrere Media-Queries in einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Media-Features in einer einzigen Media-Query zu kombinieren, wobei jede verknüpfte Funktion `true` sein muss, damit die Abfrage `true` ist. Es wird auch verwendet, um Media-Features mit Medientypen zu verbinden.
- `not`
  - : Wird verwendet, um eine Media-Query zu negieren und `true` zurückzugeben, wenn die Abfrage ansonsten `false` zurückgeben würde. Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, wird es nur die spezifische Abfrage negieren, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Keyword nicht verwendet werden, um einen einzelnen Media-Feature-Ausdruck zu negieren, sondern nur eine gesamte Media-Query.

- `only`
  - : Wendet einen Stil nur dann an, wenn eine gesamte Abfrage übereinstimmt. Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Styles anwenden. Wenn Sie `only` nicht verwenden, würden ältere Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, wodurch die Styles auf allen Bildschirmen angewendet würden. Wenn Sie den `only`-Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media-Queries in einer einzigen Regel zu kombinieren. Jede Abfrage in einer durch Kommas getrennten Liste wird unabhängig von den anderen behandelt. Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück. Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent Client Hints

Einige Media-Queries haben entsprechende [User-Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints). Dies sind HTTP-Header, die Inhalte anfordern, die für das jeweilige Medienerfordernis vorab optimiert sind. Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, besser zu unterstützen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types)s, wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media-Queries oder [HTTP User-Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um das Benutzererlebnis zu verbessern. Zum Beispiel kann die Media-Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um basierend auf Benutzereinstellungen die Menge an Animation oder Bewegung zu minimieren.

## Sicherheit

Da Media-Queries Einblicke in die Fähigkeiten – und damit in die Merkmale und das Design – des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerabdruck\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Grad kategorisiert, was für Benutzer unerwünscht sein kann.

Aufgrund dieses Potenzials kann ein Browser sich entscheiden, die zurückgegebenen Werte in irgendeiner Weise zu verfälschen, um zu verhindern, dass sie zur genauen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn die Firefox-Einstellung "Resist Fingerprinting" aktiviert ist, melden viele Media-Queries Standardwerte anstelle von Werten, die den tatsächlichen Gerätezustand repräsentieren.

## Beispiele

### Testen auf Druck- und Bildschirmmedientypen

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

Die Bereichssyntax erlaubt weniger umfangreiche Media-Queries beim Testen von Funktionen, die einen Bereich akzeptieren, wie in den folgenden Beispielen gezeigt:

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

Für weitere Beispiele, siehe bitte [Verwendung von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS media queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Verwendung von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Media-Features](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Media-Features](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
