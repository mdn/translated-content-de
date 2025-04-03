---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom Benutzeragenten definierten Umgebungsvariablen in Ihr CSS einzufügen, ähnlich wie die {{cssxref("var", "var()")}} Funktion und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen vom Benutzeragenten und nicht vom Autor definiert werden und global für ein Dokument gelten, während benutzerdefinierte Eigenschaften auf das Element oder die Elemente beschränkt sind, auf denen sie deklariert werden.

Zusätzlich kann, im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, die `env()` Funktion anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Deskriptors (z. B. in [Media-Query-Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Da sich die Spezifikation weiterentwickelt, könnte sie auch an anderen Stellen wie Selektoren verwendet werden.

Ursprünglich von dem iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihren Inhalt in einem sicheren Bereich des Viewports zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte dazu verwendet werden, sicherzustellen, dass Inhalte auch für Betrachter mit nicht rechteckigen Anzeigen sichtbar sind.

Ein häufig durch `env()` gelöstes Problem ist beispielsweise, dass Gerätemitteilungen Teile der Benutzeroberfläche der App abdecken. Durch die Positionierung von fixierten Elementen mit `env()` können Sie sicherstellen, dass sie in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()` Variablen betrifft Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das Window Controls Overlay-Feature verwenden, um die gesamte Anwendungsfensterfläche auszunutzen. Mit den `titlebar-area-*` Werten können sie Elemente dort positionieren, wo die Titelleiste gewesen wäre und sicherstellen, dass Inhalte nicht von den Fenstertasten überdeckt werden.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine oberen, rechten, unteren und linken Einfassungen vom Rand des Viewports definieren, in das Inhalte eingefügt werden können, ohne dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Für rechteckige Viewports, wie Ihren durchschnittlichen Laptop-Monitor, ist ihr Wert gleich null. Für nicht rechteckige Displays – wie ein rundes Uhrendisplay – bilden die vier vom Benutzeragenten festgelegten Werte ein Rechteck, sodass alle darin enthaltenen Inhalte sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktopgeräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Wert verwendet, kann sie die `titlebar-area-*` Variablen verwenden, um sicherzustellen, dass Inhalte die Fenstertasten (d.h. Minimieren, Maximieren und Schließen) nicht überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen bieten Informationen über das Erscheinen der virtuellen On-Screen-Tastatur. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einrückungen vom Rand des Viewports (die Breiten- und Höhen-Einrückungen werden von den anderen Einrückungen berechnet). Um mehr zu erfahren, siehe die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind von Benutzeragenten definierte Eigenschaftsnamen groß- und kleinschreibungssensitiv.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen und uns so die Verwendung der `env()` Variablen zu ermöglichen, müssen wir einen neuen Viewport-Meta-Wert hinzufügen:

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

### Verwendung von env(), um sicherzustellen, dass Buttons nicht von Geräte-UI überdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass fixierte App-Toolbar-Buttons nicht von Gerätebenachrichtigungen am unteren Bildschirmrand überdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Bei Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dies kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

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

Das nachfolgende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es Ihnen ermöglicht, einen Fallback-Wert anzugeben, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Fallbacks erlaubt, wie bei benutzerdefinierten Eigenschaften, Kommas. Aber wenn der Eigenschaftswert keine Kommas unterstützt, ist der Wert nicht gültig.

> [!NOTE]
> Benutzeragent-Eigenschaften werden nicht von der [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fenstersteuerungstasten in Desktop-PWAs überdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungstasten des Betriebssystems überdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem normalerweise die Titelleiste angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay-Feature nicht unterstützen, wie Mobilgeräte, werden die Fallback-Werte verwendet.

So sieht eine auf einem Desktopgerät installierte PWA normalerweise aus:

![Illustration, wie eine auf einem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungstasten, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Mit dem Window Controls Overlay-Feature bedecken die Webinhalte die gesamte Fensterfläche der App, wobei die Fenstersteuerungs- und PWA-Tasten als Overlays angezeigt werden:

![Illustration, wie eine auf einem Desktop installierte PWA mit dem Window Controls Overlay-Feature aussieht, mit Fenstersteuerungstasten, ohne Titelleiste und Webinhalten, die sich über das gesamte Fenster erstrecken](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` sorgt dafür, dass der Header nicht mit dem restlichen Inhalt scrollt, sondern mit den Fenstersteuerungstasten ausgerichtet bleibt, selbst auf Geräten/Browsern, die die elastische Überlaufsteuerung (auch als "Gummiband-Effekt" bekannt) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwenden von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Passen Sie das Fenstersteuerungsoverlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Ausbrechen aus der Box](https://alistapart.com/article/breaking-out-of-the-box/)
