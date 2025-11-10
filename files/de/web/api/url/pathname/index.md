---
title: "URL: pathname-Eigenschaft"
short-title: pathname
slug: Web/API/URL/pathname
l10n:
  sourceCommit: 42cbee255618c5d832bdc163b4e4fb42258cb831
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`pathname`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle stellt einen Ort in einer hierarchischen Struktur dar. Es handelt sich um einen String, der aus einer Liste von Pfadsegmenten konstruiert wird, von denen jedes durch ein `/`-Zeichen vorangestellt ist.

HTTPS-, HTTP- oder andere URLs mit [hierarchischen Schemata](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) (die der URL-Standard als "[special schemes](https://url.spec.whatwg.org/#special-scheme)" bezeichnet) haben immer mindestens ein (unsichtbares) Pfadsegment: den leeren String. Der `pathname`-Wert für solche URLs enthält daher immer mindestens ein `/`-Zeichen.

Für nicht-hierarchische Schemata ist der Pfadname als ein _opaker Pfad_ bekannt (das bedeutet, der URL-Parser versucht nicht, ihn in eine Liste von Segmenten aufzuteilen). In diesem Fall führt ein leerer Pfad dazu, dass die `pathname`-Eigenschaft der leere String ist. Nachgestellte Leerzeichen in opaken Pfaden werden während des ersten Parsens entfernt, wenn `hash` und `search` beide leer sind; andernfalls werden sie als `%20` prozentcodiert, auch wenn `hash` und `search` später auf leere Strings gesetzt werden.

> [!NOTE]
> Die Prozentcodierung von nachgestellten Leerzeichen in opaken Pfaden ist nicht weit verbreitet implementiert. Einige Browser implementieren das alte Verhalten des Entfernens von nachgestellten Leerzeichen aus `pathname`, wenn die `hash`- und `search`-Eigenschaften beide leere Strings sind. In diesen Browsern kann das Setzen von `hash` oder `search` auch den `pathname` ändern. In noch älteren Browsern bleibt das nachgestellte Leerzeichen nach dem Entfernen von hash und search bestehen, was dazu führt, dass [Serialisierung und Parsing nicht zurückrunden](#pfadname_mit_opakem_pfad).

## Wert

Ein String.

## Beispiele

### Pfadname mit unsichtbarem Segment

Die folgende URL hat nur ein Pfadsegment, den leeren String. Der `pathname`-Wert wird durch das Voranstellen eines `/`-Zeichens an den leeren String konstruiert.

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

Die Abfrageparameter sind kein Teil des Pfades. Beachten Sie, dass einige Systeme die `;`- und `=`-Zeichen nutzen, um Parameter und Parameterwerte zu trennen, die auf ein Pfadsegment anwendbar sind. Zum Beispiel könnte ein System bei der URL `https://example.org/users;id=42/tasks;state=open?sort=modified` die Pfadsegmentparameter `id=42` und `state=open` aus den Pfadsegmenten `users;id=42` und `tasks;state=open` extrahieren und nutzen.

### Pfadname mit einem Slug

Einige Systeme definieren den Begriff _Slug_ als das letzte Segment eines nicht-leeren Pfades, wenn es eine Seite in menschenlesbaren Schlüsselwörtern identifiziert. Zum Beispiel hat die folgende URL den Slug `this-that-other-outre-collection`.

```js
const url = new URL(
  "https://example.org/articles/this-that-other-outre-collection",
);
console.log(url.pathname); // Logs "/articles/this-that-other-outre-collection"
```

### Pfadname mit opakem Pfad

Wenn die URL ein nicht-hierarchisches Schema verwendet, verhält sich die `pathname`-Eigenschaft etwas anders. Das folgende Beispiel zeigt eine `data:`-URL ohne Pfad, in welchem Fall der `pathname` der leere String ist.

```js
const url = new URL("data:");
console.log(JSON.stringify(url.pathname)); // ""
```

Browser entfernen während des ersten Parsens immer nachgestellte Leerzeichen aus `pathname`, wenn es kein hash oder search gibt.

```js
const url = new URL("data:text/plain,Hello ");
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello"
```

Wenn jedoch bei der ersten Analyse das hash oder search nicht leer ist, wird das nachgestellte Leerzeichen entweder erhalten (altes Verhalten) oder prozentcodiert (neues Verhalten).

```js
const url = new URL("data:text/plain,Hello #frag");
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello " (old) or "text/plain,Hello%20" (new)
```

Wenn sie später auf leere Strings gesetzt werden, wird das nachgestellte Leerzeichen entweder entfernt (altes Verhalten) oder bleibt prozentcodiert (neues Verhalten).

```js
const url = new URL("data:text/plain,Hello #frag");
url.hash = "";
console.log(JSON.stringify(url.pathname)); // "text/plain,Hello" (old) or "text/plain,Hello%20" (new)
```

Beide Verhaltensweisen stellen sicher, dass das Serialisieren und Parsen der URL eine Rundreise macht; das heißt, `new URL(url.href).href` ist immer gleich `url.href`. Wenn das nachgestellte Leerzeichen nach dem Entfernen des Hashes bestehen bleibt, würde `new URL()` es entfernen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der sie gehört.
