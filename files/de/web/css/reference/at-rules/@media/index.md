---
title: "`@media` CSS at-rule"
short-title: "@media"
slug: Web/CSS/Reference/At-rules/@media
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Mit der **`@media`**-[CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) können Sie Teile eines Stylesheets abhängig vom Ergebnis einer oder mehrerer [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) anwenden. Dazu geben Sie eine Media Query und einen CSS-Block an. Der Block wird nur dann auf das Dokument angewendet, wenn die Media Query auf das Gerät zutrifft, auf dem der Inhalt verwendet wird.

> [!NOTE]
> In JavaScript können Sie über die CSS-Objektmodell-Schnittstelle [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule) auf Regeln zugreifen, die mit `@media` erstellt wurden.

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

Die `@media`-At-Regel kann auf der obersten Ebene Ihres Codes oder verschachtelt innerhalb einer anderen bedingten Gruppen-At-Regel stehen.

Eine Erläuterung der Syntax von Media Queries finden Sie unter [Media Queries verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax).

## Beschreibung

Die `<media-query-list>` einer Media Query umfasst [Media Types (`<media-type>`)](#media_types), [Media Features (`<media-feature>`)](#media_features) und [logische Operatoren](#logische_operatoren).

### Media Types

Ein _`<media-type>`_ beschreibt die allgemeine Kategorie eines Geräts.
Sofern Sie nicht den logischen Operator `only` verwenden, ist der Media Type optional; ohne Angabe wird `all` angenommen.

- `all`
  - : Geeignet für alle Geräte.
- `print`
  - : Für seitenweise ausgegebene Inhalte und Dokumente, die auf einem Bildschirm im Druckvorschaumodus angezeigt werden. (Informationen zu Formatierungsfragen, die für diese Ausgabeformen spezifisch sind, finden Sie unter [Seitenbasierte Medien](/de/docs/Web/CSS/Guides/Paged_media).)
- `screen`
  - : Hauptsächlich für Bildschirme vorgesehen.

> [!NOTE]
> CSS2.1 und [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) definierten mehrere zusätzliche Media Types (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed` und `aural`). Diese wurden jedoch in [Media Queries 4](https://drafts.csswg.org/mediaqueries/#media-types) als veraltet eingestuft und sollten nicht verwendet werden.

### Media Features

Ein _`<media feature>`_ beschreibt bestimmte Eigenschaften des {{Glossary("user_agent", "User Agents")}}, des Ausgabegeräts oder der Umgebung.
Media-Feature-Ausdrücke prüfen, ob eine Eigenschaft vorhanden ist oder einen bestimmten Wert beziehungsweise Wertebereich hat. Ihre Verwendung ist optional. Jeder Media-Feature-Ausdruck muss in Klammern stehen.

- {{cssxref("@media/any-hover", "any-hover")}}
  - : Ermöglicht irgendein verfügbares Eingabegerät, den Mauszeiger über Elemente zu bewegen?
- {{cssxref("@media/any-pointer", "any-pointer")}}
  - : Ist irgendein verfügbares Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/aspect-ratio", "aspect-ratio")}}
  - : Das {{Glossary("aspect_ratio", "Seitenverhältnis")}} zwischen Breite und Höhe des Viewports.
- {{cssxref("@media/color", "color")}}
  - : Die Anzahl der Bits pro Farbkomponente des Ausgabegeräts oder null, wenn das Gerät keine Farben darstellen kann.
- {{cssxref("@media/color-gamut", "color-gamut")}}
  - : Der ungefähre Farbbereich, den der User Agent und das Ausgabegerät unterstützen.
- {{cssxref("@media/color-index", "color-index")}}
  - : Die Anzahl der Einträge in der Farbnachschlagetabelle des Ausgabegeräts oder null, wenn das Gerät keine solche Tabelle verwendet.
- {{cssxref("@media/device-aspect-ratio", "device-aspect-ratio")}}
  - : Das Seitenverhältnis zwischen Breite und Höhe des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/device-height", "device-height")}}
  - : Die Höhe der Darstellungsfläche des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/device-posture", "device-posture")}}
  - : Erkennt die aktuelle Haltung des Geräts, also ob sich der Viewport in einem flachen oder gefalteten Zustand befindet. Definiert in der [Device Posture API](/de/docs/Web/API/Device_Posture_API).
- {{cssxref("@media/device-width", "device-width")}}
  - : Die Breite der Darstellungsfläche des Ausgabegeräts. In Media Queries Level 4 als veraltet eingestuft.
- {{cssxref("@media/display-mode", "display-mode")}}
  - : Der Modus, in dem eine Anwendung angezeigt wird, beispielsweise im [Vollbildmodus](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#fullscreen) oder im [Bild-in-Bild-Modus](/de/docs/Web/CSS/Reference/At-rules/@media/display-mode#picture-in-picture).
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/dynamic-range", "dynamic-range")}}
  - : Die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die der User Agent und das Ausgabegerät unterstützen. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/forced-colors", "forced-colors")}}
  - : Erkennt, ob der User Agent die Farbpalette einschränkt.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/grid", "grid")}}
  - : Verwendet das Gerät einen Raster- oder einen Bitmap-Bildschirm?
- {{cssxref("@media/height", "height")}}
  - : Die Höhe des Viewports.
- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}}
  - : Erkennt, ob das Gerät eine bestimmte Anzahl horizontal angeordneter Viewport-Segmente hat.
- {{cssxref("@media/hover", "hover")}}
  - : Ermöglicht das primäre Eingabegerät, den Mauszeiger über Elemente zu bewegen?
- {{cssxref("@media/inverted-colors", "inverted-colors")}}
  - : Invertiert der User Agent oder das zugrunde liegende Betriebssystem Farben?
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/monochrome", "monochrome")}}
  - : Die Anzahl der Bits pro Pixel im monochromen Framebuffer des Ausgabegeräts oder null, wenn das Gerät nicht monochrom ist.
- {{cssxref("@media/orientation", "orientation")}}
  - : Die Ausrichtung des Viewports.
- {{cssxref("@media/overflow-block", "overflow-block")}}
  - : Wie behandelt das Ausgabegerät Inhalte, die entlang der Blockachse über den Viewport hinausragen?
- {{cssxref("@media/overflow-inline", "overflow-inline")}}
  - : Können Inhalte gescrollt werden, die entlang der Inline-Achse über den Viewport hinausragen?
- {{cssxref("@media/pointer", "pointer")}}
  - : Ist das primäre Eingabegerät ein Zeigegerät, und wenn ja, wie genau ist es?
- {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}
  - : Erkennt, ob der Benutzer ein helles oder dunkles Farbschema bevorzugt.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-contrast", "prefers-contrast")}}
  - : Erkennt, ob der Benutzer eine Erhöhung oder Verringerung des Kontrasts zwischen benachbarten Farben angefordert hat.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}
  - : Erkennt, ob der Benutzer Webinhalte angefordert hat, die weniger Datenverkehr verursachen.
- {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}
  - : Der Benutzer bevorzugt weniger Bewegung auf der Seite.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}}
  - : Erkennt, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, die transparente oder durchscheinende Ebeneneffekte reduziert.
- {{cssxref("@media/resolution", "resolution")}}
  - : Die Pixeldichte des Ausgabegeräts.
- {{cssxref("@media/scan", "scan")}}
  - : Ob die Bildausgabe progressiv oder im Zeilensprungverfahren erfolgt.
- {{cssxref("@media/scripting", "scripting")}}
  - : Erkennt, ob Skripting (z. B. JavaScript) verfügbar ist.
    In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/shape", "shape")}}
  - : Erkennt die Form des Geräts, um zwischen rechteckigen und runden Displays zu unterscheiden.
- {{cssxref("@media/update", "update")}}
  - : Wie häufig das Ausgabegerät das Erscheinungsbild von Inhalten ändern kann.
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}}
  - : Erkennt, ob das Gerät eine bestimmte Anzahl vertikal angeordneter Viewport-Segmente hat. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/video-dynamic-range", "video-dynamic-range")}}
  - : Die Kombination aus Helligkeit, Kontrastverhältnis und Farbtiefe, die die Videoebene des User Agents und das Ausgabegerät unterstützen. In Media Queries Level 5 hinzugefügt.
- {{cssxref("@media/width", "width")}}
  - : Die Breite des Viewports einschließlich der Breite der Bildlaufleiste.
- {{cssxref("@media/-moz-device-pixel-ratio", "-moz-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen das Feature [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
  - : Der Browser unterstützt CSS {{cssxref("animation")}} mit dem Präfix `-webkit`. Verwenden Sie stattdessen die Feature Query [`@supports (animation)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-device-pixel-ratio", "-webkit-device-pixel-ratio")}}
  - : Die Anzahl der Gerätepixel pro CSS-Pixel. Verwenden Sie stattdessen das Feature [`resolution`](/de/docs/Web/CSS/Reference/At-rules/@media/resolution) mit der Einheit `dppx`.
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
  - : Der Browser unterstützt 2D-CSS-{{cssxref("transform")}} mit dem Präfix `-webkit`. Verwenden Sie stattdessen die Feature Query [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
  - : Der Browser unterstützt 3D-CSS-{{cssxref("transform")}} mit dem Präfix `-webkit`. Verwenden Sie stattdessen die Feature Query [`@supports (transform)`](/de/docs/Web/CSS/Reference/At-rules/@supports).
- {{cssxref("@media/-webkit-transition", "-webkit-transition")}}
  - : Der Browser unterstützt CSS {{cssxref("transition")}} mit dem Präfix `-webkit`. Verwenden Sie stattdessen die Feature Query [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports).

### Logische Operatoren

Mit den _logischen Operatoren_ `not`, `and`, `only` und `or` können Sie komplexe Media Queries zusammensetzen.
Sie können auch mehrere Media Queries zu einer einzigen Regel kombinieren, indem Sie sie durch Kommas trennen.

- `and`
  - : Kombiniert mehrere Media Features zu einer einzigen Media Query. Damit die Query `true` ergibt, muss jedes verknüpfte Feature `true` ergeben.
    Der Operator wird auch verwendet, um Media Features mit Media Types zu verknüpfen.
- `not`
  - : Negiert eine Media Query und gibt `true` zurück, wenn die Query andernfalls `false` ergeben würde.
    In einer durch Kommas getrennten Liste von Queries negiert der Operator nur die jeweilige Query, auf die er angewendet wird.

    > [!NOTE]
    > In Level 3 kann das Schlüsselwort `not` nur eine vollständige Media Query negieren, nicht einen einzelnen Media-Feature-Ausdruck.

- `only`
  - : Wendet einen Stil nur an, wenn eine vollständige Query zutrifft.
    Dies ist nützlich, um zu verhindern, dass ältere Browser bestimmte Stile anwenden.
    Ohne `only` würden ältere Browser die Query `screen and (width <= 500px)` als `screen` interpretieren, den Rest der Query ignorieren und ihre Stile auf allen Bildschirmen anwenden.
    Wenn Sie den Operator `only` verwenden, _müssen Sie auch_ einen Media Type angeben.
- `,` (Komma)
  - : Kommas kombinieren mehrere Media Queries zu einer einzigen Regel.
    Jede Query in einer durch Kommas getrennten Liste wird unabhängig von den anderen behandelt.
    Wenn also eine der Queries in einer Liste `true` ergibt, ergibt die gesamte Media-Anweisung `true`.
    Anders ausgedrückt verhalten sich Listen wie der logische Operator `or`.
- `or`
  - : Entspricht dem Operator `,`. In Media Queries Level 4 hinzugefügt.

### User-Agent-Client-Hints

Für einige Media Queries gibt es entsprechende [User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints).
Dabei handelt es sich um HTTP-Header, mit denen Inhalte angefordert werden, die für die jeweiligen Medienanforderungen voroptimiert sind.
Dazu gehören {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} und {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Um Menschen, die die Textgröße einer Website anpassen, bestmöglich zu berücksichtigen, verwenden Sie [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) als Einheit, wenn Sie einen {{cssxref("&lt;length&gt;")}}-Wert für Ihre [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) benötigen.

Sowohl [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) als auch [`px`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) sind gültige Einheiten. [`em`](/de/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types) eignet sich jedoch besser, wenn der Benutzer die Textgröße im Browser ändert.

Ziehen Sie außerdem Media Queries oder [HTTP-User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints) in Betracht, um die Benutzererfahrung zu verbessern.
Beispielsweise können Sie die Media Query [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) oder den entsprechenden HTTP-Header {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} verwenden, um Animationen oder Bewegungen entsprechend den Benutzereinstellungen zu reduzieren.

## Sicherheit

Media Queries geben Aufschluss über die Fähigkeiten und damit auch über die Eigenschaften und Bauweise des Geräts, das der Benutzer verwendet. Daher besteht die Möglichkeit, sie zur Erstellung eines {{Glossary("Fingerprinting", "„Fingerabdrucks“")}} zu missbrauchen, der das Gerät identifiziert oder es zumindest so detailliert kategorisiert, wie es für Benutzer unerwünscht sein könnte.

Wegen dieses Risikos kann ein Browser die zurückgegebenen Werte verändern, damit sie nicht zur genauen Identifizierung eines Computers verwendet werden können. Ein Browser kann auch zusätzliche Schutzmaßnahmen anbieten. Wenn beispielsweise in Firefox die Einstellung „Resist Fingerprinting“ aktiviert ist, liefern viele Media Queries Standardwerte statt Werten, die den tatsächlichen Zustand des Geräts wiedergeben.

## Beispiele

### Prüfung auf die Media Types `print` und `screen`

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

Mit der Bereichssyntax lassen sich Media Queries für Features, die einen Wertebereich zulassen, kürzer formulieren, wie die folgenden Beispiele zeigen:

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

Weitere Beispiele finden Sie unter [Media Queries verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Modul [CSS Media Queries](/de/docs/Web/CSS/Guides/Media_queries)
- [Media Queries verwenden](/de/docs/Web/CSS/Guides/Media_queries/Using)
- Die Schnittstelle [`CSSMediaRule`](/de/docs/Web/API/CSSMediaRule)
- Die CSS-At-Regel {{cssxref("@custom-media")}}
- [Erweiterte Mozilla Media Features](/de/docs/Web/CSS/Reference/Mozilla_extensions#media_features)
- [Erweiterte WebKit Media Features](/de/docs/Web/CSS/Reference/Webkit_extensions#media_features)
