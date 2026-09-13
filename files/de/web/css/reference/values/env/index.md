---
title: CSS-Funktion `env()`
short-title: env()
slug: Web/CSS/Reference/Values/env
l10n:
  sourceCommit: d571e753a6e1aa3f37c775f0308690bc738cdbe6
---

Die **CSS-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) `env()`** kann verwendet werden, um den Wert einer vom User-Agent definierten [Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using) in Ihr CSS einzufügen. Alternativ kann `env()` verwendet werden, um dynamische Werte in externen SVG-Dateien zu erstellen, die mithilfe der CSS-Eigenschaft {{cssxref("link-parameters")}} aktualisiert werden.

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
  - : Ein {{cssxref("&lt;custom-ident>")}}, das den Namen der einzufügenden Umgebungsvariable angibt. Wenn der angegebene Name eine arrayähnliche Umgebungsvariable darstellt, folgt auf den Namen ein {{cssxref("&lt;integer>")}}-Wert, der die spezifische Instanz identifiziert, auf die sich der Name bezieht. Der groß-/kleinschreibungssensitive Name der Umgebungsvariable kann einer der folgenden sein:
    - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
      - : Der sichere Abstand vom oberen, rechten, unteren oder linken Innenrand des Viewports, der definiert, wo Inhalte sicher platziert werden können, ohne dass das Risiko besteht, dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Die vier Werte bilden ein Rechteck, innerhalb dessen alle Inhalte sichtbar sind. Die Werte sind `0`, wenn der Viewport rechteckig ist und keine Funktionen — wie Werkzeugleisten oder dynamische Tastaturen — Platz im Viewport beanspruchen; andernfalls handelt es sich um einen `px`-Wert größer als `0`.
    - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
      - : Die statischen Maximalwerte ihrer dynamischen Entsprechungen der Variablen `safe-area-inset-*`, wenn alle dynamischen Benutzeroberflächenfunktionen ausgeblendet sind. Während sich die Werte von `safe-area-inset-*` ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, sind die Werte von `safe-area-max-inset-*` Konstanten.
    - `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
      - : Die Abmessungen eines sichtbaren Bereichs `titlebar-area-*`. Diese Variablen sind verfügbar, wenn das Manifestfeld [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) mit `window-controls-overlay` verwendet wird. Die Werte der Variablen können verwendet werden, um sicherzustellen, dass sich Inhalte bei auf Desktopgeräten installierten Progressive Web Apps (PWAs) nicht mit Fensterschaltflächen (also Minimieren, Maximieren und Schließen) überschneiden.
    - `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
      - : Die Innenabstände vom Rand des Viewports sowie die Abmessungen der virtuellen Bildschirmtastatur des Geräts. Definiert in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).
    - `preferred-text-scale`
      - : Der bevorzugte Schriftartskalierungsfaktor des Benutzers, eine in den Einstellungen des Browsers oder Betriebssystems festgelegte Zahl. Dieser kann verwendet werden, um Inhalte proportional zu den vom Browser oder Betriebssystem festgelegten Schriftgrößen zu skalieren.
    - `viewport-segment-width`, `viewport-segment-height`, `viewport-segment-top`, `viewport-segment-right`, `viewport-segment-bottom`, `viewport-segment-left`
      - : Die Abmessungen und Versatzpositionen bestimmter Viewport-Segmente. Auf das Schlüsselwort `viewport-segment-*` folgen zwei durch Leerzeichen getrennte {{cssxref("&lt;integer>")}}-Werte, die die horizontale und vertikale Position beziehungsweise Indizes des Segments angeben. Die Viewport-Segment-Schlüsselwörter werden nur definiert, wenn der Viewport aus zwei oder mehr Segmenten besteht, wie bei faltbaren Geräten oder Geräten mit Scharnier.

- [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident)
  - : Ein `<dashed-ident>` ist eine benutzerdefinierte Variable, die als Bezeichner in der CSS-Funktion {{cssxref("param")}} verwendet werden kann, um den Wert zu aktualisieren.

- `<fallback>` {{optional_inline}}
  - : Ein Fallback-Wert, der eingefügt wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht existiert. Alles nach dem ersten Komma wird als Fallback-Wert betrachtet. Dies kann ein einzelner Wert, eine weitere `env()`-Funktion oder eine durch Kommas getrennte Liste von Werten sein.

