---
title: "`env()`-CSS-Funktion"
short-title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: 977386fc14a76dec21374aef1e0571900b28dab4
---

Die **`env()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using) in Ihr CSS einzufügen. Alternativ können Sie mit `env()` dynamische Werte in externen SVG-Dateien bereitstellen, die über die CSS-Eigenschaft {{cssxref("link-parameters")}} aktualisiert werden.

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
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariablen angibt. Wenn der angegebene Name eine arrayartige Umgebungsvariable bezeichnet, folgen auf den Namen {{cssxref("&lt;integer>")}}-Werte, die die betreffende Instanz identifizieren. Der Name der Umgebungsvariablen unterscheidet zwischen Groß- und Kleinschreibung und kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand vom oberen, rechten, unteren oder linken Rand des Viewports. Er legt fest, wo Inhalte platziert werden können, ohne dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport rechteckig ist und keine Elemente – etwa Symbolleisten oder dynamische Tastaturen – Platz im Viewport belegen. Andernfalls handelt es sich um einen `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte der entsprechenden dynamischen `safe-area-inset-*`-Variablen, wenn alle dynamischen Elemente der Benutzeroberfläche ausgeblendet sind. Während sich die `safe-area-inset-*`-Werte mit dem aktuell sichtbaren Inhaltsbereich ändern, bleiben die `safe-area-max-inset-*`-Werte konstant.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*`-Bereichs. Diese Variablen sind verfügbar, wenn im Manifestfeld [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) `window-controls-overlay` verwendet wird. Mit ihren Werten lässt sich verhindern, dass Inhalte in auf Desktopgeräten installierten Progressive Web Apps (PWAs) die Schaltflächen zur Fenstersteuerung – zum Minimieren, Maximieren und Schließen – überlappen.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Abstände zu den Rändern des Viewports und die Abmessungen der virtuellen Bildschirmtastatur des Geräts. Sie sind in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) definiert.
    - `preferred-text-scale`
      - : Der vom Benutzer bevorzugte Skalierungsfaktor für Schrift, eine Zahl, die in den Einstellungen des Browsers oder Betriebssystems festgelegt wird. Damit können Inhalte proportional zu den dort festgelegten Schriftgrößen skaliert werden.
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Versatzpositionen bestimmter Viewport-Segmente. Auf das Schlüsselwort `viewport-segment-*` folgen zwei durch Leerzeichen getrennte {{cssxref("&lt;integer>")}}-Werte, die die horizontale und vertikale Position beziehungsweise die Indizes des Segments angeben. Die `viewport-segment-*`-Schlüsselwörter sind nur definiert, wenn der Viewport aus mindestens zwei Segmenten besteht, etwa bei faltbaren Geräten oder Geräten mit Scharnier.

- [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)
  - : Ein `<dashed-ident>` ist eine benutzerdefinierte Variable, die in der CSS-Funktion {{cssxref("param")}} als Bezeichner verwendet werden kann, um den Wert zu aktualisieren.

- `<fallback>` {{optional_inline}}
  - : Ein Ersatzwert, der eingefügt wird, wenn die im ersten Argument angegebene Umgebungsvariable nicht existiert. Alles nach dem ersten Komma gilt als Ersatzwert. Dies kann ein einzelner Wert, eine weitere `env()`-Funktion oder eine durch Kommas getrennte Liste von Werten sein.

- `<declaration_value>` {{optional_inline}}
  - : Ein `<declaration_value>` ist der Standardwert des SVG-Attributs, das dynamisch gesetzt wird. Wird `<declaration-value>` weggelassen, steht es für einen leeren Wert.

## Beschreibung

Die Funktion `env()` fügt den Wert einer global verfügbaren, [vom User-Agent definierten Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) in Ihr CSS ein. `env()` kann als Eigenschaftswert oder anstelle eines beliebigen Teils eines Eigenschaftswerts oder Deskriptors verwendet werden, beispielsweise in [Media-Query-Regeln](/de/docs/Web/CSS/Reference/At-rules/@media).

Die Funktion erwartet als erstes Argument eine `<environment-variable>`. Dabei handelt es sich um ein {{cssxref("&lt;custom-ident>")}}, das zwischen Groß- und Kleinschreibung unterscheidet und dem [Namen der zu ersetzenden Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) entspricht. Falls erforderlich, kann das Argument zusätzlich durch Leerzeichen getrennte Werte enthalten. Beispielsweise würde `env(viewport-segment-width 0 0)` auf einem Gerät mit mehreren Viewport-Segmenten die Breite des oberen oder linken Segments zurückgeben.

Das zweite Argument ist optional und gibt den Ersatzwert an, der verwendet wird, wenn die im ersten Argument angegebene Umgebungsvariable nicht unterstützt wird oder nicht existiert. Der Ersatzwert kann selbst eine andere Umgebungsvariable sein, auch mit eigenem Ersatzwert.

Die Syntax des Ersatzwerts ähnelt derjenigen der Funktion {{cssxref("var()")}} zum Einfügen [benutzerdefinierter CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*): Sie erlaubt mehrere Kommas. Alles zwischen dem ersten Komma und dem Ende der Funktion gilt als Ersatzwert. Wenn `env()` jedoch innerhalb eines Eigenschaftswerts oder Deskriptors verwendet wird, der keine Kommas zulässt, ist ein Ersatzwert mit Kommas ungültig.

Eine Eigenschaft oder ein Deskriptor mit einer syntaktisch gültigen `env()`-Funktion gilt beim Parsen zunächst als gültig, wenn der Browser den heruntergeladenen CSS-Text erstmals liest und interpretiert. Die Syntax wird erst bei der Berechnung geprüft, nachdem jede `env()`-Funktion durch den vom Browser bereitgestellten Wert ersetzt wurde – oder durch den Ersatzwert, falls das erste Argument kein erkannter Name einer Umgebungsvariablen ist. Ist der Wert ungültig und wurde kein Ersatzwert angegeben, ist die Eigenschaft oder der Deskriptor mit der `env()`-Funktion [zum Zeitpunkt der Berechnung des Werts ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

Ist eine `env()`-Ersetzung ungültig und ein angegebener Ersatzwert ebenfalls ungültig oder fehlt er, wird die Deklaration nicht ignoriert. Stattdessen wird der [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder der [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft erhält also einen neuen Wert, der jedoch möglicherweise nicht dem erwarteten entspricht.

### Anwendungsfälle

Die `safe-area-inset-*`-Werte wurden ursprünglich vom iOS-Browser bereitgestellt, damit Entwickler Inhalte in einem sicheren Bereich des Viewports platzieren können, ohne dass sie durch Display-Aussparungen oder abgerundete Ecken verdeckt werden. Mit diesen Werten lässt sich sicherstellen, dass Inhalte sichtbar bleiben. Später wurde die Funktion über ihren ursprünglichen Zweck hinaus erweitert, beispielsweise um zu [verhindern, dass Gerätebenachrichtigungen Teile der App-Benutzeroberfläche verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui).

Ein weiterer Anwendungsfall für `env()`-Variablen sind [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) auf Desktopgeräten, die mit der Funktion [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) die gesamte Fläche des Anwendungsfensters nutzen. Mithilfe der [`titlebar-area-*`-Werte](#titlebar-area-x) können Entwickler Elemente dort platzieren, wo sich sonst die Titelleiste befände, und [verhindern, dass die Schaltflächen zur Fenstersteuerung Inhalte verdecken](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Mit den `viewport-segment-*`-Variablennamen können Sie Container so dimensionieren, dass sie in die verfügbaren Segmente eines Geräts mit mehreren Viewport-Segmenten passen, etwa eines faltbaren Geräts oder eines Geräts mit Scharnier. Die Ganzzahlen nach dem `viewport-segment-*`-Namen geben an, auf welches Segment sich die Umgebungsvariable bezieht.

Mit der Variable `preferred-text-scale` lassen sich Website-Text und andere UI-Elemente proportional zu den im Browser oder Betriebssystem festgelegten Schriftgrößen skalieren. Beispielsweise können Sie die Schriftgröße des Dokumenttexts als Prozentsatz festlegen, der auf der benutzerdefinierten Textskalierung basiert:

```css
body {
  font-size: calc(100% * env(preferred-text-scale));
}
```

Größen lassen sich auch proportional zur Schriftgröße auf Browser- oder Betriebssystemebene festlegen, indem Sie [`<meta name="text-scale" content="scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale) in den `<head>` des Dokuments aufnehmen. Verwenden Sie nach Möglichkeit das `<meta>`-Tag statt `env(preferred-text-scale)`, da es auf mehr Plattformen unterstützt wird und einfacher zu verwenden ist.

