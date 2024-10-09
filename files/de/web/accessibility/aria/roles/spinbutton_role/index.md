---
title: "ARIA: spinbutton Rolle"
slug: Web/Accessibility/ARIA/Roles/spinbutton_role
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Die Rolle `spinbutton` definiert eine Art von Bereich, die erwartet, dass der Benutzer einen Wert aus einer Reihe diskreter Auswahlmöglichkeiten auswählt.

## Beschreibung

Die Rolle `spinbutton` zeigt an, dass das Element ein Eingabewidget ist, das seinen Wert auf eine festgelegte oder begrenzte Anzahl diskreter Werte beschränkt. Die Rolle bietet zudem eine Erhöhungs- und Verringerungsfunktionalität. Zum Beispiel kann in einem Widget, das es Benutzern ermöglicht, einen Einsatzbetrag in einem Spiel von Texas Holdem auszuwählen, die `spinbutton`-Rolle es Benutzern erlauben, eine Zahl zwischen den minimalen und maximalen Einsätzen in den vom aktuellen Spiel erlaubten Schritten auszuwählen.

Die Spinbutton repräsentiert den Bereich der möglichen Werte. Der Wert der Spinbutton-Eingabe repräsentiert den aktuellen Wert.

Spinbuttons haben oft drei Komponenten, darunter ein Textfeld, das den aktuellen Wert anzeigt, einen Erhöhungsbutton und einen Verringerungsbutton. Das Textfeld ist normalerweise die einzige komponente, die fokussiert werden kann, da die Erhöhungs- und Verringerungsfunktionen über Pfeiltasten zugänglich sind. Typischerweise können Benutzer den Wert auch direkt im Textfeld bearbeiten.

Zusätzlich zur Einbindung des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs, um die Spinbutton fokussierbar zu machen, muss Unterstützung für Tastatur- und Zeigereingabegeräte implementiert werden. Richtungstasten wie die Pfeiltasten müssen für Tastaturbenutzer unterstützt werden. Das Ändern des Wertes, wenn Erhöhungs- oder Verringerungsbuttons geklickt werden, muss für Zeigereingabegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)-Element oder andere Eingabetypen für Daten und Uhrzeiten, die ebenfalls implizit die Rolle `spinbutton` haben, zu verwenden, anstatt die `spinbutton`-Rolle. Benutzeragenten stellen stilisierte Widgets für diese Eingabeelemente bereit, die standardmäßige Erhöhungs-, Verringerungs- und Bereichsbeschränkungsfunktionen bieten. Bei der Verwendung von Elementen ohne Semantik müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### ARIA-Widget-Optionen für Bereiche

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) für Bereiche an, darunter Fortschrittsleisten, Messwerte, Schieberegler und Spinbuttons.

Die Rolle [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role), ähnlich dem HTML-Element {{HTMLElement('progress')}}, ist ein schreibgeschützter Bereich. Sie zeigt den Fortschritt einer Aufgabe an, die in eine Richtung verläuft, wie zum Beispiel eine Ladeleiste für einen Datei-Upload, die 100% erreicht, wenn sie vollständig geladen ist.

Die Rolle [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), ähnlich dem HTML-Element {{HTMLElement('meter')}}, ist ein schreibgeschütztes Messgerät. Es zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie zum Beispiel eine Batterieanzeige eines Computers oder eine Tankanzeige eines Autos.

