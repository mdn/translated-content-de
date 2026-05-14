---
title: "`env()` CSS-Funktion"
short-title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: 4607393c465f5a8bdbb36047f2ec03c2fb058af5
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using) in Ihr CSS einzufügen.

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
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariablen angibt. Wenn der angegebene Name eine array-ähnliche Umgebungsvariable darstellt, folgt dem Namen ein {{cssxref("&lt;integer>")}} Wert, der die spezifische Instanz identifiziert, auf die sich der Name bezieht. Der case-sensitive Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand vom oberen, rechten, unteren oder linken Randeinlass des Viewports, der definiert, wo Inhalte sicher platziert werden können, ohne das Risiko, von der Form eines nicht-rechteckigen Displays abgeschnitten zu werden. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, falls der Viewport ein Rechteck ist und keine Funktionen — wie Toolbars oder dynamische Tastaturen — den Viewport-Raum beanspruchen; andernfalls ist es ein `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen Pendants `safe-area-inset-*`, wenn alle dynamischen Benutzeroberflächen-Funktionen eingezogen sind. Während sich die Werte für `safe-area-inset-*` ändern, wenn sich der gerade sichtbare Inhaltsbereich ändert, bleiben die `safe-area-max-inset-*` Werte konstant.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*` Bereichs. Diese Variablen sind verfügbar bei der Verwendung des `window-controls-overlay` [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfelds. Die Werte der Variablen können verwendet werden, um sicherzustellen, dass Inhalte nicht die Fenstersteuerungstasten (das heißt, Minimieren, Maximieren, und Schließen) bei progressiven Web-Apps (PWA), die auf Desktop-Geräten installiert sind, überlappen.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einlässe vom Rand des Viewports und Maße der virtuellen Bildschirmtastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `preferred-text-scale`
      - : Der bevorzugte Schriftvergrößerungsfaktor des Benutzers, eine Zahl, die in den Browser- oder Systembenutzereinstellungen festgelegt ist. Dies kann genutzt werden, um Inhalte proportional zu den im Browser oder Betriebssystem festgelegten Schriftgrößen zu dimensionieren.
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Offset-Positionen von bestimmten Viewport-Segmenten. Das `viewport-segment-*` Schlüsselwort wird von zwei durch Leerzeichen getrennten {{cssxref("&lt;integer>")}} Werten gefolgt, die die horizontale und vertikale Position oder Indices des Segments anzeigen. Die viewport-segment-Schlüsselworte sind nur definiert, wenn der Viewport aus zwei oder mehr Segmenten besteht, wie bei faltbaren oder klappbaren Geräten.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt wird, wenn die in dem ersten Argument referenzierte Umgebungsvariable nicht existiert. Alles nach dem ersten Komma wird als der Fallback-Wert angesehen. Dies kann ein einzelner Wert, eine andere `env()` Funktion oder eine durch Kommas getrennte Liste von Werten sein.

## Beschreibung

Die `env()` Funktion wird verwendet, um den Wert einer global erklärten, vom User-Agent definierten [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) in Ihr CSS einzufügen. Die `env()` Funktion kann als ein Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswertes oder Deskriptors verwendet werden (zum Beispiel in [Medienabfrage-Regeln](/de/docs/Web/CSS/Reference/At-rules/@media)).

Die Funktion akzeptiert ein `<environment-variable>` als ihr erstes Argument. Dies ist ein case-sensitives {{cssxref("&lt;custom-ident>")}}, das dem [Namen der zu ersetzenden Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) entspricht, aber es können auch zusätzliche space-getrennte Werte enthalten sein, falls erforderlich. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Falle eines Gerätes mit mehreren Viewport-Segmenten zurückgeben.

Das zweite Argument, falls vorhanden, ist der Fallback-Wert, der verwendet wird, wenn die in dem ersten Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Das Fallback kann eine andere Umgebungsvariable sein, selbst mit einem eigenen Fallback.

Die Syntax des Fallbacks ähnelt der Fallback-Syntax der {{cssxref("var()")}} Funktion, die verwendet wird, um [CSS Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) einzufügen, indem sie mehrere Kommas zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als der Fallback-Wert betrachtet. Wenn jedoch die `env()` Funktion innerhalb eines Eigenschaftswertes oder Deskriptors verwendet wird, der keine Kommas enthält, ist ein Fallback-Wert, der Kommas enthält, ungültig.

Eine Eigenschaft oder ein Deskriptor, das eine syntaktisch gültige `env()` Funktion enthält, wird zur Parsierzeit als gültig angenommen, wenn der Browser den heruntergeladenen CSS-Text zuerst liest und interpretiert. Sie wird nur zur Berechnungszeit auf Syntaxfehler geprüft, nachdem jede `env()` Funktion mit ihrem vom Browser bereitgestellten Wert (oder dem Fallback-Wert, falls die als erster Parameter übergebene Umgebungsvariablenname nicht erkannt wird) ersetzt wurde. Wenn der Wert ungültig ist und kein Fallback bereitgestellt wird, wird die Eigenschaft oder der Deskriptor, der die `env()` Funktion enthält, [invalid zur Berechnungswertzeit](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

Wenn ein `env()` Austausch ungültig ist und ein ungültiges Fallback enthalten ist oder das Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, aber es ist möglicherweise nicht der erwartete.

### Anwendungsfälle

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren und nicht von Geräteeinbuchtungen oder abgerundeten Ecken verdeckt zu werden, können die `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte für Betrachter sichtbar sind. Diese Funktion wurde später über ihren ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle wie das [Verhindern, dass Gerätebenachrichtigungen Teile der App-Benutzeroberfläche abdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui) zu ermöglichen.

Ein weiterer Anwendungsfall für `env()` Variablen ist für Desktop-[progressive Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) Feature nutzen, um die gesamte Anwendungsfensterfläche zu nutzen. Die [`titlebar-area-*` Werte](#titlebar-area-x) können verwendet werden, um Elemente dort zu positionieren, wo sich die Titelleiste befunden hätte, und [sicherzustellen, dass Inhalte nicht von Fenstersteuerungstasten verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas) auf Desktop-PWs.

Die `viewport-segment-*` Variablennamen können verwendet werden, um Ihre Container passend in die verfügbaren Segmente eines Geräts mit mehreren Viewport-Segmenten zu setzen, wie bei einem faltbaren oder klappbaren Gerät. Die Zahlen nach dem `viewport-segment-*` Namen geben an, welches Segment der mehreren Segmente die Umgebungsvariable referenziert.

Die `preferred-text-scale` Variable kann verwendet werden, um die Text- oder andere UI-Elemente einer Website proportional zu den im Browser oder Betriebssystem festgelegten Schriftgrößen zu dimensionieren. Zum Beispiel könnten Sie die Textgröße des Bodys als Prozentangabe auf Basis des benutzerdefinierten Schriftenmaßstabs festlegen:

```css
body {
  font-size: calc(100% * env(preferred-text-scale));
}
```

Größen können auch so eingestellt werden, dass sie proportional zur Schriftgröße des Browsers oder Betriebssystems sind, indem [`<meta name="text-scale" content="scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale) im Dokument `<head>` eingefügt wird. Das `<meta>`-Tag sollte gegenüber `env(preferred-text-scale)` bevorzugt werden, wann immer möglich, da das `<meta>`-Tag auf einer breiteren Palette von Plattformen unterstützt wird und auch einfacher zu verwenden ist.

> [!WARNING]
> Seien Sie vorsichtig bei der Verwendung von `env(preferred-text-scale)`, wenn `<meta name="text-scale" content="scale">` gesetzt ist, da dies dazu führt, dass die Textskalierung zweimal angewendet wird, wenn sie mit relativen Größen wie `em` und `rem` kombiniert wird. Wenn das `<meta>`-Tag gesetzt ist, verursacht eine Deklaration wie `font-size: calc(2rem * env(preferred-text-scale))`, dass kleine Schriftgrößen noch kleiner gemacht und große Schriftgrößen vergrößert werden.

### Namen gefolgt von ganzen Zahlen

Wenn die Umgebungsvariable array-ähnlich ist, das bedeutet, dass der Name möglicherweise mehr als einen Wert referenziert, wie es bei Geräten mit mehreren Viewport-Segmenten der Fall ist, umfasst der `<environment-variable>` Parameter sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variablen, auf die die Funktion verweist. Zum Beispiel werden im Fall der `viewport-segment-*` Variablen die Variablennamen an die `env()` Funktion zusammen mit zwei ganzen Zahlen übergeben, die die Indizes des Segments angeben, für das der Wert zurückgegeben werden soll. Diese Werte sind beide ganze Zahlen von `0` oder größer. Die erste ganze Zahl repräsentiert den horizontalen Index des Segments, wobei `0` das linkeste Segment ist, und der zweite Wert repräsentiert den vertikalen Index des Segments, wobei `0` das unterste Segment darstellt:

![Zwei Segmentlayouts eines Geräts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 ist das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen Side-by-Side-Layout wird das linke Segment durch `0 0`, und das rechte Segment durch `1 0` dargestellt.
- In einem vertikalen Layout von oben nach unten wird das obere Segment durch `0 0`, und das untere Segment durch `0 1` dargestellt.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Zum Beispiel könnte bei einem Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` und das rechte Segment durch `2 0` dargestellt werden.

Zum Beispiel gibt das Folgende die Breite des rechten Segments auf einem Gerät mit zwei Segmenten zurück, bei dem die Segmente horizontal ausgerichtet sind:

```css
env(viewport-segment-width 1 0)
```

Siehe das [Viewport Segment API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für ein vollständiges funktionierendes Demo ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch [die Verwendung der Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erklärung des Demos an.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env() um sicherzustellen, dass Buttons nicht von der Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Buttons nicht durch Gerätemitteilungen, die am unteren Bildschirmrand erscheinen, verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Bei Geräten jedoch, die Mitteilungen unten auf dem Bildschirm anzeigen, wie iOS, enthält es einen Wert, der Platz für die Anzeige der Mitteilung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu schaffen, der auf diesem Gerät natürlich erscheint.

#### HTML

Wir haben eine {{htmlelement("main")}} Sektion, die eine Fake-Anwendung enthält, und ein {{htmlelement("footer")}} mit zwei {{htmlelement("button")}} Elementen:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit Hilfe der [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), erstellen wir einen Footer, der nur so hoch ist, wie er sein muss, während die Hauptsektion mit der Anwendung den Rest der Viewportfläche ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky), um den Footer am unteren Rand des Viewports anzuheften. Wir verwenden dann die {{cssxref("padding")}} Kurzschreibweise, um den Footer zu polstern. Wir fügen den Wert der `safe-area-inset-bottom` Umweltvariable zu einem anfänglichen `1em` Bodenabstand hinzu. Eine größere schwarze Fläche wird auf Geräten angezeigt, die einen positiven Wert für diese Variable haben, um sicherzustellen, dass die Schaltflächen im Footer niemals verdeckt sind.

```css
footer {
  position: sticky;
  bottom: 0;

  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

#### Resultate

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

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Dann fügen wir {{cssxref("padding")}} hinzu, wobei die `env()` Funktion mit einem Fallback für die Größe der Polsterung auf jeder Seite verwendet wird. Absichtlich setzen wir einen ungültigen Wert für die linke Polsterung (denken Sie daran, dass Umgebungsvariablennamen case-sensitive sind), um die Verwendung des Fallback-Werts zu demonstrieren.

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

#### Resultate

{{EmbedLiveSample("Using_the_fallback_value", "350px", "250px")}}

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fenstersteuerungstasten in Desktop-PWAs verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass Inhalte, die in einer Desktop Progressive Web App angezeigt werden, die das [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) nutzt, nicht durch die Fenstersteuerungstasten des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, wo die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay Feature nicht unterstützen, wie mobilen Geräten, werden die Fallback-Werte verwendet.

So sieht eine PWA aus, die normalerweise auf einem Desktop-Gerät installiert ist:

![Illustration, wie eine auf einem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungstasten, einer Titelleiste und darunter Webinhalten](desktop-pwa-window.png)

Mit dem Window Controls Overlay Feature decken die Webinhalte die gesamte App-Fenster-Oberfläche ab, wobei die Fenstersteuerungs- und die PWA-Buttons als Überlagerungen angezeigt werden:

![Illustration, wie eine auf einem Desktop installierte PWA mit dem Window Controls Overlay Feature aussieht, mit Fenstersteuerungstasten, keiner Titelleiste und Webinhalten, die das gesamte Fenster überspannen](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest des Inhalts scrollt und stattdessen mit den Fenstersteuerungstasten ausgerichtet bleibt, sogar auf Geräten/Browsers, die elastisches Scrollen unterstützen (auch bekannt als "Gummibandeffekt").

### Viewport-Segmente

Das [Viewport Segment API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der [Leitfaden zur Verwendung der Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API/Using) bieten eine Demonstration und Erklärung zur Verwendung der `env()` Funktion mit den `viewport-segment-*` Umgebungsvariablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables) Modul
- {{CSSxRef("var")}}
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
- [Benutzereigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/Reference/Properties/--*)
- [`<meta name="text-scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale)
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Anpassung der Fenstersteuerungsüberlagerung der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Anzeige von Inhalten in der Titelleiste](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Aus der Box ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
