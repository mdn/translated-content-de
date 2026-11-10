---
title: CSS-Funktion `env()`
short-title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit der **CSS-Funktion `env()`** kann der Wert einer vom User-Agent definierten [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using) in [CSS](/de/docs/Web/CSS) eingefügt werden. Alternativ können Sie mit `env()` dynamische Werte in externen SVG-Dateien verwenden, die über die CSS-Eigenschaft {{cssxref("link-parameters")}} aktualisiert werden.

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

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="env(--color, black)" d="..." />
</svg>
```

### Parameter

Die Funktion `env( <environment-variable> | <dashed-ident>, <fallback> | <declaration-value> )` akzeptiert die folgenden Parameter:

- [`<environment-variable>`](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariablen angibt. Wenn der angegebene Name eine arrayartige Umgebungsvariable bezeichnet, folgen darauf {{cssxref("&lt;integer>")}}-Werte, die die jeweilige Instanz kennzeichnen. Der Name der Umgebungsvariablen unterscheidet zwischen Groß- und Kleinschreibung und kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der Sicherheitsabstand vom oberen, rechten, unteren oder linken Rand des Viewports. Er legt fest, wo Inhalte platziert werden können, ohne dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport rechteckig ist und keine Elemente wie Symbolleisten oder dynamische Tastaturen Platz im Viewport belegen. Andernfalls handelt es sich um einen `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte der entsprechenden dynamischen `safe-area-inset-*`-Variablen, wenn alle dynamischen Elemente der Benutzeroberfläche ausgeblendet sind. Während sich die `safe-area-inset-*`-Werte mit dem aktuell sichtbaren Inhaltsbereich ändern, bleiben die `safe-area-max-inset-*`-Werte konstant.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*`-Bereichs. Diese Variablen sind verfügbar, wenn im Manifestfeld [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) der Wert `window-controls-overlay` verwendet wird. Mithilfe der Variablenwerte lässt sich verhindern, dass Inhalte installierter Progressive Web Apps (PWAs) auf Desktopgeräten die Schaltflächen zur Fenstersteuerung (Minimieren, Maximieren und Schließen) überdecken.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Abstände zu den Rändern des Viewports und die Abmessungen der virtuellen Bildschirmtastatur des Geräts. Sie sind in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) definiert.
    - `preferred-text-scale`
      - : Der vom Benutzer bevorzugte Skalierungsfaktor für Schrift, der in den Einstellungen des Browsers oder Betriebssystems festgelegt wird. Damit können Inhalte proportional zu den dort festgelegten Schriftgrößen skaliert werden.
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Versatzpositionen bestimmter Viewport-Segmente. Auf das Schlüsselwort `viewport-segment-*` folgen zwei durch Leerzeichen getrennte {{cssxref("&lt;integer>")}}-Werte, die die horizontale und vertikale Position beziehungsweise die Indizes des Segments angeben. Die `viewport-segment-*`-Schlüsselwörter sind nur definiert, wenn der Viewport aus mindestens zwei Segmenten besteht, etwa bei faltbaren Geräten oder Geräten mit Scharnier.

- [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)
  - : Ein `<dashed-ident>` ist eine benutzerdefinierte Variable, die in der CSS-Funktion {{cssxref("param")}} als Bezeichner verwendet werden kann, um den Wert zu aktualisieren.

- `<fallback>` {{optional_inline}}
  - : Ein Ersatzwert, der eingefügt wird, wenn die im ersten Argument angegebene Umgebungsvariable nicht existiert. Alles nach dem ersten Komma gilt als Ersatzwert. Dies kann ein einzelner Wert, eine weitere `env()`-Funktion oder eine durch Kommas getrennte Liste von Werten sein.

- `<declaration_value>` {{optional_inline}}
  - : Ein `<declaration_value>` ist der Standardwert des SVG-Attributs, das dynamisch gesetzt wird. Wird `<declaration-value>` weggelassen, steht es für einen leeren Wert.

## Beschreibung

Mit der Funktion `env()` wird der Wert einer global verfügbaren, [vom User-Agent definierten Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) in CSS eingefügt. `env()` kann als Eigenschaftswert oder anstelle eines beliebigen Teils eines Eigenschaftswerts oder Deskriptors verwendet werden, beispielsweise in [Medienabfrageregeln](/de/docs/Web/CSS/Reference/At-rules/@media).

Die Funktion akzeptiert als erstes Argument ein `<environment-variable>`. Dies ist ein {{cssxref("&lt;custom-ident>")}}, bei dem zwischen Groß- und Kleinschreibung unterschieden wird und das dem zu ersetzenden [Namen der Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) entspricht. Bei Bedarf können zusätzliche, durch Leerzeichen getrennte Werte folgen. Beispielsweise würde `env(viewport-segment-width 0 0)` auf einem Gerät mit mehreren Viewport-Segmenten die Breite des oberen beziehungsweise linken Segments zurückgeben.

Das zweite Argument ist, sofern angegeben, der Ersatzwert. Er wird verwendet, wenn die im ersten Argument angegebene Umgebungsvariable nicht unterstützt wird oder nicht existiert. Als Ersatzwert kann auch eine andere Umgebungsvariable dienen, die wiederum einen eigenen Ersatzwert haben kann.

Die Syntax des Ersatzwerts ähnelt der Ersatzwertsyntax der Funktion {{cssxref("var()")}} zum Einfügen [benutzerdefinierter CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*): Sie erlaubt mehrere Kommas. Alles zwischen dem ersten Komma und dem Ende der Funktion gilt als Ersatzwert. Wird `env()` jedoch innerhalb eines Eigenschaftswerts oder Deskriptors verwendet, der keine Kommas zulässt, ist ein Ersatzwert mit Kommas ungültig.

Eine Eigenschaft oder ein Deskriptor mit einer syntaktisch gültigen `env()`-Funktion gilt beim Parsen zunächst als gültig, wenn der Browser den heruntergeladenen CSS-Text erstmals liest und interpretiert. Die Syntax wird erst bei der Berechnung des Werts geprüft, nachdem jede `env()`-Funktion durch den vom Browser bereitgestellten Wert ersetzt wurde – oder durch den Ersatzwert, falls das erste Argument kein erkannter Name einer Umgebungsvariablen ist. Ist der resultierende Wert ungültig und wurde kein Ersatzwert angegeben, ist die Eigenschaft oder der Deskriptor mit `env()` [zum Zeitpunkt der Wertberechnung ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

Wenn die Ersetzung durch `env()` ungültig ist und der angegebene Ersatzwert ebenfalls ungültig ist oder fehlt, wird die Deklaration nicht ignoriert. Stattdessen wird der [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder der [geerbte Wert](/de/docs/Web/CSS/Guides/Cascade/Inheritance) der Eigenschaft verwendet. Die Eigenschaft erhält damit einen neuen Wert, der jedoch möglicherweise nicht dem erwarteten entspricht.

### Anwendungsfälle

Die `safe-area-inset-*`-Werte wurden ursprünglich vom iOS-Browser bereitgestellt, damit Entwickler Inhalte in einem sicheren Bereich des Viewports platzieren können, wo sie nicht durch Displayaussparungen oder abgerundete Ecken verdeckt werden. Sie helfen sicherzustellen, dass Inhalte sichtbar bleiben. Später wurde diese Funktion über ihren ursprünglichen Zweck hinaus erweitert, beispielsweise um zu [verhindern, dass Gerätebenachrichtigungen Teile der App-Benutzeroberfläche verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui).

Ein weiterer Anwendungsfall für `env()`-Variablen sind [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) auf Desktopgeräten, die mit der Funktion [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) die gesamte Fläche des Anwendungsfensters nutzen. Mithilfe der [`titlebar-area-*`-Werte](#titlebar-area-x) können Entwickler Elemente dort positionieren, wo sich sonst die Titelleiste befände, und [verhindern, dass Schaltflächen zur Fenstersteuerung Inhalte verdecken](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Mit den `viewport-segment-*`-Variablennamen können Sie Container so dimensionieren, dass sie in die verfügbaren Segmente eines Geräts mit mehreren Viewport-Segmenten passen, beispielsweise eines faltbaren Geräts oder eines Geräts mit Scharnier. Die Ganzzahlen nach dem `viewport-segment-*`-Namen geben an, auf welches Segment sich die Umgebungsvariable bezieht.

Mit der Variable `preferred-text-scale` können Sie Website-Text oder andere Elemente der Benutzeroberfläche proportional zu den im Browser oder Betriebssystem festgelegten Schriftgrößen skalieren. Beispielsweise können Sie die Schriftgröße von `body` als Prozentsatz festlegen, der auf dem vom Benutzer definierten Textskalierungsfaktor basiert:

```css
body {
  font-size: calc(100% * env(preferred-text-scale));
}
```

Größen können auch proportional zur Schriftgröße auf Browser- oder Betriebssystemebene festgelegt werden, indem Sie [`<meta name="text-scale" content="scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale) in das `<head>` des Dokuments aufnehmen. Verwenden Sie nach Möglichkeit das `<meta>`-Tag statt `env(preferred-text-scale)`, da das `<meta>`-Tag auf mehr Plattformen unterstützt wird und einfacher zu verwenden ist.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie `env(preferred-text-scale)` verwenden und zugleich `<meta name="text-scale" content="scale">` gesetzt ist: In Kombination mit relativen Größen wie `em` und `rem` wird die Textskalierung dadurch zweimal angewendet. Ist das `<meta>`-Tag gesetzt, führt beispielsweise eine Deklaration wie `font-size: calc(2rem * env(preferred-text-scale))` dazu, dass kleine Schriftgrößen noch kleiner und große Schriftgrößen noch größer werden.

