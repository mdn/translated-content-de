---
title: "ARIA: slider-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die `slider`-Rolle definiert eine Eingabe, bei der der Benutzer einen Wert innerhalb eines bestimmten Bereichs auswählt.

## Beschreibung

Die `slider`-Rolle ist für Bereichs-Eingabewidgets gedacht, bei denen der Benutzer einen Wert innerhalb festgelegter minimaler und maximaler Werte auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene Bereichs-[Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), einschließlich `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich wie das {{HTMLElement('progress')}}-Element in HTML, ist ein schreibgeschützter Bereich, der den Fortschritt eines Vorgangs in einer einzigen Richtung anzeigt, wie z. B. den Ladefortschritt beim Hochladen einer Datei, der schließlich 100% erreicht, wenn sie vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich wie das {{HTMLElement('meter')}}-Element in HTML, ist eine schreibgeschützte Anzeige, die die Menge von etwas innerhalb eines bekannten Bereichs angibt, wie z. B. die Batterieanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich zu HTMLs `input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist eine schreibbare Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schiebereglergriff entlang eines horizontalen oder vertikalen Schiebers bewegt, um einen Wert auszuwählen.

Obwohl alle drei dieser Bereiche dieselben ARIA-Zustände und Eigenschaften haben, ist die `slider`-Rolle die einzige schreibbare: sie ist die einzige, deren Wert sich durch Benutzerinteraktion ändert. Daher muss sie den Fokus erhalten können. Darüber hinaus muss die Unterstützung für Tastaturinteraktion, Mausklicks und Touch-Interaktion gegeben sein.

> [!WARNING]
> Um den Wert des Schiebereglers zu ändern, müssen assistive Technologien auf Gesten des Benutzers zur Erhöhung und Verringerung des Wertes reagieren, indem Tastenevents synthetisiert werden.
> Testen Sie Schieberegler-Widgets vollständig mit assistiver Technologie auf Geräten, bei denen Touch die primäre Eingabemethode ist, bevor Sie die `slider`-Rolle (und alle Bereichswidgets) verwenden.

### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Minimalwert fest. Falls es weggelassen wird oder keine Zahl ist, liegt der Standardwert bei `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Falls es fehlt oder keine Zahl ist, liegt der Standardwert bei 100.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen den minimalen und maximalen Werten einschließlich liegen. Dieses Attribut ist für `slider` und `meter` erforderlich und optional für `progressbar`.

