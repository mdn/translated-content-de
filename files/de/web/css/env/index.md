---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer vom Benutzeragenten definierten Umgebungsvariablen in Ihr CSS einzufügen, ähnlich wie die {{cssxref("var", "var()")}} Funktion und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen vom Benutzeragenten und nicht vom Autor definiert sind und global auf ein Dokument angewendet werden, während benutzerdefinierte Eigenschaften auf das Element/die Elemente beschränkt sind, auf denen sie deklariert werden.

Darüber hinaus, im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, kann die `env()`-Funktion überall in einem Eigenschaftswert verwendet werden oder in jedem Teil eines Deskriptors (z. B. in [Media Query Regeln](/de/docs/Web/CSS/@media)). Während sich die Spezifikation weiterentwickelt, könnte sie auch an anderen Stellen, z. B. in Selektoren, verwendbar werden.

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Ansichtsfensters zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte auch für Betrachter mit nicht-rechteckigen Anzeigen sichtbar sind.

Ein häufiges Problem, das durch `env()` gelöst wird, ist das Überdecken von Teilen der Benutzeroberfläche einer App durch Gerätebenachrichtigungen. Indem Sie feste Elemente mit `env()` positionieren, können Sie sicherstellen, dass sie in einem sicheren Bereich des Ansichtsfensters angezeigt werden.

Ein weiterer Anwendungsfall für `env()`-Variablen sind Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die Funktion "Window Controls Overlay" verwenden, um die gesamte Fensterfläche der Anwendung auszunutzen. Mit den `titlebar-area-*` Werten können sie Elemente dort positionieren, wo normalerweise die Titelleiste wäre, und sicherstellen, dass der Inhalt nicht mit den Fensterschaltflächen kollidiert.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine oberen, rechten, unteren und linken Einzüge vom Rand des Ansichtsfensters definieren, in das Inhalte eingefügt werden können, ohne das Risiko, durch die Form eines nicht-rechteckigen Displays abgeschnitten zu werden. Bei rechteckigen Ansichtsfenstern, wie einem durchschnittlichen Laptopmonitor, ist ihr Wert gleich null. Bei nicht-rechteckigen Displays - wie einem runden Uhrendisplay - bilden die vom Benutzeragenten festgelegten vier Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktopgeräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Manifest/Reference/display_override) Wert verwendet, kann sie die `titlebar-area-*` Variablen nutzen, um sicherzustellen, dass der Inhalt nicht mit den Fensterschaltflächen (z.B. Minimieren, Maximieren und Schließen) überlappt.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen liefern Informationen über das Erscheinen der virtuellen Bildschirmtastatur. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einzüge vom Rand des Ansichtsfensters (die Breiten- und Höhen-Einzüge werden aus den anderen Einzügen berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind vom Benutzeragenten definierte Eigenschaftsnamen groß- und kleinschreibungssensitiv.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen und uns so zu ermöglichen `env()`-Variablen zu verwenden, müssen wir einen neuen Meta-Wert für das Ansichtsfenster hinzufügen:

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

### Nutzung von env(), um sicherzustellen, dass Schaltflächen nicht durch die Benutzeroberfläche des Geräts verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste Toolbar-Schaltflächen einer App nicht durch Gerätemitteilungen am unteren Bildschirmrand verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Auf Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie z. B. iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dies kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

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

### Verwendung des Fallback-Werts

Das folgende Beispiel nutzt den optionalen zweiten Parameter von `env()`, mit dem Sie einen Fallback-Wert angeben können, falls die Umgebungsvariable nicht verfügbar ist.

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
> Benutzeragenten-Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Nutzung von env(), um sicherzustellen, dass Inhalte nicht von Fensterkontrollschaltflächen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Fensterschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem normalerweise die Titelleiste angezeigt würde. Auf Geräten, die die Funktion "Window Controls Overlay" nicht unterstützen, wie Mobilgeräte, werden die Fallback-Werte verwendet.

So sieht eine auf einem Desktop-Gerät installierte PWA normalerweise aus:

![Illustration, wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fensterschaltflächen, einer Titelleiste und darunter angezeigten Webinhalten](desktop-pwa-window.png)

Mit der Funktion "Window Controls Overlay" decken die Webinhalte die gesamte Fensterfläche der App ab, mit den Fensterschaltflächen und PWA-Schaltflächen, die als Overlays angezeigt werden:

![Illustration, wie eine auf dem Desktop installierte PWA mit der Funktion "Window Controls Overlay" aussieht, mit Fensterschaltflächen, keiner Titelleiste und Webinhalten, die das gesamte Fenster ausfüllen](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest des Inhalts scrollt, sondern stattdessen mit den Fensterschaltflächen ausgerichtet bleibt, selbst auf Geräten/Browsers, die ein elastisches Überscrollen unterstützen (auch bekannt als Gummiband-Effekt).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties)
- [Passen Sie das "Window Controls Overlay" der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Aus der Box ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
