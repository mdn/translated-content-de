---
title: Verwendung von Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables/Using_environment_variables
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das [CSS-Umgebungsvariablenmodul](/de/docs/Web/CSS/Guides/Environment_variables) führt das Konzept der Umgebungsvariablen in CSS ein und definiert die {{cssxref("env")}}-Funktion, um die Verwendung von Umgebungsvariablen zu ermöglichen. In diesem Leitfaden betrachten wir [was Umgebungsvariablen sind](#what_are_environment_variables), die [vom Browser definierten Umgebungsvariablen](#vom_browser_definierte_umgebungsvariablen), und [wie man Umgebungsvariablen verwendet](#using_environment_variables_with_env_example) mit [der `env()`-Funktion](#the_env_function).

## Was sind Umgebungsvariablen?

CSS-Umgebungsvariablen sind globale Variablen, die global für das gesamte Dokument gelten. Sie werden vom Benutzeragenten definiert. Umgebungsvariablen sind spezielle Werte, die vom Browser oder Betriebssystem bereitgestellt werden und helfen, dass Ihre Styles sich an das Gerät oder den Kontext des Benutzers anpassen. Sie werden mit der `env()`-Funktion aufgerufen.

Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und die {{cssxref("var()")}}-Funktion, sind jedoch global definiert und angewendet. Das bedeutet, dass sie immer für das gesamte Dokument gelten, im Gegensatz zu benutzerdefinierten Eigenschaften, die auf Elemente beschränkt sind. Darüber hinaus sind Umgebungsvariablen schreibgeschützt, während benutzerdefinierte Eigenschaften veränderbar sind.

Ähnlich wie benutzerdefinierte Eigenschaften sind Umgebungsvariablen case-sensitiv. Im Gegensatz zu benutzerdefinierten Eigenschaften, die nicht außerhalb von Deklarationen verwendet werden können, kann die `env()`-Funktion anstelle eines Teils eines Eigenschaftswertes oder eines Teils eines Deskriptors (zum Beispiel in [Mediaquery-Regeln](/de/docs/Web/CSS/Reference/At-rules/@media)) verwendet werden.

### Geschichte

Apple hat zuerst Umgebungsvariablen im iOS-Safari-Browser eingeführt, um Entwicklern zu ermöglichen, Layouts für unregelmäßige Gerätemonitore zu optimieren. Beispiele hierfür sind solche mit Einkerbungen und abgerundeten Kanten. Die ursprünglichen `safe-area-inset-*`-Umgebungsvariablen ermöglichen es Entwicklern, Inhalte in einem sicheren Bereich des Viewports zu platzieren, unabhängig davon, welches Gerät oder welcher Browser vom Benutzer verwendet wird.

### Anwendungsfälle

Häufige Probleme, die durch die Verwendung von Umgebungsvariablen gelöst werden können, umfassen:

- Gerätemitteilungen, die Abschnitte der Benutzeroberfläche der App verdecken.
- Umgang mit ändernden Viewport-Größen, wenn dynamische Tastaturen angezeigt oder ausgeblendet werden.
- Positionierung von Elementen, wo sich die Titelleiste in [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) befinden würde, sobald sie installiert sind, und sicherstellen, dass Inhalte von den Fenstersteuerungstasten unberührt bleiben. Dies ist besonders bei Desktop-Browsern ein Problem.

## Vom Browser definierte Umgebungsvariablen

Die CSS-Umgebungsvariablen-Spezifikation definiert einige case-sensitive Variablen, darunter:

- `preferred-text-scale`
  - : Die `preferred-text-scale`-Umgebungsvariable repräsentiert den bevorzugten Textskalierungsfaktor des Benutzers. Dies ist die Anpassung, die an der "Standard"-Schriftgröße des Betriebssystems oder Benutzeragenten vorgenommen wird. Auf Geräten und Browsern, wo {{cssxref("text-size-adjust")}} wirksam ist, ist dies der Skalierungsfaktor, der durch `text-size-adjust: auto` angewendet wird. Wenn zum Beispiel `text-size-adjust: auto` die Schriftgröße verdoppeln würde, würde `env(preferred-text-scale)` auf `2` auflösen.

- `safe-area-inset-*`
  - : Die vier sicheren Bereichs-Umgebungsvariablen — `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom` und `safe-area-inset-left` — definieren einen rechteckigen sicheren Bereich durch seine oberen, rechten, unteren und linken Einrückungen vom Rand des Viewports. Es ist sicher, Inhalte innerhalb dieses Bereichs zu platzieren, ohne dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Bei rechteckigen, unbehinderten Viewports, wie regulären Desktop- und Laptop-Monitoren, sind diese vier Werte alle gleich `0`. Bei nicht-rechteckigen Displays — einschließlich Geräte mit abgerundeten Ecken und vollständig großen Bildschirmen sowie abgerundeten oder [runden](/de/docs/Web/CSS/Guides/Round_display) Smartwatches — bilden diese vier vom Benutzeragenten festgelegten Werte ein Rechteck, so dass der gesamte Inhalt innerhalb des Rechtecks sichtbar und unbehindert ist.

- `safe-area-max-inset-*`
  - : Die vier sicheren maximalen Einrückungs-Umgebungsvariablen — `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom` und `safe-area-max-inset-left` — repräsentieren den statischen Maximalwert ihrer dynamischen `safe-area-inset-*`-Gegenstücke. Sie repräsentieren den Maximalwert ihres `safe-area-inset-*`-Gegenstücks, wenn alle dynamischen Benutzeroberflächenmerkmale eingefahren sind. Zum Beispiel kann auf einigen Plattformen eine Schaltflächenleiste angezeigt werden, wenn nach oben oder unten gescrollt wird, wodurch sich die `safe-area-inset-*`-Werte ändern. Während die `safe-area-inset-*`-Werte sich ändern, während sich der aktuell sichtbare Inhaltsbereich ändert, bleiben die `safe-area-max-inset-*`-Werte immer gleich.

- `viewport-segment-*`
  - : Diese Variablen sind nur für Geräte relevant, die mehrere Segmente haben, wie faltbare Telefone. Die Variablen `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right` und `viewport-segment-top` sowie `viewport-segment-height` und `viewport-segment-width` definieren die Position und die Abmessungen der logisch getrennten Bereiche des Viewports. Diese Variablen werden nur definiert, wenn der Viewport in mindestens zwei Segmente unterteilt ist. Sie werden verwendet, um verschiedene Teile einer Benutzeroberfläche bequem in unterschiedliche Segmente eines mehrsegmentigen Geräts zu platzieren und zu vermeiden, dass Inhalte durch den Knick abgeschnitten werden.

Andere Spezifikationen definieren zusätzliche Umgebungsvariablen.

Die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) definiert die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) Schnittstelle, die Informationen über die Geometrie des Titelleistenbereichs in {{Glossary("Progressive_web_apps", "Progressive Web Apps (PWAs)")}} gibt, die auf Desktop-Geräten installiert sind. Bei Verwendung des Wertes `window-controls-overlay` in [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) werden die folgenden Umgebungsvariablen definiert:

