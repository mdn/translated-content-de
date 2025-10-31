---
title: "ARIA: Slider-Rolle"
short-title: slider
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die `slider`-Rolle definiert eine Eingabe, bei der der Benutzer einen Wert aus einem vorgegebenen Bereich auswählt.

## Beschreibung

Die `slider`-Rolle ist für Bereicheingabe-Widgets gedacht, bei denen der Benutzer einen Wert innerhalb vorgegebener minimaler und maximaler Werte auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Bereiche, darunter `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('progress')}}, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe anzeigt, der in eine Richtung verläuft, wie beispielsweise eine Ladefortschrittsleiste für Datei-Uploads, die schließlich 100 % erreicht, wenn sie vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('meter')}}, ist ein schreibgeschütztes Messgerät, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie beispielsweise einen Batteriezustandsanzeiger eines Computers oder eine Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich einem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist eine Lese-/Schreib-Bereicheingabe. Slider ermöglichen es Benutzern, einen Wert zwischen festgelegten minimalen und maximalen Werten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schiebereglerknopf entlang eines horizontalen oder vertikalen Sliders bewegt.

Obwohl alle drei dieser Bereiche die gleichen ARIA-Zustände und -Eigenschaften haben, ist die `slider`-Rolle der einzige Lese-/Schreib-Bereich: Es ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss er in der Lage sein, den Fokus zu erhalten. Darüber hinaus müssen Tastaturinteraktion, Mausklicks und Berührungsinteraktion unterstützt werden.

> [!WARNING]
> Um den Slider-Wert zu ändern, müssen berührungsbasierte Hilfstechnologien auf Benutzerbewegungen reagieren, um den Wert durch die Erzeugung von Tastenereignissen zu erhöhen oder zu verringern.
> Testen Sie Slider-Widgets umfassend mit Hilfstechnologien auf Geräten, bei denen die Berührungseingabe ein primärer Eingabemechanismus ist, bevor Sie die `slider`-Rolle (und alle Bereichswidgets) verwenden.

### Gemeinsame Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Minimalwert fest. Wenn es weggelassen wird oder keine Zahl ist, ist der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, ist der Standardwert 100.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen den minimalen und maximalen Werten liegen, einschließlich. Dieses Attribut ist für `slider` und `meter` erforderlich und für `progressbar` optional.

Für `slider`, sofern nicht das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element verwendet wird, muss der `aria-valuenow`-Wert programmgesteuert aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird mit einbezogen, wenn der `aria-valuenow`-Zahlenwert den beabsichtigten Wert des Sliders nicht widerspiegelt. Da die minimalen, maximalen und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut mit einem String-Wert einbezogen werden, der den numerischen Wert definiert, wenn die Zahlenwerte, die diese Zahlen darstellen, nicht numerisch sind. Zum Beispiel, wenn ein Slider für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von xx-small bis zu XX-large wechseln, während `aria-valuenow` zunimmt.

Der Wert von `aria-valuetext` muss aktualisiert werden, wenn der `value` oder `aria-valuenow` aktualisiert wird. Obwohl es kein äquivalentes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` für jedes {{htmlelement('input')}}-Typ-Element einbeziehen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal für einen Slider ist, sollten Sie in Betracht ziehen, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Auch wenn es optisch kein Bereich ist, ist der Wert jeder Option für alle Benutzer besser zugänglich, nicht nur für Benutzer von Hilfstechnologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Bereichsrolle auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Verwenden Sie andernfalls [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht verwendet wird, um Ihren Slider zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um den Slider fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und daher der einzige, der in der Lage sein muss, den Fokus zu erhalten. Der Fokus sollte auf den Slider-Knopf gelegt werden.

Slider haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird nicht mit `meter` oder `progressbar` unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktionen akzeptiert. Zusätzlich zur Einbeziehung des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs, um den Slider fokussierbar zu machen, muss Unterstützung für Tastatur- und Zeigegeräte implementiert werden.

Der Slider repräsentiert den Bereich der möglichen Werte. Die Position des Slider-Knopfs auf dem Slider stellt den aktuellen Wert dar. Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Werts durch Ziehen des Knopfs oder Klicken auf den Slider für Zeigegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente anstelle der `slider`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das Bereichseingabeelement basierend auf dem aktuellen `value`, wie es sich zu den minimalen und maximalen Werten verhält. Bei Verwendung von nicht-semantischen Elementen müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### Bereich mit mehreren Knöpfen

Ein Multi-Knopf-Slider ist ein Slider mit zwei oder mehr Knöpfen, die jeweils einen Wert in einer Gruppe verwandter Werte festlegen. Zum Beispiel könnte ein Zwei-Knopf-Slider in einer Produktsuche verwendet werden, um Benutzern zu ermöglichen, die minimalen und maximalen Preisgrenzen für die Suche festzulegen.

In vielen Zwei-Knopf-Slidern dürfen die Knöpfe nicht aneinander vorbeigleiten, wie zum Beispiel, wenn der Slider die minimalen und maximalen Werte für einen Bereich festlegt. Zum Beispiel bei einem Preisbereichsselektor ist der Maximalwert des Knopfs, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Knopfs, der das obere Ende des Bereichs festlegt, begrenzt. Der Minimalwert des oberen Knopfs ist ebenfalls durch den aktuellen Wert des unteren Knopfs begrenzt.

Es ist keine Anforderung, dass die Knöpfe in Multi-Knopf-Slidern von den Werten der anderen Knöpfe abhängig sind, aber eine intuitive Benutzererfahrung ist eine Anforderung, daher wird empfohlen, dieses Anti-Muster zu vermeiden.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einem Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility-APIs haben keine Möglichkeit, semantische Elemente darzustellen, die in einem `slider` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommelemente eines `slider`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachkommen von `slider` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive eines Benutzers von Hilfstechnologie existiert die Überschrift nicht, da die vorherigen Code-Auszüge äquivalent zu den folgenden im {{Glossary("Accessibility_tree", "Accessibility-Tree")}} sind:

```html
<div role="slider">Temperature in Celsius</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Setzen Sie auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax`, der den aktuellen Wert des Sliders anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Hilfstechnologien präsentieren häufig den Wert von `aria-valuenow` als Zahl. Wenn dies nicht zutreffend wäre, verwenden Sie `aria-valuetext`, um dem Slider einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Setzen Sie auf einen Dezimalwert, der den Minimalwert darstellt und kleiner ist als `aria-valuemax`. Wenn nicht vorhanden, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Setzen Sie auf einen Dezimalwert, der den Maximalwert darstellt und größer ist als `aria-valuemin`. Wenn nicht vorhanden, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Slider-Element beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Slider ist der implizite Wert `horizontal`, kann jedoch auf `vertical` gesetzt werden. Da er einen impliziten Wert hat, ist die Slider-Ausrichtung niemals mehrdeutig.

### Tastaturinteraktionen

| Taste(n)                   | Aktion                                                                                 |
| -------------------------- | -------------------------------------------------------------------------------------- |
| Rechte und Aufwärts-Pfeile | Erhöhen Sie den ausgewählten Wert um einen Schritt                                     |
| Linke und Abwärts-Pfeile   | Verringern Sie den ausgewählten Wert um einen Schritt                                  |
| Page Up                    | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag größer als ein Schritt    |
| Page Down                  | (Optional) Verringern Sie den Wert um einen festgelegten Betrag größer als ein Schritt |
| Home                       | Setzen Sie den Slider auf den minimalen Wert.                                          |
| End                        | Setzen Sie den Slider auf den maximalen Wert.                                          |

Für die optionalen <kbd>Page Up</kbd> und <kbd>Page Down</kbd>-Tasten sollte die Änderung des Slider-Werts um einen Betrag größer sein als die Schrittänderungen, die von den Aufwärts- und Abwärtspfeiltasten vorgenommen werden.

## Beispiele

Im folgenden Beispiel erstellen wir ein vertikales Thermometer, mit dem der Benutzer die Raumtemperatur einstellen kann:

```html
<div>
  <div id="temperatureLabel">Temperature</div>
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

Die Position des Knopfs ist der maximale Wert minus den aktuellen Wert multipliziert mit der Höhe eines Grades, minus die Hälfte der Höhe des Knopfs, um ihn zu zentrieren. Die restlichen Styles sind statisch.

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
  background-color: currentColor;
  left: -0.5rem;
}
```

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, um alle Tastatur- und Zeigegeräteereignisse zu behandeln, einschließlich Ereignislistener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`. Außerdem müssen wir Stile für den Standardzustand und wenn der Knopf und der Slider den Fokus erhalten, bereitstellen. Die Position des Knopfs, die `aria-valuenow`- und `aria-valuetext`-Werte und der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>Pfeil Links</kbd>, <kbd>Pfeil Unten</kbd>, <kbd>Pfeil Rechts</kbd>, <kbd>Pfeil Oben</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und, optional, <kbd>Page Down</kbd> und <kbd>Page Up</kbd> losgelassen werden und wenn der Benutzer den Knopf zieht oder anderweitig auf den Temperaturslider klickt.

Mit semantischem HTML hätte dies folgendermaßen geschrieben werden können:

```html
<label for="temperature"> Temperature </label>
<output id="temperatureValue">20°C</output>
<input
  type="range"
  id="temperatureSlider"
  min="15"
  max="25"
  step="0.1"
  value="20"
  aria-valuetext="20 degrees celsius" />
```

```css
#temperatureSlider {
  transform: rotate(-90deg);
}
```

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabeelement mit Tastaturfokus, Fokusstyling, Tastaturinteraktionen und `value`, das bei Benutzerinteraktion aktualisiert wird, kostenlos dazu. Wir müssen dennoch JavaScript verwenden, um `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, eine Bereichseingabe vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/Reference/Properties/transform) verwendet.

## Beste Praktiken

Wenn der Slider den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut hinzu, um den Sliderstatus zu referenzieren, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut auf `true` für den Bereich, bis das Laden abgeschlossen ist.

Das HTML-Element `<input type="range">` hat implizit die `role`-Rolle `slider`. Verwenden Sie nicht die Attribute `aria-valuemax` oder `aria-valuemin` für `<input type="range">`-Elemente; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*`-Attribute und andere `aria-*`-Attribute, die für die Slider-Rolle anwendbar sind, zu verwenden.

### Bevorzugen Sie HTML

Es wird empfohlen, ein native {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) zu verwenden, anstelle der `slider`-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML-{{HTMLElement('progress')}}-Element
- HTML-{{HTMLElement('meter')}}-Element
- Andere Bereichs-Widgets beinhalten:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C WAI-ARIA Praktiken-Beispiele:
  - [Horizontale Multi-Knopf-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Farbbetrachter-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Bewertungs-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Medien-Such-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperatur-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
