---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten Umgebungsvariable in Ihr CSS einzufügen, ähnlich wie die {{cssxref("var", "var()")}} Funktion und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen, im Gegensatz zu benutzerdefinierten Eigenschaften, die vom Autor definiert werden, global auf ein Dokument angewendet werden, während benutzerdefinierte Eigenschaften auf das Element oder die Elemente beschränkt sind, bei denen sie deklariert sind.

Darüber hinaus kann die `env()` Funktion im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Teils eines Deskriptors (z.B. in [Media Query Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Im Zuge der Spezifikation kann sie möglicherweise auch an anderen Stellen wie Selektoren verwendet werden.

Ursprünglich von dem iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte auch auf nicht rechteckigen Displays sichtbar sind.

Ein häufiges Problem, das durch `env()` gelöst wird, ist, dass Gerätebenachrichtigungen Teile der App-Benutzeroberfläche verdecken. Durch das Positionieren fester Elemente mit `env()` können Sie sicherstellen, dass diese in einem sicheren Bereich des Viewports angezeigt werden.

Eine weitere Anwendungsmöglichkeit für `env()` Variablen sind Desktop [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die Fenstersteuerleisten-Overlay-Funktion verwenden, um den gesamten Bereich des Anwendungsfensters zu nutzen. Mit den `titlebar-area-*` Werten können sie Elemente dort platzieren, wo sich normalerweise die Titelleiste befunden hätte, und sicherstellen, dass Inhalte nicht mit den Schaltflächen zur Fenstersteuerung überlappen.

## Syntax

```css
/* Using the four safe area inset values with no fallback values */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* Using them with fallback values */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
```

### Werte

- `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck anhand seiner oberen, rechten, unteren und linken Innenseiten vom Rand des Viewports definieren, in das Inhalte eingefügt werden können, ohne Gefahr zu laufen, durch die Form eines nicht rechtenckigen Displays abgeschnitten zu werden. Für rechteckige Viewports, wie Ihren durchschnittlichen Laptopmonitor, ist ihr Wert gleich null. Für nicht-rechteckige Displays, wie eine runde Uhrenanzeige, bilden die vom User-Agent festgelegten vier Werte ein Rechteck, sodass alle innerhalb des Rechtecks liegenden Inhalte sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Manifest/display_override) Wert verwendet, kann sie die `titlebar-area-*` Variablen nutzen, um sicherzustellen, dass Inhalte nicht mit den Fensterschaltflächen (d.h. Minimieren, Maximieren und Schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen liefern Informationen über das Erscheinen der virtuellen Bildschirmtastatur. Sie definieren ein Rechteck anhand seiner oberen, rechten, unteren und linken Innenseiten vom Rand des Viewports (die Breiten- und Höhenwerte werden von den anderen Innenseiten berechnet). Um mehr zu erfahren, sehen Sie sich die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) an.

> [!NOTE]
> Anders als andere CSS-Eigenschaften sind vom User-Agent definierte Eigenschaftsnamen groß- und kleinschreibungssensitiv.

### Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Bereich auf dem Bildschirm zu nutzen und somit die Verwendung von `env()` Variablen zu ermöglichen, müssen wir einen neuen Viewport-Meta-Wert hinzufügen:

```html
<meta name="viewport" content="viewport-fit=cover" />
```

Sie können dann `env()` in Ihrem CSS verwenden:

```css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
}
```

## Beispiele

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht von der Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Schaltflächen nicht von Gerätemitteilungen verdeckt werden, die am unteren Bildschirmrand erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Bei Geräten, die Mitteilungen am unteren Bildschirmrand anzeigen, wie z.B. iOS, enthält es einen Wert, der Platz für die Mitteilung lässt. Dies kann dann im Wert von {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

```html
<main>Main content of app here</main>
<footer>
  <button>Go here</button>
  <button>Or here</button>
</footer>
```

```css
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font: 1em system-ui;
}

main {
  flex: 1;
  background-color: #eee;
  padding: 1em;
}

footer {
  flex: none;
  display: flex;
  gap: 1em;
  justify-content: space-evenly;
  background: black;
  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
  /* adds the safe-area-inset-bottom value to the initial 1em of padding.
  a larger black area will display for a device that has a positive value for this variable. */
  position: sticky;
  bottom: 0;
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

{{EmbedLiveSample("Using_env_to_ensure_buttons_are_not_obscured_by_device_UI", "200px", "500px")}}

### Verwendung des Fallback-Wertes

Das folgende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es Ihnen ermöglicht, einen Fallback-Wert anzugeben, falls die Umgebungsvariable nicht verfügbar ist.

```html
<p>
  If the <code>env()</code> function is supported in your browser, this
  paragraph's text will have 50px of padding between it and the left border —
  but not the top, right and bottom. This is because the accompanying CSS is the
  equivalent of <code>padding: 0 0 0 50px</code>, because, unlike other CSS
  properties, user agent property names are case-sensitive.
</p>
```

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px)
    env(safe-area-inset-bottom, 50px) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

{{EmbedLiveSample("Using_the_fallback_value", "350px", "250px")}}

### Beispielwerte

```css
/* zero for all rectangular user agents */
padding: env(safe-area-inset-bottom, 50px);

/* 50px because UA properties are case sensitive */
padding: env(Safe-area-inset-bottom, 50px);

/* as if padding: '50px 20px' were set because x is not a valid environment variable */
padding: env(x, 50px 20px);

/* ignored because '50px, 20px' is not a valid padding value and x is not a valid environment variable */
padding: env(x, 50px, 20px);
```

Die Syntax des Fallbacks erlaubt, wie bei benutzerdefinierten Eigenschaften, Kommata. Wenn der Eigenschaftswert jedoch keine Kommata unterstützt, ist der Wert nicht gültig.

> [!NOTE]
> Vom User-Agent festgelegte Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass Inhalte in Desktop-PWAs nicht von Fensterschaltflächen verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fensterschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, wo die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die die Fenstersteuerleisten-Overlay-Funktion nicht unterstützen, wie mobile Geräte, werden die Fallback-Werte verwendet.

So sieht eine PWA, die auf einem Desktop-Gerät installiert ist, normalerweise aus:

![Illustration davon, wie eine PWA, die auf einem Desktop installiert ist, normalerweise aussieht, mit Fensterschaltflächen, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit der Fenstersteuerleisten-Overlay-Funktion decken die Webinhalte die gesamte Anwendungsfensterfläche ab, wobei die Fensterschaltflächen und PWA-Schaltflächen als Overlays angezeigt werden:

![Illustration davon, wie eine PWA, die auf einem Desktop installiert ist, mit der Fenstersteuerleisten-Overlay-Funktion aussieht, mit Fensterschaltflächen, keiner Titelleiste und Webinhalten, die sich über das gesamte Fenster erstrecken](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass die Kopfzeile nicht mit dem restlichen Inhalt scrollt und stattdessen mit den Fensterschaltflächen ausgerichtet bleibt, selbst auf Geräten/Browsers, die elastisches Überscrollen (auch als "Rubber Banding" bekannt) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties)
- [Anpassen des Fenstersteuerleisten-Overlays der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Aus der Box ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
