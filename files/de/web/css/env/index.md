---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer von der Benutzerumgebung definierten Umgebungsvariablen in Ihr CSS einzufügen, ähnlich der {{cssxref("var", "var()")}} Funktion und [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen, im Gegensatz zu von Autoren definierten Variablen, von der Benutzerumgebung definiert und global für ein Dokument gültig sind, während benutzerdefinierte Eigenschaften auf das/die Element(e) beschränkt sind, auf denen sie deklariert wurden.

Zudem, im Gegensatz zu benutzerdefinierten Eigenschaften, die nicht außerhalb von Deklarationen verwendet werden können, kann die `env()` Funktion anstelle eines beliebigen Teils einer Eigenschaftswertes oder eines Deskriptors verwendet werden (z.B. in [Media Query Regeln](/de/docs/Web/CSS/@media)). Wenn sich die Spezifikation weiterentwickelt, könnte sie auch an anderen Stellen wie Selektoren genutzt werden.

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihren Inhalt in einem sicheren Bereich des Viewports zu platzieren, können die im Standard definierten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte auch für Betrachter mit nicht-rechteckigen Displays sichtbar sind.

Ein häufiges Problem, das durch `env()` gelöst wird, ist das Überdecken von Teilen der App-Benutzeroberfläche durch Gerätemitteilungen. Durch das Positionieren fester Elemente mit `env()` kann sichergestellt werden, dass sie in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()` Variablen sind [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) auf dem Desktop, die das Window Controls Overlay-Feature nutzen, um die gesamte Anwendungsfensterfläche auszunutzen. Mithilfe der `titlebar-area-*` Werte können sie Elemente dort positionieren, wo die Titelleiste gewesen wäre, und sicherstellen, dass Inhalte nicht mit den Fenstertasten überlagert werden.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine Einzüge oben, rechts, unten und links vom Rand des Viewports definieren, in das Inhalte eingefügt werden können, ohne dass diese durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Für rechteckige Viewports, wie bei einem durchschnittlichen Laptop-Monitor, ist ihr Wert gleich null. Bei nicht-rechteckigen Displays — wie einem runden Uhrenzifferblatt — bilden die vom Benutzeragenten festgelegten vier Werte ein Rechteck, sodass alle Inhalte innerhalb dieses Rechtecks sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Manifest/display_override) Wert verwendet, kann sie die `titlebar-area-*` Variablen verwenden, um sicherzustellen, dass die Inhalte nicht mit den Fenstertasten (d.h. Minimieren, Maximieren und Schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen geben Informationen über das Erscheinen der virtuellen Bildschirmtastatur. Sie definieren ein Rechteck durch seine Einzüge oben, rechts, unten und links vom Rand des Viewports (die Breiten- und Höhen-Einzüge werden aus den anderen Einzügen berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Anders als bei anderen CSS-Eigenschaften sind von Benutzeragenten definierte Eigenschaftsnamen groß-/kleinschreibungssensitiv.

### Formal Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen, und damit die Verwendung der `env()` Variablen zu ermöglichen, müssen wir einen neuen Viewport-Meta-Wert hinzufügen:

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

### Verwendung von env(), um sicherzustellen, dass Tasten nicht durch das Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Tasten nicht durch Gerätemitteilungen, die am unteren Rand des Bildschirms erscheinen, verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Bei Geräten, die Mitteilungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es einen Wert, der Platz für die Anzeige der Mitteilung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um auf diesem Gerät einen natürlich erscheinenden Abstand zu schaffen.

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

Das untenstehende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es ermöglicht, einen Fallback-Wert anzugeben, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Fallbacks erlaubt, wie auch bei benutzerdefinierten Eigenschaften, Kommata. Aber, wenn der Eigenschaftswert keine Kommata unterstützt, ist der Wert ungültig.

> [!NOTE]
> Von Benutzeragenten definierte Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht durch Fenstertasten in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive Web App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) nutzt, nicht durch die Fenstertasten des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, wo die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay Feature nicht unterstützen, wie mobile Geräte, werden die Fallback-Werte verwendet.

So sieht eine PWA, die auf einem Desktop-Gerät installiert ist, normalerweise aus:

![Illustration, wie eine PWA, die auf einem Desktop installiert ist, normalerweise aussieht, mit Fenstertasten, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit dem Window Controls Overlay Feature bedecken die Webinhalte die gesamte Anwendungsfensterfläche, wobei die Fenstertasten und PWA-Tasten als Überlagerungen angezeigt werden:

![Illustration, wie eine PWA, die auf einem Desktop installiert ist, mit dem Window Controls Overlay Feature aussieht, mit Fenstertasten, ohne Titelleiste und Webinhalten, die das gesamte Fenster ausfüllen](desktop-pwa-window-wco.png)

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
> Durch die Verwendung von `position:fixed` wird sichergestellt, dass der Header nicht mit dem restlichen Inhalt scrollt, sondern mit den Fenstertasten ausgerichtet bleibt, auch auf Geräten/Browsers, die elastisches Overscrollen unterstützen (auch als Rubber Banding bekannt).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS Custom Properties (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties)
- [Anpassen der Fenstersteuerungsüberlagerung der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
