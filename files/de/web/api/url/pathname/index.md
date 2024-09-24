---
title: "URL: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URL/pathname
l10n:
  sourceCommit: 12477d7c98fbbacae4c07afa39505990640b33d2
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`pathname`**-Eigenschaft des {{domxref("URL")}} Schnittstellen repräsentiert einen Ort in einer hierarchischen Struktur. Es handelt sich um einen String, der aus einer Liste von Pfadsegmenten besteht, von denen jedes durch ein `/`-Zeichen vorangestellt wird.

HTTPS-, HTTP- oder andere URLs mit [hierarchischen Schemata](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (die der URL-Standard als "[spezielle Schemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet) haben immer mindestens ein (unsichtbares) Pfadsegment: den leeren String.
Der `pathname`-Wert für solche URLs wird daher immer mindestens ein `/`-Zeichen enthalten.

Für nicht-hierarchische Schemata gilt: Wenn die URL keine Pfadsegmente hat, wird der Wert ihrer `pathname`-Eigenschaft der leere String sein.

## Wert

Ein String.

## Beispiele

### Pfadname mit unsichtbarem Segment

Die unten stehende URL hat nur ein Pfadsegment, den leeren String.
Der `pathname`-Wert wird durch Voranstellen eines `/`-Zeichens an den leeren String konstruiert.

```js
const url = new URL("https://developer.mozilla.org");
console.log(url.pathname); // Gibt "/" aus
```

### Pfadname mit Abfrageparametern

Das unten stehende Beispiel zeigt den Pfadnamen für eine HTTPS-URL mit Abfrageparametern.

```js
const url = new URL(
  "https://developer.mozilla.org/de/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // Gibt "/de/docs/Web/API/URL/pathname" aus
```

Die Abfrageparameter sind nicht Teil des Pfades.
Beachten Sie, dass einige Systeme die Zeichen `;` und `=` verwenden, um Parameter und Parameterwerte zu begrenzen, die auf ein Pfadsegment anwendbar sind.
Zum Beispiel könnte ein System bei der URL `https://example.org/users;id=42/tasks;state=open?sort=modified` die Pfadsegmentparameter `id=42` und `state=open` aus den Pfadsegmenten `users;id=42` und `tasks;state=open` extrahieren und verwenden.

### Pfadname mit einem Slug

Einige Systeme definieren den Begriff _Slug_ als das endgültige Segment eines nicht-leeren Pfades, wenn es eine Seite in menschenlesbaren Schlüsselwörtern identifiziert.
Zum Beispiel hat die unten stehende URL den Slug `this-that-other-outre-collection`.

```js
const url = new URL(
  "https://example.org/articles/this-that-other-outre-collection",
);
console.log(url.pathname); // Gibt "/articles/this-that-other-outre-collection" aus
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}} Schnittstelle, zu der sie gehört.
