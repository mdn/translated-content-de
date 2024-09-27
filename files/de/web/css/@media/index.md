---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) kann verwendet werden, um einen Teil eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Mit ihr können Sie eine Media Query und einen Block von CSS angeben, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query das Gerät, auf dem der Inhalt verwendet wird, übereinstimmt.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über das [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Interface abgerufen werden.

{{EmbedInteractiveExample("pages/tabbed/at-rule-media.html", "tabbed-standard")}}

## Syntax

Die `@media`-At-Regel kann auf der obersten Ebene Ihres Codes platziert oder in jede andere bedingte Gruppen-At-Regel verschachtelt werden.

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

Eine Diskussion der Syntax von Media Queries finden Sie unter [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

### Medientypen

_Medientypen_ beschreiben die allgemeine Kategorie eines Geräts. Außer bei Verwendung des logischen Operators `only` ist der Medientyp optional und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für Paginierungsmaterial und Dokumente, die auf einem Bildschirm im Druckvorschau-Modus angesehen werden. (Bitte siehe [Paged Media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber diese wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) veraltet und sollten nicht verwendet werden.

### Medienfeatures

_Medienfeatures_ beschreiben spezifische Eigenschaften des [User-Agents](/de/docs/Glossary/user_agent), des Ausgabegeräts oder der Umgebung. Medienfeature-Ausdrücke testen auf deren Vorhandensein oder Wert und sind vollständig optional. Jeder Medienfeature-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Ermöglicht irgendein verfügbares Eingabegerät dem Benutzer, über Elemente zu schweben?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breite-zu-Höhe-[Verhältnis](/de/docs/Glossary/aspect_ratio) des Ansichtsfensters
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts, oder null, wenn das Gerät keine Farben ausgibt
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Bandbreite der Farben, die vom User-Agent und Ausgabegerät unterstützt werden.
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbtabelle des Ausgabegerätes oder null, falls das Gerät keine solche Tabelle verwendet
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breite-zu-Höhe-Verhältnis des Ausgabegerätes.
    Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Renderingoberfläche des Ausgabegerätes.
    Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Renderingoberfläche des Ausgabegerätes. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird, z.B. [Vollbild](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-im-Bild](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User-Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User-Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster- oder Bitmapbildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/hover", "hover")}}
  - : Ermöglicht der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User-Agent oder das zugrunde liegende Betriebssystem die Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts, oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Ausrichtung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie geht das Ausgabegerät mit Inhalten um, die das Ansichtsfenster entlang der Blockachse überfließen?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der das Ansichtsfenster entlang der Inline-Achse überfließt, gescrollt werden?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte bevorzugt, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die transparenten oder durchscheinenden Schichteffekte zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegerätes.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Anzeigeausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Scripting (d.h. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um zwischen rechteckigen und runden Anzeigen zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild von Inhalten ändern.
    Hinzugefügt in Media Queries Level 4.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User-Agents und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich der Breite der Bildlaufleiste.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu komponieren. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienfeatures zu einer einzigen Media Query zu kombinieren, wobei jede verkettete Funktion `true` zurückgeben muss, damit die Abfrage `true` ist.
    Es wird auch zum Verbinden von Medienfeatures mit Medientypen verwendet.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren, wobei `true` zurückgegeben wird, wenn die Abfrage sonst `false` zurückgeben würde.
    Ist es in einer durch Kommas getrennten Liste von Abfragen vorhanden, wird nur die spezifische Abfrage negiert, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Keyword nicht verwendet werden, um einen einzelnen Medienfeature-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage zutrifft.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn Sie `only` nicht verwenden, würden ältere Browser die Abfrage `screen and (max-width: 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, die Stile auf alle Bildschirme anwenden.
    Wenn Sie den `only`-Operator verwenden, müssen Sie _auch_ einen Medientyp angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Abfrage in einer durch Kommas getrennten Liste wird von den anderen getrennt behandelt.
    Wenn also eine der Abfragen in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück.
    Mit anderen Worten verhalten sich Listen wie ein logischer `or`-Operator.
- `or`
  - : Ist äquivalent zum `,`-Operator. Hinzugefügt in Media Queries Level 4.

### Hinweise der User-Agent-Clients

Einige Media Queries haben entsprechende [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints). Dies sind HTTP-Header, die Inhalte anfordern, die voroptimiert für die jeweilige Medienanforderung sind. Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, am besten zu berücksichtigen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP-User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), um die Benutzererfahrung zu verbessern. Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um basierend auf Benutzereinstellungen die Menge an Animationen oder Bewegungen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten — und somit in die Funktionen und das Design — des Geräts bieten, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen ["Fingerabdruck"](/de/docs/Glossary/Fingerprinting) zu erstellen, der das Gerät identifiziert oder es zumindest so detailliert kategorisiert, dass dies für Benutzer nicht wünschenswert sein könnte.

Aufgrund dieses Potenzials kann sich ein Browser entscheiden, die zurückgegebenen Werte in irgendeiner Weise zu verfälschen, um zu verhindern, dass sie zur genauen Identifizierung eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; beispielsweise berichten viele Media Queries Standardwerte anstelle von Werten, die den tatsächlichen Gerätestatus repräsentieren, wenn die Firefox-Einstellung "Fingerabdruckresistenz" aktiviert ist.

## Formale Syntax

{{csssyntax}}

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

In Media Queries Level 4 wurde eine neue Bereichssyntax eingeführt, die weniger umständliche Media Queries ermöglicht, wenn auf ein Feature getestet wird, das einen Bereich akzeptiert, wie in den folgenden Beispielen gezeigt:

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

Weitere Beispiele finden Sie unter [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- In JavaScript kann `@media` über die CSS-Objektmodell-Interface [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) zugegriffen werden.
- [Erweiterte Mozilla-Medienfeatures](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienfeatures](/de/docs/Web/CSS/WebKit_Extensions#media_features)
