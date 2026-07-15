---
title: "ARIA: Rolle spinbutton"
short-title: spinbutton
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: e73d98a3d66c8c6c7dd60780f58136be04d9bfdf
---

Die `spinbutton`-Rolle definiert einen Typ von Bereich, bei dem der Benutzer erwartet, einen Wert aus diskreten Optionen auszuwählen.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabewidget ist, das seinen Wert auf eine Menge oder einen Bereich diskreter Werte beschränkt. Die Rolle bietet auch eine Inkrement- und Dekrement-Funktionalität. Zum Beispiel kann in einem Widget, das es Benutzern ermöglicht, einen Einsatz in einem Texas Holdem-Spiel zu wählen, die `spinbutton`-Rolle es den Benutzern ermöglichen, eine Zahl zwischen den minimalen und maximalen Einsätzen in Schritten auszuwählen, wie es durch die aktuellen Spielregeln erlaubt ist.

Der Spinbutton repräsentiert den Bereich der möglichen Werte. Der Wert der Spinbutton-Eingabe repräsentiert den aktuellen Wert.

Spinbuttons haben oft drei Komponenten, darunter ein Textfeld, das den aktuellen Wert anzeigt, eine Inkrementtaste und eine Dekrementtaste. Das Textfeld ist in der Regel die einzige fokussierbare Komponente, da die Inkrement- und Dekrementfunktionen über die Pfeiltasten zugänglich sind. Typischerweise erlaubt das Textfeld auch den Benutzern, den Wert direkt zu bearbeiten.