- `titlebar-area-*`
  - : Die Variablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` definieren den Bereich, der normalerweise von der Titelleiste in einer installierten Webanwendung im Desktop-Umfeld belegt wird. Verwenden Sie die `titlebar-area-*`-Variablen, um sicherzustellen, dass sich Inhalte nicht mit den Fenstersteuerungstasten (Minimieren, Maximieren und Schließen) überlappen.

- `keyboard-inset-*`
  - : Die Variablen `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height` geben Informationen über die Position und Größe der auf dem Bildschirm angezeigten virtuellen Tastatur an, insbesondere ihre oberen, rechten, unteren und linken Einrückungen vom Rand des Viewports (die Breiten- und Höheneinrückungen werden aus den anderen Einrückungen berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

Sie haben vielleicht bemerkt, dass alle vorherigen Variablennamen die physischen Begriffe links, rechts, oben, unten, Höhe und Breite enthalten. Logische Entsprechungen sind nicht erforderlich, da sich die Variablennamen auf die physischen Eigenschaften der Gerätehardware beziehen und nicht auf die angezeigte Website.

## Die `env()`-Funktion

Die {{cssxref("env")}}-Funktion wird verwendet, um den Wert einer Umgebungsvariablen in einen CSS-Kontext einzufügen. Die `env()`-Funktion kann anstelle eines Teils eines Wertes in jeder Eigenschaft auf jedem Element oder als Teil eines Wertes in jedem Deskriptor in jeder At-Regel verwendet werden, einschließlich innerhalb von benutzerdefinierten Eigenschaftswerten. Sie kann überall verwendet werden, wo ein CSS-Wert zulässig ist.

Die Grundsyntax ist wie folgt:

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

Die Funktion akzeptiert einen case-sensitiven [Namen der Umgebungsvariablen](#vom_browser_definierte_umgebungsvariablen) und einen optionalen, jedoch generell empfohlenen, Fallback-Wert.

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

Das erste Argument ist der [Name der Umgebungsvariablen](#vom_browser_definierte_umgebungsvariablen), die ersetzt werden soll. Das Argument nach dem Komma, falls angegeben, ist der Fallback-Wert, der verwendet wird, wenn die Umgebungsvariable, auf die das erste Argument verweist, nicht existiert. In diesen Beispielen, wenn die `preferred-text-scale` Umgebungsvariable in einem Browser nicht existiert, wird die {{cssxref("line-height")}} auf `2` gesetzt. Und wenn der Browser keine `safe-area-inset-*` Werte hat, wird die {{cssxref("margin")}} auf `margin: 0 auto 3em auto` gesetzt.

Die Syntax des Fallbacks ist ähnlich der Syntax der benutzerdefinierten Eigenschaften in dem Sinne, dass sie mehrere Kommas erlaubt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn jedoch der Eigenschaftswert oder der Deskriptor keine Kommas unterstützt, ist der Wert ungültig.

Wenn eine Eigenschaft oder ein Deskriptor syntaktisch gültige `env()`-Funktionen enthält, wird angenommen, dass sie zur Parserzeit gültig sind. Sie werden erst zur Berechnungszeit, nachdem die `env()`-Funktionen durch ihre vom Browser bereitgestellten Werte ersetzt wurden, auf Syntax überprüft. Wenn die Umgebungsvariable, die als erster Parameter übergeben wurde, kein anerkannter Umgebungsvariablenname ist, wird der Fallback-Wert verwendet. Der Fallback kann eine andere Umgebungsvariable sein, sogar mit einem eigenen Fallback. Wenn kein Fallback angegeben wurde, ist die Eigenschaft oder der Deskriptor, der die `env()`-Funktion enthält, zur Berechnungszeit ungültig.

## Verwendung von Umgebungsvariablen mit `env()`-Beispiel

Wir können Umgebungsvariablen verwenden, um sicherzustellen, dass eine feste App-Werkzeugleiste nicht durch Benachrichtigungen verdeckt wird, die unten auf dem Gerät angezeigt werden. Auf Geräten, die Benachrichtigungen am unteren Rand des Bildschirms anzeigen, setzt der Benutzeragent den Wert der `safe-area-inset-bottom`-Umgebungsvariable auf den Abstand vom oberen Rand des, was den Viewport blockiert, zum unteren Rand des Viewports; in unserem Beispiel ist dies wahrscheinlich die Höhe von sichtbaren Benachrichtigungen. Auf einem rechteckigen Desktop-Monitor beträgt der `safe-area-inset-bottom` in der Regel `0`. Wir werden diesen Wert verwenden, um Platz am unteren Rand des Viewports zu schaffen, damit die Benachrichtigung angezeigt werden kann, ohne Inhalte zu verdecken.

Unser {{htmlelement("body")}} hat zwei Kinder; das {{htmlelement("main")}} enthält unsere gesamte Anwendung außer der {{htmlelement("footer")}}-Werkzeugleiste.

```html
<body>
  <main>Application</main>
  <footer>Toolbar</footer>
