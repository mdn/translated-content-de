---
title: "ARIA: `spinbutton` Rolle"
short-title: spinbutton
slug: Web/Accessibility/ARIA/Reference/Roles/spinbutton_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `spinbutton` Rolle definiert einen Bereichstyp, bei dem erwartet wird, dass der Benutzer einen Wert aus einer Reihe diskreter Optionen auswählt.

## Beschreibung

Die `spinbutton` Rolle zeigt an, dass das Element ein Eingabe-Widget ist, dessen Wert auf einen Satz oder eine Spanne diskreter Werte beschränkt ist. Die Rolle beinhaltet auch eine Inkrement- und Dekrementfunktionalität. Zum Beispiel kann in einem Widget, das es Benutzern ermöglicht, einen Einsatz in einem Texas Holdem-Spiel auszuwählen, die `spinbutton` Rolle dem Benutzer erlauben, eine Nummer zwischen dem minimalen und maximalen Einsatz in definierten Schritten zu wählen, wie von den aktuellen Spielregeln erlaubt.

Der `spinbutton` repräsentiert den Bereich der möglichen Werte. Der Wert der `spinbutton` Eingabe repräsentiert den aktuellen Wert.

`Spinbuttons` bestehen oft aus drei Komponenten, einschließlich eines Textfeldes, das den aktuellen Wert anzeigt, einer Inkrement-Taste und einer Dekrement-Taste. Das Textfeld ist in der Regel die einzige fokussierbare Komponente, da die Inkrement- und Dekrementfunktionen über die Pfeiltasten erreichbar sind. Typischerweise erlaubt das Textfeld auch, dass Benutzer den Wert direkt bearbeiten.

