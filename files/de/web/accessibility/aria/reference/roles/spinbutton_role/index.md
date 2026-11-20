---
title: "ARIA: spinbutton-Rolle"
short-title: spinbutton
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die `spinbutton`-Rolle definiert eine Art von Wertebereich, bei der Benutzer einen Wert aus einzelnen Auswahlmöglichkeiten auswählen.

## Beschreibung

Die `spinbutton`-Rolle kennzeichnet ein Eingabe-Widget, dessen Wert auf eine Menge oder einen Bereich einzelner Werte beschränkt ist. Die Rolle umfasst außerdem Funktionen zum Erhöhen und Verringern des Werts. Beispielsweise kann die `spinbutton`-Rolle in einem Widget, mit dem Benutzer einen Einsatz für eine Partie Texas Hold’em festlegen, die Auswahl eines Werts zwischen dem Mindest- und dem Höchsteinsatz in Schritten ermöglichen, die nach den aktuellen Spielregeln zulässig sind.

Der Spinbutton repräsentiert den Bereich möglicher Werte. Der Wert der Spinbutton-Eingabe ist der aktuelle Wert.

Spinbuttons bestehen häufig aus drei Komponenten: einem Textfeld, das den aktuellen Wert anzeigt, einer Schaltfläche zum Erhöhen und einer Schaltfläche zum Verringern. Üblicherweise kann nur das Textfeld den Fokus erhalten, da die Funktionen zum Erhöhen und Verringern über die Pfeiltasten zugänglich sind. In der Regel können Benutzer den Wert auch direkt im Textfeld bearbeiten.

Damit der Spinbutton den Fokus erhalten kann, muss das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzugefügt werden. Außerdem muss die Bedienung per Tastatur und Zeigegerät implementiert werden. Für die Tastaturbedienung müssen Richtungstasten wie die Pfeiltasten unterstützt werden. Bei Zeigegeräten muss sich der Wert ändern, wenn auf die Schaltflächen zum Erhöhen oder Verringern geklickt wird. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) weiter unten.

> [!NOTE]
> Es wird empfohlen, das Element [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) oder andere Eingabetypen für Datum und Uhrzeit zu verwenden, die ebenfalls implizit die Semantik von `role="spinbutton"` besitzen, statt die `spinbutton`-Rolle zuzuweisen. User Agents stellen für diese Eingabeelemente gestaltete Widgets bereit, die standardmäßig Funktionen zum Erhöhen und Verringern sowie eine native Begrenzung des Wertebereichs bieten. Bei Verwendung nicht semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Optionen für ARIA-Widgets mit Wertebereich

ARIA stellt Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Wertebereiche bereit, darunter `progressbar`, `meter`, `slider` und `spinbutton`.

Die Rolle [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) stellt ähnlich wie das HTML-Element {{HTMLElement('progress')}} einen schreibgeschützten Wertebereich dar. Sie zeigt den Fortschritt einer Aufgabe an, der sich nur in eine Richtung bewegt, beispielsweise als Ladefortschrittsbalken für einen Datei-Upload, der bei vollständigem Abschluss 100 % erreicht.

Die Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) stellt ähnlich wie das HTML-Element {{HTMLElement('meter')}} eine schreibgeschützte Anzeige dar. Sie zeigt die Menge von etwas innerhalb eines bekannten Wertebereichs an, beispielsweise den Akkustand eines Computers oder die Tankanzeige eines Autos.

Die Rolle `slider` stellt ähnlich wie ein HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), einen veränderbaren Eingabewert innerhalb eines Wertebereichs dar. Mit einem Slider können Benutzer einen Wert zwischen einem vordefinierten Mindest- und Höchstwert auswählen. Dazu bewegen sie einen Schieberegler entlang einer horizontalen oder vertikalen Skala.

Die Rolle `spinbutton` ist ebenfalls veränderbar: Benutzer wählen durch Interaktion einen der angebotenen Einzelwerte aus. Wie Steuerelemente mit der Rolle `slider` müssen Widgets mit der Rolle `spinbutton` den Fokus erhalten können und die Bedienung per Tastatur, Zeigegerät und Touch-Eingabe unterstützen.

