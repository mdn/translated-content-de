---
title: "ARIA: slider-Rolle"
slug: Web/Accessibility/ARIA/Roles/slider_role
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{AccessibilitySidebar}}

Die `slider`-Rolle definiert eine Eingabe, bei der der Benutzer einen Wert aus einem bestimmten Bereich auswählt.

## Beschreibung

Die `slider`-Rolle ist für Bereichs-Eingabesteuerelemente, bei denen der Benutzer einen Wert innerhalb eines festgelegten Minimums und Maximums auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Steuerelement-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) für Bereiche, einschließlich Fortschrittsbalken, Messgeräte und Slider.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)-Rolle, ähnlich dem HTML-{{HTMLElement('progress')}}-Element, ist ein schreibgeschützter Bereich, der den Abschlussgrad einer Aufgabe anzeigt, der sich in eine Richtung bewegt, wie ein Ladefortschrittsbalken beim Hochladen einer Datei, der schließlich 100 % erreicht, wenn er vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)-Rolle, ähnlich dem HTML-{{HTMLElement('meter')}}-Element, ist ein schreibgeschütztes Messgerät, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, z. B. den Batteriestatus eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich einem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein beschreib- und lesbares Eingabefeld. Slider ermöglichen es Benutzern, einen Wert zwischen festgelegten Mindest- und Höchstwerten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Schieberegler horizontal oder vertikal bewegt.

Während alle drei dieser Bereiche die gleichen ARIA-Zustände und -Eigenschaften haben, ist die `slider`-Rolle der einzige beschreibbare Bereich: Sie ist die einzige, deren Wert durch Benutzerinteraktion geändert wird. Daher muss sie den Fokus erhalten können. Darüber hinaus müssen Tastaturinteraktion, Mausklicks und Berührungsinteraktionen unterstützt werden.

> [!WARNING]
> Um den Slider-Wert zu ändern, müssen berührungsbasierte unterstützende Technologien auf Benutzerbewegungen zum Erhöhen und Verringern des Wertes reagieren, indem sie Tastenereignisse synthetisieren.
> Testen Sie Slider-Widgets umfassend mit unterstützenden Technologien auf Geräten, bei denen Berührung der primäre Eingabemechanismus ist, bevor Sie die `slider`-Rolle (und alle Bereichs-Widgets) verwenden.

#### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wenn es weggelassen wird oder keine Zahl ist, wird es standardmäßig auf `0` (null) gesetzt.

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut definiert den Höchstwert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert 100.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attributs muss zwischen den Mindest- und Höchstwerten liegen, einschließlich. Dieses Attribut ist für `slider` und `meter` erforderlich und für `progressbar` optional.

Für `slider`, es sei denn, Sie verwenden das [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Element, muss der `aria-valuenow`-Wert programmatisch aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut wird hinzugefügt, wenn der numerische `aria-valuenow`-Wert den beabsichtigten Wert des Sliders nicht widerspiegelt. Da die Mindest-, Höchst- und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert enthalten sein, der den numerischen Wert definiert, wenn die Werte, die diese Zahlen darstellen, nicht numerisch sind. Zum Beispiel, wenn ein Slider für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von xx-small bis zu XX-large wechseln, wenn `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der `value`- oder `aria-valuenow`-Wert aktualisiert wird. Obwohl es kein äquivalentes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einfügen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal für einen Slider ist, sollten Sie erwägen, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Obwohl dies visuell kein Bereich ist, ist der Wert jeder Option zugänglicher für alle Benutzer, nicht nur für Benutzer unterstützender Technologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Bereichsrolle auf ein HTML-{{HTMLElement('input')}}-Element (oder ein `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Verwenden Sie andernfalls [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie das HTML-{{HTMLElement('input')}}-Element nicht verwenden, um Ihren Slider zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzu, um den Slider fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und erfordert daher die Möglichkeit, den Fokus zu erhalten. Der Fokus sollte auf das Schieberegler-Element gelegt werden.

Slider haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird von `meter` oder `progressbar` nicht unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktionen akzeptiert. Neben dem Hinzufügen des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs zur Aktivierung des Slider-Fokus müssen Tastatur- und Zeigereingabegeräte unterstützt werden.

Der Slider repräsentiert den Bereich möglicher Werte. Die Position des Schiebereglers entlang des Sliders repräsentiert den aktuellen Wert. Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Wertes durch Ziehen des Schiebereglers oder Klicken auf den Slider für Zeigegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der `slider`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das Bereichseingabe-Element basierend auf dem aktuellen `value` in Bezug auf die Minimum- und Maximumwerte. Beim Einsatz nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Bereich mit mehreren Schiebereglern

Ein Multi-Schieberegler ist ein Slider mit zwei oder mehr Schiebereglern, die jeweils einen Wert in einer Gruppe verwandter Werte festlegen. Zum Beispiel könnte in einer Produktsuche ein Zwei-Schieberegler verwendet werden, um Benutzern die Möglichkeit zu geben, minimale und maximale Preisgrenzen für die Suche festzulegen.

In vielen Zwei-Schiebereglern dürfen die Schieberegler nicht aneinander vorbeigehen, z.B. wenn der Slider die minimalen und maximalen Werte für einen Bereich festlegt. Zum Beispiel ist in einem Preisbereichs-Wähler der Maximalwert des Reglers, der das obere Ende des Bereichs festlegt, durch den aktuellen Wert des Reglers begrenzt, der das untere Ende des Bereichs festlegt. Der Minimalwert des oberen Schiebereglers ist ebenfalls durch den aktuellen Wert des unteren Schiebereglers begrenzt.

Es ist nicht erforderlich, dass die Schieberegler in Multi-Schiebereglern von den anderen Schieberegler-Werten abhängen, aber eine intuitive Benutzererfahrung ist Voraussetzung, daher wird empfohlen, dieses Anti-Pattern zu vermeiden.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `slider` darzustellen. Um mit dieser Beschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle untergeordneten Elemente eines `slider`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachfahren von `slider` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive des Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichbedeutend mit dem folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}}: sind:

