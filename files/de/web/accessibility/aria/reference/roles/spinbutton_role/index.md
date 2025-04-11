---
title: "ARIA: spinbutton-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die `spinbutton`-Rolle definiert eine Art von Bereich, bei dem erwartet wird, dass der Benutzer einen Wert aus einer Auswahl an diskreten Optionen auswählt.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabe-Widget ist, das seinen Wert auf eine Menge oder einen Bereich diskreter Werte beschränkt. Die Rolle bietet auch Funktionen zum Erhöhen und Verringern an. In einem Widget, das es Benutzern beispielsweise ermöglicht, einen Betrag für Wetten in einem Spiel von Texas Holdem auszuwählen, kann die `spinbutton`-Rolle den Benutzern erlauben, eine Zahl zwischen den Mindest- und Höchstbeträgen in vorgegebenen Schritten auszuwählen, wie es die aktuellen Spielregeln erlauben.

Das Spinbutton repräsentiert den Bereich der möglichen Werte. Der Wert der Spinbutton-Eingabe repräsentiert den aktuellen Wert.

Spinbuttons bestehen oft aus drei Komponenten, einschließlich eines Textfelds, das den aktuellen Wert anzeigt, sowie einem Erhöhungs- und einem Verringerungsknopf. Das Textfeld ist normalerweise die einzige fokussierbare Komponente, da die Erhöhungs- und Verringerungsfunktionen über Pfeiltasten zugänglich sind. Üblicherweise erlaubt das Textfeld Benutzern auch, den Wert direkt zu bearbeiten.

Zusätzlich zum Einfügen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs, um die Fokussierung des Spinbuttons zu ermöglichen, muss die Unterstützung für Tastatur- und Zeigereingabegeräte implementiert werden. Für Tastaturbenutzer müssen Richtungstasten wie die Pfeiltasten unterstützt werden. Eine Änderung des Wertes, wenn Erhöhungs- und Verringerungsknöpfe angeklickt werden, muss für Zeigereingabegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)-Element oder andere Eingabetypen für Datum und Uhrzeit zu verwenden, die ebenfalls implizit die `role="spinbutton"`-Semantik haben, anstatt der `spinbutton`-Rolle. Benutzeragents stellen stilisierte Widgets für diese Eingabeelemente bereit, die standardmäßige Erhöhungs-, Verringerungs- und native Bereichsbeschränkungsfunktionen bieten. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### ARIA-Bereichs-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene Bereichs-[Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), darunter `progressbar`, `meter`, `slider` und `spinbutton`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem HTML-{{HTMLElement('progress')}}-Element, ist ein schreibgeschützter Bereich. Sie zeigt den Abschlussgrad einer Aufgabe an, die in eine Richtung voranschreitet, wie z. B. die Ladefortschrittsanzeige eines Datei-Uploads, die bei vollständigem Laden schließlich 100% erreicht.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem HTML-{{HTMLElement('meter')}}-Element, ist ein schreibgeschütztes Messgerät. Sie zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie z. B. die Batteriestandsanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich dem HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist ein schreib-lesbarer Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen den vordefinierten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schieberegler-Daumen entlang eines horizontalen oder vertikalen Schiebereglers bewegt, um einen Wert auszuwählen.

Obwohl alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `spinbutton`-Rolle der einzige schreib-lesbare Bereich: Sie ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Als solche muss sie fokussierbar sein. Zusätzlich müssen Tastaturinteraktionen, Mausklicks und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Um den Spinbutton-Wert zu ändern, müssen Touch-basierte unterstützende Technologien auf Benutzer-Gesten zum Erhöhen und Verringern des Wertes durch das Erzeugen von Tastenereignissen reagieren.
> Testen Sie Spinbutton-Widgets vollständig mit unterstützenden Technologien auf Geräten, bei denen Touch das primäre Eingabemechanismus ist, bevor Sie die `spinbutton`-Rolle (und alle Bereichs-Widgets) verwenden.

### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Minimalwert fest. Wenn es weggelassen wird oder keine Zahl ist, ist der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, ist der Standardwert `100`.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen dem Minimal- und Maximalwert, einschließlich beider, liegen. Dieses Attribut ist für `spinbutton` und `meter` erforderlich und optional für `progressbar`.

