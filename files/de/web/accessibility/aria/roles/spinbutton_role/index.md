---
title: "ARIA: spinbutton-Rolle"
slug: Web/Accessibility/ARIA/Roles/spinbutton_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `spinbutton`-Rolle definiert eine Art von Bereich, der erwartet, dass der Benutzer einen Wert aus einer Reihe diskreter Auswahlmöglichkeiten auswählt.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabe-Widget ist, das seinen Wert auf eine Menge oder einen Bereich diskreter Werte beschränkt. Die Rolle bietet auch Funktionen zum Erhöhen und Verringern. Beispielsweise kann in einem Widget, das es Benutzern ermöglicht, einen Einsatz in einem Texas Holdem-Spiel auszuwählen, die `spinbutton`-Rolle den Benutzern erlauben, eine Zahl zwischen dem minimalen und maximalen Einsatz in festgelegten Schritten gemäß den aktuellen Spielregeln auszuwählen.

Das Spinbutton-Element repräsentiert den Bereich möglicher Werte. Der Wert der Spinbutton-Eingabe repräsentiert den aktuellen Wert.

Spinbuttons bestehen oft aus drei Komponenten, darunter ein Textfeld, das den aktuellen Wert anzeigt, eine Taste zum Erhöhen und eine Taste zum Verringern. Das Textfeld ist normalerweise die einzige fokussierbare Komponente, da die Erhöhungs- und Verringerungsfunktionen über die Pfeiltasten auf der Tastatur zugänglich sind. Typischerweise ermöglicht das Textfeld dem Benutzer auch, den Wert direkt zu bearbeiten.

Zusätzlich zur Einbindung des [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attributs zur Aktivierung des Spinbutton-Fokus müssen Tastatur- und Zeigergerätunterstützung implementiert werden. Richtungstasten wie die Pfeiltasten müssen für Tastaturbenutzer unterstützt werden. Das Ändern des Wertes beim Klicken auf die Erhöhungs- und Verringertasten muss für Zeigegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)-Element oder andere Eingabetypen für Datum und Uhrzeit zu verwenden, die auch implizit die semantische `role="spinbutton"` haben, anstelle der `spinbutton`-Rolle. Benutzeragenten bieten stilisierte Widgets für diese Eingabeelemente an, die standardmäßige Erhöhungs-, Verringerungs- und native Bereichsbeschränkungsfunktionen bereitstellen. Beim Einsatz nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### ARIA-Bereichsoptionen für Widgets

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) für den Bereich an, darunter Fortschrittsbalken, Zähler, Schieberegler und Spinbuttons.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)-Rolle, ähnlich dem {{HTMLElement('progress')}}-Element in HTML, ist ein nur-lesender Bereich. Sie zeigt den Grad der Fertigstellung einer Aufgabe an und schreitet in eine Richtung voran, wie beispielsweise der Ladefortschritt eines Datei-Uploads, der bei vollständiger Ladung 100 % erreicht.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)-Rolle, ähnlich dem {{HTMLElement('meter')}}-Element in HTML, ist ein nur-lesender Zähler. Es zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie beispielsweise die Akkuanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich der `range`-Eingabe von HTML, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein schreibbarer Eingabebereich. Schieberegler ermöglichen Benutzern, einen Wert zwischen den vordefinierten minimalen und maximalen Werten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schieberegler-Daumen entlang eines horizontalen oder vertikalen Schiebers bewegt.

Während all diese Bereiche die gleichen ARIA-Zustände und -Eigenschaften haben, ist die `spinbutton`-Rolle der einzige schreibbare Bereich: Es ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss es in der Lage sein, den Fokus zu erhalten. Darüber hinaus müssen Tastaturinteraktion, Mausklicks und Touch-Interaktion unterstützt werden.

> [!WARNING]
> Um den Spinbutton-Wert zu ändern, müssen assistive Technologien auf Basis von Berührungen auf Benutzergesten zum Erhöhen und Verringern des Wertes reagieren, indem sie Tastaturereignisse synthetisieren.
> Testen Sie Spinbutton-Widgets vollständig mit assistiven Technologien auf Geräten, bei denen der Touchscreen das primäre Eingabegerät ist, bevor Sie die `spinbutton`-Rolle (und alle Bereichs-Widgets) verwenden.

#### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut legt den Mindestwert fest. Wird es weggelassen oder ist es keine Zahl, ist der Standard `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut definiert den Höchstwert. Fehlt es oder ist es keine Zahl, beträgt der Standardwert `100`.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attributs muss zwischen den Minimal- und Maximalwerten liegen, einschließlich beider. Dieses Attribut ist für `spinbutton` und `meter` erforderlich und für `progressbar` optional.

