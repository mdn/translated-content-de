---
title: aria-busy
slug: Web/Accessibility/ARIA/Attributes/aria-busy
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Verwendet in [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), zeigt der globale `aria-busy`-Zustand an, dass ein Element modifiziert wird und dass unterstützende Technologien möglicherweise warten sollten, bis die Änderungen abgeschlossen sind, bevor der Benutzer über das Update informiert wird.

Wenn mehrere Teile einer Live-Region geladen werden müssen, bevor Änderungen dem Benutzer angekündigt werden, setzen Sie `aria-busy="true"`, bis das Laden abgeschlossen ist. Setzen Sie dann auf `aria-busy="false"`. Dies verhindert, dass unterstützende Technologien Änderungen ankündigen, bevor die Updates abgeschlossen sind.

## Beschreibung

Es gibt einen Abschnitt von Inhalten, der aktualisiert wird. Die Updates sind wichtig, und Sie möchten den Benutzer wissen lassen, wann er modifiziert wurde. Daher haben Sie ihn in eine [ARIA-Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) mit dem Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) umgewandelt. Möglicherweise möchten Sie mehrere Komponenten dieses Abschnitts gleichzeitig aktualisieren, können jedoch nicht sicherstellen, dass alles gleichzeitig aktualisiert wird. Selbst wenn es sich um eine sehr wichtige Live-Region mit `aria-live="assertive"` handelt, möchten Sie den Benutzer nicht mehrfach unterbrechen, während verschiedene Teile des Inhalts geladen werden. Hier kann `aria-busy` helfen.

Die `aria-busy`-Eigenschaft ist eine optionale Eigenschaft von Live-Regionen, die den Wert `true` oder `false` haben kann. Das `aria-busy`-Attribut mit einem Wert von `true` kann zu einem Element hinzugefügt werden, das gerade aktualisiert oder modifiziert wird, um der unterstützenden Technologie mitzuteilen, dass sie warten soll, bis die Modifikationen oder Änderungen abgeschlossen sind, bevor der Inhalt dem Benutzer zugänglich gemacht wird. Verwenden Sie die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft des Objekts, um den Wert auf `false` zu setzen, wenn der Download abgeschlossen ist.

```js
ariaLiveElement.ariaBusy = "false";
```

Der Wert von [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) bestimmt, ob die Änderungen sofort mit Änderung des Wertes zu `false` angekündigt werden oder ob die unterstützende Technologie wartet, bis die aktuelle Aufgabe abgeschlossen ist, bevor der Benutzer unterbrochen wird.

### Innerhalb eines `feed`

Wenn ein Element mit der Rolle [`feed`](/de/docs/Web/Accessibility/ARIA/Roles/feed_role) `aria-busy` auf `true` gesetzt hat, werden die Rendering-Änderungen, die innerhalb des Feeds auftreten, nicht angekündigt, mit Ausnahme von benutzerinitiierten Änderungen.

### Innerhalb eines `widget`

Wenn Änderungen an einem gerenderten Widget einen Zustand erzeugen würden, bei dem das Widget während der Skriptausführung erforderliche eigene Elemente fehlen, setzen Sie `aria-busy` während des Update-Prozesses auf `true`. Beispielsweise, wenn ein gerendertes Baumraster mehrere Zweige aktualisiert, die nicht unbedingt gleichzeitig gerendert werden, wäre eine Alternative zum Ersetzen des gesamten Baums in einem einzigen Update, den Baum als beschäftigt zu markieren, während jeder der Zweige modifiziert wird.

## Werte

- false (Standard):
  - : Es werden keine Updates für das Element erwartet.
- true
  - : Das Element wird aktualisiert.

## Zugehörige Schnittstellen

- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Die [`ariaBusy`](/de/docs/Web/API/Element/ariaBusy)-Eigenschaft, die Teil der Schnittstelle jedes Elements ist, spiegelt den Wert des `aria-busy`-Attributs wider, welches anzeigt, ob ein Element modifiziert wird.

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

- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)
