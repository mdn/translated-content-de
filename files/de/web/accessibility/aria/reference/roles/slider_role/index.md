---
title: "ARIA: Rolle `slider`"
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die Rolle `slider` definiert ein Eingabefeld, in dem der Benutzer einen Wert aus einem vorgegebenen Bereich auswählt.

## Beschreibung

Die Rolle `slider` ist für Bereicheingabewidgets gedacht, bei denen der Benutzer einen Wert innerhalb vorgegebener Minimal- und Maximalwerte auswählt.

### Die Rolle `slider` im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Bereiche, darunter `progressbar`, `meter` und `slider`.

Die Rolle [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role), ähnlich dem HTML-{{HTMLElement('progress')}}-Element, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe in eine Richtung anzeigt, wie eine Ladefortschrittsanzeige beim Hochladen einer Datei, die schließlich 100 % erreicht, wenn sie vollständig geladen ist.

Die Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), ähnlich dem HTML-{{HTMLElement('meter')}}-Element, ist ein schreibgeschütztes Messgerät, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, z. B. der Akkuanzeige eines Computers oder einer Benzinanzeige eines Autos.

Die Rolle `slider`, ähnlich zu einem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein beschreibbares Eingabefeld für Bereiche. Schieberegler ermöglichen es den Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Schiebereglerknopf entlang eines horizontalen oder vertikalen Reglers bewegt.

Während alle drei dieser Bereiche die gleichen ARIA-Zustände und -Eigenschaften haben, ist die Rolle `slider` der einzige beschreibbare Bereich: Es ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss er in der Lage sein, den Fokus zu erhalten. Zudem muss die Unterstützung von Tastaturinteraktionen, Mausklicks und Berührungseingaben gewährleistet sein.

> [!WARNING]
> Um den Wert des Schiebereglers zu ändern, müssen berührungsbasierte assistive Technologien auf Benutzerbewegungen reagieren, die den Wert erhöhen und verringern, indem sie Tastenevents synthetisieren.
> Vollständig testen Sie Schieberegler-Widgets mit assistiven Technologien auf Geräten, bei denen die Berührung das primäre Eingabemittel ist, bevor Sie die Rolle `slider` (und alle Bereichs-Widgets) verwenden.

#### Allgemeine Attribute

Das Attribut [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) legt den Minimalwert fest. Wenn es ausgelassen oder keine Zahl ist, beträgt der Standardwert `0` (null).

Das Attribut [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert 100.

Der Wert des Attributs [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) muss zwischen den Minimal- und Maximalwerten liegen, einschließlich dieser. Dieses Attribut ist für `slider` und `meter` erforderlich und optional für `progressbar`.

Für die Rolle `slider`, es sei denn, Sie verwenden das Element [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), muss der Wert von `aria-valuenow` programmatisch aktualisiert werden, wenn der Benutzer den Wert ändert.

Das optionale Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) wird verwendet, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des Schiebereglers widerspiegelt. Da die minimalen, maximalen und aktuellen Werte allesamt numerisch sind, sollte, wenn die durch diese Zahlen repräsentierten Werte nicht numerisch sind, das Attribut `aria-valuetext` mit einem Zeichenfolgenwert aufgenommen werden, der den numerischen Wert definiert. Wenn beispielsweise ein Schieberegler für T-Shirt-Größen verwendet wird, sollte das Attribut `aria-valuetext` von xx-small bis XX-large wechseln, während `aria-valuenow` erhöht wird.

