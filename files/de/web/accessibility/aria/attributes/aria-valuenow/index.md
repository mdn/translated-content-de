---
title: aria-valuenow
slug: Web/Accessibility/ARIA/Attributes/aria-valuenow
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das `aria-valuenow`-Attribut definiert den aktuellen Wert für ein `range`-Widget.

## Beschreibung

Das `aria-valuenow`-Attribut definiert den aktuellen Wert für `range`-Widgets. Es ist ähnlich dem `value`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Element/input/range), [`number`](/de/docs/Web/HTML/Element/input/number) und allen Datums-Zeit-Typen.

Wenn eine Rolle des Typs `range` erstellt wird, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht das `aria-valuenow`-Attribut die Definition eines aktuellen numerischen Werts zwischen den Minimal- und Maximalwerten. Die Minimal- und Maximalwerte werden mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) Rolle ist. Das `aria-valuenow`-Attribut wird bei allen Untertypen der `range`-Rollen verwendet.

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

Wenn kein bekannter Wert existiert, wie zum Beispiel, wenn eine Fortschrittsanzeige in einem unbestimmten Zustand ist, setzen Sie kein `aria-valuenow`-Attribut.

Wenn kein `aria-valuenow` gesetzt ist, wird keine Information über einen aktuellen Wert impliziert.

Wenn es bei Slidern und Spinbuttons verwendet wird, geben unterstützende Technologien den tatsächlichen Wert an die Benutzer weiter.

Wenn es bei Fortschrittsbalken und Bildlaufleisten verwendet wird, geben unterstützende Technologien den Wert den Benutzern in Prozent an. Wenn sowohl `aria-valuemin` als auch `aria-valuemax` definiert sind, wird der Prozentwert als Position im Bereich berechnet. Andernfalls wird der tatsächliche Wert als Prozentangabe übermittelt.

Wenn der zu verkündende Wert, entweder der tatsächliche Wert oder der Wert als Prozent, für Benutzer möglicherweise nicht klar ist, sollte das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)-Attribut verwendet werden, um eine benutzerfreundliche Darstellung des Wertes bereitzustellen. Wenn gesetzt, wird der valuetext-String anstelle des numerischen valuenow-Wertes angegeben. Zum Beispiel, wenn ein Slider die Wochentage darstellt, sodass das `aria-valuenow` des Wochentages eine Zahl ist, sollte die `aria-valuetext`-Eigenschaft auf eine Zeichenkette gesetzt werden, die den Slider-Wert verständlich macht, wie "Montag".

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

Die erste Regel bei der Verwendung von ARIA lautet: "Wenn Sie eine native Funktion mit der erforderlichen Semantik und dem erforderlichen Verhalten bereits eingebaut verwenden können, anstatt ein Element zweckentfremdend und ein ARIA-Attribut, -Zustand oder -Eigenschaft **hinzuzufügen**, um es zugänglich zu machen, dann tun Sie das."

```html
<label for="temperature">
  Oven Temperature
</p>
<input type="range" id="temperature"
  value="205" min="70" max="250" step="5"/>
</meter>
```

Wenn wir native HTML-Semantiken mit {{HTMLElement('input')}} verwenden, erhalten wir Stile und Semantik kostenlos.

## Werte

- `<number>`
  - : Eine Dezimalzahl, zwischen den minimalen und maximalen Werten.

## Zugehörige Schnittstellen

- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)-Eigenschaft, die Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ist, spiegelt den Wert des `aria-valuenow`-Attributs wider.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)-Eigenschaft, die Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle ist, spiegelt den Wert des `aria-valuenow`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

Geerbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`range` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/range_role)
- [`<input type="range>` Element `value` Attribut](/de/docs/Web/HTML/Element/input/range#value)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin).
