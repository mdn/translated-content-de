---
title: aria-valuenow
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das Attribut `aria-valuenow` definiert den aktuellen Wert für ein `range`-Widget.

## Beschreibung

Das Attribut `aria-valuenow` definiert den aktuellen Wert für Range-Widgets. Es ist ähnlich dem `value`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Element/input/range), [`number`](/de/docs/Web/HTML/Element/input/number) und allen Datums-Zeit-Typen.

Beim Erstellen einer Rolle vom Range-Typ, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht `aria-valuenow` die Definition eines aktuellen numerischen Wertes zwischen den Minimal- und Maximalwerten. Die Minimal- und Maximalwerte sind mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) Rolle ist. Das Attribut `aria-valuenow` wird in allen Untertypen der Range-Rollen verwendet.

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

Verwenden Sie semantische HTML-Elemente, wann immer Sie können:

```html
<label for="birthyear">What year were you born?</label>
<input type="number" id="birthyear" value="1984" min="1900" max="2021" />
```

Wenn kein bekannter Wert vorhanden ist, wie wenn eine Fortschrittsanzeige in einem unbestimmten Zustand ist, setzen Sie kein `aria-valuenow`-Attribut.

Wenn kein `aria-valuenow` gesetzt ist, wird keine Information über einen aktuellen Wert impliziert.

Wenn es mit Slidern und Spinbuttons verwendet wird, kündigen unterstützende Technologien den tatsächlichen Wert den Nutzern an.

Wenn es mit Fortschrittsbalken und Scrollbalken verwendet wird, kündigen unterstützende Technologien den Wert den Nutzern als Prozentsatz an. Wenn `aria-valuemin` und `aria-valuemax` beide definiert sind, wird der Prozentwert als eine Position im Bereich berechnet. Andernfalls wird der tatsächliche Wert als Prozentsatz angekündigt.

Wenn der anzukündigende Wert, entweder der tatsächliche Wert oder der Wert als Prozentsatz, den Nutzern möglicherweise nicht klar ist, sollte das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) verwendet werden, um eine benutzerfreundliche Darstellung des Wertes bereitzustellen. Wenn gesetzt, wird die Valuetext-Zeichenkette anstelle des numerischen Wertes von Valuenow angekundigt. Zum Beispiel, wenn ein Slider die Tage der Woche repräsentiert, sollte die `aria-valuetext` Eigenschaft auf eine Zeichenkette gesetzt werden, die den Slider-Wert verständlich macht, wie z.B. "Montag".

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

Die erste Regel der ARIA-Nutzung lautet: "wenn Sie ein natives Feature mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, die bereits integriert sind, anstatt ein Element umzupropeln und **ein ARIA-Rolle, Zustand oder Eigenschaft hinzuzufügen**, um es zugänglich zu machen, dann tun Sie dies."

```html
<label for="temperature">Oven Temperature</label>
<input type="range" id="temperature" value="205" min="70" max="250" step="5" />
```

Wenn wir native HTML-Semantiken mit {{HTMLElement('input')}} verwenden, erhalten wir Stile und Semantiken kostenlos.

## Werte

- `<number>`
  - : Eine Dezimalzahl, zwischen den Minimal- und Maximalwerten.

## Zugehörige Schnittstellen

- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des Attributs `aria-valuenow` wider.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des Attributs `aria-valuenow` wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

Geerbt in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [`range`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [`<input type="range">` Element `value` Attribut](/de/docs/Web/HTML/Element/input/range#value)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)
