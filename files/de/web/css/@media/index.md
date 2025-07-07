---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 2d19a88d0cc560f031a07585bf57f005fec02670
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um Teile eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media Query und einen CSS-Block spezifizieren, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

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

Die `@media` At-Regel kann auf oberster Ebene Ihres Codes platziert oder in jede andere bedingte Gruppierung von At-Regeln verschachtelt werden.

Für eine Diskussion der Syntax von Media Queries, siehe [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media Query's `<media-query-list>` umfasst [`<media-type>`s](#medientypen), [`<media-feature>`s](#media-features) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Gerätes.
Ohne die Verwendung des logischen Operators `only` ist der Medientyp optional, und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für bedruckte Materialien und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden. (Siehe [paged media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu spezifischen Formatierungsproblemen.)
- `screen`
  - : Hauptsächlich für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und {{cssxref("@media/aural", "aural")}}), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet markiert und sollten nicht verwendet werden.

### Media-Features

Ein _`<media-feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User-Agenten")}}, des Ausgabegeräts oder der Umgebung.
Media-Feature-Ausdrücke testen deren Vorhandensein, Wert oder Wertebereich und sind völlig optional. Jeder Media-Feature-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbares Eingabegerät, dass der Benutzer über Elemente hovert?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-Höhe-Verhältnis {{Glossary("aspect_ratio", "aspect ratio")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig arbeitet.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbpalette, die vom User-Agenten und dem Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbabgleichstabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-Höhe-Verhältnis des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Oberfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Ermittelt die aktuelle Haltung des Geräts, also ob das Ansichtsfenster flach oder gefaltet ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Oberfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agenten und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Ermittelt, ob der User-Agent die Farbpalette beschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster- oder Bitmapscreen?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus, dass der Benutzer über Elemente hovert?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User-Agent oder das zugrunde liegende Betriebssystem die Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im Monochrom-Frame-Buffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom arbeitet.
- {{cssxref("@media/orientation", "orientation")}}
  - : Ausrichtung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die entlang der Blockachse über das Ansichtsfenster hinausgehen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der entlang der Inline-Achse über das Ansichtsfenster hinausgeht, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Ermittelt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Ermittelt, ob der Benutzer das System aufgefordert hat, den Kontrast zwischen angrenzenden Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Ermittelt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Ermittelt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um Transparenz- oder Transparenzeffekte zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeige progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Ermittelt, ob Skripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Ermittelt die Form des Geräts, um zwischen rechteckigen und runden Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videofläche des User-Agenten und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie das [`resolution`](/de/docs/Web/CSS/@media/resolution)-Feature mit der `dppx` Einheit stattdessen.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präsierte CSS {{cssxref("animation")}}. Verwenden Sie die [`@supports (animation)`](/de/docs/Web/CSS/@supports)-Feature-Abfrage stattdessen.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie das [`resolution`](/de/docs/Web/CSS/@media/resolution)-Feature mit der `dppx` Einheit stattdessen.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-präsierte 2D CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/@supports)-Feature-Abfrage stattdessen.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-präsierte 3D CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/@supports)-Feature-Abfrage stattdessen.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-präsierte CSS {{cssxref("transition")}}. Verwenden Sie die [`@supports (transition)`](/de/docs/Web/CSS/@supports)-Feature-Abfrage stattdessen.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen.
Sie können auch mehrere Media Queries in einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird zur Kombination mehrerer Media-Features zu einer einzigen Media Query verwendet, wobei jede verknüpfte Funktion `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch zum Verknüpfen von Media-Features mit Medientypen verwendet.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren und `true` zurückzugeben, wenn die Abfrage ansonsten `false` wäre.
    Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, wird es nur die spezifische Abfrage negieren, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das Schlüsselwort `not` nicht verwendet werden, um einen einzelnen Media-Feature-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage zutrifft.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn `only` nicht verwendet wird, interpretieren ältere Browser die Abfrage `screen and (width <= 500px)` als `screen`, ignorieren den Rest der Abfrage und wenden die Stile auf alle Bildschirme an.
    Wenn Sie den `only`-Operator verwenden, müssen Sie _auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries in eine einzige Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird von den anderen separat behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent-Client-Hints

Einige Media Queries haben entsprechende [User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints).
Dies sind HTTP-Header, die Inhalte anfordern, die vorab für die jeweilige Medienanforderung optimiert sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, bestmöglich entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)s, wenn Sie eine {{cssxref("&lt;length&gt;")}} in Ihren [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Browsertextgröße ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP-User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um das Benutzererlebnis zu verbessern.
Beispielsweise kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der äquivalente HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animation oder Bewegung basierend auf den Benutzereinstellungen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten — und damit auch in die Funktionen und das Design — des Geräts liefern, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerabdruck\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest in einer Weise kategorisiert, die für Benutzer möglicherweise unerwünscht ist.

Aufgrund dieses Potenzials könnte ein Browser beschließen, die zurückgegebenen Werte in irgendeiner Weise zu verändern, um zu verhindern, dass sie zur präzisen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; beispielsweise berichten viele Media Queries in Firefox, wenn die Einstellung "Resist Fingerprinting" aktiviert ist, Standardwerte anstelle von Werten, die den tatsächlichen Gerätestand repräsentieren.

## Beispiele

### Testen von Print- und Bildschirm-Medientypen

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

Die Bereichssyntax ermöglicht weniger ausführliche Media Queries beim Testen von Features, die einen Bereich akzeptieren, wie in den folgenden Beispielen gezeigt:

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

Für weitere Beispiele siehe bitte [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Medien-Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medien-Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
