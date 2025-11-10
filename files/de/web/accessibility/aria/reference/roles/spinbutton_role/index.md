---
title: "ARIA: Spinbutton-Rolle"
short-title: spinbutton
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `spinbutton`-Rolle definiert eine Art Bereich, bei dem vom Benutzer erwartet wird, dass er einen Wert aus diskreten Auswahlmöglichkeiten auswählt.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabe-Widget ist, das seinen Wert auf einen Satz oder Bereich diskreter Werte beschränkt. Die Rolle bietet auch eine Erhöhungs- und Verringerungsfunktion. Zum Beispiel kann in einem Widget, das es Benutzern ermöglicht, einen Einsatzbetrag in einem Texas-Holdem-Spiel zu wählen, die `spinbutton`-Rolle Benutzern erlauben, eine Zahl zwischen dem minimalen und maximalen Einsatz in erlaubten Schritten gemäß den aktuellen Spielregeln zu wählen.

Der Spinbutton repräsentiert den Bereich möglicher Werte. Der Wert der Spinbutton-Eingabe repräsentiert den aktuellen Wert.

Spinbuttons haben oft drei Komponenten, einschließlich eines Textfeldes, das den aktuellen Wert anzeigt, einer Erhöhungsschaltfläche und einer Verringerungsschaltfläche. Das Textfeld ist normalerweise die einzige fokussierbare Komponente, da die Erhöhung und Verringerung der Werte über die Pfeiltasten zugänglich ist. Typischerweise erlaubt das Textfeld den Benutzern auch, den Wert direkt zu bearbeiten.

Zusätzlich zur Aufnahme des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs zur Aktivierung des Spinbutton-Fokus müssen Tastatur- und Zeigegeräte-Unterstützung implementiert werden. Richtungs-Tasten wie die Pfeiltasten müssen für Tastaturbenutzer unterstützt werden. Die Änderung des Wertes beim Klicken auf Erhöhungs- und Verringerungsschaltflächen muss für Zeigegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)-Element oder andere Eingabetypen für Datum und Uhrzeit zu verwenden, die implizit die `role="spinbutton"`-Semantik haben, anstatt der `spinbutton`-Rolle. Benutzeragenten bieten stilisierte Widgets für diese Eingabe-Elemente, die standardmäßige Erhöhungs-, Verringerungs- und native Bereichsbeschränkungsfunktionen bereitstellen. Bei der Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### ARIA-Bereichs-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), darunter `progressbar`, `meter`, `slider` und `spinbutton`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich dem {{HTMLElement('progress')}}-Element in HTML, ist ein schreibgeschützter Bereich. Es zeigt den Abgeschlossenheitsgrad einer Aufgabe an, die in eine Richtung fortschreitet, wie ein Ladebalken beim Hochladen einer Datei, der letztendlich 100 % erreicht, wenn er vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich dem {{HTMLElement('meter')}}-Element in HTML, ist ein schreibgeschützter Wertmesser. Sie zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie zum Beispiel die Batterieanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich einem `input` vom Typ `range` in HTML, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist ein beschreibbarer Eingabebereich. Slider ermöglichen es Benutzern, einen Wert zwischen den vordefinierten minimalen und maximalen Werten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Schiebereglergriff entlang eines horizontalen oder vertikalen Schiebereglers bewegt.

Während alle drei dieser Bereiche dieselben ARIA-Zustände und Eigenschaften haben, ist die `spinbutton`-Rolle der einzige beschreibbare Bereich: Es ist der einzige, dessen Wert sich durch Benutzerinteraktion ändert. Daher muss er in der Lage sein, den Fokus zu erhalten. Zusätzlich müssen Tastaturinteraktionen, Mausklicks und Berührungsinteraktionen unterstützt werden.

> [!WARNING]
> Um den Spinbutton-Wert zu ändern, müssen technologiegestützte Benutzeroberflächen auf Gesten reagieren, die Benutzer für die Erhöhung und Verringerung des Wertes ausführen, indem sie Tasteneingaben synthetisieren.
> Testen Sie Spinbutton-Widgets gründlich mit unterstützenden Technologien auf Geräten, bei denen das Berühren der primäre Eingabemechanismus ist, bevor Sie die `spinbutton`-Rolle (und alle Bereichswidgets) verwenden.

### Gemeinsame Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wenn es weggelassen wird oder keine Zahl ist, ist der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Höchstwert. Wenn es fehlt oder keine Zahl ist, beträgt der Standardwert `100`.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen den Mindest- und Höchstwerten liegen, beide einschließlich. Dieses Attribut ist erforderlich für `spinbutton` und `meter` und optional für `progressbar`.

