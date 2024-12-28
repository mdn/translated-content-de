---
title: aria-valuenow
slug: Web/Accessibility/ARIA/Attributes/aria-valuenow
l10n:
  sourceCommit: 93dbdf2aa1a8cb90497b3256b57c14d73200b0f3
---

{{AccessibilitySidebar}}

Das Attribut `aria-valuenow` definiert den aktuellen Wert für ein `range`-Widget.

## Beschreibung

Das Attribut `aria-valuenow` definiert den aktuellen Wert für Bereiche-Widgets. Es ist ähnlich dem `value`-Attribut von {{HTMLElement('progress')}}, {{HTMLElement('meter')}} und {{HTMLElement('input')}} vom Typ [`range`](/de/docs/Web/HTML/Element/input/range), [`number`](/de/docs/Web/HTML/Element/input/number) und alle Datums-Zeit-Typen.

Bei der Erstellung einer Bereichsrolle, einschließlich [`meter`](/de/docs/Web/Accessibility/ARIA/Roles/meter_role), [`scrollbar`](/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role), [`slider`](/de/docs/Web/Accessibility/ARIA/Roles/slider_role) und [`spinbutton`](/de/docs/Web/Accessibility/ARIA/Roles/spinbutton_role) auf einem nicht-semantischen Element, ermöglicht `aria-valuenow` die Definition eines aktuellen numerischen Werts zwischen den Minimal- und Maximalwerten. Die Minimal- und Maximalwerte werden mit [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) und [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) definiert.

> [!WARNING]
> Die [`range`](/de/docs/Web/Accessibility/ARIA/Roles/range_role)-Rolle selbst sollte **NICHT** verwendet werden, da sie eine ["abstrakte"](/de/docs/Web/Accessibility/ARIA/Roles#6._abstract_roles) Rolle ist. Das Attribut `aria-valuenow` wird in allen Untertypen der Bereichsrollen verwendet.

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

Verwenden Sie semantische HTML-Elemente, wenn möglich:

```html
<label for="birthyear">What year were you born?</label>
<input type="number" id="birthyear" value="1984" min="1900" max="2021" />
```

Wenn kein bekannter Wert vorliegt, wie z.B. wenn eine Fortschrittsanzeige in einem unbestimmten Zustand ist, setzen Sie kein `aria-valuenow`-Attribut.

Wenn kein `aria-valuenow` gesetzt ist, wird keine Information über einen aktuellen Wert impliziert.

Bei der Verwendung mit Slidern und Spinbuttons kündigen assistive Technologien den tatsächlichen Wert den Benutzern an.

Bei der Verwendung mit Fortschrittsbalken und Scrollbars kündigen assistive Technologien den Wert als Prozentsatz an. Wenn `aria-valuemin` und `aria-valuemax` beide definiert sind, wird der Prozentwert als Position im Bereich berechnet. Andernfalls wird der tatsächliche Wert als Prozentsatz angekündigt.

Wenn der anzukündigende Wert, entweder der tatsächliche Wert oder der Wert als Prozentsatz, für Benutzer nicht klar sein sollte, sollte das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) verwendet werden, um eine benutzerfreundliche Darstellung des Werts zu bieten. Wenn gesetzt, wird der `valuetext`-String anstelle des numerischen `valuenow`-Werts angekündigt. Wenn beispielsweise ein Slider die Wochentage repräsentiert und `aria-valuenow` für den Wochentag eine Zahl ist, sollte die `aria-valuetext`-Eigenschaft auf einen Text gesetzt werden, der den Slider-Wert verständlich macht, wie "Montag".

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

Die erste Regel bei der Verwendung von ARIA ist: "Wenn Sie eine native Funktion mit den benötigten Semantiken und Verhaltensweisen direkt verwenden können, anstatt ein Element neu zu nutzen und **ein** ARIA-Rolle, -Status oder -Eigenschaft hinzuzufügen, um es zugänglich zu machen, dann tun Sie dies."

```html
<label for="temperature">Oven Temperature</label>
<input type="range" id="temperature" value="205" min="70" max="250" step="5" />
```

Wenn wir native HTML-Semantiken mit {{HTMLElement('input')}} einsetzen, erhalten wir Stil und Semantik kostenlos.

## Werte

- `<number>`
  - : Eine Dezimalzahl, zwischen dem Mindest- und Höchstwert.

## Zugehörige Schnittstellen

- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-valuenow`-Attributs wider.
- [`ElementInternals.ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)
  - : Die [`ariaValueNow`](/de/docs/Web/API/ElementInternals/ariaValueNow)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-valuenow`-Attributs wider.

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

- [`range` role](/de/docs/Web/Accessibility/ARIA/Roles/range_role)
- [`<input type="range>` Element `value` Attribut](/de/docs/Web/HTML/Element/input/range#value)
- [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext)
- [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax)
- [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin).
