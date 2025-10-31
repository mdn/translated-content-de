---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) kann verwendet werden, um den Wert einer vom Benutzer-Agent definierten [Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables) in Ihr CSS einzufügen.

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

Die `env( <environment-variable>, <fallback> )` Funktion akzeptiert die folgenden Parameter:

- [`<environment-variable>`](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables)
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der Umgebungsvariable angibt, die eingefügt werden soll. Wenn der angegebene Name eine array-ähnliche Umgebungsvariable repräsentiert, folgt auf den Namen ein {{cssxref("&lt;integer>")}} Wert, der die spezifische Instanz identifiziert, auf die sich der Name bezieht. Der case-sensitive Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand von der oberen, rechten, unteren oder linken Inset-Kante des Viewports, der definiert, wo es sicher ist, Inhalte zu platzieren, ohne zu riskieren, dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, in dem alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport ein Rechteck ist und keine Funktionen wie Werkzeugleisten oder dynamische Tastaturen den Viewport-Bereich belegen; andernfalls ist es ein `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen `safe-area-inset-*` Variablen-Pendants, wenn alle dynamischen Benutzeroberflächen-Features zurückgezogen sind. Während sich die `safe-area-inset-*` Werte ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, bleiben die `safe-area-max-inset-*` Werte konstant.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Dimensionen eines sichtbaren `titlebar-area-*` Bereichs. Diese Variablen sind verfügbar, wenn das `window-controls-overlay` [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfeld verwendet wird. Die Werte der Variablen können verwendet werden, um sicherzustellen, dass Inhalte nicht die Fenstersteuerungsschaltflächen (d.h. Minimieren, Maximieren und Schließen) mit Progressive Web Apps (PWA) überschneiden, die auf Desktop-Geräten installiert sind.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einbettungen vom Rand des Viewports und die Dimensionen der virtuellen On-Screen-Tastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Dimensionen und Versatzpositionen spezifischer Viewport-Segmente. Das `viewport-segment-*` Schlüsselwort wird durch zwei leerzeichengetrennte {{cssxref("&lt;integer>")}} Werte gefolgt, die die horizontale und vertikale Position oder Indizes des Segments anzeigen. Die Viewport-Segment-Schlüsselwörter sind nur definiert, wenn der Viewport aus zwei oder mehr Segmenten besteht, wie bei faltbaren oder klappbaren Geräten.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt wird, wenn die in dem ersten Argument referenzierte Umgebungsvariable nicht existiert. Alles nach dem ersten Komma wird als Fallback-Wert angesehen. Dies kann ein einzelner Wert, eine andere `env()` Funktion oder eine kommaseparierte Liste von Werten sein.

## Beschreibung

Die `env()` Funktion wird verwendet, um den Wert einer global aktivierten, [vom Benutzer-Agent definierten Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) in Ihr CSS einzufügen. Die `env()` Funktion kann als Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswerts oder Deskriptors verwendet werden (z.B. in [Media-Query-Regeln](/de/docs/Web/CSS/@media)).

Die Funktion akzeptiert ein `<environment-variable>` als ihr erstes Argument. Dies ist ein case-sensitive {{cssxref("&lt;custom-ident>")}}, das dem [Namen der Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) entspricht, der ersetzt werden soll, aber es kann auch zusätzliche leerzeichengetrennte Werte enthalten, wenn dies erforderlich ist. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Falle eines Geräts mit mehreren Viewport-Segmenten zurückgeben.

Das zweite Argument, falls angegeben, ist der Fallback-Wert, der verwendet wird, wenn die in dem ersten Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Das Fallback kann eine andere Umgebungsvariable sein, auch mit eigenen Fallback.

Die Syntax des Fallbacks ist der Fallback-Syntax der {{cssxref("var()")}} Funktion ähnlich, die verwendet wird, um [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) einzufügen, indem sie mehrere Kommata erlaubt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn jedoch die `env()` Funktion innerhalb eines Eigenschaftswerts oder Deskriptors verwendet wird, das keine Kommata enthält, ist ein Fallback-Wert, der Kommata enthält, nicht gültig.

Eine Eigenschaft oder ein Deskriptor, der eine syntaktisch gültige `env()` Funktion enthält, wird zur Parsierzeit als gültig angenommen, wenn der Browser den heruntergeladenen CSS-Text das erste Mal liest und interpretiert. Es wird nur zur Syntaxprüfung zur Laufzeit überprüft, nachdem jede `env()` Funktion mit ihrem vom Browser bereitgestellten Wert (oder dem Fallback-Wert, wenn die als erster Parameter übergebene Umgebungsvariable kein erkannter Umgebungsvariablenname ist) ersetzt wurde. Wenn der Wert ungültig ist und kein Fallback angegeben wird, ist die Eigenschaft oder der Deskriptor, der die `env()` Funktion enthält, [zur Berechnungswert-Zeit ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()` Ersetzung ungültig ist und ein ungültiges Fallback enthalten ist oder das Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [Anfangs-](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, der jedoch möglicherweise nicht der erwartete ist.

### Anwendungsfälle

Ursprünglich von iOS-Browsern bereitgestellt, um Entwicklern die Platzierung ihrer Inhalte in einem sicheren Bereich des Viewports zu ermöglichen und nicht durch Geräteaussparungen oder abgerundete Ecken verdeckt zu werden, können die `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte für Betrachter sichtbar sind. Diese Funktion wurde später über ihren ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle wie das [Verhindern, dass Gerätechats einige der App-Benutzeroberfläche verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui) zu ermöglichen.

Ein weiterer Anwendungsfall für `env()` Variablen ist für Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) Feature verwenden, um den gesamten Anwendungsfensterbereich zu nutzen. Mit den [`titlebar-area-*` Werten](#titlebar-area-x) können Entwickler Elemente dort platzieren, wo sich normalerweise die Titelleiste befunden hätte, und [sicherstellen, dass Inhalte nicht durch Fenstersteuerungsschaltflächen verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Die `viewport-segment-*` Variablennamen können verwendet werden, um Ihre Container passgenau in die verfügbaren Segmente eines Geräts mit mehreren Viewport-Segmenten wie einem klappbaren oder faltbaren Gerät zu setzen. Die Zahlen nach dem `viewport-segment-*` Namen zeigen an, auf welches Segment der mehreren Segmente sich die Umgebungsvariable bezieht.

### Namen gefolgt von Zahlen

Wenn die Umgebungsvariable array-ähnlich ist, bedeutet dies, dass der Name mehr als einen Wert referenzieren kann, wie dies bei Geräten mit mehreren Viewport-Segmenten der Fall ist, der `<environment-variable>` Parameter enthält sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variablen, auf die die Funktion verweist. Im Fall der `viewport-segment-*` Variablen werden die Variablennamen an die `env()` Funktion zusammen mit zwei Zahlen übergeben, die die Indizes des Segments angeben, für das der Wert zurückgegeben werden soll. Diese Werte sind beide Ganzzahlen von `0` oder größer. Die erste Zahl repräsentiert den horizontalen Index des Segments, wobei `0` das linkeste Segment ist, und die zweite Zahl repräsentiert den vertikalen Index des Segments, wobei `0` das unterste Segment repräsentiert:

![Zwei Geräte-Segment-Layouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen nebeneinander Layout wird das linke Segment durch `0 0` repräsentiert, und das rechte Segment wird durch `1 0` repräsentiert.
- In einem vertikalen von oben nach unten Layout wird das obere Segment durch `0 0` repräsentiert, und das untere Segment wird durch `0 1` repräsentiert.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Zum Beispiel kann ein Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` repräsentiert haben und das rechte Segment durch `2 0`.

Zum Beispiel gibt das Folgende die Breite des rechten Segments auf einem faltbaren Gerät mit zwei Segmenten zurück, bei dem die Segmente horizontal angeordnet sind:

```css
env(viewport-segment-width 1 0)
```

Sehen Sie sich die [Viewport segment API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige Demo ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)) an. Überprüfen Sie auch [Verwenden der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erläuterung der Demo.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht von der Geräte-UI verdeckt werden

In folgendem Beispiel wird `env()` verwendet, um sicherzustellen, dass feststehende App-Toolbar-Schaltflächen nicht von Gerätebenachrichtigungen am unteren Bildschirmrand verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. In Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält er jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dies kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um auf diesem Gerät einen natürlich wirkenden Abstand zu schaffen.

#### HTML

Wir haben einen {{htmlelement("main")}} Abschnitt, der eine gefälschte Anwendung enthält, und einen {{htmlelement("footer")}}, der zwei {{htmlelement("button")}} Elemente enthält:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit [CSS Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) erstellen wir eine Fußzeile, die nur so hoch ist, wie sie sein muss, während der Hauptabschnitt, der die Anwendung enthält, den Rest des Viewports ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky) um den Footer an den unteren Rand des Viewports zu kleben. Wir verwenden dann das {{cssxref("padding")}} Shorthand, um Padding auf den Footer anzuwenden. Wir fügen den Wert der `safe-area-inset-bottom` Umgebungsvariable zu einem anfänglichen `1em` an unterer Polsterung hinzu. Ein größerer schwarzer Bereich wird auf Geräten angezeigt, die einen positiven Wert für diese Variable haben, um sicherzustellen, dass die Schaltflächen im Footer niemals verdeckt werden.

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