> [!WARNING]
> Seien Sie vorsichtig, wenn Sie `env(preferred-text-scale)` verwenden und zugleich `<meta name="text-scale" content="scale">` gesetzt ist: In Kombination mit relativen Größen wie `em` und `rem` wird die Textskalierung dadurch zweimal angewendet. Ist das `<meta>`-Tag beispielsweise gesetzt, führt eine Deklaration wie `font-size: calc(2rem * env(preferred-text-scale))` dazu, dass kleine Schriftgrößen noch kleiner und große Schriftgrößen noch größer werden.

### Namen mit nachfolgenden Ganzzahlen

Wenn eine Umgebungsvariable arrayartig ist, ihr Name sich also auf mehr als einen Wert beziehen kann – wie bei Geräten mit mehreren Viewport-Segmenten –, enthält der Parameter `<environment-variable>` sowohl den Variablennamen als auch die Indizes der Instanz, auf die sich die Funktion bezieht. Bei den `viewport-segment-*`-Variablen werden der Funktion `env()` beispielsweise zusammen mit dem Variablennamen zwei Ganzzahlen übergeben. Sie geben die Indizes des Segments an, dessen Wert zurückgegeben werden soll. Beide Ganzzahlen sind `0` oder größer. Die erste gibt den horizontalen Index des Segments an, wobei `0` für das Segment ganz links steht. Die zweite gibt den vertikalen Index an, wobei `0` für das unterste Segment steht:

