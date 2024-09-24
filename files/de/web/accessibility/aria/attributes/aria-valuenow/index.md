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

Wenn eine `range`-Rolle, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role), auf einem nicht-semantischen Element erstellt wird, ermöglicht `aria-valuenow` die Definition eines aktuellen numerischen Wertes zwischen den minimalen und maximalen Werten. Die minimalen und maximalen Werte werden mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role)-Rolle selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte Rolle"](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) ist. Das `aria-valuenow`-Attribut wird bei allen Untertypen der `range`-Rollen verwendet.

```html
<p id="birthyearLabel">In welchem Jahr wurden Sie geboren?</p>
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

Verwenden Sie semantische HTML-Elemente, wann immer es möglich ist:

```html
<label for="birthyear">In welchem Jahr wurden Sie geboren?</label>
<input type="number" id="birthyear" value="1984" min="1900" max="2021" />
```

Wenn kein bekannter Wert vorhanden ist, wie zum Beispiel wenn ein Fortschrittsbalken in einem unbestimmten Zustand ist, setzen Sie kein `aria-valuenow`-Attribut.

Wenn kein `aria-valuenow` gesetzt ist, wird keine Information über einen aktuellen Wert impliziert.

Wird es mit Slidern und Spinbuttons verwendet, geben unterstützende Technologien den tatsächlichen Wert an die Benutzer weiter.

Wird es mit Fortschrittsbalken und Bildlaufleisten verwendet, geben unterstützende Technologien den Wert in Prozent an. Wenn sowohl `aria-valuemin` als auch `aria-valuemax` definiert sind, wird der Prozentwert als Position im Bereich berechnet. Andernfalls wird der tatsächliche Wert als Prozent angegeben.

Wenn der anzukündigende Wert, entweder der tatsächliche Wert oder der Wert in Prozent, für Benutzer nicht klar sein könnte, sollte das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) verwendet werden, um eine benutzerfreundliche Darstellung des Wertes bereitzustellen. Wenn gesetzt, wird der valuetext-String anstelle des numerischen Wertes von valuenow angekündigt. Zum Beispiel, wenn ein Slider die Wochentage repräsentiert und der `aria-valuenow`-Wert eine Zahl ist, sollte die `aria-valuetext`-Eigenschaft auf einen String gesetzt werden, der den Slider-Wert verständlich macht, wie "Montag".

## Beispiele

```html
<p id="temperatureLabel">Ofentemperatur</p>
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

Die erste Regel bei der Verwendung von ARIA lautet: "Wenn Sie eine native Funktion mit den erforderlichen Semantiken und Verhaltensweisen verwenden können, anstatt ein Element umzufunktionieren und **eine** ARIA-Rolle, einen Zustand oder eine Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

```html
<label for="temperature">
  Ofentemperatur
</label>
<input type="range" id="temperature"
  value="205" min="70" max="250" step="5"/>
```

Wenn wir native HTML-Semantiken mit {{HTMLElement('input')}} verwenden, erhalten wir automatisch Stile und Semantiken.

## Werte

- `<number>`
  - : Eine Dezimalzahl, zwischen den minimalen und maximalen Werten.

## Zugehörige Schnittstellen

- {{domxref("Element.ariaValueNow")}}
  - : Die [`ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-valuenow`-Attributs wider.
- {{domxref("ElementInternals.ariaValueNow")}}
  - : Die [`ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-valuenow`-Attributs wider.

## Zugehörige Rollen

Verwendet in Rollen:

- [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role)
- [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role)
- [`separator`](/de/docs/Web/Accessibility/ARIA/Roles/separator_role)
- [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role)
- [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role)

Vererbt in Rollen:

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