Bei `spinbutton`, es sei denn, es werden semantische HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) verwendet, muss, wenn der Wert aktualisiert wird, der `aria-valuenow`-Wert ebenfalls programmgesteuert aktualisiert werden.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird hinzugefügt, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des `spinbutton` widerspiegelt. Die optionalen Minimal-, Maximal- und aktuellen Werte sollten numerisch sein. Wenn die durch diese Zahlen repräsentierten Werte nicht numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert angegeben werden, der den numerischen Wert definiert. Beispielsweise, wenn ein Spinbutton für T-Shirt-Größen verwendet wird, sollte der `aria-valuetext`-Attributswert von `XX-Small` bis `XX-Large` wechseln, während `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, sobald der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Auch wenn es kein äquivalentes HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jeden {{htmlelement('input')}}-Typ anwenden. Wenn `aria-valuetext` eine wichtige Funktion für einen Spinbutton ist, erwägen Sie die Verwendung von {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML {{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name vom zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn ein sichtbares Label nicht vorhanden ist.

Wenn der HTML-{{HTMLElement('input')}} nicht zur Erstellung des Spinbuttons verwendet wird, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um den Spinbutton fokussierbar zu machen. Die `spinbutton`-Rolle ist interaktiv und erfordert somit die Möglichkeit, den Fokus zu erhalten. Der Fokus sollte auf das Spinbutton-Eingabefeld und nicht auf die zugehörigen Schaltflächen gelegt werden, die den Spinbutton-Wert erhöhen und verringern.

### Nachfolger auf Schaltflächen oder Text beschränkt

Es gibt einige Arten von Benutzerschnittstellenkomponenten, die, wenn sie in einer Plattform-Barrierefreiheits-API dargestellt werden, nur bestimmten Inhalt enthalten können. Die Kinder oder in Besitz befindlichen Elemente von `spinbutton` sind auf ein Textfeld und zwei Schaltflächen beschränkt. Alternativ kann die `spinbutton`-Rolle auf eine `text`-Eingabe angewendet und Nachbarschaltflächen verwendet werden, um die Erhöhungs- und Verringerungsfunktionen zu unterstützen.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)

  - : Eigenschaft, die auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt wird, der den aktuellen Wert des Spinbuttons angibt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

  - : Unterstützte Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen besser verständlichen Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)

  - : Diese Eigenschaft ist auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)

  - : Diese Eigenschaft ist auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das Spinbutton-Element beschriftet. Dies stellt einen zugänglichen Namen für das Element bereit, wenn kein sichtbares Label vorhanden ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

### Tastaturinteraktionen

| Taste(n)        | Aktion                                                                                                    |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| rechts und oben | Erhöhen Sie den ausgewählten Wert um einen Schritt                                                        |
| links und unten | Verringern Sie den ausgewählten Wert um einen Schritt                                                     |
| Bild auf        | (Optional) Erhöht den Wert um einen festgelegten Betrag, der größer als oder gleich einem Schritt ist     |
| Bild ab         | (Optional) Verringert den Wert um einen festgelegten Betrag, der größer als oder gleich einem Schritt ist |
| Pos1            | Setzen Sie den Spinbutton auf den Mindestwert                                                             |
| Ende            | Setzen Sie den Spinbutton auf den Höchstwert                                                              |

Für die optionalen Tasten <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd> sollte die Änderung des Spinbutton-Wertes vorzugsweise um einen Betrag größer als die Schritte der Pfeiltasten erfolgen.

## Beispiele

Im folgenden Beispiel wurde eine `spinbutton`-Rolle definiert, um Benutzern die Auswahl eines Tages im Monat zu ermöglichen.

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

In diesem Beispiel haben wir einen negativen `tabindex` hinzugefügt, um die Schaltflächen aus der Standardtab-Reihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht interaktiven {{HTMLElement('div')}} hinzugefügt, um den `spinbutton` selbst in die Tab-Reihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu handhaben, wenn der Spinbutton den Fokus hat und wenn ein Mausbenutzer auf die Schaltflächen klickt.

### Mit semantischem HTML

Dies könnte auch mit semantischem HTML geschrieben werden, was die Notwendigkeit jeglichen CSS oder JavaScript beseitigt und auch die Notwendigkeit beseitigt, zusätzliche Erhöhungs- und Verringerungsschaltflächen einzuschließen und Funktionen bereitzustellen. Der folgende Codeausschnitt zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und mit semantischem HTML.

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

In diesem Fall würde der einzige benötigte JavaScript-Code darin bestehen, `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert, was in diesem Fall wirklich ein optionales Feature ist.

## Beste Praktiken

HTML's `<input type="number">` hat implizit die `role` von `spinbutton`. HTML's `<input type="date">` hat 3 verschachtelte Spinbuttons, eines für Monat, Tag und Jahr. Bei der Verwendung von semantischen HTML-Formular-Elementen für ihre vorgesehenen Zwecke verwenden Sie nicht die Attribute `aria-valuemax` oder `aria-valuemin`; verwenden Sie `min` und `max` stattdessen. Andernfalls sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute auf die `spinbutton`-Rolle anwendbar.

### Bevorzugen Sie semantisches HTML

Es wird empfohlen, das native {{HTMLElement("input")}}-Element des Typs `number`, [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), anstatt der `spinbutton`-Rolle zu verwenden.

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
  - [Datumsauswahl Spin-Button Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Werkzeugleiste Beispiel: Schriftgrößenwähler](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
