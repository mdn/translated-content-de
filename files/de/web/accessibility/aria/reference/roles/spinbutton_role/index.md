---
title: "ARIA: Rolle `spinbutton`"
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: ec98716dfe71c78db3f82ee3b1b9e7f68997fa19
---

Die Rolle `spinbutton` definiert einen Typ von Bereich, der erwartet, dass der Benutzer einen Wert aus einer Reihe diskreter Optionen auswählt.

## Beschreibung

Die Rolle `spinbutton` zeigt an, dass das Element ein Eingabewidget ist, das seinen Wert auf einen Satz oder Bereich diskreter Werte beschränkt. Die Rolle beinhaltet außerdem eine Erhöhungs- und Verringerungsfunktionalität. Zum Beispiel kann in einem Widget, das es Benutzern ermöglicht, einen Einsatzbetrag in einem Spiel von Texas Holdem zu wählen, die Rolle `spinbutton` es Benutzern ermöglichen, eine Zahl zwischen den minimalen und maximalen Einsätzen in zulässigen Inkrementen gemäß den aktuellen Spielregeln auszuwählen.

Der `spinbutton` repräsentiert den Bereich der möglichen Werte. Der Wert des `spinbutton`-Eingabefeldes repräsentiert den aktuellen Wert.

`Spinbuttons` haben oft drei Komponenten, einschließlich eines Textfeldes, das den aktuellen Wert anzeigt, eines Erhöhungsbuttons und eines Verringerungsbuttons. Das Textfeld ist normalerweise die einzige fokussierbare Komponente, da die Erhöhungs- und Verringerungsfunktionen über Pfeiltasten auf der Tastatur zugänglich sind. Typischerweise erlaubt das Textfeld Benutzern auch, den Wert direkt zu bearbeiten.

Neben dem Einschließen des Attributs [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex), um die Fokussierbarkeit des `spinbutton` zu ermöglichen, muss Tastatur- und Zeigereingabegeräte-Unterstützung implementiert werden. Richtungstasten wie die Pfeiltasten müssen für Tastaturbenutzer unterstützt werden. Die Änderung des Wertes, wenn die Erhöhungs- und Verringerungsbuttons geklickt werden, muss für Zeigeeinrichtungen unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)-Element oder andere Eingabetypen für Daten und Zeiten zu verwenden, die ebenfalls implizit die semantische Rolle `spinbutton` haben, anstatt die Rolle `spinbutton`. Benutzeragenten bieten ein stilisiertes Widget für diese Eingabefelder, das eine Standard-Erhöhung, Verringerung und native Bereichsbegrenzungsfunktionalität bietet. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### ARIA-Bereichs-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene Reichweiten-[Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) einschließlich `progressbar`, `meter`, `slider` und `spinbutton`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('progress')}}, ist ein schreibgeschützter Bereich. Sie zeigt den Fortschritt einer Aufgabe in eine Richtung an, wie z.B. die Statusleiste eines Datei-Uploads, die schließlich 100 % erreicht, wenn die Datei vollständig hochgeladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('meter')}}, ist ein schreibgeschütztes Messgerät. Es zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie z.B. die Batterieanzeige eines Computers oder der Tankanzeige eines Autos.

Die Rolle `slider`, ähnlich dem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein schreibbarer Eingabebereich. Schieberegler erlauben Benutzern, einen Wert zwischen den vordefinierten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert, indem er den Schiebereglergriff entlang eines horizontalen oder vertikalen Schiebereglers bewegt, um einen Wert auszuwählen.

Während all diese Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die Rolle `spinbutton` der einzige schreibbare Bereich: es ist der einzige Bereich, dessen Wert durch Benutzerinteraktion verändert wird. Deshalb muss er in der Lage sein, den Fokus zu erhalten. Zusätzlich müssen Tastaturinteraktion, Mausklicks und Berührungsinteraktion unterstützt werden.

> [!WARNING]
> Um den Wert des `spinbutton` zu ändern, müssen touchbasierte unterstützende Technologien auf Benutzeraktionen für die Erhöhung und Verringerung des Wertes durch die Synthese von Tastenereignissen reagieren.
> Testen Sie vollumfassend `spinbutton`-Widgets mit unterstützenden Technologien auf Geräten, bei denen Berührung der primäre Eingabemechanismus ist, bevor Sie die Rolle `spinbutton` (und alle Bereiche) verwenden.

### Gemeinsame Attribute

Das Attribut [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) legt den Minimalwert fest. Wenn es weggelassen wird oder keine Zahl ist, wird es standardmäßig auf `0` (null) gesetzt.

