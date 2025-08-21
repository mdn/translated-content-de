---
title: Verwendung von Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables/Using_environment_variables
l10n:
  sourceCommit: 3a9a6f9dd92859dca2f928c59b34d9177adb9ae5
---

Das [CSS-Umgebungsvariablen-Modul](/de/docs/Web/CSS/CSS_environment_variables) führt das Konzept von Umgebungsvariablen in CSS ein und definiert die {{cssxref("env")}}-Funktion, um die Verwendung von Umgebungsvariablen zu ermöglichen. In diesem Leitfaden betrachten wir [was Umgebungsvariablen sind](#what_are_environment_variables), die [vom Browser definierten Umgebungsvariablen](#vom_browser_definierte_umgebungsvariablen) und [wie man Umgebungsvariablen verwendet](#using_environment_variables_with_env_example) mit der [`env()`-Funktion](#the_env_function).

## Was sind Umgebungsvariablen?

CSS-Umgebungsvariablen sind globale Variablen, die global auf das gesamte Dokument angewendet werden. Sie werden vom Benutzeragenten definiert. Umgebungsvariablen sind spezielle Werte, die vom Browser oder Betriebssystem bereitgestellt werden und Ihren Stil an das Gerät oder den Kontext des Benutzers anpassen. Sie werden mit der `env()`-Funktion aufgerufen.

Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und die {{cssxref("var()")}}-Funktion, sind jedoch global definiert und an das gesamte Dokument gebunden. Das bedeutet, dass sie immer auf das gesamte Dokument angewendet werden, im Gegensatz zu benutzerdefinierten Eigenschaften, die auf Elemente beschränkt sind. Darüber hinaus sind Umgebungsvariablen schreibgeschützt, während benutzerdefinierte Eigenschaften veränderbar sind.

Ähnlich wie benutzerdefinierte Eigenschaften sind Umgebungsvariablen groß- und kleinschreibungsempfindlich. Anders als benutzerdefinierte Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, kann die `env()`-Funktion anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Deskriptors verwendet werden (zum Beispiel in [Media-Query-Regeln](/de/docs/Web/CSS/@media)).

### Geschichte

Apple führte Umgebungsvariablen erstmals im Safari-Browser für iOS ein, um Entwicklern zu ermöglichen, Layouts für unregelmäßige Geräteeinstellungen zu optimieren. Beispiele hierfür sind Geräte mit Notches und abgerundeten Kanten. Die ursprünglichen `safe-area-inset-*` Umgebungsvariablen ermöglichen es Entwicklern, Inhalte in einem sicheren Bereich des Sichtfensters zu platzieren, unabhängig davon, welches Gerät oder welcher Browser verwendet wird.

### Anwendungsfälle

Häufige Probleme, die mit Umgebungsvariablen gelöst werden können, umfassen:

- Geräubenachrichtigungen, die Teile des App-Benutzerinterfaces verdecken.
- Umgang mit Änderungen der Sichtfenstergröße, wenn dynamische Tastaturen ein- und ausgeblendet werden.
- Positionierung von Elementen dort, wo sich die Titelleiste in [Progressive Web Apps](/de/docs/Web/Progressive_web_apps) (PWAs) befinden würde, sobald sie installiert sind, und sicherstellen, dass Inhalte nicht mit den Fenstersteuerungstasten überlappt. Dies ist vor allem bei Desktop-Browsern ein Problem.

## Vom Browser definierte Umgebungsvariablen

Die CSS-Umgebungsvariablen-Spezifikation definiert einige groß- und kleinschreibungsempfindliche Variablen, einschließlich:

- `preferred-text-scale`
  - : Die Umgebungsvariable `preferred-text-scale` repräsentiert den bevorzugten Textskalierungsfaktor des Benutzers. Dies ist die Anpassung, die an der "Standard"-Schriftgröße des Betriebssystems oder Benutzeragenten vorgenommen wird. Auf Geräten und in Browsern, in denen {{cssxref("text-size-adjust")}} eine Wirkung hat, ist dies der Skalierungsfaktor, der durch `text-size-adjust: auto` angewendet wird. Zum Beispiel, wenn `text-size-adjust: auto` die Schriftgröße verdoppeln würde, würde `env(preferred-text-scale)` auf `2` aufgelöst werden.

- `safe-area-inset-*`
  - : Die vier Safe-Area-Inset-Umgebungsvariablen - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom` und `safe-area-inset-left` - definieren einen rechteckigen sicheren Bereich durch seine oberen, rechten, unteren und linken Inset von der Kante des Sichtfensters aus. Es ist sicher, Inhalte in diesem Bereich zu platzieren, ohne dass sie durch die Form eines nicht-rechteckigen Displays abgeschnitten werden. Für rechteckige, unbehinderte Sichtfenster, wie reguläre Desktop- und Laptop-Monitore, sind diese vier Werte alle gleich `0`. Für nicht-rechteckige Displays — einschließlich Geräten mit abgerundeten Ecken und Vollbildschirmen sowie runden oder [rund-Display](/de/docs/Web/CSS/CSS_round_display) Smartwatches — bilden diese vier vom Benutzeragenten gesetzten Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar und nicht verdeckt sind.

- `safe-area-max-inset-*`
  - : Die vier Umgebungsvariablen für die maximale Safe-Area-Inset - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom` und `safe-area-max-inset-left` - repräsentieren jeweils den statischen Maximalwert ihrer dynamischen `safe-area-inset-*` Gegenstück. Sie repräsentieren den Maximalwert ihres `safe-area-inset-*` Gegenstücks, wenn alle dynamischen Benutzeroberflächen-Funktionen zurückgezogen wurden. Auf einigen Plattformen kann beispielsweise eine Schaltflächenleiste beim Scrollen nach oben oder unten angezeigt werden, die die `safe-area-inset-*` Werte verändert. Während sich die `safe-area-inset-*` Werte ändern, während sich der aktuell sichtbare Inhaltsbereich ändert, bleiben die `safe-area-max-inset-*` Werte immer gleich.

- `viewport-segment-*`
  - : Diese Variablen sind nur relevant für Geräte, die mehrere Segmente haben, wie z.B. klappbare Telefone. Die Variablen `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right` und `viewport-segment-top` zusammen mit `viewport-segment-height` und `viewport-segment-width` definieren die Position und Dimensionen von logisch getrennten Bereichen des Sichtfensters. Diese Variablen sind nur definiert, wenn das Sichtfenster in mindestens zwei Segmente unterteilt ist. Sie werden verwendet, um verschiedene Teile einer Benutzeroberfläche bequem in verschiedene Segmente eines Multi-Segment-Geräts zu platzieren und zu verhindern, dass Ihre Inhalte durch den Falz abgeschnitten werden.

Andere Spezifikationen definieren zusätzliche Umgebungsvariablen.

Die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) definiert die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) Schnittstelle, die Informationen über die Geometrie des Titelleistenbereichs in {{Glossary("Progressive_web_apps", "progressiven Webanwendungen (PWAs)")}} bereitstellt, die auf Desktop-Geräten installiert sind. Bei Verwendung des `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override) Werts werden folgende Umgebungsvariablen definiert:

- `titlebar-area-*`
  - : Die Variablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` definieren den Bereich, der in einer installierten Webanwendung, die in einer Desktop-Umgebung läuft, normalerweise von der Titelleiste eingenommen würde. Verwenden Sie die `titlebar-area-*` Variablen, um sicherzustellen, dass Inhalte nicht mit den Fenstersteuerungstasten (d.h. Minimieren, Maximieren und Schließen) überlappen.

