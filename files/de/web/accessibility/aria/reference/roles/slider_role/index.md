---
title: "ARIA: Rolle slider"
short-title: slider
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `slider` definiert ein Eingabeelement, mit dem Benutzer einen Wert innerhalb eines vorgegebenen Bereichs auswählen.

## Beschreibung

Die Rolle `slider` ist für Bereichseingaben vorgesehen, bei denen Benutzer einen Wert zwischen einem vorgegebenen Mindest- und Höchstwert auswählen.

### Die Rolle `slider` im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Wertebereiche, darunter `progressbar`, `meter` und `slider`.

Die Rolle [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) ist, ähnlich wie das HTML-Element {{HTMLElement('progress')}}, eine schreibgeschützte Bereichsanzeige für den Fortschritt einer Aufgabe. Dieser verläuft in eine Richtung, etwa bei einer Fortschrittsanzeige für das Hochladen einer Datei, die nach Abschluss 100 % erreicht.

Die Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) ist, ähnlich wie das HTML-Element {{HTMLElement('meter')}}, eine schreibgeschützte Anzeige für eine Menge innerhalb eines bekannten Bereichs, etwa eine Akkuanzeige am Computer oder eine Tankanzeige im Auto.

Die Rolle `slider` ist, ähnlich wie ein HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), eine veränderbare Bereichseingabe. Mit einem Schieberegler können Benutzer einen Wert zwischen einem festgelegten Mindest- und Höchstwert auswählen. Dazu bewegen sie den Reglergriff entlang eines horizontalen oder vertikalen Schiebereglers.

Alle drei Bereichstypen haben dieselben ARIA-Zustände und -Eigenschaften. `slider` ist jedoch der einzige veränderbare Bereichstyp: Nur bei ihm ändert sich der Wert durch Benutzerinteraktion. Deshalb muss er den Fokus erhalten können. Außerdem müssen Tastaturinteraktionen, Mausklicks und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Damit der Wert des Schiebereglers geändert werden kann, müssen touchbasierte assistive Technologien auf Benutzergesten zum Erhöhen und Verringern des Werts reagieren, indem sie Tastenereignisse erzeugen.
> Testen Sie Schieberegler-Widgets mit assistiven Technologien auf Geräten, bei denen Touch die primäre Eingabemethode ist, umfassend, bevor Sie die Rolle `slider` verwenden. Dies gilt auch für alle anderen Bereichs-Widgets.

### Häufig verwendete Attribute

Das Attribut [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) legt den Mindestwert fest. Fehlt es oder enthält es keine Zahl, ist der Standardwert `0` (null).

Das Attribut [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert den Höchstwert. Fehlt es oder enthält es keine Zahl, ist der Standardwert 100.

Der Wert des Attributs [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) muss zwischen dem Mindest- und Höchstwert liegen, einschließlich dieser beiden Werte. Dieses Attribut ist für `slider` und `meter` erforderlich und für `progressbar` optional.

Bei `slider` muss der Wert von `aria-valuenow` programmatisch aktualisiert werden, wenn Benutzer den Wert ändern – es sei denn, das Element [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) wird verwendet.

Das optionale Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) wird verwendet, wenn der numerische Wert von `aria-valuenow` den beabsichtigten Wert des Schiebereglers nicht wiedergibt. Mindestwert, Höchstwert und aktueller Wert sind zwar numerisch; wenn die Zahlen jedoch für nicht numerische Werte stehen, sollte `aria-valuetext` eine Zeichenfolge enthalten, die den jeweiligen Wert beschreibt. Wird beispielsweise mit einem Schieberegler eine T-Shirt-Größe ausgewählt, sollte sich `aria-valuetext` mit steigendem `aria-valuenow` von XXS bis XXL ändern.

