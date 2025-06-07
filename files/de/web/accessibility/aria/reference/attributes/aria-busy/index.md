---
title: "ARIA: aria-busy Attribute"
short-title: aria-busy
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-busy
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Das globale `aria-busy`-Attribut, das in [ARIA-Live-Bereichen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) verwendet wird, zeigt an, dass ein Element gerade modifiziert wird und unterstützende Technologien möglicherweise warten sollten, bis die Änderungen abgeschlossen sind, bevor sie den Nutzer über die Aktualisierung informieren.

Wenn mehrere Teile eines Live-Bereichs geladen werden müssen, bevor Änderungen dem Nutzer angekündigt werden, setzen Sie `aria-busy="true"`, bis das Laden abgeschlossen ist. Dann auf `aria-busy="false"` setzen. Das verhindert, dass unterstützende Technologien Änderungen ankündigen, bevor die Aktualisierungen abgeschlossen sind.

## Beschreibung

Es gibt einen Abschnitt mit Inhalten, der aktualisiert wird. Die Aktualisierungen sind wichtig und Sie möchten den Nutzer darüber informieren, wenn er modifiziert wurde. Daher haben Sie ihn in einen [ARIA-Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) mit dem [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut umgewandelt. Möglicherweise möchten Sie mehrere Komponenten dieses Abschnitts gleichzeitig aktualisieren, aber Sie können sich nicht sicher sein, dass alles gleichzeitig aktualisiert wird. Selbst wenn es sich um einen sehr wichtigen Live-Bereich mit `aria-live="assertive"` handelt, möchten Sie den Nutzer nicht mehrmals unterbrechen, während verschiedene Teile des Inhalts geladen werden. Hierbei kann `aria-busy` helfen.

Die `aria-busy`-Eigenschaft ist eine optionale Eigenschaft von Live-Bereichen, die den Wert `true` oder `false` haben kann. Das `aria-busy`-Attribut mit dem Wert `true` kann einem Element hinzugefügt werden, das aktuell aktualisiert oder modifiziert wird, um der unterstützenden Technologie mitzuteilen, dass sie warten soll, bis die Modifikationen oder Änderungen abgeschlossen sind, bevor der Inhalt dem Nutzer angezeigt wird. Verwenden Sie die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft des Objekts, um den Wert auf `false` zu ändern, wenn das Herunterladen abgeschlossen ist.

```js
ariaLiveElement.ariaBusy = "false";
```

Der Wert von [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) bestimmt, ob die Änderungen sofort nach dem Ändern des Werts auf `false` angekündigt werden oder ob die unterstützende Technologie wartet, bis die aktuelle Aufgabe abgeschlossen ist, bevor sie den Nutzer unterbricht.

### Innerhalb eines `feed`

Wenn ein Element mit der Rolle [`feed`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) auf `aria-busy` zu `true` eingestellt ist, werden die Änderungen, die innerhalb des Feeds auftreten, nicht angekündigt, mit Ausnahme von benutzerinitiierten Änderungen.

### Innerhalb eines `widget`

Wenn Änderungen an einem gerenderten Widget einen Zustand schaffen würden, in dem dem Widget während der Skriptausführung erforderliche untergeordnete Elemente fehlen, setzen Sie `aria-busy` auf `true` auf dem Widget während des Aktualisierungsprozesses. Zum Beispiel, wenn ein gerendertes Baumgitter mehrere Äste aktualisiert, die nicht unbedingt gleichzeitig gerendert werden, wäre eine Alternative zum Ersetzen des gesamten Baumes in einem einzelnen Update, den Baum als beschäftigt zu markieren, während jeder der Äste modifiziert wird.

## Werte

- false (Standard):
  - : Es werden keine Updates für das Element erwartet.
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

Wird in **ALLE** Rollen verwendet

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
