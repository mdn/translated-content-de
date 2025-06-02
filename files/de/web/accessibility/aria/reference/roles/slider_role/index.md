---
title: "ARIA: slider Rolle"
short-title: slider
slug: Web/Accessibility/ARIA/Reference/Roles/slider_role
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

Die `slider` Rolle definiert eine Eingabe, bei der der Benutzer einen Wert aus einem gegebenen Bereich auswählt.

## Beschreibung

Die `slider` Rolle ist für Bereichseingabewidget gedacht, bei denen der Benutzer einen Wert aus gegebenen Minimal- und Maximalwerten auswählt.

### Die `slider` Rolle im Vergleich zu anderen Bereichsoptionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Bereiche, darunter `progressbar`, `meter` und `slider`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) Rolle, ähnlich dem HTML-Element {{HTMLElement('progress')}}, ist ein nur-lesbarer Bereich, der den Prozentsatz der Erledigung einer Aufgabe angibt, der sich in einer Richtung fortbewegt, wie z.B. eine Ladefortschrittsanzeige beim Hochladen einer Datei, die letztendlich 100 % erreicht, wenn sie vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) Rolle, ähnlich dem HTML-Element {{HTMLElement('meter')}}, ist eine nur-lesbare Skala, die die Menge von etwas innerhalb eines bekannten Bereichs anzeigt, wie z.B. die Batterieanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider` Rolle, ähnlich einem HTML `input` vom Typ `range` [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist eine Lese-und-Schreib-Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen festgelegten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Schiebereglerknopf entlang eines horizontalen oder vertikalen Schiebereglers bewegt, um einen Wert auszuwählen.

Obwohl alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `slider` Rolle der einzige Lese-und-Schreib-Bereich: Er ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss er fokussierbar sein. Zusätzlich müssen Tastaturinteraktion, Mausklicks und Berührungsinteraktion unterstützt werden.

> [!WARNING]
> Um den Schiebereglerwert zu ändern, müssen assistive Technologien, die auf Berührung basieren, auf Benutzerbewegungen reagieren, um den Wert durch die Synthese von Tastenereignissen zu erhöhen und zu verringern. Testen Sie Schieberegler-Widgets vollständig mit assistiven Technologien auf Geräten, bei denen Berührung der primäre Eingabemechanismus ist, bevor Sie die `slider` Rolle (und alle Bereichswidgets) verwenden.

### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) Attribut setzt den Mindestwert. Wird es weggelassen oder ist es keine Zahl, so ist der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert 100.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) Attributs muss zwischen den Minimal- und Maximalwerten, inklusive, liegen. Dieses Attribut ist für `slider` und `meter` erforderlich und für `progressbar` optional.

