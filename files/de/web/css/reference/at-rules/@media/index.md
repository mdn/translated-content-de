---
title: "`@media` CSS at-rule"
short-title: "@media"
slug: Web/CSS/Reference/At-rules/@media
l10n:
  sourceCommit: 3869bc5647462538141417d68fc14362c7929ce9
---

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) anzuwenden. Damit spezifizieren Sie eine Media Query und einen Block von CSS, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query auf das Gerät zutrifft, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Schnittstelle abgerufen werden.

{{InteractiveExample("CSS-Demo: @media", "tabbed-standard")}}

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

Die `@media`-Regel kann auf oberster Ebene Ihres Codes oder verschachtelt in einer anderen bedingten Gruppenregel platziert werden.

Für eine Diskussion der Syntax der Media Queries, siehe bitte [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax).

## Beschreibung

Die `<media-query-list>` einer Media Query umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienfunktionen) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer bei Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für paginierte Materialien und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden. (Bitte prüfen Sie [Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media) für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind.)
- `screen`
  - : Vorrangig für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, und `aural`), die aber in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) veraltet sind und nicht mehr verwendet werden sollten.

### Medienfunktionen

Eine _`<media feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung.
Media Feature-Ausdrücke prüfen auf ihre Anwesenheit, ihren Wert oder Wertebereiche und sind völlig optional. Jeder Media Feature-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Ermöglicht jedes verfügbare Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist ein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-Höhen-{{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsbereichs.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts, oder null, wenn das Gerät nicht in Farbe ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefährer Farbraum, der vom User Agent und dem Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbauswahltabelle des Ausgabegeräts, oder null, wenn das Gerät keine solche Tabelle nutzt.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-Höhen-Seitenverhältnis des Ausgabegeräts. Veraltet in Media Queries Stufe 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Wiedergabeoberfläche des Ausgabegeräts. Veraltet in Media Queries Stufe 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, d.h. ob der Ansichtsbereich in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Wiedergabeoberfläche des Ausgabegeräts. Veraltet in Media Queries Stufe 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: beispielsweise [Vollbild](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#fullscreen) oder [Bild-im-Bild](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsbereichs.
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Erkennt, ob das Gerät eine bestimmte Anzahl horizontal angeordneter Ansichtsbereichsegmente hat.
- {{cssxref("@media/hover", "hover")}}
  - : Ermöglicht der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrunde liegende Betriebssystem Farben?
    Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel in der monochromen Frame-Buffer des Ausgabegeräts, oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Ausrichtung des Ansichtsbereichs.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die im Block-Achsenverlauf den Ansichtsbereich überfluten?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann der Inhalt, der im Inline-Achsenverlauf den Ansichtsbereich überflutet, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die transparenten oder transluzenten Schichteffekte zu reduzieren, die auf dem Gerät verwendet werden.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Ausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Erkennt, ob das Gerät eine bestimmte Anzahl vertikal angelegter Ansichtsbereichsegmente hat. Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Video-Ebene des User Agents und des Ausgabegeräts unterstützt werden. Hinzugefügt in Media Queries Stufe 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsbereichs einschließlich der Breite des Scrollbalkens.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Funktion mit der `dppx`-Einheit.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präfixierte CSS {{cssxref("animation")}}. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Anfrage.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) Funktion mit der `dppx`-Einheit.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 2D-CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Anfrage.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 3D-CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Anfrage.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-präfixierte CSS {{cssxref("transition")}}. Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature-Anfrage.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu komponieren.
Sie können auch mehrere Media-Queries zu einer einzelnen Regel kombinieren, indem Sie sie durch Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienfunktionen in einer einzigen Media Query zu kombinieren, wobei jede verknüpfte Funktion `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienfunktionen mit Medientypen zu verknüpfen.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren, und gibt `true` zurück, wenn die Abfrage sonst `false` wäre.
    Wird in einer durch Kommas getrennten Liste von Abfragen verwendet, negiert es nur die spezifische Abfrage, auf die es angewendet wird.

    > [!NOTE]
    > In Stufe 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienfunktionsausdruck zu negieren, sondern nur eine ganze Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine ganze Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Styles anwenden.
    Wenn `only` nicht verwendet wird, würde ein älterer Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, und seine Styles auf alle Bildschirme anwenden.
    Wenn Sie den `only`-Operator verwenden, müssen Sie _auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries in einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt.
    Wenn also irgendeine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Aussage `true` zurück.
    Anders gesagt, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Stufe 4.

### Client-Hinweise des User Agents

Einige Media Queries haben entsprechende [Client-Hinweise des User Agents](/de/docs/Web/HTTP/Guides/Client_hints).
Dies sind HTTP-Header, die Inhalte anfordern, die für die jeweilige Medienanforderung voroptimiert sind.
Sie beinhalten {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Zugänglichkeit

Um Menschen, die die Textgröße einer Website anpassen, bestmöglich entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP-Client-Hinweise des User Agents](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um die Benutzererfahrung zu verbessern.
Beispielsweise kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animationen oder Bewegungen basierend auf den Vorlieben des Benutzers zu minimieren.

## Sicherheit

Da Media Queries Einblick in die Fähigkeiten und damit auch in die Eigenschaften und das Design des Geräts, mit dem der Benutzer arbeitet, geben, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen sogenannten {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu konstruieren, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Detailgrad kategorisiert, was für Benutzer unerwünscht sein könnte.

Aufgrund dieses Potenzials könnte ein Browser optieren, die zurückgegebenen Werte auf irgendeine Weise zu verzerren, um zu verhindern, dass sie zur präzisen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn die Einstellung "Resist Fingerprinting" von Firefox aktiviert ist, melden viele Media Queries Standardwerte anstelle von Werten, die den aktuellen Gerätezustand repräsentieren.

## Beispiele

### Testen auf Druck- und Bildschirm-Medientypen

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

Die Bereichssyntax ermöglicht weniger ausführliche Media Queries, wenn Sie auf ein Merkmal testen, das einen Wertebereich akzeptiert, wie in den nachstehenden Beispielen gezeigt:

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

- [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries) Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- CSS {{cssxref("@custom-media")}} Regel
- [Erweiterte Mozilla-Medienfunktionen](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit-Medienfunktionen](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
