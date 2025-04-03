---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um Teile eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit kann eine Media Query und ein Block von CSS angegeben werden, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Schnittstelle abgerufen werden.

{{InteractiveExample("CSS Demo: @media", "tabbed-standard")}}

```css interactive-example
abbr {
  color: chocolate;
}

@media (hover: hover) {
  abbr:hover {
    color: limegreen;
    transition-duration: 1s;
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

Die `@media` At-Regel kann auf der obersten Ebene Ihres Codes oder verschachtelt innerhalb jeder anderen bedingten Gruppen-At-Regel platziert werden.

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

Für eine Diskussion zur Syntax von Media Queries, siehe bitte [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media Query's `<media-query-list>` umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Mit Ausnahme der Verwendung des logischen Operators `only`, ist der Medientyp optional und der `all`-Typ wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Bestimmt für gedrucktes Material und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden. (Bitte informieren Sie sich über [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind.)
- `screen`
  - : Hauptsächlich für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) veraltet und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung.
Medienmerkmal-Ausdrücke testen auf ihre Anwesenheit, ihren Wert oder ihre Wertebereiche und sind vollständig optional. Jeder Medienmerkmal-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Ermöglicht ein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist ein verfügbares Eingabegerät ein Zeigegerät und, falls ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe-{{Glossary("aspect_ratio", "Seitenverhältnis")}} des Sichtfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Reichweite der Farben, die vom User Agent und dem Ausgabegerät unterstützt werden.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbsuch-Tabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe-Seitenverhältnis des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Oberfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Ermittelt die aktuelle Haltung des Geräts, das heißt, ob das Sichtfenster in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Oberfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird, beispielsweise [Vollbildmodus](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-in-Bild-Modus](/de/docs/Web/CSS/@media/display-mode#picture-in-picture). Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User Agent die Farbpalette einschränkt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Sichtfensters.
- {{cssxref("@media/hover", "hover")}}
  - : Ermöglicht der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Wird die Farbe vom User Agent oder dem zugrundeliegenden Betriebssystem umgekehrt? Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im Monochrom-Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Sichtfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die das Sichtfenster entlang der Blockachse überlaufen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann über das Sichtfenster überlaufender Inhalt entlang der Inline-Achse gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät und, falls ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkenn, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Ermittelt, ob der Benutzer das System gebeten hat, den Kontrast zwischen angrenzenden Farben zu erhöhen oder zu verringern. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Ermittelt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegungen auf der Seite. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Ermittelt, ob ein Benutzer auf ihrem Gerät eine Einstellung aktiviert hat, um die auf dem Gerät verwendeten transparenten oder durchscheinenden Schichteffekte zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeigeausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Ermittelt, ob Scripting (d.h. JavaScript) verfügbar ist. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Anzeigen zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User Agents und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Sichtfensters einschließlich Breite der Bildlaufleiste.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommata trennen.

- `and`
  - : Wird verwendet, um mehrere Merkmale zu einer einzigen Media Query zu kombinieren und erfordert, dass jedes verkettete Merkmal `true` zurückgibt, damit die Abfrage `true` ist. Es wird auch verwendet, um Merkmale mit Medientypen zu verbinden.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren, die `true` zurückgibt, wenn die Abfrage andernfalls `false` zurückgeben würde. Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, wird es nur die spezifische Abfrage negieren, auf die es angewandt wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmal-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur dann an, wenn eine gesamte Abfrage übereinstimmt. Dies ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden. Wenn `only` nicht verwendet wird, würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren, den Rest der Abfrage ignorieren und ihre Stile auf allen Bildschirmen anwenden. Wenn Sie den `only`-Operator verwenden, _müssen Sie auch_ einen Medientyp spezifizieren.
- `,` (Komma)
  - : Kommata werden verwendet, um mehrere Media Queries in einer einzigen Regel zu kombinieren. Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt. Folglich, wenn eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück. Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User Agent Client-Hinweise

Einige Media Queries haben entsprechende [User Agent Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints). Dies sind HTTP-Header, die Inhalte anfordern, die vorab für die jeweilige Medienanforderung optimiert sind. Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, am besten entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP User Agent Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) zur Verbesserung der Benutzererfahrung. Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der äquivalente HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animation oder Bewegung basierend auf den Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten – und somit die Merkmale und das Design – des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerabdruck\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Detaillierungsgrad kategorisiert, der für die Benutzer möglicherweise unerwünscht ist.

Aufgrund dieses Potenzials kann ein Browser beschließen, die zurückgegebenen Werte in irgendeiner Weise zu verändern, um zu verhindern, dass sie zur präzisen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch weitere Maßnahmen in diesem Bereich ergreifen; zum Beispiel, wenn in Firefox die Einstellung "Fingerabdruckschutz aktivieren" aktiviert ist, geben viele Media Queries Standardwerte zurück, anstatt Werte, die den tatsächlichen Gerätezustand repräsentieren.

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

Die Reichweitensyntax ermöglicht weniger ausführliche Media Queries, wenn für jedes Merkmal, das einen Bereich akzeptiert, getestet wird, wie in den untenstehenden Beispielen gezeigt:

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

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle
- [Erweiterte Mozilla-Merkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Merkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
