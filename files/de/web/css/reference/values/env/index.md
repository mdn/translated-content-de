---
title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann verwendet werden, um den Wert einer benutzeragentendefinierten [Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables) in Ihr CSS einzufügen.

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

Die `env( <environment-variable>, <fallback> )` Funktion akzeptiert folgende Parameter:

- [`<environment-variable>`](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables)
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariable angibt. Wenn der angegebene Name eine array-ähnliche Umgebungsvariable darstellt, wird der Name von {{cssxref("&lt;integer>")}} Werten gefolgt, die die spezifische Instanz identifizieren, auf die sich der Name bezieht. Der groß- und kleinschreibungssensitive Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand von der oberen, rechten, unteren oder linken Einfügekante des Viewports, der definiert, wo es sicher ist, Inhalte einzufügen, ohne dass diese vom Rand eines nicht-rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, in dem alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport ein Rechteck ist und keine Funktionen wie Werkzeugleisten oder dynamische Tastaturen Viewport-Fläche einnehmen; andernfalls ist es ein `px` Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen `safe-area-inset-*` Variablen-Gegenstücke, wenn alle dynamischen Benutzeroberflächenfunktionen zurückgezogen sind. Während die `safe-area-inset-*` Werte sich ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, sind die `safe-area-max-inset-*` Werte Konstanten.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*` Bereichs. Diese Variablen sind verfügbar bei Nutzung des `window-controls-overlay` [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Manifestfelds. Die Werte der Variablen können verwendet werden, um sicherzustellen, dass Inhalte nicht durch Fenstersteuerungstasten (d. h. Minimieren, Maximieren und Schließen) überlappt werden, wenn Progressive Web Apps (PWA) auf Desktop-Geräten installiert sind.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einzüge vom Rand des Viewports und die Dimensionen der auf dem Bildschirm angezeigten virtuellen Tastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Offset-Positionen spezifischer Viewport-Segmente. Das `viewport-segment-*` Schlüsselwort wird gefolgt von zwei leerzeichengetrennten {{cssxref("&lt;integer>")}} Werten, die die horizontale und vertikale Position oder Indizes des Segments angeben. Die viewport-segment Schlüsselwörter sind nur definiert, wenn der Viewport aus zwei oder mehr Segmenten besteht, wie bei faltbaren oder klappbaren Geräten.

- `<fallback>` {{optional_inline}}
  - : Ein alternativer Wert, der eingefügt wird, wenn die Umgebungsvariable, die im ersten Argument referenziert wird, nicht existiert. Alles nach dem ersten Komma wird als alternative Fallback-Wert angesehen. Dies kann ein einzelner Wert, eine andere `env()` Funktion oder eine durch Kommas getrennte Liste von Werten sein.

## Beschreibung

Die `env()` Funktion wird verwendet, um den Wert einer global angelegten, [benutzeragentendefinierten Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) in Ihr CSS einzufügen. Die `env()` Funktion kann als Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswerts oder Deskriptors verwendet werden (zum Beispiel in [Media-Query-Regeln](/de/docs/Web/CSS/Reference/At-rules/@media)).

Die Funktion akzeptiert ein `<environment-variable>` als erstes Argument. Dies ist ein groß- und kleinschreibungssensitives {{cssxref("&lt;custom-ident>")}}, das dem [Namen der Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) entspricht, die ersetzt werden soll, kann aber auch bei Bedarf zusätzliche leerzeichengetrennte Werte enthalten. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Fall eines Geräts mit mehreren Viewport-Segmenten zurückgeben.

Das zweite Argument, sofern angegeben, ist der Fallback-Wert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Der Fallback kann eine andere Umgebungsvariable sein, sogar mit einem eigenen Fallback.

Die Syntax des Fallbacks ist der Fallback-Syntax der {{cssxref("var()")}} Funktion ähnlich, die zum Einfügen von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verwendet wird, insofern sie mehrere Kommas erlaubt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert angesehen. Wenn jedoch die `env()` Funktion innerhalb eines Eigenschaftswerts oder Deskriptors verwendet wird, der keine Kommas enthält, ist ein Fallback-Wert, der Kommas enthält, nicht gültig.

Eine Eigenschaft oder ein Deskriptor, der eine syntaktisch gültige `env()` Funktion enthält, wird zur Übersetzungszeit als gültig angenommen, wenn der Browser den heruntergeladenen CSS-Text zum ersten Mal liest und interpretiert. Er wird nur zur Rechenzeit syntaxgeprüft, nachdem jede `env()` Funktion mit ihrem browserbereitgestellten Wert (oder dem Fallback-Wert, wenn die Umgebungsvariable, die als erster Parameter übergeben wurde, kein anerkannter Umgebungsvariablenname ist) ersetzt wurde. Wenn der Wert ungültig ist und kein Fallback bereitgestellt wird, ist die Eigenschaft oder der Deskriptor, der die `env()` Funktion enthält, [ungültig zur Compute-Zeit](/de/docs/Web/CSS/CSS_syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()` Ersetzung ungültig ist und ein ungültiger Fallback enthalten ist oder der Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet. Die Eigenschaft wird auf einen neuen Wert gesetzt, der möglicherweise nicht der erwartete ist.

