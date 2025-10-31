---
title: Verwendung von Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables/Using_environment_variables
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Das [CSS-Umgebungsvariablenmodul](/de/docs/Web/CSS/CSS_environment_variables) führt das Konzept von Umgebungsvariablen in CSS ein und definiert die {{cssxref("env")}}-Funktion, um die Verwendung von Umgebungsvariablen zu ermöglichen. In diesem Leitfaden betrachten wir, [was Umgebungsvariablen sind](#what_are_environment_variables), die [vom Browser definierten Umgebungsvariablen](#vom_browser_definierte_umgebungsvariablen) und [wie man Umgebungsvariablen](#using_environment_variables_with_env_example) mit [der `env()`-Funktion](#the_env_function) verwendet.

## Was sind Umgebungsvariablen?

CSS-Umgebungsvariablen sind globale Variablen, die global im gesamten Dokument verfügbar sind. Sie werden vom User Agent definiert. Umgebungsvariablen sind spezielle Werte, die vom Browser oder Betriebssystem bereitgestellt werden und dabei helfen, Ihre Styles an das Gerät oder den Kontext des Benutzers anzupassen. Sie werden mithilfe der `env()`-Funktion abgerufen.

Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und die {{cssxref("var()")}}-Funktion, sind jedoch global definiert und gültig. Das bedeutet, dass sie immer für das gesamte Dokument gelten, im Gegensatz zu benutzerdefinierten Eigenschaften, die nur für Elemente gültig sind. Zusätzlich sind Umgebungsvariablen schreibgeschützt, während benutzerdefinierte Eigenschaften veränderbar sind.

Ähnlich wie benutzerdefinierte Eigenschaften sind Umgebungsvariablen groß- und kleinschreibungsempfindlich. Im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, kann die `env()`-Funktion anstelle eines Teils eines Eigenschaftswerts oder eines Deskriptors (zum Beispiel in [Media Query Regeln](/de/docs/Web/CSS/@media)) verwendet werden.

### Geschichte

Apple führte zuerst Umgebungsvariablen im iOS Safari-Browser ein, um Entwicklern zu ermöglichen, Layouts für unregelmäßige Gerätdisplays zu optimieren. Beispiele beinhalten solche mit Notches und gekrümmten Kanten. Die ursprünglichen `safe-area-inset-*`-Umgebungsvariablen ermöglichen es Entwicklern, Inhalte in einem sicheren Bereich des Viewports zu platzieren, unabhängig davon, welches Gerät oder welcher Browser verwendet wird.

### Anwendungsfälle

Häufige Probleme, die durch die Verwendung von Umgebungsvariablen gelöst werden können, umfassen:

- Gerätebenachrichtigungen, die Teile der Benutzeroberfläche einer App abdecken.
- Umgang mit Änderungen der Größe des Viewports, wenn dynamische Tastaturen angezeigt oder ausgeblendet werden.
- Positionierung von Elementen dort, wo sich in [progressive Webanwendungen](/de/docs/Web/Progressive_web_apps) (PWAs) normalerweise die Titelleiste befunden hätte, sobald sie installiert sind, und Sicherstellung, dass Inhalte nicht von den Steuerelementen des Fensters überlappt werden. Dies ist besonders in Desktop-Browsern ein Problem.

## Vom Browser definierte Umgebungsvariablen

Die CSS-Umgebungsvariablen-Spezifikation definiert einige groß- und kleinschreibungsempfindliche Variablen, darunter:

- `preferred-text-scale`
  - : Die `preferred-text-scale` Umgebungsvariable repräsentiert den bevorzugten Textmaßstab des Benutzers. Dies ist die Anpassung an die "Standard" Schriftgröße des Betriebssystems oder des User Agents. Auf Geräten und in Browsern, bei denen {{cssxref("text-size-adjust")}} eine Wirkung hat, ist dies der Maßstab der von `text-size-adjust: auto` angewendet wird. Beispielsweise, wenn `text-size-adjust: auto` die Textgröße verdoppeln würde, dann würde `env(preferred-text-scale)` auf `2` ausgewertet.

- `safe-area-inset-*`
  - : Die vier Safe-Area-Inset-Umgebungsvariablen - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom` und `safe-area-inset-left` - definieren einen rechteckigen sicheren Bereich durch seine oberen, rechten, unteren und linken Inset-Werte vom Rand des Viewports. Es ist sicher, Inhalte innerhalb dieses Bereichs zu platzieren, ohne dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Für rechteckige, ungehinderte Viewports, wie reguläre Desktop- und Laptop-Monitore, sind diese vier Werte alle gleich `0`. Für nicht-rechteckige Displays — einschließlich abgerundeter Ecken bei Geräten mit Vollbildschirmen und abgerundeten oder [runden Displays](/de/docs/Web/CSS/CSS_round_display) bei Smartwatches — bilden diese vier Werte, die vom User Agent gesetzt werden, ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar und ungehindert sind.

- `safe-area-max-inset-*`
  - : Die vier maximalen Safe-Area-Inset-Umgebungsvariablen - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom` und `safe-area-max-inset-left` - repräsentieren jeweils den statischen Maximalwert ihres dynamischen `safe-area-inset-*`-Variablengegenstücks. Sie repräsentieren den maximalen Wert ihres `safe-area-inset-*`-Gegenstücks, wenn alle dynamischen Benutzeroberfläche-Features zurückgezogen sind. Beispielsweise kann es auf einigen Plattformen eine Schaltflächenleiste geben, die beim Scrollen nach oben oder unten angezeigt wird und die `safe-area-inset-*`-Werte ändert. Während sich die `safe-area-inset-*`-Werte ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, bleiben die `safe-area-max-inset-*`-Werte immer gleich.

- `viewport-segment-*`
  - : Diese Variablen sind nur relevant für Geräte, die mehrere Segmente haben, wie faltbare Telefone. Die `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right` und `viewport-segment-top`-Variablen, sowie die `viewport-segment-height` und `viewport-segment-width`, definieren die Position und Abmessungen der logisch getrennten Bereiche des Viewports. Diese Variablen sind nur definiert, wenn der Viewport in mindestens zwei Segmente unterteilt ist. Sie werden verwendet, um verschiedene Teile einer Benutzeroberfläche bequem in verschiedene Segmente eines mehrsegmentigen Geräts zu platzieren und zu vermeiden, dass Ihr Inhalt durch die Falte abgeschnitten wird.

Andere Spezifikationen definieren zusätzliche Umgebungsvariablen.

Die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) definiert das [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interface, welches Informationen über die Geometrie des Titelbereichs in {{Glossary("Progressive_web_apps", "Progressive Web Applications (PWAs)")}} bereitstellt, die auf Desktop-Geräten installiert werden. Beim Verwenden des `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Wertes, werden die folgenden Umgebungsvariablen definiert:

- `titlebar-area-*`
  - : Die `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` Variablen definieren den Bereich, der normalerweise von der Titelleiste in einer installierten Webanwendung in einer Desktop-Umgebung eingenommen würde. Verwenden Sie die `titlebar-area-*`-Variablen, um sicherzustellen, dass der Inhalt nicht mit den Fensterschaltflächen (also Minimieren, Maximieren und Schließen) überlappt.

- `keyboard-inset-*`
  - : Die `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height` Variablen bieten Informationen über die Position und Größe der virtuellen On-Screen-Tastatur, speziell ihre oberen, rechten, unteren und linken Inset-Werte vom Rand des Viewports (die Breiten- und Höhen-Inset-Werte werden aus den anderen Inset-Werten berechnet). Um mehr zu erfahren, siehe die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

Sie haben möglicherweise bemerkt, dass alle vorherigen Variablennamen physische Begriffe wie links, rechts, oben, unten, Höhe und Breite enthalten. Logische Äquivalente sind nicht erforderlich, da sich die Variablennamen auf die physikalischen Eigenschaften der Gerätehardware, nicht auf die angezeigte Webseite beziehen.

## Die `env()`-Funktion

Die {{cssxref("env")}}-Funktion wird verwendet, um den Wert einer Umgebungsvariablen in einen CSS-Kontext einzufügen. Die `env()`-Funktion kann anstelle eines Teils eines Werts in jeder Eigenschaft auf jedem Element oder eines Teils eines Werts in jeder Attributregel, einschließlich innerhalb von benutzerdefinierten Eigenschaftswerten, verwendet werden. Sie kann überall dort verwendet werden, wo ein CSS-Wert erlaubt ist.

Die grundlegende Syntax ist wie folgt:

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

Die Funktion akzeptiert einen groß- und kleinschreibungsempfindlichen [Namen der Umgebungsvariablen](#vom_browser_definierte_umgebungsvariablen) und einen optionalen, aber generell empfohlenen Fallback-Wert.

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

Das erste Argument ist der [Name der Umgebungsvariablen](#vom_browser_definierte_umgebungsvariablen), der ersetzt werden soll. Das Argument nach dem Komma, falls angegeben, ist der Fallback-Wert, der verwendet wird, wenn die in dem ersten Argument referenzierte Umgebungsvariable nicht existiert. In diesen Beispielen, wenn die `preferred-text-scale`-Umgebungsvariable in einem Browser nicht existiert, wird die {{cssxref("line-height")}} auf `2` gesetzt. Und wenn der Browser keine `safe-area-inset-*`-Werte hat, wird die {{cssxref("margin")}} auf `margin: 0 auto 3em auto` gesetzt.

Die Syntax des Fallbacks ähnelt der Syntax für benutzerdefinierte Eigenschaften, da sie mehrere Kommas zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn der Eigenschaftswert oder Deskriptor jedoch keine Kommas unterstützt, ist der Wert nicht gültig.

Wenn eine Eigenschaft oder ein Deskriptor syntaktisch gültige `env()`-Funktionen enthält, wird beim Parsen angenommen, dass sie gültig sind. Sie werden erst zur Syntaxprüfung herangezogen, wenn die `env()`-Funktionen mit ihren vom Browser bereitgestellten Werten ersetzt wurden. Wenn die als erstes Argument übergebene Umgebungsvariable kein anerkannter Umgebungsvariablenname ist, wird der Fallback-Wert verwendet. Der Fallback kann eine andere Umgebungsvariable sein, sogar mit einem eigenen Fallback. Wenn kein Fallback angegeben wurde, ist die Eigenschaft oder der Deskriptor, der die `env()`-Funktion enthält, bei der Berechnung der Werte ungültig.

## Verwendung von Umgebungsvariablen mit `env()` Beispiel

Wir können Umgebungsvariablen verwenden, um sicherzustellen, dass eine feste App-Symbolleiste nicht von Benachrichtigungen, die am unteren Rand des Geräts erscheinen, verdeckt wird. Auf Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, setzt der User Agent den Wert der `safe-area-inset-bottom` Umgebungsvariablen auf die Entfernung von der Oberkante dessen, was den Viewport blockiert, bis zur Unterkante des Viewports; in unserem Beispiel ist dies wahrscheinlich die Höhe der sichtbaren Benachrichtigungen. Auf einem rechteckigen Desktop-Monitor ist die `safe-area-inset-bottom` in der Regel `0`. Wir werden diesen Wert verwenden, um am unteren Rand des Viewports Platz zu schaffen, damit die Benachrichtigung angezeigt werden kann, ohne den Inhalt zu verdecken.

Unser {{htmlelement("body")}} hat zwei Kinder; das {{htmlelement("main")}} enthält unsere gesamte Anwendung mit Ausnahme der {{htmlelement("footer")}}-Symbolleiste.

```html
<body>
  <main>Application</main>
  <footer>Toolbar</footer>
</body>
```

Der `<body>` ist als Flex-Container definiert, der die Höhe des Viewports füllt. Die `<main>`-Anwendung kann wachsen, um jeden Raum zu füllen, den ihr Geschwister `<footer>` nicht einnimmt.

```css
body {
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
}

main {
  flex: 1;
  padding: 1em;
  overflow-y: auto;
}
```

Das `<footer>` wird so positioniert, dass es am unteren Rand des Viewports haftet. Die Deklaration [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky) positioniert das Element relativ zum `<body>` (seinem scrollenden Vorfahren und [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block)) basierend auf dem {{cssxref("bottom")}}-Wert von `0`. Wir geben dem `<footer>` einen {{cssxref("padding")}}-Wert von `1em` an allen vier Seiten. Wir fügen dann den Wert `safe-area-inset-bottom` zum `1em` unteren Padding hinzu, mit einem Fallback von `1em`.

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em;
  padding-bottom: calc(1em + env(safe-area-inset-bottom, 1em));
}
```

Zusätzliche CSS wird der Übersichtlichkeit halber ausgeblendet.

```css hidden
main {
  background-color: palegoldenrod;
}
footer {
  background-color: black;
  color: white;
  border-top: 1px solid white;
  display: flex;
  justify-content: space-between;
}

footer::before,
footer::after {
  content: "Button" / "Fake button";
  padding: 3px 0.5em;
  background: white;
  color: black;
  border-radius: 3px;
}
```

Das untere Padding des Footers wird auf Geräten, die die `safe-area-inset-bottom`-Umgebungsvariable mit einem Wert größer als `0` haben, über `1em` hinausgehen. Dieses CSS bietet zusätzliches Padding, um das Footer bei Bedarf zu vergrößern, sei es aufgrund von Benachrichtigungen, eines Geräteeinschnitts im Bildschirm oder weil das Gerät keine quadratischen Ecken hat.

{{EmbedLiveSample("Using environment variables with env example", "200", "500")}}

In Zukunft könnten wir die Unterstützung für von Entwicklern definierte Umgebungsvariablen sehen, aber dies wurde bisher noch nicht definiert oder implementiert.

## Siehe auch

- {{cssxref("var")}}
- [`@media` `shape` descriptor](/de/docs/Web/CSS/@media/shape)
- [CSS environment_variables](/de/docs/Web/CSS/CSS_environment_variables) Modul
- [CSS round display](/de/docs/Web/CSS/CSS_round_display) Modul
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
