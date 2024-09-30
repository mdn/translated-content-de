---
title: "ARIA: `spinbutton`-Rolle"
slug: Web/Accessibility/ARIA/Roles/spinbutton_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `spinbutton`-Rolle definiert einen Typ von Bereich, bei dem der Benutzer erwartet, einen Wert aus einer Reihe von diskreten Auswahlmöglichkeiten auszuwählen.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabewidget ist, dessen Wert auf eine festgelegte oder einen Bereich von diskreten Werten beschränkt ist. Die Rolle bietet auch Erhöhungs- und Verringerungsfunktionen. Zum Beispiel kann in einem Widget, das es Benutzern ermöglicht, einen Betrag für eine Wette in einem Spiel wie Texas Holdem auszuwählen, die `spinbutton`-Rolle es den Benutzern ermöglichen, eine Zahl zwischen dem minimalen und dem maximalen Einsatz in Schritten, die durch die aktuellen Spielregeln zugelassen sind, auszuwählen.

Der `spinbutton` repräsentiert den Bereich möglicher Werte. Der Wert der `spinbutton`-Eingabe stellt den aktuellen Wert dar.

Spinbuttons bestehen oft aus drei Komponenten, einschließlich eines Textfeldes, das den aktuellen Wert anzeigt, einer Erhöhungsschaltfläche und einer Verringerungsschaltfläche. Das Textfeld ist in der Regel die einzige fokussierbare Komponente, da die Erhöhungs- und Verringerungsfunktionen per Tastatur über Pfeiltasten zugänglich sind. Normalerweise ermöglicht das Textfeld den Benutzern auch, den Wert direkt zu bearbeiten.

