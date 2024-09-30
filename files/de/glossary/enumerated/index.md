---
title: Enumerated
slug: Glossary/Enumerated
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In der Informatik ist ein **enumerierter** Typ ein Datentyp, der aus einer begrenzten Menge benannter Werte besteht.

## HTML eindimensionale Attribute

In HTML sind [eindimensionale Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einem begrenzten, vordefinierten Satz von Textwerten. Zum Beispiel hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

Jedes eindimensionale Attribut hat einen Standardwert für den Fall, dass das Attribut ohne Wert vorhanden ist (der Wert fehlt), und einen Standardwert für den Fall, dass dem Attribut ein ungültiger Wert zugewiesen wird. Im Gegensatz zu [Boolean-Attributen](/de/docs/Glossary/Boolean/HTML) in HTML — die immer wahr sind, wenn das Attribut vorhanden ist, unabhängig davon, ob der Wert vorhanden, weggelassen oder ungültig ist — kann bei eindimensionalen HTML-Attributen der Standardwert für einen fehlenden Wert von dem Standard für ungültige Werte abweichen. Zum Beispiel hat das globale HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zwei gültige Schlüsselwörter: `true` und `false`. Ist das Attribut vorhanden, aber kein Wert gesetzt, ist der Wert `true`. Wenn ein Wert gesetzt, aber ungültig ist, wie `contenteditable="contenteditable"`, wird der Wert auf einen dritten Zustand, `inherit`, abgebildet.

## ARIA eindimensionale Attribute

ARIA-Zustände und -Eigenschaften haben als HTML ebenfalls eindimensionale Attribute. Wenn ein ARIA-Attribut sowohl einen `true`- als auch einen `false`-Wert in der Liste der eindimensionalen Werte enthält, behandelt es ein ausgelassenes Attribut im Allgemeinen als `false` und einen ungültigen Wert als `true`, während der Standard für den leeren String oder fehlende Wert vom Attribut abhängt.

Zum Beispiel akzeptiert das Attribut `aria-current` eine begrenzte Liste von Werten, zu denen `page`, `step`, `location`, `date`, `time`, `true` und `false` gehören. In diesem Fall, wenn das Attribut nicht vorhanden ist, einen leeren String hat, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist, ist das Attribut false und wird dem Benutzer nicht angezeigt. Jeder nicht-leere Zeichenfolgenwert, der nicht in der Liste der eindimensionalen Werte enthalten ist, wird behandelt, als wäre `aria-current="true"` gesetzt.

## JavaScript aufzählbare Eigenschaften

In JavaScript sind aufzählbare Eigenschaften jene Eigenschaften, deren internes "enumerable"-Flag auf true gesetzt ist, was der Standard für über einfache Zuweisung oder über einen Eigenschafts-Initialisierer erstellte Eigenschaften ist. Die meisten Iterationsmechanismen (wie [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

## Siehe auch

- [Boolean](/de/docs/Glossary/Boolean)
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
- [enumerated attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) im HTML-Standard
