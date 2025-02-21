---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten Umgebungsvariable in Ihr CSS einzufügen, in ähnlicher Weise wie die {{cssxref("var", "var()")}} Funktion und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen, im Gegensatz zu den vom Autor definierten benutzerdefinierten Eigenschaften, global auf ein Dokument anstatt auf das bzw. die Elemente beschränkt sind, auf denen sie deklariert wurden.

Zusätzlich, im Gegensatz zu benutzerdefinierten Eigenschaften, die nicht außerhalb von Deklarationen verwendet werden können, kann die `env()` Funktion anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Teils eines Deskriptors (z.B. in [Media Query Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Da sich die Spezifikation weiterentwickelt, könnte sie auch an anderen Stellen wie Selektoren verwendet werden.

Ursprünglich von dem iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte auch für Benutzer von nicht rechteckigen Bildschirmen sichtbar sind.

Ein häufig gelöstes Problem durch `env()` ist beispielsweise, dass Gerätemitteilungen Teile der App-Benutzeroberfläche überdecken. Durch das Positionieren fester Elemente unter Verwendung von `env()` können Sie sicherstellen, dass diese in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()` Variablen sind Desktop-[Progressive-Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das Window Controls Overlay-Feature nutzen, um die gesamte Anwendungsfensterfläche auszunutzen. Mit den `titlebar-area-*` Werten können sie Elemente dort positionieren, wo die Titelleiste gewesen wäre, und sicherstellen, dass Inhalte nicht mit den Fenstersteuerungstasten überlappen.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine oberen, rechten, unteren und linken Einfügungen vom Rand des Viewports definieren, in das Inhalte eingefügt werden können, ohne dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Für rechteckige Viewports, wie z.B. einen durchschnittlichen Laptop-Monitor, beträgt ihr Wert null. Für nicht rechteckige Displays — wie beispielsweise eine runde Uhrenanzeige — bilden die vom User-Agent festgelegten vier Werte ein Rechteck, sodass alle darin enthaltenen Inhalte sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Wert verwendet, kann sie die `titlebar-area-*` Variablen verwenden, um sicherzustellen, dass Inhalte nicht mit den Fenstersteuerungstasten (d.h. Minimieren, Maximieren und Schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen liefern Informationen über das Erscheinen der virtuellen Bildschirmtastatur. Sie definieren ein Rechteck durch seine obere, rechte, untere und linke Einfügung vom Rand des Viewports (die Breiten- und Höhen-Einfügungen werden aus den anderen Einfügungen berechnet). Um mehr zu erfahren, siehe die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind die vom User-Agent definierten Eigenschaftsnamen groß- und kleinschreibungssensitiv.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen und uns so die Verwendung der `env()` Variablen zu ermöglichen, müssen wir einen neuen Viewport-Meta-Wert hinzufügen:

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

### Verwendung von env(), um sicherzustellen, dass Buttons nicht durch die Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Symbolleisten-Schaltflächen nicht durch Gerätemitteilungen verdeckt werden, die am unteren Bildschirmrand angezeigt werden. Auf dem Desktop ist `safe-area-inset-bottom` gleich `0`. In Geräten, die Mitteilungen am unteren Bildschirmrand anzeigen, wie z.B. iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Mitteilung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu schaffen, der auf diesem Gerät natürlich erscheint.

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

### Verwendung des Ersatzwertes

Das untenstehende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es Ihnen ermöglicht, einen Ersatzwert bereitzustellen, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Ersatzwertes, ähnlich der von benutzerdefinierten Eigenschaften, erlaubt Kommata. Jedoch, wenn der Eigenschaftswert keine Kommata unterstützt, ist der Wert ungültig.

> [!NOTE]
> User-Agent-Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht durch Fenstersteuerungstasten in Desktop-PWAs verdeckt werden

Im folgenden Beispiel sorgt `env()` dafür, dass in einer Desktop-Progressive Web App angezeigte Inhalte, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Fenstersteuerungstasten des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay-Feature nicht unterstützen, wie z. B. mobilen Geräten, werden die Ersatzwerte verwendet.

So sieht eine auf einem Desktop-Gerät installierte PWA normalerweise aus:

![Illustration, wie eine auf einem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungstasten, einer Titelleiste und Web-Inhalten darunter](desktop-pwa-window.png)

Mit dem Window Controls Overlay-Feature decken die Web-Inhalte die gesamte Anwendungsfenster-Fläche ab, wobei die Fenstersteuerungen und PWA-Schaltflächen als Überlagerungen dargestellt werden:

![Illustration, wie eine auf einem Desktop installierte PWA mit dem Window Controls Overlay-Feature aussieht, mit Fenstersteuerungstasten, keiner Titelleiste und Web-Inhalten, die das gesamte Fenster umspannen](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht zusammen mit dem Rest des Inhalts gescrollt wird und stattdessen mit den Fenstersteuerungstasten ausgerichtet bleibt, selbst auf Geräten/Browsers, die elastisches Überscrollen (auch als Gummibandering bekannt) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Passen Sie das Fenstersteuerungs-Overlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
