---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten Umgebungsvariable in Ihr CSS einzufügen, ähnlich wie die {{cssxref("var", "var()")}} Funktion und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen vom User-Agent und nicht vom Autor definiert werden und dass sie global für ein Dokument gelten, während benutzerdefinierte Eigenschaften auf das Element oder die Elemente beschränkt sind, auf denen sie deklariert werden.

Darüber hinaus kann die `env()` Funktion im Gegensatz zu benutzerdefinierten Eigenschaften, die nicht außerhalb von Deklarationen verwendet werden können, anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Teils eines Deskriptors verwendet werden (z.B. in [Media Query-Regeln](/de/docs/Web/CSS/@media)). Während sich die Spezifikation weiterentwickelt, könnte sie auch an anderen Stellen wie Selektoren verwendet werden.

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihren Inhalt in einem sicheren Bereich des Ansichtsfensters zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass der Inhalt auch für Betrachter mit nicht-rechteckigen Anzeigen sichtbar ist.

Ein häufiges Problem, das durch `env()` gelöst wird, ist das von Gerätelbenachrichtigungen, die Teile der Benutzeroberfläche einer App verdecken. Durch die Positionierung fester Elemente mit `env()` können Sie sicherstellen, dass sie in einem sicheren Bereich des Ansichtsfensters angezeigt werden.

Ein weiteres Anwendungsbeispiel für `env()` Variablen sind Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das Window Controls Overlay-Feature nutzen, um die gesamte Anwendungsfensteroberfläche zu nutzen. Mit den `titlebar-area-*` Werten können sie Elemente dort positionieren, wo sich normalerweise die Titelleiste befunden hätte, und sicherstellen, dass der Inhalt nicht mit den Fenstertasten überlappt.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine oberen, rechten, unteren und linken Einzüge vom Rand des Ansichtsfensters definieren, das sicher ist, um Inhalt hinein zu platzieren, ohne dass er durch die Form einer nicht-rechteckigen Anzeige abgeschnitten wird. Für rechteckige Ansichtsfenster, wie Ihren durchschnittlichen Laptop-Bildschirm, beträgt ihr Wert null. Für nicht-rechteckige Anzeigen — wie ein rundes Zifferblatt einer Uhr — bilden die vom User-Agent festgelegten vier Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den Wert `window-controls-overlay` für die [display_override](/de/docs/Web/Manifest/Reference/display_override) Eigenschaft verwendet, dann kann sie die `titlebar-area-*` Variablen nutzen, um sicherzustellen, dass Inhalte nicht mit den Fenstertasten (d.h. Minimieren, Maximieren und Schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen liefern Informationen über das Erscheinen der virtuellen Bildschirmtastatur. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einzüge vom Rand des Ansichtsfensters (die Einzüge für Breite und Höhe werden aus den anderen Einzügen berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind die vom User-Agent definierten Eigenschaftsnamen groß- und kleinschreibungssensitiv.

## Formale Syntax

{{CSSSyntax}}

## Nutzung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen und damit die `env()` Variablen zu aktivieren, müssen wir einen neuen Ansichtsfenster-Meta-Wert hinzufügen:

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

### Verwenden von env(), um sicherzustellen, dass Schaltflächen nicht durch das Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feststehende App-Werkzeugschaltflächen nicht durch Gerätebenachrichtigungen, die am unteren Bildschirmrand erscheinen, verdeckt werden. Auf dem Desktop beträgt `safe-area-inset-bottom` `0`. In Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält sie jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

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

### Verwenden des Fallback-Werts

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

Die Syntax des Fallbacks erlaubt, ähnlich wie bei benutzerdefinierten Eigenschaften, Kommas. Wenn der Eigenschaftswert jedoch keine Kommas unterstützt, ist der Wert nicht gültig.

> [!NOTE]
> User-Agent Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwenden von env(), um sicherzustellen, dass Inhalte nicht durch Fenstertasten in Desktop-PWAs verdeckt werden

Im folgenden Beispiel sorgt `env()` dafür, dass Inhalte, die in einer Desktop Progressive Web App, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, angezeigt werden, nicht durch die Fenstertasten des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, wo normalerweise die Titelleiste angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay-Feature nicht unterstützen, wie Mobilgeräte, werden die Fallback-Werte verwendet.

So sieht eine PWA, die auf einem Desktop-Gerät installiert ist, normalerweise aus:

![Illustration, wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fenstertasten, einer Titelleiste und Webinhalt darunter](desktop-pwa-window.png)

Mit dem Window Controls Overlay-Feature deckt der Webinhalt die gesamte Anwendungsfensteroberfläche ab, wobei die Fenstertasten und PWA-Schaltflächen als Overlays angezeigt werden:

![Illustration, wie eine auf dem Desktop installierte PWA mit dem Window Controls Overlay-Feature aussieht, mit Fenstertasten, ohne Titelleiste und Webinhalt, der das gesamte Fenster einnimmt](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht mit dem Rest des Inhalts scrollt und stattdessen mit den Fenstertasten ausgerichtet bleibt, selbst auf Geräten/Browsern, die elastisches Überscrollen (auch bekannt als Gummiband-Effekt) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS-Benutzereigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Passen Sie das Fenstersteuerungsoverlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