Für `slider`, es sei denn, der [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Element wird verwendet, muss der `aria-valuenow`-Wert programmgesteuert aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird verwendet, wenn der numerische `aria-valuenow`-Wert nicht den beabsichtigten Wert des Schiebereglers widerspiegelt. Da die minimalen, maximalen und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut in Fällen mit einem Zeichenkettenwert aufgenommen werden, die der numerische Wert repräsentiert. Zum Beispiel, wenn ein Schieberegler für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von xx-small bis hin zu XX-large wechseln, während `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der `Wert` oder `aria-valuenow` aktualisiert wird. Während es kein äquivalentes HTML-Attribut für `<input type="range">` gibt, kann man `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einsetzen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal für einen Schieberegler ist, ziehen Sie in Betracht, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Während es visuell kein Bereich ist, ist der Wert jeder Option für alle Benutzer zugänglicher, nicht nur für Benutzer von assistiver Technologie.

Ein zugänglicher Name ist **erforderlich**. Wenn die Bereichsrolle auf ein HTML-{{HTMLElement('input')}}-Element (oder ein `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} kommen. Verwenden Sie andernfalls [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), falls kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element zur Erstellung eines Schiebereglers nicht verwendet wird, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzu, um den Schieberegler fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und somit der einzige, der den Fokus erhalten muss. Der Fokus sollte auf den Schiebereglergriff gelegt werden.

Schieberegler haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird bei `meter` oder `progressbar` nicht unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktion akzeptiert. Zusätzlich zur Einbeziehung des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs, um den Fokus auf den Schieberegler zu ermöglichen, müssen Tastatur- und Zeigereinrichtungen unterstützt werden.

Der Schieberegler repräsentiert den Bereich der möglichen Werte. Die Position des Schiebereglergriffs entlang des Schiebereglers repräsentiert den aktuellen Wert. Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Wertes durch Ziehen des Griffs oder Klicken auf den Schieberegler bei Zeigeeinrichtungen und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente anstelle der `slider`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das Bereichseingabeelement basierend auf dem aktuellen `value`, wie er sich auf die minimalen und maximalen Werte bezieht. Bei der Verwendung von nicht-semantischen Elementen müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Bereich mit mehreren Griffen

Ein Schieberegler mit mehreren Griffen ist ein Schieberegler mit zwei oder mehr Griffen, die jeweils einen Wert in einer Gruppe verwandter Werte festlegen. Zum Beispiel könnte in einer Produktsuche ein Schieberegler mit zwei Griffen verwendet werden, um es Benutzern zu ermöglichen, die minimalen und maximalen Preisgrenzen für die Suche festzulegen.

In vielen Schiebereglern mit zwei Griffen dürfen die Griffe nicht aneinander vorbeigehen, wie wenn der Schieberegler die minimalen und maximalen Werte für einen Bereich festlegt. In einem Preisbereichs-Wähler wird zum Beispiel der maximale Wert des Griffs, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Griffs, der das obere Ende des Bereichs festlegt, begrenzt. Der minimale Wert des oberen Griffs ist ebenfalls durch den aktuellen Wert des unteren Griffs begrenzt.

Es ist keine Anforderung, dass die Griffe in Schiebereglern mit mehreren Griffen von den Werten der anderen Griffe abhängig sind, aber ein intuitives Benutzererlebnis ist eine Anforderung, daher wird empfohlen, dieses Anti-Pattern zu vermeiden.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente im `slider` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommenelemente eines `slider`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachkommen von `slider` präsentational sind, ist der folgende Code äquivalent:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Sicht der Benutzer assistiver Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem Folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeit-Baum")}} entsprechen:

```html
<div role="slider">Temperature in Celsius</div>
```

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Schiebereglers angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren den Wert von `aria-valuenow` oft als Zahl. Wenn dies nicht zutreffend wäre, verwenden Sie `aria-valuetext`, um dem Schieberegler einen besser verständlichen Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Minimalwert repräsentiert und kleiner ist als `aria-valuemax`. Wenn nicht vorhanden, beträgt der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Maximalwert repräsentiert und größer ist als `aria-valuemin`. Wenn nicht vorhanden, beträgt der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenkettenwert oder identifiziert das Element (oder die Elemente), die das Schieberegler-Element beschriften, um einen zugänglichen Namen bereitzustellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Schieberegler ist der implizite Wert `horizontal`, kann jedoch auf `vertical` gesetzt werden. Da es einen impliziten Wert hat, ist die Schieberegler-Orientierung niemals mehrdeutig.

### Tastaturinteraktionen

| Taste(n)              | Aktion                                                                              |
| --------------------- | ----------------------------------------------------------------------------------- |
| Pfeil rechts und oben | Erhöht den ausgewählten Wert um einen Schritt                                       |
| Pfeil links und unten | Verringert den ausgewählten Wert um einen Schritt                                   |
| Bild nach oben        | (Optional) erhöht den Wert um einen festgelegten Betrag, größer als ein Schritt     |
| Bild nach unten       | (Optional) verringert den Wert um einen festgelegten Betrag, größer als ein Schritt |
| Pos1                  | Setzt den Schieberegler auf den Minimalwert.                                        |
| Ende                  | Setzt den Schieberegler auf den Maximalwert.                                        |

Für die optionalen <kbd>Bild nach oben</kbd> und <kbd>Bild nach unten</kbd>-Tasten sollte die Änderung des Schiebereglerwerts um einen größeren Betrag als die Schrittänderungen erfolgen, die mit den Pfeiltasten nach oben und unten ausgeführt werden.

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

Die Position des Griffs ist der Maximalwert minus der aktuelle Wert mal der Höhe eines Grades, minus die Hälfte der Höhe des Griffs, um ihn zu zentrieren. Der Rest der Styles ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, um alle Tastatur- und Zeigerereignisse zu behandeln, einschließlich Ereignislistener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, und Stile für den Standardzustand und wenn der Griff und der Schieberegler den Fokus erhalten. Die Position des Griffs, die `aria-valuenow`- und `aria-valuetext`-Werte und der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn <kbd>Pfeil nach links</kbd>, <kbd>Pfeil nach unten</kbd>, <kbd>Pfeil nach rechts</kbd>, <kbd>Pfeil nach oben</kbd>, <kbd>Pos1</kbd>, <kbd>Ende</kbd> und optional <kbd>Bild nach unten</kbd> und <kbd>Bild nach oben</kbd>-Tasten losgelassen werden und wenn der Benutzer den Griff zieht oder anderweitig auf den Temperaturschieber klickt.

Mit semantischem HTML könnte dies folgendermaßen geschrieben werden:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits stilisiertes Bereichseingabewidget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und `value`, das bei Benutzerinteraktion automatisch aktualisiert wird. Wir müssen jedoch weiterhin JavaScript verwenden, um das `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt mehrere Möglichkeiten, um eine Bereichseingabe vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Beste Praktiken

Wenn der Schieberegler den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut hinzu, um auf den Status des Schiebereglers zu verweisen, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut auf `true` im Bereich bis zum vollständigen Laden.

HTMLs `<input type="range">` hat implizit die `role` von `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute auf `<input type="range">`-Elementen; verwenden Sie stattdessen `min` und `max`. Ansonsten gelten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die auf die Schiebereglerrolle anwendbar sind.

### Bevorzugen Sie HTML

Es wird empfohlen, ein nativen {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), anstelle der `slider`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Weitere Bereichswidgets sind:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C-WAI-ARIA-Praktikumsbeispiele:
  - [Horizontaler Mehrfach-Daumen-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Farbansicht-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Bewertungs-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Medienvorlauf-Schieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperaturschieberegler](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