Der Wert von `aria-valuetext` muss aktualisiert werden, wenn `value` oder `aria-valuenow` aktualisiert wird. Zwar gibt es für `<input type="range">` kein entsprechendes HTML-Attribut, Sie können `aria-valuetext` jedoch bei jedem Typ von {{htmlelement('input')}} verwenden. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` für einen Schieberegler wichtig ist, sollten Sie stattdessen {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen verwenden. Eine solche Auswahl wird zwar visuell nicht als Bereich dargestellt, doch die Werte aller Optionen sind für alle Benutzer besser zugänglich, nicht nur für Benutzer assistiver Technologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Bereichsrolle auf ein HTML-{{HTMLElement('input')}}-Element (oder ein `<meter>`- bzw. `<progress>`-Element) angewendet wird, kann der zugängliche Name aus dem zugehörigen {{HTMLElement('label')}} stammen. Verwenden Sie andernfalls [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn eine sichtbare Beschriftung vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn keine sichtbare Beschriftung vorhanden ist.

Wenn Sie den Schieberegler nicht mit dem HTML-Element {{HTMLElement('input')}} erstellen, fügen Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzu, damit der Schieberegler den Fokus erhalten kann. Von den drei Bereichstypen ermöglicht nur `slider` Benutzerinteraktionen und muss daher als einziger den Fokus erhalten können. Der Fokus sollte auf dem Reglergriff liegen.

Schieberegler haben für [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) den impliziten Wert `horizontal`. Dieses Attribut wird bei `meter` und `progressbar` nicht unterstützt.

### Benutzerinteraktionen

Anders als die schreibgeschützten Rollen `meter` und `progressbar` ist `slider` ein Eingabeelement, das Benutzerinteraktionen ermöglicht. Neben dem Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex), mit dem der Schieberegler den Fokus erhalten kann, muss die Bedienung per Tastatur und Zeigegerät implementiert werden.

Der Schieberegler stellt den Bereich möglicher Werte dar. Die Position des Reglergriffs auf dem Schieberegler stellt den aktuellen Wert dar. Benutzer müssen den Wert ändern können, indem sie den Griff ziehen oder mit einem Zeigegerät auf den Schieberegler klicken. Für die Tastaturbedienung müssen Richtungstasten wie die Pfeiltasten unterstützt werden. Weitere Informationen finden Sie unten unter [Tastaturinteraktionen](#tastaturinteraktionen).

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente statt der Rolle `slider` zu verwenden. User Agents stellen für das Bereichseingabeelement ein gestaltetes Widget bereit, das den aktuellen `value` im Verhältnis zum Mindest- und Höchstwert anzeigt. Bei nicht semantischen Elementen müssen sämtliche Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Bereich mit mehreren Reglergriffen

Ein Schieberegler mit mehreren Griffen hat zwei oder mehr Reglergriffe, die jeweils einen Wert innerhalb einer Gruppe zusammengehöriger Werte festlegen. Bei einer Produktsuche könnten Benutzer beispielsweise mit einem Schieberegler mit zwei Griffen die untere und obere Preisgrenze für die Suche festlegen.

Bei vielen Schiebereglern mit zwei Griffen können die Griffe nicht aneinander vorbeibewegt werden, etwa wenn sie den Mindest- und Höchstwert eines Bereichs festlegen. Bei einer Auswahl für einen Preisbereich ist beispielsweise der Höchstwert des Griffs für die untere Bereichsgrenze durch den aktuellen Wert des Griffs für die obere Bereichsgrenze begrenzt. Entsprechend ist der Mindestwert des oberen Griffs durch den aktuellen Wert des unteren Griffs begrenzt.

Die Werte der Griffe eines Schiebereglers mit mehreren Griffen müssen nicht voneinander abhängig sein. Eine intuitive Benutzererfahrung ist jedoch erforderlich; daher wird empfohlen, dieses Anti-Pattern zu vermeiden.

### Alle Nachfahren sind präsentational

Manche Arten von Benutzeroberflächenkomponenten können in einer Plattform-API für Barrierefreiheit nur Text enthalten. APIs für Barrierefreiheit können semantische Elemente innerhalb eines `slider` nicht darstellen. Um diese Einschränkung zu berücksichtigen, weisen Browser allen Nachfahren eines `slider`-Elements automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) zu, da diese Rolle keine semantischen Kindelemente unterstützt.

Betrachten Sie beispielsweise das folgende `slider`-Element, das eine Überschrift enthält:

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachfahren von `slider` präsentational sind, entspricht der Code folgendem Beispiel:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus Sicht der Benutzer assistiver Technologien existiert die Überschrift nicht, da die vorherigen Codebeispiele im {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}} Folgendem entsprechen:

```html
<div role="slider">Temperature in Celsius</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Legen Sie einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` fest, der den aktuellen Wert des Schiebereglers angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien geben den Wert von `aria-valuenow` häufig als Zahl aus. Wenn dies den Wert nicht zutreffend wiedergibt, verwenden Sie `aria-valuetext`, um einen verständlicheren Wert für den Schieberegler bereitzustellen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Legen Sie einen Dezimalwert fest, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Fehlt das Attribut, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Legen Sie einen Dezimalwert fest, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Fehlt das Attribut, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert eine Zeichenfolge oder identifiziert das Element bzw. die Elemente, die den Schieberegler beschriften und ihm damit einen zugänglichen Namen geben. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob ein Element horizontal oder vertikal ausgerichtet ist oder ob seine Ausrichtung unbekannt bzw. mehrdeutig ist. Bei einem Schieberegler ist der implizite Wert `horizontal`; er kann jedoch auf `vertical` gesetzt werden. Aufgrund des impliziten Werts ist die Ausrichtung eines Schiebereglers nie mehrdeutig.

### Tastaturinteraktionen

| Taste(n)                    | Aktion                                                                                 |
| --------------------------- | -------------------------------------------------------------------------------------- |
| Pfeiltasten Rechts und Oben | Den ausgewählten Wert um einen Schritt erhöhen                                         |
| Pfeiltasten Links und Unten | Den ausgewählten Wert um einen Schritt verringern                                      |
| Bild auf                    | (Optional) Den Wert um einen festgelegten Betrag von mehr als einem Schritt erhöhen    |
| Bild ab                     | (Optional) Den Wert um einen festgelegten Betrag von mehr als einem Schritt verringern |
| Pos1                        | Den Schieberegler auf den Mindestwert setzen                                           |
| Ende                        | Den Schieberegler auf den Höchstwert setzen                                            |

Bei den optionalen Tasten <kbd>Page Up</kbd> und <kbd>Page Down</kbd> sollte sich der Wert des Schiebereglers um einen größeren Betrag ändern als bei den Pfeiltasten nach oben und unten.

## Bewährte Verfahren

Wenn der Schieberegler den Ladefortschritt eines bestimmten Seitenbereichs beschreibt, fügen Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzu, um auf den Status des Schiebereglers zu verweisen. Setzen Sie außerdem das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) für den Bereich auf `true`, bis der Ladevorgang abgeschlossen ist.

Das HTML-Element `<input type="range">` hat implizit die `role` `slider`. Verwenden Sie für `<input type="range">`-Elemente nicht die Attribute `aria-valuemax` oder `aria-valuemin`, sondern `min` und `max`. Globale `aria-*`-Attribute und andere für die Rolle `slider` geeignete `aria-*`-Attribute können Sie verwenden.

### HTML bevorzugen

Es wird empfohlen, ein natives {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), statt der Rolle `slider` zu verwenden.

## Beispiele

Im folgenden Beispiel erstellen wir ein vertikales Thermometer, mit dem Benutzer die Raumtemperatur einstellen können:

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

Die Position des Reglergriffs ergibt sich aus dem Höchstwert minus dem aktuellen Wert, multipliziert mit der Höhe eines Grades, und anschließend minus der halben Höhe des Griffs, damit dieser zentriert ist. Die übrigen Stile sind statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigerereignisse verarbeitet. Dazu gehören Event-Listener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`. Außerdem müssen wir Stile für den Standardzustand und für den fokussierten Reglergriff bzw. Schieberegler bereitstellen. Die Position des Griffs, die Werte von `aria-valuenow` und `aria-valuetext` sowie der Textinhalt des Elements mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) „temperatureValue“ müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und optional <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden. Dasselbe gilt, wenn Benutzer den Griff ziehen oder auf eine andere Weise auf den Temperaturschieberegler klicken.

Mit semantischem HTML hätte sich dies folgendermaßen umsetzen lassen:

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

Wenn wir {{HTMLElement('input')}} verwenden, erhalten wir ohne zusätzlichen Aufwand ein bereits gestaltetes Bereichseingabe-Widget mit Tastaturfokus, Fokus-Styling und Tastaturinteraktionen. Außerdem wird `value` bei Benutzerinteraktionen aktualisiert. Wir benötigen weiterhin JavaScript, um `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt mehrere Möglichkeiten, eine Bereichseingabe vertikal darzustellen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/Reference/Properties/transform) verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)
- HTML-Element {{HTMLElement('progress')}}
- HTML-Element {{HTMLElement('meter')}}
- Weitere Bereichs-Widgets:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- Beispiele aus den W3C-WAI-ARIA-Praktiken:
  - [Horizontaler Schieberegler mit mehreren Griffen](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Schieberegler zur Farbanzeige](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Schieberegler für Bewertungen](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Schieberegler zum Navigieren in Medien](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperaturschieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
