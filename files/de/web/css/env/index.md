---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{CSSRef}}

Die **`env()`**- [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer vom User-Agent definierten Umgebungsvariable in Ihr CSS einzufügen, ähnlich wie die {{cssxref("var", "var()")}}-Funktion und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen, im Gegensatz zu benutzerdefinierten Eigenschaften, nicht vom Autor, sondern vom User-Agent definiert sind und global auf ein Dokument angewendet werden, während benutzerdefinierte Eigenschaften auf das/die Element(e) beschränkt sind, auf denen sie definiert wurden.

Darüber hinaus können im Gegensatz zu benutzerdefinierten Eigenschaften, die nicht außerhalb von Deklarationen verwendet werden dürfen, die `env()`-Funktion und ihre Werte in beliebigen Teilen eines Eigenschaftswerts verwendet werden, sowie in Deskriptoren (z. B. in [Media Query-Regeln](/de/docs/Web/CSS/@media)). Mit der Weiterentwicklung der Spezifikation könnte sie auch an anderen Stellen wie Selektoren einsetzbar sein.

Ursprünglich von Browsern auf iOS eingeführt, um Entwicklern die Platzierung von Inhalten in einem sicheren Bereich des Viewports zu ermöglichen, können die im Standard definierten `safe-area-inset-*`-Werte verwendet werden, um sicherzustellen, dass der Inhalt auch bei nicht-rechteckigen Displays sichtbar bleibt.

Ein häufiges Problem, das `env()` löst, besteht darin, dass Benachrichtigungen von Geräten die Benutzeroberfläche einer Anwendung überdecken können. Durch das Positionieren fixer Elemente mithilfe von `env()` können Sie sicherstellen, dass sie in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()`-Variablen besteht in [Progressiven Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs) auf Desktop-Geräten, die die Window Controls Overlay-Funktion nutzen, um die gesamte Anwendungsfensterfläche besser zu verwenden. Mithilfe der `titlebar-area-*`-Werte können Elemente dort positioniert werden, wo normalerweise die Titelleiste gewesen wäre, und gleichzeitig sichergestellt werden, dass Inhalte nicht mit den Fensterschaltflächen (Minimieren, Maximieren, Schließen) überschneiden.

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
  - : Die `safe-area-inset-*`-Variablen sind vier Umgebungsvariablen, die ein Rechteck definieren anhand der Abstände vom oberen, rechten, unteren und linken Rand des Viewports. In diesen Bereich können Inhalte eingefügt werden, ohne riskieren zu müssen, dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Bei rechteckigen Viewports, wie z. B. bei einem durchschnittlichen Laptop-Monitor, sind ihre Werte gleich null. Bei nicht-rechteckigen Displays – zum Beispiel bei einer runden Uhrenanzeige – bilden die vom User-Agent definierten vier Werte ein Rechteck, sodass alle Inhalte innerhalb dieses Rechtecks sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*`-Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert werden. Wenn eine PWA die `window-controls-overlay`-Werte in der [display_override](/de/docs/Web/Manifest/Reference/display_override)-Eigenschaft verwendet, können die `titlebar-area-*`-Variablen verwendet werden, um sicherzustellen, dass Inhalte nicht mit den Fensterschaltflächen überlagert werden.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*`-Variablen stellen Informationen über die Darstellung der Bildschirmtastatur bereit. Sie definieren ein Rechteck anhand der oberen, rechten, unteren und linken Einrückungen vom Rand des Viewports (die Breite und Höhe der Einrückungen werden aus den anderen berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind vom User-Agent definierte Eigenschaftsnamen case-sensitive.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, dass der gesamte verfügbare Bildschirmplatz genutzt werden soll und somit die Verwendung von `env()`-Variablen zu ermöglichen, müssen wir einen neuen Meta-Wert für den Viewport hinzufügen:

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

### Verwendung von env(), um zu verhindern, dass Schaltflächen durch Gerät-Benachrichtigungen verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass fixierte Toolbar-Schaltflächen in einer App nicht durch Gerät-Benachrichtigungen verdeckt werden, die unten auf dem Bildschirm erscheinen. Auf dem Desktop hat `safe-area-inset-bottom` den Wert `0`. Bei Geräten wie iOS, die Benachrichtigungen am unteren Bildschirmrand anzeigen, enthält dieser Wert jedoch eine Lücke, in der die Benachrichtigung angezeigt werden kann. Dies kann dann für den Wert von {{cssxref("padding-bottom")}} verwendet werden, um eine natürliche Lücke auf dem Gerät zu schaffen.

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

Das folgende Beispiel zeigt die Verwendung des optionalen zweiten Parameters von `env()`, mit dem Sie einen Fallback-Wert angeben können, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Fallback-Werts erlaubt, ähnlich wie bei benutzerdefinierten Eigenschaften, Kommata. Allerdings, wenn der Eigenschaftswert keine Kommata unterstützt, ist der Wert ungültig.

> [!NOTE]
> User-Agent-Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all)-Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fensterschaltflächen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass Inhalte, die in einer Desktop-PWA mit der [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) angezeigt werden, nicht von den Fensterschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*`-Werte definieren ein Rechteck, an dessen Position normalerweise die Titelleiste angezeigt würde. Auf Geräten, die die Window Controls Overlay-Funktion nicht unterstützen, wie z. B. Mobilgeräte, werden die Fallback-Werte verwendet.

So sieht eine PWA auf einem Desktop-Gerät normalerweise aus:

![Illustration einer PWA auf einem Desktop wie üblich mit Fensterschaltflächen, Titelleiste und darunterliegendem Webinhalt](desktop-pwa-window.png)

Mit der Window Controls Overlay-Funktion erstreckt sich der Webinhalt über die gesamte Fensterfläche, und die Fensterschaltflächen und PWA-Schaltflächen werden als Overlays angezeigt:

![Illustration einer PWA auf einem Desktop mit der Window Controls Overlay-Funktion, mit Fensterschaltflächen, keiner Titelleiste und Webinhalt, der die gesamte Fensteroberfläche einnimmt](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` stellt sicher, dass der Header nicht zusammen mit dem restlichen Inhalt scrollt, sondern an den Fensterschaltflächen ausgerichtet bleibt, selbst bei Geräten/Browsers, die elastisches Überscrollen (auch bekannt als rubber banding) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS Custom Properties (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Anpassen des Fensterschaltflächen-Overlays der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Ausbrechen aus dem Rahmen](https://alistapart.com/article/breaking-out-of-the-box/)
