---
title: "Touch: Touch() Konstruktor"
short-title: Touch()
slug: Web/API/Touch/Touch
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
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
      - : Ein `long` Wert, der die Identifikationsnummer für den Berührungspunkt darstellt.
    - `target`
      - : Ein [`EventTarget`](/de/docs/Web/API/EventTarget) Objekt, das Element, bei dem der Berührungspunkt begann, als er erstmals auf die Oberfläche gesetzt wurde.
    - `clientX` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `double`, das ist die horizontale Position des Berührungspunkts im Client-Fenster des Bildschirms des Benutzers, ohne jeglichen Scroll-Offset.
    - `clientY` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `double`, das ist die vertikale Position des Berührungspunkts im Client-Fenster des Bildschirms des Benutzers, ohne jeglichen Scroll-Offset.
    - `screenX` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `double`, das ist die horizontale Position des Berührungspunkts auf dem Bildschirm des Benutzers.
    - `screenY` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `double`, das ist die vertikale Position des Berührungspunkts auf dem Bildschirm des Benutzers.
    - `pageX` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `double`, das ist die horizontale Position des Berührungspunkts im Client-Fenster des Bildschirms des Benutzers, einschließlich jeglichem Scroll-Offset.
    - `pageY` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `double`, das ist die vertikale Position des Berührungspunkts im Client-Fenster des Bildschirms des Benutzers, einschließlich jeglichem Scroll-Offset.
    - `radiusX` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `float`, das ist der Radius der Ellipse, die den Berührungsbereich (z.B. Finger, Stift) entlang der durch rotationAngle angegebenen Achse am engsten umschreibt, in CSS-Pixeln im gleichen Maßstab wie screenX; `0` wenn kein Wert bekannt ist. Der Wert darf nicht negativ sein.
    - `radiusY` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `float`, das ist der Radius der Ellipse, die den Berührungsbereich (z.B. Finger, Stift) entlang der Achse, die senkrecht zu der von rotationAngle angegebenen Achse liegt, am engsten umschreibt, in CSS-Pixeln im gleichen Maßstab wie screenY; `0` wenn kein Wert bekannt ist. Der Wert darf nicht negativ sein.
    - `rotationAngle` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `float`, das ist der Winkel (in Grad), um den die durch radiusX und radiusY beschriebene Ellipse im Uhrzeigersinn um ihr Zentrum gedreht ist; `0` wenn kein Wert bekannt ist. Der Wert muss größer oder gleich `0` und kleiner als `90` sein. Wenn die durch radiusX und radiusY beschriebene Ellipse kreisförmig ist, hat rotationAngle keine Auswirkung. Der User-Agent kann `0` als Wert verwenden oder jeden anderen Wert im zulässigen Bereich. (Zum Beispiel kann der User-Agent den rotationAngle-Wert des vorherigen Berührungsereignisses verwenden, um plötzliche Änderungen zu vermeiden.).
    - `force` {{optional_inline}}
      - : Standardmäßig `0`, von Typ `float`, das ist der relative Druckwert, im Bereich von `0` bis `1`, wobei `0` keinen Druck und `1` den höchsten Druckwert darstellt, den das Berührungsgerät erfassen kann; `0` wenn kein Wert bekannt ist. In Umgebung, in denen Druck bekannt ist, kann der absolute Druck, der durch das force-Attribut dargestellt wird, und die Empfindlichkeit in Druckstufen variieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TouchEvent`](/de/docs/Web/API/TouchEvent), das Interface der Objekte, die er konstruiert.