Wir fügen einen Absatz mit Text hinzu:

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

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Dann fügen wir {{cssxref("padding")}} hinzu, indem wir die `env()` Funktion mit einem Fallback für die Größe des Paddings auf jeder Seite verwenden. Wir setzen absichtlich einen ungültigen Wert für das linke Padding (denken Sie daran, Umgebungsvariablennamen sind case-sensitiv), um die Verwendung des Fallback-Wertes zu demonstrieren.

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

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fenstersteuerungsschaltflächen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop Progressive Web App angezeigt werden, die das [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungsschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die das Feature Window Controls Overlay nicht unterstützen, wie mobile Geräte, werden die Fallback-Werte verwendet.

So sieht normalerweise eine PWA auf einem Desktop-Gerät aus:

![Illustration, wie eine PWA auf einem Desktop normalerweise aussieht, mit Fenstersteuerungsschaltflächen, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit dem Window Controls Overlay Feature decken die Webinhalte den gesamten Anwendungsfensterbereich ab, wobei die Fenstersteuerungen und PWA-Schaltflächen als Overlays angezeigt werden:

![Illustration, wie eine PWA mit dem Window Controls Overlay Feature auf einem Desktop aussieht, mit Fenstersteuerungsschaltflächen, keiner Titelleiste und Webinhalten, die sich über das gesamte Fenster erstrecken](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht zusammen mit dem Rest der Inhalte scrollt und stattdessen immer mit den Fenstersteuerungsschaltflächen ausgerichtet bleibt, auch auf Geräten/Browsern, die elastisches Overscrollen unterstützen (auch bekannt als Rubberbanding).

### Viewport-Segmente

Die [Viewport segment API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der [Viewport Segments API Leitfaden](/de/docs/Web/API/Viewport_segments_API/Using) bieten eine Demonstration und Erklärung der Verwendung der `env()` Funktion mit den `viewport-segments-*` Umgebungsvariablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using environment variables](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- [CSS environment variables](/de/docs/Web/CSS/CSS_environment_variables) Modul
- {{CSSxRef("var")}}
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/Reference/Properties/--*)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Anpassen des Fenstersteuerungsoverlays der PWA-Titelleiste](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