Für `slider`, es sei denn, Sie verwenden das [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element, muss der `aria-valuenow` Wert programmgesteuert aktualisiert werden, wenn der Benutzer den Wert aktualisiert.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) Attribut wird hinzugefügt, wenn der `aria-valuenow` numerische Wert nicht den beabsichtigten Wert des Schiebereglers widerspiegelt. Da die Mindest-, Höchst- und aktuellen Werte alle numerisch sind, sollte das `aria-valuetext` Attribut mit einem Zeichenfolgenwert hinzugefügt werden, der den numerischen Wert definiert, wenn die Werte, die diese Zahlen darstellen, nicht numerisch sind. Zum Beispiel, wenn ein Schieberegler für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext` Attribut von xx-small bis XX-large verschoben werden, wenn der `aria-valuenow` ansteigt.

Der `aria-valuetext` Wert muss aktualisiert werden, sobald der `value` oder `aria-valuenow` aktualisiert wird. Während es kein entsprechendes HTML-Attribut für `<input type="range">` gibt, können Sie `aria-valuetext` bei jedem {{htmlelement('input')}} Typ hinzufügen. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt.

Wenn `aria-valuetext` eine wichtige Eigenschaft für einen Schieberegler ist, ziehen Sie in Betracht, ein {{HTMLElement('select')}} mit {{HTMLElement('option')}} Elementen zu verwenden. Während es nicht visuell ein Bereich ist, ist der Wert jeder Option für alle Benutzer zugänglicher, nicht nur für Benutzer von unterstützenden Technologien.

Ein zugänglicher Name ist **erforderlich**. Wenn die Bereiche Rolle auf ein HTML {{HTMLElement('input')}} Element (oder `<meter>` oder `<progress>` Element) angewendet wird, kann der zugängliche Name von dem zugeordneten {{HTMLElement('label')}} kommen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie nicht das HTML {{HTMLElement('input')}} Element verwenden, um Ihren Schieberegler zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um den Schieberegler fokussierbar zu machen. Von den drei Bereichstypen ist nur `slider` benutzerinteraktiv und somit der einzige, der fokussierbar sein muss. Der Fokus sollte auf den Schiebereglerknopf gelegt werden.

Schieberegler haben einen impliziten [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Wert von `horizontal`. Dieses Attribut wird nicht mit `meter` oder `progressbar` unterstützt.

### Benutzerinteraktionen

Im Gegensatz zu den nur-lesbaren `meter` und `progressbar` Rollen ist ein `slider` eine Eingabe, die Benutzerinteraktion akzeptiert. Zusätzlich zum Einschließen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attributs, um den Schieberegler fokussierbar zu machen, muss Tastatur- und Zeigergerätesupport implementiert werden.

Der Schieberegler stellt den Bereich der möglichen Werte dar. Die Position des Schiebereglerknopfs entlang des Reglers stellt den aktuellen Wert dar. Benutzeraktionen, die unterstützt werden müssen, umfassen das Ändern des Werts durch Ziehen des Knopfes oder Klicken auf den Regler für Zeigegeräte und die Verwendung von Richtungstasten wie Pfeiltasten für Tastaturbenutzer. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, native [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Elemente statt der `slider` Rolle zu verwenden. Benutzeragenten stellen ein stilisiertes Widget für das Bereicheingabeelement bereit, basierend auf dem aktuellen `value`, wie er sich auf die Minimal- und Maximalwerte bezieht. Wenn nicht-semantische Elemente verwendet werden, müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Bereich mit mehreren Knöpfen

Ein Mehrfachknopf-Schieberegler ist ein Schieberegler mit zwei oder mehr Knöpfen, die jeweils einen Wert in einer Gruppe verwandter Werte festlegen. Zum Beispiel kann ein Schieberegler mit zwei Knöpfen in einer Produktsuche verwendet werden, um Benutzern zu ermöglichen, die minimalen und maximalen Preisgrenzen für die Suche festzulegen.

In vielen Schiebereglersystemen mit zwei Knöpfen dürfen sich die Knöpfe nicht kreuzen, wie zum Beispiel, wenn der Schieberegler den Minimal- und Maximalwert für einen Bereich festlegt. In einem Preisbereichswähler ist der Maximalwert des Knopfes, der das untere Ende des Bereichs festlegt, auf den aktuellen Wert des Knopfes beschränkt, der das obere Ende des Bereichs festlegt. Der Minimalwert des oberen Knopfes ist ebenfalls auf den aktuellen Wert des unteren Knopfes beschränkt.

Es ist keine Voraussetzung, dass die Knöpfe in Mehrknotenschiebereglern abhängig von den anderen Wert des Knopfs sind, aber eine intuitive Benutzererfahrung ist eine Voraussetzung. Es wird daher empfohlen, dieses Anti-Muster zu vermeiden.

### Alle Nachfahren sind präsentationell

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur Text enthalten können. Zugänglichkeits-APIs haben keine Möglichkeit, semantische Elemente zu repräsentieren, die in einem `slider` enthalten sind. Um mit dieser Einschränkung umzugehen, wenden Browser automatisch die Rolle [`presentation`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role) auf alle nachfolgenden Elemente eines jeden `slider` Elements an, da es sich um eine Rolle handelt, die keine semantischen Kinder unterstützt.

Zum Beispiel beachten Sie folgendes `slider` Element, das eine Überschrift enthält.

```html
<div role="slider"><h3>Temperature in Celsius</h3></div>
```

Da Nachfahren eines `slider` präsentational sind, ist der folgende Code gleichbedeutend:

```html
<div role="slider"><h3 role="presentation">Temperature in Celsius</h3></div>
```

Aus der Perspektive eines Benutzers von unterstützender Technologie existiert die Überschrift nicht, da die vorherigen Code-Snippets gleichbedeutend mit dem Folgenden im {{Glossary("Accessibility_tree", "Zugängigkeitsbaum")}} sind:

```html
<div role="slider">Temperature in Celsius</div>
```

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` festgelegt, der den aktuellen Wert des Schiebereglers angibt.
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn dies nicht zutreffend wäre, verwenden Sie `aria-valuetext`, um dem Schieberegler einen verständlicheren Wert zu geben.
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert festgelegt, der den Minimalwert repräsentiert und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, beträgt der Standardwert 0.
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert festgelegt, der den Maximalwert repräsentiert und größer als `aria-valuemin` ist. Wenn nicht vorhanden, beträgt der Standardwert 100.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das oder die Elemente, die das Schieberegler-Element beschriften, um einen zugänglichen Namen bereitzustellen. Ein zugänglicher Name ist erforderlich.
- [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)
  - : Gibt an, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist. Bei einem Schieberegler beträgt der implizite Wert `horizontal`, kann jedoch auf `vertical` gesetzt werden. Da es einen impliziten Wert hat, ist die Schiebereglerorientierung niemals mehrdeutig.

