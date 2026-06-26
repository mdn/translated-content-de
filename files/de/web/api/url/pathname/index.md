---
title: "URL: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URL/pathname
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`pathname`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces repräsentiert eine Position in einer hierarchischen Struktur. Sie ist ein String, der aus einer Liste von Pfadsegmenten konstruiert ist, von denen jedes durch ein `/`-Zeichen vorangestellt ist.

HTTPS-, HTTP- oder andere URLs mit [hierarchischen Schemata](https://www.rfc-editor.org/info/rfc3986/#section-1.2.3) (die im URL-Standard als "[besondere Schemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet werden) haben immer mindestens ein (unsichtbares) Pfadsegment: den leeren String. Der `pathname`-Wert für solche URLs enthält daher immer wenigstens ein `/`-Zeichen.

Bei nicht-hierarchischen Schemata ist der `pathname` als _opaker Pfad_ bekannt (das bedeutet, der URL-Parser versucht nicht, ihn in eine Liste von Segmenten zu zerlegen). In diesem Fall führt ein leerer Pfad dazu, dass die `pathname`-Eigenschaft der leere String ist. Nachgestellte Leerzeichen in opaken Pfaden werden während der anfänglichen Analyse entfernt, wenn `hash` und `search` beide leer sind; andernfalls werden sie als `%20` Prozent-codiert, auch wenn `hash` und `search` später auf leere Strings gesetzt werden.

> [!NOTE]
> Die Prozent-Codierung von nachgestellten Leerzeichen in opaken Pfaden ist nicht weit verbreitet implementiert. Einige Browser implementieren das alte Verhalten, bei dem nachgestellte Leerzeichen aus `pathname` entfernt werden, wenn die `hash`- und `search`-Eigenschaften beide leere Strings sind. In diesen Browsern kann das Setzen von `hash` oder `search` auch den `pathname` ändern. In noch älteren Browsern bleibt das nachgestellte Leerzeichen nach dem Entfernen von hash und search bestehen, was dazu führt, dass die [Serialisierung und das Parsen nicht zu einem Round-Trip führen](#pathname_mit_opakem_pfad).

## Wert

Ein String.

## Beispiele

### Pathname mit unsichtbarem Segment

Die untenstehende URL hat nur ein Pfadsegment, den leeren String. Der `pathname`-Wert wird konstruiert, indem ein `/`-Zeichen dem leeren String vorangestellt wird.

```js
const url = new URL("https://developer.mozilla.org");
console.log(url.pathname); // Logs "/"
```

### Pathname mit Abfrageparametern

Das folgende Beispiel zeigt den `pathname` für eine HTTPS-URL mit Abfrageparametern.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value",
);
console.log(url.pathname); // Logs "/en-US/docs/Web/API/URL/pathname"
```

Die Abfrageparameter sind nicht Teil des Pfades. Beachten Sie, dass einige Systeme die `;`- und `=`-Zeichen verwenden, um Parameter und Parameterwerte zu trennen, die auf ein Pfadsegment anwendbar sind. Zum Beispiel könnte ein System mit der URL `https://example.org/users;id=42/tasks;state=open?sort=modified` die Pfadsegment-Parameter `id=42` und `state=open` aus den Pfadsegmenten `users;id=42` und `tasks;state=open` extrahieren und verwenden.

### Pathname mit einem Slug

Einige Systeme definieren den Begriff _Slug_ als das letzte Segment eines nicht-leeren Pfades, wenn es eine Seite mit menschenlesbaren Schlüsselwörtern identifiziert. Zum Beispiel hat die untenstehende URL den Slug `this-that-other-outre-collection`.

```js
const url = new URL(
  "https://example.org/articles/this-that-other-outre-collection",
);
console.log(url.pathname); // Logs "/articles/this-that-other-outre-collection"
```

### Pathname mit opakem Pfad

Wenn die URL ein nicht-hierarchisches Schema verwendet, verhält sich die `pathname`-Eigenschaft etwas anders. Das folgende Beispiel zeigt eine `data:`-URL ohne Pfad, in welchem Fall der `pathname` der leere String ist.

```js
const url = new URL("data:");
console.log(JSON.stringify(url.pathname)); // ""
```

Browser entfernen während der anfänglichen Analyse immer nachgestellte Leerzeichen aus `pathname`, wenn es keinen hash oder search gibt.

```js
const url = new URL("data:text/plain,Hello ");
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello"
```

Ist der hash oder search während der anfänglichen Analyse nicht leer, wird das nachgestellte Leerzeichen entweder beibehalten (altes Verhalten) oder Prozent-codiert (neues Verhalten).

```js
const url = new URL("data:text/plain,Hello #frag");
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello " (old) or "text/plain,Hello%20" (new)
```

Wenn sie später auf leere Strings gesetzt werden, wird das nachgestellte Leerzeichen entweder entfernt (altes Verhalten) oder bleibt Prozent-codiert (neues Verhalten).

```js
const url = new URL("data:text/plain,Hello #frag");
url.hash = "";
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello" (old) or "text/plain,Hello%20" (new)
```

Beide Verhaltensweisen sorgen dafür, dass das Serialisieren und das Parsen der URL zu einem Round-Trip führen; das heißt, `new URL(url.href).href` ist immer gleich `url.href`. Wenn das nachgestellte Leerzeichen nach dem Entfernen des hash unverändert bleibt, würde `new URL()` es entfernen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
