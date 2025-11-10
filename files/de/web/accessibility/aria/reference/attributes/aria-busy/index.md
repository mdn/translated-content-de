---
title: "ARIA: aria-busy-Attribut"
short-title: aria-busy
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-busy
l10n:
  sourceCommit: 3f5e0667617e7c472a3ce99dc0afdb0999044341
---

Das `aria-busy`-Attribut ist ein globaler ARIA-Zustand, der anzeigt, ob ein Element derzeit verändert wird. Es hilft unterstützenden Technologien zu verstehen, dass Änderungen am Inhalt noch nicht abgeschlossen sind und dass es möglicherweise ratsam ist, mit der Information des Nutzers über die Aktualisierung zu warten. Während `aria-busy` häufig in [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwendet wird, um Ankündigungen zu verzögern, bis die Aktualisierungen abgeschlossen sind, kann es auch außerhalb von Live-Regionen verwendet werden – zum Beispiel in Widgets oder Feeds –, um laufende Änderungen oder Ladevorgänge anzuzeigen.

Wenn mehrere Teile einer Live-Region geladen werden müssen, bevor die Änderungen dem Nutzer angekündigt werden, setzen Sie `aria-busy="true"`, bis das Laden abgeschlossen ist. Dann setzen Sie auf `aria-busy="false"`. Dies verhindert, dass unterstützende Technologien Änderungen ankündigen, bevor die Updates abgeschlossen sind.

## Beschreibung

Es gibt einen Abschnitt mit Inhalten, der aktualisiert wird. Die Aktualisierungen sind wichtig und Sie möchten den Nutzer darüber informieren, wenn er geändert wurde, daher haben Sie ihn in eine [ARIA-Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) mit dem [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut umgewandelt. Möglicherweise möchten Sie mehrere Komponenten dieses Abschnitts gleichzeitig aktualisieren, aber Sie können sich nicht sicher sein, dass alles gleichzeitig aktualisiert wird. Selbst wenn es eine sehr wichtige Live-Region mit `aria-live="assertive"` ist, möchten Sie den Nutzer nicht mehrfach unterbrechen, wenn verschiedene Teile der Inhalte geladen werden. Hier kann `aria-busy` helfen.

Die `aria-busy`-Eigenschaft ist eine optionale Eigenschaft von Live-Regionen, die den Wert `true` oder `false` haben kann. Das `aria-busy`-Attribut mit dem Wert `true` kann einem Element hinzugefügt werden, das derzeit aktualisiert oder geändert wird, um der unterstützenden Technologie mitzuteilen, dass sie warten sollte, bis die Änderungen abgeschlossen sind, bevor der Inhalt dem Nutzer zugänglich gemacht wird. Verwenden Sie die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft des Objekts, um den Wert auf `false` zu ändern, wenn der Download abgeschlossen ist.

```js
ariaLiveElement.ariaBusy = "false";
```

Der Wert von [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) bestimmt, ob die Änderungen sofort bei der Änderung des Wertes auf `false` angekündigt werden oder ob die unterstützende Technologie wartet, bis die aktuelle Aufgabe abgeschlossen ist, bevor sie den Nutzer unterbricht.

### Innerhalb eines `feed`

Wenn ein Element mit der Rolle [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) `aria-busy` auf `true` gesetzt hat, werden die darstellenden Änderungen, die innerhalb des Feeds auftreten, nicht angekündigt, mit Ausnahme von benutzerinitiierten Änderungen.

### Innerhalb eines `widget`

Wenn Änderungen an einem gerenderten Widget einen Zustand erzeugen würden, in dem dem Widget während der Skriptausführung erforderliche besessene Elemente fehlen, setzen Sie `aria-busy` auf `true` auf dem Widget während des Aktualisierungsprozesses. Wenn beispielsweise ein gerasterter Baum mehrere Äste aktualisiert, die möglicherweise nicht gleichzeitig gerendert werden, wäre eine Alternative zum Ersetzen des gesamten Baums in einem einzigen Update, den Baum als beschäftigt zu kennzeichnen, während jeder der Äste modifiziert wird.

## Werte

- false (Standard):
  - : Es sind keine Aktualisierungen für das Element zu erwarten.
- true
  - : Das Element wird aktualisiert.

## Zugehörige Schnittstellen

- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft, Teil der Schnittstelle jedes Elements, spiegelt den Wert des `aria-busy`-Attributs wider, das angibt, ob ein Element modifiziert wird.

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

- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