Zusätzlich zur Verwendung des [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attributs, um die Fokussierung des `spinbutton` zu aktivieren, muss der Support für Tastatur und Zeigegeräte implementiert werden. Richtungstasten wie die Pfeiltasten müssen für Tastaturnutzer unterstützt werden. Eine Wertänderung bei Klicken auf die Erhöhungs- und Verringerungsschaltflächen muss für Zeigegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das `<input type="number">`-Element oder andere Eingabetypen für Datum und Uhrzeit zu verwenden, die auch implizit die `role="spinbutton"`-Semantik haben, anstelle der `spinbutton`-Rolle. Benutzeragenten bieten stilisierte Widgets für diese Eingabeelemente, die standardmäßig Erhöhungs-, Verringerungs- und native Bereichsbeschränkungsfunktionen bereitstellen. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### ARIA Bereichs-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene Bereichs-[Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles), darunter Fortschrittsbalken, Messgeräte, Schieberegler und Spinbuttons.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('progress')}}, ist ein schreibgeschützter Bereich. Sie zeigt den Fertigstellungsgrad einer Aufgabe an, die sich in eine Richtung bewegt, wie ein Ladefortschrittsbalken beim Hochladen einer Datei, der letztendlich 100 % erreicht, wenn er vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)-Rolle, ähnlich dem HTML-Element {{HTMLElement('meter')}}, ist ein schreibgeschütztes Messgerät. Sie zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie ein Batterieanzeiger eines Computers oder ein Benzinanzeiger eines Autos.

Die `slider`-Rolle, ähnlich dem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein lesbares und beschreibbares Eingabeintervall. Schieberegler ermöglichen es Benutzern, einen Wert zwischen den vordefinierten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schiebereglergriff entlang eines horizontalen oder vertikalen Schiebereglers bewegt, um einen Wert auszuwählen.

Während alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `spinbutton`-Rolle der einzige lesbare und beschreibbare Bereich: Es ist der einzige, dessen Wert sich durch Benutzerinteraktion ändert. Daher muss sie in der Lage sein, den Fokus zu erhalten. Zusätzlich müssen Tastaturinteraktion, Mausklicks und Touch-Interaktion unterstützt werden.

> [!WARNING]
> Um den Wert des Spinbuttons zu ändern, müssen Touch-basierte unterstützende Technologien auf Benutzer-Gesten zum Erhöhen und Verringern des Werts durch das Erzeugen von Tastenereignissen reagieren.
> Testen Sie Spinbutton-Widgets gründlich mit unterstützenden Technologien auf Geräten, bei denen Berührung die primäre Eingabemethode ist, bevor Sie die `spinbutton`-Rolle (und alle Bereichs-Widgets) verwenden.

#### Gemeinsame Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wenn es weggelassen oder keine Zahl ist, beträgt der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert `100`.

Der `aria-valuenow`-Attributwert muss zwischen den minimalen und maximalen Werten liegen, inklusive beider. Dieses Attribut ist für `spinbutton` und `meter` erforderlich und für `progressbar` optional.

Für `spinbutton`, sofern keine semantischen HTML-Elemente wie `<input type="number">` verwendet werden, muss der `aria-valuenow`-Wert programmgesteuert aktualisiert werden, wenn der Wert aktualisiert wird.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut wird hinzugefügt, wenn der `aria-valuenow`-numerische Wert nicht den beabsichtigten Wert des Spinbuttons widerspiegelt. Die optionalen minimalen, maximalen und aktuellen Werte sollten numerisch sein. Wenn die Zahlen, die diese Werte repräsentieren, nicht numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert enthalten sein, der den numerischen Wert definiert. Wenn z.B. ein Spinbutton für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von `XX-Small` bis `XX-Large` wechseln, während `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden von semantischen HTML-Elementen unterstützt. Obwohl es kein gleichwertiges HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ hinzufügen. Wenn `aria-valuetext` eine wichtige Funktion für ein Spinbutton ist, sollten Sie den Einsatz von {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen in Betracht ziehen.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML {{HTMLElement('input')}}-Element nicht zum Erstellen Ihres Spinbuttons verwendet wird, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut hinzu, damit das Spinbutton fokussierbar wird. Die `spinbutton`-Rolle ist benutzerinteraktiv und erfordert daher die Möglichkeit, den Fokus zu erhalten. Der Fokus sollte auf das Spinbutton-Eingabefeld und nicht auf die zugehörigen Schaltflächen gesetzt werden, die den Spinbutton-Wert erhöhen und verringern.

### Nachkommen beschränkt auf Schaltflächen oder Text

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeitsschnittstelle dargestellt werden, nur spezifischen Inhalt enthalten können. Die Kinder oder zugehörigen Elemente von `spinbutton` sind auf ein Textfeld und zwei Schaltflächen beschränkt. Alternativ kann die `spinbutton`-Rolle auf ein `text`-Eingabefeld angewendet werden, während benachbarte Schaltflächen zur Unterstützung der Erhöhungs- und Verringerungsfunktionen verwendet werden können.

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)

  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Spinbuttons angibt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen verständlicheren Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)

  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)

  - : Auf einen Dezimalwert gesetzt, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element beschriften, und bietet einen zugänglichen Namen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das Spinbutton-Element beschriftet. Dies bietet dem Element einen zugänglichen Namen, wenn kein sichtbares Label verfügbar ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

## Beispiele

Im folgenden Beispiel wurde eine `spinbutton`-Rolle definiert, die es Benutzern ermöglicht, einen Tag des Monats auszuwählen.

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

In diesem Beispiel haben wir einen negativen `tabindex` hinzugefügt, um die Schaltflächen aus der standardmäßigen Tab-Reihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht interaktiven {{HTMLElement('div')}} hinzugefügt, um den `spinbutton` selbst in die Tab-Reihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu verarbeiten, wenn das Spinbutton den Fokus hat und wenn ein Mausbenutzer auf die Schaltflächen klickt.

### Mit semantischem HTML

Dies hätte auch unter Verwendung von semantischem HTML geschrieben werden können, wodurch die Notwendigkeit für CSS oder JavaScript entfällt, ebenso wie die Bereitstellung von Funktionalitäten für überflüssige Erhöhungs- und Verringerungsschaltflächen. Der folgende Codeausschnitt zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und unter Verwendung von semantischem HTML.

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

In diesem Fall wäre das einzige benötigte JavaScript das Aktualisieren des `aria-valuetext`, wenn sich der Eingabewert ändert, was in diesem Fall wirklich eine optionale Funktion ist.

## Tastaturinteraktionen

| Taste(n)             | Aktion                                                                         |
| -------------------- | ------------------------------------------------------------------------------ |
| Pfeil rechts und hoch| Erhöhen Sie den ausgewählten Wert um einen Schritt                             |
| Pfeil links und unten| Verringern Sie den ausgewählten Wert um einen Schritt                          |
| Bild auf             | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag größer als oder gleich einem Schritt |
| Bild ab              | (Optional) Verringern Sie den Wert um einen festgelegten Betrag größer als oder gleich einem Schritt |
| Anfang               | Setzt das Spinbutton auf den Mindestwert                                        |
| Ende                 | Setzt das Spinbutton auf den Maximalwert                                        |

Für die optionalen <kbd>Bild auf</kbd>- und <kbd>Bild ab</kbd>-Tasten sollte die Änderung des Spinbutton-Werts vorzugsweise um einen Betrag größer als die Schrittänderungen erfolgen, die durch die Auf- und Ab-Pfeiltasten gemacht werden.

## Beste Praktiken

HTML's `<input type="number">` hat implizit die `role` des `spinbutton`. HTML's `<input type="date">` hat 3 verschachtelte Spin-Buttons, jeweils einen für Monat, Tag und Jahr. Wenn semantische HTML-Formularelemente für ihre vorgesehenen Zwecke verwendet werden, verwenden Sie nicht die `aria-valuemax`- oder `aria-valuemin`-Attribute; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*`-Attribute und alle anderen `aria-*`-Attribute für die `spinbutton`-Rolle anwendbar.

### Bevorzugen Sie semantisches HTML

Es wird empfohlen, das native {{HTMLElement("input")}}-Element vom Typ `number`, [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), anstelle der `spinbutton`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date)
- [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- Arbeitsbeispiele:
  - [Datumsauswahl Spinbutton Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Werkzeugleistenbeispiel: Schriftgrößenauswahl](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
