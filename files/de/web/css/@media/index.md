---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{CSSRef}}

Die **`@media`** [CSS-](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Mit ihr spezifizieren Sie eine Media Query und einen Block von CSS, die auf das Dokument angewendet werden, wenn und nur dann, wenn die Media Query das Gerät trifft, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die {{domxref("CSSMediaRule")}} CSS Object Model Schnittstelle zugegriffen werden.

{{EmbedInteractiveExample("pages/tabbed/at-rule-media.html", "tabbed-standard")}}

## Syntax

Die `@media` At-Regel kann auf der obersten Ebene Ihres Codes oder verschachtelt innerhalb einer anderen bedingten Gruppenregel platziert werden.

```css
/* Auf der obersten Ebene Ihres Codes */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Verschachtelt innerhalb einer anderen bedingten At-Regel */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

Für eine Diskussion über die Syntax der Media Queries siehe bitte [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

### Medientypen

_Medientypen_ beschreiben die allgemeine Kategorie eines Geräts.
Außer bei Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Geeignet für paginierte Materialien und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm angesehen werden. (Bitte sehen Sie [Paged Media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsproblemen, die für diese Formate spezifisch sind.)
- `screen`
  - : Vorrangig für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, und `aural`), aber sie wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet erklärt und sollten nicht verwendet werden.

### Medienmerkmale

_Medienmerkmale_ beschreiben spezifische Eigenschaften des {{glossary("user agent")}}, Ausgangsgeräts oder der Umgebung.
Medienmerkmal-Ausdrücke testen deren Vorhandensein oder Wert und sind völlig optional. Jeder Medienmerkmal-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie präzise ist es?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe-{{glossary("Aspect Ratio")}} des sichtbaren Bereichs
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät keine Farbe unterstützt
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Reichweite der Farben, die vom Benutzeragenten und Ausgabegerät unterstützt werden.
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbsuchtabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe-Aspect Ratio des Ausgabegeräts.
    Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Anzeigefläche des Ausgabegeräts.
    Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Anzeigefläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [Fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Picture-in-Picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom Benutzeragenten und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der Benutzeragent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des sichtbaren Bereichs.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt das primäre Eingabegerät dem Benutzer, über Elemente zu schweben?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Kehrt der Benutzeragent oder das zugrundeliegende Betriebssystem Farben um?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des sichtbaren Bereichs.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den sichtbaren Bereich entlang der Blockachse überlaufen?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der den sichtbaren Bereich entlang der Inline-Achse überläuft, gescrollt werden?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabegerät ein Zeigegerät, und wenn ja, wie präzise ist es?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System aufgefordert hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder transluzenten Schichteffekte zu reduzieren, die auf dem Gerät verwendet werden.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeigeausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um zwischen rechteckigen und runden Anzeigen zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des Benutzeragenten und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des sichtbaren Bereichs einschließlich der Breite der Bildlaufleiste.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu komponieren.
Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale in einen einzelnen Media Query zu kombinieren, wobei jede verkettete Eigenschaft `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verbinden.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren, wobei `true` zurückgegeben wird, wenn die Abfrage ansonsten `false` zurückgeben würde.
    Wenn es in einer durch Kommas getrennten Liste von Abfragen vorhanden ist, wird es nur die spezifische Abfrage negieren, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmal-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn Sie `only` nicht verwenden, würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, wodurch die Stile auf allen Bildschirmen angewendet werden.
    Wenn Sie den `only`-Operator verwenden, _müssen Sie auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommata werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird getrennt von den anderen behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück.
    Mit anderen Worten, Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent-Client-Hinweise

Einige Media Queries haben entsprechende [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints).
Dies sind HTTP-Header, die Inhalte anfordern, die für die jeweilige Medienanforderung voroptimiert sind.
Sie beinhalten {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Barrierefreiheit

Um Personen, die die Textgröße einer Website anpassen, am besten entgegenzukommen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP-User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), um die Benutzererfahrung zu verbessern.
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animation oder Bewegung basierend auf Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten—und damit die Funktionen und das Design—des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen ["Fingerabdruck"](/de/docs/Glossary/Fingerprinting) zu erstellen, der das Gerät identifiziert oder zumindest in einem Maß detailliert kategorisiert, das Benutzern möglicherweise unerwünscht ist.

Aufgrund dieses Potenzials könnte ein Browser beschließen, die zurückgegebenen Werte in gewisser Weise zu verfälschen, um zu verhindern, dass sie verwendet werden, um einen Computer präzise zu identifizieren. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn die Einstellung "Fingerprinting widerstehen" in Firefox aktiviert ist, melden viele Media Queries Standardwerte anstelle der Werte, die den tatsächlichen Gerätezustand darstellen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Testen auf Druck- und Bildschirmmedientypen

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

Eingeführt in Media Queries Level 4 ist eine neue Bereichssyntax, die weniger umfangreiche Media Queries ermöglicht, wenn nach einer Funktion gesucht wird, die einen Bereich akzeptiert, wie in den folgenden Beispielen gezeigt:

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Using Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- In JavaScript kann auf `@media` über die CSS-Objektmodell-Schnittstelle {{domxref("CSSMediaRule")}} zugegriffen werden.
- [Erweiterte Mozilla Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
