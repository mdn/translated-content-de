---
title: "ARIA: spinbutton-Rolle"
short-title: spinbutton
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: f6e12d0cba939a2f203119f4514b56b5faff17e1
---

Die `spinbutton`-Rolle definiert einen Bereichstyp, der erwartet, dass der Benutzer einen Wert aus einer Auswahl diskreter Optionen auswählt.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabe-Widget ist, das seinen Wert auf eine festgelegte oder einen diskreten Wertebereich beschränkt. Die Rolle bietet auch eine Funktion zur Erhöhung und Verringerung. Beispielsweise kann in einem Widget, das es den Benutzern ermöglicht, einen Betrag für ein Texas Holdem-Spiel zu setzen, die `spinbutton`-Rolle es den Benutzern erlauben, eine Zahl zwischen dem minimalen und maximalen Einsatz in zulässigen Schritten zu wählen, wie es die aktuellen Spielregeln vorsehen.

Das Spinbutton repräsentiert den Bereich möglicher Werte. Der Wert der Spinbutton-Eingabe stellt den aktuellen Wert dar.

Spinbuttons haben oft drei Komponenten, darunter ein Textfeld, das den aktuellen Wert anzeigt, eine Erhöhungsschaltfläche und eine Verringerungsschaltfläche. Das Textfeld ist in der Regel die einzige fokussierbare Komponente, da die Erhöhungs- und Verringerungsfunktionen über Tastaturpfeile zugänglich sind. Normalerweise erlaubt das Textfeld den Benutzern auch, den Wert direkt zu bearbeiten.

Zusätzlich zur Einbeziehung des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs zur Aktivierung des Spinbutton-Fokus müssen Tastatur- und Zeigegeräteunterstützung implementiert werden. Richtungstasten wie die Pfeiltasten müssen für Tastaturbenutzer unterstützt werden. Die Änderung des Wertes bei Klicks auf Erhöhungs- und Verringerungsschaltflächen muss für Zeigegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)-Element oder andere Eingabetypen für Datum und Uhrzeit zu verwenden, die ebenfalls implizit die Bedeutung `role="spinbutton"` haben, anstatt die `spinbutton`-Rolle zu verwenden. Benutzeragenten bieten gestylte Widgets für diese Eingabeelemente, die standardmäßige Erhöhungs-, Verringerungs- und native Bereichsbeschränkungsfunktionalitäten bereitstellen. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### ARIA Bereichs-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles) für Bereiche, darunter `progressbar`, `meter`, `slider` und `spinbutton`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem {{HTMLElement('progress')}}-Element von HTML, ist ein schreibgeschützter Bereich. Sie zeigt den Abschlussanteil einer Aufgabe an, die in eine Richtung fortschreitet, wie beispielsweise die Ladefortschrittsleiste beim Hochladen einer Datei, die bei voller Ladung 100 % erreicht.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem {{HTMLElement('meter')}}-Element von HTML, ist ein schreibgeschütztes Messgerät. Sie zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie z. B. die Batterieanzeige eines Computers oder eine Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich dem `range`-`input`-Typ von HTML, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist ein les- und schreibbarer Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen den vordefinierten minimalen und maximalen Werten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Schiebegriff entlang eines horizontalen oder vertikalen Schiebereglers bewegt.

Während alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `spinbutton`-Rolle der einzige les- und schreibbare Bereich: Es ist der einzige, dessen Wert sich durch Benutzerinteraktion ändert. Daher muss er den Fokus erhalten können. Zusätzlich müssen Tastaturinteraktionen, Mausklicks und Berührungsinteraktionen unterstützt werden.

> [!WARNING]
> Um den Wert des Spinbuttons zu ändern, müssen assistive Technologien, die auf Berührungsinteraktionen basieren, auf Benutzerbewegungen zur Erhöhung und Verringerung des Wertes reagieren, indem sie Tastaturereignisse simulieren.
> Testen Sie Spinbutton-Widgets vollständig mit assistiven Technologien auf Geräten, auf denen Berührung der primäre Eingabemechanismus ist, bevor Sie die `spinbutton`-Rolle (und alle Bereichs-Widgets) verwenden.

### Gemeinsame Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut setzt den Mindestwert. Wenn es weggelassen wird oder keine Zahl ist, wird es standardmäßig auf `0` (null) gesetzt.

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Höchstwert. Wenn es fehlt oder keine Zahl ist, wird es standardmäßig auf `100` gesetzt.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen dem Mindest- und Höchstwert liegen, einschließlich beider. Dieses Attribut ist für `meter` erforderlich und optional für `progressbar`.