Zusätzlich zum Einschluss des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs, um die Spinbutton-Fokussierung zu ermöglichen, muss die Unterstützung für Tastatur- und Zeigereingabegeräte implementiert werden. Richtungstasten wie die Pfeiltasten müssen für Tastaturnutzer unterstützt werden. Das Ändern des Wertes beim Klicken auf Inkrement- und Dekrementtasten muss für Zeigegeräte unterstützt werden. Siehe unten [Tastaturinteraktionen](#tastaturinteraktionen).

> [!NOTE]
> Es wird empfohlen, ein [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)-Element oder andere Eingabetypen für Datum und Zeit zu verwenden, die auch implizit die `role="spinbutton"`-Semantik haben, anstatt die `spinbutton`-Rolle. Benutzeragenten bieten stilisierte Widgets für diese Eingabeelemente, die Standardfunktionen zum Inkrementieren, Dekrementieren und zur nativen Bereichsbeschränkung bieten. Bei der Verwendung von nicht-semantischen Elementen müssen alle Merkmale des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### Möglichkeiten von ARIA-Bereichs-Widgets

ARIA bietet Entwicklern sechs verschiedene Bereichs-[Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), einschließlich `progressbar`, `meter`, `slider` und `spinbutton`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem {{HTMLElement('progress')}}-Element von HTML, ist ein schreibgeschützter Bereich. Sie zeigt den Fortschritt bei der Durchführung einer Aufgabe in eine Richtung an, wie zum Beispiel eine Fortschrittsleiste für den Ladevorgang eines Datei-Uploads, der bei 100 % endet, wenn der Vorgang abgeschlossen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem {{HTMLElement('meter')}}-Element von HTML, ist eine schreibgeschützte Anzeige. Sie zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie zum Beispiel die Batterieanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich einem HTML `input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist ein beschreibbares Eingabefeld mit Bereich. Slider ermöglichen es Benutzern, einen Wert zwischen den vordefinierten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schieberegler horizontal oder vertikal bewegt, um einen Wert zu wählen.

Die `spinbutton`-Rolle ist ebenfalls beschreibbar: Der Bereich diskreter Werte wird durch die Interaktion des Benutzers ausgewählt. Wie bei `slider`-Steuerelementen, müssen `spinbutton`-Widgets in der Lage sein, den Fokus zu erhalten und Tastatur-, Zeiger- und Berührungsinteraktionen zu unterstützen.

> [!WARNING]
> Um den Spinbutton-Wert zu ändern, müssen auf Berührung basierende Assistive Technologien auf Benutzerbewegungen zum Erhöhen und Verringern des Werts reagieren, indem sie Tastenereignisse synthetisieren.
> Testen Sie Spinbutton-Widgets vollständig mit Assistive Technologien auf Geräten, bei denen Berührung das primäre Eingabemechanismus ist, bevor Sie die `spinbutton`-Rolle (und alle Bereichs-Widgets) verwenden.

### Gemeinsame Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wenn es weggelassen wird oder keine Zahl ist, ist der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Höchstwert. Wenn es fehlt oder keine Zahl ist, ist der Standardwert `100`.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen den minimalen und maximalen Werten liegen, beide inklusive. Dieses Attribut ist für `meter` erforderlich und für `progressbar` optional.

Für `spinbutton`, es sei denn, es werden semantische HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) verwendet, muss der Wert aktualisiert werden, und der `aria-valuenow`-Wert muss ebenfalls programmgesteuert aktualisiert werden.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird verwendet, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des Spinbuttons widerspiegelt. Die optionalen minimalen, maximalen und aktuellen Werte sollten numerisch sein. Wenn die von diesen Zahlen dargestellten Werte nicht numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert enthalten werden, der den numerischen Wert definiert. Zum Beispiel, wenn ein Spinbutton für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von `XX-Small` bis `XX-Large` wechseln, während `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn sich der Wert oder `aria-valuenow` ändert. ARIA-Attribute werden von semantischen HTML-Elementen unterstützt. Während es kein entsprechendes HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` in jedem {{htmlelement('input')}}-Typ verwenden. Wenn `aria-valuetext` ein wichtiges Merkmal für einen Spinbutton ist, sollten Sie in Betracht ziehen, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name aus dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie nicht das {{HTMLElement('input')}}-Element von HTML verwenden, um Ihren Spinbutton zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um den Spinbutton fokussierbar zu machen. Die `spinbutton`-Rolle ist benutzerinteraktiv und erfordert daher die Möglichkeit, den Fokus zu erhalten. Der Fokus sollte auf die Spinbutton-Eingabe gelegt werden und nicht auf die zugehörigen Tasten, die den Spinbutton-Wert erhöhen und verringern.

### Nachfahren beschränkt auf Tasten oder Text

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Accessibility-API dargestellt werden, nur bestimmten Inhalt enthalten können. Die untergeordneten oder eigentümerischen Elemente von `spinbutton` sind auf ein Textfeld und zwei Tasten beschränkt. Alternativ kann die `spinbutton`-Rolle auf eine `text`-Eingabe angewendet werden und benachbarte Tasten können verwendet werden, um die Inkrement- und Dekrement-Funktionen zu unterstützen.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Setzt einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax`, der den aktuellen Wert des Spinbuttons anzeigt. Wenn nicht vorhanden, hat das Spinbutton-Element keinen aktuellen Wert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien stellen oft den Wert von `aria-valuenow` als Zahl dar. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen verständlicheren Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Setzt einen Dezimalwert, der den Minimalwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Setzt einen Dezimalwert, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das Spinbutton-Element beschriftet. Dies bietet dem Element einen zugänglichen Namen, wenn kein sichtbares Label verfügbar ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

### Tastaturinteraktionen

| Taste(n)              | Aktion                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------- |
| Pfeil rechts und oben | Erhöht den ausgewählten Wert um einen Schritt                                                         |
| Pfeil links und unten | Verringert den ausgewählten Wert um einen Schritt                                                     |
| Bild nach oben        | (Optional) Erhöht den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist     |
| Bild nach unten       | (Optional) Verringert den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist |
| Pos1                  | Setzt den Spinbutton auf den Mindestwert                                                              |
| Ende                  | Setzt den Spinbutton auf den Maximalwert                                                              |

Für die optionalen <kbd>Bild nach oben</kbd> und <kbd>Bild nach unten</kbd> Tasten sollte die Änderung des Spinbutton-Werts vorzugsweise um einen Betrag größer als die Schrittänderungen durch die Pfeil-aufwärts- und Pfeil-abwärts-Tasten sein.

## Beispiele

Im untenstehenden Beispiel wurde eine `spinbutton`-Rolle definiert, um Benutzern zu ermöglichen, einen Tag des Monats auszuwählen.

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

In diesem Beispiel haben wir einen negativen `tabindex` hinzugefügt, um die Tasten aus der Standard-Tab-Reihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht interaktiven {{HTMLElement('div')}} hinzugefügt, um das Spinbutton selbst in die Tab-Reihenfolge einzufügen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu verarbeiten, wenn der Spinbutton fokussiert ist und wenn ein Mausbenutzer auf die Tasten klickt.

### Mit semantischem HTML

Dies könnte auch mit semantischem HTML geschrieben werden, wodurch die Notwendigkeit für CSS oder JavaScript entfällt und auch die Notwendigkeit entfällt, zusätzliche Tasten für das Inkrementieren und Dekrementieren bereitzustellen und zu funktionalisieren. Der untenstehende Code-Schnipsel zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und unter Verwendung von semantischem HTML.

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

{{EmbedLiveSample("Mit_semantischem_HTML", 50, 50)}}

In diesem Fall wäre das einzige erforderliche JavaScript, um das `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert, was in diesem Fall wirklich eine optionale Funktion ist.

## Beste Praktiken

HTML's `<input type="number">` hat implizit die `role` von `spinbutton`. HTML's `<input type="date">` hat 3 verschachtelte Spinbuttons, eines für Monat, Tag und Jahr. Wenn Sie semantische HTML-Formularelemente für ihre beabsichtigten Zwecke verwenden, verwenden Sie nicht `aria-valuemax` oder `aria-valuemin` Attribute; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*` Attribute und andere `aria-*` Attribute auf die `spinbutton` Rolle anwendbar.

### Bevorzugen Sie semantisches HTML

Es wird empfohlen, das native {{HTMLElement("input")}}-Element vom Typ `number`, [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), anstelle der `spinbutton`-Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date)
- [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- Funktionierende Beispiele:
  - [Beispiel für Datumswähler-Spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Beispiel für Werkzeugleiste: Schriftgröße-Picker](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
