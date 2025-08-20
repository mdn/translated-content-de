---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 10f562a8a12f7bbf4b35b21de449c721ed756eb4
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten Umgebungsvariable in Ihr CSS einzufügen.

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

### Parameter

Die Syntax der `env()` Funktion ist wie folgt:

```plain
env(<environment-variable-name>, <fallback>)
```

Der `<environment-variable-name>` kann einer der folgenden sein:

- `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch ihre oberen, rechten, unteren und linken Einfassungen vom Rand des Viewports definieren, die sicher sind, um darin Inhalte zu platzieren, ohne dass das Risiko besteht, dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Bei rechteckigen Viewports, wie einem durchschnittlichen Laptop-Monitor, ist ihr Wert null. Bei nicht-rechteckigen Displays – wie einem runden Ziffernblatt – bilden die vier vom User-Agent gesetzten Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar sind.
- `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
  - : Die maximalen Einfassungs-Umgebungsvariablen des sicheren Bereichs repräsentieren den statischen Maximalwert ihres dynamischen Gegenstücks `safe-area-inset-*`.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Wert verwendet, kann sie die `titlebar-area-*` Variablen nutzen, um sicherzustellen, dass Inhalte nicht die Fenstersteuerungsknöpfe (d.h. minimieren, maximieren und schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen liefern Informationen über das Erscheinungsbild der onscreen virtuellen Tastatur. Sie definieren ein Rechteck durch ihre oberen, rechten, unteren und linken Einfassungen vom Rand des Viewports (die Breiten- und Höheneinfassungen werden aus den anderen Einfassungen berechnet). Um mehr zu erfahren, siehe die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Wie andere CSS-Benutzerdefinierte Eigenschaftsnamen sind User-Agent-definierte Umgebungsvariablennamen groß- und kleinschreibungssensitiv.

## Beschreibung

Die `env()` Funktion fügt den Wert einer vom User-Agent definierten Umgebungsvariable in Ihr CSS ein, ähnlich der {{cssxref("var", "var()")}} Funktion und [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen vom User-Agent definiert und nicht vom Autor definiert werden und global auf ein Dokument anwendbar sind, während benutzerdefinierte Eigenschaften auf die Elemente beschränkt sind, auf denen sie deklariert werden.

Außerdem kann im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, die `env()` Funktion anstelle von jedem Teil eines Eigenschaftswertes oder eines Deskriptors verwendet werden (z.B. in [Medienabfrage-Regeln](/de/docs/Web/CSS/@media)). Während sich die Spezifikation weiterentwickelt, kann sie auch an anderen Stellen wie Selektoren verwendet werden.

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte sogar für Betrachter sichtbar sind, die nicht-rechteckige Displays verwenden.

Ein häufiges Problem, das mit `env()` gelöst wird, ist, dass Gerätebenachrichtigungen einen Teil der Benutzeroberfläche der App verdecken. Durch das Positionieren von fixierten Elementen mit `env()` kann sichergestellt werden, dass sie in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()` Variablen sind Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die Windows Controls Overlay-Funktion verwenden, um die gesamte Anwendungsfenster-Oberfläche auszunutzen. Mit den `titlebar-area-*` Werten können Entwickler Elemente dort positionieren, wo die Titelleiste gewesen wäre, und sicherstellen, dass der Inhalt die Fenstersteuerungsknöpfe nicht überlappt.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen und somit die Verwendung der `env()` Variablen zu ermöglichen, müssen wir einen neuen Viewport-Meta-Wert hinzufügen:

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

### Verwendung von env(), um sicherzustellen, dass Buttons nicht durch Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass die feststehenden App-Toolbar-Buttons nicht durch Gerätebenachrichtigungen am unteren Bildschirmrand verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. In Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dies kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

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

### Verwendung des Fallback-Wertes

Im untenstehenden Beispiel wird der optionale zweite Parameter von `env()` verwendet, der es Ihnen ermöglicht, einen Fallback-Wert anzugeben, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Fallbacks erlaubt, wie bei benutzerdefinierten Eigenschaften, Kommata. Aber wenn der Eigenschaftswert keine Kommata unterstützt, ist der Wert ungültig.

> [!NOTE]
> User-Agent-Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht durch Fenstersteuerknöpfe in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Fenstersteuerknöpfe des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem normalerweise die Titelleiste angezeigt worden wäre. Auf Geräten, die die Windows Controls Overlay-Funktion nicht unterstützen, wie Mobilgeräte, werden die Fallback-Werte verwendet.

Hier ist, wie eine PWA, die auf einem Desktop-Gerät installiert ist, normalerweise aussieht:

![Illustration of what a PWA installed on desktop normally looks like, with window control buttons, a title bar, and web content below that](desktop-pwa-window.png)

Mit der Windows Controls Overlay-Funktion deckt der Webinhalt die gesamte Anwendungsfensterfläche ab, wobei die Fenstersteuer- und PWA-Buttons als Overlays angezeigt werden:

![Illustration of what a PWA installed on desktop looks like with the Window Controls Overlay feature, with window control buttons, no title bar, and web content spanning the whole window](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header beim Scrollen nicht mit dem Rest des Inhalts mitgeht, sondern mit den Fenstersteuerknöpfen ausgerichtet bleibt, selbst bei Geräten/Browsers, die elastisches Überscrollen (auch bekannt als Rubber Banding) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables/Using_environment_variables)
- [CSS-Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- {{CSSxRef("var")}}
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Passen Sie die Fenstersteuerungs-Overlay Ihrer PWA-Titelleiste an](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
