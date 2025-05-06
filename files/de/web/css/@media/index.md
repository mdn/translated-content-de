---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: ae38259a6c5fc4b4a8b6545ec411cb096d68dd9d
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um einen Teil eines Stylesheets aufgrund des Ergebnisses einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media Query und einen Block von CSS angeben, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt genutzt wird.

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

Die `@media`-At-Regel kann auf oberster Ebene Ihres Codes oder innerhalb jeder anderen bedingten Gruppen-At-Regel verschachtelt platziert werden.

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

Eine Diskussion der Syntax von Media Queries finden Sie unter [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Die `<media-query-list>` einer Media Query umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts. Außer bei Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für paginierte Materialien und Dokumente, die in der Druckvorschau auf einem Bildschirm angezeigt werden. (Siehe [paged media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu formatierungsspezifischen Problemen dieser Formate.)
- `screen`
  - : Primär für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet eingestuft und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User Agent")}}, des Ausgabegeräts oder der Umgebung. Medienmerkmalausdrücke testen auf deren Vorhandensein, Wert oder Wertebereich und sind vollständig optional. Jeder Medienmerkmalausdruck muss in Klammern eingeschlossen werden.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt ein verfügbares Eingabegerät dem Benutzer, über Elemente zu hoveren?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist ein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-zu-Höhen-{{Glossary("aspect_ratio", "Seitenverhältnis")}} des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Bandbreite der Farben, die vom User Agent und Ausgabegerät unterstützt werden.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbsuchtafel des Ausgabegeräts oder null, wenn das Gerät keine solche Tafel verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-zu-Höhen-Seitenverhältnis des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Fläche des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, d.h. ob der Viewport in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Fläche des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Überprüfen, ob der User Agent die Farbpalette einschränkt.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Gitter- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt das primäre Eingabegerät dem Benutzer, über Elemente zu hoveren?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrundeliegende Betriebssystem Farben?
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im Monochrom-Framebuffer des Ausgabegeräts, oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den Viewport entlang der Block-Achse überlaufen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Können Inhalte, die den Viewport entlang der Inline-Achse überlaufen, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabegerät ein Zeigegerät und, wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennen, ob der Benutzer das System gebeten hat, den Unterschied zwischen angrenzenden Farben zu erhöhen oder zu verringern.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennen, ob der Benutzer webseitige Inhalte angefordert hat, die weniger Internet-Traffic verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um transparente oder durchscheinende Schichteffekte zu reduzieren, die auf dem Gerät verwendet werden.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeigeausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennen, ob Scripting (d.h. JavaScript) verfügbar ist.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Anzeigen zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videofläche des User Agents und des Ausgabegeräts unterstützt werden. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Scrollleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie das [`resolution`](/de/docs/Web/CSS/@media/resolution)-Merkmal mit der Einheit `dppx` stattdessen.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präfixiertes CSS {{cssxref("animation")}}. Verwenden Sie die [`@supports (animation)`](/de/docs/Web/CSS/@supports)-Abfrage für Merkmale stattdessen.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie das [`resolution`](/de/docs/Web/CSS/@media/resolution)-Merkmal mit der Einheit `dppx` stattdessen.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 2D-CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/@supports)-Abfrage für Merkmale stattdessen.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 3D-CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/@supports)-Abfrage für Merkmale stattdessen.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-präfixiertes CSS {{cssxref("transition")}}. Verwenden Sie die [`@supports (transition)`](/de/docs/Web/CSS/@supports)-Abfrage für Merkmale stattdessen.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzelnen Media Query zu kombinieren, wobei jede verknüpfte Bedingung `true` zurückgeben muss, damit die Anfrage `true` ist. Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verbinden.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren und `true` zurückzugeben, wenn die Anfrage ansonsten `false` zurückgeben würde. Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, wird es nur die spezielle Abfrage negieren, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmal-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt. Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden. Wenn Sie `only` nicht verwenden, würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, und ihre Stile auf allen Bildschirmen anwenden. Wenn Sie den `only`-Operator verwenden, _müssen_ Sie auch einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzelnen Regel zu kombinieren. Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt. Daher, wenn eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück. Mit anderen Worten verhalten sich Listen wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. In Media Queries Level 4 hinzugefügt.

### Client-Hinweise des User Agents

Einige Media Queries haben entsprechende [User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints). Dabei handelt es sich um HTTP-Header, die Inhalte anfordern, die bereits für die speziellen Medienanforderungen optimiert sind. Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, am besten entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktionieren besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um das Benutzererlebnis zu verbessern. Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge der Animation oder Bewegung basierend auf den Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten - und somit in die Eigenschaften und das Design - des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest in einem unerwünschten Detaillierungsgrad kategorisiert.

Aufgrund dieses Potenzials kann ein Browser die zurückgegebenen Werte auf irgendeine Weise verfälschen, um zu verhindern, dass sie zur genauen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn Firefox's Einstellung "Fingerprinting widerstehen" aktiviert ist, geben viele Media Queries Standardwerte zurück, anstatt Werte, die den tatsächlichen Gerätezustand repräsentieren.

## Beispiele

### Prüfung von Druck- und Bildschirmmedientypen

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

Die Bereichssyntax ermöglicht weniger umständliche Media Queries beim Testen für Merkmale, die einen Bereich akzeptieren, wie in den folgenden Beispielen gezeigt:

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

Weitere Beispiele finden Sie unter [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS media queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Merkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Merkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
