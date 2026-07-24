---
title: "`env()` CSS-Funktion"
short-title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: 35cd8b781219157e42b289364754cff862c2dd1a
---

Die **`env()`**-Funktion von [CSS](/de/docs/Web/CSS) kann verwendet werden, um den Wert einer von der Benutzeroberfläche definierten [Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using) in Ihr CSS einzufügen. Alternativ kann `env()` verwendet werden, um dynamische Werte in externen SVG-Dateien zu erstellen, die mithilfe der {{cssxref("link-parameters")}} CSS-Eigenschaft aktualisiert werden.

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

Die `env( <environment-variable> | <dashed-ident>, <fallback> | <declaration-value> )`-Funktion akzeptiert die folgenden Parameter:

- [`<environment-variable>`](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables)
  - : Ein {{cssxref("&lt;custom-ident>")}}, der den Namen der einzufügenden Umgebungsvariablen angibt. Wenn der bereitgestellte Name eine array-ähnliche Umgebungsvariable darstellt, folgt dem Namen ein {{cssxref("&lt;integer>")}}-Wert, der die spezifische Instanz identifiziert, auf die sich der Name bezieht. Der casesensitive Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand vom oberen, rechten, unteren oder linken Einfügungsrand des Viewports, der definiert, wo es sicher ist, Inhalte zu platzieren, ohne das Risiko, dass sie durch die Form eines nicht-rechteckigen Displays geschnitten werden. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport ein Rechteck ist und keine Features — wie Werkzeugleisten oder dynamische Tastaturen — Platz im Viewport beanspruchen; andernfalls ist es ein `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen `safe-area-inset-*` Variablen-Pendants, wenn alle dynamischen Benutzeroberflächen-Features eingezogen sind. Während sich die Werte von `safe-area-inset-*` ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, sind die Werte von `safe-area-max-inset-*` konstant.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*` Bereichs. Diese Variablen sind verfügbar, wenn das `window-controls-overlay` [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfeld verwendet wird. Die Werte der Variablen können verwendet werden, um sicherzustellen, dass Inhalte nicht mit Fensterschaltflächen überlappen (d.h. Minimieren, Maximieren und Schließen), wenn progressive Web-Apps (PWA) auf Desktop-Geräten installiert sind.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einfügungen vom Rand des Viewports und Abmessungen der virtuellen Bildschirmtastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `preferred-text-scale`
      - : Der bevorzugte Schriftmaßstab des Nutzers, eine Zahl, die in den Browser- oder Betriebssystem-Einstellungen festgelegt ist. Dies kann verwendet werden, um Inhalte proportional zu den vom Browser oder Betriebssystem festgelegten Schriftgrößen anzupassen.
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Versatzpositionen spezifischer Viewport-Segmente. Das `viewport-segment-*`-Schlüsselwort wird von zwei durch Leerzeichen getrennten {{cssxref("&lt;integer>")}}-Werten gefolgt, die die horizontale und vertikale Position oder Indices des Segments angeben. Die Viewport-Segment-Schlüsselwörter sind nur definiert, wenn der Viewport aus zwei oder mehr Segmenten besteht, wie bei klappbaren oder klappbaren Geräten.

- [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)
  - Ein `<dashed-ident>` ist eine benutzerdefinierte Variable, die als Bezeichner in der {{cssxref("param")}} CSS-Funktion verwendet werden kann, um den Wert zu aktualisieren.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt wird, wenn die in das erste Argument gesetzte Umgebungsvariable nicht existiert. Alles nach dem ersten Komma gilt als Fallback-Wert. Dies kann ein einzelner Wert, eine andere `env()`-Funktion oder eine durch Kommas getrennte Liste von Werten sein.

- `<declaration_value>` {{optional_inline}}
  - : Ein `<declaration_value>` ist der Standardwert des SVG-Attributs, der dynamisch festgelegt wird. Wenn der `<declaration-value>` weggelassen wird, stellt er einen leeren Wert dar.

## Beschreibung

Die `env()`-Funktion wird verwendet, um den Wert einer global sichtbaren, [benutzeragent-definierten Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) in Ihr CSS einzufügen. Die `env()`-Funktion kann als Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswerts oder -deskriptors verwendet werden (zum Beispiel in [Media Query Regeln](/de/docs/Web/CSS/Reference/At-rules/@media)).

Die Funktion akzeptiert ein `<environment-variable>` als erstes Argument. Dies ist ein casesensitives {{cssxref("&lt;custom-ident>")}}, das dem [Namen der zu ersetzenden Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) entspricht, es kann jedoch auch zusätzliche leerzeichengetrennte Werte enthalten, falls erforderlich. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Fall eines Geräts mit mehreren Viewport-Segmenten zurückgeben.

Das zweite Argument, falls angegeben, ist der Fallback-Wert, der verwendet wird, wenn die in das erste Argument verwiesene Umgebungsvariable nicht unterstützt wird oder nicht existiert. Der Fallback kann eine andere Umgebungsvariable sein, selbst mit ihrem eigenen Fallback.

Die Syntax des Fallbacks ähnelt der Fallback-Syntax der {{cssxref("var()")}}-Funktion, die zum Einfügen von [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verwendet wird, in dem sie mehrere Kommas zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion gilt als Fallback-Wert. Wird die `env()`-Funktion jedoch innerhalb eines Eigenschaftswerts oder -deskriptors verwendet, der keine Kommas enthält, wird ein Fallback-Wert, der Kommas enthält, nicht gültig sein.

Eine Eigenschaft oder ein Deskriptor mit einer syntaktisch gültigen `env()`-Funktion gilt zur Parse-Zeit als gültig, wenn der Browser den heruntergeladenen CSS-Text zuerst liest und interpretiert. Sie wird jedoch erst zur Berechnungszeit auf Syntax geprüft, nachdem jede `env()`-Funktion durch ihren vom Browser bereitgestellten Wert (oder den Fallback-Wert, wenn die Umgebungsvariable, die als erster Parameter übergeben wird, kein anerkannter Umgebungsvariablenname ist) ersetzt wurde. Wenn der Wert ungültig ist und kein Fallback bereitgestellt wird, ist die Eigenschaft oder der Deskriptor mit der `env()`-Funktion [ungültig zur Berechnungswert-Zeit](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()`-Substitution ungültig ist und ein ungültiges Fallback enthalten ist oder das Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [Anfangs-](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, dieser kann jedoch nicht der erwartete sein.

### Anwendungsfälle

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihren Inhalt in einem sicheren Bereich des Viewports zu platzieren und nicht von Geräteaussparungen oder abgerundeten Ecken verdeckt zu werden, können die `safe-area-inset-*`-Werte verwendet werden, um sicherzustellen, dass Inhalte für Betrachter sichtbar sind. Diese Funktion wurde später über ihren ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle wie [das Verhindern, dass Gerätebenachrichtigungen Teile der App-Benutzeroberfläche überdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui) zu ermöglichen.

Ein weiterer Anwendungsfall für `env()`-Variablen ist für Desktop-[Progressive-Web-Apps](/de/docs/Web/Progressive_web_apps) (PWA), die die [Window Controls Overlay]-Funktion (/de/docs/Web/API/Window_Controls_Overlay_API) nutzen, um den vollen Anwendungsfensterbereich auszunutzen. Unter Verwendung der `titlebar-area-*` Werte können Entwickler Elemente dort positionieren, wo die Titelleiste gewesen wäre, und [sicherstellen, dass Inhalte nicht von Fensterschaltflächen verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas) auf Desktop-PWAs.

Die `viewport-segment-*`-Variablennamen können verwendet werden, um Ihre Container so anzupassen, dass sie passgenau in die verfügbaren Segmente eines Mehrfach-Viewport-Segment-Geräts wie eines klappbaren oder faltbaren Geräts passen. Die darauf folgenden ganzen Zahlen des `viewport-segment-*` Namens geben an, welches Segment der mehreren Segmente die Umgebungsvariable referenziert.

Die Variable `preferred-text-scale` kann verwendet werden, um den Website-Text oder andere UI-Features proportional zu den vom Browser oder Betriebssystem festgelegten Schriftgrößen anzupassen. Beispielsweise können Sie die Schriftgröße des Textkörpers in einem Prozentsatz festlegen, der auf dem benutzerdefinierten Text Maßstab basiert:

```css
body {
  font-size: calc(100% * env(preferred-text-scale));
}
```

Größen können ebenfalls proportional zur Schriftgröße von Browser oder Betriebssystem festgelegt werden, indem Sie [`<meta name="text-scale" content="scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale) im Dokumentenkopf `<head>` einfügen. Der `<meta>`-Tag sollte wenn möglich dem `env(preferred-text-scale)` vorgezogen werden, da der `<meta>`-Tag auf einer breiteren Palette von Plattformen unterstützt wird und zudem einfacher zu verwenden ist.

> [!WARNING]
> Seien Sie vorsichtig bei der Verwendung von `env(preferred-text-scale)`, wenn `<meta name="text-scale" content="scale">` gesetzt ist, da dies bei relativen Größen, wie `em` und `rem`, zu einem doppelten Anwenden der Textskalierung führt. Zum Beispiel, wenn das `<meta>`-Element gesetzt ist, wird eine Deklaration wie `font-size: calc(2rem * env(preferred-text-scale))` dafür sorgen, dass kleine Schriftgrößen noch kleiner und große Schriftgrößen noch größer werden.

### Namen gefolgt von ganzen Zahlen

Wenn die Umgebungsvariable array-ähnlich ist, bedeutet das, dass der Name möglicherweise mehr als nur einen Wert referenzieren kann, wie es bei Geräten mit mehreren Viewport-Segmenten der Fall ist, beinhaltet der `<environment-variable>`-Parameter sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variablen, auf die die Funktion verweist. Zum Beispiel, im Fall der `viewport-segment-*`-Variablen, werden die Variablennamen an die `env()`-Funktion zusammen mit zwei ganzen Zahlen übergeben, welche die Indizes des Segments angeben, für das der Wert zurückgegeben wird. Diese Werte sind beide ganzzahlenmäßige `0` oder größer. Die erste ganze Zahl repräsentiert den horizontalen Index des Segments, wobei `0` das ganz linke Segment ist, und der zweite Wert repräsentiert den vertikalen Index des Segments, wobei `0` das untenste Segment repräsentiert:

![Zwei Geräte-Segmentlayouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontal nebeneinander liegenden Layout wird das linke Segment durch `0 0` repräsentiert, und das rechte Segment durch `1 0`.
- In einem vertikal von oben nach unten liegenden Layout wird das obere Segment durch `0 0` repräsentiert, und das untere Segment durch `0 1`.
- Bei Geräten mit mehr als zwei Segmenten, könnten die Zahlen größer sein. Zum Beispiel, ein Gerät mit drei horizontalen Segmenten könnte das mittlere Segment mit `1 0`, und das rechte Segment mit `2 0` repräsentieren.

Zum Beispiel, das folgende gibt die Breite des rechten Segments auf einem faltbaren Gerät mit zwei Segmenten zurück, auf dem die Segmente horizontal ausgerichtet sind:

```css
env(viewport-segment-width 1 0)
```

Siehe die [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige Arbeitsdemo ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Außerdem empfiehlt es sich, [Die Viewport Segments API zu verwenden](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung.

## Offizielle Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env() um sicherzustellen, dass Schaltflächen nicht von der Geräte-Benutzeroberfläche verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass fest positionierte App-Werkzeugleisten-Schaltflächen nicht von Gerätebenachrichtigungen verdeckt werden, die am unteren Bildschirmrand erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Bei Geräten jedoch, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält dieser Wert einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dies kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu schaffen, der auf diesem Gerät natürlich erscheint.

#### HTML

Wir haben einen {{htmlelement("main")}} Abschnitt, der eine gefälschte Anwendung und einen {{htmlelement("footer")}} enthält, der zwei {{htmlelement("button")}}-Elemente enthält:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) erstellen wir eine Fußzeile, die nur so hoch ist, wie sie sein muss, während der Hauptabschnitt, der die Anwendung enthält, den Rest des Viewports ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky) ein, um die Fußzeile am unteren Rand des Viewports zu fixieren. Wir verwenden dann die {{cssxref("padding")}}-Kurzschrift, um der Fußzeile eine Polsterung hinzuzufügen. Wir fügen den Wert der `safe-area-inset-bottom`-Umgebungsvariable zu einem anfänglichen `1em` an unterer Polsterung hinzu. Ein größerer schwarzer Bereich wird auf Geräten angezeigt, die einen positiven Wert für diese Variable haben, um sicherzustellen, dass die Schaltflächen in der Fußzeile niemals verdeckt werden.

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

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Dann fügen wir {{cssxref("padding")}} hinzu, wobei die `env()`-Funktion verwendet wird, mit einem Fallback für die Größe der Polsterung auf jeder Seite. Wir stellen absichtlich einen ungültigen Wert für die linke Polsterung ein (denken Sie daran, Umgebungsvariablennamen sind casesensitiv), um die Verwendung des Fallback-Werts zu demonstrieren.

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

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fensterschaltflächen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden, die das [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fensterschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*`-Werte definieren ein Rechteck, wo die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die die Funktion "Window Controls Overlay" nicht unterstützen, wie Mobilgeräte, werden die Fallback-Werte verwendet.

Hier ist, wie eine PWA, die auf einem Desktop-Gerät installiert ist, normalerweise aussieht:

![Illustration, wie eine PWA auf dem Desktop normalerweise aussieht, mit Fensterschaltflächen, einer Titelleiste und Webinhalt darunter](desktop-pwa-window.png)

Mit der "Window Controls Overlay"-Funktion decken die Webinhalte die gesamte Fensteroberfläche der App ab, wobei die Fensterschaltflächen und PWA-Schaltflächen als Overlay angezeigt werden:

![Illustration, wie eine PWA auf dem Desktop mit der "Window Controls Overlay"-Funktion aussieht, mit Fensterschaltflächen, keiner Titelleiste und Webinhalten, die das gesamte Fenster überspannen](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest des Inhalts scrollt und stattdessen auf die Fensterschaltflächen ausgerichtet bleibt, auch auf Geräten/Browsers, die einen elastischen Overscroll unterstützen (auch bekannt als "Gummibanding").

### Viewport-Segmente

Die [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der [Leitfaden zur Nutzung der Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API/Using) bieten eine Demonstration und Erklärung zur Verwendung der `env()`-Funktion mit den `viewport-segments-*`-Umgebungsvariablen.

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
- [Viewport-Segmente-API](/de/docs/Web/API/Viewport_segments_API)
- [Anpassen des Fenstersteuerungs-Overlay der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
