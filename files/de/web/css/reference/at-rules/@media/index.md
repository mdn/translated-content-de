---
title: "`@media` CSS at-rule"
short-title: "@media"
slug: Web/CSS/Reference/At-rules/@media
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

Die **`@media`** [CSS](/de/docs/Web/CSS) [at-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) kann verwendet werden, um Teile eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) anzuwenden. Damit spezifizieren Sie eine Media Query und einen Block von CSS, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

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

Die `@media` at-Regel kann auf der obersten Ebene Ihres Codes platziert oder in einer anderen bedingten Gruppen-at-Regel verschachtelt werden.

Für eine Diskussion der Syntax von Media Queries siehe bitte [Using media queries](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax).

## Beschreibung

Eine Media Query `<media-query-list>` umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer beim Einsatz des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für gedrucktes Material und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm betrachtet werden. (Bitte sehen Sie sich [paged media](/de/docs/Web/CSS/Guides/Paged_media) für Informationen zu Formatierungsproblemen an, die spezifisch für diese Formate sind.)
- `screen`
  - : Vorwiegend für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, und `aural`, aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet eingestuft und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung.
Medienmerkmalsexpressionen testen auf deren Vorhandensein, Wert oder Wertebereich und sind völlig optional. Jede Medienmerkmalsexpression muss in Klammern eingeschlossen sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Ermöglicht irgendein verfügbares Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabemechanismus ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-Höhen-Verhältnis des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht bunt ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Reichweite der Farben, die vom User Agent und dem Ausgabegerät unterstützt werden.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farblookuptabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-Höhen-Verhältnis des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Zeichenfläche des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, d.h. ob der Viewport flach oder gefaltet ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Zeichenfläche des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird, zum Beispiel [fullscreen](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Gitterbildschirm oder ein Bitmapscreen?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Erkennt, ob das Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die horizontal angeordnet sind.
- {{cssxref("@media/hover", "hover")}}
  - : Ermöglicht das primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrunde liegende Betriebssystem Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Ausrichtung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät den Inhalt, der über den Viewport hinaus geht, entlang der Blockachse?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann der Inhalt, der über den Viewport hinausgeht entlang der Inline-Achse gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabemechanismus ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer angefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer angefordert hat, dass die Webinhalte weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegungen auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die durchsichtigen oder transparenten Schichteffekte, die auf dem Gerät verwendet werden, zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Displayausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild des Inhalts ändern kann.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Erkennt, ob das Gerät über eine bestimmte Anzahl von Viewport-Segmenten verfügt, die vertikal angeordnet sind. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom Videoflugzeug des User Agents und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie die [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Funktion mit der `dppx` Einheit stattdessen.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-Prefix CSS {{cssxref("animation")}}. Verwenden Sie die [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Funktionsabfrage stattdessen.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie die [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Funktion mit der `dppx` Einheit stattdessen.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-Prefix für 2D CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Funktionsabfrage stattdessen.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-Prefix für 3D CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Funktionsabfrage stattdessen.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-Prefix CSS {{cssxref("transition")}}. Verwenden Sie die [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Funktionsabfrage stattdessen.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only`, und `or` können verwendet werden, um eine komplexe Media Query zu erstellen.
Sie können auch mehrere Media Queries in eine einzige Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzigen Media Query zu kombinieren, wobei jede verknüpfte Funktion `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verbinden.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren, die `true` zurückgibt, wenn die Abfrage ansonsten `false` zurückgeben würde.
    Wenn es in einer kommagetrennten Liste von Abfragen vorhanden ist, wird es nur die spezifische Abfrage negieren, auf die es angewandt wird.

    > [!NOTE]
    > In Level 3 kann das `not` Schlüsselwort nicht verwendet werden, um eine einzelne Medienmerkmalsexpression zu negieren, nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Ohne `only` würden ältere Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren und ihre Stile auf alle Bildschirme anwenden.
    Wenn Sie den `only` Operator verwenden, müssen Sie einen Medientyp _auch_ spezifizieren.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries in eine einzige Regel zu kombinieren.
    Jede Abfrage in einer kommagetrennten Liste wird unabhängig von den anderen behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Medienanweisung `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or` Operator.
- `or`
  - : Äquivalent zum `,` Operator. Hinzugefügt in Media Queries Level 4.

### User Agent Client Hints

Einige Media Queries haben entsprechende [User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints).
Dies sind HTTP-Header, die Inhalte anfordern, die für das jeweilige Medienerfordernis vorab optimiert sind.
Sie beinhalten {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, besser gerecht zu werden, verwenden Sie [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um das Benutzererlebnis zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) verwendet werden, um die Menge an Animation oder Bewegung zu minimieren, die basierend auf den Benutzervorlieben verwendet wird.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten – und somit die Funktionen und das Design – des Geräts, das der Benutzer verwendet, geben können, besteht die Möglichkeit, dass sie missbräuchlich verwendet werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem unerwünschten Detailgrad klassifiziert.

Aufgrund dieses Potenzials könnte ein Browser beschließen, die zurückgegebenen Werte auf irgendeine Weise zu verändern, um zu verhindern, dass sie dazu verwendet werden, einen Computer genau zu identifizieren. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn in Firefox die Einstellung "Fingerprinting widerstehen" aktiviert ist, geben viele Media Queries Standardwerte zurück anstelle von Werten, die den tatsächlichen Zustand des Geräts widerspiegeln.

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

Die Bereichssyntax ermöglicht weniger umfangreiche Media Queries beim Testen einer Funktion, die einen Bereich akzeptiert, wie in den unten stehenden Beispielen gezeigt:

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
- CSS {{cssxref("@custom-media")}} at-Regel
- [Erweiterte Mozilla-Medienfunktionen](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Medienfunktionen](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
