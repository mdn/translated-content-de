---
title: "@media"
slug: Web/CSS/Reference/At-rules/@media
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Mit `@media` können Sie eine Media Query und einen Block aus CSS bestimmen, die auf das Dokument angewendet werden, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt genutzt wird.

> [!NOTE]
> In JavaScript können die Regeln, die mit `@media` erstellt wurden, mit der [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objekt-Modellschnittstelle abgerufen werden.

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

Die `@media` At-Regel kann auf oberster Ebene Ihres Codes oder verschachtelt innerhalb einer anderen Bedingungsgruppe-At-Regel platziert werden.

Für eine Diskussion der Syntax von Media Queries sehen Sie bitte [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Die `<media-query-list>` einer Media Query beinhaltet [`<media-type>`s](#medien-typen), [`<media-feature>s`](#medien-features) und [logische Operatoren](#logische_operatoren).

### Medien-Typen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts. Außer bei der Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für paginierte Materialien und Dokumente, die auf einem Bildschirm im Druckvorschau-Modus angezeigt werden. (Bitte sehen Sie sich [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media) für Informationen über Formatprobleme, die spezifisch für diese Formate sind, an.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet markiert und sollten nicht verwendet werden.

### Medien-Features

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User-Agents")}}, Ausgabegeräts oder der Umgebung. Medienfeature-Ausdrücke testen auf ihre Anwesenheit, ihren Wert oder Bereich von Werten und sind vollständig optional. Jeder Medienfeature-Ausdruck muss in Klammern gesetzt sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Ermöglicht irgendein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät und, falls ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-zu-Höhen {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät keine Farbe darstellt.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Anzahl von Farben, die vom User-Agent und Ausgabegerät unterstützt werden.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbauswahltabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-zu-Höhen Seitenverhältnis des Ausgabegeräts. In Medienabfragen Level 4 als veraltet markiert.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Wiedergabefläche des Ausgabegeräts. In Medienabfragen Level 4 als veraltet markiert.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, das bedeutet, ob das Ansichtsfenster in einem flachen oder gefalteten Zustand ist. Definiert in der [Gerätehaltung-API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Wiedergabefläche des Ausgabegeräts. In Medienabfragen Level 4 als veraltet markiert.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [Vollbildmodus](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#fullscreen) oder [Bild-in-Bild-Modus](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#picture-in-picture). Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination der Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User-Agent die Farbpalette einschränkt. Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Gitter- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von horizontal angeordneten Ansichtsfenstersegmenten hat.
- {{cssxref("@media/hover", "hover")}}
  - : Ermöglicht das primäre Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User-Agent oder das zugrunde liegende Betriebssystem Farben? Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im Monochrom-Frame-Buffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die entlang der Blockachse über das Ansichtsfenster hinausgehen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Können Inhalte, die entlang der Inline-Achse über das Ansichtsfenster hinausgehen, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabegerät ein Zeigegerät, und falls ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt. Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer webbasierte Inhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite. Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder durchscheinenden Schichteffekte zu reduzieren, die auf dem Gerät verwendet werden.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeigenausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Skripting (d.h. JavaScript) verfügbar ist. Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Anzeigen zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Erkennt, ob das Gerät eine bestimmte Anzahl von vertikal angeordneten Ansichtsfenstersegmenten hat. Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User-Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Medienabfragen Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution)-Feature mit der `dppx`-Einheit.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präfixierte CSS {{cssxref("animation")}}. Verwenden Sie stattdessen die Feature-Abfrage [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Anzahl der Geräte-Pixel pro CSS-Pixel. Verwenden Sie stattdessen das [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution)-Feature mit der `dppx`-Einheit.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 2D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die Feature-Abfrage [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 3D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die Feature-Abfrage [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-präfixierte CSS {{cssxref("transition")}}. Verwenden Sie stattdessen die Feature-Abfrage [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports).

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen. Sie können auch mehrere Media Queries zu einer Regel kombinieren, indem Sie sie durch Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medien-Features zu einer einzigen Media Query zu kombinieren, wobei jedes verkettete Feature `true` sein muss, damit die Abfrage `true` ist. Es wird auch verwendet, um Medien-Features mit Medientypen zu verbinden.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren, indem `true` zurückgegeben wird, wenn die Abfrage ansonsten `false` zurückgeben würde. Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, wird nur die spezifische Abfrage negiert, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienfeature-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur dann an, wenn eine gesamte Abfrage übereinstimmt. Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden. Wenn Sie `only` nicht verwenden, würden ältere Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren, den Rest der Abfrage ignorieren und ihre Stile auf allen Bildschirmen anwenden. Wenn Sie den `only`-Operator verwenden, _müssen_ Sie auch einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren. Jede Abfrage in einer durch Kommas getrennten Liste wird getrennt von den anderen behandelt. Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück. Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Medienabfragen Level 4.

### User-Agent-Client-Hinweise

Einige Media Queries haben entsprechende [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints). Dabei handelt es sich um HTTP-Header, die nach Inhalten verlangen, die für das jeweilige Medienerfordernis voroptimiert sind. Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen gerecht zu werden, die die Textgröße einer Website anpassen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types)s, wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_values_and_units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Browser-Textgröße ändert.

Erwägen Sie auch, Media Queries oder [HTTP-User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) zu verwenden, um die Benutzererfahrung zu verbessern. Beispielsweise kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge der verwendeten Animationen oder Bewegungen basierend auf den Vorlieben des Benutzers zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten und dementsprechend die Funktionen und das Design des Geräts bieten, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerabdruck\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest in einem unerwünschten Detailgrad kategorisiert.

Aufgrund dieses Potenzials kann ein Browser beschließen, die zurückgegebenen Werte in irgendeiner Weise zu verfälschen, um zu verhindern, dass sie zur genauen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; beispielsweise melden viele Media Queries in Firefox, wenn die "Fingerprinting-Widerstand"-Einstellung aktiviert ist, Standardwerte statt der Werte, die den tatsächlichen Gerätezustand darstellen.

## Beispiele

### Testen von Medien-Typen für Druck und Bildschirm

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

Die Range-Syntax ermöglicht weniger umständliche Media Queries beim Testen für jedes Feature, das einen Bereich akzeptiert, wie die folgenden Beispiele zeigen:

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

Für weitere Beispiele sehen Sie bitte [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla Medien-Features](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit Medien-Features](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
