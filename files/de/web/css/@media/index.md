---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`@media`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf einem oder mehreren [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Mit ihr können Sie eine Media-Query und einen CSS-Block angeben, der auf das Dokument angewendet wird, wenn und nur wenn die Media-Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln mit der [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle des CSS-Objektmodells abgerufen werden.

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

Die `@media`-Regel kann auf oberster Ebene Ihres Codes platziert oder in jede andere bedingte Gruppenregel verschachtelt werden.

Für eine Diskussion über die Syntax von Media-Queries siehe bitte [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media-Query's `<media-query-list>` umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer bei Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für Printmaterial und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden. (Bitte siehe [paged media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsfragen, die für diese Formate spezifisch sind.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und {{cssxref("@media/aural", "aural")}}), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) veraltet und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media-feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User-Agenten")}}, des Ausgabegeräts oder der Umgebung.
Medienmerkmal-Ausdrücke testen auf deren Vorhandensein, Wert oder Wertebereich und sind vollständig optional. Jedes Medienmerkmal muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Ermöglicht irgendein verfügbares Eingabegerät dem Benutzer, über Elemente zu fahren?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät und, wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät keine Farbe hat.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbpalette, die vom User Agent und Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbsuchliste des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe Seitenverhältnis des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Darstellungsfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, das heißt ob der Bildschirm in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Darstellungsfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User Agent die Farbpalette einschränkt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Gitter- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/hover", "hover")}}
  - : Ermöglicht der primäre Eingabemechanismus dem Benutzer, über Elemente zu fahren?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrunde liegende Betriebssystem die Farben? Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im Monochrom-Puffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den Viewport entlang der Blockachse überlaufen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Können Inhalte, die den Viewport entlang der Inline-Achse überlaufen, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät und, wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer verlangt hat, dass das System den Kontrast zwischen benachbarten Farben erhöht oder verringert. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer angefordert hat, dass Webinhalte weniger Internet-Datenverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die durchsichtigen oder durchscheinenden Schichteffekte zu reduzieren, die auf dem Gerät verwendet werden.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Bildschirmausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts zur Unterscheidung zwischen rechteckigen und runden Anzeigen.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild von Inhalten ändern.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User Agents und des Ausgabegeräts unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präsentierte CSS {{cssxref("animation")}}. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-präsentierte 2D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-präsentierte 3D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-präsentierte CSS {{cssxref("transition")}}. Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media-Query zusammenzustellen.
Sie können auch mehrere Media-Queries zu einer einzigen Regel kombinieren, indem Sie sie durch Kommata trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzelnen Media-Query zu kombinieren, wobei jedes verknüpfte Merkmal `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verknüpfen.
- `not`
  - : Wird verwendet, um eine Media-Query zu negieren und `true` zurückzugeben, wenn die Abfrage ansonsten `false` wäre.
    Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, negiert es nur die spezifische Abfrage, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmalausdruck zu negieren, sondern nur eine gesamte Media-Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn `only` nicht verwendet wird, würden ältere Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, wodurch ihre Stile auf allen Bildschirmen angewendet würden.
    Wenn Sie den `only`-Operator verwenden, müssen Sie _auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media-Queries zu einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird getrennt von den anderen behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Medienanweisung `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Äquivalent zum `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User Agent Client-Hinweise

Einige Media-Queries haben entsprechende [User Agent Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints).
Dies sind HTTP-Header, die Inhalte anfordern, die für die jeweilige Medienanforderung voroptimiert sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Seite anpassen, optimal zu unterstützen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)s, wenn Sie ein {{cssxref("&lt;length&gt;")}} für Ihre [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Browser-Textgröße ändert.

Berücksichtigen Sie auch Media-Queries oder [HTTP-User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um das Benutzererlebnis zu verbessern.
Zum Beispiel kann die Media-Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge der Animationen oder Bewegungen basierend auf Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media-Queries Einblicke in die Fähigkeiten und damit in die Features und das Design des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Detailgrad kategorisiert, der für Benutzer unerwünscht sein könnte.

Aufgrund dieses Potenzials kann sich ein Browser dazu entscheiden, die zurückgegebenen Werte in gewisser Weise zu verfälschen, um zu verhindern, dass sie dazu verwendet werden, einen Computer präzise zu identifizieren. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn Firefox's "Resist Fingerprinting"-Einstellung aktiviert ist, geben viele Media-Queries Standardwerte anstelle von Werten zurück, die den tatsächlichen Gerätezustand darstellen.

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
```

Die Bereichssyntax ermöglicht weniger ausführliche Media-Queries beim Testen von Merkmalen, die einen Bereich akzeptieren, wie in den unten stehenden Beispielen gezeigt:

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

Für weitere Beispiele sehen Sie bitte [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS media queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