</body>
```

Das `<body>` ist als Flex-Container definiert, das die Höhe des Viewports ausfüllt. Die `<main>`-Anwendung darf wachsen, um jeden Raum zu füllen, der nicht von ihrem Geschwister `<footer>` eingenommen wird.

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

Das `<footer>` ist so positioniert, dass es am unteren Rand des Viewports haftet. Die Deklaration [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky) versetzt das Element relativ zum `<body>` (seinem scrollenden Vorfahren und [einschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block)) basierend auf dem {{cssxref("bottom")}}-Wert von `0`. Wir geben dem `<footer>` einen {{cssxref("padding")}}-Wert von `1em` auf allen vier Seiten. Wir fügen dann den `safe-area-inset-bottom`-Wert zu den `1em` des unteren Paddings hinzu, mit einem Fallback von `1em`.

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em;
  padding-bottom: calc(1em + env(safe-area-inset-bottom, 1em));
}
```

Zusätzliche CSS ist aus Gründen der Kürze ausgeblendet.

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

Das untere Padding des Footers wird über `1em` hinausgehen auf Geräten, die die `safe-area-inset-bottom`-Umgebungsvariable mit einem Wert größer als `0` haben. Dieses CSS bietet zusätzliches Padding, um den Footer je nach Bedarf zu vergrößern, sei es durch Benachrichtigungen, eine Einkerbung am Bildschirm des Geräts oder weil das Gerät keine quadratischen Ecken hat.

{{EmbedLiveSample("Verwendung von Umgebungsvariablen mit env Beispiel", "200", "500")}}

In Zukunft könnten wir Unterstützung für vom Entwickler definierte Umgebungsvariablen sehen, aber dies wurde noch nicht definiert oder implementiert.

## Siehe auch

- {{cssxref("var")}}
- [`@media` `shape` Deskriptor](/de/docs/Web/CSS/Reference/At-rules/@media/shape)
- [CSS Umgebungsvariablen](/de/docs/Web/CSS/Guides/Environment_variables) Modul
- [CSS rundes Display](/de/docs/Web/CSS/Guides/Round_display) Modul
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
