---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit spezifizieren Sie eine Media Query und einen Block von CSS, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln mit der [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle des CSS-Objektmodells abgerufen werden.

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

Die `@media` At-Regel kann auf oberster Ebene Ihres Codes oder verschachtelt innerhalb einer anderen bedingten Gruppenregel platziert werden.

```css
/* At the top level of your code */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested within another conditional at-rule */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

Für eine Diskussion der Media Query-Syntax siehe bitte [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media Query's `<media-query-list>` umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts. Außer beim Verwenden des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Bestimmt für seitenbasierte Materialien und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden. (Bitte sehen Sie [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet markiert und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media-feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User-Agents")}}, des Ausgabegeräts oder der Umgebung. Medienmerkmal-Ausdrücke testen deren Vorhandensein, Wert oder Wertebereich und sind vollständig optional. Jeder Medienmerkmal-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt ein verfügbares Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist ein verfügbares Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-zu-Höhenverhältnis des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät keine Farben darstellt.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Reichweite der Farben, die vom Nutzer-Agent und Ausgabegerät unterstützt werden.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbabgleichtabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-zu-Höhenverhältnis des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Renderingfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Ermittelt die aktuelle Haltung des Geräts, das heißt, ob sich der Viewport in einem flachen oder gefalteten Zustand befindet. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Renderingfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: beispielsweise [Vollbildmodus](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-im-Bild-Modus](/de/docs/Web/CSS/@media/display-mode#picture-in-picture). Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die vom Nutzer-Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Feststellen, ob der Nutzer-Agent die Farbpalette einschränkt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt das primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der Nutzer-Agent oder das zugrunde liegende Betriebssystem Farben? Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Frame-Buffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Ausrichtung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den Viewport entlang der Blockachse überlaufen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Können Inhalte, die den Viewport entlang der Inline-Achse überlaufen, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erfasst, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erfasst, ob der Benutzer das System zur Erhöhung oder Verringerung des Kontrasts zwischen angrenzenden Farben angefordert hat. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erfasst, ob der Benutzer Inhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erfasst, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder durchscheinenden Effekt-Schichten auf dem Gerät zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Display-Ausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erfasst, ob Scripting (d.h. JavaScript) verfügbar ist. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erfasst die Form des Geräts, um rechteckige und runde Anzeigen zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild von Inhalten ändern.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des Nutzer-Agents und des Ausgabegeräts unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/@media/resolution) Feature mit der `dppx` Einheit.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit` präfixierte CSS {{cssxref("animation")}}. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Feature-Anfrage.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/@media/resolution) Feature mit der `dppx` Einheit.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit` präfixierte 2D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Anfrage.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit` präfixierte 3D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Anfrage.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit` präfixierte CSS {{cssxref("transition")}}. Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Feature-Anfrage.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzigen Media Query zu kombinieren, wobei jedes verbundene Merkmal `true` sein muss, damit die Abfrage `true` ergibt. Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verknüpfen.
- `not`

  - : Dient zum Negieren einer Media Query und gibt `true` zurück, wenn die Abfrage ansonsten `false` ergeben würde. Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, wird nur die spezifische Abfrage negiert, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmal-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt. Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden. Wenn `only` nicht verwendet wird, würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, wodurch die Stile auf allen Bildschirmen angewendet werden. Wenn Sie den `only` Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren. Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt. Wenn also eine der Abfragen in einer Liste `true` ist, ergibt die gesamte Media-Aussage `true`. Mit anderen Worten, Listen verhalten sich wie ein logischer `or` Operator.
- `or`
  - : Entspricht dem `,` Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent-Client-Hinweise

Einige Media Queries haben entsprechende [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints). Diese sind HTTP-Header, die Inhalte anfordern, die für die spezifische Medienanforderung voroptimiert sind. Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Personen, die die Textgröße einer Webseite anpassen, am besten gerecht zu werden, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Betrachten Sie auch Media Queries oder [HTTP-User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um das Benutzererlebnis zu verbessern. Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animation oder Bewegung basierend auf Benutzerpräferenzen zu minimieren.

## Sicherheit

Weil Media Queries Einblicke in die Fähigkeiten – und im weiteren Sinne die Merkmale und das Design – des Geräts bieten, das der Benutzer verwendet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Grad kategorisiert, was für Benutzer möglicherweise unerwünscht ist.

Aus diesem Grund kann ein Browser sich dazu entscheiden, die zurückgegebenen Werte auf eine bestimmte Weise zu verfälschen, um zu verhindern, dass sie zur genauen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn die "Resist Fingerprinting"-Einstellung von Firefox aktiviert ist, melden viele Media Queries Standardwerte anstelle von Werten, die den tatsächlichen Gerätezustand repräsentieren.

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

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
  body {
    line-height: 1.4;
  }
}
```

Die Bereichssyntax ermöglicht weniger umständliche Media Queries beim Testen auf ein Merkmal, das einen Bereich akzeptiert, wie im folgenden Beispiel gezeigt:

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

Für weitere Beispiele siehe bitte [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