> [!WARNING]
> Um den Wert eines Spinbuttons zu ändern, müssen touchbasierte assistive Technologien auf Benutzer-Gesten zum Erhöhen und Verringern des Werts reagieren, indem sie Tastenereignisse erzeugen.
> Testen Sie Spinbutton-Widgets gründlich mit assistiven Technologien auf Geräten, bei denen Touch die primäre Eingabemethode ist, bevor Sie die Rolle `spinbutton` verwenden. Dies gilt auch für alle anderen Widgets mit Wertebereich.

### Häufig verwendete Attribute

Das Attribut [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) legt den Mindestwert fest. Wenn es fehlt oder keinen numerischen Wert enthält, wird standardmäßig `0` (null) verwendet.

Das Attribut [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert den Höchstwert. Wenn es fehlt oder keinen numerischen Wert enthält, wird standardmäßig `100` verwendet.

Der Wert des Attributs [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) muss zwischen dem Mindest- und dem Höchstwert liegen, wobei beide Grenzen eingeschlossen sind. Dieses Attribut ist für `meter` erforderlich und für `progressbar` optional.

Bei `spinbutton` muss der Wert von `aria-valuenow` programmgesteuert aktualisiert werden, wenn sich der Wert ändert – es sei denn, es werden semantische HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) verwendet.

Das optionale Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) wird verwendet, wenn der numerische Wert von `aria-valuenow` den beabsichtigten Wert des Spinbuttons nicht angemessen wiedergibt. Die optionalen Mindest-, Höchst- und aktuellen Werte sollten numerisch sein. Wenn die durch diese Zahlen dargestellten Werte nicht numerisch sind, sollte das Attribut `aria-valuetext` einen String enthalten, der die Bedeutung des numerischen Werts beschreibt. Wenn ein Spinbutton beispielsweise zur Auswahl von T-Shirt-Größen verwendet wird, sollte sich `aria-valuetext` bei steigendem `aria-valuenow` von `XX-Small` bis `XX-Large` ändern.

