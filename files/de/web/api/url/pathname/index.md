---
title: "URL: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URL/pathname
l10n:
  sourceCommit: 12477d7c98fbbacae4c07afa39505990640b33d2
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`pathname`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle repräsentiert eine Position in einer hierarchischen Struktur. Es handelt sich um einen String, der aus einer Liste von Pfadsegmenten besteht, von denen jedes mit einem `/`-Zeichen vorangestellt wird.

HTTPS-, HTTP- oder andere URLs mit [hierarchischen Schemata](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (die der URL-Standard als "[besondere Schemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet) haben immer mindestens ein (unsichtbares) Pfadsegment: den leeren String.
Der `pathname`-Wert solcher URLs wird daher immer mindestens ein `/`-Zeichen enthalten.

Bei nicht-hierarchischen Schemata, wenn die URL keine Pfadsegmente hat, ist der Wert ihrer `pathname`-Eigenschaft der leere String.

## Wert

Ein String.

## Beispiele

### Pfadname mit unsichtbarem Segment

Die nachfolgende URL hat nur ein Pfadsegment, den leeren String.
Der `pathname`-Wert wird durch Voranstellen eines `/`-Zeichens an den leeren String konstruiert.

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

Die Abfrageparameter sind nicht Teil des Pfades.
Beachten Sie, dass einige Systeme die `;`- und `=`-Zeichen verwenden, um Parameter und Parameterwerte, die auf ein Pfadsegment anwendbar sind, zu trennen.
Zum Beispiel könnte ein System bei der URL `https://example.org/users;id=42/tasks;state=open?sort=modified` die Pfadsegmentparameter `id=42` und `state=open` aus den Pfadsegmenten `users;id=42` und `tasks;state=open` extrahieren und verwenden.

### Pfadname mit einem Slug

Einige Systeme definieren den Begriff _Slug_ als das letzte Segment eines nicht-leeren Pfades, wenn es eine Seite in leicht lesbaren Schlüsselwörtern identifiziert.
Zum Beispiel hat die folgende URL den Slug `this-that-other-outre-collection`.

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

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
