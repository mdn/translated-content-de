---
title: "ARIA: spinbutton-Rolle"
slug: Web/Accessibility/ARIA/Roles/spinbutton_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die `spinbutton`-Rolle definiert eine Art von Bereich, in dem vom Benutzer erwartet wird, dass er einen Wert aus diskreten Auswahlmöglichkeiten auswählt.

## Beschreibung

Die `spinbutton`-Rolle zeigt an, dass das Element ein Eingabewidget ist, das seinen Wert auf eine Reihe oder einen Bereich von diskreten Werten beschränkt. Die Rolle kommt auch mit einer Inkrement- und Dekrementfunktionalität. Zum Beispiel kann in einem Widget, das es Benutzern ermöglicht, einen Einsatz in einem Texas Holdem-Spiel zu wählen, die `spinbutton`-Rolle es Benutzern ermöglichen, eine Zahl zwischen den minimalen und maximalen Einsätzen in Inkrementen gemäß den aktuellen Spielregeln auszuwählen.

Der Spinbutton repräsentiert den Bereich der möglichen Werte. Der Wert der Spinbutton-Eingabe repräsentiert den aktuellen Wert.

Spinbuttons bestehen oft aus drei Komponenten, einschließlich eines Textfeldes, das den aktuellen Wert anzeigt, einer Inkrement-Schaltfläche und einer Dekrement-Schaltfläche. Das Textfeld ist normalerweise die einzige fokussierbare Komponente, da die Inkrement- und Dekrementfunktionen für die Tastatur über Pfeiltasten zugänglich sind. Typischerweise erlaubt das Textfeld Benutzern auch, den Wert direkt zu bearbeiten.

Zusätzlich zur Einbindung des [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attributs, um den Spinbutton fokussierbar zu machen, muss Unterstützung für Tastatur- und Zeigereingabegeräte implementiert werden. Richtungstasten wie die Pfeiltasten sollten für Tastaturbenutzer unterstützt werden. Das Ändern des Wertes, wenn Inkrement- und Dekrement-Schaltflächen angeklickt werden, muss für Zeigegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)-Element oder andere Eingabetypen für Datum und Uhrzeit zu verwenden, die ebenfalls implizit die `role="spinbutton"`-Semantik haben, statt der `spinbutton`-Rolle. Benutzeragenten bieten für diese Eingabeelemente stilisierte Widgets, die standardmäßig Inkrement-, Dekrement- und native Bereichsbeschränkungen bereitstellen. Bei Verwendung nicht-semantischer Elemente müssen alle Funktionen des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS neu erstellt werden.

### ARIA-Bereichs-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Roles#2._widget_roles) für Bereiche an, darunter Fortschrittsbalken, Messgeräte, Schieberegler und Spinbuttons.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)-Rolle, ähnlich wie HTMLs {{HTMLElement('progress')}}-Element, ist ein schreibgeschützter Bereich. Sie zeigt den Fortschritt einer Aufgabe an, der in eine Richtung voranschreitet, wie beispielsweise der Ladefortschritt eines Datei-Uploads, der schließlich 100 % erreicht, wenn er vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)-Rolle, ähnlich wie HTMLs {{HTMLElement('meter')}}-Element, ist eine schreibgeschützte Anzeige. Sie zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie zum Beispiel die Batterieanzeige eines Computers oder die Tankanzeige eines Autos.

Die `slider`-Rolle, ähnlich wie HTMLs `input` vom Typ `range`, [`<input type="range">`](/de/docs/Web/HTML/Element/input/range), ist ein beschreibbarer Eingabebereich. Schieberegler ermöglichen es Benutzern, einen Wert zwischen den vordefinierten minimalen und maximalen Werten auszuwählen. Der Benutzer wählt einen Wert aus, indem er einen Schieberegler entlang eines horizontalen oder vertikalen Schiebers bewegt, um einen Wert zu wählen.

Obwohl alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `spinbutton`-Rolle der einzige beschreibbare Bereich: Es ist der einzige, dessen Wert durch Benutzerinteraktion geändert wird. Daher muss er fokussierbar sein. Zusätzlich muss Tastaturinteraktion, Mausklicks und Berührungsinteraktion unterstützt werden.

