---
title: "ARIA: Slider-Rolle"
short-title: slider
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die `slider`-Rolle definiert eine Eingabe, bei der der Benutzer einen Wert aus einem vorgegebenen Wertebereich auswählt.

## Beschreibung

Die `slider`-Rolle ist für Eingabewidgets im Bereich, bei denen der Benutzer einen Wert innerhalb eines vorgegebenen Mindest- und Höchstwerts auswählt.

### Die `slider`-Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen für Bereiche](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), einschließlich `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem {{HTMLElement('progress')}}-Element von HTML, ist ein schreibgeschützter Bereich, der den Fortschritt einer Aufgabe anzeigt, der in eine Richtung verläuft, wie zum Beispiel eine Fortschrittsleiste beim Hochladen einer Datei, die schließlich 100% erreicht, wenn sie vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem {{HTMLElement('meter')}}-Element von HTML, ist ein schreibgeschütztes Messinstrument, das die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie zum Beispiel ein Batterieanzeiger eines Computers oder eine Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich dem `input`-Element von HTML vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist ein beschreib- und änderbarer Eingabebereich. Slider erlauben Benutzern, einen Wert zwischen festgelegten Mindest- und Höchstwerten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Slider-Thumb entlang eines horizontalen oder vertikalen Sliders bewegt.

Obwohl alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `slider`-Rolle der einzige beschreibbare Bereich: Sie ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss sie in der Lage sein, den Fokus zu erhalten. Darüber hinaus muss die Unterstützung für Tastaturinteraktion, Mausklicks und Berührungsinteraktion gewährleistet sein.

> [!WARNING]
> Um den Sliderwert zu ändern, müssen berührungsbasierte unterstützende Technologien auf Benutzerbewegungen reagieren, um den Wert durch die Simulation von Tastenereignissen zu erhöhen oder zu verringern.
> Testen Sie Slider-Widgets umfassend mit unterstützenden Technologien auf Geräten, bei denen Berührung das primäre Eingabemedium ist, bevor Sie die `slider`-Rolle (und alle anderen Bereichswidgets) verwenden.

### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wenn es weggelassen oder keine Zahl ist, ist der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Höchstwert. Wenn es fehlt oder keine Zahl ist, ist der Standardwert 100.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen den Mindest- und Höchstwerten liegen, einschließlich dieser. Dieses Attribut ist für `slider` und `meter` erforderlich und optional für `progressbar`.

Für den `slider`, es sei denn, Sie verwenden das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element, muss der `aria-valuenow`-Wert programmatisch aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird hinzugefügt, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des Sliders widerspiegelt. Da die Minimal-, Maximal- und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Stringwert einbezogen werden, der den numerischen Wert definiert, wenn die Werte, die diese Zahlen repräsentieren, nicht numerisch sind. Zum Beispiel, wenn ein Slider zur Einstellung von T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut sich von xx-small bis XX-large verschieben, wenn `aria-valuenow` erhöht wird.

Der Wert von `aria-valuetext` muss aktualisiert werden, wenn der `value` oder `aria-valuenow` aktualisiert wird. Während es kein äquivalentes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` auf jeden {{htmlelement('input')}}-Typ anwenden. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` ein wichtiges Merkmal für einen Slider ist, ziehen Sie in Betracht, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden. Auch wenn es optisch kein Bereich ist, ist jeder Optionswert für alle Benutzer besser zugänglich, nicht nur für Benutzer unterstützender Technologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle des Bereichs auf ein HTML-{{HTMLElement('input')}}-Element (oder ein `<meter>`- oder `<progress>`-Element) angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie das HTML-{{HTMLElement('input')}}-Element nicht verwenden, um Ihren Slider zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um den Slider fokussierbar zu machen. Von den drei Bereichstypen ist nur der `slider` benutzerinteraktiv und erfordert daher die Möglichkeit, den Fokus zu erhalten. Der Fokus sollte auf den Slider-Thumb gesetzt werden.

Slider haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Wert von `horizontal`. Dieses Attribut wird bei `meter` oder `progressbar` nicht unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den schreibgeschützten Rollen `meter` und `progressbar` ist ein `slider` eine Eingabe, die Benutzerinteraktionen akzeptiert. Zusätzlich zur Einbeziehung des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs zur Aktivierung des Slider-Fokus muss die Unterstützung für Tastatur und Zeigegeräte implementiert werden.

Der Slider repräsentiert den Bereich möglicher Werte. Die Position des Slider-Thumbs entlang des Sliders stellt den aktuellen Wert dar. Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Wertes durch Ziehen des Thumbs oder Klicken auf den Slider für Zeigegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturnutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Elemente anstelle der `slider`-Rolle zu verwenden. Benutzeragenten bieten ein stilisiertes Widget für das Bereichseingabeelement basierend auf dem aktuellen `value` in Bezug auf die minimalen und maximalen Werte. Wenn nicht-semantische Elemente verwendet werden, müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### Bereich mit mehreren Thumbs

Ein Multi-Thumb-Slider ist ein Slider mit zwei oder mehr Thumbs, die jeweils einen Wert in einer Gruppe verwandter Werte setzen. Zum Beispiel könnte in einer Produktsuche ein zweithumbiger Slider verwendet werden, um Benutzern zu ermöglichen, die minimalen und maximalen Preislimits für die Suche festzulegen.

