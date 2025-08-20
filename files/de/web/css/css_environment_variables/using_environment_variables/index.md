---
title: Verwenden von Umgebungsvariablen
slug: Web/CSS/CSS_environment_variables/Using_environment_variables
l10n:
  sourceCommit: 10f562a8a12f7bbf4b35b21de449c721ed756eb4
---

Das [CSS-Umgebungsvariablenmodul](/de/docs/Web/CSS/CSS_environment_variables) führt das Konzept von Umgebungsvariablen in CSS ein und definiert die {{cssxref("env")}}-Funktion, um die Nutzung von Umgebungsvariablen zu ermöglichen. In diesem Leitfaden betrachten wir, [was Umgebungsvariablen sind](#what_are_environment_variables), die [vom Browser definierten Umgebungsvariablen](#browser_defined_environment_variables) und [wie Umgebungsvariablen verwendet werden](#using_environment_variables_with_env_example) mit [der `env()`-Funktion](#the_env_function).

## Was sind Umgebungsvariablen?

CSS-Umgebungsvariablen sind globale Variablen; sie sind global auf das gesamte Dokument angewandt. Sie werden vom User-Agent definiert. Umgebungsvariablen sind spezielle Werte, die vom Browser oder Betriebssystem bereitgestellt werden und helfen, Ihre Styles an das Gerät oder den Kontext des Benutzers anzupassen. Sie werden mit der `env()`-Funktion abgerufen.

Umgebungsvariablen funktionieren ähnlich wie [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und die {{cssxref("var()")}}-Funktion, sind jedoch global definiert und angewandt. Das bedeutet, dass sie immer auf das gesamte Dokument angewandt werden, im Gegensatz zu benutzerdefinierten Eigenschaften, die auf Elemente angewandt werden. Darüber hinaus sind Umgebungsvariablen schreibgeschützt, während benutzerdefinierte Eigenschaften veränderbar sind.

Ähnlich wie benutzerdefinierte Eigenschaften sind Umgebungsvariablen groß- und kleinschreibungssensitiv. Im Gegensatz zu benutzerdefinierten Eigenschaften, die außerhalb von Deklarationen nicht verwendet werden können, kann die `env()`-Funktion anstelle eines beliebigen Teils eines Eigenschaftswerts oder eines Teils eines Deskriptors verwendet werden (zum Beispiel in [Media-Query-Regeln](/de/docs/Web/CSS/@media)).

### Geschichte

Apple hat Umgebungsvariablen zuerst im iOS Safari-Browser eingeführt, um es Entwicklern zu ermöglichen, Layouts für unregelmäßige Gerätdisplays zu optimieren. Beispiele sind Displays mit Einkerbungen und abgerundeten Kanten. Die ursprünglichen `safe-area-inset-*`-Umgebungsvariablen ermöglichen es Entwicklern, Inhalte in einem sicheren Bereich des Ansichtsfensters zu platzieren, unabhängig davon, welches Gerät oder welcher Browser vom Benutzer verwendet wird.

### Anwendungsfälle

Typische Probleme, die durch die Verwendung von Umgebungsvariablen gelöst werden können, umfassen:

- Benachrichtigungen des Geräts, die Teile der Benutzeroberfläche der App überdecken.
- Umgang mit Änderungen der Ansichtsfenstergröße, wenn dynamische Tastaturen ein- und ausgeblendet werden.
- Positionierung von Elementen dort, wo sich die Titelleiste auf [progressiven Web-Apps](/de/docs/Web/Progressive_web_apps) (PWAs) befunden hätte, wenn sie installiert sind und sicherstellen, dass Inhalte nicht mit den Fenstersteuerungstasten in Konflikt geraten. Dies ist insbesondere bei Desktop-Browsern ein Problem.

## Vom Browser definierte Umgebungsvariablen

Die CSS-Umgebungsvariablenspezifikation definiert einige groß- und kleinschreibungssensitive Variablen, einschließlich:

- `preferred-text-scale`
  - : Die `preferred-text-scale`-Umgebungsvariable repräsentiert den bevorzugten Textskalierungsfaktor des Benutzers. Dies ist die Anpassung, die an der "Standardeinstellung" der Schriftgröße des Betriebssystems oder User-Agents vorgenommen wird. Auf Geräten und Browsern, bei denen {{cssxref("text-size-adjust")}} eine Wirkung hat, ist dies der Skalierungsfaktor, der durch `text-size-adjust: auto.` angewandt wird. Beispielsweise, wenn `text-size-adjust:auto` dazu führen würde, dass die Schriftgröße verdoppelt wird, dann würde `env(preferred-text-scale)` auf `2` aufgelöst.

- `safe-area-inset-*`
  - : Die vier safe-area-inset-Umgebungsvariablen - `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom` und `safe-area-inset-left` - definieren einen rechteckigen sicheren Bereich durch seine oberen, rechten, unteren und linken Einsätze vom Rand des Ansichtsfensters. Es ist sicher, Inhalte in diesem Bereich zu platzieren, ohne dass sie durch die Form eines nicht rechteckigen Displays abgeschnitten werden. Bei rechteckigen, unbehinderten Ansichtsbereichen, wie bei normalen Desktop- und Laptopmonitoren, sind diese vier Werte alle gleich `0`. Bei nicht rechteckigen Displays — einschließlich Geräten mit abgerundeten Ecken mit Vollbildschirmen und runden oder [runden Displays](/de/docs/Web/CSS/CSS_round_display) von Smartwatches — bilden diese vier vom User-Agent festgelegten Werte ein Rechteck, sodass alle Inhalte innerhalb des Rechtecks sichtbar und ungehindert sind.

- `safe-area-max-inset-*`
  - : Die vier maximalen safe-area-inset-Umgebungsvariablen - `safe-area-max-inset-top`, `safe-area-max-inset-right`, `safe-area-max-inset-bottom` und `safe-area-max-inset-left` - repräsentieren jeweils den statischen Maximalwert ihrer dynamischen `safe-area-inset-*`-Variablenäquivalente. Sie stellen den Maximalwert ihres `safe-area-inset-*`-Äquivalents dar, wenn alle dynamischen Benutzeroberflächenmerkmale eingezogen sind. Beispielsweise gibt es auf einigen Plattformen möglicherweise eine Schaltflächenleiste, die beim Hoch- oder Runterscrollen angezeigt wird und die `safe-area-inset-*`-Werte ändert. Während sich die `safe-area-inset-*`-Werte ändern, sobald der aktuell sichtbare Inhaltsbereich sich ändert, bleiben die `safe-area-max-inset-*`-Werte immer gleich.

- `viewport-segment-*`
  - : Diese Variablen sind nur für Geräte relevant, die mehrere Segmente haben, wie faltbare Telefone. Die `viewport-segment-bottom`, `viewport-segment-left`, `viewport-segment-right` und `viewport-segment-top` Variablen sowie die `viewport-segment-height` und `viewport-segment-width` definieren die Position und Dimensionen logisch getrennter Bereiche des Ansichtsfensters. Diese Variablen werden nur definiert, wenn das Ansichtsfenster in mindestens zwei Segmente unterteilt ist. Sie werden verwendet, um unterschiedliche Teile einer Benutzeroberfläche bequem in verschiedene Segmente eines Mehrsegment-Geräts zu platzieren, um zu vermeiden, dass Ihre Inhalte durch den Falz abgeschnitten werden.

Andere Spezifikationen definieren zusätzliche Umgebungsvariablen.

Die [Window Controls Overlay API](/de/docs/Web/API/Window_Controls_Overlay_API) definiert die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle, die Informationen über die Geometrie des Titelleistenbereichs in {{Glossary("Progressive_web_apps", "progressiven Webanwendungen (PWAs)")}} bereitstellt, die auf Desktop-Geräten installiert sind. Bei der Verwendung des `window-controls-overlay` [display_override](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Werts werden die folgenden Umgebungsvariablen definiert:

- `titlebar-area-*`
  - : Die `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` Variablen definieren den Bereich, der normalerweise von der Titelleiste in einer installierten Webanwendung in einer Desktop-Umgebung eingenommen wird. Verwenden Sie die `titlebar-area-*`-Variablen, um sicherzustellen, dass Inhalte nicht mit den Fenstersteuerungstasten (d. h. Minimieren, Maximieren und Schließen) überlappen.

- `keyboard-inset-*`
  - : Die `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width` und `keyboard-inset-height` Variablen geben Informationen über die Position und Größe der virtuellen Bildschirmtastatur, insbesondere deren obere, rechte, untere und linke Einsätze vom Rand des Ansichtsfensters (die Breiten- und Höheneinsätze werden aus den anderen Einsätzen berechnet),. Erfahren Sie mehr darüber in der [VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API).

Vielleicht haben Sie bemerkt, dass alle bisherigen Variablennamen die physischen Begriffe links, rechts, oben, unten, Höhe und Breite enthalten. Logische Entsprechungen sind nicht erforderlich, da sich die Variablennamen auf die physischen Eigenschaften der Gerätehardware und nicht auf die angezeigte Website beziehen.

## Die `env()`-Funktion

Die {{cssxref("env")}}-Funktion wird verwendet, um den Wert einer Umgebungsvariablen in einen CSS-Kontext einzufügen. Die `env()`-Funktion kann anstelle eines beliebigen Teils eines Werts in einer beliebigen Eigenschaft eines Elements oder eines beliebigen Teils eines Werts in einem beliebigen Deskriptor bei einer beliebigen @-Regel, einschließlich benutzerdefinierter Eigenschaftswerte, verwendet werden. Sie kann überall dort verwendet werden, wo ein CSS-Wert erlaubt ist.

Die grundlegende Syntax ist wie folgt:

```css-nolint
env( <environment-variable-name> )
env( <environment-variable-name>, <fallback-value> )
```

Die Funktion akzeptiert einen groß- und kleinschreibungssensitiven [Namen der Umgebungsvariablen](#browser_defined_environment_variables) und einen optionalen, jedoch generell empfohlenen, Fallback-Wert.

```css
line-height: env(preferred-text-scale, 2);
margin: env(safe-area-inset-top, 0) env(safe-area-inset-right, auto)
  env(safe-area-inset-bottom, 3em) env(safe-area-inset-left, auto);
```

Das erste Argument ist der [Name der Umgebungsvariablen](#browser_defined_environment_variables), der ersetzt werden soll. Das Argument nach dem Komma, falls vorhanden, ist der Fallback-Wert, der verwendet wird, wenn die im ersten Argument referenzierte Umgebungsvariable nicht existiert. In diesen Beispielen, wenn die `preferred-text-scale`-Umgebungsvariable in einem Browser nicht existiert, wird die {{cssxref("line-height")}} auf `2` gesetzt. Und wenn der Browser keine `safe-area-inset-*`-Werte hat, wird die {{cssxref("margin")}} auf `margin: 0 auto 3em auto` gesetzt.

Die Syntax des Fallbacks ist ähnlich wie die der benutzerdefinierten Eigenschaften, da sie es erlaubt, mehrere Kommata zu verwenden. Alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet. Wenn der Eigenschaftswert oder der Deskriptor jedoch keine Kommata unterstützt, ist der Wert nicht gültig.

Wenn eine Eigenschaft oder ein Deskriptor syntaktisch gültige `env()`-Funktionen enthält, wird davon ausgegangen, dass sie zur Zeit der Analyse gültig sind. Sie wird nur zur Zeit der Berechnung auf Syntax überprüft, nachdem die `env()`-Funktionen durch ihre vom Browser bereitgestellten Werte ersetzt wurden. Wenn die als erster Parameter übergebene Umgebungsvariable kein anerkannter Umgebungsvariablenname ist, wird der Fallback-Wert verwendet. Der Fallback kann eine andere Umgebungsvariable sein, sogar mit einem eigenen Fallback. Wenn kein Fallback angegeben wurde, ist die Eigenschaft oder der Deskriptor, der die `env()`-Funktion enthält, zur Berechnungszeit ungültig.

## Beispiel für die Verwendung von Umgebungsvariablen mit `env()`

Wir können Umgebungsvariablen verwenden, um sicherzustellen, dass eine feste App-Toolbar nicht durch Benachrichtigungen verdeckt wird, die am unteren Rand des Geräts erscheinen. Bei Geräten, die Benachrichtigungen am unteren Ende des Bildschirms anzeigen, legt der User-Agent den Wert der `safe-area-inset-bottom`-Umgebungsvariablen als Abstand vom oberen Rand dessen fest, was das Ansichtsfenster blockiert, bis zum unteren Rand des Ansichtsfensters; in unserem Beispiel ist dies wahrscheinlich die Höhe sichtbarer Benachrichtigungen. Auf einem rechteckigen Desktop-Monitor ist die `safe-area-inset-bottom` im Allgemeinen `0`. Wir werden diesen Wert verwenden, um Platz am unteren Rand des Ansichtsfensters zu schaffen, damit die Benachrichtigung angezeigt wird, ohne den Inhalt zu verdecken.

Unser {{htmlelement("body")}} hat zwei Kinder; der {{htmlelement("main")}} enthält unsere gesamte Anwendung mit Ausnahme der {{htmlelement("footer")}}-Toolbar.

```html
<body>
  <main>Application</main>
  <footer>Toolbar</footer>
</body>
```

Der `<body>` wird als Flex-Container definiert, der die Höhe des Ansichtsfensters ausfüllt. Die `<main>`-Anwendung darf wachsen, um jeden Raum auszufüllen, der nicht von ihrem Geschwister `<footer>` eingenommen wird.

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

Das `<footer>` ist so positioniert, dass es am unteren Rand des Ansichtsfensters klebt. Die Deklaration [`position: sticky`](/de/docs/Web/CSS/position#sticky) versetzt das Element relativ zum `<body>` (ihrem Scrolling-Vorfahren und [enthältendem Block](/de/docs/Web/CSS/CSS_display/Containing_block)), basierend auf dem {{cssxref("bottom")}}-Wert von `0`. Wir geben dem `<footer>` einen {{cssxref("padding")}}-Wert von `1em` auf allen vier Seiten. Wir fügen dann den `safe-area-inset-bottom`-Wert zu den `1em` unteren Padding hinzu, mit einem Fallback von `1em`.

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em;
  padding-bottom: calc(1em + env(safe-area-inset-bottom, 1em));
}
```

Zusätzliche CSS ist zur Übersichtlichkeit verborgen.

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

Das untere Padding des Fußbereichs wird über `1em` hinausreichen bei Geräten, die die `safe-area-inset-bottom`-Umgebungsvariable mit einem Wert größer als `0` haben. Dieses CSS bietet zusätzliche Abstände, um den Fußbereich bei Bedarf zu vergrößern, sei es durch Benachrichtigungen, eine Einkerbung im Bildschirm oder weil das Gerät keine quadratischen Ecken hat.

{{EmbedLiveSample("Using environment variables with env example", "200", "500")}}

In Zukunft könnten wir Unterstützung für von Entwicklern definierte Umgebungsvariablen sehen, aber dies ist bisher weder definiert noch implementiert.

## Siehe auch

- {{cssxref("var")}}
- {{cssxref("@media/shape", "@media `shape` descriptor")}}
- [CSS Umgebungsvariablen](/de/docs/Web/CSS/CSS_environment_variables) Modul
- [CSS Rundanzeige](/de/docs/Web/CSS/CSS_round_display) Modul
- [CSS benutzerdefinierte Eigenschaften für Kaskadenvariablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
