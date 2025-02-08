---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{CSSRef}}

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) kann verwendet werden, um Teile eines Stylesheets basierend auf dem Ergebnis von einem oder mehreren [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Damit können Sie eine Media-Query und einen Block von CSS angeben, der auf das Dokument angewendet wird, wenn und nur wenn die Media-Query mit dem Gerät übereinstimmt, auf dem der Inhalt genutzt wird.

> [!NOTE]
> In JavaScript können die mit `@media` erstellten Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-CSS-Objektmodell-Schnittstelle abgerufen werden.

{{EmbedInteractiveExample("pages/tabbed/at-rule-media.html", "tabbed-standard")}}

## Syntax

Die `@media`-At-Regel kann entweder auf der obersten Ebene des Codes oder verschachtelt in einer anderen Bedingungsgruppe enthalten sein.

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

Eine Diskussion zur Syntax von Media-Queries finden Sie unter [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media-Query's `<media-query-list>` umfasst [`<media-type>`s](#media-typen), [`<media-feature>`s](#media-features) und [logische Operatoren](#logische_operatoren).

### Media-Typen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Außer bei Verwendung des logischen Operators `only` ist der Media-Typ optional, wobei standardmäßig der Typ `all` angenommen wird.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für paginierte Materialien und Dokumente, die auf einem Bildschirm in der Druckvorschau angezeigt werden. (Weitere Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind, finden Sie unter [paged media](/de/docs/Web/CSS/CSS_paged_media).)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Media-Typen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber diese wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) abgeschafft und sollten nicht verwendet werden.

### Media-Features

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung.
Media-Feature-Ausdrücke prüfen auf ihre Existenz, ihren Wert oder einen Wertebereich und sind vollständig optional. Jeder Media-Feature-Ausdruck muss in Klammern gesetzt werden.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Bietet irgendein verfügbares Eingabegerät die Möglichkeit, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät, und falls ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-Höhen-{{Glossary("aspect_ratio", "Seitenverhältnis")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder Null, falls das Gerät keine Farbe unterstützt.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbpalette, die vom User Agent und dem Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbauswahltabelle des Ausgabegeräts oder Null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-Höhen-Seitenverhältnis des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Darstellungsoberfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, d. h. ob das Ansichtsfenster in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Darstellungsoberfläche des Ausgabegeräts. Veraltet in Media Queries Level 4.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird, z. B. [Vollbildmodus](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [Bild-im-Bild](/de/docs/Web/CSS/@media/display-mode#picture-in-picture).
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/hover", "hover")}}
  - : Ermöglicht der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Kehrt der User Agent oder das zugrunde liegende Betriebssystem die Farben um?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im Monochrom-Rahmenspeicher des Ausgabegeräts oder Null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den Ansichtsfensterbereich in der Blockachse überfließen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann Inhalt, der den Ansichtsfensterbereich in der Inline-Achse überfließt, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und falls ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System angewiesen hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Inhalte mit geringerem Internetdatenverbrauch wünscht.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um transparente oder transluzente Effekte zu reduzieren.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Bildausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Skripting (z. B. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um zwischen rechteckigen und runden Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild des Inhalts ändern kann.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoplan-Ebene des User Agents und des Ausgabegeräts unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters einschließlich der Breite der Bildlaufleiste.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media-Query zu erstellen.
Sie können auch mehrere Media-Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Media-Features zu einer einzigen Media-Query zu kombinieren. Jedes verknüpfte Feature muss `true` zurückgeben, damit die Query `true` ergibt.
    Es wird auch verwendet, um Media-Features mit Media-Typen zu verbinden.
- `not`

  - : Dient zur Negierung einer Media-Query, sodass sie `true` zurückgibt, wenn die Query ansonsten `false` wäre.
    Befindet sich in einer durch Kommas getrennten Liste von Queries, wird nur die spezifische Query negiert, auf die sie angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not`-Schlüsselwort nicht verwendet werden, um einen einzelnen Media-Feature-Ausdruck zu negieren, sondern nur eine gesamte Media-Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Query übereinstimmt.
    Dies ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Ohne Verwendung von `only` würden ältere Browser die Query `screen and (max-width: 500px)` als `screen` interpretieren, den Rest der Query ignorieren und ihre Stile auf allen Bildschirmen anwenden.
    Wenn Sie den Operator `only` verwenden, _müssen_ Sie auch einen Media-Typ angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media-Queries zu einer einzigen Regel zu kombinieren.
    Jede Query in einer durch Kommas getrennten Liste wird unabhängig von den anderen behandelt.
    Wenn also eine der Queries in einer Liste `true` ist, gibt die gesamte Media-Query `true` zurück.
    Anders ausgedrückt verhalten sich Listen wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent-Client-Hinweise

Einige Media-Queries haben entsprechende [Client-Hinweise für User-Agents](/de/docs/Web/HTTP/Client_hints).
Dies sind HTTP-Header, die Inhalte anfordern, die vorab für bestimmte Medienanforderungen optimiert sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Personen gerecht zu werden, die die Textgröße einer Website anpassen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media-Queries oder [HTTP-User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), um die Nutzungserfahrung zu verbessern.
Zum Beispiel kann die Media-Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animationen oder Bewegungen basierend auf den Vorlieben der Benutzer zu minimieren.

## Sicherheit

Da Media-Queries Einblicke in die Fähigkeiten – und somit in die Eigenschaften und das Design – des Geräts liefern, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um ein {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, das das Gerät identifiziert oder es zumindest bis zu einem unerwünschten Detailgrad kategorisiert.

Aufgrund dieses Potenzials kann ein Browser die zurückgegebenen Werte in gewisser Weise "verschleiern", um deren Verwendung zur genauen Identifizierung eines Computers zu verhindern. Ein Browser könnte auch zusätzliche Maßnahmen anbieten; beispielsweise berichten viele Media-Queries in Firefox bei aktiviertem "Resist Fingerprinting"-Einstellungsmodus Standardwerte anstelle von Werten, die den tatsächlichen Gerätezustand repräsentieren.

## Beispiele

### Testen von Druck- und Bildschirm-Media-Typen

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

Die Bereichssyntax ermöglicht weniger ausführliche Media-Queries, wenn nach einem Feature gesucht wird, das einen Bereich akzeptiert, wie in den folgenden Beispielen gezeigt:

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

- [CSS-Media-Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [Verwendung von Media-Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle
- [Erweiterte Mozilla-Media-Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Media-Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
