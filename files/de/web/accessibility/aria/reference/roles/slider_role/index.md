---
title: "ARIA: Schieberegler-Rolle"
short-title: slider
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die Rolle `slider` definiert ein Eingabefeld, bei dem der Benutzer einen Wert aus einem gegebenen Bereich auswählt.

## Beschreibung

Die `slider`-Rolle wird für Eingabe-Widgets verwendet, bei denen der Benutzer einen Wert aus einem festgelegten Minimum und Maximum auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Bereiche an, einschließlich `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem {{HTMLElement('progress')}}-Element von HTML, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe anzeigt, die sich in eine Richtung bewegt, wie zum Beispiel eine Fortschrittsanzeige des Datei-Uploads, die 100 % erreicht, wenn vollständig hochgeladen.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem {{HTMLElement('meter')}}-Element von HTML, ist eine schreibgeschützte Anzeige, die die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie zum Beispiel die Batterieanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich dem `input`-Element vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist ein les- und schreibbares Eingabefeld. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er den Schieberegler entlang eines horizontalen oder vertikalen Reglers bewegt.

Während alle drei dieser Bereiche die gleichen ARIA-Zustände und -Eigenschaften haben, ist die `slider`-Rolle der einzige les- und schreibbare Bereich: sie ist der einzige, dessen Wert sich durch Benutzerinteraktion ändert. Daher muss sie den Fokus erhalten können. Zusätzlich müssen Tastaturinteraktionen, Mausklicks und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Um den Wert des Schiebereglers zu ändern, müssen touchbasierte assistive Technologien auf Benutzeraktionen zur Erhöhung und Verringerung des Wertes reagieren, indem sie Tastenereignisse synthetisieren.
> Testen Sie Schieberegler-Widgets vollständig mit assistiven Technologien auf Geräten, bei denen Touch-Eingaben die primäre Eingabemethode sind, bevor Sie die `slider`-Rolle (und alle Bereichs-Widgets) verwenden.

### Übliche Attribute

Das Attribut [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) legt den Mindestwert fest. Wenn es ausgelassen wird oder keine Zahl ist, ist der Standardwert `0` (null).

Das Attribut [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert den Höchstwert. Wenn es fehlt oder keine Zahl ist, ist der Standardwert 100.

Der Wert des Attributs [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) muss zwischen den Minimal- und Maximalwerten liegen, einschließlich dieser Werte. Dieses Attribut ist für `slider` und `meter` erforderlich und optional für `progressbar`.

Für `slider`, es sei denn, Sie verwenden das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element, muss der `aria-valuenow`-Wert programmatisch aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) wird eingeschlossen, wenn der numerische `aria-valuenow`-Wert nicht den beabsichtigten Wert des Schiebereglers widerspiegelt. Da die Minimal-, Maximal- und aktuellen Werte alle numerisch sind, sollte das Attribut `aria-valuetext` enthalten sein, wenn diese Zahlen nicht numerische Werte darstellen, und einen Zeichenkettenwert definieren, der den numerischen Wert beschreibt. Zum Beispiel, wenn ein Schieberegler für T-Shirt-Größen verwendet wird, sollte das Attribut `aria-valuetext` von xx-small bis XX-large wechseln, wenn `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der `value`- oder `aria-valuenow`-Wert aktualisiert wird. Während es kein gleichwertiges HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einschließen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Feature für einen Schieberegler ist, sollten Sie in Betracht ziehen, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Auch wenn dies optisch kein Bereich ist, ist der Wert jeder Option für alle Benutzer zugänglicher, nicht nur für Benutzer von assistiver Technologie.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle des Bereichs auf ein HTML {{HTMLElement('input')}}-Element (oder ein `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie nicht das HTML {{HTMLElement('input')}}-Element verwenden, um Ihren Schieberegler zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um den Schieberegler fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und daher der einzige, der in der Lage sein muss, den Fokus zu erhalten. Der Fokus sollte auf den Schiebereglerdaumen gelegt werden.

Schieberegler haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird nicht mit `meter` oder `progressbar` unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktionen zulässt. Zusätzlich zu dem Einfügen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs zur Aktivierung des Slider-Fokus, muss Tastatur- und Zeigegeräteunterstützung implementiert werden.

Der Schieberegler repräsentiert den Bereich der möglichen Werte. Die Position des Schiebereglerdaumens entlang des Schiebereglers repräsentiert den aktuellen Wert. Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Werts durch Ziehen des Daumens oder Klicken auf den Schieberegler für Zeigegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente anstelle der `slider`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das Bereichseingabeelement, basierend auf dem aktuellen `value` im Verhältnis zu den Minimal- und Maximalwerten. Beim Verwenden nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Bereich mit mehreren Daumen

Ein Schieberegler mit mehreren Daumen ist ein Schieberegler mit zwei oder mehr Daumen, die jeweils einen Wert in einer Gruppe von zusammengehörigen Werten festlegen. Zum Beispiel könnte in einer Produktsuche ein Schieberegler mit zwei Daumen verwendet werden, um Benutzern zu ermöglichen, die minimalen und maximalen Preisgrenzen für die Suche festzulegen.

In vielen Schiebereglern mit zwei Daumen können die Daumen nicht aneinander vorbei bewegt werden, wie zum Beispiel wenn der Schieberegler die minimalen und maximalen Werte für einen Bereich festlegt. Zum Beispiel in einem Preisbereichsselektor ist der Höchstwert des Daumens, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Daumens begrenzt, der das obere Ende des Bereichs festlegt. Der Mindestwert des oberen Enddaumens ist ebenfalls durch den aktuellen Wert des unteren Enddaumens begrenzt.

Es ist keine Anforderung, dass die Daumen in Schiebereglern mit mehreren Daumen abhängig von den anderen Daumenwerten sind, aber eine intuitive Benutzererfahrung ist eine Anforderung, daher wird empfohlen, dieses Anti-Muster zu vermeiden.

### Alle Nachkommen sind Präsentationselemente

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur Text enthalten können. Accessibility APIs haben keine Möglichkeit, semantische Elemente innerhalb eines `slider` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `slider`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie z.B. folgendes `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachkommen von `slider` Präsentationselemente sind, ist der folgende Code gleichwertig:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive des Benutzers von assistiver Technologie existiert die Überschrift nicht, da die vorherigen Code-Beispiele äquivalent zum Folgenden im {{Glossary("Accessibility_tree", "Accessibility-Tree")}} sind:

```html
<div role="slider">Temperature in Celsius</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` setzen, der den aktuellen Wert des Schiebereglers angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht genau wäre, verwenden Sie `aria-valuetext`, um dem Schieberegler einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert setzen, der den minimalen Wert darstellt und kleiner ist als `aria-valuemax`. Wenn nicht vorhanden, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert setzen, der den Höchstwert darstellt und größer ist als `aria-valuemin`. Wenn nicht vorhanden, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenkettenwert oder identifiziert das Element (oder die Elemente), die das Schiebereglerelement kennzeichnen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Schieberegler ist der implizite Wert `horizontal`, kann aber auf `vertical` gesetzt werden. Da er einen impliziten Wert hat, ist die Orientierung des Schiebereglers nie mehrdeutig.

### Tastaturinteraktionen

| Tast(en)                  | Aktion                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------ |
| Rechts- und Aufwärtspfeil | Erhöht den ausgewählten Wert um einen Schritt                                        |
| Links- und Abwärtspfeil   | Verringert den ausgewählten Wert um einen Schritt                                    |
| Bild Auf                  | (Optional) Erhöht den Wert um einen festgelegten Betrag größer als einen Schritt     |
| Bild Ab                   | (Optional) Verringert den Wert um einen festgelegten Betrag größer als einen Schritt |
| Pos1 (Home)               | Setzt den Schieberegler auf den Minimalwert.                                         |
| Ende (End)                | Setzt den Schieberegler auf den Maximalwert.                                         |

Für die optionalen Tasten <kbd>Bild Auf</kbd> und <kbd>Bild Ab</kbd> sollte die Änderung des Schiebereglerwerts um einen Betrag größer sein als die Schrittänderungen, die durch Auf- und Abwärtspfeile vorgenommen werden.

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

Die Position des Daumens ist der Höchstwert minus den aktuellen Wert mal die Höhe eines Grades, minus die Hälfte der Höhe des Daumens, um ihn zu zentrieren. Die restlichen Stile sind statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, um alle Tastatur- und Zeigerereignisse zu verarbeiten, einschließlich Event-Listener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, und Stile für den Standardzustand und wenn der Daumen und der Schieberegler den Fokus erhalten. Die Position des Daumens, die `aria-valuenow`- und `aria-valuetext`-Werte und der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>Pfeil nach links</kbd>, <kbd>Pfeil nach unten</kbd>, <kbd>Pfeil nach rechts</kbd>, <kbd>Pfeil nach oben</kbd>, <kbd>Home</kbd>, <kbd>Ende</kbd> und optional <kbd>Bild Ab</kbd> und <kbd>Bild Auf</kbd> losgelassen werden und wenn der Benutzer den Daumen zieht oder anderweitig auf den Temperaturschieberegler klickt.

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabewidget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und `value`, das bei Benutzerinteraktionen kostenlos aktualisiert wird. Wir müssen jedoch weiterhin JavaScript verwenden, um das `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, um eine Bereichseingabe vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Beste Praktiken

Wenn der Schieberegler den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) hinzu, um auf den Schiebereglerstatus zu verweisen, und setzen das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) auf `true` im Bereich, bis der Ladevorgang abgeschlossen ist.

HTML's `<input type="range">` hat implizit die `role` von `slider`. Verwenden Sie nicht die Attribute `aria-valuemax` oder `aria-valuemin` auf `<input type="range">`-Elementen; verwenden Sie stattdessen `min` und `max`. Andernfalls gelten alle globalen `aria-*`-Attribute und alle anderen `aria-*`-Attribute, die für die `slider`-Rolle anwendbar sind.

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
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C-WAI-ARIA-Praxisbeispiele:
  - [Horizontaler Multi-Daumen-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Farbbetrachter-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Bewertungs-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Mediendurchlauf-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperatur-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
