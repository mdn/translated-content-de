---
title: "URL: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URL/pathname
l10n:
  sourceCommit: 12477d7c98fbbacae4c07afa39505990640b33d2
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`pathname`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces repräsentiert einen Ort in einer hierarchischen Struktur. Es ist ein Zeichenfolgenwert, der aus einer Liste von Pfadsegmenten besteht, von denen jedes durch ein `/`-Zeichen vorangestellt ist.

HTTPS-, HTTP- oder andere URLs mit [hierarchischen Schemata](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (die der URL-Standard als "[spezielle Schemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet) haben immer mindestens ein (unsichtbares) Pfadsegment: die leere Zeichenfolge.
Der `pathname`-Wert für solche URLs hat daher immer mindestens ein `/`-Zeichen.

Für nicht-hierarchische Schemata gilt: Wenn die URL keine Pfadsegmente hat, ist der Wert ihrer `pathname`-Eigenschaft die leere Zeichenfolge.

## Wert

Eine Zeichenfolge.

## Beispiele

### Pathname mit unsichtbarem Segment

Die untenstehende URL hat nur ein Pfadsegment, die leere Zeichenfolge.
Der `pathname`-Wert wird durch Voranstellen eines `/`-Zeichens zur leeren Zeichenfolge konstruiert.

```js
const url = new URL("https://developer.mozilla.org");
console.log(url.pathname); // Logs "/"
```

### Pathname mit Abfrageparametern

Das folgende Beispiel zeigt den pathname für eine HTTPS-URL mit Abfrageparametern.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // Logs "/en-US/docs/Web/API/URL/pathname"
```

Die Abfrageparameter sind nicht Teil des Pfades.
Beachten Sie, dass einige Systeme die Zeichen `;` und `=` verwenden, um Parameter und Parameterwerte zu trennen, die auf ein Pfadsegment anwendbar sind.
Beispielsweise könnte ein System bei der URL `https://example.org/users;id=42/tasks;state=open?sort=modified` die Pfadsegmentparameter `id=42` und `state=open` aus den Pfadsegmenten `users;id=42` und `tasks;state=open` extrahieren und verwenden.

### Pathname mit einem Slug

Einige Systeme definieren den Begriff _Slug_ als das letzte Segment eines nicht-leeren Pfades, wenn es eine Seite in menschenlesbaren Schlüsselwörtern identifiziert.
Zum Beispiel hat die untenstehende URL den Slug `this-that-other-outre-collection`.

```js
const url = new URL(
  "https://example.org/articles/this-that-other-outre-collection",
);
console.log(url.pathname); // Logs "/articles/this-that-other-outre-collection"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
