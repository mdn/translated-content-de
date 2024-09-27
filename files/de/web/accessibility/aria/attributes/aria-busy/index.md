---
title: aria-busy
slug: Web/Accessibility/ARIA/Attributes/aria-busy
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

In [ARIA Live-Bereichen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) zeigt der globale `aria-busy`-Status an, dass ein Element modifiziert wird und unterstützende Technologien eventuell warten sollten, bis die Änderungen abgeschlossen sind, bevor dem Benutzer das Update mitgeteilt wird.

Wenn mehrere Teile eines Live-Bereichs geladen werden müssen, bevor Änderungen dem Benutzer angekündigt werden, setzen Sie `aria-busy="true"` bis das Laden abgeschlossen ist. Dann setzen Sie `aria-busy="false"`. Dies verhindert, dass unterstützende Technologien Änderungen ankündigen, bevor die Aktualisierungen abgeschlossen sind.

## Beschreibung

Es gibt einen Abschnitt von Inhalten, der aktualisiert wird. Die Updates sind wichtig und Sie möchten den Benutzer wissen lassen, wann er modifiziert wurde, also haben Sie ihn in einen [ARIA Live-Bereich](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) mit dem [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)-Attribut umgewandelt. Sie möchten möglicherweise mehrere Komponenten dieses Abschnitts gleichzeitig aktualisieren, können aber nicht sicher sein, dass alles gleichzeitig aktualisiert wird. Selbst wenn es sich um einen sehr wichtigen Live-Bereich mit `aria-live="assertive"` handelt, möchten Sie den Benutzer nicht mehrfach unterbrechen, während verschiedene Teile des Inhalts geladen werden. Hier kann `aria-busy` helfen.

Die `aria-busy`-Eigenschaft ist eine optionale Eigenschaft von Live-Bereichen, die den Wert `true` oder `false` haben kann. Das `aria-busy`-Attribut mit dem Wert `true` kann zu einem Element hinzugefügt werden, das derzeit aktualisiert oder modifiziert wird, um der unterstützenden Technologie mitzuteilen, dass sie warten soll, bis die Modifikationen oder Änderungen abgeschlossen sind, bevor der Benutzer den Inhalt sieht. Verwenden Sie die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft des Objekts, um den Wert auf `false` zu ändern, wenn das Herunterladen abgeschlossen ist.

```js
ariaLiveElement.ariaBusy = "false";
```

Der Wert von [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) bestimmt, ob die Änderungen sofort bei der Änderung des Werts auf `false` angekündigt werden, oder ob die unterstützende Technologie wartet, bis die aktuelle Aufgabe abgeschlossen ist, bevor der Benutzer unterbrochen wird.

### Innerhalb eines `feed`

Wenn ein Element mit der [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role)-Rolle `aria-busy` auf `true` gesetzt hat, werden die Renderänderungen innerhalb des Feeds nicht angekündigt, mit Ausnahme von vom Benutzer initiierten Änderungen.

### Innerhalb eines `widget`

Wenn Änderungen an einem gerenderten Widget einen Zustand erzeugen würden, in dem dem Widget während der Skriptausführung erforderliche untergeordnete Elemente fehlen, setzen Sie `aria-busy` während des Update-Prozesses auf `true`. Beispielsweise wenn ein gerasterter Baum mehrere Äste aktualisiert, die nicht unbedingt gleichzeitig gerendert werden, wäre eine Alternative zum Ersetzen des gesamten Baums in einem einzigen Update, den Baum als beschäftigt zu markieren, während jeder der Äste modifiziert wird.

## Werte

- false (Standard):
  - : Es sind keine Updates für das Element zu erwarten.
- true
  - : Das Element wird aktualisiert.

## Zugehörige Schnittstellen

- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft, Teil jeder Element-Schnittstelle, spiegelt den Wert des `aria-busy`-Attributs wider, das angibt, ob ein Element modifiziert wird.

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

- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
