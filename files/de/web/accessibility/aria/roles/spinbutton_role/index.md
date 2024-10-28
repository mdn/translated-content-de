---
title: "ARIA: spinbutton-Rolle"
slug: Web/Accessibility/ARIA/Roles/spinbutton_role
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Die `spinbutton`-Rolle definiert eine Art von Bereich, bei dem der Benutzer erwartet wird, aus diskreten Auswahlmöglichkeiten einen Wert zu wählen.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabe-Widget ist, das seinen Wert auf eine Menge oder einen Bereich diskreter Werte beschränkt. Die Rolle bietet zudem Funktionen zum Erhöhen und Verringern. Zum Beispiel kann in einem Widget, das es Benutzern ermöglicht, im Texas Holdem-Spiel einen Einsatz zu wählen, die `spinbutton`-Rolle es den Benutzern erlauben, eine Zahl zwischen dem minimalen und maximalen Einsatz in zulässigen Inkrementen, gemäß den aktuellen Spielregeln, zu wählen.

Das Spin-Button repräsentiert den Bereich möglicher Werte. Der Wert des Eingabe-Widgets für das Spin-Button repräsentiert den aktuellen Wert.

Spin-Buttons haben oft drei Komponenten, einschließlich eines Textfeldes, das den aktuellen Wert anzeigt, einer Taste zum Erhöhen und einer Taste zum Verringern. Das Textfeld ist in der Regel die einzige fokussierbare Komponente, da die Funktionen zum Erhöhen und Verringern über die Pfeiltasten auf der Tastatur zugänglich sind. Typischerweise ermöglicht das Textfeld den Benutzern auch, den Wert direkt zu bearbeiten.

