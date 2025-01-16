---
title: "URL: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URL/pathname
l10n:
  sourceCommit: bfb5a7ebb1aeafd70025723a495cdfdba412a802
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`pathname`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces repräsentiert einen Ort in einer hierarchischen Struktur. Sie ist ein String, der aus einer Liste von Pfadsegmenten konstruiert wird, von denen jedes mit einem `/`-Zeichen vorangestellt wird.

HTTPS-, HTTP- oder andere URLs mit [hierarchischen Schemata](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (die der URL-Standard als "[besondere Schemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet) haben immer mindestens ein (unsichtbares) Pfadsegment: den leeren String. Der `pathname`-Wert für solche URLs hat daher immer mindestens ein `/`-Zeichen.

Für nicht-hierarchische Schemata, wenn die URL keine Pfadsegmente hat, ist der Wert ihrer `pathname`-Eigenschaft der leere String.

## Wert

Ein String.

## Beispiele

### Pfadname mit unsichtbarem Segment

Die untenstehende URL hat nur ein Pfadsegment, den leeren String. Der `pathname`-Wert wird durch ein vorangestelltes `/`-Zeichen zum leeren String konstruiert.

```js
const url = new URL("https://developer.mozilla.org");
console.log(url.pathname); // Logs "/"
```

### Pfadname mit Abfrageparametern

Das folgende Beispiel zeigt den Pfadnamen für eine HTTPS-URL mit Abfrageparametern.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // Logs "/en-US/docs/Web/API/URL/pathname"
```

Die Abfrageparameter sind nicht Bestandteil des Pfades. Beachten Sie, dass einige Systeme die Zeichen `;` und `=` verwenden, um Parameter und Parameterwerte für ein Pfadsegment zu trennen. Zum Beispiel könnte ein System bei der URL `https://example.org/users;id=42/tasks;state=open?sort=modified` die Pfadsegmentparameter `id=42` und `state=open` aus den Pfadsegmenten `users;id=42` und `tasks;state=open` extrahieren und verwenden.

### Pfadname mit einem Slug

Einige Systeme definieren den Begriff _Slug_ als das letzte Segment eines nicht-leeren Pfades, wenn es eine Seite in menschenlesbaren Schlüsselwörtern identifiziert. Beispielsweise hat die untenstehende URL den Slug `this-that-other-outre-collection`.

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
