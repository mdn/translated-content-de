---
title: Aufzählungen
slug: Glossary/Enumerated
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{GlossarySidebar}}

In der Informatik ist ein **aufgezählter** Typ ein Datentyp, der aus einer begrenzten Menge benannter Werte besteht.

## HTML aufgezählte Attribute

In HTML sind [Aufgezählte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einer begrenzten, vordefinierten Menge von Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

Jedes aufgezählte Attribut hat einen Standardwert, wenn das Attribut ohne Wert vorhanden ist (der Wert fehlt), und einen Standardwert, wenn dem Attribut ein ungültiger Wert zugewiesen wird. Im Gegensatz zu {{Glossary("Boolean/HTML", "Booleschen Attributen")}} bei HTML-Attributen — die immer wahr sind, wenn das Attribut vorhanden ist, unabhängig davon, ob der Wert vorhanden, weggelassen oder ungültig ist — kann der Standardwert bei aufgezählten HTML-Attributen für einen weggelassenen Wert von dem für ungültige Werte abweichen. Zum Beispiel hat das globale HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) zwei gültige Schlüsselwörter: `true` und `false`. Wenn das Attribut vorhanden ist, aber kein Wert festgelegt wird, ist der Wert `true`. Wenn ein Wert festgelegt wird, der jedoch ungültig ist, wie etwa `contenteditable="contenteditable"`, wird der Wert einem dritten Zustand zugeordnet: `inherit`.

## ARIA aufgezählte Attribute

ARIA-Zustände und -Eigenschaften, die HTML sind, verfügen ebenfalls über aufgezählte Attribute. Wenn ein ARIA-Attribut sowohl einen `true`- als auch einen `false`-Wert in der aufgezählten Liste enthält, behandelt es in der Regel ein weggelassenes Attribut als `false` und einen ungültigen Wert als `true`, während der Standardwert für die leere Zeichenkette oder den weggelassenen Wert vom Attribut abhängt.

Zum Beispiel akzeptiert das `aria-current`-Attribut eine begrenzte Liste von Werten, die `page`, `step`, `location`, `date`, `time`, `true` und `false` umfasst. In diesem Fall, wenn das Attribut nicht vorhanden ist, eine leere Zeichenkette ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt wird, ist das Attribut false und wird dem Benutzer nicht angezeigt. Jeder nicht-leere Zeichenfolgenwert, der nicht in der Liste der aufgezählten Werte enthalten ist, wird behandelt, als wäre `aria-current="true"` gesetzt.

## JavaScript aufzählbare Eigenschaften

In JavaScript sind aufzählbare Eigenschaften diejenigen Eigenschaften, deren interne aufzählbare Flagge auf true gesetzt ist, was der Standard für Eigenschaften ist, die durch einfache Zuweisung oder durch einen Eigenschafts-Initializer erstellt wurden. Die meisten Iterationsmechanismen (wie [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

## Siehe auch

- {{Glossary("Boolean", "Boolean")}}
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [Aufgezählte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) im HTML-Standard
