---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Die **`env()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer von der Benutzerumgebung definierten [Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables) in Ihr CSS einzufügen.

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
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariable angibt. Wenn der angegebene Name eine arrayähnliche Umgebungsvariable darstellt, wird der Name durch {{cssxref("&lt;integer>")}} Werte ergänzt, die die spezifische Instanz identifizieren, auf die sich der Name bezieht. Der case-sensitive Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand von der oberen, rechten, unteren oder linken Kante des Ansichtsfensters, der definiert, wo es sicher ist, Inhalte zu platzieren, ohne das Risiko einzugehen, dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, in dem alle Inhalte sichtbar sind. Die Werte sind `0`, wenn das Ansichtsfenster ein Rechteck ist und keine Funktionen – wie Werkzeugleisten oder dynamische Tastaturen – den Ansichtsflächenbereich belegen; andernfalls ist es ein `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen `safe-area-inset-*`-Variablengegenstücke, wenn alle dynamischen Benutzeroberflächenfunktionen eingezogen sind. Während die `safe-area-inset-*`-Werte sich ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, sind die `safe-area-max-inset-*`-Werte Konstanten.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*`-Bereichs. Diese Variablen sind verfügbar, wenn das `window-controls-overlay`-[`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Manifestfeld verwendet wird. Die Werte der Variablen können verwendet werden, um sicherzustellen, dass Inhalte nicht die Fenstersteuerungstasten (das heißt, Minimieren, Maximieren und Schließen) überlappen, bei auf Desktop-Geräten installierten progressiven Web-Apps (PWA).
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einfügebereiche vom Rand des Ansichtsfensters und die Abmessungen der virtuellen Bildschirmtastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Offset-Positionen spezifischer Ansichtsfenstersegmente. Das Schlüsselwort `viewport-segment-*` wird gefolgt von zwei durch Leerzeichen getrennten {{cssxref("&lt;integer>")}} Werten, die die horizontale und vertikale Position oder die Indizes des Segments anzeigen. Die Schlüsselwörter der Ansichtsfenstersegmente sind nur definiert, wenn das Ansichtsfenster aus zwei oder mehr Segmenten besteht, wie bei faltbaren oder klappbaren Geräten.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt wird, wenn die in das erste Argument referenzierte Umgebungsvariable nicht existiert. Alles nach dem ersten Komma gilt als Fallback-Wert. Dies kann ein einzelner Wert, eine weitere `env()`-Funktion oder eine durch Kommas getrennte Liste von Werten sein.

## Beschreibung

Die `env()`-Funktion wird verwendet, um den Wert einer global umfassten, [benutzerdefiniert definierten Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) in Ihr CSS einzufügen. Die `env()`-Funktion kann als Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswerts oder Deskriptors verwendet werden (zum Beispiel in [Media-Query-Regeln](/de/docs/Web/CSS/@media)).

Die Funktion akzeptiert eine `<environment-variable>` als erstes Argument. Dies ist ein case-sensitives {{cssxref("&lt;custom-ident>")}}, das dem [Namen der zu substituierenden Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) entspricht, aber auch zusätzliche durch Leerzeichen getrennte Werte umfassen kann, wenn erforderlich. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Fall eines Geräts mit mehreren Ansichtsfenstersegmenten zurückgeben.

Das zweite Argument, falls vorhanden, ist der Fallback-Wert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Der Fallback kann auch eine andere Umgebungsvariable sein, sogar mit einem eigenen Fallback.

Die Syntax des Fallbacks ähnelt der Fallback-Syntax der {{cssxref("var()")}}-Funktion, die zur Einfügung von [CSS-Benutzerdefinitionen](/de/docs/Web/CSS/--*) verwendet wird, da sie mehrere Kommata zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn jedoch die `env()`-Funktion innerhalb eines Eigenschaftswerts oder Deskriptors verwendet wird, der keine Kommata enthält, ist ein Fallback-Wert, der Kommata enthält, nicht gültig.

