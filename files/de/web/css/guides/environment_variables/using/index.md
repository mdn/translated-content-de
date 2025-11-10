---
title: Verwendung von Umgebungsvariablen
slug: Web/CSS/Guides/Environment_variables/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Umgebungsvariablen-Modul](/de/docs/Web/CSS/Guides/Environment_variables) führt das Konzept der Umgebungsvariablen in CSS ein und definiert die {{cssxref("env")}}-Funktion, um die Nutzung von Umgebungsvariablen zu ermöglichen. In diesem Leitfaden betrachten wir [was Umgebungsvariablen sind](#what_are_environment_variables), die [vom Browser definierten Umgebungsvariablen](#vom_browser_definierte_umgebungsvariablen) und [wie man Umgebungsvariablen nutzt](#using_environment_variables_with_env_example) mit [der `env()`-Funktion](#the_env_function).

## Was sind Umgebungsvariablen?

CSS-Umgebungsvariablen sind globale Variablen, die global für das gesamte Dokument gelten. Sie werden vom User-Agent definiert. Umgebungsvariablen sind spezielle Werte, die vom Browser oder Betriebssystem bereitgestellt werden und helfen, Ihre Styles an das Gerät oder den Kontext des Benutzers anzupassen. Sie werden mit der `env()`-Funktion abgerufen.

Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) und die {{cssxref("var()")}}-Funktion, sind jedoch global definiert und gelten für das gesamte Dokument. Das bedeutet, sie sind immer für das gesamte Dokument gültig, im Gegensatz zu benutzerdefinierten Eigenschaften, die für Elemente gelten. Zusätzlich sind Umgebungsvariablen schreibgeschützt, während benutzerdefinierte Eigenschaften veränderbar sind.

Ähnlich wie benutzerdefinierte Eigenschaften sind Umgebungsvariablen groß- und kleinschreibungssensitiv. Im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, kann die `env()`-Funktion anstelle eines beliebigen Teils eines Eigenschaftswerts oder Teils eines Deskriptors (zum Beispiel in [Media Query-Regeln](/de/docs/Web/CSS/Reference/At-rules/@media)) verwendet werden.

### Geschichte

Apple führte zunächst Umgebungsvariablen im iOS Safari Browser ein, um Entwicklern die Optimierung von Layouts für ungewöhnliche Geräteanzeigen zu ermöglichen. Beispiele hierfür sind Geräte mit Kerben und abgerundeten Kanten. Die originalen `safe-area-inset-*`-Umgebungsvariablen erlauben es Entwicklern, Inhalte in einem sicheren Bereich des Ansichtsfensters zu platzieren, unabhängig davon, welches Gerät oder welchen Browser der Benutzer verwendet.

### Anwendungsfälle

Häufige Probleme, die durch die Verwendung von Umgebungsvariablen gelöst werden können, sind:

- Gerätemitteilungen, die Bereiche der App-Benutzeroberfläche verdecken.
- Umgang mit Änderungen der Ansichtsfenstergröße, wenn dynamische Tastaturen ein- und ausgeblendet werden.
- Positionierung von Elementen, wo die Titelleiste auf [progressive Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs) wäre, sobald diese installiert sind, und sicherstellen, dass Inhalte von den Fenstersteuerungsschaltflächen freibleiben. Dies ist insbesondere bei Desktop-Browsern ein Problem.

## Vom Browser definierte Umgebungsvariablen

Die CSS-Umgebungsvariablen-Spezifikation definiert einige groß- und kleinschreibungssensitive Variablen, darunter:

- `preferred-text-scale`
  - : Die Umgebungsvariable `preferred-text-scale` repräsentiert den bevorzugten Textmaßstab des Benutzers. Dies ist die Anpassung an die "Standard"-Schriftgröße des Betriebssystems oder User Agents. Auf Geräten und in Browsern, in denen {{cssxref("text-size-adjust")}} einen Effekt hat, ist dies der Maßstab, der durch `text-size-adjust: auto` angewendet wird. Beispielsweise, wenn `text-size-adjust: auto` dazu führen würde, dass die Textgröße verdoppelt wird, würde `env(preferred-text-scale)` auf `2` aufgelöst werden.

- `safe-area-inset-*`
  - : Die vier Umgebungsvariablen für den sicheren Bereich - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, und `safe-area-inset-left` - definieren einen rechteckigen sicheren Bereich durch seine Einsätze von oben, rechts, unten und links vom Rand des Ansichtsfensters. Es ist sicher, Inhalte innerhalb dieses Bereichs zu platzieren, ohne dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Für rechteckige, ungehinderte Ansichtsfenster, wie z.B. normale Desktop- und Laptop-Monitore, sind alle vier Werte gleich `0`. Für nicht rechteckige Displays — einschließlich abgerundeter Geräte mit Bildschirm in voller Größe und abgerundeten oder [runde Anzeige](/de/docs/Web/CSS/Guides/Round_display) Smartwatches — bilden diese vier vom User-Agent gesetzten Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar und nicht verdeckt sind.

