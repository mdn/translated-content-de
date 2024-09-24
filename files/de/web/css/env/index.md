---
title: env()
slug: Web/CSS/env
l10n:
  sourceCommit: 4ecbac9e89961a132c1e7f5493ec94f60dcb1ee4
---

{{CSSRef}}

Die **`env()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann verwendet werden, um den Wert einer benutzerdefinierten, durch den User-Agent definierten Umgebungsvariable in Ihr CSS einzufügen, ähnlich der {{cssxref("var", "var()")}} Funktion und [benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*). Der Unterschied besteht darin, dass Umgebungsvariablen, die durch den User-Agent und nicht durch den Autor definiert sind, global für ein Dokument gelten, während benutzerdefinierte Eigenschaften auf das (die) Element(e) beschränkt sind, auf denen sie deklariert wurden.

Zusätzlich können, im Gegensatz zu benutzerdefinierten Eigenschaften, die nicht außerhalb von Deklarationen verwendet werden können, `env()`-Funktionen anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Teils eines Deskriptors (z.B. in [Media-Query-Regeln](/de/docs/Web/CSS/@media)) verwendet werden. Während sich die Spezifikation weiterentwickelt, kann es auch in anderen Bereichen wie Selektoren verwendbar sein.

Ursprünglich durch den iOS-Browser bereitgestellt, um Entwicklern zu ermöglichen, ihre Inhalte in einem sicheren Bereich des Viewports zu platzieren, können die in der Spezifikation definierten `safe-area-inset-*` Werte verwendet werden, um sicherzustellen, dass Inhalte auch für Betrachter mit nicht-rechteckigen Displays sichtbar sind.

Zum Beispiel löst `env()` häufig das Problem, dass Gerätemitteilungen Teile der Benutzeroberfläche einer App verdecken. Durch die Positionierung fester Elemente mit `env()` können Sie sicherstellen, dass sie in einem sicheren Bereich des Viewports angezeigt werden.

Ein weiterer Anwendungsfall für `env()`-Variablen ist für Desktop-[Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs), die das Window Controls Overlay-Feature nutzen, um den gesamten Oberflächenbereich des Anwendungsfensters auszunutzen. Mithilfe der `titlebar-area-*` Werte können sie Elemente dort positionieren, wo die Titelleiste gewesen wäre, und sicherstellen, dass der Inhalt nicht mit den Fenstertasten überlappt.

## Syntax

```css
/* Verwendung der vier Safe Area-Inset-Werte ohne Fallback-Werte */
env(safe-area-inset-top);
env(safe-area-inset-right);
env(safe-area-inset-bottom);
env(safe-area-inset-left);

/* Verwendung mit Fallback-Werten */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
```

### Werte

- `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
  - : Die `safe-area-inset-*` Variablen sind vier Umgebungsvariablen, die ein Rechteck durch seine Abstände von oben, rechts, unten und links zum Rand des Viewports definieren, in das Inhalte eingefügt werden können, ohne dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Für rechteckige Viewports, wie bei einem durchschnittlichen Laptopmonitor, ist ihr Wert gleich null. Bei nicht-rechteckigen Displays – wie etwa einer runden Uhr – bilden die vom User-Agent festgelegten vier Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar sind.
- `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, `titlebar-area-height`
  - : Die `titlebar-area-*` Variablen sind nützlich für PWAs, die auf Desktop-Geräten installiert sind. Wenn eine Desktop-PWA den `window-controls-overlay` [display_override](/de/docs/Web/Manifest/display_override) Wert verwendet, dann kann sie die `titlebar-area-*` Variablen verwenden, um sicherzustellen, dass Inhalte nicht mit den Fenstertasten (d.h. Minimieren, Maximieren und Schließen) überlappen.
- `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, `keyboard-inset-height`
  - : Die `keyboard-inset-*` Variablen geben Informationen über das Erscheinen der virtuellen Bildschirmtastatur. Sie definieren ein Rechteck durch ihre Abstände von oben, rechts, unten und links zum Rand des Viewports (die Breiten- und Höhenabstände werden aus den anderen Abständen berechnet). Weitere Informationen finden Sie in der {{domxref("VirtualKeyboard API", "VirtualKeyboard API", "", "nocode")}}.

> [!NOTE]
> Im Gegensatz zu anderen CSS-Eigenschaften sind von User-Agenten definierte Eigenschaftsnamen case-sensitiv.

### Formale Syntax

{{CSSSyntax}}

## Verwendung

Um dem Browser mitzuteilen, den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen und uns so die Verwendung der `env()`-Variablen zu ermöglichen, müssen wir einen neuen Viewport-Meta-Wert hinzufügen:

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

