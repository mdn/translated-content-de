---
title: "ARIA: Slider-Rolle"
slug: Web/Accessibility/ARIA/Roles/slider_role
l10n:
  sourceCommit: 58ffb2cb2a05105f1a5eaa5c659782a85f7a4606
---

{{AccessibilitySidebar}}

Die `slider`-Rolle definiert eine Eingabe, bei der der Benutzer einen Wert innerhalb eines vorgegebenen Bereichs auswählt.

## Beschreibung

Die `slider`-Rolle ist für Bereichs-Eingabewidgets gedacht, bei denen der Benutzer einen Wert innerhalb vorgegebener Minimal- und Maximalwerte auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) an, darunter `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)-Rolle, ähnlich dem HTML-{{HTMLElement('progress')}}-Element, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe anzeigt und nur in eine Richtung verläuft, wie beispielsweise eine Ladefortschrittsleiste beim Hochladen von Dateien, die bei voller Ladung 100% erreicht.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)-Rolle, ähnlich dem HTML-{{HTMLElement('meter')}}-Element, ist eine schreibgeschützte Anzeige, die die Menge von etwas innerhalb eines bekannten Bereichs angibt, wie beispielsweise die Batterieanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich einem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein schreib- und lesbarer Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schieberegelergriff entlang eines horizontalen oder vertikalen Schiebereglers bewegt, um einen Wert auszuwählen.

Obwohl alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `slider`-Rolle die einzige schreibbare Bereichseingabe: Es ist die einzige, deren Wert durch Benutzerinteraktion geändert wird. Daher muss sie fokussierbar sein. Zudem müssen Tastaturinteraktionen, Mausklicks und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Um den Slider-Wert zu ändern, müssen Touch-basierte Hilfstechnologien auf Benutzerbewegungen reagieren, um den Wert durch das Simulieren von Tasteneingaben zu erhöhen und zu verringern.
> Testen Sie Slider-Widgets gründlich mit Hilfstechnologien auf Geräten, bei denen Touch der primäre Eingabemechanismus ist, bevor Sie die `slider`-Rolle (und alle Bereichs-Widgets) verwenden.

#### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut legt den minimalen Wert fest. Wenn es weggelassen oder keine Zahl angegeben wird, ist der Standardwert `0` (Null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut definiert den maximalen Wert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert 100.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attributs muss zwischen dem Minimum- und dem Maximumwert liegen, einschließlich. Dieses Attribut ist für `slider` und `meter` erforderlich und optional für `progressbar`.

Für `slider`, sofern das [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Element nicht verwendet wird, muss der `aria-valuenow`-Wert programmgesteuert aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut wird verwendet, wenn der numerische Wert von `aria-valuenow` den beabsichtigten Wert des Sliders nicht widerspiegelt. Da die minimalen, maximalen und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert enthalten sein, wenn die Werte, die diese Zahlen darstellen, nicht numerisch sind. Wenn zum Beispiel ein Slider für T-Shirt-Größen verwendet wird, sollte sich das `aria-valuetext`-Attribut von xx-small bis XX-large verschieben, wenn `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, sobald der `value`- oder `aria-valuenow`-Wert aktualisiert wird. Obwohl es kein entsprechendes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}} Typ einfügen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal für einen Slider ist, sollten Sie in Betracht ziehen, stattdessen {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Obwohl es visuell kein Bereich ist, ist der Wert jeder Option für alle Benutzer zugänglicher, nicht nur für Benutzer von Hilfstechnologie.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rollen des Bereichs auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht verwendet wird, um Ihren Slider zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzu, um den Slider fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und daher der einzige, der fokussierbar sein muss. Der Fokus sollte auf den Schiebereglergriff gesetzt werden.

Slider haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird bei `meter` oder `progressbar` nicht unterstützt.

### Benutzerinteraktionen

Anders als die schreibgeschützten Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktion akzeptiert. Zusätzlich zur Einbindung des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs zur Aktivierung des Slider-Fokus, muss Tastatur- und Zeigegeräteunterstützung implementiert werden.

Der Slider repräsentiert den Bereich der möglichen Werte. Die Position des Schiebereglers entlang des Sliders repräsentiert den aktuellen Wert. Unterstützungspflichtige Benutzeraktionen umfassen das Ändern des Werts durch Ziehen des Griffs oder Klicken auf den Slider für Zeigegeräte sowie die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturnutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente zu verwenden, anstelle der `slider`-Rolle. Benutzeragenten bieten ein gestyltes Widget für das Bereichseingabeelement, basierend auf dem aktuellen `value` in Bezug auf die minimalen und maximalen Werte. Beim Verwenden nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS rekonstruiert werden.

### Bereich mit mehreren Schiebereglerelementen

Ein mehrschiebiger Slider ist ein Slider mit zwei oder mehr Schiebereglerelementen, die jeweils einen Wert in einer Gruppe verwandter Werte setzen. Beispielsweise könnte in einer Produktsuche ein Slider mit zwei Griffen verwendet werden, um Benutzern das Festlegen der minimalen und maximalen Preisgrenzen für die Suche zu ermöglichen.

In vielen Slidern mit zwei Griffen dürfen die Griffe nicht aneinander vorbeigehen, wie etwa wenn der Slider die Minimal- und Maximalwerte für einen Bereich festlegt. Zum Beispiel ist in einem Preisbereich-Auswahlwerkzeug der maximale Wert des Griffs, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Griffs begrenzt, der das obere Ende des Bereichs festlegt. Der minimale Wert des oberen Griffes ist ebenfalls durch den aktuellen Wert des unteren Griffes begrenzt.

Es ist keine Anforderung, dass die Griffe in mehrschiebigen Slidern von den anderen Griffwerten abhängig sind, aber eine intuitive Benutzererfahrung ist eine Voraussetzung, daher wird empfohlen, dieses Anti-Pattern zu vermeiden.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur Text enthalten können. Zugriffs-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `slider` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommerelemente eines `slider`-Elements an, da sie eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel betrachten Sie das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachkommen von `slider` präsentativ sind, ist der folgende Code äquivalent:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive des Benutzers von Hilfstechnologie existiert die Überschrift nicht, da die vorherigen Codebeispiele äquivalent zum folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} sind:

