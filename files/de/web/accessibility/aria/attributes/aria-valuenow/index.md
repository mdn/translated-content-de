---
title: aria-valuenow
slug: Web/Accessibility/ARIA/Attributes/aria-valuenow
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Das Attribut `aria-valuenow` definiert den aktuellen Wert für ein `range`-Widget.

## Beschreibung

Das Attribut `aria-valuenow` definiert den aktuellen Wert für `range`-Widgets. Es ist ähnlich dem `value`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Element/input/range), [`number`](/de/docs/Web/HTML/Element/input/number) und allen Datums-Zeit-Typen.

Beim Erstellen einer `range`-Rollen-Typ, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht `aria-valuenow` die Definition eines aktuellen numerischen Wertes zwischen den minimalen und maximalen Werten. Die minimalen und maximalen Werte sind mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die Verwendung der [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role)-Rolle selbst sollte **NICHT** erfolgen, da sie als ["abstrakt"](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) gilt. Das Attribut `aria-valuenow` wird auf allen Untertypen der `range`-Rollen verwendet.

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

Wenn kein bekannter Wert vorhanden ist, wie zum Beispiel wenn eine Fortschrittsanzeige in einem unbestimmten Zustand ist, setzen Sie kein `aria-valuenow`-Attribut.

Wenn kein `aria-valuenow` gesetzt ist, wird keine Information über einen aktuellen Wert impliziert.

Wenn es mit Slidern und Spinbuttons verwendet wird, kündigen unterstützende Technologien den tatsächlichen Wert den Benutzern an.

Wenn es mit Fortschrittsbalken und Scrollbalken verwendet wird, kündigen unterstützende Technologien den Wert als Prozentsatz den Benutzern an. Wenn `aria-valuemin` und `aria-valuemax` beide definiert sind, wird der Prozentwert als Position auf der Skala berechnet. Andernfalls wird der tatsächliche Wert als Prozentsatz angekündigt.

Wenn der anzukündigende Wert, entweder der tatsächliche Wert oder der Wert als Prozentsatz, möglicherweise nicht klar für die Benutzer ist, sollte das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) verwendet werden, um eine benutzerfreundliche Darstellung des Wertes zu bieten. Wenn gesetzt, wird die `valuetext`-Zeichenfolge anstelle des `valuenow`-numerischen Wertes angekündigt. Zum Beispiel, wenn ein Slider die Wochentage darstellt und `aria-valuenow` der Tag der Woche ist, sollte die `aria-valuetext`-Eigenschaft auf eine Zeichenfolge gesetzt werden, die den Sliderwert verständlich macht, wie "Montag".

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

Die erste Regel bei der Verwendung von ARIA lautet: "Wenn Sie eine native Funktion mit den bereits integrierten Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und eine ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

```html
<label for="temperature">
  Oven Temperature
</p>
<input type="range" id="temperature"
  value="205" min="70" max="250" step="5"/>
</meter>
```

Wenn wir native HTML-Semantiken mit {{HTMLElement('input')}} verwenden, erhalten wir kostenlos Stile und Semantiken.

## Werte

- `<number>`
  - : Eine Dezimalzahl, zwischen den minimalen und maximalen Werten.

## Zugehörige Schnittstellen

- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des Attributs `aria-valuenow` wider.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des Attributs `aria-valuenow` wider.

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

- [`range` role](/de/docs/Web/Accessibility/ARIA/Roles/range_role)
- [`<input type="range>` element `value` attribute](/de/docs/Web/HTML/Element/input/range#value)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin).