- `safe-area-max-inset-*`
  - : Die vier maximalen Einsatzvariablen des sicheren Bereichs - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom`, und `safe-area-max-inset-left` - repräsentieren jeweils den statischen Maximalwert ihrer dynamischen `safe-area-inset-*`-Variablentgegenstücke. Sie repräsentieren den Maximalwert ihres `safe-area-inset-*`-Gegenstücks, wenn alle dynamischen Benutzeroberflächeselemente zurückgezogen sind. Zum Beispiel kann auf einigen Plattformen eine Schaltflächenleiste beim Scrollen nach oben oder unten angezeigt werden, wodurch sich die `safe-area-inset-*`-Werte ändern. Während sich die `safe-area-inset-*`-Werte ändern, wenn sich der aktuell sichtbare Inhaltsbereich ändert, bleiben die `safe-area-max-inset-*`-Werte immer gleich.

- `viewport-segment-*`
  - : Diese Variablen sind nur für Geräte mit mehreren Segmenten relevant, wie z.B. faltbare Telefone. Die Variablen `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right`, und `viewport-segment-top` sowie die `viewport-segment-height` und `viewport-segment-width` definieren die Position und Dimensionen logisch getrennter Regionen des Ansichtsfensters. Diese Variablen sind nur definiert, wenn das Ansichtsfenster in mindestens zwei Segmente unterteilt ist. Sie werden verwendet, um verschiedene Teile einer Benutzeroberfläche komfortabel in unterschiedliche Segmente eines Mehrsegmentgeräts zu platzieren und zu vermeiden, dass Ihr Inhalt durch den Falz abgeschnitten wird.

Andere Spezifikationen definieren zusätzliche Umgebungsvariablen.

Die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) definiert das [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Interface, das Informationen über die Geometrie des Titelleistenbereiches in {{Glossary("Progressive_web_apps", "progressiven Webanwendungen (PWAs)")}}, die auf Desktop-Geräten installiert sind, bereitstellt. Bei Verwendung des `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Werts sind die folgenden Umgebungsvariablen definiert:

- `titlebar-area-*`
  - : Die Variablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width`, und `titlebar-area-height` definieren den Bereich, der im Allgemeinen von der Titelleiste in einer installierten Webanwendung, die in einer Desktop-Umgebung ausgeführt wird, belegt wird. Verwenden Sie die `titlebar-area-*`-Variablen, um sicherzustellen, dass Inhalte nicht mit den Fenstersteuerungsschaltflächen (d.h. Minimieren, Maximieren und Schließen) überlappen.

- `keyboard-inset-*`
  - : Die Variablen `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`, und `keyboard-inset-height` geben Informationen über die Position und Größe der Bildschirmtastatur an, insbesondere über ihre Einsätze von oben, rechts, unten und links vom Rand des Ansichtsfensters (die Breiten- und Höhen-Einsätze werden aus den anderen Einsätzen berechnet). Weitere Informationen finden Sie in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

Sie haben vielleicht bemerkt, dass alle vorherigen Variablennamen die physischen Begriffe links, rechts, oben, unten, Höhe und Breite umfassen. Logische Äquivalente sind nicht erforderlich, da sich die Variablennamen auf die physikalischen Eigenschaften der Gerätehardware beziehen und nicht auf die angezeigte Website.

## Die `env()`-Funktion

Die {{cssxref("env")}}-Funktion wird verwendet, um den Wert einer Umgebungsvariablen in einen CSS-Kontext einzufügen. Die `env()`-Funktion kann anstelle eines beliebigen Teils eines Werts in einer beliebigen Eigenschaft eines beliebigen Elements oder eines beliebigen Teils eines Werts in einem beliebigen Deskriptor einer beliebigen At-Regel, einschließlich innerhalb von benutzerdefinierten Eigenschaftswerten, verwendet werden. Sie kann überall dort verwendet werden, wo ein CSS-Wert erlaubt ist.

Die grundlegende Syntax ist wie folgt:

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

Die Funktion akzeptiert einen groß- und kleinschreibungssensitiven [Umgebungsvariablennamen](#vom_browser_definierte_umgebungsvariablen) und einen optionalen, jedoch im Allgemeinen empfohlenen, Fallbackwert.

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

Das erste Argument ist der [Name der Umgebungsvariable](#vom_browser_definierte_umgebungsvariablen), der ersetzt werden soll. Das Argument nach dem Komma, falls angegeben, ist der Fallbackwert, der verwendet wird, wenn die in dem ersten Argument referenzierte Umgebungsvariable nicht existiert. In diesen Beispielen wird, wenn die `preferred-text-scale`-Umgebungsvariable in einem Browser nicht existiert, die {{cssxref("line-height")}} auf `2` gesetzt. Und wenn der Browser keine `safe-area-inset-*`-Werte hat, wird die {{cssxref("margin")}} auf `margin: 0 auto 3em auto` gesetzt.

Die Syntax des Fallbacks ähnelt der Syntax bei benutzerdefinierten Eigenschaften, da sie mehrere Kommas erlaubt. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallbackwert betrachtet. Wenn der Eigenschaftswert oder der Deskriptor jedoch keine Kommas unterstützt, ist der Wert nicht gültig.

Wenn eine Eigenschaft oder ein Deskriptor syntaktisch gültige `env()`-Funktionen enthält, wird angenommen, dass sie zur Parsing-Zeit gültig sind. Sie werden nur zur Syntax-Zeit überprüft, nachdem die `env()`-Funktionen durch ihre vom Browser bereitgestellten Werte ersetzt wurden. Wenn die Umgebungsvariable, die als erster Parameter übergeben wird, kein anerkannter Umgebungsvariablenname ist, wird der Fallbackwert verwendet. Der Fallback kann eine andere Umgebungsvariable sein, sogar mit einem eigenen Fallback. Wenn kein Fallback bereitgestellt wurde, ist die Eigenschaft oder der Deskriptor, der die `env()`-Funktion enthält, zur Berechnungswertzeit ungültig.

## Verwendung von Umgebungsvariablen mit `env()`-Beispiel

Wir können Umgebungsvariablen verwenden, um sicherzustellen, dass eine feststehende App-Toolbar nicht von Benachrichtigungen verdeckt wird, die am unteren Rand des Geräts erscheinen. Auf Geräten, die Benachrichtigungen am unteren Rand des Bildschirms anzeigen, wird der User-Agent den Wert der `safe-area-inset-bottom`-Umgebungsvariablen auf die Distanz vom oberen Rand dessen, was das Ansichtsfenster blockiert, bis zum unteren Rand einstellen; in unserem Beispiel ist dies wahrscheinlich die Höhe der sichtbaren Benachrichtigungen. Auf einem rechteckigen Desktop-Monitor ist die `safe-area-inset-bottom` im Allgemeinen `0`. Wir werden diesen Wert verwenden, um am unteren Rand des Ansichtsfensters Platz zu schaffen, damit die Benachrichtigung angezeigt werden kann, ohne den Inhalt zu verdecken.

Unser {{htmlelement("body")}} hat zwei Kinder; das {{htmlelement("main")}} enthält unsere gesamte Anwendung mit Ausnahme der {{htmlelement("footer")}}-Toolbar.

```html
<body>
  <main>Application</main>
  <footer>Toolbar</footer>
