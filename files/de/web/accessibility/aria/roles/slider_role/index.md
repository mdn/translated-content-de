---
title: "ARIA: slider Rolle"
slug: Web/Accessibility/ARIA/Roles/slider_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `slider` Rolle definiert eine Eingabe, bei der der Benutzer einen Wert aus einem vorgegebenen Bereich auswählt.

## Beschreibung

Die `slider` Rolle ist für Bereichseingabesteuerelemente gedacht, bei denen der Benutzer einen Wert zwischen vorgegebenen Minimal- und Maximalwerten auswählt.

### Die `slider` Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Steuerelementrollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) für Bereiche an, darunter Fortschrittsbalken, Messgeräte und Schieberegler.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role) Rolle, ähnlich dem {{HTMLElement('progress')}} Element von HTML, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe anzeigt, die in eine Richtung fortschreitet, wie beispielsweise der Ladefortschrittsbalken eines Datei-Uploads, der letztendlich 100% erreicht, wenn er vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role) Rolle, ähnlich dem {{HTMLElement('meter')}} Element von HTML, ist ein schreibgeschütztes Messgerät, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie etwa den Batteriestatus eines Computers oder die Tankanzeige eines Autos.

Die `slider` Rolle, ähnlich einem HTML `input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein beschreibbares Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Daumen entlang eines horizontalen oder vertikalen Schiebereglers bewegt.

Obwohl alle drei dieser Bereiche die gleichen ARIA-Zustände und Eigenschaften haben, ist die `slider` Rolle der einzige beschreibbare Bereich: Sie ist die einzige, deren Wert sich durch Benutzerinteraktion ändert. Daher muss sie fokussierbar sein. Darüber hinaus müssen Tastaturinteraktionen, Mausklicks und Berührungsinteraktionen unterstützt werden.

> [!WARNING]
> Um den Schiebereglerwert zu ändern, müssen berührungsbasierte Hilfstechnologien auf Benutzerbewegungen für das Erhöhen und Verringern des Wertes reagieren, indem sie Tastenereignisse synthetisieren.
> Testen Sie Schieberegler-Widgets vollständig mit Hilfstechnologien auf Geräten, bei denen Berührung das primäre Eingabemedium ist, bevor Sie die `slider` Rolle (und alle Bereichs-Widgets) verwenden.

#### Gemeinsame Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) Attribut legt den Minimalwert fest. Wenn es weggelassen oder keine Zahl ist, wird `0` (Null) als Standard gesetzt.

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, wird es auf 100 gesetzt.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) Attributs muss zwischen den Minimal- und Maximalwerten liegen, einschließlich dieser Werte. Dieses Attribut ist für `slider` und `meter` erforderlich und für `progressbar` optional.

Für `slider`, es sei denn, es wird das [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Element verwendet, muss der `aria-valuenow` Wert programmgesteuert aktualisiert werden, wenn der Benutzer den Wert ändert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) Attribut wird verwendet, wenn der numerische `aria-valuenow` Wert nicht den beabsichtigten Wert des Schiebereglers widerspiegelt. Da die Minimal-, Maximal- und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext` Attribut enthalten sein, wenn die durch diese Zahlen vertretenen Werte nicht numerisch sind und einen Stringwert definieren, der den numerischen Wert beschreibt. Zum Beispiel, wenn ein Schieberegler für T-Shirt-Größen verwendet wird, sollte sich das `aria-valuetext` Attribut von xx-small bis XX-large ändern, während `aria-valuenow` zunimmt.