Eine Eigenschaft oder ein Deskriptor, das oder der eine syntaktisch gültige `env()`-Funktion enthält, wird während des Parsens als gültig angenommen, wenn der Browser den heruntergeladenen CSS-Text erstmals liest und interpretiert. Es wird nur zur Berechnungszeit syntaxüberprüft, nachdem jede `env()`-Funktion durch ihren browserseitig bereitgestellten Wert (oder den Fallback-Wert, wenn die Umgebungsvariable, die als erster Parameter übergeben wird, kein erkannter Umgebungsvariablenname ist) ersetzt wurde. Wenn der Wert ungültig ist und kein Fallback bereitgestellt wird, ist die Eigenschaft oder der Deskriptor, das oder der die `env()`-Funktion enthält, [zur Berechnungszeit ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()`-Substitution ungültig ist und ein ungültiges Fallback enthalten ist, oder das Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder der [vererbte Wert](/de/docs/Web/CSS/CSS_cascade/Inheritance) der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, aber dieser ist möglicherweise nicht der erwartete.

### Anwendungsfälle

Ursprünglich wurde die Funktion vom iOS-Browser bereitgestellt, damit Entwickler ihre Inhalte in einem sicheren Bereich des Ansichtsfensters platzieren können, um nicht von Gerätenotches oder abgerundeten Ecken verdeckt zu werden. Die `safe-area-inset-*`-Werte können verwendet werden, um sicherzustellen, dass Inhalte für die Betrachter sichtbar sind. Diese Funktion wurde später über ihren ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle wie das [Verhindern, dass Gerätemitteilungen über einige Teile der App-Benutzeroberfläche verdeckt werden](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui) zu ermöglichen.

Ein weiterer Anwendungsfall für `env()`-Variablen ist für Desktop-[progressive Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die Funktion [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden, um den gesamten Anwendungsflächenbereich des Fensters zu nutzen. Mit den [`titlebar-area-*`-Werten](#titlebar-area-x) können Entwickler Elemente dort platzieren, wo die Titelleiste gewesen wäre, und [sicherstellen, dass Inhalte nicht von Fenstersteuerungstasten verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Die `viewport-segment-*`-Variablennamen können verwendet werden, um Ihre Container so anzupassen, dass sie nahtlos in die verfügbaren Segmente eines Geräts mit mehreren Ansichtsfenstersegmenten wie einem klappbaren oder faltbaren Gerät passen. Die der `viewport-segment-*`-Name folgendenden Ganzzahlen geben an, auf welche der mehreren Segmente sich die Umgebungsvariable bezieht.

### Von Ganzzahlen gefolgte Namen

Wenn die Umgebungsvariable arrayähnlich ist, d.h. der Name kann auf mehr als einen Wert verweisen, wie dies bei Geräten mit mehreren Ansichtsfenstersegmenten der Fall ist, enthält der Parameter `<environment-variable>` sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variable, auf die sich die Funktion bezieht. Zum Beispiel bei den `viewport-segment-*`-Variablen werden die Variablennamen der `env()`-Funktion zusammen mit zwei Ganzzahlen übergeben, die die Indizes des Segments angeben, für das der Wert zurückgegeben werden soll. Diese Werte sind beide Ganzzahlen von `0` oder größer. Der erste Wert repräsentiert den horizontalen Index des Segments, wobei `0` das linksstehendste Segment ist, und der zweite Wert repräsentiert den vertikalen Index des Segments, wobei `0` das untenstehendste Segment darstellt:

![Zwei Gerätsegment-Layouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen nebeneinanderliegenden Layout wird das linke Segment durch `0 0` repräsentiert, und das rechte Segment durch `1 0`.
- In einem vertikalen von oben nach unten Layout wird das obere Segment durch `0 0` repräsentiert, und das untere Segment durch `0 1`.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Zum Beispiel kann bei einem Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` repräsentiert werden, und das rechtsstehende Segment durch `2 0`.

Zum Beispiel gibt das folgende Beispiel die Breite des rechtsstehenden Segments eines zweifach segmentierten faltbaren Geräts zurück, bei dem die Segmente horizontal ausgerichtet sind:

```css
env(viewport-segment-width 1 0)
```

Sehen Sie sich das [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für ein vollständiges funktionierendes Demo ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)) an. Weitere Erklärungen finden Sie auch unter [Verwendung der Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API/Using).

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht von der Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feststehende App-Toolbar-Schaltflächen nicht von Gerätemitteilungen verdeckt werden, die am unteren Rand des Bildschirms erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Bei Geräten, die Mitteilungen unten auf dem Bildschirm anzeigen, wie iOS, enthält es einen Wert, der Platz für die Anzeige der Mitteilung lässt. Dieser Wert kann dann für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