### Namen mit nachfolgenden Ganzzahlen

Wenn eine Umgebungsvariable arrayartig ist und ihr Name somit auf mehrere Werte verweisen kann – etwa bei Geräten mit mehreren Viewport-Segmenten –, enthält der Parameter `<environment-variable>` sowohl den Variablennamen als auch die Indizes der jeweiligen Instanz. Bei den `viewport-segment-*`-Variablen werden der Name und zwei Ganzzahlen an `env()` übergeben. Diese geben die Indizes des Segments an, dessen Wert zurückgegeben werden soll. Beide Ganzzahlen sind `0` oder größer. Die erste bezeichnet den horizontalen Index des Segments, wobei `0` für das Segment ganz links steht. Die zweite bezeichnet den vertikalen Index, wobei `0` für das unterste Segment steht:

![Zwei Anordnungen von Gerätesegmenten: Bei einer horizontalen Anordnung ist 0 0 das erste und 1 0 das zweite Segment. Bei einer vertikalen Anordnung lauten die Indizes 0 0 und 0 1.](env-var-indices.png)

- Bei einer horizontalen Anordnung nebeneinander wird das linke Segment durch `0 0` und das rechte durch `1 0` bezeichnet.
- Bei einer vertikalen Anordnung von oben nach unten wird das obere Segment durch `0 0` und das untere durch `0 1` bezeichnet.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Beispielsweise kann bei einem Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` und das rechte durch `2 0` bezeichnet werden.

Das folgende Beispiel gibt die Breite des rechten Segments eines faltbaren Geräts mit zwei horizontal angeordneten Segmenten zurück:

```css
env(viewport-segment-width 1 0)
```

Eine vollständige, lauffähige Demonstration finden Sie in der [Demo zur Viewport Segments API](https://mdn.github.io/dom-examples/viewport-segments-api/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Eine ausführliche Erläuterung der Demo bietet außerdem [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using).

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mit env() verhindern, dass Geräteelemente Schaltflächen verdecken

Im folgenden Beispiel sorgt `env()` dafür, dass fest positionierte Schaltflächen einer App-Symbolleiste nicht durch Gerätebenachrichtigungen am unteren Bildschirmrand verdeckt werden. Auf Desktopgeräten ist `safe-area-inset-bottom` gleich `0`. Auf Geräten wie iOS-Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, enthält die Variable dagegen einen Wert, der Platz für die Benachrichtigung lässt. Dieser Wert kann für {{cssxref("padding-bottom")}} verwendet werden, um einen zum jeweiligen Gerät passenden Abstand zu schaffen.

#### HTML

Wir verwenden einen {{htmlelement("main")}}-Abschnitt mit einer Beispielanwendung und ein {{htmlelement("footer")}}-Element mit zwei {{htmlelement("button")}}-Elementen:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) erstellen wir einen Footer, der nur so hoch wie nötig ist. Der Hauptabschnitt mit der Anwendung füllt den übrigen Viewport aus:

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

Mit [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky) halten wir den Footer am unteren Rand des Viewports. Anschließend fügen wir ihm mit der Kurzschreibweise {{cssxref("padding")}} einen Innenabstand hinzu. Zum anfänglichen unteren Innenabstand von `1em` addieren wir den Wert der Umgebungsvariablen `safe-area-inset-bottom`. Auf Geräten, für die diese Variable einen positiven Wert hat, erscheint dadurch ein größerer schwarzer Bereich, sodass die Schaltflächen im Footer nicht verdeckt werden.

```css
footer {
  position: sticky;
  bottom: 0;

  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

#### Ergebnis

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### Einen Ersatzwert verwenden

Dieses Beispiel verwendet den optionalen zweiten Parameter von `env()`. Er stellt einen Ersatzwert bereit, falls die Umgebungsvariable nicht verfügbar ist.

#### HTML

Wir fügen einen Textabsatz ein:

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

Wir legen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}} fest. Anschließend fügen wir {{cssxref("padding")}} hinzu und verwenden `env()` mit einem Ersatzwert für den Innenabstand auf jeder Seite. Für den linken Innenabstand geben wir absichtlich einen ungültigen Wert an – beachten Sie, dass bei Namen von Umgebungsvariablen zwischen Groß- und Kleinschreibung unterschieden wird –, um die Verwendung des Ersatzwerts zu demonstrieren.

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

