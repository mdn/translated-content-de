---
title: Aufgezählte
slug: Glossary/Enumerated
l10n:
  sourceCommit: 1d5f6ed5785d8a222ea9cfb0a4d9bd6c941e01d8
---

In der Informatik ist ein **aufgezählter** Typ ein Datentyp, der aus einer begrenzten Menge benannter Werte besteht.

## HTML-Aufzählungsattribute

In HTML sind [aufgezählte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) Attribute mit einer begrenzten, vordefinierten Menge von Textwerten. Beispielsweise hat das globale HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) drei gültige Werte: `ltr`, `rtl` und `auto`. Wie bei HTML-Tag-Namen sind HTML-Aufzählungsattribute und deren Werte nicht zwischen Groß- und Kleinschreibung unterscheidend, sodass `LTR`, `RTL` und `AUTO` ebenfalls funktionieren. Die durch IDL reflektierte Eigenschaft, [`HTMLElement.dir`](/de/docs/Web/API/HTMLElement/dir), kann ebenfalls mit einem wertunabhängigen Wert gesetzt werden, gibt aber immer das kanonische Format des in der Spezifikation definierten Wertes zurück (in diesem Beispiel kleingeschriebene Werte). Weitere Informationen finden Sie unter [Attributreflexion](/de/docs/Web/API/Document_Object_Model/Reflected_attributes).

Jedes aufgezählte Attribut hat einen Standardwert, wenn das Attribut vorhanden ist, aber keinen Wert hat (der Wert fehlt) und einen Standardwert, wenn dem Attribut ein ungültiger Wert zugewiesen wird. Im Gegensatz zu {{Glossary("Boolean/HTML", "Boolean-Attributen")}} in HTML — die immer wahr sind, wenn das Attribut vorhanden ist, unabhängig davon, ob der Wert vorhanden, ausgelassen oder ungültig ist — kann bei aufgezählten HTML-Attributen der Standardwert für einen ausgelassenen Wert von dem Standardwert für ungültige Werte abweichen. Zum Beispiel hat das globale HTML-Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) zwei gültige Schlüsselwörter: `true` und `false`. Ist das Attribut vorhanden, aber es ist kein Wert festgelegt, ist der Wert `true`. Wenn ein Wert festgelegt ist, aber ungültig ist, wie `contenteditable="contenteditable"`, wird der Wert einer dritten Zustandskategorie zugeordnet, `inherit`.

## ARIA-Aufzählungsattribute

Da ARIA-Zustände und -Eigenschaften Teil von HTML sind, haben sie ebenfalls aufgezählte Attribute. Wenn ein ARIA-Attribut sowohl einen `true`- als auch einen `false`-Wert in der aufgezählten Liste enthält, behandelt es ein ausgelassenes Attribut im Allgemeinen als `false` und einen ungültigen Wert als `true`, während der Standardwert für den leeren String oder einen ausgelassenen Wert vom Attribut abhängt.

Beispielsweise akzeptiert das `aria-current`-Attribut eine begrenzte Liste von Werten, zu denen `page`, `step`, `location`, `date`, `time`, `true` und `false` gehören. In diesem Fall ist das Attribut, wenn es nicht vorhanden ist, ein leerer String ist, vorhanden ist, aber keinen Wert hat oder auf `aria-current="false"` gesetzt ist, `false` und wird dem Benutzer nicht angezeigt. Jeder nicht-leere String-Wert, der nicht in der Liste der aufgezählten Werte enthalten ist, wird so behandelt, als wäre `aria-current="true"` gesetzt.

## JavaScript aufzählbare Eigenschaften

In JavaScript sind aufzählbare Eigenschaften solche Eigenschaften, deren internes aufzählbares Flag auf true gesetzt ist, was der Standard für Eigenschaften ist, die durch einfache Zuweisung oder durch einen Eigenschaftsinitialisierer erstellt werden. Die meisten Iterationsmechanismen (wie z.B. [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Schleifen und [`Object.keys`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) besuchen nur aufzählbare Schlüssel.

## Siehe auch

- {{Glossary("Boolean", "Boolean")}}
- [JavaScript-Datentypen und Datenstrukturen](/de/docs/Web/JavaScript/Guide/Data_structures)
- [aufgezählte Attribute](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) im HTML-Standard
- [Attributreflexion](/de/docs/Web/API/Document_Object_Model/Reflected_attributes)
