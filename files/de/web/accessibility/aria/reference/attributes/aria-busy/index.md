---
title: aria-busy
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-busy
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Verwendet in [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), zeigt der globale `aria-busy`-Zustand an, dass ein Element modifiziert wird und unterstützende Technologien möglicherweise warten sollten, bis die Änderungen abgeschlossen sind, bevor sie den Benutzer über das Update informieren.

Wenn mehrere Teile eines Live-Bereichs geladen werden müssen, bevor die Änderungen dem Benutzer angekündigt werden, setzen Sie `aria-busy="true"`, bis das Laden abgeschlossen ist. Danach setzen Sie es auf `aria-busy="false"`. Dies verhindert, dass unterstützende Technologien Änderungen ankündigen, bevor die Updates abgeschlossen sind.

## Beschreibung

Es gibt einen Inhaltsbereich, der aktualisiert wird. Die Updates sind wichtig und Sie möchten dem Benutzer mitteilen, wenn dieser modifiziert wurde, daher haben Sie ihn mit dem [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut in einen [ARIA-Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) umgewandelt. Sie möchten möglicherweise mehrere Komponenten dieses Bereichs gleichzeitig aktualisieren, aber Sie können nicht sicherstellen, dass alles gleichzeitig aktualisiert wird. Selbst wenn es sich um einen sehr wichtigen Live-Bereich mit `aria-live="assertive"` handelt, möchten Sie den Benutzer nicht mehrfach unterbrechen, während verschiedene Teile des Inhalts geladen werden. Hierbei kann `aria-busy` helfen.

Die `aria-busy`-Eigenschaft ist eine optionale Eigenschaft von Live-Bereichen, die den Wert `true` oder `false` haben kann. Das `aria-busy`-Attribut mit dem Wert `true` kann einem Element hinzugefügt werden, das gerade aktualisiert oder modifiziert wird, um die unterstützende Technologie darüber zu informieren, dass sie bis zum Abschluss der Modifikationen oder Änderungen warten soll, bevor sie den Inhalt dem Benutzer zugänglich macht. Verwenden Sie die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft des Objekts, um den Wert auf `false` zu setzen, wenn das Herunterladen abgeschlossen ist.

```js
ariaLiveElement.ariaBusy = "false";
```

Der Wert von [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) bestimmt, ob die Änderungen sofort angekündigt werden, sobald der Wert auf `false` geändert wird, oder ob die unterstützende Technologie wartet, bis die aktuelle Aufgabe abgeschlossen ist, bevor sie den Benutzer unterbricht.

### Innerhalb eines `feed`

Wenn ein Element mit der Rolle [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) auf `aria-busy` gesetzt wird, werden die Rendering-Änderungen, die innerhalb des Feeds auftreten, nicht angekündigt, mit Ausnahme von benutzerinitiierten Änderungen.

### Innerhalb eines `widget`

Wenn Änderungen an einem gerenderten Widget einen Zustand schaffen würden, in dem das Widget während der Skriptausführung erforderliche eigene Elemente vermisst, setzen Sie `aria-busy` während des Update-Prozesses auf dem Widget auf `true`. Zum Beispiel, wenn ein gerendertes Baumgitter mehrere Zweige aktualisiert, die nicht notwendigerweise gleichzeitig gerendert werden, wäre eine Alternative zur Ersetzung des gesamten Baums in einem einzigen Update, den Baum als beschäftigt zu markieren, während jeder der Zweige modifiziert wird.

## Werte

- false (Standard):
  - : Es werden keine Updates für das Element erwartet.
- true
  - : Das Element wird aktualisiert.

## Zugehörige Schnittstellen

- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft, Teil der Schnittstelle jedes Elements, spiegelt den Wert des `aria-busy`-Attributs wider, das anzeigt, ob ein Element modifiziert wird.

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
const el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
