---
title: "ARIA: Rolle `slider`"
slug: Web/Accessibility/ARIA/Roles/slider_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Die Rolle `slider` definiert eine Eingabe, bei der der Benutzer einen Wert aus einem gegebenen Bereich auswählt.

## Beschreibung

Die Rolle `slider` ist für Bereichseingabewidgets gedacht, bei denen der Benutzer einen Wert aus einem gegebenen Minimum- und Maximumwert auswählt.

### Die Rolle `slider` im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) für Bereiche, darunter `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('progress')}}, ist ein schreibgeschützter Bereich, der den Abschlussgrad einer Aufgabe anzeigt, der sich in eine Richtung entwickelt, wie z.B. der Ladefortschrittsbalken eines Datei-Uploads, der bei vollständiger Ladung 100% erreicht.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('meter')}}, ist ein schreibgeschütztes Messgerät, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie z.B. ein Batteriestandanzeiger eines Computers oder die Tankanzeige eines Autos.

Die Rolle `slider`, ähnlich dem HTML-Element `input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist eine lese-schreibbare Bereichseingabe. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimum- und Maximumwerten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Schiebereglerknopf entlang eines horizontalen oder vertikalen Schiebers bewegt.

Während alle drei dieser Bereiche die gleichen ARIA-Zustände und -Eigenschaften haben, ist die Rolle `slider` der einzige lese-schreibbare Bereich: Es ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss es fokussierbar sein. Darüber hinaus müssen Tastaturinteraktion, Mausklicks und Touch-Interaktion unterstützt werden.

> [!WARNING]
> Um den Wert des Schiebereglers zu ändern, müssen berührungsbasierte assistive Technologien auf Benutzergesten zum Erhöhen und Verringern des Wertes reagieren, indem sie Tastendrücke simulieren.
> Testen Sie Schieberegler-Widgets vollständig mit assistiven Technologien auf Geräten, bei denen Touch die primäre Eingabemethode ist, bevor Sie die Rolle `slider` (und alle Bereichs-Widgets) verwenden.

#### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wird es weggelassen oder ist es keine Zahl, ist der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut definiert den Höchstwert. Fehlt es oder ist es keine Zahl, ist der Standardwert 100.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attributs muss zwischen den Mindest- und Höchstwerten, einschließlich dieser, liegen. Dieses Attribut ist für `slider` und `meter` erforderlich und für `progressbar` optional.

Für `slider`, es sei denn, Sie verwenden das Element [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), muss der `aria-valuenow`-Wert programmatisch aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut wird hinzugefügt, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des Schiebereglers widerspiegelt. Da die Mindest-, Höchst- und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut enthalten sein, wenn die Werte, die diese Zahlen darstellen, nicht numerisch sind, mit einem String-Wert, der den numerischen Wert definiert. Zum Beispiel, wenn ein Schieberegler für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von xx-small zu XX-large wechseln, während `aria-valuenow` steigt.

Der Wert von `aria-valuetext` muss aktualisiert werden, wenn der `value` oder `aria-valuenow` aktualisiert wird. Während es kein entsprechendes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ hinzufügen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal eines Schiebereglers ist, sollten Sie erwägen, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Während dies visuell kein Bereich ist, ist der Wert jeder Option für alle Benutzer zugänglicher, nicht nur für Benutzer von assistiven Technologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle des Bereichs auf ein HTML-{{HTMLElement('input')}}-Element (oder ein `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} abgeleitet werden. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie das HTML-{{HTMLElement('input')}}-Element nicht verwenden, um Ihren Schieberegler zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzu, um den Schieberegler fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und daher der einzige, der fokussierbar sein muss. Der Fokus sollte auf den Schiebereglerknopf gelegt werden.

Schieberegler haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird nicht mit `meter` oder `progressbar` unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktion akzeptiert. Neben der Einbeziehung des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs zur Aktivierung von Schieberegler-Fokus muss Tastatur- und Zeigergeräteunterstützung implementiert werden.

Der Schieberegler stellt den Bereich der möglichen Werte dar. Die Position des Schiebereglerknopfs entlang des Schiebereglers stellt den aktuellen Wert dar. Unterstützte Benutzeraktionen umfassen das Ändern des Wertes durch Ziehen des Knopfes oder Klicken auf den Schieberegler bei Zeigegeräten und die Verwendung von Richtungstasten wie Pfeiltasten für die Tastaturnutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Element/input/range)-Elemente zu verwenden, anstatt die Rolle `slider`. Benutzeragenten bieten ein stilisiertes Widget für das Bereichseingabeelement basierend auf dem aktuellen `value` in Bezug auf die Minimum- und Maximumwerte. Beim Einsatz nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Bereich mit mehreren Knöpfen

Ein Schieberegler mit mehreren Knöpfen ist ein Schieberegler mit zwei oder mehr Knöpfen, die jeweils einen Wert in einer Gruppe verwandter Werte einstellen. Zum Beispiel könnte in einer Produktsuche ein Schieberegler mit zwei Knöpfen verwendet werden, um es Benutzern zu ermöglichen, die Mindest- und Höchstpreisgrenzen für die Suche festzulegen.