Der Wert von `aria-valuetext` muss aktualisiert werden, wenn sich der Wert oder `aria-valuenow` ändert. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Zwar gibt es für `<input>` kein entsprechendes HTML-Attribut, Sie können `aria-valuetext` jedoch bei jedem Typ von {{htmlelement('input')}} verwenden. Wenn `aria-valuetext` für einen Spinbutton besonders wichtig ist, sollten Sie stattdessen {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen verwenden.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle `spinbutton` einem HTML-Element {{HTMLElement('input')}} zugewiesen wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Verwenden Sie andernfalls [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn eine sichtbare Beschriftung vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn keine sichtbare Beschriftung vorhanden ist.

Wenn Sie Ihren Spinbutton nicht mit dem HTML-Element {{HTMLElement('input')}} erstellen, fügen Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) hinzu, damit der Spinbutton den Fokus erhalten kann. Die Rolle `spinbutton` ist interaktiv und muss daher den Fokus erhalten können. Der Fokus sollte auf der Spinbutton-Eingabe liegen und nicht auf den zugehörigen Schaltflächen zum Erhöhen und Verringern des Werts.

### Nachfahren auf Schaltflächen oder Text beschränkt

Einige Arten von Komponenten der Benutzeroberfläche können in einer Barrierefreiheits-API der Plattform nur bestimmte Inhalte enthalten. Die Kindelemente oder zugeordneten Elemente eines `spinbutton` sind auf ein Textfeld und zwei Schaltflächen beschränkt. Alternativ kann die Rolle `spinbutton` einer `text`-Eingabe zugewiesen werden, während danebenliegende Schaltflächen die Funktionen zum Erhöhen und Verringern bereitstellen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt und gibt den aktuellen Wert des Spinbuttons an. Fehlt das Attribut, hat das Spinbutton-Element keinen aktuellen Wert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien geben den Wert von `aria-valuenow` häufig als Zahl wieder. Wenn `aria-valuenow` den Wert nicht zutreffend wiedergeben kann, verwenden Sie `aria-valuetext`, um einen verständlicheren Wert für den Spinbutton bereitzustellen.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Wird auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Fehlt das Attribut, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Wird auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Fehlt das Attribut, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert einen String-Wert oder bezeichnet das Element beziehungsweise die Elemente, die das Spinbutton-Element beschriften und ihm einen zugänglichen Namen geben. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen String-Wert, der das Spinbutton-Element beschriftet. Dadurch erhält das Element einen zugänglichen Namen, wenn keine sichtbare Beschriftung vorhanden ist, die den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitstellen kann.

### Tastaturinteraktionen

| Taste(n)               | Aktion                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Pfeil nach rechts/oben | Ausgewählten Wert um einen Schritt erhöhen                                           |
| Pfeil nach links/unten | Ausgewählten Wert um einen Schritt verringern                                        |
| Page Up                | (Optional) Wert um einen festgelegten Betrag von mindestens einem Schritt erhöhen    |
| Page Down              | (Optional) Wert um einen festgelegten Betrag von mindestens einem Schritt verringern |
| Home                   | Spinbutton auf den Mindestwert setzen                                                |
| End                    | Spinbutton auf den Höchstwert setzen                                                 |

Bei den optionalen Tasten <kbd>Page Up</kbd> und <kbd>Page Down</kbd> sollte sich der Wert des Spinbuttons vorzugsweise um einen größeren Betrag ändern als bei den Pfeiltasten nach oben und unten.

## Bewährte Vorgehensweisen

HTMLs `<input type="number">` hat implizit die `role` `spinbutton`. HTMLs `<input type="date">` enthält drei verschachtelte Spinbuttons: jeweils einen für Monat, Tag und Jahr. Wenn Sie semantische HTML-Formularelemente für ihren vorgesehenen Zweck verwenden, verwenden Sie nicht die Attribute `aria-valuemax` oder `aria-valuemin`, sondern `min` und `max`. Ansonsten können alle globalen `aria-*`-Attribute und alle weiteren `aria-*`-Attribute mit der Rolle `spinbutton` verwendet werden.

### Semantisches HTML bevorzugen

Es wird empfohlen, statt der Rolle `spinbutton` das native {{HTMLElement("input")}}-Element vom Typ `number`, [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), zu verwenden.

## Beispiele

Im folgenden Beispiel wurde die Rolle `spinbutton` definiert, damit Benutzer einen Tag des Monats auswählen können.

```html
<p id="day">Enter the day of the month</p>
<button type="button" tabindex="-1" aria-label="previous day">˱</button>
<div
  role="spinbutton"
  tabindex="0"
  aria-valuenow="1"
  aria-valuetext="first"
  aria-valuemin="1"
  aria-valuemax="31"
  aria-labelledby="day">
  1
</div>
<button type="button" tabindex="-1" aria-label="next day">˲</button>
```

In diesem Beispiel haben wir den Schaltflächen einen negativen `tabindex` zugewiesen, um sie aus der standardmäßigen Tabulatorreihenfolge zu entfernen. Außerdem haben wir einem normalerweise nicht interaktiven {{HTMLElement('div')}} einen `tabindex` hinzugefügt, damit der `spinbutton` selbst in die Tabulatorreihenfolge aufgenommen wird. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu verarbeiten, wenn der Spinbutton den Fokus hat, und um Klicks auf die Schaltflächen zu verarbeiten.

### Mit semantischem HTML

Dies hätte auch mit semantischem HTML umgesetzt werden können. Dadurch wären weder CSS noch JavaScript erforderlich, und es müssten auch keine zusätzlichen Schaltflächen zum Erhöhen und Verringern samt ihrer Funktionalität bereitgestellt werden. Der folgende Codeausschnitt zeigt das vorherige Beispiel ohne die Rolle `spinbutton` und mit semantischem HTML.

```html
<label for="day">Enter the day of the month</label>
<input
  type="number"
  value="1"
  aria-valuetext="first"
  min="1"
  max="31"
  id="day" />
```

{{EmbedLiveSample("With_semantic_HTML", 50, 50)}}

In diesem Fall wäre JavaScript nur erforderlich, um `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert. Diese Funktion ist hier allerdings optional.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date)
- [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- Weitere Widgets mit Wertebereich:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn es den Fokus erhalten kann)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- Funktionsfähige Beispiele:
  - [Beispiel für Spinbuttons in einer Datumsauswahl](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Beispiel für eine Symbolleiste: Auswahl der Schriftgröße](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
