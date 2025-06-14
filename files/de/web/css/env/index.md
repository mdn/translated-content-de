---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 0aacec9ffdd36089909527e1668967ca91363ab1
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten Umgebungsvariable in Ihr CSS einzufügen, ähnlich wie die Funktion {{cssxref("var", "var()")}} und die [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen vom User-Agent und nicht vom Autor definiert und global auf ein Dokument anwendbar sind, während benutzerdefinierte Eigenschaften auf das Element beschränkt sind, auf dem sie deklariert werden.

Darüber hinaus, im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, kann die `env()`-Funktion anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Deskriptors (z. B. in [Media-Query-Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Während sich die Spezifikation weiterentwickelt, kann sie auch an anderen Stellen wie in Selektoren verwendet werden.

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern die Platzierung ihrer Inhalte in einem sicheren Bereich des Viewports zu ermöglichen, können die im Spezifikationsdokument festgelegten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte selbst für Benutzer von nicht-rechteckigen Displays sichtbar sind.

Ein häufiges Problem, das durch `env()` gelöst wird, ist, dass Gerätebenachrichtigungen Teile der Benutzeroberfläche einer App verdecken. Durch die Platzierung von festen Elementen mit `env()` können Sie sicherstellen, dass diese in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()`-Variablen ist für Desktop [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das Feature `Window Controls Overlay` nutzen, um die vollständige Fensterfläche der Anwendung auszunutzen. Mithilfe der `titlebar-area-*` Werte können Elemente dort positioniert werden, wo sich die Titelleiste befunden hätte, um sicherzustellen, dass der Inhalt nicht mit den Fenstersteuerungsknöpfen überlappt.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine oberen, rechten, unteren und linken Abstände vom Rand des Viewports definieren, die sicher für Inhalte genutzt werden können, ohne Gefahr zu laufen, durch die Form eines nicht-rechteckigen Displays abgeschnitten zu werden. Bei rechteckigen Viewports, wie bei einem durchschnittlichen Laptop-Monitor, ist ihr Wert gleich null. Bei nicht-rechteckigen Displays – wie einem runden Uhrendisplay – bilden die vom User-Agent gesetzten vier Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar sind.
- `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
  - : Die maximalen Einfügungsumgebungsvariablen des sicheren Bereichs repräsentieren den statischen Maximalwert ihres dynamischen Gegenstücks `safe-area-inset-*`.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den Wert `window-controls-overlay` im [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) verwendet, können die `titlebar-area-*` Variablen genutzt werden, um sicherzustellen, dass Inhalte nicht mit den Fenstersteuerungsknöpfen (d.h. Minimieren, Maximieren und Schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen geben Informationen über das Erscheinen der Bildschirmtastatur an. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Abstände vom Rand des Viewports (die Breiten- und Höhenabstände werden aus den anderen Einfügungen berechnet). Um mehr zu erfahren, siehe die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind vom User-Agent definierte Eigenschaftsnamen Groß- und Kleinschreibung empfindlich.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Raum auf dem Bildschirm zu nutzen und uns so die Verwendung von `env()`-Variablen zu ermöglichen, müssen wir einen neuen Viewport-Meta-Wert hinzufügen:

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

### Verwendung von env() um sicherzustellen, dass Buttons nicht von der Benutzeroberfläche des Geräts verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Buttons nicht von Gerätbehinweisungen am unteren Bildschirmrand verdeckt werden. Auf dem Desktop beträgt `safe-area-inset-bottom` `0`. Auf Geräten jedoch, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie z. B. iOS, enthält es einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dieser kann dann in den Wert für {{cssxref("padding-bottom")}} eingefügt werden, um eine Lücke zu erzeugen, die auf diesem Gerät natürlich wirkt.

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

Das folgende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es Ihnen ermöglicht, einen Fallback-Wert bereitzustellen, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Fallbacks erlaubt, genauso wie die der benutzerdefinierten Eigenschaften, Kommata. Wenn der Eigenschaftswert jedoch keine Kommata unterstützt, ist der Wert ungültig.

> [!NOTE]
> Benutzeragenteneigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env() um sicherzustellen, dass Inhalte nicht von Fenstersteuerungsknöpfen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop Progressive Web App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungsknöpfen des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die das Fenstersteuerungs-Overlay-Feature nicht unterstützen, wie z. B. Mobilgeräte, werden die Fallback-Werte verwendet.

So sieht eine auf einem Desktopgerät installierte PWA normalerweise aus:

![Illustration, wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungsknöpfen, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit dem Fenstersteuerungs-Overlay-Feature decken die Webinhalte die gesamte Fensterfläche der App ab, während die Fenstersteuerungs- und PWA-Knöpfe als Overlays angezeigt werden:

![Illustration, wie eine auf dem Desktop installierte PWA mit dem Fenstersteuerungs-Overlay-Feature aussieht, mit Fenstersteuerungsknöpfen, keiner Titelleiste und Webinhalten über das gesamte Fenster spannenden](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` sorgt dafür, dass der Header nicht mit dem restlichen Inhalt scrollt, sondern auf Höhe der Fenstersteuerungsknöpfe bleibt, sogar auf Geräten/Browsers die elastisches Überscrollen (auch bekannt als Gummibandeffekt) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS-benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Passen Sie das Fenstersteuerungs-Overlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Zeige Inhalte in der Titelleiste an](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Ausbrechen aus dem Kasten](https://alistapart.com/article/breaking-out-of-the-box/)
