---
title: "ARIA: Schieberegler-Rolle"
slug: Web/Accessibility/ARIA/Roles/slider_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `slider` Rolle definiert eine Eingabe, bei der der Benutzer einen Wert aus einem vorgegebenen Bereich auswählt.

## Beschreibung

Die `slider`-Rolle ist für Bereichs-Eingabewidgets gedacht, bei denen der Benutzer einen Wert aus einem vorgegebenen Minimum und Maximum auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA stellt Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) zur Verfügung, darunter Fortschrittsbalken, Messgeräte und Schieberegler.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role) Rolle, ähnlich dem HTML-{{HTMLElement('progress')}}-Element, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe anzeigt, indem er in eine Richtung fortschreitet, wie z. B. der Ladefortschrittsbalken eines Datei-Uploads, der schließlich 100% erreicht, wenn der Ladevorgang abgeschlossen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role) Rolle, ähnlich dem HTML-{{HTMLElement('meter')}}-Element, ist ein schreibgeschütztes Messgerät, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie z. B. ein Batterieanzeiger eines Computers oder ein Benzinmesser eines Autos.

Die `slider`-Rolle, ähnlich dem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein schreib- und leseinfügbarer Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen, indem sie einen Schiebereglerknopf entlang eines horizontalen oder vertikalen Schiebers bewegen, um einen Wert auszuwählen.

Während alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `slider`-Rolle der einzige schreibbare Bereich: Es ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss er fokussierbar sein. Darüber hinaus muss die Unterstützung von Tastaturinteraktion, Mausklicks und Berührungsinteraktionen gewährleistet sein.

> [!WARNING]
> Um den Schiebereglerwert zu ändern, müssen berührungsbasierte unterstützende Technologien auf Benutzerbewegungen reagieren, die das Erhöhen und Verringern des Wertes durch das Erzeugen von Tasteneingaben umsetzen.
> Testen Sie Schieberegler-Widgets vollständig mit unterstützenden Technologien auf Geräten, bei denen Berührung das primäre Eingabemechanismus ist, bevor Sie die `slider`-Rolle (und alle Bereichs-Widgets) verwenden.

#### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut legt den Minimalwert fest. Wenn es weggelassen wird oder keine Zahl ist, lautet der Standardwert `0` (Null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, lautet der Standardwert 100.

Der Wert von [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) muss zwischen den Minimal- und Maximalwerten liegen, einschließlich. Dieses Attribut ist für `slider` und `meter` erforderlich und für `progressbar` optional.

Für `slider`, sofern nicht das [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Element verwendet wird, muss der Wert von `aria-valuenow` programmgesteuert aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut wird einbezogen, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des Schiebereglers widerspiegelt. Da die Minimal-, Maximal- und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert einbezogen werden, der den numerischen Wert definiert, wenn die durch diese Zahlen dargestellten Werte nicht numerisch sind. Beispielsweise, wenn ein Schieberegler für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von xx-small zu XX-large wechseln, während `aria-valuenow` zunimmt.

Der Wert von `aria-valuetext` muss aktualisiert werden, sobald `value` oder `aria-valuenow` aktualisiert werden. Es gibt kein äquivalentes HTML-Attribut für `<input type="range">`, Sie können `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einbeziehen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Feature für einen Schieberegler ist, sollten Sie in Betracht ziehen, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Auch wenn es optisch kein Bereich ist, ist der Wert jeder Option für alle Benutzer zugänglicher, nicht nur für Benutzer unterstützender Technologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle des Bereichs auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht verwendet wird, um Ihren Schieberegler zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut hinzu, um den Schieberegler fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und erfordert daher die Möglichkeit, fokussiert werden zu können. Der Fokus sollte auf dem Schiebereglerknopf platziert werden.

Schieberegler haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird nicht mit `meter` oder `progressbar` unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten `meter`- und `progressbar`-Rollen ist ein `slider` eine Eingabe, die Benutzerinteraktion akzeptiert. Neben dem einschließen des [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attributs, um den Schiebereglerfokus zu ermöglichen, muss Tastatur- und Zeigegeräte-Unterstützung implementiert werden.

Der Schieberegler repräsentiert den Bereich der möglichen Werte. Die Position des Schiebereglerknopfes entlang des Schiebers repräsentiert den aktuellen Wert. Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Wertes durch Ziehen des Knopfes oder Klicken auf den Schieberegler für Zeigegeräte und Verwenden von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der `slider`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das Bereichs-Eingabeelement basierend auf dem aktuellen `value`, wie es zu den Minimal- und Maximalwerten steht. Wenn nicht-semantische Elemente verwendet werden, müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Bereich mit mehreren Knöpfen

Ein Schieberegler mit mehreren Knöpfen ist ein Schieberegler mit zwei oder mehr Knöpfen, die jeweils einen Wert in einer Gruppe verwandter Werte setzen. Beispielsweise könnte ein Schieberegler mit zwei Knöpfen in einer Produktsuche verwendet werden, um Benutzern das Festlegen von Minimal- und Maximalpreisen für die Suche zu ermöglichen.

In vielen Schiebereglern mit zwei Knöpfen dürfen die Knöpfe nicht aneinander vorbeigehen, wie wenn der Schieberegler die Minimal- und Maximalwerte für einen Bereich festlegt. Beispielsweise ist im Preisspanne-Selektor der Maximalwert des Knopfes, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Knopfes begrenzt, der das obere Ende des Bereichs festlegt. Der Minimalwert des oberen Knopfes ist ebenfalls durch den aktuellen Wert des unteren Knopfes begrenzt.

Es ist nicht erforderlich, dass die Knöpfe in Schiebereglern mit mehreren Knöpfen von den anderen Knopfwerten abhängig sind, aber eine intuitive Benutzererfahrung ist erforderlich, daher wird empfohlen, diese Anti-Pattern zu vermeiden.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API repräsentiert werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente, die in einem `slider` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommentelemente eines beliebigen `slider`-Elements an, da es sich um eine Rolle handelt, die semantische Kinder nicht unterstützt.

Zum Beispiel betrachten Sie folgendes `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperatur in Celsius</h3></div>
```

Da Nachkommen von `slider` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="slider"><h3 role="presentation">Temperatur in Celsius</h3></div>
```

Aus der Perspektive eines Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte gleichwertig mit dem Folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) sind:

