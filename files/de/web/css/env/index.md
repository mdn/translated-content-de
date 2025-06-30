---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann verwendet werden, um den Wert einer vom Benutzeragenten definierten Umgebungsvariable in Ihr CSS einzufügen, ähnlich der {{cssxref("var", "var()")}} Funktion und [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen vom Benutzeragenten und nicht vom Autor definiert sind und global für ein Dokument gelten, während benutzerdefinierte Eigenschaften auf das Element oder die Elemente beschränkt sind, auf denen sie deklariert werden.

Darüber hinaus kann die `env()` Funktion im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Deskriptors (z. B. in [Media-Query-Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Mit der Weiterentwicklung der Spezifikation könnte sie auch an anderen Stellen wie Selektoren verwendet werden.

Ursprünglich vom iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihren Inhalt in einem sicheren Bereich des Ansichtsfensters zu platzieren, können die im Spezifikationsdokument definierten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass der Inhalt auch für Benutzer mit nicht rechteckigen Displays sichtbar ist.

Ein häufiges Problem, das durch `env()` gelöst wird, ist, dass Gerätebenachrichtigungen einen Teil der Benutzeroberfläche der App überdecken. Indem Sie feste Elemente mit `env()` positionieren, können Sie sicherstellen, dass sie in einem sicheren Bereich des Ansichtsfensters angezeigt werden.

Ein weiterer Anwendungsfall für `env()` Variablen sind Desktop [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das Fenstersteuerungs-Overlay-Feature nutzen, um die gesamte Anwendungsfensteroberfläche auszunutzen. Mithilfe der `titlebar-area-*` Werte können sie Elemente dort positionieren, wo die Titelleiste gewesen wäre, und sicherstellen, dass der Inhalt nicht mit den Fenstersteuerungsschaltflächen überlappt.

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
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch ihre oberen, rechten, unteren und linken Einzüge vom Rand des Ansichtsfensters definieren, in das der Inhalt eingefügt werden kann, ohne dass er durch die Form eines nicht rechteckigen Displays abgeschnitten wird. Für rechteckige Ansichtsfenster, wie etwa ein durchschnittlicher Laptop-Bildschirm, ist ihr Wert gleich null. Bei nicht rechteckigen Displays - wie etwa einem runden Zifferblatt - bilden die vier vom Benutzeragenten festgelegten Werte ein Rechteck, sodass der gesamte Inhalt innerhalb des Rechtecks sichtbar ist.
- `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, `safe-area-max-inset-left`
  - : Die maximalen Einzüge der sicheren Zone-Umgebungsvariablen stellen den statischen Maximalwert ihrer dynamischen `safe-area-inset-*` Variablenentsprechung dar.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Wert verwendet, können sie die `titlebar-area-*` Variablen nutzen, um sicherzustellen, dass der Inhalt nicht mit den Fenstersteuerungsschaltflächen überlappt (d.h. Minimieren, Maximieren und Schließen).
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen liefern Informationen über das Erscheinen der Bildschirmtastatur. Sie definieren ein Rechteck durch seine oberen, rechten, unteren und linken Einzüge vom Rand des Ansichtsfensters (die Breiten- und Höhenansätze werden aus den anderen Einzügen berechnet). Um mehr zu erfahren, siehe die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind die Eigenschaftsnamen, die vom Benutzeragenten definiert werden, case-sensitive.

## Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, dass der gesamte verfügbare Platz auf dem Bildschirm genutzt werden soll, und uns so die Verwendung der `env()` Variablen ermöglicht, müssen wir einen neuen Meta-Wert für das Ansichtsfenster hinzufügen:

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

### Verwendung von env(), um sicherzustellen, dass Schaltflächen nicht von der Geräte-UI verdeckt werden

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Schaltflächen nicht von Gerätebenachrichtigungen verdeckt werden, die unten auf dem Bildschirm erscheinen. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Auf Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wie iOS, enthält es jedoch einen Wert, der Platz für die Anzeige der Benachrichtigung lässt. Dieser Wert kann dann in dem Wert für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu schaffen, der auf diesem Gerät natürlich wirkt.

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

Die Syntax des Fallbacks erlaubt, ähnlich wie bei benutzerdefinierten Eigenschaften, Kommata. Aber wenn der Eigenschaftswert keine Kommata unterstützt, ist der Wert nicht gültig.

> [!NOTE]
> Benutzeragenteigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass der Inhalt nicht von Fenstersteuerungsschaltflächen in Desktop-PWAs verdeckt wird

Im folgenden Beispiel stellt `env()` sicher, dass der in einer Desktop Progressive Web App angezeigte Inhalt, der die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht von den Fenstersteuerungsschaltflächen des Betriebssystems verdeckt wird. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die das Fenstersteuerungsoverlay-Feature nicht unterstützen, wie mobile Geräte, werden die Fallback-Werte verwendet.

So sieht normalerweise eine auf einem Desktop-Gerät installierte PWA aus:

![Illustration, wie eine auf dem Desktop installierte PWA normalerweise aussieht, mit Fenstersteuerungsschaltflächen, einer Titelleiste und Web-Inhalt darunter](desktop-pwa-window.png)

Mit dem Fenstersteuerungsoverlay-Feature deckt der Web-Inhalt die gesamte Anwendungsfensteroberfläche ab, mit den Fenstersteuerungen und PWA-Schaltflächen, die als Overlays angezeigt werden:

![Illustration, wie eine auf dem Desktop installierte PWA mit dem Fenstersteuerungsoverlay-Feature aussieht, mit Fenstersteuerungsschaltflächen, ohne Titelleiste und Web-Inhalt, der das gesamte Fenster abdeckt](desktop-pwa-window-wco.png)

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
> Die Verwendung von `position:fixed` sorgt dafür, dass der Header nicht mit dem Rest des Inhalts scrollt, sondern mit den Fenstersteuerungsschaltflächen ausgerichtet bleibt, selbst bei Geräten/Browsern, die elastisches Überscrollen (auch als "Rubber Banding" bekannt) unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS benutzerdefinierte Eigenschaften für Kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties)
- [Anpassen des Overlays der Fenstersteuerung in der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Anzeige von Inhalten in der Titelleiste](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
- [Ausbrechen aus der Box](https://alistapart.com/article/breaking-out-of-the-box/)
