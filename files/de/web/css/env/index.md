---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom Benutzeragenten definierten Umgebungsvariable in Ihr CSS einzufügen, ähnlich wie die {{cssxref("var", "var()")}} Funktion und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen global im Dokumentbereich definiert sind, während benutzerdefinierte Eigenschaften im Bereich des Elements liegen, auf dem sie deklariert werden.

Darüber hinaus kann, im Gegensatz zu benutzerdefinierten Eigenschaften, die nicht außerhalb von Deklarationen verwendet werden können, die `env()`-Funktion anstelle eines beliebigen Teils eines Eigenschaftswertes oder eines Deskriptors (z. B. in [Media Query-Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Mit der Weiterentwicklung der Spezifikation könnte sie auch an anderen Stellen, wie z.B. Selektoren, einsetzbar sein.

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihren Inhalt in einem sicheren Bereich des Viewports zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte genutzt werden, um sicherzustellen, dass der Inhalt für Betrachter auf nicht rechteckigen Displays sichtbar ist.

Ein häufiges Problem, das durch `env()` gelöst wird, ist, dass Gerätenotifikationen Teile der Benutzeroberfläche einer App überdecken können. Durch die Positionierung fixer Elemente mit `env()` können Sie sicherstellen, dass diese in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()`-Variablen sind Desktop-[Progressive-Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die Window Controls Overlay-Funktion nutzen, um den gesamten Anwendungsfensterbereich auszunutzen. Mithilfe der `titlebar-area-*` Werte können sie Elemente dort positionieren, wo sich die Titelleiste befunden hätte, und sicherstellen, dass der Inhalt nicht mit den Fenstersteuerungsknöpfen überlappt.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine oberen, rechten, unteren und linken Randabstände vom Rand des Viewports definieren, welches sicher ist, um Inhalte hineinzusetzen, ohne dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden könnten. Für rechteckige Viewports, wie Ihren durchschnittlichen Laptop-Bildschirm, ist ihr Wert gleich null. Für nicht-rechteckige Displays – wie ein rundes Zifferblatt – bilden die vier vom Benutzeragenten festgelegten Werte ein Rechteck, sodass der gesamte Inhalt innerhalb des Rechtecks sichtbar ist.
- `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
  - : Die maximalen Einsatzzonen der sicheren Bereiche stellen den statischen Maximalwert ihres dynamischen `safe-area-inset-*` Variablenäquivalents dar.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn ein Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Wert verwendet, kann es die `titlebar-area-*` Variablen verwenden, um sicherzustellen, dass der Inhalt nicht mit den Fenstersteuerungsknöpfen (d.h. minimieren, maximieren und schließen) überlappt.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen geben Informationen über das Erscheinungsbild der Bildschirmtastatur. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Randabstände vom Rand des Viewports (die Breiten- und Höhenränder werden aus den anderen Randabständen berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind vom Benutzeragenten definierte Eigenschaftsnamen case-sensitive.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen und so die Verwendung der `env()`-Variablen zu ermöglichen, müssen wir einen neuen Meta-Wert für das Viewport hinzufügen:

```html
<meta name="viewport" content="viewport-fit=cover" />
```

Anschließend können Sie `env()` in Ihrem CSS verwenden:

```css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
}
```

## Beispiele

### Verwenden von env(), um sicherzustellen, dass die Schaltflächen nicht von Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Schaltflächen nicht von Gerätebenachrichtigungen verdeckt werden, die am unteren Bildschirmrand erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Auf Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es jedoch einen Wert, der Raum für die Anzeige der Benachrichtigung lässt. Dies kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich wirkt.

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
  background-color: #eeeeee;
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

### Verwenden des Fallback-Werts

Das untenstehende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es erlaubt, einen Fallback-Wert anzugeben, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Fallbacks, ähnlich wie die der benutzerdefinierten Eigenschaften, erlaubt Kommata. Aber wenn der Eigenschaftswert keine Kommata unterstützt, ist der Wert ungültig.

> [!NOTE]
> Benutzeragenteneigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwenden von env(), um sicherzustellen, dass der Inhalt nicht von Fenstersteuerungsknöpfen in Desktop-PWAs verdeckt wird

Im folgenden Beispiel stellt `env()` sicher, dass der in einer Desktop-Progressive-Web-App angezeigte Inhalt, der die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungsknöpfen des Betriebssystems verdeckt wird. Die `titlebar-area-*` Werte definieren ein Rechteck, wo normalerweise die Titelleiste angezeigt worden wäre. Auf Geräten, die die Window Controls Overlay-Funktion nicht unterstützen, wie z.B. Mobilgeräte, werden die Fallback-Werte verwendet.

So sieht eine PWA in der Regel aus, die auf einem Desktop installiert ist:

![Illustration, wie eine auf einem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungsknöpfen, einer Titelleiste und Webinhalt darunter](desktop-pwa-window.png)

Mit der Window Controls Overlay-Funktion bedeckt der Webinhalt die ganze Fensteroberfläche der App, wobei die Fenstersteuerungen und PWA-Schaltflächen als Overlays angezeigt werden:

![Illustration, wie eine auf einem Desktop installierte PWA mit der Window Controls Overlay-Funktion aussieht, ohne Titelleiste, aber mit Fenstersteuerungsknöpfen und Webinhalt, der das ganze Fenster überspannt](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem restlichen Inhalt scrollt, sondern mit den Fenstersteuerungsknöpfen ausgerichtet bleibt, sogar auf Geräten/Browsers, die elastisches Überscrollen (auch bekannt als Rubber Banding) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzereigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Anpassen des Fensters Steuerungsoverlays Ihrer PWA-Titelleiste](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