Der Wert von `aria-valuetext` muss aktualisiert werden, wenn der `value` oder `aria-valuenow` aktualisiert wird. Obwohl es kein entsprechendes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ verwenden. ARIA-Attribute werden von semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` eine wichtige Funktion für einen Schieberegler ist, sollten Sie stattdessen {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen verwenden. Obwohl es nicht visuell ein Bereich ist, ist der Wert jeder Option für alle Benutzer zugänglicher, nicht nur für Benutzer von assistiven Technologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle des Bereichs auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name aus dem zugehörigen {{HTMLElement('label')}} stammen. Verwenden Sie andernfalls [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie das HTML-{{HTMLElement('input')}}-Element nicht verwenden, um Ihren Schieberegler zu erstellen, fügen Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzu, um den Schieberegler fokussierbar zu machen. Von den drei Bereichstypen ist nur der `slider` benutzerinteraktiv und daher der einzige, der den Fokus empfangen können muss. Der Fokus sollte auf den Schiebereglerknopf gelegt werden.

Schieberegler haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird nicht mit `meter` oder `progressbar` unterstützt.

### Benutzerinteraktionen

Anders als die schreibgeschützten Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktion akzeptiert. Zusätzlich zur Einbeziehung des Attributes [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) zur Fokussierung des Schiebereglers muss auch die Unterstützung für Tastatur- und Zeigereingabegeräte implementiert werden.

Der Schieberegler repräsentiert den Bereich möglicher Werte. Die Position des Schiebereglerknopfes entlang des Schiebereglers repräsentiert den aktuellen Wert. Zu den Benutzeraktionen, die unterstützt werden müssen, gehört das Ändern des Wertes, indem der Knopf gezogen oder der Schieberegler für Zeigereingabegeräte geklickt wird und die Nutzung von Richtungstasten wie Pfeiltasten für Tastaturnutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der Rolle `slider` zu verwenden. Benutzeragenten bieten ein gestyltes Widget für das Bereicheingabeelement, das auf dem aktuellen `value` basiert, wie er sich auf die Minimal- und Maximalwerte bezieht. Bei Verwendung nicht-semantischer Elemente müssen alle Merkmale des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Bereich mit mehreren Knöpfen

Ein Schieberegler mit mehreren Knöpfen ist ein Schieberegler mit zwei oder mehr Knöpfen, die jeweils einen Wert innerhalb einer Gruppe verwandter Werte festlegen. Zum Beispiel könnte in einer Produktsuche ein Schieberegler mit zwei Knöpfen verwendet werden, um es Benutzern zu ermöglichen, die Minimal- und Maximalpreislimits für die Suche festzulegen.

In vielen Schiebereglern mit zwei Knöpfen dürfen die Knöpfe sich nicht gegenseitig überholen, wie wenn der Schieberegler die Minimal- und Maximalwerte für einen Bereich festlegt. Zum Beispiel ist in einem Preisspannenwähler der Maximalwert des Knopfes, der das untere Ende der Spanne festlegt, durch den aktuellen Wert des Knopfes, der das obere Ende der Spanne festlegt, begrenzt. Der Minimalwert des oberen Endknopfes ist ebenfalls durch den aktuellen Wert des unteren Endknopfes begrenzt.

Es ist keine Anforderung, dass die Knöpfe in Schiebereglern mit mehreren Knöpfen voneinander abhängige Werte haben müssen, aber eine intuitive Benutzererfahrung ist eine Anforderung, daher wird empfohlen, dieses Anti-Muster zu vermeiden.

### Alle Nachkommen sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die beim Darstellen in einer Plattform-Zugangs-API nur Text enthalten können. Zugangs-APIs haben keine Möglichkeit, semantische Elemente, die in einem `slider` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `slider`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachkommen von `slider` präsentationell sind, ist der folgende Code äquivalent:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive eines Benutzers assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem Folgenden im {{Glossary("Accessibility_tree", "Zugangsbaum")}} entsprechen:

```html
<div role="slider">Temperature in Celsius</div>
```

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Schiebereglers anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht zutreffend wäre, nutzen Sie `aria-valuetext`, um dem Schieberegler einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Minimalwert darstellt und weniger als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Schieberegler-Element mit einem zugänglichen Namen etikettieren. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Schieberegler ist der implizite Wert `horizontal`, kann aber auf `vertical` gesetzt werden. Da es einen impliziten Wert hat, ist die Schieberegleraussrichtung nie mehrdeutig.

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

Die Position des Knopfes ist der Maximalwert minus dem aktuellen Wert, multipliziert mit der Höhe eines Grades, minus die Hälfte der Höhe des Knopfes, um ihn zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigerereignisse bearbeitet, einschließlich Ereignislistener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown` und Stile für den Standardzustand bereitstellt sowie, wenn der Knopf und der Schieberegler Fokus erhalten. Die Position des Knopfes, die Werte von `aria-valuenow` und `aria-valuetext`, und der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und optional <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden und wenn der Benutzer den Knopf zieht oder anderweitig auf den Temperaturschieberegler klickt.

Mit semantischem HTML könnte dies wie folgt geschrieben werden:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabe-Widget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und Wert, der bei Benutzerinteraktion kostenlos aktualisiert wird. Wir müssen jedoch weiterhin JavaScript verwenden, um `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, eine Bereicheingabe vertikal zu gestalten. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Tastaturinteraktionen

| Taste(n)              | Aktion                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Pfeil rechts und oben | Erhöhen Sie den ausgewählten Wert um einen Schritt                                              |
| Pfeil links und unten | Verringern Sie den ausgewählten Wert um einen Schritt                                           |
| Bild auf              | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag, der größer als ein Schritt ist    |
| Bild ab               | (Optional) Verringern Sie den Wert um einen festgelegten Betrag, der größer als ein Schritt ist |
| Pos1                  | Setzen Sie den Schieberegler auf den Minimalwert.                                               |
| Ende                  | Setzen Sie den Schieberegler auf den Maximalwert.                                               |

Bei den optionalen Tasten <kbd>Page Up</kbd> und <kbd>Page Down</kbd> sollte die Änderung des Schiebereglerwertes um einen Betrag erfolgen, der größer ist als die Schrittänderungen, die durch die Pfeiltasten nach oben und unten vorgenommen werden.

## Beste Praktiken

Wenn der Schieberegler den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzu, um auf den Schiebereglerstatus zu verweisen, und setzen Sie das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf `true`, bis das Laden abgeschlossen ist.

HTML's `<input type="range">` hat implizit die Rolle eines `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute auf `<input type="range">`-Elementen; verwenden Sie stattdessen `min` und `max`. Andernfalls gelten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die auf die Rolle `slider` anwendbar sind.

### Bevorzugen Sie HTML

Es wird empfohlen, einen nativen {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), anstelle der Rolle `slider` zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C WAI-ARIA Praktiken Beispiele:
  - [Horizontaler Schieberegler mit mehreren Knöpfen](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Farbansicht-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Bewertungs-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Media-Such-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperaturschieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