Das Attribut [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, wird es standardmäßig auf `100` gesetzt.

Der [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributwert muss zwischen den Minimal- und Maximalwerten liegen, inklusive beider. Dieses Attribut ist erforderlich für `spinbutton` und `meter` und optional für `progressbar`.

Für `spinbutton`, sofern keine semantischen HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) verwendet werden, muss, wenn der Wert aktualisiert wird, der `aria-valuenow`-Wert auch programmgesteuert aktualisiert werden.

Das optionale Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) ist enthalten, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des `spinbutton` widerspiegelt. Die optionalen Minimal-, Maximal- und aktuellen Werte sollten numerisch sein. Wenn die von diesen Zahlen repräsentierten Werte nicht numerisch sind, sollte das Attribut `aria-valuetext` mit einem Zeichenfolgenwert enthalten sein, der den numerischen Wert definiert. Wenn beispielsweise ein `spinbutton` für T-Shirt-Größen verwendet wird, sollte das Attribut `aria-valuetext` von `XX-Small` bis `XX-Large` wechseln, während `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Während es kein entsprechendes HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einbeziehen. Wenn `aria-valuetext` eine wichtige Funktion für ein `spinbutton` ist, sollten Sie in Betracht ziehen, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden.

Ein zugänglicher Name ist **erforderlich**. Wenn die Rolle `spinbutton` auf ein HTML-Element {{HTMLElement('input')}} angewendet wird, kann der zugängliche Name von der zugehörigen {{HTMLElement('label')}} abgeleitet werden. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-Element {{HTMLElement('input')}} nicht verwendet wird, um Ihren `spinbutton` zu erstellen, fügen Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzu, um den `spinbutton` fokussierbar zu machen. Die Rolle `spinbutton` ist interaktiv und erfordert daher die Fähigkeit, den Fokus zu erhalten. Der Fokus sollte auf den `spinbutton`-Eingabefeld gesetzt werden und nicht auf die zugehörigen Buttons, die den `spinbutton`-Wert erhöhen und verringern.

### Abhängige beschränkt auf Buttons oder Text

Es gibt einige Typen von Benutzeroberflächenkomponenten, die bei der Darstellung in einer Plattformzugänglichkeits-API nur bestimmten Inhalt enthalten können. Die Kinder oder besessenen Elemente eines `spinbutton` sind auf ein Textfeld und zwei Buttons beschränkt. Alternativ kann die Rolle `spinbutton` auf einen `text`-Input angewendet werden, und es können Geschwisterbuttons verwendet werden, um die Erhöhungs- und Verringerungsfunktionen zu unterstützen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)

  - : Legen Sie einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` fest, der den aktuellen Wert des `spinbutton` angibt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem `spinbutton` einen verständlicheren Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)

  - : Legen Sie einen Dezimalwert fest, der den Minimalwert repräsentiert und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)

  - : Legen Sie einen Dezimalwert fest, der den Maximalwert repräsentiert und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das `spinbutton`-Element beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das `spinbutton`-Element beschriftet. Dies bietet dem Element einen zugänglichen Namen, wenn kein sichtbares Label verfügbar ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

### Tastaturinteraktionen

| Taste(n)                   | Aktion                                                                                                      |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Rechts- und Aufwärtspfeile | Erhöhen Sie den ausgewählten Wert um eine Stufe                                                             |
| Links- und Abwärtspfeile   | Verringern Sie den ausgewählten Wert um eine Stufe                                                          |
| Bild auf                   | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag, der größer als oder gleich einer Stufe ist    |
| Bild ab                    | (Optional) Verringern Sie den Wert um einen festgelegten Betrag, der größer als oder gleich einer Stufe ist |
| Anfang                     | Setzen Sie den `spinbutton` auf den Minimalwert                                                             |
| Ende                       | Setzen Sie den `spinbutton` auf den Maximalwert                                                             |

Für die optionalen Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd> sollte die Änderung des `spinbutton`-Wertes vorzugsweise durch einen Betrag größer als die Schrittänderungen vorgenommen werden, die durch die Auf- und Abwärtspfeiltasten durchgeführt werden.

## Beispiele

Im nachstehenden Beispiel wurde eine Rolle `spinbutton` definiert, die es Benutzern ermöglicht, einen Tag des Monats auszuwählen.

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

In diesem Beispiel haben wir ein negatives `tabindex` hinzugefügt, um die Buttons aus der Standard-Tabulatorreihenfolge zu entfernen. Wir haben auch `tabindex` auf einem normalerweise nicht-interaktiven {{HTMLElement('div')}} hinzugefügt, um den `spinbutton` selbst in die Tabulatorreihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu verarbeiten, wenn der `spinbutton` im Fokus ist, und wenn ein Mausklick auf die Buttons erfolgt.

### Mit semantischem HTML

Dies könnte auch mit semantischem HTML geschrieben werden, was die Notwendigkeit jeglichen CSS oder JavaScript entfernt und auch die Notwendigkeit zur Bereitstellung zusätzlicher Funktionen für steigende und sinkende Buttons entfällt. Der untenstehende Code-Schnipsel zeigt das vorherige Beispiel ohne die Rolle `spinbutton` und unter Verwendung von semantischem HTML.

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

In diesem Fall wären nur JavaScripts erforderlich, um das `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert, was in diesem Fall wirklich eine optionale Funktion ist.

## Beste Praktiken

HTMLs `<input type="number">` hat implizit die Rolle von `spinbutton`. HTMLs `<input type="date">` hat 3 verschachtelte Spin-Buttons, je einen für Monat, Tag und Jahr. Bei der Verwendung semantischer HTML-Formularelemente für ihre beabsichtigten Zwecke verwenden Sie nicht `aria-valuemax` oder `aria-valuemin` Attribute; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute auf die Rolle `spinbutton` anwendbar.

### Bevorzugen Sie semantisches HTML

Es wird empfohlen, das native {{HTMLElement("input")}}-Element des Typs `number`, [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), zu verwenden, anstatt die Rolle `spinbutton`.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date)
- [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- Arbeitende Beispiele:
  - [Datumswähler-Spin-Button Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Werkzeugleistenbeispiel: Schriftgrößenauswahl](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
