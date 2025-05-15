---
title: "ARIA: slider-Rolle"
short-title: slider
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `slider`-Rolle definiert ein Eingabeelement, bei dem der Benutzer einen Wert innerhalb eines vorgegebenen Bereichs auswählt.

## Beschreibung

Die `slider`-Rolle wird für Widgets zur Bereichseingabe verwendet, bei denen der Benutzer einen Wert innerhalb gegebener Minimal- und Maximalwerte auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Bereiche, einschließlich `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem {{HTMLElement('progress')}}-Element in HTML, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe in eine Richtung anzeigt, wie z. B. die Ladefortschrittsanzeige beim Hochladen einer Datei, die letztendlich 100% erreicht, wenn sie vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem {{HTMLElement('meter')}}-Element in HTML, ist ein schreibgeschütztes Messgerät, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie z. B. den Batteriestand eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich einem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist eine beschreibbare Eingabebereichsrolle. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schieberegler, entweder horizontal oder vertikal, bewegt, um einen Wert auszuwählen.

Obwohl alle drei dieser Bereichsrollen dieselben ARIA-Zustände und -Eigenschaften haben, ist die `slider`-Rolle der einzige schreibbare Bereich: Sie ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss sie den Fokus erhalten können. Zusätzlich müssen Tastaturinteraktionen, Mausklicks und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Um den Slider-Wert zu ändern, müssen touchbasierte unterstützende Technologien auf Benutzerbewegungen reagieren, um den Wert durch das Simulieren von Tastenereignissen zu erhöhen oder zu verringern.
> Testen Sie Slider-Widgets vollständig mit unterstützenden Technologien auf Geräten, bei denen Touch der primäre Eingabemechanismus ist, bevor Sie die `slider`-Rolle (und alle Bereichs-Widgets) verwenden.

### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Minimalwert fest. Wenn es weggelassen oder keine Zahl ist, wird standardmäßig `0` (null) angenommen.

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, wird standardmäßig `100` angenommen.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss innerhalb der minimalen und maximalen Werte liegen, einschließlich dieser. Dieses Attribut ist für `slider` und `meter` erforderlich und für `progressbar` optional.

Für `slider` muss, sofern nicht das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element verwendet wird, der `aria-valuenow`-Wert programmgesteuert aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird verwendet, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des Sliders wiedergibt. Da die Minimal-, Maximal- und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert enthalten sein, wenn die von diesen Zahlen repräsentierten Werte nicht numerisch sind. Wenn beispielsweise ein Slider für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von XX-klein bis XX-groß wechseln, während `aria-valuenow` erhöht wird.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn das `value` oder `aria-valuenow` aktualisiert wird. Obwohl es kein äquivalentes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` an jedem {{htmlelement('input')}}-Typ einfügen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` eine wichtige Funktion für einen Slider ist, ziehen Sie in Betracht, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Obwohl nicht visuell ein Bereich, ist der Wert jeder Option für alle Benutzer zugänglicher, nicht nur für Benutzer von unterstützenden Technologien.

Ein barrierefreier Name ist **erforderlich**. Wenn die Rolle des Bereichs auf ein HTML-{{HTMLElement('input')}}-Element (oder ein `<meter>`- oder `<progress>`-Element) angewendet wird, kann der barrierefreie Name vom zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie das HTML-{{HTMLElement('input')}}-Element nicht verwenden, um Ihren Slider zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um den Slider fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und erfordert daher die Fähigkeit, den Fokus zu erhalten. Der Fokus sollte auf das Slider-Daumen gelegt werden.

Slider haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird nicht mit `meter` oder `progressbar` unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten `meter`- und `progressbar`-Rollen akzeptiert ein `slider` Benutzerinteraktionen. Zusätzlich zum Einschließen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs, um den Slider fokussierbar zu machen, muss auch Tastatur- und Pointer-Geräteunterstützung implementiert werden.

Der Slider stellt den Bereich der möglichen Werte dar. Die Position des Slider-Daumens entlang des Sliders stellt den aktuellen Wert dar. Unterstützte Benutzeraktionen umfassen das Ändern des Wertes durch Ziehen des Daumens oder Klicken auf den Slider für Zeigegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) weiter unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente anstelle der `slider`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das Bereichseingabeelement, das auf dem aktuellen `value` basiert, wie es sich auf die Minimal- und Maximalwerte bezieht. Beim Verwenden nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### Bereich mit mehreren Daumen

Ein Mehrfach-Daumen-Slider ist ein Slider mit zwei oder mehr Daumen, die jeweils einen Wert in einer Gruppe verwandter Werte festlegen. Beispielsweise könnte ein Zwei-Daumen-Slider in einer Produktsuche verwendet werden, um es Benutzern zu ermöglichen, die minimalen und maximalen Preislimits für die Suche festzulegen.

In vielen Zwei-Daumen-Slidern dürfen die Daumen sich gegenseitig nicht überschreiten, wie z. B. wenn der Slider die Minimal- und Maximalwerte für einen Bereich festlegt. Zum Beispiel ist im Preisbereichsselektor der Maximalwert des Daumens, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Daumens begrenzt, der das obere Ende des Bereichs festlegt. Der Minimalwert des Daumens für das obere Ende ist ebenfalls durch den aktuellen Wert des Daumens für das untere Ende begrenzt.

Es ist nicht erforderlich, dass die Daumen in Mehrfach-Daumen-Slidern von den anderen Daumenwerten abhängen, aber eine intuitive Benutzererfahrung ist erforderlich, daher wird empfohlen, dieses Anti-Muster zu vermeiden.

### Alle Nachkommen sind darstellend

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur Text enthalten können. Barrierefreiheits-APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `slider` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen eines beliebigen `slider`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachkommen des `slider` darstellend sind, ist der folgende Code äquivalent:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive des Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele dem folgenden im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} entsprechen:

```html
<div role="slider">Temperature in Celsius</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Sliders angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Oft präsentieren unterstützende Technologien den Wert von `aria-valuenow` als Zahl. Wenn dies nicht korrekt wäre, verwenden Sie `aria-valuetext`, um dem Slider einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert eingestellt, der den Minimalwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert eingestellt, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Slider-Element labeln und einen barrierefreien Namen bereitstellen. Ein barrierefreier Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Slider ist der implizite Wert `horizontal`, kann jedoch auf `vertical` gesetzt werden. Da es einen impliziten Wert hat, ist die Slider-Ausrichtung nie mehrdeutig.