> [!WARNING]
> Um den Spinbutton-Wert zu ändern, müssen berührungsbasierte unterstützende Technologien auf Benutzeraktionen für die Erhöhung und Verringerung des Wertes reagieren, indem sie Tastaturereignisse synthetisieren.
> Testen Sie Spinbutton-Widgets vollständig mit unterstützenden Technologien auf Geräten, bei denen Berührung der primäre Eingabemechanismus ist, bevor Sie die `spinbutton`-Rolle (und alle Bereichs-Widgets) verwenden.

#### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)-Attribut legt den Minimalwert fest. Wenn es weggelassen wird oder keine Zahl ist, liegt der Standardwert bei `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)-Attribut definiert den Maximalwert. Wenn es fehlt oder keine Zahl ist, liegt der Standardwert bei `100`.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow)-Attributs muss zwischen dem minimalen und maximalen Wert liegen, beide inklusive. Dieses Attribut ist für `spinbutton` und `meter` erforderlich und optional für `progressbar`.

Für `spinbutton`, es sei denn, es werden semantische HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Element/input/number) verwendet, muss, wenn der Wert aktualisiert wird, der `aria-valuenow`-Wert auch programmatisch aktualisiert werden.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut wird hinzugefügt, wenn der numerische Wert `aria-valuenow` nicht den beabsichtigten Wert des Spinbuttons widerspiegelt. Die optionalen minimalen, maximalen und aktuellen Werte sollten numerisch sein. Wenn die Werte, die diese Zahlen repräsentieren, nicht numerisch sind, sollte das `aria-valuetext`-Attribut mit einem Zeichenfolgenwert enthalten sein, der den numerischen Wert definiert. Zum Beispiel, wenn ein Spinbutton für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext`-Attribut von `XX-Small` bis `XX-Large` wechseln, wenn `aria-valuenow` zunimmt.

Der `aria-valuetext`-Wert muss aktualisiert werden, wenn der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Während es kein gleichwertiges HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}}-Typ einfügen. Wenn `aria-valuetext` eine wichtige Funktion für einen Spinbutton ist, ziehen Sie die Verwendung von {{HTMLElement('select')}} mit {{HTMLElement('option')}}-Elementen in Betracht.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton`-Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name aus dem zugehörigen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn Sie das HTML-{{HTMLElement('input')}}-Element nicht verwenden, um Ihren Spinbutton zu erstellen, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Global_attributes#tabindex)-Attribut ein, um den Spinbutton fokussierbar zu machen. Die `spinbutton`-Rolle ist benutzerinteraktiv und erfordert daher die Fokussierbarkeit. Der Fokus sollte auf die Spinbutton-Eingabe gelegt werden und nicht auf die zugehörigen Schaltflächen, die den Spinbutton-Wert erhöhen und verringern.

### Nachfolger sind auf Tasten oder Text beschränkt

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugriffs-API dargestellt werden, nur bestimmten Inhalt enthalten können. Die Kinder- oder besessenen Elemente von `spinbutton` sind auf ein Textfeld und zwei Schaltflächen beschränkt. Alternativ kann die `spinbutton`-Rolle auf ein `text`-Input angewendet werden, und benachbarte Schaltflächen können verwendet werden, um die Inkrement- und Dekrementfunktionen zu unterstützen.

## Zugehörige Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) (erforderlich)

  - : Wird auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax` gesetzt, der den aktuellen Wert des Spinbuttons anzeigt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)

  - : Unterstützende Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem Spinbutton einen verständlicheren Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin)

  - : Auf einen Dezimalwert gesetzt, der den Minimalwert repräsentiert und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)

  - : Auf einen Dezimalwert gesetzt, der den Maximalwert repräsentiert und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Definiert den Zeichenfolgenwert oder identifiziert das Element (oder die Elemente), die das Spinbutton-Element beschriften und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Definiert einen Zeichenfolgenwert, der das Spinbutton-Element beschriftet. Dies bietet dem Element einen zugänglichen Namen, wenn kein sichtbares Label verfügbar ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` bereitzustellen.

## Beispiele

