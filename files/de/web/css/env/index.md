---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten [Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables) in Ihr CSS einzufügen.

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
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariable angibt. Wenn der bereitgestellte Name eine array-ähnliche Umgebungsvariable darstellt, folgt dem Namen ein {{cssxref("&lt;integer>")}}-Wert, der die spezifische Instanz identifiziert, auf die sich der Name bezieht. Der groß-/kleinschreibungssensitive Name der Umgebungsvariablen kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand vom oberen, rechten, unteren oder linken Kantenbereich des Viewports, der angibt, wo es sicher ist, Inhalte zu platzieren, ohne das Risiko einzugehen, dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport ein Rechteck ist und keine Funktionen – wie Werkzeugleisten oder dynamische Tastaturen – Platz im Viewport einnehmen; andernfalls ist es ein `px`-Wert, der größer als `0` ist.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen Gegenstücke `safe-area-inset-*`, wenn alle dynamischen Benutzeroberflächen-Funktionen eingezogen sind. Während sich die `safe-area-inset-*`-Werte ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, bleiben die `safe-area-max-inset-*`-Werte konstant.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren `titlebar-area-*`-Bereichs. Diese Variablen sind verfügbar, wenn das `window-controls-overlay`-[`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Manifestfeld verwendet wird. Die Variablenwerte können verwendet werden, um sicherzustellen, dass Inhalte nicht Fenstersteuerungsschaltflächen (das heißt Minimieren, Maximieren und Schließen) mit progressiven Web-Apps (PWA), die auf Desktop-Geräten installiert sind, überlappen.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Einpassteile vom Rand des Viewports und die Abmessungen der virtuellen Onscreen-Tastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Versatzpositionen spezifischer Viewport-Segmente. Das `viewport-segment-*`-Schlüsselwort wird von zwei durch Leerzeichen getrennten {{cssxref("&lt;integer>")}}-Werten gefolgt, die die horizontale und vertikale Position oder Indizes des Segments angeben. Die Viewport-Segment-Schlüsselwörter sind nur definiert, wenn der Viewport aus zwei oder mehr Segmenten besteht, wie bei faltbaren oder klappbaren Geräten.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt wird, falls die in den ersten Argument referenzierte Umgebungsvariable nicht existiert. Alles nach dem ersten Komma wird als Fallback-Wert betrachtet. Dies kann ein einzelner Wert, eine weitere `env()`-Funktion oder eine durch Kommas getrennte Liste von Werten sein.

## Beschreibung

Die `env()`-Funktion wird verwendet, um den Wert einer globalen, vom [User-Agent definierten Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) in Ihr CSS einzufügen. Die `env()`-Funktion kann als Eigenschaftswert oder anstelle eines Teils eines Eigenschaftswerts oder Deskriptors (zum Beispiel in [Media-Query-Regeln](/de/docs/Web/CSS/@media)) verwendet werden.

Die Funktion akzeptiert als erstes Argument eine `<environment-variable>`. Dies ist ein groß-/kleinschreibungssensitiver {{cssxref("&lt;custom-ident>")}}, der dem [Namen der Umgebungsvariable](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables#browser-defined_environment_variables) entspricht, die ersetzt werden soll, kann jedoch bei Bedarf auch zusätzliche durch Leerzeichen getrennte Werte enthalten. Zum Beispiel würde `env(viewport-segment-width 0 0)` die Breite des oberen oder linken Segments im Fall eines Geräts mit mehreren Viewport-Segmenten zurückgeben.

Das zweite Argument, falls vorhanden, ist der Fallback-Wert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Der Fallback kann eine andere Umgebungsvariable sein, sogar mit ihrem eigenen Fallback.

Die Syntax des Fallbacks ähnelt der Fallback-Syntax der {{cssxref("var()")}}-Funktion zur Einfügung von [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*) darin, dass sie Mehrfachkommas zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn die `env()`-Funktion jedoch innerhalb eines Eigenschaftswerts oder Deskriptors verwendet wird, der keine Kommas enthält, ist ein Fallback-Wert, der Kommas enthält, nicht gültig.

Eine Eigenschaft oder ein Deskriptor, der eine syntaktisch gültige `env()`-Funktion enthält, wird zur Parsezeit, wenn der Browser den heruntergeladenen CSS-Text zum ersten Mal liest und interpretiert, als gültig angesehen. Sie wird nur zur Syntax-Überprüfung in der Computationszeit geprüft, nachdem jede `env()`-Funktion mit ihrem vom Browser bereitgestellten Wert (oder dem Fallback-Wert, wenn die im ersten Parameter übergebene Umgebungsvariable kein anerkannter Umgebungsvariablen-Name ist) ersetzt wurde. Wenn der Wert ungültig ist und kein Fallback bereitgestellt wird, ist die Eigenschaft oder der Deskriptor, der die `env()`-Funktion enthält, [zum Berechnungszeitpunkt ungültig](/de/docs/Web/CSS/CSS_syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()`-Ersetzung ungültig ist und ein ungültiger Fallback eingeschlossen ist oder der Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte Wert](/de/docs/Web/CSS/CSS_cascade/Inheritance) der Eigenschaft verwendet. Der Eigenschaft wird ein neuer Wert zugewiesen, der jedoch möglicherweise nicht dem erwarteten entspricht.

