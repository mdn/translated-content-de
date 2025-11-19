---
title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`env()`**-Funktion in [CSS](/de/docs/Web/CSS) kann verwendet werden, um den Wert einer von einem Benutzeragenten definierten [Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using) in Ihr CSS einzufügen.

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

- [`<environment-variable>`](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariable angibt. Wenn der bereitgestellte Name einer array-ähnlichen Umgebungsvariable entspricht, wird der Name von {{cssxref("&lt;integer>")}}-Werten gefolgt, die die spezifische Instanz identifizieren, auf die sich der Name bezieht. Der case-sensitive Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand von der oberen, rechten, unteren oder linken Einpassungskante des Ansichtsfensters, der definiert, wo es sicher ist, Inhalte ohne Risiko, durch die Form eines nicht-rechteckigen Displays abgeschnitten zu werden, zu platzieren. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, wenn das Ansichtsfenster ein Rechteck ist und keine Features - wie z. B. Werkzeugleisten oder dynamische Tastaturen - den Ansichtsfensterraum beanspruchen; andernfalls ist es ein `px`-Wert, der größer als `0` ist.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen `safe-area-inset-*`-Variablen-Gegenstücke, wenn alle dynamischen Benutzeroberflächenfunktionen zurückgezogen sind. Während sich die `safe-area-inset-*`-Werte ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, sind die `safe-area-max-inset-*`-Werte Konstanten.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*`-Bereichs. Diese Variablen sind verfügbar, wenn das `window-controls-overlay`-[`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfeld verwendet wird. Die Variablenwerte können verwendet werden, um sicherzustellen, dass Inhalte keine Fenstersteuerungstasten überlappen (also minimieren, maximieren und schließen) mit progressiven Web-Apps (PWA), die auf Desktop-Geräten installiert sind.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einpassungen vom Rand des Ansichtsfensters und die Abmessungen der On-Screen-Virtuellen Tastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Offset-Positionen spezifischer Viewport-Segmente. Das Schlüsselwort `viewport-segment-*` wird von zwei durch Leerzeichen getrennten {{cssxref("&lt;integer>")}}-Werten gefolgt, die die horizontale und vertikale Position oder die Indizes des Segments anzeigen. Die viewport-segment Schlüsselwörter sind nur definiert, wenn das Ansichtsfenster aus zwei oder mehr Segmenten besteht, wie bei klappbaren oder gelenkigen Geräten.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt werden soll, wenn die in das erste Argument referenzierte Umgebungsvariable nicht vorhanden ist. Alles nach dem ersten Komma wird als Fallback-Wert angesehen. Dies kann ein Einzelwert, eine weitere `env()`-Funktion oder eine durch Kommas getrennte Liste von Werten sein.

## Beschreibung

Die Funktion `env()` wird verwendet, um den Wert einer global definierten, [vom Benutzeragenten definierten Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) in Ihr CSS einzufügen. Die Funktion `env()` kann als Property-Wert oder anstelle eines Teils eines Property-Werts oder -Deskriptors verwendet werden (zum Beispiel in [Medienabfragerichtlinien](/de/docs/Web/CSS/Reference/At-rules/@media)).

Die Funktion akzeptiert ein `<environment-variable>` als ihr erstes Argument. Dies ist ein case-sensitives {{cssxref("&lt;custom-ident>")}}, das gleich dem [Namen der Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) ist, die substituiert werden soll, aber es kann auch zusätzliche durch Leerzeichen getrennte Werte enthalten, wenn erforderlich. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Fall eines Geräts mit mehreren Viewport-Segmenten zurückgeben.

Das zweite Argument, falls angegeben, ist der Fallback-Wert, der verwendet wird, wenn die in das erste Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Das Fallback kann eine andere Umgebungsvariable sein, sogar mit ihrem eigenen Fallback.

Die Syntax des Fallbacks ähnelt der Fallback-Syntax der {{cssxref("var()")}}-Funktion, die verwendet wird, um [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) einzufügen, indem sie mehrere Kommas zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wird die `env()`-Funktion jedoch innerhalb eines Property-Werts oder -Deskriptors verwendet, der keine Kommas enthält, wird ein Fallback-Wert, der Kommas enthält, nicht gültig sein.

Ein Property oder Deskriptor, das eine syntaktisch gültige `env()`-Funktion enthält, wird zur Parsezeit als gültig angesehen, wenn der Browser den heruntergeladenen CSS-Text zuerst liest und interpretiert. Es wird nur zur Berechnungszeit syntaktisch überprüft, nachdem jede `env()`-Funktion mit ihrem vom Browser bereitgestellten Wert (oder dem Fallback-Wert, wenn die als erster Parameter übergebene Umgebungsvariable kein erkannter Umgebungsvariablenname ist) ersetzt wurde. Ist der Wert ungültig und es wird kein Fallback bereitgestellt, ist das Property oder der Deskriptor, der die `env()`-Funktion enthält, [zur Berechnungswert-Zeit ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()`-Substitution ungültig ist und ein ungültiges Fallback enthalten ist oder das Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [Anfangs-](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, jedoch möglicherweise nicht auf den erwarteten.

### Anwendungsfälle

Die `safe-area-inset-*`-Werte wurden ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern die Möglichkeit zu geben, ihre Inhalte in einem sicheren Bereich des Ansichtsfensters zu platzieren, ohne von Geräteaussparungen oder abgerundeten Ecken verdeckt zu werden. Diese Funktion wurde später über den ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle wie [das Verhindern, dass Gerätemeldungen einige Benutzeroberflächen der App verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui) zu ermöglichen.

Ein weiterer Anwendungsfall für `env()`-Variablen sind Desktop- [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Funktion nutzen, um die gesamte Anwendungsfensterfläche auszunutzen. Mit den [`titlebar-area-*`-Werten](#titlebar-area-x) können Entwickler Elemente dort positionieren, wo sich die Titelleiste befunden hätte, und [sicherstellen, dass der Inhalt nicht von Fenstersteuerungsknöpfen überlagert wird](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Die `viewport-segment-*`-Variablennamen können verwendet werden, um Ihre Container so anzupassen, dass sie nahtlos in die verfügbaren Segmente eines Geräts mit mehreren Ansichtsfenstersegmenten passen, wie ein Gelenk- oder Klappgerät. Die auf die `viewport-segment-*`-Namen folgenden Ganzzahlen geben an, welches Segment der mehreren Segmente die Umgebungsvariable referenziert.

### Namen gefolgt von ganzzahligen Werten

Wenn die Umgebungsvariable array-ähnlich ist, was bedeutet, dass der Name mehr als einen Wert referenzieren kann, wie dies bei Geräten mit mehreren Ansichtsfenster-Segmenten der Fall ist, enthält der `<environment-variable>`-Parameter sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variablen, auf die die Funktion referenziert. Zum Beispiel, im Fall der `viewport-segment-*`-Variablen, werden die Variablennamen an die `env()`-Funktion zusammen mit zwei Ganzzahlen übergeben, die die Indizes des Segments angeben, für das der Wert zurückgegeben werden soll. Diese Werte sind beide Ganzzahlen von `0` oder größer. Die erste Ganzzahl repräsentiert den horizontalen Index des Segments, wobei `0` das am weitesten links liegende Segment ist, und der zweite Wert repräsentiert den vertikalen Index des Segments, wobei `0` das am weitesten unten liegende Segment darstellt:

![Zwei Geräte-Segmentlayouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen nebeneinander Layout wird das linke Segment durch `0 0` repräsentiert, und das rechte Segment wird durch `1 0` repräsentiert.
- In einem vertikalen Layout von oben nach unten wird das obere Segment durch `0 0` repräsentiert, und das untere Segment wird durch `0 1` repräsentiert.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Zum Beispiel kann ein Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` und das rechte Segment durch `2 0` repräsentieren.

Zum Beispiel gibt das folgende Beispiel die Breite des rechten Segments auf einem faltbaren Gerät mit zwei Segmenten zurück, bei dem die Segmente horizontal ausgerichtet sind:

```css
env(viewport-segment-width 1 0)
```

Sehen Sie sich die [Viewport segment API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige Arbeitsdemo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Sehen Sie sich auch [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erklärung der Demo an.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht von der Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Schaltflächen nicht von Gerätemeldungen verdeckt werden, die am unteren Rand des Bildschirms erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Auf Geräten, die Meldungen am unteren Rand des Bildschirms anzeigen, wie iOS, erhält er jedoch einen Wert, der Platz lässt, damit die Meldung angezeigt werden kann. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

#### HTML

Wir haben einen {{htmlelement("main")}}-Abschnitt, der eine gefälschte Anwendung enthält, und einen {{htmlelement("footer")}} mit zwei {{htmlelement("button")}}-Elementen:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit dem [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) erstellen wir einen Footer, der nur so hoch ist, wie er sein muss, während der Hauptabschnitt, der die Anwendung enthält, den Rest des Ansichtsfensters ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky), um den Footer am unteren Rand des Ansichtsfensters zu fixieren. Dann verwenden wir die {{cssxref("padding")}}-Kurzschrift, um dem Footer Padding hinzuzufügen. Wir fügen dem anfänglichen `1em` von Bodenpolster den Wert der `safe-area-inset-bottom`-Umgebungsvariable hinzu. Auf Geräten, die einen positiven Wert für diese Variable haben, wird ein größerer schwarzer Bereich angezeigt, der sicherstellt, dass die Schaltflächen im Footer niemals verdeckt werden.

```css
footer {
  position: sticky;
  bottom: 0;

  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

#### Ergebnisse

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### Verwendung eines Fallback-Werts

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

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Dann fügen wir {{cssxref("padding")}} hinzu, wobei wir die `env()`-Funktion mit einem Fallback für die Größe des Paddings an jeder Seite verwenden. Wir setzen absichtlich einen ungültigen Wert für das linke Padding (denken Sie daran, Umgebungsvariablennamen sind case-sensitiv), um die Verwendung des Fallback-Werts zu demonstrieren.

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

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fenstersteuerungsknöpfen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungsknöpfen des Betriebssystems verdeckt werden. Die `titlebar-area-*`-Werte definieren ein Rechteck, in dem die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die die Window Controls Overlay-Funktion nicht unterstützen, wie mobilen Geräten, werden die Fallback-Werte verwendet.

So sieht eine PWA aus, die auf einem Desktop-Gerät installiert ist:

![Illustration, wie eine PWA aussieht, die normalerweise auf einem Desktop installiert ist, mit Fenstersteuerungsknöpfen, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit der Window Controls Overlay-Funktion umfassen die Webinhalte die gesamte App-Fensterfläche, wobei die Fenstersteuerungen und PWA-Schaltflächen als Overlays angezeigt werden:

![Illustration, wie eine PWA aussieht, die auf einem Desktop mit der Window Controls Overlay-Funktion installiert ist, mit Fenstersteuerungsknöpfen, keiner Titelleiste und Webinhalt über das ganze Fenster](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest des Inhalts scrollt, sondern stattdessen mit den Fenstersteuerungsknöpfen ausgerichtet bleibt, selbst auf Geräte/Browser, die elastisches Scrollen (auch bekannt als Rubber Banding) unterstützen.

### Viewport Segmente

Die [Viewport segment API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using)-Leitfaden bieten eine Demonstration und Erklärung zur Verwendung der `env()`-Funktion mit den `viewport-segments-*`-Umgebungsvariablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
- Modul zu [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables)
- {{CSSxRef("var")}}
- Modul zu [CSS-Benutzerdefinierten Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/Guides/Cascading_variables)
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/Reference/Properties/--*)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Passen Sie die Fenstersteuerungs-Overlays der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Inhalt in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Aus der Box ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
