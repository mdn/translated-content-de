---
title: "ARIA: aria-valuenow-Attribut"
short-title: aria-valuenow
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das Attribut `aria-valuenow` definiert den aktuellen Wert eines `range`-Widgets.

## Beschreibung

Das Attribut `aria-valuenow` definiert den aktuellen Wert von Bereichs-Widgets. Es ähnelt dem Attribut `value` von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} mit den Typen [`range`](/de/docs/Web/HTML/Reference/Elements/input/range), [`number`](/de/docs/Web/HTML/Reference/Elements/input/number) sowie allen Datums- und Uhrzeittypen.

Wenn eine Bereichsrolle wie [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role) oder [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role) für ein Element ohne entsprechende Semantik erstellt wird, ermöglicht `aria-valuenow` die Angabe eines aktuellen numerischen Werts zwischen dem Mindest- und dem Höchstwert. Diese Werte werden mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die Rolle [`range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role) selbst sollte **NICHT** verwendet werden, da sie ["abstrakt"](/de/docs/Web/Accessibility/ARIA/Reference/Roles#6._abstract_roles) ist. Das Attribut `aria-valuenow` wird bei allen Untertypen der Bereichsrollen verwendet.

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

Verwenden Sie nach Möglichkeit semantische HTML-Elemente:

```html
<label for="birthyear">What year were you born?</label>
<input type="number" id="birthyear" value="1984" min="1900" max="2021" />
```

Wenn kein Wert bekannt ist, etwa wenn sich ein Fortschrittsbalken in einem unbestimmten Zustand befindet, setzen Sie das Attribut `aria-valuenow` nicht.

Ist `aria-valuenow` nicht gesetzt, wird damit keine Information über einen aktuellen Wert vermittelt.

Bei Slidern und Spinbuttons geben assistive Technologien den tatsächlichen Wert aus.

Bei Fortschrittsbalken und Scrollbars geben assistive Technologien den Wert als Prozentsatz aus. Wenn sowohl `aria-valuemin` als auch `aria-valuemax` definiert sind, wird der Prozentsatz anhand der Position innerhalb des Wertebereichs berechnet. Andernfalls wird der tatsächliche Wert als Prozentsatz ausgegeben.

Wenn der auszugebende Wert – sei es der tatsächliche Wert oder ein Prozentsatz – für Nutzende möglicherweise nicht verständlich ist, sollte das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) verwendet werden, um eine verständliche Darstellung des Werts bereitzustellen. Wenn es gesetzt ist, wird die Zeichenfolge von `aria-valuetext` anstelle des numerischen Werts von `aria-valuenow` ausgegeben. Stellt ein Slider beispielsweise die Wochentage dar, sodass `aria-valuenow` für einen Wochentag eine Zahl ist, sollte die Eigenschaft `aria-valuetext` auf eine Zeichenfolge wie „Montag“ gesetzt werden, die den Wert des Sliders verständlich macht.

## Werte

- `<number>`
  - : Eine Dezimalzahl zwischen dem Mindest- und dem Höchstwert.

## Zugehörige Schnittstellen

- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Die Eigenschaft [`ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-valuenow` wider.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Die Eigenschaft [`ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-valuenow` wider.

## Zugehörige Rollen

Wird in folgenden Rollen verwendet:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

Wird an folgende Rollen vererbt:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/meter_role)
- [`progressbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/spinbutton_role)

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

Die erste Regel für die Verwendung von ARIA lautet: „Wenn Sie eine native Funktion verwenden können, die die benötigte Semantik und das benötigte Verhalten bereits mitbringt, statt ein Element zweckzuentfremden und eine ARIA-Rolle, einen ARIA-Zustand oder eine ARIA-Eigenschaft **hinzuzufügen**, um es zugänglich zu machen, dann tun Sie das.“

```html
<label for="temperature">Oven Temperature</label>
<input type="range" id="temperature" value="205" min="70" max="250" step="5" />
```

Wenn wir mit {{HTMLElement('input')}} native HTML-Semantik verwenden, erhalten wir Gestaltung und Semantik ohne zusätzlichen Aufwand.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Rolle `range`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/range_role)
- [Attribut `value` des Elements `<input type="range>`](/de/docs/Web/HTML/Reference/Elements/input/range#value)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin).