```html
<div role="slider">Temperatur in Celsius</div>
```

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Schiebereglers angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht genau wäre, verwenden Sie `aria-valuetext`, um dem Schieberegler einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Minimalwert darstellt, und kleiner als `aria-valuemax`. Wenn nicht vorhanden, lautet der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Maximalwert darstellt, und größer als `aria-valuemin`. Wenn nicht vorhanden, lautet der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Schieberegler-Element beschriften und damit einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Schieberegler ist der implizite Wert `horizontal`, kann aber auf `vertical` gesetzt werden. Da es einen impliziten Wert hat, ist die Orientierung des Schiebereglers niemals mehrdeutig.

## Beispiele

Im folgenden Beispiel erstellen wir ein vertikales Thermometer, mit dem der Benutzer die Raumtemperatur einstellen kann:

```html
<div>
  <div id="temperatureLabel">Temperatur</div>
  <div id="temperatureValue">20°C</div>
  <div id="temperatureSlider">
    <div
      id="temperatureSliderThumb"
      role="slider"
      aria-labelledby="temperatureLabel"
      aria-orientation="vertical"
      tabindex="0"
      aria-valuemin="15.0"
      aria-valuemax="25.0"
      aria-valuenow="20.0"
      aria-valuetext="20 degrees Celsius"
      style="top: calc((25 - 20)*2rem - 0.5rem)"></div>
  </div>
</div>
```

Die Position des Knopfes ergibt sich aus dem Maximalwert minus dem aktuellen Wert multipliziert mit der Höhe eines Grades, minus der halben Höhe des Knopfes, um ihn zu zentrieren. Der Rest der Stile ist statisch.

```css
[id="temperatureSlider"] {
  position: relative;
  height: 20rem;
  width: 1rem;
  outline: 1px solid;
  margin: 3rem;
}

[id="temperatureSliderThumb"] {
  position: absolute;
  height: 1rem;
  width: 2rem;
  background-color: currentcolor;
  left: -0.5rem;
}
```

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigerereignisse verarbeitet, einschließlich Event-Listener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, sowie Stile für den Standardzustand und wenn der Knopf und der Schieberegler den Fokus erhalten. Die Position des Knopfes, die Werte von `aria-valuenow` und `aria-valuetext` und der innere Text des Elements mit [`id`](/de/docs/Web/HTML/Global_attributes#id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und optional <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden und wenn der Benutzer den Knopf zieht oder auf den Temperaturschieber klickt.

Mit semantischem HTML könnte dies so geschrieben werden:

```html
<label for="temperature"> Temperatur </label>
<output id="temperatureValue">20°C</output>
<input
  type="range"
  id="temperatureSlider"
  min="15"
  max="25"
  step="0.1"
  value="20"
  aria-valuetext="20 degrees celsius"
  style="transform: rotate(-90deg);" />
```

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichs-Eingabe-Widget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und aktualisiertem `value` bei der Benutzerinteraktion. Wir müssen trotzdem JavaScript verwenden, um das `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt verschiedene Möglichkeiten, eine Bereichseingabe vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Tastaturinteraktionen

| Taste(n)             | Aktion                                                              |
| -------------------- | ------------------------------------------------------------------- |
| Rechts- und Aufwärtspfeile | Erhöht den ausgewählten Wert um einen Schritt                   |
| Links- und Abwärtspfeile | Verringert den ausgewählten Wert um einen Schritt                |
| Bild auf              | (Optional) Erhöht den Wert um einen festgelegten Betrag, der größer als ein Schritt ist |
| Bild ab               | (Optional) Verringert den Wert um einen festgelegten Betrag, der größer als ein Schritt ist |
| Start                 | Setzt den Schieberegler auf den Minimalwert.                      |
| Ende                  | Setzt den Schieberegler auf den Maximalwert.                       |

Für die optionalen Tasten <kbd>Page Up</kbd> und <kbd>Page Down</kbd> sollte die Änderung des Schiebereglerwertes um einen Betrag erfolgen, der größer ist als die Schrittänderungen durch Aufwärts- und Abwärtspfeile.

## Beste Praktiken

Wenn der Schieberegler den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut hinzu, um den Schiebereglerstatus zu referenzieren, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attribut auf `true` in dem Bereich, bis dieser vollständig geladen ist.

HTML's `<input type="range">` hat implizit die `role` von `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute auf `<input type="range">`-Elementen; verwenden Sie stattdessen `min` und `max`. Ansonsten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die auf die Schieberrolle anwendbar sind.

### Bevorzugen Sie HTML

Es wird empfohlen, ein natives {{HTMLElement("input")}} des Typs `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), anstelle der `slider`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}} Element
- HTML {{HTMLElement('meter')}} Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- Funktionierende Beispiele:
  - [Horizontaler Schieberegler mit mehreren Knöpfen](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/multithumb-slider.html)
  - [Horizontaler Schieberegler](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-1.html)
  - [Schieberegler mit `aria-orientation` und `aria-valuetext`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-2.html)