```html
<div role="slider">Temperature in Celsius</div>
```

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` setzen, der den aktuellen Wert des Sliders angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht genau wäre, verwenden Sie `aria-valuetext`, um dem Slider einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert setzen, der den Mindestwert repräsentiert und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, beträgt der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert setzen, der den Höchstwert repräsentiert und größer als `aria-valuemin` ist. Wenn nicht vorhanden, beträgt der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Slider-Element benennen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Slider beträgt der implizite Wert `horizontal`, kann aber auf `vertical` gesetzt werden. Da er einen impliziten Wert hat, ist die Slider-Orientierung nie mehrdeutig.

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

Die Position des Schiebereglers ist der Maximalwert minus dem aktuellen Wert multipliziert mit der Höhe eines Grades, minus die Hälfte der Höhe des Schiebereglers, um ihn zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigegeräteereignisse behandelt, einschließlich Ereignislistener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, sowie Stile für den Standardzustand und wenn der Schieberegler und Slider den Fokus erhalten. Die Position des Schiebereglers, die Werte `aria-valuenow` und `aria-valuetext` sowie der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>Pfeil nach links</kbd>, <kbd>Pfeil nach unten</kbd>, <kbd>Pfeil nach rechts</kbd>, <kbd>Pfeil nach oben</kbd>, <kbd>Home</kbd>, <kbd>Ende</kbd> und optional <kbd>Seite nach unten</kbd> und <kbd>Seite nach oben</kbd> losgelassen werden und wenn der Benutzer den Schieberegler zieht oder anderweitig auf den Temperaturslider klickt.

Mit semantischem HTML hätte dies geschrieben werden können als:

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
  aria-valuetext="20 degrees celsius"
  style="transform: rotate(-90deg);" />
```

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabe-Widget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und `value`, das bei Benutzerinteraktion automatisch aktualisiert wird. Wir müssen trotzdem JavaScript verwenden, um den `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt mehrere Möglichkeiten, ein Bereichselement vertikal zu gestalten. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Tastaturinteraktionen

| Taste(n)                   | Aktion                                                                                          |
| -------------------------- | ----------------------------------------------------------------------------------------------- |
| Rechts- und Aufwärtspfeile | Erhöhen Sie den ausgewählten Wert um einen Schritt                                              |
| Links- und Abwärtspfeile   | Verringern Sie den ausgewählten Wert um einen Schritt                                           |
| Seite nach oben            | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag, der größer als ein Schritt ist    |
| Seite nach unten           | (Optional) Verringern Sie den Wert um einen festgelegten Betrag, der größer als ein Schritt ist |
| Home                       | Setzen Sie den Slider auf den Mindestwert.                                                      |
| Ende                       | Setzen Sie den Slider auf den Höchstwert.                                                       |

Für die optionalen Tasten <kbd>Seite nach oben</kbd> und <kbd>Seite nach unten</kbd> sollte die Änderung des Sliderwerts um einen Betrag größer als die Schrittänderungen durch die Pfeiltasten erfolgen.

## Best Practices

Wenn der Slider den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut hinzu, um den Slider-Status zu referenzieren, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attribut auf `true`, bis das Laden des Bereichs abgeschlossen ist.

HTML's `<input type="range">` hat implizit die `role` von `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute auf `<input type="range">` Elementen; verwenden Sie stattdessen `min` und `max`. Ansonsten können alle globalen `aria-*` Attribute und alle anderen auf die Slider-Rolle anwendbaren `aria-*` Attribute verwendet werden.

### HTML bevorzugen

Es wird empfohlen, ein natives {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), anstelle der `slider`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- Funktionierende Beispiele:
  - [Horizontaler Multi-Schieberegler](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/multithumb-slider.html)
  - [Horizontaler Slider](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-1.html)
  - [Slider mit `aria-orientation` und `aria-valuetext`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-2.html)