In vielen zweithumbigen Slidern dürfen die Thumbs einander nicht passieren, wie z.B. wenn der Slider die Minimal- und Maximalwerte eines Bereichs setzt. Zum Beispiel in einem Preisspannen-Wähler wird der Maximalwert des Thumbs, der das untere Ende des Bereichs setzt, durch den aktuellen Wert des Thumbs, der das obere Ende des Bereichs setzt, begrenzt. Der Minimalwert des oberen Thumbs wird ebenfalls durch den aktuellen Wert des unteren Thumbs begrenzt.

Es ist keine Anforderung, dass die Thumbs in Multi-Thumb-Slidern von den anderen Thumb-Werten abhängig sind, aber eine intuitive Benutzererfahrung ist eine Anforderung, daher wird empfohlen, dieses Anti-Muster zu vermeiden.

### Alle Nachkommen sind präsentativ

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugangs-API dargestellt werden, nur Text enthalten können. Zugangs-APIs haben keine Möglichkeit, semantische Elemente, die in einem `slider` enthalten sind, darzustellen. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle Nachkommen eines beliebigen `slider`-Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Betrachten Sie beispielsweise folgendes `slider`-Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachkommen von `slider` präsentativ sind, ist der folgende Code gleichwertig:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive eines Benutzers unterstützender Technologien existiert die Überschrift nicht, da die vorherigen Code-Snippets äquivalent zu den folgenden im {{Glossary("Accessibility_tree", "Accessibility Tree")}} sind:

```html
<div role="slider">Temperature in Celsius</div>
```

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Sliders anzeigt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Falls dies nicht zutreffend wäre, verwenden Sie `aria-valuetext`, um dem Slider einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den minimalen Wert darstellt und kleiner als `aria-valuemax` ist. Falls nicht vorhanden, ist der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den maximalen Wert darstellt und größer als `aria-valuemin` ist. Falls nicht vorhanden, ist der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Stringwert oder identifiziert das Element (oder die Elemente), die das Slider-Element beschriften und einen zugänglichen Namen bieten. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Beim Slider ist der implizite Wert `horizontal`, kann aber auf `vertical` gesetzt werden. Da er einen impliziten Wert hat, ist die Orientierung des Sliders nie mehrdeutig.

### Tastaturinteraktionen

| Taste(n)               | Aktion                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Pfeile rechts und oben | Erhöhen des ausgewählten Wertes um einen Schritt                                     |
| Pfeile links und unten | Verringern des ausgewählten Wertes um einen Schritt                                  |
| Bild nach oben         | (Optional) erhöhen des Wertes um einen festgelegten Betrag größer als ein Schritt    |
| Bild nach unten        | (Optional) verringern des Wertes um einen festgelegten Betrag größer als ein Schritt |
| Home                   | Setzt den Slider auf den minimalen Wert.                                             |
| Ende                   | Setzt den Slider auf den maximalen Wert.                                             |

Für die optionalen Tasten <kbd>Bild nach oben</kbd> und <kbd>Bild nach unten</kbd> sollte die Änderung des Sliderwerts um einen Betrag größer sein als die Schrittänderungen durch die Pfeiltasten oben und unten.

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

Die Position des Thumbs ist der Höchstwert minus der aktuelle Wert mal die Höhe eines Grades, minus die Hälfte der Höhe des Thumbs, um es zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigereignisse behandelt, einschließlich Event-Listener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown` und Stile für den Standardzustand und wenn der Thumb und der Slider den Fokus erhalten. Die Position des Thumbs, die `aria-valuenow`- und `aria-valuetext`-Werte sowie der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd>, und optional <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden und wenn der Benutzer den Thumb zieht oder auf den Temperaturslider klickt.

Mit semantischem HTML hätte dies geschrieben werden können als:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabewidget mit Tastaturfokus, Fokusgestaltung, Tastaturinteraktionen und `value`, das bei Benutzerinteraktion kostenlos aktualisiert wird. Wir müssen immer noch JavaScript verwenden, um das `aria-valuetext` und den Wert des {{HTMLElement('output')}}-Elements zu ändern.

Es gibt einige Möglichkeiten, ein Bereichseingabeelement vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/Reference/Properties/transform) verwendet.

## Beste Praktiken

Wenn der Slider den Ladefortschritt eines bestimmten Bereichs einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut hinzu, um auf den Status des Sliders zu verweisen, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut auf `true` für den Bereich, bis er fertig geladen ist.

HTML's `<input type="range">` hat implizit die `role` des `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute auf `<input type="range">` Elementen; verwenden Sie stattdessen `min` und `max`. Andernfalls gelten alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute, die auf die Slider-Rolle anwendbar sind.

### HTML vorziehen

Es wird empfohlen, einen nativen {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), anstelle der `slider`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}}-Element
- HTML {{HTMLElement('meter')}}-Element
- Andere Bereichswidgets sind:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokusierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C WAI-ARIA-Praktiken Beispiele:
  - [Horizontaler Multi-Thumb-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Farbansicht-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Bewertungs-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Media-Such-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertikaler Temperatur-Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