Im folgenden Beispiel wird `env()` verwendet, um sicherzustellen, dass feste App-Toolbar-Schaltflächen nicht durch Gerätemitteilungen, die am unteren Rand des Bildschirms erscheinen, verdeckt werden. Auf dem Desktop ist `safe-area-inset-bottom` `0`. Auf Geräten, die Mitteilungen am unteren Bildschirmrand anzeigen, wie z.B. iOS, enthält es einen Wert, der Platz für die Anzeige der Mitteilung lässt. Dieser kann dann im Wert für {{cssxref("padding-bottom")}} verwendet werden, um einen Abstand zu erzeugen, der auf diesem Gerät natürlich erscheint.

```html
<main>Hauptinhalt der App hier</main>
<footer>
  <button>Hier gehen</button>
  <button>Oder hier</button>
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
  /* fügt den safe-area-inset-bottom Wert zum anfänglichen 1em Polster hinzu.
  Ein größerer schwarzer Bereich wird für ein Gerät angezeigt, das einen positiven Wert für diese Variable hat. */
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

Das untenstehende Beispiel nutzt den optionalen zweiten Parameter von `env()`, der es Ihnen ermöglicht, einen Fallback-Wert bereitzustellen, falls die Umgebungsvariable nicht verfügbar ist.

```html
<p>
  Wenn die <code>env()</code> Funktion in Ihrem Browser unterstützt wird, hat dieser
  Absatztext 50px Polsterung zu seiner linken Grenze —
  jedoch nicht oben, rechts und unten. Das liegt daran, dass das begleitende CSS
  dem Äquivalent von <code>padding: 0 0 0 50px</code> entspricht, da im Gegensatz zu anderen CSS-Eigenschaften User-Agent-Eigenschaftsnamen case-sensitiv sind.
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
/* null für alle rechteckigen User-Agenten */
padding: env(safe-area-inset-bottom, 50px);

/* 50px, weil UA-Eigenschaften case-sensitiv sind */
padding: env(Safe-area-inset-bottom, 50px);

/* als ob padding: '50px 20px' gesetzt worden wäre, weil x keine gültige Umgebungsvariable ist */
padding: env(x, 50px 20px);

/* ignoriert, weil '50px, 20px' kein gültiger Polsterungswert ist und x keine gültige Umgebungsvariable ist */
padding: env(x, 50px, 20px);
```

Die Syntax des Fallbacks, ähnlich der von benutzerdefinierten Eigenschaften, erlaubt Kommata. Aber wenn der Eigenschaftswert keine Kommata unterstützt, ist der Wert nicht gültig.

> [!NOTE]
> User-Agent-Eigenschaften werden nicht durch die [all](/de/docs/Web/CSS/all) Eigenschaft zurückgesetzt.

### Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fenstertasten in Desktop-PWAs verdeckt werden

Im folgenden Beispiel stellt `env()` sicher, dass Inhalte, die in einer Desktop-Progressive-Web-App angezeigt werden, die die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) verwendet, nicht durch die Fenstertasten des Betriebssystems verdeckt werden. Die `titlebar-area-*` Werte definieren ein Rechteck, in dem die Titelleiste normalerweise angezeigt worden wäre. Auf Geräten, die das Window Controls Overlay-Feature nicht unterstützen, wie z.B. in mobilen Geräten, werden die Fallback-Werte verwendet.

So sieht eine PWA, die auf einem Desktop-Gerät installiert ist, normalerweise aus:

![Darstellung wie eine PWA, die auf einem Desktop installiert ist, normalerweise aussieht, mit Fenstertasten, einer Titelleiste und darunter liegenden Webinhalten](desktop-pwa-window.png)

Mit dem Window Controls Overlay-Feature erstrecken sich die Webinhalte über die gesamte Oberfläche des Anwendungsfensters, wobei die Fenstertasten und PWA-Schaltflächen als Overlays angezeigt werden:

![Darstellung wie eine PWA, die auf einem Desktop installiert ist, mit dem Window Controls Overlay-Feature aussieht, mit Fenstertasten, keiner Titelleiste und Webinhalten, die sich über das ganze Fenster erstrecken](desktop-pwa-window-wco.png)

```html
<header>Titel der App hier</header>
<main>Hauptinhalt der App hier</main>
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
> Die Verwendung von `position:fixed` stellt sicher, dass die Kopfzeile nicht mit dem Rest der Inhalte scrollt, sondern stattdessen mit den Fenstertasten ausgerichtet bleibt, selbst auf Geräten/Browsers, die elastisches Überschwingen unterstützen (auch bekannt als 'Gummibandeffekt').

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("var", "var(…)")}}
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften (`--*`): CSS-Variablen](/de/docs/Web/CSS/--*)
- [Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)](/de/docs/Web/CSS/Using_CSS_custom_properties)
- [Anpassen der Fenstersteuerungsüberlagerung der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
- [Ausbrechen aus der Box](https://alistapart.com/article/breaking-out-of-the-box/)
