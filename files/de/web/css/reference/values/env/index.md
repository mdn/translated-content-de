---
title: "`env()` CSS-Funktion"
short-title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Wert einer vom Benutzeragenten definierten [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using) in Ihr CSS einzufügen.

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

- [`<environment-variable>`](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)
  - : Ein {{cssxref("&lt;custom-ident>")}}, der den Namen der Umgebungsvariablen angibt, die eingefügt werden soll. Wenn der angegebene Name eine array-ähnliche Umgebungsvariable darstellt, folgt dem Namen ein {{cssxref("&lt;integer>")}}-Wert, der die spezifische Instanz identifiziert, auf die sich der Name bezieht. Der case-sensitive Name der Umgebungsvariablen kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand von der oberen, rechten, unteren oder linken Einfügekante des Ansichtsfensters, der angibt, wo Inhalte eingefügt werden können, ohne dass das Risiko besteht, dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, wenn das Ansichtsfenster ein Rechteck ist und keine Funktionen — wie Toolbars oder dynamische Tastaturen — Platz im Ansichtsfenster einnehmen; andernfalls ist es ein `px`-Wert, der größer als `0` ist.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen Gegenstücke der `safe-area-inset-*`-Variablen, wenn alle dynamischen Benutzeroberflächenfunktionen zurückgezogen sind. Während sich die `safe-area-inset-*`-Werte ändern, wenn der derzeit sichtbare Inhaltsbereich sich ändert, sind die `safe-area-max-inset-*`-Werte Konstanten.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Dimensionen eines sichtbaren `titlebar-area-*`-Bereichs. Diese Variablen stehen zur Verfügung, wenn das `window-controls-overlay` [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfeld verwendet wird. Die Variablenwerte können verwendet werden, um sicherzustellen, dass Inhalte nicht Fenstersteuerungsschaltflächen (also Minimieren, Maximieren und Schließen) bei progressiven Web-Apps (PWA), die auf Desktop-Geräten installiert sind, überlappen.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einfügungen von der Kante des Ansichtsfensters und die Abmessungen der virtuellen Bildschirmtastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Offset-Positionen bestimmter Ansichtsfenstersegmente. Das `viewport-segment-*`-Schlüsselwort wird von zwei leerzeichengetrennten {{cssxref("&lt;integer>")}}-Werten gefolgt, die die horizontale und vertikale Position oder Indizes des Segments angeben. Die viewport-segment-Schlüsselwörter sind nur definiert, wenn das Ansichtsfenster aus zwei oder mehr Segmenten besteht, wie bei faltbaren oder klappbaren Geräten.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt wird, wenn die in dem ersten Argument referenzierte Umgebungsvariable nicht existiert. Alles, was nach dem ersten Komma kommt, wird als Fallback-Wert angesehen. Dies kann ein einzelner Wert, eine weitere `env()`-Funktion oder eine kommagetrennte Liste von Werten sein.

## Beschreibung

Die `env()`-Funktion wird verwendet, um den Wert einer globalen, [vom Benutzeragenten definierten Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) in Ihr CSS einzufügen. Die `env()`-Funktion kann als Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswerts oder Deskriptors verwendet werden (zum Beispiel in [Media-Query-Regeln](/de/docs/Web/CSS/Reference/At-rules/@media)).

Die Funktion akzeptiert ein `<environment-variable>` als erstes Argument. Dies ist ein case-sensitives {{cssxref("&lt;custom-ident>")}}, das dem [Namen der Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) entspricht, die ersetzt werden soll, kann jedoch auch zusätzliche leerzeichengetrennte Werte enthalten, falls erforderlich. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Fall eines Geräts mit mehreren Ansichtsfenster-Segmenten zurückgeben.

Das zweite Argument, falls bereitgestellt, ist der Fallback-Wert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Der Fallback kann eine andere Umgebungsvariable sein, sogar mit ihrem eigenen Fallback.

Die Syntax des Fallbacks ähnelt der Fallback-Syntax der {{cssxref("var()")}}-Funktion, die zum Einfügen von [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verwendet wird, insofern sie mehrere Kommata erlaubt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn jedoch die `env()`-Funktion innerhalb eines Eigenschaftswertes oder Deskriptors verwendet wird, der keine Kommata enthält, ist ein Fallback-Wert, der Kommata enthält, nicht gültig.

Eine Eigenschaft oder ein Deskriptor, der eine syntaktisch gültige `env()`-Funktion enthält, wird zur Zeit der Analyse als gültig angesehen, wenn der Browser zuerst den heruntergeladenen CSS-Text liest und interpretiert. Es wird nur zur Laufzeit der Berechnung auf Syntax überprüft, nachdem jede `env()`-Funktion durch ihren vom Browser bereitgestellten Wert (oder den Fallback-Wert, wenn die als erster Parameter übergebene Umgebungsvariable kein erkannter Name einer Umgebungsvariablen ist) ersetzt wurde. Wenn der Wert ungültig ist und kein Fallback bereitgestellt wird, ist die Eigenschaft oder der Deskriptor, der die `env()`-Funktion enthält, [zur Laufzeit ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()`-Substitution ungültig ist und ein ungültiger Fallback eingeschlossen ist oder der Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, aber es könnte nicht der erwartete sein.

### Anwendungsfälle

Ursprünglich von iOS-Browsern bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Ansichtsfensters zu platzieren, ohne dass sie durch Geräteeinschnitte oder abgerundete Ecken verdeckt werden, können die `safe-area-inset-*`-Werte verwendet werden, um sicherzustellen, dass Inhalte für die Betrachter sichtbar sind. Diese Funktion wurde später über den ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle wie das [Verhindern, dass Gerätebenachrichtigungen Teile der App-Benutzeroberfläche verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui) zu ermöglichen.

Ein weiterer Anwendungsfall für `env()`-Variablen ist für [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) auf dem Desktop, die das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) Feature nutzen, um die gesamte Fensterfläche der Anwendung zu nutzen. Mithilfe der [`titlebar-area-*`-Werte](#titlebar-area-x) können Entwickler Elemente dort positionieren, wo sich normalerweise die Titelleiste befunden hätte, und [sicherstellen, dass Inhalte nicht durch Fenstersteuerungsschaltflächen verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas), die sich in PWAs befinden, die auf Desktop-Geräten installiert sind.

Die `viewport-segment-*`-Variablenbezeichnungen können verwendet werden, um Ihre Container nahtlos in die verfügbaren Segmente eines Multi-Viewport-Segment-Geräts, wie ein klappbares oder faltbares Gerät, einzufügen. Die auf die `viewport-segment-*`-Bezeichnung folgenden Ganzzahlen geben an, welches Segment der mehreren Segmente durch die Umgebungsvariable referenziert wird.

### Namen gefolgt von Ganzzahlen

Wenn die Umgebungsvariable array-ähnlich ist, was bedeutet, der Name kann mehr als einen Wert referenzieren, wie es bei Geräten mit mehreren Ansichtsfenster-Segmenten der Fall ist, beinhaltet der `<environment-variable>`-Parameter sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variablen, auf die die Funktion verweist. Zum Beispiel, im Fall der `viewport-segment-*`-Variablen werden die Variablennamen zusammen mit zwei Ganzzahlen, die die Indizes des Segments angeben, an die `env()`-Funktion übergeben, um den Wert für diese zu erhalten. Diese Werte sind beide Ganzzahlen von `0` oder größer. Die erste Ganzzahl repräsentiert den horizontalen Index des Segments, wobei `0` das linkeste Segment ist, und der zweite Wert repräsentiert den vertikalen Index des Segments, wobei `0` das unterste Segment ist:

![Zwei Geräte-Segment-Layouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontal nebeneinander angeordneten Layout wird das linke Segment durch `0 0` repräsentiert, und das rechte Segment wird durch `1 0` repräsentiert.
- In einem vertikalen, von oben nach unten angeordneten Layout wird das obere Segment durch `0 0` repräsentiert, und das untere Segment wird durch `0 1` repräsentiert.
- Bei Geräten mit mehr als zwei Segmenten könnten die Zahlen größer sein. Zum Beispiel könnte ein Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` repräsentieren und das rechte Segment durch `2 0`.

Zum Beispiel gibt das folgende die Breite des rechten der beiden Segmente eines faltbaren Geräts zurück, bei dem die Segmente horizontal ausgerichtet sind:

```css
env(viewport-segment-width 1 0)
```

Siehe das [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine voll funktionsfähige Demo ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch [Verwendung der Viewport-Segments-API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung an.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env() um sicherzustellen, dass Schaltflächen nicht durch Gerät UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste Anwendungs-Toolbar-Schaltflächen nicht durch Gerätemitteilungen, die unten auf dem Bildschirm angezeigt werden, verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Bei Geräten, die Benachrichtigungen unten auf dem Bildschirm anzeigen, wie iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dies kann dann im Wert von {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf dem Gerät natürlich erscheint.

#### HTML

Wir haben einen {{htmlelement("main")}}-Abschnitt, der eine Fake-Anwendung enthält und einen {{htmlelement("footer")}} mit zwei {{htmlelement("button")}}-Elementen:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit dem [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) erstellen wir einen Footer, der nur so hoch ist, wie er sein muss, während der Main-Bereich, der die Anwendung enthält, den Rest des Ansichtsfensters ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky), um den Footer am unteren Rand des Ansichtsfensters zu fixieren. Wir verwenden dann die {{cssxref("padding")}}-Kurzschreibweise, um dem Footer ein Padding hinzuzufügen. Wir fügen dem anfänglichen `1em`-Puffer unten den Wert der `safe-area-inset-bottom`-Umgebung hinzu. Ein größerer schwarzer Bereich wird auf Geräten angezeigt, die einen positiven Wert für diese Variable haben, was sicherstellt, dass die Schaltflächen im Footer niemals verdeckt werden.

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

Wir fügen einen Absatz Text hinzu:

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

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Wir fügen dann {{cssxref("padding")}} hinzu, indem wir die `env()`-Funktion mit einem Fallback für die Größe des Paddings auf jeder Seite verwenden. Wir setzen absichtlich einen ungültigen Wert für das linke Padding (denken Sie daran, dass Umgebungsvariablennamen case-sensitive sind), um die Verwendung des Fallback-Werts zu demonstrieren.

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

### Verwendung von env() um sicherzustellen, dass Inhalte nicht durch Fenstersteuerungsschaltflächen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, angezeigt werden, nicht durch die Fenstersteuerungsschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*`-Werte definieren ein Rechteck, wo normalerweise die Titelleiste angezeigt worden wäre. Bei Geräten, die die Window-Controls-Overlay-Funktion nicht unterstützen, wie mobile Geräte, werden die Fallback-Werte verwendet.

So sieht eine PWA, die auf einem Desktop-Gerät installiert ist, normalerweise aus:

![Illustration, wie eine PWA, die auf einem Desktop installiert ist, normalerweise aussieht, mit Fenstersteuerungsschaltflächen, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit der Window-Controls-Overlay-Funktion bedecken die Webinhalte die gesamte Fensterfläche der App, wobei die Fenstersteuerungen und PWA-Schaltflächen als Überlagerungen angezeigt werden:

![Illustration, wie eine PWA, die auf einem Desktop installiert ist, mit der Window-Controls-Overlay-Funktion aussieht, mit Fenstersteuerungsschaltflächen, keiner Titelleiste und Webinhalten, die das gesamte Fenster einnehmen](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest des Inhalts scrollt, sondern stattdessen mit den Fenstersteuerungsschaltflächen ausgerichtet bleibt, selbst bei Geräten/Browsers, die elastisches Überscrollen unterstützen (auch bekannt als Gummiband-Effekt).

### Ansichtsfenster-Segmente

Das [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der [Verwendung der Viewport-Segments-API](/de/docs/Web/API/Viewport_segments_API/Using) Leitfaden bietet eine Demonstration und Erklärung der Verwendung der `env()`-Funktion mit den `viewport-segments-*`-Umgebungsvariablen.

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
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Viewport-Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Passen Sie das Fenstersteuerungs-Overlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Ausbrechen aus dem Rahmen](https://alistapart.com/article/breaking-out-of-the-box/)
