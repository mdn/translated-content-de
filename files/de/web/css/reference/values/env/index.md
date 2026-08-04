---
title: "`env()` CSS-Funktion"
short-title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Wert einer vom Benutzers-Agenten definierten [Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using) in Ihr CSS einzufügen. Alternativ kann `env()` verwendet werden, um dynamische Werte in externen SVG-Dateien zu erstellen, die über die CSS-Eigenschaft {{cssxref("link-parameters")}} aktualisiert werden.

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
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariable angibt. Wenn der angegebene Name eine array-ähnliche Umgebungsvariable darstellt, wird der Name von {{cssxref("&lt;integer>")}} Werten gefolgt, die die spezifische Instanz identifizieren, die der Name referenziert. Der Groß- und Kleinschreibung achtende Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Definiert den sicheren Abstand von den oberen, rechten, unteren oder linken Einfasskanten des Viewports, wo Inhalte platziert werden können, ohne dass sie möglicherweise durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport ein Rechteck ist und keine Funktionen — wie Toolbars oder dynamische Tastaturen — den Viewport-Raum einnehmen; andernfalls ist es ein `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen `safe-area-inset-*` Variablen-Pendants, wenn alle dynamischen Benutzeroberflächenelemente eingezogen sind. Während sich die `safe-area-inset-*` Werte ändern, wenn sich der derzeit sichtbare Inhaltsbereich ändert, sind die `safe-area-max-inset-*` Werte konstant.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Dimensionen eines sichtbaren `titlebar-area-*` Bereichs. Diese Variablen stehen zur Verfügung, wenn das `window-controls-overlay` [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Manifestfeld verwendet wird. Die Variablennamen können genutzt werden, um sicherzustellen, dass Inhalte nicht die Fenstersteuerungsknöpfe (d.h. Minimieren, Maximieren und Schließen) bei progressiven Webapplikationen (PWA), die auf Desktop-Geräten installiert sind, überlappen.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einfügungen vom Rand des Viewports und Dimensionen der virtuellen Bildschirmtastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `preferred-text-scale`
      - : Der bevorzugte Schriftmaßstab des Nutzers, eine Zahl, die in den Browser- oder Betriebssystemeinstellungen festgelegt wird. Dies kann verwendet werden, um Inhalte proportional zu den im Browser oder Betriebssystem festgelegten Schriftgrößen zu skalieren.
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Dimensionen und Offsetpositionen spezifischer Viewport-Segmente. Auf das Schlüsselwort `viewport-segment-*` folgen zwei durch Leerzeichen getrennte {{cssxref("&lt;integer>")}} Werte, die die horizontale und vertikale Position des Segments oder deren Indizes angeben. Die Schlüsselwörter der Viewport-Segmente sind nur definiert, wenn der Viewport aus zwei oder mehr Segmenten besteht, so wie bei klappbaren oder klappbaren Geräten.

- [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)
  - : Ein `<dashed-ident>` ist eine vom Nutzer definierte Variable, die als Identifier in der {{cssxref("param")}} CSS-Funktion verwendet werden kann, um den Wert zu aktualisieren.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt wird, falls die im ersten Argument referenzierte Umgebungsvariable nicht existiert. Alles nach dem ersten Komma wird als Fallback-Wert betrachtet. Dies kann ein einzelner Wert, eine andere `env()` Funktion oder eine kommagetrennte Liste von Werten sein.

- `<declaration_value>` {{optional_inline}}
  - : Ein `<declaration_value>` ist der Standardwert des SVG-Attributes, das dynamisch gesetzt wird. Wenn der `<declaration-value>` weggelassen wird, repräsentiert er einen leeren Wert.

## Beschreibung

Die Funktion `env()` wird verwendet, um den Wert einer global definierten, [vom Benutzer-Agenten definierten Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) in Ihr CSS einzufügen. Die `env()`-Funktion kann als Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswertes oder Deskriptor (zum Beispiel bei [Media-Query-Regeln](/de/docs/Web/CSS/Reference/At-rules/@media)) verwendet werden.

Die Funktion akzeptiert eine `<environment-variable>` als erstes Argument. Dies ist ein detailliertes {{cssxref("&lt;custom-ident>")}}, das dem [Namen der Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) entspricht, die ersetzt werden soll, kann aber auch zusätzliche durch Leerzeichen getrennte Werte enthalten, wenn erforderlich. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des obersten oder linken Segments im Fall eines Geräts mit mehreren Viewport-Segmenten zurückgeben.

Das zweite Argument, wenn angegeben, ist der Fallback-Wert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht unterstützt oder nicht existent ist. Das Fallback kann eine andere Umgebungsvariable sein, sogar mit ihrem eigenen Fallback.

Die Syntax des Fallbacks ist ähnlich der Fallback-Syntax der {{cssxref("var()")}} Funktion, die zum Einfügen von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verwendet wird, in dem sie mehrere Kommas zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn jedoch die `env()` Funktion innerhalb eines Eigenschaftswertes oder Deskriptors verwendet wird, das keine Kommas enthält, ist ein Fallback-Wert, der Kommas enthält, nicht gültig.

Eine Eigenschaft oder ein Deskriptor, der eine syntaktisch gültige `env()`-Funktion enthält, wird zum Zeitpunkt des Parsens als gültig angenommen, wenn der Browser den heruntergeladenen CSS-Text zum ersten Mal liest und interpretiert. Es wird erst zur Berechnungszeit syntaxgeprüft, nachdem jede `env()`-Funktion durch ihren vom Browser bereitgestellten Wert (oder den Fallback-Wert, wenn die als erster Parameter übergebene Umgebungsvariable kein erkannter Umgebungsvariablenname ist) ersetzt wurde. Wenn der Wert ungültig ist und kein Fallback angegeben wird, ist die Eigenschaft oder der Deskriptor, der die `env()`-Funktion enthält, [während der Berechnungswertzeit ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()`-Substitution ungültig ist und ein ungültiger Fallback enthalten ist oder der Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [vererbter](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, aber es kann sein, dass er nicht der erwartete ist.

### Anwendungsfälle

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihren Inhalt in einem sicheren Bereich des Viewports zu platzieren und nicht von Geräteknoten oder abgerundeten Ecken verdeckt zu werden, können die `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte für Betrachter sichtbar sind. Diese Funktion wurde später über ihren ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle wie das [Verhindern, dass Gerätemitteilungen Teile der Benutzeroberfläche der App verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui) zu ermöglichen.

Ein weiterer Anwendungsfall für die `env()`-Variablen ist für Desktop [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) Funktion nutzen, um die ganze Anwendungsfensteroberfläche auszunutzen. Die `titlebar-area-*` Werte können Entwickler verwenden, um Elemente dort zu positionieren, wo die Titelleiste gewesen wäre und [sicherzustellen, dass Inhalte nicht von Fenstersteuerungsknöpfen verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Die `viewport-segment-*` Variablennamen können verwendet werden, um Ihre Container passend in den verfügbaren Segmenten eines Multi-Viewport-Segment-Geräts wie eines klappbaren oder faltbaren Geräts zu positionieren. Die Zahlen, die dem `viewport-segment-*` Namen folgen, geben an, welches Segment der mehreren Segmente die Umgebungsvariable referenziert.

Die `preferred-text-scale` Variable kann verwendet werden, um den Text der Webseite oder andere UI-Features proportional zu den im Browser oder Betriebssystem festgelegten Schriftgrößen zu skalieren. Zum Beispiel könnten Sie die Schriftgröße des Korpus auf einen Prozentsatz basierend auf dem vom Benutzer definierten Textmaßstab setzen:

```css
body {
  font-size: calc(100% * env(preferred-text-scale));
}
```

Größen können auch so gesetzt werden, dass sie proportional zur Schriftgröße des Browsers oder Betriebssystems sind, indem [`<meta name="text-scale" content="scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale) im Dokument `<head>` eingefügt wird. Das `<meta>`-Tag sollte gegenüber dem `env(preferred-text-scale)` bevorzugt verwendet werden, da das `<meta>`-Tag über eine größere Plattformreichweite unterstützt wird und zudem einfacher zu verwenden ist.

> [!WARNING]
> Seien Sie vorsichtig bei der Verwendung von `env(preferred-text-scale)`, wenn `<meta name="text-scale" content="scale">` gesetzt ist, da dies zur doppelten Anwendung der Textskalierung führt, wenn es mit relativen Größen wie `em` und `rem` kombiniert wird. Zum Beispiel führt bei gesetztem `<meta>` eine Deklaration wie `font-size: calc(2rem * env(preferred-text-scale))` dazu, dass kleine Schriftgrößen noch kleiner und große Schriftgrößen größer werden.

### Namen gefolgt von ganzen Zahlen

Wenn die Umgebungsvariable array-ähnlich ist, was bedeutet, dass der Name mehr als einmal einen Wert referenzieren kann, wie es bei Geräten mit mehreren Viewport-Segmenten der Fall ist, beinhaltet der `<environment-variable>`-Parameter sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variable, die die Funktion referenziert. Zum Beispiel, im Fall der `viewport-segment-*` Variablen, werden die Variablennamen an die `env()`-Funktion zusammen mit zwei Ganzenzahlen übergeben, die die Indizes des Segments angeben, für das der Wert zurückgegeben werden soll. Diese Werte sind beide Ganzzahlen von `0` oder größer. Die erste Ganzzahl repräsentiert den horizontalen Index des Segments, wobei `0` das linksmöglichste Segment ist, und der zweite Wert repräsentiert den vertikalen Index des Segments, wobei `0` das unterste Segment repräsentiert:

![Zwei Gerätsegmentlayouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen Nebeneinander-Layout wird das linke Segment durch `0 0` repräsentiert, und das rechte Segment durch `1 0`.
- In einem vertikalen Oben-nach-Unten-Layout wird das obere Segment durch `0 0` repräsentiert, und das untere Segment durch `0 1`.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Zum Beispiel kann ein Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` und das rechte Segment durch `2 0` repräsentieren.

Zum Beispiel gibt das folgende Beispiel die Breite des rechten Segments auf einem faltbaren Gerät mit zwei Segmenten zurück, bei dem die Segmente horizontal orientiert sind:

```css
env(viewport-segment-width 1 0)
```

Sehen Sie sich die [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionierende Demo ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)) an. Schauen Sie sich auch [Verwendung der Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erläuterung der Demo an.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env() zur Sicherstellung, dass Schaltflächen nicht von Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass die fixen App-Toolbar-Schaltflächen nicht von Gerätemitteilungen, die am unteren Bildschirmrand erscheinen, verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. In Geräten, die Mitteilungen am unteren Bildschirmrand anzeigen, wie iOS, enthält er jedoch einen Wert, der Platz für die Anzeige der Mitteilung lässt. Dies kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

#### HTML

Wir haben einen {{htmlelement("main")}} Abschnitt, der eine fiktive Anwendung enthält, und einen {{htmlelement("footer")}}, der zwei {{htmlelement("button")}} Elemente enthält:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit [CSS flexibler Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) erstellen wir einen Footer, der nur so hoch ist, wie er sein muss, während der Hauptabschnitt mit der Anwendung den Rest des Viewports ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky), um den Footer am unteren Rand des Viewports zu fixieren. Wir verwenden das {{cssxref("padding")}} Shorthand, um dem Footer Padding hinzuzufügen. Wir fügen den Wert der `safe-area-inset-bottom` Umgebungsvariable zu einem anfänglichen `1em` unteren Padding hinzu. Ein größerer schwarzer Bereich wird auf Geräten angezeigt, die einen positiven Wert für diese Variable haben, was sicherstellt, dass die Schaltflächen im Footer niemals verdeckt werden.

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

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Dann fügen wir {{cssxref("padding")}} hinzu, wobei wir die `env()` Funktion mit einem Fallback für die Größe des Paddings auf jeder Seite verwenden. Absichtlich setzen wir einen ungültigen Wert für das linke Padding (denken Sie daran, dass Umgebungsvariablennamen groß- und kleinschreibungssensitiv sind), um die Verwendung des Fallback-Wertes zu demonstrieren.

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

### Verwendung von env() zur Sicherstellung, dass Inhalte nicht von Fenstersteuerungsknöpfen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop Progressive Web App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Steuerknöpfen des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, wo normalerweise die Titelleiste angezeigt worden wäre. Auf Geräten, die die Window Controls Overlay-Funktion nicht unterstützen, wie beispielsweise Mobilgeräte, werden die Fallback-Werte verwendet.

So sieht eine PWA, die auf einem Desktopgerät installiert ist, normalerweise aus:

![Illustration, wie eine auf einem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungsknöpfen, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit der Window Controls Overlay-Funktion decken die Webinhalte die gesamte Anwendungsfensteroberfläche ab, und die Fenstersteuerungsknöpfe und PWA-Schaltflächen werden als Overlays angezeigt:

![Illustration, wie eine auf einem Desktop installierte PWA aussieht, wenn die Window Controls Overlay-Funktion, mit Fenstersteuerungsknöpfen, keine Titelleiste und Webinhalte das gesamte Fenster abdecken](desktop-pwa-window-wco.png)

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
> Durch die Verwendung von `position:fixed` wird sichergestellt, dass die Kopfzeile nicht mit dem Rest des Inhalts scrollt, sondern stattdessen mit den Fenstersteuerungsknöpfen ausgerichtet bleibt, auch auf Geräten/Browsern, die elastisches Overscroll unterstützen (auch bekannt als Rubber Banding).

### Viewport-Segmente

Die [Viewport Segment API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) Leitfaden bietet eine Demonstration und Erklärung der Verwendung der Funktion `env()` mit den `viewport-segments-*` Umgebungsvariablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
- Modul [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables)
- {{CSSxRef("var")}}
- Modul [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables)
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/Reference/Properties/--*)
- [`<meta name="text-scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Anpassen des Fenstersteuerungs-Overlays Ihrer PWA-Titelleiste](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Ausbrechen aus dem Rahmen](https://alistapart.com/article/breaking-out-of-the-box/)
