---
title: Aufgezählt
slug: Glossary/Enumerated
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In der Informatik ist ein **aufgezählter** Typ ein Datentyp, der aus einer begrenzten Menge benannter Werte besteht.

## HTML aufzählende Attribute

In HTML sind [aufzählende Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einem begrenzten, vordefinierten Satz von Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

Jedes aufzählende Attribut hat einen Standardwert, wenn das Attribut ohne Wert vorhanden ist (der Wert fehlt), und einen Standardwert, wenn dem Attribut ein ungültiger Wert zugewiesen ist. Im Gegensatz zu {{Glossary("Boolean/HTML", "Boolean-Attributen")}} in HTML — die immer wahr sind, wenn das Attribut vorhanden ist, unabhängig davon, ob der Wert vorhanden, weggelassen oder ungültig ist — kann bei aufzählenden HTML-Attributen der Standardwert für einen ausgelassenen Wert anders sein als der Standardwert für ungültige Werte. Zum Beispiel hat das globale HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zwei gültige Schlüsselwörter: `true` und `false`. Ist das Attribut vorhanden, es wird jedoch kein Wert festgelegt, ist der Wert `true`. Wenn ein Wert gesetzt, aber ungültig ist, wie `contenteditable="contenteditable"`, wird der Wert einem dritten Status zugeordnet, `inherit`.

## ARIA aufzählende Attribute

ARIA-Zustände und -Eigenschaften, die in HTML eingebettet sind, haben ebenfalls aufzählende Attribute. Wenn ein ARIA-Attribut sowohl einen `true` als auch einen `false` Wert in der aufzählenden Liste enthält, wird ein ausgelassenes Attribut im Allgemeinen als `false` behandelt und ein ungültiger Wert als `true`, während der Standardwert für den leeren Zeichenfolgen-Wert oder ausgelassenen Wert vom Attribut abhängt.

Zum Beispiel akzeptiert das Attribut `aria-current` eine begrenzte Liste von Werten, die `page`, `step`, `location`, `date`, `time`, `true` und `false` umfasst. In diesem Fall gilt das Attribut als false und wird dem Benutzer nicht angezeigt, wenn das Attribut nicht vorhanden, eine leere Zeichenfolge ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist. Jeder nicht leere Zeichenfolgenwert, der nicht in der Liste der aufzählenden Werte enthalten ist, wird behandelt, als wäre `aria-current="true"` gesetzt.

## JavaScript aufzählbare Eigenschaften

In JavaScript sind aufzählbare Eigenschaften jene Eigenschaften, deren internes Aufzählungs-Flag auf true gesetzt ist, was standardmäßig für Eigenschaften gilt, die durch einfache Zuweisung oder durch einen Eigenschafteninitialisierer erstellt werden. Die meisten Iterationsmechanismen (wie [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

## Siehe auch

- {{Glossary("Boolean")}}
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
- [aufzählende Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) im HTML-Standard
