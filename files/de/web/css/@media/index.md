---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [Regel](/de/docs/Web/CSS/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media Query und einen Block von CSS definieren, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die Regeln, die mit `@media` erstellt wurden, über die CSS-Objektmodell-Schnittstelle [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) zugegriffen werden.

{{EmbedInteractiveExample("pages/tabbed/at-rule-media.html", "tabbed-standard")}}

## Syntax

Die `@media`-Regel kann auf der obersten Ebene Ihres Codes platziert oder innerhalb einer anderen Bedingungsgruppe verschachtelt werden.

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

Für eine Diskussion der Syntax von Media Queries siehe [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

### Medientypen

_Medientypen_ beschreiben die allgemeine Kategorie eines Geräts. Außer bei Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Für paginierte Materialien und Dokumente gedacht, die im Druckvorschau-Modus auf einem Bildschirm angezeigt werden. (Siehe [paged media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind.)
- `screen`
  - : Hauptsächlich für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet eingestuft und sollten nicht verwendet werden.

### Medienfunktionen

_Medienfunktionen_ beschreiben spezifische Eigenschaften des {{Glossary("user_agent", "User-Agent")}}, des Ausgabegeräts oder der Umgebung. Medienfunktionsausdrücke testen auf ihre Anwesenheit oder ihren Wert und sind völlig optional. Jeder Medienfunktionsausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie präzise ist es?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Viewports
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig ist
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Palette an Farben, die vom User-Agent und dem Ausgabegerät unterstützt werden.
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbsuchpalette des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe-Seitenverhältnis des Ausgabegeräts.
    Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Oberfläche des Ausgabegeräts.
    Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Oberfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [Vollbild](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-im-Bild](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User-Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt das primäre Eingabegerät dem Benutzer, über Elemente zu schweben?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Der User-Agent oder das zugrunde liegende Betriebssystem invertiert Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den Viewport entlang der Blockachse überlaufen?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der den Viewport entlang der Inline-Achse überläuft, gescrollt werden?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabegerät ein Zeigegerät, und wenn ja, wie präzise ist es?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer eine helle oder dunkle Farbgestaltung bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkannte, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Effekte transparenter oder transluzenter Schichten zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Bildausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild von Inhalten ändern.
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User-Agents und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite des Scrollbalkens.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen. Mehrere Media Queries können durch Kommas in einer einzigen Regel kombiniert werden.

- `and`
  - : Wird verwendet, um mehrere Medienfunktionen in einer einzigen Media Query zu kombinieren, wobei jede verknüpfte Funktion `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienfunktionen mit Medientypen zu verknüpfen.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren und `true` zurückzugeben, wenn die Abfrage ansonsten `false` ergeben würde.
    Bei Vorhandensein in einer durch Kommas getrennten Liste von Abfragen wird nur die spezifische Abfrage negiert, auf die sie angewendet wird.

    > [!NOTE]
    > In Level 3 kann das Schlüsselwort `not` nicht verwendet werden, um einen einzelnen Medienfunktionsausdruck zu negieren, sondern nur eine ganze Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn Sie `only` nicht verwenden, würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, wobei sie ihre Stile auf allen Bildschirmen anwenden.
    Wenn Sie den `only`-Operator verwenden, müssen Sie _auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries in einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt.
    Somit wird, wenn eine der Abfragen in einer Liste `true` ist, die gesamte Media-Anweisung `true`.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### Client-Hinweise des User-Agents

Einige Media Queries haben entsprechende [Client-Hinweise des User-Agents](/de/docs/Web/HTTP/Client_hints). Dabei handelt es sich um HTTP-Header, die Inhalte anfordern, die für die jeweiligen Medienanforderungen vorab optimiert sind. Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Barrierefreiheit

Um denjenigen, die die Textgröße einer Website anpassen, am besten entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße im Browser ändert.

Erwägen Sie auch Media Queries oder [HTTP User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), um die Benutzererfahrung zu verbessern. Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animationen oder Bewegungen basierend auf Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten - und damit in die Funktionen und das Design - des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", ""Fingerabdruck"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Grad kategorisiert, was für Benutzer unerwünscht sein könnte.

Aufgrund dieses Potenzials kann ein Browser die zurückgegebenen Werte auf irgendeine Weise verfälschen, um deren Verwendung zur präzisen Identifikation eines Computers zu verhindern. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn Firefox' "Resist Fingerprinting"-Einstellung aktiviert ist, berichten viele Media Queries Standardwerte anstelle von Werten, die den tatsächlichen Gerätezustand darstellen.

## Formale Syntax

{{csssyntax}}

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

@media only screen and (min-width: 320px) and (max-width: 480px) and (resolution: 150dpi) {
  body {
    line-height: 1.4;
  }
}
```

In Media Queries Level 4 wurde eine neue Bereichssyntax eingeführt, die weniger umständliche Media Queries ermöglicht, wenn ein Bereich für eine Funktion getestet wird, wie in den folgenden Beispielen gezeigt:

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
- In JavaScript kann auf `@media` über die CSS-Objektmodell-Schnittstelle [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) zugegriffen werden.
- [Erweiterte Mozilla-Medienfunktionen](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienfunktionen](/de/docs/Web/CSS/WebKit_Extensions#media_features)
