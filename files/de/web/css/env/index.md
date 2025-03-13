---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 795124f434938b0c6016aa71044f2f2a19d38cb1
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer benutzerdefiniert definierten Umgebungsvariablen in Ihr CSS einzufügen, ähnlich wie die {{cssxref("var", "var()")}} Funktion und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen, statt von Autoren definiert zu werden, vom Benutzeragenten definiert sind und global für ein Dokument gelten, während benutzerdefinierte Eigenschaften auf das Element oder die Elemente beschränkt sind, auf denen sie deklariert wurden.

Darüber hinaus kann die `env()`-Funktion, im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, anstelle jedes Teils eines Eigenschaftswerts oder irgendeines Teils eines Deskriptors (z.B. in [Media-Query-Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Mit der Weiterentwicklung der Spezifikation könnte sie auch an anderen Stellen, wie in Selektoren, anwendbar sein.

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte dazu verwendet werden, sicherzustellen, dass Inhalte selbst bei nicht rechteckigen Displays sichtbar sind.

Ein häufiges Problem, das mit `env()` gelöst wird, besteht darin, dass Gerätemitteilungen Teile der Benutzeroberfläche einer Anwendung verdecken. Indem Sie feste Elemente mit `env()` positionieren, können Sie sicherstellen, dass sie in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()`-Variablen sind Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die die Window Controls Overlay-Funktion nutzen, um die gesamte Anwendungsfensterfläche auszunutzen. Mit den `titlebar-area-*` Werten können sie Elemente dort positionieren, wo sich die Titelleiste befunden hätte, und sicherstellen, dass der Inhalt nicht die Schaltflächen für die Fensterkontrolle überlappt.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine oberen, rechten, unteren und linken Einschnitte von der Kante des Viewports definieren, das sicher ist, Inhalte einzufügen, ohne das Risiko einzugehen, dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Bei rechteckigen Viewports, wie Ihrem durchschnittlichen Laptop-Monitor, ist ihr Wert null. Bei nicht rechteckigen Displays — wie einem runden Zifferblatt — bilden die vier vom Benutzeragenten festgelegten Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Wert verwendet, kann sie die `titlebar-area-*` Variablen verwenden, um sicherzustellen, dass Inhalte nicht mit den Fensterschaltflächen (d.h. Minimieren, Maximieren und Schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen liefern Informationen über das Erscheinen des Bildschirmtastatur. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einschnitte vom Rand des Viewports (die Breiten- und Höhen-Einschnitte werden aus den anderen Einschnitten berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind von Benutzeragenten definierte Eigenschaftsnamen case-sensitive.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen und so die Verwendung der `env()`-Variablen zu ermöglichen, müssen wir einen neuen Viewport-Meta-Wert hinzufügen:

```html
<meta name="viewport" content="viewport-fit=cover" />
```

Dann kann `env()` in Ihrem CSS verwendet werden:

```css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px)
    env(safe-area-inset-bottom, 20px) env(safe-area-inset-left, 20px);
}
```

## Beispiele

### Verwenden von env() um sicherzustellen, dass Schaltflächen nicht von der Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Werkzeugleistentasten nicht von Gerätebenachrichtigungen verdeckt werden, die unten auf dem Bildschirm erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` gleich `0`. Auf Geräten, die Benachrichtigungen unten auf dem Bildschirm anzeigen, wie iOS, enthält es jedoch einen Wert, der Platz für die Benachrichtigung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um eine Lücke zu schaffen, die auf diesem Gerät natürlich erscheint.

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

Das folgende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es erlaubt, einen Fallback-Wert anzugeben, falls die Umgebungsvariable nicht verfügbar ist.

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

Die Syntax des Fallbacks, wie die der benutzerdefinierten Eigenschaften, erlaubt Kommata. Aber wenn der Eigenschaftswert keine Kommata unterstützt, ist der Wert nicht gültig.

> [!NOTE]
> Benutzeragent-Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwenden von env() um sicherzustellen, dass Inhalte nicht von Fensterschaltflächen in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden und die das [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwenden, nicht von den Fensterschaltflächen des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die die Window Controls Overlay-Funktion nicht unterstützen, wie mobilen Geräten, werden die Fallback-Werte verwendet.

So sieht eine PWA auf einem Desktop-Gerät normalerweise aus:

![Illustration, wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fensterschaltflächen, einer Titelleiste und Web-Inhalten darunter](desktop-pwa-window.png)

Mit der Window Controls Overlay-Funktion decken die Web-Inhalte die gesamte Anwendungsfensterfläche ab, wobei die Fensterschaltflächen und PWA-Schaltflächen als Overlays angezeigt werden:

![Illustration, wie eine auf dem Desktop installierte PWA mit der Window Controls Overlay-Funktion aussieht, mit Fensterschaltflächen, ohne Titelleiste und Web-Inhalten über das gesamte Fenster verteilt](desktop-pwa-window-wco.png)

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
> Durch die Verwendung von `position:fixed` wird sichergestellt, dass der Header nicht mit dem Rest der Inhalte scrollt, sondern mit den Fensterschaltflächen ausgerichtet bleibt, auch auf Geräten/Browsern, die das elastische Überscrollen (auch bekannt als "Gummiband-Effekt") unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Anpassen des Fensterschaltflächen-Overlays der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Aus der Box ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
