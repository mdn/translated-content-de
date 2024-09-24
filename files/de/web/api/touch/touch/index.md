---
title: "Touch: Touch() Konstruktor"
short-title: Touch()
slug: Web/API/Touch/Touch
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("Touch Events")}}

Der **`Touch()`** Konstruktor erstellt ein neues {{domxref("Touch")}}-Objekt.

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
      - : Ein {{domxref("EventTarget")}}-Objekt, das Element, bei dem der Berührungspunkt begann, als er zuerst auf die Oberfläche gelegt wurde.
    - `clientX` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `double`, das ist die horizontale Position der Berührung im Client-Fenster des Bildschirms des Benutzers, ohne jeglichen Scroll-Offset.
    - `clientY` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `double`, das ist die vertikale Position der Berührung im Client-Fenster des Bildschirms des Benutzers, ohne jeglichen Scroll-Offset.
    - `screenX` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `double`, das ist die horizontale Position der Berührung auf dem Bildschirm des Benutzers.
    - `screenY` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `double`, das ist die vertikale Position der Berührung auf dem Bildschirm des Benutzers.
    - `pageX` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `double`, das ist die horizontale Position der Berührung im Client-Fenster des Bildschirms des Benutzers, einschließlich jeglichen Scroll-Offsets.
    - `pageY` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `double`, das ist die vertikale Position der Berührung im Client-Fenster des Bildschirms des Benutzers, einschließlich jeglichen Scroll-Offsets.
    - `radiusX` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `float`, das ist der Radius der Ellipse, die den Berührungsbereich (z.B. Finger, Stift) entlang der durch rotationAngle angezeigten Achse am engsten umschreibt, in CSS-Pixeln derselben Skala wie screenX; `0`, wenn kein Wert bekannt ist. Der Wert darf nicht negativ sein.
    - `radiusY` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `float`, das ist der Radius der Ellipse, die den Berührungsbereich (z.B. Finger, Stift) entlang der Achse, die senkrecht zu der durch rotationAngle angezeigten Achse steht, am engsten umschreibt, in CSS-Pixeln derselben Skala wie screenY; `0`, wenn kein Wert bekannt ist. Der Wert darf nicht negativ sein.
    - `rotationAngle` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `float`, das ist der Winkel (in Grad), um den die durch radiusX und radiusY beschriebene Ellipse im Uhrzeigersinn um ihr Zentrum gedreht wird; `0`, wenn kein Wert bekannt ist. Der Wert muss größer oder gleich `0` und kleiner als `90` sein. Wenn die durch radiusX und radiusY beschriebene Ellipse kreisförmig ist, hat rotationAngle keine Wirkung. Der Benutzeragent kann in diesem Fall `0` als Wert verwenden oder einen anderen Wert im zulässigen Bereich. (Zum Beispiel kann der Benutzeragent den rotationAngle-Wert aus dem vorherigen Berührungsereignis verwenden, um plötzliche Änderungen zu vermeiden.).
    - `force` {{optional_inline}}
      - : Standardmäßig `0`, vom Typ `float`, das ist der relative Wert des ausgeübten Drucks, im Bereich von `0` bis `1`, wobei `0` kein Druck und `1` der höchste Druck ist, den das Berührungsgerät erkennen kann; `0`, wenn kein Wert bekannt ist. In Umgebungen, in denen der Druck bekannt ist, können der absolute Druck, der durch das force-Attribut dargestellt wird, und die Empfindlichkeit in Druckstufen variieren.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("TouchEvent")}}, die Schnittstelle der Objekte, die es konstruiert.
