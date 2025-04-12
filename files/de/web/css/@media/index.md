---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{CSSRef}}

Die **`@media`**-Anweisung ([CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule)) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis von einem oder mehreren [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit spezifizieren Sie eine Media Query und einen Block von CSS, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

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

Die `@media`-Anweisung kann auf der obersten Ebene Ihres Codes oder verschachtelt in einer anderen bedingten Gruppen-Anweisung platziert werden.

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

Für eine Diskussion der Media-Query-Syntax siehe bitte [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media Query `<media-query-list>` beinhaltet [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und logische Operatoren.

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts. Der Medientyp ist optional, es sei denn, der logische Operator `only` wird verwendet, dann wird der Typ `all` impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für paginierte Materialien und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden. (Für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind, siehe [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media).)
- `screen`
  - : Vorrangig für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), die jedoch in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet angesehen werden und nicht verwendet werden sollten.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung. Medienmerkmale-Ausdrücke testen das Vorhandensein, den Wert oder den Bereich von Werten und sind vollständig optional. Jeder Medienmerkmale-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-zu-Höhen-Verhältnis des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts, oder null, wenn das Gerät nicht farbfähig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Bandbreite der Farben, die vom User Agent und Ausgabegerät unterstützt werden.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbnachschlagetabelle des Ausgabegeräts, oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-zu-Höhen-Verhältnis des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Oberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, also ob der Viewport in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Oberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: beispielsweise [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Gitter- oder Bitmap-Display?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrunde liegende Betriebssystem die Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den Viewport entlang der Block-Achse überfluten?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der den Viewport entlang der Inline-Achse überflutet, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennen, ob der Benutzer das System aufgefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennen, ob der Benutzer angefordert hat, dass Webinhalte weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Effekte transparenter oder transluzenter Schichten zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeigeausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennen, ob Skripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild des Inhalts ändern kann.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom Videoplane des User Agents und des Ausgabegeräts unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Der Browser unterstützt `-webkit` präfiziertes CSS {{cssxref("animation")}}. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Feature-Abfrage.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Der Browser unterstützt `-webkit` präfiziertes 2D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Abfrage.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit` präfiziertes 3D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Feature-Abfrage.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Der Browser unterstützt `-webkit` präfiziertes CSS {{cssxref("transition")}}. Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Feature-Abfrage.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie durch Kommata trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale in einer einzigen Media Query zusammenzufassen, die erfordert, dass jedes verkettete Merkmal `true` zurückgibt, damit die Abfrage `true` ist. Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verbinden.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren und `true` zurückzugeben, wenn die Abfrage ansonsten `false` zurückgeben würde. Wenn es in einer durch Kommata getrennten Liste von Abfragen vorhanden ist, negiert es nur die spezifische Abfrage, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das Schlüsselwort `not` nicht verwendet werden, um einen einzelnen Medienmerkmale-Ausdruck zu negieren, sondern nur eine ganze Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt. Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden. Ohne die Verwendung von `only` würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren, den Rest der Abfrage ignorieren und ihre Stile auf alle Bildschirme anwenden. Wenn Sie den `only` Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren. Jede Abfrage in einer durch Kommata getrennten Liste wird separat von den anderen behandelt. Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media Aussage `true` zurück. Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,` Operator. Hinzugefügt in Media Queries Level 4.

### User Agent Client Hints

Einige Media Queries haben entsprechende [User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints). Dies sind HTTP-Header, die Inhalte anfordern, die für die spezifische Medienanforderung vorab optimiert sind. Sie beinhalten {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Seite anpassen, optimal zu berücksichtigen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie in Ihren [media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) eine {{cssxref("&lt;length&gt;")}} benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Erwägen Sie auch, Media Queries oder [HTTP User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) zu verwenden, um das Benutzererlebnis zu verbessern. Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der äquivalente HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animation oder Bewegung zu minimieren, die basierend auf den Benutzereinstellungen verwendet wird.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten—und in der Verlängerung, die Merkmale und das Design—des Geräts bieten, mit dem der Benutzer arbeitet, besteht das Potenzial, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest in einem Detailgrad kategorisiert, der für die Benutzer möglicherweise unerwünscht ist.

Aufgrund dieses Potenzials könnte ein Browser die zurückgegebenen Werte auf irgendeine Weise verfälschen, um zu verhindern, dass sie zur genauen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel berichten viele Media Queries Standardwerte anstelle der tatsächlichen Gerätestatuswerte, wenn die "Resist Fingerprinting"-Einstellung von Firefox aktiviert ist.

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

Die Bereichssyntax ermöglicht weniger ausführliche Media Queries beim Testen eines beliebigen Merkmals, das einen Bereich akzeptiert, wie in den nachfolgenden Beispielen gezeigt:

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

- [CSS media queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
