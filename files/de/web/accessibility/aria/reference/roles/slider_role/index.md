---
title: "ARIA: Slider-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `slider`-Rolle definiert ein Eingabefeld, bei dem der Benutzer einen Wert aus einem gegebenen Bereich auswählt.

## Beschreibung

Die `slider`-Rolle ist für Bereiche von Eingabewidgets, bei denen der Benutzer einen Wert aus vorgegebenen minimalen und maximalen Werten auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Bereiche, einschließlich `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('progress')}}, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe in einer Richtung anzeigt, zum Beispiel die Ladefortschrittsanzeige eines Datei-Uploads, die schließlich 100 % erreicht, wenn sie vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('meter')}}, ist ein schreibgeschützter Anzeiger, der die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, beispielsweise eine Akkuanzeige eines Computers oder eine Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich einem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist ein beschreib- und veränderbarer Eingabebereich. Slider ermöglichen es Benutzern, einen Wert zwischen festgelegten minimalen und maximalen Werten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schiebergriff entlang einer horizontalen oder vertikalen Schiene bewegt.

Obwohl alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `slider`-Rolle der einzige veränderliche Bereich: Sie ist der einzige, bei dem sich der Wert durch Benutzerinteraktion ändern kann. Daher muss sie in der Lage sein, den Fokus zu erhalten. Darüber hinaus müssen Tastatursteuerung, Mausklicks und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Um den Wert des Sliders zu ändern, müssen touch-basierte unterstützende Technologien auf Benutzer gestuelle Eingaben für die Erhöhung oder Verringerung des Wertes reagieren, indem sie Tastenereignisse synthetisieren. Testen Sie Slider-Widgets vollständig unter Verwendung unterstützender Technologien auf Geräten, bei denen Touch die primäre Eingabemethode ist, bevor Sie die `slider`-Rolle (und alle Bereichs-Widgets) verwenden.

### Gemeinsame Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wenn es weggelassen oder keine Zahl ist, beträgt der Standardwert `0` (Null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert 100.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen den minimalen und maximalen Werten liegen, einschließlich dieser Grenzen. Dieses Attribut ist für `slider` und `meter` erforderlich und optional für `progressbar`.

Für `slider`, es sei denn, es wird das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element verwendet, muss der `aria-valuenow`-Wert programmatisch aktualisiert werden, wenn der Benutzer den Wert ändert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird hinzugefügt, wenn der numerische `aria-valuenow`-Wert nicht den beabsichtigten Wert des Sliders widerspiegelt. Da die minimalen, maximalen und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert hinzugefügt werden, der den numerischen Wert definiert, wenn die Zahlen keine numerischen Werte darstellen. Zum Beispiel, wenn ein Slider für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von xx-small bis XX-large wechseln, während `aria-valuenow` ansteigt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der `value` oder `aria-valuenow` aktualisiert wird. Während es kein gleichwertiges HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einfügen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal für einen Slider ist, ziehen Sie in Betracht, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen statt zu verwenden. Obwohl dies visuell kein Bereich ist, ist der Wert jeder Option zugänglicher für alle Benutzer, nicht nur für Benutzer von unterstützenden Technologien.

Ein barrierefreier Name ist **erforderlich**. Wenn die Rolle des Bereiches auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name aus dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Etikett vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Etikett vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht verwendet wird, um Ihren Slider zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um den Slider fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` interaktiv für den Benutzer und daher der einzige, der den Fokus erhalten muss. Der Fokus sollte auf den Slidergriff gelegt werden.

Slider haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird bei `meter` oder `progressbar` nicht unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten `meter`- und `progressbar`-Rollen ist ein `slider` eine Eingabe, die Benutzerinteraktionen akzeptiert. Zusätzlich zur Einfügung des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs zur Ermöglichung des Sliderfokus, müssen Tastatur- und Zeigereingabegeräte unterstützt werden.

Der Slider repräsentiert den Bereich der möglichen Werte. Die Position des Slidergriffs entlang des Sliders repräsentiert den aktuellen Wert. Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Wertes durch Ziehen des Griffs oder Klicken auf den Slider für Zeigegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente anstelle der `slider`-Rolle zu verwenden. Benutzeragenten stellen ein stilisiertes Widget für das Bereichs-Eingabefeld bereit, basierend auf dem aktuellen `Value` in Bezug auf die minimalen und maximalen Werte. Wenn nicht-semantische Elemente verwendet werden, müssen alle Merkmale des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### Bereich mit mehreren Griffen

Ein Multi-Griff-Slider ist ein Slider mit zwei oder mehr Griffen, die jeweils einen Wert in einer Gruppe verwandter Werte einstellen. Zum Beispiel könnte in einer Produktsuche ein Zwei-Griff-Slider verwendet werden, um Benutzern zu ermöglichen, die minimalen und maximalen Preisgrenzen für die Suche festzulegen.