In vielen Schiebereglern mit zwei Knöpfen dürfen die Knöpfe nicht aneinander vorbeigehen, wie z.B. wenn der Schieberegler die Mindest- und Höchstwerte für einen Bereich festlegt. Zum Beispiel ist in einem Preisspannenauswähler der Höchstwert des Knopfes, der das untere Ende des Bereichs festlegt, durch den aktuellen Wert des Knopfes begrenzt, der das obere Ende des Bereichs festlegt. Der Mindestwert des oberen Knopfes ist auch durch den aktuellen Wert des unteren Knopfes begrenzt.

Es ist keine Anforderung, dass die Knöpfe in Schiebereglern mit mehreren Knöpfen von den anderen Knopfwerten abhängig sind, aber eine intuitive Benutzererfahrung ist erforderlich, daher wird empfohlen, dieses Antimuster zu vermeiden.

### Alle Nachkommen sind präsentationell

Es gibt einige Typen von Benutzeroberflächen-Komponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API repräsentiert werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente in einem `slider` darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Roles/presentation_role) auf alle Nachkommenelemente eines `slider`-Elements an, da es eine Rolle ist, die keine semantischen Kinder unterstützt.

Zum Beispiel, berücksichtigen Sie das folgende `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachkommen eines `slider` präsentationell sind, ist der folgende Code gleichwertig:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive eines Benutzers von assistiven Technologien existiert die Überschrift nicht, da die vorherigen Codeausschnitte den folgenden im {{Glossary("Accessibility_tree", "Zugänglichkeitsbaum")}} entsprechen:

```html
<div role="slider">Temperature in Celsius</div>
```

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Schiebereglers angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht zutreffend wäre, verwenden Sie `aria-valuetext`, um dem Schieberegler einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Schieberegler-Element kennzeichnen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Schieberegler ist der implizite Wert `horizontal`, kann jedoch auf `vertical` gesetzt werden. Da dieser einen impliziten Wert hat, ist die Orientierung des Schieberegler nie unklar.

## Beispiele

Im untenstehenden Beispiel erstellen wir ein vertikales Thermometer, mit dem der Benutzer die Raumtemperatur einstellen kann:

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

Die Position des Knopfes ist der Höchstwert minus der aktuelle Wert, multipliziert mit der Höhe eines Grades, minus der halben Höhe des Knopfes, um ihn zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigerereignisse verarbeitet, einschließlich Event-Listener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, und Stile für den Standardzustand bereitstellen sowie wenn der Knopf und der Schieberegler den Fokus erhalten. Die Position des Knopfes, die Werte `aria-valuenow` und `aria-valuetext`, sowie der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und, optional, <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden und wenn der Benutzer den Knopf zieht oder anderweitig auf den Temperaturschieberegler klickt.

Mit semantischem HTML hätte dies wie folgt erfolgen können:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten Sie ein bereits gestyltes Bereichs-Eingabewidget mit Tastaturfokus, Fokusgestaltung, Tastaturinteraktionen und `value`, das bei Benutzerinteraktion kostenlos aktualisiert wird. Wir müssen jedoch immer noch JavaScript verwenden, um das `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, ein Bereichseingabeelement vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Tastaturinteraktionen

| Taste(n)                   | Aktion                                                                  |
| -------------------------- | ----------------------------------------------------------------------- |
| Rechts- und Aufwärtspfeile | Erhöht den ausgewählten Wert um einen Schritt                           |
| Links- und Abwärtspfeile   | Verringert den ausgewählten Wert um einen Schritt                       |
| Bild auf                   | (Optional) Erhöht den Wert um einen größeren Betrag als ein Schritt     |
| Bild ab                    | (Optional) Verringert den Wert um einen größeren Betrag als ein Schritt |
| Start                      | Setzt den Schieberegler auf den Mindestwert.                            |
| Ende                       | Setzt den Schieberegler auf den Höchstwert.                             |

Für die optionalen Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd> sollte die Änderung des Schiebereglerwerts größer sein als die Schrittänderungen, die durch Auf- und Abwärtspfeile vorgenommen werden.

## Beste Praktiken

Wenn der Schieberegler den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)-Attribut hinzu, um den Schiebereglerstatus zu referenzieren, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy)-Attribut auf `true` im Bereich, bis er vollständig geladen ist.

Das HTML-Element `<input type="range">` hat implizit die Rolle `slider`. Verwenden Sie nicht die Attribute `aria-valuemax` oder `aria-valuemin` auf `<input type="range">`-Elementen; verwenden Sie stattdessen `min` und `max`. Ansonsten gelten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die für die Rolle slider gelten.

### Bevorzugen Sie HTML

Es wird empfohlen, ein natives {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), anstelle der Rolle `slider` zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Element/input/range),
- HTML-Element {{HTMLElement('progress')}}
- HTML-Element {{HTMLElement('meter')}}
- Weitere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)
- Arbeitende Beispiele:
  - [Horizontaler Mehrfachknopf-Schieberegler](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/multithumb-slider.html)
  - [Horizontaler Schieberegler](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-1.html)
  - [Schieberegler mit `aria-orientation` und `aria-valuetext`](https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/slider/slider-2.html)
