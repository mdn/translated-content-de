---
title: Enumerated
slug: Glossary/Enumerated
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{GlossarySidebar}}

In der Informatik ist ein **enumerierter** Typ ein Datentyp, der aus einer begrenzten Menge benannter Werte besteht.

## HTML aufgezählte Attribute

In HTML sind [aufgezählte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einer begrenzten, vordefinierten Menge von Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

Jedes aufgezählte Attribut hat einen Standardwert, wenn das Attribut ohne Wert vorhanden ist (der Wert fehlt), und einen Standardwert, wenn dem Attribut ein ungültiger Wert zugewiesen wird. Im Gegensatz zu {{Glossary("Boolean/HTML", "Boolean-Attributen")}} in HTML — die immer wahr sind, wenn das Attribut vorhanden ist, unabhängig davon, ob der Wert vorhanden, weggelassen oder ungültig ist — kann bei aufgezählten HTML-Attributen der Standard für einen fehlenden Wert ein anderer sein als der Standard für ungültige Werte. Beispielsweise hat das globale HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zwei gültige Schlüsselwörter: `true` und `false`. Wenn das Attribut vorhanden ist, aber kein Wert gesetzt ist, beträgt der Wert `true`. Wenn ein Wert gesetzt, aber ungültig ist, wie `contenteditable="contenteditable"`, wird der Wert einem dritten Zustand, `inherit`, zugeordnet.

## ARIA aufgezählte Attribute

ARIA-Zustände und -Eigenschaften, als Bestandteil von HTML, haben ebenfalls aufgezählte Attribute. Wenn ein ARIA-Attribut sowohl einen `true` als auch einen `false` Wert in der aufgezählten Liste enthält, behandelt es ein ausgelassenes Attribut im Allgemeinen als `false` und einen ungültigen Wert als `true`, während der Standardwert für die leere Zeichenfolge oder den ausgelassenen Wert vom Attribut abhängt.

Zum Beispiel akzeptiert das `aria-current` Attribut eine begrenzte Liste von Werten, die `page`, `step`, `location`, `date`, `time`, `true` und `false` umfasst. In diesem Fall, wenn das Attribut nicht vorhanden ist, eine leere Zeichenfolge ist, ohne Wert vorhanden ist, oder auf `aria-current="false"` gesetzt ist, ist das Attribut false und wird dem Benutzer nicht angezeigt. Jeder nicht-leere Zeichenfolgenwert, der nicht in der Liste der aufgezählten Werte enthalten ist, wird so behandelt, als wäre `aria-current="true"` gesetzt.

## JavaScript aufzählbare Eigenschaften

In JavaScript sind aufzählbare Eigenschaften jene Eigenschaften, deren internes Aufzählen-Flag auf true gesetzt ist, was der Standard für Eigenschaften ist, die durch einfache Zuweisung oder durch eine Eigenschaftsinitialisierung erstellt wurden. Die meisten Iterationsmechanismen (wie [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

## Siehe auch

- {{Glossary("Boolean", "Boolean")}}
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [aufgezählte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) im HTML-Standard
