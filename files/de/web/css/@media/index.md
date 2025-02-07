---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: a3d19af7e3eeb1c40748c80cd6b5143cfa201c54
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) kann verwendet werden, um Teile eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media Query und einen CSS-Block angeben, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle des CSS-Objektmodells abgerufen werden.

{{EmbedInteractiveExample("pages/tabbed/at-rule-media.html", "tabbed-standard")}}

## Syntax

Die `@media`-At-Regel kann entweder auf der obersten Ebene Ihres Codes oder verschachtelt innerhalb einer anderen bedingten Gruppenregel platziert werden.

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

Eine Diskussion über die Syntax von Media Queries finden Sie unter [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Die `<media-query-list>` einer Media Query umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Mit Ausnahme der Verwendung des logischen Operators `only` ist der Medientyp optional, und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für paginierte Materialien und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angesehen werden. (Siehe [Paged Media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu spezifischen Formatierungsproblemen bei diesen Formaten.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet markiert und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User-Agents")}}, des Ausgabegeräts oder der Umgebung. Medienmerkmalsausdrücke prüfen auf Vorhandensein, Wert oder Wertebereich und sind vollständig optional. Jeder Medienmerkmalsausdruck muss in Klammern eingeschlossen sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Ist ein Eingabemechanismus verfügbar, der es dem Benutzer erlaubt, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist ein Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist er?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Seitenverhältnis (Breite zu Höhe) des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät keine Farben unterstützt.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbskala, die vom User-Agent und dem Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbtabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Seitenverhältnis des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Darstellungsfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-posture", "device-posture")}} {{experimental_inline}}
  - : Erkennt die aktuelle Haltung des Geräts, d. h., ob sich der Viewport in einem flachen oder gefalteten Zustand befindet. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Darstellungsfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird, z. B. [Vollbildmodus](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-in-Bild-Modus](/de/docs/Web/CSS/@media/display-mode#picture-in-picture). In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agent und dem Ausgabegerät unterstützt werden. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User-Agent die Farbpalette einschränkt. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User-Agent oder das zugrunde liegende Betriebssystem die Farben? In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den Viewport entlang der Blockachse überlaufen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann der Inhalt, der den Viewport entlang der Inline-Achse überläuft, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System aufgefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Internet-Traffic verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder durchscheinenden Schichteffekte zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Gibt an, ob die Anzeigeausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Skripte (d. h., JavaScript) verfügbar sind. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild des Inhalts ändern.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die auf der Videoebene des User-Agents und des Ausgabegeräts unterstützt werden. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Scrollleiste.

### Logische Operatoren

Mit den _logischen Operatoren_ `not`, `and`, `only` und `or` können komplexe Media Queries erstellt werden.
Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzigen Media Query zu kombinieren, wobei jede verknüpfte Eigenschaft `true` zurückgeben muss, damit die Abfrage `true` ist.
    Wird auch zum Verknüpfen von Medienmerkmalen mit Medientypen verwendet.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren, die `true` zurückgibt, wenn die Abfrage andernfalls `false` zurückgeben würde.
    Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, negiert es nur die spezifische Abfrage, auf die es angewendet wird.
    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmalsausdruck zu negieren, sondern nur eine gesamte Media Query.
- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser bestimmte Stile anwenden.
    Wenn `only` nicht verwendet wird, würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren, den Rest der Abfrage ignorieren und ihre Stile auf allen Bildschirmen anwenden.
    Wenn Sie den `only`-Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Medienaussage `true` zurück.
    Anders ausgedrückt verhalten sich Listen wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. In Media Queries Level 4 hinzugefügt.

### User Agent Client Hints

Einige Media Queries haben entsprechende [User Agent Client Hints](/de/docs/Web/HTTP/Client_hints).
Dabei handelt es sich um HTTP-Header, die Inhalte anfordern, die voroptimiert für die spezifische Medienanforderung sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Personen, die die Textgröße einer Website ändern, besser gerecht zu werden, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) funktioniert besser, falls der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP User Agent Client Hints](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), um die Benutzererfahrung zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um basierend auf Benutzerpräferenzen die Animation oder Bewegung auf ein Minimum zu reduzieren.

## Sicherheit

Da Media Queries Einblicke in die Funktionen – und damit in die Merkmale und das Design – des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden können, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, mit dem das Gerät identifiziert oder zumindest bis zu einem gewissen Grad kategorisiert werden kann, was für Benutzer unerwünscht sein könnte.

Aufgrund dieses Potenzials kann sich ein Browser dafür entscheiden, die zurückgegebenen Werte in gewisser Weise zu ändern, um zu verhindern, dass sie zur genauen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; beispielsweise melden viele Media Queries in Firefox, wenn die Einstellung „Fingerprinting verhindern“ aktiviert ist, Standardwerte anstelle von Werten, die den tatsächlichen Gerätestatus darstellen.

## Beispiele

### Testen von Print- und Screen-Medientypen

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

Die Bereichssyntax ermöglicht weniger ausführliche Media Queries bei der Prüfung einer Funktion, die einen Bereich akzeptiert, wie in den folgenden Beispielen gezeigt:

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

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