Zusätzlich zur Angabe des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs, um den Fokus auf das Spin-Button zu setzen, müssen Tastatur- und Zeigegeräte-Unterstützung implementiert werden. Richtungstasten wie die Pfeiltasten müssen für Tastaturbenutzer unterstützt werden. Das Ändern des Wertes bei Klick auf die Erhöhen- und Verringern-Tasten muss für Zeigegeräte unterstützt werden. Siehe [Tastatur-Interaktionen](#tastatur-interaktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)-Element oder andere Eingabetypen für Daten und Zeiten zu verwenden, die ebenfalls implizit die Semantik `role="spinbutton"` haben, anstelle der `spinbutton`-Rolle. Benutzeragenten bieten für diese Eingabeelemente stilisierte Widgets, die standardmäßige Funktionen zum Erhöhen, Verringern und zur nativen Bereichsbeschränkung bieten. Beim Verwenden von nicht-semantischen Elementen müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### ARIA-Bereich-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene Bereichs-[Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), darunter `progressbar`, `meter`, `slider` und `spinbutton`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)-Rolle, ähnlich dem {{HTMLElement('progress')}}-Element von HTML, ist ein schreibgeschützter Bereich. Sie zeigt den Fortschritt beim Abschluss einer Aufgabe an, der in eine einzige Richtung erfolgt, wie beispielsweise eine Ladefortschrittsanzeige beim Hochladen einer Datei, die bei vollständiger Ladung schließlich 100% erreicht.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)-Rolle, ähnlich dem {{HTMLElement('meter')}}-Element von HTML, ist ein schreibgeschützter Anzeiger. Sie gibt die Menge von etwas innerhalb eines bekannten Bereichs an, wie beispielsweise die Anzeige des Akkus eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich einem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein schreibgeschützter Eingabebereich. Slider erlauben es Benutzern, einen Wert zwischen vordefinierten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Slider-Thumb entlang eines horizontalen oder vertikalen Sliders bewegt, um einen Wert auszuwählen.

Während alle drei dieser Bereiche die gleichen ARIA-Zustände und -Eigenschaften haben, ist die `spinbutton`-Rolle der einzige schreibgeschützte Bereich: es ist der einzige, dessen Wert sich durch Benutzerinteraktion ändert. Daher muss es in der Lage sein, den Fokus zu erhalten. Zusätzlich muss die Tastaturinteraktion, Mausklicks und die Touch-Interaktion unterstützt werden.

> [!WARNING]
> Damit Touch-basierte unterstützende Technologien den Wert des Spin-Buttons ändern können, müssen sie auf Benutzer-Gesten zur Erhöhung und Verringerung des Wertes reagieren, indem sie Tastenereignisse synthetisieren.
> Testen Sie Spin-Button-Widgets gründlich mit Unterstützungstechnologien auf Geräten, bei denen die Touch-Eingabe die primäre Eingabemethode darstellt, bevor Sie die `spinbutton`-Rolle (und alle Bereichs-Widgets) verwenden.

#### Gemeinsame Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut legt den Minimalwert fest. Falls es weggelassen wird oder keine Zahl ist, lautet der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, lautet der Standardwert `100`.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attributs muss zwischen dem Minimal- und Maximalwert liegen, einschließlich beider Werte. Dieses Attribut ist für `spinbutton` und `meter` erforderlich und optional für `progressbar`.

Für `spinbutton`, außer bei Verwendung von semantischen HTML-Elementen wie [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), muss der Wert des `aria-valuenow`-Attributs auch programmatisch aktualisiert werden, wenn der Wert aktualisiert wird.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut wird verwendet, wenn der numerische Wert des `aria-valuenow`-Attributs nicht den gewünschten Wert des Spin-Buttons widerspiegelt. Die optionalen Minimal-, Maximal- und aktuellen Werte sollten numerisch sein. Wenn die von diesen Zahlen repräsentierten Werte nicht numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenwert einbezogen werden, der den numerischen Wert spezifiziert. Zum Beispiel, wenn ein Spin-Button für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von `XX-Small` bis `XX-Large` wechseln, wenn das `aria-valuenow` zunimmt.

Der Wert des `aria-valuetext`-Attributs muss aktualisiert werden, sobald der Wert oder das `aria-valuenow`-Attribut aktualisiert wird. ARIA-Attribute werden auf semantische HTML-Elemente angewendet. Auch wenn es kein entsprechendes HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` in jedem {{htmlelement('input')}}-Typ einbeziehen. Wenn `aria-valuetext` ein wichtiges Merkmal für einen Spin-Button ist, ziehen Sie in Betracht, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name aus dem zugeordneten {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht verwendet wird, um Ihr Spin-Button zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut ein, um das Spin-Button fokusierbar zu machen. Die `spinbutton`-Rolle ist interaktiv, und erfordert daher die Fähigkeit, den Fokus zu empfangen. Der Fokus sollte auf das Eingabefeld des Spin-Buttons und nicht auf die zugehörigen Tasten gesetzt werden, die den Spin-Button-Wert erhöhen und verringern.

### Begrenzte Nachfahren auf Tasten oder Text

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur spezifische Inhalte enthalten können. Die Kinder oder enthaltenen Elemente des `spinbutton` sind auf ein Textfeld und zwei Tasten beschränkt. Alternativ kann die `spinbutton`-Rolle auf ein `text`-Eingabefeld angewendet werden und Nachbarschaftstasten können verwendet werden, um die Erhöhungs- und Verringerungsfunktionen zu unterstützen.

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)

  - : Auf einen Dezimalwert gesetzt, der zwischen `aria-valuemin` und `aria-valuemax` liegt, gibt er den aktuellen Wert des Spin-Buttons an. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

  - : Unterstützungstechnologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spin-Button einen verständlicheren Wert zu bieten.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)

  - : Auf einen Dezimalwert gesetzt, der den minimalen Wert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)

  - : Auf einen Dezimalwert gesetzt, der den maximalen Wert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenwert oder identifiziert das Element (oder die Elemente), die das Spin-Button-Element benennen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Definiert einen Zeichenwert, der das Spin-Button-Element beschreibt. Dies stellt dem Element einen zugänglichen Namen zur Verfügung, wenn kein sichtbares Label vorhanden ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

## Beispiele

Im folgenden Beispiel wurde eine `spinbutton`-Rolle definiert, um Benutzern zu ermöglichen, einen Tag des Monats auszuwählen.

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

In diesem Beispiel haben wir einem negativen `tabindex` hinzugefügt, um die Tasten aus der Standard-Tabulatorreihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht interaktiven {{HTMLElement('div')}} hinzugefügt, um das Spin-Button selbst in die Tabulatorreihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu bearbeiten, wenn das Spin-Button den Fokus hat, und wenn ein Mausbenutzer auf die Tasten klickt.

### Mit semantischem HTML

Dies könnte auch unter Verwendung von semantischem HTML geschrieben werden, wodurch die Notwendigkeit für CSS oder JavaScript entfällt und auch die Notwendigkeit, zusätzliche Schaltflächen zur Erhöhung und Verringerung einzuschließen und deren Funktionalität bereitzustellen. Der folgende Code-Schnipsel zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und unter Verwendung von semantischem HTML.

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

In diesem Fall wäre das einzige erforderliche JavaScript die Aktualisierung des `aria-valuetext`, wenn sich der Eingabewert ändert, was in diesem Fall wirklich eine optionale Funktion ist.

## Tastatur-Interaktionen

| Taste(n)                  | Aktion                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------- |
| Rechts- und Aufwärtspfeil | Erhöht den ausgewählten Wert um einen Schritt                                                           |
| Links- und Abwärtspfeil   | Verringert den ausgewählten Wert um einen Schritt                                                       |
| Bild-auf                  | (Optional) Erhöht den Wert um einen festgelegten Betrag, der gleich oder größer als ein Schritt ist     |
| Bild-ab                   | (Optional) Verringert den Wert um einen festgelegten Betrag, der gleich oder größer als ein Schritt ist |
| Pos1                      | Setzt das Spin-Button auf den Minimalwert                                                               |
| Ende                      | Setzt das Spin-Button auf den Maximalwert                                                               |

Für die optionalen <kbd>Bild-auf</kbd> und <kbd>Bild-ab</kbd>-Tasten sollte die Änderung des Spin-Button-Werts vorzugsweise um einen Betrag größer als die Schrittänderungen, die durch Auf- und Abwärtspfeiltasten durchgeführt werden, erfolgen.

## Beste Praktiken

Das HTML-Element `<input type="number">` hat implizit die `role` von `spinbutton`. Das HTML-Element `<input type="date">` hat 3 verschachtelte Spin-Buttons, eines für Monat, Tag und Jahr. Bei der Verwendung von semantischen HTML-Formularelementen für deren beabsichtigte Zwecke, verwenden Sie nicht die Attribute `aria-valuemax` oder `aria-valuemin`; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*`-Attribute und alle anderen `aria-*`-Attribute auf die `spinbutton`-Rolle anwendbar.

### Bevorzugung von semantischem HTML

Es wird empfohlen, das native {{HTMLElement("input")}}-Element vom Typ `number`, [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), anstelle der `spinbutton`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date)
- [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- Weitere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- Funktionierende Beispiele:
  - [Datumsauswahl Spin-Button Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Symbolleistenbeispiel: Schriftgrößenauswahl](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
