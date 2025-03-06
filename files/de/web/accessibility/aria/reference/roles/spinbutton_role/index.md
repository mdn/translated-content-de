---
title: "ARIA: spinbutton-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `spinbutton`-Rolle definiert einen Typ von Bereich, der erwartet, dass der Benutzer einen Wert aus einer Reihe diskreter Auswahlmöglichkeiten auswählt.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabewidget ist, das seinen Wert auf eine Reihe diskreter Werte beschränkt. Die Rolle beinhaltet auch eine Funktion zum Erhöhen und Verringern. Zum Beispiel kann in einem Widget, das Benutzern ermöglicht, einen Einsatzbetrag in einem Texas Holdem-Spiel auszuwählen, die `spinbutton`-Rolle es den Benutzern erlauben, eine Zahl zwischen den minimalen und maximalen Einsätzen in festgelegten Schritten auszuwählen, wie es die aktuellen Spielregeln erlauben.

Das Spinbutton repräsentiert den Bereich möglicher Werte. Der Wert der Spinbutton-Eingabe repräsentiert den aktuellen Wert.

Spinbuttons bestehen oft aus drei Komponenten, darunter ein Textfeld, das den aktuellen Wert anzeigt, eine Erhöhungstaste und eine Verringerungstaste. Das Textfeld ist normalerweise die einzige fokussierbare Komponente, da die Erhöhungs- und Verringerungsfunktionen über Pfeiltasten zugänglich sind. Typischerweise erlaubt das Textfeld auch, den Wert direkt zu bearbeiten.

Zusätzlich zur Einbeziehung des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs zur Aktivierung des Spinbutton-Fokus müssen Tastatur- und Zeigergerätesupport implementiert werden. Richtungstasten wie die Pfeiltasten müssen für Tastaturbenutzer unterstützt werden. Das Ändern des Wertes beim Klicken auf die Erhöhungs- und Verringerungstasten muss für Zeigegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)-Element oder andere Eingabetypen für Datum und Uhrzeit zu verwenden, die ebenfalls implizit die `role="spinbutton"`-Semantik haben, anstatt die `spinbutton`-Rolle. Benutzeragenten bieten stilisierte Widgets für diese Eingabeelemente an, die standardmäßige Erhöhungs-, Verringerungs- und native Bereichsbeschränkungsfunktionen bereitstellen. Beim Verwenden von nicht-semantischen Elementen müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS rekonstruiert werden.

### ARIA-Bereichs-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene Bereichs-[Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), darunter `progressbar`, `meter`, `slider` und `spinbutton`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)-Rolle, ähnlich wie das {{HTMLElement('progress')}}-Element in HTML, ist ein schreibgeschützter Bereich. Es zeigt den Fortschritt des Abschlusses einer Aufgabe, der in eine Richtung verläuft, wie eine Ladefortschrittsleiste für einen Dateiupload, die schließlich 100% erreicht, wenn sie vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)-Rolle, ähnlich wie das {{HTMLElement('meter')}}-Element in HTML, ist eine schreibgeschützte Skala. Sie zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie ein Batterieindikator eines Computers oder eine Benzinanzeige eines Autos.