Im Beispiel unten wurde eine `spinbutton`-Rolle definiert, um Benutzern zu ermöglichen, einen Tag des Monats auszuwählen.

```html
<p id="day">Geben Sie den Tag des Monats ein</p>
<button type="button" tabindex="-1" aria-label="vorheriger Tag">˱</button>
<div
  role="spinbutton"
  tabindex="0"
  aria-valuenow="1"
  aria-valuetext="erster"
  aria-valuemin="1"
  aria-valuemax="31"
  aria-labelledby="day">
  1
</div>
<button type="button" tabindex="-1" aria-label="nächster Tag">˲</button>
```

In diesem Beispiel haben wir einen negativen `tabindex` eingebunden, um die Schaltflächen aus der Standard-Tabbing-Reihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht interaktiven {{HTMLElement('div')}} hinzugefügt, um den `spinbutton` selbst in die Tabbing-Reihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu behandeln, wenn der Spinbutton den Fokus hat, und wenn ein Mausbenutzer auf die Schaltflächen klickt.

### Mit semantischem HTML

Dies könnte auch mit semantischem HTML geschrieben werden, wodurch die Notwendigkeit für CSS oder JavaScript entfällt sowie die Notwendigkeit, Funktionalität für zusätzliche Inkremementierungs- und Dekrementierungsschaltflächen bereitzustellen. Das folgende Code-Snippet zeigt das vorherige Beispiel ohne die `spinbutton`-Rolle und unter Verwendung von semantischem HTML.

```html
<label for="day">Geben Sie den Tag des Monats ein</label>
<input
  type="number"
  value="1"
  aria-valuetext="erster"
  min="1"
  max="31"
  id="day" />
```

{{EmbedLiveSample("With_semantic_HTML", 50, 50)}}

In diesem Fall wäre das einzige benötigte JavaScript, um das `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert, was in diesem Fall wirklich eine optionale Funktion ist.

## Tastaturinteraktionen

| Taste(n)             | Aktion                                                                          |
| -------------------- | ------------------------------------------------------------------------------- |
| Pfeil rechts und oben  | Erhöht den ausgewählten Wert um einen Schritt                                 |
| Pfeil links und unten | Verringert den ausgewählten Wert um einen Schritt                              |
| Bild hoch              | (Optional) Erhöht den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist |
| Bild runter            | (Optional) Verringert den Wert um einen festgelegten Betrag, der größer oder gleich einem Schritt ist |
| Pos1                  | Setzt den Spinbutton auf den Minimalwert                                      |
| Ende                  | Setzt den Spinbutton auf den Maximalwert                                       |

Für die optionalen <kbd>Bild hoch</kbd>- und <kbd>Bild runter</kbd>-Tasten sollte die Änderung des Spinbutton-Wertes vorzugsweise um einen Betrag erfolgen, der größer als die Schrittänderungen durch die Auf- und Abwärtspfeiltasten ist.

## Beste Praktiken

HTMLs `<input type="number">` hat implizit die `role` von `spinbutton`. HTMLs `<input type="date">` hat 3 verschachtelte Spinbuttons, jeweils für Monat, Tag und Jahr. Beim Verwenden von semantischen HTML-Formularelementen für ihre vorgesehenen Zwecke verwenden Sie nicht die `aria-valuemax` oder `aria-valuemin` Attribute; verwenden Sie stattdessen `min` und `max`. Andernfalls sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute auf die `spinbutton`-Rolle anwendbar.

### Bevorzugen Sie semantisches HTML

Es wird empfohlen, das native {{HTMLElement("input")}}-Element vom Typ `number`, [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), zu verwenden, anstatt die `spinbutton`-Rolle.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="number">`](/de/docs/Web/HTML/Element/input/number)
- [`<input type="date">`](/de/docs/Web/HTML/Element/input/date)
- [`<input type="time">`](/de/docs/Web/HTML/Element/input/time)
- Andere Bereichs-Widgets umfassen:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role) (falls fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- Funktionierende Beispiele:
  - [Datumsauswahl-Spinbutton-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Werkzeugleistenbeispiel: Schriftgrößenwähler](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