#### Ergebnis

{{EmbedLiveSample("using_a_fallback_value", "350px", "250px")}}

### Mit env() verhindern, dass Fenstersteuerungsschaltflächen Inhalte in Desktop-PWAs verdecken

Im folgenden Beispiel sorgt `env()` dafür, dass Inhalte einer Progressive Web App auf Desktopgeräten, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Schaltflächen zur Fenstersteuerung des Betriebssystems verdeckt werden. Die `titlebar-area-*`-Werte definieren ein Rechteck an der Stelle, an der normalerweise die Titelleiste angezeigt würde. Auf Geräten, die Window Controls Overlay nicht unterstützen, etwa Mobilgeräten, werden die Ersatzwerte verwendet.

So sieht eine auf einem Desktopgerät installierte PWA normalerweise aus:

![Darstellung einer auf einem Desktopgerät installierten PWA mit Schaltflächen zur Fenstersteuerung, einer Titelleiste und darunterliegendem Webinhalt](desktop-pwa-window.png)

Mit Window Controls Overlay erstreckt sich der Webinhalt über die gesamte Fläche des App-Fensters. Die Fenstersteuerung und die PWA-Schaltflächen werden als Overlays angezeigt:

![Darstellung einer auf einem Desktopgerät installierten PWA mit Window Controls Overlay: Schaltflächen zur Fenstersteuerung, keine Titelleiste und Webinhalt über die gesamte Fensterfläche](desktop-pwa-window-wco.png)

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
> `position:fixed` stellt sicher, dass der Header nicht mit dem übrigen Inhalt scrollt, sondern an den Schaltflächen zur Fenstersteuerung ausgerichtet bleibt. Das gilt auch auf Geräten und in Browsern, die elastisches Überscrollen unterstützen (auch „Rubber Banding“ genannt).

### Viewport-Segmente

Die [Demo zur Viewport Segments API](https://mdn.github.io/dom-examples/viewport-segments-api/) und der Leitfaden [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) demonstrieren und erläutern die Verwendung von `env()` mit den `viewport-segments-*`-Umgebungsvariablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Umgebungsvariablen verwenden](/de/docs/Web/CSS/Guides/Environment_variables/Using)
- Modul [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables)
- {{CSSxRef("var")}}
- Modul [Benutzerdefinierte CSS-Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables)
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/Reference/Properties/--*)
- [`<meta name="text-scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale)
- [Benutzerdefinierte CSS-Eigenschaften (Variablen) verwenden](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Überlagerung der Fenstersteuerung in der Titelleiste Ihrer PWA anpassen](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