Die `slider`-Rolle, ähnlich wie ein HTML-`input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein schreibbarer Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen den vordefinierten Minimal- und Maximalwerten auszuwählen. Der Benutzer wählt einen Wert, indem er ein Schieberegler-Daumen entlang eines horizontalen oder vertikalen Schiebereglers bewegt.

Während alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `spinbutton`-Rolle der einzige schreibbare Bereich: Es ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss er in der Lage sein, den Fokus zu erhalten. Darüber hinaus müssen Tastaturinteraktionen, Mausklicks und Touch-Interaktionen unterstützt werden.

> [!WARNING]
> Um den Wert des Spinbuttons zu ändern, müssen Touch-basierte unterstützende Technologien auf Benutzerbewegungen zum Erhöhen und Verringern des Wertes reagieren, indem sie Schlüsselereignisse synthetisieren.
> Testen Sie Spinbutton-Widgets vollständig mit unterstützenden Technologien auf Geräten, bei denen Touch der primäre Eingabemechanismus ist, bevor Sie die `spinbutton`-Rolle (und alle Bereichswidgets) verwenden.

#### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wenn es weggelassen wird oder keine Zahl ist, ist der Standardwert `0` (Null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut definiert den Höchstwert. Wenn es fehlt oder keine Zahl ist, ist der Standardwert `100`.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attributs muss zwischen den Mindest- und Höchstwerten liegen (beide eingeschlossen). Dieses Attribut ist für `spinbutton` und `meter` erforderlich und für `progressbar` optional.

Für `spinbutton`, sofern keine semantischen HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) verwendet werden, muss beim Aktualisieren des Wertes auch der `aria-valuenow`-Wert programmatisch aktualisiert werden.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut wird hinzugefügt, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert des Spinbuttons widerspiegelt. Die optionalen minimalen, maximalen und aktuellen Werte sollten numerisch sein. Wenn die Werte dieser Zahlen nicht numerisch sind, sollte das `aria-valuetext`-Attribut eine Zeichenfolge enthalten, die den numerischen Wert definiert. Beispielsweise, wenn ein Spinbutton für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von `XX-Small` bis `XX-Large` wechseln, wenn `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Während es kein gleichwertiges HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einfügen. Wenn `aria-valuetext` ein wichtiges Merkmal für ein Spinbutton ist, ziehen Sie in Betracht, {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen anstelle zu verwenden.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name von der zugehörigen {{HTMLElement('label')}} kommen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht verwendet wird, um Ihren Spinbutton zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzu, um den Spinbutton fokussierbar zu machen. Die `spinbutton`-Rolle ist benutzerinteraktiv und erfordert daher die Möglichkeit, den Fokus zu erhalten. Der Fokus sollte auf das Spinbutton-Input und nicht auf die zugehörigen Tasten gerichtet werden, die den Spinbutton-Wert erhöhen und verringern.

### Nachkommen auf Schaltflächen oder Text beschränkt

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattformzugriffs-API dargestellt werden, nur spezifischen Inhalt enthalten können. Die Kinder- oder enthaltenen Elemente von `spinbutton` sind auf ein Textfeld und zwei Schaltflächen beschränkt. Alternativ kann die `spinbutton`-Rolle auf ein `text`-Eingabefeld angewendet werden, und benachbarte Schaltflächen können verwendet werden, um die Erhöhungs- und Verringungsfunktionen zu unterstützen.

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)

  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Spinbuttons angibt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen besser verständlichen Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)

  - : Auf einen Dezimalwert gesetzt, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)

  - : Auf einen Dezimalwert gesetzt, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element beschriften, und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
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

In diesem Beispiel haben wir einen negativen `tabindex` eingefügt, um die Schaltflächen aus der Standard-Tabulatorreihenfolge zu entfernen. Wir haben auch `tabindex` zu einer normalerweise nicht-interaktiven {{HTMLElement('div')}} hinzugefügt, um den `spinbutton` selbst in die Tabulatorreihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript zur Behandlung von Tastaturaktionen, wenn der Spinbutton den Fokus hat und wenn ein Mausbenutzer auf die Schaltflächen klickt.

### Mit semantischem HTML

Dies hätte auch unter Verwendung von semantischem HTML geschrieben werden können, was die Notwendigkeit für CSS oder JavaScript sowie die Notwendigkeit zur Bereitstellung von Funktionen für überflüssige Erhöhungs- und Verringerungsschaltflächen entfällt. Der nachstehende Codeausschnitt zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und unter Verwendung von semantischem HTML.

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

| Taste(n)               | Aktion                                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------- |
| Rechte und Oben-Pfeile | Erhöht den ausgewählten Wert um einen Schritt                                                             |
| Linke und Unten-Pfeile | Verringert den ausgewählten Wert um einen Schritt                                                         |
| Bild hoch              | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist    |
| Bild runter            | (Optional) Verringern Sie den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist |
| Home                   | Setzt den Spinbutton auf den Mindestwert                                                                  |
| Ende                   | Setzt den Spinbutton auf den Höchstwert                                                                   |

Für die optionalen Tasten <kbd>Bild hoch</kbd> und <kbd>Bild runter</kbd> sollte die Änderung des Spinbutton-Werts vorzugsweise um einen Betrag erfolgen, der größer ist als die Schrittänderungen, die von den Pfeiltasten gemacht werden.

## Beste Praktiken

HTML's `<input type="number">` hat implizit die `rolle` eines `spinbutton`. HTML's `<input type="date">` hat 3 eingebettete Spinbuttons, eins für Monat, Tag und Jahr. Wenn Sie semantische HTML-Formularelemente für ihre vorgesehenen Zwecke verwenden, verwenden Sie nicht die Attribute `aria-valuemax` oder `aria-valuemin`; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute auf die `spinbutton`-Rolle anwendbar.

### Bevorzugen Sie semantisches HTML

Es wird empfohlen, das native {{HTMLElement("input")}}-Element vom Typ `number`, [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), anstelle der `spinbutton`-Rolle zu verwenden.

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
- Funktionierende Beispiele:
  - [Beispiel für ein Spinbutton-Datumsauswahlwerkzeug](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Werkzeugleistenbeispiel: Schriftgrößenauswahl](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
