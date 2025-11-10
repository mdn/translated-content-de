---
title: "Touch: Touch() Konstruktor"
short-title: Touch()
slug: Web/API/Touch/Touch
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Touch Events")}}

Der **`Touch()`** Konstruktor erstellt ein neues [`Touch`](/de/docs/Web/API/Touch) Objekt.

## Syntax

```js-nolint
new Touch(options)
```

### Parameter

- `touchInit`
  - : Ein Objekt mit den folgenden Feldern:
    - `identifier`
      - : Ein `long` Wert, der die Identifikationsnummer für den Berührungspunkt ist.
    - `target`
      - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget) Objekt, das Element, bei dem der Berührungspunkt begann, als er erstmals auf der Oberfläche platziert wurde.
    - `clientX` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, und ist die horizontale Position der Berührung im Anzeigefenster des Nutzers, ohne Berücksichtigung eines Bildlaufversatzes.
    - `clientY` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, und ist die vertikale Position der Berührung im Anzeigefenster des Nutzers, ohne Berücksichtigung eines Bildlaufversatzes.
    - `screenX` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, und ist die horizontale Position der Berührung auf dem Bildschirm des Nutzers.
    - `screenY` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, und ist die vertikale Position der Berührung auf dem Bildschirm des Nutzers.
    - `pageX` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, und ist die horizontale Position der Berührung im Anzeigefenster des Nutzers, inklusive jeglichem Bildlaufversatz.
    - `pageY` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `double`, und ist die vertikale Position der Berührung im Anzeigefenster des Nutzers, inklusive jeglichem Bildlaufversatz.
    - `radiusX` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `float`, und ist der Radius der Ellipse, die den Berührungsbereich (z.B. Finger, Stift) entlang der durch rotationAngle angegebenen Achse am nächsten beschreibt, in CSS-Pixeln desselben Maßstabs wie screenX; `0`, falls kein Wert bekannt ist. Der Wert darf nicht negativ sein.
    - `radiusY` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `float`, und ist der Radius der Ellipse, die den Berührungsbereich (z.B. Finger, Stift) entlang der Achse beschreibt, die senkrecht zu der durch rotationAngle angegebenen Achse ist, in CSS-Pixeln desselben Maßstabs wie screenY; `0`, falls kein Wert bekannt ist. Der Wert darf nicht negativ sein.
    - `rotationAngle` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `float`, und ist der Winkel (in Grad), um den die durch radiusX und radiusY beschriebene Ellipse im Uhrzeigersinn um ihr Zentrum gedreht ist; `0`, falls kein Wert bekannt ist. Der Wert muss größer oder gleich `0` und kleiner als `90` sein. Wenn die durch radiusX und radiusY beschriebene Ellipse kreisförmig ist, hat rotationAngle keine Wirkung. Der Benutzeragent kann `0` als Wert in diesem Fall verwenden, oder er kann jeden anderen Wert im erlaubten Bereich verwenden. (Zum Beispiel kann der Benutzeragent den rotationAngle-Wert aus dem vorherigen Berührungsereignis verwenden, um plötzliche Änderungen zu vermeiden.)
    - `force` {{optional_inline}}
      - : Standardwert ist `0`, vom Typ `float`, und ist der relative Wert des ausgeübten Drucks, im Bereich von `0` bis `1`, wobei `0` keinen Druck darstellt und `1` den höchsten Druckpegel darstellt, den das Berührungsgerät erkennen kann; `0`, falls kein Wert bekannt ist. In Umgebungen, in denen die Kraft bekannt ist, können der absolute Druck, der durch das force-Attribut dargestellt wird, und die Empfindlichkeit gegenüber Druckstufen variieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TouchEvent`](/de/docs/Web/API/TouchEvent), die Schnittstelle der Objekte, die er konstruiert.
