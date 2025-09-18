---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

Die **`@media`**-Regel in [CSS](/de/docs/Web/CSS) ist eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), die verwendet werden kann, um Teile eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Mit ihr spezifizieren Sie eine Media Query und einen Block von CSS, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle des CSS-Objektmodells abgerufen werden.

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

Die `@media`-At-Regel kann auf oberster Ebene Ihres Codes oder verschachtelt in einer beliebigen anderen bedingten Gruppenregel platziert werden.

Für eine Diskussion der Syntax von Media Queries siehe [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Die `<media-query-list>` einer Media Query umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Mit Ausnahme der Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Für paginierte Materialien und Dokumente gedacht, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden. (Bitte siehe [paged media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu spezifischen Formatierungsproblemen.)
- `screen`
  - : Hauptsächlich für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet markiert und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung.
Medienmerkmal-Ausdrücke testen auf ihre Anwesenheit, ihren Wert oder einen Wertebereich und sind vollständig optional. Jeder Medienmerkmal-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbarer Eingabemechanismus dem Benutzer, über Elementen zu hoveren?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbarer Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe-{{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbpalette, die vom User Agent und dem Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbtabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe-Seitenverhältnis des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Darstellungsebene des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, d.h. ob sich das Ansichtsfenster in einem flachen oder gefalteten Zustand befindet. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Darstellungsebene des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: z.B. [Vollbild](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-in-Bild](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster oder einen Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Erkennt, ob das Gerät eine angegebene Anzahl von Ansichtsfenster-Segmenten horizontal angeordnet hat.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus dem Benutzer, über Elementen zu hoveren?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrunde liegende Betriebssystem die Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Frame-Buffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie verarbeitet das Ausgabegerät Inhalte, die den Ansichtsfenster entlang der Block-Achse überfließen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Können Inhalte, die den Ansichtsfenster entlang der Inline-Achse überfließen, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System angewiesen hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer webbasierte Inhalte bevorzugt, die weniger Internetverkehr konsumieren.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung aktiviert hat, die die transparenten oder durchscheinenden Schichteffekte des Geräts reduziert.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Darstellungsausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Skripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um zwischen rechteckigen und runden Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie oft das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Erkennt, ob das Gerät eine angegebene Anzahl von Ansichtsfenster-Segmenten vertikal angeordnet hat. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom Videobereich des User Agents und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich der Breite der Scrollleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der `dppx` Einheit statt.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präfixierte CSS {{cssxref("animation")}}. Verwenden Sie die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Feature-Abfrage statt.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der `dppx` Einheit statt.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 2D CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Abfrage statt.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 3D CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Abfrage statt.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-präfixierte CSS {{cssxref("transition")}}. Verwenden Sie die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Feature-Abfrage statt.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen.
Sie können auch mehrere Media Queries in einer einzigen Regel durch Kommas trennen und kombinieren.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzigen Media Query zusammenzufassen, wobei jede verknüpfte Funktion `true` sein muss, damit die Abfrage `true` zurückgibt.
    Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verknüpfen.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren, was `true` zurückgibt, wenn die Abfrage sonst `false` zurückgeben würde.
    Wenn es in einer kommagetrennten Liste von Abfragen vorhanden ist, wird es nur die spezifische Abfrage negieren, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmal-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn die gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn Sie `only` nicht verwenden, würden ältere Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren, den Rest der Abfrage ignorieren und seine Stile auf allen Bildschirmen anwenden.
    Wenn Sie den `only`-Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries in einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer kommagetrennten Liste wird separat von den anderen behandelt.
    Somit, wenn eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Auswertung `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### Client-Hinweise des User Agents

Einige Media Queries haben entsprechende [Client-Hinweise des User Agents](/de/docs/Web/HTTP/Guides/Client_hints).
Dies sind HTTP-Header, die Inhalte anfordern, die für die jeweilige Medienanforderung voroptimiert sind.
Sie umfassen {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, am besten entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)s, wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP-Client-Hinweise des User Agents](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um die Benutzererfahrung zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge der verwendeten Animationen oder Bewegungen basierend auf den Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten - und damit in die Merkmale und das Design - des Geräts geben, mit dem der Benutzer arbeitet, besteht das Potenzial, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest mit etwas Detailliertheit kategorisiert, die für Benutzer unerwünscht sein könnte.

Aufgrund dieses Potenzials könnte ein Browser die zurückgegebenen Werte in gewisser Weise verschleiern, um deren genaue Verwendung zur Identifizierung eines Computers zu verhindern. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn die Firefox-Einstellung "Fingerprinting widerstehen" aktiviert ist, melden viele Media Queries Standardwerte anstelle von Werten, die den tatsächlichen Gerätezustand darstellen.

## Beispiele

### Testen von Print- und Screen-Medientypen

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

Die Bereichssyntax ermöglicht weniger umständliche Media Queries, wenn nach einem Merkmal gesucht wird, das einen Bereich akzeptiert, wie in den folgenden Beispielen gezeigt:

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

Für weitere Beispiele siehe [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Media-Queries-Modul [CSS media queries](/de/docs/Web/CSS/CSS_media_queries)
- Verwendung von Media Queries [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- Erweiterte Mozilla-Medienmerkmale [Extended Mozilla media features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- Erweiterte WebKit-Medienmerkmale [Extended WebKit media features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