![Zwei Anordnungen von Gerätesegmenten: Bei einer horizontalen Anordnung ist 0 0 das erste und 1 0 das zweite Segment. Bei einer vertikalen Anordnung lauten die Indizes 0 0 und 0 1](env-var-indices.png)

- Bei einer horizontalen Anordnung nebeneinander wird das linke Segment durch `0 0` und das rechte durch `1 0` bezeichnet.
- Bei einer vertikalen Anordnung von oben nach unten wird das obere Segment durch `0 0` und das untere durch `0 1` bezeichnet.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Bei einem Gerät mit drei horizontalen Segmenten kann beispielsweise das mittlere Segment durch `1 0` und das rechte durch `2 0` bezeichnet werden.

Das folgende Beispiel gibt die Breite des rechten Segments auf einem faltbaren Gerät mit zwei horizontal angeordneten Segmenten zurück:

```css
env(viewport-segment-width 1 0)
```

Ein vollständiges, funktionsfähiges Beispiel finden Sie in der [Demo zur Viewport Segments API](https://mdn.github.io/dom-examples/viewport-segments-api/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Eine ausführliche Erklärung der Demo bietet außerdem [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using).

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Mit env() verhindern, dass Schaltflächen durch die Geräteoberfläche verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um zu verhindern, dass fest positionierte Schaltflächen der App-Symbolleiste durch Gerätebenachrichtigungen am unteren Bildschirmrand verdeckt werden. Auf Desktopgeräten ist `safe-area-inset-bottom` gleich `0`. Auf Geräten wie iOS-Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, enthält die Variable dagegen einen Wert, der Platz für die Benachrichtigung lässt. Dieser Wert kann für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu schaffen, der auf dem jeweiligen Gerät natürlich wirkt.

#### HTML

Wir verwenden einen {{htmlelement("main")}}-Bereich mit einer beispielhaften Anwendung und einen {{htmlelement("footer")}} mit zwei {{htmlelement("button")}}-Elementen:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) erstellen wir einen Footer, der nur so hoch wie nötig ist. Der Hauptbereich mit der Anwendung füllt den übrigen Viewport aus:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky), damit der Footer am unteren Rand des Viewports haften bleibt. Anschließend fügen wir dem Footer mit der Kurzschreibweise {{cssxref("padding")}} Innenabstände hinzu. Zum anfänglichen unteren Innenabstand von `1em` addieren wir den Wert der Umgebungsvariablen `safe-area-inset-bottom`. Auf Geräten, auf denen diese Variable einen positiven Wert hat, wird ein größerer schwarzer Bereich angezeigt. So bleiben die Schaltflächen im Footer stets sichtbar.

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

