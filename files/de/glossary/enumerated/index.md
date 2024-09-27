---
title: Enumerated
slug: Glossary/Enumerated
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In der Informatik ist ein **enumerated** Typ ein Datentyp, der aus einer begrenzten Menge benannter Werte besteht.

## HTML enumerierte Attribute

In HTML sind [enumerierte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einer begrenzten, vordefinierten Menge von Textwerten. Beispielsweise hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`.

Jedes enumerierte Attribut hat einen Standardwert für den Fall, dass das Attribut ohne Wert vorhanden ist (der Wert fehlt), und einen Standardwert für den Fall, dass dem Attribut ein ungültiger Wert zugewiesen wird. Im Gegensatz zu [Boolean-Attributen](/de/docs/Glossary/Boolean/HTML) von HTML — die immer wahr sind, wenn das Attribut vorhanden ist, unabhängig davon, ob der Wert vorhanden, weggelassen oder ungültig ist — kann bei enumerierten HTML-Attributen der Standardwert bei einem fehlenden Wert von dem Standardwert für ungültige Werte abweichen. Beispielsweise hat das globale HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) zwei gültige Schlüsselwörter: `true` und `false`. Ist das Attribut vorhanden, aber kein Wert gesetzt, ist der Wert `true`. Wenn ein Wert gesetzt ist, aber ungültig ist, wie z.B. `contenteditable="contenteditable"`, wird der Wert einer dritten Zustandsvariante `inherit` zugeordnet.

## ARIA enumerierte Attribute

ARIA-Zustände und -Eigenschaften, die auf HTML basieren, haben ebenfalls enumerierte Attribute. Wenn ein ARIA-Attribut sowohl einen `true`- als auch einen `false`-Wert in der enumerierten Liste enthält, wird ein ausgelassenes Attribut im Allgemeinen als `false` und ein ungültiger Wert als `true` behandelt, während der Standardwert für den leeren String oder ein ausgelassener Wert vom Attribut abhängt.

Beispielsweise akzeptiert das Attribut `aria-current` eine begrenzte Liste von Werten, darunter `page`, `step`, `location`, `date`, `time`, `true` und `false`. In diesem Fall, wenn das Attribut nicht vorhanden ist, ein leerer String ist, ohne Wert vorhanden ist oder auf `aria-current="false"` gesetzt ist, ist das Attribut falsch und wird dem Benutzer nicht angezeigt. Ein beliebiger nicht leerer String-Wert, der nicht in der Liste der enumerierten Werte enthalten ist, wird so behandelt, als ob `aria-current="true"` gesetzt wäre.

## JavaScript aufzählbare Eigenschaften

In JavaScript sind aufzählbare Eigenschaften jene Eigenschaften, bei denen das interne aufzählbare Flag auf true gesetzt ist, was der Standard für Eigenschaften ist, die durch einfache Zuweisung oder über einen Eigenschaftsinitialisierer erstellt wurden. Die meisten Iterationsmechanismen (wie z.B. [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

## Siehe auch

- [Boolean](/de/docs/Glossary/Boolean)
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Data_structures)
- [enumerated attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) im HTML-Standard
