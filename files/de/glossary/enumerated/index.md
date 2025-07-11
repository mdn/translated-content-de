---
title: Enumeriert
slug: Glossary/Enumerated
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der Informatik ist ein **enumerierter** Typ ein Datentyp, der aus einer begrenzten Menge benannter Werte besteht.

## HTML enumerierte Attribute

In HTML sind [enumerierte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einer begrenzten, vordefinierten Menge von Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

Jedes enumerierte Attribut hat einen Standardwert für Fälle, in denen das Attribut ohne Wert vorhanden ist (der Wert fehlt) und einen Standardwert für Fälle, in denen dem Attribut ein ungültiger Wert zugewiesen wurde. Im Gegensatz zu {{Glossary("Boolean/HTML", "Boolean-Attributen")}} in HTML — die immer wahr sind, wenn das Attribut vorhanden ist, unabhängig davon, ob der Wert vorhanden, ausgelassen oder ungültig ist — kann der Standardwert bei ausgelassenen Werten von dem bei ungültigen Werten differieren. Zum Beispiel hat das globale HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) zwei gültige Schlüsselwörter: `true` und `false`. Ist das Attribut vorhanden, aber kein Wert gesetzt, ist der Wert `true`. Wird ein Wert gesetzt, ist aber ungültig, wie z. B. `contenteditable="contenteditable"`, wird er einem dritten Zustand zugeordnet, `inherit`.

## ARIA enumerierte Attribute

ARIA-Zustände und -Eigenschaften, als Teil von HTML, haben ebenfalls enumerierte Attribute. Wenn ein ARIA-Attribut sowohl einen `true`- als auch einen `false`-Wert in der enumerierten Liste enthält, wird ein ausgelassenes Attribut in der Regel als `false` und ein ungültiger Wert als `true` behandelt, während der Standardwert für den leeren String oder ausgelassenen Wert vom Attribut abhängt.

Zum Beispiel akzeptiert das `aria-current`-Attribut eine begrenzte Liste von Werten, einschließlich `page`, `step`, `location`, `date`, `time`, `true` und `false`. In diesem Fall ist das Attribut `false` und wird dem Benutzer nicht angezeigt, wenn es nicht vorhanden ist, ein leerer String ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist. Jeder nicht leere String, der nicht in der Liste der enumerierten Werte enthalten ist, wird so behandelt, als ob `aria-current="true"` gesetzt wäre.

## JavaScript aufzählbare Eigenschaften

In JavaScript sind aufzählbare Eigenschaften jene, deren internes aufzählbares Flag auf true gesetzt ist. Dies ist der Standard für Eigenschaften, die durch einfache Zuweisung oder durch einen Eigenschaftsinitialisierer erstellt wurden. Die meisten Iterationsmechanismen (wie [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

## Siehe auch

- {{Glossary("Boolean", "Boolean")}}
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [enumerierte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) im HTML-Standard