In vielen Zwei-Griff-Slidern dürfen sich die Griffe nicht gegenseitig passieren, wie etwa beim Festlegen der minimalen und maximalen Werte für einen Bereich. Zum Beispiel wird in einem Preisspannenselektor der maximale Wert des Griffs, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Griffs begrenzt, der das obere Ende des Bereichs festlegt. Der minimale Wert des oberen Endgriffs ist ebenfalls durch den aktuellen Wert des unteren Endgriffs begrenzt.

Es ist keine Voraussetzung, dass die Griffe in Multi-Griff-Slidern von den anderen Griffwerten abhängig sind, dennoch ist eine intuitive Benutzererfahrung eine Anforderung, daher wird empfohlen, dieses Anti-Pattern zu vermeiden.

### Alle Nachfahren sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Zugänglichkeitsschnittstelle einer Plattform dargestellt werden, nur Text enthalten können. Zugänglichkeitsschnittstellen haben keine Möglichkeit, semantische Elemente innerhalb eines `slider` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachfahrenelemente eines `slider`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachfahren eines `slider` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Sicht eines Benutzers einer unterstützenden Technologie existiert die Überschrift nicht, da die vorherigen Codeausschnitte dem folgenden im {{Glossary("Accessibility_tree", "Accessibility-Tree")}} gleichwertig sind:

```html
<div role="slider">Temperature in Celsius</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Festgelegt auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax`, der den aktuellen Wert des Sliders angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht zutreffend ist, verwenden Sie `aria-valuetext`, um dem Slider einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Festgelegt auf einen Dezimalwert, der den Minimalwert darstellt und kleiner ist als `aria-valuemax`. Wenn nicht vorhanden, beträgt der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Festgelegt auf einen Dezimalwert, der den Maximalwert darstellt und größer ist als `aria-valuemin`. Wenn nicht vorhanden, beträgt der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Slider-Element mit einem barrierefreien Namen versehen. Ein barrierefreier Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Slider ist der implizite Wert `horizontal`, kann jedoch auf `vertical` gesetzt werden. Da es einen impliziten Wert hat, ist die Slider-Orientierung niemals mehrdeutig.

### Tastaturinteraktionen

| Schlüssel                 | Aktion                                                                             |
| ------------------------- | ---------------------------------------------------------------------------------- |
| Rechts- und Aufwärtspfeil | Erhöht den ausgewählten Wert um einen Schritt                                      |
| Links- und Abwärtspfeil   | Verringert den ausgewählten Wert um einen Schritt                                  |
| Bild-Auf                  | (Optional) Erhöht den Wert um einen festgelegten Betrag größer als ein Schritt     |
| Bild-Ab                   | (Optional) Verringert den Wert um einen festgelegten Betrag größer als ein Schritt |
| Pos1                      | Setzt den Slider auf den Minimalwert.                                              |
| Ende                      | Setzt den Slider auf den Maximalwert.                                              |

Für die optionalen <kbd>Bild-Auf</kbd> und <kbd>Bild-Ab</kbd>-Tasten sollte die Änderung im Slider-Wert um einen Betrag größer sein als die Schrittänderungen, die durch die Auf- und Abwärtspfeile vorgenommen werden.

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

Die Position des Schiebergriffs ist der Maximalwert minus der aktuelle Wert multipliziert mit der Höhe eines Grades, minus der halben Höhe des Griffs, um ihn zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigereignisse verarbeitet, einschließlich Ereignislistener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, und Stile für den Standardzustand und wenn der Griff und der Slider den Fokus erhalten, bereitstellen. Die Position des Griffs, die `aria-valuenow`- und `aria-valuetext`-Werte und der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>PfeilLinks</kbd>, <kbd>PfeilUnten</kbd>, <kbd>PfeilRechts</kbd>, <kbd>PfeilOben</kbd>, <kbd>Pos1</kbd>, <kbd>Ende</kbd>, und optional die Tasten <kbd>BildAb</kbd> und <kbd>BildAuf</kbd> losgelassen werden und wenn der Benutzer den Griff zieht oder anderweitig auf den Temperaturslider klickt.

Unter Verwendung semantischen HTMLs könnte dies geschrieben werden als:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabewidget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und `value`, die bei Benutzerinteraktion automatisch aktualisiert werden. Wir müssen immer noch JavaScript verwenden, um `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, ein Bereichseingabefeld vertikal zu gestalten. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Beste Praktiken

Wenn der Slider den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut hinzu, um den Status des Sliders zu referenzieren, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut auf `true` auf dem Bereich, bis das Laden abgeschlossen ist.

HTMLs `<input type="range">` hat implizit die `role` von `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute auf `<input type="range">` Elementen; verwenden Sie stattdessen `min` und `max`. Andernfalls gelten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die auf die Slider-Rolle anwendbar sind.

### Bevorzugen Sie HTML

Es wird empfohlen, ein nativen {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), anstelle der `slider`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Weitere Bereichswidgets sind:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C WAI-ARIA Praxisbeispiele:
  - [Horizontaler Slider mit mehreren Griffen](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Farbbetrachter-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Bewertungs-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Medien-Such-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperaturslider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
