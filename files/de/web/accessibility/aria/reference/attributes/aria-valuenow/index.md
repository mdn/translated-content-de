---
title: aria-valuenow
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das `aria-valuenow`-Attribut definiert den aktuellen Wert für ein `range`-Widget.

## Beschreibung

Das `aria-valuenow`-Attribut definiert den aktuellen Wert für Range-Widgets. Es ist ähnlich dem `value`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Reference/Elements/input/range), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number) und allen Datums-Zeit-Typen.

Beim Erstellen einer `range`-Rolle, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) auf einem nicht-semantischen Element ermöglicht `aria-valuenow` die Definition eines aktuellen numerischen Wertes zwischen den minimalen und maximalen Werten. Die minimalen und maximalen Werte werden mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) Rolle ist. Das `aria-valuenow`-Attribut wird auf allen Subtypen der Range-Rollen verwendet.

```html
<p id="birthyearLabel">What year were you born?</p>
<div
  role="spinbutton"
  tabindex="-1"
  aria-valuenow="1984"
  aria-valuemin="1900"
  aria-valuemax="2021"
  aria-labelledby="birthyearLabel">
  <span class="value"> 1984 </span>
  <span role="button">
    <span aria-hidden="true">+</span>
    Increment year by 1
  </span>
  <span role="button">
    <span aria-hidden="true">-</span>
    Decrement year by 1
  </span>
</div>
```

Verwenden Sie semantische HTML-Elemente, wann immer möglich:

```html
<label for="birthyear">What year were you born?</label>
<input type="number" id="birthyear" value="1984" min="1900" max="2021" />
```

Wenn kein bekannter Wert vorliegt, wie wenn ein Fortschrittsbalken in einem unbestimmten Zustand ist, setzen Sie kein `aria-valuenow`-Attribut.

Wenn kein `aria-valuenow` gesetzt ist, wird keine Information über einen aktuellen Wert impliziert.

Wenn es mit Schiebereglern und Drehknöpfen verwendet wird, geben unterstützende Technologien den tatsächlichen Wert an die Benutzer weiter.

Wenn es mit `progressbar` und `scrollbar` verwendet wird, geben unterstützende Technologien den Wert als Prozentsatz an die Benutzer weiter. Wenn `aria-valuemin` und `aria-valuemax` beide definiert sind, wird der Prozentwert als Position im Bereich berechnet. Andernfalls wird der tatsächliche Wert als Prozentsatz angegeben.

Wenn der anzusagende Wert, entweder der tatsächliche Wert oder der Wert als Prozentsatz, für die Benutzer nicht klar sein könnte, sollte das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut verwendet werden, um eine benutzerfreundliche Darstellung des Wertes zu bieten. Wenn gesetzt, wird die `valuetext`-Zeichenkette anstelle des numerischen `valuenow`-Wertes angekündigt. Zum Beispiel, wenn ein Schieberegler die Wochentage darstellt, sodass der `aria-valuenow`-Wert eines Wochentags eine Zahl ist, sollte die `aria-valuetext`-Eigenschaft auf eine Zeichenkette gesetzt werden, die den Schiebereglerwert verständlich macht, wie "Montag".

## Beispiele

```html
<p id="temperatureLabel">Oven Temperature</p>
<div
  role="meter"
  id="temperature"
  aria-valuenow="205"
  aria-valuemin="70"
  aria-valuemax="250"
  aria-labelledby="temperatureLabel">
  <div class="meter-color" aria-hidden="true"></div>
</div>
```

Die erste Regel bei der Verwendung von ARIA ist: "Wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und **ein ARIA**-Rolle, -Zustand oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie das."

```html
<label for="temperature">Oven Temperature</label>
<input type="range" id="temperature" value="205" min="70" max="250" step="5" />
```

Wenn wir native HTML-Semantiken mit {{HTMLElement('input')}} verwenden, erhalten wir Stile und Semantiken kostenlos.

## Werte

- `<number>`
  - : Eine Dezimalzahl, zwischen den minimalen und maximalen Werten.

## Zugehörige Schnittstellen

- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-valuenow`-Attributs wider.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-valuenow`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

Vererbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`range`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`<input type="range>`-Element `value`-Attribut](/de/docs/Web/HTML/Reference/Elements/input/range#value)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin).
