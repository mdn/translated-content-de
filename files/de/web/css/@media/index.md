---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media Query und einen CSS-Block angeben, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt genutzt wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über das [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Interface abgerufen werden.

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

Die `@media` At-Regel kann auf oberster Ebene Ihres Codes platziert oder in eine andere bedingte Gruppen-At-Regel eingebettet werden.

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

Für eine Diskussion zur Media Query-Syntax, siehe [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media Query `<media-query-list>` umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienfeatures) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer bei Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Für Seitenmaterial und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden, vorgesehen. (Bitte siehe [Paged Media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu formatierungsspezifischen Fragen dieser Formate.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), die aber in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet markiert wurden und nicht verwendet werden sollten.

### Medienfeatures

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User-Agents")}}, des Ausgabegeräts oder der Umgebung.
Medien-Feature-Ausdrücke testen ihre Anwesenheit, ihren Wert oder ihren Wertebereich und sind völlig optional. Jeder Medien-Feature-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt es irgendeinem verfügbaren Eingabemechanismus, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbarer Eingabemechanismus ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbskala, die vom User-Agent und dem Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farb-Lookup-Tabelle des Ausgabegeräts oder null, wenn das Gerät eine solche Tabelle nicht verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe-Verhältnis des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Wiedergabeoberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, das heißt, ob der Viewport in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Wiedergabeoberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [Vollbildmodus](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-im-Bild-Modus](/de/docs/Web/CSS/@media/display-mode#picture-in-picture).
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User-Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt es der primäre Eingabemechanismus, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User-Agent oder das zugrunde liegende Betriebssystem Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts, oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie geht das Ausgabegerät mit Inhalt um, der den Viewport entlang der Blockachse überläuft?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der den Viewport entlang der Inline-Achse überläuft, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System angewiesen hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um durchsichtige oder transluzente Ebeneneffekte zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeigeausgabe progressiv oder verz interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts zur Unterscheidung von rechteckigen und runden Displays.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom Videoebene des User-Agents und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Bildlaufleiste.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu komponieren.
Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienfeatures zu einer einzigen Media Query zu kombinieren, die erfordert, dass jedes verkettete Feature `true` zurückgibt, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienfeatures mit Medientypen zu verbinden.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren, und gibt `true` zurück, wenn die Abfrage ansonsten `false` zurückgeben würde.
    Wenn es in einer kommagetrennten Liste von Abfragen vorhanden ist, wird es nur die spezifische Abfrage negieren, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not` Schlüsselwort nicht verwendet werden, um einen einzelnen Medienfeature-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn Sie `only` nicht verwenden, interpretierten ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` und ignorierten den Rest der Abfrage und wendeten die Stile auf allen Bildschirmen an.
    Wenn Sie den `only`-Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer kommagetrennten Liste wird separat von den anderen behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Erklärung `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent-Client-Hinweise

Einige Media Queries haben entsprechende [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints).
Diese sind HTTP-Header, die Inhalte anfordern, die für die jeweilige Medienanforderung voroptimiert sind.
Sie umfassen {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen bestmöglich zu unterstützen, die die Textgröße einer Website anpassen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints), um das Benutzererlebnis zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) dazu verwendet werden, die Menge an Animationen oder Bewegungen, die basierend auf Benutzerpräferenzen verwendet werden, zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten—und im weiteren Sinne, die Merkmale und das Design—des Geräts geben, das der Benutzer verwendet, besteht das Potenzial, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest in einem solchen Detailgrad kategorisiert, der für Benutzer unerwünscht sein könnte.

Aufgrund dieses Potentials kann ein Browser beschließen, die zurückgegebenen Werte in irgendeiner Weise zu verändern, um zu verhindern, dass sie verwendet werden, um einen Computer präzise zu identifizieren. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn die Firefox-Einstellung "Resist Fingerprinting" aktiviert ist, geben viele Media Queries Standardwerte zurück, anstatt die tatsächlichen Gerätezustände darzustellen.

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

Die Bereichssyntax ermöglicht weniger umfassende Media Queries beim Testen eines beliebigen Merkmals, das einen Bereich akzeptiert, wie in den folgenden Beispielen gezeigt:

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

- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Medienfeatures](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienfeatures](/de/docs/Web/CSS/WebKit_Extensions#media_features)
