---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) kann verwendet werden, um den Wert einer benutzerdefinierten [Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables) des User-Agents in Ihr CSS einzufügen.

## Syntax

```css
/* Without a fallback value */
env(safe-area-inset-top);
env(titlebar-area-width);
env(viewport-segment-right 0 0);

/* With a fallback value */
env(safe-area-inset-right, 1em);
env(titlebar-area-y, 40px);
env(viewport-segment-width 0 0, 40%);
```

### Parameter

Die Funktion `env( <environment-variable>, <fallback> )` akzeptiert die folgenden Parameter:

- [`<environment-variable>`](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables)
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der Umgebungsvariable spezifiziert, die eingefügt werden soll. Wenn der angegebene Name eine array-ähnliche Umgebungsvariable darstellt, folgt auf den Namen ein oder mehrere {{cssxref("&lt;integer>")}} Werte, die die spezifische Instanz angeben, auf die sich der Name bezieht. Der case-sensitive Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand vom oberen, rechten, unteren oder linken Rand des Viewports, der definiert, wo es sicher ist, Inhalte zu platzieren, ohne das Risiko, dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, in dem alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport ein Rechteck ist und keine Funktionen — wie beispielsweise Werkzeugleisten oder dynamische Tastaturen — den Viewport-Bereich einnehmen; ansonsten ist es ein `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen `safe-area-inset-*` Variablen-Pendants, wenn alle dynamischen Benutzeroberflächenfunktionen zurückgezogen sind. Während sich die `safe-area-inset-*` Werte ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, sind die `safe-area-max-inset-*` Werte konstant.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*` Bereichs. Diese Variablen sind verfügbar, wenn das `window-controls-overlay` [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfeld verwendet wird. Die Werte der Variablen können verwendet werden, um sicherzustellen, dass Inhalte nicht die Fenstersteuerungsknöpfe (also Minimieren, Maximieren und Schließen) mit progressiven Web-Apps (PWA) auf Desktop-Geräten überlappen.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einsetzungen vom Rand des Viewports und die Abmessungen der virtuellen Bildschirmtastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Dimensionen und Versatzpositionen spezifischer Viewport-Segmente. Das `viewport-segment-*` Schlüsselwort wird von zwei durch Leerzeichen getrennten {{cssxref("&lt;integer>")}} Werten gefolgt, die die horizontale und vertikale Position oder Indizes des Segments angeben. Die viewport-segment Schlüsselwörter sind nur definiert, wenn der Viewport aus zwei oder mehr Segmenten besteht, wie bei klappbaren oder geklappten Geräten.

- `<fallback>` {{optional_inline}}
  - : Ein Alternativwert, der eingefügt wird, wenn die Umgebungsvariable, die im ersten Argument referenziert wird, nicht existiert. Alles hinter dem ersten Komma wird als Alternativwert angesehen. Dies kann ein einzelner Wert, eine andere `env()` Funktion oder eine durch Kommas getrennte Liste von Werten sein.

## Beschreibung

Die Funktion `env()` wird verwendet, um den Wert einer globalen, [vom User-Agent definierten Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) in Ihr CSS einzufügen. Die Funktion `env()` kann als Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswertes oder Deskriptors verwendet werden (zum Beispiel in [Media Query Regeln](/de/docs/Web/CSS/@media)).

Die Funktion akzeptiert ein `<environment-variable>` als erstes Argument. Dies ist ein case-sensitives {{cssxref("&lt;custom-ident>")}}, das gleich dem [Namen der Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) ist, die ersetzt werden soll, kann aber bei Bedarf auch zusätzliche durch Leerzeichen getrennte Werte enthalten. Beispielsweise würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Fall eines Geräts mit mehreren Viewport-Segmenten zurückgeben.

Das zweite Argument, falls vorhanden, ist der Alternativwert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Der Alternativwert kann eine andere Umgebungsvariable sein, sogar mit einem eigenen Fallback.

Die Syntax des Fallbacks ähnelt der Fallback-Syntax der {{cssxref("var()")}} Funktion, die verwendet wird, um [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) einzufügen, in dem sie das Zulassen mehrerer Kommas erlaubt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn jedoch die `env()` Funktion innerhalb eines Eigenschaftswertes oder Deskriptors verwendet wird, der keine Kommas enthält, ist ein Fallback-Wert, der Kommas enthält, nicht gültig.

Eine Eigenschaft oder ein Deskriptor, der eine syntaktisch gültige `env()` Funktion enthält, wird zur Parsing-Zeit als gültig angenommen, wenn der Browser den heruntergeladenen CSS-Text zuerst liest und interpretiert. Erst zur Rechenzeit, nachdem jede `env()` Funktion durch ihren browsergegebenen Wert (oder den Fallback-Wert, wenn die als erster Parameter übergebene Umgebungsvariable kein anerkannter Name einer Umgebungsvariable ist) ersetzt wurde, wird ihre Syntax überprüft. Wenn der Wert ungültig ist und kein Fallback bereitgestellt wird, ist die Eigenschaft oder der Deskriptor, der die `env()`-Funktion enthält, [zur Berechnungswert-Synthesezeit ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()` Substitution ungültig ist und ein ungültiger Fallback enthalten ist oder der Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, der möglicherweise nicht der erwartete ist.

### Anwendungsfälle

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren, und nicht von Geräteeinzügen oder abgerundeten Ecken verdeckt zu werden, können die `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte für Betrachter sichtbar sind. Diese Funktion wurde später über ihr ursprüngliches Ziel hinaus ausgeweitet, um Anwendungsfälle zu ermöglichen, wie [das Verhindern, dass Gerätemeldungen einen Teil der App-Benutzeroberfläche überdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui).

Ein weiterer Anwendungsfall für `env()` Variablen sind [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) auf dem Desktop, die die [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) Funktion nutzen, um den gesamten Anwendungsfensterbereich auszunutzen. Mit den [`titlebar-area-*` Werten](#titlebar-area-x) können Entwickler Elemente positionieren, wo sich die Titelleiste befunden hätte, und [sicherstellen, dass Inhalte nicht von Steuerungsknöpfen des Fensters in Desktop-PWAs verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Die `viewport-segment-*` Variablennamen können verwendet werden, um Ihre Container in die verfügbaren Segmente eines Geräts mit mehreren Viewport-Segmenten, wie ein klappbares oder faltbares Gerät, passend zu gestalten. Die Zahlen, die auf den `viewport-segment-*` Namen folgen, geben an, auf welches Segment der mehreren Segmente sich die Umgebungsvariable bezieht.

### Namen, gefolgt von ganzen Zahlen

Wenn die Umgebungsvariable array-ähnlich ist, was bedeutet, dass der Name mehr als einen Wert referenzieren kann, wie es bei Geräten mit mehreren Viewport-Segmenten der Fall ist, enthält der `<environment-variable>` Parameter sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variablen, auf die sich die Funktion bezieht. Zum Beispiel, im Fall der `viewport-segment-*` Variablen werden die Variablennamen an die `env()` Funktion zusammen mit zwei ganzen Zahlen übergeben, die die Indizes des Segments angeben, für das der Wert zurückgegeben werden soll. Diese Werte sind beide Ganzzahlen von `0` oder größer. Die erste ganze Zahl repräsentiert den horizontalen Index des Segments, wobei `0` das linkeste Segment ist, und der zweite Wert repräsentiert den vertikalen Index des Segments, wobei `0` das unterste Segment repräsentiert:

![Zwei Geräte-Segmentlayouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 ist das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen nebeneinander Layout wird das linke Segment durch `0 0` dargestellt, und das rechte Segment durch `1 0`.
- In einem vertikalen von oben nach unten Layout wird das obere Segment durch `0 0` dargestellt, und das untere Segment durch `0 1`.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Zum Beispiel könnte ein Gerät mit drei horizontalen Segmenten das mittlere Segment als `1 0` und das rechte Segment als `2 0` darstellen.

Zum Beispiel gibt das folgende die Breite des rechten Segments auf einem faltbaren Gerät mit zwei Segmenten zurück, bei dem die Segmente horizontal ausgerichtet sind:

```css
env(viewport-segment-width 1 0)
```

Sehen Sie sich die [Viewport Segment API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionierende Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch die [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erklärung der Demo an.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env() um sicherzustellen, dass Schaltflächen nicht von der Benutzeroberfläche des Geräts verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste Toolbar-Schaltflächen einer App nicht durch Gerätemeldungen am unteren Bildschirmrand verdeckt werden. Auf dem Desktop beträgt `safe-area-inset-bottom` `0`. Auf Geräten, die Meldungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Meldung lässt. Dies kann dann als Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

#### HTML

Wir haben einen {{htmlelement("main")}} Abschnitt, der eine Fake-Anwendung enthält, und einen {{htmlelement("footer")}}, der zwei {{htmlelement("button")}} Elemente enthält:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit Hilfe des [CSS Flexbox-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) erstellen wir einen Footer, der nur so hoch ist, wie er sein muss, während der Hauptabschnitt, der die Anwendung enthält, den Rest des Viewports ausfüllt:

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  flex: 1;
  background-color: #eeeeee;
  padding: 1em;
}

footer {
  flex: none;
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  background: black;
}

button {
  padding: 1em;
  background: white;
  color: black;
  margin: 0;
  width: 100%;
  border: none;
  font: 1em system-ui;
}
```

Wir setzen [`position: sticky`](/de/docs/Web/CSS/position#sticky), um den Footer am unteren Rand des Viewports festzukleben. Dann verwenden wir die {{cssxref("padding")}} Abkürzung, um dem Footer ein Padding hinzuzufügen. Wir fügen den Wert der `safe-area-inset-bottom` Umgebungsvariable zu einem anfänglichen `1em` an unterem Padding hinzu. Ein größerer schwarzer Bereich wird auf Geräten angezeigt, die einen positiven Wert für diese Variable haben, wodurch sichergestellt wird, dass die im Footer befindlichen Schaltflächen niemals verdeckt werden.

```css
footer {
  position: sticky;
  bottom: 0;

  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

#### Ergebnisse

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### Verwendung eines Fallback-Wertes

Dieses Beispiel nutzt den optionalen zweiten Parameter von `env()`, der einen Fallback-Wert bereitstellt, falls die Umgebungsvariable nicht verfügbar ist.

#### HTML

Wir fügen einen Absatz Text ein:

```html
<p>
  If the <code>env()</code> function is supported in your browser, this
  paragraph's text will have 50px of padding between it and the left border —
  but not the top, right and bottom. This is because the accompanying CSS is the
  equivalent of <code>padding: 0 0 0 50px</code>, because, unlike other CSS
  properties, user agent property names are case-sensitive.
</p>
```

#### CSS

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Dann fügen wir {{cssxref("padding")}} hinzu, verwenden die `env()` Funktion mit einem Fallback für die Größe des Paddings auf jeder Seite. Wir setzen absichtlich einen ungültigen Wert für das linke Padding (denken Sie daran, Umgebungsvariablennamen sind case-sensitive), um die Verwendung des Fallback-Werts zu demonstrieren.

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

#### Ergebnisse

{{EmbedLiveSample("Using_the_fallback_value", "350px", "250px")}}

### Verwendung von env() um sicherzustellen, dass Inhalte nicht von Fenstersteuerungsknöpfen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop Progressive Web App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungsknöpfen des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem normalerweise die Titelleiste angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay-Feature nicht unterstützen, wie mobile Geräte, werden die Fallback-Werte verwendet.

Hier ist, wie eine PWA, die auf einem Desktop-Gerät installiert ist, normalerweise aussieht:

![Illustration wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungsknöpfen, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit dem Window Controls Overlay-Feature decken die Web-Inhalte die gesamte Anwendungsfensterfläche ab, mit den Fenstersteuerungen und PWA-Knöpfen, die als Overlays angezeigt werden:

![Illustration wie eine auf dem Desktop installierte PWA aussieht mit dem Window Controls Overlay-Feature, mit Fenstersteuerungsknöpfen, keiner Titelleiste und Webinhalten, die das gesamte Fenster umfassen](desktop-pwa-window-wco.png)

```html
<header>Title of the app here</header>
<main>Main content of app here</main>
```

```css
header {
  position: fixed;
  left: env(titlebar-area-x);
  top: env(titlebar-area-y);
  width: env(titlebar-area-width);
  height: env(titlebar-area-height);
}

main {
  margin-top: env(titlebar-area-height);
}
```

> [!NOTE]
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest des Inhalts scrollt, sondern stattdessen mit den Fenstersteuerungsknöpfen ausgerichtet bleibt, selbst auf Geräten/Browsers, die elastisches Überscrollen (auch bekannt als Gummiband-Effekt) unterstützen.

### Viewport-Segmente

Die [Viewport Segment API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und die [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) Leitfaden bietet eine Demonstration und Erklärung der Verwendung der `env()` Funktion mit den `viewport-segments-*` Umgebungsverion-Variablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- Modul zu [CSS Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables)
- {{CSSxRef("var")}}
- Modul zu [CSS benutzerdefinierten Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Anpassen des Fenstersteuerungs-Overlays Ihrer PWA's Titelleiste](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Aus der Box ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
