---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um Teile eines Stylesheets basierend auf dem Ergebnis eines oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media Query und einen Block von CSS spezifizieren, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query das Gerät trifft, auf dem der Inhalt verwendet wird.

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

Die `@media` At-Regel kann auf der obersten Ebene Ihres Codes platziert oder in einer anderen bedingten Gruppenregel verschachtelt werden.

Für eine Diskussion der Media Query-Syntax siehe bitte die [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Die `<media-query-list>` einer Media Query umfasst [`<media-type>`s](#medientypen), [`<media-feature>`s](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer wenn der logische Operator `only` verwendet wird, ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Für paginierte Materialien und Dokumente vorgesehen, die auf einem Bildschirm im Druckvorschau-Modus angezeigt werden. (Bitte sehen Sie [Paged Media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu spezifischen Formatierungsfragen dieser Formate.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), die jedoch in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet gelten und nicht verwendet werden sollten.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User-Agents")}}, des Ausgabegeräts oder der Umgebung.
Medienmerkmal-Ausdrücke testen ihre Existenz, ihren Wert oder Wertebereiche und sind völlig optional. Jedes Medienmerkmal-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt ein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist ein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-Höhen-Verhältnis {{Glossary("aspect_ratio", "aspect ratio")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder Null, wenn das Gerät nicht farblich ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefährer Farbbereich, der vom User-Agent und Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbauswahltabelle des Ausgabegeräts oder Null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-Höhen-Verhältnis des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Oberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, das heißt, ob das Ansichtsfenster flach oder gefaltet ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Oberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird, beispielsweise [Vollbild](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-in-Bild](/de/docs/Web/CSS/@media/display-mode#picture-in-picture).
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agent und dem Ausgabegerät unterstützt werden.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User-Agent die Farbpalette einschränkt.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster- oder Bitmap-Display?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Werden die Farben vom User-Agent oder dem zugrunde liegenden Betriebssystem invertiert?
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder Null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die das Ansichtsfenster entlang der Blockachse überlaufen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der das Ansichtsfenster entlang der Inline-Achse überläuft, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System aufgefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die transparenten oder durchscheinenden Layereffekte des Geräts zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Displayausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild von Inhalten ändern.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User-Agent und dem Ausgabegerät unterstützt werden. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der Einheit `dppx` stattdessen.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präsentierte CSS {{cssxref("animation")}}. Verwenden Sie die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Funktionsabfrage stattdessen.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der Einheit `dppx` stattdessen.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit` präsentierte 2D-CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Funktionsabfrage stattdessen.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit` präsentiert 3D-CSS {{cssxref("transform")}}. Verwenden Sie die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Funktionsabfrage stattdessen.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit` präsentierte CSS {{cssxref("transition")}}. Verwenden Sie die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Funktionsabfrage stattdessen.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen.
Sie können auch mehrere Media Queries in eine einzige Regel kombinieren, indem Sie sie mit Kommata trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale in einer einzigen Media Query zu kombinieren, wobei jedes verknüpfte Merkmal `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verknüpfen.
- `not`
  - : Dient zum Negieren einer Media Query und gibt `true` zurück, wenn die Abfrage anderweitig `false` wäre.
    Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, negiert es nur die spezifische Abfrage, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not` Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmalausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur dann an, wenn eine gesamte Abfrage passt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn Sie `only` nicht verwenden, würden ältere Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren, den Rest der Abfrage ignorieren und ihre Stile auf alle Bildschirme anwenden.
    Wenn Sie den `only` Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommata werden verwendet, um mehrere Media Queries in eine einzige Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Medienaussage `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or` Operator.
- `or`
  - : Entspricht dem `,` Operator. In Media Queries Level 4 hinzugefügt.

### User-Agent-Client-Hints

Einige Media Queries haben entsprechende [User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints).
Dabei handelt es sich um HTTP-Header, die Inhalte anfordern, die vorab für die jeweilige Medienanforderung optimiert wurden.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Personen, die die Textgröße einer Website anpassen, bestmöglich entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Überlegen Sie auch, Media Queries oder [HTTP-User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) zu verwenden, um das Benutzererlebnis zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animationen oder Bewegungen zu minimieren, basierend auf den Benutzerpräferenzen.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten und damit in die Funktionen und das Design des Geräts, mit dem der Benutzer arbeitet, bieten, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest in einem für Benutzer unerwünschten Maße kategorisiert.

Aufgrund dieses Potentials kann ein Browser die zurückgegebenen Werte auf irgendeine Weise verfälschen, um deren Verwendung zur präzisen Identifizierung eines Computers zu verhindern. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn Firefoxs "Resist Fingerprinting"-Einstellung aktiviert ist, geben viele Media Queries Standardwerte zurück, anstatt Werte, die den tatsächlichen Gerätezustand repräsentieren.

## Beispiele

### Überprüfen von Druck- und Bildschirmmedientypen

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

Die Bereichssyntax ermöglicht weniger ausführliche Media Queries beim Prüfen von Merkmalen, die Bereiche akzeptieren, wie in den folgenden Beispielen gezeigt:

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

Für weitere Beispiele sehen Sie bitte die [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle
- [Erweiterte Mozilla Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
