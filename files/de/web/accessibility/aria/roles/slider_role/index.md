---
title: "ARIA: slider role"
slug: Web/Accessibility/ARIA/Roles/slider_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die Rolle `slider` definiert eine Eingabe, bei der der Benutzer einen Wert aus einem vorgegebenen Bereich auswählt.

## Beschreibung

Die Rolle `slider` ist für Eingabefeld-Widgets vorgesehen, bei denen der Benutzer einen Wert innerhalb vorgegebener minimaler und maximaler Werte auswählt.

### Die Rolle `slider` im Vergleich zu anderen Bereichsoptionen

ARIA stellt Entwicklern sechs verschiedene Bereichs-[Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) zur Verfügung, einschließlich Fortschrittsbalken, Messgeräten und Schiebereglern.

Die Rolle [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role), ähnlich dem {{HTMLElement('progress')}}-Element von HTML, ist ein nur-lesbarer Bereich, der den Vollendungsgrad einer Aufgabe anzeigt, der sich in eine Richtung bewegt, wie beispielsweise ein Ladefortschrittsbalken beim Hochladen von Dateien, der schließlich 100% erreicht, sobald vollständig geladen.

Die Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), ähnlich dem {{HTMLElement('meter')}}-Element von HTML, ist ein nur-lesbares Messgerät, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie z. B. ein Batterieindikator eines Computers oder eine Tankanzeige eines Autos.

Die Rolle `slider`, ähnlich der Eingabe `input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein schreibbares Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schieberegler-Daumen entlang eines horizontalen oder vertikalen Schiebereglers bewegt.

Während alle drei dieser Bereiche die gleichen ARIA-Zustände und -Eigenschaften haben, ist die Rolle `slider` der einzige schreibbare Bereich: er ist der einzige, dessen Wert durch Benutzerinteraktion verändert wird. Daher muss er den Fokus erhalten können. Außerdem müssen Tastatur-, Maus- und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Um den Schieberegler-Wert zu ändern, müssen Touch-basierte Hilfstechnologien auf Benutzerbewegungen reagieren, die den Wert durch Simulation von Tastenereignissen erhöhen oder verringern.
> Testen Sie Schieberegler-Widgets mit Hilfstechnologien auf Geräten, bei denen Touch die primäre Eingabemethode ist, bevor Sie die `slider`-Rolle (und alle Bereichs-Widgets) verwenden.

#### Allgemeine Attribute

Das Attribut [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) legt den Minimalwert fest. Wird es weggelassen oder ist es keine Zahl, beträgt der Standardwert `0` (null).

Das Attribut [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert 100.

Der Attributwert [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) muss sich innerhalb der minimalen und maximalen Werte befinden, einschließlich dieser. Dieses Attribut ist für `slider` und `meter` erforderlich und optional für `progressbar`.

Für `slider`, es sei denn, Sie verwenden das `<input type="range">`-Element, muss der Wert `aria-valuenow` programmgesteuert aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) wird eingeschlossen, wenn der numerische `aria-valuenow`-Wert nicht den beabsichtigten Wert des Schiebereglers widerspiegelt. Da die minimalen, maximalen und aktuellen Werte alle numerisch sind, sollte das Attribut `aria-valuetext` mit einem Zeichenfolgenwert enthalten sein, wenn die durch diese Zahlen repräsentierten Werte nicht numerisch sind. Wenn z. B. ein Schieberegler für T-Shirt-Größen verwendet wird, sollte das Attribut `aria-valuetext` von xx-small bis XX-large wechseln, während `aria-valuenow` zunimmt.

Der Wert von `aria-valuetext` muss aktualisiert werden, wenn der `value` oder `aria-valuenow` aktualisiert werden. Obwohl es kein entsprechendes HTML-Attribut für `<input type="range">` gibt, kann `aria-valuetext` bei jedem {{htmlelement('input')}}-Typ eingeschlossen werden. ARIA-Attribute werden von semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal für einen Schieberegler ist, ziehen Sie in Erwägung, stattdessen {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Auch wenn es sich visuell nicht um einen Bereich handelt, ist der Wert jeder Option für alle Benutzer, nicht nur für Benutzer von unterstützenden Technologien, zugänglicher.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle des Bereichs auf ein HTML-{{HTMLElement('input')}}-Element (oder `<meter>` oder `<progress>`-Element) angewendet wird, kann der zugängliche Name aus der zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht zur Erstellung Ihres Schiebereglers verwendet wird, fügen Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) hinzu, um den Schieberegler fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und daher der einzige, der in der Lage sein muss, den Fokus zu erhalten. Der Fokus sollte auf den Schieberegler-Daumen gelegt werden.

Schieberegler haben einen impliziten `aria-orientation`-Wert von `horizontal`. Dieses Attribut wird bei `meter` oder `progressbar` nicht unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den nur-lesbaren Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktionen akzeptiert. Zusätzlich zum Einschließen des Attributs [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex) zur Aktivierung des Schieberegler-Fokus, müssen Tastatur- und Zeigergerätestütze implementiert werden.

Der Schieberegler repräsentiert den Bereich möglicher Werte. Die Position des Schiebereglers-Daumen entlang des Schiebereglers repräsentiert den aktuellen Wert. Benutzeraktionen, die unterstützt werden müssen, beinhalten das Ändern des Wertes durch Ziehen des Daumens oder Klicken auf den Schieberegler für Zeigereingabegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente statt der `slider`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das Bereichseingabeelement, basierend auf dem aktuellen `value` in Bezug auf minimale und maximale Werte. Bei der Verwendung von nicht-semantischen Elementen müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### Bereich mit mehreren Daumen

Ein mehrdaumiger Schieberegler ist ein Schieberegler mit zwei oder mehr Daumen, die jeweils einen Wert in einer Gruppe verwandter Werte festlegen. Beispielsweise könnte in einer Produktsuche ein Schieberegler mit zwei Daumen verwendet werden, um es Benutzern zu ermöglichen, die Mindest- und Höchstpreisgrenzen für die Suche festzulegen.

In vielen Schiebereglern mit zwei Daumen dürfen die Daumen nicht aneinander vorbeigehen, wie beispielsweise wenn der Schieberegler die minimalen und maximalen Werte für einen Bereich festlegt. Beispielsweise wird in einem Preisspannenwähler der Maximalwert des Daumens, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Daumens begrenzt, der das obere Ende des Bereichs festlegt. Der Minimalwert des oberen Enddaumens wird ebenfalls durch den aktuellen Wert des unteren Enddaumens begrenzt.

Es ist nicht erforderlich, dass die Daumen in Schiebereglern mit mehreren Daumen von den anderen Daumenwerten abhängig sind, aber eine intuitive Benutzererfahrung ist erforderlich, daher wird empfohlen, dieses Anti-Pattern zu vermeiden.

### Alle Nachkommen sind präsentational

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `slider` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `slider`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Betrachten Sie zum Beispiel das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da die Nachkommen von `slider` präsentational sind, ist der folgende Code gleichwertig:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive des Benutzers von unterstützenden Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets dem folgenden im [Zugänglichkeitsbaum](/de/docs/Glossary/Accessibility_tree) entsprechen:

```html
<div role="slider">Temperature in Celsius</div>
```

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` eingestellt, der den aktuellen Wert des Schiebereglers anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht zutreffend wäre, verwenden Sie `aria-valuetext`, um den Schieberegler mit einem verständlicheren Wert zu versehen.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert eingestellt, der den Minimalwert repräsentiert und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert eingestellt, der den Maximalwert repräsentiert und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Schieberelement beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/zweideutig ist. Bei einem Schieberegler ist der implizite Wert `horizontal`, kann jedoch auf `vertical` gesetzt werden. Da es einen impliziten Wert hat, ist die Orientierung des Schiebereglers nie zweideutig.

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

