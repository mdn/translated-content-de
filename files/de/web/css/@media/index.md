---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: f0fcb3b92e14a1d5b7f51947597cef1fbf4be64c
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media Query und einen CSS-Block spezifizieren, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über das [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Interface abgerufen werden.

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

Die `@media` At-Regel kann entweder auf der obersten Ebene Ihres Codes oder innerhalb einer anderen Bedingungsgruppe-At-Regel platziert werden.

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

Für eine Diskussion zur Media-Query-Syntax siehe [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Die `<media-query-list>` einer Media Query umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer bei Verwendung des `only` logischen Operators ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für paginierte Materialien und Dokumente, die auf einem Bildschirm im Druckvorschau-Modus angezeigt werden. (Weitere Informationen über Formatierungsprobleme, die spezifisch für diese Formate sind, finden Sie unter [paged media](/de/docs/Web/CSS/CSS_paged_media).)
- `screen`
  - : Hauptsächlich für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) veraltet und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User Agents")}}, Ausgabegeräts oder der Umgebung.
Medienmerkmal-Ausdrücke prüfen ihre Präsenz, ihren Wert oder ihren Wertebereich und sind vollständig optional. Jeder Medienmerkmal-Ausdruck muss in Klammern eingeschlossen sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt ein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist ein verfügbares Eingabegerät ein Zeigegerät, und falls ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-zu-Höhen- {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts, oder null, wenn das Gerät nicht farbig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbpalette, die vom User Agent und Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbauswahltabelle des Ausgabegeräts, oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-zu-Höhen-Seitenverhältnis des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Render-Oberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, also ob das Ansichtsfenster in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Render-Oberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User Agent die Farbpalette einschränkt. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrunde liegende Betriebssystem die Farben? In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im Monochrom-Pufferrahmen des Ausgabegeräts, oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die entlang der Block-Achse aus dem Ansichtsfenster herausragen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der entlang der Inline-Achse aus dem Ansichtsfenster herausragt, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und falls ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer um Webinhalte gebeten hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die auf dem Gerät verwendeten transparenten oder durchscheinenden Schichteffekte zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Bildschirmausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videofläche des User Agents und dem Ausgabegerät unterstützt werden. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich der Breite des Scrollbalkens.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/@media/resolution) Merkmal mit der `dppx` Einheit.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Der Browser unterstützt `-webkit` präfixierte CSS {{cssxref("animation")}}. Verwenden Sie stattdessen die Feature-Abfrage [`@supports (animation)`](/de/docs/Web/CSS/@supports).
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/@media/resolution) Merkmal mit der `dppx` Einheit.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Der Browser unterstützt `-webkit` präfixierte 2D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die Feature-Abfrage [`@supports (transform)`](/de/docs/Web/CSS/@supports).
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit` präfixierte 3D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die Feature-Abfrage [`@supports (transform)`](/de/docs/Web/CSS/@supports).
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Der Browser unterstützt `-webkit` präfixierte CSS {{cssxref("transition")}}. Verwenden Sie stattdessen die Feature-Abfrage [`@supports (transition)`](/de/docs/Web/CSS/@supports).

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zusammenzustellen.
Sie können auch mehrere Media Queries in einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zusammen in einer einzigen Media Query zu kombinieren, wobei jede verknüpfte Funktion `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch zum Verbinden von Medienmerkmalen mit Medientypen verwendet.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren, und gibt `true` zurück, wenn die Abfrage ansonsten `false` zurückgeben würde.
    Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, negiert es nur die spezifische Abfrage, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not` Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmal-Ausdruck, sondern nur eine gesamte Media Query zu negieren.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Styles anwenden.
    Ohne die Verwendung von `only` würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren, den Rest der Abfrage ignorieren und ihre Styles auf allen Bildschirmen anwenden.
    Wenn Sie den `only` Operator verwenden, müssen Sie _auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt
    Somit, wenn eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück.
    Mit anderen Worten verhalten sich Listen wie ein logischer `or` Operator.
- `or`
  - : Äquivalent zum `,` Operator. In Media Queries Level 4 hinzugefügt.

### User Agent Client Hints

Einige Media Queries haben entsprechende [User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints).
Diese sind HTTP-Header, die Inhalte anfordern, die vorab für die spezifischen Medienanforderungen optimiert sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um den Menschen, die die Textgröße einer Website anpassen, am besten entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie ein {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Erwägen Sie auch Media Queries oder [HTTP User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um die Benutzererfahrung zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animation oder Bewegung auf der Grundlage von Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten und damit in die Merkmale und das Design des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen sogenannten {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Grad kategorisiert, der für Benutzer unerwünscht sein kann.

Aus diesem Grund kann ein Browser sich entscheiden, die zurückgegebenen Werte in irgendeiner Weise zu verfälschen, um zu verhindern, dass sie verwendet werden, um einen Computer genau zu identifizieren. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn in Firefox die Einstellung "Fingerprinting verhindern" aktiviert ist, geben viele Media Queries Standardwerte anstelle von Werten zurück, die den tatsächlichen Gerätestatus repräsentieren.

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

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
  body {
    line-height: 1.4;
  }
}
```

Die Bereichssyntax erlaubt weniger ausführliche Media Queries beim Testen von Funktionen, die einen Bereich akzeptieren, wie in den folgenden Beispielen gezeigt:

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

Für weitere Beispiele siehe [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Modul [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
