---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom Benutzer-Agent festgelegten Umgebungsvariablen in Ihr CSS einzufügen, ähnlich der {{cssxref("var", "var()")}}-Funktion und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen vom Benutzer-Agent festgelegt statt vom Autor definiert sind und global auf ein Dokument anwendbar sind, während benutzerdefinierte Eigenschaften auf das Element oder die Elemente beschränkt sind, auf denen sie deklariert wurden.

Darüber hinaus kann die `env()`-Funktion, im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, anstelle eines beliebigen Teils eines Eigenschaftswertes oder eines Teils eines Deskriptors (z. B. in [Media Query Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Während sich die Spezifikation weiterentwickelt, könnte sie auch an anderen Orten wie Selektoren einsetzbar sein.

Ursprünglich vom iOS-Browser zur Verfügung gestellt, um Entwicklern zu ermöglichen, ihren Inhalt in einem sicheren Bereich des Ansichtsfensters zu platzieren, können die in der Spezifikation definierten Werte `safe-area-inset-*` verwendet werden, um sicherzustellen, dass Inhalte auch für Betrachter, die nicht-rechteckige Displays verwenden, sichtbar sind.

Ein häufiges Problem, das durch `env()` gelöst wird, ist beispielsweise, dass Gerätemitteilungen einen Teil der Benutzeroberfläche einer App verdecken. Durch das Positionieren von fixierten Elementen mit `env()` können Sie sicherstellen, dass sie in einem sicheren Bereich des Ansichtsfensters angezeigt werden.

Ein weiterer Anwendungsfall für `env()`-Variablen sind Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das Feature "Window Controls Overlay" verwenden, um den gesamten verfügbaren Fensterbereich der Anwendung zu nutzen. Mit den `titlebar-area-*` Werten können sie Elemente dort positionieren, wo normalerweise die Titelleiste gewesen wäre, und sicherstellen, dass Inhalte die Fenstertasten nicht überdecken.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine Ober-, Rechts-, Unter- und Linkseinsätze vom Rand des Ansichtsfensters definieren, das sicher ist, um Inhalte ohne Risiko, dass diese von der Form eines nicht-rechteckigen Displays abgeschnitten werden, einzufügen. Für rechteckige Ansichtsfenster, wie der durchschnittliche Laptop-Monitor, ist ihr Wert gleich null. Bei nicht-rechteckigen Displays — wie ein rundes Uhrenzifferblatt — bilden die vier vom Benutzer-Agent festgelegten Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar sind.
- `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
  - : Die maximalen Einsatzzonen der sicheren Bereiche Umgebungsvariablen repräsentieren den statischen Maximalwert ihres dynamischen `safe-area-inset-*` Variablenpendants.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWA auf Desktop-Geräten. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Wert verwendet, kann sie die `titlebar-area-*` Variablen verwenden, um sicherzustellen, dass Inhalte nicht mit den Fenstertasten (d.h. minimieren, maximieren und schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen liefern Informationen über das Erscheinen der Bildschirmtastatur. Sie definieren ein Rechteck durch ihre Ober-, Rechts-, Unter- und Linkseinsätze vom Rand des Ansichtsfensters (die Breiten- und Höheneinsätze werden aus den anderen Einsätzen berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind benutzer-agent-definierte Eigenschaftsnamen case-sensitiv.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser zu sagen, dass er den gesamten verfügbaren Platz auf dem Bildschirm nutzen soll, und somit die Verwendung der `env()`-Variablen zu ermöglichen, müssen wir einen neuen Ansichtsfenster-Meta-Wert hinzufügen:

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

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht durch Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Schaltflächen nicht durch Gerätemitteilungen am unteren Bildschirmrand verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. In Geräten jedoch, die Mitteilungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es einen Wert, der Platz für die Mitteilung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um auf dem Gerät einen Spalt zu schaffen, der natürlich erscheint.

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

Das unten stehende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es Ihnen ermöglicht, einen Fallback-Wert anzugeben, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Fallbacks erlaubt, wie die von benutzerdefinierten Eigenschaften, Kommata. Wenn jedoch der Eigenschaftswert keine Kommata unterstützt, ist der Wert ungültig.

> [!NOTE]
> Benutzeragenteneigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht durch Fenstertasten in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop Progressive Web App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Fenstertasten des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, wo normalerweise die Titelleiste angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay-Feature nicht unterstützen, wie mobile Geräte, werden die Fallback-Werte verwendet.

So sieht in der Regel eine auf einem Desktop-Gerät installierte PWA aus:

![Abbildung, wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fenstertasten, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit dem Window Controls Overlay-Feature decken die Webinhalte die gesamte Anwendungsfensteroberfläche ab, mit den Fenstertasten und PWA-Schaltflächen als Überlagerungen angezeigt:

![Abbildung, wie eine auf dem Desktop installierte PWA mit dem Window Controls Overlay-Feature aussieht, mit Fenstertasten, ohne Titelleiste und Webinhalten, die das gesamte Fenster ausfüllen](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest der Inhalte scrollt, sondern mit den Fenstertasten ausgerichtet bleibt, selbst auf Geräten/Browsers, die eine elastische Überscroll- (auch bekannt als "Rubber Banding")-Unterstützung haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Anpassen der Fenstertastenüberlagerung der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Inhalt in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Aus der Box ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