</body>
```

Das `<body>` ist als Flex-Container definiert, der die Höhe des Ansichtsfensters ausfüllt. Die `<main>`-Anwendung darf wachsen, um jeden Platz zu füllen, der nicht von seinem Geschwister-<footer> eingenommen wird.

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

Das `<footer>` ist so positioniert, dass es am unteren Rand des Ansichtsfensters haftet. Die Deklaration [`position: sticky`](/de/docs/Web/CSS/Reference/Properties/position#sticky) versetzt das Element relativ zum `<body>` (seinem scrollenden Vorfahren und [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block)), basierend auf dem {{cssxref("bottom")}}-Wert von `0`. Wir geben dem `<footer>` einen {{cssxref("padding")}}-Wert von `1em` auf allen vier Seiten. Wir fügen dann den Wert von `safe-area-inset-bottom` zu den `1em` unteren Innenabstand hinzu, mit einem Fallback von `1em`.

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em;
  padding-bottom: calc(1em + env(safe-area-inset-bottom, 1em));
}
```

Zusätzliche CSS wird aus Gründen der Kürze ausgeblendet.

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

Der untere Innenabstand des Footers wird auf Geräten, die die `safe-area-inset-bottom`-Umgebungsvariable mit einem Wert größer als `0` haben, über `1em` hinausgehen. Dieses CSS bietet zusätzlichen Innenabstand, um den Footer bei Bedarf zu vergrößern, sei es wegen Benachrichtigungen, einer Geräteschirmkerbe oder weil das Gerät keine quadratischen Ecken hat.

{{EmbedLiveSample("Using environment variables with env example", "200", "500")}}

In Zukunft könnten wir Unterstützung für von Entwicklern definierte Umgebungsvariablen sehen, aber dies ist noch nicht definiert oder implementiert worden.

## Siehe auch

- {{cssxref("var")}}
- [`@media` `shape` descriptor](/de/docs/Web/CSS/Reference/At-rules/@media/shape)
- [CSS environment_variables](/de/docs/Web/CSS/Guides/Environment_variables) module
- [CSS round display](/de/docs/Web/CSS/Guides/Round_display) module
- [CSS custom properties for cascading variables](/de/docs/Web/CSS/Guides/Cascading_variables) module