- `keyboard-inset-*`
  - : Die Variablen `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height` bieten Informationen über die Position und Größe der Bildschirmtastatur, insbesondere ihre oberen, rechten, unteren und linken Einrückungen vom Rand des Sichtfensters (die Breiten- und Höheninsets werden aus den anderen Einrückungen berechnet). Um mehr zu erfahren, sehen Sie sich die [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API) an.

Sie haben vielleicht bemerkt, dass alle vorherigen Variablennamen die physischen Begriffe links, rechts, oben, unten, Höhe und Breite beinhalten. Logische Entsprechungen sind nicht erforderlich, da sich die Variablennamen auf die physikalischen Eigenschaften der Gerätehardware und nicht auf die angezeigte Website beziehen.

## Die `env()`-Funktion

Die {{cssxref("env")}}-Funktion wird verwendet, um den Wert einer Umgebungsvariablen in einen CSS-Kontext einzufügen. Die `env()`-Funktion kann anstelle eines beliebigen Teils eines Werts in jeder Eigenschaft auf jedem Element oder eines beliebigen Teils eines Werts in jedem Deskriptor bei jeder at-rule, einschließlich innerhalb benutzerdefinierter Eigenschaftswerte, verwendet werden. Sie kann überall dort verwendet werden, wo ein CSS-Wert zulässig ist.

Die grundlegende Syntax ist wie folgt:

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

