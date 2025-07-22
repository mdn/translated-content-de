---
title: "@media"
slug: Web/CSS/@media
l10n:
  sourceCommit: 6ca92a0367203aee71e98c6c7b1501b5dc9a1fe0
---

Die **`@media`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) kann verwendet werden, um Teile eines Stylesheets basierend auf dem Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) anzuwenden. Mit ihr können Sie eine Media Query und einen CSS-Block spezifizieren, der nur dann auf das Dokument angewendet wird, wenn die Media Query mit dem Gerät übereinstimmt, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können die Regeln, die mittels `@media` erstellt wurden, mit der [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) CSS-Objektmodell-Schnittstelle abgerufen werden.

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

Die `@media` At-Regel kann entweder auf der oberen Ebene Ihres Codes oder innerhalb einer anderen bedingten Gruppen-At-Regel geschachtelt sein.

Für eine Diskussion der Media Query-Syntax siehe bitte [Media Queries verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

## Beschreibung

Eine Media Query `<media-query-list>` umfasst [`<media-type>`s](#medientypen), [`<media-feature>s`](#medienmerkmale) und [logische Operatoren](#logische_operatoren).

### Medientypen

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts. Außer wenn der logische Operator `only` verwendet wird, ist der Medientyp optional und der `all`-Typ wird impliziert.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Vorgesehen für Pagematerial und Dokumente, die im Druckvorschau-Modus auf einem Bildschirm betrachtet werden. (Siehe [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) für Informationen zu Formatierungsproblemen, die spezifisch für diese Formate sind.)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Medientypen (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`), aber diese wurden in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet erklärt und sollten nicht verwendet werden.

### Medienmerkmale

Ein _`<media feature>`_ beschreibt spezifische Merkmale des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung. Medienmerkmal-Ausdrücke testen auf ihre Existenz, ihren Wert oder einen Wertebereich und sind völlig optional. Jeder Medienmerkmal-Ausdruck muss von Klammern umgeben sein.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Erlaubt irgendein verfügbares Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabemechanismus ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Breiten-zu-Höhen-Verhältnis {{Glossary("aspect_ratio", "aspect ratio")}} des Ansichtsfensters.
- {{cssxref("@media/color", "color")}}
  - : Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät nicht farbig ist.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Ungefähre Farbpalette, die vom User Agent und dem Ausgabegerät unterstützt wird.
- {{cssxref("@media/color-index", "color-index")}}
  - : Anzahl der Einträge in der Farbsuchliste des Ausgabegeräts oder null, wenn das Gerät eine solche Liste nicht verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Breiten-zu-Höhen-Verhältnis des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-height", "device-height")}}
  - : Höhe der Rendering-Oberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, das heißt, ob das Ansichtsfenster in einem flachen oder gefalteten Zustand ist. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Breite der Rendering-Oberfläche des Ausgabegeräts. In Media Queries Level 4 veraltet.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird: zum Beispiel [fullscreen](/de/docs/Web/CSS/@media/display-mode#fullscreen) oder [picture-in-picture](/de/docs/Web/CSS/@media/display-mode#picture-in-picture) Modus. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die vom User Agent und dem Ausgabegerät unterstützt wird. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennen, ob der User Agent die Farbpalette einschränkt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät ein Raster oder einen Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Höhe des Ansichtsfensters.
- {{cssxref("@media/hover", "hover")}}
  - : Erlaubt der primäre Eingabemechanismus dem Benutzer, über Elemente zu schweben?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Kehrt der User Agent oder das zugrundeliegende Betriebssystem Farben um?
    Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Ausrichtung des Ansichtsfensters.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die das Ansichtsfenster entlang der Block-Achse überlaufen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Kann der Inhalt, der das Ansichtsfenster entlang der Inline-Achse überläuft, gescrollt werden?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist der primäre Eingabemechanismus ein Zeigegerät und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennen, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer das System gebeten hat, den Kontrast zwischen benachbarten Farben zu erhöhen oder zu verringern. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Nutzer um Web-Inhalte gebeten hat, die weniger Internetverkehr verbrauchen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die transparenten oder durchscheinenden Schichteffekte zu reduzieren, die auf dem Gerät verwendet werden.
- {{cssxref("@media/resolution", "resolution")}}
  - : Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob Ausgabedisplay progressiv oder interlaced ist.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Skripte (d.h. JavaScript) verfügbar sind. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um rechteckige und runde Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig kann das Ausgabegerät das Erscheinungsbild von Inhalten ändern.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Kombination von Helligkeit, Kontrastverhältnis und Farbtiefe, die von der Videoebene des User Agents und des Ausgabegeräts unterstützt werden. Hinzugefügt in Media Queries Level 5.
- {{cssxref("@media/width", "width")}}
  - : Breite des Ansichtsfensters inklusive Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der `dppx` Einheit.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt `-webkit`-präfixierte CSS {{cssxref("animation")}}. Verwenden Sie stattdessen die [`@supports (animation)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen die [`resolution`](/de/docs/Web/CSS/@media/resolution) Funktion mit der `dppx` Einheit.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 2D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt `-webkit`-präfixierte 3D CSS {{cssxref("transform")}}. Verwenden Sie stattdessen die [`@supports (transform)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt `-webkit`-präfixierten CSS {{cssxref("transition")}}. Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.

### Logische Operatoren

Die _logischen Operatoren_ `not`, `and`, `only` und `or` können verwendet werden, um eine komplexe Media Query zu erstellen. Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie mit Kommas trennen.

- `and`
  - : Wird verwendet, um mehrere Medienmerkmale zu einer einzelnen Media Query zu kombinieren, wobei jedes zusammengefügte Merkmal `true` zurückgeben muss, damit die Abfrage `true` ist. Es wird auch verwendet, um Medienmerkmale mit Medientypen zu verbinden.
- `not`
  - : Wird verwendet, um eine Media Query zu negieren, wobei `true` zurückgegeben wird, wenn die Abfrage andernfalls `false` zurückgeben würde. Wenn es in einer durch Kommas getrennten Liste von Abfragen vorkommt, wird es nur die Abfrage negieren, auf die es angewendet wird.

    > [!NOTE]
    > In Level 3 kann das `not` Schlüsselwort nicht verwendet werden, um einen einzelnen Medienmerkmalausdruck zu negieren, sondern nur eine gesamte Media Query.

- `only`
  - : Wendet einen Stil nur an, wenn eine gesamte Abfrage übereinstimmt. Es ist nützlich, um zu verhindern, dass ältere Browser ausgewählte Stile anwenden. Ohne `only` würden ältere Browser die Abfrage `screen and (width <= 500px)` als `screen` interpretieren und den Rest der Abfrage ignorieren, und somit die Stile auf alle Bildschirme anwenden. Wenn Sie den `only` Operator verwenden, _müssen Sie auch_ einen Medientyp spezifizieren.
- `,` (Komma)
  - : Kommas werden verwendet, um mehrere Media Queries zu einer einzigen Regel zu kombinieren. Jede Abfrage in einer durch Kommas getrennten Liste wird separat von den anderen behandelt. Wenn daher eine der Abfragen in einer Liste `true` ist, liefert die gesamte Media-Anweisung `true`. In anderen Worten, Listen verhalten sich wie ein logischer `or` Operator.
- `or`
  - : Entspricht dem `,` Operator. Hinzugefügt in Media Queries Level 4.

### User Agent-Client-Hinweise

Einige Media Queries haben entsprechende [User Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints). Diese sind HTTP-Header, die Inhalte anfordern, die voroptimiert für die speziellen Medienanforderungen sind. Sie umfassen {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Personen, die die Textgröße einer Seite anpassen, besser zu unterstützen, verwenden Sie [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types), wenn Sie eine {{cssxref("&lt;length&gt;")}} für Ihre [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) sind gültige Einheiten, aber [`em`](/de/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) funktioniert besser, wenn der Benutzer die Textgröße des Browsers ändert.

Berücksichtigen Sie auch Media Queries oder [HTTP-User-Agent-Client-Hinweise](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints), um das Benutzererlebnis zu verbessern. Beispielsweise kann die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder der entsprechende HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}) verwendet werden, um die Animations- oder Bewegungseffekte basierend auf den Benutzerpräferenzen zu minimieren.

## Sicherheit

Da Media Queries Einblicke in die Möglichkeiten und dadurch in die Funktionen und das Design des Geräts liefern, mit dem der Benutzer arbeitet, besteht die Möglichkeit, dass sie missbraucht werden könnten, um einen {{Glossary("Fingerprinting", "\"Fingerprint\"")}} zu erstellen, der das Gerät identifiziert oder es zumindest bis zu einem gewissen Grad kategorisiert, der für die Benutzer unerwünscht sein könnte.

Aufgrund dieses Potentials könnte ein Browser es erwägen, die zurückgegebenen Werte auf irgendeine Weise zu verfälschen, um zu verhindern, dass sie zur präzisen Identifikation eines Computers verwendet werden. Ein Browser könnte auch zusätzliche Maßnahmen in diesem Bereich anbieten; beispielsweise berichten in Firefox bei aktivierter Einstellung "Fingerprinting widerstehen" viele Media Queries Standardwerte anstelle von Werten, die den tatsächlichen Gerätezustand widerspiegeln.

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
```

Die Bereichs-Syntax ermöglicht weniger wortreiche Media Queries beim Testen auf jedes Merkmal, das einen Bereich akzeptiert, wie in den folgenden Beispielen gezeigt:

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

Für weitere Beispiele siehe bitte [Media Queries verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Media Queries](/de/docs/Web/CSS/CSS_media_queries) Modul
- [Media Queries verwenden](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) Schnittstelle
- [Erweiterte Mozilla-Medienmerkmale](/de/docs/Web/CSS/Mozilla_Extensions#media_features)
- [Erweiterte WebKit-Medienmerkmale](/de/docs/Web/CSS/WebKit_Extensions#media_features)