```html
<div role="slider">Temperature in Celsius</div>
```

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)
  - : Festlegen auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax`, der den aktuellen Wert des Sliders anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Hilfstechnologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht genau wäre, verwenden Sie `aria-valuetext`, um dem Slider einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Festlegen auf einen Dezimalwert, der den Minimalwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Festlegen auf einen Dezimalwert, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Slider-Element benennen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/uneindeutig ist. Bei einem Slider ist der implizite Wert `horizontal`, kann jedoch auf `vertical` gesetzt werden. Da es einen impliziten Wert gibt, ist die Slider-Ausrichtung niemals uneindeutig.

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

Die Position des Griffes ist der maximale Wert minus der aktuelle Wert mal die Höhe eines Grades, minus die Hälfte der Höhe des Griffs, um ihn zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigegeräteereignisse behandelt, einschließlich Ereignislistenern für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, sowie Stile für den Standardzustand und wenn der Griff und der Slider den Fokus erhalten. Die Position des Griffs, die `aria-valuenow`- und `aria-valuetext`-Werte sowie der interne Text des Elements mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und optional <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden und wenn der Benutzer den Griff zieht oder auf den Temperaturslider klickt.

Mit semantischem HTML hätte dies so geschrieben werden können:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Range-Input-Widget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und einem auf Benutzerinteraktion aktualisierten `value`. Wir müssen dennoch JavaScript verwenden, um das `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, ein Range-Input vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Tastaturinteraktionen

| Taste(n)                   | Aktion                                                                               |
| -------------------------- | ------------------------------------------------------------------------------------ |
| Rechts- und Aufwärtspfeile | Erhöht den ausgewählten Wert um einen Schritt                                        |
| Links- und Abwärtspfeile   | Verringert den ausgewählten Wert um einen Schritt                                    |
| Bild auf                   | (Optional) erhöht den Wert um einen festgelegten Betrag größer als einen Schritt     |
| Bild ab                    | (Optional) verringert den Wert um einen festgelegten Betrag größer als einen Schritt |
| Pos 1                      | Setzt den Slider auf den Minimalwert.                                                |
| Ende                       | Setzt den Slider auf den Maximalwert.                                                |

Für die optionalen Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd> sollte die Änderung des Slider-Werts um einen Betrag größer sein als die Schrittänderungen, die durch Auf- und Abwärtspfeile gemacht werden.

## Beste Praktiken

Wenn der Slider den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut hinzu, um auf den Slider-Status zu verweisen, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attribut auf `true`, bis das Laden abgeschlossen ist.

HTMLs `<input type="range">` hat implizit die `role` `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute auf `<input type="range">` Elementen; verwenden Sie stattdessen `min` und `max`. Ansonsten gelten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die auf die Slider-Rolle anwendbar sind.

### Bevorzugen Sie HTML

Es wird empfohlen, ein natives {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), anstelle der `slider`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML-{{HTMLElement('progress')}}-Element
- HTML-{{HTMLElement('meter')}}-Element
- Weitere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- W3C WAI-ARIA Praxisbeispiele:
  - [Horizontaler Slider mit mehreren Griffen](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Farbbetrachter-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Bewertungs-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Medien-Such-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperaturslider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