Dieses Beispiel verwendet den optionalen zweiten Parameter von `env()`, der einen Ersatzwert bereitstellt, falls die Umgebungsvariable nicht verfügbar ist.

#### HTML

Wir fügen einen Textabsatz hinzu:

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

Wir legen eine {{cssxref("width")}} von `300px` und einen {{cssxref("border")}} fest. Anschließend fügen wir mit {{cssxref("padding")}} Innenabstände hinzu und verwenden dabei die Funktion `env()` mit einem Ersatzwert für die Abstände auf jeder Seite. Für den linken Innenabstand geben wir absichtlich einen ungültigen Wert an – beachten Sie, dass Namen von Umgebungsvariablen zwischen Groß- und Kleinschreibung unterscheiden –, um die Verwendung des Ersatzwerts zu demonstrieren.

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

#### Ergebnis

{{EmbedLiveSample("Using_the_fallback_value", "350px", "250px")}}

### Mit env() verhindern, dass Fenstersteuerungsschaltflächen Inhalte in Desktop-PWAs verdecken

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte einer Progressive Web App auf einem Desktopgerät, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Fenstersteuerungsschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*`-Werte definieren ein Rechteck an der Stelle, an der normalerweise die Titelleiste angezeigt würde. Auf Geräten, die Window Controls Overlay nicht unterstützen, etwa Mobilgeräten, werden die Ersatzwerte verwendet.

So sieht eine auf einem Desktopgerät installierte PWA normalerweise aus:

![Illustration einer auf einem Desktopgerät installierten PWA mit Fenstersteuerungsschaltflächen, einer Titelleiste und darunter angezeigtem Webinhalt](desktop-pwa-window.png)

Mit Window Controls Overlay erstreckt sich der Webinhalt über die gesamte Fläche des Anwendungsfensters. Die Fenstersteuerung und die PWA-Schaltflächen werden darüber eingeblendet:

![Illustration einer auf einem Desktopgerät installierten PWA mit Window Controls Overlay: Fenstersteuerungsschaltflächen, keine Titelleiste und Webinhalt über die gesamte Fensterfläche](desktop-pwa-window-wco.png)

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
> `position:fixed` stellt sicher, dass der Header nicht mit dem übrigen Inhalt scrollt, sondern an den Fenstersteuerungsschaltflächen ausgerichtet bleibt – auch auf Geräten und in Browsern mit elastischem Overscrolling (auch „Rubber Banding“ genannt).

### Viewport-Segmente

Die [Demo zur Viewport Segments API](https://mdn.github.io/dom-examples/viewport-segments-api/) und der Leitfaden [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) demonstrieren und erläutern die Verwendung der Funktion `env()` mit den `viewport-segments-*`-Umgebungsvariablen.

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
- [Das Window Controls Overlay der Titelleiste Ihrer PWA anpassen](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Aus dem Rahmen ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