### Anwendungsfälle

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren und nicht von Gerätekerben oder abgerundeten Ecken verdeckt zu werden, können die `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte für Betrachter sichtbar sind. Diese Funktion wurde später über ihren ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle zu ermöglichen, wie [das Verhindern, dass Gerätemitteilungen Teile der Benutzeroberfläche der App verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui).

Ein weiterer Anwendungsfall für `env()` Variablen sind Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) Feature nutzen, um die gesamte Fläche des Anwendungsfensters ausnutzen zu können. Mit den [`titlebar-area-*` Werten](#titlebar-area-x) können Entwickler Elemente dort positionieren, wo die Titelleiste gewesen wäre, und [sicherstellen, dass Inhalte nicht durch Fenstersteuerelemente verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Die `viewport-segment-*` Variablennamen können verwendet werden, um Ihre Container so anzupassen, dass sie passend in die verfügbaren Segmente eines Multi-Viewport-Segment-Geräts wie eines Klapp- oder Faltgeräts passen. Die nach dem `viewport-segment-*` Namen stehenden Zahlen geben an, welches Segment der mehrere Segmente die Umgebungsvariable referenziert.

### Namen gefolgt von ganzen Zahlen

Wenn die Umgebungsvariable array-ähnlich ist, das heißt, der Name mehr als einen Wert referenzieren kann, wie es bei Geräten mit mehreren Viewport-Segmenten der Fall ist, beinhaltet der `<environment-variable>` Parameter sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variablen, auf die sich die Funktion bezieht. Im Fall der `viewport-segment-*` Variablen werden die Variablennamen zusammen mit zwei ganzen Zahlen an die `env()` Funktion übergeben, die die Indizes des Segments angeben, für das der Wert zurückgegeben werden soll. Diese Werte sind beide Ganzzahlen von `0` oder größer. Die erste Ganzzahl repräsentiert den horizontalen Index des Segments, wobei `0` das linkeste Segment ist, und die zweite Zahl repräsentiert den vertikalen Index des Segments, wobei `0` das unterste Segment repräsentiert:

![Zwei Geräte-Segmentlayouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1](env-var-indices.png)

- In einem horizontalen nebeneinander Layout wird das linke Segment durch `0 0` und das rechte Segment durch `1 0` repräsentiert.
- In einem vertikalen von oben nach unten Layout wird das obere Segment durch `0 0` und das untere Segment durch `0 1` repräsentiert.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Zum Beispiel kann bei einem Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` und das rechte Segment durch `2 0` repräsentiert sein.

Zum Beispiel gibt folgendes die Breite des rechten Segments auf einem faltbaren Gerät mit zwei Segmenten zurück, bei dem die Segmente horizontal ausgerichtet sind:

```css
env(viewport-segment-width 1 0)
```

Sehen Sie sich die [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionierende Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch die [Verwendung der Viewport-Segments-API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demoerklärung an.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht von der Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feststehende App-Werkzeugleistenschaltflächen nicht durch Gerätebenachrichtigungen verdeckt werden, die am unteren Bildschirmrand erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Bei Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu schaffen, der auf diesem Gerät natürlich erscheint.

#### HTML

Wir haben einen {{htmlelement("main")}} Abschnitt, der eine gefälschte Anwendung und einen {{htmlelement("footer")}}, der zwei {{htmlelement("button")}} Elemente enthält:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mit dem [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) erstellen wir einen Footer, der nur so hoch ist, wie er sein muss, während der Hauptabschnitt, der die Anwendung enthält, den Rest des Viewports ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky), um den Footer am unteren Rand des Viewports zu fixieren. Wir verwenden dann die {{cssxref("padding")}} Kurzform, um den Footer mit Abstand zu versehen. Wir fügen den Wert der `safe-area-inset-bottom` Umgebungsvariablen zu einem anfänglichen `1em` des unteren Abstands hinzu. Ein größerer schwarzer Bereich wird auf Geräten angezeigt, die einen positiven Wert für diese Variable haben, wodurch sichergestellt wird, dass die Schaltflächen im Footer niemals verdeckt werden.

```css
footer {
  position: sticky;
  bottom: 0;

  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

#### Ergebnisse

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### Verwenden eines Fallback-Wertes

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

Wir setzen eine {{cssxref("width")}} von `300px` und eine {{cssxref("border")}}. Wir fügen dann {{cssxref("padding")}} hinzu, indem wir die `env()` Funktion mit einem Fallback für die Größe des Abstands auf jeder Seite verwenden. Wir setzen absichtlich einen ungültigen Wert für den linken Abstand (denken Sie daran, dass Umgebungsvariablennamen groß- und kleinschreibungssensitiv sind), um die Verwendung des Fallback-Wertes zu demonstrieren.

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

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht durch Fenstersteuerungstasten in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte in einer Desktop Progressive Web App, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Fenstersteuerungstasten des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, wo die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay Feature nicht unterstützen, wie mobile Geräte, werden die Fallback-Werte verwendet.

So sieht eine PWA aus, die auf einem Desktop-Gerät installiert ist:

![Abbildung, wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungstasten, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit der Window Controls Overlay Funktion decken die Webinhalte die gesamte Anwendungsfensterfläche ab, wobei die Fenstersteuerungen und PWA-Tasten als Overlays angezeigt werden:

![Abbildung, wie eine auf dem Desktop installierte PWA mit dem Window Controls Overlay Feature aussieht, mit Fenstersteuerungstasten, keiner Titelleiste und Webinhalten, die das ganze Fenster umfassen](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest der Inhalte scrollt und stattdessen an den Fenstersteuerungstasten ausgerichtet bleibt, selbst auf Geräten/Browsen, die elastisches Scrollen unterstützen (auch als Rubberbanding bekannt).

### Viewport-Segmente

Die [Viewport Segment API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der [Leitfaden zur Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) bieten eine Demonstration und Erklärung der Verwendung der `env()` Funktion mit den `viewport-segments-*` Umgebungsvariablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- {{CSSxRef("var")}}
- [CSS-Benutzerdefinierte Eigenschaften für variablen Kaskadierung](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/Reference/Properties/--*)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Anpassen des Fenstersteuerungs-Overlays in der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/de-de/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