### Tastaturinteraktionen

| Taste(n)                     | Aktion                                                                             |
| ---------------------------- | ---------------------------------------------------------------------------------- |
| Rechts- und Nach-oben-Pfeile | Erhöhen Sie den ausgewählten Wert um einen Schritt                                 |
| Links- und Nach-unten-Pfeile | Verringern Sie den ausgewählten Wert um einen Schritt                              |
| Bild-auf                     | (Optional) Erhöhen Sie den Wert um einen Betrag, der größer als ein Schritt ist    |
| Bild-ab                      | (Optional) Verringern Sie den Wert um einen Betrag, der größer als ein Schritt ist |
| Pos1                         | Setzt den Schieberegler auf den Minimalwert.                                       |
| Ende                         | Setzt den Schieberegler auf den Maximalwert.                                       |

Für die optionalen <kbd>Bild-auf</kbd> und <kbd>Bild-ab</kbd> Tasten sollte die Änderung des Schiebereglerwerts um einen Betrag größer sein als die Schrittänderungen durch Auf- und Abwärtspfeile.

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

Die Position des Knopfes ist der Maximalwert minus der aktuelle Wert mal die Höhe eines Grades, minus die Hälfte der Knopfhöhe, um sie zu zentrieren. Der Rest der Stile ist statisch.

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

Damit dieses Beispiel funktioniert, müssen wir ein Skript schreiben, das alle Tastatur- und Zeigerereignisse verarbeitet, einschließlich Ereignis-Listener für `pointermove`, `pointerup`, `focus`, `blur` und `keydown`, und Stile für den Standardzustand bereitstellt, sowie wenn der Knopf und der Schieberegler den Fokus erhalten. Die Position des Knopfes, die `aria-valuenow` und `aria-valuetext` Werte und der innere Text des Elements mit der [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) "temperatureValue" müssen jedes Mal aktualisiert werden, wenn die Tasten <kbd>ArrowLeft</kbd>, <kbd>ArrowDown</kbd>, <kbd>ArrowRight</kbd>, <kbd>ArrowUp</kbd>, <kbd>Home</kbd>, <kbd>End</kbd> und optional <kbd>PageDown</kbd> und <kbd>PageUp</kbd> losgelassen werden und wenn der Benutzer den Knopf zieht oder anderweitig auf den Temperaturschieberegler klickt.

Mit semantischem HTML hätte dies wie folgt geschrieben werden können:

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

Durch die Verwendung von {{HTMLElement('input')}} erhalten wir ein bereits gestyltes Bereichseingabewidget mit Tastaturfokus, Fokus-Styling, Tastaturinteraktionen und einem `value`, der bei Benutzerinteraktion automatisch aktualisiert wird. Wir müssen dennoch JavaScript verwenden, um die `aria-valuetext` und den Wert des {{HTMLElement('output')}} Elements zu ändern.

Es gibt ein paar Möglichkeiten, eine Bereichseingabe vertikal zu machen. In diesem Beispiel haben wir [CSS-Transformationen](/de/docs/Web/CSS/transform) verwendet.

## Beste Praktiken

Wenn der Schieberegler den Ladefortschritt eines bestimmten Abschnitts einer Seite beschreibt, fügen Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut hinzu, um sich auf den Status des Schiebereglers zu beziehen, und setzen Sie das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) Attribut auf `true` für den Abschnitt, bis er vollständig geladen ist.

HTML's `<input type="range">` hat implizit die `rolle` `slider`. Verwenden Sie keine `aria-valuemax` oder `aria-valuemin` Attribute auf `<input type="range">` Elementen; verwenden Sie stattdessen `min` und `max`. Ansonsten sind alle globalen `aria-*` Attribute und alle anderen auf die slider Rolle anwendbaren `aria-*` Attribute nutzbar.

### Bevorzugen Sie HTML

Es wird empfohlen, ein natives {{HTMLElement("input")}} vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), anstelle der `slider` Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range),
- HTML {{HTMLElement('progress')}} Element
- HTML {{HTMLElement('meter')}} Element
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)
- W3C WAI-ARIA Praxisbeispiele:
  - [Horizontal Multi-Thumb Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/examples/slider-multithumb/)
  - [Color Viewer Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-color-viewer/)
  - [Rating Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-rating/)
  - [Media Seek Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-seek/)
  - [Vertical Temperature Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider/examples/slider-temperature/)
