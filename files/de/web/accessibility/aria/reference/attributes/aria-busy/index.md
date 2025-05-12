---
title: "ARIA: aria-busy-Attribut"
short-title: aria-busy
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-busy
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-busy`-Attribut, das in [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwendet wird, gibt an, dass ein Element gerade bearbeitet wird, und dass unterstützende Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie den Benutzer über das Update informieren.

Wenn mehrere Teile eines Live-Bereichs geladen werden müssen, bevor dem Benutzer Änderungen angekündigt werden, setzen Sie `aria-busy="true"`, bis das Laden abgeschlossen ist. Danach setzen Sie es auf `aria-busy="false"`. Auf diese Weise wird verhindert, dass unterstützende Technologien die Änderungen ankündigen, bevor die Updates abgeschlossen sind.

## Beschreibung

Es gibt einen Inhaltsbereich, der aktualisiert wird. Die Updates sind wichtig und Sie möchten den Benutzer wissen lassen, wann er geändert wurde, daher haben Sie ihn mit dem [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut in einen [ARIA-Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) umgewandelt. Möglicherweise möchten Sie mehrere Komponenten dieses Abschnitts gleichzeitig aktualisieren, aber Sie können nicht sicher sein, dass alles gleichzeitig aktualisiert wird. Selbst wenn es sich um einen sehr wichtigen Live-Bereich mit `aria-live="assertive"` handelt, möchten Sie den Benutzer nicht mehrmals unterbrechen, während verschiedene Teile des Inhalts geladen werden. Hier kann `aria-busy` helfen.

Die `aria-busy`-Eigenschaft ist eine optionale Eigenschaft von Live-Bereichen, die den Wert `true` oder `false` haben kann. Das `aria-busy`-Attribut mit dem Wert `true` kann zu einem Element hinzugefügt werden, das gerade aktualisiert oder geändert wird, um der unterstützenden Technologie mitzuteilen, dass sie warten soll, bis die Änderungen abgeschlossen sind, bevor der Inhalt dem Benutzer angezeigt wird. Verwenden Sie die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft des Objekts, um den Wert auf `false` zu ändern, wenn der Download abgeschlossen ist.

```js
ariaLiveElement.ariaBusy = "false";
```

Der Wert von [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) bestimmt, ob die Änderungen sofort angekündigt werden, wenn der Wert auf `false` geändert wird, oder ob die unterstützende Technologie wartet, bis die aktuelle Aufgabe abgeschlossen ist, bevor der Benutzer unterbrochen wird.

### Innerhalb eines `feed`

Wenn ein Element mit der Rolle [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) auf `aria-busy` gesetzt ist, werden die Rendering-Änderungen, die innerhalb des Feeds auftreten, nicht bekannt gegeben, mit Ausnahme von benutzerinitiierten Änderungen.

### Innerhalb eines `widget`

Wenn Änderungen an einem gerenderten Widget einen Zustand erzeugen würden, in dem dem Widget während der Skriptausführung erforderliche eigene Elemente fehlen, setzen Sie `aria-busy` auf `true` für das Widget während des Aktualisierungsvorgangs. Wenn beispielsweise ein gerendertes Tree-Grid mehrere Äste aktualisiert, die möglicherweise nicht gleichzeitig gerendert werden, wäre eine Alternative dazu, den gesamten Baum in einem einzigen Update zu ersetzen, das Markieren des Baums als beschäftigt, während jeder der Äste bearbeitet wird.

## Werte

- false (Standard):
  - : Es werden keine Updates für das Element erwartet.
- true
  - : Das Element wird aktualisiert.

## Zugehörige Schnittstellen

- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft, die Teil der Schnittstelle jedes Elements ist, spiegelt den Wert des `aria-busy`-Attributs wider, welches angibt, ob ein Element bearbeitet wird.

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

Wird in **ALLEN** Rollen verwendet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