Für `spinbutton`, wenn keine semantischen HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) verwendet werden, muss der `aria-valuenow`-Wert auch dann programmatisch aktualisiert werden, wenn der Wert aktualisiert wird.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut ist enthalten, wenn der numerische Wert von `aria-valuenow` den beabsichtigten Wert des Spinbuttons nicht widerspiegelt. Die optionalen Minimal-, Maximal- und aktuellen Werte sollten numerisch sein. Wenn die von diesen Zahlen dargestellten Werte nicht numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert enthalten sein, der den numerischen Wert definiert. Wenn beispielsweise ein Spinbutton für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von `XX-Small` bis `XX-Large` ändern, während `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden bei semantischen HTML-Elementen unterstützt. Während es kein entsprechendes HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jeden {{htmlelement('input')}}-Typ einfügen. Wenn `aria-valuetext` ein wichtiges Merkmal für ein Spinbutton ist, erwägen Sie die Verwendung von {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen stattdessen.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht verwendet wird, um Ihr Spinbutton zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um das Spinbutton fokussierbar zu machen. Die `spinbutton`-Rolle ist benutzerinteraktiv und erfordert daher, dass sie fokussierbar ist. Der Fokus sollte auf die Spinbutton-Eingabe gelegt werden und nicht auf die zugehörigen Knöpfe, die den Spinbutton-Wert erhöhen und verringern.

### Nachfahren auf Knöpfe oder Text eingeschränkt

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur spezifischen Inhalt enthalten können. Die Kinder oder zugehörigen Elemente von `spinbutton` sind auf ein Textfeld und zwei Knöpfe beschränkt. Alternativ kann die `spinbutton`-Rolle auf ein `text`-Feld angewendet werden und benachbarte Knöpfe können verwendet werden, um die Erhöhungs- und Verringerungsfunktionen zu unterstützen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)

  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert der Spinbutton angibt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen verständlicheren Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)

  - : Auf einen Dezimalwert gesetzt, der den Minimalwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)

  - : Auf einen Dezimalwert gesetzt, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element beschriften und einen zugänglichen Namen zur Verfügung stellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das Spinbutton-Element beschriftet. Dies bietet dem Element einen zugänglichen Namen, wenn kein sichtbares Label verfügbar ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

### Tastaturinteraktionen

| Taste(n)              | Aktion                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------- |
| Rechte und Auf-Pfeile | Erhöht den ausgewählten Wert um einen Schritt                                                |
| Linke und Ab-Pfeile   | Verringert den ausgewählten Wert um einen Schritt                                            |
| Bild hoch             | (Optional) Erhöht den Wert um einen festgelegten Betrag größer oder gleich einem Schritt     |
| Bild runter           | (Optional) Verringert den Wert um einen festgelegten Betrag größer oder gleich einem Schritt |
| Pos1                  | Setzt die Spinbutton auf den Minimalwert                                                     |
| Ende                  | Setzt die Spinbutton auf den Maximalwert                                                     |

Für die optionalen <kbd>Bild hoch</kbd>- und <kbd>Bild runter</kbd>-Tasten sollte die Änderung des Spinbutton-Wertes vorzugsweise um einen Betrag größer als die Schrittänderungen sein, die durch die Auf- und Ab-Pfeiltasten vorgenommen werden.

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

In diesem Beispiel haben wir einen negativen `tabindex` hinzugefügt, um die Knöpfe aus der standardmäßigen Tab-Reihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht-interaktiven {{HTMLElement('div')}} hinzugefügt, um das Spinbutton selbst in die Tab-Reihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu behandeln, wenn das Spinbutton den Fokus hat und ein Mausbenutzer auf die Knöpfe klickt.

### Mit semantischem HTML

Dies hätte auch mit semantischem HTML geschrieben werden können, wodurch die Notwendigkeit für jegliches CSS oder JavaScript entfällt und auch die Notwendigkeit, zusätzliche Erhöhungs- und Verringerungsknöpfe bereitzustellen und zu pflegen. Der Codeausschnitt unten zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und mit semantischem HTML.

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

## Beste Praktiken

HTML's `<input type="number">` hat implizit die `role` des `spinbutton`. HTML's `<input type="date">` hat 3 verschachtelte Spinbuttons, jeweils für Monat, Tag und Jahr. Wenn semantische HTML-Formularelemente für ihre beabsichtigten Zwecke verwendet werden, verwenden Sie keine `aria-valuemax` oder `aria-valuemin`-Attribute; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute anwendbar auf die `spinbutton`-Rolle.

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
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (falls fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- Funktionierende Beispiele:
  - [Datumsauswahl Spinbutton Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Werkzeugleiste Beispiel: Schriftgrößen-Auswahl](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