- `<declaration_value>` {{optional_inline}}
  - : Ein `<declaration_value>` ist der Standardwert des dynamisch gesetzten SVG-Attributs. Wenn `<declaration-value>` weggelassen wird, stellt es einen leeren Wert dar.

## Beschreibung

Die Funktion `env()` wird verwendet, um den Wert einer global gültigen, [vom User-Agent definierten Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) in Ihr CSS einzufügen. Die Funktion `env()` kann als Eigenschaftswert oder anstelle eines beliebigen Teils eines Eigenschaftswerts oder Deskriptors verwendet werden, beispielsweise in [Media-Query-Regeln](/de/docs/Web/CSS/Reference/At-rules/@media).

Die Funktion akzeptiert als erstes Argument eine `<environment-variable>`. Dies ist ein groß-/kleinschreibungssensitiver {{cssxref("&lt;custom-ident>")}}, der dem [Namen der Umgebungsvariable](/de/docs/Web/CSS/Guides/Environment_variables/Using#browser-defined_environment_variables) entspricht, die ersetzt werden soll, kann jedoch bei Bedarf auch zusätzliche durch Leerzeichen getrennte Werte enthalten. Beispielsweise würde `env(viewport-segment-width 0 0)` bei einem Gerät mit mehreren Viewport-Segmenten die Breite des oberen oder linken Segments zurückgeben.

Das zweite Argument ist, sofern angegeben, der Fallback-Wert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht unterstützt wird oder nicht existiert. Der Fallback kann eine weitere Umgebungsvariable sein, auch mit einem eigenen Fallback.

Die Syntax des Fallbacks ähnelt der Fallback-Syntax der Funktion {{cssxref("var()")}}, die zum Einfügen von [benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) verwendet wird, da sie mehrere Kommas zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert angesehen. Wenn die Funktion `env()` jedoch innerhalb eines Eigenschaftswerts oder Deskriptors verwendet wird, der keine Kommas enthält, ist ein Fallback-Wert mit Kommas nicht gültig.

Eine Eigenschaft oder ein Deskriptor, die beziehungsweise der eine syntaktisch gültige Funktion `env()` enthält, wird zur Parse-Zeit, wenn der Browser den heruntergeladenen CSS-Text erstmals liest und interpretiert, als gültig angenommen. Die Syntax wird erst zur Berechnungszeit geprüft, nachdem jede Funktion `env()` durch ihren vom Browser bereitgestellten Wert ersetzt wurde — oder durch den Fallback-Wert, wenn die als erster Parameter übergebene Umgebungsvariable kein erkannter Name einer Umgebungsvariable ist. Wenn der Wert ungültig ist und kein Fallback bereitgestellt wird, ist die Eigenschaft oder der Deskriptor, die beziehungsweise der die Funktion `env()` enthält, [zur Zeit der Berechnung des Eigenschaftswerts ungültig](/de/docs/Web/CSS/Guides/Syntax/Error_handling#invalid_custom_properties).

Wenn eine `env()`-Ersetzung ungültig ist und ein ungültiger Fallback enthalten ist oder der Fallback weggelassen wird, wird die Deklaration nicht ignoriert. Stattdessen wird der [initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Der Eigenschaft wird ein neuer Wert zugewiesen, dieser entspricht jedoch möglicherweise nicht dem erwarteten Wert.

### Anwendungsfälle

Die Werte `safe-area-inset-*` wurden ursprünglich vom iOS-Browser bereitgestellt, damit Entwickler ihre Inhalte in einem sicheren Bereich des Viewports platzieren können und diese nicht durch Gerätekerben oder abgerundete Ecken verdeckt werden. Sie können dazu verwendet werden, sicherzustellen, dass Inhalte für Betrachter sichtbar sind. Diese Funktion wurde später über ihren ursprünglichen Zweck hinaus erweitert, um Anwendungsfälle zu ermöglichen, beispielsweise das [Verhindern, dass Gerätebenachrichtigungen Teile der Anwendungsbenutzeroberfläche verdecken](#using_env_to_ensure_buttons_are_not_obscured_by_device_ui).

Ein weiterer Anwendungsfall für `env()`-Variablen sind Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die Funktion [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden, um die gesamte Oberfläche des Anwendungsfensters zu nutzen. Mithilfe der [`titlebar-area-*`-Werte](#titlebar-area-x) können Entwickler Elemente dort positionieren, wo sich ansonsten die Titelleiste befinden würde, und [sicherstellen, dass Inhalte nicht durch Fensterschaltflächen verdeckt werden](#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

Die Variablennamen `viewport-segment-*` können verwendet werden, um Ihre Container so festzulegen, dass sie sauber in die verfügbaren Segmente eines Geräts mit mehreren Viewport-Segmenten passen, beispielsweise eines Geräts mit Scharnier oder eines faltbaren Geräts. Die auf den Namen `viewport-segment-*` folgenden Ganzzahlen geben an, auf welches der mehreren Segmente sich die Umgebungsvariable bezieht.

Die Variable `preferred-text-scale` kann verwendet werden, um Website-Text oder andere UI-Funktionen proportional zu den vom Browser oder Betriebssystem festgelegten Schriftgrößen zu skalieren. Beispielsweise könnten Sie die Schriftgröße des Body als Prozentsatz festlegen, der auf der benutzerdefinierten Textskalierung basiert:

```css
body {
  font-size: calc(100% * env(preferred-text-scale));
}
```

Größen können auch proportional zur Schriftgröße des Browsers oder Betriebssystems festgelegt werden, indem [`<meta name="text-scale" content="scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale) in den `<head>` des Dokuments eingefügt wird. Das Tag `<meta>` sollte nach Möglichkeit anstelle von `env(preferred-text-scale)` verwendet werden, da das Tag `<meta>` auf einer größeren Bandbreite von Plattformen unterstützt wird und außerdem einfacher zu verwenden ist.

> [!WARNING]
> Seien Sie vorsichtig bei der Verwendung von `env(preferred-text-scale)`, wenn `<meta name="text-scale" content="scale">` gesetzt ist, da dies dazu führt, dass die Textskalierung in Kombination mit relativen Größen wie `em` und `rem` zweimal angewendet wird. Wenn beispielsweise das `<meta>` gesetzt ist, führt eine Deklaration wie `font-size: calc(2rem * env(preferred-text-scale))` dazu, dass kleine Schriftgrößen noch kleiner und große Schriftgrößen größer werden.

### Namen mit nachfolgenden Ganzzahlen

Wenn die Umgebungsvariable arrayähnlich ist, das heißt, wenn sich der Name auf mehr als einen Wert beziehen kann, wie bei Geräten mit mehreren Viewport-Segmenten, enthält der Parameter `<environment-variable>` sowohl den Namen der Variablen als auch die Indizes der spezifischen Instanz der Variablen, auf die sich die Funktion bezieht. Beispielsweise werden bei den Variablen `viewport-segment-*` die Variablennamen zusammen mit zwei Ganzzahlen an die Funktion `env()` übergeben, die die Indizes des Segments angeben, für das der Wert zurückgegeben werden soll. Diese Werte sind beide Ganzzahlen von `0` oder größer. Die erste Ganzzahl stellt den horizontalen Index des Segments dar, wobei `0` das am weitesten links liegende Segment ist, und der zweite Wert stellt den vertikalen Index des Segments dar, wobei `0` das unterste Segment darstellt:

![Zwei Layouts von Gerätesegmenten: In einem horizontalen Layout ist 0 0 das erste Segment und 1 0 das zweite Segment. In einem vertikalen Layout sind die Indizes 0 0 und 0 1.](env-var-indices.png)

- In einem horizontalen Nebeneinander-Layout wird das linke Segment durch `0 0` und das rechte Segment durch `1 0` dargestellt.
- In einem vertikalen Layout von oben nach unten wird das obere Segment durch `0 0` und das untere Segment durch `0 1` dargestellt.
- Bei Geräten mit mehr als zwei Segmenten können die Zahlen größer sein. Beispielsweise kann bei einem Gerät mit drei horizontalen Segmenten das mittlere Segment durch `1 0` und das rechte Segment durch `2 0` dargestellt werden.

Das Folgende gibt beispielsweise die Breite des rechten Segments auf einem faltbaren Gerät mit zwei horizontal ausgerichteten Segmenten zurück:

```css
env(viewport-segment-width 1 0)
```

Eine vollständig funktionsfähige Demo finden Sie in der [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Lesen Sie auch [Using the Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erklärung der Demo.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht durch die Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste Schaltflächen der Anwendungswerkzeugleiste nicht durch Gerätebenachrichtigungen verdeckt werden, die am unteren Bildschirmrand erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` gleich `0`. Auf Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie etwa iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu schaffen, der auf diesem Gerät natürlich wirkt.

#### HTML

Wir haben einen {{htmlelement("main")}}-Abschnitt mit einer simulierten Anwendung und ein {{htmlelement("footer")}}, das zwei {{htmlelement("button")}}-Elemente enthält:

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

#### CSS

Mithilfe von [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) erstellen wir einen Footer, der nur so hoch ist, wie erforderlich, während der die Anwendung enthaltende Hauptabschnitt den restlichen Viewport ausfüllt:

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

Wir setzen [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky), damit der Footer am unteren Rand des Viewports bleibt. Anschließend verwenden wir die Kurzform {{cssxref("padding")}}, um dem Footer Innenabstand hinzuzufügen. Wir fügen den Wert der Umgebungsvariable `safe-area-inset-bottom` zu einem anfänglichen unteren Innenabstand von `1em` hinzu. Auf Geräten mit einem positiven Wert für diese Variable wird ein größerer schwarzer Bereich angezeigt, wodurch sichergestellt wird, dass die Schaltflächen im Footer niemals verdeckt werden.

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

Dieses Beispiel verwendet den optionalen zweiten Parameter von `env()`, der einen Fallback-Wert bereitstellt, falls die Umgebungsvariable nicht verfügbar ist.

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

Wir setzen eine {{cssxref("width")}} von `300px` und einen {{cssxref("border")}}. Anschließend fügen wir {{cssxref("padding")}} hinzu und verwenden dabei die Funktion `env()` mit einem Fallback für die Größe des Innenabstands auf jeder Seite. Wir setzen absichtlich einen ungültigen Wert für den linken Innenabstand — beachten Sie, dass bei Namen von Umgebungsvariablen die Groß- und Kleinschreibung beachtet wird —, um die Verwendung des Fallback-Werts zu demonstrieren.

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

### Verwendung von env(), um sicherzustellen, dass Inhalte in Desktop-PWAs nicht durch Fensterschaltflächen verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden, welche die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Fensterschaltflächen des Betriebssystems verdeckt werden. Die Werte `titlebar-area-*` definieren ein Rechteck, in dem normalerweise die Titelleiste angezeigt worden wäre. Auf Geräten, die die Funktion Window Controls Overlay nicht unterstützen, beispielsweise Mobilgeräten, werden die Fallback-Werte verwendet.

So sieht eine auf einem Desktopgerät installierte PWA normalerweise aus:

![Illustration einer auf einem Desktop installierten PWA mit Fensterschaltflächen, einer Titelleiste und darunterliegenden Webinhalten](desktop-pwa-window.png)

Mit der Funktion Window Controls Overlay bedecken die Webinhalte die gesamte Oberfläche des Anwendungsfensters, während die Fensterschaltflächen und PWA-Schaltflächen als Overlays angezeigt werden:

![Illustration einer auf einem Desktop installierten PWA mit der Funktion Window Controls Overlay, Fensterschaltflächen, keiner Titelleiste und Webinhalten über das gesamte Fenster](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit den übrigen Inhalten scrollt und stattdessen an den Fensterschaltflächen ausgerichtet bleibt — auch auf Geräten und in Browsern, die elastisches Overscrollen unterstützen, auch als Rubber Banding bekannt.

### Viewport-Segmente

Die [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) und der Leitfaden [Using the Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) bieten eine Demonstration und Erklärung zur Verwendung der Funktion `env()` mit den Umgebungsvariablen `viewport-segments-*`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables/Using)
- Modul [CSS-Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables)
- {{CSSxRef("var")}}
- Modul [benutzerdefinierte CSS-Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables)
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/Reference/Properties/--*)
- [`<meta name="text-scale">`](/de/docs/Web/HTML/Reference/Elements/meta/name/text-scale)
- [Verwendung benutzerdefinierter CSS-Eigenschaften (Variablen)](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Passen Sie das Fenstersteuerungs-Overlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box)