Zusätzlich zum Einfügen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attributs, um den Fokus auf das `spinbutton` zu ermöglichen, muss die Unterstützung für Tastatur- und Zeigereingabegeräte implementiert werden. Richtungstasten wie die Pfeiltasten müssen für die Tastaturnutzer unterstützt werden. Eine Wertänderung beim Klicken auf die Inkrement- und Dekrementtasten muss für Zeigegeräte unterstützt werden. Siehe [Tastaturinteraktionen](#tastaturinteraktionen) unten.

> [!NOTE]
> Es wird empfohlen, das [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) Element oder andere Eingabetypen für Daten und Zeit, die ebenfalls implizit die `role="spinbutton"` Semantik besitzen, zu verwenden, anstatt der `spinbutton` Rolle. Benutzeragenten bieten stilisierte Widgets für diese Eingabelemente, die die Standard-Inkrement-, Dekrement- und native Bereichsbegrenzungsfunktionen bieten. Bei Verwendung nicht-semantischer Elemente müssen alle Merkmale des nativen semantischen Elements mit ARIA-Attributen, JavaScript und CSS nachgebildet werden.

### ARIA Bereichs-Widget-Optionen

ARIA bietet Entwicklern sechs verschiedene [Widget-Rollen](/de/docs/Web/Accessibility/ARIA/Reference/Roles#2._widget_roles), einschließlich `progressbar`, `meter`, `slider` und `spinbutton`.

Die [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role) Rolle, ähnlich dem HTML-Element {{HTMLElement('progress')}}, ist ein schreibgeschützter Bereich. Sie zeigt den Fortschritt einer Aufgabe in eine Richtung an, wie z.B. die Ladefortschrittsleiste eines Datei-Uploads, die schließlich 100% erreicht, wenn sie vollständig geladen ist.

Die [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role) Rolle, ähnlich dem HTML-Element {{HTMLElement('meter')}}, ist ein schreibgeschütztes Messinstrument. Sie zeigt die Menge von etwas innerhalb eines bekannten Bereichs an, wie z.B. die Batteriestatusanzeige eines Computers oder die Tankstandsanzeige eines Autos.

Die `slider` Rolle, ähnlich dem `input` von Typ `range` im HTML, [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range), ist ein schreibbares Eingabebereich. Schieberegler erlauben es Benutzern, einen Wert zwischen den vordefinierten minimalen und maximalen Werten auszuwählen. Der Benutzer wählt einen Wert, indem er einen Schieberschieber entlang eines horizontalen oder vertikalen Schiebereglers bewegt, um einen Wert auszuwählen.

Während alle drei dieser Bereiche dieselben ARIA-Zustände und -Eigenschaften haben, ist die `spinbutton` Rolle der einzige schreibbare Bereich: sie ist der einzige Bereich, dessen Wert sich durch Benutzerinteraktion ändert. Daher muss sie den Fokus empfangen können. Zusätzlich muss die Tastaturinteraktion, Mausklicks und Touch-Interaktion unterstützt werden.

> [!WARNING]
> Um den `spinbutton`-Wert zu ändern, müssen assistive Technologien, die auf Berührungen basieren, auf Benutzerbewegungen reagieren, um den Wert durch Synthese von Tastenereignissen zu erhöhen und zu verringern.
> Testen Sie `spinbutton`-Widgets vollständig mit assistiven Technologien auf Geräten, bei denen Berührungen der primäre Eingabemechanismus sind, bevor Sie die `spinbutton`-Rolle (und alle Bereichs-Widgets) verwenden.

### Allgemeine Attribute

Das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) Attribut legt den Minimalwert fest. Wenn es weggelassen wird oder keine Nummer ist, beträgt der Standardwert `0` (null).

Das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Attribut definiert den Maximalwert. Wenn es fehlt oder keine Nummer ist, beträgt der Standardwert `100`.

Der Wert des [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) Attributs muss zwischen den minimalen und maximalen Werten liegen, einschließlich beider. Dieses Attribut ist für `spinbutton` und `meter` erforderlich und für `progressbar` optional.

Für `spinbutton`, es sei denn, es werden semantische HTML-Elemente wie [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) verwendet, muss, wenn der Wert aktualisiert wird, auch der `aria-valuenow`-Wert programmatisch aktualisiert werden.

Das optionale [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) Attribut wird verwendet, wenn der numerische Wert von `aria-valuenow` nicht den beabsichtigten Wert der `spinbutton` widerspiegelt. Die optionalen minimalen, maximalen und aktuellen Werte sollten numerisch sein. Wenn die Zahlenwerte, die diese Zahlen repräsentieren, nicht numerisch sind, sollte das `aria-valuetext` Attribut mit einem string-Wert, der den numerischen Wert definiert, angegeben werden. Zum Beispiel, wenn ein `spinbutton` für T-Shirt-Größen verwendet wird, sollte das `aria-valuetext` Attribut sich von `XX-Small` zu `XX-Large` ändern, während `aria-valuenow` zunimmt.

Der `aria-valuetext` Wert muss aktualisiert werden, wenn der Wert oder `aria-valuenow` aktualisiert wird. ARIA-Attribute werden auf semantischen HTML-Elementen unterstützt. Während es kein entsprechendes HTML-Attribut für `<input>` gibt, können Sie `aria-valuetext` auf jedem {{htmlelement('input')}} Typ einschließen. Wenn `aria-valuetext` eine wichtige Funktion für einen `spinbutton` darstellt, sollten Sie stattdessen {{HTMLElement('select')}} mit {{HTMLElement('option')}} Elementen in Betracht ziehen.

Ein zugänglicher Name ist **erforderlich**. Wenn die `spinbutton` Rolle auf ein HTML-{{HTMLElement('input')}}-Element angewendet wird, kann der zugängliche Name von dem damit verbundenen {{HTMLElement('label')}} stammen. Andernfalls verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), wenn ein sichtbares Label vorhanden ist, oder [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn kein sichtbares Label vorhanden ist.

Wenn das HTML-{{HTMLElement('input')}}-Element nicht zur Erstellung Ihres `spinbutton` verwendet wird, fügen Sie das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um den `spinbutton` fokussierbar zu machen. Die `spinbutton` Rolle ist benutzerinteraktiv und erfordert daher die Möglichkeit, den Fokus zu erhalten. Der Fokus sollte auf das `spinbutton` Eingabefeld gesetzt werden und nicht auf die zugehörigen Tasten, die den `spinbutton` Wert erhöhen und verringern.

### Nachfahren sind auf Schaltflächen oder Text beschränkt

Es gibt einige Arten von Benutzeroberflächenkomponenten, die, wenn sie in einer Plattform-Zugänglichkeits-API dargestellt werden, nur spezifische Inhalte enthalten können. Die Kinder oder eigentumsbezogenen Elemente von `spinbutton` sind auf ein Textfeld und zwei Schaltflächen beschränkt. Alternativ kann die `spinbutton` Rolle auf eine `text` Eingabe angewendet werden und benachbarte Schaltflächen können verwendet werden, um die Inkrement- und Dekrementfunktionen zu unterstützen.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) (erforderlich)

  - : Setzen Sie es auf einen Dezimalwert zwischen `aria-valuemin` und `aria-valuemax`, der den aktuellen Wert des `spinbutton` angibt. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)

  - : Assistive Technologien präsentieren oft den Wert von `aria-valuenow` als Zahl. Wenn `aria-valuenow` nicht genau sein kann, verwenden Sie `aria-valuetext`, um dem `spinbutton` einen besser verständlichen Wert zu geben.

- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)

  - : Setzen Sie es auf einen Dezimalwert, der den Minimalwert darstellt und kleiner als `aria-valuemax` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)

  - : Setzen Sie es auf einen Dezimalwert, der den Maximalwert darstellt und größer als `aria-valuemin` ist. Wenn nicht vorhanden, gibt es keinen Standardwert.

- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Definiert den string-Wert oder identifiziert das Element (oder die Elemente), die das `spinbutton` Element benennen und einen zugänglichen Namen bereitstellen. Ein zugänglicher Name ist erforderlich.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Definiert einen string-Wert, der das `spinbutton` Element kennzeichnet. Dies bietet dem Element einen zugänglichen Namen, wenn kein sichtbares Label verfügbar ist, um den erforderlichen zugänglichen Namen über {{HTMLElement('label')}} oder `aria-labelledby` zur Verfügung zu stellen.

### Tastaturinteraktionen

| Taste(n)                | Aktion                                                                                              |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| Rechte und obere Pfeile | Erhöht den ausgewählten Wert um eine Stufe                                                          |
| Linke und untere Pfeile | Verringert den ausgewählten Wert um eine Stufe                                                      |
| Bild auf                | (Optional) Erhöht den Wert um einen festgelegten Betrag, der größer oder gleich einer Stufe ist     |
| Bild ab                 | (Optional) Verringert den Wert um einen festgelegten Betrag, der größer oder gleich einer Stufe ist |
| Home                    | Setzt das `spinbutton` auf den Minimalwert                                                          |
| Ende                    | Setzt das `spinbutton` auf den Maximalwert                                                          |

Für die optionalen <kbd>Bild auf</kbd> und <kbd>Bild ab</kbd> Tasten sollte die Änderung des `spinbutton` Wertes vorzugsweise um einen Betrag erfolgen, der größer ist als die Schrittänderungen, die durch die oberen und unteren Pfeiltasten vorgenommen werden.

## Beispiele

Im folgenden Beispiel wurde eine `spinbutton` Rolle definiert, die es Benutzern ermöglicht, einen Tag des Monats auszuwählen.

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

In diesem Beispiel haben wir ein negatives `tabindex` eingefügt, um die Schaltflächen aus der standardmäßigen Auswahlreihenfolge zu entfernen. Wir haben auch `tabindex` zu einem normalerweise nicht interaktiven {{HTMLElement('div')}} hinzugefügt, um das `spinbutton` selbst in die Auswahlreihenfolge aufzunehmen. Dieses Beispiel erfordert JavaScript, um Tastaturaktionen zu verarbeiten, wenn das `spinbutton` den Fokus hat und wenn ein Mausbenutzer auf die Schaltflächen klickt.

### Mit semantischem HTML

Dies könnte auch mit semantischem HTML geschrieben werden, wodurch die Notwendigkeit für CSS oder JavaScript entfällt und auch die Notwendigkeit beseitigt wird, Funktionalität für zusätzliche Inkrement- und Dekrement-Tasten bereitzustellen. Der Code-Schnipsel unten zeigt das vorherige Beispiel ohne die `spinbutton` Rolle und mit semantischem HTML.

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

In diesem Fall wäre nur JavaScript erforderlich, um das `aria-valuetext` zu aktualisieren, wenn sich der Eingabewert ändert, was in diesem Fall wirklich eine optionale Funktion ist.

## Beste Praktiken

HTML's `<input type="number">` hat implizit die `role` von `spinbutton`. HTML's `<input type="date">` hat 3 verschachtelte `spinbuttons`, je eines für Monat, Tag und Jahr. Wenn Sie semantische HTML-Formularelemente für ihre vorgesehenen Zwecke verwenden, verwenden Sie nicht die `aria-valuemax` oder `aria-valuemin` Attribute; verwenden Sie `min` und `max` stattdessen. Andernfalls sind alle globalen `aria-*` Attribute und alle anderen `aria-*` Attribute auf die `spinbutton` Rolle anwendbar.

### Bevorzugen Sie semantisches HTML

Es wird empfohlen, das native {{HTMLElement("input")}} Element des Typs `number`, [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), anstelle der `spinbutton` Rolle zu verwenden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number)
- [`<input type="date">`](/de/docs/Web/HTML/Reference/Elements/input/date)
- [`<input type="time">`](/de/docs/Web/HTML/Reference/Elements/input/time)
- Andere Bereichs-Widgets beinhalten:
  - [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
  - [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
  - [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role) (wenn fokussierbar)
  - [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
  - [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- Funktionierende Beispiele:
  - [Datumauswahl-Spinbutton-Beispiel](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/examples/datepicker-spinbuttons/)
  - [Toolbar-Beispiel: Schriftgrößen-Auswahl](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/examples/toolbar/)