Für `spinbutton`, es sei denn, es werden semantische HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) verwendet, muss der `aria-valuenow`-Wert bei einer Aktualisierung des Wertes auch programmatisch aktualisiert werden.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut wird verwendet, wenn der `aria-valuenow`-numerische Wert nicht den beabsichtigten Wert des Spinbuttons widerspiegelt. Die optionalen minimalen, maximalen und aktuellen Werte sollten numerisch sein. Wenn die durch diese Zahlen dargestellten Werte nicht numerisch sind, sollte das `aria-valuetext`-Attribut mit einem String-Wert, der den numerischen Wert definiert, enthalten sein. Beispielsweise, wenn ein Spinbutton für T-Shirt-Größen verwendet wird, sollte sich das `aria-valuetext`-Attribut von `XX-Small` bis `XX-Large` verschieben, während der `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, sobald der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Während es kein entsprechendes HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}} Typ einschließen. Wenn `aria-valuetext` ein wichtiges Merkmal für einen Spinbutton ist, sollten Sie stattdessen {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen in Betracht ziehen.

Ein barrierefreier Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der barrierefreie Name vom zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn nicht das HTML-{{HTMLElement('input')}}-Element verwendet wird, um Ihren Spinbutton zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut hinzu, um den Spinbutton fokussierbar zu machen. Die `spinbutton`-Rolle ist benutzerinteraktiv und erfordert daher die Möglichkeit, den Fokus zu erhalten. Der Fokus sollte auf die Spinbutton-Eingabe und nicht auf die zugehörigen Tasten gelegt werden, die den Spinbutton-Wert erhöhen und verringern.

### Nachkommen auf Tasten oder Text beschränkt

Es gibt einige Arten von Benutzeroberflächen-Komponenten, die bei der Darstellung in einer Plattform-Zugänglichkeit-API nur spezifische Inhalte enthalten können. Die Kinder oder zugehörigen Elemente von `spinbutton` sind auf ein Textfeld und zwei Tasten beschränkt. Alternativ kann die `spinbutton`-Rolle auf eine `text` Eingabe angewendet werden und Geschwistertasten können verwendet werden, um die Erhöhungs- und Verringerungsfunktionen zu unterstützen.

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)

  - : Auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` setzen, der den aktuellen Wert des Spinbuttons angibt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen verständlicheren Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)

  - : Auf einen Dezimalwert setzen, der den Mindestwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)

  - : Auf einen Dezimalwert setzen, der den Höchstwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den String-Wert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element beschriften und einen barrierefreien Namen bereitstellen. Ein barrierefreier Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Definiert einen String-Wert, der das Spinbutton-Element beschriftet. Dies bietet dem Element einen barrierefreien Namen, wenn kein sichtbares Label verfügbar ist, um den erforderlichen barrierefreien Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

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

In diesem Beispiel haben wir ein negatives `tabindex` hinzugefügt, um die Tasten aus der Standard-Tabreihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht interaktiven {{HTMLElement('div')}} hinzugefügt, um den eigentlichen Spinbutton in die Tabreihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu verarbeiten, wenn der Spinbutton den Fokus hat und wenn ein Mausbenutzer auf die Tasten klickt.

### Mit semantischem HTML

Dies hätte auch unter Verwendung von semantischem HTML geschrieben werden können, was die Notwendigkeit von CSS oder JavaScript sowie die Notwendigkeit, Funktionen für überflüssige Erhöhungs- und Verringerungstasten bereitzustellen, beseitigt. Der unten stehende Codeausschnitt zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und unter Verwendung von semantischem HTML.

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

In diesem Fall wäre das einzige benötigte JavaScript, das `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert, was in diesem Fall tatsächlich ein optionales Merkmal ist.

## Tastaturinteraktionen

| Taste(n)               | Aktion                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| Rechts- und Oben-Pfeil | Erhöhen Sie den ausgewählten Wert um einen Schritt                                               |
| Links- und Unten-Pfeil | Verringern Sie den ausgewählten Wert um einen Schritt                                            |
| Bild Auf               | (Optional) Erhöhen Sie den Wert um einen festgelegten Betrag größer oder gleich einem Schritt    |
| Bild Ab                | (Optional) Verringern Sie den Wert um einen festgelegten Betrag größer oder gleich einem Schritt |
| Pos1                   | Setzen Sie den Spinbutton auf den Mindestwert                                                    |
| Ende                   | Setzen Sie den Spinbutton auf den Höchstwert                                                     |

Für die optionalen <kbd>Bild Auf</kbd> und <kbd>Bild Ab</kbd>-Tasten sollte die Änderung des Spinbutton-Wertes vorzugsweise um einen Betrag größer als die Schrittwechselschritte der Auf- und Abwärtspfeiltasten erfolgen.

## Beste Praktiken

HTML's `<input type="number">` hat implizit die `role` des `spinbutton`. HTML's `<input type="date">` enthält 3 verschachtelte Spinbuttons, eines für Monat, Tag und Jahr. Beim Verwenden semantischer HTML-Formularelemente für ihre beabsichtigten Zwecke verwenden Sie nicht die `aria-valuemax` oder `aria-valuemin` Attribute; verwenden Sie stattdessen `min` und `max`. Ansonsten sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute auf die `spinbutton`-Rolle anwendbar.

### Bevorzugen Sie semantisches HTML

Es wird empfohlen, das native {{HTMLElement("input")}}-Element des Typs `number`, [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), anstelle der `spinbutton`-Rolle zu verwenden.

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
- Funktionierende Beispiele:
  - [Date Picker Spin Button Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Toolbar Beispiel: Schriftgrößenpicker](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