Die Funktion akzeptiert einen groß- und kleinschreibungsempfindlichen [Umgebungsvariablennamen](#vom_browser_definierte_umgebungsvariablen)und einen optionalen, aber allgemein empfohlenen Fallback-Wert.

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

Das erste Argument ist der [Name der Umgebungsvariable](#vom_browser_definierte_umgebungsvariablen), der ersetzt werden soll. Das Argument nach dem Komma, falls angegeben, ist der Fallback-Wert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht existiert. In diesen Beispielen wird, wenn die `preferred-text-scale` Umgebungsvariable in einem Browser nicht existiert, die {{cssxref("line-height")}} auf `2` gesetzt. Und, wenn der Browser keine `safe-area-inset-*` Werte hat, wird der {{cssxref("margin")}} auf `margin: 0 auto 3em auto` gesetzt.

Die Syntax des Fallbacks ist ähnlich der Syntax für benutzerdefinierte Eigenschaften, da sie mehrere Kommas zulässt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn der Eigenschaftswert oder der Deskriptor jedoch keine Kommas unterstützt, ist der Wert nicht gültig.

Enthält eine Eigenschaft oder ein Deskriptor syntaktisch gültige `env()`-Funktionen, wird davon ausgegangen, dass sie zur Parserzeit gültig sind. Sie wird erst zur Syntax-Prüfung zur Berechnungszeit herangezogen, nachdem die `env()`-Funktionen durch ihre browser-bereitgestellten Werte ersetzt wurden. Wenn die als erster Parameter übergebene Umgebungsvariable kein anerkannter Umgebungsvariablenname ist, wird der Fallback-Wert verwendet. Der Fallback kann eine andere Umgebungsvariable sein, sogar mit ihrem eigenen Fallback. Wurde kein Fallback bereitgestellt, ist die Eigenschaft oder Deskriptor, die die `env()`-Funktion enthält, zur Berechnungswert-Zeit ungültig.

## Verwendung von Umgebungsvariablen mit Beispiel `env()`

Wir können Umgebungsvariablen verwenden, um sicherzustellen, dass eine feststehende App-Toolbar nicht von Benachrichtigungen verdeckt wird, die unten auf dem Gerät angezeigt werden. Bei Geräten, die Benachrichtigungen am unteren Bildschirmrand anzeigen, wird der Benutzeragent den Wert der Umgebungsvariablen `safe-area-inset-bottom` auf die Entfernung vom oberen Ende dessen, was das Sichtfenster blockiert, bis zum unteren Ende des Sichtfensters setzen; in unserem Beispiel ist dies wahrscheinlich die Höhe aller sichtbaren Benachrichtigungen. Auf einem rechteckigen Desktop-Monitor ist die `safe-area-inset-bottom` im Allgemeinen `0`. Wir werden diesen Wert verwenden, um Platz am unteren Rand des Sichtfensters zu schaffen, damit die Benachrichtigung angezeigt wird, ohne den Inhalt zu verdecken.

Unser {{htmlelement("body")}} hat zwei Kinder; das {{htmlelement("main")}} enthält unsere gesamte Anwendung mit Ausnahme der {{htmlelement("footer")}} Toolbar.

```html
<body>
  <main>Application</main>
  <footer>Toolbar</footer>
</body>
```

Der `<body>` ist als Flex-Container definiert, der die Höhe des Sichtfensters füllt. Die `<main>` Anwendung darf wachsen, um jeden Raum zu füllen, der nicht von seinem Geschwister `<footer>` eingenommen wird.

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

Das `<footer>` ist so positioniert, dass es am unteren Rand des Sichtfensters haftet. Die Deklaration [`position: sticky`](/de/docs/Web/CSS/position#sticky) verschiebt das Element relativ zum `<body>` (seinem scrollenden Vorgänger und [begrenzenden Block](/de/docs/Web/CSS/CSS_display/Containing_block)), basierend auf dem {{cssxref("bottom")}} Wert von `0`. Wir geben dem `<footer>` einen {{cssxref("padding")}} Wert von `1em` auf allen vier Seiten. Dann fügen wir den `safe-area-inset-bottom` Wert zu den `1em` des unteren Paddings hinzu, mit einem Fallback von `1em`.

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em;
  padding-bottom: calc(1em + env(safe-area-inset-bottom, 1em));
}
```

Zusätzliche CSS ist aus Gründen der Kürze verborgen.

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

Das untere Padding des Footers wird über `1em` hinausreichen auf Geräten, die die `safe-area-inset-bottom` Umgebungsvariable mit einem Wert größer als `0` haben. Dieses CSS bietet zusätzliches Padding, um das Footer nach Bedarf zu vergrößern, sei es wegen Benachrichtigungen, einer Gerätekerbe im Bildschirm oder weil das Gerät keine rechteckigen Ecken hat.

{{EmbedLiveSample("Using environment variables with env example", "200", "500")}}

In der Zukunft könnten wir Unterstützung für vom Entwickler definierte Umgebungsvariablen sehen, aber dies wurde noch nicht definiert oder implementiert.

## Siehe auch

- {{cssxref("var")}}
- [`@media` `shape` Deskriptor](/de/docs/Web/CSS/@media/shape)
- [CSS Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- [CSS rundes Anzeige](/de/docs/Web/CSS/CSS_round_display) Modul
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
