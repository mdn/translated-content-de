---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media Query und einen Block von CSS spezifizieren, der nur dann auf das Dokument angewendet wird, wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Schnittstelle zugegriffen werden.

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

Die `@media` At-Regel kann auf der obersten Ebene Ihres Codes oder verschachtelt innerhalb einer anderen bedingten Gruppenregel platziert werden.

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

Für eine Diskussion über die Syntax von Media Queries, siehe [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media Query's `<media-query-list>` umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer bei Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Beabsichtigt für paginierte Materialien und Dokumente, die auf einem Bildschirm im Druckvorschau-Modus angezeigt werden. (Siehe [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind.)
- `screen`
  - : Hauptsächlich für Bildschirme konzipiert.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber diese wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet erklärt und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "user agent")}}, des Ausgabegeräts oder der Umgebung.
Medienmerkmals-Ausdrücke testen auf ihre Präsenz, Wert oder Bereich von Werten und sind vollständig optional. Jeder Medienmerkmals-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-zu-Höhen-{{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbraumabdeckung, die vom Benutzeragenten und Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbtabelle des Ausgabegeräts oder null, wenn das Gerät eine solche Tabelle nicht verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-zu-Höhen-Seitenverhältnis des Ausgabegeräts. In Media Queries Level 4 als veraltet erklärt.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Oberfläche des Ausgabegeräts. In Media Queries Level 4 als veraltet erklärt.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erfasst die aktuelle Haltung des Geräts, das heißt, ob das Ansichtsfenster in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Oberfläche des Ausgabegeräts. In Media Queries Level 4 als veraltet erklärt.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: beispielsweise [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture)-Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom Benutzeragenten und dem Ausgabegerät unterstützt wird. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der Benutzeragent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt das primäre Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Kehrt der Benutzeragent oder das zugrunde liegende Betriebssystem die Farben um?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel in der Monochrom-Frame-Buffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Ausrichtung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die über das Ansichtsfenster entlang der Blockachse hinausgehen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der über das Ansichtsfenster entlang der Inline-Achse hinausgeht, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erfasst, ob der Benutzer das System gebeten hat, den Kontrast zwischen angrenzenden Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erfasst, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erfasst, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder durchscheinenden Schichteffekte zu reduzieren, die auf dem Gerät verwendet werden.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeigenausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erfasst, ob Skripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erfasst die Form des Geräts, um zwischen rechteckigen und runden Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des Benutzeragenten und dem Ausgabegerät unterstützt wird. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich Breite der Scrollleiste.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen.
Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzigen Media Query zu kombinieren, wobei jede verknüpfte Funktion `true` zurückgeben muss, damit die Query `true` ist.
    Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verknüpfen.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren, die `true` zurückgibt, wenn die Query andernfalls `false` zurückgeben würde.
    Wenn es in einer kommagetrennten Liste von Queries vorhanden ist, negiert es nur die spezifische Query, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not` Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmal-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur dann an, wenn eine gesamte Query übereinstimmt.
    Dies ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn `only` nicht verwendet wird, würden ältere Browser die Query `screen and (max-width: 500px)` als `screen` interpretieren und den Rest der Query ignorieren und ihre Stile auf alle Bildschirme anwenden.
    Wenn Sie den `only` Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Query in einer kommagetrennten Liste wird separat von den anderen behandelt
    Wenn also eine der Queries in einer Liste `true` ist, gibt die gesamte Media-Aussage `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,` Operator. Hinzugefügt in Media Queries Level 4.

### Hinweise zum Benutzeragenten-Client

Einige Media Queries haben entsprechende [Client-Hinweise zum Benutzeragenten](/de/docs/Web/HTTP/Client_hints).
Diese sind HTTP-Header, die Inhalte anfordern, die für das jeweilige Medienerfordernis vorab optimiert sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Personen, die die Textgröße einer Website anpassen, bestmöglich entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Erwägen Sie auch Media Queries oder [HTTP-Client-Hinweise zum Benutzeragenten](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), um die Benutzererfahrung zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) verwendet werden, um die Menge an Animationen oder Bewegungen basierend auf den Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten und damit in die Funktionen und das Design des Geräts bieten, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie dazu missbraucht werden könnten, einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erzeugen, der das Gerät identifiziert oder es zumindest in einem Maß kategorisiert, das für Benutzer möglicherweise unerwünscht ist.

Aufgrund dieses Potenzials könnte ein Browser optieren, die zurückgegebenen Werte in irgendeiner Weise zu verfälschen, um zu verhindern, dass sie verwendet werden, um einen Computer genau zu identifizieren. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich bieten; beispielsweise berichten viele Media Queries in Firefox, wenn die Option "Resist Fingerprinting" aktiviert ist, Standardwerte anstelle von Werten, die den tatsächlichen Gerätezustand darstellen.

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

Die Bereichssyntax ermöglicht weniger umständliche Media Queries beim Testen von Funktionen, die einen Bereich akzeptieren, wie in den folgenden Beispielen gezeigt:

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

Weitere Beispiele finden Sie unter [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