Die Position des Daumens ist der Maximalwert minus der aktuelle Wert mal die Höhe eines Grades minus der halben Höhe des Daumens, um ihn zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigerereignisse behandelt, einschließlich Ereignis-Listener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, und Stile für den Standardzustand und wenn Daumen und Schieberegler den Fokus erhalten. Die Position des Daumens, die `aria-valuenow`- und `aria-valuetext`-Werte sowie der innere Text des Elements mit dem [`id`](/de/docs/Web/HTML/Global_attributes#id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und optional <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden, und wenn der Benutzer den Daumen zieht oder anderweitig auf den Temperaturschieberegler klickt.

Unter Verwendung von semantischem HTML könnte dies so geschrieben werden:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabe-Widget mit Keyboard-Fokus, Fokusstyling, Tastaturinteraktionen und einem auf Benutzerinteraktionen aktualisierten `value` kostenlos. Wir müssen dennoch JavaScript verwenden, um den `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, eine Bereichseingabe vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Tastaturinteraktionen

| Taste(n)                 | Aktion                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------- |
| Rechts- und Hochpfeile   | Erhöhen Sie den ausgewählten Wert um einen Schritt                                     |
| Links- und Abwärtspfeile | Verringern Sie den ausgewählten Wert um einen Schritt                                  |
| Page Up                  | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag größer als ein Schritt    |
| Page Down                | (Optional) Verringern Sie den Wert um einen festgelegten Betrag größer als ein Schritt |
| Home                     | Setzen Sie den Schieberegler auf den Minimalwert.                                      |
| End                      | Setzen Sie den Schieberegler auf den Maximalwert.                                      |

Für die optionalen <kbd>Page Up</kbd>- und <kbd>Page Down</kbd>-Tasten sollte die Änderung des Schiebereglerwertes um einen Betrag größer als die Schrittänderungen der Auf- und Abwärtspfeile erfolgen.

## Beste Praktiken

Wenn der Schieberegler den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) hinzu, um auf den Schieberegler-Status zu verweisen, und setzen Sie das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) auf `true`, bis das Laden abgeschlossen ist.

HTMLs `<input type="range">` hat implizit die Rolle eines `slider`. Verwenden Sie auf `<input type="range">`-Elementen keine `aria-valuemax` oder `aria-valuemin` Attribute; verwenden Sie stattdessen `min` und `max`. Ansonsten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die auf die Schiebereglerrolle anwendbar sind.

### HTML bevorzugen

Es wird empfohlen, ein natives {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), statt der `slider`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Weitere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- Funktionierende Beispiele:
  - [Horizontaler Multi-Daumen-Schieberegler](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/multithumb-slider.html)
  - [Horizontaler Schieberegler](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-1.html)
  - [Schieberegler mit `aria-orientation` und `aria-valuetext`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-2.html)