### Anwendungsfälle

Ursprünglich von iOS-Browsern bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren, ohne von Geräteaussparungen oder abgerundeten Ecken verdeckt zu werden, können die `safe-area-inset-*`-Werte verwendet werden, um sicherzustellen, dass Inhalte für die Betrachter sichtbar sind. Diese Funktion wurde später über ihren ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle wie [Verhindern, dass Benachrichtigungen das Benutzeroberflächen von Apps verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui) zu ermöglichen.

Ein weiterer Anwendungsfall für `env()`-Variablen sind Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Feature verwenden, um die gesamte Anwendungsfenster-Oberfläche zu nutzen. Mit den [`titlebar-area-*`-Werten](#titlebar-area-x) können Entwickler Elemente dort positionieren, wo sich die Titelleiste befunden hätte, und [sicherstellen, dass Inhalte nicht von Fenstersteuerungsschaltflächen verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas) in Desktop-PWAs.

Die `viewport-segment-*`-Variablennamen können verwendet werden, um Ihre Container genau in die verfügbaren Segmente eines Geräts mit mehreren Viewport-Segmenten wie einem klappbaren oder faltbaren Gerät einzupassen. Die auf den `viewport-segment-*`-Namen folgenden Ganzzahlen geben an, auf welches Segment der mehreren Segmente sich die Umgebungsvariable bezieht.

### Namen gefolgt von Ganzzahlen

Wenn die Umgebungsvariable array-ähnlich ist, was bedeutet, dass der Name mehr als einen Wert referenzieren kann, wie es bei Geräten mit mehreren Viewport-Segmenten der Fall ist, umfasst der `<environment-variable>`-Parameter sowohl den Namen der Variable als auch die Indizes der spezifischen Instanz der Variable, auf die die Funktion verweist. Zum Beispiel, im Fall der `viewport-segment-*`-Variablen, werden die Variablennamen an die `env()`-Funktion zusammen mit zwei Ganzzahlen übergeben, die die Indizes des zu berücksichtigenden Segments angeben. Diese Werte sind beide Ganzzahlen `0` oder größer. Die erste Ganzzahl stellt den horizontalen Index des Segments dar, wobei `0` das linksstehende Segment ist, und der zweite Wert stellt den vertikalen Index des Segments dar, wobei `0` das untenstehende Segment darstellt:

![Zwei Gerätesegment-Layouts; in einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 bzw. 0 1](env-var-indices.png)

- In einem horizontalen Nebeneinander-Layout wird das linke Segment durch `0 0` dargestellt und das rechte Segment durch `1 0`.
- In einem vertikalen Von-oben-nach-unten-Layout wird das obere Segment durch `0 0` dargestellt und das untere Segment durch `0 1`.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Ein Gerät mit drei horizontalen Segmenten kann das mittlere Segment durch `1 0` darstellen und das rechte Segment durch `2 0`.

Zum Beispiel gibt das Folgende die Breite des rechten Segments auf einem zweigeteilten faltbaren Gerät zurück, bei dem die Segmente horizontal angeordnet sind:

```css
env(viewport-segment-width 1 0)
```

Sehen Sie sich das [Viewport Segment API-Demo](https://mdn.github.io/dom-examples/viewport-segment-api/) für ein vollständiges funktionierendes Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api)). Schauen Sie sich auch [Verwendung der Viewport Segmente API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung an.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht von der Benutzeroberfläche des Geräts verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass Fixierte App-Werkzeugleistenschaltflächen nicht von Gerätbenachrichtigungen verdeckt werden, die am unteren Bildschirmrand angezeigt werden. Auf dem Desktop beträgt `safe-area-inset-bottom` `0`. Auf Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu schaffen, der auf diesem Gerät natürlich aussieht.

#### HTML

Wir haben einen {{htmlelement("main")}}-Abschnitt, der eine gefälschte Anwendung enthält, und einen {{htmlelement("footer")}}, der zwei {{htmlelement("button")}}-Elemente enthält:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Unter Verwendung des [CSS Flexible Box Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout) erstellen wir einen Footer, der nur so hoch ist, wie er sein muss, während der Hauptabschnitt, der die Anwendung enthält, den Rest des Viewports ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/position#sticky), um den Footer unten im Viewport zu fixieren. Dann verwenden wir die {{cssxref("padding")}}-Kurzschrift, um dem Footer Polsterungen hinzuzufügen. Wir fügen den Wert der `safe-area-inset-bottom`-Umgebungsvariable zu einem anfänglichen `1em` unteren Polsterungspadding hinzu. Auf Geräten, die einen positiven Wert für diese Variable haben, wird ein größerer schwarzer Bereich angezeigt und stellt sicher, dass die Schaltflächen im Footer niemals verdeckt werden.

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

Dieses Beispiel macht von dem optionalen zweiten Parameter von `env()` Gebrauch, der einen Fallback-Wert bereitstellt, falls die Umgebungsvariable nicht verfügbar ist.

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

Wir setzen eine {{cssxref("width")}} von `300px` und einen {{cssxref("border")}}. Dann fügen wir {{cssxref("padding")}} hinzu und verwenden die `env()`-Funktion mit einem Fallback für die Größe des Polsterings auf jeder Seite. Wir setzen absichtlich einen ungültigen Wert für das linke Polster (denken Sie daran, dass Umgebungsvariablennamen groß-/kleinschreibungssensitiv sind), um die Verwendung des Fallback-Werts zu demonstrieren.

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

### Verwendung von env(), um sicherzustellen, dass Inhalte in Desktop-PWAs nicht von Fenstersteuerungsschaltflächen verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop Progressive Web App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungsschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*`-Werte definieren ein Rechteck, wo die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die die Window Controls Overlay-Funktion nicht unterstützen, wie z.B. mobilen Geräten, werden die Fallback-Werte verwendet.

So sieht eine auf einem Desktop-Gerät installierte PWA normalerweise aus:

![Illustration, wie eine auf einem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungsschaltflächen, einer Titelleiste und Web-Inhalten darunter](desktop-pwa-window.png)

Mit der Window Controls Overlay-Funktion bedecken die Webinhalte die gesamte Anwendungsfenster-Oberfläche, mit den Fenstersteuerungen und PWA-Schaltflächen als Überlagerungen:

![Illustration, wie eine auf einem Desktop installierte PWA mit der Window Controls Overlay-Funktion aussieht, mit Fenstersteuerungsschaltflächen, keiner Titelleiste und Web-Inhalten, die das gesamte Fenster überspannen](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` sorgt dafür, dass der Header nicht mit dem Rest des Inhalts scrollt, sondern stattdessen mit den Fenstersteuerknöpfen ausgerichtet bleibt, selbst auf Geräten/Browsers, die elastisches Überscrollen (auch bekannt als Gummiband-Effekt) unterstützen.

### Viewport-Segmente

Das [Viewport segment API-Demo](https://mdn.github.io/dom-examples/viewport-segment-api/) und die [Verwendung der Viewport Segmente API](/de/docs/Web/API/Viewport_segments_API/Using) Anleitung bietet eine Demonstration und Erklärung der Verwendung der `env()`-Funktion mit den `viewport-segments-*` Umgebungsvariablen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- {{CSSxRef("var")}}
- [CSS-Benutzerdefinierte Eigenschaften für Kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Passen Sie das Fenstersteuerungsoverlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