Der `aria-valuetext` Wert muss aktualisiert werden, wenn der `value` oder `aria-valuenow` Wert aktualisiert wird. Obwohl es kein entsprechendes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` bei jedem {{htmlelement('input')}} Typ einschließen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal für einen Schieberegler ist, erwägen Sie die Verwendung von {{HTMLElement('select')}} mit {{HTMLElement('option')}} Elementen stattdessen. Obwohl es optisch kein Bereich ist, ist jeder Optionswert für alle Benutzer zugänglicher, nicht nur für Benutzer von Hilfstechnologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rollen des Bereichs auf ein HTML {{HTMLElement('input')}} Element (oder `<meter>` oder `<progress>` Element) angewendet werden, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Ansonsten verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie das HTML {{HTMLElement('input')}} Element nicht verwenden, um Ihren Schieberegler zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) Attribut ein, um den Schieberegler fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und daher der einzige, der fokussierbar sein muss. Der Fokus sollte auf den Regler-Daumen gelegt werden.

Schieberegler haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Wert von `horizontal`. Dieses Attribut wird beim `meter` oder `progressbar` nicht unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten `meter` und `progressbar` Rollen ist ein `slider` eine Eingabe, die Benutzerinteraktionen akzeptiert. Zusätzlich zum Hinzufügen des [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) Attributs, um den Fokus des Schiebereglers zu aktivieren, muss Tastaturen- und Zeigereingabegeräteunterstützung implementiert werden.

Der Schieberegler stellt den Bereich der möglichen Werte dar. Die Position des Regler-Daumens entlang des Schiebereglers stellt den aktuellen Wert dar. Die Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Wertes durch Ziehen des Daumens oder Klicken auf den Schieberegler für Zeigegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für die Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Elemente anstelle der `slider` Rolle zu verwenden. Benutzeragenten stellen ein stilisiertes Widget für das Bereichseingabeelement zur Verfügung, basierend auf dem aktuellen `value`, wie er sich auf die Minimal- und Maximalwerte bezieht. Wenn nicht-semantische Elemente verwendet werden, müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### Bereich mit mehreren Daumen

Ein Schieberegler mit mehreren Daumen ist ein Schieberegler mit zwei oder mehr Daumen, die jeweils einen Wert in einer Gruppe verwandter Werte festlegen. Zum Beispiel könnte ein Schieberegler mit zwei Daumen in einer Produktsuche verwendet werden, um es Benutzern zu ermöglichen, die minimalen und maximalen Preisgrenzen für die Suche festzulegen.

In vielen Schiebereglern mit zwei Daumen darf der Daumen einander nicht passieren, wie beispielsweise, wenn der Schieberegler die Minimal- und Maximalwerte für einen Bereich festlegt. Zum Beispiel ist bei einem Preisbereichswähler der Maximalwert des Daumens, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Daumens begrenzt, der das obere Ende des Bereichs festlegt. Der Minimalwert des oberen Enddaumens ist ebenfalls durch den aktuellen Wert des unteren Enddaumens begrenzt.

Es ist nicht erforderlich, dass die Daumen in Schiebereglern mit mehreren Daumen abhängig von den anderen Daumenwerten sind, aber ein intuitives Benutzererlebnis ist erforderlich, daher wird empfohlen, dieses Anti-Muster zu vermeiden.

### Alle Nachfahren sind präsent

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `slider` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachfahren-Elemente eines `slider` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `slider` Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachfahren von `slider` präsent sind, ist der folgende Code gleichwertig:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Sicht des Hilfstechnologie-Benutzers existiert die Überschrift nicht, da die vorherigen Codeschnipsel dem folgenden im [Zugänglichkeit-Baum](/de/docs/Glossary/Accessibility_tree) gleichwertig sind:

```html
<div role="slider">Temperature in Celsius</div>
```

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)
  - : Festgelegt auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax`, der den aktuellen Wert des Schiebereglers angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Hilfstechnologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht genau wäre, verwenden Sie `aria-valuetext`, um dem Schieberegler einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Festgelegt auf einen Dezimalwert, der den Minimalwert darstellt und kleiner ist als `aria-valuemax`. Wenn nicht vorhanden, beträgt der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Festgelegt auf einen Dezimalwert, der den Maximalwert darstellt und größer ist als `aria-valuemin`. Wenn nicht vorhanden, beträgt der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den string Wert oder identifiziert das Element (oder die Elemente), die das Schieberegler-Element beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Schieberegler ist der implizite Wert `horizontal`, kann aber auf `vertical` gesetzt werden. Da es einen impliziten Wert hat, ist die Schieberegler-Ausrichtung nie mehrdeutig.

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

Die Position des Daumens ist der maximale Wert minus dem aktuellen Wert multipliziert mit der Höhe eines Grades, minus der halben Höhe des Daumens, um ihn zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, um alle Tastatur- und Zeigereignisse zu behandeln, einschließlich Ereignislistener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, und Stile für den Standardzustand bereitstellen sowie für den Fall, wenn Daumen und Schieberegler den Fokus erhalten. Die Position des Daumens, die Werte von `aria-valuenow` und `aria-valuetext` und der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Global_attributes#id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und optional <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden und wenn der Benutzer den Daumen zieht oder sonst auf den Temperaturschieberegler klickt.

Unter Verwendung von semantischem HTML könnte dies wie folgt geschrieben werden:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten Sie ein bereits gestyltes Bereichseingabe-Widget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und automatisch aktualisiertem `value` bei Benutzerinteraktionen. Wir müssen dennoch JavaScript verwenden, um das `aria-valuetext` und den Wert des {{HTMLElement('output')}} Elements zu ändern.

Es gibt einige Möglichkeiten, eine Bereichseingabe vertikal zu gestalten. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Tastaturinteraktionen

| Taste(n)             | Aktion                                                          |
| -------------------- | --------------------------------------------------------------- |
| Rechts- und Pfeiltasten nach oben | Erhöhen Sie den ausgewählten Wert um einen Schritt       |
| Links- und Pfeiltasten nach unten | Verringern Sie den ausgewählten Wert um einen Schritt     |
| Bild hoch            | (Optional) erhöhen Sie den Wert um einen festgelegten Betrag, der größer ist als ein Schritt |
| Bild runter          | (Optional) verringern Sie den Wert um einen festgelegten Betrag, der größer ist als ein Schritt |
| Home                 | Setzen Sie den Schieberegler auf den Minimalwert.                    |
| Ende                 | Setzen Sie den Schieberegler auf den Maximalwert.                   |

Für die optionalen <kbd>Bild hoch</kbd> und <kbd>Bild runter</kbd> Tasten sollte die Änderung des Schiebereglerwertes um einen Betrag erfolgen, der größer ist als die Schrittänderungen durch Auf- und Abwärtspfeile.

## Beste Praktiken

Wenn der Schieberegler den Ladefortschritt einer bestimmten Region einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) Attribut hinzu, um auf den Status des Schiebereglers zu verweisen, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) Attribut auf `true` für die Region, bis sie vollständig geladen ist.

HTML's `<input type="range">` hat implizit die `Rolle` von `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute bei `<input type="range">` Elementen; verwenden Sie stattdessen `min` und `max`. Ansonsten gelten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die für die slider Rolle anwendbar sind.

### HTML bevorzugen

Es wird empfohlen, einen nativen {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), anstelle der `slider` Rolle zu verwenden.

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
- Arbeitende Beispiele:
  - [Horizontaler Schieberegler mit mehreren Daumen](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/multithumb-slider.html)
  - [Horizontaler Schieberegler](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-1.html)
  - [Schieberegler mit `aria-orientation` und `aria-valuetext`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-2.html)