### Tastaturinteraktionen

| Taste(n)                   | Aktion                                                                             |
| -------------------------- | ---------------------------------------------------------------------------------- |
| Rechts- und Aufwärtspfeile | Erhöht den ausgewählten Wert um einen Schritt                                      |
| Links- und Abwärtspfeile   | Verringert den ausgewählten Wert um einen Schritt                                  |
| Bild auf                   | (Optional) Erhöht den Wert um einen festgelegten Betrag größer als ein Schritt     |
| Bild ab                    | (Optional) Verringert den Wert um einen festgelegten Betrag größer als ein Schritt |
| Home                       | Setzt den Slider auf den Minimalwert.                                              |
| Ende                       | Setzt den Slider auf den Maximalwert.                                              |

Für die optionalen <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd>-Tasten sollte die Änderung des Slider-Wertes um einen Betrag erfolgen, der größer ist als die mit Aufwärts- und Abwärtspfeilen vorgenommenen Schrittänderungen.

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

Die Position des Daumens ist der Maximalwert minus der aktuelle Wert mal die Höhe eines Grads, minus die halbe Höhe des Daumens, um ihn zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, um alle Tastatur- und Zeigegeräteereignisse zu handhaben, einschließlich Ereignislistener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, und Stile für den Standardzustand bereitstellen, wenn der Daumen und der Slider den Fokus erhalten. Die Position des Daumens, die `aria-valuenow`- und `aria-valuetext`-Werte und der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und, optional, <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden und wenn der Benutzer den Daumen zieht oder den Temperatur-Slider anderweitig anklickt.

Mit semantischem HTML könnte dies geschrieben werden als:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabe-Widget mit Tastaturfokus, Fokusstyling, Tastaturinteraktionen und `value`, das bei Benutzerinteraktion automatisch aktualisiert wird. Wir müssen jedoch immer noch JavaScript verwenden, um das `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, um eine Bereichseingabe vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Beste Praktiken

Wenn der Slider den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut hinzu, um den Slider-Status zu referenzieren, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut auf `true` auf dem Bereich, bis er fertig geladen ist.

HTML's `<input type="range">` hat implizit die `role` eines `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin`-Attribute auf `<input type="range">`-Elementen; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*`-Attribute und alle anderen `aria-*`-Attribute, die auf die Slider-Rolle anwendbar sind.

### Bevorzugen Sie HTML

Es wird empfohlen, einen nativen {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), anstelle der `slider`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (falls fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C WAI-ARIA Praxisbeispiele:
  - [Horizontaler Mehrfach-Daumen-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Farbansicht-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Bewertungs-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Medien-Such-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperatur-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