Die Rolle `slider`, ähnlich dem HTML-`input` von Typen `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein beschreibbares Eingabebereich. Schieberegler erlauben es Benutzern, einen Wert zwischen den vordefinierten minimalen und maximalen Werten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schieber entlang eines horizontalen oder vertikalen Schieberegler bewegt.

Obwohl alle drei dieser Bereiche dieselben ARIA-Zustände und Eigenschaften haben, ist die Rolle `spinbutton` der einzige beschreibbare Bereich: Es ist der einzige, dessen Wert sich über Benutzerinteraktion ändert. Daher muss er fokussierbar sein. Zusätzlich muss Tastaturinteraktionen, Mausklicks und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Um den Wert des Spinbuttons zu ändern, müssen touch-basierte unterstützende Technologien auf Benutzerbewegungen reagieren und die Erhöhung oder Verringerung des Wertes durch Synthese von Tastenereignissen ermöglichen.
> Testen Sie Spinbutton-Widgets vollständig mit unterstützenden Technologien auf Geräten, bei denen Touch der primäre Eingabemechanismus ist, bevor Sie die `spinbutton`-Rolle (und alle Widgets für Bereiche) verwenden.

#### Allgemeine Attribute

Das Attribut [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) legt den Minimalwert fest. Wenn es weggelassen wird oder keine Zahl ist, beträgt der Standardwert `0` (Null).

Das Attribut [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert `100`.

Der Wert des Attributs [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) muss zwischen den minimalen und maximalen Werten liegen, beide einschließlich. Dieses Attribut ist für `spinbutton` und `meter` erforderlich und für `progressbar` optional.

Für `spinbutton` muss, sofern keine semantischen HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) verwendet werden, wenn der Wert aktualisiert wird, auch der Wert von `aria-valuenow` programmatisch aktualisiert werden.

Das optionale Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) wird verwendet, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des Spinbuttons widerspiegelt. Die optionalen minimalen, maximalen und aktuellen Werte sollten numerisch sein. Wenn die Werte, die diese Zahlen repräsentieren, nicht numerisch sind, sollte das Attribut `aria-valuetext` mit einem Zeichenfolgenwert aufgenommen werden, der den numerischen Wert definiert. Zum Beispiel, wenn ein Spinbutton für T-Shirt-Größen verwendet wird, sollte das Attribut `aria-valuetext` sich von `XX-Small` bis `XX-Large` ändern, während der `aria-valuenow` erhöht wird.

Der Wert von `aria-valuetext` muss aktualisiert werden, wenn der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Obwohl es kein äquivalentes HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einfügen. Wenn `aria-valuetext` eine wichtige Funktion für einen Spinbutton ist, ziehen Sie in Betracht, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-Element {{HTMLElement('input')}} angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-Element {{HTMLElement('input')}} nicht verwendet wird, um Ihre Spinbutton zu erstellen, fügen Sie das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) ein, um die Spinbutton fokussierbar zu machen. Die `spinbutton`-Rolle ist benutzerinteraktiv und erfordert daher die Möglichkeit, fokussiert zu werden. Der Fokus sollte auf das Spinbutton-Eingabefeld und nicht auf die zugehörigen Buttons gelegt werden, die den Spinbutton-Wert erhöhen und verringern.

### Nachfahren beschränkt auf Buttons oder Text

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur spezifische Inhalte enthalten können. Die Kinder oder besessenen Elemente von `spinbutton` sind auf ein Textfeld und zwei Buttons beschränkt. Alternativ kann die `spinbutton`-Rolle auf ein Texteintrag angewendet werden und Schwesterbuttons können verwendet werden, um die Erhöhung und Verringerung zu unterstützen.

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)

  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Spinbuttons angibt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht korrekt sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen verständlicheren Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)

  - : Auf einen Dezimalwert gesetzt, der den Minimalwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)

  - : Auf einen Dezimalwert gesetzt, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element benennen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das Spinbutton-Element bezeichnet. Dies bietet dem Element einen zugänglichen Namen, wenn kein sichtbares Label verfügbar ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

## Beispiele

Im unten stehenden Beispiel wurde eine `spinbutton`-Rolle definiert, um Benutzern zu ermöglichen, einen Tag des Monats auszuwählen.

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

In diesem Beispiel haben wir einen negativen `tabindex` hinzugefügt, um die Buttons aus der Standard-Tabulatorreihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht interaktiven {{HTMLElement('div')}} hinzugefügt, um das Spinbutton selbst in die Tabulatorreihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu handhaben, wenn die Spinbutton den Fokus hat und wenn ein Mausbenutzer auf die Buttons klickt.

### Mit semantischem HTML

Dies könnte auch mit semantischem HTML geschrieben werden, wodurch die Notwendigkeit für jegliches CSS oder JavaScript entfällt und auch die Notwendigkeit entfällt, zusätzliche Erhöhungs- und Verringerungsbuttons einzuschließen und zu betreiben. Der Codeausschnitt unten zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und unter Verwendung von semantischem HTML.

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

In diesem Fall wäre das einzige benötigte JavaScript, um das `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert, was in diesem Fall wirklich eine optionale Funktion ist.

## Tastaturinteraktionen

| Taste(n)                     | Aktion                                                                                                    |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| Rechte und obere Pfeiltasten | Erhöhen Sie den ausgewählten Wert um einen Schritt                                                        |
| Linke und untere Pfeiltasten | Verringern Sie den ausgewählten Wert um einen Schritt                                                     |
| Bild auf                     | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist    |
| Bild ab                      | (Optional) Verringern Sie den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist |
| Home                         | Setzen Sie die Spinbutton auf den Minimalwert                                                             |
| Ende                         | Setzen Sie die Spinbutton auf den Maximalwert                                                             |

Für die optionalen Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd> sollte die Änderung des Spinbutton-Wertes vorzugsweise um einen Betrag erfolgen, der größer ist als die Schrittänderungen, die durch die Pfeiltasten gemacht werden.

## Beste Praktiken

Das HTML-Element `<input type="number">` hat implizit die Rolle `spinbutton`. Das HTML-Element `<input type="date">` hat 3 verschachtelte Spinbuttons, eins für Monat, Tag und Jahr. Wenn Sie semantische HTML-Formularelemente für ihre vorgesehenen Zwecke verwenden, verwenden Sie nicht die Attribute `aria-valuemax` oder `aria-valuemin`; verwenden Sie stattdessen `min` und `max`. Ansonsten sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute auf die `spinbutton`-Rolle anwendbar.

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
- Funktionsbeispiele:
  - [Datumsauswahl-Spinbutton-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Symbolleisten-Beispiel: Schriftgröße-Wähler](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
