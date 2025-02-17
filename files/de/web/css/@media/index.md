---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`@media`**- [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um Teile eines Stylesheets basierend auf dem Ergebnis von einer oder mehreren [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Mit dieser können Sie eine Media Query und einen Block von CSS angeben, der auf das Dokument angewendet wird, wenn und nur wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt genutzt wird.

> [!NOTE]
> In JavaScript können mit der `@media`-Regel erstellte Regeln über die [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-CSS-Objektmodell-Schnittstelle abgerufen werden.

{{EmbedInteractiveExample("pages/tabbed/at-rule-media.html", "tabbed-standard")}}

## Syntax

Die `@media`-At-Regel kann entweder auf oberster Ebene Ihres Codes oder innerhalb einer anderen bedingten Gruppierung von At-Regeln platziert werden.

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

Für eine Diskussion zur Syntax von Media Queries schauen Sie bitte unter [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) nach.

## Beschreibung

Die `<media-query-list>` einer Media Query enthält [`<media-type>`s](#media-typen), [`<media-feature>s`](#media-features) und [logische Operatoren](#logische_operatoren).

### Media-Typen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts. 
Außer bei Verwendung des logischen Operators `only` ist der Media-Typ optional, und der Typ `all` wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Bestimmt für Paged Material und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm betrachtet werden. (Bitte schauen Sie unter [paged media](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind.)
- `screen`
  - : Hauptsächlich für Bildschirme gedacht.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Media-Typen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber diese wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet gekennzeichnet und sollten nicht verwendet werden.

### Media-Features

Ein _`<media feature>`_ beschreibt spezifische Eigenschaften des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung. 
Media-Feature-Ausdrücke testen ihre Anwesenheit, ihren Wert oder Wertebereiche und sind vollständig optional. Jeder Media-Feature-Ausdruck muss in Klammern gesetzt sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt ein verfügbares Eingabegerät dem Nutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist ein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-zu-Höhen-{{Glossary("aspect_ratio", "Seitenverhältnis")}} des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder Null, wenn das Gerät keine Farbe unterstützt.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbraumreichweite, die vom User Agent und Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbtabelle des Ausgabegeräts oder Null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-zu-Höhen-Seitenverhältnis des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Fläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, also ob der Viewport in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Fläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung dargestellt wird, z. B. [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture)-Modus.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt wird. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User Agent die Farbpalette einschränkt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Nutzt das Gerät ein Raster- oder Bitmap-Display?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Viewports.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus dem Nutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrundeliegende Betriebssystem Farben?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder Null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Orientierung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die den Viewport entlang der Blockachse überlaufen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Können Inhalte, die den Viewport entlang der Inline-Achse überlaufen, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Nutzer ein helles oder dunkles Farbschema bevorzugt.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Nutzer das System angewiesen hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Nutzer Inhalte bevorzugt, die weniger Internet-Traffic erfordern.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Nutzer bevorzugt weniger Bewegung auf der Seite.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob der Nutzer eine Einstellung aktiviert hat, die transparente oder transluzente Schichten auf dem Gerät reduziert.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Zeigt an, ob die Bildausgabe progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Skripting (z. B. JavaScript) verfügbar ist.
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um zwischen rechteckigen und runden Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild von Inhalten ändern.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User Agents und Ausgabegeräts unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Viewports einschließlich der Breite der Scrollleiste.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zusammenzustellen.
Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Media-Features zu einer einzigen Media Query zu kombinieren, wobei jedes verknüpfte Feature `true` zurückgeben muss, damit die Query `true` ist.
    Es wird auch verwendet, um Media-Features mit Media-Typen zu verbinden.
- `not`

  - : Wird verwendet, um eine Media Query zu negieren, indem `true` zurückgegeben wird, wenn die Query ansonsten `false` zurückgeben würde.
    Wenn es in einer kommagetrennten Liste von Queries vorhanden ist, negiert es nur die spezielle Query, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das Schlüsselwort `not` nicht verwendet werden, um einen einzelnen Media-Feature-Ausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Query übereinstimmt.
    Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden.
    Wenn Sie `only` nicht verwenden, würden ältere Browser die Query `screen and (max-width: 500px)` als `screen` interpretieren, den Rest der Query ignorieren und ihre Stile auf alle Bildschirme anwenden.
    Wenn Sie den Operator `only` verwenden, müssen Sie _auch_ einen Media-Typ angeben.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren.
    Jede Query in einer kommagetrennten Liste wird separat von den anderen behandelt.
    Wenn also eine der Queries in einer Liste `true` ist, gibt die gesamte Media-Anweisung `true` zurück.
    Mit anderen Worten: Listen verhalten sich wie ein logischer `or`-Operator.
- `or`
  - : Entspricht dem `,`-Operator. Hinzugefügt in Media Queries Level 4.

### User-Agent-Client-Hinweise

Einige Media Queries haben entsprechende [User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints). 
Dies sind HTTP-Header, die Inhalte anfordern, die für die spezifischen Media-Anforderungen voroptimiert sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, bestmöglich zu unterstützen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types) funktioniert besser, wenn der Nutzer die Textgröße des Browsers ändert.

Erwägen Sie außerdem Media Queries oder [HTTP-User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints), um die Benutzererfahrung zu verbessern. 
Zum Beispiel kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwendet werden, um die Menge an Animation oder Bewegung basierend auf Nutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Fähigkeiten - und somit in die Merkmale und das Design - des Geräts geben, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Grad kategorisiert, was für Nutzer möglicherweise unerwünscht ist.

Aufgrund dieses Potenzials könnte ein Browser beschließen, die zurückgegebenen Werte auf irgendeine Weise zu verfälschen, um zu verhindern, dass sie verwendet werden, um einen Computer präzise zu identifizieren. 
Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; zum Beispiel, wenn in Firefox die Einstellung "Resist Fingerprinting" aktiviert ist, melden viele Media Queries Standardwerte anstelle von Werten, die den tatsächlichen Gerätestatus darstellen.

## Beispiele

### Testen von Print- und Bildschirm-Media-Typen

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

Mit der Bereichs-Syntax sind weniger ausführliche Media Queries möglich, wenn eine Funktion getestet wird, die einen Bereich akzeptiert, wie in den folgenden Beispielen gezeigt:

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

Für weitere Beispiele sehen Sie bitte [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Media Queries](/de/docs/Web/CSS/CSS_media_queries)-Modul
- [Using media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)-Schnittstelle
- [Erweiterte Mozilla-Media-Features](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Media-Features](/de/docs/Web/CSS/WebKit_Extensions#media_features)