#### HTML

Wir haben einen {{htmlelement("main")}}-Bereich, der eine gefälschte Anwendung enthält, und einen {{htmlelement("footer")}}, der zwei {{htmlelement("button")}}-Elemente enthält:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mithilfe der [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) erstellen wir einen Fußbereich, der nur so hoch ist, wie er sein muss, während der Hauptabschnitt, der die Anwendung enthält, den Rest des Ansichtsfensters ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/position#sticky), um den Fußbereich am unteren Rand des Ansichtsfensters festzuhalten. Wir verwenden dann die {{cssxref("padding")}}-Kurzschrift, um dem Fußbereich Polsterung hinzuzufügen. Wir fügen den Wert der `safe-area-inset-bottom`-Umgebungsvariable zu einem anfänglichen `1em` der unteren Polsterung hinzu. Ein größerer schwarzer Bereich wird auf Geräten angezeigt, die einen positiven Wert für diese Variable haben, sodass die Schaltflächen im Fußbereich niemals verdeckt werden.

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

Dieses Beispiel nutzt den optionalen zweiten Parameter von `env()`, der einen Fallback-Wert bietet, falls die Umgebungsvariable nicht verfügbar ist.

#### HTML

Wir fügen ein Absatztext hinzu:

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

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Wir fügen dann {{cssxref("padding")}} hinzu, indem wir die `env()`-Funktion mit einem Fallback für die Größe der Polsterung an jeder Seite verwenden. Wir setzen absichtlich einen ungültigen Wert für die linke Polsterung, um die Verwendung des Fallback-Werts zu demonstrieren (denken Sie daran, Variablennamen sind case-sensitiv).

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

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fenstersteuerungstasten in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive Web App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungstasten des Betriebssystems verdeckt werden. Die `titlebar-area-*`-Werte definieren ein Rechteck, in dem die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die die Funktion Window Controls Overlay nicht unterstützen, wie Mobilgeräte, werden die Fallback-Werte verwendet.

So sieht eine auf einem Desktop-Gerät installierte PWA normalerweise aus:

![Illustration, wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungstasten, einer Titelleiste und Web-Inhalten darunter](desktop-pwa-window.png)

Mit der Funktion Window Controls Overlay überdecken die Web-Inhalte die gesamte Anwendungsfensterfläche, wobei die Fenstersteuerungen und PWA-Schaltflächen als Overlays angezeigt werden:

![Illustration, wie eine auf dem Desktop installierte PWA mit der Funktion Window Controls Overlay aussieht, mit Fenstersteuerungstasten, keiner Titelleiste, und Web-Inhalten, die das gesamte Fenster bedecken](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem restlichen Inhalt scrollt und stattdessen mit den Fenstersteuerungstasten ausgerichtet bleibt, sogar auf Geräten/Browsers, die elastischen Überscroll unterstützen (auch bekannt als rubber banding).

### Ansichtsfenster-Segmente

Das [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der [Leitfaden zur Verwendung der Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API/Using) bietet eine Demonstration und Erklärung zur Verwendung der `env()`-Funktion mit den `viewport-segments-*`-Umgebungsvariablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- {{CSSxRef("var")}}
- [CSS-Benutzerdefinitionen für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinitionen (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS-Benutzerdefinitionen (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API)
- [Anpassung des Fenstersteuerungsoverlays der Titelleiste Ihres PWA](https://web.dev/articles/window-controls-overlay)
- [Anzeigen von Inhalten in der Titelleiste](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Ausbrechen aus der Box](https://alistapart.com/article/breaking-out-of-the-box/)