Für `spinbutton`, sofern keine semantischen HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) verwendet werden, muss der `aria-valuenow`-Wert bei einer Wertänderung programmatisch aktualisiert werden.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird verwendet, wenn der numerische `aria-valuenow`-Wert nicht den beabsichtigten Wert des Spinbuttons widerspiegelt. Die optionalen minimalen, maximalen und aktuellen Werte sollten numerisch sein. Wenn die Zahlen, die diese Werte darstellen, nicht numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert, der den numerischen Wert definiert, einbezogen werden. Beispielsweise sollte beim Einsatz eines Spinbuttons für T-Shirt-Größen das `aria-valuetext`-Attribut von `XX-Small` bis `XX-Large` wechseln, während `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Obwohl es kein entsprechendes HTML-Attribut für `<input>` gibt, kann `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einbezogen werden. Wenn `aria-valuetext` ein wichtiges Merkmal für ein Spinbutton ist, sollten Sie in Erwägung ziehen, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen zu verwenden.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name von dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie nicht das HTML-{{HTMLElement('input')}}-Element verwenden, um Ihr Spinbutton zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um den Spinbutton fokussierbar zu machen. Die `spinbutton`-Rolle ist benutzerinteraktiv und erfordert daher, den Fokus erhalten zu können. Der Fokus sollte auf die Spinbutton-Eingabe gelegt werden, nicht auf die zugehörigen Schaltflächen, die den Spinbutton-Wert erhöhen und verringern.

### Nachkommen beschränkt auf Tasten oder Text

Es gibt einige Typen von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur bestimmten Inhalt enthalten können. Die Kinder oder zugeordneten Elemente von `spinbutton` sind auf ein Textfeld und zwei Tasten beschränkt. Alternativ kann die `spinbutton`-Rolle auf eine `text`-Eingabe angewendet werden, und benachbarte Tasten können verwendet werden, um die Funktionen zur Erhöhung und Verringerung zu unterstützen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)
  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Spinbuttons anzeigt. Wenn nicht vorhanden, hat das Spinbutton-Element keinen aktuellen Wert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
  - : Assistive Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen verständlicheren Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
  - : Auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das Spinbutton-Element beschriftet. Dies gibt dem Element einen zugänglichen Namen, wenn kein sichtbares Label verfügbar ist, das den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitstellt.

### Tastaturinteraktionen

| Taste(n)                | Aktion                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------- |
| Rechte und obere Pfeile | Erhöht den ausgewählten Wert um einen Schritt                                                         |
| Linke und untere Pfeile | Verringert den ausgewählten Wert um einen Schritt                                                     |
| Bild auf                | (Optional) Erhöht den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist     |
| Bild ab                 | (Optional) Verringert den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist |
| Pos1                    | Setzt das Spinbutton auf den Mindestwert                                                              |
| Ende                    | Setzt das Spinbutton auf den Höchstwert                                                               |

Für die optionalen Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd> sollte die Änderung des Spinbutton-Werts vorzugsweise um einen Betrag größer als die Schrittänderungen von Pfeiltasten nach oben und unten erfolgen.

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

In diesem Beispiel haben wir einen negativen `tabindex` eingeschlossen, um die Schaltflächen aus der Standard-Tab-Reihenfolge zu entfernen. Wir haben auch `tabindex` hinzugefügt zu einem normalerweise nicht interaktiven {{HTMLElement('div')}}, um dem Spinbutton selbst zur Tab-Reihenfolge hinzuzufügen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu bearbeiten, wenn der Spinbutton im Fokus ist und wenn ein Mausbenutzer auf die Schaltflächen klickt.

### Mit semantischem HTML

Dies könnte auch mit semantischem HTML geschrieben werden, wodurch die Notwendigkeit für CSS oder JavaScript entfällt und die Notwendigkeit, zusätzliche Erhöhungs- und Verringerungstasten einzuschließen und Funktionalitäten bereitzustellen, entfällt. Der folgende Codeausschnitt zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und unter Verwendung von semantischem HTML.

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

In diesem Fall wäre das einzige benötigte JavaScript, um das `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert, was in diesem Fall wirklich ein optionales Merkmal ist.

## Beste Praktiken

HTML's `<input type="number">` hat implizit die `role` von `spinbutton`. HTML's `<input type="date">` hat 3 verschachtelte Spinbuttons, eines für Monat, Tag und Jahr. Wenn semantische HTML-Formularelemente für ihre beabsichtigten Zwecke verwendet werden, verwenden Sie nicht `aria-valuemax` oder `aria-valuemin`-Attribute; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute für die `spinbutton`-Rolle anwendbar.

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
- Arbeitsbeispiele:
  - [Datumswähler Spinbutton Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Toolbar Beispiel: Schriftgrößenwähler](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
